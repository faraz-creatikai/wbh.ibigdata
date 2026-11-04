"use client";

/**
 * Inbox page — e.g. app/(dashboard)/inbox/page.tsx
 * Sidebar + header come from layout.tsx.
 *
 * TO ADD A FUTURE INBOX: build a component that accepts { adminId?, onUnreadChange? },
 * import it below, and put it in the `component` field of its source in CHANNELS. Nothing else changes.
 */
import { ComponentType, useEffect, useRef, useState } from "react";
// 👇 adjust to where you save the file
/* import WhatsAppBaileysInbox from "@/components/inbox/WhatsAppBaileysInbox"; */

type InboxProps = { adminId?: string; onUnreadChange?: (count: number) => void };
type Source = { id: string; label: string; component?: ComponentType<InboxProps> }; // no component = "Soon"
type Channel = { id: string; label: string; icon: string; sources: Source[] };

const CHANNELS: Channel[] = [
    {
        id: "whatsapp",
        label: "WhatsApp",
        icon: "M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.5 8.5 0 1 1 21 11.5Z",
        sources: [
            { id: "baileys", label: "Baileys WhatsApp", component: ()=> <div className='flex flex-col  items-center justify-center mt-[200px] gap-4'>
        <h1 className='text-2xl font-bold text-[var(--color-primary-darker)]'>Coming soon</h1>
        <p className='text-lg text-slate-600'>This feature is currently under development.</p>
    </div> },
            { id: "meta", label: "Meta WhatsApp" }, // ← set `component` when the Meta inbox is ready
        ],
    },
    { id: "email", label: "Email", icon: "M4 5h16v14H4zM4 7l8 6 8-6", sources: [{ id: "email", label: "Email" }] },
    { id: "sms", label: "SMS", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", sources: [{ id: "sms", label: "SMS" }] },
];

// 👇 your logged-in admin id, only needed if the socket isn't already initialised in layout.tsx
const ADMIN_ID: string | undefined = undefined;

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const Icon = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

export default function InboxPage() {
    const firstReady = CHANNELS.flatMap((c) => c.sources.filter((s) => s.component).map((s) => `${c.id}:${s.id}`))[0];
    const [active, setActive] = useState<string>(firstReady ?? "");
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [unread, setUnread] = useState<Record<string, number>>({});
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (!barRef.current?.contains(e.target as Node)) setOpenMenu(null);
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    const pick = (id: string) => {
        setActive(id);
        setOpenMenu(null);
    };
    const channelUnread = (c: Channel) => c.sources.reduce((n, s) => n + (unread[`${c.id}:${s.id}`] || 0), 0);

    return (
        <div className="mx-auto w-full max-w-[1600px] px-4 py-5 text-slate-900 sm:px-6">
            <header className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                    <Icon d="M22 12h-6l-2 3h-4l-2-3H2M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.7 4H7.2a2 2 0 0 0-1.7 1.1Z" className="h-5 w-5" />
                </span>
                <div>
                    <h1 className="text-xl font-semibold leading-tight">Inbox</h1>
                    <p className="text-sm text-slate-600">Manage all your customer conversations from WhatsApp, Email and SMS in one place.</p>
                </div>
            </header>

            {/* channel tabs */}
            <div ref={barRef} className="mb-4 flex flex-wrap items-center gap-3" role="tablist">
                {CHANNELS.map((c) => {
                    const ready = c.sources.filter((s) => s.component);
                    const multi = c.sources.length > 1;
                    const isActive = active.startsWith(`${c.id}:`);
                    const n = channelUnread(c);
                    const base = "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ";

                    if (!ready.length)
                        return (
                            <button key={c.id} type="button" disabled className={cx(base, "cursor-not-allowed border-slate-200 bg-white text-slate-400")}>
                                <Icon d={c.icon} className="h-5 w-5" /> {c.label}
                                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">Soon</span>
                            </button>
                        );

                    return (
                        <div key={c.id} className="relative">
                            <button
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-haspopup={multi ? "menu" : undefined}
                                aria-expanded={multi ? openMenu === c.id : undefined}
                                onClick={() => (multi ? setOpenMenu(openMenu === c.id ? null : c.id) : pick(`${c.id}:${ready[0].id}`))}
                                className={cx(base, isActive ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-slate-200 bg-white text-slate-800 hover:bg-[var(--color-primary-lighter)]")}
                            >
                                <Icon d={c.icon} className="h-5 w-5" />
                                {c.label}
                                {n > 0 && (
                                    <span className={cx("rounded-full px-1.5 py-0.5 text-[11px] font-bold", isActive ? "bg-white/25 text-white" : "bg-[var(--color-primary)] text-white")}>{n}</span>
                                )}
                                {multi && <Icon d="m6 9 6 6 6-6" className="h-4 w-4" />}
                            </button>

                            {multi && openMenu === c.id && (
                                <div role="menu" className="absolute left-0 top-full z-30 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                                    {c.sources.map((s) => {
                                        const id = `${c.id}:${s.id}`;
                                        return (
                                            <button
                                                key={s.id}
                                                role="menuitemradio"
                                                aria-checked={active === id}
                                                type="button"
                                                disabled={!s.component}
                                                onClick={() => pick(id)}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-[var(--color-primary-lighter)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent"
                                            >
                                                <span className={cx("flex h-4 w-4 items-center justify-center rounded-full border", active === id ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-slate-300")}>
                                                    {active === id && <Icon d="M20 6 9 17l-5-5" className="h-3 w-3" />}
                                                </span>
                                                <span className="flex-1">{s.label}</span>
                                                {!s.component ? (
                                                    <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-slate-500">Soon</span>
                                                ) : (
                                                    (unread[id] || 0) > 0 && <span className="text-xs font-semibold text-[var(--color-primary)]">{unread[id]}</span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* inboxes — all registered ones stay mounted (state + live counts survive tab switches) */}
            <div className="h-[calc(100dvh-13rem)] min-h-[520px]">
                {!firstReady && <p className="p-10 text-center text-sm text-slate-500">No inbox is connected yet.</p>}
                {CHANNELS.flatMap((c) =>
                    c.sources
                        .filter((s) => s.component)
                        .map((s) => {
                            const id = `${c.id}:${s.id}`;
                            const Inbox = s.component!;
                            return (
                                <div key={id} className={active === id ? "h-full" : "hidden"}>
                                    <Inbox adminId={ADMIN_ID} onUnreadChange={(n) => setUnread((p) => (p[id] === n ? p : { ...p, [id]: n }))} />
                                </div>
                            );
                        })
                )}
            </div>
        </div>
    );
}