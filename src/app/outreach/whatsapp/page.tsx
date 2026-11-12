"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getSocket } from "@/socket/socket";
import { API_ROUTES } from "@/constants/ApiRoute";
import MasterProtectedRoute from "@/app/component/MasterProtectedRoutes";
import BaileysWorkspace, { type BaileysAccount } from "@/app/component/whatsapp/baileys/BaileysWorkspace";
import MetaWorkspace, { type MetaAccountDetails } from "@/app/component/whatsapp/meta/MetaWorkspace"

/* ────────────────────────────────────────────────────────────────────
 * Types
 * ──────────────────────────────────────────────────────────────────── */
declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}

type Channel = "baileys" | "meta";

type QRMeta = {
    generatedAt: number;
    refreshInterval: number;
};

type ConnectionStatus = "loading" | "scanning" | "pairing" | "connected";
type ConnectionMode = "qr" | "pairing";

type Notice = { type: "success" | "error"; text: string };

/* ────────────────────────────────────────────────────────────────────
 * Constants
 * ──────────────────────────────────────────────────────────────────── */
const RING_RADIUS = 54;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const DEFAULT_REFRESH_MS = 20_000;
const PAIRING_CODE_TTL_MS = 60_000; // WhatsApp pairing codes expire ~60s

const cardCls =
    "rounded-2xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)]";

/* ────────────────────────────────────────────────────────────────────
 * Icons
 * ──────────────────────────────────────────────────────────────────── */
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

const MetaIcon = ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d="M12 12c-1.8-2.6-3.6-4-5.5-4C4 8 2.5 9.8 2.5 12s1.5 4 4 4c1.9 0 3.7-1.4 5.5-4Zm0 0c1.8 2.6 3.6 4 5.5 4 2.5 0 4-1.8 4-4s-1.5-4-4-4c-1.9 0-3.7 1.4-5.5 4Z" />
    </svg>
);

const QrIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4M20 17v4" />
    </StrokeIcon>
);

const KeyIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.5 12.5 20 3M17 6l3 3M14 9l2 2" />
    </StrokeIcon>
);

const LockIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </StrokeIcon>
);

const CheckIcon = ({ className = "" }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

const MoreIcon = ({ className = "" }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <circle cx="12" cy="5" r="1.6" />
        <circle cx="12" cy="12" r="1.6" />
        <circle cx="12" cy="19" r="1.6" />
    </svg>
);

const PhoneIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </StrokeIcon>
);

const LinkIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </StrokeIcon>
);

const SlidersIcon = ({ className = "" }: IconProps) => (
    <StrokeIcon className={className}>
        <path d="M4 6h8M18 6h2M4 12h2M12 12h8M4 18h10M18 18h2" />
        <circle cx="15" cy="6" r="2.2" />
        <circle cx="9" cy="12" r="2.2" />
        <circle cx="16" cy="18" r="2.2" />
    </StrokeIcon>
);

/* ────────────────────────────────────────────────────────────────────
 * Hook: Baileys (QR / pairing code) connection
 * ──────────────────────────────────────────────────────────────────── */
