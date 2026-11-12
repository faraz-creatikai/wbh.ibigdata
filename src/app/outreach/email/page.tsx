"use client";

/**
 * Email channel page — e.g. app/(dashboard)/outreach/email/page.tsx
 * Sidebar + header come from layout.tsx. Needs only React + Tailwind.
 * 👇 Adjust the import path to wherever your mail api file lives.
 */
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    connectEmail,
    disconnectEmail,
    getEmailConnection,
    testEmailConnection,
    verifyEmailConnection,
    sendTestEmail,
    type EmailConnectPayload,
    type EmailConnection,
    type EmailConnectionError,
    type EmailDetected,
} from "@/store/masters/mail/mail";
import CampaignDialog from "@/app/component/outreach/CampaignDialog";
import CampaignsTab from "@/app/component/outreach/CampaignTab";
import RecentCampaigns from "@/app/component/outreach/RecentCampaign";
import { useChannelStats, pct, channelBreakdown, type Slice } from "@/app/component/outreach/useChannelStats";
import type { ChannelStats } from "@/store/masters/channeltracking/channeltracking";

/* ───────────────── sample analytics (no API yet — replace with real data) ───────────────── */

const STAT_CARDS: { key: keyof ChannelStats; label: string; icon: string; tint: string }[] = [
    { key: "sent", label: "Emails Sent", icon: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z", tint: "bg-sky-50 border-sky-100 text-sky-600" },
    { key: "delivered", label: "Delivered", icon: "M4 5h16v14H4zM4 7l8 6 8-6", tint: "bg-emerald-50 border-emerald-100 text-emerald-600" },
    { key: "opened", label: "Opened", icon: "M3 9l9-6 9 6v11H3zM3 9l9 6 9-6", tint: "bg-violet-50 border-violet-100 text-violet-600" },
    { key: "replied", label: "Replies", icon: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 6 6v3", tint: "bg-rose-50 border-rose-100 text-rose-600" },
    { key: "bounced", label: "Bounced", icon: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z", tint: "bg-amber-50 border-amber-100 text-amber-600" },
];

const Donut = ({ segments, total }: { segments: Slice[]; total: number }) => {
    const r = 52;
    const c = 2 * Math.PI * r;
    let offset = 0;
    return (
        <div className="relative h-36 w-36 shrink-0">
            <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90" aria-hidden="true">
                <circle cx="64" cy="64" r={r} fill="none" stroke="#e2e8f0" strokeWidth="14" />
                {total > 0 &&
                    segments.filter((s) => s.value > 0).map((s) => {
                        const len = (s.value / total) * c;
                        const el = (
                            <circle key={s.label} cx="64" cy="64" r={r} fill="none" stroke={s.color} strokeWidth="14"
                                strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
                        );
                        offset += len;
                        return el;
                    })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-semibold">{total.toLocaleString()}</span>
                <span className="text-[11px] text-slate-500">Total Triggered</span>
            </div>
        </div>
    );
};

const STEPS = ["Choose your email provider", "Connect and verify email", "Start sending campaigns"];
const BENEFITS = [
    "Send bulk & personalized email campaigns",
    "Use templates and automation (drip campaigns)",
    "Track opens, clicks and replies in real-time",
];
const TABS = ["Overview", "Campaigns", "Templates", "Automations", "Settings"] as const;
type TabName = (typeof TABS)[number];

/* ───────────────────────── copy ───────────────────────── */

const ERROR_TITLES: Record<string, string> = {
    AUTH_FAILED: "Email or password was rejected",
    APP_PASSWORD_REQUIRED: "This account needs an app password",
    BASIC_AUTH_DISABLED: "Password sign-in is switched off",
    OAUTH_REQUIRED: "This account needs OAuth sign-in",
    UNSUPPORTED_PROVIDER: "This provider can't be connected",
    INVALID_DOMAIN: "That email domain doesn't exist",
    TLS_CERT_MISMATCH: "The server's security certificate doesn't match",
    UNREACHABLE: "Couldn't reach a mail server",
};

const ATTEMPT_LABELS: Record<string, string> = {
    ok: "Connected",
    auth_failed: "Login rejected",
    app_password_required: "App password needed",
    basic_auth_disabled: "Password login disabled",
    tls_cert: "Certificate mismatch",
    unreachable: "No response",
    blocked_private_address: "Blocked (private address)",
    dns_not_found: "Host not found",
};

type Tip = { tone: "info" | "warn"; text: string; href?: string; linkText?: string };

/** Quick pre-submit guidance based on the typed domain. The server is still the source of truth. */
const domainTip = (email: string): Tip | null => {
    const d = email.split("@")[1]?.toLowerCase().trim();
    if (!d) return null;
    if (["gmail.com", "googlemail.com"].includes(d))
        return {
            tone: "info",
            text: "Gmail needs an App Password, not your normal password. Turn on 2-Step Verification first.",
            href: "https://myaccount.google.com/apppasswords",
            linkText: "Create an app password",
        };
    if (/^(yahoo\.|ymail\.com|rocketmail\.com)/.test(d))
        return { tone: "info", text: "Yahoo needs an App Password from your Yahoo Account Security page." };
    if (["icloud.com", "me.com", "mac.com"].includes(d))
        return { tone: "info", text: "iCloud needs an app-specific password from appleid.apple.com." };
    if (/^(outlook|hotmail|live|msn)\./.test(d))
        return {
            tone: "warn",
            text: "Personal Outlook / Hotmail accounts no longer allow password sign-in, so they can't be connected here. Use Gmail, Zoho, Hostinger or a custom-domain mailbox.",
        };
    return null;
};

/* ───────────────────────── small UI pieces ───────────────────────── */

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const P = "var(--color-primary)";
const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 " +
    "focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 disabled:bg-slate-50 disabled:text-slate-500";
const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ";
const btnBase = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ";
const btnPrimary = btnBase + "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] cursor-pointer " + focusRing;
const btnSecondary = btnBase + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 cursor-pointer " + focusRing;
const btnOutline =
    btnBase + "border border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)] hover:bg-[var(--color-primary-lighter)] cursor-pointer " + focusRing;
const btnDanger = btnBase + "bg-[var(--color-destructive)] text-white hover:opacity-90 cursor-pointer " + focusRing;

const Icon = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

const MAIL = "M4 5h16v14H4zM4 7l8 6 8-6";
const CHECK = "M20 6 9 17l-5-5";

const Spinner = () => (
    <svg className="h-4 w-4 animate-spin motion-reduce:animate-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const EyeIcon = ({ off }: { off?: boolean }) => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
        {off && <path d="M4 4l16 16" />}
    </svg>
);

const Banner = ({
    tone,
    title,
    children,
}: {
    tone: "success" | "error" | "warn" | "info";
    title?: string;
    children?: React.ReactNode;
}) => {
    const styles = {
        success: "border-emerald-200 bg-emerald-50 text-emerald-900",
        error: "border-red-200 bg-red-50 text-red-900",
        warn: "border-amber-200 bg-amber-50 text-amber-900",
        info: "border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]",
    }[tone];
    return (
        <div role={tone === "error" ? "alert" : "status"} className={cx("rounded-lg border px-4 py-3 text-sm", styles)}>
            {title && <p className="font-medium">{title}</p>}
            {children && <div className={cx(title && "mt-1", "leading-relaxed")}>{children}</div>}
        </div>
    );
};

const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) => (
    <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800">
            {label}
        </label>
        {children}
        {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
);

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex flex-col gap-0.5 py-3 sm:flex-row sm:gap-6">
        <dt className="w-40 shrink-0 text-sm text-slate-500">{label}</dt>
        <dd className="min-w-0 break-words text-sm text-slate-900">{value}</dd>
    </div>
);

const formatDate = (iso?: string | null) => (iso ? new Date(iso).toLocaleString() : "Never");

const Illustration = () => (
    <svg viewBox="0 0 260 200" className="h-48 w-full max-w-[280px]" aria-hidden="true">
        <ellipse cx="130" cy="110" rx="115" ry="80" fill="var(--color-primary-lighter)" />
        <rect x="85" y="40" width="90" height="80" rx="8" fill="#fff" stroke="var(--color-primary-light)" />
        <rect x="97" y="58" width="66" height="6" rx="3" fill="var(--color-primary-light)" />
        <rect x="97" y="74" width="50" height="6" rx="3" fill="var(--color-primary-light)" />
        <rect x="97" y="90" width="58" height="6" rx="3" fill="var(--color-primary-light)" />
        <path d="M45 85 130 140 215 85v75a8 8 0 0 1-8 8H53a8 8 0 0 1-8-8Z" fill="var(--color-primary)" />
        <path d="M45 85 130 140 215 85" fill="none" stroke="var(--color-primary-light)" strokeWidth="3" />
        <circle cx="200" cy="40" r="26" fill="var(--color-primary-dark)" />
        <path d="m190 42 22-10-8 22-4-8Z" fill="#fff" />
    </svg>
);





const WARN = "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z";

const ConfirmDialog = ({
    title,
    children,
    confirmLabel,
    cancelLabel,
    busy,
    error,
    onConfirm,
    onCancel,
}: {
    title: string;
    children: React.ReactNode;
    confirmLabel: string;
    cancelLabel: string;
    busy: boolean;
    error?: string | null;
    onConfirm: () => void;
    onCancel: () => void;
}) => {
    const cancelRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const trigger = document.activeElement as HTMLElement | null;
        cancelRef.current?.focus(); // safe default: focus the non-destructive button
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
            trigger?.focus?.(); // give focus back to what opened the dialog
        };
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !busy) onCancel();
            if (e.key === "Tab") {
                // keep keyboard focus inside the dialog
                const els = panelRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])");
                if (!els || !els.length) return;
                const first = els[0];
                const last = els[els.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [busy, onCancel]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/50" onClick={() => !busy && onCancel()} aria-hidden="true" />
            <div
                ref={panelRef}
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-title"
                aria-describedby="confirm-desc"
                className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            >
                <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-[var(--color-destructive)]">
                        <Icon d={WARN} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                        <h2 id="confirm-title" className="text-lg font-semibold text-slate-900">
                            {title}
                        </h2>
                        <div id="confirm-desc" className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
                            {children}
                        </div>
                    </div>
                </div>
                {error && (
                    <div className="mt-4">
                        <Banner tone="error">{error}</Banner>
                    </div>
                )}
                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <button ref={cancelRef} type="button" className={btnSecondary} onClick={onCancel} disabled={busy}>
                        {cancelLabel}
                    </button>
                    <button type="button" className={btnDanger} onClick={onConfirm} disabled={busy}>
                        {busy && <Spinner />}
                        {busy ? "Disconnecting…" : confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ───────────────────────── page ───────────────────────── */

export default function EmailChannelPage() {
    const [connection, setConnection] = useState<EmailConnection | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [formOpen, setFormOpen] = useState(false);
    const [tab, setTab] = useState<TabName>("Overview");
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHow, setShowHow] = useState(false);
    const [busy, setBusy] = useState<null | "test" | "connect" | "verify" | "disconnect" | "sendtest">(null);
    const [confirmDisconnect, setConfirmDisconnect] = useState(false);
    const [dialogError, setDialogError] = useState<string | null>(null);
    const noticeRef = useRef<HTMLDivElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fromName, setFromName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [adv, setAdv] = useState({ smtpHost: "", smtpPort: "587", smtpUser: "", imapHost: "", imapPort: "993" });

    const [error, setError] = useState<EmailConnectionError | null>(null);
    const [detected, setDetected] = useState<EmailDetected | null>(null);
    const [warnings, setWarnings] = useState<string[]>([]);
    const [notice, setNotice] = useState<{ tone: "success" | "error"; text: string } | null>(null);
    const [campaignsKey, setCampaignsKey] = useState(0);
    const [dialog, setDialog] = useState<{ open: boolean; id: string | null }>({ open: false, id: null });

    // result banners sit at the top of the page: bring them into view if the user has scrolled down
    useEffect(() => {
        if (notice) noticeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, [notice]);

    const load = useCallback(async () => {
        setLoading(true);
        setLoadError(null);
        const r = await getEmailConnection();
        if (r.ok) setConnection(r.data.connection);
        else setLoadError(r.error.message);
        setLoading(false);
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const connected = !!connection?.connected;
    const ready = !loading && !loadError;
    const showForm = ready && formOpen;
    const showHero = ready && !connected && !formOpen;
    const showDashboard = ready && connected && !formOpen && !!connection;
    const { stats, error: statsError, reload: reloadStats } = useChannelStats("email", { enabled: showDashboard && tab === "Overview" });
    const view = channelBreakdown(stats, "email");
    const failed = connection?.status === "failed";
    const tip = useMemo(() => domainTip(email), [email]);
    const canSubmit = /^\S+@\S+\.\S+$/.test(email.trim()) && password.length > 0 && !busy;

    const openForm = () => {
        setEmail(connection?.email ?? "");
        setFromName(connection?.fromName ?? "");
        setPassword("");
        setError(null);
        setDetected(null);
        setNotice(null);
        setMenuOpen(false);
        setFormOpen(true);
    };

    const closeForm = () => {
        setFormOpen(false);
        setPassword("");
        setError(null);
        setDetected(null);
    };

    const buildPayload = (): EmailConnectPayload => {
        const payload: EmailConnectPayload = {
            email: email.trim(),
            password,
            ...(fromName.trim() ? { fromName: fromName.trim() } : {}),
        };
        if (showAdvanced && adv.smtpHost.trim()) {
            payload.advanced = {
                smtpHost: adv.smtpHost.trim(),
                smtpPort: Number(adv.smtpPort) || 587,
                ...(adv.smtpUser.trim() ? { smtpUser: adv.smtpUser.trim() } : {}),
                ...(adv.imapHost.trim() ? { imapHost: adv.imapHost.trim(), imapPort: Number(adv.imapPort) || 993 } : {}),
            };
        }
        return payload;
    };

    const handleFailure = (e: EmailConnectionError) => {
        setError(e);
        if (e.needsAdvanced) setShowAdvanced(true);
    };

    const run = async (kind: "test" | "connect") => {
        if (!canSubmit) return;
        setBusy(kind);
        setError(null);
        setDetected(null);
        setWarnings([]);
        setNotice(null);

        if (kind === "test") {
            const r = await testEmailConnection(buildPayload());
            if (r.ok) {
                setDetected(r.data.detected);
                setWarnings(r.data.detected.warnings ?? []);
            } else handleFailure(r.error);
        } else {
            const r = await connectEmail(buildPayload());
            if (r.ok) {
                setConnection(r.data.connection);
                setWarnings(r.data.warnings ?? []);
                setNotice({ tone: "success", text: r.data.message });
                setFormOpen(false);
                setTab("Overview");
                setPassword("");
                setShowAdvanced(false);
            } else handleFailure(r.error);
        }
        setBusy(null);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        run("connect");
    };

    const verify = async () => {
        setMenuOpen(false);
        setBusy("verify");
        setNotice(null);
        const r = await verifyEmailConnection();
        if (r.ok) {
            setConnection(r.data.connection);
            setNotice({ tone: "success", text: "Mailbox verified. Sending is working." });
        } else {
            if (r.error.connection) setConnection(r.error.connection);
            setNotice({ tone: "error", text: r.error.message });
        }
        setBusy(null);
    };

    const sendTest = async () => {
        setBusy("sendtest");
        setNotice(null);
        const r = await sendTestEmail();
        if (!r.ok) setNotice({ tone: "error", text: r.error.message });
        else {
            const { message, sentCopy, sentCopyError } = r.data;
            if (sentCopy === "failed")
                setNotice({ tone: "error", text: `${message} But the copy could not be saved to Sent: ${sentCopyError}` });
            else
                setNotice({ tone: "success", text: sentCopy === "saved" ? `${message} A copy was saved to your Sent folder.` : message });
        }
        setBusy(null);
    };

    const openDisconnect = () => {
        setMenuOpen(false);
        setDialogError(null);
        setConfirmDisconnect(true);
    };

    const closeDisconnect = () => {
        setConfirmDisconnect(false);
        setDialogError(null);
    };

    const disconnect = async () => {
        setBusy("disconnect");
        setNotice(null);
        setDialogError(null);
        const r = await disconnectEmail();
        if (r.ok) {
            setConnection({ connected: false });
            setConfirmDisconnect(false);
            setFormOpen(false);
            setWarnings([]);
            setEmail("");
            setFromName("");
            setTab("Overview");
            setNotice({ tone: "success", text: "Email disconnected. Emails now go out from the default mailbox." });
        } else {
            setDialogError(r.error.message);
        }
        setBusy(null);
    };

    const channelSettings = () => (connected ? setTab("Settings") : openForm());

    /* ───────── render ───────── */
    return (
        <div className="mx-auto w-full  px-2 py-4 bg-white rounded-md text-slate-900 sm:px-4">
            {/* breadcrumb + channel settings */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                        <Icon d={CHECK} className="h-3 w-3" />
                    </span>
                    <span className="font-semibold">Outreach Channels</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-700">Email</span>
                </nav>
                <button type="button" className={cx(btnOutline, "!py-2")} onClick={channelSettings}>
                    <Icon d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.4 3h-4l-.4 3a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 3h4l.4-3a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" />
                    Channel Settings
                </button>
            </div>

            {notice && (
                <div ref={noticeRef} className="mb-5 scroll-mt-4">
                    <Banner tone={notice.tone}>{notice.text}</Banner>
                </div>
            )}

            {loading && (
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                    <Spinner /> Checking your email connection…
                </div>
            )}

            {loadError && (
                <div className="space-y-3">
                    <Banner tone="error" title="Couldn't load your email connection">
                        {loadError}
                    </Banner>
                    <button type="button" className={btnSecondary} onClick={load}>
                        Try again
                    </button>
                </div>
            )}

            {/* ───── BEFORE: not connected ───── */}
            {showHero && (
                <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-4">
                    <div className="py-4 lg:pl-6">
                        <p className="text-sm font-semibold text-[var(--color-primary)]">Email Channel</p>
                        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                            Connect <span className="text-[var(--color-primary)]">Email</span> to Start Outreach
                        </h1>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700">
                            Integrate your business email (SMTP/Google/Microsoft) to send bulk campaigns, automated follow-ups, and
                            personalized emails directly from your CRM. Just enter your email and password; we find the right server
                            settings for you.
                        </p>
                        <ul className="mt-4 space-y-2.5">
                            {BENEFITS.map((b) => (
                                <li key={b} className="flex items-center gap-3 text-sm text-slate-800">
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-400 text-slate-700">
                                        <Icon d={CHECK} className="h-3 w-3" />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-slate-500">Until you connect, emails go out from the default mailbox.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button type="button" className={cx(btnPrimary, "px-6 py-3")} onClick={openForm}>
                                <Icon d={MAIL} className="h-5 w-5" />
                                Connect Email
                            </button>
                            <button type="button" className={cx(btnOutline, "px-6 py-3")} onClick={() => setShowHow((s) => !s)} aria-expanded={showHow}>
                                <Icon d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM10 8.5l5 3.5-5 3.5Z" className="h-5 w-5" />
                                How it works?
                            </button>
                        </div>
                        {showHow && (
                            <div className="mt-4 max-w-md">
                                <Banner tone="info" title="How it works">
                                    Enter your email and password (or app password). We detect your provider, test the login, then save the
                                    connection. Your password is stored encrypted and is never shown again.
                                </Banner>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-6 sm:flex-row lg:justify-end">
                        <Illustration />
                        <div className="w-full max-w-xs rounded-2xl border border-[var(--color-primary-light)] bg-white p-5 shadow-sm">
                            <h2 className="text-lg font-semibold">Get Started in 3 Steps</h2>
                            <ol className="mt-4 space-y-4">
                                {STEPS.map((s, i) => (
                                    <li key={s} className="flex items-center gap-3 text-sm">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                                            {i + 1}
                                        </span>
                                        {s}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>
            )}

            {/* ───── AFTER: connected dashboard ───── */}
            {showDashboard && connection && (
                <div className="space-y-5">
                    {/* status strip */}
                    <section className="flex flex-wrap items-center gap-x-8 gap-y-4 rounded-xl border border-emerald-200 bg-emerald-50/60 px-5 py-4">
                        <div className="flex items-center gap-4">
                            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-emerald-600">
                                <Icon d={MAIL} className="h-6 w-6" />
                            </span>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h1 className="text-base font-semibold">Email Channel</h1>
                                    <span
                                        className={cx(
                                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
                                            failed ? "bg-red-100 text-red-800" : "bg-emerald-600 text-white"
                                        )}
                                    >
                                        {!failed && <Icon d={CHECK} className="h-3 w-3" />}
                                        {failed ? "Needs attention" : "Connected"}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600">
                                    {failed ? "The last check failed. Review the details below." : "Your business email is connected and ready to use."}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-8 gap-y-3">
                            <div className="flex items-center gap-3">
                                <Icon d={MAIL} className="h-5 w-5 text-emerald-600" />
                                <div className="min-w-0">
                                    <p className="text-xs text-slate-500">Connected Account</p>
                                    <p className="break-all text-sm font-semibold">{connection.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary)] ring-1 ring-slate-200">
                                    {connection.providerLabel?.[0] ?? "@"}
                                </span>
                                <div>
                                    <p className="text-xs text-slate-500">Provider</p>
                                    <p className="text-sm font-semibold">{connection.providerLabel}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Status</p>
                                <p className="flex items-center gap-1.5 text-sm font-semibold">
                                    <span className={cx("h-2.5 w-2.5 rounded-full", failed ? "bg-red-500" : "bg-emerald-500")} />
                                    {failed ? "Failed" : "Live"}
                                </p>
                            </div>

                            <div className="relative">
                                <button
                                    type="button"
                                    className={cx("flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg text-slate-600 hover:bg-white", focusRing)}
                                    onClick={() => setMenuOpen((s) => !s)}
                                    aria-label="More actions"
                                    aria-expanded={menuOpen}
                                    disabled={!!busy}
                                >
                                    {busy === "verify" ? <Spinner /> : <Icon d="M12 5v.01M12 12v.01M12 19v.01" className="h-5 w-5" />}
                                </button>
                                {menuOpen && (
                                    <div className="absolute right-0 z-10 mt-1 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-sm shadow-lg">
                                        <button type="button" className="block w-full px-4 py-2 text-left hover:bg-slate-50 cursor-pointer" onClick={verify}>
                                            Check connection
                                        </button>
                                        <button type="button" className="block w-full px-4 py-2 text-left hover:bg-slate-50 cursor-pointer" onClick={openForm}>
                                            Change mailbox
                                        </button>
                                        <button
                                            type="button"
                                            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-slate-50 cursor-pointer"
                                            onClick={openDisconnect}
                                        >
                                            Disconnect
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {failed && connection.lastError && (
                        <Banner tone="error" title="The last check failed">
                            {connection.lastError}. If you changed your mailbox password, use “Change mailbox” to enter the new one.
                        </Banner>
                    )}

                    {warnings.length > 0 && (
                        <div className="space-y-2">
                            {warnings.map((w) => (
                                <Banner key={w} tone="warn">
                                    {w}
                                </Banner>
                            ))}
                        </div>
                    )}

                    {/* tabs + create */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div role="tablist" className="flex flex-wrap gap-1">
                            {TABS.map((t) => (
                                <button
                                    key={t}
                                    role="tab"
                                    type="button"
                                    aria-selected={tab === t}
                                    onClick={() => setTab(t)}
                                    className={cx(
                                        "rounded-lg px-4 py-2 text-sm font-medium cursor-pointer",
                                        focusRing,
                                        tab === t ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-[var(--color-primary-lighter)]"
                                    )}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                        <button type="button" className={btnPrimary} onClick={() => { setTab("Campaigns"); setDialog({ open: true, id: null }) }}>
                            <Icon d="M12 5v14M5 12h14" />
                            Create Campaign
                        </button>
                    </div>

                    {/* Overview */}
                    {tab === "Overview" && (
                        <>
                            {statsError && (
                                <div className="space-y-2">
                                    <Banner tone="error" title="Couldn't load email stats">{statsError}</Banner>
                                    <button type="button" className={btnSecondary} onClick={reloadStats}>Try again</button>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                                {STAT_CARDS.map((s) => {
                                    const n = stats ? stats[s.key] : 0;
                                    return (
                                        <div key={s.key} className={cx("flex items-center gap-3 rounded-xl border p-4", s.tint)}>
                                            <Icon d={s.icon} className="h-7 w-7 shrink-0" />
                                            <div className="min-w-0">
                                                <p className="text-xs text-slate-600">{s.label}</p>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="text-xl font-semibold text-slate-900">{stats ? n.toLocaleString() : "—"}</span>
                                                    {stats && (
                                                        <span className="rounded-md bg-white/70 px-1.5 py-0.5 text-xs font-medium text-slate-700">{pct(n, view.triggered)}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="-mt-2 text-xs text-slate-500">
                                Last 30 days. Percentages are a share of all emails triggered (sent + failed). Opens are approximate, because some mail apps load images automatically or block them.
                            </p>

                           
                                <RecentCampaigns
                                    scope="email"
                                    refreshKey={campaignsKey}
                                    onViewAll={() => setTab("Campaigns")}
                                    onCreate={() => setDialog({ open: true, id: null })}
                                />
                               
                      
                             <section className="rounded-xl border border-slate-200 bg-white p-5 max-w-[500px] ">
                                    <h2 className="text-base font-semibold">
                                        Email Performance <span className="font-normal text-slate-600">(Last 30 days)</span>
                                    </h2>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
                                        <Donut segments={view.segments} total={view.triggered} />
                                        <ul className="space-y-2 text-sm">
                                            {[...view.segments, ...view.extras].map((p) => (
                                                <li key={p.label} className="flex items-center gap-3">
                                                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                                                    <span className="w-20">{p.label}</span>
                                                    <span className="font-medium">{pct(p.value, view.triggered)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                        </>
                    )}

                    {tab === "Campaigns" && (
                        <CampaignsTab
                            scope="email"
                            refreshKey={campaignsKey}
                            onCreate={() => setDialog({ open: true, id: null })}
                            onEdit={(id) => setDialog({ open: true, id })}
                        />
                    )}

                    {(tab === "Templates" || tab === "Automations") && (
                        <section className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-600">
                            {tab} will appear here.
                        </section>
                    )}

                    {/* Settings = connection details */}
                    {tab === "Settings" && (
                        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
                                <h2 className="text-base font-semibold">Mailbox connection</h2>
                                <div className="flex gap-2">
                                    <button type="button" className={btnSecondary} onClick={verify} disabled={!!busy}>
                                        {busy === "verify" && <Spinner />}
                                        {busy === "verify" ? "Checking…" : "Check connection"}
                                    </button>
                                    <button type="button" className={btnSecondary} onClick={sendTest} disabled={!!busy}>
                                        {busy === "sendtest" && <Spinner />}
                                        {busy === "sendtest" ? "Sending…" : "Send test email"}
                                    </button>
                                    <button type="button" className={btnSecondary} onClick={openForm} disabled={!!busy}>
                                        Change mailbox
                                    </button>
                                </div>
                            </div>

                            <div className="border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-6">
                                <p className="mb-2 text-sm text-slate-500">Customers will see</p>
                                <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm">
                                    <div className="flex flex-wrap gap-x-3">
                                        <span className="w-12 text-slate-400">From</span>
                                        <span className="font-medium">{connection.fromName}</span>
                                        <span className="text-slate-600">&lt;{connection.email}&gt;</span>
                                    </div>
                                </div>
                            </div>

                            <dl className="divide-y divide-slate-100 px-5 sm:px-6">
                                <Row label="Mailbox" value={connection.email} />
                                <Row label="Provider" value={connection.providerLabel} />
                                <Row
                                    label="Outgoing server"
                                    value={
                                        connection.smtp
                                            ? `${connection.smtp.host}:${connection.smtp.port} (${connection.smtp.secure ? "SSL/TLS" : "STARTTLS"})`
                                            : "—"
                                    }
                                />
                                <Row
                                    label="Sent folder copy"
                                    value={
                                        connection.saveToSent ? (
                                            <>
                                                Saved to <span className="font-medium">{connection.sentFolder}</span>
                                            </>
                                        ) : (
                                            <span className="text-slate-600">Not saved by us (your provider may save it itself)</span>
                                        )
                                    }
                                />
                                <Row label="Last verified" value={formatDate(connection.lastVerifiedAt)} />
                            </dl>

                            <div className="mt-2 border-t border-slate-200 px-5 py-4 sm:px-6">
                                <button
                                    type="button"
                                    className={cx(btnBase, "border border-red-200 text-red-600 hover:bg-red-50", focusRing)}
                                    onClick={openDisconnect}
                                    disabled={!!busy}
                                >
                                    Disconnect this mailbox
                                </button>
                            </div>
                        </section>
                    )}
                </div>
            )}

            {/* ───── Connect / change mailbox form ───── */}
            {showForm && (
                <form onSubmit={onSubmit} className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white" noValidate>
                    <div className="space-y-5 px-5 py-6 sm:px-6">
                        <div className="flex items-baseline justify-between gap-3">
                            <h2 className="text-lg font-semibold">{connected ? "Change mailbox" : "Connect your mailbox"}</h2>
                            {!connected && <span className="text-sm text-slate-500">Until then, emails use the default mailbox</span>}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <Field id="ec-email" label="Email address">
                                <input
                                    id="ec-email"
                                    type="email"
                                    autoComplete="email"
                                    inputMode="email"
                                    className={inputCls}
                                    placeholder="you@yourcompany.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!!busy}
                                    required
                                />
                            </Field>
                            <Field id="ec-name" label="Sender name" hint="Shown to customers. Defaults to your account name.">
                                <input
                                    id="ec-name"
                                    type="text"
                                    className={inputCls}
                                    placeholder="Priya from Acme"
                                    value={fromName}
                                    onChange={(e) => setFromName(e.target.value)}
                                    disabled={!!busy}
                                    maxLength={100}
                                />
                            </Field>
                        </div>

                        <Field id="ec-password" label="Mailbox password or app password">
                            <div className="relative">
                                <input
                                    id="ec-password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    className={cx(inputCls, "pr-11")}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={!!busy}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <EyeIcon off={showPassword} />
                                </button>
                            </div>
                            <p className="mt-1.5 text-xs text-slate-500">Stored encrypted. It is never shown again after you save.</p>
                        </Field>

                        {tip && (
                            <Banner tone={tip.tone}>
                                {tip.text}{" "}
                                {tip.href && (
                                    <a href={tip.href} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                                        {tip.linkText}
                                    </a>
                                )}
                            </Banner>
                        )}

                        <div>
                            <button
                                type="button"
                                onClick={() => setShowAdvanced((s) => !s)}
                                aria-expanded={showAdvanced}
                                className="text-sm cursor-pointer font-medium text-[var(--color-primary-dark)] hover:underline focus-visible:outline-none focus-visible:underline"
                            >
                                {showAdvanced ? "Hide server settings" : "Enter server settings manually"}
                            </button>

                            {showAdvanced && (
                                <div className="mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-sm text-slate-600">
                                        Only needed if automatic detection can&apos;t find your server. Ask your email host for these.
                                    </p>
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div className="sm:col-span-2">
                                            <Field id="ec-smtp-host" label="Outgoing (SMTP) server">
                                                <input id="ec-smtp-host" className={inputCls} placeholder="smtp.yourhost.com" value={adv.smtpHost} onChange={(e) => setAdv({ ...adv, smtpHost: e.target.value })} disabled={!!busy} />
                                            </Field>
                                        </div>
                                        <Field id="ec-smtp-port" label="Port" hint="465 = SSL, 587 = STARTTLS">
                                            <input id="ec-smtp-port" type="number" min={1} max={65535} className={inputCls} value={adv.smtpPort} onChange={(e) => setAdv({ ...adv, smtpPort: e.target.value })} disabled={!!busy} />
                                        </Field>
                                    </div>
                                    <Field id="ec-smtp-user" label="SMTP username" hint="Leave empty to use your email address.">
                                        <input id="ec-smtp-user" className={inputCls} value={adv.smtpUser} onChange={(e) => setAdv({ ...adv, smtpUser: e.target.value })} disabled={!!busy} />
                                    </Field>
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div className="sm:col-span-2">
                                            <Field id="ec-imap-host" label="Incoming (IMAP) server" hint="Optional. Used to save copies in Sent.">
                                                <input id="ec-imap-host" className={inputCls} placeholder="imap.yourhost.com" value={adv.imapHost} onChange={(e) => setAdv({ ...adv, imapHost: e.target.value })} disabled={!!busy} />
                                            </Field>
                                        </div>
                                        <Field id="ec-imap-port" label="Port">
                                            <input id="ec-imap-port" type="number" min={1} max={65535} className={inputCls} value={adv.imapPort} onChange={(e) => setAdv({ ...adv, imapPort: e.target.value })} disabled={!!busy} />
                                        </Field>
                                    </div>
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="space-y-3">
                                <Banner tone="error" title={(error.code && ERROR_TITLES[error.code]) || "Couldn't connect"}>
                                    <p>{error.message}</p>
                                    {error.hint && <p className="mt-2">{error.hint}</p>}
                                    {error.needsAdvanced && !showAdvanced && <p className="mt-2">Try entering the server settings manually.</p>}
                                    {error.needsAdvanced && showAdvanced && (
                                        <p className="mt-2">We couldn&apos;t find your server automatically. Fill in the server settings above and try again.</p>
                                    )}
                                </Banner>
                                {error.tried && error.tried.length > 0 && (
                                    <details className="rounded-lg border border-slate-200 text-sm">
                                        <summary className="cursor-pointer px-4 py-2.5 text-slate-700">What we tried ({error.tried.length})</summary>
                                        <ul className="divide-y divide-slate-100 border-t border-slate-200">
                                            {error.tried.map((t, i) => (
                                                <li key={`${t.host}-${t.port}-${i}`} className="flex flex-wrap justify-between gap-2 px-4 py-2">
                                                    <span className="text-slate-800">
                                                        {t.host}:{t.port}
                                                    </span>
                                                    <span className="text-slate-500">{ATTEMPT_LABELS[t.result] ?? t.result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                )}
                            </div>
                        )}

                        {detected && (
                            <div className="space-y-3">
                                <Banner tone="success" title="Login works">
                                    We found <span className="font-medium">{detected.providerLabel}</span> at{" "}
                                    <span className="font-medium">
                                        {detected.smtp.host}:{detected.smtp.port}
                                    </span>
                                    .{" "}
                                    {detected.saveToSent
                                        ? `Sent copies will be saved to “${detected.sentFolder}”.`
                                        : "Nothing is saved yet. Select Connect to finish."}
                                </Banner>
                                {warnings.map((w) => (
                                    <Banner key={w} tone="warn">
                                        {w}
                                    </Banner>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-3 rounded-b-xl border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                        <button type="button" className={cx(btnSecondary, "mr-auto")} onClick={closeForm} disabled={!!busy}>
                            Cancel
                        </button>
                        <button type="button" className={btnSecondary} onClick={() => run("test")} disabled={!canSubmit}>
                            {busy === "test" && <Spinner />}
                            {busy === "test" ? "Checking…" : "Check login"}
                        </button>
                        <button type="submit" className={btnPrimary} disabled={!canSubmit}>
                            {busy === "connect" && <Spinner />}
                            {busy === "connect" ? "Connecting…" : connected ? "Save new mailbox" : "Connect mailbox"}
                        </button>
                    </div>
                </form>
            )}

            {confirmDisconnect && connection && (
                <ConfirmDialog
                    title="Disconnect this mailbox?"
                    confirmLabel="Disconnect"
                    cancelLabel="Keep connected"
                    busy={busy === "disconnect"}
                    error={dialogError}
                    onConfirm={disconnect}
                    onCancel={closeDisconnect}
                >
                    <p>
                        <span className="font-medium text-slate-900">{connection.email}</span> will stop sending your emails.
                    </p>
                    <p>
                        Emails to customers will go out from the default Aiworksforce mailbox again. Your saved password is
                        deleted, so you&apos;ll need to enter it again to reconnect.
                    </p>
                </ConfirmDialog>
            )}

            <CampaignDialog
                open={dialog.open}
                scope="email"              // "whatsapp" inside BaileysWorkspace / MetaWorkspace campaigns tab
                campaignId={dialog.id}     // set for edit
                onClose={() => setDialog({ open: false, id: null })}
                onSaved={(campaign, { removedCustomers, mode }) => {
                    setCampaignsKey((k) => k + 1);
                    setTab("Campaigns");
                    setNotice({
                        tone: "success",
                        text:
                            `Campaign “${campaign.name}” ${mode}.` +
                            (removedCustomers > 0 ? ` ${removedCustomers} customer(s) weren't available to you and were left out.` : ""),
                    });
                }}
            />
        </div>
    );
}