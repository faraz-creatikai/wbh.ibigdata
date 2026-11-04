"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ────────────────────────────────────────────────────────────────────
 * Baileys workspace — everything the user sees AFTER Baileys is connected.
 * Self-contained on purpose: add Baileys-only logic (campaigns, analytics,
 * automations…) here without touching the Meta side.
 * ──────────────────────────────────────────────────────────────────── */

export type BaileysAccount = {
    phone: string;
    name: string;
    imageUrl?: string | null;
};

type WorkspaceTab = "overview" | "campaigns" | "templates" | "automations" | "settings";

type OverviewStats = {
    messagesSent: number;
    messagesSentTrend?: number; // % change
    delivered: number;
    deliveredRate: number; // %
    replies: number;
    replyRate: number; // %
    contacts: number;
    contactsTrend?: number; // % change
    failedRate: number; // %
};

type RecentCampaign = {
    id: string;
    name: string;
    sent: number;
    delivered: number;
    deliveredRate: number;
    replies: number;
    replyRate: number;
    status: string;
    date: string;
};

type Props = {
    account: BaileysAccount | null;
    isDisconnecting: boolean;
    onDisconnect: () => void;
    /** Increment from the parent to jump to the Settings tab (e.g. "Channel Settings" button). */
    settingsSignal: number;
};

const fmt = (n: number) => n.toLocaleString("en-IN");

const cardCls =
    "rounded-2xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)]";

/* ── Icons ───────────────────────────────────────────────────────── */
type IconProps = { className?: string };

const StrokeIcon = ({ className = "", children }: IconProps & { children: ReactNode }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        {children}
    </svg>
);

const WhatsAppIcon = ({ className = "" }: IconProps) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 21.172c-1.636 0-3.23-.42-4.63-1.215l-.333-.188-3.447.904.922-3.36-.206-.328c-.874-1.395-1.336-3.003-1.336-4.664 0-4.85 3.948-8.798 8.802-8.798 2.355 0 4.568.917 6.233 2.583 1.666 1.666 2.583 3.88 2.583 6.235 0 4.85-3.95 8.83-8.588 8.83zM12.031 4.73c-4.115 0-7.465 3.35-7.465 7.465 0 1.316.344 2.6.997 3.734l.115.197-.55 2.003 2.05-.538.2.115c1.1.62 2.35.946 3.65.946 4.116 0 7.468-3.35 7.468-7.466 0-2-.778-3.877-2.193-5.293-1.414-1.415-3.293-2.194-5.272-2.194v.03z" />
        <path d="M16.14 13.513c-.225-.113-1.33-.657-1.536-.732-.206-.075-.357-.113-.507.113-.15.225-.582.732-.714.88-.13.15-.262.17-.487.056-.225-.113-.95-.35-1.812-1.12-.67-.597-1.12-1.335-1.252-1.56-.13-.225-.014-.347.1-.46.1-.1.225-.262.338-.393.113-.13.15-.225.225-.375.075-.15.038-.282-.02-.395-.056-.112-.507-1.222-.693-1.673-.182-.44-.367-.38-.507-.387-.13-.007-.282-.007-.432-.007-.15 0-.395.056-.6.282-.207.225-.79.77-.79 1.875s.81 2.175.92 2.325c.113.15 1.583 2.415 3.834 3.386 1.8.784 2.392.83 3.19.73 1.05-.13 2.502-1.023 2.858-2.012.356-.99.356-1.838.25-2.013-.105-.175-.386-.282-.612-.395z" />
    </svg>
);

const PowerIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
    </StrokeIcon>
);

const SpinnerIcon = ({ className = "" }: IconProps) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

const SendIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </StrokeIcon>
);

const DoubleCheckIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M2 13l4 4L14 7" />
        <path d="M10 15l2 2L22 7" />
    </StrokeIcon>
);

const ReplyIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M9 14 4 9l5-5" />
        <path d="M4 9h10a6 6 0 0 1 6 6v3" />
    </StrokeIcon>
);

const UsersIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </StrokeIcon>
);

const PlusIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M12 5v14M5 12h14" />
    </StrokeIcon>
);

