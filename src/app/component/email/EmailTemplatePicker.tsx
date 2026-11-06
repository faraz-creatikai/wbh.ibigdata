'use client';
/**
 * Email template picker — e.g. app/component/email/EmailTemplatePicker.tsx
 *
 * Unlike the WhatsApp picker this sends NOTHING. It hands the chosen template's subject,
 * HTML body and media file (if it has one) back to the compose window, where the admin can
 * still edit everything before sending.
 *
 * Uses getFilteredMail() from mail.ts (GET /v1/templates?type=email&...).
 */
import React, { useEffect, useMemo, useState } from 'react';
import { getFilteredMail } from '@/store/masters/mail/mail';

export type TemplateMedia = {
    kind: 'image' | 'video' | 'document';
    url: string;
    urls: string[]; // every file the template holds (all of them are attached on send)
    fileName: string;
    count: number;
};

export type PickedTemplate = {
    id: string;
    name: string;
    subject: string;
    body: string; // HTML
    media: TemplateMedia | null;
};

type Tpl = {
    _id: string;
    name: string;
    subject?: string | null;
    body?: string | null;
    description?: string | null;
    category?: string | null;
    status?: string | null;
    whatsappImage?: unknown;
    whatsappMediaType?: string | null;
    whatsappFileName?: string | null;
};

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

const fileUrls = (v: unknown): string[] => {
    let x: unknown = v;
    if (typeof x === 'string') {
        try { x = JSON.parse(x); } catch { return []; }
    }
    return Array.isArray(x) ? x.filter((u): u is string => typeof u === 'string' && !!u) : [];
};

const safeDecode = (s: string) => {
    try { return decodeURIComponent(s); } catch { return s; }
};

/** Same rule as resolveMediaType() on the backend: a media type only counts when a file exists. */
export const mediaOf = (t: Tpl): TemplateMedia | null => {
    const urls = fileUrls(t.whatsappImage);
    const kind = t.whatsappMediaType;
    if (!urls.length || (kind !== 'image' && kind !== 'video' && kind !== 'document')) return null;
    const last = safeDecode(urls[0].split('?')[0].split('/').pop() || '') || 'file';
    return {
        kind,
        url: urls[0],
        urls,
        fileName: (kind === 'document' && t.whatsappFileName) || last,
        count: urls.length,
    };
};

const previewDoc = (html: string) =>
    `<!doctype html><html><head><meta charset="utf-8">` +
    `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; style-src 'unsafe-inline'">` +
    `<style>body{margin:0;padding:16px;font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a;overflow-wrap:anywhere}img{max-width:100%;height:auto}</style>` +
    `</head><body>${html}</body></html>`;

const KIND_LABEL = { image: 'Image', video: 'Video', document: 'Document' } as const;

