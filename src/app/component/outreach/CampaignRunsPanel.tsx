"use client";

/**
 * CampaignRunsPanel — run history for ONE campaign, and the per-customer log of each run.
 *   List view : every run (manual or scheduled), newest first.
 *   Detail view: counts per channel, progress bar (auto-refreshes every 3s while running),
 *                Cancel button, and a log table filterable by channel and status.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { cancelCampaignRun, getCampaignRun, getCampaignRuns } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  CAMPAIGN_CHANNELS,
  type CampaignChannel,
  type CampaignRun,
  type RunLogQuery,
  type RunStatus,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, ICONS, Icon, Pagination, Spinner, btnSecondary, cx, focusRing, inputCls } from "./CampaignUi";
import PanelShell from "./PanelShell";

interface Props {
  campaign: { id: string; name: string; channels: CampaignChannel[] };
  /** open straight into this run (e.g. right after "Run now") */
  initialRunId?: string | null;
  onClose: () => void;
  /** called after a run is cancelled so the card can refresh */
  onChanged?: () => void;
}

type LogItem = {
  id: string;
  customerId: string;
  customerName: string;
  contactNumber: string | null;
  email: string | null;
  channel: string;
  status: "sent" | "failed" | "skipped";
  detail: string | null;
  createdAt: string;
};
type Logs = { total: number; page: number; limit: number; totalPages: number; items: LogItem[] };

const RUN_PILL: Record<RunStatus, { label: string; cls: string }> = {
  running: { label: "Running", cls: "bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]" },
  completed: { label: "Completed", cls: "bg-emerald-100 text-emerald-800" },
  failed: { label: "Failed", cls: "bg-red-100 text-red-800" },
  cancelled: { label: "Cancelled", cls: "bg-slate-200 text-slate-700" },
};
const LOG_PILL: Record<LogItem["status"], string> = {
  sent: "bg-emerald-100 text-emerald-800",
  failed: "bg-red-100 text-red-800",
  skipped: "bg-slate-200 text-slate-700",
};
const CHANNEL_NAME: Record<string, string> = {
  email: "Email",
  whatsapp_baileys: "WhatsApp",
  whatsapp_meta: "WhatsApp (Meta)",
  ai_calling: "AI calling",
};

const isLive = (r: CampaignRun) => r.status === "running" || (r.status === "cancelled" && !r.finishedAt);

const totals = (r: CampaignRun) =>
  CAMPAIGN_CHANNELS.reduce(
    (t, c) => {
      const x = r.summary?.[c.id];
      return x ? { sent: t.sent + x.sent, failed: t.failed + x.failed, skipped: t.skipped + x.skipped } : t;
    },
    { sent: 0, failed: 0, skipped: 0 }
  );