/* ── Overview pieces ─────────────────────────────────────────────── */
const StatCard = ({
    label,
    value,
    badge,
    icon,
    tint,
    iconCls,
}: {
    label: string;
    value: string;
    badge?: string;
    icon: ReactNode;
    tint: string;
    iconCls: string;
}) => (
    <div className={`flex items-center gap-3 rounded-2xl border p-4 dark:bg-[var(--color-childbgdark)] dark:border-transparent ${tint}`}>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[var(--color-bgdark)] ${iconCls}`}>{icon}</div>
        <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60">{label}</p>
            <p className="text-xl font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]">{value}</p>
        </div>
        {badge && <span className="self-end rounded-full bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-bold text-[#075E54]">{badge}</span>}
    </div>
);

const StatsRow = ({ stats }: { stats: OverviewStats | null }) => {
    const trend = (n?: number) => (n === undefined ? undefined : `${n >= 0 ? "↑ +" : "↓ "}${n}%`);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
                label="Messages Sent"
                value={stats ? fmt(stats.messagesSent) : "—"}
                badge={stats ? trend(stats.messagesSentTrend) : undefined}
                icon={<SendIcon className="h-5 w-5" />}
                tint="bg-[var(--color-primary-lighter)]/70 border-[var(--color-primary-light)]/60"
                iconCls="text-[var(--color-primary)]"
            />
            <StatCard
                label="Delivered"
                value={stats ? fmt(stats.delivered) : "—"}
                badge={stats ? `${stats.deliveredRate}%` : undefined}
                icon={<DoubleCheckIcon className="h-5 w-5" />}
                tint="bg-[#ECFDF3] border-[#CFF3DD]"
                iconCls="text-[#16A34A]"
            />
            <StatCard
                label="Replies"
                value={stats ? fmt(stats.replies) : "—"}
                badge={stats ? `${stats.replyRate}%` : undefined}
                icon={<ReplyIcon className="h-5 w-5" />}
                tint="bg-[#F5F0FF] border-[#E4DAFF]"
                iconCls="text-[#7C3AED]"
            />
            <StatCard
                label="Contacts"
                value={stats ? fmt(stats.contacts) : "—"}
                badge={stats ? trend(stats.contactsTrend) : undefined}
                icon={<UsersIcon className="h-5 w-5" />}
                tint="bg-[#FFF6EA] border-[#FFE3BF]"
                iconCls="text-[#F59E0B]"
            />
        </div>
    );
};

const RecentCampaigns = ({ campaigns }: { campaigns: RecentCampaign[] }) => (
    <div className={`${cardCls} p-5 min-w-0`}>
        <h3 className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">Recent Campaigns</h3>
        <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs">
                <thead>
                    <tr className="bg-[var(--color-primary-lighter)]/50 dark:bg-[var(--color-childbgdark)] text-gray-600 dark:text-[var(--color-txtlight)]/70">
                        {["Campaign Name", "Channel", "Sent", "Delivered", "Replies", "Status", "Date"].map((h) => (
                            <th key={h} className="px-3 py-2.5 font-semibold first:rounded-l-lg last:rounded-r-lg">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-[var(--color-txtlight)]">
                    {campaigns.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="px-3 py-10 text-center text-gray-400">
                                No campaigns yet — create your first campaign to see it here.
                            </td>
                        </tr>
                    ) : (
                        campaigns.map((c) => (
                            <tr key={c.id} className="border-b border-gray-100 dark:border-[var(--color-childbgdark)] last:border-0">
                                <td className="px-3 py-3 font-semibold">{c.name}</td>
                                <td className="px-3 py-3">
                                    <span className="flex items-center gap-1.5">
                                        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                                        Baileys
                                    </span>
                                </td>
                                <td className="px-3 py-3">{fmt(c.sent)}</td>
                                <td className="px-3 py-3">
                                    {fmt(c.delivered)} ({c.deliveredRate}%)
                                </td>
                                <td className="px-3 py-3">
                                    {fmt(c.replies)} ({c.replyRate}%)
                                </td>
                                <td className="px-3 py-3">
                                    <span className="rounded-md bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-semibold text-[#075E54]">{c.status}</span>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">{c.date}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

const ChannelUsage = ({ stats }: { stats: OverviewStats | null }) => {
    const R = 46;
    const C = 2 * Math.PI * R;
    const parts = stats
        ? [
              { label: "Delivered", value: stats.deliveredRate, color: "#16A34A", dot: "bg-[#16A34A]" },
              { label: "Replied", value: stats.replyRate, color: "#8B5CF6", dot: "bg-[#8B5CF6]" },
              { label: "Failed", value: stats.failedRate, color: "#D1D5DB", dot: "bg-gray-300" },
          ]
        : [];
    const total = parts.reduce((sum, p) => sum + p.value, 0) || 1;
    let offset = 0;

    return (
        <div className={`${cardCls} p-5`}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">Channel Usage (This Month)</h3>
            <div className="mt-4 flex items-center gap-5">
                <div className="relative h-[120px] w-[120px] shrink-0">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r={R} fill="none" stroke="#E5E7EB" strokeWidth="12" className="dark:opacity-20" />
                        {parts.map((p) => {
                            const len = (p.value / total) * C;
                            const el = (
                                <circle
                                    key={p.label}
                                    cx="60"
                                    cy="60"
                                    r={R}
                                    fill="none"
                                    stroke={p.color}
                                    strokeWidth="12"
                                    strokeDasharray={`${len} ${C - len}`}
                                    strokeDashoffset={-offset}
                                />
                            );
                            offset += len;
                            return el;
                        })}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-base font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]">{stats ? fmt(stats.messagesSent) : "—"}</p>
                        <p className="text-[9px] text-gray-500">Total Messages</p>
                    </div>
                </div>

                <ul className="flex-1 space-y-2 text-xs text-gray-700 dark:text-[var(--color-txtlight)]/80">
                    {(parts.length
                        ? parts
                        : [
                              { label: "Delivered", value: null, dot: "bg-[#16A34A]" },
                              { label: "Replied", value: null, dot: "bg-[#8B5CF6]" },
                              { label: "Failed", value: null, dot: "bg-gray-300" },
                          ]
                    ).map((p) => (
                        <li key={p.label} className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                                {p.label}
                            </span>
                            <b>{p.value === null ? "—" : `${p.value}%`}</b>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

/* ── Placeholders + settings ─────────────────────────────────────── */
const EmptyState = ({ title, text }: { title: string; text: string }) => (
    <div className={`${cardCls} flex flex-col items-center justify-center px-6 py-16 text-center`}>
        <p className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">{title}</p>
        <p className="mt-1 max-w-sm text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60">{text}</p>
    </div>
);

const SettingsPanel = ({
    account,
    isDisconnecting,
    onDisconnect,
}: {
    account: BaileysAccount | null;
    isDisconnecting: boolean;
    onDisconnect: () => void;
}) => {
    const name = account?.name ?? "WhatsApp";

    return (
        <div className={`${cardCls} p-6 space-y-6 max-w-2xl`}>
            <div className="flex items-center gap-4">
                {account?.imageUrl ? (
                    <img src={account.imageUrl} alt={name} className="h-14 w-14 rounded-full object-cover shadow-sm shrink-0 ring-2 ring-[#25D366]" />
                ) : (
                    <div className="h-14 w-14 bg-[#128C7E] rounded-full flex items-center justify-center text-white font-bold text-lg uppercase shrink-0 ring-2 ring-[#25D366]">
                        {name.charAt(0)}
                    </div>
                )}
                <div className="min-w-0">
                    <p className="text-base font-bold text-gray-900 dark:text-[var(--color-txtlight)] truncate">{name}</p>
                    <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                        {account?.phone ? `+${account.phone}` : "—"}
                    </p>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/5 p-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-[var(--color-txtlight)]">Disconnect this channel</p>
                <p className="mt-1 text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60">
                    This only unlinks this device from your WhatsApp account — your WhatsApp itself is not affected.
                </p>
                <button
                    onClick={onDisconnect}
                    disabled={isDisconnecting}
                    className="mt-3 flex items-center gap-2 rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/10 px-4 py-2.5 text-xs font-semibold text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/20 disabled:opacity-50 cursor-pointer"
                >
                    {isDisconnecting ? <SpinnerIcon className="h-3.5 w-3.5 animate-spin" /> : <PowerIcon className="h-3.5 w-3.5" />}
                    {isDisconnecting ? "Disconnecting..." : "Disconnect Account"}
                </button>
            </div>
        </div>
    );
};

/* ── Workspace ───────────────────────────────────────────────────── */
const TABS: { id: WorkspaceTab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "campaigns", label: "Campaigns" },
    { id: "templates", label: "Templates" },
    { id: "automations", label: "Automations" },
    { id: "settings", label: "Settings" },
];

export default function BaileysWorkspace({ account, isDisconnecting, onDisconnect, settingsSignal }: Props) {
    const [tab, setTab] = useState<WorkspaceTab>("overview");

    // Jump to Settings when the parent bumps the signal (ignore the value we mounted with)
    const lastSignal = useRef(settingsSignal);
    useEffect(() => {
        if (settingsSignal !== lastSignal.current) {
            lastSignal.current = settingsSignal;
            setTab("settings");
        }
    }, [settingsSignal]);

    // TODO: load Baileys stats + recent campaigns from your API and replace these.
    const stats: OverviewStats | null = null;
    const campaigns: RecentCampaign[] = [];

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                    {TABS.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                                tab === t.id
                                    ? "bg-[#E7F7EE] text-[#128C7E] dark:bg-[#128C7E]/20 dark:text-[#25D366]"
                                    : "text-gray-600 hover:bg-[var(--color-primary-lighter)]/60 dark:text-[var(--color-txtlight)]/70 dark:hover:bg-[var(--color-childbgdark)]"
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setTab("campaigns")}
                    className="flex items-center gap-2 rounded-xl bg-[#128C7E] hover:bg-[#0F7A6E] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all cursor-pointer"
                >
                    <PlusIcon className="h-4 w-4" />
                    Create Campaign
                </button>
            </div>

            {tab === "overview" && (
                <div className="space-y-5">
                    <StatsRow stats={stats} />
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5 items-start">
                        <RecentCampaigns campaigns={campaigns} />
                        <ChannelUsage stats={stats} />
                    </div>
                </div>
            )}

            {tab === "campaigns" && (
                <EmptyState
                    title="Campaigns for Baileys"
                    text="Baileys campaign tools aren't wired up yet. Build them here — this file only affects the Baileys side."
                />
            )}

            {tab === "templates" && (
                <EmptyState
                    title="Templates are a Meta feature"
                    text="Message templates only apply to the official Meta Cloud API. Baileys sessions send regular messages, so there's nothing to manage here."
                />
            )}

            {tab === "automations" && <EmptyState title="Automations coming soon" text="Automated follow-ups and triggers will show up here." />}

            {tab === "settings" && <SettingsPanel account={account} isDisconnecting={isDisconnecting} onDisconnect={onDisconnect} />}
        </div>
    );
}