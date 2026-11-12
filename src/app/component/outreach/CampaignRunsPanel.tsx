"use client";

/**
 * CampaignRunsPanel — run history for ONE campaign, and the per-customer report of each run.
 *   List view  : every run (manual or scheduled), newest first, with the key numbers.
 *   Detail view: run summary, then ONE card per customer; expand a customer to see every message.
 *
 * Channels are reported separately. Each channel has a "profile" (see PROFILES below):
 *   Email     : Sent, Failed, Delivered, Opened, Replied, Bounced   (opens are approximate)
 *   WhatsApp  : Sent, Failed, Delivered, Read, Replied              (no bounces; receipts come from the phone)
 * A run that used both channels shows one strip per channel instead of one merged strip.
 * To change what a channel shows, edit its entry in PROFILES; nothing else needs to change.
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
import { pct as share } from "./useChannelStats"; // not "pct": RunDetail has its own local `pct` (progress bar)

interface Props {
  campaign: { id: string; name: string; channels: CampaignChannel[] };
  /** open straight into this run (e.g. right after "Run now") */
  initialRunId?: string | null;
  onClose: () => void;
  /** called after a run is cancelled so the card can refresh */
  onChanged?: () => void;
}

type Tracking = { tracked?: number; sent: number; failed: number; delivered: number; opened: number; replied: number; bounced: number };
type RunT = CampaignRun & { tracking?: Record<string, Tracking> }; // per channel, from the channel tracking rows
type LogTrack = { deliveredAt: string | null; openedAt: string | null; openCount: number; repliedAt: string | null; bouncedAt: string | null };

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
  tracking: LogTrack | null; // null for skipped rows (nothing was sent) or when tracking data is missing
};
type Logs = { total: number; page: number; limit: number; totalPages: number; items: LogItem[] };

type Stats = { sent: number; failed: number; skipped: number; delivered: number; opened: number; replied: number; bounced: number };
const ZERO: Stats = { sent: 0, failed: 0, skipped: 0, delivered: 0, opened: 0, replied: 0, bounced: 0 };

/* ───────────── icons (24px stroke paths, used with <Icon d=… />) ───────────── */
const P = {
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  x: "M6 6l12 12M18 6L6 18",
  delivered: "M2 12l4 4L14 8M10 16l1 1L22 6",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  reply: "M9 14L4 9l5-5M4 9h10a6 6 0 0 1 6 6v3",
  alert: "M12 8v5M12 17h.01M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
  down: "M6 9l6 6 6-6",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 7l9 6 9-6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
};

/* ───────────── channel profiles: what each channel shows ───────────── */

type MetricKey = Exclude<keyof Stats, "skipped">;
type Metric = { key: MetricKey; label: string; icon: string; on: string; hint: string };

const BASE: Record<MetricKey, Metric> = {
  sent: { key: "sent", label: "Sent", icon: P.send, on: "bg-emerald-50 text-emerald-700", hint: "Messages handed off for sending" },
  failed: { key: "failed", label: "Failed", icon: P.x, on: "bg-red-50 text-red-700", hint: "Messages that could not be sent" },
  delivered: { key: "delivered", label: "Delivered", icon: P.delivered, on: "bg-sky-50 text-sky-700", hint: "Reached the recipient" },
  opened: { key: "opened", label: "Opened", icon: P.eye, on: "bg-violet-50 text-violet-700", hint: "Opened by the recipient" },
  replied: { key: "replied", label: "Replied", icon: P.reply, on: "bg-pink-50 text-pink-700", hint: "Recipient replied" },
  bounced: { key: "bounced", label: "Bounced", icon: P.alert, on: "bg-amber-50 text-amber-700", hint: "Rejected by the recipient's mail server" },
};

type Profile = {
  id: "email" | "whatsapp";
  name: string;
  icon: string;
  metrics: Metric[];
  /** tiles that show "—" (not 0) when the run has no tracking rows, because the real value is unknown */
  na: MetricKey[];
  /** footnote shown under the run summary */
  note: string;
  /** shown on a sent message that has no delivery / open / reply yet */
  quiet: string;
};

