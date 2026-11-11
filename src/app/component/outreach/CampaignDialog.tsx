"use client";

/**
 * CampaignDialog — universal create / edit dialog for outreach campaigns.
 *
 *   <CampaignDialog
 *     open={open}
 *     scope="email"                // "email" | "whatsapp" | "all"
 *     campaignId={editingId}       // omit / null = create, id = edit
 *     onClose={() => setOpen(false)}
 *     onSaved={(campaign, info) => { refreshList(); }}
 *   />
 *
 * Steps: Basics → Templates → Customers → Review.
 * `scope` decides which channels are offered (email page = email only, WhatsApp page = the two WhatsApp channels).
 * When editing a campaign that uses channels outside the scope, those channels stay visible so nothing is silently dropped.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createCampaign, getCampaignById, updateCampaign } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  CAMPAIGN_CHANNELS,
  channelsForScope,
  defaultChannelsForScope,
  type CampaignChannel,
  type CampaignListItem,
  type CampaignPayload,
  type CampaignScope,
  type CampaignStatus,
  type CustomerLite,
  type SelectedCustomers,
  type TemplateKind,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import CustomerSelector from "./CustomerSelector";
import TemplateSelector from "./TemplateSelector";
import { Banner, Field, ICONS, Icon, Spinner, btnPrimary, btnSecondary, cx, focusRing, inputCls } from "./CampaignUi";

export interface CampaignDialogProps {
  open: boolean;
  onClose: () => void;
  onSaved: (campaign: CampaignListItem, info: { removedCustomers: number; mode: "created" | "updated" }) => void;
  campaignId?: string | null;
  scope?: CampaignScope;
}

type Picked = { id: string; name: string };

const STEPS = ["Basics", "Templates", "Customers", "Review"] as const;
const CHANNEL_ICON = { email: ICONS.mail, whatsapp: ICONS.chat, call: ICONS.call } as const;

export default function CampaignDialog(props: CampaignDialogProps) {
  // Unmounting on close resets every field, so each open starts clean.
  if (!props.open) return null;
  return <DialogBody key={props.campaignId ?? "new"} {...props} />;
}

function DialogBody({ scope = "all", campaignId = null, onClose, onSaved }: CampaignDialogProps) {
  const editing = !!campaignId;

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(editing);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [channels, setChannels] = useState<CampaignChannel[]>(() => defaultChannelsForScope(scope));
  const [extraChannels, setExtraChannels] = useState<CampaignChannel[]>([]);
  const [aiAgentId, setAiAgentId] = useState("");
  const [status, setStatus] = useState<CampaignStatus>("active");
  const [emailTpl, setEmailTpl] = useState<Picked | null>(null);
  const [waTpl, setWaTpl] = useState<Picked | null>(null);
  const [tplTab, setTplTab] = useState<TemplateKind>("email");
  const [selected, setSelected] = useState<SelectedCustomers>(new Map());

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const selectedSize = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  /* ───── derived ───── */
  const allowedChannels = useMemo(() => {
    const ids = new Set<CampaignChannel>([...channelsForScope(scope), ...extraChannels]);
    return CAMPAIGN_CHANNELS.filter((c) => ids.has(c.id));
  }, [scope, extraChannels]);

  const wantsEmail = channels.includes("email");
  const wantsWa = channels.some((c) => c.startsWith("whatsapp_"));
  const wantsAi = channels.includes("ai_calling");
  const needsTemplates = wantsEmail || wantsWa;
  const activeTplTab: TemplateKind = wantsEmail && wantsWa ? tplTab : wantsEmail ? "email" : "whatsapp";

  const stepOk = [
    name.trim().length > 0 && channels.length > 0,
    (!wantsEmail || !!emailTpl) && (!wantsWa || !!waTpl),
    selected.size > 0,
    true,
  ];
  const canGoTo = (i: number) => stepOk.slice(0, i).every(Boolean);

  const blocker =
    step === 0
      ? !name.trim()
        ? "Give the campaign a name to continue."
        : channels.length === 0
          ? "Choose at least one channel."
          : null
      : step === 1
        ? wantsEmail && !emailTpl
          ? "Choose an email template to continue."
          : wantsWa && !waTpl
            ? "Choose a WhatsApp template to continue."
            : null
        : step === 2
          ? selected.size === 0
            ? "Select at least one customer to continue."
            : null
          : null;

  const known = [...selected.values()].filter((c): c is CustomerLite => !!c);
  const unknownCount = selected.size - known.length;
  const noEmail = known.filter((c) => !c.Email.trim()).length;
  const noPhone = known.filter((c) => !c.ContactNumber.trim()).length;
  const notRunnable = CAMPAIGN_CHANNELS.filter((c) => channels.includes(c.id) && !c.runnable);

  /* ───── load (edit mode) ───── */
  useEffect(() => {
    if (!campaignId) return;
    let alive = true;
    getCampaignById(campaignId).then((r) => {
      if (!alive) return;
      if (!r.ok) {
        setLoadError(r.error.message);
        setLoading(false);
        return;
      }
      const c = r.data.data;
      setName(c.name);
      setDescription(c.description ?? "");
      setChannels(c.channels);
      setExtraChannels(c.channels);
      setAiAgentId(c.aiAgentId ?? "");
      setStatus(c.status);
      setEmailTpl(c.emailTemplateId ? { id: c.emailTemplateId, name: c.emailTemplate?.name ?? "Selected template" } : null);
      setWaTpl(c.whatsappTemplateId ? { id: c.whatsappTemplateId, name: c.whatsappTemplate?.name ?? "Selected template" } : null);
      selectedSize.current = c.customerIds.length;
      setSelected(new Map<string, CustomerLite | null>(c.customerIds.map((id) => [id, null])));
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [campaignId]);

  /* ───── close handling ───── */
  const requestClose = useCallback(() => {
    if (saving) return;
    if (touched && !window.confirm("Discard your changes to this campaign?")) return;
    onClose();
  }, [saving, touched, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [requestClose]);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, []);

  /* ───── handlers ───── */
  const toggleChannel = (id: CampaignChannel) => {
    setTouched(true);
    setChannels((cur) => (cur.includes(id) ? (cur.length === 1 ? cur : cur.filter((c) => c !== id)) : [...cur, id]));
  };

  const onSelection = useCallback((next: SelectedCustomers) => {
    // picking up names for saved ids keeps the size the same, so it doesn't count as a user change
    if (next.size !== selectedSize.current) setTouched(true);
    selectedSize.current = next.size;
    setSelected(next);
  }, []);

  const save = async () => {
    setSaving(true);
    setError(null);
    const payload: CampaignPayload = {
      name: name.trim(),
      description: description.trim(),
      channels,
      emailTemplateId: wantsEmail ? emailTpl?.id ?? null : null,
      whatsappTemplateId: wantsWa ? waTpl?.id ?? null : null,
      aiAgentId: wantsAi && aiAgentId.trim() ? aiAgentId.trim() : null,
      customerIds: [...selected.keys()],
      status,
    };
    const r = editing && campaignId ? await updateCampaign(campaignId, payload) : await createCampaign(payload);
    setSaving(false);
    if (!r.ok) {
      setError(r.error.message);
      return;
    }
    onSaved(r.data.data, { removedCustomers: r.data.removedCustomers, mode: editing ? "updated" : "created" });
    onClose();
  };

  const next = () => stepOk[step] && setStep((s) => Math.min(STEPS.length - 1, s + 1));

  /* ───── review row ───── */
  const ReviewRow = ({ label, to, children }: { label: string; to: number; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
      <dt className="w-36 shrink-0 text-sm text-slate-500">{label}</dt>
      <dd className="min-w-0 flex-1 break-words text-sm text-slate-900">{children}</dd>
      <button type="button" onClick={() => setStep(to)} className="shrink-0 cursor-pointer self-start text-sm font-medium text-[var(--color-primary-dark)] hover:underline">
        Edit
      </button>
    </div>
  );

  /* ───── render ───── */
  return (
    <div className="fixed inset-0 z-[100] flex items-stretch justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-slate-900/50" onClick={requestClose} aria-hidden="true" />

      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-dialog-title"
        className="relative flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-white shadow-xl outline-none sm:h-[min(92vh,860px)] sm:rounded-2xl"
      >
        {/* header + stepper */}
        <header className="border-b border-slate-200 px-5 pb-3 pt-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="campaign-dialog-title" className="text-lg font-semibold text-slate-900">
                {editing ? "Edit campaign" : "Create campaign"}
              </h2>
              <p className="text-sm text-slate-500">Pick a channel, a template and the customers to reach.</p>
            </div>
            <button type="button" onClick={requestClose} aria-label="Close" className={cx("flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100", focusRing)}>
              <Icon d={ICONS.close} className="h-5 w-5" />
            </button>
          </div>

          <ol className="mt-4 flex flex-wrap gap-2" aria-label="Progress">
            {STEPS.map((label, i) => {
              const done = i < step && stepOk[i];
              const current = i === step;
              const reachable = canGoTo(i);
              return (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => reachable && setStep(i)}
                    disabled={!reachable || loading}
                    aria-current={current ? "step" : undefined}
                    className={cx(
                      "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium",
                      reachable ? "cursor-pointer" : "cursor-not-allowed opacity-50",
                      current
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : done
                          ? "border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]"
                          : "border-slate-300 bg-white text-slate-700"
                    )}
                  >
                    <span className={cx("flex h-5 w-5 items-center justify-center rounded-full text-xs", current ? "bg-white/20" : "bg-slate-100 text-slate-600", done && "!bg-[var(--color-primary)] !text-white")}>
                      {done ? <Icon d={ICONS.check} className="h-3 w-3" /> : i + 1}
                    </span>
                    {label}
                  </button>
                </li>
              );
            })}
          </ol>
        </header>

        {/* body */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {loading && (
            <div className="flex items-center gap-3 py-10 text-sm text-slate-600">
              <Spinner /> Loading campaign…
            </div>
          )}

          {loadError && (
            <div className="space-y-3">
              <Banner tone="error" title="Couldn’t load this campaign">
                {loadError}
              </Banner>
              <button type="button" className={btnSecondary} onClick={onClose}>
                Close
              </button>
            </div>
          )}

          {!loading && !loadError && (
            <>
              {/* ── 1. Basics ── */}
              {step === 0 && (
                <div className="mx-auto max-w-2xl space-y-5">
                  <Field id="cmp-name" label="Campaign name">
                    <input
                      id="cmp-name"
                      className={inputCls}
                      placeholder="e.g. Diwali offer for hot leads"
                      value={name}
                      maxLength={120}
                      onChange={(e) => {
                        setName(e.target.value);
                        setTouched(true);
                      }}
                      autoFocus
                    />
                  </Field>

                  <Field id="cmp-desc" label="Description (optional)" hint={`${description.length}/500`}>
                    <textarea
                      id="cmp-desc"
                      rows={3}
                      className={inputCls}
                      placeholder="What is this campaign for?"
                      value={description}
                      maxLength={500}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        setTouched(true);
                      }}
                    />
                  </Field>

                  <fieldset>
                    <legend className="mb-1.5 text-sm font-medium text-slate-800">Channels</legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {allowedChannels.map((ch) => {
                        const on = channels.includes(ch.id);
                        return (
                          <label
                            key={ch.id}
                            className={cx(
                              "flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-3",
                              on ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)]" : "border-slate-200 bg-white hover:bg-slate-50"
                            )}
                          >
                            <input type="checkbox" className="sr-only" checked={on} onChange={() => toggleChannel(ch.id)} />
                            <span className={cx("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", on ? "bg-[var(--color-primary)] text-white" : "bg-slate-100 text-slate-600")}>
                              <Icon d={CHANNEL_ICON[ch.kind]} />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-900">
                                {ch.label}
                                {!ch.runnable && <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[11px] font-normal text-slate-700">Coming soon</span>}
                              </span>
                              <span className="block text-xs text-slate-500">{ch.description}</span>
                            </span>
                            {on && <Icon d={ICONS.check} className="mt-1 h-4 w-4 shrink-0 text-[var(--color-primary)]" />}
                          </label>
                        );
                      })}
                    </div>
                    {allowedChannels.length > 1 && <p className="mt-1.5 text-xs text-slate-500">One campaign can use several channels. Each customer gets a message on every channel you tick.</p>}
                  </fieldset>

                  {wantsAi && (
                    <Field id="cmp-agent" label="AI agent ID (optional)" hint="Which AI agent should place the calls.">
                      <input id="cmp-agent" className={inputCls} maxLength={100} value={aiAgentId} onChange={(e) => { setAiAgentId(e.target.value); setTouched(true); }} />
                    </Field>
                  )}
                </div>
              )}

              {/* ── 2. Templates ── */}
              {step === 1 && (
                <div className="space-y-4">
                  {!needsTemplates && <Banner tone="info">AI calling doesn’t use message templates. Continue to pick your customers.</Banner>}

                  {wantsEmail && wantsWa && (
                    <div role="tablist" className="flex w-fit rounded-lg border border-slate-300 bg-white p-0.5 text-sm">
                      {(["email", "whatsapp"] as const).map((k) => (
                        <button
                          key={k}
                          type="button"
                          role="tab"
                          aria-selected={activeTplTab === k}
                          onClick={() => setTplTab(k)}
                          className={cx("flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 font-medium", activeTplTab === k ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-slate-100")}
                        >
                          {k === "email" ? "Email template" : "WhatsApp template"}
                          {(k === "email" ? emailTpl : waTpl) && <Icon d={ICONS.check} className="h-3.5 w-3.5" />}
                        </button>
                      ))}
                    </div>
                  )}

                  {needsTemplates && activeTplTab === "email" && wantsEmail && (
                    <TemplateSelector
                      key="email"
                      kind="email"
                      selectedId={emailTpl?.id ?? null}
                      selectedName={emailTpl?.name}
                      onSelect={(t) => { setEmailTpl(t); setTouched(true); }}
                    />
                  )}
                  {needsTemplates && activeTplTab === "whatsapp" && wantsWa && (
                    <TemplateSelector
                      key="whatsapp"
                      kind="whatsapp"
                      selectedId={waTpl?.id ?? null}
                      selectedName={waTpl?.name}
                      onSelect={(t) => { setWaTpl(t); setTouched(true); }}
                    />
                  )}
                </div>
              )}

              {/* ── 3. Customers ── */}
              {step === 2 && <CustomerSelector selected={selected} onChange={onSelection} needsEmail={wantsEmail} needsPhone={wantsWa} />}

              {/* ── 4. Review ── */}
              {step === 3 && (
                <div className="mx-auto max-w-2xl space-y-4">
                  <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white px-4">
                    <ReviewRow label="Name" to={0}>
                      <p className="font-medium">{name.trim()}</p>
                      {description.trim() && <p className="mt-0.5 text-slate-600">{description.trim()}</p>}
                    </ReviewRow>
                    <ReviewRow label="Channels" to={0}>
                      {CAMPAIGN_CHANNELS.filter((c) => channels.includes(c.id)).map((c) => c.label).join(", ")}
                    </ReviewRow>
                    {needsTemplates && (
                      <ReviewRow label="Templates" to={1}>
                        <ul className="space-y-0.5">
                          {wantsEmail && <li>Email: <span className="font-medium">{emailTpl?.name}</span></li>}
                          {wantsWa && <li>WhatsApp: <span className="font-medium">{waTpl?.name}</span></li>}
                        </ul>
                      </ReviewRow>
                    )}
                    <ReviewRow label="Customers" to={2}>
                      <span className="font-medium">{selected.size}</span> selected
                    </ReviewRow>
                  </dl>

                  <Field id="cmp-status" label="Status" hint="Paused campaigns are skipped by the scheduler. You can still run them manually.">
                    <select id="cmp-status" className={inputCls} value={status} onChange={(e) => { setStatus(e.target.value as CampaignStatus); setTouched(true); }}>
                      <option value="active">Active</option>
                      <option value="paused">Paused</option>
                    </select>
                  </Field>

                  <div className="space-y-2">
                    {wantsEmail && noEmail > 0 && <Banner tone="warn">{noEmail} selected customer{noEmail === 1 ? " has" : "s have"} no email address and will be skipped on the email channel.</Banner>}
                    {wantsWa && noPhone > 0 && <Banner tone="warn">{noPhone} selected customer{noPhone === 1 ? " has" : "s have"} no phone number and will be skipped on WhatsApp.</Banner>}
                    {unknownCount > 0 && <Banner tone="info">{unknownCount} customer{unknownCount === 1 ? " was" : "s were"} saved earlier and haven’t been shown in this session. They’re checked against your access when you save.</Banner>}
                    {notRunnable.length > 0 && (
                      <Banner tone="info">{notRunnable.map((c) => c.label).join(" and ")} can be saved now but won’t send yet. Those channels are skipped when the campaign runs.</Banner>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* footer */}
        <footer className="border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
          {error && (
            <div className="mb-3">
              <Banner tone="error">{error}</Banner>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button type="button" className={btnSecondary} onClick={step === 0 ? requestClose : () => setStep((s) => s - 1)} disabled={saving}>
              {step === 0 ? "Cancel" : "Back"}
            </button>
            <p className="order-last w-full text-sm text-slate-500 sm:order-none sm:w-auto sm:flex-1 sm:text-center" aria-live="polite">
              {!loading && !loadError && blocker}
            </p>
            {step < STEPS.length - 1 ? (
              <button type="button" className={btnPrimary} onClick={next} disabled={loading || !!loadError || !stepOk[step]}>
                Next
              </button>
            ) : (
              <button type="button" className={btnPrimary} onClick={save} disabled={saving || loading || !!loadError || !stepOk.every(Boolean)}>
                {saving && <Spinner />}
                {saving ? "Saving…" : editing ? "Save changes" : "Create campaign"}
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}