"use client";

/**
 * EmailTemplateEditor — a dependency-free WYSIWYG editor for email bodies.
 *
 * One file, React + Tailwind only. Drop it anywhere:
 *
 *   <EmailTemplateEditor value={body} onChange={setBody} uploadUrl={API_ROUTES.MASTERS.MAIL.FILEUPLOAD} />
 *
 * - Three tabs: Visual (WYSIWYG), HTML (source), Preview (desktop / mobile, with sample merge-tag data)
 * - Output is clean, email-safe HTML: allow-listed tags only, inline styles, table-based buttons.
 *   It is wrapped in <div data-ete-root="1" style="…"> so it round-trips without nesting on re-save.
 * - onChange receives "" when the editor is empty, so `!body.trim()` validation keeps working.
 * - Merge tags are inserted as plain text, e.g. {{customerName}} (change with `formatMergeTag`).
 * - Images: upload via `uploadUrl` (+ `uploadFieldName`, `uploadHeaders`), or `onUpload(file) => url`,
 *   or paste a URL. Paste / drag-and-drop of image files works too.
 *
 * Also exported (handy for list cards and view dialogs):
 *   EmailPreviewFrame, buildEmailDocument, fillMergeTags, DEFAULT_MERGE_TAGS, isEmailHtmlEmpty
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ClipboardEvent, DragEvent, KeyboardEvent, MouseEvent, ReactNode } from "react";

/* ═══════════════════════════ public types & helpers ═══════════════════════════ */

export interface MergeTag {
    key: string;
    label: string;
    /** shown in Preview when "Sample data" is on */
    sample: string;
}

export const DEFAULT_MERGE_TAGS: MergeTag[] = [
    { key: "customerName", label: "Customer name", sample: "Priya Sharma" },
    { key: "customerEmail", label: "Customer email", sample: "priya@example.com" },
    { key: "customerPhone", label: "Customer phone", sample: "+91 98765 43210" },
    { key: "companyName", label: "Company name", sample: "Acme Pvt Ltd" },
    { key: "amount", label: "Amount", sample: "₹4,999" },
    { key: "dueDate", label: "Due date", sample: "30 Nov 2026" },
];

export const defaultFormatMergeTag = (key: string) => `{{${key}}}`;

export interface EmailTemplateEditorProps {
    value: string;
    onChange: (html: string) => void;
    placeholder?: string;
    /** min height of the writing area (px) */
    minHeight?: number;
    /** the writing area scrolls inside this height (px) */
    maxHeight?: number;
    mergeTags?: MergeTag[];
    formatMergeTag?: (key: string) => string;
    /** POST endpoint for image uploads. Expected response: { data: [url] } (also accepts { data: url } / { url }) */
    uploadUrl?: string;
    /** multipart field name the endpoint expects (default "image") */
    uploadFieldName?: string;
    uploadHeaders?: Record<string, string>;
    /** full control over uploading (e.g. your axios instance). Overrides uploadUrl. */
    onUpload?: (file: File) => Promise<string>;
    disabled?: boolean;
    invalid?: boolean;
    className?: string;
}

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const escHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ═══════════════════════════ sanitising & serialising ═══════════════════════════ */

const DROP_TAGS = new Set([
    "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK", "META", "FORM", "INPUT", "BUTTON", "TEXTAREA",
    "SELECT", "SVG", "NOSCRIPT", "TEMPLATE", "VIDEO", "AUDIO", "CANVAS", "TITLE", "HEAD",
]);
const ALLOWED_TAGS = new Set([
    "A", "B", "STRONG", "I", "EM", "U", "S", "STRIKE", "SPAN", "P", "DIV", "BR", "UL", "OL", "LI", "H1", "H2", "H3", "H4",
    "BLOCKQUOTE", "HR", "IMG", "TABLE", "TBODY", "THEAD", "TR", "TD", "TH", "SUB", "SUP",
]);
const BLOCK_TAGS = new Set(["P", "DIV", "UL", "OL", "LI", "H1", "H2", "H3", "H4", "BLOCKQUOTE", "HR", "TABLE", "TBODY", "THEAD", "TR", "TD", "TH"]);
const TAG_ATTRS: Record<string, string[]> = {
    A: ["href", "target", "rel", "title"],
    IMG: ["src", "alt", "width", "height", "title"],
    TABLE: ["role", "cellpadding", "cellspacing", "border", "align", "width", "bgcolor"],
    TD: ["align", "valign", "bgcolor", "colspan", "rowspan", "width"],
    TH: ["align", "valign", "bgcolor", "colspan", "rowspan", "width"],
    TR: ["align", "valign"],
    DIV: ["align"],
    P: ["align"],
};
const STYLE_OK =
    /^(color|background(-color)?|font(-family|-size|-weight|-style)?|text-(align|decoration|transform)|line-height|letter-spacing|margin(-(top|right|bottom|left))?|padding(-(top|right|bottom|left))?|border(-(top|right|bottom|left))?(-(width|style|color))?|border-radius|border-collapse|width|max-width|min-width|height|display|vertical-align|list-style-type|white-space)$/;