const PROFILES: Record<Profile["id"], Profile> = {
  email: {
    id: "email",
    name: "Email",
    icon: P.mail,
    metrics: [
      BASE.sent,
      BASE.failed,
      { ...BASE.delivered, hint: "Accepted by the mail server and not bounced" },
      { ...BASE.opened, hint: "Opens counted by the tracking image (approximate)" },
      BASE.replied,
      BASE.bounced,
    ],
    na: ["opened", "replied", "bounced"],
    note: "Email: delivered means sent and not bounced. Opens are approximate because some mail apps block or pre-load the tracking image.",
    quiet: "No opens, replies or bounces yet",
  },
  whatsapp: {
    id: "whatsapp",
    name: "WhatsApp",
    icon: ICONS.chat,
    metrics: [
      { ...BASE.sent, hint: "Accepted by WhatsApp for sending" },
      BASE.failed,
      { ...BASE.delivered, hint: "Reached the recipient's phone" },
      { ...BASE.opened, label: "Read", hint: "The recipient opened the chat (needs their read receipts on)" },
      { ...BASE.replied, hint: "They messaged back within 7 days" },
    ],
    na: ["delivered", "opened", "replied"],
    note: "WhatsApp: delivered and read come from the recipient’s phone, so they stay at 0 while it is offline or if read receipts are off. A reply counts when they message back within 7 days.",
    quiet: "Not delivered yet. This shows once the phone reports it",
  },
};

const profileOf = (channel: string): Profile => (channel.startsWith("whatsapp") ? PROFILES.whatsapp : PROFILES.email);

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
const STATUS_TABS: { v: string; l: string }[] = [
  { v: "", l: "All" },
  { v: "sent", l: "Sent" },
  { v: "failed", l: "Failed" },
  { v: "skipped", l: "Skipped" },
];
const CH_ORDER: CampaignChannel[] = CAMPAIGN_CHANNELS.map((c) => c.id);

/* ───────────── helpers ───────────── */

const isLive = (r: CampaignRun) => r.status === "running" || (r.status === "cancelled" && !r.finishedAt);

/** sent / failed / skipped across all channels (used for progress and the "skipped" line) */
const totals = (r: CampaignRun) =>
  CAMPAIGN_CHANNELS.reduce(
    (t, c) => {
      const x = r.summary?.[c.id];
      return x ? { sent: t.sent + x.sent, failed: t.failed + x.failed, skipped: t.skipped + x.skipped } : t;
    },
    { sent: 0, failed: 0, skipped: 0 }
  );

type StripRow = { channel: string; stats: Stats; untracked: boolean };

/** Numbers of ONE channel of a run. sent/failed/skipped come from the run summary, the rest from tracking rows. */
const channelStats = (r: RunT, ch: string): Stats => {
  const s = r.summary?.[ch as CampaignChannel];
  const t = r.tracking?.[ch];
  return {
    ...ZERO,
    sent: s?.sent ?? t?.sent ?? 0,
    failed: s?.failed ?? t?.failed ?? 0,
    skipped: s?.skipped ?? 0,
    delivered: t?.delivered ?? 0,
    opened: t?.opened ?? 0,
    replied: t?.replied ?? 0,
    bounced: t?.bounced ?? 0,
  };
};

/** Messages of this channel were sent but none has a tracking row, so the tracked numbers are unknown (not zero). */
const channelUntracked = (r: RunT, ch: string) => {
  const t = r.tracking?.[ch];
  return !!t && t.tracked !== undefined && t.sent > 0 && t.tracked === 0;
};

/** One strip per channel the run used. Falls back to the campaign's runnable channels while the summary is still empty. */
const runRows = (r: RunT, fallback: CampaignChannel[]): StripRow[] => {
  let ids = CH_ORDER.filter((id) => !!r.summary?.[id]);
  if (!ids.length) ids = CAMPAIGN_CHANNELS.filter((c) => c.runnable && fallback.includes(c.id)).map((c) => c.id);
  return ids.map((id) => ({ channel: id, stats: channelStats(r, id), untracked: channelUntracked(r, id) }));
};

