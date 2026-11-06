'use client';
/**
 * Inbox page — e.g. app/(dashboard)/inbox/page.tsx
 * Sidebar + header come from layout.tsx.
 *
 * HOW TO ADD A NEW INBOX LATER
 *   1. Build the component (it receives `{ adminId?: string }` and should fill its parent's height).
 *   2. Import it below and set it as `Component` on a provider in CHANNELS.
 *   Providers without a `Component` show a "coming soon" panel and a "Soon" badge.
 */
import React, { useState } from 'react';
import WhatsAppBaileysInbox from "@/app/component/whatsapp/baileys/WhatsappBaileysInbox"; // 👈 adjust to where you put the file
import EmailInbox from '../component/email/EmailInbox';

type InboxProps = { adminId?: string };
type Provider = { id: string; label: string; Component?: React.ComponentType<InboxProps> };
type Channel = { id: string; label: string; icon: React.ReactNode; providers: Provider[] };

const Svg = ({ children }: { children: React.ReactNode }) => (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);

/* ───────────────── channel registry — add future inboxes here ───────────────── */
const CHANNELS: Channel[] = [
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        icon: <Svg><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" /></Svg>,
        providers: [
            { id: 'baileys', label: 'Baileys WhatsApp', Component: WhatsAppBaileysInbox },
            { id: 'meta', label: 'Meta WhatsApp' }, // 👈 set Component when the Meta inbox is ready
        ],
    },
    {
        id: 'email',
        label: 'Email',
        icon: <Svg><path d="M4 5h16v14H4zM4 7l8 6 8-6" /></Svg>,
        providers: [{ id: 'email', label: 'Email', Component: EmailInbox }],
    },
    {
        id: 'sms',
        label: 'SMS',
        icon: <Svg><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></Svg>,
        providers: [{ id: 'sms', label: 'SMS' }],
    },
];

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
const isReady = (ch: Channel) => ch.providers.some((p) => p.Component);

export default function InboxPage() {
    const [channelId, setChannelId] = useState(CHANNELS[0].id);
    // remembers the chosen provider for each channel, e.g. { whatsapp: 'baileys' }
    const [providerBy, setProviderBy] = useState<Record<string, string>>(
        () => Object.fromEntries(CHANNELS.map((c) => [c.id, (c.providers.find((p) => p.Component) ?? c.providers[0]).id]))
    );
    const [menuFor, setMenuFor] = useState<string | null>(null);

    const channel = CHANNELS.find((c) => c.id === channelId)!;
    const provider = channel.providers.find((p) => p.id === providerBy[channel.id]) ?? channel.providers[0];
    const Active = provider.Component;

    const onTab = (ch: Channel) => {
        if (ch.id === channelId && ch.providers.length > 1) setMenuFor(menuFor === ch.id ? null : ch.id);
        else {
            setChannelId(ch.id);
            setMenuFor(ch.providers.length > 1 ? ch.id : null);
        }
    };

    return (
        <div
            className="mx-auto flex w-full max-w-[1600px] bg-white rounded-md flex-col gap-4 px-2 py-4 sm:px-6"
            onKeyDown={(e) => e.key === 'Escape' && setMenuFor(null)}
        >
            {/* title */}
            <header className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
                    </svg>
                </span>
                <div>
                    <h1 className="text-xl font-semibold leading-tight text-slate-900">Inbox</h1>
                    <p className="text-sm text-slate-500">Manage all your customer conversations in one place.</p>
                </div>
            </header>

            {/* channel tabs */}
            <div role="tablist" aria-label="Inbox channels" className="flex flex-wrap items-center gap-2">
                {CHANNELS.map((ch) => {
                    const active = ch.id === channelId;
                    const multi = ch.providers.length > 1;
                    return (
                        <div key={ch.id} className="relative">
                            <button
                                role="tab"
                                type="button"
                                aria-selected={active}
                                aria-haspopup={multi ? 'listbox' : undefined}
                                aria-expanded={multi ? menuFor === ch.id : undefined}
                                onClick={() => multi ? setMenuFor(ch.id) : onTab(ch)}
                                className={cx(
                                    'inline-flex items-center gap-2 cursor-pointer rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2',
                                    active
                                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                                        : 'border-slate-200 bg-white text-slate-700 hover:bg-[var(--color-primary-lighter)]'
                                )}
                            >
                                {ch.icon}
                                {ch.label}
                                {!isReady(ch) && (
                                    <span className={cx('rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide', active ? 'bg-white text-[var(--color-primary-dark)]' : 'bg-slate-100 text-slate-500')}>
                                        Soon
                                    </span>
                                )}
                                {multi && (
                                    <svg className={cx('h-4 w-4 transition-transform', menuFor === ch.id && 'rotate-180')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                )}
                            </button>

                            {multi && menuFor === ch.id && (
                                <>
                                    <div className="fixed inset-0 z-30" onClick={() => setMenuFor(null)} />
                                    <ul role="listbox" className="absolute cursor-pointer left-0 top-full z-40 mt-2 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl">
                                        {ch.providers.map((p) => {
                                            const selected = providerBy[ch.id] === p.id;
                                            const off = !p.Component;
                                            return (
                                                <li key={p.id} role="option" aria-selected={selected}>
                                                    <button
                                                        type="button"
                                                        disabled={off}
                                                        onClick={() => { setProviderBy((s) => ({ ...s, [ch.id]: p.id })); setChannelId(ch.id); setMenuFor(null); }}
                                                        className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-800 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent"
                                                    >
                                                        <span className={cx('flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2', selected ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-slate-300')}>
                                                            {selected && (
                                                                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                                                            )}
                                                        </span>
                                                        <span className="flex-1">{p.label}</span>
                                                        {off && <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-500">Soon</span>}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* active inbox — give it a fixed height; the component fills it */}
            <div role="tabpanel" className=" min-h-[520px]">
                {Active ? (
                    <Active key={`${channel.id}-${provider.id}`} />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">{channel.icon}</span>
                        <p className="text-sm font-semibold text-slate-800">{provider.label} inbox is coming soon</p>
                        <p className="max-w-xs text-xs text-slate-500">Connect it here once its inbox component is added to the registry.</p>
                    </div>
                )}
            </div>
        </div>
    );
}