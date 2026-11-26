"use client";

import React, { useEffect, useMemo, useState } from "react";
import { getFilteredWhatsapp } from "@/store/masters/whatsapp/whatsapp";
import { getFilteredCustomer } from "@/store/customer";
import { API_ROUTES } from "@/constants/ApiRoute";

/* ────────────────────────────────────────────────────────────────────
- Types
- ──────────────────────────────────────────────────────────────────── */
type MetaComponent = {
    type: string; // HEADER | BODY | FOOTER | BUTTONS
    format?: string; // TEXT | IMAGE | VIDEO | DOCUMENT
    text?: string;
    example?: { header_handle?: string[]; body_text?: string[][] };
    buttons?: { type: string; text: string; url?: string; phone_number?: string }[];
};

type MetaTemplate = {
    id?: string;
    name: string;
    status: string;
    category?: string;
    language?: string;
    components?: MetaComponent[];
};

type CRMTemplate = {
    id: string;
    _id?: string;
    name: string;
    type?: string;
    body: string;
    category: string;
    whatsappMediaType: string;
    whatsappImage: any;
    whatsappFileName?: string;
    metaName: string;
};

type FilterKey = "APPROVED" | "PENDING" | "UNVERIFIED";

type Header =
    | { kind: "none" }
    | { kind: "text"; text: string }
    | { kind: "image"; url: string | null; extra: number }
    | { kind: "video" }
    | { kind: "document"; fileName: string };

type Preview = {
    key: string;
    source: "crm" | "meta";
    crmId?: string;
    title: string;
    metaName: string;
    category: string;
    language: string;
    rawStatus: string;
    bucket: FilterKey;
    header: Header;
    body: string;
    footer: string;
    buttons: { type: string; text: string }[];
};

/* ────────────────────────────────────────────────────────────────────
- Helpers & Config
- ──────────────────────────────────────────────────────────────────── */
const toMetaName = (name: string) => name.toLowerCase().replace(/[^a-z0-9_]/g, "_");

// Set to `true` for bulk multi-customer selection; `false` for single-customer selection
const SUPPORT_BULK_SEND = true;

const extractImages = (field: unknown): string[] => {
    try {
        const parsed = typeof field === "string" ? JSON.parse(field) : field;
        return Array.isArray(parsed) ? parsed.filter((u): u is string => typeof u === "string" && u.length > 0) : [];
    } catch {
        return typeof field === "string" && field.startsWith("http") ? [field] : [];
    }
};

/** Merge what is saved in the CRM with what Meta actually approved. Meta wins when both exist. */
const buildPreview = (crm?: CRMTemplate, meta?: MetaTemplate): Preview => {
    const comps = meta?.components ?? [];
    const mHeader = comps.find((c) => c.type === "HEADER");
    const mBody = comps.find((c) => c.type === "BODY");
    const mFooter = comps.find((c) => c.type === "FOOTER");
    const mButtons = comps.find((c) => c.type === "BUTTONS");

    const crmImages = crm ? extractImages(crm.whatsappImage) : [];
    const crmMedia = crm?.whatsappMediaType;

    let header: Header = { kind: "none" };
    if (mHeader) {
        const fmt = (mHeader.format || "TEXT").toUpperCase();
        if (fmt === "TEXT" && mHeader.text) header = { kind: "text", text: mHeader.text };
        else if (fmt === "IMAGE") header = { kind: "image", url: mHeader.example?.header_handle?.[0] ?? crmImages[0] ?? null, extra: 0 };
        else if (fmt === "VIDEO") header = { kind: "video" };
        else if (fmt === "DOCUMENT") header = { kind: "document", fileName: crm?.whatsappFileName || "Document" };
    } else if (crm && !meta) {
        if (crmMedia === "image" && crmImages.length > 0) header = { kind: "image", url: crmImages[0], extra: crmImages.length - 1 };
        else if (crmMedia === "video") header = { kind: "video" };
        else if (crmMedia === "document") header = { kind: "document", fileName: crm.whatsappFileName || "Document" };
    }

    const rawStatus = meta?.status ?? "NOT_SUBMITTED";
    const bucket: FilterKey = rawStatus === "APPROVED" ? "APPROVED" : rawStatus === "PENDING" || rawStatus === "IN_APPEAL" ? "PENDING" : "UNVERIFIED";

    return {
        key: crm ? `crm-${crm.id}` : `meta-${meta?.id ?? meta?.name}`,
        source: crm ? "crm" : "meta",
        crmId: crm?.id,
        title: crm?.name ?? (meta?.name || "").replace(/_/g, " "),
        metaName: crm?.metaName ?? meta?.name ?? "",
        category: meta?.category || crm?.category || "General",
        language: meta?.language || "",
        rawStatus,
        bucket,
        header,
        body: mBody?.text ?? crm?.body ?? "",
        footer: mFooter?.text ?? "",
        buttons: (mButtons?.buttons ?? []).map((b) => ({ type: b.type, text: b.text })),
    };
};

