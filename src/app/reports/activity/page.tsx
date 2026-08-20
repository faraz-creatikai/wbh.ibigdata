"use client";

// src/app/(dashboard)/activity/page.tsx   <-- put it wherever your routes live

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    getActivityFeed,
    getActivitySummary,
    getActivityUsers,
    getActivityTimeline,
    getTouchedCustomers,
    getTouchedFollowups,
    getRecordDetail,
} from "@/store/activity/activity";
import type {
    ActivityAction,
    ActivityItem,
    ActivitySummaryRow,
    ActivityUser,
    PresencePayload,
    TimelineSession,
    TouchedCustomer,
    TouchedFollowup,
    RecordDetailResponse,
} from "@/store/activity/activity.interface";
import { getSocket, initSocket } from "@/socket/socket"; // <-- your existing socket file
import { checkAuthAdmin } from "@/store/auth";


// ─── EDIT THESE to match your existing CRM pages ──────────────────────────────
export const CRM_ROUTES = {
    customer: (id: string) => `/customer/${id}`,
    followup: (customerId: string | null, followupId: string) => `/followups/customer`,
    user: (id: string) => `/users/edit/${id}`,
    /*  followup: (customerId: string | null, followupId: string) =>
         customerId ? `/customer/view/${customerId}?followup=${followupId}` : `/followup/${followupId}`, */
};

/** lets any nested row open the record preview drawer without prop drilling */
const ViewCtx = createContext<((entity: "customer" | "followup", id: string) => void) | null>(null);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const pad = (n: number) => String(n).padStart(2, "0");

function toInputDate(d: Date) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function fmtDate(iso?: string | null) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtTime(iso?: string | null) {
    if (!iso) return "—";
    return new Date(iso).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
}

function fmtDuration(sec = 0) {
    if (sec < 60) return `${sec}s`;
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (h === 0) return `${m}m`;
    return `${h}h ${m}m`;
}

function timeAgo(iso: string) {
    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return fmtDate(iso);
}

function initials(name = "?") {
    return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

const ROLE_LABEL: Record<string, string> = {
    administrator: "Administrator",
    client_admin: "Client Admin",
    city_admin: "City Admin",
    user: "User",
    agent: "Agent",
};

const ACTION_STYLE: Record<string, { bg: string; text: string; dot: string; label: string; icon: string }> = {
    create: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", label: "Added", icon: "＋" },
    update: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", label: "Edited", icon: "✎" },
    delete: { bg: "bg-red-50", text: "text-red-600", dot: "bg-red-500", label: "Deleted", icon: "🗑" },
    assign: { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500", label: "Assigned", icon: "→" },
    unassign: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400", label: "Unassigned", icon: "←" },
    login: { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500", label: "Login", icon: "⏻" },
    logout: { bg: "bg-slate-100", text: "text-slate-500", dot: "bg-slate-400", label: "Logout", icon: "⏻" },
};

const ENTITY_LABEL: Record<string, string> = {
    customer: "Customer",
    followup: "Follow-up",
    property: "Property",
    contact: "Contact",
    admin: "User",
};

const ENTITY_OPTIONS = ["customer", "followup"];
const ACTION_OPTIONS = ["create", "update", "delete", "assign", "unassign"];

// ─── Small UI pieces ──────────────────────────────────────────────────────────

function Avatar({ name, online, size = 34 }: { name: string; online?: boolean; size?: number }) {
    return (
        <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
            <div
                className="flex h-full w-full items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[11px] font-bold text-[var(--color-primary)]"
            >
                {initials(name)}
            </div>
            {online !== undefined && (
                <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${online ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                />
            )}
        </div>
    );
}

function ActionBadge({ action }: { action: ActivityAction }) {
    const s = ACTION_STYLE[action] ?? ACTION_STYLE.update;
    return (
        <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[10px] font-bold ${s.bg} ${s.text}`}>
            <span className="text-[9px]">{s.icon}</span>
            {s.label}
        </span>
    );
}

function StatCard({ label, value, sub, tone = "primary" }: { label: string; value: string | number; sub?: string; tone?: string }) {
    const tones: Record<string, string> = {
        primary: "text-[var(--color-primary)] bg-[var(--color-primary-lighter)] border-[var(--color-primary-light)]",
        emerald: "text-emerald-700 bg-emerald-50 border-emerald-100",
        amber: "text-amber-700 bg-amber-50 border-amber-100",
        red: "text-red-600 bg-red-50 border-red-100",
        violet: "text-violet-700 bg-violet-50 border-violet-100",
        slate: "text-slate-600 bg-slate-50 border-slate-200",
    };
    return (
        <div className="rounded-2xl border border-[var(--color-primary-light)] bg-white p-4 shadow-sm transition-all hover:shadow-md">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
                <p className="text-2xl font-bold leading-none text-slate-800">{value}</p>
                <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-bold ${tones[tone]}`}>{sub ?? ""}</span>
            </div>
        </div>
    );
}

function RowSkeleton({ cols = 4 }: { cols?: number }) {
    return (
        <div className="flex items-center gap-3 border-b border-[var(--color-primary-light)] px-4 py-3 animate-pulse">
            <div className="h-8 w-8 rounded-xl bg-[var(--color-primary-lighter)]" />
            <div className="flex-1 space-y-1.5">
                <div className="h-3 w-32 rounded bg-[var(--color-primary-lighter)]" />
                <div className="h-2.5 w-20 rounded bg-[var(--color-primary-lighter)]" />
            </div>
            {Array.from({ length: cols }).map((_, i) => (
                <div key={i} className="h-3 w-8 rounded bg-[var(--color-primary-lighter)]" />
            ))}
        </div>
    );
}

function Empty({ text, hint }: { text: string; hint?: string }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-primary-light)] py-14 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-lighter)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" />
                </svg>
            </div>
            <p className="text-sm font-bold text-slate-600">{text}</p>
            {hint && <p className="mt-1 max-w-xs text-xs text-slate-400">{hint}</p>}
        </div>
    );
}

// ─── Activity row (used in feed + timeline) ───────────────────────────────────