function useBaileysConnection() {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [qrMeta, setQrMeta] = useState<QRMeta | null>(null);
    const [status, setStatus] = useState<ConnectionStatus>("loading");
    const [isChecked, setIsChecked] = useState(false);
    const [account, setAccount] = useState<BaileysAccount | null>(null);
    const [isDisconnecting, setIsDisconnecting] = useState(false);

    const [secondsLeft, setSecondsLeft] = useState(0);
    const [progress, setProgress] = useState(1);

    const [mode, setMode] = useState<ConnectionMode>("qr");
    const [phoneInput, setPhoneInput] = useState("");
    const [pairingCode, setPairingCode] = useState<string | null>(null);
    const [pairingGeneratedAt, setPairingGeneratedAt] = useState<number | null>(null);
    const [pairingError, setPairingError] = useState<string | null>(null);
    const [isRequestingCode, setIsRequestingCode] = useState(false);
    const [pairingSecondsLeft, setPairingSecondsLeft] = useState(0);

    // QR countdown ring
    useEffect(() => {
        if (!qrMeta) return;

        const tick = () => {
            const remaining = Math.max(0, qrMeta.refreshInterval - (Date.now() - qrMeta.generatedAt));
            setSecondsLeft(Math.ceil(remaining / 1000));
            setProgress(remaining / qrMeta.refreshInterval);
        };

        tick();
        const id = setInterval(tick, 250);
        return () => clearInterval(id);
    }, [qrMeta]);

    // Pairing-code countdown (codes expire ~60s)
    useEffect(() => {
        if (!pairingGeneratedAt) return;

        const tick = () => {
            const remaining = Math.max(0, PAIRING_CODE_TTL_MS - (Date.now() - pairingGeneratedAt));
            setPairingSecondsLeft(Math.ceil(remaining / 1000));
            if (remaining <= 0) {
                setPairingCode(null);
                setPairingGeneratedAt(null);
                setPairingError("That code expired. Request a new one.");
            }
        };

        tick();
        const id = setInterval(tick, 250);
        return () => clearInterval(id);
    }, [pairingGeneratedAt]);

    // Initial status + socket subscriptions
    useEffect(() => {
        fetch(API_ROUTES.MASTERS.WHATSAPP.WHATSAPP_CONNECTION_STATUS)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "connected") {
                    setStatus("connected");
                    setAccount(data.user);
                } else if (data.status === "scanning") {
                    setStatus("scanning");
                    setMode("qr");
                    setQrCode(data.qrString);
                    setQrMeta({
                        generatedAt: data.generatedAt ?? Date.now(),
                        refreshInterval: data.refreshInterval ?? DEFAULT_REFRESH_MS,
                    });
                } else if (data.status === "pairing") {
                    // resume an in-flight pairing code after a page refresh
                    setStatus("pairing");
                    setMode("pairing");
                    setPairingCode(data.pairingCode);
                    setPairingGeneratedAt(data.generatedAt ?? Date.now());
                    if (data.phoneNumber) setPhoneInput(data.phoneNumber);
                }
            })
            .catch((err) => console.error("Failed to fetch initial status", err))
            .finally(() => setIsChecked(true));

        const socket = getSocket();
        if (!socket) return;

        socket.emit("whatsapp:start_viewing");

        const handleQR = (data: { qrString: string; generatedAt?: number; refreshInterval?: number }) => {
            setQrCode(data.qrString);
            setQrMeta({
                generatedAt: data.generatedAt ?? Date.now(),
                refreshInterval: data.refreshInterval ?? DEFAULT_REFRESH_MS,
            });
            setIsDisconnecting(false);
            setStatus((prev) => (prev === "connected" ? prev : "scanning"));
        };

        const handlePairingCode = (data: { code: string; generatedAt?: number }) => {
            setStatus((prev) => (prev === "connected" ? prev : "pairing"));
            setMode("pairing");
            setPairingCode(data.code);
            setPairingGeneratedAt(data.generatedAt ?? Date.now());
            setPairingError(null);
            setIsRequestingCode(false);
        };

        const handlePairingError = (data: { message: string }) => {
            setPairingError(data.message || "Failed to generate pairing code. Try again.");
            setIsRequestingCode(false);
        };

        const handleStatus = (data: { status: string; user?: BaileysAccount }) => {
            if (data.status === "connected") {
                setStatus("connected");
                setQrCode(null);
                setQrMeta(null);
                setPairingCode(null);
                setPairingGeneratedAt(null);
                setIsDisconnecting(false);
                if (data.user) setAccount(data.user);
            } else if (data.status === "disconnected") {
                setStatus("loading");
                setAccount(null);
                setQrMeta(null);
                setPairingCode(null);
                setPairingGeneratedAt(null);
            }
        };

        socket.on("whatsapp:qr", handleQR);
        socket.on("whatsapp:status", handleStatus);
        socket.on("whatsapp:pairing_code", handlePairingCode);
        socket.on("whatsapp:pairing_error", handlePairingError);

        return () => {
            socket.off("whatsapp:qr", handleQR);
            socket.off("whatsapp:status", handleStatus);
            socket.off("whatsapp:pairing_code", handlePairingCode);
            socket.off("whatsapp:pairing_error", handlePairingError);
            socket.emit("whatsapp:stop_viewing");
        };
    }, []);

    const disconnect = async () => {
        setIsDisconnecting(true);
        try {
            await fetch(API_ROUTES.MASTERS.WHATSAPP.WHATSAPP_CONNECTION_LOGOUT, { method: "POST" });
        } catch (error) {
            console.error("Failed to disconnect", error);
            setIsDisconnecting(false);
        }
    };

    const requestPairingCode = async () => {
        const digitsOnly = phoneInput.replace(/[^0-9]/g, "");
        if (digitsOnly.length < 8) {
            setPairingError("Enter your full number with country code, e.g. 91XXXXXXXXXX.");
            return;
        }

        setPairingError(null);
        setPairingCode(null);
        setIsRequestingCode(true);

        try {
            const res = await fetch(API_ROUTES.MASTERS.WHATSAPP.WHATSAPP_CONNECTION_PAIRING_CODE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phoneNumber: digitsOnly }),
            });
            const data = await res.json();
            if (!data.success) {
                setPairingError(data.error || "Something went wrong. Try again.");
                setIsRequestingCode(false);
            }
            // success: the code arrives through the "whatsapp:pairing_code" socket event
        } catch (error) {
            console.error("Failed to request pairing code", error);
            setPairingError("Couldn't reach the server. Try again.");
            setIsRequestingCode(false);
        }
    };

    return {
        status,
        isChecked,
        isConnected: status === "connected",
        account,
        qrCode,
        secondsLeft,
        progress,
        isDisconnecting,
        mode,
        setMode,
        phoneInput,
        setPhoneInput,
        pairingCode,
        pairingSecondsLeft,
        pairingError,
        setPairingError,
        isRequestingCode,
        disconnect,
        requestPairingCode,
    };
}
type BaileysConn = ReturnType<typeof useBaileysConnection>;