const STATUS_UI: Record<string, { label: string; cls: string; dot: string }> = {
    APPROVED: { label: "Approved", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200", dot: "bg-emerald-500" },
    PENDING: { label: "In review", cls: "bg-sky-50 text-sky-700 ring-sky-200", dot: "bg-sky-500 animate-pulse" },
    IN_APPEAL: { label: "In appeal", cls: "bg-sky-50 text-sky-700 ring-sky-200", dot: "bg-sky-500 animate-pulse" },
    REJECTED: { label: "Rejected", cls: "bg-red-50 text-red-700 ring-red-200", dot: "bg-red-500" },
    PAUSED: { label: "Paused", cls: "bg-amber-50 text-amber-700 ring-amber-200", dot: "bg-amber-500" },
    NOT_SUBMITTED: { label: "Not submitted", cls: "bg-gray-100 text-gray-600 ring-gray-200", dot: "bg-gray-400" },
};
const statusUi = (s: string) =>
    STATUS_UI[s] ?? { label: s.replace(/_/g, " ").toLowerCase(), cls: "bg-gray-100 text-gray-600 ring-gray-200", dot: "bg-gray-400" };

/* ────────────────────────────────────────────────────────────────────
- Icons
- ──────────────────────────────────────────────────────────────────── */
const Svg = ({ d, className = "w-4 h-4" }: { d: string; className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d={d} />
    </svg>
);
const ICON = {
    search: "M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z",
    refresh: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    image: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    file: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    link: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
    phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    reply: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6",
    eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    x: "M6 18L18 6M6 6l12 12",
    copy: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
};
const SendIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

/* ────────────────────────────────────────────────────────────────────
- Preview building blocks
- ──────────────────────────────────────────────────────────────────── */
const TOKEN = /(\{\{[^}]+\}\}|\*[^*\n]+\*|~[^~\n]+~)/g;

/** Renders {{variables}} as chips and WhatsApp *bold* / ~strike~ formatting. */
function FormattedText({ text }: { text: string }) {
    return (
        <>
            {text.split(TOKEN).map((part, i) => {
                if (/^\{\{[^}]+\}\}$/.test(part)) {
                    return (
                        <span key={i} className="mx-0.5 inline-block rounded bg-emerald-50 px-1 font-mono text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                            {part}
                        </span>
                    );
                }
                if (/^\*[^*\n]+\*$/.test(part)) return <strong key={i}>{part.slice(1, -1)}</strong>;
                if (/^~[^~\n]+~$/.test(part)) return <s key={i}>{part.slice(1, -1)}</s>;
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </>
    );
}

function MediaPlaceholder({ icon, label }: { icon: string; label: string }) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gray-100 text-gray-400">
            <Svg d={icon} className="h-7 w-7" />
            <span className="text-[11px] font-medium">{label}</span>
        </div>
    );
}

function HeaderMedia({ header }: { header: Header }) {
    const [failed, setFailed] = useState(false);

    if (header.kind === "none") return null;

    if (header.kind === "text") {
        return <p className="px-2 pb-0.5 pt-1.5 text-[14px] font-bold leading-snug text-gray-900">{header.text}</p>;
    }

    if (header.kind === "image") {
        return (
            <div className="relative mb-1.5 aspect-[1.91/1] w-full overflow-hidden rounded-lg bg-gray-100">
                {header.url && !failed ? (
                    <img
                        src={header.url}
                        alt="Template header"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setFailed(true)}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <MediaPlaceholder icon={ICON.image} label={header.url ? "Image could not be loaded" : "No image attached"} />
                )}
                {header.extra > 0 && (
                    <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">+{header.extra} more</span>
                )}
            </div>
        );
    }

    if (header.kind === "video") {
        return (
            <div className="relative mb-1.5 aspect-[1.91/1] w-full overflow-hidden rounded-lg bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white">
                        <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-1.5 flex items-center gap-2.5 rounded-lg bg-gray-100 p-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <Svg d={ICON.file} className="h-4 w-4" />
            </span>
            <span className="min-w-0 truncate text-xs font-semibold text-gray-700">{header.fileName}</span>
        </div>
    );
}

const BUTTON_ICON: Record<string, string> = { URL: ICON.link, PHONE_NUMBER: ICON.phone, QUICK_REPLY: ICON.reply, COPY_CODE: ICON.copy };

function ChatWallpaper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`relative bg-[#EFEAE2] p-4 ${className}`}
            style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
        >
            {children}
        </div>
    );
}

