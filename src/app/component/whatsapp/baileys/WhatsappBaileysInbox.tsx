'use client';
/**
 * WhatsApp (Baileys) inbox — inline version of the old popup.
 * Conversations now come from the inbox summary API (every number that has messaged you),
 * NOT from the customer table.
 */
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { API_URL } from '@/constants/ApiRoute';
import { sendDirectMessageApi } from '@/store/masters/whatsapp/whatsapp';
import { getSocket, initSocket } from '@/socket/socket';
import WhatsAppTemplatePicker from '@/app/component/datafields/WhatsappTemplatePicker'; // 👈 adjust to your path
import Link from 'next/link';

const INBOX_API = `${API_URL}/api/v1/messages/whatsapp/inbox`; // ← keep whatever prefix is working for you
const PAGE = 30;

type Msg = {
    id: string; phoneKey: string; waId: string; fromMe: boolean; type: string; body: string;
    fileName?: string | null; status: string; timestamp: string; pushName?: string | null;
    mediaUrl?: string | null; lat?: number | null; lng?: number | null; pollOptions?: string[] | null; pollVotes?: Record<string, string[]> | null;
};
/** name / customerId are optional: unknown numbers simply show their phone number. */
type Chat = { body: string; type: string; fromMe: boolean; timestamp: string; unread: number; name?: string; customerId?: string; phone?: string };
type MediaType = 'text' | 'image' | 'video' | 'document' | 'location' | 'poll';
type ComposerView = 'chat' | 'poll' | 'location';
type NominatimResult = { place_id: number; display_name: string; lat: string; lon: string };
type SelectedLocation = { lat: string; lng: string; name: string };

// If your admin auth uses a Bearer header instead of cookies, swap this for your axios instance.
const api = async (path: string, init?: RequestInit) => {
    const r = await fetch(`${INBOX_API}${path}`, { credentials: 'include', ...init });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
};

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
// Display only. `phone` = full international digits (country code included) when the backend provides it.
const fmtPhone = (k: string) => k; // numbers can be any length / country: no grouping
const dispNum = (key: string, c?: { phone?: string }) => (c?.phone ? `+${c.phone}` : fmtPhone(key));

const TYPE_LABEL: Record<string, string> = {
    image: '📷 Photo', video: '🎥 Video', document: '📄 Document', audio: '🎤 Voice message',
    location: '📍 Location', poll: '📊 Poll', sticker: 'Sticker',
};
const previewOf = (type: string, body: string) =>
    type === 'text' ? body : `${TYPE_LABEL[type] || 'Message'}${body ? ` · ${body}` : ''}`;

const fmt = (iso: string) => {
    const d = new Date(iso);
    const t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return d.toDateString() === new Date().toDateString()
        ? t
        : `${d.toLocaleDateString([], { day: '2-digit', month: 'short' })}, ${t}`;
};