/* ────────────────────────────────────────────────────────────────────
 * Hook: Meta official WhatsApp (Embedded Signup)
 * ──────────────────────────────────────────────────────────────────── */
function useMetaConnection() {
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisconnecting, setIsDisconnecting] = useState(false);
    const [notice, setNotice] = useState<Notice | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isChecking, setIsChecking] = useState(true);
    const [accountDetails, setAccountDetails] = useState<MetaAccountDetails | null>(null);

    const signupData = useRef<{ waba_id: string | null; phone_number_id: string | null }>({
        waba_id: null,
        phone_number_id: null,
    });

    const refreshStatus = useCallback(async () => {
        const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.CHECK_META_WHATSAPP_STATUS, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        const data = await res.json();
        if (data.connected) {
            setIsConnected(true);
            setAccountDetails({
                ...data.accountDetails,
                adminId: data.config.adminId,
            });
        }
    }, []);

    // Initial connection check
    useEffect(() => {
        refreshStatus()
            .catch((error) => console.error("Failed to check connection status:", error))
            .finally(() => setIsChecking(false));
    }, [refreshStatus]);

    // Facebook SDK + embedded-signup listener
    useEffect(() => {
        const initFb = () => {
            window.FB.init({
                appId: process.env.NEXT_PUBLIC_META_APP_ID || "",
                cookie: true,
                xfbml: true,
                version: "v21.0",
            });
            setIsSdkLoaded(true);
        };

        window.fbAsyncInit = initFb;

        // SDK already on the page (e.g. navigating back to this screen)
        if (window.FB) {
            initFb();
        } else {
            (function (d, s, id) {
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                const js = d.createElement(s) as HTMLScriptElement;
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                if (fjs && fjs.parentNode) {
                    fjs.parentNode.insertBefore(js, fjs);
                }
            })(document, "script", "facebook-jssdk");
        }

        const sessionInfoListener = (event: MessageEvent) => {
            try {
                const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
                if (data?.type === "WA_EMBEDDED_SIGNUP") {
                    if (data.event.includes("FINISH")) {
                        signupData.current.phone_number_id = data.data?.phone_number_id || null;
                        signupData.current.waba_id = data.data?.waba_id || null;
                    }
                }
            } catch {
                // ignore parsing errors
            }
        };

        window.addEventListener("message", sessionInfoListener);
        return () => window.removeEventListener("message", sessionInfoListener);
    }, []);

    // Auto-dismiss success notices
    useEffect(() => {
        if (notice?.type !== "success") return;
        const id = setTimeout(() => setNotice(null), 5000);
        return () => clearTimeout(id);
    }, [notice]);

    const connect = () => {
        if (!window.FB) {
            setNotice({ type: "error", text: "Facebook SDK is not loaded yet." });
            return;
        }

        setIsLoading(true);
        setNotice(null);

        window.FB.login(
            function (response: any) {
                setTimeout(() => {
                    (async () => {
                        if (response.authResponse?.code) {
                            const code = response.authResponse.code;
                            const { waba_id, phone_number_id } = signupData.current;

                            if (!waba_id) {
                                setIsLoading(false);
                                setNotice({ type: "error", text: "Setup incomplete. Meta did not return a WABA ID." });
                                return;
                            }

                            try {
                                const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.CONNECT_META_WHATSAPP, {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    credentials: "include",
                                    body: JSON.stringify({ code, waba_id, phone_number_id }),
                                });

                                const data = await res.json();
                                if (!res.ok) throw new Error(data.message || "Failed to connect to backend.");

                                setNotice({ type: "success", text: data.message || "WhatsApp Connected!" });
                                await refreshStatus();
                            } catch (error: any) {
                                setNotice({ type: "error", text: error.message || "Failed to connect to backend." });
                            }
                        } else {
                            setNotice({ type: "error", text: "Facebook login was cancelled or failed." });
                        }
                        setIsLoading(false);
                    })();
                }, 1000);
            },
            {
                config_id: process.env.NEXT_PUBLIC_META_CONFIG_ID,
                response_type: "code",
                override_default_response_type: true,
                extras: {
                    setup: {},
                    featureType: "whatsapp_business_app_onboarding",
                },
            }
        );
    };

    const disconnect = async () => {
        if (!confirm("Are you sure you want to disconnect WhatsApp? This will stop all incoming messages and broadcasts.")) return;

        setIsDisconnecting(true);
        try {
            const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.DISCONNECT_META_WHATSAPP, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });

            if (!res.ok) throw new Error("Failed to disconnect");

            setIsConnected(false);
            setAccountDetails(null);
            setNotice({ type: "success", text: "WhatsApp disconnected successfully." });
        } catch {
            setNotice({ type: "error", text: "Failed to disconnect. Please try again." });
        } finally {
            setIsDisconnecting(false);
        }
    };

    return {
        isSdkLoaded,
        isLoading,
        isDisconnecting,
        isConnected,
        isChecking,
        accountDetails,
        notice,
        dismissNotice: () => setNotice(null),
        connect,
        disconnect,
    };
}
type MetaConn = ReturnType<typeof useMetaConnection>;

