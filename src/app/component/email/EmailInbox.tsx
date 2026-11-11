'use client';
/**
 * Email inbox — e.g. app/component/email/EmailInbox.tsx
 * Register it in the inbox page:  { id: 'email', label: 'Email', Component: EmailInbox }
 *
 * Shows ALL mail arriving in the connected mailbox (not only CRM leads); a message from a
 * known lead gets a small "Lead" tag. Fills its parent's height like the other inboxes.
 *
 * EXTENDING LATER (reply / templates)
 *   Pass `renderReplyArea` from the page (or edit the default below). It receives the full
 *   message — including `messageId` and `refs`, which a reply needs for In-Reply-To /
 *   References — and is rendered under the message body. A template picker + attachments
 *   can live entirely inside that component; nothing in this file has to change.
 */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
    downloadEmailAttachment,
    getEmailInboxStatus,
    getEmailMessage,
    listEmailMessages,
    syncEmailInbox,
    updateEmailMessages,
} from '@/store/masters/mail/mail';
import type {
    EmailAddress,
    EmailInboxStatus,
    EmailMessageDetail,
    EmailMessageFlags,
    EmailMessageFull,
    EmailMessageSummary,
} from '@/store/masters/mail/mail.interface';
import EmailComposeModal, { ComposeRecipient } from './EmailComposeModel';

type InboxProps = {
    adminId?: string;
    /** Rendered under the open message — plug the reply / template composer in here later. */
    renderReplyArea?: (message: EmailMessageFull) => React.ReactNode;
};
type Filter = 'all' | 'unread' | 'starred';
type Notice = { type: 'success' | 'error' | 'info'; text: string };

const CONNECT_PATH = '/outreach/email';
const PAGE_SIZE = 25;
const POLL_MS = 60_000;

/* ───────────────────────────── small helpers ───────────────────────────── */

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

const ICONS = {
    refresh: 'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    clip: 'm21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7',
    back: 'm15 18-6-6 6-6',
    search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
    mail: 'M4 5h16v14H4zM4 7l8 6 8-6',
    download: 'M12 3v12m0 0-4-4m4 4 4-4M4 21h16',
    image: 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M9 9.5h.01',
    unread: 'M4 5h16v14H4zM4 7l8 6 8-6',
    reply: 'M9 17 4 12l5-5M4 12h11a5 5 0 0 1 5 5v2',
    edit: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
} as const;

const Icon = ({ name, filled, className }: { name: keyof typeof ICONS; filled?: boolean; className?: string }) => (
    <svg
        className={className ?? 'h-4 w-4'}
        viewBox="0 0 24 24"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d={ICONS[name]} />
    </svg>
);

const initials = (name: string | null | undefined, email: string) => {
    const base = (name || email.split('@')[0] || '?').replace(/[^\p{L}\p{N}\s]/gu, ' ').trim();
    const parts = base.split(/\s+/).filter(Boolean);
    return ((parts[0]?.[0] ?? '?') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
};

const senderLabel = (m: { fromName: string | null; fromEmail: string }) => m.fromName || m.fromEmail;
const fmtAddr = (a: EmailAddress) => (a.name ? `${a.name} <${a.address}>` : a.address);

const listDate = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    if (d.getFullYear() === now.getFullYear()) return d.toLocaleDateString([], { day: 'numeric', month: 'short' });
    return d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
};
const fullDate = (iso: string) => new Date(iso).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });

const fileSize = (n: number) =>
    n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : n >= 1024 ? `${Math.round(n / 1024)} KB` : `${n} B`;

const ago = (iso: string | null) => {
    if (!iso) return 'never';
    const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
    if (s < 45) return 'just now';
    if (s < 3600) return `${Math.round(s / 60)} min ago`;
    if (s < 86400) return `${Math.round(s / 3600)} h ago`;
    return `${Math.round(s / 86400)} d ago`;
};

/* ───────────────────────────── not-connected card ───────────────────────────── */

