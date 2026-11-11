"use client";

/**
 * CampaignSchedulesPanel — alarm-clock style schedules for ONE campaign.
 * Backend rules (controller.outreachCampaignSchedule.js):
 *   - days = [] means "once": it fires one time, then switches itself off.
 *   - days use 0 = Sunday … 6 = Saturday.
 *   - the time is in the alarm's own time zone (we default to the browser's).
 *   - max 10 per campaign; paused campaigns are skipped by the scheduler.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { createSchedule, deleteSchedule, listSchedules, updateSchedule } from "@/store/masters/outreachcampaign/outreachcampaign";
import type { SchedulePayload } from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, Field, ICONS, Icon, Spinner, btnPrimary, btnSecondary, cx, focusRing, inputCls } from "./CampaignUi";
import ConfirmModal from "./ConfirmModel";
import PanelShell from "./PanelShell";

interface Props {
  campaign: { id: string; name: string; status: string };
  onClose: () => void;
  /** called after any add / edit / delete / toggle so the card's "Schedules" count refreshes */
  onChanged?: () => void;
}

type Schedule = {
  id: string;
  label: string | null;
  time: string; // "09:30"
  days: number[];
  timezone: string;
  enabled: boolean;
  nextRunAt: string | null;
  lastRunAt: string | null;
  lastRunStatus: string | null;
  lastError: string | null;
};

const MAX_SCHEDULES = 10;
const DAY_ORDER = [1, 2, 3, 4, 5, 6, 0]; // show Monday first
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const PRESETS: { label: string; days: number[] }[] = [
  { label: "Once", days: [] },
  { label: "Every day", days: [0, 1, 2, 3, 4, 5, 6] },
  { label: "Weekdays", days: [1, 2, 3, 4, 5] },
  { label: "Weekends", days: [0, 6] },
];

const LAST_STATUS: Record<string, { label: string; cls: string }> = {
  started: { label: "Ran", cls: "text-emerald-700" },
  missed: { label: "Missed (server was down)", cls: "text-amber-700" },
  skipped_paused: { label: "Skipped (campaign paused)", cls: "text-amber-700" },
  skipped_running: { label: "Skipped (already running)", cls: "text-amber-700" },
  failed: { label: "Failed to start", cls: "text-red-600" },
};

const browserTz = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
  } catch {
    return "Asia/Kolkata";
  }
};

const sameDays = (a: number[], b: number[]) => a.length === b.length && [...a].sort().join() === [...b].sort().join();

const describeDays = (days: number[]) => {
  if (!days.length) return "Once";
  const hit = PRESETS.find((p) => p.days.length && sameDays(p.days, days));
  if (hit) return hit.label;
  return DAY_ORDER.filter((d) => days.includes(d)).map((d) => DAY_SHORT[d]).join(", ");
};

const fmtIn = (iso: string | null, tz: string) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString(undefined, { timeZone: tz, dateStyle: "medium", timeStyle: "short" });
  } catch {
    return new Date(iso).toLocaleString();
  }
};

/** 24h "14:05" -> "2:05 PM" for display */
const fmtTime = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};