/* ────────────────────────────────────────────────────────────────────
 * Small shared UI pieces
 * ──────────────────────────────────────────────────────────────────── */
const StepList = ({ steps }: { steps: string[] }) => (
    <ol className="mt-6 w-full space-y-3">
        {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[10px] font-bold text-[var(--color-primary)]">
                    {i + 1}
                </span>
                <p className="text-xs text-gray-600 dark:text-[var(--color-txtlight)]/70 leading-snug pt-0.5">{step}</p>
            </li>
        ))}
    </ol>
);

const EncryptionNote = () => (
    <div className="mt-5 flex items-start gap-2 rounded-xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-primary-darker)]/20 px-3 py-2.5">
        <LockIcon className="h-3.5 w-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
        <p className="text-[11px] leading-snug text-gray-500 dark:text-[var(--color-txtlight)]/70">
            Your chats stay end-to-end encrypted — we only relay them through your own WhatsApp number.
        </p>
    </div>
);

const LivePill = ({ label }: { label: string }) => (
    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#DCF8C6]/60 dark:bg-[#128C7E]/20 rounded-full">
        <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        <p className="text-[10px] font-bold tracking-wide text-[#075E54] dark:text-[#25D366] uppercase">{label}</p>
    </div>
);

/* ────────────────────────────────────────────────────────────────────
 * Channel switcher (Baileys / Meta) — hidden until a platform is picked
 * ──────────────────────────────────────────────────────────────────── */