/** All numbers for a set of log rows (one customer, one channel). A message that was opened or replied to was obviously delivered. */
const logStats = (items: LogItem[]): Stats =>
  items.reduce<Stats>((a, l) => {
    a[l.status] += 1;
    const t = l.tracking;
    if (l.status === "sent" && t) {
      if (t.bouncedAt) a.bounced += 1;
      else if (t.deliveredAt || t.openedAt || t.repliedAt) a.delivered += 1;
      if (t.openedAt) a.opened += 1;
      if (t.repliedAt) a.replied += 1;
    }
    return a;
  }, { ...ZERO });

type CustomerGroup = { id: string; name: string; email: string | null; phone: string | null; items: LogItem[]; stats: Stats; rows: StripRow[] };

/** One card per customer (rows of the same customer on this page are merged across channels). */
const groupByCustomer = (items: LogItem[]): CustomerGroup[] => {
  const map = new Map<string, CustomerGroup>();
  for (const l of items) {
    let g = map.get(l.customerId);
    if (!g) {
      g = { id: l.customerId, name: l.customerName, email: l.email, phone: l.contactNumber, items: [], stats: { ...ZERO }, rows: [] };
      map.set(l.customerId, g);
    }
    g.items.push(l);
    g.email = g.email || l.email;
    g.phone = g.phone || l.contactNumber;
  }
  const out = [...map.values()];
  out.forEach((g) => {
    g.stats = logStats(g.items);
    g.rows = CH_ORDER.filter((ch) => g.items.some((l) => l.channel === ch)).map((ch) => ({
      channel: ch,
      stats: logStats(g.items.filter((l) => l.channel === ch)),
      untracked: false,
    }));
  });
  return out;
};