const formatBytes = (b: number) => (b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(1)} MB`);

/* ───────── tiny icons ───────── */
const Ic = ({ children, className = 'w-4 h-4' }: { children: React.ReactNode; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);
type P = { className?: string };
const I = {
    Plus: (p: P) => <Ic {...p}><path d="M12 5v14M5 12h14" /></Ic>,
    Close: (p: P) => <Ic {...p}><path d="M6 18L18 6M6 6l12 12" /></Ic>,
    Back: (p: P) => <Ic {...p}><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></Ic>,
    Search: (p: P) => <Ic {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Ic>,
    Image: (p: P) => <Ic {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></Ic>,
    Video: (p: P) => <Ic {...p}><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></Ic>,
    Doc: (p: P) => <Ic {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></Ic>,
    Pin: (p: P) => <Ic {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></Ic>,
    Poll: (p: P) => <Ic {...p}><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></Ic>,
    Target: (p: P) => <Ic {...p}><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /></Ic>,
    Send: ({ className = 'w-4 h-4' }: P) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>,
    Spinner: ({ className = 'w-4 h-4' }: P) => (
        <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
    ),
    Trash: (p: P) => <Ic {...p}><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" /></Ic>,
    Dots: (p: P) => <Ic {...p}><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></Ic>,
    Phone: (p: P) => <Ic {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></Ic>,
    Bot: (p: P) => <Ic {...p}><rect x="3" y="8" width="18" height="12" rx="2" /><line x1="12" y1="8" x2="12" y2="4" /><circle cx="12" cy="3" r="1" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="14" r="1" /></Ic>,
    Warn: (p: P) => <Ic {...p}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></Ic>,
    Template: (p: P) => <Ic {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></Ic>,
    Chat: (p: P) => <Ic {...p}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></Ic>,
};

const ATTACH_OPTIONS = [
    { key: 'media' as const, label: 'Photos & Videos', sub: 'Share images or clips', icon: I.Image, bg: 'bg-gradient-to-br from-fuchsia-500 to-pink-500' },
    { key: 'document' as const, label: 'Document', sub: 'PDF, Word, Excel & more', icon: I.Doc, bg: 'bg-gradient-to-br from-indigo-500 to-blue-500' },
    { key: 'poll' as const, label: 'Poll', sub: 'Get a quick response', icon: I.Poll, bg: 'bg-gradient-to-br from-amber-500 to-orange-500' },
    { key: 'location' as const, label: 'Location', sub: 'Share a place or pin', icon: I.Pin, bg: 'bg-gradient-to-br from-teal-500 to-emerald-500' },
    { key: 'template' as const, label: 'Template', sub: 'Send a saved message', icon: I.Template, bg: 'bg-gradient-to-br from-violet-500 to-purple-500' },
];
type AttachKey = (typeof ATTACH_OPTIONS)[number]['key'];

const MENU_ITEMS = [
    { key: 'call', label: 'Call', icon: I.Phone, soon: true },
    { key: 'bot', label: 'Bot', icon: I.Bot, soon: true },
];

const Avatar = ({ name, size = 'w-10 h-10' }: { name: string; size?: string }) => (
    <div className={cx(size, 'shrink-0 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary-dark)] text-xs font-bold flex items-center justify-center')}>
        {/^\d/.test(name) ? '#' : name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase() || '?'}
    </div>
);

const sendBtn = 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] active:scale-[0.98]';
const inputCls = 'outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)]';

const MessageBody = ({ m, onOpenImage }: { m: Msg; onOpenImage: (url: string) => void }) => {
    // old messages, or media that failed to download, fall back to the text label
    const label = (
        <p className="text-[12px] font-medium text-gray-600">
            {TYPE_LABEL[m.type] || 'Message'}{m.fileName ? ` · ${m.fileName}` : ''}
        </p>
    );

    switch (m.type) {
        case 'text':
            return null;

        case 'image':
            return m.mediaUrl ? (
                <img src={m.mediaUrl} alt="" loading="lazy" onClick={() => onOpenImage(m.mediaUrl!)}
                    className="w-60 h-48 object-cover rounded-xl mb-1 cursor-zoom-in bg-black/5" />
            ) : label;

        case 'sticker':
            return m.mediaUrl ? <img src={m.mediaUrl} alt="" loading="lazy" className="w-28 h-28 object-contain" /> : label;

        case 'video':
            return m.mediaUrl ? <video src={m.mediaUrl} controls preload="metadata" className="w-64 h-48 rounded-xl mb-1 bg-black object-contain" /> : label;

        case 'audio':
            return m.mediaUrl ? <audio src={m.mediaUrl} controls preload="none" className="w-56 h-9" /> : label;

        case 'document':
            return m.mediaUrl ? (
                <a href={m.mediaUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black/5 hover:bg-black/10 rounded-xl p-2 mb-1 w-60">
                    <span className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-500 flex items-center justify-center shrink-0"><I.Doc /></span>
                    <span className="min-w-0 flex-1">
                        <span className="block text-[12px] font-medium text-gray-800 truncate">{m.fileName || 'Document'}</span>
                        <span className="block text-[10px] text-[var(--color-primary)] font-semibold">Open</span>
                    </span>
                </a>
            ) : label;

        case 'location':
            return m.lat != null && m.lng != null ? (
                <a href={`https://www.google.com/maps?q=${m.lat},${m.lng}`} target="_blank" rel="noreferrer" className="block w-60 mb-1">
                    <iframe src={`https://www.google.com/maps?q=${m.lat},${m.lng}&z=15&output=embed`} loading="lazy" className="w-full h-32 rounded-xl border-0 pointer-events-none" />
                    {m.body && <span className="flex items-center gap-1.5 pt-1 text-[12px] font-medium text-gray-800"><I.Pin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" /><span className="truncate">{m.body}</span></span>}
                </a>
            ) : label;

        case 'poll': {
            const votes = m.pollVotes || {};
            const voters = Object.values(votes).filter((v) => v.length);
            return (
                <div className="w-60">
                    <p className="text-[13px] font-semibold text-gray-800 mb-1.5 break-words">📊 {m.body}</p>
                    <div className="space-y-1">
                        {(m.pollOptions || []).map((o, i) => {
                            const count = voters.filter((v) => v.includes(o)).length;
                            const pct = voters.length ? Math.round((count / voters.length) * 100) : 0;
                            return (
                                <div key={i} className="relative overflow-hidden bg-black/5 rounded-lg px-2 py-1.5">
                                    <div className="absolute inset-y-0 left-0 bg-[var(--color-primary-light)] transition-all" style={{ width: `${pct}%` }} />
                                    <div className="relative flex items-center gap-2">
                                        <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 flex items-center justify-center ${count ? 'border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-gray-300'}`}>
                                            {count > 0 && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                        </span>
                                        <span className="flex-1 text-[12px] text-gray-700 truncate">{o}</span>
                                        {count > 0 && <span className="text-[11px] font-semibold text-gray-700">{count}</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-[10.5px] text-gray-500 mt-1.5">
                        {votes.them?.length ? `Customer chose: ${votes.them.join(', ')}` : 'No customer vote yet'}
                    </p>
                </div>
            );
        }

        default:
            return label;
    }
};

export default function WhatsAppBaileysInbox({ adminId }: { adminId?: string }) {
    /* inbox state */
    const [chats, setChats] = useState<Record<string, Chat>>({});
    const [loadingList, setLoadingList] = useState(true);
    const [listError, setListError] = useState(false);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(PAGE);
    const [waStatus, setWaStatus] = useState<string | null>(null);
    const [isCheckingWa, setIsCheckingWa] = useState(true);

    /* composer state */
    const [text, setText] = useState('');
    const [mediaType, setMediaType] = useState<MediaType>('text');
    const [composerView, setComposerView] = useState<ComposerView>('chat');
    const [showAttachMenu, setShowAttachMenu] = useState(false);
    const [pendingKind, setPendingKind] = useState<'media' | 'document' | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [sending, setSending] = useState(false);
    const [attempted, setAttempted] = useState(false);
    const [error, setError] = useState('');
    const [lightbox, setLightbox] = useState<string | null>(null);

    // poll
    const [pollName, setPollName] = useState('');
    const [pollOptions, setPollOptions] = useState(['', '']);
    const [pollSelectable, setPollSelectable] = useState(1);

    // location
    const [locQuery, setLocQuery] = useState('');
    const [locResults, setLocResults] = useState<NominatimResult[]>([]);
    const [locSearching, setLocSearching] = useState(false);
    const [location, setLocation] = useState<SelectedLocation | null>(null);
    const [locating, setLocating] = useState(false);
    const [locError, setLocError] = useState('');

    // menus / dialogs
    const [showMenu, setShowMenu] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState('');
    const [showTemplates, setShowTemplates] = useState(false);
    const [notice, setNotice] = useState('');

    const activeRef = useRef<string | null>(null);
    const chatsRef = useRef<Record<string, Chat>>({});
    const scrollRef = useRef<HTMLDivElement>(null);
    const restoreRef = useRef<number | null>(null);
    const nearBottomRef = useRef(true);
    const fileRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

    const validPollOptions = pollOptions.filter((o) => o.trim() !== '');
    chatsRef.current = chats;
    const activeChat = activeKey ? chats[activeKey] : undefined;
    const activeName = activeKey ? activeChat?.name || dispNum(activeKey, activeChat) : '';

    const resetComposer = useCallback(() => {
        setText(''); setMediaType('text'); setComposerView('chat'); setShowAttachMenu(false);
        setFile(null); setAttempted(false); setError('');
        setPollName(''); setPollOptions(['', '']); setPollSelectable(1);
        setLocQuery(''); setLocResults([]); setLocation(null); setLocError('');
    }, []);

    /* ───────── data loaders ───────── */
    // Every number that has messaged this WhatsApp account — customer or not.
    const loadSummary = useCallback(async () => {
        try {
            const d = await api('/summary');
            const map: Record<string, Chat> = {};
            d.chats.forEach((c: any) => {
                map[c.phoneKey] = {
                    body: c.body, type: c.type, fromMe: c.fromMe, timestamp: c.timestamp, unread: c.unread,
                    name: c.name || c.pushName || undefined,
                    customerId: c.customerId || undefined,
                    phone: c.phone ? String(c.phone).replace(/\D/g, '') : undefined,
                };
            });
            setChats(map);
            setListError(false);
        } catch { setListError(true); }
    }, []);

    const openChat = useCallback(async (key: string, fresh = true) => {
        activeRef.current = key;
        setActiveKey(key);
        setShowMenu(false); setShowDeleteConfirm(false);
        nearBottomRef.current = true;
        if (fresh) { setMessages([]); setHasMore(false); }
        setChats((p) => (p[key] ? { ...p, [key]: { ...p[key], unread: 0 } } : p));
        try {
            const d = await api(`/chat/${key}`);
            if (activeRef.current !== key) return;
            setMessages(d.messages);
            setHasMore(d.hasMore);
        } catch { /* ignore */ }
    }, []);

    const closeChat = () => {
        activeRef.current = null;
        setActiveKey(null); setMessages([]); setShowMenu(false);
        resetComposer();
    };

    const deleteChatHistory = async () => {
        if (!activeKey || deleting) return;
        setDeleting(true); setDeleteError('');
        try {
            await api(`/chat/${activeKey}`, { method: 'DELETE' });
            const key = activeKey;
            setChats((p) => { const { [key]: _removed, ...rest } = p; return rest; });
            setShowDeleteConfirm(false);
            closeChat();
        } catch {
            setDeleteError('Failed to delete chat history. Please try again.');
        } finally {
            setDeleting(false);
        }
    };

    const loadOlder = async () => {
        if (!activeKey || !messages.length) return;
        try {
            const d = await api(`/chat/${activeKey}?before=${encodeURIComponent(messages[0].timestamp)}`);
            restoreRef.current = scrollRef.current?.scrollHeight ?? null;
            setMessages((p) => [...d.messages, ...p]);
            setHasMore(d.hasMore);
        } catch { /* ignore */ }
    };

    /* ───────── mount ───────── */
    useEffect(() => {
        (async () => { await loadSummary(); setLoadingList(false); })();
        return () => { activeRef.current = null; };
    }, [loadSummary]);

    /* ───────── real-time ───────── */
    useEffect(() => {
        // uses the socket your layout already opened; falls back to opening one if adminId is passed
        const socket = getSocket() ?? (adminId ? initSocket(adminId) : null);
        if (!socket) return;

        socket.emit('whatsapp:start_viewing', (r: any) => {
            setWaStatus(r?.status ?? null);
            setIsCheckingWa(false);
        });

        const onStatus = (p: any) => {
            setWaStatus(p?.status ?? null);
            setIsCheckingWa(false);
        };

        // Also stop checking if a QR or Pairing code arrives
        socket.on('whatsapp:qr', () => setIsCheckingWa(false));
        socket.on('whatsapp:pairing_code', () => setIsCheckingWa(false));
        const onMsg = (m: Msg) => {
            const isActive = m.phoneKey === activeRef.current;
            // first message from this number: refetch so a saved customer gets their proper name
            if (!chatsRef.current[m.phoneKey]) loadSummary();
            // a brand-new number (not in your customers) simply appears at the top of the list
            setChats((p) => {
                const prev = p[m.phoneKey];
                return {
                    ...p,
                    [m.phoneKey]: {
                        ...prev,
                        body: m.body, type: m.type, fromMe: m.fromMe, timestamp: m.timestamp,
                        name: prev?.name || (!m.fromMe && m.pushName) || undefined,
                        unread: isActive ? 0 : (prev?.unread || 0) + (m.fromMe ? 0 : 1),
                    },
                };
            });
            if (isActive) {
                setMessages((p) => (p.some((x) => x.id === m.id) ? p : [...p, m]));
                if (!m.fromMe) api(`/chat/${m.phoneKey}/read`, { method: 'POST' }).catch(() => { });
            }
        };
        const onTick = ({ waId, status }: { waId: string; status: string }) =>
            setMessages((p) => p.map((x) => (x.waId === waId ? { ...x, status } : x)));
        const onVotes = ({ waId, pollVotes }: { waId: string; pollVotes: Msg['pollVotes'] }) =>
            setMessages((p) => p.map((x) => (x.waId === waId ? { ...x, pollVotes } : x)));
        const onReconnect = () => { loadSummary(); if (activeRef.current) openChat(activeRef.current, false); };

        socket.on('whatsapp:status', onStatus);
        socket.on('whatsapp:message', onMsg);
        socket.on('whatsapp:message_status', onTick);
        socket.on('whatsapp:poll_votes', onVotes);
        socket.on('connect', onReconnect);
        return () => {
            socket.emit('whatsapp:stop_viewing');
            socket.off('whatsapp:status', onStatus);
            socket.off('whatsapp:message', onMsg);
            socket.off('whatsapp:message_status', onTick);
            socket.off('whatsapp:poll_votes', onVotes);
            socket.off('connect', onReconnect);
        };
    }, [adminId, loadSummary, openChat]);

    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        if (restoreRef.current !== null) {
            el.scrollTop = el.scrollHeight - restoreRef.current;
            restoreRef.current = null;
        } else if (nearBottomRef.current) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages]);

    /* ───────── composer effects ───────── */
    useEffect(() => {
        if (file && mediaType === 'image') {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreviewUrl(null);
    }, [file, mediaType]);

    useEffect(() => {
        const el = textRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
        }
    }, [text, composerView]);

    // debounced place search (OpenStreetMap Nominatim — free, no key)
    useEffect(() => {
        if (composerView !== 'location') return;
        if (!locQuery.trim() || location) { setLocResults([]); setLocSearching(false); return; }
        setLocSearching(true);
        const h = setTimeout(async () => {
            try {
                const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=6&q=${encodeURIComponent(locQuery)}`);
                const d = await r.json();
                setLocResults(Array.isArray(d) ? d : []);
            } catch { setLocResults([]); } finally { setLocSearching(false); }
        }, 450);
        return () => clearTimeout(h);
    }, [locQuery, composerView, location]);

    // Esc closes the open dialog / lightbox
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return;
            if (lightbox) setLightbox(null);
            else if (showDeleteConfirm && !deleting) setShowDeleteConfirm(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [lightbox, showDeleteConfirm, deleting]);

    /* ───────── attach handlers ───────── */
    const pickFile = (kind: 'media' | 'document') => {
        setPendingKind(kind);
        setShowAttachMenu(false);
        requestAnimationFrame(() => {
            const el = fileRef.current;
            if (!el) return;
            el.accept = kind === 'media' ? 'image/*,video/*' : '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt';
            el.value = '';
            el.click();
        });
    };

    const onAttachSelect = (key: AttachKey) => {
        if (key === 'media' || key === 'document') return pickFile(key);
        if (key === 'template') { setShowAttachMenu(false); setShowTemplates(true); return; }
        setShowAttachMenu(false);
        setAttempted(false);
        setFile(null);
        setMediaType(key);
        setComposerView(key);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;
        setFile(f);
        setMediaType(pendingKind === 'media' ? (f.type.startsWith('video/') ? 'video' : 'image') : 'document');
        setComposerView('chat');
        setAttempted(false);
    };

    const useCurrentLocation = () => {
        if (!navigator.geolocation) { setLocError('Location access is not available on this device.'); return; }
        setLocating(true); setLocError('');
        navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                let name = 'Current location';
                try {
                    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`);
                    const d = await r.json();
                    if (d?.display_name) name = d.display_name;
                } catch { /* keep default label */ }
                setLocation({ lat: String(coords.latitude), lng: String(coords.longitude), name });
                setLocQuery(name); setLocResults([]); setLocating(false);
            },
            () => { setLocError("Couldn't access your location. Allow access, or search for a place instead."); setLocating(false); }
        );
    };

    /* ───────── conversation list ───────── */
    const list = useMemo(() => {
        const q = search.trim().toLowerCase();
        const dq = q.replace(/\D/g, '');
        return Object.entries(chats)
            .map(([key, c]) => ({ key, ...c, label: c.name || dispNum(key, c) }))
            .filter((c) => !q || c.label.toLowerCase().includes(q) || (!!dq && (c.key.includes(dq) || (c.phone || '').includes(dq))))
            .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    }, [chats, search]);

    const canSubmit = (() => {
        if (!activeKey) return false;
        if (mediaType === 'text') return text.trim().length > 0;
        if (mediaType === 'image' || mediaType === 'video' || mediaType === 'document') return !!file;
        if (mediaType === 'location') return !!location;
        if (mediaType === 'poll') return pollName.trim() !== '' && validPollOptions.length >= 2;
        return false;
    })();

    /* ───────── send (reply to the open conversation) ───────── */
    const handleSend = async () => {
        if (sending) return;
        setAttempted(true);
        if (!canSubmit || !activeKey) return;

        const fd = new FormData();
        const isMedia = mediaType === 'image' || mediaType === 'video' || mediaType === 'document';
        fd.append('message', mediaType === 'text' || isMedia ? text : '');
        fd.append('mediaType', mediaType);
        // saved customers go by id; unknown numbers go by phone (backend must accept `phones`)
        if (activeChat?.customerId) {
            fd.append('customerIds', JSON.stringify([activeChat.customerId]));
        } else if (activeChat?.phone) {
            fd.append('customerIds', '[]');
            fd.append('phones', JSON.stringify([activeChat.phone])); // full international number, never the short key
        } else {
            setError("Can't reply to this number yet: its full international number isn't available.");
            return;
        }
        if (file && isMedia) fd.append('whatsappFile', file);
        if (mediaType === 'location' && location)
            fd.append('location', JSON.stringify({ lat: location.lat, lng: location.lng, name: location.name }));
        if (mediaType === 'poll')
            fd.append('poll', JSON.stringify({ name: pollName, options: validPollOptions, selectableCount: pollSelectable }));

        setSending(true); setError('');
        try {
            const res = await sendDirectMessageApi(fd);
            if (!res?.success) throw new Error(res?.message);
            resetComposer();
        } catch (e: any) {
            setError(e?.message || 'Failed to send — please try again.');
        } finally { setSending(false); }
    };

    const onTemplateSent = (msg?: string) => {
        setShowTemplates(false);
        if (msg) { setNotice(msg); setTimeout(() => setNotice(''), 8000); }
    };

    const isMediaFile = !!file && (mediaType === 'image' || mediaType === 'video' || mediaType === 'document');

    if (isCheckingWa) {
        return (
            <div className="flex h-[calc(100dvh-10rem)] min-h-[520px] w-full items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#25D366] border-t-transparent"></div>
                    <p className="text-sm font-medium text-slate-500">Checking WhatsApp status...</p>
                </div>
            </div>
        );
    }

    if (waStatus !== 'connected') {
        return (
            <div className="relative flex h-[calc(100dvh-10rem)] min-h-[520px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                {/* Decorative background blurs */}
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] shadow-xl shadow-[#25D366]/30">
                        <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 duration-1000"></div>
                        <I.Chat className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-800">Baileys WhatsApp Not Connected</h2>
                    <p className="mb-8 max-w-md text-[15px] leading-relaxed text-slate-500">
                        You need to link your WhatsApp account to view messages, send broadcasts, and engage with your customers directly from this inbox.
                    </p>
                    <Link
                        href="/outreach/whatsapp"
                        className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 active:translate-y-0"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            Connect Device Now
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-t from-black/15 to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-full max-h-[calc(100dvh-10rem)] mb-5 min-h-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <style>{`
        @keyframes waMenuIn { 0% { opacity:0; transform: translateY(8px) scale(.94); } 100% { opacity:1; transform: translateY(0) scale(1); } }
        @keyframes waPanelIn { 0% { opacity:0; transform: translateY(10px); } 100% { opacity:1; transform: translateY(0); } }
        .wa-menu { animation: waMenuIn .16s cubic-bezier(.2,.8,.2,1); transform-origin: bottom left; }
        .wa-panel { animation: waPanelIn .2s cubic-bezier(.2,.8,.2,1); }
        @media (prefers-reduced-motion: reduce) { .wa-menu, .wa-panel { animation: none; } }
      `}</style>
            <input type="file" ref={fileRef} onChange={onFileChange} className="hidden" />

            {/* ══════ LEFT: conversations ══════ */}
            <aside className={cx('w-full md:w-[320px] shrink-0 border-r border-slate-200 flex-col', activeKey ? 'hidden md:flex' : 'flex')}>
                <div className="p-3 border-b border-slate-100">
                    <div className="relative">
                        <I.Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setVisible(PAGE); }}
                            placeholder="Search name or number…"
                            aria-label="Search conversations"
                            className={cx('w-full text-sm pl-9 pr-3 py-2 border border-slate-200 rounded-xl', inputCls)}
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {loadingList ? (
                        <p className="p-4 text-xs text-slate-400">Loading conversations…</p>
                    ) : listError ? (
                        <div className="p-4 text-xs text-slate-500">
                            Couldn&apos;t load conversations.{' '}
                            <button onClick={() => { setLoadingList(true); loadSummary().then(() => setLoadingList(false)); }} className="font-semibold text-[var(--color-primary)] hover:underline">Try again</button>
                        </div>
                    ) : list.length === 0 ? (
                        <p className="p-4 text-xs text-slate-400">{search ? 'No conversations match your search' : 'No messages yet — new chats will appear here.'}</p>
                    ) : (
                        list.slice(0, visible).map((c) => (
                            <button
                                key={c.key}
                                type="button"
                                onClick={() => openChat(c.key)}
                                className={cx('w-full text-left cursor-pointer flex items-center gap-3 px-3 py-3 border-b border-slate-50 hover:bg-slate-50', activeKey === c.key && 'bg-[var(--color-primary-lighter)] hover:bg-[var(--color-primary-lighter)]')}
                            >
                                <Avatar name={c.label} />
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className={cx('text-[13px] truncate text-slate-900', c.unread ? 'font-bold' : 'font-semibold')}>{c.label}</p>
                                        <span className="text-[10px] text-slate-400 shrink-0">{fmt(c.timestamp)}</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-[12px] text-slate-500 truncate">{c.fromMe ? 'You: ' : ''}{previewOf(c.type, c.body)}</p>
                                        {c.unread ? (
                                            <span className="shrink-0 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center">{c.unread}</span>
                                        ) : null}
                                    </div>
                                </div>
                            </button>
                        ))
                    )}
                    {list.length > visible && (
                        <button onClick={() => setVisible((v) => v + PAGE)} className="w-full py-3 cursor-pointer text-xs font-semibold text-[var(--color-primary)] hover:bg-slate-50">
                            Load more ({list.length - visible} remaining)
                        </button>
                    )}
                </div>
            </aside>

            {/* ══════ RIGHT: chat ══════ */}
            <section className={cx('flex-1 min-w-0 flex-col', activeKey ? 'flex' : 'hidden md:flex')}>
                {!activeKey ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 bg-slate-50 text-center px-6">
                        <span className="w-14 h-14 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center"><I.Chat className="w-7 h-7" /></span>
                        <p className="text-sm font-semibold text-slate-700">Select a conversation</p>
                        <p className="text-xs text-slate-500">Pick a chat on the left to read and reply.</p>
                    </div>
                ) : (
                    <>
                        <div className="px-4 py-3 bg-white border-b border-slate-200 flex items-center gap-3 shrink-0">
                            <button onClick={closeChat} aria-label="Back to conversations" className="md:hidden cursor-pointer p-2 -ml-2 rounded-full text-slate-500 hover:bg-slate-100"><I.Back /></button>
                            <Avatar name={activeName} />
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-slate-900 truncate">{activeName}</p>
                                <p className="text-[11px] text-slate-500 truncate">{dispNum(activeKey, activeChat)} · Baileys WhatsApp</p>
                            </div>
                            <div className="relative shrink-0">
                                <button
                                    onClick={() => setShowMenu((v) => !v)}
                                    aria-label="More options"
                                    aria-expanded={showMenu}
                                    className={cx('p-2 cursor-pointer rounded-full transition-colors', showMenu ? 'bg-slate-200 text-slate-800' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800')}
                                >
                                    <I.Dots />
                                </button>
                                {showMenu && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                                        <div className="wa-menu absolute right-0 top-full mt-1 z-50 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 p-1.5" style={{ transformOrigin: 'top right' }}>
                                            {MENU_ITEMS.map((item) => (
                                                <button key={item.key} type="button" disabled={item.soon} onClick={() => setShowMenu(false)}
                                                    className="w-full cursor-pointer flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent">
                                                    <item.icon className="w-4 h-4 text-slate-500" />
                                                    <span className="flex-1">{item.label}</span>
                                                    {item.soon && <span className="text-[9px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full">Soon</span>}
                                                </button>
                                            ))}
                                            <div className="my-1 border-t border-slate-100" />
                                            <button type="button" onClick={() => { setShowMenu(false); setDeleteError(''); setShowDeleteConfirm(true); }}
                                                className="w-full cursor-pointer flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm text-red-600 hover:bg-red-50">
                                                <I.Trash className="w-4 h-4" /> Delete chat history
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {waStatus && waStatus !== 'connected' && (
                            <div className="px-4 py-1.5 text-[11.5px] bg-amber-50 text-amber-800 border-b border-amber-100 shrink-0">
                                {waStatus === 'loading' ? 'Connecting to WhatsApp…' : 'WhatsApp is not connected — link your number to send and receive messages.'}
                            </div>
                        )}

                        {/* messages */}
                        <div
                            ref={scrollRef}
                            onScroll={(e) => {
                                const el = e.currentTarget;
                                nearBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
                            }}
                            className="flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-1.5 bg-slate-50"
                        >
                            {hasMore && (
                                <button onClick={loadOlder} className="block cursor-pointer mx-auto mb-2 text-[11px] font-semibold text-[var(--color-primary)] bg-white rounded-full px-3 py-1 shadow-sm border border-slate-200">
                                    Load older messages
                                </button>
                            )}
                            {messages.length === 0 && <p className="text-center text-xs text-slate-500 pt-10">No messages yet</p>}
                            {messages.map((m) => (
                                <div key={m.id} className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[75%] px-3 py-1.5 shadow-sm rounded-2xl text-[13px] ${m.fromMe ? 'bg-[#DCF8C6] rounded-tr-sm' : 'bg-white border border-slate-100 rounded-tl-sm'}`}>
                                        <MessageBody m={m} onOpenImage={setLightbox} />
                                        {m.body && m.type !== 'location' && m.type !== 'poll' && (
                                            <p className="text-slate-800 whitespace-pre-wrap break-words">{m.body}</p>
                                        )}
                                        <p className="text-[9.5px] text-slate-500 text-right mt-0.5">
                                            {fmt(m.timestamp)}{' '}
                                            {m.fromMe && <span className={m.status === 'read' ? 'text-sky-500' : ''}>{m.status === 'sent' ? '✓' : '✓✓'}</span>}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ───────── composer: chat bar ───────── */}
                        {composerView === 'chat' && (
                            <div className="shrink-0 bg-white border-t border-slate-200 px-3 py-2.5">
                                {isMediaFile && file && (
                                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 mb-2">
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="" className="w-9 h-9 rounded-lg object-cover shrink-0" />
                                        ) : (
                                            <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${mediaType === 'document' ? 'bg-indigo-100 text-indigo-500' : 'bg-fuchsia-100 text-fuchsia-500'}`}>
                                                {mediaType === 'document' ? <I.Doc /> : <I.Video />}
                                            </span>
                                        )}
                                        <span className="flex-1 min-w-0 text-xs font-medium text-slate-700 truncate">{file.name}</span>
                                        <span className="text-[10px] text-slate-400 shrink-0">{formatBytes(file.size)}</span>
                                        <button onClick={resetComposer} disabled={sending} aria-label="Remove attachment" className="shrink-0 cursor-pointer text-slate-300 hover:text-red-500 p-1 disabled:opacity-40">
                                            <I.Close className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                )}

                                <div className="flex items-end gap-2">
                                    <div className="relative shrink-0">
                                        <button
                                            type="button"
                                            aria-label="Attach"
                                            aria-expanded={showAttachMenu}
                                            onClick={() => setShowAttachMenu((v) => !v)}
                                            disabled={sending}
                                            className={cx('w-10 h-10 cursor-pointer rounded-full flex items-center justify-center transition-colors disabled:opacity-40', showAttachMenu ? 'bg-[var(--color-primary)] text-white' : 'bg-slate-100 text-slate-500 hover:text-[var(--color-primary)]')}
                                        >
                                            <I.Plus className={`w-5 h-5 transition-transform duration-200 ${showAttachMenu ? 'rotate-45' : ''}`} />
                                        </button>

                                        {showAttachMenu && (
                                            <>
                                                <div className="fixed inset-0 z-40" onClick={() => setShowAttachMenu(false)} />
                                                <div className="wa-menu absolute bottom-full left-0 mb-2 z-50 w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                                                    {ATTACH_OPTIONS.map((o) => {
                                                        // templates are tied to saved customers
                                                        const off = o.key === 'template' && !activeChat?.customerId;
                                                        return (
                                                            <button key={o.key} type="button" disabled={off} onClick={() => onAttachSelect(o.key)}
                                                                className="w-full cursor-pointer flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors text-left disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent">
                                                                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 ${o.bg}`}><o.icon className="w-4 h-4" /></span>
                                                                <span className="min-w-0">
                                                                    <span className="block text-sm font-medium text-slate-800">{o.label}</span>
                                                                    <span className="block text-[10.5px] text-slate-400 truncate">{off ? 'Saved customers only' : o.sub}</span>
                                                                </span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <textarea
                                        ref={textRef}
                                        rows={1}
                                        value={text}
                                        disabled={sending}
                                        onChange={(e) => setText(e.target.value)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                                        maxLength={1024}
                                        aria-label="Message"
                                        placeholder={isMediaFile ? 'Add a caption' : 'Reply to this chat…'}
                                        className={cx('flex-1 resize-none bg-white border border-slate-200 rounded-3xl px-4 py-2.5 text-sm max-h-28 leading-5', inputCls)}
                                    />

                                    <button
                                        onClick={handleSend}
                                        disabled={sending || !canSubmit}
                                        aria-label="Send message"
                                        className={cx('w-10 h-10 shrink-0 cursor-pointer rounded-full text-white flex items-center justify-center disabled:opacity-40', sendBtn)}
                                    >
                                        {sending ? <I.Spinner /> : <I.Send />}
                                    </button>
                                </div>

                                {attempted && mediaType === 'text' && !text.trim() && <p className="text-[11px] text-red-500 mt-1 ml-1">Message can&apos;t be empty.</p>}
                                {error && <p className="text-[11px] text-red-500 mt-1 ml-1">{error}</p>}
                                {notice && <p className="text-[11px] text-amber-700 mt-1 ml-1">{notice}</p>}
                            </div>
                        )}

                        {/* ───────── composer: poll ───────── */}
                        {composerView === 'poll' && (
                            <div className="wa-panel shrink-0 border-t border-slate-200 bg-white flex flex-col overflow-hidden" style={{ flex: '0 0 46%' }}>
                                <div className="flex items-center gap-3 px-3 py-2.5 border-b border-slate-100 shrink-0">
                                    <button onClick={resetComposer} disabled={sending} aria-label="Back" className="text-slate-500 cursor-pointer hover:bg-slate-100 rounded-full p-2 disabled:opacity-40"><I.Back /></button>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-slate-800">Create poll</p>
                                        <p className="text-[10.5px] text-slate-400 truncate">Sending to {activeName}</p>
                                    </div>
                                </div>

                                <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Question</label>
                                        <input
                                            value={pollName}
                                            onChange={(e) => setPollName(e.target.value)}
                                            placeholder="Ask a question"
                                            className={cx('w-full text-sm font-medium px-3 py-2 border rounded-xl', inputCls, attempted && !pollName.trim() ? 'border-red-300' : 'border-slate-200')}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Options</label>
                                        <div className="space-y-1.5">
                                            {pollOptions.map((opt, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="w-5 h-5 shrink-0 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)] text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                                                    <input
                                                        value={opt}
                                                        onChange={(e) => setPollOptions((p) => p.map((o, j) => (j === i ? e.target.value : o)))}
                                                        placeholder={`Option ${i + 1}`}
                                                        className={cx('flex-1 text-sm px-3 py-1.5 border border-slate-200 rounded-xl', inputCls)}
                                                    />
                                                    {pollOptions.length > 2 && (
                                                        <button onClick={() => setPollOptions((p) => p.filter((_, j) => j !== i))} aria-label="Remove option" className="shrink-0 cursor-pointer text-slate-300 hover:text-red-500 p-1">
                                                            <I.Close className="w-3.5 h-3.5" />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={() => setPollOptions((p) => [...p, ''])} className="mt-1.5 text-xs text-[var(--color-primary)] cursor-pointer font-semibold hover:underline flex items-center gap-1">
                                            <I.Plus className="w-3.5 h-3.5" /> Add option
                                        </button>
                                    </div>

                                    <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer select-none pt-2 border-t border-slate-100">
                                        <input
                                            type="checkbox"
                                            checked={pollSelectable > 1}
                                            onChange={(e) => setPollSelectable(e.target.checked ? Math.max(2, validPollOptions.length || 2) : 1)}
                                            className="rounded accent-[var(--color-primary)]"
                                        />
                                        <span className="cursor-pointer">Allow multiple answers</span>
                                    </label>

                                    {attempted && (!pollName.trim() || validPollOptions.length < 2) && (
                                        <p className="text-[11px] text-red-500">Add a question and at least 2 options.</p>
                                    )}
                                </div>

                                <div className="shrink-0 border-t border-slate-100 p-2.5">
                                    <button onClick={handleSend} disabled={sending || !canSubmit}
                                        className={cx('w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer text-white flex items-center justify-center gap-2 transition-all disabled:opacity-40', sendBtn)}>
                                        {sending ? <><I.Spinner /> Sending...</> : <><I.Send /> Send poll</>}
                                    </button>
                                    {error && <p className="text-[11px] text-red-500 mt-1.5 text-center">{error}</p>}
                                </div>
                            </div>
                        )}

                        {/* ───────── composer: location ───────── */}
                        {composerView === 'location' && (
                            <div className="wa-panel shrink-0 border-t border-slate-200 bg-white flex flex-col overflow-hidden" style={{ flex: '0 0 50%' }}>
                                <div className="flex items-center gap-3 px-3 py-2.5 border-b border-slate-100 shrink-0">
                                    <button onClick={resetComposer} disabled={sending} aria-label="Back" className="text-slate-500 cursor-pointer hover:bg-slate-100 rounded-full p-2 disabled:opacity-40"><I.Back /></button>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-slate-800">Share location</p>
                                        <p className="text-[10.5px] text-slate-400 truncate">Sending to {activeName}</p>
                                    </div>
                                </div>

                                <div className="px-3 pt-3 shrink-0">
                                    <div className="relative">
                                        <I.Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                        <input
                                            value={locQuery}
                                            onChange={(e) => { setLocQuery(e.target.value); setLocation(null); }}
                                            placeholder="Search for a place or address"
                                            className={cx('w-full text-sm pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl', inputCls)}
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 min-h-0 overflow-y-auto px-3 py-2">
                                    {!location && (
                                        <button onClick={useCurrentLocation} disabled={locating} className="w-full cursor-pointer flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 text-left disabled:opacity-60">
                                            <span className="w-9 h-9 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                                                {locating ? <I.Spinner /> : <I.Target />}
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block text-sm font-medium text-[var(--color-primary)]">{locating ? 'Finding your location…' : 'Send your current location'}</span>
                                                <span className="block text-[10.5px] text-slate-400">Uses your device&apos;s GPS</span>
                                            </span>
                                        </button>
                                    )}

                                    {locError && <p className="text-[11px] text-red-500 px-2 mt-1">{locError}</p>}
                                    {locSearching && <p className="text-xs text-slate-400 px-2 py-2">Searching…</p>}

                                    {!location && locResults.map((r) => (
                                        <button key={r.place_id}
                                            onClick={() => { setLocation({ lat: r.lat, lng: r.lon, name: r.display_name }); setLocQuery(r.display_name); setLocResults([]); }}
                                            className="w-full cursor-pointer flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-slate-50 text-left">
                                            <span className="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0"><I.Pin /></span>
                                            <span className="text-sm text-slate-800 truncate">{r.display_name}</span>
                                        </button>
                                    ))}

                                    {location && (
                                        <div className="mt-1 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                            <iframe width="100%" height="130" style={{ border: 0 }} loading="lazy"
                                                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`} />
                                            <div className="flex items-center gap-3 p-3">
                                                <span className="w-9 h-9 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center shrink-0"><I.Pin /></span>
                                                <p className="flex-1 min-w-0 text-sm font-medium text-slate-800 truncate">{location.name}</p>
                                                <button onClick={() => { setLocation(null); setLocQuery(''); }} aria-label="Clear location" className="shrink-0 text-slate-300 hover:text-red-500 p-1">
                                                    <I.Close className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="shrink-0 border-t border-slate-100 p-2.5">
                                    <button onClick={handleSend} disabled={sending || !canSubmit}
                                        className={cx('w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer text-white flex items-center justify-center gap-2 transition-all disabled:opacity-40', sendBtn)}>
                                        {sending ? <><I.Spinner /> Sending...</> : <><I.Send /> Send location</>}
                                    </button>
                                    {attempted && !location && <p className="text-[11px] text-red-500 mt-1.5 text-center">Search for a place or share your current location.</p>}
                                    {error && <p className="text-[11px] text-red-500 mt-1.5 text-center">{error}</p>}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </section>

            {/* ───────── overlays ───────── */}
            {lightbox && (
                <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center cursor-zoom-out" onClick={() => setLightbox(null)}>
                    <img src={lightbox} alt="" className="max-w-[92vw] max-h-[92vh] object-contain" />
                </div>
            )}

            {showDeleteConfirm && activeKey && (
                <div className="fixed inset-0 z-[100] bg-slate-900/50 flex items-center justify-center p-4" onClick={() => !deleting && setShowDeleteConfirm(false)}>
                    <div role="alertdialog" aria-modal="true" aria-labelledby="del-title" className="wa-panel w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0"><I.Trash className="w-5 h-5" /></span>
                            <div className="min-w-0">
                                <p id="del-title" className="text-base font-bold text-slate-800">Delete chat history?</p>
                                <p className="text-xs text-slate-500 truncate">{activeName} · {dispNum(activeKey, activeChat)}</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 mt-3">All saved messages with this contact will be permanently removed from this platform. This can&apos;t be undone.</p>
                        <div className="flex gap-2 mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3">
                            <I.Warn className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <p className="text-[12px] text-amber-900 leading-relaxed">
                                Messages are deleted <b>only from this platform</b>. Your real WhatsApp account and the contact&apos;s phone are not affected, and the messages will still be there.
                            </p>
                        </div>
                        {deleteError && <p className="text-xs text-red-500 mt-2">{deleteError}</p>}
                        <div className="flex justify-end gap-2 mt-4">
                            <button autoFocus onClick={() => setShowDeleteConfirm(false)} disabled={deleting}
                                className="px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-50">Cancel</button>
                            <button onClick={deleteChatHistory} disabled={deleting}
                                className="px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer text-white bg-red-500 hover:bg-red-600 flex items-center gap-2 disabled:opacity-60">
                                {deleting ? <><I.Spinner /> Deleting…</> : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <WhatsAppTemplatePicker
                isOpen={showTemplates}
                onClose={() => setShowTemplates(false)}
                targetIds={activeChat?.customerId ? [activeChat.customerId] : []}
                onSent={onTemplateSent}
            />
        </div>
    );
}