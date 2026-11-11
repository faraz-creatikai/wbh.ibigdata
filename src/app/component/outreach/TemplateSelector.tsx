"use client";

/**
 * TemplateSelector — pick ONE template of a given kind ("email" | "whatsapp").
 * Left: searchable, paginated list. Right: live preview of the template you clicked.
 * Render it with key={kind} if you switch kinds inside the same parent.
 */
import { useEffect, useRef, useState } from "react";
import { fetchTemplatePage } from "@/store/masters/outreachcampaign/outreachcampaign";
import type { Paginated, TemplateItem, TemplateKind } from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, Icon, ICONS, Pagination, Spinner, checkboxCls, cx, inputCls, useDebounce } from "./CampaignUi";

interface Props {
    kind: TemplateKind;
    selectedId: string | null;
    /** shown in the "selected" chip when the template isn't on the current page (edit mode) */
    selectedName?: string | null;
    onSelect: (t: { id: string; name: string } | null) => void;
}

const PAGE_SIZE = 6;

/* ───────────── preview ───────────── */

const highlight = (text: string) =>
    text.split(/(\{\{[^}]+\}\})/g).map((part, i) =>
        i % 2 === 1 ? (
            <mark key={i} className="rounded bg-[var(--color-primary-light)] px-1 text-[var(--color-primary-darker)]">
                {part}
            </mark>
        ) : (
            <span key={i}>{part}</span>
        )
    );

const waKind = (t: TemplateItem) => {
    const hasFile = Array.isArray(t.whatsappImage) && t.whatsappImage.length > 0;
    if (t.whatsappMediaType && ["image", "video", "document"].includes(t.whatsappMediaType) && hasFile) return t.whatsappMediaType;
    if (t.whatsappPoll?.name) return "poll";
    if (t.whatsappLocation?.lat != null && t.whatsappLocation?.lng != null) return "location";
    return "text";
};