const ChannelTabs = ({
    active,
    onChange,
    connected,
}: {
    active: Channel;
    onChange: (c: Channel) => void;
    connected: Record<Channel, boolean>;
}) => {
    const items: { id: Channel; label: string; icon: ReactNode }[] = [
        { id: "baileys", label: "Baileys WhatsApp", icon: <WhatsAppIcon className="h-4 w-4" /> },
        { id: "meta", label: "Meta WhatsApp", icon: <MetaIcon className="h-4 w-4" /> },
    ];

    return (
        <div className="flex flex-wrap items-center gap-3">
            {items.map((item) => {
                const isActive = active === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onChange(item.id)}
                        className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
                            isActive
                                ? "bg-[#128C7E] text-white shadow-md shadow-[#128C7E]/25"
                                : "bg-[var(--color-primary-lighter)]/70 text-gray-700 hover:bg-[var(--color-primary-lighter)] dark:bg-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)]/80"
                        }`}
                    >
                        {item.icon}
                        {item.label}
                        {connected[item.id] && !isActive && <span className="h-2 w-2 rounded-full bg-[#25D366]" />}
                    </button>
                );
            })}
        </div>
    );
};

/* ────────────────────────────────────────────────────────────────────
 * Hero (shown only while NO platform is connected and none is selected)
 * ──────────────────────────────────────────────────────────────────── */
const HeroSection = ({
    onConnectBaileys,
    onConnectMeta,
    metaBusy,
}: {
    onConnectBaileys: () => void;
    onConnectMeta: () => void;
    metaBusy: boolean;
}) => (
    <div className={`${cardCls} overflow-hidden`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10">
            {/* Left: copy + CTAs */}
            <div>
                <p className="text-sm font-bold text-[#128C7E]">WhatsApp Channel</p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-[var(--color-txtlight)]">
                    Connect <span className="text-[#16A34A]">WhatsApp</span> to Start Outreach
                </h1>
                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-[var(--color-txtlight)]/70 max-w-md leading-relaxed">
                    Choose your preferred WhatsApp connection to send campaigns, automate follow-ups, and manage customer conversations directly from your CRM.
                </p>

                <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-sm text-gray-800 dark:text-[var(--color-txtlight)]">
                        <QrIcon className="h-5 w-5 shrink-0 text-gray-700 dark:text-[var(--color-txtlight)]" />
                        <span>
                            <b>Baileys WhatsApp</b> – Connect using QR code (Self-hosted)
                        </span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-800 dark:text-[var(--color-txtlight)]">
                        <MetaIcon className="h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                        <span>
                            <b>Meta WhatsApp</b> – Official WhatsApp Cloud API by Meta
                        </span>
                    </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                    <button
                        onClick={onConnectBaileys}
                        className="flex items-center gap-2 rounded-xl bg-[#128C7E] hover:bg-[#0F7A6E] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all cursor-pointer"
                    >
                        <WhatsAppIcon className="h-5 w-5" />
                        Connect Baileys
                    </button>
                    <button
                        onClick={onConnectMeta}
                        disabled={metaBusy}
                        className="flex items-center gap-2 rounded-xl border-2 border-[var(--color-primary)] bg-white dark:bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)] transition-all disabled:opacity-60 cursor-pointer"
                    >
                        {metaBusy ? <SpinnerIcon className="h-4 w-4 animate-spin" /> : <MetaIcon className="h-5 w-5" />}
                        Connect Meta
                    </button>
                </div>
            </div>

            {/* Right: phone illustration + steps card */}
            <div className="relative flex flex-col lg:block items-center min-h-[380px]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 lg:left-4 top-8 h-[300px] w-[300px] rounded-full bg-[#DCF8C6]/60 dark:bg-[#128C7E]/10 blur-2xl" />
                </div>

                <div className="relative mx-auto lg:mx-0 lg:ml-10 h-[360px] w-[210px] rounded-[2.2rem] border-[7px] border-[#0B3B36] bg-white dark:bg-[var(--color-bgdark)] shadow-2xl flex flex-col items-center justify-center">
                    <span className="absolute top-2 h-3 w-14 rounded-full bg-[#0B3B36]" />
                    <div className="h-16 w-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                        <WhatsAppIcon className="h-10 w-10 text-white" />
                    </div>
                    <p className="mt-3 text-center text-sm font-bold leading-tight text-gray-900 dark:text-[var(--color-txtlight)]">
                        WhatsApp
                        <br />
                        Business
                    </p>
                    <LinkIcon className="mt-5 h-9 w-9 text-[#25D366]" />

                    <span className="absolute -left-14 top-12 hidden sm:flex h-10 w-14 items-center justify-center rounded-xl bg-[#DCF8C6] shadow-sm">
                        <span className="space-y-1">
                            <span className="block h-0.5 w-7 rounded bg-[#128C7E]/60" />
                            <span className="block h-0.5 w-5 rounded bg-[#128C7E]/60" />
                        </span>
                    </span>
                    <span className="absolute -right-6 bottom-12 flex h-9 w-9 items-center justify-center rounded-full bg-[#DCF8C6] text-[#128C7E] shadow-sm">
                        <SendIcon className="h-4 w-4" />
                    </span>
                </div>

                <div className="relative mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[270px] rounded-2xl bg-white/90 dark:bg-[var(--color-childbgdark)] border border-[#CFF3DD] dark:border-transparent p-5 shadow-lg backdrop-blur">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">Get Started in 2 Steps</h4>
                    <ul className="mt-3 space-y-2.5">
                        {["Choose Baileys or Meta", "Connect and start campaigns"].map((s, i) => (
                            <li key={s} className="flex items-center gap-3 rounded-lg bg-[#F3FCF7] dark:bg-[var(--color-bgdark)] px-3 py-2">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-[11px] font-bold text-white">{i + 1}</span>
                                <span className="text-xs text-gray-700 dark:text-[var(--color-txtlight)]">{s}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

/* ────────────────────────────────────────────────────────────────────
 * Status cards (shown once at least one channel is connected)
 * ──────────────────────────────────────────────────────────────────── */
type StatusField = { label: string; value: string; live?: boolean; icon?: ReactNode };

const CardMenu = ({ onDisconnect, busy }: { onDisconnect: () => void; busy: boolean }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative shrink-0">
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Channel options"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
            >
                <MoreIcon className="h-4 w-4" />
            </button>
            {open && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 z-20 mt-1 w-44 overflow-hidden rounded-xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] shadow-lg">
                        <button
                            onClick={() => {
                                setOpen(false);
                                onDisconnect();
                            }}
                            disabled={busy}
                            className="flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/10 disabled:opacity-50 cursor-pointer"
                        >
                            {busy ? <SpinnerIcon className="h-3.5 w-3.5 animate-spin" /> : <PowerIcon className="h-3.5 w-3.5" />}
                            {busy ? "Disconnecting…" : "Disconnect"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

const ChannelStatusCard = ({
    channel,
    connected,
    title,
    subtitle,
    fields,
    busy,
    onSelect,
    onDisconnect,
}: {
    channel: Channel;
    connected: boolean;
    title: string;
    subtitle: string;
    fields: StatusField[];
    busy: boolean;
    onSelect: () => void;
    onDisconnect: () => void;
}) => (
    <div
        className={`flex items-center gap-4 rounded-2xl border p-4 ${
            connected
                ? "border-[#CFF3DD] bg-[#F3FCF7] dark:bg-[var(--color-childbgdark)] dark:border-[#128C7E]/30"
                : "border-dashed border-[var(--color-primary-light)] bg-white dark:bg-[var(--color-bgdark)] dark:border-[var(--color-childbgdark)]"
        }`}
    >
        <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                channel === "baileys" ? "bg-[#25D366] text-white" : "bg-white text-[var(--color-primary)] border border-[var(--color-primary-light)]"
            }`}
        >
            {channel === "baileys" ? <WhatsAppIcon className="h-6 w-6" /> : <MetaIcon className="h-6 w-6" />}
        </div>

        <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">{title}</p>
                {connected ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#16A34A] px-2 py-0.5 text-[10px] font-semibold text-white">
                        <CheckIcon className="h-2.5 w-2.5" /> Connected
                    </span>
                ) : (
                    <span className="inline-flex rounded-full bg-gray-100 dark:bg-[var(--color-bgdark)] px-2 py-0.5 text-[10px] font-semibold text-gray-500">
                        Not connected
                    </span>
                )}
            </div>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60 truncate">{subtitle}</p>
        </div>

        {connected ? (
            <>
                <div className="hidden sm:flex items-center gap-5">
                    {fields.map((f) => (
                        <div key={f.label} className="text-left">
                            <p className="flex items-center gap-1 text-[10px] font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60">
                                {f.icon}
                                {f.label}
                            </p>
                            <p className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-[var(--color-txtlight)]">
                                {f.live && <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />}
                                {f.value}
                            </p>
                        </div>
                    ))}
                </div>
                <CardMenu onDisconnect={onDisconnect} busy={busy} />
            </>
        ) : (
            <button
                onClick={onSelect}
                className="shrink-0 rounded-lg border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)] cursor-pointer"
            >
                Connect
            </button>
        )}
    </div>
);