const fmtDate = (iso?: string | null) => (iso ? new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—");
const fmtTimeOnly = (iso: string) => new Date(iso).toLocaleTimeString(undefined, { timeStyle: "medium" });
const duration = (r: CampaignRun) => {
  if (!r.finishedAt) return isLive(r) ? "In progress" : "—";
  const s = Math.max(0, Math.round((new Date(r.finishedAt).getTime() - new Date(r.startedAt).getTime()) / 1000));
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m ${s % 60}s`;
  return `${Math.floor(s / 3600)}h ${Math.round((s % 3600) / 60)}m`;
};

const RunPill = ({ run }: { run: CampaignRun }) => {
  const stopping = run.status === "cancelled" && !run.finishedAt;
  return (
    <span className={cx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", RUN_PILL[run.status].cls)}>
      {isLive(run) && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current motion-reduce:animate-none" />}
      {stopping ? "Stopping" : RUN_PILL[run.status].label}
    </span>
  );
};

/* ═════════════════════ detail of one run ═════════════════════ */

function RunDetail({ campaign, runId, onBack, onChanged }: { campaign: Props["campaign"]; runId: string; onBack: () => void; onChanged?: () => void }) {
  const [run, setRun] = useState<CampaignRun | null>(null);
  const [logs, setLogs] = useState<Logs | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [channel, setChannel] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [tick, setTick] = useState(0);
  const [cancelBusy, setCancelBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const reqId = useRef(0);

  useEffect(() => {
    const id = ++reqId.current;
    setError(null);
    getCampaignRun(campaign.id, runId, { channel: channel || undefined, status: status || undefined, page, limit } as unknown as RunLogQuery).then((r) => {
      if (id !== reqId.current) return;
      if (r.ok) {
        const d = r.data as unknown as { run: CampaignRun; logs: Logs };
        setRun(d.run);
        setLogs(d.logs);
      } else setError(r.error.message);
      setLoading(false);
    });
  }, [campaign.id, runId, channel, status, page, limit, tick]);

  // auto-refresh while the run is going
  const live = !!run && isLive(run);
  useEffect(() => {
    if (!live) return;
    const t = setInterval(() => setTick((n) => n + 1), 3000);
    return () => clearInterval(t);
  }, [live]);

  const cancel = async () => {
    if (!run) return;
    setCancelBusy(true);
    const r = await cancelCampaignRun(campaign.id, run.id);
    setCancelBusy(false);
    if (!r.ok) return setNotice(r.error.message);
    setNotice("Cancelling. The run stops before its next customer; what was already sent stays sent.");
    setTick((n) => n + 1);
    onChanged?.();
  };

  const channels = CAMPAIGN_CHANNELS.filter((c) => campaign.channels.includes(c.id));
  const runnable = channels.filter((c) => run?.summary?.[c.id]);
  const t = run ? totals(run) : { sent: 0, failed: 0, skipped: 0 };
  const expected = run ? run.totalCustomers * Math.max(1, runnable.length) : 0;
  const done = t.sent + t.failed + t.skipped;
  const pct = expected ? Math.min(100, Math.round((done / expected) * 100)) : 0;

  return (
    <div className="space-y-4">
      <button type="button" onClick={onBack} className={cx("inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900", focusRing)}>
        <Icon d={ICONS.chevL} /> All runs
      </button>

      {error && <Banner tone="error" title="Couldn’t load this run">{error}</Banner>}
      {notice && <Banner tone="info">{notice}</Banner>}
      {loading && !run && <div className="flex items-center gap-3 py-6 text-sm text-slate-600"><Spinner /> Loading run…</div>}

      {run && (
        <>
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <RunPill run={run} />
                <span className="text-sm text-slate-700">{run.trigger === "scheduled" ? "Scheduled run" : "Manual run"}</span>
              </div>
              {run.status === "running" && (
                <button type="button" onClick={cancel} disabled={cancelBusy} className={cx("inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-red-200 bg-white px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50", focusRing)}>
                  {cancelBusy ? <Spinner className="h-3 w-3" /> : <Icon d="M6 6h12v12H6z" className="h-3 w-3" />}
                  Cancel run
                </button>
              )}
            </div>

            <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {[
                { l: "Started", v: fmtDate(run.startedAt) },
                { l: "Finished", v: run.finishedAt ? fmtDate(run.finishedAt) : "—" },
                { l: "Duration", v: duration(run) },
                { l: "Customers", v: String(run.totalCustomers) },
              ].map((x) => (
                <div key={x.l}>
                  <dt className="text-xs text-slate-500">{x.l}</dt>
                  <dd className="font-medium text-slate-900">{x.v}</dd>
                </div>
              ))}
            </dl>

            {live && (
              <div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Run progress">
                  <div className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-1 text-xs text-slate-600">{done} of {expected} processed ({pct}%). This page refreshes by itself.</p>
              </div>
            )}

            <ul className="space-y-1 text-sm">
              {runnable.map((c) => {
                const x = run.summary?.[c.id];
                return (
                  <li key={c.id} className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                    <span className="w-28 text-slate-700">{CHANNEL_NAME[c.id] ?? c.id}</span>
                    <span className="text-emerald-700">{x?.sent ?? 0} sent</span>
                    <span className={x?.failed ? "font-medium text-red-600" : "text-slate-500"}>{x?.failed ?? 0} failed</span>
                    <span className="text-slate-500">{x?.skipped ?? 0} skipped</span>
                  </li>
                );
              })}
            </ul>
            {!!run.summary?.notRun?.length && (
              <p className="text-xs text-slate-500">Not run (not available yet): {run.summary.notRun.map((c: string) => CHANNEL_NAME[c] ?? c).join(", ")}.</p>
            )}
            {!!run.summary?.unavailableCustomers && (
              <p className="text-xs text-amber-700">{run.summary.unavailableCustomers} customer(s) were no longer available and were left out.</p>
            )}
            {run.error && <p className="text-xs text-red-600">{run.error}</p>}
          </div>

          {/* filters */}
          <div className="flex flex-wrap items-center gap-3">
            <select aria-label="Filter by channel" className={cx(inputCls, "w-auto")} value={channel} onChange={(e) => { setChannel(e.target.value); setPage(1); }}>
              <option value="">All channels</option>
              {channels.map((c) => (
                <option key={c.id} value={c.id}>{CHANNEL_NAME[c.id] ?? c.id}</option>
              ))}
            </select>
            <select aria-label="Filter by status" className={cx(inputCls, "w-auto")} value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}>
              <option value="">All statuses</option>
              <option value="sent">Sent</option>
              <option value="failed">Failed</option>
              <option value="skipped">Skipped</option>
            </select>
            <button type="button" className={cx(btnSecondary, "!px-3 !py-2")} onClick={() => setTick((n) => n + 1)} aria-label="Refresh log">
              <Icon d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" />
            </button>
            {status === "" && channel === "" && <span className="text-xs text-slate-500">Tip: filter by “Failed” to see what went wrong.</span>}
          </div>

          {/* log table */}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-600">
                <tr>
                  {["Time", "Customer", "Channel", "Status", "Detail"].map((h) => (
                    <th key={h} className="px-3 py-2.5 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(logs?.items ?? []).map((l) => (
                  <tr key={l.id}>
                    <td className="whitespace-nowrap px-3 py-2.5 text-slate-500">{fmtTimeOnly(l.createdAt)}</td>
                    <td className="px-3 py-2.5">
                      <p className="font-medium text-slate-900">{l.customerName}</p>
                      <p className="text-xs text-slate-500">{l.channel === "email" ? l.email || "—" : l.contactNumber || "—"}</p>
                    </td>
                    <td className="px-3 py-2.5 text-slate-700">{CHANNEL_NAME[l.channel] ?? l.channel}</td>
                    <td className="px-3 py-2.5">
                      <span className={cx("rounded-md px-2 py-0.5 text-xs font-medium capitalize", LOG_PILL[l.status])}>{l.status}</span>
                    </td>
                    <td className="max-w-[260px] px-3 py-2.5 text-xs text-slate-600">{l.detail || "—"}</td>
                  </tr>
                ))}
                {logs && logs.items.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-3 py-8 text-center text-sm text-slate-500">
                      {channel || status ? "No log entries match these filters." : live ? "Nothing logged yet. Entries appear in batches of 10." : "No log entries."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {logs && logs.total > 0 && (
            <Pagination page={page} limit={limit} total={logs.total} itemCount={logs.items.length} onPage={setPage} onLimit={(l) => { setLimit(l); setPage(1); }} limits={[25, 50, 100]} />
          )}
        </>
      )}
    </div>
  );
}

/* ═════════════════════ panel ═════════════════════ */

export default function CampaignRunsPanel({ campaign, initialRunId = null, onClose, onChanged }: Props) {
  const [runId, setRunId] = useState<string | null>(initialRunId);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [runs, setRuns] = useState<CampaignRun[] | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const reqId = useRef(0);

  useEffect(() => {
    if (runId) return; // detail view is open
    const id = ++reqId.current;
    getCampaignRuns(campaign.id, { page, limit }).then((r) => {
      if (id !== reqId.current) return;
      if (r.ok) {
        setRuns(r.data.data);
        setTotal(r.data.total);
        setError(null);
      } else setError(r.error.message);
    });
  }, [campaign.id, page, limit, tick, runId]);

  const anyLive = !!runs?.some(isLive);
  useEffect(() => {
    if (!anyLive || runId) return;
    const t = setInterval(() => setTick((n) => n + 1), 4000);
    return () => clearInterval(t);
  }, [anyLive, runId]);

  const back = useCallback(() => {
    setRunId(null);
    setTick((n) => n + 1);
  }, []);

  return (
    <PanelShell title={runId ? "Run report" : "Run history"} subtitle={campaign.name} onClose={onClose}>
      {runId ? (
        <RunDetail campaign={campaign} runId={runId} onBack={back} onChanged={onChanged} />
      ) : (
        <div className="space-y-4">
          {error && (
            <div className="space-y-3">
              <Banner tone="error" title="Couldn’t load runs">{error}</Banner>
              <button type="button" className={btnSecondary} onClick={() => setTick((n) => n + 1)}>Try again</button>
            </div>
          )}
          {!runs && !error && <div className="flex items-center gap-3 py-6 text-sm text-slate-600"><Spinner /> Loading runs…</div>}

          {runs && runs.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center text-sm text-slate-600">
              This campaign hasn’t run yet. Use “Run now” or add a schedule.
            </div>
          )}

          {runs && runs.length > 0 && (
            <ul className="space-y-2">
              {runs.map((r) => {
                const t = totals(r);
                return (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => setRunId(r.id)}
                      className={cx("flex w-full cursor-pointer flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left hover:bg-slate-50", focusRing)}
                    >
                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <RunPill run={r} />
                          <span className="text-sm font-medium text-slate-900">{fmtDate(r.startedAt)}</span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {r.trigger === "scheduled" ? "Scheduled" : "Manual"} · {duration(r)} · {r.totalCustomers} customer{r.totalCustomers === 1 ? "" : "s"}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-emerald-700">{t.sent} sent</span>
                        <span className={t.failed ? "font-medium text-red-600" : "text-slate-500"}>{t.failed} failed</span>
                        <span className="text-slate-500">{t.skipped} skipped</span>
                        <Icon d={ICONS.chevR} className="h-4 w-4 text-slate-400" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {runs && total > 0 && (
            <Pagination page={page} limit={limit} total={total} itemCount={runs.length} onPage={setPage} onLimit={(l) => { setLimit(l); setPage(1); }} limits={[8, 16, 32]} />
          )}
        </div>
      )}
    </PanelShell>
  );
}