export default function CampaignSchedulesPanel({ campaign, onClose, onChanged }: Props) {
  const [items, setItems] = useState<Schedule[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ tone: "success" | "error"; text: string } | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  // form
  const [editing, setEditing] = useState<null | "new" | Schedule>(null);
  const [label, setLabel] = useState("");
  const [time, setTime] = useState("09:00");
  const [days, setDays] = useState<number[]>([1, 2, 3, 4, 5]);
  const [tz, setTz] = useState(browserTz());
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // delete
  const [deleteTarget, setDeleteTarget] = useState<Schedule | null>(null);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const zones = useMemo<string[]>(() => {
    try {
      return (Intl as any).supportedValuesOf?.("timeZone") ?? [];
    } catch {
      return [];
    }
  }, []);

  const load = useCallback(async () => {
    setLoadError(null);
    const r = await listSchedules(campaign.id);
    if (r.ok) setItems(r.data.data as unknown as Schedule[]);
    else setLoadError(r.error.message);
  }, [campaign.id]);

  useEffect(() => {
    load();
  }, [load]);

  const openForm = (s: "new" | Schedule) => {
    setFormError(null);
    setNotice(null);
    if (s === "new") {
      setLabel("");
      setTime("09:00");
      setDays([1, 2, 3, 4, 5]);
      setTz(browserTz());
    } else {
      setLabel(s.label ?? "");
      setTime(s.time);
      setDays(s.days);
      setTz(s.timezone);
    }
    setEditing(s);
  };

  const toggleDay = (d: number) => setDays((cur) => (cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d]));

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    setFormError(null);
    const payload = { label: label.trim(), time, days, timezone: tz.trim() || undefined } as unknown as SchedulePayload;
    const r =
      editing === "new" ? await createSchedule(campaign.id, payload) : await updateSchedule(campaign.id, editing.id, payload);
    setSaving(false);
    if (!r.ok) return setFormError(r.error.message);
    setEditing(null);
    setNotice({ tone: "success", text: editing === "new" ? "Schedule added." : "Schedule updated." });
    await load();
    onChanged?.();
  };

  const toggle = async (s: Schedule) => {
    setBusyId(s.id);
    setNotice(null);
    const r = await updateSchedule(campaign.id, s.id, { enabled: !s.enabled } as Partial<SchedulePayload>);
    setBusyId(null);
    if (!r.ok) return setNotice({ tone: "error", text: r.error.message });
    await load();
    onChanged?.();
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleteBusy(true);
    setDeleteError(null);
    const r = await deleteSchedule(campaign.id, deleteTarget.id);
    setDeleteBusy(false);
    if (!r.ok) return setDeleteError(r.error.message);
    setDeleteTarget(null);
    setNotice({ tone: "success", text: "Schedule deleted." });
    await load();
    onChanged?.();
  };

  const atLimit = (items?.length ?? 0) >= MAX_SCHEDULES;
  const paused = campaign.status === "paused";

  return (
    <PanelShell title="Schedules" subtitle={campaign.name} onClose={onClose} locked={!!deleteTarget}>
      <div className="space-y-4">
        {paused && (
          <Banner tone="warn">This campaign is paused, so schedules will be skipped until you resume it.</Banner>
        )}
        {notice && <Banner tone={notice.tone}>{notice.text}</Banner>}
        {loadError && (
          <div className="space-y-3">
            <Banner tone="error" title="Couldn’t load schedules">{loadError}</Banner>
            <button type="button" className={btnSecondary} onClick={load}>Try again</button>
          </div>
        )}

        {!editing && (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-600">
              Like alarms: pick a time and the days it repeats. The campaign then runs by itself, within about 30 seconds of that time.
            </p>
            <button type="button" className={btnPrimary} onClick={() => openForm("new")} disabled={atLimit || !items} title={atLimit ? `Up to ${MAX_SCHEDULES} schedules per campaign` : undefined}>
              <Icon d="M12 5v14M5 12h14" /> Add schedule
            </button>
          </div>
        )}

        {/* ───── add / edit form ───── */}
        {editing && (
          <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">{editing === "new" ? "New schedule" : "Edit schedule"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="sch-time" label="Time">
                <input id="sch-time" type="time" className={inputCls} value={time} onChange={(e) => setTime(e.target.value)} disabled={saving} required />
              </Field>
              <Field id="sch-label" label="Label (optional)" hint="e.g. Morning follow-up">
                <input id="sch-label" className={inputCls} value={label} maxLength={60} onChange={(e) => setLabel(e.target.value)} disabled={saving} />
              </Field>
            </div>

            <div>
              <p className="mb-1.5 text-sm font-medium text-slate-800">Repeat</p>
              <div className="mb-2 flex flex-wrap gap-2">
                {PRESETS.map((p) => {
                  const on = sameDays(p.days, days);
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setDays(p.days)}
                      aria-pressed={on}
                      className={cx("cursor-pointer rounded-full border px-3 py-1 text-xs font-medium", focusRing, on ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50")}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Days of the week">
                {DAY_ORDER.map((d) => {
                  const on = days.includes(d);
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggleDay(d)}
                      aria-pressed={on}
                      className={cx("h-9 w-12 cursor-pointer rounded-lg border text-xs font-medium", focusRing, on ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50")}
                    >
                      {DAY_SHORT[d]}
                    </button>
                  );
                })}
              </div>
              <p className="mt-1.5 text-xs text-slate-500">
                {days.length ? "Repeats on the selected days." : "No day selected = runs once at the next time this clock shows, then switches itself off."}
              </p>
            </div>

            <Field id="sch-tz" label="Time zone" hint="The time above is in this zone. Defaults to your browser’s.">
              <input id="sch-tz" list="sch-tz-list" className={inputCls} value={tz} onChange={(e) => setTz(e.target.value)} disabled={saving} />
              <datalist id="sch-tz-list">
                {zones.map((z) => (
                  <option key={z} value={z} />
                ))}
              </datalist>
            </Field>

            {formError && <Banner tone="error">{formError}</Banner>}

            <div className="flex justify-end gap-2">
              <button type="button" className={btnSecondary} onClick={() => setEditing(null)} disabled={saving}>Cancel</button>
              <button type="button" className={btnPrimary} onClick={save} disabled={saving || !time}>
                {saving && <Spinner />}
                {saving ? "Saving…" : "Save schedule"}
              </button>
            </div>
          </div>
        )}

        {/* ───── list ───── */}
        {!items && !loadError && (
          <div className="flex items-center gap-3 py-6 text-sm text-slate-600"><Spinner /> Loading schedules…</div>
        )}

        {items && items.length === 0 && !editing && (
          <div className="rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center text-sm text-slate-600">
            No schedules yet. Add one to run this campaign automatically.
          </div>
        )}

        {items && items.length > 0 && (
          <ul className="space-y-3">
            {items.map((s) => {
              const last = s.lastRunStatus ? LAST_STATUS[s.lastRunStatus] : null;
              const done = !s.enabled && !s.days.length && !!s.lastRunAt; // a "once" alarm that already fired
              return (
                <li key={s.id} className={cx("rounded-xl border bg-white p-4", s.enabled ? "border-slate-200" : "border-slate-200 opacity-80")}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-baseline gap-x-3 text-slate-900">
                        <span className="text-2xl font-semibold tabular-nums">{fmtTime(s.time)}</span>
                        <span className="text-sm text-slate-600">{describeDays(s.days)}</span>
                        <span className="text-xs text-slate-400">{s.timezone}</span>
                      </p>
                      {s.label && <p className="mt-0.5 text-sm text-slate-700">{s.label}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={s.enabled}
                        aria-label={s.enabled ? "Turn schedule off" : "Turn schedule on"}
                        onClick={() => toggle(s)}
                        disabled={busyId === s.id}
                        className={cx("relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors disabled:opacity-50", focusRing, s.enabled ? "bg-[var(--color-primary)]" : "bg-slate-300")}
                      >
                        <span className={cx("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all motion-reduce:transition-none", s.enabled ? "left-[22px]" : "left-0.5")} />
                      </button>
                      <button type="button" onClick={() => openForm(s)} className={cx("cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100", focusRing)}>Edit</button>
                      <button
                        type="button"
                        onClick={() => { setDeleteError(null); setDeleteTarget(s); }}
                        aria-label="Delete schedule"
                        className={cx("flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-red-600 hover:bg-red-50", focusRing)}
                      >
                        <Icon d={ICONS.trash} />
                      </button>
                    </div>
                  </div>

                  <dl className="mt-3 grid gap-x-6 gap-y-1 text-xs sm:grid-cols-2">
                    <div className="flex gap-2">
                      <dt className="text-slate-500">Next run</dt>
                      <dd className="font-medium text-slate-800">{s.enabled ? fmtIn(s.nextRunAt, s.timezone) : done ? "Finished (it was a one-time schedule)" : "Off"}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-slate-500">Last run</dt>
                      <dd className="text-slate-800">
                        {s.lastRunAt ? fmtIn(s.lastRunAt, s.timezone) : "Never"}
                        {last && <span className={cx("ml-2 font-medium", last.cls)}>{last.label}</span>}
                      </dd>
                    </div>
                  </dl>
                  {s.lastError && <p className="mt-2 text-xs text-red-600">{s.lastError}</p>}
                  {done && <p className="mt-2 text-xs text-slate-500">To use it again, edit the time and switch it back on.</p>}
                </li>
              );
            })}
          </ul>
        )}
        {atLimit && <p className="text-xs text-slate-500">You’ve reached the limit of {MAX_SCHEDULES} schedules for this campaign.</p>}
      </div>

      {deleteTarget && (
        <ConfirmModal
          title="Delete this schedule?"
          tone="danger"
          confirmLabel="Delete schedule"
          busyLabel="Deleting…"
          busy={deleteBusy}
          error={deleteError}
          onConfirm={confirmDelete}
          onCancel={() => !deleteBusy && setDeleteTarget(null)}
        >
          <p>
            The {fmtTime(deleteTarget.time)} schedule ({describeDays(deleteTarget.days)}) will stop. Runs it already made stay in the run history.
          </p>
        </ConfirmModal>
      )}
    </PanelShell>
  );
}