function ActivityRow({ a, showUser = true, hideView = false }: { a: ActivityItem; showUser?: boolean; hideView?: boolean }) {
    const onView = useContext(ViewCtx);
    const s = ACTION_STYLE[a.action] ?? ACTION_STYLE.update;
    const viewableId = a.entity === "customer" ? a.customerId : a.followupId;
    const canView = !hideView && !!onView && !!viewableId && a.action !== "delete";
    const changed: string[] = a.meta?.changed ?? [];

    return (
        <div className="group flex gap-3 px-4 py-3 transition-colors hover:bg-[var(--color-primary-lighter)]/50">
            <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${s.dot}`} />
            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                    {showUser && (
                        <span className="text-xs font-bold text-slate-700">{a.admin?.name ?? "Unknown"}</span>
                    )}
                    <ActionBadge action={a.action} />
                    <span className="text-xs text-slate-400">{ENTITY_LABEL[a.entity] ?? a.entity}</span>
                </div>

                <p className="mt-0.5 truncate text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{a.entityName || "—"}</span>
                    {a.target && (
                        <span className="text-slate-400"> · to {a.target.name}</span>
                    )}
                    {a.meta?.StatusType && (
                        <span className="text-slate-400"> · {a.meta.StatusType}</span>
                    )}
                </p>

                {changed.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                        {changed.slice(0, 5).map((f) => (
                            <span key={f} className="rounded-md border border-[var(--color-primary-light)] bg-white px-1.5 py-0.5 text-[9px] font-semibold text-slate-500">
                                {f}
                            </span>
                        ))}
                        {changed.length > 5 && (
                            <span className="text-[9px] font-semibold text-slate-400">+{changed.length - 5} more</span>
                        )}
                    </div>
                )}
            </div>

            <div className="flex flex-shrink-0 items-center gap-2">
                <div className="text-right">
                    <p className="text-[10px] font-semibold text-slate-400">{timeAgo(a.createdAt)}</p>
                    <p className="text-[10px] text-slate-300">{fmtTime(a.createdAt)}</p>
                </div>
                {!hideView && (
                    canView ? (
                        <ViewButton onClick={() => onView!(a.entity as any, viewableId!)} />
                    ) : (
                        <ViewButton disabled onClick={() => { }} />
                    )
                )}
            </div>
        </div>
    );
}

// ─── Timeline Drawer ──────────────────────────────────────────────────────────

function TimelineDrawer({
    adminId,
    params,
    onlineIds,
    onClose,
}: {
    adminId: string;
    params: string;
    onlineIds: Set<string>;
    onClose: () => void;
}) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<ActivityUser | null>(null);
    const [sessions, setSessions] = useState<TimelineSession[]>([]);
    const [unlinked, setUnlinked] = useState<ActivityItem[]>([]);
    const [open, setOpen] = useState<string | null>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const res = await getActivityTimeline(adminId, params);
            if (res?.success) {
                setUser(res.user);
                setSessions(res.timeline ?? []);
                setUnlinked(res.unlinkedActivities ?? []);
                setOpen(res.timeline?.[0]?.sessionId ?? null);
            }
            setLoading(false);
        })();
    }, [adminId, params]);

    const totals = useMemo(() => {
        const acts = sessions.reduce((n, s) => n + s.totalActivities, 0) + unlinked.length;
        const secs = sessions.reduce((n, s) => n + (s.durationSec || 0), 0);
        return { acts, secs, sessions: sessions.length };
    }, [sessions, unlinked]);

    const isOnline = user ? onlineIds.has(user.id) : false;

    return (
        <>
            <div className="fixed cursor-pointer inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={onClose} />
            <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300">
                {/* header */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--color-primary-light)] px-6 py-5">
                    <div className="flex items-center gap-3">
                        <Avatar name={user?.name ?? "…"} online={isOnline} size={40} />
                        <div>
                            <h2 className="text-base font-bold text-slate-800">{user?.name ?? "Loading…"}</h2>
                            <div className="mt-1 flex items-center gap-2">
                                <span className="rounded-lg bg-[var(--color-primary-lighter)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-primary)]">
                                    {ROLE_LABEL[user?.role ?? ""] ?? user?.role}
                                </span>
                                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${isOnline ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                                    <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "animate-pulse bg-emerald-500" : "bg-slate-400"}`} />
                                    {isOnline ? "Online now" : "Offline"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all hover:bg-slate-50 hover:text-slate-600">✕</button>
                </div>

                {/* mini stats */}
                <div className="grid grid-cols-3 gap-px border-b border-[var(--color-primary-light)] bg-[var(--color-primary-light)]">
                    {[
                        { l: "Sessions", v: totals.sessions },
                        { l: "Online time", v: fmtDuration(totals.secs) },
                        { l: "Activities", v: totals.acts },
                    ].map((x) => (
                        <div key={x.l} className="bg-white px-4 py-3 text-center">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{x.l}</p>
                            <p className="mt-1 text-sm font-bold text-slate-800">{x.v}</p>
                        </div>
                    ))}
                </div>

                {/* body */}
                <div className="flex-1 overflow-y-auto px-6 py-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        Online / Offline Timeline
                    </p>

                    {loading ? (
                        <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <RowSkeleton key={i} cols={2} />)}</div>
                    ) : sessions.length === 0 && unlinked.length === 0 ? (
                        <Empty text="No sessions in this range" hint="This user was not online during the selected dates." />
                    ) : (
                        <div className="relative space-y-3 pl-5">
                            {/* vertical line */}
                            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-primary-light)]" />

                            {sessions.map((s) => {
                                const isOpen = open === s.sessionId;
                                return (
                                    <div key={s.sessionId} className="relative">
                                        <span className={`absolute -left-5 top-4 h-3 w-3 rounded-full border-2 border-white ${s.isOnline ? "animate-pulse bg-emerald-500" : "bg-[var(--color-primary)]"}`} />

                                        <div className="overflow-hidden rounded-xl border border-[var(--color-primary-light)] bg-white">
                                            <button
                                                onClick={() => setOpen(isOpen ? null : s.sessionId)}
                                                className="flex cursor-pointer w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-primary-lighter)]/60"
                                            >
                                                <div className="min-w-0">
                                                    <p className="text-xs font-bold text-slate-700">
                                                        {fmtDate(s.loginAt)} · {fmtTime(s.loginAt)}
                                                        <span className="text-slate-300"> → </span>
                                                        {s.isOnline
                                                            ? <span className="text-emerald-600">still online</span>
                                                            : fmtTime(s.logoutAt)}
                                                    </p>
                                                    <p className="mt-0.5 text-[10px] text-slate-400">
                                                        {fmtDuration(s.durationSec)} online · {s.totalActivities} {s.totalActivities === 1 ? "activity" : "activities"}
                                                        {s.ip ? ` · ${s.ip}` : ""}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {s.totalActivities > 0 && (
                                                        <span className="rounded-lg bg-[var(--color-primary-lighter)] px-2 py-1 text-[10px] font-bold text-[var(--color-primary)]">
                                                            {s.totalActivities}
                                                        </span>
                                                    )}
                                                    <span className={`text-slate-300 transition-transform ${isOpen ? "rotate-90" : ""}`}>›</span>
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <div className="border-t border-[var(--color-primary-light)] bg-slate-50/50">
                                                    {/* per-session counts */}
                                                    {Object.keys(s.counts).length > 0 && (
                                                        <div className="flex flex-wrap gap-1.5 px-4 pt-3">
                                                            {Object.entries(s.counts).map(([k, v]) => {
                                                                const [entity, action] = k.split("_");
                                                                const st = ACTION_STYLE[action] ?? ACTION_STYLE.update;
                                                                return (
                                                                    <span key={k} className={`rounded-lg px-2 py-0.5 text-[10px] font-bold ${st.bg} ${st.text}`}>
                                                                        {st.label} {ENTITY_LABEL[entity] ?? entity} · {v}
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                    <div className="divide-y divide-[var(--color-primary-light)]">
                                                        {s.activities.length === 0 ? (
                                                            <p className="px-4 py-4 text-center text-xs italic text-slate-300">No activity in this session</p>
                                                        ) : (
                                                            s.activities.map((a) => <ActivityRow key={a.id} a={a} showUser={false} />)
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {unlinked.length > 0 && (
                                <div className="relative">
                                    <span className="absolute -left-5 top-4 h-3 w-3 rounded-full border-2 border-white bg-slate-300" />
                                    <div className="overflow-hidden rounded-xl border border-dashed border-slate-300 bg-white">
                                        <div className="px-4 py-3">
                                            <p className="text-xs font-bold text-slate-600">Outside a tracked session</p>
                                            <p className="mt-0.5 text-[10px] text-slate-400">
                                                {unlinked.length} activities done while not connected (API / mobile / socket off)
                                            </p>
                                        </div>
                                        <div className="divide-y divide-[var(--color-primary-light)] border-t border-[var(--color-primary-light)] bg-slate-50/50">
                                            {unlinked.map((a) => <ActivityRow key={a.id} a={a} showUser={false} />)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="border-t border-[var(--color-primary-light)] px-6 py-4">
                    <button onClick={onClose} className="w-full cursor-pointer rounded-xl border-2 border-[var(--color-primary-light)] py-2.5 text-sm font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)]">
                        Close
                    </button>
                </div>
            </div>
        </>
    );
}

// ─── Record preview drawer (customer / follow-up) ─────────────────────────────

function RecordDrawer({
    entity,
    id,
    onClose,
}: {
    entity: "customer" | "followup";
    id: string;
    onClose: () => void;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [res, setRes] = useState<RecordDetailResponse | null>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const r = await getRecordDetail(entity, id);
            setRes(r?.success ? r : null);
            setLoading(false);
        })();
    }, [entity, id]);

    const rec = res?.record;
    const deleted = res?.isDeleted;

    const fields: { label: string; value: any }[] =
        entity === "customer"
            ? [
                { label: "Contact", value: rec?.ContactNumber },
                { label: "Email", value: rec?.Email },
                { label: "City", value: rec?.City },
                { label: "Location", value: rec?.Location },
                { label: "Campaign", value: rec?.Campaign },
                { label: "Type", value: rec?.CustomerType },
                { label: "Lead Type", value: rec?.LeadType },
                { label: "Temperature", value: rec?.LeadTemperature },
                { label: "Price", value: rec?.Price },
                { label: "Follow-ups", value: rec?.followupCount },
                { label: "Created By", value: rec?.createdBy?.name },
                { label: "Created On", value: rec ? fmtDate(rec.createdAt) : null },
            ]
            : [
                { label: "Customer", value: rec?.customer?.customerName },
                { label: "Contact", value: rec?.customer?.ContactNumber },
                { label: "City", value: rec?.customer?.City },
                { label: "Status", value: rec?.StatusType },
                { label: "Start Date", value: rec?.StartDate },
                { label: "Next Follow-up", value: rec?.FollowupNextDate },
                { label: "Created By", value: rec?.createdBy?.name },
                { label: "Created On", value: rec ? fmtDate(rec.createdAt) : null },
            ];

    const openFullPage = () => {
        if (!rec) return;
        onClose();
        router.push(
            entity === "customer"
                ? CRM_ROUTES.customer(rec.id)
                : CRM_ROUTES.followup(rec.customerId, rec.id)
        );
    };

    return (
        <>
            <div className="fixed cursor-pointer inset-0 z-[60] bg-black/30 backdrop-blur-sm" onClick={onClose} />
            <div className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-lg flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-300">
                {/* header */}
                <div className="flex items-start justify-between gap-3 border-b border-[var(--color-primary-light)] px-6 py-5">
                    <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                            {ENTITY_LABEL[entity]} Details
                        </p>
                        <h2 className="mt-1 truncate text-base font-bold text-slate-800">
                            {loading
                                ? "Loading…"
                                : entity === "customer"
                                    ? rec?.customerName ?? "Deleted record"
                                    : rec?.customer?.customerName ?? "Deleted record"}
                        </h2>
                        {deleted && (
                            <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Deleted
                            </span>
                        )}
                    </div>
                    <button onClick={onClose} className="flex cursor-pointer h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-all hover:bg-slate-50 hover:text-slate-600">✕</button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {loading ? (
                        <div className="space-y-3 p-6">
                            {Array.from({ length: 6 }).map((_, i) => <RowSkeleton key={i} cols={1} />)}
                        </div>
                    ) : !res ? (
                        <div className="p-6"><Empty text="Could not load this record" hint="It may be outside your access scope." /></div>
                    ) : (
                        <>
                            {deleted ? (
                                <div className="px-6 py-5">
                                    <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                                        <p className="text-xs font-bold text-red-600">This record was deleted</p>
                                        <p className="mt-0.5 text-[11px] text-red-400">
                                            It no longer exists in the database. Below is what was captured at delete time.
                                        </p>
                                    </div>
                                    {res.snapshot && (
                                        <dl className="mt-4 space-y-2">
                                            {Object.entries(res.snapshot)
                                                .filter(([k]) => !["ip", "changed"].includes(k))
                                                .map(([k, v]) => (
                                                    <div key={k} className="flex items-center justify-between gap-3 border-b border-[var(--color-primary-light)] py-2 last:border-0">
                                                        <dt className="text-[11px] capitalize text-slate-400">{k}</dt>
                                                        <dd className="truncate text-xs font-semibold text-slate-600">{String(v ?? "—")}</dd>
                                                    </div>
                                                ))}
                                        </dl>
                                    )}
                                </div>
                            ) : (
                                <div className="px-6 py-5">
                                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">Overview</p>
                                    <dl className="grid grid-cols-2 gap-x-4">
                                        {fields.map(({ label, value }) => (
                                            <div key={label} className="border-b border-[var(--color-primary-light)] py-2.5">
                                                <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</dt>
                                                <dd className="mt-0.5 truncate text-xs font-semibold text-slate-700">
                                                    {value === null || value === undefined || value === "" ? "—" : String(value)}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>

                                    {entity === "customer" && rec?.assignedTo?.length > 0 && (
                                        <div className="mt-4">
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Assigned To</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {rec.assignedTo.map((u: ActivityUser) => (
                                                    <span key={u.id} className="rounded-lg bg-[var(--color-primary-lighter)] px-2.5 py-1 text-[10px] font-bold text-[var(--color-primary)]">
                                                        {u.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {rec?.Description && (
                                        <div className="mt-4">
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Description</p>
                                            <p className="rounded-xl border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] p-3 text-xs leading-relaxed text-slate-600">
                                                {rec.Description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* record history */}
                            <div className="border-t border-[var(--color-primary-light)]">
                                <p className="px-6 pb-1 pt-5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                                    History ({res.history.length})
                                </p>
                                <div className="divide-y divide-[var(--color-primary-light)]">
                                    {res.history.map((a) => <ActivityRow key={a.id} a={a} hideView />)}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex gap-3 border-t border-[var(--color-primary-light)] px-6 py-4">
                    <button onClick={onClose} className="flex-1 cursor-pointer rounded-xl border-2 border-[var(--color-primary-light)] py-2.5 text-sm font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)]">
                        Close
                    </button>
                    <button
                        onClick={openFullPage}
                        disabled={!rec}
                        className="flex-1 cursor-pointer rounded-xl bg-[var(--color-primary)] py-2.5 text-sm font-bold text-white transition-all hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Open full page →
                    </button>
                </div>
            </div>
        </>
    );
}

// ─── Touched records panel (Customers / Follow-ups tabs) ──────────────────────

function ViewButton({ disabled, onClick }: { disabled?: boolean; onClick: () => void }) {
    return (
        <button
            onClick={(e) => { e.stopPropagation(); if (!disabled) onClick(); }}
            disabled={disabled}
            title={disabled ? "Record was deleted" : "View details"}
            className={`flex flex-shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-all
        ${disabled
                    ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300"
                    : "cursor-pointer border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"}`}
        >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
            </svg>
            View
        </button>
    );
}

function DeletedBadge() {
    return (
        <span className="inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold text-red-600">
            <span className="h-1 w-1 rounded-full bg-red-500" /> Deleted
        </span>
    );
}

function TouchedRecordsPanel({ params }: { params: string }) {
    const onView = useContext(ViewCtx);
    const [tab, setTab] = useState<"customer" | "followup">("customer");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState<TouchedCustomer[]>([]);
    const [followups, setFollowups] = useState<TouchedFollowup[]>([]);
    const [pg, setPg] = useState({ page: 1, limit: 20, total: 0, totalPages: 1 });

    useEffect(() => { setPage(1); }, [params, tab]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const p = new URLSearchParams(params);
            p.set("page", String(page));
            p.set("limit", "20");
            const res = tab === "customer"
                ? await getTouchedCustomers(p.toString())
                : await getTouchedFollowups(p.toString());
            if (res?.success) {
                if (tab === "customer") setCustomers(res.data ?? []);
                else setFollowups(res.data ?? []);
                setPg(res.pagination ?? { page: 1, limit: 20, total: 0, totalPages: 1 });
            }
            setLoading(false);
        })();
    }, [tab, params, page]);

    const rows = tab === "customer" ? customers : followups;

    return (
        <div className="overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm">
            {/* tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-primary-light)] px-5 py-4">
                <div>
                    <h2 className="text-sm font-bold text-slate-800">Records Touched</h2>
                    <p className="text-[11px] text-slate-400">Every customer & follow-up affected in this date range</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex overflow-hidden rounded-xl border-2 border-[var(--color-primary-light)] bg-white">
                        {(["customer", "followup"] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-4 py-2 cursor-pointer text-xs font-bold transition-all
                  ${tab === t
                                        ? "bg-[var(--color-primary)] text-white"
                                        : "text-slate-500 hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary)]"}`}
                            >
                                {t === "customer" ? "Customers" : "Follow-ups"}
                            </button>
                        ))}
                    </div>
                    <span className="rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-3 py-1 text-[10px] font-bold text-[var(--color-primary)]">
                        {pg.total} total
                    </span>
                </div>
            </div>

            {/* list */}
            <div className="divide-y divide-[var(--color-primary-light)]">
                {loading ? (
                    Array.from({ length: 6 }).map((_, i) => <RowSkeleton key={i} cols={3} />)
                ) : rows.length === 0 ? (
                    <div className="p-5">
                        <Empty
                            text={tab === "customer" ? "No customers touched" : "No follow-ups touched"}
                            hint="Nothing was added, edited or deleted in this range."
                        />
                    </div>
                ) : tab === "customer" ? (
                    customers.map((c) => (
                        <div key={c.customerId} className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-[var(--color-primary-lighter)]/50">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[11px] font-bold text-[var(--color-primary)]">
                                {initials(c.customerName)}
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <p className="truncate text-xs font-bold text-slate-700">{c.customerName}</p>
                                    {c.isDeleted && <DeletedBadge />}
                                    {c.dealClosed && (
                                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">Deal Closed</span>
                                    )}
                                </div>
                                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                                    {[c.contact, c.city, c.campaign].filter(Boolean).join(" · ") || "—"}
                                </p>
                            </div>

                            {/* count chips */}
                            <div className="hidden flex-shrink-0 items-center gap-1 sm:flex">
                                {(["create", "update", "delete", "assign"] as const).map((a) =>
                                    c.counts?.[a] ? (
                                        <span key={a} className={`rounded-lg px-2 py-0.5 text-[10px] font-bold ${ACTION_STYLE[a].bg} ${ACTION_STYLE[a].text}`}>
                                            {ACTION_STYLE[a].label} {c.counts[a]}
                                        </span>
                                    ) : null
                                )}
                            </div>

                            <div className="hidden w-28 flex-shrink-0 text-right md:block">
                                <p className="truncate text-[11px] font-semibold text-slate-600">{c.lastBy?.name ?? "—"}</p>
                                <p className="text-[10px] text-slate-400">{timeAgo(c.lastActivityAt)}</p>
                            </div>

                            <ViewButton
                                disabled={c.isDeleted}
                                onClick={() => onView?.("customer", c.customerId)}
                            />
                        </div>
                    ))
                ) : (
                    followups.map((f) => (
                        <div key={f.followupId} className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-[var(--color-primary-lighter)]/50">
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-[11px] font-bold text-violet-600">
                                ☎
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <p className="truncate text-xs font-bold text-slate-700">{f.customerName}</p>
                                    {f.isDeleted && <DeletedBadge />}
                                    {f.StatusType && (
                                        <span className="rounded-full bg-[var(--color-primary-lighter)] px-2 py-0.5 text-[9px] font-bold text-[var(--color-primary)]">
                                            {f.StatusType}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                                    {[f.contact, f.city].filter(Boolean).join(" · ")}
                                    {f.FollowupNextDate ? ` · next ${f.FollowupNextDate}` : ""}
                                </p>
                            </div>

                            <div className="hidden flex-shrink-0 items-center gap-1 sm:flex">
                                <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                                    {f.totalActivities} {f.totalActivities === 1 ? "action" : "actions"}
                                </span>
                                {f.lastAction && <ActionBadge action={f.lastAction} />}
                            </div>

                            <div className="hidden w-28 flex-shrink-0 text-right md:block">
                                <p className="truncate text-[11px] font-semibold text-slate-600">{f.lastBy?.name ?? "—"}</p>
                                <p className="text-[10px] text-slate-400">{timeAgo(f.lastActivityAt)}</p>
                            </div>

                            <ViewButton
                                disabled={f.isDeleted}
                                onClick={() => onView?.("followup", f.followupId)}
                            />
                        </div>
                    ))
                )}
            </div>

            {pg.totalPages > 1 && (
                <div className="flex items-center justify-between gap-2 border-t border-[var(--color-primary-light)] px-5 py-3">
                    <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-3 py-1.5 text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40">
                        ← Prev
                    </button>
                    <span className="text-[11px] font-semibold text-slate-400">
                        {(pg.page - 1) * pg.limit + 1}–{Math.min(pg.page * pg.limit, pg.total)} of {pg.total}
                    </span>
                    <button disabled={page >= pg.totalPages} onClick={() => setPage((p) => p + 1)}
                        className="rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-3 py-1.5 text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40">
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const DENIED_ROLES = ["user", "agent"];

export default function UserActivityPage() {
    const router = useRouter();
    // auth
    const [me, setMe] = useState<any>(null);
    const [authChecked, setAuthChecked] = useState(false);

    // data
    const [users, setUsers] = useState<ActivityUser[]>([]);
    const [summary, setSummary] = useState<ActivitySummaryRow[]>([]);
    const [totals, setTotals] = useState({ users: 0, activities: 0, onlineSeconds: 0 });
    const [feed, setFeed] = useState<ActivityItem[]>([]);
    const [pagination, setPagination] = useState({ page: 1, limit: 25, total: 0, totalPages: 1 });

    // ui
    const [loadingSummary, setLoadingSummary] = useState(true);
    const [loadingFeed, setLoadingFeed] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [drawerId, setDrawerId] = useState<string | null>(null);
    const [record, setRecord] = useState<{ entity: "customer" | "followup"; id: string } | null>(null);
    const openRecord = (entity: "customer" | "followup", id: string) => setRecord({ entity, id });
    const [onlineIds, setOnlineIds] = useState<Set<string>>(new Set());
    const [flash, setFlash] = useState<PresencePayload | null>(null);

    // filters
    const monthAgo = new Date(Date.now() - 29 * 86400000);
    const today = new Date();
    const TODAY = toInputDate(today);

    const [from, setFrom] = useState(TODAY);
    const [to, setTo] = useState(TODAY);
    const [adminId, setAdminId] = useState("");
    const [entity, setEntity] = useState("");
    const [action, setAction] = useState("");
    const [search, setSearch] = useState("");
    const [debSearch, setDebSearch] = useState("");
    const [page, setPage] = useState(1);

    const debRef = useRef<NodeJS.Timeout | null>(null);

    const onSearch = (v: string) => {
        setSearch(v);
        if (debRef.current) clearTimeout(debRef.current);
        debRef.current = setTimeout(() => { setDebSearch(v); setPage(1); }, 400);
    };

    const rangeParams = useMemo(() => {
        const p = new URLSearchParams();
        if (from) p.set("from", from);
        if (to) p.set("to", to);
        return p.toString();
    }, [from, to]);

    const summaryParams = useMemo(() => {
        const p = new URLSearchParams(rangeParams);
        if (adminId) p.set("adminId", adminId);
        return p.toString();
    }, [rangeParams, adminId]);

    const feedParams = useMemo(() => {
        const p = new URLSearchParams(summaryParams);
        if (entity) p.set("entity", entity);
        if (action) p.set("action", action);
        if (debSearch.trim()) p.set("search", debSearch.trim());
        p.set("page", String(page));
        p.set("limit", "25");
        return p.toString();
    }, [summaryParams, entity, action, debSearch, page]);

    /** range + user + action + search — no entity, no page (panel owns its paging) */
    const recordParams = useMemo(() => {
        const p = new URLSearchParams(summaryParams);
        if (action) p.set("action", action);
        if (debSearch.trim()) p.set("search", debSearch.trim());
        return p.toString();
    }, [summaryParams, action, debSearch]);

    // ── auth ──────────────────────────────────────────────────────────────────
    useEffect(() => {
        (async () => {
            const res: any = await checkAuthAdmin();
            const adm = res?.data ?? res?.admin ?? res?.user ?? null;
            setMe(adm);
            setAuthChecked(true);
        })();
    }, []);

    const hasAccess = !!me && (me.isSuperAdmin || !DENIED_ROLES.includes(me.role));

    // ── socket : live online / offline ────────────────────────────────────────
    useEffect(() => {
        if (!hasAccess || !me) return;
        const socket = getSocket() ?? initSocket(me.id ?? me._id);
        if (!socket) return;

        const onPresence = (p: PresencePayload) => {
            setOnlineIds((prev) => {
                const next = new Set(prev);
                p.isOnline ? next.add(p.adminId) : next.delete(p.adminId);
                return next;
            });
            setSummary((prev) =>
                prev.map((r) => (r.user.id === p.adminId ? { ...r, isOnline: p.isOnline } : r))
            );
            setFlash(p);
            setTimeout(() => setFlash((f) => (f === p ? null : f)), 4000);
        };

        socket.on("activity:presence", onPresence);
        return () => { socket.off("activity:presence", onPresence); };
    }, [hasAccess, me]);

    // ── fetch users (once) ────────────────────────────────────────────────────
    useEffect(() => {
        if (!hasAccess) return;
        (async () => {
            const res = await getActivityUsers();
            if (res?.success) {
                setUsers(res.data);
                setOnlineIds(new Set(res.data.filter((u: ActivityUser) => u.isOnline).map((u: ActivityUser) => u.id)));
            }
        })();
    }, [hasAccess]);

    // ── fetch summary ─────────────────────────────────────────────────────────
    useEffect(() => {
        if (!hasAccess) return;
        (async () => {
            setLoadingSummary(true);
            const res = await getActivitySummary(summaryParams);
            if (res?.success) {
                setSummary(res.data ?? []);
                setTotals(res.totals ?? { users: 0, activities: 0, onlineSeconds: 0 });
                setError(null);
            } else setError(res?.message ?? "Failed to load summary");
            setLoadingSummary(false);
        })();
    }, [hasAccess, summaryParams]);

    // ── fetch feed ────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!hasAccess) return;
        (async () => {
            setLoadingFeed(true);
            const res = await getActivityFeed(feedParams);
            if (res?.success) {
                setFeed(res.data ?? []);
                setPagination(res.pagination ?? { page: 1, limit: 25, total: 0, totalPages: 1 });
            }
            setLoadingFeed(false);
        })();
    }, [hasAccess, feedParams]);

    // ── derived KPI numbers ───────────────────────────────────────────────────
    const kpi = useMemo(() => {
        const acc = { added: 0, edited: 0, deleted: 0, followups: 0, assigned: 0 };
        for (const r of summary) {
            acc.added += r.counts?.customer?.create ?? 0;
            acc.edited += r.counts?.customer?.update ?? 0;
            acc.deleted += r.counts?.customer?.delete ?? 0;
            acc.assigned += (r.counts?.customer?.assign ?? 0) + (r.counts?.customer?.unassign ?? 0);
            const f = r.counts?.followup ?? {};
            acc.followups += (f.create ?? 0) + (f.update ?? 0) + (f.delete ?? 0);
        }
        return acc;
    }, [summary]);

    const onlineCount = onlineIds.size;
    const isFiltered = !!(adminId || entity || action || debSearch);

    const resetFilters = () => {
        setAdminId(""); setEntity(""); setAction("");
        setSearch(""); setDebSearch(""); setPage(1);
        setFrom(TODAY); setTo(TODAY);
    };

    // ── guards ────────────────────────────────────────────────────────────────
    if (!authChecked) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" className="h-6 w-6 animate-spin">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
            </div>
        );
    }

    if (!hasAccess) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-md bg-gradient-to-br from-slate-50 to-white px-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-destructive)" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-800">Access Restricted</h2>
                <p className="mt-1 max-w-sm text-sm text-slate-400">
                    Activity reports are available to admins only. Please contact your administrator if you need access.
                </p>
            </div>
        );
    }

    // ── render ────────────────────────────────────────────────────────────────
    return (
        <ViewCtx.Provider value={openRecord}>
            <div className="min-h-screen overflow-hidden rounded-md bg-gradient-to-br from-slate-50 via-[var(--color-primary-lighter)] to-white">
                <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Instrument+Serif&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .heading-font { font-family: 'Instrument Serif', serif; }
        .animate-in { animation-fill-mode: both; }
        @keyframes slide-in-from-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slide-in-from-top { from { transform: translateY(-12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .slide-in-from-right { animation-name: slide-in-from-right; }
        .slide-in-from-top { animation-name: slide-in-from-top; }
        .duration-300 { animation-duration: 300ms; }
        @keyframes shimmer-skeleton { 0%{opacity:1} 50%{opacity:.5} 100%{opacity:1} }
        .animate-pulse { animation: shimmer-skeleton 1.5s ease-in-out infinite; }
      `}</style>

                {/* ── Header ──────────────────────────────────────────────────────── */}
                <header className="sticky top-0 border-b border-[var(--color-primary-light)] bg-white/80 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 max-md:px-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" />
                                </svg>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">User Activity</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                {onlineCount} online
                            </span>
                            <button
                                onClick={() => { setPage(1); setFrom(from); setTo(to); setDebSearch(debSearch + ""); }}
                                className="flex items-center cursor-pointer gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[var(--color-primary-dark)]"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                </svg>
                                Refresh
                            </button>
                        </div>
                    </div>
                </header>

                {/* live presence toast */}
                {flash && (
                    <div className="pointer-events-none fixed right-6 top-20 z-50 animate-in slide-in-from-top duration-300">
                        <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-primary-light)] bg-white px-4 py-2.5 shadow-lg">
                            <span className={`h-2 w-2 rounded-full ${flash.isOnline ? "bg-emerald-500" : "bg-slate-400"}`} />
                            <p className="text-xs font-semibold text-slate-700">
                                {flash.name} <span className="font-normal text-slate-400">
                                    {flash.isOnline ? "came online" : "went offline"}</span>
                            </p>
                        </div>
                    </div>
                )}

                <main className="mx-auto max-w-7xl px-6 py-8 max-md:px-3">
                    {/* Title */}
                    {/*  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-2">
                        <div className="h-px flex-1 bg-[var(--color-primary-light)]" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] opacity-60">Activity Report</span>
                        <div className="h-px flex-1 bg-[var(--color-primary-light)]" />
                    </div>
                    <h1 className="heading-font text-4xl leading-tight text-slate-800">User Activity</h1>
                    <p className="mt-1 text-sm text-slate-400">
                        Who did what, when they were online, and everything they touched in the CRM.
                    </p>
                </div> */}

                    {/* ── Filters ─────────────────────────────────────────────────── */}
                    <div className="mb-6 rounded-2xl border border-[var(--color-primary-light)] bg-white p-4 shadow-sm">
                        <div className="flex flex-wrap items-end gap-3">
                            {/* dates */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">From</label>
                                <input type="date" value={from} onChange={(e) => { setFrom(e.target.value); setPage(1); }}
                                    className="rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">To</label>
                                <input type="date" value={to} onChange={(e) => { setTo(e.target.value); setPage(1); }}
                                    className="rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]" />
                            </div>

                            {/* user */}
                            <div className="flex min-w-[160px] flex-1 flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">User</label>
                                <select value={adminId} onChange={(e) => { setAdminId(e.target.value); setPage(1); }}
                                    className="rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]">
                                    <option value="">All users</option>
                                    {users.map((u) => (
                                        <option key={u.id} value={u.id}>
                                            {u.name} — {ROLE_LABEL[u.role] ?? u.role}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* entity */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Module</label>
                                <select value={entity} onChange={(e) => { setEntity(e.target.value); setPage(1); }}
                                    className="rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]">
                                    <option value="">All modules</option>
                                    {ENTITY_OPTIONS.map((e) => <option key={e} value={e}>{ENTITY_LABEL[e]}</option>)}
                                </select>
                            </div>

                            {/* action */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Action</label>
                                <select value={action} onChange={(e) => { setAction(e.target.value); setPage(1); }}
                                    className="rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition-all focus:border-[var(--color-primary)]">
                                    <option value="">All actions</option>
                                    {ACTION_OPTIONS.map((a) => <option key={a} value={a}>{ACTION_STYLE[a].label}</option>)}
                                </select>
                            </div>

                            {/* quick ranges */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Quick</label>
                                <div className="flex overflow-hidden rounded-xl border-2 border-[var(--color-primary-light)] bg-white">
                                    {[
                                        { l: "Today", d: 0 },
                                        { l: "7D", d: 6 },
                                        { l: "30D", d: 29 },
                                    ].map(({ l, d }) => {
                                        const start = toInputDate(new Date(Date.now() - d * 86400000));
                                        const active = from === start && to === TODAY;
                                        return (
                                            <button
                                                key={l}
                                                onClick={() => { setFrom(start); setTo(TODAY); setPage(1); }}
                                                className={`cursor-pointer px-3 py-2 text-xs font-bold transition-all
                        ${active
                                                        ? "bg-[var(--color-primary)] text-white"
                                                        : "text-slate-500 hover:bg-[var(--color-primary-lighter)] hover:text-[var(--color-primary)]"}`}
                                            >
                                                {l}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* search */}
                            <div className="relative min-w-[180px] flex-1">
                                <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-slate-400">Search</label>
                                <input value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Customer or user name…"
                                    className="w-full rounded-xl border-2 border-[var(--color-primary-light)] bg-white px-3 py-2 text-xs text-slate-700 placeholder:text-slate-300 outline-none transition-all focus:border-[var(--color-primary)]" />
                            </div>

                            {isFiltered && (
                                <button onClick={resetFilters}
                                    className="rounded-xl cursor-pointer border-2 border-[var(--color-primary-light)] px-4 py-2 text-xs font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)]">
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-6 py-4">
                            <span className="text-lg">⚠️</span>
                            <p className="text-sm font-medium text-red-600">{error}</p>
                        </div>
                    )}

                    {/* ── KPI cards ───────────────────────────────────────────────── */}
                    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                        <StatCard label="Total Activities" value={totals.activities} sub="all" tone="primary" />
                        <StatCard label="Customers Added" value={kpi.added} sub="new" tone="emerald" />
                        <StatCard label="Customers Edited" value={kpi.edited} sub="edit" tone="amber" />
                        <StatCard label="Customers Deleted" value={kpi.deleted} sub="del" tone="red" />
                        <StatCard label="Follow-ups" value={kpi.followups} sub="all" tone="violet" />
                        <StatCard label="Total Online Time" value={fmtDuration(totals.onlineSeconds)} sub={`${totals.users} users`} tone="slate" />
                    </div>

                    {/* ── Body grid ───────────────────────────────────────────────── */}
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">

                        {/* ── LEFT : per user summary ─────────────────────────────── */}
                        <section className="xl:col-span-3">
                            <div className="overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm">
                                <div className="flex items-center justify-between border-b border-[var(--color-primary-light)] px-5 py-4">
                                    <div>
                                        <h2 className="text-sm font-bold text-slate-800">Team Performance</h2>
                                        <p className="text-[11px] text-slate-400">Click a user to open their online timeline</p>
                                    </div>
                                    <span className="rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-3 py-1 text-[10px] font-bold text-[var(--color-primary)]">
                                        {summary.length} users
                                    </span>
                                </div>

                                {/* table */}
                                <div className="overflow-x-auto">
                                    <div className="min-w-[620px]">
                                                                                <div className="grid grid-cols-12 gap-2 border-b border-[var(--color-primary-light)] bg-slate-50/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            <div className="col-span-3">User</div>
                                            <div className="col-span-1 text-center">Added</div>
                                            <div className="col-span-1 text-center">Edited</div>
                                            <div className="col-span-1 text-center">Deleted</div>
                                            <div className="col-span-1 text-center">F/ups</div>
                                            <div className="col-span-1 text-center">Total</div>
                                            <div className="col-span-2 text-right">Online</div>
                                            <div className="col-span-2 text-right">Action</div>
                                        </div>

                                        {loadingSummary ? (
                                            Array.from({ length: 6 }).map((_, i) => <RowSkeleton key={i} cols={5} />)
                                        ) : summary.length === 0 ? (
                                            <div className="p-5"><Empty text="No activity yet" hint="Nothing was recorded for the selected date range." /></div>
                                        ) : (
                                            summary.map((r) => {
                                                const c = r.counts ?? {};
                                                const f = c.followup ?? {};
                                                const followups = (f.create ?? 0) + (f.update ?? 0) + (f.delete ?? 0);
                                                const online = onlineIds.has(r.user.id);
                                                const openTimeline = () => setDrawerId(r.user.id);
                                                return (
                                                    <div
                                                        key={r.user.id}
                                                        role="button"
                                                        tabIndex={0}
                                                        onClick={openTimeline}
                                                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openTimeline(); } }}
                                                        className="grid cursor-pointer w-full grid-cols-12 items-center gap-2 border-b border-[var(--color-primary-light)] px-5 py-3 text-left transition-colors last:border-0 hover:bg-[var(--color-primary-lighter)]/60"
                                                    >
                                                        <div className="col-span-3 flex min-w-0 items-center gap-2.5">
                                                            <Avatar name={r.user.name} online={online} />
                                                            <div className="min-w-0">
                                                                <p className="truncate text-xs font-bold text-slate-700">{r.user.name}</p>
                                                                <p className="truncate text-[10px] text-slate-400">
                                                                    {ROLE_LABEL[r.user.role] ?? r.user.role}{r.user.city ? ` · ${r.user.city}` : ""}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-1 text-center text-xs font-bold text-emerald-600">{c.customer?.create ?? 0}</div>
                                                        <div className="col-span-1 text-center text-xs font-bold text-amber-600">{c.customer?.update ?? 0}</div>
                                                        <div className="col-span-1 text-center text-xs font-bold text-red-500">{c.customer?.delete ?? 0}</div>
                                                        <div className="col-span-1 text-center text-xs font-bold text-violet-600">{followups}</div>
                                                        <div className="col-span-1 text-center">
                                                            <span className="rounded-lg bg-[var(--color-primary-lighter)] px-2 py-0.5 text-xs font-bold text-[var(--color-primary)]">
                                                                {r.totalActivities}
                                                            </span>
                                                        </div>
                                                        <div className="col-span-2 text-right">
                                                            <p className="text-xs font-bold text-slate-700">{fmtDuration(r.onlineSeconds)}</p>
                                                            <p className="text-[10px] text-slate-400">{r.sessionCount} sessions</p>
                                                        </div>
                                                        <div className="col-span-2 flex justify-end">
                                                            <ViewButton onClick={() => router.push(CRM_ROUTES.user(r.user.id))} />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ── RIGHT : live feed ───────────────────────────────────── */}
                        <section className="xl:col-span-2">
                            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-primary-light)] bg-white shadow-sm">
                                <div className="flex items-center justify-between border-b border-[var(--color-primary-light)] px-5 py-4">
                                    <div>
                                        <h2 className="text-sm font-bold text-slate-800">Activity Feed</h2>
                                        <p className="text-[11px] text-slate-400">{pagination.total} records</p>
                                    </div>
                                    <span className="rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-3 py-1 text-[10px] font-bold text-[var(--color-primary)]">
                                        Page {pagination.page}/{pagination.totalPages || 1}
                                    </span>
                                </div>

                                <div className="max-h-[620px] flex-1 divide-y divide-[var(--color-primary-light)] overflow-y-auto">
                                    {loadingFeed ? (
                                        Array.from({ length: 8 }).map((_, i) => <RowSkeleton key={i} cols={1} />)
                                    ) : feed.length === 0 ? (
                                        <div className="p-5"><Empty text="No activities found" hint="Try widening the date range or clearing filters." /></div>
                                    ) : (
                                        feed.map((a) => <ActivityRow key={a.id} a={a} />)
                                    )}
                                </div>

                                {pagination.totalPages > 1 && (
                                    <div className="flex items-center justify-between gap-2 border-t border-[var(--color-primary-light)] px-5 py-3">
                                        <button
                                            disabled={page <= 1}
                                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                                            className="rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-3 py-1.5 text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40"
                                        >
                                            ← Prev
                                        </button>
                                        <span className="text-[11px] font-semibold text-slate-400">
                                            {(pagination.page - 1) * pagination.limit + 1}–
                                            {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                                        </span>
                                        <button
                                            disabled={page >= pagination.totalPages}
                                            onClick={() => setPage((p) => p + 1)}
                                            className="rounded-lg cursor-pointer border-2 border-[var(--color-primary-light)] px-3 py-1.5 text-[11px] font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary-lighter)] disabled:opacity-40"
                                        >
                                            Next →
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* ── Records touched (Customers / Follow-ups) ─────────────── */}
                    <div className="mt-5">
                        <TouchedRecordsPanel params={recordParams} />
                    </div>
                </main>

                {/* ── Timeline Drawer ─────────────────────────────────────────────── */}
                {drawerId && (
                    <TimelineDrawer
                        adminId={drawerId}
                        params={rangeParams}
                        onlineIds={onlineIds}
                        onClose={() => setDrawerId(null)}
                    />
                )}

                {/* ── Record Preview Drawer ───────────────────────────────────────── */}
                {record && (
                    <RecordDrawer
                        entity={record.entity}
                        id={record.id}
                        onClose={() => setRecord(null)}
                    />
                )}
            </div>
        </ViewCtx.Provider>
    );
}