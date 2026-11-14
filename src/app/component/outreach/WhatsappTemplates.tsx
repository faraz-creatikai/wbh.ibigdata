"use client";

/**
 * WhatsappTemplates — the "Templates" tab of the WhatsApp (Baileys) workspace.
 *
 *   {tab === "templates" && <WhatsappTemplates />}
 *
 * List (search / filters / sort / pages) + view dialog + add/edit form + delete dialog.
 * Uses the same store functions as your whatsapp-templates master pages, and keeps your existing
 * <WhatsappRichFields /> (media, location map, poll, link preview) — only the body editor is new,
 * plus a live WhatsApp preview that updates as you type.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { addWhatsapp, deleteWhatsapp, getWhatsapp, getWhatsappById, updateWhatsapp } from "@/store/masters/whatsapp/whatsapp";
import WhatsappRichFields, {
    buildRichFormData,
    defaultRichData,
    richDataFromTemplate,
    type WhatsappRichData,
} from "@/app/component/datafields/WhatsappRichFields";
import WhatsappMessageEditor, {
    DEFAULT_WA_VARIABLES,
    WA_TEXT_LIMIT,
    WhatsappBubble,
    WhatsappChat,
    defaultFormatVariable,
    extractVariables,
    type WaLinkPreview,
    type WaLocation,
    type WaPoll,
    type WhatsappMessage,
    type WhatsappVariable,
} from "@/app/component/datafields/WhatsappMessageEditor";

/* ───────────────────────── types ───────────────────────── */

type Row = {
    _id: string;
    name: string;
    body?: string;
    status?: string;
    type?: string;
    category?: string | null;
    variables?: string[] | null;
    whatsappMediaType?: string | null;
    whatsappImage?: string[] | string | null;
    whatsappFileName?: string | null;
    whatsappLinkPreview?: WaLinkPreview | null;
    whatsappLocation?: Partial<WaLocation> | null;
    whatsappPoll?: WaPoll | null;
    updatedAt?: string;
    createdAt?: string;
};

export interface WhatsappTemplatesProps {
    variables?: WhatsappVariable[];
    formatVariable?: (key: string) => string;
}

const FILE_TYPES = ["image", "video", "document"];