const Preview = ({ t }: { t: TemplateItem }) => {
    if (t.type === "email") {
        const doc = `<!doctype html><html><head><meta charset="utf-8"><base target="_blank"><style>body{font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#0f172a;margin:16px}img{max-width:100%;height:auto}</style></head><body>${t.body}</body></html>`;
        return (
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-sm">
                    <span className="text-slate-500">Subject </span>
                    <span className="font-medium text-slate-900">{t.subject ? highlight(t.subject) : <em className="text-slate-400">No subject (campaign name is used)</em>}</span>
                </div>
                {/* sandbox="" = no scripts, no forms, no same-origin: template HTML is shown safely */}
                <iframe title={`Preview of ${t.name}`} sandbox="" srcDoc={doc} className="h-[320px] w-full flex-1 bg-white" />
            </div>
        );
    }

    const kind = waKind(t);
    const image = t.whatsappImage?.[0];
    return (
        <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-[#ECE5DD] p-4">
            <div className="max-w-[92%] self-start rounded-lg rounded-tl-none bg-white p-2.5 text-sm shadow-sm">
                {kind === "image" && image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={image} alt="" className="mb-2 max-h-48 w-full rounded-md object-cover" />
                )}
                {(kind === "video" || kind === "document") && (
                    <div className="mb-2 rounded-md bg-slate-100 px-3 py-2 text-xs text-slate-600">
                        {kind === "video" ? "Video attachment" : `Document: ${t.whatsappFileName || "file"}`}
                    </div>
                )}
                {kind === "location" && (
                    <div className="mb-2 rounded-md bg-slate-100 px-3 py-2 text-xs text-slate-600">
                        Location: {t.whatsappLocation?.name || `${t.whatsappLocation?.lat}, ${t.whatsappLocation?.lng}`}
                    </div>
                )}
                <p className="whitespace-pre-wrap break-words text-slate-900">{highlight(t.body)}</p>
                {kind === "poll" && (
                    <ul className="mt-2 space-y-1 border-t border-slate-100 pt-2 text-xs text-slate-700">
                        <li className="font-medium">{t.whatsappPoll?.name}</li>
                        {(t.whatsappPoll?.options ?? []).map((o) => (
                            <li key={o} className="rounded border border-slate-200 px-2 py-1">
                                {o}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

/* ───────────── selector ───────────── */

export default function TemplateSelector({ kind, selectedId, selectedName, onSelect }: Props) {
    const [search, setSearch] = useState("");
    const q = useDebounce(search, 400);
    const [page, setPage] = useState(1);
    const [includeInactive, setIncludeInactive] = useState(false);
    const [data, setData] = useState<Paginated<TemplateItem> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [previewed, setPreviewed] = useState<TemplateItem | null>(null);
    const reqId = useRef(0);

    useEffect(() => {
        const id = ++reqId.current;
        setLoading(true);
        setError(null);
        fetchTemplatePage(kind, { search: q, page, limit: PAGE_SIZE, includeInactive }).then((r) => {
            if (id !== reqId.current) return; // a newer request replaced this one
            if (r.ok) setData(r.data);
            else setError(r.error.message);
            setLoading(false);
        });
    }, [kind, q, page, includeInactive]);

    // edit mode: once the saved template shows up in a page, preview it
    useEffect(() => {
        // Defensively handle if parent passed a number or the full {id, name} object
        const actualId = typeof selectedId === "object" && selectedId !== null
            ? String((selectedId as any).id || (selectedId as any)._id)
            : selectedId != null ? String(selectedId) : null;

        if (previewed || !actualId || !data) return;

        // Check both id and _id on the template
        const match = data.data.find((t) => String(t.id || (t as any)._id) === actualId);
        if (match) setPreviewed(match);
    }, [data, selectedId, previewed]);

    const items = data?.data ?? [];
    const label = kind === "email" ? "email" : "WhatsApp";

    // Normalize the selectedId to a string, checking for _id fallback
    const safeSelectedId = typeof selectedId === "object" && selectedId !== null
        ? String((selectedId as any).id || (selectedId as any)._id)
        : selectedId != null ? String(selectedId) : null;

    const pick = (t: TemplateItem) => {
        setPreviewed(t);
        if (t.status === "Inactive") return;
        // Extract the valid ID string regardless of whether backend uses id or _id
        onSelect({ id: String(t.id || (t as any)._id), name: t.name });
    };

    return (
        <div className="space-y-4">
            {selectedId && (
                <div className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-4 py-2.5 text-sm">
                    <span className="min-w-0 truncate text-[var(--color-primary-darker)]">
                        Selected {label} template: <span className="font-semibold">{selectedName || previewed?.name || "Template"}</span>
                    </span>
                    <button type="button" onClick={() => onSelect(null)} className="shrink-0 cursor-pointer font-medium text-[var(--color-primary-darker)] hover:underline">
                        Clear
                    </button>
                </div>
            )}

            <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                {/* list */}
                <div className="flex min-w-0 flex-col gap-3">
                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                            <Icon d={ICONS.search} />
                        </span>
                        <input
                            type="search"
                            className={cx(inputCls, "pl-9")}
                            placeholder={`Search ${label} templates by name, subject or text`}
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            aria-label={`Search ${label} templates`}
                        />
                    </div>
                    <label className="flex w-fit cursor-pointer items-center gap-2 text-xs text-slate-600">
                        <input
                            type="checkbox"
                            className={checkboxCls}
                            checked={includeInactive}
                            onChange={(e) => {
                                setIncludeInactive(e.target.checked);
                                setPage(1);
                            }}
                        />
                        Show inactive templates
                    </label>

                    {error && <Banner tone="error">{error}</Banner>}

                    <ul className={cx("space-y-2", loading && "opacity-60")} aria-busy={loading}>
                        {items.map((t) => {
                            // Safely extract the ID for this row
                            const currentId = String(t.id || (t as any)._id);

                            const active = safeSelectedId !== null && currentId === safeSelectedId;
                            const inactive = t.status === "Inactive";
                            const isPreviewed = String(previewed?.id || (previewed as any)?._id) === currentId;

                            return (
                                <li key={currentId}>
                                    <button
                                        type="button"
                                        onClick={() => pick(t)}
                                        aria-pressed={active}
                                        className={cx(
                                            "flex w-full cursor-pointer items-start gap-3 rounded-lg border px-3 py-2.5 text-left",
                                            active
                                                ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)]"
                                                : isPreviewed
                                                    ? "border-slate-400 bg-slate-50"
                                                    : "border-slate-200 bg-white hover:bg-slate-50",
                                            inactive && "opacity-60"
                                        )}
                                    >
                                        <span
                                            className={cx(
                                                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                                                active ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-slate-300"
                                            )}
                                        >
                                            {active && <Icon d={ICONS.check} className="h-2.5 w-2.5" />}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="flex flex-wrap items-center gap-2">
                                                <span className="truncate text-sm font-medium text-slate-900">{t.name}</span>
                                                {t.category && <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-600">{t.category}</span>}
                                                {inactive && <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[11px] text-amber-800">Inactive: can’t be used</span>}
                                            </span>
                                            <span className="mt-0.5 line-clamp-2 block text-xs text-slate-500">
                                                {t.description || t.subject || t.body.replace(/<[^>]+>/g, " ").trim()}
                                            </span>
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {loading && items.length === 0 && (
                        <div className="flex items-center gap-2 py-6 text-sm text-slate-600">
                            <Spinner /> Loading templates…
                        </div>
                    )}
                    {!loading && !error && items.length === 0 && (
                        <p className="rounded-lg border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-600">
                            {q ? `No ${label} templates match “${q}”.` : `No ${label} templates yet. Create one under Templates first.`}
                        </p>
                    )}

                    {data && data.total > 0 && (
                        <Pagination page={page} limit={PAGE_SIZE} total={data.total} itemCount={items.length} onPage={setPage} disabled={loading} />
                    )}
                </div>

                {/* preview */}
                <div className="min-h-[260px]">
                    {previewed ? (
                        <Preview t={previewed} />
                    ) : (
                        <div className="flex h-full min-h-[260px] items-center justify-center rounded-lg border border-dashed border-slate-300 px-6 text-center text-sm text-slate-500">
                            Select a template to see how it looks. Placeholders like {"{{customerName}}"} are filled in for each customer when the campaign runs.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}