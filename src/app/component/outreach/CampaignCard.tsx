"use client";

/**
 * CampaignCard — one campaign: channels, templates, customers, schedules, latest run,
 * a "Run now" button with confirmation, live progress (polls every 3s) and Cancel.
 *
 * The card owns its run state, so several campaigns can run at once and a page refresh
 * picks a running campaign back up (it loads the latest run on mount).
 */
import { useEffect, useRef, useState } from "react";
import { cancelCampaignRun, getCampaignRun, getCampaignRuns, runCampaign } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  CAMPAIGN_CHANNELS,
  type CampaignChannel,
  type CampaignListItem,
  type CampaignRun,
  type RunStatus,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";

import { ICONS, Icon, Spinner, btnPrimary, btnSecondary, cx, focusRing } from "./CampaignUi";
import ConfirmModal from "./ConfirmModel";
import CampaignSchedulesPanel from "./CampaignSchedulesPanel";
import CampaignRunsPanel from "./CampaignRunsPanel";

export type Notice = { tone: "success" | "error" | "warn" | "info"; text: string };

interface Props {
  campaign: CampaignListItem;
  onEdit: (id: string) => void;
  onDelete: (c: CampaignListItem) => void;
  onTogglePause: (c: CampaignListItem) => Promise<void>;
  /** called when a run you started here finishes, so the list can refresh counts and "last run" */
  onRunFinished: () => void;
  onNotice: (n: Notice) => void;
  /** called after schedules are added / edited / deleted so the list can refresh the "Schedules" count */
  onSchedulesChanged?: () => void;
}

/* ───────────── constants + helpers ───────────── */

const PLAY = "M6 4l14 8-14 8V4Z";
const PENCIL = "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z";
const PAUSE = "M6 4h4v16H6zM14 4h4v16h-4z";
const DOTS = "M12 5v.01M12 12v.01M12 19v.01";
const STOP = "M6 6h12v12H6z";
const CLOCK = "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2";

const SHORT: Record<CampaignChannel, string> = {
  email: "Email",
  whatsapp_baileys: "WhatsApp",
  whatsapp_meta: "WhatsApp (Meta)",
  ai_calling: "AI calling",
};
const KIND_ICON = { email: ICONS.mail, whatsapp: ICONS.chat, call: ICONS.call } as const;
const info = (id: CampaignChannel) => CAMPAIGN_CHANNELS.find((c) => c.id === id)!;

const RUN_PILL: Record<RunStatus, { label: string; cls: string }> = {
  running: { label: "Running", cls: "bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]" },
  completed: { label: "Completed", cls: "bg-emerald-100 text-emerald-800" },
  failed: { label: "Failed", cls: "bg-red-100 text-red-800" },
  cancelled: { label: "Cancelled", cls: "bg-slate-200 text-slate-700" },
};

/** Cancel sets the status at once, but the worker needs a few seconds to finish: finishedAt marks the real end. */
const isLive = (r: CampaignRun) => r.status === "running" || (r.status === "cancelled" && !r.finishedAt);

const timeAgo = (iso?: string | null) => {
  if (!iso) return "Never";
  const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 45) return "Just now";
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  if (s < 86400 * 7) return `${Math.round(s / 86400)} d ago`;
  return new Date(iso).toLocaleDateString();
};

const totals = (r: CampaignRun) =>
  CAMPAIGN_CHANNELS.reduce(
    (t, c) => {
      const x = r.summary?.[c.id];
      return x ? { sent: t.sent + x.sent, failed: t.failed + x.failed, skipped: t.skipped + x.skipped } : t;
    },
    { sent: 0, failed: 0, skipped: 0 }
  );

/* ───────────── component ───────────── */