const fmtDate = (iso?: string | null) => (iso ? new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "—");
const fmtTimeOnly = (iso: string) => new Date(iso).toLocaleTimeString(undefined, { timeStyle: "medium" });
const duration = (r: CampaignRun) => {
  if (!r.finishedAt) return isLive(r) ? "In progress" : "—";
  const s = Math.max(0, Math.round((new Date(r.finishedAt).getTime() - new Date(r.startedAt).getTime()) / 1000));
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m ${s % 60}s`;
  return `${Math.floor(s / 3600)}h ${Math.round((s % 3600) / 60)}m`;
};
const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "?";

/* ───────────── small components ───────────── */

// full class names on purpose (Tailwind can't see classes built from strings)
const gridCols = (n: number, compact: boolean) =>
  compact
    ? n === 5 ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-3 sm:grid-cols-6"
    : n === 5 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

/** The numbers of ONE channel. Zeros stay quiet, non-zero values get their colour, so a row reads at a glance. */
function MetricStrip({ stats, profile, showShare = false, compact = false, untracked = false }: { stats: Stats; profile: Profile; showShare?: boolean; compact?: boolean; untracked?: boolean }) {
  const base = stats.sent + stats.failed;
  return (
    <div className={cx("grid gap-1.5", gridCols(profile.metrics.length, compact))}>
      {profile.metrics.map((m) => {
        const n = stats[m.key];
        const na = untracked && profile.na.includes(m.key);
        const active = n > 0 && !na;
        const withShare = showShare && m.key !== "sent" && m.key !== "failed";
        return (
          <div
            key={m.key}
            title={na ? "No tracking data for this run" : `${m.hint}: ${n}`}
            className={cx("rounded-lg px-2.5", compact ? "py-1.5" : "py-2.5", active ? m.on : "bg-slate-50 text-slate-400")}
          >
            <div className="flex items-center gap-1 text-xs">
              <Icon d={m.icon} className="h-3 w-3 shrink-0" />
              <span>{m.label}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={cx("font-semibold tabular-nums", compact ? "text-base" : "text-xl")}>{na ? "—" : n}</span>
              {withShare && active && <span className="text-xs opacity-70">{share(n, base)}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** One strip per channel. With a single channel there is no heading; with several, each strip is labelled. */
function ChannelStrips({ rows, showShare = false, compact = false }: { rows: StripRow[]; showShare?: boolean; compact?: boolean }) {
  const multi = rows.length > 1;
  return (
    <div className="space-y-2">
      {rows.map((r) => {
        const p = profileOf(r.channel);
        return (
          <div key={r.channel}>
            {multi && (
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <Icon d={p.icon} className="h-3 w-3" /> {CHANNEL_NAME[r.channel] ?? p.name}
              </p>
            )}
            <MetricStrip stats={r.stats} profile={p} showShare={showShare} compact={compact} untracked={r.untracked} />
          </div>
        );
      })}
    </div>
  );
}

const RunPill = ({ run }: { run: CampaignRun }) => {
  const stopping = run.status === "cancelled" && !run.finishedAt;
  return (
    <span className={cx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", RUN_PILL[run.status].cls)}>
      {isLive(run) && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current motion-reduce:animate-none" />}
      {stopping ? "Stopping" : RUN_PILL[run.status].label}
    </span>
  );
};

/** What happened to ONE message, in order, with the time of each step. */
function Activity({ l }: { l: LogItem }) {
  if (l.status !== "sent") return <span className="text-xs text-slate-400">Nothing was sent</span>;
  const t = l.tracking;
  if (!t) return <span className="text-xs text-slate-500">Waiting for delivery data</span>;

  const profile = profileOf(l.channel);
  const wa = profile.id === "whatsapp";
  const steps: { text: string; cls: string; at: string }[] = [{ text: "Sent", cls: "bg-emerald-100 text-emerald-800", at: l.createdAt }];
  if (t.deliveredAt) steps.push({ text: "Delivered", cls: "bg-sky-100 text-sky-800", at: t.deliveredAt });
  if (t.openedAt) steps.push({ text: wa ? "Read" : t.openCount > 1 ? `Opened ×${t.openCount}` : "Opened", cls: "bg-violet-100 text-violet-800", at: t.openedAt });
  if (t.repliedAt) steps.push({ text: "Replied", cls: "bg-pink-100 text-pink-800", at: t.repliedAt });
  if (t.bouncedAt && !wa) steps.push({ text: "Bounced", cls: "bg-amber-100 text-amber-800", at: t.bouncedAt });
  steps.sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime());

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-1">
        {steps.map((s) => (
          <span key={s.text} title={new Date(s.at).toLocaleString()} className={cx("rounded-md px-2 py-0.5 text-xs font-medium", s.cls)}>
            {s.text} <span className="font-normal opacity-70">{fmtTimeOnly(s.at)}</span>
          </span>
        ))}
      </div>
      {steps.length === 1 && <p className="text-xs text-slate-500">{profile.quiet}</p>}
    </div>
  );
}

const detailText = (l: LogItem) => {
  if (l.detail) return l.detail;
  if (l.status === "sent") return "Sent successfully";
  if (l.status === "failed") return "No error message was recorded";
  return "Skipped. No reason was recorded";
};

/** One customer: name + the contact that matters for the channels used + each channel's numbers; expands into every message. */
function CustomerCard({ g, defaultOpen }: { g: CustomerGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const hasFailure = g.stats.failed > 0;
  const usesEmail = g.rows.some((r) => profileOf(r.channel).id === "email");
  const usesWhatsApp = g.rows.some((r) => profileOf(r.channel).id === "whatsapp");

  return (
    <li className={cx("overflow-hidden rounded-xl border bg-white", hasFailure ? "border-red-200" : "border-slate-200")}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cx("flex w-full cursor-pointer flex-col gap-3 px-4 py-3 text-left hover:bg-slate-50 lg:flex-row lg:items-center", focusRing)}
      >
        <div className="flex min-w-0 items-center gap-3 lg:w-72 lg:shrink-0">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-sm font-semibold text-[var(--color-primary-darker)]">
            {initials(g.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-slate-900">{g.name}</p>
            {usesEmail && g.email && (
              <p className="flex items-center gap-1 truncate text-xs text-slate-500">
                <Icon d={P.mail} className="h-3 w-3 shrink-0" /> {g.email}
              </p>
            )}
            {usesWhatsApp && g.phone && (
              <p className="flex items-center gap-1 truncate text-xs text-slate-500">
                <Icon d={P.phone} className="h-3 w-3 shrink-0" /> {g.phone}
              </p>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <ChannelStrips rows={g.rows} compact />
        </div>

        <Icon d={P.down} className={cx("hidden h-5 w-5 shrink-0 text-slate-400 transition-transform motion-reduce:transition-none lg:block", open && "rotate-180")} />
      </button>

      {open && (
        <div className="border-t border-slate-100 bg-slate-50/60">
          <div className="hidden gap-4 px-4 py-2 text-xs text-slate-500 sm:grid sm:grid-cols-[9rem_1fr_1fr]">
            <span>Channel</span>
            <span>Activity</span>
            <span>Details</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {g.items.map((l) => (
              <li key={l.id} className="flex flex-col gap-2 px-4 py-3 sm:grid sm:grid-cols-[9rem_1fr_1fr] sm:gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-800">{CHANNEL_NAME[l.channel] ?? l.channel}</p>
                  <div className="flex items-center gap-2">
                    <span className={cx("rounded-md px-2 py-0.5 text-xs font-medium capitalize", LOG_PILL[l.status])}>{l.status}</span>
                    <span className="text-xs text-slate-500">{fmtTimeOnly(l.createdAt)}</span>
                  </div>
                </div>
                <Activity l={l} />
                <p className={cx("text-sm", l.status === "failed" ? "text-red-700" : "text-slate-600")}>{detailText(l)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

/* ═════════════════════ detail of one run ═════════════════════ */

function RunDetail({ campaign, runId, onBack, onChanged }: { campaign: Props["campaign"]; runId: string; onBack: () => void; onChanged?: () => void }) {
  const [run, setRun] = useState<RunT | null>(null);
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
        const d = r.data as unknown as { run: RunT; logs: Logs };
        setRun(d.run);
        setLogs(d.logs);
      } else setError(r.error.message);
      setLoading(false);
    });
  }, [campaign.id, runId, channel, status, page, limit, tick]);

  // auto-refresh while the run is going
  const live = !!run && isLive(run);
  const loaded = !!run;
  useEffect(() => {
    if (!loaded) return;
    // 3s while running; every 30s afterwards because opens, reads and replies keep arriving
    const t = setInterval(() => setTick((n) => n + 1), live ? 3000 : 30_000);
    return () => clearInterval(t);
  }, [live, loaded]);

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
  const rows = run ? runRows(run, campaign.channels) : [];
  const profiles = [...new Map(rows.map((r) => [profileOf(r.channel).id, profileOf(r.channel)])).values()];
  const t = run ? totals(run) : { sent: 0, failed: 0, skipped: 0 };
  const done = t.sent + t.failed + t.skipped;
  const expected = run ? run.totalCustomers * Math.max(1, rows.length) : 0;
  const pct = expected ? Math.min(100, Math.round((done / expected) * 100)) : 0;
  const groups = groupByCustomer(logs?.items ?? []);
  const filtered = !!channel || !!status;

  return (
    <div className="space-y-5">
      <button type="button" onClick={onBack} className={cx("inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900", focusRing)}>
        <Icon d={ICONS.chevL} /> All runs
      </button>

      {error && <Banner tone="error" title="Couldn’t load this run">{error}</Banner>}
      {notice && <Banner tone="info">{notice}</Banner>}
      {loading && !run && <div className="flex items-center gap-3 py-6 text-sm text-slate-600"><Spinner /> Loading run…</div>}

      {run && (
        <>
          {/* ── run summary ── */}
          <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <RunPill run={run} />
                  <h3 className="text-base font-semibold text-slate-900">{run.trigger === "scheduled" ? "Scheduled run" : "Manual run"}</h3>
                </div>
                <p className="text-sm text-slate-500">
                  Started {fmtDate(run.startedAt)}
                  {run.finishedAt ? `, finished ${fmtDate(run.finishedAt)}` : ""}. Took {duration(run)} for {run.totalCustomers} customer{run.totalCustomers === 1 ? "" : "s"}.
                </p>
              </div>
              {run.status === "running" && (
                <button type="button" onClick={cancel} disabled={cancelBusy} className={cx("inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50", focusRing)}>
                  {cancelBusy ? <Spinner className="h-3 w-3" /> : <Icon d="M6 6h12v12H6z" className="h-3 w-3" />}
                  Cancel run
                </button>
              )}
            </div>

            {live && (
              <div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Run progress">
                  <div className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
                </div>
                <p className="mt-1 text-xs text-slate-600">{done} of {expected} processed ({pct}%). This page refreshes by itself.</p>
              </div>
            )}

            {/* one strip per channel: each channel keeps its own labels and numbers */}
            <ChannelStrips rows={rows} showShare />

            {t.skipped > 0 && <p className="text-sm text-slate-600">{t.skipped} message{t.skipped === 1 ? " was" : "s were"} skipped.</p>}

            <div className="space-y-1 text-xs text-slate-500">
              <p>Percentages are a share of the messages triggered on that channel (sent + failed). Numbers keep updating after the run finishes.</p>
              {profiles.map((p) => (
                <p key={p.id}>{p.note}</p>
              ))}
            </div>
            {!!run.summary?.notRun?.length && (
              <p className="text-xs text-slate-500">Not run (not available yet): {run.summary.notRun.map((c: string) => CHANNEL_NAME[c] ?? c).join(", ")}.</p>
            )}
            {!!run.summary?.unavailableCustomers && (
              <p className="text-xs text-amber-700">{run.summary.unavailableCustomers} customer(s) were no longer available and were left out.</p>
            )}
            {run.error && <p className="text-sm text-red-600">{run.error}</p>}
          </section>

          {/* ── customers ── */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900">
                Customers <span className="font-normal text-slate-500">({logs?.total ?? 0} log entr{logs?.total === 1 ? "y" : "ies"})</span>
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5" role="group" aria-label="Filter by status">
                  {STATUS_TABS.map((s) => (
                    <button
                      key={s.v}
                      type="button"
                      aria-pressed={status === s.v}
                      onClick={() => { setStatus(s.v); setPage(1); }}
                      className={cx("cursor-pointer rounded-md px-3 py-1 text-sm font-medium", focusRing, status === s.v ? "bg-[var(--color-primary)] text-white" : "text-slate-600 hover:bg-slate-100")}
                    >
                      {s.l}
                    </button>
                  ))}
                </div>
                {channels.length > 1 && (
                  <select aria-label="Filter by channel" className={cx(inputCls, "w-auto")} value={channel} onChange={(e) => { setChannel(e.target.value); setPage(1); }}>
                    <option value="">All channels</option>
                    {channels.map((c) => (
                      <option key={c.id} value={c.id}>{CHANNEL_NAME[c.id] ?? c.id}</option>
                    ))}
                  </select>
                )}
                <button type="button" className={cx(btnSecondary, "!px-3 !py-2")} onClick={() => setTick((n) => n + 1)} aria-label="Refresh">
                  <Icon d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" />
                </button>
              </div>
            </div>

            {groups.length > 0 ? (
              <ul className="space-y-2">
                {groups.map((g) => (
                  <CustomerCard key={g.id} g={g} defaultOpen={groups.length <= 3 || g.stats.failed > 0} />
                ))}
              </ul>
            ) : (
              logs && (
                <div className="rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center text-sm text-slate-600">
                  {filtered ? "No customers match these filters. Try “All”." : live ? "Nothing logged yet. Customers appear here in batches of 10." : "No customers were logged for this run."}
                </div>
              )
            )}

            {logs && logs.total > 0 && (
              <Pagination page={page} limit={limit} total={logs.total} itemCount={logs.items.length} onPage={setPage} onLimit={(l) => { setLimit(l); setPage(1); }} limits={[25, 50, 100]} />
            )}
          </section>
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
  const [runs, setRuns] = useState<RunT[] | null>(null);
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
            <ul className="space-y-3">
              {runs.map((r) => {
                const skipped = totals(r).skipped;
                return (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => setRunId(r.id)}
                      className={cx("w-full cursor-pointer space-y-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm hover:border-slate-300 hover:bg-slate-50", focusRing)}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="min-w-0 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <RunPill run={r} />
                            <span className="text-sm font-medium text-slate-900">{fmtDate(r.startedAt)}</span>
                          </div>
                          <p className="text-xs text-slate-500">
                            {r.trigger === "scheduled" ? "Scheduled" : "Manual"} run, {duration(r)}, {r.totalCustomers} customer{r.totalCustomers === 1 ? "" : "s"}
                            {skipped > 0 ? `, ${skipped} skipped` : ""}
                          </p>
                        </div>
                        <Icon d={ICONS.chevR} className="h-4 w-4 text-slate-400" />
                      </div>
                      <ChannelStrips rows={runRows(r, campaign.channels)} compact />
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