function NotConnectedCard({ reason }: { reason: 'not_connected' | 'reconnect' }) {
    const reconnect = reason === 'reconnect';
    return (
        <div className="flex h-[calc(100vh-15rem)] min-h-[520px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                <Icon name="mail" className="h-7 w-7" />
            </span>
            <div>
                <p className="text-base font-semibold text-slate-900">
                    {reconnect ? 'Reconnect your email to turn on the inbox' : 'No email account connected'}
                </p>
                <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">
                    {reconnect
                        ? 'Your mailbox was connected before the inbox existed. Reconnect it once and incoming mail will start appearing here.'
                        : 'Connect your mailbox to receive and read all your emails here, alongside your other conversations.'}
                </p>
            </div>
            <Link
                href={CONNECT_PATH}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
                {reconnect ? 'Reconnect email' : 'Connect email'}
            </Link>
        </div>
    );
}

/* ───────────────────────────── sandboxed HTML body ─────────────────────────────
 * Backend already sanitizes, but we still render in a sandboxed iframe:
 *   - no `allow-scripts` (NEVER add it) => nothing in an email can execute
 *   - CSP blocks remote images until the user clicks "Show images" (tracking pixels)
 */
function HtmlFrame({ html, allowImages }: { html: string; allowImages: boolean }) {
    const ref = useRef<HTMLIFrameElement>(null);
    const observer = useRef<ResizeObserver | null>(null);
    const [height, setHeight] = useState(160);

    const doc = useMemo(
        () =>
            `<!doctype html><html><head><meta charset="utf-8">` +
            `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${allowImages ? 'https: http:' : ''}; style-src 'unsafe-inline'">` +
            `<base target="_blank"><style>` +
            `body{margin:0;font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a;word-wrap:break-word;overflow-wrap:anywhere}` +
            `img{max-width:100%;height:auto}table{max-width:100%}a{color:#2563eb}` +
            `blockquote{margin:0 0 0 4px;padding-left:12px;border-left:3px solid #e2e8f0;color:#475569}` +
            `</style></head><body>${html}</body></html>`,
        [html, allowImages]
    );

    const fit = useCallback(() => {
        const d = ref.current?.contentDocument;
        if (d?.documentElement) setHeight(Math.max(120, d.documentElement.scrollHeight));
    }, []);

    useEffect(() => () => observer.current?.disconnect(), []);

    return (
        <iframe
            ref={ref}
            title="Email content"
            sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            srcDoc={doc}
            style={{ height }}
            className="w-full border-0"
            onLoad={() => {
                fit();
                const d = ref.current?.contentDocument;
                observer.current?.disconnect();
                if (d?.documentElement && typeof ResizeObserver !== 'undefined') {
                    observer.current = new ResizeObserver(fit);
                    observer.current.observe(d.documentElement);
                }
            }}
        />
    );
}

/* ───────────────────────────── main component ───────────────────────────── */