export default function CampaignCard({ campaign, onEdit, onDelete, onTogglePause, onRunFinished, onNotice, onSchedulesChanged }: Props) {
  const [panel, setPanel] = useState<null | "schedules" | "runs">(null);
  const [run, setRun] = useState<CampaignRun | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmRun, setConfirmRun] = useState(false);
  const [runBusy, setRunBusy] = useState(false);
  const [runError, setRunError] = useState<string | null>(null);
  const [cancelBusy, setCancelBusy] = useState(false);
  const [toggling, setToggling] = useState(false);

  const runRef = useRef(run);
  runRef.current = run;
  const cb = useRef({ onRunFinished, onNotice });
  cb.current = { onRunFinished, onNotice };
  const polling = useRef(false);

  const live = !!run && isLive(run);
  const paused = campaign.status === "paused";

  /* ───── what can run? ───── */
  const runnable = campaign.channels.filter((c) => info(c).runnable);
  const comingSoon = campaign.channels.filter((c) => !info(c).runnable);
  const wantsEmail = campaign.channels.includes("email");
  const wantsWa = campaign.channels.some((c) => c.startsWith("whatsapp_"));

  const problems: string[] = [];
  if (wantsEmail && !campaign.emailTemplateId) problems.push("The email template was deleted.");
  if (wantsWa && !campaign.whatsappTemplateId) problems.push("The WhatsApp template was deleted.");

  const blockedReason =
    runnable.length === 0
      ? "None of this campaign’s channels can run yet."
      : campaign.customerCount === 0
        ? "This campaign has no customers."
        : problems.length
          ? `${problems.join(" ")} Edit the campaign to choose another.`
          : null;

  const estimate = () => {
    const n = campaign.customerCount;
    const secs = Math.max(runnable.includes("email") ? n * 3 : 0, runnable.includes("whatsapp_baileys") ? n * 5 : 0);
    return secs < 90 ? "under 2 minutes" : `about ${Math.round(secs / 60)} minutes`;
  };

  /* ───── load the latest run (also resumes a run that was started before a page refresh) ───── */
  useEffect(() => {
    if (campaign._count.runs === 0) {
      setRun(null);
      return;
    }
    if (runRef.current && isLive(runRef.current)) return; // local polling already tracks it
    let alive = true;
    getCampaignRuns(campaign.id, { page: 1, limit: 1 }).then((r) => {
      if (alive && r.ok) setRun(r.data.data[0] ?? null);
    });
    return () => {
      alive = false;
    };
  }, [campaign.id, campaign._count.runs, campaign.lastRunAt]);

  /* ───── poll while running ───── */
  useEffect(() => {
    if (!live || !run) return;
    const runId = run.id;
    const tick = async () => {
      if (polling.current) return;
      polling.current = true;
      const r = await getCampaignRun(campaign.id, runId, { limit: 1 });
      polling.current = false;
      if (!r.ok) return; // transient error: try again on the next tick
      setRun(r.data.run);
      if (!isLive(r.data.run)) {
        const t = totals(r.data.run);
        const done = r.data.run;
        cb.current.onNotice(
          done.status === "failed"
            ? { tone: "error", text: `“${campaign.name}” failed. ${done.error ?? "Nothing could be sent."}` }
            : done.status === "cancelled"
              ? { tone: "info", text: `“${campaign.name}” was cancelled after ${t.sent} sent.` }
              : { tone: t.failed ? "warn" : "success", text: `“${campaign.name}” finished: ${t.sent} sent, ${t.failed} failed, ${t.skipped} skipped.` }
        );
        cb.current.onRunFinished();
      }
    };
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [live, run?.id, campaign.id, campaign.name]);

  /* ───── actions ───── */
  const startRun = async () => {
    setRunBusy(true);
    setRunError(null);
    const r = await runCampaign(campaign.id);
    if (r.ok) {
      setRun(r.data.run);
      setConfirmRun(false);
      if (r.data.warning) onNotice({ tone: "info", text: r.data.warning });
    } else if (r.error.status === 409) {
      // already running somewhere else (another tab / the scheduler): attach to it
      const latest = await getCampaignRuns(campaign.id, { page: 1, limit: 1 });
      const current = latest.ok ? latest.data.data[0] : null;
      if (current && isLive(current)) {
        setRun(current);
        setConfirmRun(false);
        onNotice({ tone: "info", text: "This campaign is already running. Showing its progress." });
      } else setRunError(r.error.message);
    } else setRunError(r.error.message);
    setRunBusy(false);
  };

  const cancel = async () => {
    if (!run) return;
    setCancelBusy(true);
    const r = await cancelCampaignRun(campaign.id, run.id);
    setCancelBusy(false);
    if (r.ok) setRun(r.data.run);
    else onNotice({ tone: "error", text: r.error.message });
  };

  const togglePause = async () => {
    setMenuOpen(false);
    setToggling(true);
    await onTogglePause(campaign);
    setToggling(false);
  };

  /* ───── run panel ───── */
  const runPanel = () => {
    if (!run) return <p className="text-sm text-slate-500">Never run. Use “Run now” to send it to everyone in the campaign.</p>;

    const pill = RUN_PILL[run.status];
    const t = totals(run);
    const done = runnable.reduce((n, c) => {
      const x = run.summary?.[c];
      return n + (x ? x.sent + x.failed + x.skipped : 0);
    }, 0);
    const expected = run.totalCustomers * runnable.length;
    const pct = expected ? Math.min(100, Math.round((done / expected) * 100)) : 0;
    const stopping = run.status === "cancelled" && !run.finishedAt;

    return (
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={cx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", pill.cls)}>
              {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current motion-reduce:animate-none" />}
              {stopping ? "Stopping" : pill.label}
            </span>
            <span className="text-xs text-slate-500">
              {run.trigger === "scheduled" ? "Scheduled run" : "Manual run"}, started {timeAgo(run.startedAt)}
            </span>
          </div>
          {live && run.status === "running" && (
            <button
              type="button"
              onClick={cancel}
              disabled={cancelBusy}
              className={cx("inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-red-200 bg-white px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50", focusRing)}
            >
              {cancelBusy ? <Spinner className="h-3 w-3" /> : <Icon d={STOP} className="h-3 w-3" />}
              Cancel run
            </button>
          )}
        </div>

        {live && (
          <div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Run progress">
              <div className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-1 text-xs text-slate-600">
              {stopping ? "Finishing up… " : ""}
              {done} of {expected} processed ({pct}%). Messages are spaced out on purpose to protect your accounts.
            </p>
          </div>
        )}

        <ul className="space-y-1 text-sm">
          {runnable.map((c) => {
            const x = run.summary?.[c];
            return (
              <li key={c} className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                <span className="w-24 text-slate-700">{SHORT[c]}</span>
                <span className="text-emerald-700">{x?.sent ?? 0} sent</span>
                <span className={x?.failed ? "font-medium text-red-600" : "text-slate-500"}>{x?.failed ?? 0} failed</span>
                <span className="text-slate-500">{x?.skipped ?? 0} skipped</span>
              </li>
            );
          })}
        </ul>

        {!live && t.skipped > 0 && <p className="text-xs text-slate-500">Skipped means no email or phone, a duplicate, or the run was cancelled.</p>}
        {!!run.summary?.unavailableCustomers && (
          <p className="text-xs text-amber-700">{run.summary.unavailableCustomers} customer{run.summary.unavailableCustomers === 1 ? " is" : "s are"} no longer available to you and {run.summary.unavailableCustomers === 1 ? "was" : "were"} left out.</p>
        )}
        {run.error && <p className="text-xs text-red-600">{run.error}</p>}
        <button type="button" onClick={() => setPanel("runs")} className={cx("cursor-pointer text-xs font-medium text-[var(--color-primary-darker)] hover:underline", focusRing)}>
          View full report &amp; logs
        </button>
      </div>
    );
  };

  /* ───── render ───── */
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="space-y-4 p-5">
        {/* header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-base font-semibold text-slate-900">{campaign.name}</h3>
              <span className={cx("rounded-full px-2.5 py-0.5 text-xs font-medium", paused ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800")}>
                {paused ? "Paused" : "Active"}
              </span>
            </div>
            {campaign.description && <p className="mt-1 line-clamp-2 text-sm text-slate-600">{campaign.description}</p>}
          </div>

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={`Actions for ${campaign.name}`}
              aria-expanded={menuOpen}
              disabled={toggling}
              className={cx("flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-50", focusRing)}
            >
              {toggling ? <Spinner /> : <Icon d={DOTS} className="h-5 w-5" />}
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} aria-hidden="true" />
                <div className="absolute right-0 z-20 mt-1 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-sm shadow-lg">
                  <button type="button" disabled={live} onClick={() => { setMenuOpen(false); onEdit(campaign.id); }} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
                    <Icon d={PENCIL} /> Edit
                  </button>
                  <button type="button" disabled={live} onClick={togglePause} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
                    <Icon d={paused ? PLAY : PAUSE} /> {paused ? "Resume campaign" : "Pause campaign"}
                  </button>
                  <button type="button" onClick={() => { setMenuOpen(false); setPanel("schedules"); }} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left hover:bg-slate-50">
                    <Icon d={CLOCK} /> Schedules
                  </button>
                  <button type="button" onClick={() => { setMenuOpen(false); setPanel("runs"); }} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left hover:bg-slate-50">
                    <Icon d={ICONS.filter} /> Run history &amp; logs
                  </button>
                  <button type="button" disabled={live} onClick={() => { setMenuOpen(false); onDelete(campaign); }} className="flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
                    <Icon d={ICONS.trash} /> Delete
                  </button>
                  {live && <p className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">Available when the run ends.</p>}
                </div>
              </>
            )}
          </div>
        </div>

        {/* channels */}
        <ul className="flex flex-wrap gap-2" aria-label="Channels">
          {campaign.channels.map((c) => {
            const i = info(c);
            return (
              <li
                key={c}
                title={i.runnable ? i.description : `${i.label} can be saved but doesn’t send yet`}
                className={cx(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
                  i.runnable ? "border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]" : "border-slate-200 bg-slate-50 text-slate-500"
                )}
              >
                <Icon d={KIND_ICON[i.kind]} className="h-3.5 w-3.5" />
                {SHORT[c]}
                {!i.runnable && <span className="font-normal">(soon)</span>}
              </li>
            );
          })}
        </ul>

        {/* numbers */}
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(
            [
              { label: "Customers", value: campaign.customerCount.toLocaleString() },
              { label: "Runs", value: String(campaign._count.runs), open: "runs" as const },
              { label: "Schedules", value: String(campaign._count.schedules), open: "schedules" as const },
              { label: "Last run", value: timeAgo(campaign.lastRunAt) },
            ] as { label: string; value: string; open?: "runs" | "schedules" }[]
          ).map((s) =>
            s.open ? (
              <button
                key={s.label}
                type="button"
                onClick={() => setPanel(s.open!)}
                className={cx("cursor-pointer rounded-lg bg-slate-50 px-3 py-2 text-left hover:bg-[var(--color-primary-lighter)]", focusRing)}
                aria-label={`Open ${s.label.toLowerCase()}`}
              >
                <dt className="text-xs text-slate-500">{s.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-[var(--color-primary-darker)] underline-offset-2 group-hover:underline">{s.value}</dd>
              </button>
            ) : (
              <div key={s.label} className="rounded-lg bg-slate-50 px-3 py-2">
                <dt className="text-xs text-slate-500">{s.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-slate-900">{s.value}</dd>
              </div>
            )
          )}
        </dl>

        {/* templates */}
        {(wantsEmail || wantsWa) && (
          <dl className="space-y-1 text-sm">
            {wantsEmail && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-slate-500">Email</dt>
                <dd className={cx("min-w-0 truncate", campaign.emailTemplate ? "text-slate-900" : "text-red-600")}>{campaign.emailTemplate?.name ?? "Template deleted"}</dd>
              </div>
            )}
            {wantsWa && (
              <div className="flex gap-2">
                <dt className="w-20 shrink-0 text-slate-500">WhatsApp</dt>
                <dd className={cx("min-w-0 truncate", campaign.whatsappTemplate ? "text-slate-900" : "text-red-600")}>{campaign.whatsappTemplate?.name ?? "Template deleted"}</dd>
              </div>
            )}
          </dl>
        )}
      </div>

      {/* run panel */}
      <div className="border-t border-slate-200 bg-slate-50/70 px-5 py-4">{runPanel()}</div>

      {/* actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-3.5">
        <p className="flex min-w-0 flex-1 items-center gap-1.5 text-xs text-slate-500">
          {blockedReason ? (
            <span className="text-amber-700">{blockedReason}</span>
          ) : (
            <>
              <Icon d={CLOCK} className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Created by {campaign.createdBy.name}, {timeAgo(campaign.createdAt)}</span>
            </>
          )}
        </p>
        <div className="flex gap-2">
          <button type="button" className={btnSecondary} onClick={() => setPanel("schedules")}>
            <Icon d={CLOCK} /> Schedule
          </button>
          <button type="button" className={btnSecondary} onClick={() => onEdit(campaign.id)} disabled={live}>
            <Icon d={PENCIL} /> Edit
          </button>
          <button
            type="button"
            className={btnPrimary}
            onClick={() => { setRunError(null); setConfirmRun(true); }}
            disabled={live || !!blockedReason}
            title={blockedReason ?? undefined}
          >
            {live ? <Spinner /> : <Icon d={PLAY} />}
            {live ? "Running…" : "Run now"}
          </button>
        </div>
      </div>

      {confirmRun && (
        <ConfirmModal
          title={`Run “${campaign.name}” now?`}
          confirmLabel="Run now"
          busyLabel="Starting…"
          busy={runBusy}
          error={runError}
          onConfirm={startRun}
          onCancel={() => !runBusy && setConfirmRun(false)}
        >
          <p>
            This sends to <span className="font-medium text-slate-900">{campaign.customerCount} customer{campaign.customerCount === 1 ? "" : "s"}</span> on{" "}
            <span className="font-medium text-slate-900">{runnable.map((c) => SHORT[c]).join(" and ")}</span>. Messages that have been sent can’t be taken back.
          </p>
          <p>
            {runnable.includes("email") && "Emails go from your connected mailbox. "}
            {runnable.includes("whatsapp_baileys") && "WhatsApp messages go from your linked number. "}
            Sending is paced, so this takes {estimate()}. You can leave this page; the run continues.
          </p>
          {comingSoon.length > 0 && <p>{comingSoon.map((c) => SHORT[c]).join(" and ")} will be skipped because they aren’t available yet.</p>}
          {paused && <p>This campaign is paused, so the scheduler ignores it, but a manual run still works.</p>}
        </ConfirmModal>
      )}
      {panel === "schedules" && (
        <CampaignSchedulesPanel campaign={campaign} onClose={() => setPanel(null)} onChanged={onSchedulesChanged} />
      )}
      {panel === "runs" && (
        <CampaignRunsPanel
          campaign={campaign}
          //initialRunId={run?.id ?? null}
          onClose={() => setPanel(null)}
          onChanged={onRunFinished}
        />
      )}
    </article>
  );
}