const PASTE_DROP = /^(margin|padding|line-height|width|max-width|min-width|height|font-family|font-size|border|display|white-space)/;
const SAFE_HREF = /^(https?:|mailto:|tel:|#|\/|\{\{)/i;
const SAFE_SRC = /^(https?:\/\/|\/|data:image\/(png|jpe?g|gif|webp);)/i;

const ROOT_STYLE = "font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1f2937";

function cleanStyle(el: HTMLElement, paste: boolean) {
    if (!el.getAttribute("style")) return;
    const out: string[] = [];
    el.style.cssText.split(";").forEach((decl) => {
        const i = decl.indexOf(":");
        if (i < 0) return;
        const prop = decl.slice(0, i).trim().toLowerCase();
        const val = decl.slice(i + 1).trim();
        if (!prop || !val || !STYLE_OK.test(prop)) return;
        if (paste && PASTE_DROP.test(prop)) return;
        if (/url\(|expression|javascript:|@import|behavior|-webkit-/i.test(val)) return;
        out.push(`${prop}:${val}`);
    });
    if (out.length) el.setAttribute("style", out.join(";"));
    else el.removeAttribute("style");
}

/** Removes everything that is not on the allow-list (in place). */
function cleanChildren(parent: Element, paste = false) {
    Array.from(parent.childNodes).forEach((node) => {
        if (node.nodeType === 8) return void node.parentNode?.removeChild(node);
        if (node.nodeType !== 1) return;
        const el = node as HTMLElement;
        const tag = el.tagName.toUpperCase();
        if (DROP_TAGS.has(tag)) return void el.remove();
        cleanChildren(el, paste);
        if (!ALLOWED_TAGS.has(tag)) return void el.replaceWith(...Array.from(el.childNodes));

        const allowed = new Set([...(TAG_ATTRS[tag] ?? []), "style", "data-ete", "data-ete-root"]);
        Array.from(el.attributes).forEach((a) => {
            if (!allowed.has(a.name.toLowerCase())) el.removeAttribute(a.name);
        });
        cleanStyle(el, paste);

        if (tag === "A") {
            const href = (el.getAttribute("href") || "").trim();
            if (!SAFE_HREF.test(href)) el.removeAttribute("href");
            if (el.getAttribute("target") === "_blank") el.setAttribute("rel", "noopener noreferrer");
            else {
                el.removeAttribute("target");
                el.removeAttribute("rel");
            }
        }
        if (tag === "IMG") {
            const src = (el.getAttribute("src") || "").trim();
            if (!SAFE_SRC.test(src)) return void el.remove();
        }
    });
}

function setDefault(el: HTMLElement, prop: string, value: string, aliases: string[] = []) {
    if ([prop, ...aliases].some((n) => el.style.getPropertyValue(n))) return;
    el.style.setProperty(prop, value);
}
const M = ["margin-top", "margin-right", "margin-bottom", "margin-left"];

/** Email clients ignore stylesheets, so give every element an inline baseline. */
function applyEmailDefaults(root: HTMLElement) {
    root.querySelectorAll<HTMLElement>("p,h1,h2,h3,h4,ul,ol,li,blockquote,a,img,hr").forEach((el) => {
        switch (el.tagName) {
            case "P":
                setDefault(el, "margin", "0 0 14px", M);
                break;
            case "H1":
                setDefault(el, "font-size", "28px");
                setDefault(el, "line-height", "1.25");
                setDefault(el, "font-weight", "700");
                setDefault(el, "margin", "0 0 16px", M);
                break;
            case "H2":
                setDefault(el, "font-size", "22px");
                setDefault(el, "line-height", "1.3");
                setDefault(el, "font-weight", "700");
                setDefault(el, "margin", "0 0 14px", M);
                break;
            case "H3":
                setDefault(el, "font-size", "18px");
                setDefault(el, "line-height", "1.35");
                setDefault(el, "font-weight", "700");
                setDefault(el, "margin", "0 0 12px", M);
                break;
            case "H4":
                setDefault(el, "font-size", "16px");
                setDefault(el, "font-weight", "700");
                setDefault(el, "margin", "0 0 10px", M);
                break;
            case "UL":
            case "OL":
                setDefault(el, "margin", "0 0 14px", M);
                setDefault(el, "padding-left", "24px", ["padding"]);
                break;
            case "LI":
                setDefault(el, "margin", "0 0 4px", M);
                break;
            case "BLOCKQUOTE":
                setDefault(el, "margin", "0 0 14px", M);
                setDefault(el, "padding", "4px 0 4px 16px", ["padding-left"]);
                setDefault(el, "border-left", "4px solid #d1d5db");
                setDefault(el, "color", "#4b5563");
                break;
            case "A":
                if (el.closest('[data-ete="button"]')) break;
                setDefault(el, "color", "#2563eb");
                setDefault(el, "text-decoration", "underline");
                break;
            case "IMG":
                setDefault(el, "max-width", "100%");
                setDefault(el, "height", "auto");
                setDefault(el, "border", "0");
                break;
            case "HR":
                setDefault(el, "border", "0");
                setDefault(el, "border-top", "1px solid #e5e7eb");
                setDefault(el, "margin", "20px 0", M);
                break;
        }
    });
}

const isEmptyEl = (el: Element) =>
    !(el.textContent || "").replace(/[\u200b\s]/g, "") && !el.querySelector("img,hr,table");

function serializeEditorHtml(root: HTMLElement): string {
    if (isEmptyEl(root)) return "";
    const clone = root.cloneNode(true) as HTMLElement;
    cleanChildren(clone);
    // drop trailing empty paragraphs (the spare line after inserted blocks)
    while (clone.children.length > 1) {
        const last = clone.lastElementChild as HTMLElement;
        if (/^(P|DIV)$/.test(last.tagName) && isEmptyEl(last)) last.remove();
        else break;
    }
    applyEmailDefaults(clone);
    clone.querySelectorAll<HTMLElement>("[style]").forEach((e) => cleanStyle(e, false)); // compact, stable style strings
    const inner = clone.innerHTML.replace(/\u200b/g, "").trim();
    return `<div data-ete-root="1" style="${ROOT_STYLE}">${inner}</div>`;
}

export function isEmailHtmlEmpty(html: string): boolean {
    if (!html || !html.trim()) return true;
    if (typeof DOMParser === "undefined") return false;
    return isEmptyEl(new DOMParser().parseFromString(html, "text/html").body);
}

/** Old builder output (full documents / <style> blocks) can't be edited faithfully in the visual tab. */
export const isLegacyHtml = (html: string) =>
    !!html && !/data-ete-root/.test(html) && /<style[\s>]|<html[\s>]|<!doctype|<head[\s>]|<body[\s>]/i.test(html);

function removeLayoutWhitespace(root: Element) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const kill: Node[] = [];
    let n: Node | null;
    while ((n = walker.nextNode())) {
        const t = n.textContent || "";
        if (!/^\s+$/.test(t) || !t.includes("\n")) continue;
        const prev = n.previousSibling as HTMLElement | null;
        const next = n.nextSibling as HTMLElement | null;
        const isBlock = (x: HTMLElement | null) => !x || (x.nodeType === 1 && BLOCK_TAGS.has(x.tagName));
        if (isBlock(prev) || isBlock(next)) kill.push(n);
    }
    kill.forEach((k) => k.parentNode?.removeChild(k));
}

/** stored value → HTML the editing surface can safely hold */
function htmlToEditorHtml(src: string): string {
    const s = (src || "").trim();
    if (!s) return "<p><br></p>";
    if (!/<[a-z][\s\S]*>/i.test(s)) {
        return s
            .split(/\n{2,}/)
            .map((p) => `<p>${escHtml(p).replace(/\n/g, "<br>")}</p>`)
            .join("");
    }
    const doc = new DOMParser().parseFromString(s, "text/html");
    let root: Element = doc.body;
    const kids = Array.from(root.childNodes).filter((n) => n.nodeType === 1 || (n.nodeType === 3 && (n.textContent || "").trim()));
    if (kids.length === 1 && kids[0].nodeType === 1 && (kids[0] as Element).hasAttribute("data-ete-root")) root = kids[0] as Element;
    cleanChildren(root);
    removeLayoutWhitespace(root);
    return root.innerHTML.trim() || "<p><br></p>";
}

function sanitizePasted(html: string): string {
    const doc = new DOMParser().parseFromString(html, "text/html");
    cleanChildren(doc.body, true);
    return doc.body.innerHTML;
}

const BLOCK_SPLIT = /<\/?(?:div|p|h[1-6]|ul|ol|li|table|tbody|thead|tr|td|th|blockquote|hr)\b[^>]*>/gi;
const prettyHtml = (html: string) => (/\n/.test(html) ? html : html.replace(BLOCK_SPLIT, (m) => "\n" + m).replace(/^\n/, ""));

/* ═══════════════════════════ preview helpers (exported) ═══════════════════════════ */

export function fillMergeTags(html: string, tags: MergeTag[], format: (k: string) => string = defaultFormatMergeTag, escape = true): string {
    let out = html;
    for (const t of tags) {
        if (!t.sample) continue;
        out = out.split(format(t.key)).join(escape ? escHtml(t.sample) : t.sample);
    }
    return out;
}




/** Wraps a body fragment in a minimal, responsive email-style page for iframe previews. */
export function buildEmailDocument(body: string): string {
    const raw = (body || "").trim();
    
    // 1. If it's already a full HTML document, return as is.
    if (/<html[\s>]/i.test(raw)) return raw;
    
    // 2. If it defines its own <body> (like the Diwali template), wrap it natively without the .paper div.
    if (/<body[\s>]/i.test(raw)) {
        return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>${raw}</html>`;
    }

    // 3. Simple text or WYSIWYG blocks (standard editor output) get the centered paper container.
    return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>
html,body{margin:0;padding:0}
body{background:#f1f5f9;padding:24px 12px;font-family:Arial,Helvetica,sans-serif}
.paper{max-width:640px;margin:0 auto;background:#fff;padding:32px;border-radius:8px;box-sizing:border-box}
img{max-width:100%;height:auto}
@media (max-width:480px){body{padding:0;background:#fff}.paper{padding:20px;border-radius:0}}
</style></head><body><div class="paper">${raw}</div></body></html>`;
}

export function EmailPreviewFrame({
    html,
    device = "desktop",
    sample = true,
    mergeTags = DEFAULT_MERGE_TAGS,
    formatMergeTag = defaultFormatMergeTag,
    minHeight = 320,
    className,
    title = "Email preview",
}: {
    html: string;
    device?: "desktop" | "mobile";
    sample?: boolean;
    mergeTags?: MergeTag[];
    formatMergeTag?: (k: string) => string;
    minHeight?: number;
    className?: string;
    title?: string;
}) {
    const doc = useMemo(
        () => buildEmailDocument(sample ? fillMergeTags(html, mergeTags, formatMergeTag) : html),
        [html, sample, mergeTags, formatMergeTag]
    );
    const ref = useRef<HTMLIFrameElement>(null);
    const ro = useRef<ResizeObserver | null>(null);
    const [h, setH] = useState(minHeight);

    useEffect(() => () => ro.current?.disconnect(), []);

    const onLoad = () => {
        const d = ref.current?.contentDocument;
        if (!d) return;
        const measure = () => setH(Math.max(minHeight, d.body.scrollHeight));
        measure();
        ro.current?.disconnect();
        ro.current = new ResizeObserver(measure);
        ro.current.observe(d.body);
    };

    return (
        <iframe
            ref={ref}
            title={title}
            sandbox="allow-same-origin"
            srcDoc={doc}
            onLoad={onLoad}
            style={{
                height: h,
                width: device === "mobile" ? 375 : "100%",
                maxWidth: device === "mobile" ? "100%" : 760,
                display: "block",
                margin: "0 auto",
            }}
            className={cx("border-0 bg-white", className)}
        />
    );
}

/* ═══════════════════════════ icons & small UI ═══════════════════════════ */

const I = {
    bold: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zM6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    italic: "M19 4h-9M14 20H5M15 4 9 20",
    underline: "M6 4v6a6 6 0 0 0 12 0V4M4 20h16",
    strike: "M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6M4 12h16",
    left: "M21 6H3M15 12H3M17 18H3",
    center: "M21 6H3M17 12H7M19 18H5",
    right: "M21 6H3M21 12H9M21 18H7",
    justify: "M3 6h18M3 12h18M3 18h18",
    ul: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    ol: "M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    image: "M3 5h18v14H3zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 15l-5-5L5 19",
    undo: "M3 7v6h6M3 13a9 9 0 1 0 3-7.7L3 8",
    redo: "M21 7v6h-6M21 13a9 9 0 1 1-3-7.7L21 8",
    eraser: "M7 21h10M5 17l9.5-9.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L11 19H7z",
    code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
    eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    pen: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z",
    monitor: "M3 4h18v12H3zM8 20h8M12 16v4",
    phone: "M7 2h10v20H7zM11 18h2",
    plus: "M12 5v14M5 12h14",
    chevron: "m6 9 6 6 6-6",
    braces: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
    trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6",
    blocks: "M3 3h18v18H3zM3 9h18M9 21V9",
    button: "M3 8h18v8H3zM8 12h8",
    divider: "M5 12h14",
    callout: "M4 4h16v16H4zM8 9h8M8 13h5",
    footer: "M3 4h18v16H3zM3 15h18M8 18h8",
    upload: "M12 3v12M7 8l5-5 5 5M5 21h14",
    x: "M18 6 6 18M6 6l12 12",
    check: "M20 6 9 17l-5-5",
    warn: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
};

const Ico = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
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

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1 ";
const smallBtn = "inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ";
const smallPrimary = smallBtn + "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] " + focusRing;
const smallSecondary = smallBtn + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 " + focusRing;
const fieldCls =
    "w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 " +
    "focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25";
const selectCls =
    "h-8 rounded-md border border-transparent bg-transparent px-1.5 text-sm text-slate-700 hover:bg-slate-200/70 cursor-pointer " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]";

function ToolBtn({
    label,
    onClick,
    active,
    disabled,
    children,
}: {
    label: string;
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    children: ReactNode;
}) {
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            aria-pressed={active}
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClick}
            className={cx(
                "flex h-8 min-w-8 items-center justify-center gap-0.5 rounded-md px-1.5 text-slate-700 cursor-pointer hover:bg-slate-200/70 disabled:cursor-not-allowed disabled:opacity-40",
                active && "!bg-[var(--color-primary-lighter)] !text-[var(--color-primary-darker)]",
                focusRing
            )}
        >
            {children}
        </button>
    );
}