function Bubble({ p, expanded = false }: { p: Preview; expanded?: boolean }) {
    const hasMedia = p.header.kind !== "none" && p.header.kind !== "text";
    const clamp = expanded ? "" : hasMedia ? "line-clamp-3" : "line-clamp-6";
    const buttons = expanded ? p.buttons : p.buttons.slice(0, 2);

    return (
        <div className="w-full max-w-[290px]">
            <div className="rounded-xl rounded-tl-sm bg-white p-1.5 shadow-sm">
                <HeaderMedia header={p.header} />
                {p.body ? (
                    <p className={`whitespace-pre-wrap break-words px-2 pb-1 text-[13px] leading-relaxed text-gray-800 ${clamp}`}>
                        <FormattedText text={p.body} />
                    </p>
                ) : (
                    <p className="px-2 pb-1 text-[13px] italic text-gray-400">No message text</p>
                )}
                {p.footer && <p className="px-2 pb-1 text-[11px] text-gray-400">{p.footer}</p>}
            </div>
            {buttons.length > 0 && (
                <div className="mt-1 space-y-1">
                    {buttons.map((b, i) => (
                        <div key={i} className="flex items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-[13px] font-semibold text-sky-600 shadow-sm">
                            {BUTTON_ICON[b.type] && <Svg d={BUTTON_ICON[b.type]} className="h-3.5 w-3.5" />}
                            <span className="truncate">{b.text}</span>
                        </div>
                    ))}
                    {!expanded && p.buttons.length > 2 && <p className="pt-0.5 text-center text-[11px] text-gray-500">+{p.buttons.length - 2} more buttons</p>}
                </div>
            )}
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const ui = statusUi(status);
    return (
        <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${ui.cls}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${ui.dot}`} />
            {ui.label}
        </span>
    );
}

const Chip = ({ children, tone = "gray" }: { children: React.ReactNode; tone?: "gray" | "violet" }) => (
    <span
        className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${tone === "violet" ? "bg-violet-50 text-violet-700" : "bg-gray-100 text-gray-600"
            }`}
    >
        {children}
    </span>
);

/* ────────────────────────────────────────────────────────────────────
- Main component
- ──────────────────────────────────────────────────────────────────── */
export default function MetaWhatsAppTemplates({ adminId }: { adminId: string }) {
    const [templates, setTemplates] = useState<CRMTemplate[]>([]);
    const [metaList, setMetaList] = useState<MetaTemplate[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<FilterKey>("APPROVED");
    const [search, setSearch] = useState("");
    const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // Preview modal
    const [previewItem, setPreviewItem] = useState<Preview | null>(null);

    // Send modal
    const [sendItem, setSendItem] = useState<Preview | null>(null);
    const [customHeaderUrl, setCustomHeaderUrl] = useState("");
    const [customers, setCustomers] = useState<any[]>([]);
    const [custSearch, setCustSearch] = useState("");
    const [custPage, setCustPage] = useState(0);
    const [isLoadingCust, setIsLoadingCust] = useState(false);
    const [hasMoreCust, setHasMoreCust] = useState(true);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<Set<string>>(new Set());
    const [isSending, setIsSending] = useState(false);
    const [isVerifyingId, setIsVerifyingId] = useState<string | null>(null);

    const notify = (type: "success" | "error", text: string) => setToast({ type, text });
    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 4500);
        return () => clearTimeout(t);
    }, [toast]);

    /* ── Data ── */
    const loadData = async () => {
        setLoading(true);
        try {
            const crmData = await getFilteredWhatsapp("?type=whatsapp&limit=100");
            const mappedCrm: CRMTemplate[] = (crmData?.data || [])
                .filter((t: any) => !t.type || t.type === "whatsapp")
                .map((t: any) => ({ ...t, id: t._id || t.id, metaName: toMetaName(t.name) }));
            setTemplates(mappedCrm);
        } catch (err) {
            console.error("Failed to load CRM templates", err);
            notify("error", "Could not load your templates.");
        }

        try {
            const metaRes = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.GET_META_TEMPLATES, { credentials: "include" });
            const metaData = await metaRes.json();
            setMetaList(metaData.metaTemplates || []);
        } catch (err) {
            console.error("Failed to load Meta templates", err);
            notify("error", "Could not sync statuses with Meta. Showing saved templates only.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const previews = useMemo(() => {
        const metaByName = new Map(metaList.map((m) => [m.name, m]));
        const crmNames = new Set(templates.map((t) => t.metaName));
        const fromCrm = templates.map((t) => buildPreview(t, metaByName.get(t.metaName)));
        const metaOnly = metaList.filter((m) => !crmNames.has(m.name)).map((m) => buildPreview(undefined, m));
        return [...fromCrm, ...metaOnly];
    }, [templates, metaList]);

    const counts = useMemo(
        () => ({
            APPROVED: previews.filter((p) => p.bucket === "APPROVED").length,
            PENDING: previews.filter((p) => p.bucket === "PENDING").length,
            UNVERIFIED: previews.filter((p) => p.bucket === "UNVERIFIED").length,
        }),
        [previews]
    );

    const visible = useMemo(() => {
        const q = search.trim().toLowerCase();
        return previews.filter((p) => p.bucket === activeFilter && (!q || `${p.title} ${p.metaName} ${p.body}`.toLowerCase().includes(q)));
    }, [previews, activeFilter, search]);

    /* ── Customers (send modal) ── */
    const loadCustomers = async (page: number, keyword: string, append = false) => {
        setIsLoadingCust(true);
        try {
            const limit = 50;
            let query = `?Limit=${limit}&Skip=${page * limit}`;
            if (keyword) query += `&Keyword=${encodeURIComponent(keyword)}`;
            const data = await getFilteredCustomer(query);
            if (Array.isArray(data)) {
                setCustomers((prev) => (append ? [...prev, ...data] : data));
                setHasMoreCust(data.length === limit);
            }
        } catch {
            console.error("Failed to load customers");
        } finally {
            setIsLoadingCust(false);
        }
    };

    useEffect(() => {
        if (!sendItem) return;
        const timer = setTimeout(() => {
            setCustPage(0);
            loadCustomers(0, custSearch, false);
        }, 400);
        return () => clearTimeout(timer);
    }, [custSearch, sendItem]);

    const custId = (c: any): string => c.id || c._id;
    const allLoadedSelected = SUPPORT_BULK_SEND && customers.length > 0 && customers.every((c) => selectedCustomerIds.has(custId(c)));

    const toggleAllLoaded = () => {
        if (!SUPPORT_BULK_SEND) return;
        setSelectedCustomerIds((prev) => {
            const next = new Set(prev);
            customers.forEach((c) => (allLoadedSelected ? next.delete(custId(c)) : next.add(custId(c))));
            return next;
        });
    };

    const toggleCustomerSelection = (id: string, checked: boolean) => {
        if (SUPPORT_BULK_SEND) {
            setSelectedCustomerIds((prev) => {
                const next = new Set(prev);
                if (checked) next.add(id);
                else next.delete(id);
                return next;
            });
        } else {
            setSelectedCustomerIds(new Set([id]));
        }
    };

    /* ── Actions ── */
    const openSend = (p: Preview) => {
        setPreviewItem(null);
        setSelectedCustomerIds(new Set());
        setCustSearch("");
        setCustomHeaderUrl("");
        setSendItem(p);
    };

    const handleSendTemplate = async () => {
        if (!sendItem || selectedCustomerIds.size === 0) {
            return notify("error", SUPPORT_BULK_SEND ? "Select at least one recipient." : "Select a customer.");
        }

        const recipientIds = SUPPORT_BULK_SEND
            ? Array.from(selectedCustomerIds)
            : Array.from(selectedCustomerIds).slice(0, 1);

        const bodyPayload: Record<string, any> = { targetIds: recipientIds };
        if (sendItem.source === "crm" && sendItem.crmId) {
            bodyPayload.templateId = sendItem.crmId;
        } else {
            bodyPayload.templateName = sendItem.metaName;
        }

        setIsSending(true);
        try {
            const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.SEND_META_TEMPLATE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(bodyPayload),
            });
            const data = await res.json();
            if (data.success) {
                const count = typeof data.sentCount === "number" ? data.sentCount : recipientIds.length;
                notify("success", `Sent “${sendItem.title}” to ${count} recipient${count === 1 ? "" : "s"}.`);
                setSendItem(null);
            } else {
                notify("error", data.message || "Could not send the template.");
            }
        } catch {
            notify("error", "Could not send the template. Check your connection and try again.");
        } finally {
            setIsSending(false);
        }
    };

    const handleVerify = async (templateId: string) => {
        setIsVerifyingId(templateId);
        try {
            const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.VERIFY_META_TEMPLATE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ templateId }),
            });
            const data = await res.json();
            const first = data?.results?.[0];
            if (data.success && first?.success) {
                notify("success", "Submitted to Meta. It will show under In review.");
                loadData();
            } else {
                notify("error", first?.error || data.message || "Meta did not accept this template.");
            }
        } catch {
            notify("error", "Could not submit the template. Try again.");
        } finally {
            setIsVerifyingId(null);
        }
    };

    /* ── Card actions ── */
    const renderAction = (p: Preview) => {
        const base = "flex-1 rounded-xl py-2.5 text-sm font-semibold transition-colors";
        if (p.bucket === "APPROVED") {
            return (
                <button
                    onClick={() => openSend(p)}
                    className={`${base} flex items-center justify-center gap-2 bg-[#128C7E] text-white hover:bg-[#0F7A6E]`}
                >
                    <SendIcon /> {SUPPORT_BULK_SEND ? "Send template" : "Send to customer"}
                </button>
            );
        }
        if (p.bucket === "PENDING") {
            return (
                <button disabled className={`${base} cursor-not-allowed bg-gray-100 text-gray-400`}>
                    Waiting for Meta
                </button>
            );
        }
        if (p.source === "crm" && p.crmId) {
            const busy = isVerifyingId === p.crmId;
            return (
                <button onClick={() => handleVerify(p.crmId!)} disabled={busy} className={`${base} bg-gray-900 text-white hover:bg-black disabled:opacity-50`}>
                    {busy ? "Submitting…" : p.rawStatus === "REJECTED" ? "Resubmit for review" : "Submit for review"}
                </button>
            );
        }
        return (
            <button disabled className={`${base} cursor-not-allowed bg-gray-100 text-gray-400`}>
                Managed in Meta
            </button>
        );
    };

    const TABS: { key: FilterKey; label: string; active: string }[] = [
        { key: "APPROVED", label: "Approved", active: "bg-[#128C7E] text-white" },
        { key: "PENDING", label: "In review", active: "bg-sky-600 text-white" },
        { key: "UNVERIFIED", label: "Needs submission", active: "bg-amber-500 text-white" },
    ];

    return (
        <div className="flex min-h-0 flex-1 flex-col bg-gray-50 p-5 text-gray-900 md:p-8">
            {/* Header */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">WhatsApp templates</h2>
                    <p className="mt-0.5 text-sm text-gray-500">Only templates approved by Meta can be sent to customers.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Svg d={ICON.search} className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search templates"
                            className="w-56 rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                        />
                    </div>
                    <button
                        onClick={loadData}
                        disabled={loading}
                        title="Refresh statuses from Meta"
                        className="rounded-xl border border-gray-200 bg-white p-2.5 text-gray-500 shadow-sm transition hover:text-gray-900 disabled:opacity-60"
                    >
                        <Svg d={ICON.refresh} className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-5 flex flex-wrap gap-2">
                {TABS.map((t) => {
                    const on = activeFilter === t.key;
                    return (
                        <button
                            key={t.key}
                            onClick={() => setActiveFilter(t.key)}
                            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${on ? `${t.active} border-transparent shadow-sm` : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            {t.label}
                            <span className={`rounded-full px-2 py-px text-xs ${on ? "bg-white/25" : "bg-gray-100 text-gray-500"}`}>{counts[t.key]}</span>
                        </button>
                    );
                })}
            </div>

            {/* Grid */}
            <div className="min-h-0 flex-1 overflow-y-auto pb-6">
                {loading && previews.length === 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="h-[430px] animate-pulse rounded-2xl border border-gray-200 bg-white" />
                        ))}
                    </div>
                ) : visible.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                        <p className="text-sm font-semibold text-gray-700">{search ? "No templates match your search." : "Nothing in this tab yet."}</p>
                        <p className="mt-1 text-sm text-gray-500">
                            {search
                                ? "Try a different name or clear the search."
                                : activeFilter === "APPROVED"
                                    ? "Submit a template for review and it will appear here once Meta approves it."
                                    : activeFilter === "PENDING"
                                        ? "Templates you submit will wait here while Meta reviews them."
                                        : "Every template has been submitted."}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {visible.map((p) => (
                            <article key={p.key} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                                <header className="flex items-start justify-between gap-3 px-4 py-3">
                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-bold text-gray-900">{p.title}</h3>
                                        <p className="truncate font-mono text-[11px] text-gray-400">{p.metaName}</p>
                                    </div>
                                    <StatusBadge status={p.rawStatus} />
                                </header>

                                <button type="button" onClick={() => setPreviewItem(p)} className="relative block h-[320px] w-full cursor-pointer overflow-hidden text-left" aria-label={`Preview ${p.title}`}>
                                    <ChatWallpaper className="h-full">
                                        <Bubble p={p} />
                                    </ChatWallpaper>
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#EFEAE2] to-transparent" />
                                </button>

                                <div className="flex flex-wrap items-center gap-1.5 px-4 pt-3">
                                    <Chip>{p.category.charAt(0) + p.category.slice(1).toLowerCase()}</Chip>
                                    {p.language && <Chip>{p.language}</Chip>}
                                    {p.source === "meta" && <Chip tone="violet">Only in Meta</Chip>}
                                </div>

                                <footer className="mt-auto flex items-center gap-2 p-4">
                                    {renderAction(p)}
                                    <button
                                        onClick={() => setPreviewItem(p)}
                                        title="Preview"
                                        className="rounded-xl border border-gray-200 p-2.5 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        <Svg d={ICON.eye} className="h-[18px] w-[18px]" />
                                    </button>
                                </footer>
                            </article>
                        ))}
                    </div>
                )}
            </div>

            {/* Preview modal */}
            {previewItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setPreviewItem(null)}>
                    <div className="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-5 py-4">
                            <div className="min-w-0">
                                <h3 className="truncate text-base font-bold text-gray-900">{previewItem.title}</h3>
                                <div className="mt-1.5"><StatusBadge status={previewItem.rawStatus} /></div>
                            </div>
                            <button onClick={() => setPreviewItem(null)} className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-800" aria-label="Close">
                                <Svg d={ICON.x} className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <ChatWallpaper className="min-h-[220px]">
                                <Bubble p={previewItem} expanded />
                            </ChatWallpaper>
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 text-sm">
                                <div className="col-span-2">
                                    <dt className="text-xs text-gray-500">Template name in Meta</dt>
                                    <dd className="font-mono text-[13px] text-gray-800">{previewItem.metaName}</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">Category</dt>
                                    <dd className="text-gray-800">{previewItem.category.charAt(0) + previewItem.category.slice(1).toLowerCase()}</dd>
                                </div>
                                <div>
                                    <dt className="text-xs text-gray-500">Language</dt>
                                    <dd className="text-gray-800">{previewItem.language || "Not set"}</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="flex justify-end gap-2 border-t border-gray-100 px-5 py-3">
                            <button onClick={() => setPreviewItem(null)} className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-200">
                                Close
                            </button>
                            {previewItem.bucket === "APPROVED" && (
                                <button onClick={() => openSend(previewItem)} className="flex items-center gap-2 rounded-xl bg-[#128C7E] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0F7A6E]">
                                    <SendIcon /> {SUPPORT_BULK_SEND ? "Send template" : "Send to customer"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Send modal */}
            {sendItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="flex max-h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                            <div className="min-w-0">
                                <h2 className="text-lg font-bold text-gray-900">
                                    {SUPPORT_BULK_SEND ? "Send template (Bulk)" : "Send template to customer"}
                                </h2>
                                <p className="truncate text-xs text-gray-500">{sendItem.title}</p>
                            </div>
                            <button onClick={() => setSendItem(null)} className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-800" aria-label="Close">
                                <Svg d={ICON.x} className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto md:grid-cols-[320px_1fr] md:overflow-hidden">
                            <ChatWallpaper className="hidden md:block md:overflow-y-auto">
                                <Bubble p={sendItem} expanded />
                            </ChatWallpaper>

                            <div className="flex min-h-0 flex-col p-5">
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-sm font-semibold text-gray-800">
                                        {SUPPORT_BULK_SEND ? (
                                            <>
                                                Recipients <span className="font-normal text-gray-500">({selectedCustomerIds.size} selected)</span>
                                            </>
                                        ) : (
                                            <>
                                                Select customer <span className="font-normal text-gray-500">({selectedCustomerIds.size > 0 ? "1 selected" : "none"})</span>
                                            </>
                                        )}
                                    </label>
                                    {SUPPORT_BULK_SEND && (
                                        <div className="flex items-center gap-3 text-xs font-semibold">
                                            {customers.length > 0 && (
                                                <button onClick={toggleAllLoaded} className="text-[#128C7E] hover:underline">
                                                    {allLoadedSelected ? "Deselect loaded" : "Select loaded"}
                                                </button>
                                            )}
                                            {selectedCustomerIds.size > 0 && (
                                                <button onClick={() => setSelectedCustomerIds(new Set())} className="text-gray-500 hover:text-gray-800">
                                                    Clear
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    <Svg d={ICON.search} className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                        value={custSearch}
                                        onChange={(e) => setCustSearch(e.target.value)}
                                        placeholder="Search by name or phone"
                                        className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20"
                                    />
                                </div>

                                <div className="mt-3 h-[340px] overflow-y-auto rounded-xl border border-gray-200 bg-white p-1.5 md:h-auto md:min-h-0 md:flex-1">
                                    {isLoadingCust && customers.length === 0 ? (
                                        <p className="p-6 text-center text-sm text-gray-400">Loading customers…</p>
                                    ) : customers.length === 0 ? (
                                        <p className="p-6 text-center text-sm text-gray-500">No customers match this search.</p>
                                    ) : (
                                        <>
                                            {customers.map((c) => {
                                                const id = custId(c);
                                                const name = c.customerName || c.Name || "Unknown";
                                                const checked = selectedCustomerIds.has(id);
                                                return (
                                                    <label key={id} className={`flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 transition ${checked ? "bg-emerald-50" : "hover:bg-gray-50"}`}>
                                                        {SUPPORT_BULK_SEND ? (
                                                            <input
                                                                type="checkbox"
                                                                checked={checked}
                                                                onChange={(e) => toggleCustomerSelection(id, e.target.checked)}
                                                                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#25D366] focus:ring-[#25D366] focus:ring-offset-0"
                                                            />
                                                        ) : (
                                                            <input
                                                                type="radio"
                                                                name="singleCustomerSelect"
                                                                checked={checked}
                                                                onChange={() => toggleCustomerSelection(id, true)}
                                                                className="h-4 w-4 cursor-pointer border-gray-300 text-[#128C7E] focus:ring-[#128C7E]"
                                                            />
                                                        )}
                                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold uppercase text-gray-600">
                                                            {name.charAt(0)}
                                                        </span>
                                                        <span className="min-w-0 flex-1">
                                                            <span className="block truncate text-sm font-semibold text-gray-900">{name}</span>
                                                            <span className="block text-xs text-gray-500">{c.ContactNumber}</span>
                                                        </span>
                                                    </label>
                                                );
                                            })}
                                            {hasMoreCust && (
                                                <button
                                                    onClick={() => {
                                                        const next = custPage + 1;
                                                        setCustPage(next);
                                                        loadCustomers(next, custSearch, true);
                                                    }}
                                                    disabled={isLoadingCust}
                                                    className="mt-1 w-full rounded-lg bg-gray-50 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-100"
                                                >
                                                    {isLoadingCust ? "Loading…" : "Load more"}
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 border-t border-gray-100 px-5 py-4">
                            <button onClick={() => setSendItem(null)} className="rounded-xl bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-200">
                                Cancel
                            </button>
                            <button
                                onClick={handleSendTemplate}
                                disabled={isSending || selectedCustomerIds.size === 0}
                                className="rounded-xl bg-[#128C7E] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F7A6E] disabled:opacity-50"
                            >
                                {isSending
                                    ? "Sending…"
                                    : SUPPORT_BULK_SEND
                                        ? `Send to ${selectedCustomerIds.size} recipient${selectedCustomerIds.size === 1 ? "" : "s"}`
                                        : "Send template"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast && (
                <div
                    role="status"
                    className={`fixed bottom-6 right-6 z-[60] max-w-sm rounded-xl px-4 py-3 text-sm font-medium shadow-lg ${toast.type === "success" ? "bg-gray-900 text-white" : "bg-red-600 text-white"
                        }`}
                >
                    {toast.text}
                </div>
            )}
        </div>
    );
}