const TYPE_META: Record<string, { label: string; icon: string; tint: string }> = {
    text: { label: "Text", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", tint: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-[var(--color-txtlight)]" },
    image: { label: "Image", icon: "M3 5h18v14H3zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 15l-5-5L5 19", tint: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300" },
    video: { label: "Video", icon: "m22 8-6 4 6 4zM2 6h14v12H2z", tint: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300" },
    document: { label: "Document", icon: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5", tint: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300" },
    location: { label: "Location", icon: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", tint: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" },
    poll: { label: "Poll", icon: "M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2", tint: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" },
};
const typeOf = (r: { whatsappMediaType?: string | null }) => (r.whatsappMediaType && TYPE_META[r.whatsappMediaType] ? r.whatsappMediaType : "text");

/* ───────────────────────── data → message helpers ───────────────────────── */

const firstUrl = (img: Row["whatsappImage"]): string | null => {
    if (Array.isArray(img)) return img[0] ?? null;
    if (typeof img === "string" && img) {
        try {
            const p = JSON.parse(img);
            return Array.isArray(p) ? p[0] ?? null : img;
        } catch {
            return img;
        }
    }
    return null;
};

const normLocation = (l?: Partial<WaLocation> | null): WaLocation | null =>
    l && l.lat != null && l.lng != null && Number.isFinite(Number(l.lat)) && Number.isFinite(Number(l.lng))
        ? { lat: Number(l.lat), lng: Number(l.lng), name: l.name, address: l.address }
        : null;

const normPoll = (p?: WaPoll | null): WaPoll | null => (p && typeof p === "object" && Array.isArray(p.options) ? p : null);

const rowToMessage = (r: Row): WhatsappMessage => ({
    text: r.body ?? "",
    mediaType: typeOf(r),
    mediaUrl: FILE_TYPES.includes(typeOf(r)) ? firstUrl(r.whatsappImage) : null,
    fileName: r.whatsappFileName ?? undefined,
    linkPreview: r.whatsappLinkPreview && typeof r.whatsappLinkPreview === "object" ? r.whatsappLinkPreview : null,
    location: normLocation(r.whatsappLocation),
    poll: normPoll(r.whatsappPoll),
});

/** Builds the live preview from the exact FormData your save would send, so preview and result can't drift. */
function formToMessage(body: string, rich: WhatsappRichData, fd: FormData, previewUrl: string | null, file: File | null): WhatsappMessage {
    const str = (k: string) => {
        const v = fd.get(k);
        return typeof v === "string" ? v : "";
    };
    const json = <T,>(k: string): T | null => {
        const s = str(k);
        if (!s) return null;
        try {
            return JSON.parse(s) as T;
        } catch {
            return null;
        }
    };
    const anyRich = rich as unknown as Record<string, unknown>;
    const mediaType = String(anyRich.whatsappMediaType || str("whatsappMediaType") || "text");
    const fromJson = normLocation(json<Partial<WaLocation>>("whatsappLocation"));
    const lat = Number(anyRich.locationLat);
    const lng = Number(anyRich.locationLng);
    return {
        text: body,
        mediaType,
        mediaUrl: FILE_TYPES.includes(mediaType) ? previewUrl : null,
        fileName: str("whatsappFileName") || file?.name,
        linkPreview: json<WaLinkPreview>("whatsappLinkPreview"),
        location: fromJson ?? (anyRich.locationLat && anyRich.locationLng && Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null),
        poll: normPoll(json<WaPoll>("whatsappPoll")),
    };
}

/* ───────────────────────── shared styles ───────────────────────── */

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[var(--color-bgdark)] ";
const panel = "rounded-xl border border-slate-200 bg-white dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]";
const hairline = "border-slate-200 dark:border-[var(--color-childbgdark)]";
const txt = "text-slate-900 dark:text-[var(--color-txtlight)]";
const muted = "text-slate-500 dark:text-[var(--color-txtlight)]/60";
const btnBase = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ";
const btnPrimary = btnBase + "bg-[#128C7E] text-white hover:bg-[#0F7A6E] " + ring;
const btnSecondary = btnBase + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-[var(--color-childbgdark)] dark:bg-transparent dark:text-[var(--color-txtlight)] dark:hover:bg-[var(--color-childbgdark)] " + ring;
const btnOutline = btnBase + "border border-[#128C7E] bg-transparent text-[#128C7E] hover:bg-[#E7F7EE] dark:text-[#25D366] dark:hover:bg-[#128C7E]/20 " + ring;
const btnDanger = btnBase + "bg-[var(--color-destructive)] text-white hover:opacity-90 " + ring;
const inputCls =
    "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E]/25 " +
    "dark:bg-transparent dark:text-[var(--color-txtlight)] disabled:bg-slate-50 disabled:text-slate-500";
const segWrap = "flex rounded-lg border border-slate-300 bg-slate-50 p-0.5 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-childbgdark)]/50";
const segOn = "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)] dark:ring-transparent";
const segOff = "text-slate-600 hover:text-slate-900 dark:text-[var(--color-txtlight)]/70 dark:hover:text-[var(--color-txtlight)]";

const ICON = {
    plus: "M12 5v14M5 12h14",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3",
    eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    edit: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z",
    trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6",
    x: "M18 6 6 18M6 6l12 12",
    back: "M19 12H5M12 19l-7-7 7-7",
    warn: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
    chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
    braces: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
};

const Icon = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

const Spinner = () => (
    <svg className="h-4 w-4 animate-spin motion-reduce:animate-none" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const Banner = ({ tone, title, children, onClose }: { tone: "success" | "error" | "warn" | "info"; title?: string; children?: ReactNode; onClose?: () => void }) => {
    const styles = {
        success: "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",
        warn: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
        info: "border-[#128C7E]/30 bg-[#E7F7EE] text-[#075E54] dark:bg-[#128C7E]/15 dark:text-[#25D366]",
    }[tone];
    return (
        <div role={tone === "error" ? "alert" : "status"} className={cx("flex items-start justify-between gap-3 rounded-lg border px-4 py-3 text-sm", styles)}>
            <div className="min-w-0">
                {title && <p className="font-medium">{title}</p>}
                {children && <div className={cx(title && "mt-1", "leading-relaxed")}>{children}</div>}
            </div>
            {onClose && (
                <button type="button" aria-label="Dismiss" onClick={onClose} className={cx("shrink-0 rounded p-0.5 cursor-pointer hover:bg-black/5", ring)}>
                    <Icon d={ICON.x} />
                </button>
            )}
        </div>
    );
};

const formatDate = (iso?: string) => (iso ? new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "");

function StatusPill({ status }: { status?: string }) {
    const active = (status ?? "Active") === "Active";
    return (
        <span className={cx("inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", active ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-[var(--color-txtlight)]/70")}>
            <span className={cx("h-1.5 w-1.5 rounded-full", active ? "bg-emerald-500" : "bg-slate-400")} />
            {active ? "Active" : "Inactive"}
        </span>
    );
}

function TypeChip({ type }: { type: string }) {
    const m = TYPE_META[type] ?? TYPE_META.text;
    return (
        <span className={cx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", m.tint)}>
            <Icon d={m.icon} className="h-3.5 w-3.5" />
            {m.label}
        </span>
    );
}

/* ───────────────────────── modal shell (focus trap, Esc, scroll lock) ───────────────────────── */

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Modal({
    children, onClose, locked = false, role = "dialog", labelledBy, describedBy, widthClass = "max-w-md", panelClass,
}: {
    children: ReactNode;
    onClose: () => void;
    locked?: boolean;
    role?: "dialog" | "alertdialog";
    labelledBy: string;
    describedBy?: string;
    widthClass?: string;
    panelClass?: string;
}) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef(onClose);
    const lockedRef = useRef(locked);
    closeRef.current = onClose;
    lockedRef.current = locked;

    useEffect(() => {
        const trigger = document.activeElement as HTMLElement | null;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const el = panelRef.current;
        (el?.querySelector<HTMLElement>("[data-autofocus]") ?? el?.querySelector<HTMLElement>(FOCUSABLE))?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !lockedRef.current) {
                e.preventDefault();
                closeRef.current();
                return;
            }
            if (e.key !== "Tab" || !el) return;
            const els = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((x) => x.offsetParent !== null);
            if (!els.length) return;
            const first = els[0];
            const last = els[els.length - 1];
            const active = document.activeElement;
            if (e.shiftKey && (active === first || !el.contains(active))) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && (active === last || !el.contains(active))) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            trigger?.focus?.();
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/50" onMouseDown={() => !lockedRef.current && closeRef.current()} aria-hidden="true" />
            <div
                ref={panelRef}
                role={role}
                aria-modal="true"
                aria-labelledby={labelledBy}
                aria-describedby={describedBy}
                className={cx("relative flex max-h-full w-full flex-col rounded-2xl bg-white shadow-xl dark:bg-[var(--color-bgdark)]", widthClass, panelClass)}
            >
                {children}
            </div>
        </div>
    );
}

function ConfirmDialog({
    title, children, confirmLabel, busyLabel, cancelLabel, busy = false, tone = "danger", error, onConfirm, onCancel,
}: {
    title: string;
    children: ReactNode;
    confirmLabel: string;
    busyLabel?: string;
    cancelLabel: string;
    busy?: boolean;
    tone?: "danger" | "neutral";
    error?: string | null;
    onConfirm: () => void;
    onCancel: () => void;
}) {
    const danger = tone === "danger";
    return (
        <Modal role="alertdialog" labelledBy="wa-confirm-title" describedBy="wa-confirm-desc" onClose={onCancel} locked={busy}>
            <div className="p-6">
                <div className="flex gap-4">
                    <span className={cx("flex h-11 w-11 shrink-0 items-center justify-center rounded-full", danger ? "bg-red-50 text-[var(--color-destructive)] dark:bg-red-500/15" : "bg-amber-50 text-amber-600 dark:bg-amber-500/15")}>
                        <Icon d={danger ? ICON.trash : ICON.warn} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                        <h2 id="wa-confirm-title" className={cx("text-lg font-semibold", txt)}>{title}</h2>
                        <div id="wa-confirm-desc" className={cx("mt-2 space-y-2 text-sm leading-relaxed", muted)}>{children}</div>
                    </div>
                </div>
                {error && <div className="mt-4"><Banner tone="error">{error}</Banner></div>}
                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    <button type="button" data-autofocus className={btnSecondary} onClick={onCancel} disabled={busy}>{cancelLabel}</button>
                    <button type="button" className={danger ? btnDanger : btnPrimary} onClick={onConfirm} disabled={busy}>
                        {busy && <Spinner />}
                        {busy ? busyLabel ?? "Working…" : confirmLabel}
                    </button>
                </div>
            </div>
        </Modal>
    );
}

/* ───────────────────────── card ───────────────────────── */

function TemplateCard({
    row, variables, formatVariable, onView, onEdit, onDelete,
}: {
    row: Row;
    variables: WhatsappVariable[];
    formatVariable: (k: string) => string;
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const vars = Array.isArray(row.variables) ? row.variables.length : 0;
    return (
        <article className={cx("group flex flex-col overflow-hidden transition-shadow hover:shadow-md motion-reduce:transition-none", panel)}>
            <button type="button" onClick={onView} aria-label={`Preview ${row.name}`} className={cx("relative block h-56 w-full overflow-hidden bg-[#efeae2] text-left cursor-pointer dark:bg-[#0b141a]", ring)}
                style={{ backgroundImage: "radial-gradient(rgba(11,20,26,.06) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
                <div className="pointer-events-none flex justify-end p-3 pr-4">
                    <WhatsappBubble message={rowToMessage(row)} variables={variables} formatVariable={formatVariable} sample />
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#efeae2] to-transparent dark:from-[#0b141a]" />
                <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition group-hover:bg-slate-900/25 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow"><Icon d={ICON.eye} /> Preview</span>
                </span>
            </button>

            <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className={cx("min-w-0 truncate text-base font-semibold", txt)} title={row.name}>{row.name}</h3>
                        <StatusPill status={row.status} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <TypeChip type={typeOf(row)} />
                        {row.category && <span className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600 dark:border-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)]/70">{row.category}</span>}
                        {vars > 0 && (
                            <span className={cx("inline-flex items-center gap-1 text-xs", muted)} title={(row.variables ?? []).join(", ")}>
                                <Icon d={ICON.braces} className="h-3.5 w-3.5" /> {vars} variable{vars === 1 ? "" : "s"}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2">
                    <span className={cx("inline-flex items-center gap-1.5 text-xs", muted)}>
                        {row.updatedAt && <><Icon d={ICON.clock} className="h-3.5 w-3.5" />{formatDate(row.updatedAt)}</>}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <button type="button" className={cx(btnOutline, "!px-3 !py-1.5")} onClick={onView}><Icon d={ICON.eye} /> View</button>
                        <button type="button" aria-label={`Edit ${row.name}`} title="Edit" onClick={onEdit} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-50 dark:border-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)] dark:hover:bg-[var(--color-childbgdark)]", ring)}>
                            <Icon d={ICON.edit} />
                        </button>
                        <button type="button" aria-label={`Delete ${row.name}`} title="Delete" onClick={onDelete} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 cursor-pointer hover:bg-red-50 dark:border-red-500/30 dark:hover:bg-red-500/10", ring)}>
                            <Icon d={ICON.trash} />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

function CardSkeleton() {
    return (
        <div className={cx("overflow-hidden", panel)} aria-hidden="true">
            <div className="h-56 animate-pulse bg-slate-100 motion-reduce:animate-none dark:bg-[var(--color-childbgdark)]" />
            <div className="space-y-3 p-4">
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100 motion-reduce:animate-none dark:bg-[var(--color-childbgdark)]" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100 motion-reduce:animate-none dark:bg-[var(--color-childbgdark)]" />
                <div className="h-9 w-full animate-pulse rounded bg-slate-100 motion-reduce:animate-none dark:bg-[var(--color-childbgdark)]" />
            </div>
        </div>
    );
}

/* ───────────────────────── view dialog ───────────────────────── */

function PreviewDialog({
    row, variables, formatVariable, onClose, onEdit, onDelete,
}: {
    row: Row;
    variables: WhatsappVariable[];
    formatVariable: (k: string) => string;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const [full, setFull] = useState<Row>(row);
    const [loading, setLoading] = useState(row.body === undefined);
    const [failed, setFailed] = useState(false);
    const [sample, setSample] = useState(true);

    useEffect(() => {
        if (row.body !== undefined) return;
        let alive = true;
        (async () => {
            try {
                const d = (await getWhatsappById(row._id)) as unknown as Partial<Row> | null;
                if (!alive) return;
                if (d) setFull({ ...row, ...d, _id: row._id });
                else setFailed(true);
            } catch {
                if (alive) setFailed(true);
            } finally {
                if (alive) setLoading(false);
            }
        })();
        return () => {
            alive = false;
        };
    }, [row]);

    const used = extractVariables(full.body ?? "");
    const details: [string, ReactNode][] = [
        ["Message type", <TypeChip key="t" type={typeOf(full)} />],
        ["Category", full.category || "—"],
        ["Characters", `${Array.from(full.body ?? "").length.toLocaleString()} / ${WA_TEXT_LIMIT.toLocaleString()}`],
        ["Created", formatDate(full.createdAt) || "—"],
        ["Updated", formatDate(full.updatedAt) || "—"],
    ];

    return (
        <Modal labelledBy="wa-view-title" onClose={onClose} widthClass="max-w-4xl" panelClass="h-[90vh]">
            <div className={cx("flex items-start justify-between gap-4 border-b px-5 py-4", hairline)}>
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 id="wa-view-title" className={cx("truncate text-lg font-semibold", txt)}>{full.name}</h2>
                        <StatusPill status={full.status} />
                    </div>
                </div>
                <button type="button" aria-label="Close preview" onClick={onClose} className={cx("rounded-lg p-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-[var(--color-childbgdark)]", muted, ring)}>
                    <Icon d={ICON.x} className="h-5 w-5" />
                </button>
            </div>

            <div className="grid min-h-0 flex-1 gap-0 overflow-auto lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="flex flex-col bg-slate-100 p-4 dark:bg-[var(--color-childbgdark)]/40 sm:p-6">
                    <label className={cx("mb-3 flex w-fit cursor-pointer items-center gap-2 text-sm", txt)}>
                        <input type="checkbox" checked={sample} onChange={(e) => setSample(e.target.checked)} className="h-4 w-4 accent-[#128C7E]" />
                        Sample data
                    </label>
                    {loading ? (
                        <div className={cx("flex items-center justify-center gap-3 py-24 text-sm", muted)}><Spinner /> Loading template…</div>
                    ) : failed ? (
                        <div className="mx-auto max-w-md py-16"><Banner tone="error" title="Couldn't load this template">Close this window and try again.</Banner></div>
                    ) : (
                        <WhatsappChat title="Customer" className="mx-auto w-full max-w-md" bodyClassName="min-h-[320px] items-start">
                            <WhatsappBubble message={rowToMessage(full)} variables={variables} formatVariable={formatVariable} sample={sample} interactive />
                        </WhatsappChat>
                    )}
                </div>

                <aside className={cx("space-y-5 border-t p-5 lg:border-l lg:border-t-0", hairline)}>
                    <dl className="space-y-3 text-sm">
                        {details.map(([k, v]) => (
                            <div key={k} className="flex items-center justify-between gap-3">
                                <dt className={muted}>{k}</dt>
                                <dd className={cx("text-right font-medium", txt)}>{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <div>
                        <p className={cx("mb-2 text-sm", muted)}>Variables in this message</p>
                        {used.length ? (
                            <div className="flex flex-wrap gap-1.5">
                                {used.map((k) => (
                                    <span key={k} className="rounded-full bg-[#E7F7EE] px-2.5 py-0.5 text-xs font-medium text-[#075E54] dark:bg-[#128C7E]/25 dark:text-[#25D366]">{k}</span>
                                ))}
                            </div>
                        ) : (
                            <p className={cx("text-sm", muted)}>None. Everyone gets the same message.</p>
                        )}
                    </div>
                </aside>
            </div>

            <div className={cx("flex flex-col-reverse gap-2 border-t px-5 py-4 sm:flex-row sm:items-center sm:justify-between", hairline)}>
                <button type="button" className={cx(btnBase, "border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-500/30 dark:hover:bg-red-500/10", ring)} onClick={onDelete}>
                    <Icon d={ICON.trash} /> Delete
                </button>
                <div className="flex flex-col-reverse gap-2 sm:flex-row">
                    <button type="button" className={btnSecondary} onClick={onClose}>Close</button>
                    <button type="button" className={btnPrimary} onClick={onEdit}><Icon d={ICON.edit} /> Edit template</button>
                </div>
            </div>
        </Modal>
    );
}

/* ───────────────────────── add / edit form ───────────────────────── */

const entriesOf = (fd: FormData) => Array.from(fd.entries()).map(([k, v]) => [k, typeof v === "string" ? v : `file:${v.name}:${v.size}`]);

function TemplateForm({
    id, variables, formatVariable, onCancel, onSaved,
}: {
    id: string | null;
    variables: WhatsappVariable[];
    formatVariable: (k: string) => string;
    onCancel: () => void;
    onSaved: (kind: "created" | "updated", name: string) => void;
}) {
    const isEdit = id !== null;
    const [name, setName] = useState("");
    const [status, setStatus] = useState<"Active" | "Inactive">("Active");
    const [body, setBody] = useState("");
    const [rich, setRich] = useState<WhatsappRichData>(defaultRichData);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const hadImage = useRef(false);

    const [loading, setLoading] = useState(isEdit);
    const [loaded, setLoaded] = useState(!isEdit);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ name?: string; body?: string; rich?: string }>({});
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [confirmDiscard, setConfirmDiscard] = useState(false);
    const [sample, setSample] = useState(true);
    const [baseline, setBaseline] = useState<string | null>(null);

    useEffect(() => {
        if (!isEdit) return;
        let alive = true;
        (async () => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const d = (await getWhatsappById(id!)) as any;
                if (!alive) return;
                if (!d) return setLoadError("We couldn't find this template. It may have been deleted.");
                setName(d.name ?? "");
                setStatus(d.status === "Inactive" ? "Inactive" : "Active");
                setBody(d.body ?? "");
                setRich(richDataFromTemplate(d));
                const url = firstUrl(d.whatsappImage);
                hadImage.current = !!url;
                setPreview(url);
                setLoaded(true);
            } catch {
                if (alive) setLoadError("Something went wrong while loading this template.");
            } finally {
                if (alive) setLoading(false);
            }
        })();
        return () => {
            alive = false;
        };
    }, [id, isEdit]);

    /* what your save would send for the media / location / poll / link-preview part */
    const richFd = useMemo(() => {
        const fd = new FormData();
        try {
            buildRichFormData(fd, rich);
        } catch {
            /* a half-filled field must never break typing */
        }
        return fd;
    }, [rich]);

    const message = useMemo(() => formToMessage(body, rich, richFd, preview, file), [body, rich, richFd, preview, file]);
    const mediaType = message.mediaType || "text";
    const isFileType = FILE_TYPES.includes(mediaType);

    const snapshot = JSON.stringify([name, status, body, entriesOf(richFd), file ? `${file.name}:${file.size}` : null, !!preview]);
    useEffect(() => {
        if (baseline === null && loaded) setBaseline(snapshot);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loaded]);
    const dirty = baseline !== null && snapshot !== baseline;

    const onMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (!f) return;
        setFile(f);
        setPreview(URL.createObjectURL(f));
        setErrors((p) => ({ ...p, rich: undefined }));
    };
    const onRemoveMedia = () => {
        setFile(null);
        setPreview(null);
    };

    const validate = () => {
        const e: { name?: string; body?: string; rich?: string } = {};
        if (!name.trim()) e.name = "Give the template a name";
        if (!body.trim()) e.body = "Write the message";
        else if (Array.from(body).length > WA_TEXT_LIMIT) e.body = `Messages can be up to ${WA_TEXT_LIMIT.toLocaleString()} characters`;
        if (isFileType && !file && !preview) e.rich = `Add the ${mediaType} to send, or change the message type to Text.`;
        if (mediaType === "location" && !message.location) e.rich = "Pick a location on the map before saving.";
        if (mediaType === "poll") {
            const opts = (message.poll?.options ?? []).filter((o) => o && o.trim());
            if (!message.poll?.name?.trim() || opts.length < 2) e.rich = "A poll needs a question and at least two options.";
        }
        return e;
    };

    const save = async () => {
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) return;
        setSaving(true);
        setSaveError(null);
        try {
            const fd = new FormData();
            fd.append("name", name.trim());
            fd.append("status", status);
            fd.append("body", body);
            fd.append("type", "whatsapp");
            if (file && isFileType) fd.append("whatsappImage", file);
            if (isEdit && !file && hadImage.current && (!preview || !isFileType)) fd.append("removeImage", "true");
            buildRichFormData(fd, rich);
            if (!fd.has("variables")) fd.append("variables", JSON.stringify(extractVariables(body)));

            const res = isEdit ? await updateWhatsapp(id!, fd) : await addWhatsapp(fd);
            if (res) onSaved(isEdit ? "updated" : "created", name.trim());
            else setSaveError("We couldn't save this template. Template names must be unique, so check that no other template (WhatsApp or email) already uses this name.");
        } catch {
            setSaveError("Something went wrong while saving. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const back = () => (dirty && !saving ? setConfirmDiscard(true) : onCancel());

    if (loading) return <div className={cx("flex items-center gap-3 p-6 text-sm", panel, muted)}><Spinner /> Loading template…</div>;
    if (loadError) {
        return (
            <div className="space-y-3">
                <Banner tone="error" title="Couldn't open this template">{loadError}</Banner>
                <button type="button" className={btnSecondary} onClick={onCancel}><Icon d={ICON.back} /> Back to templates</button>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <button type="button" aria-label="Back to templates" onClick={back} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 cursor-pointer hover:bg-slate-50 dark:border-[var(--color-childbgdark)] dark:hover:bg-[var(--color-childbgdark)]", txt, ring)}>
                        <Icon d={ICON.back} />
                    </button>
                    <div>
                        <h2 className={cx("text-lg font-semibold", txt)}>{isEdit ? "Edit WhatsApp template" : "New WhatsApp template"}</h2>
                        <p className={cx("text-sm", muted)}>{isEdit ? "Changes apply to campaigns that use this template." : "Write it once, reuse it in any campaign."}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button type="button" className={btnSecondary} onClick={back} disabled={saving}>Cancel</button>
                    <button type="button" className={btnPrimary} onClick={save} disabled={saving}>
                        {saving && <Spinner />}
                        {saving ? "Saving…" : isEdit ? "Save changes" : "Create template"}
                    </button>
                </div>
            </div>

            {saveError && <Banner tone="error" title="Template not saved" onClose={() => setSaveError(null)}>{saveError}</Banner>}

            <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
                <div className="min-w-0 space-y-5">
                    <section className={cx("p-5", panel)}>
                        <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                            <div>
                                <label htmlFor="wa-name" className={cx("mb-1.5 block text-sm font-medium", txt)}>Template name</label>
                                <input
                                    id="wa-name"
                                    className={cx(inputCls, errors.name ? "border-red-400" : "border-slate-300 dark:border-[var(--color-childbgdark)]")}
                                    placeholder="e.g. Order confirmed"
                                    value={name}
                                    maxLength={120}
                                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); setSaveError(null); }}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "wa-name-err" : undefined}
                                />
                                {errors.name && <p id="wa-name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                            </div>
                            <fieldset>
                                <legend className={cx("mb-1.5 text-sm font-medium", txt)}>Status</legend>
                                <div className={segWrap}>
                                    {(["Active", "Inactive"] as const).map((s) => (
                                        <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={cx("rounded-md px-4 py-2 text-sm font-medium cursor-pointer", status === s ? segOn : segOff, ring)}>{s}</button>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </section>

                    <section>
                        <label htmlFor="wa-body" className={cx("mb-1.5 block text-sm font-medium", txt)}>Message</label>
                        <WhatsappMessageEditor
                            id="wa-body"
                            value={body}
                            onChange={(t) => { setBody(t); setErrors((p) => ({ ...p, body: undefined })); setSaveError(null); }}
                            variables={variables}
                            formatVariable={formatVariable}
                            invalid={!!errors.body}
                            aria-describedby={errors.body ? "wa-body-err" : undefined}
                        />
                        {errors.body && <p id="wa-body-err" className="mt-1.5 text-sm text-red-600" role="alert">{errors.body}</p>}
                    </section>

                    <section className={cx("p-5", panel)}>
                        <h3 className={cx("text-base font-semibold", txt)}>Media and extras</h3>
                        <p className={cx("mb-4 mt-0.5 text-sm", muted)}>Attach an image, video or document, share a location, or send a poll. Your message above becomes its caption.</p>
                        {errors.rich && <div className="mb-4"><Banner tone="error">{errors.rich}</Banner></div>}
                        <WhatsappRichFields
                            rich={rich}
                            setRich={(v: React.SetStateAction<WhatsappRichData>) => { setRich(v); setErrors((p) => ({ ...p, rich: undefined })); }}
                            mediaFile={file}
                            mediaPreview={preview}
                            onMediaChange={onMediaChange}
                            onRemoveMedia={onRemoveMedia}
                        />
                    </section>
                </div>

                <aside className={cx("p-4 xl:sticky xl:top-4", panel)} aria-label="Live preview">
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className={cx("text-sm font-semibold", txt)}>Live preview</h3>
                        <label className={cx("flex cursor-pointer items-center gap-2 text-xs", muted)}>
                            <input type="checkbox" checked={sample} onChange={(e) => setSample(e.target.checked)} className="h-3.5 w-3.5 accent-[#128C7E]" />
                            Sample data
                        </label>
                    </div>
                    <WhatsappChat title="Customer" bodyClassName="min-h-[280px] items-start">
                        <WhatsappBubble message={message} variables={variables} formatVariable={formatVariable} sample={sample} interactive />
                    </WhatsappChat>
                    <p className={cx("mt-3 text-xs leading-relaxed", muted)}>Shown the way WhatsApp displays it. Real messages use each customer’s own details.</p>
                </aside>
            </div>

            <div className="flex justify-end gap-2">
                <button type="button" className={btnSecondary} onClick={back} disabled={saving}>Cancel</button>
                <button type="button" className={btnPrimary} onClick={save} disabled={saving}>
                    {saving && <Spinner />}
                    {saving ? "Saving…" : isEdit ? "Save changes" : "Create template"}
                </button>
            </div>

            {confirmDiscard && (
                <ConfirmDialog
                    tone="neutral"
                    title="Discard your changes?"
                    confirmLabel="Discard changes"
                    cancelLabel="Keep editing"
                    onConfirm={() => { setConfirmDiscard(false); onCancel(); }}
                    onCancel={() => setConfirmDiscard(false)}
                >
                    <p>You have unsaved changes to this template. If you leave now, they’ll be lost.</p>
                </ConfirmDialog>
            )}
        </div>
    );
}

/* ───────────────────────── main tab ───────────────────────── */

const PAGE_SIZE = 9;
type StatusFilter = "All" | "Active" | "Inactive";

export default function WhatsappTemplates({ variables = DEFAULT_WA_VARIABLES, formatVariable = defaultFormatVariable }: WhatsappTemplatesProps) {
    const [rows, setRows] = useState<Row[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [screen, setScreen] = useState<{ kind: "list" } | { kind: "form"; id: string | null }>({ kind: "list" });
    const [q, setQ] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
    const [typeFilter, setTypeFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [sort, setSort] = useState<"updated" | "name">("updated");
    const [page, setPage] = useState(1);

    const [preview, setPreview] = useState<Row | null>(null);
    const [toDelete, setToDelete] = useState<{ row: Row; from: "card" | "preview" } | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [notice, setNotice] = useState<{ tone: "success" | "error"; text: string } | null>(null);
    const topRef = useRef<HTMLDivElement>(null);

    const load = useCallback(async (silent = false) => {
        if (!silent) setLoading(true);
        setLoadError(null);
        try {
            const data = (await getWhatsapp()) as unknown as Row[] | null | undefined;
            if (!Array.isArray(data)) setLoadError("We couldn't load your templates. Check your connection and try again.");
            else setRows(data.filter((r) => String(r.type ?? "whatsapp").toLowerCase() === "whatsapp"));
        } catch {
            setLoadError("We couldn't load your templates. Check your connection and try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    useEffect(() => {
        if (!notice) return;
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        const t = setTimeout(() => setNotice(null), 7000);
        return () => clearTimeout(t);
    }, [notice]);

    const counts = useMemo(() => {
        const active = rows.filter((r) => (r.status ?? "Active") === "Active").length;
        return { All: rows.length, Active: active, Inactive: rows.length - active };
    }, [rows]);

    const categories = useMemo(() => Array.from(new Set(rows.map((r) => (r.category ?? "").trim()).filter(Boolean))).sort(), [rows]);

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        const list = rows.filter((r) => {
            if (statusFilter !== "All" && (r.status ?? "Active") !== statusFilter) return false;
            if (typeFilter !== "all" && typeOf(r) !== typeFilter) return false;
            if (categoryFilter !== "all" && (r.category ?? "") !== categoryFilter) return false;
            if (!term) return true;
            return r.name.toLowerCase().includes(term) || (r.body ?? "").toLowerCase().includes(term) || (r.category ?? "").toLowerCase().includes(term);
        });
        return [...list].sort((a, b) =>
            sort === "name"
                ? a.name.localeCompare(b.name)
                : new Date(b.updatedAt ?? b.createdAt ?? 0).getTime() - new Date(a.updatedAt ?? a.createdAt ?? 0).getTime()
        );
    }, [rows, q, statusFilter, typeFilter, categoryFilter, sort]);

    useEffect(() => setPage(1), [q, statusFilter, typeFilter, categoryFilter, sort]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const current = Math.min(page, totalPages);
    const pageRows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
    const hasFilters = q.trim() !== "" || statusFilter !== "All" || typeFilter !== "all" || categoryFilter !== "all";

    const openForm = (id: string | null) => {
        setPreview(null);
        setNotice(null);
        setScreen({ kind: "form", id });
    };

    const confirmDelete = async () => {
        if (!toDelete) return;
        setDeleting(true);
        setDeleteError(null);
        try {
            const ok = await deleteWhatsapp(toDelete.row._id);
            if (ok) {
                setRows((r) => r.filter((x) => x._id !== toDelete.row._id));
                setNotice({ tone: "success", text: `Template “${toDelete.row.name}” was deleted.` });
                setToDelete(null);
                setPreview(null);
            } else {
                setDeleteError("The template wasn't deleted. If it's used by a campaign, remove it from that campaign first, then try again.");
            }
        } catch {
            setDeleteError("Something went wrong while deleting. Please try again.");
        } finally {
            setDeleting(false);
        }
    };

    const cancelDelete = () => {
        if (deleting) return;
        if (toDelete?.from === "preview") setPreview(toDelete.row);
        setToDelete(null);
        setDeleteError(null);
    };

    if (screen.kind === "form") {
        return (
            <div ref={topRef}>
                <TemplateForm
                    key={screen.id ?? "new"}
                    id={screen.id}
                    variables={variables}
                    formatVariable={formatVariable}
                    onCancel={() => setScreen({ kind: "list" })}
                    onSaved={(kind, name) => {
                        setScreen({ kind: "list" });
                        setNotice({ tone: "success", text: `Template “${name}” was ${kind}.` });
                        load(true);
                    }}
                />
            </div>
        );
    }

    const selectCls = cx("h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm cursor-pointer focus:border-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E]/25 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]", txt);

    return (
        <section ref={topRef} className="space-y-5 scroll-mt-4" aria-label="WhatsApp templates">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h2 className={cx("text-lg font-semibold", txt)}>WhatsApp templates</h2>
                    <p className={cx("text-sm", muted)}>Reusable messages you can pick when you create a campaign.</p>
                </div>
                <button type="button" className={btnPrimary} onClick={() => openForm(null)}><Icon d={ICON.plus} /> New template</button>
            </div>

            {notice && <Banner tone={notice.tone} onClose={() => setNotice(null)}>{notice.text}</Banner>}

            {loadError && (
                <div className="space-y-3">
                    <Banner tone="error" title="Couldn't load templates">{loadError}</Banner>
                    <button type="button" className={btnSecondary} onClick={() => load()}>Try again</button>
                </div>
            )}

            {!loadError && (loading || rows.length > 0) && (
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div role="group" aria-label="Filter by status" className={segWrap}>
                            {(["All", "Active", "Inactive"] as const).map((s) => (
                                <button key={s} type="button" aria-pressed={statusFilter === s} onClick={() => setStatusFilter(s)} className={cx("rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer", statusFilter === s ? segOn : segOff, ring)}>
                                    {s} <span className="ml-0.5 opacity-50">{counts[s]}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
                            <div className="relative w-full sm:max-w-xs">
                                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400"><Icon d={ICON.search} /></span>
                                <input type="search" aria-label="Search templates" placeholder="Search name, message or category" value={q} onChange={(e) => setQ(e.target.value)} className={cx(inputCls, "border-slate-300 !py-2 pl-9 dark:border-[var(--color-childbgdark)]")} />
                            </div>
                            <select aria-label="Message type" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectCls}>
                                <option value="all">All types</option>
                                {Object.entries(TYPE_META).map(([k, m]) => <option key={k} value={k}>{m.label}</option>)}
                            </select>
                            {categories.length > 0 && (
                                <select aria-label="Category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className={selectCls}>
                                    <option value="all">All categories</option>
                                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                            )}
                            <select aria-label="Sort templates" value={sort} onChange={(e) => setSort(e.target.value as "updated" | "name")} className={selectCls}>
                                <option value="updated">Recently updated</option>
                                <option value="name">Name A–Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" role="status" aria-label="Loading templates">
                    {Array.from({ length: 6 }, (_, i) => <CardSkeleton key={i} />)}
                </div>
            )}

            {!loading && !loadError && rows.length === 0 && (
                <div className={cx("flex flex-col items-center border-dashed px-6 py-16 text-center", panel, "border-slate-300")}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F7EE] text-[#128C7E] dark:bg-[#128C7E]/25"><Icon d={ICON.chat} className="h-7 w-7" /></span>
                    <h3 className={cx("mt-4 text-base font-semibold", txt)}>No WhatsApp templates yet</h3>
                    <p className={cx("mt-1 max-w-sm text-sm", muted)}>Create a template once, then pick it whenever you set up a WhatsApp campaign.</p>
                    <button type="button" className={cx(btnPrimary, "mt-5")} onClick={() => openForm(null)}><Icon d={ICON.plus} /> Create your first template</button>
                </div>
            )}

            {!loading && !loadError && rows.length > 0 && filtered.length === 0 && (
                <div className={cx("border-dashed px-6 py-14 text-center", panel, "border-slate-300")}>
                    <p className={cx("text-sm font-medium", txt)}>No templates match your filters</p>
                    <p className={cx("mt-1 text-sm", muted)}>Try a different word, or clear the filters.</p>
                    {hasFilters && <button type="button" className={cx(btnSecondary, "mt-4")} onClick={() => { setQ(""); setStatusFilter("All"); setTypeFilter("all"); setCategoryFilter("all"); }}>Clear filters</button>}
                </div>
            )}

            {!loading && pageRows.length > 0 && (
                <>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {pageRows.map((r) => (
                            <TemplateCard
                                key={r._id}
                                row={r}
                                variables={variables}
                                formatVariable={formatVariable}
                                onView={() => setPreview(r)}
                                onEdit={() => openForm(r._id)}
                                onDelete={() => { setDeleteError(null); setToDelete({ row: r, from: "card" }); }}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center justify-between gap-3 pt-1">
                            <p className={cx("text-sm", muted)}>Showing {(current - 1) * PAGE_SIZE + 1}–{Math.min(current * PAGE_SIZE, filtered.length)} of {filtered.length}</p>
                            <div className="flex items-center gap-2">
                                <button type="button" className={cx(btnSecondary, "!py-1.5")} onClick={() => setPage(current - 1)} disabled={current === 1}>Previous</button>
                                <span className={cx("px-1 text-sm", muted)}>Page {current} of {totalPages}</span>
                                <button type="button" className={cx(btnSecondary, "!py-1.5")} onClick={() => setPage(current + 1)} disabled={current === totalPages}>Next</button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {preview && (
                <PreviewDialog
                    row={preview}
                    variables={variables}
                    formatVariable={formatVariable}
                    onClose={() => setPreview(null)}
                    onEdit={() => openForm(preview._id)}
                    onDelete={() => {
                        setDeleteError(null);
                        setToDelete({ row: preview, from: "preview" });
                        setPreview(null);
                    }}
                />
            )}

            {toDelete && (
                <ConfirmDialog
                    title="Delete this template?"
                    confirmLabel="Delete template"
                    busyLabel="Deleting…"
                    cancelLabel="Keep template"
                    busy={deleting}
                    error={deleteError}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                >
                    <p><span className={cx("font-medium", txt)}>{toDelete.row.name}</span> will be permanently deleted.</p>
                    <p>Any campaign still set to use it will need a different template. You can’t undo this.</p>
                </ConfirmDialog>
            )}
        </section>
    );
}