"use client";

/**
 * EmailTemplates — the "Templates" tab of the Email outreach page.
 *
 *   {tab === "Templates" && <EmailTemplates />}
 *
 * Does everything in one place: list (search / filter / sort / pages), preview dialog,
 * add + edit form with the custom editor, and a delete confirmation dialog.
 * Talks to the same store functions your Mail Templates master pages already use.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { addMail, deleteMail, getMail, getMailById, updateMail } from "@/store/masters/mail/mail";
import type { mailAllDataInterface } from "@/store/masters/mail/mail.interface";
import { API_ROUTES } from "@/constants/ApiRoute";
import EmailTemplateEditor, {
    DEFAULT_MERGE_TAGS,
    EmailPreviewFrame,
    buildEmailDocument,
    defaultFormatMergeTag,
    fillMergeTags,
    isEmailHtmlEmpty,
    type MergeTag,
} from "@/app/component/datafields/EmailTemplateEditor";

/* ───────────────────────── types ───────────────────────── */

type Row = {
    _id: string;
    name: string;
    subject?: string;
    body?: string;
    status?: string;
    type?: string;
    updatedAt?: string;
    createdAt?: string;
};

type FormValues = { name: string; subject: string; body: string; status: "Active" | "Inactive" };

export interface EmailTemplatesProps {
    /** image upload endpoint used by the editor (defaults to your mail upload route) */
    uploadUrl?: string;
    /** multipart field name the upload endpoint expects */
    uploadFieldName?: string;
    uploadHeaders?: Record<string, string>;
    onUpload?: (file: File) => Promise<string>;
    mergeTags?: MergeTag[];
    formatMergeTag?: (key: string) => string;
}

/* ───────────────────────── shared styles (same tokens as the email page) ───────────────────────── */

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ";
const btnBase = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ";
const btnPrimary = btnBase + "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] " + focusRing;
const btnSecondary = btnBase + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 " + focusRing;
const btnOutline = btnBase + "border border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)] hover:bg-[var(--color-primary-lighter)] " + focusRing;
const btnDanger = btnBase + "bg-[var(--color-destructive)] text-white hover:opacity-90 " + focusRing;
const inputCls =
    "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 " +
    "focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 disabled:bg-slate-50 disabled:text-slate-500";

const ICON = {
    plus: "M12 5v14M5 12h14",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3",
    eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    edit: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z",
    trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6",
    x: "M18 6 6 18M6 6l12 12",
    back: "M19 12H5M12 19l-7-7 7-7",
    warn: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
    mail: "M4 5h16v14H4zM4 7l8 6 8-6",
    monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
    phone: "M7 2h10v20H7zM11 18h2",
    check: "M20 6 9 17l-5-5",
    clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
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
        success: "border-emerald-200 bg-emerald-50 text-emerald-900",
        error: "border-red-200 bg-red-50 text-red-900",
        warn: "border-amber-200 bg-amber-50 text-amber-900",
        info: "border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]",
    }[tone];
    return (
        <div role={tone === "error" ? "alert" : "status"} className={cx("flex items-start justify-between gap-3 rounded-lg border px-4 py-3 text-sm", styles)}>
            <div className="min-w-0">
                {title && <p className="font-medium">{title}</p>}
                {children && <div className={cx(title && "mt-1", "leading-relaxed")}>{children}</div>}
            </div>
            {onClose && (
                <button type="button" aria-label="Dismiss" onClick={onClose} className={cx("shrink-0 rounded p-0.5 cursor-pointer hover:bg-black/5", focusRing)}>
                    <Icon d={ICON.x} />
                </button>
            )}
        </div>
    );
};

const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "";