const Sep = () => <span className="mx-1 h-5 w-px bg-slate-200" aria-hidden="true" />;

function PopWrap({ open, panel, children, align = "left" }: { open: boolean; panel: ReactNode; children: ReactNode; align?: "left" | "right" }) {
    return (
        <div className="relative">
            {children}
            {open && (
                <div
                    className={cx(
                        "absolute top-full z-30 mt-1.5 rounded-xl border border-slate-200 bg-white p-3 shadow-xl",
                        align === "right" ? "right-0" : "left-0"
                    )}
                >
                    {panel}
                </div>
            )}
        </div>
    );
}

const SWATCHES = [
    "#000000", "#374151", "#6b7280", "#9ca3af", "#ffffff",
    "#dc2626", "#ea580c", "#d97706", "#16a34a", "#0d9488",
    "#2563eb", "#7c3aed", "#db2777", "#be123c", "#0f766e",
    "#fecaca", "#fed7aa", "#fef08a", "#bbf7d0", "#bfdbfe",
];

function ColorPanel({ onPick, onClear, clearLabel }: { onPick: (hex: string) => void; onClear: () => void; clearLabel: string }) {
    const [custom, setCustom] = useState("#2563eb");
    return (
        <div className="w-56 space-y-3">
            <div className="grid grid-cols-5 gap-1.5">
                {SWATCHES.map((c) => (
                    <button
                        key={c}
                        type="button"
                        aria-label={c}
                        title={c}
                        onClick={() => onPick(c)}
                        style={{ backgroundColor: c }}
                        className={cx("h-8 w-8 rounded-md border border-slate-300 cursor-pointer hover:scale-105", focusRing)}
                    />
                ))}
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="color"
                    aria-label="Custom colour"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="h-9 w-12 cursor-pointer rounded-md border border-slate-300 bg-white p-0.5"
                />
                <button type="button" className={cx(smallSecondary, "flex-1")} onClick={() => onPick(custom)}>
                    Use colour
                </button>
            </div>
            <button type="button" className="w-full rounded-md py-1.5 text-sm text-slate-600 hover:bg-slate-100 cursor-pointer" onClick={onClear}>
                {clearLabel}
            </button>
        </div>
    );
}

/* ═══════════════════════════ editing utilities ═══════════════════════════ */

function toHex(c: string): string {
    const v = (c || "").trim().toLowerCase();
    if (/^#[0-9a-f]{6}$/.test(v)) return v;
    if (/^#[0-9a-f]{3}$/.test(v)) return "#" + v.slice(1).split("").map((x) => x + x).join("");
    const m = v.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/);
    if (m) return "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("");
    return "#000000";
}

function brandColor(): string {
    try {
        const v = getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim();
        if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) return toHex(v);
    } catch {
        /* fall through */
    }
    return "#2563eb";
}