/* ────────────────────────────────────────────────────────────────────
 * Connection panels (shown when the selected channel isn't connected)
 * ──────────────────────────────────────────────────────────────────── */
const BaileysConnectPanel = ({ b }: { b: BaileysConn }) => {
    const formattedPairingCode = b.pairingCode ? (b.pairingCode.match(/.{1,4}/g)?.join("-") ?? b.pairingCode) : null;

    const showQr = b.mode === "qr" && b.status === "scanning" && !!b.qrCode;
    const showSpinner = b.mode === "qr" && !showQr;
    const showPairingForm = b.mode === "pairing" && !b.pairingCode;
    const showPairingCode = b.mode === "pairing" && !!b.pairingCode;

    return (
        <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[1.75rem] border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] shadow-[0_20px_60px_-15px_rgba(0,102,204,0.18)]">
            {/* QR / pairing code toggle */}
            <div className="px-8 pt-6">
                <div className="flex p-1 rounded-xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-childbgdark)]">
                    {(
                        [
                            { id: "qr", label: "Scan QR", icon: <QrIcon className="h-3.5 w-3.5" /> },
                            { id: "pairing", label: "Pairing Code", icon: <KeyIcon className="h-3.5 w-3.5" /> },
                        ] as const
                    ).map((m) => (
                        <button
                            key={m.id}
                            onClick={() => {
                                b.setMode(m.id);
                                b.setPairingError(null);
                            }}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                                b.mode === m.id
                                    ? "bg-white dark:bg-[var(--color-bgdark)] text-[var(--color-primary)] shadow-sm"
                                    : "text-gray-500 dark:text-[var(--color-txtlight)]/60"
                            }`}
                        >
                            {m.icon}
                            {m.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-8 py-8">
                {/* Loading / waiting for QR */}
                {showSpinner && (
                    <div className="flex flex-col items-center justify-center py-6 space-y-5">
                        <div className="relative h-12 w-12">
                            <div className="absolute inset-0 rounded-full border-[3px] border-[var(--color-primary-lighter)]"></div>
                            <div className="absolute inset-0 rounded-full border-[3px] border-[var(--color-primary)] border-t-transparent animate-spin"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold text-gray-800 dark:text-[var(--color-txtlight)]">
                                {b.isDisconnecting
                                    ? "Disconnecting your account…"
                                    : b.status === "loading"
                                      ? "Checking your connection…"
                                      : "Generating QR code…"}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                {b.isDisconnecting ? "Unlinking this device from WhatsApp." : "This usually takes just a few seconds."}
                            </p>
                        </div>
                    </div>
                )}

                {/* Phone number entry */}
                {showPairingForm && (
                    <div className="flex flex-col items-center py-4">
                        <div className="h-14 w-14 rounded-2xl bg-[var(--color-primary-lighter)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                            <KeyIcon className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">Link with a pairing code</p>
                        <p className="text-xs text-gray-400 mt-1 text-center max-w-[280px]">
                            Enter your WhatsApp number with country code — no camera needed.
                        </p>

                        <div className="w-full mt-5 space-y-2">
                            <input
                                type="tel"
                                inputMode="numeric"
                                value={b.phoneInput}
                                onChange={(e) => b.setPhoneInput(e.target.value)}
                                placeholder="e.g. 919876543210"
                                className="w-full px-4 py-3 rounded-xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-childbgdark)] text-sm text-gray-900 dark:text-[var(--color-txtlight)] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                            />
                            {b.pairingError && <p className="text-[11px] text-[var(--color-destructive)] font-medium px-1">{b.pairingError}</p>}
                            <button
                                onClick={b.requestPairingCode}
                                disabled={b.isRequestingCode}
                                className="w-full py-3 px-4 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl text-xs font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {b.isRequestingCode ? (
                                    <>
                                        <SpinnerIcon className="animate-spin h-3.5 w-3.5" />
                                        Generating code…
                                    </>
                                ) : (
                                    <>
                                        <KeyIcon className="h-3.5 w-3.5" />
                                        Send me a pairing code
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {/* Pairing code display */}
                {showPairingCode && (
                    <div className="flex flex-col items-center">
                        <p className="text-xs font-semibold text-gray-500 dark:text-[var(--color-txtlight)]/70 mb-3">Enter this code on your phone</p>

                        <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-primary-darker)]/20 border border-dashed border-[var(--color-primary)]/40">
                            <p className="text-2xl font-bold tracking-[0.2em] text-[var(--color-primary)] font-mono">{formattedPairingCode}</p>
                        </div>

                        <div className="mt-3 text-[11px] font-semibold text-[#128C7E] dark:text-[#25D366]">Expires in {b.pairingSecondsLeft}s</div>

                        <LivePill label="Waiting for pairing" />

                        <StepList
                            steps={[
                                "Open WhatsApp on your phone",
                                "Tap Menu or Settings, then Linked Devices",
                                'Tap "Link with phone number instead" and enter the code above',
                            ]}
                        />
                        <EncryptionNote />
                    </div>
                )}

                {/* QR code */}
                {showQr && b.qrCode && (
                    <div className="flex flex-col items-center">
                        <div className="relative w-[196px] h-[196px]">
                            <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full -rotate-90">
                                <circle cx="60" cy="60" r={RING_RADIUS} fill="none" stroke="#DCF8C6" strokeWidth="6" className="dark:opacity-20" />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={RING_RADIUS}
                                    fill="none"
                                    stroke="#25D366"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeDasharray={RING_CIRCUMFERENCE}
                                    strokeDashoffset={RING_CIRCUMFERENCE * (1 - b.progress)}
                                    style={{ transition: "stroke-dashoffset 0.25s linear" }}
                                />
                            </svg>
                            <div className="absolute inset-[14px] rounded-2xl bg-white flex items-center justify-center shadow-inner">
                                <QRCodeSVG value={b.qrCode} size={150} bgColor={"#ffffff"} fgColor={"#0f172a"} level={"L"} />
                            </div>
                        </div>

                        <div className="mt-3 text-[11px] font-semibold text-[#128C7E] dark:text-[#25D366]">Refreshes in {b.secondsLeft}s</div>

                        <LivePill label="Live QR Active" />

                        <StepList
                            steps={[
                                "Open WhatsApp on your phone",
                                "Tap Menu or Settings, then Linked Devices",
                                "Point your phone at this screen to scan",
                            ]}
                        />
                        <EncryptionNote />
                    </div>
                )}
            </div>

            <p className="flex items-center pl-8 pb-4 gap-1.5 text-[11px] text-gray-400">
                <LockIcon className="h-3 w-3" /> Secured with end-to-end encryption
            </p>
        </div>
    );
};

const MetaConnectPanel = ({ m }: { m: MetaConn }) => (
    <div className="mx-auto w-full max-w-2xl rounded-[1.75rem] border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] p-10 text-center shadow-[0_20px_60px_-15px_rgba(0,102,204,0.18)]">
        <div className="w-20 h-20 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-[var(--color-txtlight)] mb-3">Connect Official WhatsApp</h1>
        <p className="text-gray-500 dark:text-[var(--color-txtlight)]/70 mb-8 text-base">
            Sync incoming messages, send broadcasts, and manage client conversations directly from your CRM workspace.
        </p>

        <button
            onClick={m.connect}
            disabled={!m.isSdkLoaded || m.isLoading}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl shadow-md text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all cursor-pointer"
        >
            {m.isLoading ? (
                <>
                    <SpinnerIcon className="h-5 w-5 animate-spin" />
                    Authenticating with Meta...
                </>
            ) : (
                <>
                    <MetaIcon className="h-6 w-6" />
                    Connect via Meta
                </>
            )}
        </button>

        <p className="mt-6 text-sm text-gray-400">Requires a verified Meta Business Manager account.</p>
    </div>
);

/* ────────────────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────────────────── */
export default function WhatsAppConnectionPage() {
    const baileys = useBaileysConnection();
    const meta = useMetaConnection();

    const [activeChannel, setActiveChannel] = useState<Channel>("baileys");
    // true once the user has picked a platform from the hero card (or a pairing is already in flight)
    const [panelOpen, setPanelOpen] = useState(false);
    // bumped by "Channel Settings" so the active workspace jumps to its Settings tab
    const [settingsSignal, setSettingsSignal] = useState(0);

    const isInitialising = !baileys.isChecked || meta.isChecking;
    const connected: Record<Channel, boolean> = { baileys: baileys.isConnected, meta: meta.isConnected };
    const anyConnected = connected.baileys || connected.meta;

    // Hero card: only while NOTHING is connected and the user hasn't picked a platform yet.
    // The channel tabs + Channel Settings row are hidden for as long as the hero is showing.
    const showHero = !anyConnected && !panelOpen;

    // On first load, if only Meta is connected, land on the Meta tab
    const didAutoSelect = useRef(false);
    useEffect(() => {
        if (isInitialising || didAutoSelect.current) return;
        didAutoSelect.current = true;
        if (!baileys.isConnected && meta.isConnected) setActiveChannel("meta");
    }, [isInitialising, baileys.isConnected, meta.isConnected]);

    // A Baileys pairing already in flight (e.g. after refresh) → skip the hero, show that flow
    useEffect(() => {
        if (!isInitialising && baileys.status === "pairing") {
            setActiveChannel("baileys");
            setPanelOpen(true);
        }
    }, [isInitialising, baileys.status]);

    // When the last connected platform is disconnected, go back to the hero card
    const hadConnection = useRef(false);
    useEffect(() => {
        if (hadConnection.current && !anyConnected) setPanelOpen(false);
        hadConnection.current = anyConnected;
    }, [anyConnected]);

    const selectChannel = (c: Channel) => {
        setActiveChannel(c);
        setPanelOpen(true);
    };

    if (isInitialising) {
        return (
            <MasterProtectedRoute>
                <div className="flex h-[60vh] items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-10 h-10 border-4 border-[#25D366] border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-500 font-medium">Verifying WhatsApp Workspace...</p>
                    </div>
                </div>
            </MasterProtectedRoute>
        );
    }

    return (
        <MasterProtectedRoute>
            <div className="w-full bg-white rounded-md px-2 py-4 sm:px-4 max-w-7xl mx-auto space-y-5">
                {/* Channel tabs + settings shortcut — hidden until a platform is picked */}
                {!showHero && (
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <ChannelTabs active={activeChannel} onChange={selectChannel} connected={connected} />
                        <button
                            onClick={() => setSettingsSignal((n) => n + 1)}
                            disabled={!connected[activeChannel]}
                            className="flex items-center gap-2 rounded-lg border border-[#128C7E]/40 px-4 py-2 text-xs font-semibold text-[#128C7E] hover:bg-[#E7F7EE] dark:hover:bg-[#128C7E]/10 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <SlidersIcon className="h-4 w-4" />
                            Channel Settings
                        </button>
                    </div>
                )}

                {/* Meta feedback (connect / disconnect results) */}
                {meta.notice && (
                    <div
                        className={`flex items-start justify-between gap-3 rounded-xl px-4 py-3 text-sm ${
                            meta.notice.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
                        }`}
                    >
                        <span>{meta.notice.text}</span>
                        <button onClick={meta.dismissNotice} className="text-xs font-semibold opacity-70 hover:opacity-100 cursor-pointer">
                            Dismiss
                        </button>
                    </div>
                )}

                {/* BEFORE CONNECT */}
                {showHero && (
                    <HeroSection
                        onConnectBaileys={() => selectChannel("baileys")}
                        onConnectMeta={() => {
                            selectChannel("meta");
                            meta.connect();
                        }}
                        metaBusy={meta.isLoading}
                    />
                )}

                {/* AFTER A PLATFORM IS PICKED / CONNECTED */}
                {!showHero && (
                    <>
                        {anyConnected && (
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                <ChannelStatusCard
                                    channel="baileys"
                                    connected={baileys.isConnected}
                                    title="Baileys WhatsApp"
                                    subtitle={baileys.isConnected ? "Connected via Baileys (QR Session)" : "Connect using QR code (Self-hosted)"}
                                    fields={[
                                        ...(baileys.account?.phone ? [{ label: "Number", value: `+${baileys.account.phone}` }] : []),
                                        { label: "Session Status", value: "Live", live: true },
                                    ]}
                                    busy={baileys.isDisconnecting}
                                    onSelect={() => selectChannel("baileys")}
                                    onDisconnect={baileys.disconnect}
                                />
                                <ChannelStatusCard
                                    channel="meta"
                                    connected={meta.isConnected}
                                    title="Meta WhatsApp"
                                    subtitle={meta.isConnected ? "Official Meta WhatsApp Cloud API" : "Official WhatsApp Cloud API by Meta"}
                                    fields={[
                                        ...(meta.accountDetails?.phone
                                            ? [{ label: "Business Number", value: meta.accountDetails.phone, icon: <PhoneIcon className="h-3 w-3" /> }]
                                            : []),
                                        { label: "Status", value: "Live", live: true },
                                    ]}
                                    busy={meta.isDisconnecting}
                                    onSelect={() => selectChannel("meta")}
                                    onDisconnect={meta.disconnect}
                                />
                            </div>
                        )}

                        {activeChannel === "baileys" ? (
                            baileys.isConnected ? (
                                <BaileysWorkspace
                                    account={baileys.account}
                                    isDisconnecting={baileys.isDisconnecting}
                                    onDisconnect={baileys.disconnect}
                                    settingsSignal={settingsSignal}
                                />
                            ) : (
                                <BaileysConnectPanel b={baileys} />
                            )
                        ) : meta.isConnected && meta.accountDetails ? (
                            <MetaWorkspace
                                accountDetails={meta.accountDetails}
                                isDisconnecting={meta.isDisconnecting}
                                onDisconnect={meta.disconnect}
                                settingsSignal={settingsSignal}
                            />
                        ) : (
                            <MetaConnectPanel m={meta} />
                        )}
                    </>
                )}
            </div>
        </MasterProtectedRoute>
    );
}