function StatusPill({ status }: { status?: string }) {
    const active = (status ?? "Active") === "Active";
    return (
        <span className={cx("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", active ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600")}>
            <span className={cx("h-1.5 w-1.5 rounded-full", active ? "bg-emerald-500" : "bg-slate-400")} />
            {active ? "Active" : "Inactive"}
        </span>
    );
}

/* ───────────────────────── modal shell (focus trap, Esc, scroll lock) ───────────────────────── */

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Modal({
    children,
    onClose,
    locked = false,
    role = "dialog",
    labelledBy,
    describedBy,
    widthClass = "max-w-md",
    panelClass,
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
        const panel = panelRef.current;
        (panel?.querySelector<HTMLElement>("[data-autofocus]") ?? panel?.querySelector<HTMLElement>(FOCUSABLE))?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !lockedRef.current) {
                e.preventDefault();
                closeRef.current();
                return;
            }
            if (e.key !== "Tab" || !panel) return;
            const els = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
            if (!els.length) return;
            const first = els[0];
            const last = els[els.length - 1];
            const active = document.activeElement;
            if (e.shiftKey && (active === first || !panel.contains(active))) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && (active === last || !panel.contains(active))) {
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
                className={cx("relative flex max-h-full w-full flex-col rounded-2xl bg-white shadow-xl", widthClass, panelClass)}
            >
                {children}
            </div>
        </div>
    );
}

function ConfirmDialog({
    title,
    children,
    confirmLabel,
    busyLabel,
    cancelLabel,
    busy = false,
    tone = "danger",
    error,
    onConfirm,
    onCancel,
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
        <Modal role="alertdialog" labelledBy="tpl-confirm-title" describedBy="tpl-confirm-desc" onClose={onCancel} locked={busy}>
            <div className="p-6">
                <div className="flex gap-4">
                    <span className={cx("flex h-11 w-11 shrink-0 items-center justify-center rounded-full", danger ? "bg-red-50 text-[var(--color-destructive)]" : "bg-amber-50 text-amber-600")}>
                        <Icon d={danger ? ICON.trash : ICON.warn} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                        <h2 id="tpl-confirm-title" className="text-lg font-semibold text-slate-900">{title}</h2>
                        <div id="tpl-confirm-desc" className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">{children}</div>
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

/* ───────────────────────── thumbnail ───────────────────────── */

const THUMB_W = 700;

function EmailThumb({ html, mergeTags, formatMergeTag }: { html: string | undefined; mergeTags: MergeTag[]; formatMergeTag: (k: string) => string }) {
    const wrap = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(0.4);
    const [height, setHeight] = useState(192);

    useEffect(() => {
        const el = wrap.current;
        if (!el) return;
        const ro = new ResizeObserver(([entry]) => {
            setScale(entry.contentRect.width / THUMB_W);
            setHeight(entry.contentRect.height);
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const doc = useMemo(() => (html && html.trim() ? buildEmailDocument(fillMergeTags(html, mergeTags, formatMergeTag)) : ""), [html, mergeTags, formatMergeTag]);

    return (
        <div ref={wrap} className="relative h-48 w-full overflow-hidden bg-slate-100">
            {doc ? (
                <iframe
                    title="Template thumbnail"
                    aria-hidden="true"
                    tabIndex={-1}
                    sandbox="allow-same-origin"
                    srcDoc={doc}
                    loading="lazy"
                    style={{ width: THUMB_W, height: height / scale, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none" }}
                    className="absolute left-0 top-0 border-0 bg-white"
                />
            ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
                    <Icon d={ICON.mail} className="h-8 w-8" />
                    <span className="text-xs">{html === undefined ? "Open to preview" : "No content yet"}</span>
                </div>
            )}
        </div>
    );
}

/* ───────────────────────── card ───────────────────────── */

function TemplateCard({
    row, mergeTags, formatMergeTag, onView, onEdit, onDelete,
}: {
    row: Row;
    mergeTags: MergeTag[];
    formatMergeTag: (k: string) => string;
    onView: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md motion-reduce:transition-none">
            <button type="button" onClick={onView} aria-label={`Preview ${row.name}`} className={cx("relative block text-left cursor-pointer", focusRing)}>
                <EmailThumb html={row.body} mergeTags={mergeTags} formatMergeTag={formatMergeTag} />
                <span className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition group-hover:bg-slate-900/25 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow">
                        <Icon d={ICON.eye} /> Preview
                    </span>
                </span>
            </button>

            <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="min-w-0 truncate text-base font-semibold text-slate-900" title={row.name}>{row.name}</h3>
                        <StatusPill status={row.status} />
                    </div>
                    <p className="mt-1 truncate text-sm text-slate-600" title={row.subject}>
                        {row.subject ? <><span className="text-slate-400">Subject: </span>{row.subject}</> : <span className="text-slate-400">No subject</span>}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        {row.updatedAt && <><Icon d={ICON.clock} className="h-3.5 w-3.5" />{formatDate(row.updatedAt)}</>}
                    </span>
                    <div className="flex items-center gap-1.5">
                        <button type="button" className={cx(btnOutline, "!px-3 !py-1.5")} onClick={onView}>
                            <Icon d={ICON.eye} /> View
                        </button>
                        <button type="button" aria-label={`Edit ${row.name}`} title="Edit" onClick={onEdit} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-50", focusRing)}>
                            <Icon d={ICON.edit} />
                        </button>
                        <button type="button" aria-label={`Delete ${row.name}`} title="Delete" onClick={onDelete} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 cursor-pointer hover:bg-red-50", focusRing)}>
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
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white" aria-hidden="true">
            <div className="h-48 animate-pulse bg-slate-100 motion-reduce:animate-none" />
            <div className="space-y-3 p-4">
                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
                <div className="h-9 w-full animate-pulse rounded bg-slate-100 motion-reduce:animate-none" />
            </div>
        </div>
    );
}

/* ───────────────────────── view / preview dialog ───────────────────────── */

function PreviewDialog({
    row, mergeTags, formatMergeTag, locked, onClose, onEdit, onDelete,
}: {
    row: Row;
    mergeTags: MergeTag[];
    formatMergeTag: (k: string) => string;
    locked?: boolean;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
}) {
    const [full, setFull] = useState<Row>(row);
    const [loading, setLoading] = useState(row.body === undefined);
    const [failed, setFailed] = useState(false);
    const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
    const [sample, setSample] = useState(true);

    useEffect(() => {
        if (row.body !== undefined) return;
        let alive = true;
        (async () => {
            try {
                const d = (await getMailById(row._id)) as unknown as Partial<Row> | null;
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

    const subject = sample ? fillMergeTags(full.subject ?? "", mergeTags, formatMergeTag, false) : full.subject ?? "";

    return (
        <Modal labelledBy="tpl-view-title" onClose={onClose} locked={locked} widthClass="max-w-5xl" panelClass="h-[92vh]">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 id="tpl-view-title" className="truncate text-lg font-semibold text-slate-900">{full.name}</h2>
                        <StatusPill status={full.status} />
                    </div>
                    {full.updatedAt && <p className="mt-0.5 text-xs text-slate-500">Last updated {formatDate(full.updatedAt)}</p>}
                </div>
                <button type="button" aria-label="Close preview" onClick={onClose} className={cx("rounded-lg p-1.5 text-slate-500 cursor-pointer hover:bg-slate-100", focusRing)}>
                    <Icon d={ICON.x} className="h-5 w-5" />
                </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
                <p className="min-w-0 truncate text-sm text-slate-700">
                    <span className="text-slate-500">Subject: </span>
                    <span className="font-medium">{subject || "—"}</span>
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                        <input type="checkbox" checked={sample} onChange={(e) => setSample(e.target.checked)} className="h-4 w-4 accent-[var(--color-primary)]" />
                        Sample data
                    </label>
                    <div role="group" aria-label="Preview device" className="flex rounded-lg border border-slate-300 bg-white p-0.5">
                        {([["desktop", "Desktop", ICON.monitor], ["mobile", "Mobile", ICON.phone]] as const).map(([d, label, icon]) => (
                            <button
                                key={d}
                                type="button"
                                aria-pressed={device === d}
                                onClick={() => setDevice(d)}
                                className={cx("inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm cursor-pointer", device === d ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-slate-100", focusRing)}
                            >
                                <Icon d={icon} className="h-3.5 w-3.5" /> {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-slate-100 p-4 sm:p-6">
                {loading ? (
                    <div className="flex items-center justify-center gap-3 py-24 text-sm text-slate-600"><Spinner /> Loading template…</div>
                ) : failed ? (
                    <div className="mx-auto max-w-md py-16"><Banner tone="error" title="Couldn't load this template">Close this window and try again.</Banner></div>
                ) : full.body && full.body.trim() ? (
                    <EmailPreviewFrame html={full.body} device={device} sample={sample} mergeTags={mergeTags} formatMergeTag={formatMergeTag} className="rounded-lg shadow-sm ring-1 ring-slate-200" />
                ) : (
                    <p className="py-24 text-center text-sm text-slate-500">This template has no content yet.</p>
                )}
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="button" className={cx(btnBase, "border border-red-200 text-red-600 hover:bg-red-50", focusRing)} onClick={onDelete}>
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

function TemplateForm({
    id, mergeTags, formatMergeTag, editorProps, onCancel, onSaved,
}: {
    id: string | null;
    mergeTags: MergeTag[];
    formatMergeTag: (k: string) => string;
    editorProps: Pick<EmailTemplatesProps, "uploadUrl" | "uploadFieldName" | "uploadHeaders" | "onUpload">;
    onCancel: () => void;
    onSaved: (kind: "created" | "updated", name: string) => void;
}) {
    const isEdit = id !== null;
    const blank: FormValues = { name: "", subject: "", body: "", status: "Active" };
    const [values, setValues] = useState<FormValues>(blank);
    const initial = useRef<FormValues>(blank);
    const [loading, setLoading] = useState(isEdit);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [confirmDiscard, setConfirmDiscard] = useState(false);
    const subjectRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isEdit) return;
        let alive = true;
        (async () => {
            try {
                const d = (await getMailById(id!)) as unknown as Partial<FormValues> | null;
                if (!alive) return;
                if (!d) return setLoadError("We couldn't find this template. It may have been deleted.");
                const v: FormValues = {
                    name: d.name ?? "",
                    subject: d.subject ?? "",
                    body: d.body ?? "",
                    status: d.status === "Inactive" ? "Inactive" : "Active",
                };
                initial.current = v;
                setValues(v);
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

    const dirty = JSON.stringify(values) !== JSON.stringify(initial.current);

    const set = <K extends keyof FormValues>(k: K, v: FormValues[K]) => {
        setValues((p) => ({ ...p, [k]: v }));
        setErrors((p) => ({ ...p, [k]: undefined }));
        setSaveError(null);
    };

    const insertIntoSubject = (tag: string) => {
        const el = subjectRef.current;
        const start = el?.selectionStart ?? values.subject.length;
        const end = el?.selectionEnd ?? values.subject.length;
        set("subject", values.subject.slice(0, start) + tag + values.subject.slice(end));
        requestAnimationFrame(() => {
            el?.focus();
            const pos = start + tag.length;
            el?.setSelectionRange(pos, pos);
        });
    };

    const validate = () => {
        const e: Partial<Record<keyof FormValues, string>> = {};
        if (!values.name.trim()) e.name = "Give the template a name";
        if (!values.subject.trim()) e.subject = "Add a subject line";
        if (isEmailHtmlEmpty(values.body)) e.body = "Write the email body";
        return e;
    };

    const save = async () => {
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) return;
        setSaving(true);
        setSaveError(null);
        const payload = { name: values.name.trim(), subject: values.subject.trim(), body: values.body, status: values.status } as mailAllDataInterface;
        try {
            const res = isEdit ? await updateMail(id!, payload) : await addMail(payload);
            if (res) onSaved(isEdit ? "updated" : "created", payload.name);
            else setSaveError("We couldn't save this template. Template names must be unique, so check that no other template (email or WhatsApp) already uses this name.");
        } catch {
            setSaveError("Something went wrong while saving. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const back = () => (dirty && !saving ? setConfirmDiscard(true) : onCancel());

    if (loading) {
        return <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600"><Spinner /> Loading template…</div>;
    }
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
                    <button type="button" aria-label="Back to templates" onClick={back} className={cx("flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-50", focusRing)}>
                        <Icon d={ICON.back} />
                    </button>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">{isEdit ? "Edit email template" : "New email template"}</h2>
                        <p className="text-sm text-slate-500">{isEdit ? "Changes apply to campaigns that use this template." : "Build it once, reuse it in any campaign."}</p>
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

            <section className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="grid gap-5 md:grid-cols-[1fr_auto]">
                    <div>
                        <label htmlFor="tpl-name" className="mb-1.5 block text-sm font-medium text-slate-800">Template name</label>
                        <input
                            id="tpl-name"
                            className={cx(inputCls, errors.name ? "border-red-400" : "border-slate-300")}
                            placeholder="e.g. Payment reminder"
                            value={values.name}
                            maxLength={120}
                            onChange={(e) => set("name", e.target.value)}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "tpl-name-err" : undefined}
                        />
                        {errors.name && <p id="tpl-name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <fieldset>
                        <legend className="mb-1.5 text-sm font-medium text-slate-800">Status</legend>
                        <div className="flex rounded-lg border border-slate-300 bg-slate-50 p-0.5">
                            {(["Active", "Inactive"] as const).map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    aria-pressed={values.status === s}
                                    onClick={() => set("status", s)}
                                    className={cx(
                                        "rounded-md px-4 py-2 text-sm font-medium cursor-pointer",
                                        values.status === s ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:text-slate-900",
                                        focusRing
                                    )}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="mt-5">
                    <label htmlFor="tpl-subject" className="mb-1.5 block text-sm font-medium text-slate-800">Subject line</label>
                    <input
                        id="tpl-subject"
                        ref={subjectRef}
                        className={cx(inputCls, errors.subject ? "border-red-400" : "border-slate-300")}
                        placeholder="What customers see in their inbox"
                        value={values.subject}
                        onChange={(e) => set("subject", e.target.value)}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "tpl-subject-err" : undefined}
                    />
                    {errors.subject && <p id="tpl-subject-err" className="mt-1.5 text-sm text-red-600">{errors.subject}</p>}
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-slate-500">Add to subject:</span>
                        {mergeTags.map((t) => (
                            <button
                                key={t.key}
                                type="button"
                                onClick={() => insertIntoSubject(formatMergeTag(t.key))}
                                className={cx("rounded-full border border-slate-300 bg-white px-2.5 py-0.5 text-xs text-slate-700 cursor-pointer hover:bg-[var(--color-primary-lighter)]", focusRing)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <p className="mb-1.5 text-sm font-medium text-slate-800">Email body</p>
                <EmailTemplateEditor
                    value={values.body}
                    onChange={(html) => set("body", html)}
                    invalid={!!errors.body}
                    mergeTags={mergeTags}
                    formatMergeTag={formatMergeTag}
                    {...editorProps}
                />
                {errors.body && <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.body}</p>}
            </section>

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

export default function EmailTemplates({
    uploadUrl = API_ROUTES.MASTERS.MAIL.FILEUPLOAD,
    uploadFieldName,
    uploadHeaders,
    onUpload,
    mergeTags = DEFAULT_MERGE_TAGS,
    formatMergeTag = defaultFormatMergeTag,
}: EmailTemplatesProps) {
    const [rows, setRows] = useState<Row[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);

    const [screen, setScreen] = useState<{ kind: "list" } | { kind: "form"; id: string | null }>({ kind: "list" });
    const [q, setQ] = useState("");
    const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
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
            const data = (await getMail()) as unknown as Row[] | null | undefined;
            if (!Array.isArray(data)) {
                setLoadError("We couldn't load your templates. Check your connection and try again.");
            } else {
                // the Template model holds email + WhatsApp templates; only show email here
                setRows(data.filter((r) => String(r.type ?? "email").toLowerCase() === "email"));
            }
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

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        const list = rows.filter((r) => {
            if (statusFilter !== "All" && (r.status ?? "Active") !== statusFilter) return false;
            if (!term) return true;
            return r.name.toLowerCase().includes(term) || (r.subject ?? "").toLowerCase().includes(term);
        });
        return [...list].sort((a, b) =>
            sort === "name"
                ? a.name.localeCompare(b.name)
                : new Date(b.updatedAt ?? b.createdAt ?? 0).getTime() - new Date(a.updatedAt ?? a.createdAt ?? 0).getTime()
        );
    }, [rows, q, statusFilter, sort]);

    useEffect(() => setPage(1), [q, statusFilter, sort]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const current = Math.min(page, totalPages);
    const pageRows = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

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
            const ok = await deleteMail(toDelete.row._id);
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

    /* ── form screen ── */
    if (screen.kind === "form") {
        return (
            <div ref={topRef}>
                <TemplateForm
                    key={screen.id ?? "new"}
                    id={screen.id}
                    mergeTags={mergeTags}
                    formatMergeTag={formatMergeTag}
                    editorProps={{ uploadUrl, uploadFieldName, uploadHeaders, onUpload }}
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

    /* ── list screen ── */
    return (
        <section ref={topRef} className="space-y-5 scroll-mt-4" aria-label="Email templates">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">Email templates</h2>
                    <p className="text-sm text-slate-500">Reusable emails you can pick when you create a campaign.</p>
                </div>
                <button type="button" className={btnPrimary} onClick={() => openForm(null)}>
                    <Icon d={ICON.plus} /> New template
                </button>
            </div>

            {notice && <Banner tone={notice.tone} onClose={() => setNotice(null)}>{notice.text}</Banner>}

            {loadError && (
                <div className="space-y-3">
                    <Banner tone="error" title="Couldn't load templates">{loadError}</Banner>
                    <button type="button" className={btnSecondary} onClick={() => load()}>Try again</button>
                </div>
            )}

            {!loadError && (loading || rows.length > 0) && (
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div role="group" aria-label="Filter by status" className="flex rounded-lg border border-slate-300 bg-slate-50 p-0.5">
                        {(["All", "Active", "Inactive"] as const).map((s) => (
                            <button
                                key={s}
                                type="button"
                                aria-pressed={statusFilter === s}
                                onClick={() => setStatusFilter(s)}
                                className={cx(
                                    "rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer",
                                    statusFilter === s ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:text-slate-900",
                                    focusRing
                                )}
                            >
                                {s} <span className="ml-0.5 text-slate-400">{counts[s]}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
                        <div className="relative w-full sm:max-w-xs">
                            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400"><Icon d={ICON.search} /></span>
                            <input
                                type="search"
                                aria-label="Search templates"
                                placeholder="Search by name or subject"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                className={cx(inputCls, "border-slate-300 !py-2 pl-9")}
                            />
                        </div>
                        <select
                            aria-label="Sort templates"
                            value={sort}
                            onChange={(e) => setSort(e.target.value as "updated" | "name")}
                            className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 cursor-pointer focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25"
                        >
                            <option value="updated">Recently updated</option>
                            <option value="name">Name A–Z</option>
                        </select>
                    </div>
                </div>
            )}

            {loading && (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" role="status" aria-label="Loading templates">
                    {Array.from({ length: 6 }, (_, i) => <CardSkeleton key={i} />)}
                </div>
            )}

            {!loading && !loadError && rows.length === 0 && (
                <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                        <Icon d={ICON.mail} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">No email templates yet</h3>
                    <p className="mt-1 max-w-sm text-sm text-slate-600">Create a template once, then pick it whenever you set up an email campaign.</p>
                    <button type="button" className={cx(btnPrimary, "mt-5")} onClick={() => openForm(null)}>
                        <Icon d={ICON.plus} /> Create your first template
                    </button>
                </div>
            )}

            {!loading && !loadError && rows.length > 0 && filtered.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                    <p className="text-sm font-medium text-slate-900">No templates match your search</p>
                    <p className="mt-1 text-sm text-slate-600">Try a different word, or clear the filters.</p>
                    <button type="button" className={cx(btnSecondary, "mt-4")} onClick={() => { setQ(""); setStatusFilter("All"); }}>Clear filters</button>
                </div>
            )}

            {!loading && pageRows.length > 0 && (
                <>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {pageRows.map((r) => (
                            <TemplateCard
                                key={r._id}
                                row={r}
                                mergeTags={mergeTags}
                                formatMergeTag={formatMergeTag}
                                onView={() => setPreview(r)}
                                onEdit={() => openForm(r._id)}
                                onDelete={() => { setDeleteError(null); setToDelete({ row: r, from: "card" }); }}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center justify-between gap-3 pt-1">
                            <p className="text-sm text-slate-600">
                                Showing {(current - 1) * PAGE_SIZE + 1}–{Math.min(current * PAGE_SIZE, filtered.length)} of {filtered.length}
                            </p>
                            <div className="flex items-center gap-2">
                                <button type="button" className={cx(btnSecondary, "!py-1.5")} onClick={() => setPage(current - 1)} disabled={current === 1}>Previous</button>
                                <span className="px-1 text-sm text-slate-600">Page {current} of {totalPages}</span>
                                <button type="button" className={cx(btnSecondary, "!py-1.5")} onClick={() => setPage(current + 1)} disabled={current === totalPages}>Next</button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {preview && (
                <PreviewDialog
                    row={preview}
                    mergeTags={mergeTags}
                    formatMergeTag={formatMergeTag}
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
                    <p>
                        <span className="font-medium text-slate-900">{toDelete.row.name}</span> will be permanently deleted.
                    </p>
                    <p>Any campaign still set to use it will need a different template. You can’t undo this.</p>
                </ConfirmDialog>
            )}
        </section>
    );
}