function normalizeUrl(raw: string): string {
    const v = raw.trim();
    if (!v) return "";
    if (/^(https?:|mailto:|tel:|#|\/|\{\{)/i.test(v)) return v;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "mailto:" + v;
    return "https://" + v;
}

const FONT_FAMILIES = [
    { label: "Arial", value: "Arial, Helvetica, sans-serif" },
    { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
    { label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
    { label: "Trebuchet MS", value: "'Trebuchet MS', Helvetica, sans-serif" },
    { label: "Georgia", value: "Georgia, 'Times New Roman', serif" },
    { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
    { label: "Courier New", value: "'Courier New', Courier, monospace" },
];
const FONT_SIZES = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40];

const buttonHtml = (label: string, url: string, bg: string, fg: string) =>
    `<table role="presentation" data-ete="button" contenteditable="false" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:16px auto;border-collapse:separate"><tbody><tr><td align="center" bgcolor="${bg}" style="background-color:${bg};border-radius:8px"><a href="${escHtml(url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 28px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:${fg};text-decoration:none;border-radius:8px">${escHtml(label)}</a></td></tr></tbody></table><p><br></p>`;

const calloutHtml = (accent: string) =>
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:16px 0"><tbody><tr><td style="background-color:#f1f5f9;border-left:4px solid ${accent};padding:16px 20px;border-radius:6px">Write your highlighted message here.</td></tr></tbody></table><p><br></p>`;

const dividerHtml = `<hr style="border:0;border-top:1px solid #e5e7eb;margin:20px 0"><p><br></p>`;

const footerHtml = `<p style="text-align:center;font-size:12px;color:#6b7280;margin:24px 0 0">You are receiving this email because you are a customer of ours.<br>Company name · Street address, City</p>`;

type Mode = "visual" | "code" | "preview";
type PopName = null | "color" | "hilite" | "link" | "image" | "blocks" | "tags";
interface Fmt {
    bold: boolean; italic: boolean; underline: boolean; strike: boolean;
    ul: boolean; ol: boolean; left: boolean; center: boolean; right: boolean; justify: boolean;
    block: string;
}
const EMPTY_FMT: Fmt = { bold: false, italic: false, underline: false, strike: false, ul: false, ol: false, left: true, center: false, right: false, justify: false, block: "p" };

const EDITOR_CSS = `
.ete-surface{outline:none;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1f2937;overflow-wrap:anywhere}
.ete-surface p{margin:0 0 14px}
.ete-surface h1{font-size:28px;line-height:1.25;font-weight:700;margin:0 0 16px}
.ete-surface h2{font-size:22px;line-height:1.3;font-weight:700;margin:0 0 14px}
.ete-surface h3{font-size:18px;line-height:1.35;font-weight:700;margin:0 0 12px}
.ete-surface h4{font-size:16px;font-weight:700;margin:0 0 10px}
.ete-surface ul{list-style:disc;margin:0 0 14px;padding-left:24px}
.ete-surface ol{list-style:decimal;margin:0 0 14px;padding-left:24px}
.ete-surface li{margin:0 0 4px}
.ete-surface blockquote{border-left:4px solid #d1d5db;margin:0 0 14px;padding:4px 0 4px 16px;color:#4b5563}
.ete-surface a{color:#2563eb;text-decoration:underline;cursor:text}
.ete-surface hr{border:0;border-top:1px solid #e5e7eb;margin:20px 0}
.ete-surface img{max-width:100%;height:auto;cursor:pointer}
.ete-surface table{border-collapse:collapse}
.ete-surface [data-ete="button"]{cursor:pointer}
.ete-surface [data-ete="button"] a{cursor:pointer}
.ete-surface [data-ete-sel]{outline:2px solid var(--color-primary,#2563eb);outline-offset:3px}
`;

/* ═══════════════════════════ inspectors (selected image / button) ═══════════════════════════ */

function ImageInspector({
    el, onChange, onAlign, onDelete,
}: { el: HTMLImageElement; onChange: () => void; onAlign: (a: "left" | "center" | "right") => void; onDelete: () => void }) {
    const width = el.style.width || "";
    const align = el.parentElement?.style.textAlign || "left";
    const setWidth = (w: string) => {
        if (w) el.style.width = w;
        else el.style.removeProperty("width");
        el.style.height = "auto";
        onChange();
    };
    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 bg-[var(--color-primary-lighter)]/40 px-3 py-2 text-sm">
            <span className="font-medium text-slate-800">Image</span>
            <div className="flex items-center gap-1" role="group" aria-label="Image width">
                {[["Auto", ""], ["25%", "25%"], ["50%", "50%"], ["75%", "75%"], ["100%", "100%"]].map(([l, v]) => (
                    <button
                        key={l}
                        type="button"
                        onClick={() => setWidth(v)}
                        aria-pressed={width === v}
                        className={cx("rounded-md border px-2 py-1 text-xs cursor-pointer", width === v ? "border-[var(--color-primary)] bg-white font-medium text-[var(--color-primary-darker)]" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50", focusRing)}
                    >
                        {l}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-1" role="group" aria-label="Image alignment">
                {(["left", "center", "right"] as const).map((a) => (
                    <button
                        key={a}
                        type="button"
                        aria-label={`Align ${a}`}
                        aria-pressed={align === a}
                        onClick={() => onAlign(a)}
                        className={cx("flex h-7 w-7 items-center justify-center rounded-md border cursor-pointer", align === a ? "border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)]" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50", focusRing)}
                    >
                        <Ico d={I[a]} className="h-3.5 w-3.5" />
                    </button>
                ))}
            </div>
            <label className="flex min-w-[180px] flex-1 items-center gap-2">
                <span className="text-slate-600">Alt text</span>
                <input
                    className={cx(fieldCls, "!py-1")}
                    value={el.getAttribute("alt") || ""}
                    placeholder="Describe the image"
                    onChange={(e) => { el.setAttribute("alt", e.target.value); onChange(); }}
                />
            </label>
            <button type="button" onClick={onDelete} className={cx(smallBtn, "!py-1 text-red-600 hover:bg-red-50", focusRing)}>
                <Ico d={I.trash} className="h-3.5 w-3.5" /> Remove
            </button>
        </div>
    );
}

function ButtonInspector({ el, onChange, onDelete }: { el: HTMLElement; onChange: () => void; onDelete: () => void }) {
    const a = el.querySelector("a") as HTMLAnchorElement | null;
    const td = el.querySelector("td") as HTMLElement | null;
    if (!a || !td) return null;
    const bg = toHex(td.getAttribute("bgcolor") || td.style.backgroundColor || "#2563eb");
    const fg = toHex(a.style.color || "#ffffff");
    const radius = parseInt(td.style.borderRadius || "8", 10);
    const align = el.getAttribute("align") || "center";

    const setBg = (v: string) => { td.setAttribute("bgcolor", v); td.style.backgroundColor = v; onChange(); };
    const setFg = (v: string) => { a.style.color = v; onChange(); };
    const setRadius = (r: number) => { td.style.borderRadius = r + "px"; a.style.borderRadius = r + "px"; onChange(); };
    const setAlign = (v: "left" | "center" | "right") => {
        el.setAttribute("align", v);
        el.style.margin = v === "center" ? "16px auto" : v === "left" ? "16px auto 16px 0" : "16px 0 16px auto";
        onChange();
    };

    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-200 bg-[var(--color-primary-lighter)]/40 px-3 py-2 text-sm">
            <span className="font-medium text-slate-800">Button</span>
            <label className="flex items-center gap-2">
                <span className="text-slate-600">Label</span>
                <input className={cx(fieldCls, "!w-36 !py-1")} value={a.textContent || ""} onChange={(e) => { a.textContent = e.target.value; onChange(); }} />
            </label>
            <label className="flex min-w-[200px] flex-1 items-center gap-2">
                <span className="text-slate-600">Link</span>
                <input
                    className={cx(fieldCls, "!py-1")}
                    value={a.getAttribute("href") || ""}
                    placeholder="https://"
                    onChange={(e) => { a.setAttribute("href", e.target.value); onChange(); }}
                    onBlur={(e) => { a.setAttribute("href", normalizeUrl(e.target.value) || "#"); onChange(); }}
                />
            </label>
            <label className="flex items-center gap-1.5">
                <span className="text-slate-600">Fill</span>
                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="h-7 w-9 cursor-pointer rounded border border-slate-300 bg-white p-0.5" />
            </label>
            <label className="flex items-center gap-1.5">
                <span className="text-slate-600">Text</span>
                <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="h-7 w-9 cursor-pointer rounded border border-slate-300 bg-white p-0.5" />
            </label>
            <select aria-label="Corners" value={radius >= 30 ? 999 : radius === 0 ? 0 : 8} onChange={(e) => setRadius(Number(e.target.value))} className={cx(fieldCls, "!w-auto !py-1")}>
                <option value={0}>Square</option>
                <option value={8}>Rounded</option>
                <option value={999}>Pill</option>
            </select>
            <div className="flex items-center gap-1" role="group" aria-label="Button alignment">
                {(["left", "center", "right"] as const).map((v) => (
                    <button
                        key={v}
                        type="button"
                        aria-label={`Align ${v}`}
                        aria-pressed={align === v}
                        onClick={() => setAlign(v)}
                        className={cx("flex h-7 w-7 items-center justify-center rounded-md border cursor-pointer", align === v ? "border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)]" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50", focusRing)}
                    >
                        <Ico d={I[v]} className="h-3.5 w-3.5" />
                    </button>
                ))}
            </div>
            <button type="button" onClick={onDelete} className={cx(smallBtn, "!py-1 text-red-600 hover:bg-red-50", focusRing)}>
                <Ico d={I.trash} className="h-3.5 w-3.5" /> Remove
            </button>
        </div>
    );
}

/* ═══════════════════════════ the editor ═══════════════════════════ */

export default function EmailTemplateEditor({
    value,
    onChange,
    placeholder = "Start writing your email, or use the toolbar to add images, buttons and merge tags…",
    minHeight = 420,
    maxHeight = 680,
    mergeTags = DEFAULT_MERGE_TAGS,
    formatMergeTag = defaultFormatMergeTag,
    uploadUrl,
    uploadFieldName = "image",
    uploadHeaders,
    onUpload,
    disabled = false,
    invalid = false,
    className,
}: EmailTemplateEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const savedRange = useRef<Range | null>(null);
    const lastEmitted = useRef(value);
    const valueRef = useRef(value);
    const onChangeRef = useRef(onChange);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dirty = useRef(false);
    const stale = useRef(false);
    valueRef.current = value;
    onChangeRef.current = onChange;

    const [mode, setMode] = useState<Mode>(() => (isLegacyHtml(value) ? "code" : "visual"));
    const [pop, setPop] = useState<PopName>(null);
    const [fmt, setFmt] = useState<Fmt>(EMPTY_FMT);
    const [empty, setEmpty] = useState(!value);
    const [stats, setStats] = useState({ words: 0, chars: 0 });
    const [selected, setSelected] = useState<{ kind: "image" | "button"; el: HTMLElement } | null>(null);
    const [, bump] = useState(0);
    const [legacyNote, setLegacyNote] = useState(() => isLegacyHtml(value));
    const [previewHtml, setPreviewHtml] = useState(value);
    const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
    const [sample, setSample] = useState(true);
    const [msg, setMsg] = useState<{ tone: "error" | "info"; text: string } | null>(null);

    const [linkUrl, setLinkUrl] = useState("");
    const [linkNewTab, setLinkNewTab] = useState(true);
    const [imgUrl, setImgUrl] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [imgBusy, setImgBusy] = useState(false);

    const canUpload = !!(onUpload || uploadUrl);

    useEffect(() => {
        if (!msg) return;
        const t = setTimeout(() => setMsg(null), 7000);
        return () => clearTimeout(t);
    }, [msg]);

    /* ── emit / load ── */

    const flush = useCallback((): string => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
        const ed = editorRef.current;
        if (!ed || !dirty.current) return valueRef.current;
        const html = serializeEditorHtml(ed);
        dirty.current = false;
        if (html !== lastEmitted.current) {
            lastEmitted.current = html;
            onChangeRef.current(html);
        }
        return html;
    }, []);

    const refreshMeta = useCallback(() => {
        const ed = editorRef.current;
        if (!ed) return;
        const text = (ed.textContent || "").replace(/\u200b/g, "").trim();
        setEmpty(!text && !ed.querySelector("img,hr,table"));
        setStats({ words: text ? text.split(/\s+/).length : 0, chars: text.length });
    }, []);

    const refreshFmt = useCallback(() => {
        try {
            const q = (c: string) => document.queryCommandState(c);
            let block = (document.queryCommandValue("formatBlock") || "").toLowerCase().replace(/[<>]/g, "");
            if (block.startsWith("heading ")) block = "h" + block.slice(8);
            if (!["h1", "h2", "h3", "blockquote"].includes(block)) block = "p";
            const next: Fmt = {
                bold: q("bold"), italic: q("italic"), underline: q("underline"), strike: q("strikeThrough"),
                ul: q("insertUnorderedList"), ol: q("insertOrderedList"),
                left: q("justifyLeft"), center: q("justifyCenter"), right: q("justifyRight"), justify: q("justifyFull"),
                block,
            };
            setFmt((p) => (JSON.stringify(p) === JSON.stringify(next) ? p : next));
        } catch {
            /* queryCommand* can throw when nothing is focused */
        }
    }, []);

    const loadIntoEditor = useCallback(
        (html: string) => {
            const ed = editorRef.current;
            if (!ed) return;
            ed.innerHTML = htmlToEditorHtml(html);
            ed.querySelectorAll('[data-ete="button"]').forEach((e) => e.setAttribute("contenteditable", "false"));
            dirty.current = false;
            stale.current = false;
            lastEmitted.current = html;
            savedRange.current = null;
            setSelected(null);
            setLegacyNote(isLegacyHtml(html));
            refreshMeta();
        },
        [refreshMeta]
    );

    // first mount
    useEffect(() => {
        loadIntoEditor(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // value changed from outside (e.g. the edit page finished loading)
    useEffect(() => {
        if (value === lastEmitted.current) return;
        lastEmitted.current = value;
        if (isLegacyHtml(value)) {
            setMode("code");
            stale.current = true;
        } else if (mode === "visual") loadIntoEditor(value);
        else stale.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const schedule = useCallback(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(flush, 150);
    }, [flush]);

    const afterEdit = useCallback(() => {
        const ed = editorRef.current;
        if (ed) {
            ed.querySelectorAll('[data-ete="button"]:not([contenteditable])').forEach((e) => e.setAttribute("contenteditable", "false"));
        }
        dirty.current = true;
        schedule();
        refreshMeta();
        refreshFmt();
        bump((n) => n + 1);
    }, [schedule, refreshMeta, refreshFmt]);

    /* ── selection handling ── */

    useEffect(() => {
        const onSel = () => {
            const ed = editorRef.current;
            const sel = window.getSelection();
            if (!ed || !sel || sel.rangeCount === 0 || !ed.contains(sel.anchorNode)) return;
            savedRange.current = sel.getRangeAt(0).cloneRange();
            refreshFmt();
        };
        document.addEventListener("selectionchange", onSel);
        return () => document.removeEventListener("selectionchange", onSel);
    }, [refreshFmt]);

    useEffect(() => {
        if (!pop) return;
        const onDown = (e: globalThis.MouseEvent) => {
            if (!toolbarRef.current?.contains(e.target as Node)) setPop(null);
        };
        const onKey = (e: globalThis.KeyboardEvent) => e.key === "Escape" && setPop(null);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [pop]);

    const focusEditor = () => {
        const ed = editorRef.current;
        if (!ed) return;
        if (document.activeElement !== ed) ed.focus({ preventScroll: true });
        const sel = window.getSelection();
        if (!sel) return;
        const r = savedRange.current;
        if (document.activeElement !== ed || !sel.rangeCount || !ed.contains(sel.anchorNode)) {
            if (r && ed.contains(r.commonAncestorContainer)) {
                sel.removeAllRanges();
                sel.addRange(r);
            } else {
                const nr = document.createRange();
                nr.selectNodeContents(ed);
                nr.collapse(false);
                sel.removeAllRanges();
                sel.addRange(nr);
            }
        }
    };

    const run = (fn: () => void) => {
        if (disabled || mode !== "visual") return;
        focusEditor();
        fn();
        afterEdit();
    };

    const cmd = (name: string, arg?: string) =>
        run(() => {
            document.execCommand("styleWithCSS", false, "true");
            document.execCommand(name, false, arg);
        });

    const insertHtml = (html: string) => run(() => document.execCommand("insertHTML", false, html));

    const closestFromSelection = (selector: string): HTMLElement | null => {
        const ed = editorRef.current;
        const n = savedRange.current?.startContainer;
        if (!ed || !n) return null;
        const el = n.nodeType === 1 ? (n as Element) : n.parentElement;
        if (!el || !ed.contains(el)) return null;
        return el.closest<HTMLElement>(selector);
    };

    /* ── formatting commands ── */

    const applyFontSize = (px: number) => {
        if (!px) return;
        run(() => {
            const ed = editorRef.current!;
            const sel = window.getSelection();
            if (!sel || !sel.rangeCount) return;
            const range = sel.getRangeAt(0);
            if (range.collapsed) {
                const span = document.createElement("span");
                span.style.fontSize = px + "px";
                span.textContent = "\u200b";
                range.insertNode(span);
                const r = document.createRange();
                r.setStart(span.firstChild!, 1);
                r.collapse(true);
                sel.removeAllRanges();
                sel.addRange(r);
                return;
            }
            document.execCommand("styleWithCSS", false, "false");
            document.execCommand("fontSize", false, "7");
            document.execCommand("styleWithCSS", false, "true");
            const made: HTMLElement[] = [];
            ed.querySelectorAll<HTMLElement>('font[size="7"]').forEach((f) => {
                const s = document.createElement("span");
                s.style.fontSize = px + "px";
                while (f.firstChild) s.appendChild(f.firstChild);
                s.querySelectorAll<HTMLElement>("[style*='font-size']").forEach((x) => x.style.removeProperty("font-size"));
                f.replaceWith(s);
                made.push(s);
            });
            if (made.length) {
                const r = document.createRange();
                r.setStartBefore(made[0]);
                r.setEndAfter(made[made.length - 1]);
                sel.removeAllRanges();
                sel.addRange(r);
            }
        });
    };

    const applyColor = (kind: "foreColor" | "hiliteColor", color: string | null) => {
        if (kind === "foreColor") cmd("foreColor", color ?? "#1f2937");
        else {
            if (color) cmd("hiliteColor", color);
            else cmd("hiliteColor", "transparent");
        }
        setPop(null);
    };

    const clearFormatting = () =>
        run(() => {
            document.execCommand("removeFormat");
            document.execCommand("unlink");
            document.execCommand("formatBlock", false, "<p>");
        });

    /* ── links ── */

    const openLink = () => {
        if (disabled || mode !== "visual") return;
        const a = closestFromSelection("a") as HTMLAnchorElement | null;
        setLinkUrl(a?.getAttribute("href") || "");
        setLinkNewTab(a ? a.getAttribute("target") === "_blank" : true);
        setPop((p) => (p === "link" ? null : "link"));
    };

    const applyLink = () => {
        const url = normalizeUrl(linkUrl);
        if (!url) return;
        run(() => {
            const ed = editorRef.current!;
            const sel = window.getSelection();
            const existing = closestFromSelection("a") as HTMLAnchorElement | null;
            const setTarget = (a: HTMLElement) => {
                if (linkNewTab) {
                    a.setAttribute("target", "_blank");
                    a.setAttribute("rel", "noopener noreferrer");
                } else {
                    a.removeAttribute("target");
                    a.removeAttribute("rel");
                }
            };
            if (existing) {
                existing.setAttribute("href", url);
                setTarget(existing);
                return;
            }
            if (!sel || sel.isCollapsed) {
                document.execCommand(
                    "insertHTML",
                    false,
                    `<a href="${escHtml(url)}"${linkNewTab ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escHtml(linkUrl.trim())}</a>`
                );
                return;
            }
            document.execCommand("createLink", false, url);
            ed.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
                if (a.getAttribute("href") === url && !a.closest('[data-ete="button"]')) setTarget(a);
            });
        });
        setPop(null);
    };

    const removeLink = () => {
        run(() => {
            const a = closestFromSelection("a");
            if (a && window.getSelection()?.isCollapsed) {
                const r = document.createRange();
                r.selectNodeContents(a);
                const sel = window.getSelection()!;
                sel.removeAllRanges();
                sel.addRange(r);
            }
            document.execCommand("unlink");
        });
        setPop(null);
    };

    /* ── images ── */

    const upload = async (file: File): Promise<string> => {
        if (!file.type.startsWith("image/")) throw new Error("Please choose an image file (PNG, JPG, GIF or WebP).");
        if (file.size > 5 * 1024 * 1024) throw new Error("That image is larger than 5 MB. Please use a smaller one.");
        if (onUpload) return onUpload(file);
        if (!uploadUrl) throw new Error("Image upload isn't set up here. Paste an image link instead.");
        const fd = new FormData();
        fd.append(uploadFieldName, file);
        const res = await fetch(uploadUrl, { method: "POST", body: fd, headers: uploadHeaders, credentials: "include" });
        if (!res.ok) throw new Error(`Upload failed (${res.status}). Please try again.`);
        const json = await res.json().catch(() => null);
        const d = json?.data;
        const url = Array.isArray(d) ? d[0] : typeof d === "string" ? d : d?.url ?? json?.url ?? json?.secure_url;
        if (typeof url !== "string" || !url) throw new Error("The upload worked but no image link came back.");
        return url;
    };

    const insertImage = (src: string, alt: string) =>
        insertHtml(`<img src="${escHtml(src)}" alt="${escHtml(alt)}" style="max-width:100%;height:auto;border:0;display:inline-block">`);

    const handleFiles = async (files: File[]) => {
        const list = files.filter((f) => f.type.startsWith("image/"));
        if (!list.length) return;
        setImgBusy(true);
        try {
            for (const f of list) {
                const url = await upload(f);
                insertImage(url, f.name.replace(/\.[^.]+$/, ""));
            }
            setPop(null);
        } catch (e) {
            setMsg({ tone: "error", text: e instanceof Error ? e.message : "Couldn't add that image." });
        } finally {
            setImgBusy(false);
        }
    };

    const alignSelectedImage = (a: "left" | "center" | "right") => {
        const el = selected?.el;
        const ed = editorRef.current;
        if (!el || !ed) return;
        let host = el.parentElement;
        if (host === ed) {
            const p = document.createElement("p");
            el.replaceWith(p);
            p.appendChild(el);
            host = p;
        }
        if (host) host.style.textAlign = a;
        afterEdit();
    };

    /* ── blocks ── */

    const insertBlock = (kind: "button" | "divider" | "callout" | "footer") => {
        setPop(null);
        if (kind === "button") insertHtml(buttonHtml("Click here", "https://", brandColor(), "#ffffff"));
        if (kind === "divider") insertHtml(dividerHtml);
        if (kind === "callout") insertHtml(calloutHtml(brandColor()));
        if (kind === "footer") insertHtml(footerHtml);
        // select a freshly inserted button so its settings open straight away
        if (kind === "button") {
            requestAnimationFrame(() => {
                const all = editorRef.current?.querySelectorAll<HTMLElement>('[data-ete="button"]');
                const last = all?.[all.length - 1];
                if (last) selectEl("button", last);
            });
        }
    };

    const clearSel = () => editorRef.current?.querySelectorAll("[data-ete-sel]").forEach((e) => e.removeAttribute("data-ete-sel"));
    const selectEl = (kind: "image" | "button", el: HTMLElement) => {
        clearSel();
        el.setAttribute("data-ete-sel", "1");
        setSelected({ kind, el });
    };

    const deleteSelected = () => {
        selected?.el.remove();
        setSelected(null);
        afterEdit();
    };

    /* ── event handlers on the writing surface ── */

    const onSurfaceClick = (e: MouseEvent<HTMLDivElement>) => {
        setPop(null);
        const t = e.target as HTMLElement;
        const btn = t.closest<HTMLElement>('[data-ete="button"]');
        const img = t.closest("img");
        if (btn) selectEl("button", btn);
        else if (img) selectEl("image", img as HTMLElement);
        else {
            clearSel();
            setSelected(null);
        }
    };

    const onSurfaceKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            openLink();
        }
        if (e.key === "Escape") {
            clearSel();
            setSelected(null);
        }
    };

    const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
        const files = Array.from(e.clipboardData.files).filter((f) => f.type.startsWith("image/"));
        e.preventDefault();
        if (files.length) {
            handleFiles(files);
            return;
        }
        const html = e.clipboardData.getData("text/html");
        const text = e.clipboardData.getData("text/plain");
        if (html) document.execCommand("insertHTML", false, sanitizePasted(html));
        else document.execCommand("insertText", false, text);
        afterEdit();
    };

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        const files = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image/"));
        if (!files.length) return;
        e.preventDefault();
        const doc = document as Document & { caretRangeFromPoint?: (x: number, y: number) => Range | null };
        const r = doc.caretRangeFromPoint?.(e.clientX, e.clientY);
        if (r) {
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(r);
            savedRange.current = r.cloneRange();
        }
        handleFiles(files);
    };

    const onInput = () => {
        const ed = editorRef.current!;
        if (!ed.firstChild || ed.innerHTML === "<br>") {
            ed.innerHTML = "<p><br></p>";
            const r = document.createRange();
            r.setStart(ed.firstChild!, 0);
            r.collapse(true);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(r);
        }
        afterEdit();
    };

    const onFocus = () => {
        try {
            document.execCommand("defaultParagraphSeparator", false, "p");
            document.execCommand("styleWithCSS", false, "true");
        } catch {
            /* not supported — harmless */
        }
    };

    /* ── tabs ── */

    const switchMode = (next: Mode) => {
        if (next === mode) return;
        setPop(null);
        let html = valueRef.current;
        if (mode === "visual") html = flush();
        if (next === "visual") {
            if (stale.current || mode === "code") loadIntoEditor(html);
        }
        if (next === "code") {
            const pretty = prettyHtml(html);
            if (pretty !== html) {
                lastEmitted.current = pretty;
                onChangeRef.current(pretty);
            }
            stale.current = true;
        }
        if (next === "preview") setPreviewHtml(html);
        setMode(next);
    };

    const tagExample = mergeTags[0] ? formatMergeTag(mergeTags[0].key) : "{{name}}";

    /* ═══════════ render ═══════════ */
    return (
        <div className={cx("rounded-xl border bg-white", invalid ? "border-red-400" : "border-slate-300", className)}>
            <style>{EDITOR_CSS}</style>

            {/* tab bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border-b border-slate-200 bg-slate-50 px-2 py-1.5">
                <div role="tablist" aria-label="Editor view" className="flex gap-1">
                    {([
                        ["visual", "Visual", I.pen],
                        ["code", "HTML", I.code],
                        ["preview", "Preview", I.eye],
                    ] as const).map(([m, label, icon]) => (
                        <button
                            key={m}
                            role="tab"
                            type="button"
                            aria-selected={mode === m}
                            onClick={() => switchMode(m)}
                            className={cx(
                                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium cursor-pointer",
                                mode === m ? "bg-white text-[var(--color-primary-darker)] shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-200/60",
                                focusRing
                            )}
                        >
                            <Ico d={icon} className="h-3.5 w-3.5" />
                            {label}
                        </button>
                    ))}
                </div>

                {mode === "preview" && (
                    <div className="flex flex-wrap items-center gap-3">
                        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                            <input type="checkbox" checked={sample} onChange={(e) => setSample(e.target.checked)} className="h-4 w-4 accent-[var(--color-primary)]" />
                            Sample data
                        </label>
                        <div role="group" aria-label="Preview device" className="flex rounded-lg border border-slate-300 bg-white p-0.5">
                            {([
                                ["desktop", "Desktop", I.monitor],
                                ["mobile", "Mobile", I.phone],
                            ] as const).map(([d, label, icon]) => (
                                <button
                                    key={d}
                                    type="button"
                                    aria-pressed={device === d}
                                    onClick={() => setDevice(d)}
                                    className={cx(
                                        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm cursor-pointer",
                                        device === d ? "bg-[var(--color-primary)] text-white" : "text-slate-700 hover:bg-slate-100",
                                        focusRing
                                    )}
                                >
                                    <Ico d={icon} className="h-3.5 w-3.5" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* toolbar */}
            {mode === "visual" && (
                <div ref={toolbarRef} className="relative z-20 flex flex-wrap items-center gap-x-0.5 gap-y-1 border-b border-slate-200 bg-white px-2 py-1.5">
                    <ToolBtn label="Undo (Ctrl+Z)" disabled={disabled} onClick={() => cmd("undo")}><Ico d={I.undo} /></ToolBtn>
                    <ToolBtn label="Redo (Ctrl+Y)" disabled={disabled} onClick={() => cmd("redo")}><Ico d={I.redo} /></ToolBtn>
                    <Sep />

                    <select aria-label="Text style" disabled={disabled} value={fmt.block} onChange={(e) => cmd("formatBlock", `<${e.target.value}>`)} className={selectCls}>
                        <option value="p">Paragraph</option>
                        <option value="h1">Heading 1</option>
                        <option value="h2">Heading 2</option>
                        <option value="h3">Heading 3</option>
                        <option value="blockquote">Quote</option>
                    </select>
                    <select
                        aria-label="Font"
                        disabled={disabled}
                        value=""
                        onChange={(e) => e.target.value && cmd("fontName", e.target.value)}
                        className={selectCls}
                    >
                        <option value="">Font</option>
                        {FONT_FAMILIES.map((f) => (
                            <option key={f.label} value={f.value}>{f.label}</option>
                        ))}
                    </select>
                    <select aria-label="Font size" disabled={disabled} value="" onChange={(e) => applyFontSize(Number(e.target.value))} className={selectCls}>
                        <option value="">Size</option>
                        {FONT_SIZES.map((s) => (
                            <option key={s} value={s}>{s}px</option>
                        ))}
                    </select>
                    <Sep />

                    <ToolBtn label="Bold (Ctrl+B)" active={fmt.bold} disabled={disabled} onClick={() => cmd("bold")}><Ico d={I.bold} /></ToolBtn>
                    <ToolBtn label="Italic (Ctrl+I)" active={fmt.italic} disabled={disabled} onClick={() => cmd("italic")}><Ico d={I.italic} /></ToolBtn>
                    <ToolBtn label="Underline (Ctrl+U)" active={fmt.underline} disabled={disabled} onClick={() => cmd("underline")}><Ico d={I.underline} /></ToolBtn>
                    <ToolBtn label="Strikethrough" active={fmt.strike} disabled={disabled} onClick={() => cmd("strikeThrough")}><Ico d={I.strike} /></ToolBtn>

                    <PopWrap open={pop === "color"} panel={<ColorPanel onPick={(c) => applyColor("foreColor", c)} onClear={() => applyColor("foreColor", null)} clearLabel="Default text colour" />}>
                        <ToolBtn label="Text colour" disabled={disabled} onClick={() => setPop((p) => (p === "color" ? null : "color"))}>
                            <span className="text-[15px] font-bold leading-none">A</span>
                            <Ico d={I.chevron} className="h-3 w-3" />
                        </ToolBtn>
                    </PopWrap>
                    <PopWrap open={pop === "hilite"} panel={<ColorPanel onPick={(c) => applyColor("hiliteColor", c)} onClear={() => applyColor("hiliteColor", null)} clearLabel="Remove highlight" />}>
                        <ToolBtn label="Highlight colour" disabled={disabled} onClick={() => setPop((p) => (p === "hilite" ? null : "hilite"))}>
                            <span className="rounded-sm bg-yellow-200 px-1 text-[13px] font-bold leading-4">ab</span>
                            <Ico d={I.chevron} className="h-3 w-3" />
                        </ToolBtn>
                    </PopWrap>
                    <Sep />

                    <ToolBtn label="Align left" active={fmt.left} disabled={disabled} onClick={() => cmd("justifyLeft")}><Ico d={I.left} /></ToolBtn>
                    <ToolBtn label="Align centre" active={fmt.center} disabled={disabled} onClick={() => cmd("justifyCenter")}><Ico d={I.center} /></ToolBtn>
                    <ToolBtn label="Align right" active={fmt.right} disabled={disabled} onClick={() => cmd("justifyRight")}><Ico d={I.right} /></ToolBtn>
                    <ToolBtn label="Justify" active={fmt.justify} disabled={disabled} onClick={() => cmd("justifyFull")}><Ico d={I.justify} /></ToolBtn>
                    <Sep />

                    <ToolBtn label="Bulleted list" active={fmt.ul} disabled={disabled} onClick={() => cmd("insertUnorderedList")}><Ico d={I.ul} /></ToolBtn>
                    <ToolBtn label="Numbered list" active={fmt.ol} disabled={disabled} onClick={() => cmd("insertOrderedList")}><Ico d={I.ol} /></ToolBtn>
                    <Sep />

                    <PopWrap
                        open={pop === "link"}
                        panel={
                            <form
                                className="w-72 space-y-3"
                                onSubmit={(e) => { e.preventDefault(); applyLink(); }}
                            >
                                <div>
                                    <label htmlFor="ete-link" className="mb-1 block text-sm font-medium text-slate-800">Link address</label>
                                    <input id="ete-link" autoFocus className={fieldCls} placeholder="https://example.com" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
                                </div>
                                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                                    <input type="checkbox" checked={linkNewTab} onChange={(e) => setLinkNewTab(e.target.checked)} className="h-4 w-4 accent-[var(--color-primary)]" />
                                    Open in a new tab
                                </label>
                                <div className="flex items-center gap-2">
                                    <button type="submit" className={cx(smallPrimary, "flex-1")} disabled={!linkUrl.trim()}>Apply link</button>
                                    <button type="button" className={smallSecondary} onClick={removeLink}>Remove</button>
                                </div>
                            </form>
                        }
                    >
                        <ToolBtn label="Link (Ctrl+K)" disabled={disabled} onClick={openLink}><Ico d={I.link} /></ToolBtn>
                    </PopWrap>

                    <PopWrap
                        open={pop === "image"}
                        panel={
                            <div className="w-72 space-y-3">
                                {canUpload && (
                                    <button type="button" className={cx(smallSecondary, "w-full")} disabled={imgBusy} onClick={() => fileRef.current?.click()}>
                                        {imgBusy ? <Spinner /> : <Ico d={I.upload} />}
                                        {imgBusy ? "Uploading…" : "Upload from computer"}
                                    </button>
                                )}
                                <div>
                                    <label htmlFor="ete-img-url" className="mb-1 block text-sm font-medium text-slate-800">{canUpload ? "Or paste an image link" : "Image link"}</label>
                                    <input id="ete-img-url" className={fieldCls} placeholder="https://…/photo.jpg" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="ete-img-alt" className="mb-1 block text-sm font-medium text-slate-800">Alt text <span className="font-normal text-slate-500">(optional)</span></label>
                                    <input id="ete-img-alt" className={fieldCls} placeholder="Describe the image" value={imgAlt} onChange={(e) => setImgAlt(e.target.value)} />
                                </div>
                                <button
                                    type="button"
                                    className={cx(smallPrimary, "w-full")}
                                    disabled={!/^https?:\/\//i.test(imgUrl.trim())}
                                    onClick={() => { insertImage(imgUrl.trim(), imgAlt.trim()); setImgUrl(""); setImgAlt(""); setPop(null); }}
                                >
                                    Insert image
                                </button>
                            </div>
                        }
                    >
                        <ToolBtn label="Image" disabled={disabled} onClick={() => setPop((p) => (p === "image" ? null : "image"))}><Ico d={I.image} /></ToolBtn>
                    </PopWrap>

                    <PopWrap
                        open={pop === "blocks"}
                        panel={
                            <div className="w-64 space-y-0.5">
                                {([
                                    ["button", "Button", "A bold call-to-action link", I.button],
                                    ["callout", "Highlight box", "Make a message stand out", I.callout],
                                    ["divider", "Divider", "A thin horizontal line", I.divider],
                                    ["footer", "Footer", "Small print for the bottom", I.footer],
                                ] as const).map(([k, label, hint, icon]) => (
                                    <button key={k} type="button" onClick={() => insertBlock(k)} className={cx("flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left cursor-pointer hover:bg-slate-100", focusRing)}>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-700"><Ico d={icon} /></span>
                                        <span>
                                            <span className="block text-sm font-medium text-slate-900">{label}</span>
                                            <span className="block text-xs text-slate-500">{hint}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        }
                    >
                        <ToolBtn label="Insert block" disabled={disabled} onClick={() => setPop((p) => (p === "blocks" ? null : "blocks"))}>
                            <Ico d={I.blocks} />
                            <span className="px-0.5 text-sm">Blocks</span>
                            <Ico d={I.chevron} className="h-3 w-3" />
                        </ToolBtn>
                    </PopWrap>

                    <PopWrap
                        open={pop === "tags"}
                        panel={
                            <div className="max-h-72 w-64 space-y-0.5 overflow-auto">
                                <p className="px-2.5 pb-1 text-xs text-slate-500">Replaced with each customer’s details when the email is sent.</p>
                                {mergeTags.map((t) => (
                                    <button
                                        key={t.key}
                                        type="button"
                                        onClick={() => { cmd("insertText", formatMergeTag(t.key)); setPop(null); }}
                                        className={cx("flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left cursor-pointer hover:bg-slate-100", focusRing)}
                                    >
                                        <span className="text-sm font-medium text-slate-900">{t.label}</span>
                                        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">{formatMergeTag(t.key)}</code>
                                    </button>
                                ))}
                            </div>
                        }
                        align="right"
                    >
                        <ToolBtn label="Insert merge tag" disabled={disabled} onClick={() => setPop((p) => (p === "tags" ? null : "tags"))}>
                            <Ico d={I.braces} />
                            <span className="px-0.5 text-sm">Merge tag</span>
                            <Ico d={I.chevron} className="h-3 w-3" />
                        </ToolBtn>
                    </PopWrap>
                    <Sep />
                    <ToolBtn label="Clear formatting" disabled={disabled} onClick={clearFormatting}><Ico d={I.eraser} /></ToolBtn>

                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                            const f = Array.from(e.target.files ?? []);
                            e.target.value = "";
                            if (f.length) handleFiles(f);
                        }}
                    />
                </div>
            )}

            {/* messages */}
            {mode === "visual" && msg && (
                <div role={msg.tone === "error" ? "alert" : "status"} className={cx("flex items-start justify-between gap-3 border-b px-3 py-2 text-sm", msg.tone === "error" ? "border-red-200 bg-red-50 text-red-900" : "border-slate-200 bg-slate-50 text-slate-700")}>
                    <span className="flex items-start gap-2"><Ico d={I.warn} className="mt-0.5 h-4 w-4 shrink-0" />{msg.text}</span>
                    <button type="button" aria-label="Dismiss" onClick={() => setMsg(null)} className={cx("rounded p-0.5 cursor-pointer hover:bg-black/5", focusRing)}><Ico d={I.x} className="h-4 w-4" /></button>
                </div>
            )}
            {mode === "visual" && legacyNote && (
                <div role="status" className="border-b border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                    This template came from the old builder. Complex layouts and custom CSS may look simpler here, and saving from this tab replaces them. Use the HTML tab to keep the original.
                </div>
            )}

            {/* inspector for the selected image / button */}
            {mode === "visual" && selected && selected.kind === "image" && (
                <ImageInspector el={selected.el as HTMLImageElement} onChange={afterEdit} onAlign={alignSelectedImage} onDelete={deleteSelected} />
            )}
            {mode === "visual" && selected && selected.kind === "button" && (
                <ButtonInspector el={selected.el} onChange={afterEdit} onDelete={deleteSelected} />
            )}

            {/* visual surface (stays mounted so undo history and selection survive tab switches) */}
            <div className={cx("bg-slate-100", mode !== "visual" && "hidden")} style={{ maxHeight, overflowY: "auto" }}>
                <div className="relative mx-auto my-5 w-full max-w-[680px] rounded-md bg-white shadow-sm ring-1 ring-slate-200">
                    {empty && (
                        <p className="pointer-events-none absolute left-8 right-8 top-8 text-[15px] text-slate-400" aria-hidden="true">
                            {placeholder}
                        </p>
                    )}
                    <div
                        ref={editorRef}
                        className="ete-surface p-8"
                        style={{ minHeight }}
                        contentEditable={!disabled}
                        role="textbox"
                        aria-multiline="true"
                        aria-label="Email body"
                        spellCheck
                        onInput={onInput}
                        onBlur={() => flush()}
                        onFocus={onFocus}
                        onClick={onSurfaceClick}
                        onKeyDown={onSurfaceKeyDown}
                        onPaste={onPaste}
                        onDrop={onDrop}
                        onDragOver={(e) => e.dataTransfer.types.includes("Files") && e.preventDefault()}
                    />
                </div>
            </div>

            {/* HTML source */}
            {mode === "code" && (
                <div>
                    {legacyNote && (
                        <div role="status" className="border-b border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                            This template has its own page styles. They’re kept exactly as they are while you edit here. Switching to Visual simplifies them.
                        </div>
                    )}
                    <textarea
                        aria-label="Email HTML"
                        spellCheck={false}
                        disabled={disabled}
                        value={value}
                        onChange={(e) => {
                            lastEmitted.current = e.target.value;
                            stale.current = true;
                            onChange(e.target.value);
                        }}
                        className="block w-full resize-y border-0 bg-slate-900 p-4 font-mono text-[13px] leading-relaxed text-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
                        style={{ minHeight, maxHeight: Math.max(maxHeight, minHeight) }}
                    />
                </div>
            )}

            {/* preview */}
            {mode === "preview" && (
                <div className="overflow-auto bg-slate-100 p-4" style={{ minHeight, maxHeight: Math.max(maxHeight, minHeight) + 120 }}>
                    {previewHtml.trim() ? (
                        <EmailPreviewFrame
                            html={previewHtml}
                            device={device}
                            sample={sample}
                            mergeTags={mergeTags}
                            formatMergeTag={formatMergeTag}
                            minHeight={Math.min(minHeight, 360)}
                            className="rounded-lg shadow-sm ring-1 ring-slate-200"
                        />
                    ) : (
                        <p className="py-20 text-center text-sm text-slate-500">Nothing to preview yet. Write something in the Visual tab.</p>
                    )}
                </div>
            )}

            {/* footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500">
                <span>
                    {mode === "visual" ? `${stats.words.toLocaleString()} ${stats.words === 1 ? "word" : "words"} · ${stats.chars.toLocaleString()} characters` : mode === "code" ? "Edit the raw HTML. Switch to Visual to see it laid out." : sample ? "Showing sample customer details." : "Showing merge tags as written."}
                </span>
                <span>Merge tags look like <code className="rounded bg-white px-1 py-0.5 ring-1 ring-slate-200">{tagExample}</code></span>
            </div>
        </div>
    );
}