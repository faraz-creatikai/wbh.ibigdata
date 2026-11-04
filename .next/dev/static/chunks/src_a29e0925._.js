(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/masters/mail/mail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMail",
    ()=>addMail,
    "connectEmail",
    ()=>connectEmail,
    "deleteMail",
    ()=>deleteMail,
    "disconnectEmail",
    ()=>disconnectEmail,
    "emailAllContact",
    ()=>emailAllContact,
    "emailAllCustomer",
    ()=>emailAllCustomer,
    "emailCustomerViaAi",
    ()=>emailCustomerViaAi,
    "getEmailConnection",
    ()=>getEmailConnection,
    "getFilteredMail",
    ()=>getFilteredMail,
    "getMail",
    ()=>getMail,
    "getMailById",
    ()=>getMailById,
    "sendTestEmail",
    ()=>sendTestEmail,
    "testEmailConnection",
    ()=>testEmailConnection,
    "updateMail",
    ()=>updateMail,
    "verifyEmailConnection",
    ()=>verifyEmailConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getMail = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        // console.log("mail data ",data)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getMailById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredMail = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.GET_BY_PARAMS(params), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addMail = async (data)=>{
    try {
        const payload = {
            ...data,
            type: 'email'
        };
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateMail = async (id, data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteMail = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const emailAllCustomer = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.MAILALL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const emailAllContact = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.MAILALL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const emailCustomerViaAi = async (data)=>{
    try {
        console.log("emailall customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.SEND_EMAIL_VIA_AI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(" result is zoro", result);
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
/* ---------- Shared request helper ---------- */ async function emailConnectionRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: body !== undefined ? JSON.stringify(body) : undefined,
            credentials: "include"
        });
        let json = null;
        try {
            json = await response.json();
        } catch  {
        /* empty / non-JSON body */ }
        if (response.ok && json?.success !== false) {
            return {
                ok: true,
                data: json
            };
        }
        return {
            ok: false,
            status: response.status,
            error: {
                success: false,
                code: json?.code,
                message: json?.message || json?.connection?.lastError || (response.status === 429 ? "A connection check is already running. Please wait a moment." : `Request failed (HTTP ${response.status})`),
                hint: json?.hint,
                needsAdvanced: json?.needsAdvanced,
                provider: json?.provider,
                providerLabel: json?.providerLabel,
                tried: json?.tried,
                connection: json?.connection
            }
        };
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return {
            ok: false,
            status: 0,
            error: {
                success: false,
                message: "Could not reach the server. Check your connection and try again."
            }
        };
    }
}
const getEmailConnection = ()=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION, "GET");
const testEmailConnection = (payload)=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION_TEST, "POST", payload);
const sendTestEmail = ()=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION_SEND_TEST, "POST");
const connectEmail = (payload)=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION, "POST", payload);
const verifyEmailConnection = ()=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION_VERIFY, "POST");
const disconnectEmail = ()=>emailConnectionRequest(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.MAIL.EMAIL_CONNECTION, "DELETE");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/outreach/email/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailChannelPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Email channel page — e.g. app/(dashboard)/outreach/email/page.tsx
 * Sidebar + header come from layout.tsx. Needs only React + Tailwind.
 * 👇 Adjust the import path to wherever your mail api file lives.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/mail/mail.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* ───────────────── sample analytics (no API yet — replace with real data) ───────────────── */ const STATS = [
    {
        label: "Emails Sent",
        value: "8,540",
        badge: "↑ +16%",
        icon: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z",
        tint: "bg-sky-50 border-sky-100 text-sky-600"
    },
    {
        label: "Delivered",
        value: "8,312",
        badge: "97.3%",
        icon: "M4 5h16v14H4zM4 7l8 6 8-6",
        tint: "bg-emerald-50 border-emerald-100 text-emerald-600"
    },
    {
        label: "Opened",
        value: "4,126",
        badge: "49.6%",
        icon: "M3 9l9-6 9 6v11H3zM3 9l9 6 9-6",
        tint: "bg-violet-50 border-violet-100 text-violet-600"
    },
    {
        label: "Clicked",
        value: "1,248",
        badge: "15.0%",
        icon: "M5 3l14 7-6 2-2 6z",
        tint: "bg-amber-50 border-amber-100 text-amber-600"
    },
    {
        label: "Replies",
        value: "682",
        badge: "8.2%",
        icon: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 6 6v3",
        tint: "bg-rose-50 border-rose-100 text-rose-600"
    }
];
const CAMPAIGNS = [
    {
        name: "New Property Listings",
        recipients: "5,000",
        delivered: "4,886 (97.7%)",
        opened: "2,548 (52.1%)",
        clicked: "762 (15.6%)",
        replies: "398 (8.1%)",
        status: "Completed",
        date: "Nov 04, 2026"
    },
    {
        name: "Investor Updates",
        recipients: "3,540",
        delivered: "3,426 (96.8%)",
        opened: "1,578 (46.0%)",
        clicked: "486 (14.2%)",
        replies: "284 (8.3%)",
        status: "Completed",
        date: "Nov 02, 2026"
    }
];
const PERFORMANCE = [
    {
        label: "Delivered",
        value: "97.3%",
        dot: "bg-emerald-500"
    },
    {
        label: "Opened",
        value: "49.6%",
        dot: "bg-violet-500"
    },
    {
        label: "Clicked",
        value: "15.0%",
        dot: "bg-sky-500"
    },
    {
        label: "Replied",
        value: "8.2%",
        dot: "bg-pink-500"
    }
];
const STEPS = [
    "Choose your email provider",
    "Connect and verify email",
    "Start sending campaigns"
];
const BENEFITS = [
    "Send bulk & personalized email campaigns",
    "Use templates and automation (drip campaigns)",
    "Track opens, clicks and replies in real-time"
];
const TABS = [
    "Overview",
    "Campaigns",
    "Templates",
    "Automations",
    "Settings"
];
/* ───────────────────────── copy ───────────────────────── */ const ERROR_TITLES = {
    AUTH_FAILED: "Email or password was rejected",
    APP_PASSWORD_REQUIRED: "This account needs an app password",
    BASIC_AUTH_DISABLED: "Password sign-in is switched off",
    OAUTH_REQUIRED: "This account needs OAuth sign-in",
    UNSUPPORTED_PROVIDER: "This provider can't be connected",
    INVALID_DOMAIN: "That email domain doesn't exist",
    TLS_CERT_MISMATCH: "The server's security certificate doesn't match",
    UNREACHABLE: "Couldn't reach a mail server"
};
const ATTEMPT_LABELS = {
    ok: "Connected",
    auth_failed: "Login rejected",
    app_password_required: "App password needed",
    basic_auth_disabled: "Password login disabled",
    tls_cert: "Certificate mismatch",
    unreachable: "No response",
    blocked_private_address: "Blocked (private address)",
    dns_not_found: "Host not found"
};
/** Quick pre-submit guidance based on the typed domain. The server is still the source of truth. */ const domainTip = (email)=>{
    const d = email.split("@")[1]?.toLowerCase().trim();
    if (!d) return null;
    if ([
        "gmail.com",
        "googlemail.com"
    ].includes(d)) return {
        tone: "info",
        text: "Gmail needs an App Password, not your normal password. Turn on 2-Step Verification first.",
        href: "https://myaccount.google.com/apppasswords",
        linkText: "Create an app password"
    };
    if (/^(yahoo\.|ymail\.com|rocketmail\.com)/.test(d)) return {
        tone: "info",
        text: "Yahoo needs an App Password from your Yahoo Account Security page."
    };
    if ([
        "icloud.com",
        "me.com",
        "mac.com"
    ].includes(d)) return {
        tone: "info",
        text: "iCloud needs an app-specific password from appleid.apple.com."
    };
    if (/^(outlook|hotmail|live|msn)\./.test(d)) return {
        tone: "warn",
        text: "Personal Outlook / Hotmail accounts no longer allow password sign-in, so they can't be connected here. Use Gmail, Zoho, Hostinger or a custom-domain mailbox."
    };
    return null;
};
/* ───────────────────────── small UI pieces ───────────────────────── */ const cx = (...c)=>c.filter(Boolean).join(" ");
const P = "var(--color-primary)";
const inputCls = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 " + "focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 disabled:bg-slate-50 disabled:text-slate-500";
const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ";
const btnBase = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ";
const btnPrimary = btnBase + "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] cursor-pointer " + focusRing;
const btnSecondary = btnBase + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 cursor-pointer " + focusRing;
const btnOutline = btnBase + "border border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)] hover:bg-[var(--color-primary-lighter)] cursor-pointer " + focusRing;
const btnDanger = btnBase + "bg-[var(--color-destructive)] text-white hover:opacity-90 cursor-pointer " + focusRing;
const Icon = ({ d, className = "h-4 w-4" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: d
        }, void 0, false, {
            fileName: "[project]/src/app/outreach/email/page.tsx",
            lineNumber: 121,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = Icon;
const MAIL = "M4 5h16v14H4zM4 7l8 6 8-6";
const CHECK = "M20 6 9 17l-5-5";
const Spinner = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-4 w-4 animate-spin motion-reduce:animate-none",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeOpacity: "0.25",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12a9 9 0 0 0-9-9",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Spinner;
const EyeIcon = ({ off })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-4 w-4",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            off && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4l16 16"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = EyeIcon;
const Banner = ({ tone, title, children })=>{
    const styles = {
        success: "border-emerald-200 bg-emerald-50 text-emerald-900",
        error: "border-red-200 bg-red-50 text-red-900",
        warn: "border-amber-200 bg-amber-50 text-amber-900",
        info: "border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]"
    }[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: tone === "error" ? "alert" : "status",
        className: cx("rounded-lg border px-4 py-3 text-sm", styles),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 160,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx(title && "mt-1", "leading-relaxed"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 161,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 159,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Banner;
const Field = ({ id, label, hint, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-1.5 block text-sm font-medium text-slate-800",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-xs text-slate-500",
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 172,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Field;
const Row = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-0.5 py-3 sm:flex-row sm:gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "w-40 shrink-0 text-sm text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "min-w-0 break-words text-sm text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Row;
const formatDate = (iso)=>iso ? new Date(iso).toLocaleString() : "Never";
const Illustration = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 260 200",
        className: "h-48 w-full max-w-[280px]",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "130",
                cy: "110",
                rx: "115",
                ry: "80",
                fill: "var(--color-primary-lighter)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "85",
                y: "40",
                width: "90",
                height: "80",
                rx: "8",
                fill: "#fff",
                stroke: "var(--color-primary-light)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "97",
                y: "58",
                width: "66",
                height: "6",
                rx: "3",
                fill: "var(--color-primary-light)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "97",
                y: "74",
                width: "50",
                height: "6",
                rx: "3",
                fill: "var(--color-primary-light)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "97",
                y: "90",
                width: "58",
                height: "6",
                rx: "3",
                fill: "var(--color-primary-light)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45 85 130 140 215 85v75a8 8 0 0 1-8 8H53a8 8 0 0 1-8-8Z",
                fill: "var(--color-primary)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45 85 130 140 215 85",
                fill: "none",
                stroke: "var(--color-primary-light)",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "200",
                cy: "40",
                r: "26",
                fill: "var(--color-primary-dark)"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m190 42 22-10-8 22-4-8Z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = Illustration;
const CampaignsTable = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full min-w-[640px] text-left text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-50 text-xs text-slate-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            "Campaign Name",
                            "Recipients",
                            "Delivered",
                            "Opened",
                            "Clicked",
                            "Replies",
                            "Status",
                            "Date"
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-3 py-2.5 font-medium",
                                children: h
                            }, h, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 205,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/email/page.tsx",
                    lineNumber: 202,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-slate-100",
                    children: CAMPAIGNS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3 font-medium text-slate-900",
                                    children: c.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: c.recipients
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: c.delivered
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: c.opened
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: c.clicked
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: c.replies
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800",
                                        children: c.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "whitespace-nowrap px-3 py-3 text-slate-600",
                                    children: c.date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, c.name, true, {
                            fileName: "[project]/src/app/outreach/email/page.tsx",
                            lineNumber: 211,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/email/page.tsx",
                    lineNumber: 209,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/outreach/email/page.tsx",
            lineNumber: 201,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = CampaignsTable;
const Donut = ()=>{
    const r = 52;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-36 w-36 shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 128 128",
                className: "h-full w-full -rotate-90",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "64",
                        cy: "64",
                        r: r,
                        fill: "none",
                        stroke: "#e2e8f0",
                        strokeWidth: "14"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "64",
                        cy: "64",
                        r: r,
                        fill: "none",
                        stroke: "#10b981",
                        strokeWidth: "14",
                        strokeDasharray: `${c * 0.973} ${c}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "64",
                        cy: "64",
                        r: r,
                        fill: "none",
                        stroke: "#ec4899",
                        strokeWidth: "14",
                        strokeDasharray: `${c * 0.027} ${c}`,
                        strokeDashoffset: -c * 0.973
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 237,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-semibold",
                        children: "8,540"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-slate-500",
                        children: "Total Sent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 241,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 233,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = Donut;
const WARN = "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z";
const ConfirmDialog = ({ title, children, confirmLabel, cancelLabel, busy, error, onConfirm, onCancel })=>{
    _s();
    const cancelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmDialog.useEffect": ()=>{
            const trigger = document.activeElement;
            cancelRef.current?.focus(); // safe default: focus the non-destructive button
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "ConfirmDialog.useEffect": ()=>{
                    document.body.style.overflow = prev;
                    trigger?.focus?.(); // give focus back to what opened the dialog
                }
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmDialog.useEffect": ()=>{
            const onKey = {
                "ConfirmDialog.useEffect.onKey": (e)=>{
                    if (e.key === "Escape" && !busy) onCancel();
                    if (e.key === "Tab") {
                        // keep keyboard focus inside the dialog
                        const els = panelRef.current?.querySelectorAll("button:not([disabled])");
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
                }
            }["ConfirmDialog.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "ConfirmDialog.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], [
        busy,
        onCancel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-900/50",
                onClick: ()=>!busy && onCancel(),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                role: "alertdialog",
                "aria-modal": "true",
                "aria-labelledby": "confirm-title",
                "aria-describedby": "confirm-desc",
                className: "relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-[var(--color-destructive)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    d: WARN,
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "confirm-title",
                                        className: "text-lg font-semibold text-slate-900",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "confirm-desc",
                                        className: "mt-2 space-y-2 text-sm leading-relaxed text-slate-600",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                            tone: "error",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/email/page.tsx",
                            lineNumber: 330,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 329,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: cancelRef,
                                type: "button",
                                className: btnSecondary,
                                onClick: onCancel,
                                disabled: busy,
                                children: cancelLabel
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 334,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: btnDanger,
                                onClick: onConfirm,
                                disabled: busy,
                                children: [
                                    busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    busy ? "Disconnecting…" : confirmLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 307,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 305,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConfirmDialog, "dOzh0g7/mGevEdpm9/41rL4LpFg=");
_c9 = ConfirmDialog;
function EmailChannelPage() {
    _s1();
    const [connection, setConnection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formOpen, setFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Overview");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHow, setShowHow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmDisconnect, setConfirmDisconnect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dialogError, setDialogError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const noticeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fromName, setFromName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdvanced, setShowAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adv, setAdv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        smtpHost: "",
        smtpPort: "587",
        smtpUser: "",
        imapHost: "",
        imapPort: "993"
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [detected, setDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [warnings, setWarnings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // result banners sit at the top of the page: bring them into view if the user has scrolled down
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailChannelPage.useEffect": ()=>{
            if (notice) noticeRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }["EmailChannelPage.useEffect"], [
        notice
    ]);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EmailChannelPage.useCallback[load]": async ()=>{
            setLoading(true);
            setLoadError(null);
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEmailConnection"])();
            if (r.ok) setConnection(r.data.connection);
            else setLoadError(r.error.message);
            setLoading(false);
        }
    }["EmailChannelPage.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailChannelPage.useEffect": ()=>{
            load();
        }
    }["EmailChannelPage.useEffect"], [
        load
    ]);
    const connected = !!connection?.connected;
    const ready = !loading && !loadError;
    const showForm = ready && formOpen;
    const showHero = ready && !connected && !formOpen;
    const showDashboard = ready && connected && !formOpen && !!connection;
    const failed = connection?.status === "failed";
    const tip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EmailChannelPage.useMemo[tip]": ()=>domainTip(email)
    }["EmailChannelPage.useMemo[tip]"], [
        email
    ]);
    const canSubmit = /^\S+@\S+\.\S+$/.test(email.trim()) && password.length > 0 && !busy;
    const openForm = ()=>{
        setEmail(connection?.email ?? "");
        setFromName(connection?.fromName ?? "");
        setPassword("");
        setError(null);
        setDetected(null);
        setNotice(null);
        setMenuOpen(false);
        setFormOpen(true);
    };
    const closeForm = ()=>{
        setFormOpen(false);
        setPassword("");
        setError(null);
        setDetected(null);
    };
    const buildPayload = ()=>{
        const payload = {
            email: email.trim(),
            password,
            ...fromName.trim() ? {
                fromName: fromName.trim()
            } : {}
        };
        if (showAdvanced && adv.smtpHost.trim()) {
            payload.advanced = {
                smtpHost: adv.smtpHost.trim(),
                smtpPort: Number(adv.smtpPort) || 587,
                ...adv.smtpUser.trim() ? {
                    smtpUser: adv.smtpUser.trim()
                } : {},
                ...adv.imapHost.trim() ? {
                    imapHost: adv.imapHost.trim(),
                    imapPort: Number(adv.imapPort) || 993
                } : {}
            };
        }
        return payload;
    };
    const handleFailure = (e)=>{
        setError(e);
        if (e.needsAdvanced) setShowAdvanced(true);
    };
    const run = async (kind)=>{
        if (!canSubmit) return;
        setBusy(kind);
        setError(null);
        setDetected(null);
        setWarnings([]);
        setNotice(null);
        if (kind === "test") {
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testEmailConnection"])(buildPayload());
            if (r.ok) {
                setDetected(r.data.detected);
                setWarnings(r.data.detected.warnings ?? []);
            } else handleFailure(r.error);
        } else {
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectEmail"])(buildPayload());
            if (r.ok) {
                setConnection(r.data.connection);
                setWarnings(r.data.warnings ?? []);
                setNotice({
                    tone: "success",
                    text: r.data.message
                });
                setFormOpen(false);
                setTab("Overview");
                setPassword("");
                setShowAdvanced(false);
            } else handleFailure(r.error);
        }
        setBusy(null);
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        run("connect");
    };
    const verify = async ()=>{
        setMenuOpen(false);
        setBusy("verify");
        setNotice(null);
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyEmailConnection"])();
        if (r.ok) {
            setConnection(r.data.connection);
            setNotice({
                tone: "success",
                text: "Mailbox verified. Sending is working."
            });
        } else {
            if (r.error.connection) setConnection(r.error.connection);
            setNotice({
                tone: "error",
                text: r.error.message
            });
        }
        setBusy(null);
    };
    const sendTest = async ()=>{
        setBusy("sendtest");
        setNotice(null);
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTestEmail"])();
        if (!r.ok) setNotice({
            tone: "error",
            text: r.error.message
        });
        else {
            const { message, sentCopy, sentCopyError } = r.data;
            if (sentCopy === "failed") setNotice({
                tone: "error",
                text: `${message} But the copy could not be saved to Sent: ${sentCopyError}`
            });
            else setNotice({
                tone: "success",
                text: sentCopy === "saved" ? `${message} A copy was saved to your Sent folder.` : message
            });
        }
        setBusy(null);
    };
    const openDisconnect = ()=>{
        setMenuOpen(false);
        setDialogError(null);
        setConfirmDisconnect(true);
    };
    const closeDisconnect = ()=>{
        setConfirmDisconnect(false);
        setDialogError(null);
    };
    const disconnect = async ()=>{
        setBusy("disconnect");
        setNotice(null);
        setDialogError(null);
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$mail$2f$mail$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectEmail"])();
        if (r.ok) {
            setConnection({
                connected: false
            });
            setConfirmDisconnect(false);
            setFormOpen(false);
            setWarnings([]);
            setEmail("");
            setFromName("");
            setTab("Overview");
            setNotice({
                tone: "success",
                text: "Email disconnected. Emails now go out from the default mailbox."
            });
        } else {
            setDialogError(r.error.message);
        }
        setBusy(null);
    };
    const channelSettings = ()=>connected ? setTab("Settings") : openForm();
    /* ───────── render ───────── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-6xl px-4 py-6 text-slate-900 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-2 text-sm",
                        "aria-label": "Breadcrumb",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    d: CHECK,
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 545,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Outreach Channels"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 548,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 549,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-700",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 550,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 544,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: cx(btnOutline, "!py-2"),
                        onClick: channelSettings,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.4 3h-4l-.4 3a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 3h4l.4-3a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 553,
                                columnNumber: 21
                            }, this),
                            "Channel Settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 552,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 543,
                columnNumber: 13
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: noticeRef,
                className: "mb-5 scroll-mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                    tone: notice.tone,
                    children: notice.text
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/email/page.tsx",
                    lineNumber: 560,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 559,
                columnNumber: 17
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 566,
                        columnNumber: 21
                    }, this),
                    " Checking your email connection…"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 565,
                columnNumber: 17
            }, this),
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                        tone: "error",
                        title: "Couldn't load your email connection",
                        children: loadError
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 572,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: btnSecondary,
                        onClick: load,
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 575,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 571,
                columnNumber: 17
            }, this),
            showHero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-4 lg:pl-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[var(--color-primary)]",
                                children: "Email Channel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 585,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
                                children: [
                                    "Connect ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-primary)]",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 37
                                    }, this),
                                    " to Start Outreach"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 586,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-md text-sm leading-relaxed text-slate-700",
                                children: "Integrate your business email (SMTP/Google/Microsoft) to send bulk campaigns, automated follow-ups, and personalized emails directly from your CRM. Just enter your email and password; we find the right server settings for you."
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 589,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2.5",
                                children: BENEFITS.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3 text-sm text-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-400 text-slate-700",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    d: CHECK,
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 597,
                                                columnNumber: 37
                                            }, this),
                                            b
                                        ]
                                    }, b, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 594,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-xs text-slate-500",
                                children: "Until you connect, emails go out from the default mailbox."
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 604,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: cx(btnPrimary, "px-6 py-3"),
                                        onClick: openForm,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                d: MAIL,
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 33
                                            }, this),
                                            "Connect Email"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: cx(btnOutline, "px-6 py-3"),
                                        onClick: ()=>setShowHow((s)=>!s),
                                        "aria-expanded": showHow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM10 8.5l5 3.5-5 3.5Z",
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 33
                                            }, this),
                                            "How it works?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 605,
                                columnNumber: 25
                            }, this),
                            showHow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                    tone: "info",
                                    title: "How it works",
                                    children: "Enter your email and password (or app password). We detect your provider, test the login, then save the connection. Your password is stored encrypted and is never shown again."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 616,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 584,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-6 sm:flex-row lg:justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Illustration, {}, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 626,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-xs rounded-2xl border border-[var(--color-primary-light)] bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Get Started in 3 Steps"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-4 space-y-4",
                                        children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 41
                                                    }, this),
                                                    s
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 627,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 625,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 583,
                columnNumber: 17
            }, this),
            showDashboard && connection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-wrap items-center gap-x-8 gap-y-4 rounded-xl border border-emerald-200 bg-emerald-50/60 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-11 w-11 items-center justify-center rounded-lg bg-white text-emerald-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            d: MAIL,
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-base font-semibold",
                                                        children: "Email Channel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: cx("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium", failed ? "bg-red-100 text-red-800" : "bg-emerald-600 text-white"),
                                                        children: [
                                                            !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                d: CHECK,
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 53
                                                            }, this),
                                                            failed ? "Needs attention" : "Connected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 654,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600",
                                                children: failed ? "The last check failed. Review the details below." : "Your business email is connected and ready to use."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-wrap items-center justify-end gap-x-8 gap-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                d: MAIL,
                                                className: "h-5 w-5 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Connected Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "break-all text-sm font-semibold",
                                                        children: connection.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 675,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 673,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary)] ring-1 ring-slate-200",
                                                children: connection.providerLabel?.[0] ?? "@"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold",
                                                        children: connection.providerLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-1.5 text-sm font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: cx("h-2.5 w-2.5 rounded-full", failed ? "bg-red-500" : "bg-emerald-500")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 37
                                                    }, this),
                                                    failed ? "Failed" : "Live"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 691,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: cx("flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg text-slate-600 hover:bg-white", focusRing),
                                                onClick: ()=>setMenuOpen((s)=>!s),
                                                "aria-label": "More actions",
                                                "aria-expanded": menuOpen,
                                                disabled: !!busy,
                                                children: busy === "verify" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 58
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    d: "M12 5v.01M12 12v.01M12 19v.01",
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 72
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 33
                                            }, this),
                                            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 z-10 mt-1 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-sm shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "block w-full px-4 py-2 text-left hover:bg-slate-50 cursor-pointer",
                                                        onClick: verify,
                                                        children: "Check connection"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "block w-full px-4 py-2 text-left hover:bg-slate-50 cursor-pointer",
                                                        onClick: openForm,
                                                        children: "Change mailbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "block w-full px-4 py-2 text-left text-red-600 hover:bg-slate-50 cursor-pointer",
                                                        onClick: openDisconnect,
                                                        children: "Disconnect"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 672,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, this),
                    failed && connection.lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                        tone: "error",
                        title: "The last check failed",
                        children: [
                            connection.lastError,
                            ". If you changed your mailbox password, use “Change mailbox” to enter the new one."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 730,
                        columnNumber: 25
                    }, this),
                    warnings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: warnings.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                tone: "warn",
                                children: w
                            }, w, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 738,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 736,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "tablist",
                                className: "flex flex-wrap gap-1",
                                children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        role: "tab",
                                        type: "button",
                                        "aria-selected": tab === t,
                                        onClick: ()=>setTab(t),
                                        className: cx("rounded-lg px-4 py-2 text-sm font-medium cursor-pointer", focusRing, tab === t ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-[var(--color-primary-lighter)]"),
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 747,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: btnPrimary,
                                onClick: ()=>setTab("Campaigns"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        d: "M12 5v14M5 12h14"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 29
                                    }, this),
                                    "Create Campaign"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 765,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 746,
                        columnNumber: 21
                    }, this),
                    tab === "Overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 lg:grid-cols-5",
                                children: STATS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: cx("flex items-center gap-3 rounded-xl border p-4", s.tint),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                d: s.icon,
                                                className: "h-7 w-7 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl font-semibold text-slate-900",
                                                                children: s.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-md bg-white/70 px-1.5 py-0.5 text-xs font-medium text-slate-700",
                                                                children: s.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 782,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 774,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 lg:grid-cols-[1.8fr_1fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-xl border border-slate-200 bg-white p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-3 text-base font-semibold",
                                                children: "Recent Campaigns"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 791,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignsTable, {}, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 792,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "rounded-xl border border-slate-200 bg-white p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-semibold",
                                                children: [
                                                    "Email Performance ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal text-slate-600",
                                                        children: "(This Month)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap items-center justify-center gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Donut, {}, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-2 text-sm",
                                                        children: PERFORMANCE.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: cx("h-2.5 w-2.5 rounded-full", p.dot)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-16",
                                                                        children: p.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: p.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                        lineNumber: 805,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, p.label, true, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 794,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 789,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true),
                    tab === "Campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-xl border border-slate-200 bg-white p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-base font-semibold",
                                children: "All Campaigns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 817,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CampaignsTable, {}, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 818,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 816,
                        columnNumber: 25
                    }, this),
                    (tab === "Templates" || tab === "Automations") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-600",
                        children: [
                            tab,
                            " will appear here."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 823,
                        columnNumber: 25
                    }, this),
                    tab === "Settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "overflow-hidden rounded-xl border border-slate-200 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold",
                                        children: "Mailbox connection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: btnSecondary,
                                                onClick: verify,
                                                disabled: !!busy,
                                                children: [
                                                    busy === "verify" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 63
                                                    }, this),
                                                    busy === "verify" ? "Checking…" : "Check connection"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: btnSecondary,
                                                onClick: sendTest,
                                                disabled: !!busy,
                                                children: [
                                                    busy === "sendtest" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 65
                                                    }, this),
                                                    busy === "sendtest" ? "Sending…" : "Send test email"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 838,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: btnSecondary,
                                                onClick: openForm,
                                                disabled: !!busy,
                                                children: "Change mailbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 842,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 833,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 831,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-slate-200 bg-slate-50 px-5 py-5 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-sm text-slate-500",
                                        children: "Customers will see"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-x-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-12 text-slate-400",
                                                    children: "From"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 852,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: connection.fromName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600",
                                                    children: [
                                                        "<",
                                                        connection.email,
                                                        ">"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 851,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 850,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 848,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "divide-y divide-slate-100 px-5 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Mailbox",
                                        value: connection.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 860,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Provider",
                                        value: connection.providerLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 861,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Outgoing server",
                                        value: connection.smtp ? `${connection.smtp.host}:${connection.smtp.port} (${connection.smtp.secure ? "SSL/TLS" : "STARTTLS"})` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 862,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Sent folder copy",
                                        value: connection.saveToSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Saved to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: connection.sentFolder
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 875,
                                                    columnNumber: 58
                                                }, void 0)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Not saved by us (your provider may save it itself)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 878,
                                            columnNumber: 45
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 870,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                                        label: "Last verified",
                                        value: formatDate(connection.lastVerifiedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 882,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 859,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 border-t border-slate-200 px-5 py-4 sm:px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: cx(btnBase, "border border-red-200 text-red-600 hover:bg-red-50", focusRing),
                                    onClick: openDisconnect,
                                    disabled: !!busy,
                                    children: "Disconnect this mailbox"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                    lineNumber: 886,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 885,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 830,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 646,
                columnNumber: 17
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: onSubmit,
                className: "mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white",
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 px-5 py-6 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: connected ? "Change mailbox" : "Connect your mailbox"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 905,
                                        columnNumber: 29
                                    }, this),
                                    !connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-500",
                                        children: "Until then, emails use the default mailbox"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 906,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 904,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-5 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        id: "ec-email",
                                        label: "Email address",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "ec-email",
                                            type: "email",
                                            autoComplete: "email",
                                            inputMode: "email",
                                            className: inputCls,
                                            placeholder: "you@yourcompany.com",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            disabled: !!busy,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 911,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 910,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                        id: "ec-name",
                                        label: "Sender name",
                                        hint: "Shown to customers. Defaults to your account name.",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "ec-name",
                                            type: "text",
                                            className: inputCls,
                                            placeholder: "Priya from Acme",
                                            value: fromName,
                                            onChange: (e)=>setFromName(e.target.value),
                                            disabled: !!busy,
                                            maxLength: 100
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 924,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 909,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                id: "ec-password",
                                label: "Mailbox password or app password",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "ec-password",
                                                type: showPassword ? "text" : "password",
                                                autoComplete: "new-password",
                                                className: cx(inputCls, "pr-11"),
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                disabled: !!busy,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 940,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowPassword((s)=>!s),
                                                className: "absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-lg text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-pointer",
                                                "aria-label": showPassword ? "Hide password" : "Show password",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {
                                                    off: showPassword
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 950,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-xs text-slate-500",
                                        children: "Stored encrypted. It is never shown again after you save."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 959,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 938,
                                columnNumber: 25
                            }, this),
                            tip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                tone: tip.tone,
                                children: [
                                    tip.text,
                                    " ",
                                    tip.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: tip.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-medium underline",
                                        children: tip.linkText
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 966,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 963,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowAdvanced((s)=>!s),
                                        "aria-expanded": showAdvanced,
                                        className: "text-sm cursor-pointer font-medium text-[var(--color-primary-dark)] hover:underline focus-visible:outline-none focus-visible:underline",
                                        children: showAdvanced ? "Hide server settings" : "Enter server settings manually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 974,
                                        columnNumber: 29
                                    }, this),
                                    showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-600",
                                                children: "Only needed if automatic detection can't find your server. Ask your email host for these."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 985,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 sm:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            id: "ec-smtp-host",
                                                            label: "Outgoing (SMTP) server",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "ec-smtp-host",
                                                                className: inputCls,
                                                                placeholder: "smtp.yourhost.com",
                                                                value: adv.smtpHost,
                                                                onChange: (e)=>setAdv({
                                                                        ...adv,
                                                                        smtpHost: e.target.value
                                                                    }),
                                                                disabled: !!busy
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 991,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                                            lineNumber: 990,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        id: "ec-smtp-port",
                                                        label: "Port",
                                                        hint: "465 = SSL, 587 = STARTTLS",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "ec-smtp-port",
                                                            type: "number",
                                                            min: 1,
                                                            max: 65535,
                                                            className: inputCls,
                                                            value: adv.smtpPort,
                                                            onChange: (e)=>setAdv({
                                                                    ...adv,
                                                                    smtpPort: e.target.value
                                                                }),
                                                            disabled: !!busy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                                            lineNumber: 995,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 988,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "ec-smtp-user",
                                                label: "SMTP username",
                                                hint: "Leave empty to use your email address.",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "ec-smtp-user",
                                                    className: inputCls,
                                                    value: adv.smtpUser,
                                                    onChange: (e)=>setAdv({
                                                            ...adv,
                                                            smtpUser: e.target.value
                                                        }),
                                                    disabled: !!busy
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/email/page.tsx",
                                                    lineNumber: 999,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 sm:grid-cols-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            id: "ec-imap-host",
                                                            label: "Incoming (IMAP) server",
                                                            hint: "Optional. Used to save copies in Sent.",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "ec-imap-host",
                                                                className: inputCls,
                                                                placeholder: "imap.yourhost.com",
                                                                value: adv.imapHost,
                                                                onChange: (e)=>setAdv({
                                                                        ...adv,
                                                                        imapHost: e.target.value
                                                                    }),
                                                                disabled: !!busy
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 1004,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 1002,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                        id: "ec-imap-port",
                                                        label: "Port",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "ec-imap-port",
                                                            type: "number",
                                                            min: 1,
                                                            max: 65535,
                                                            className: inputCls,
                                                            value: adv.imapPort,
                                                            onChange: (e)=>setAdv({
                                                                    ...adv,
                                                                    imapPort: e.target.value
                                                                }),
                                                            disabled: !!busy
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 1007,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 984,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 973,
                                columnNumber: 25
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                        tone: "error",
                                        title: error.code && ERROR_TITLES[error.code] || "Couldn't connect",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: error.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 37
                                            }, this),
                                            error.hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2",
                                                children: error.hint
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 52
                                            }, this),
                                            error.needsAdvanced && !showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2",
                                                children: "Try entering the server settings manually."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 78
                                            }, this),
                                            error.needsAdvanced && showAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2",
                                                children: "We couldn't find your server automatically. Fill in the server settings above and try again."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 33
                                    }, this),
                                    error.tried && error.tried.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "rounded-lg border border-slate-200 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "cursor-pointer px-4 py-2.5 text-slate-700",
                                                children: [
                                                    "What we tried (",
                                                    error.tried.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1027,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "divide-y divide-slate-100 border-t border-slate-200",
                                                children: error.tried.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex flex-wrap justify-between gap-2 px-4 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-800",
                                                                children: [
                                                                    t.host,
                                                                    ":",
                                                                    t.port
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-500",
                                                                children: ATTEMPT_LABELS[t.result] ?? t.result
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, `${t.host}-${t.port}-${i}`, true, {
                                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1016,
                                columnNumber: 29
                            }, this),
                            detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                        tone: "success",
                                        title: "Login works",
                                        children: [
                                            "We found ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: detected.providerLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 46
                                            }, this),
                                            " at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    detected.smtp.host,
                                                    ":",
                                                    detected.smtp.port
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 37
                                            }, this),
                                            ".",
                                            " ",
                                            detected.saveToSent ? `Sent copies will be saved to “${detected.sentFolder}”.` : "Nothing is saved yet. Select Connect to finish."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 1045,
                                        columnNumber: 33
                                    }, this),
                                    warnings.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Banner, {
                                            tone: "warn",
                                            children: w
                                        }, w, false, {
                                            fileName: "[project]/src/app/outreach/email/page.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 37
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1044,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 903,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-end gap-3 rounded-b-xl border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: cx(btnSecondary, "mr-auto"),
                                onClick: closeForm,
                                disabled: !!busy,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1065,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: btnSecondary,
                                onClick: ()=>run("test"),
                                disabled: !canSubmit,
                                children: [
                                    busy === "test" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 49
                                    }, this),
                                    busy === "test" ? "Checking…" : "Check login"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1068,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: btnPrimary,
                                disabled: !canSubmit,
                                children: [
                                    busy === "connect" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {}, void 0, false, {
                                        fileName: "[project]/src/app/outreach/email/page.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 52
                                    }, this),
                                    busy === "connect" ? "Connecting…" : connected ? "Save new mailbox" : "Connect mailbox"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 1064,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 902,
                columnNumber: 17
            }, this),
            confirmDisconnect && connection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfirmDialog, {
                title: "Disconnect this mailbox?",
                confirmLabel: "Disconnect",
                cancelLabel: "Keep connected",
                busy: busy === "disconnect",
                error: dialogError,
                onConfirm: disconnect,
                onCancel: closeDisconnect,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-900",
                                children: connection.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/email/page.tsx",
                                lineNumber: 1091,
                                columnNumber: 25
                            }, this),
                            " will stop sending your emails."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 1090,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Emails to customers will go out from the default Aiworksforce mailbox again. Your saved password is deleted, so you'll need to enter it again to reconnect."
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/email/page.tsx",
                        lineNumber: 1093,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/email/page.tsx",
                lineNumber: 1081,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/email/page.tsx",
        lineNumber: 541,
        columnNumber: 9
    }, this);
}
_s1(EmailChannelPage, "a2P0J2DdLkv3AAh+PFshWAfHJSQ=");
_c10 = EmailChannelPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "Spinner");
__turbopack_context__.k.register(_c2, "EyeIcon");
__turbopack_context__.k.register(_c3, "Banner");
__turbopack_context__.k.register(_c4, "Field");
__turbopack_context__.k.register(_c5, "Row");
__turbopack_context__.k.register(_c6, "Illustration");
__turbopack_context__.k.register(_c7, "CampaignsTable");
__turbopack_context__.k.register(_c8, "Donut");
__turbopack_context__.k.register(_c9, "ConfirmDialog");
__turbopack_context__.k.register(_c10, "EmailChannelPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a29e0925._.js.map