export default function EmailTemplatePicker({
    isOpen,
    onClose,
    onPick,
}: {
    isOpen: boolean;
    onClose: () => void;
    onPick: (t: PickedTemplate) => void;
}) {
    const [templates, setTemplates] = useState<Tpl[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState('');
    const [reloadKey, setReloadKey] = useState(0);
    const [search, setSearch] = useState('');
    const [debounced, setDebounced] = useState('');
    const [category, setCategory] = useState('all');
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) return;
        setSearch(''); setDebounced(''); setCategory('all'); setSelectedId(null);
    }, [isOpen]);

    useEffect(() => {
        const h = setTimeout(() => setDebounced(search.trim()), 350);
        return () => clearTimeout(h);
    }, [search]);

    // search runs on the server, the category filter runs here
    useEffect(() => {
        if (!isOpen) return;
        let cancelled = false;
        (async () => {
            setLoading(true);
            setLoadError('');
            const params = new URLSearchParams({ type: 'email', page: '1', limit: '100' });
            if (debounced) params.set('search', debounced);
            const res = await getFilteredMail(params.toString());
            if (cancelled) return;
            if (!res?.success) {
                setTemplates([]);
                setTotal(0);
                setLoadError('Could not load templates.');
            } else {
                setTemplates((res.data || []).filter((t: Tpl) => t.status !== 'Inactive'));
                setTotal(res.total ?? (res.data || []).length);
            }
            setLoading(false);
        })();
        return () => { cancelled = true; };
    }, [isOpen, debounced, reloadKey]);

    const categories = useMemo(
        () => [...new Set(templates.map((t) => (t.category || '').trim()).filter(Boolean))],
        [templates]
    );
    const visible = useMemo(
        () => templates.filter((t) => category === 'all' || (t.category || '').trim() === category),
        [templates, category]
    );
    const selected = templates.find((t) => t._id === selectedId) || null;
    const media = selected ? mediaOf(selected) : null;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
            <div
                className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-label="Choose an email template"
            >
                <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">Choose a template</p>
                        <p className="text-xs text-slate-500">You can still edit the subject and message after loading it.</p>
                    </div>
                    <button type="button" onClick={onClose} aria-label="Close" className="cursor-pointer rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="flex min-h-0 flex-1">
                    {/* list */}
                    <div className="flex w-[300px] shrink-0 flex-col border-r border-slate-200">
                        <div className="space-y-2 border-b border-slate-100 p-3">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search templates…"
                                aria-label="Search templates"
                                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                            />
                            {categories.length > 0 && (
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    aria-label="Filter by category"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[var(--color-primary)] focus:outline-none"
                                >
                                    <option value="all">All categories</option>
                                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                            )}
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto">
                            {loading ? (
                                <p className="p-4 text-xs text-slate-400">Loading templates…</p>
                            ) : loadError ? (
                                <p className="p-4 text-xs text-red-600">
                                    {loadError}{' '}
                                    <button type="button" onClick={() => setReloadKey((k) => k + 1)} className="cursor-pointer font-semibold underline">Try again</button>
                                </p>
                            ) : visible.length === 0 ? (
                                <p className="p-4 text-xs text-slate-500">
                                    {debounced ? 'No templates match your search.' : 'No email templates yet. Create one under Templates.'}
                                </p>
                            ) : (
                                visible.map((t) => {
                                    const m = mediaOf(t);
                                    return (
                                        <button
                                            key={t._id}
                                            type="button"
                                            onClick={() => setSelectedId(t._id)}
                                            className={cx(
                                                'block w-full cursor-pointer border-b border-slate-50 px-3 py-2.5 text-left hover:bg-slate-50',
                                                selectedId === t._id && 'bg-[var(--color-primary-lighter)]'
                                            )}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="truncate text-[13px] font-semibold text-slate-800">{t.name}</span>
                                                {m && (
                                                    <span className="shrink-0 rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                                                        {KIND_LABEL[m.kind]}
                                                    </span>
                                                )}
                                            </span>
                                            <span className="block truncate text-xs text-slate-500">{t.subject || t.description || '(no subject)'}</span>
                                        </button>
                                    );
                                })
                            )}
                            {total > templates.length && !loading && (
                                <p className="p-3 text-center text-[11px] text-slate-400">Showing {templates.length} of {total}. Search to narrow it down.</p>
                            )}
                        </div>
                    </div>

                    {/* preview */}
                    <div className="flex min-w-0 flex-1 flex-col">
                        {!selected ? (
                            <p className="flex h-full items-center justify-center text-sm text-slate-500">Select a template to preview it</p>
                        ) : (
                            <>
                                <div className="space-y-1 border-b border-slate-100 px-4 py-3">
                                    <p className="truncate text-sm font-semibold text-slate-900">{selected.subject || '(no subject)'}</p>
                                    {media && (
                                        <p className="flex items-center gap-2 text-xs text-slate-600">
                                            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-semibold">{KIND_LABEL[media.kind]}</span>
                                            <span className="truncate">{media.fileName}{media.count > 1 ? ` +${media.count - 1} more` : ''}</span>
                                            <span className="text-slate-400">will be attached</span>
                                        </p>
                                    )}
                                    <p className="text-[11px] text-slate-400">
                                        Placeholders like {'{{Name}}'} are filled in for each recipient when you send.
                                    </p>
                                </div>
                                <iframe
                                    title="Template preview"
                                    sandbox=""
                                    srcDoc={previewDoc(selected.body || '')}
                                    className="min-h-0 w-full flex-1 border-0 bg-white"
                                />
                            </>
                        )}
                    </div>
                </div>

                <div className="border-t border-slate-100 p-3">
                    <button
                        type="button"
                        disabled={!selected}
                        onClick={() =>
                            selected &&
                            onPick({
                                id: selected._id,
                                name: selected.name,
                                subject: selected.subject || '',
                                body: selected.body || '',
                                media,
                            })
                        }
                        className="w-full cursor-pointer rounded-xl bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Use this template
                    </button>
                </div>
            </div>
        </div>
    );
}