export default function EmailInbox({ renderReplyArea }: InboxProps) {
    const [status, setStatus] = useState<EmailInboxStatus | null>(null);
    const [statusLoading, setStatusLoading] = useState(true);
    const [statusError, setStatusError] = useState<string | null>(null);

    const [messages, setMessages] = useState<EmailMessageSummary[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [listLoading, setListLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [listError, setListError] = useState<string | null>(null);

    const [filter, setFilter] = useState<Filter>('all');
    const [q, setQ] = useState('');
    const [debouncedQ, setDebouncedQ] = useState('');

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [detail, setDetail] = useState<EmailMessageDetail | null>(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [detailError, setDetailError] = useState<string | null>(null);
    const [showImages, setShowImages] = useState(false);
    const [downloading, setDownloading] = useState<string | null>(null);

    const [syncing, setSyncing] = useState(false);
    const [notice, setNotice] = useState<Notice | null>(null);
    const [selected, setSelected] = useState<Record<string, ComposeRecipient>>({});
    const [composer, setComposer] = useState<{ mode: 'compose' } | { mode: 'reply'; message: EmailMessageFull } | null>(null);
    const selectedList = Object.values(selected);

    const toggleSelect = (m: EmailMessageSummary) =>
        setSelected((s) => {
            if (s[m.id]) {
                const { [m.id]: _drop, ...rest } = s;
                return rest;
            }
            return { ...s, [m.id]: { messageId: m.id, email: m.fromEmail, name: m.fromName || '' } };
        });

    const listReq = useRef(0);
    const selectedRef = useRef<string | null>(null);
    const pageRef = useRef(1);
    pageRef.current = page;
    selectedRef.current = selectedId;

    const available = !!status?.available;

    /* ---------- status ---------- */
    const loadStatus = useCallback(async () => {
        const r = await getEmailInboxStatus();
        if (r.ok) {
            setStatus(r.data);
            setStatusError(null);
        } else {
            setStatusError(r.error.message);
        }
        setStatusLoading(false);
    }, []);

    useEffect(() => {
        loadStatus();
    }, [loadStatus]);

    /* ---------- list ---------- */
    const loadList = useCallback(
        async (pageNo: number, mode: 'replace' | 'append', silent = false) => {
            const reqId = ++listReq.current;
            if (mode === 'append') setLoadingMore(true);
            else if (!silent) setListLoading(true);

            const r = await listEmailMessages({
                page: pageNo,
                limit: PAGE_SIZE,
                unread: filter === 'unread' || undefined,
                starred: filter === 'starred' || undefined,
                q: debouncedQ || undefined,
            });
            if (reqId !== listReq.current) return; // a newer request superseded this one

            if (r.ok) {
                const { messages: rows, page: p, totalPages: tp, total: t } = r.data;
                setMessages((prev) =>
                    mode === 'append' ? [...prev, ...rows.filter((m) => !prev.some((x) => x.id === m.id))] : rows
                );
                setPage(p);
                setTotalPages(tp);
                setTotal(t);
                setListError(null);
            } else if (!silent) {
                setListError(r.error.message);
            }
            setListLoading(false);
            setLoadingMore(false);
        },
        [filter, debouncedQ]
    );

    useEffect(() => {
        const t = setTimeout(() => setDebouncedQ(q.trim()), 350);
        return () => clearTimeout(t);
    }, [q]);

    useEffect(() => {
        if (available) loadList(1, 'replace');
    }, [available, loadList]);

    // pick up mail the background worker synced (only while the tab is visible)
    useEffect(() => {
        if (!available) return;
        const id = setInterval(() => {
            if (document.visibilityState !== 'visible') return;
            loadStatus();
            if (pageRef.current === 1) loadList(1, 'replace', true);
        }, POLL_MS);
        return () => clearInterval(id);
    }, [available, loadList, loadStatus]);

    useEffect(() => {
        if (!notice) return;
        const t = setTimeout(() => setNotice(null), 5000);
        return () => clearTimeout(t);
    }, [notice]);

    /* ---------- flags (optimistic) ---------- */
    const applyFlags = useCallback(
        async (ids: string[], flags: EmailMessageFlags) => {
            setMessages((prev) => prev.map((m) => (ids.includes(m.id) ? { ...m, ...flags } : m)));
            setDetail((d) => (d && ids.includes(d.message.id) ? { ...d, message: { ...d.message, ...flags } } : d));

            const r = await updateEmailMessages({ ids, ...flags });
            if (r.ok) {
                loadStatus(); // authoritative unread count
            } else {
                setNotice({ type: 'error', text: r.error.message });
                loadList(1, 'replace', true); // roll the optimistic change back
            }
        },
        [loadList, loadStatus]
    );

    /* ---------- open a message ---------- */
    const openMessage = useCallback(
        async (id: string) => {
            setSelectedId(id);
            selectedRef.current = id;
            setDetail(null);
            setDetailError(null);
            setDetailLoading(true);
            setShowImages(false);

            const r = await getEmailMessage(id);
            if (selectedRef.current !== id) return; // user already opened something else
            if (r.ok) {
                setDetail(r.data);
                if (!r.data.message.isRead) applyFlags([id], { isRead: true });
            } else {
                setDetailError(r.error.message);
            }
            setDetailLoading(false);
        },
        [applyFlags]
    );

    const closeMessage = () => {
        setSelectedId(null);
        setDetail(null);
        setDetailError(null);
    };

    /* ---------- manual sync ---------- */
    const doSync = async () => {
        if (syncing) return;
        setSyncing(true);
        const r = await syncEmailInbox();
        if (r.ok) {
            const d = r.data;
            if (d.pending) setNotice({ type: 'info', text: 'Still syncing — new mail will appear shortly.' });
            else if (d.skipped === 'busy') setNotice({ type: 'info', text: 'A sync is already running.' });
            else if (d.added) setNotice({ type: 'success', text: `${d.added} new message${d.added > 1 ? 's' : ''}.` });
            else if (!d.throttled) setNotice({ type: 'info', text: 'You’re up to date.' });
        } else {
            setNotice({ type: 'error', text: r.error.message });
        }
        await Promise.all([loadStatus(), loadList(1, 'replace', true)]);
        setSyncing(false);
    };

    const doDownload = async (m: EmailMessageFull, index: number, filename: string) => {
        const key = `${m.id}-${index}`;
        setDownloading(key);
        const r = await downloadEmailAttachment(m.id, index, filename);
        if (!r.ok) setNotice({ type: 'error', text: r.message || 'Download failed.' });
        setDownloading(null);
    };

    /* ───────────── gates: loading / error / not connected ───────────── */
    const shell = 'h-[calc(100vh-8rem)] min-h-[520px] mb-5';

    if (statusLoading) {
        return (
            <div className={cx(shell, 'flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm text-slate-500')}>
                Loading inbox…
            </div>
        );
    }
    if (statusError || !status) {
        return (
            <div className={cx(shell, 'flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-center')}>
                <p className="text-sm font-semibold text-slate-800">Couldn’t load your inbox</p>
                <p className="max-w-xs text-xs text-slate-500">{statusError}</p>
                <button
                    type="button"
                    onClick={() => { setStatusLoading(true); loadStatus(); }}
                    className="cursor-pointer rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                    Try again
                </button>
            </div>
        );
    }
    if (!status.connected) return <NotConnectedCard reason="not_connected" />;
    if (!status.available) return <NotConnectedCard reason="reconnect" />;

    /* ───────────── derived ───────────── */
    const m = detail?.message;
    const fileAttachments = (m?.attachments ?? []).filter((a) => !a.inline);
    const hasRemoteImages = !!m?.bodyHtml && /<img[^>]+src=["']https?:/i.test(m.bodyHtml);
    const filters: { id: Filter; label: string }[] = [
        { id: 'all', label: 'All' },
        { id: 'unread', label: 'Unread' },
        { id: 'starred', label: 'Starred' },
    ];

    /* ───────────── render ───────────── */
    return (
        <div className={cx(shell, 'flex overflow-hidden rounded-2xl border border-slate-200 bg-white')}>
            {/* ───── list pane ───── */}
            <section
                className={cx(
                    'flex w-full min-w-0 flex-col border-r border-slate-200 md:w-[380px] md:shrink-0',
                    selectedId && 'hidden md:flex'
                )}
            >
                <div className="space-y-3 border-b border-slate-200 p-3">
                    <div className="flex items-center gap-2">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <h2 className="text-sm font-semibold text-slate-900">Email</h2>
                                {status.unread > 0 && (
                                    <span className="rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-[10px] font-bold text-white">
                                        {status.unread > 99 ? '99+' : status.unread}
                                    </span>
                                )}
                            </div>
                            <p className="truncate text-[11px] text-slate-500">
                                {status.email} · synced {ago(status.lastSyncAt)}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={doSync}
                            disabled={syncing}
                            title="Check for new mail"
                            aria-label="Check for new mail"
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:bg-[var(--color-primary-lighter)] disabled:cursor-wait disabled:opacity-60"
                        >
                            <Icon name="refresh" className={cx('h-4 w-4', syncing && 'animate-spin')} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setComposer({ mode: 'compose' })}
                            title="New email"
                            aria-label="New email"
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-[var(--color-primary)] text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                        >
                            <Icon name="edit" className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            <Icon name="search" />
                        </span>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search sender, subject…"
                            aria-label="Search emails"
                            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                        />
                    </div>

                    <div role="tablist" aria-label="Filter" className="flex gap-1.5">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                role="tab"
                                type="button"
                                aria-selected={filter === f.id}
                                onClick={() => setFilter(f.id)}
                                className={cx(
                                    'cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                                    filter === f.id
                                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                                        : 'border-slate-200 text-slate-600 hover:bg-[var(--color-primary-lighter)]'
                                )}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {selectedList.length > 0 && (
                        <div className="flex items-center gap-2 rounded-lg bg-[var(--color-primary-lighter)] px-3 py-2 text-xs text-slate-700">
                            <span className="flex-1 font-medium">{selectedList.length} selected</span>
                            <button
                                type="button"
                                onClick={() => setComposer({ mode: 'compose' })}
                                className="cursor-pointer rounded-lg bg-[var(--color-primary)] px-3 py-1.5 font-semibold text-white hover:bg-[var(--color-primary-dark)]"
                            >
                                Email selected
                            </button>
                            <button type="button" onClick={() => setSelected({})} className="cursor-pointer font-semibold text-slate-600 hover:underline">
                                Clear
                            </button>
                        </div>
                    )}

                    {status.lastError && (
                        <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                            Couldn’t sync: {status.lastError}{' '}
                            <Link href={CONNECT_PATH} className="font-semibold underline">Check connection</Link>
                        </p>
                    )}
                    {notice && (
                        <p
                            role="status"
                            className={cx(
                                'rounded-lg px-3 py-2 text-xs',
                                notice.type === 'error' && 'bg-red-50 text-red-700',
                                notice.type === 'success' && 'bg-emerald-50 text-emerald-700',
                                notice.type === 'info' && 'bg-slate-100 text-slate-600'
                            )}
                        >
                            {notice.text}
                        </p>
                    )}
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto">
                    {listLoading && messages.length === 0 ? (
                        <ul className="divide-y divide-slate-100">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <li key={i} className="space-y-2 px-4 py-3">
                                    <div className="h-3 w-1/3 animate-pulse rounded bg-slate-100" />
                                    <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
                                    <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
                                </li>
                            ))}
                        </ul>
                    ) : listError ? (
                        <div className="p-6 text-center text-sm text-red-600">
                            {listError}
                            <button type="button" onClick={() => loadList(1, 'replace')} className="mt-2 block w-full cursor-pointer text-xs font-semibold text-slate-700 underline">
                                Try again
                            </button>
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-1 px-6 text-center">
                            <span className="text-[var(--color-primary)]"><Icon name="mail" className="h-8 w-8" /></span>
                            <p className="text-sm font-semibold text-slate-800">
                                {debouncedQ || filter !== 'all' ? 'No matching emails' : 'No emails yet'}
                            </p>
                            <p className="text-xs text-slate-500">
                                {debouncedQ || filter !== 'all'
                                    ? 'Try a different search or filter.'
                                    : status.lastSyncAt
                                        ? 'New mail sent to this mailbox will show up here.'
                                        : 'Your mailbox is being synced for the first time — this can take a minute.'}
                            </p>
                        </div>
                    ) : (
                        <ul className="divide-y divide-slate-100">
                            {messages.map((msg) => {
                                const active = msg.id === selectedId;
                                return (
                                    <li key={msg.id}>
                                        <div
                                            className={cx(
                                                'group flex cursor-pointer gap-3 px-4 py-3 transition-colors',
                                                active ? 'bg-[var(--color-primary-lighter)]' : 'hover:bg-slate-50'
                                            )}
                                            onClick={() => openMessage(msg.id)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openMessage(msg.id)}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={!!selected[msg.id]}
                                                onClick={(e) => e.stopPropagation()}
                                                onChange={() => toggleSelect(msg)}
                                                aria-label={`Select email from ${senderLabel(msg)}`}
                                                className="mt-2.5 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
                                            />
                                            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-xs font-bold text-[var(--color-primary)]">
                                                {initials(msg.fromName, msg.fromEmail)}
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-baseline gap-2">
                                                    <span className={cx('truncate text-sm', msg.isRead ? 'text-slate-700' : 'font-semibold text-slate-900')}>
                                                        {senderLabel(msg)}
                                                    </span>
                                                    {msg.customer && (
                                                        <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700">
                                                            Lead
                                                        </span>
                                                    )}
                                                    <span className="ml-auto shrink-0 text-[11px] text-slate-400">{listDate(msg.date)}</span>
                                                </div>
                                                <p className={cx('truncate text-[13px]', msg.isRead ? 'text-slate-600' : 'font-medium text-slate-900')}>
                                                    {msg.subject}
                                                </p>
                                                <div className="flex items-center gap-1.5">
                                                    <p className="min-w-0 flex-1 truncate text-xs text-slate-500">{msg.snippet}</p>
                                                    {msg.hasAttachments && <span className="shrink-0 text-slate-400"><Icon name="clip" className="h-3.5 w-3.5" /></span>}
                                                    <button
                                                        type="button"
                                                        aria-label={msg.isStarred ? 'Remove star' : 'Add star'}
                                                        onClick={(e) => { e.stopPropagation(); applyFlags([msg.id], { isStarred: !msg.isStarred }); }}
                                                        className={cx('shrink-0 cursor-pointer', msg.isStarred ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400')}
                                                    >
                                                        <Icon name="star" filled={msg.isStarred} className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            {!msg.isRead && <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" aria-label="Unread" />}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {page < totalPages && (
                        <div className="p-3 text-center">
                            <button
                                type="button"
                                disabled={loadingMore}
                                onClick={() => loadList(page + 1, 'append')}
                                className="cursor-pointer rounded-xl border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                            >
                                {loadingMore ? 'Loading…' : `Load more (${messages.length} of ${total})`}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ───── reading pane ───── */}
            <section className={cx('min-w-0 flex-1 flex-col', selectedId ? 'flex' : 'hidden md:flex')}>
                {!selectedId ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                            <Icon name="mail" className="h-6 w-6" />
                        </span>
                        <p className="text-sm font-semibold text-slate-800">Select an email to read</p>
                    </div>
                ) : detailLoading ? (
                    <div className="space-y-3 p-6">
                        <div className="h-5 w-2/3 animate-pulse rounded bg-slate-100" />
                        <div className="h-4 w-1/3 animate-pulse rounded bg-slate-100" />
                        <div className="h-40 w-full animate-pulse rounded bg-slate-100" />
                    </div>
                ) : detailError || !m ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                        <p className="text-sm text-red-600">{detailError || 'Message not found.'}</p>
                        <button type="button" onClick={closeMessage} className="cursor-pointer text-xs font-semibold text-slate-700 underline">Back to inbox</button>
                    </div>
                ) : (
                    <>
                        {/* toolbar */}
                        <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
                            <button
                                type="button"
                                onClick={closeMessage}
                                aria-label="Back to list"
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
                            >
                                <Icon name="back" className="h-5 w-5" />
                            </button>
                            <h2 className="min-w-0 flex-1 truncate text-base font-semibold text-slate-900">{m.subject}</h2>
                            <button
                                type="button"
                                onClick={() => setComposer({ mode: 'reply', message: m })}
                                title="Reply"
                                aria-label="Reply"
                                className="flex h-8 cursor-pointer items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)]"
                            >
                                <Icon name="reply" /> Reply
                            </button>
                            <button
                                type="button"
                                onClick={() => applyFlags([m.id], { isRead: false })}
                                title="Mark as unread"
                                aria-label="Mark as unread"
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                            >
                                <Icon name="unread" />
                            </button>
                            <button
                                type="button"
                                onClick={() => applyFlags([m.id], { isStarred: !m.isStarred })}
                                title={m.isStarred ? 'Remove star' : 'Add star'}
                                aria-label={m.isStarred ? 'Remove star' : 'Add star'}
                                className={cx('flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100', m.isStarred ? 'text-amber-400' : 'text-slate-400')}
                            >
                                <Icon name="star" filled={m.isStarred} className="h-[18px] w-[18px]" />
                            </button>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto">
                            {/* sender */}
                            <div className="flex items-start gap-3 px-5 pt-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-sm font-bold text-[var(--color-primary)]">
                                    {initials(m.fromName, m.fromEmail)}
                                </span>
                                <div className="min-w-0 flex-1 text-sm">
                                    <div className="flex flex-wrap items-center gap-x-2">
                                        <span className="font-semibold text-slate-900">{senderLabel(m)}</span>
                                        {m.fromName && <span className="truncate text-xs text-slate-500">&lt;{m.fromEmail}&gt;</span>}
                                        {m.customer && (
                                            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                                                Lead · {m.customer.name}
                                            </span>
                                        )}
                                    </div>
                                    <p className="truncate text-xs text-slate-500">
                                        To: {m.toList.length ? m.toList.map(fmtAddr).join(', ') : '—'}
                                    </p>
                                    {m.ccList.length > 0 && (
                                        <p className="truncate text-xs text-slate-500">Cc: {m.ccList.map(fmtAddr).join(', ')}</p>
                                    )}
                                </div>
                                <span className="shrink-0 text-xs text-slate-400">{fullDate(m.date)}</span>
                            </div>

                            {/* remote image notice */}
                            {hasRemoteImages && !showImages && (
                                <div className="mx-5 mt-3 flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">
                                    <Icon name="image" />
                                    <span className="flex-1">Images are hidden to protect your privacy.</span>
                                    <button type="button" onClick={() => setShowImages(true)} className="cursor-pointer font-semibold text-[var(--color-primary)] hover:underline">
                                        Show images
                                    </button>
                                </div>
                            )}

                            {/* body */}
                            <div className="px-5 py-4">
                                {m.bodyHtml ? (
                                    <HtmlFrame html={m.bodyHtml} allowImages={showImages} />
                                ) : (
                                    <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-slate-800">
                                        {m.bodyText || '(No content)'}
                                    </pre>
                                )}
                            </div>

                            {/* attachments */}
                            {fileAttachments.length > 0 && (
                                <div className="border-t border-slate-100 px-5 py-4">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Attachments ({fileAttachments.length})
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {fileAttachments.map((a) => {
                                            const key = `${m.id}-${a.index}`;
                                            return (
                                                <button
                                                    key={key}
                                                    type="button"
                                                    disabled={downloading === key}
                                                    onClick={() => doDownload(m, a.index, a.filename)}
                                                    className="flex max-w-full cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 disabled:cursor-wait disabled:opacity-60"
                                                >
                                                    <Icon name="download" />
                                                    <span className="min-w-0 truncate font-medium">{a.filename}</span>
                                                    <span className="shrink-0 text-slate-400">{fileSize(a.size)}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* rest of the conversation */}
                            {detail && detail.thread.length > 0 && (
                                <div className="border-t border-slate-100 px-5 py-4">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        Other messages in this conversation ({detail.thread.length})
                                    </p>
                                    <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200">
                                        {detail.thread.map((t) => (
                                            <li key={t.id}>
                                                <button
                                                    type="button"
                                                    onClick={() => openMessage(t.id)}
                                                    className="flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-left hover:bg-slate-50"
                                                >
                                                    <span className={cx('w-32 shrink-0 truncate text-xs', t.isRead ? 'text-slate-600' : 'font-semibold text-slate-900')}>
                                                        {senderLabel(t)}
                                                    </span>
                                                    <span className="min-w-0 flex-1 truncate text-xs text-slate-500">{t.snippet || t.subject}</span>
                                                    <span className="shrink-0 text-[11px] text-slate-400">{listDate(t.date)}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* 👇 reply / template composer plugs in here later */}
                            {renderReplyArea && <div className="border-t border-slate-100 px-5 py-4">{renderReplyArea(m)}</div>}
                        </div>
                    </>
                )}
            </section>
            <EmailComposeModal
                isOpen={!!composer}
                mode={composer?.mode ?? 'compose'}
                recipients={selectedList}
                replyTo={composer?.mode === 'reply' ? composer.message : null}
                onClose={() => setComposer(null)}
                onFinished={() => {
                    setSelected({});
                    loadStatus();
                    loadList(1, 'replace', true);
                }}
            />
        </div>
    );
}