"use client";

/**
 * WhatsappMessageEditor — a message editor built for WhatsApp (not email).
 *
 * One file, React + Tailwind only:
 *
 *   <WhatsappMessageEditor value={body} onChange={setBody} />
 *
 * - Writes real WhatsApp markup: *bold*  _italic_  ~strike~  `code`  ```mono```  > quote  - bullets  1. numbers
 *   (toolbar buttons + Ctrl/⌘+B, Ctrl/⌘+I, Ctrl/⌘+Shift+X, Ctrl/⌘+Shift+M)
 * - Full emoji picker: every emoji group, search by name or keyword, skin tones, recently used,
 *   plus a "Special characters" tab (bullets, arrows, ₹ € £, divider lines…).
 * - Variable menu ({{customerName}} style; change with `formatVariable`).
 * - Character counter against WhatsApp's 4,096-character text limit.
 * - Plain text in, plain text out: what you type is exactly what is stored and sent.
 *
 * Also exported for cards / dialogs / live previews:
 *   WhatsappBubble, WhatsappChat, renderWhatsappText, extractVariables, DEFAULT_WA_VARIABLES
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

/* ═══════════════════════════ public types & helpers ═══════════════════════════ */

export interface WhatsappVariable {
    key: string;
    label: string;
    /** shown in previews when "Sample data" is on */
    sample: string;
}

export const DEFAULT_WA_VARIABLES: WhatsappVariable[] = [
    { key: "customerName", label: "Customer name", sample: "Priya" },
    { key: "customerPhone", label: "Customer phone", sample: "+91 98765 43210" },
    { key: "companyName", label: "Company name", sample: "Acme Pvt Ltd" },
    { key: "amount", label: "Amount", sample: "₹4,999" },
    { key: "dueDate", label: "Due date", sample: "30 Nov 2026" },
];

export const defaultFormatVariable = (key: string) => `{{${key}}}`;
export const WA_TEXT_LIMIT = 4096;
const VARIABLE_PATTERN = /\{\{\s*([A-Za-z_][\w.]*)\s*\}\}/g;

/** unique variable keys used in a body, in order of first use */
export function extractVariables(text: string, pattern: RegExp = VARIABLE_PATTERN): string[] {
    const seen = new Set<string>();
    const re = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) seen.add(m[1]);
    return Array.from(seen);
}

export interface WaPoll { name?: string; options?: string[]; selectableCount?: number }
export interface WaLocation { lat: number; lng: number; name?: string; address?: string }
export interface WaLinkPreview { title?: string; body?: string; thumbnailUrl?: string; sourceUrl?: string }
export interface WhatsappMessage {
    text: string;
    /** text | image | video | document | location | poll */
    mediaType?: string;
    mediaUrl?: string | null;
    fileName?: string;
    linkPreview?: WaLinkPreview | null;
    location?: WaLocation | null;
    poll?: WaPoll | null;
}

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cpLength = (s: string) => Array.from(s).length;

/* ═══════════════════════════ WhatsApp markup → React ═══════════════════════════ */

type RenderCtx = { variables: WhatsappVariable[]; format: (k: string) => string; sample: boolean };

const INLINE_RULES: { tag: "code" | "b" | "i" | "s"; re: RegExp }[] = [
    { tag: "code", re: /(?<![\p{L}\p{N}`])`(?=\S)([^`\n]*?\S)`(?![\p{L}\p{N}`])/u },
    { tag: "b", re: /(?<![\p{L}\p{N}])\*(?=\S)([^\n]*?\S)\*(?![\p{L}\p{N}])/u },
    { tag: "i", re: /(?<![\p{L}\p{N}])_(?=\S)([^\n]*?\S)_(?![\p{L}\p{N}])/u },
    { tag: "s", re: /(?<![\p{L}\p{N}])~(?=\S)([^\n]*?\S)~(?![\p{L}\p{N}])/u },
];

function renderPlain(text: string, ctx: RenderCtx, k: string): ReactNode[] {
    const tokens = ctx.variables.map((v) => escRe(ctx.format(v.key)));
    const re = new RegExp(`(${[...tokens, "\\{\\{\\s*[\\w.]+\\s*\\}\\}", "https?:\\/\\/[^\\s<]+"].join("|")})`, "g");
    return text.split(re).map((part, i) => {
        if (!part) return null;
        const key = `${k}-${i}`;
        if (/^https?:\/\//.test(part)) {
            return <span key={key} className="text-[#027eb5] underline decoration-[#027eb5]/40 dark:text-[#53bdeb]">{part}</span>;
        }
        const v = ctx.variables.find((x) => ctx.format(x.key) === part || part.replace(/\s+/g, "") === ctx.format(x.key));
        const isToken = !!v || /^\{\{\s*[\w.]+\s*\}\}$/.test(part);
        if (isToken) {
            return ctx.sample && v ? (
                <span key={key} title={part} className="border-b border-dotted border-current">{v.sample}</span>
            ) : (
                <span key={key} className="rounded bg-black/10 px-1 font-medium dark:bg-white/15">{part}</span>
            );
        }
        return part;
    });
}

function renderInline(text: string, ctx: RenderCtx, k: string): ReactNode[] {
    const out: ReactNode[] = [];
    let rest = text;
    let n = 0;
    while (rest) {
        let best: { idx: number; len: number; tag: "code" | "b" | "i" | "s"; inner: string } | null = null;
        for (const r of INLINE_RULES) {
            const m = r.re.exec(rest);
            if (m && (!best || m.index < best.idx)) best = { idx: m.index, len: m[0].length, tag: r.tag, inner: m[1] };
        }
        if (!best) {
            out.push(...renderPlain(rest, ctx, `${k}p${n++}`));
            break;
        }
        if (best.idx > 0) out.push(...renderPlain(rest.slice(0, best.idx), ctx, `${k}p${n++}`));
        const key = `${k}t${n++}`;
        if (best.tag === "code") out.push(<code key={key} className="rounded bg-black/10 px-1 font-mono text-[0.92em] dark:bg-white/15">{best.inner}</code>);
        else {
            const kids = renderInline(best.inner, ctx, key);
            if (best.tag === "b") out.push(<strong key={key}>{kids}</strong>);
            if (best.tag === "i") out.push(<em key={key}>{kids}</em>);
            if (best.tag === "s") out.push(<s key={key}>{kids}</s>);
        }
        rest = rest.slice(best.idx + best.len);
    }
    return out;
}

function renderLines(text: string, ctx: RenderCtx, k: string): ReactNode[] {
    const lines = text.split("\n");
    const out: ReactNode[] = [];
    let buf: string[] = [];
    let quote: string[] = [];
    let n = 0;
    const flushBuf = () => {
        if (!buf.length) return;
        out.push(<span key={`${k}b${n++}`} className="whitespace-pre-wrap">{renderInline(buf.join("\n"), ctx, `${k}i${n}`)}</span>);
        buf = [];
    };
    const flushQuote = () => {
        if (!quote.length) return;
        out.push(
            <div key={`${k}q${n++}`} className="my-0.5 whitespace-pre-wrap rounded-r border-l-4 border-[#06cf9c] bg-black/5 py-0.5 pl-2 dark:bg-white/10">
                {renderInline(quote.join("\n"), ctx, `${k}qi${n}`)}
            </div>
        );
        quote = [];
    };
    lines.forEach((line, i) => {
        const q = /^>\s?(.*)$/.exec(line);
        const bullet = /^(\s*)[-*]\s+(.*)$/.exec(line);
        const num = /^(\s*)(\d+)\.\s+(.*)$/.exec(line);
        if (q) {
            flushBuf();
            quote.push(q[1]);
            return;
        }
        flushQuote();
        if (bullet || num) {
            flushBuf();
            out.push(
                <div key={`${k}l${i}`} className="flex gap-1.5 pl-1">
                    <span aria-hidden="true">{bullet ? "•" : `${num![2]}.`}</span>
                    <span className="min-w-0 whitespace-pre-wrap">{renderInline(bullet ? bullet[2] : num![3], ctx, `${k}li${i}`)}</span>
                </div>
            );
            return;
        }
        buf.push(line);
        // lines are joined with "\n" inside one span, so a trailing break only needs the loop
        if (i === lines.length - 1) flushBuf();
    });
    flushBuf();
    flushQuote();
    return out;
}

/** Renders WhatsApp-style markup (and optionally swaps variables for sample values). */
export function renderWhatsappText(
    text: string,
    opts: { variables?: WhatsappVariable[]; formatVariable?: (k: string) => string; sample?: boolean } = {}
): ReactNode[] {
    const ctx: RenderCtx = { variables: opts.variables ?? DEFAULT_WA_VARIABLES, format: opts.formatVariable ?? defaultFormatVariable, sample: opts.sample ?? false };
    const parts = text.replace(/\r\n/g, "\n").split(/```([\s\S]*?)```/);
    const out: ReactNode[] = [];
    parts.forEach((part, i) => {
        if (i % 2 === 1) {
            out.push(<span key={`m${i}`} className="whitespace-pre-wrap font-mono text-[0.92em]">{part.replace(/^\n|\n$/g, "")}</span>);
        } else if (part) {
            out.push(...renderLines(part, ctx, `s${i}`));
        }
    });
    return out;
}

/* ═══════════════════════════ icons ═══════════════════════════ */

const I = {
    bold: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6zM6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z",
    italic: "M19 4h-9M14 20H5M15 4 9 20",
    strike: "M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6M4 12h16",
    code: "m16 18 6-6-6-6M8 6l-6 6 6 6",
    mono: "M4 7V4h16v3M9 20h6M12 4v16",
    quote: "M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .75-1 2v1ZM15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3Z",
    ul: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    ol: "M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
    smile: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
    braces: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
    eraser: "M7 21h10M5 17l9.5-9.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L11 19H7z",
    search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3",
    chevron: "m6 9 6 6 6-6",
    image: "M3 5h18v14H3zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 15l-5-5L5 19",
    play: "M8 5v14l11-7z",
    file: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5",
    pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    list: "M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    warn: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
};

const Ico = ({ d, className = "h-4 w-4", fill = false }: { d: string; className?: string; fill?: boolean }) => (
    <svg className={className} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={d} />
    </svg>
);

/* ═══════════════════════════ WhatsApp bubble / chat preview (exported) ═══════════════════════════ */

const domainOf = (u?: string) => {
    try {
        return u ? new URL(u).hostname.replace(/^www\./, "") : "";
    } catch {
        return "";
    }
};

const fileNameOf = (m: WhatsappMessage) => {
    if (m.fileName) return m.fileName;
    if (!m.mediaUrl) return "Document";
    try {
        return decodeURIComponent(m.mediaUrl.split("?")[0].split("/").pop() || "Document");
    } catch {
        return "Document";
    }
};

function MediaEmpty({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex h-36 w-full flex-col items-center justify-center gap-1.5 rounded-md bg-black/10 text-black/40 dark:bg-white/10 dark:text-white/40">
            <Ico d={icon} className="h-8 w-8" />
            <span className="text-xs">{text}</span>
        </div>
    );
}

function LocationCard({ loc }: { loc?: WaLocation | null }) {
    return (
        <div className="overflow-hidden rounded-md">
            <svg viewBox="0 0 300 130" className="block w-full" role="img" aria-label="Map location">
                <rect width="300" height="130" fill="#e5ecdf" />
                <path d="M0 95 C60 70 110 105 170 80 S260 60 300 75 V130 H0Z" fill="#cfe3ee" />
                <path d="M-10 30 L310 55 M40 -5 L95 135 M180 -5 L150 135 M230 -5 L270 135 M-10 108 L310 100" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" />
                <path d="M-10 30 L310 55 M40 -5 L95 135 M180 -5 L150 135 M230 -5 L270 135" stroke="#f4d98a" strokeWidth="1.5" fill="none" strokeDasharray="1 7" opacity=".7" />
                <g transform="translate(150 66)">
                    <ellipse cx="0" cy="26" rx="9" ry="3" fill="#000" opacity=".18" />
                    <path d="M0 26C-12 12-14 6-14-2a14 14 0 0 1 28 0c0 8-2 14-14 28Z" fill="#ea4335" />
                    <circle cy="-2" r="5.5" fill="#fff" />
                </g>
            </svg>
            <div className="bg-black/5 px-2.5 py-1.5 dark:bg-white/10">
                <p className="text-[13.5px] font-medium">{loc?.name || (loc ? "Shared location" : "Location not set")}</p>
                {loc?.address && <p className="text-xs opacity-70">{loc.address}</p>}
                {loc && Number.isFinite(loc.lat) && Number.isFinite(loc.lng) && (
                    <p className="text-[11px] opacity-60">{Number(loc.lat).toFixed(5)}, {Number(loc.lng).toFixed(5)}</p>
                )}
            </div>
        </div>
    );
}

function PollCard({ poll }: { poll?: WaPoll | null }) {
    const options = (poll?.options ?? []).filter((o) => o && o.trim());
    const multi = Number(poll?.selectableCount) > 1;
    return (
        <div className="px-2 pt-1.5">
            <p className="text-[14.5px] font-semibold">{poll?.name?.trim() || "Poll question"}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs opacity-70">
                <Ico d={I.list} className="h-3.5 w-3.5" />
                {multi ? `Select up to ${poll!.selectableCount} options` : "Select one"}
            </p>
            <ul className="mt-2.5 space-y-2.5">
                {(options.length ? options : ["Option 1", "Option 2"]).map((o, i) => (
                    <li key={i} className="flex items-center gap-2.5 border-b border-black/10 pb-2 text-[14px] dark:border-white/10">
                        <span className={cx("h-[18px] w-[18px] shrink-0 border-2 border-current opacity-50", multi ? "rounded-[4px]" : "rounded-full")} />
                        <span className="min-w-0 break-words">{o}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function WhatsappBubble({
    message,
    variables = DEFAULT_WA_VARIABLES,
    formatVariable = defaultFormatVariable,
    sample = true,
    interactive = false,
    time = "10:24",
    className,
}: {
    message: WhatsappMessage;
    variables?: WhatsappVariable[];
    formatVariable?: (k: string) => string;
    sample?: boolean;
    /** show video controls etc. (off for thumbnails) */
    interactive?: boolean;
    time?: string;
    className?: string;
}) {
    const type = (message.mediaType || "text").toLowerCase();
    const text = (message.text || "").trim();
    const showLinkPreview = !!message.linkPreview && (message.linkPreview.title || message.linkPreview.thumbnailUrl) && !["image", "video", "document", "location", "poll"].includes(type);

    return (
        <div className={cx("relative w-full max-w-[320px] rounded-lg rounded-tr-none bg-[#d9fdd3] p-1 text-[#111b21] shadow-[0_1px_0.5px_rgba(11,20,26,.13)] dark:bg-[#005c4b] dark:text-[#e9edef]", className)}>
            <svg viewBox="0 0 8 13" width="8" height="13" className="absolute -right-[7px] top-0 text-[#d9fdd3] dark:text-[#005c4b]" aria-hidden="true">
                <path d="M0 0h8L0 13z" fill="currentColor" />
            </svg>

            {type === "image" &&
                (message.mediaUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={message.mediaUrl} alt="" className="max-h-72 w-full rounded-md object-cover" />
                ) : (
                    <MediaEmpty icon={I.image} text="Image" />
                ))}

            {type === "video" &&
                (message.mediaUrl ? (
                    <div className="relative overflow-hidden rounded-md bg-black">
                        <video src={message.mediaUrl} preload="metadata" muted playsInline controls={interactive} className="max-h-72 w-full object-cover" />
                        {!interactive && (
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white"><Ico d={I.play} className="h-5 w-5" fill /></span>
                            </span>
                        )}
                    </div>
                ) : (
                    <MediaEmpty icon={I.play} text="Video" />
                ))}

            {type === "document" && (
                <div className="flex items-center gap-3 rounded-md bg-black/5 p-3 dark:bg-white/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e54a4a] text-white"><Ico d={I.file} className="h-5 w-5" /></span>
                    <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-medium">{fileNameOf(message)}</p>
                        <p className="text-[11px] uppercase opacity-60">{(fileNameOf(message).split(".").pop() || "file").slice(0, 5)} · Document</p>
                    </div>
                </div>
            )}

            {type === "location" && <LocationCard loc={message.location} />}
            {type === "poll" && <PollCard poll={message.poll} />}

            {showLinkPreview && (
                <div className="overflow-hidden rounded-md bg-black/5 dark:bg-white/10">
                    {message.linkPreview?.thumbnailUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={message.linkPreview.thumbnailUrl} alt="" className="h-36 w-full object-cover" />
                    )}
                    <div className="px-2.5 py-2">
                        {message.linkPreview?.title && <p className="line-clamp-2 text-[13.5px] font-medium">{message.linkPreview.title}</p>}
                        {message.linkPreview?.body && <p className="line-clamp-2 text-xs opacity-70">{message.linkPreview.body}</p>}
                        {domainOf(message.linkPreview?.sourceUrl) && <p className="mt-0.5 text-[11px] opacity-60">{domainOf(message.linkPreview?.sourceUrl)}</p>}
                    </div>
                </div>
            )}

            <div className="px-1.5 pb-1 pt-1 text-[14.2px] leading-[19px] [overflow-wrap:anywhere]">
                {text ? renderWhatsappText(text, { variables, formatVariable, sample }) : <span className="opacity-50">Your message will appear here…</span>}
                <span className="float-right ml-3 mt-1.5 flex items-center gap-1 text-[11px] leading-none opacity-70">
                    {time}
                    <svg viewBox="0 0 16 11" width="16" height="11" fill="none" stroke="#53bdeb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M1 6l3 3 6-7M6 8l1 1 6-7" />
                    </svg>
                </span>
                <span className="clear-both block" />
            </div>
        </div>
    );
}

/** WhatsApp-style wallpaper (+ optional header) to place bubbles on. */
export function WhatsappChat({ children, title, className, bodyClassName }: { children: ReactNode; title?: string; className?: string; bodyClassName?: string }) {
    return (
        <div className={cx("overflow-hidden rounded-2xl border border-black/10 bg-[#efeae2] dark:border-white/10 dark:bg-[#0b141a]", className)}>
            {title && (
                <div className="flex items-center gap-3 bg-[#008069] px-4 py-2.5 text-white dark:bg-[#202c33]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-sm font-semibold uppercase">{title.charAt(0)}</span>
                    <div className="leading-tight">
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-[11px] opacity-75">online</p>
                    </div>
                </div>
            )}
            <div
                className={cx("flex justify-end p-4", bodyClassName)}
                style={{ backgroundImage: "radial-gradient(rgba(11,20,26,.06) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            >
                {children}
            </div>
        </div>
    );
}

/* ═══════════════════════════ emoji picker ═══════════════════════════ */

interface EmojiItem { char: string; label: string; search: string; tone: boolean; wide?: boolean }
interface EmojiGroup { name: string; icon: string; items: EmojiItem[] }

const SPECIAL: [string, string][] = [
    ["•", "bullet"], ["◦", "white bullet"], ["▪", "small square"], ["‣", "triangle bullet"], ["●", "circle"], ["○", "hollow circle"],
    ["◆", "diamond"], ["◇", "hollow diamond"], ["★", "star"], ["☆", "hollow star"], ["✓", "check tick"], ["✔", "heavy check tick"],
    ["✗", "cross"], ["✘", "heavy cross"], ["→", "arrow right"], ["←", "arrow left"], ["↑", "arrow up"], ["↓", "arrow down"],
    ["⇒", "double arrow"], ["➜", "arrow"], ["➤", "arrowhead"], ["»", "double angle right"], ["«", "double angle left"], ["❯", "chevron"],
    ["₹", "rupee inr money"], ["$", "dollar money"], ["€", "euro money"], ["£", "pound money"], ["¥", "yen money"], ["¢", "cent"],
    ["©", "copyright"], ["®", "registered"], ["™", "trademark"], ["°", "degree"], ["±", "plus minus"], ["×", "multiply times"],
    ["÷", "divide"], ["½", "half"], ["¼", "quarter"], ["¾", "three quarters"], ["№", "number"], ["∞", "infinity"],
    ["≈", "approx"], ["≠", "not equal"], ["≤", "less equal"], ["≥", "greater equal"], ["—", "em dash"], ["–", "en dash"],
    ["…", "ellipsis"], ["❝", "quote open"], ["❞", "quote close"], ["☎", "phone telephone"], ["✆", "phone call"], ["✉", "envelope mail"],
    ["━━━━━━━━━━", "divider heavy line"], ["──────────", "divider line"], ["══════════", "divider double line"], ["┈┈┈┈┈┈┈┈┈┈", "divider dotted line"],
    ["• • •", "dots divider"], ["✦ ✦ ✦", "stars divider"], ["⸻", "long dash"],
];

const EMOJI_RAW: [string, string, string][] = [
    ["Smileys & Emotion", "😀", `😀 grinning face|cheerful,cheery,grin
😃 grinning face with big eyes|awesome,grin,happy
😄 grinning face with smiling eyes|eye,grin,happy
😁 beaming face with smiling eyes|eye,grin,grinning
😆 grinning squinting face|closed,eyes,haha
😅 grinning face with sweat|cold,dejected,excited
🤣 rolling on the floor laughing|crying,face,funny
😂 face with tears of joy|crying,feels,funny
🙂 slightly smiling face|happy,smile
🙃 upside-down face|hehe,smile,upside-down
🫠 melting face|disappear,dissolve,embarrassed
😉 winking face|flirt,heartbreaker,sexy
😊 smiling face with smiling eyes|blush,eye,glad
😇 smiling face with halo|angel,angelic,angels
🥰 smiling face with hearts|adore,crush,heart
😍 smiling face with heart-eyes|bae,eye,feels
🤩 star-struck|excited,eyes,face
😘 face blowing a kiss|adorbs,bae,flirt
😗 kissing face|date,dating,flirt
☺️ smiling face|happy,outlined,relaxed
😚 kissing face with closed eyes|bae,blush,date
😙 kissing face with smiling eyes|closed,date,dating
🥲 smiling face with tear|glad,grateful,happy
😋 face savoring food|delicious,eat,full
😛 face with tongue|awesome,cool,nice
😜 winking face with tongue|crazy,epic,eye
🤪 zany face|crazy,eye,eyes
😝 squinting face with tongue|closed,eye,eyes
🤑 money-mouth face|money-mouth,paid
🤗 smiling face with open hands|hug,hugging
🤭 face with hand over mouth|giggle,giggling,oops
🫢 face with open eyes and hand over mouth|amazement,awe,disbelief
🫣 face with peeking eye|captivated,embarrass,hide
🤫 shushing face|quiet,shh,shush
🤔 thinking face|chin,consider,hmm
🫡 saluting face|OK,good,luck
🤐 zipper-mouth face|keep,quiet,secret
🤨 face with raised eyebrow|disapproval,disbelief,distrust
😐 neutral face|awkward,blank,deadpan
😑 expressionless face|awkward,dead,fine
😶 face without mouth|awkward,blank,expressionless
🫥 dotted line face|depressed,disappear,hidden
😶‍🌫️ face in clouds|absentminded,fog,head
😏 smirking face|boss,dapper,flirt
😒 unamused face|...,bored,fine
🙄 face with rolling eyes|eyeroll,shade,ugh
😬 grimacing face|awk,awkward,dentist
😮‍💨 face exhaling|blow,blowing,exhale
🤥 lying face|liar,lie,pinocchio
🫨 shaking face|crazy,daze,earthquake
😌 relieved face|calm,peace,relief
😔 pensive face|awful,bored,dejected
😪 sleepy face|crying,good,night
🤤 drooling face
😴 sleeping face|bed,bedtime,good
😷 face with medical mask|cold,dentist,dermatologist
🤒 face with thermometer|ill,sick
🤕 face with head-bandage|head-bandage,hurt,injury
🤢 nauseated face|gross,nasty,sick
🤮 face vomiting|barf,ew,gross
🤧 sneezing face|fever,flu,gesundheit
🥵 hot face|dying,feverish,heat
🥶 cold face|blue,blue-faced,freezing
🥴 woozy face|dizzy,drunk,eyes
😵 face with crossed-out eyes|crossed-out,dead,dizzy
😵‍💫 face with spiral eyes|confused,dizzy,hypnotized
🤯 exploding head|blown,explode,mind
🤠 cowboy hat face|cowgirl
🥳 partying face|bday,birthday,celebrate
🥸 disguised face|disguise,eyebrow,glasses
😎 smiling face with sunglasses|awesome,beach,bright
🤓 nerd face|brainy,clever,expert
🧐 face with monocle|classy,fancy,rich
😕 confused face|befuddled,confusing,dunno
🫤 face with diagonal mouth|confused,confusion,disappointed
😟 worried face|anxious,butterflies,nerves
🙁 slightly frowning face|frown,sad
☹️ frowning face|frown,sad
😮 face with open mouth|believe,forgot,omg
😯 hushed face|epic,omg,stunned
😲 astonished face|cost,no,omg
😳 flushed face|amazed,awkward,crazy
🥺 pleading face|begging,big,eyes
🥹 face holding back tears|admiration,aww,cry
😦 frowning face with open mouth|caught,frown,guard
😧 anguished face|forgot,scared,scary
😨 fearful face|afraid,anxious,blame
😰 anxious face with sweat|blue,cold,eek
😥 sad but relieved face|anxious,call,close
😢 crying face|awful,cry,feels
😭 loudly crying face|bawling,cry,sad
😱 face screaming in fear|epic,fearful,munch
😖 confounded face|annoyed,confused,cringe
😣 persevering face|concentrate,concentration,focus
😞 disappointed face|awful,blame,dejected
😓 downcast face with sweat|close,cold,feels
😩 weary face|crying,fail,feels
😫 tired face|cost,feels,nap
🥱 yawning face|bedtime,bored,goodnight
😤 face with steam from nose|anger,angry,feels
😡 enraged face|anger,angry,feels
😠 angry face|anger,blame,feels
🤬 face with symbols on mouth|censor,cursing,cussing
😈 smiling face with horns|demon,devil,evil
👿 angry face with horns|demon,devil,evil
💀 skull|body,dead,death
☠️ skull and crossbones|bone,dead,death
💩 pile of poo|bs,comic,doo
🤡 clown face
👹 ogre|creature,devil,face
👺 goblin|angry,creature,face
👻 ghost|boo,creature,excited
👽 alien|creature,extraterrestrial,face
👾 alien monster|creature,extraterrestrial,face
🤖 robot|face,monster
😺 grinning cat|animal,face,mouth
😸 grinning cat with smiling eyes|animal,eye,face
😹 cat with tears of joy|animal,face,laugh
😻 smiling cat with heart-eyes|animal,eye,face
😼 cat with wry smile|animal,face,ironic
😽 kissing cat|animal,closed,eye
🙀 weary cat|animal,face,oh
😿 crying cat|animal,cry,face
😾 pouting cat|animal,face
🙈 see-no-evil monkey|embarrassed,face,forbidden
🙉 hear-no-evil monkey|animal,ears,face
🙊 speak-no-evil monkey|animal,face,forbidden
💌 love letter|heart,mail,romance
💘 heart with arrow|adorbs,cupid,date
💝 heart with ribbon|anniversary,emotion,ily
💖 sparkling heart|emotion,excited,good
💗 growing heart|emotion,excited,heartpulse
💓 beating heart|cardio,emotion,heartbeat
💞 revolving hearts|adorbs,anniversary,emotion
💕 two hearts|anniversary,date,dating
💟 heart decoration|emotion,hearth,purple
❣️ heart exclamation|bang,heavy,mark
💔 broken heart|break,crushed,emotion
❤️‍🔥 heart on fire|burn,love,lust
❤️‍🩹 mending heart|healthier,improving,recovering
❤️ red heart|emotion,love
🩷 pink heart|adorable,cute,emotion
🧡 orange heart
💛 yellow heart|cardiac,emotion,ily
💚 green heart|emotion,ily,love
💙 blue heart|emotion,ily,love
🩵 light blue heart|cute,cyan,emotion
💜 purple heart|bestest,emotion,ily
🤎 brown heart
🖤 black heart|evil,wicked
🩶 grey heart|emotion,gray,ily
🤍 white heart
💋 kiss mark|dating,emotion,heart
💯 hundred points|TRUE,a+,agree
💢 anger symbol|angry,comic,mad
💥 collision|bomb,boom,collide
💫 dizzy|comic,shining,shooting
💦 sweat droplets|comic,drip,droplet
💨 dashing away|cloud,comic,dash
🕳️ hole
💬 speech balloon|bubble,comic,dialog
👁️‍🗨️ eye in speech bubble|balloon,witness
🗨️ left speech bubble|balloon,dialog
🗯️ right anger bubble|angry,balloon,mad
💭 thought balloon|bubble,cartoon,cloud
💤 ZZZ|comic,good,goodnight`],
    ["People & Body", "👋", `+👋 waving hand|bye,cya,g2g
+🤚 raised back of hand|backhand
+🖐️ hand with fingers splayed|finger,raised,stop
+✋ raised hand|five,high,stop
+🖖 vulcan salute|finger,hand,hands
+🫱 rightwards hand|handshake,hold,reach
+🫲 leftwards hand|handshake,hold,left
+🫳 palm down hand|dismiss,drop,dropped
+🫴 palm up hand|beckon,catch,come
+🫷 leftwards pushing hand|block,five,halt
+🫸 rightwards pushing hand|block,five,halt
+👌 OK hand|awesome,bet,dope
+🤌 pinched fingers|gesture,hand,hold
+🤏 pinching hand|amount,bit,fingers
+✌️ victory hand|peace,v
+🤞 crossed fingers|cross,finger,hand
+🫰 hand with index finger and thumb crossed|<3,expensive,heart
+🤟 love-you gesture|ILY,fingers,hand
+🤘 sign of the horns|finger,hand,rock-on
+🤙 call me hand|Shaka,hang,loose
+👈 backhand index pointing left|finger,hand,point
+👉 backhand index pointing right|finger,hand,point
+👆 backhand index pointing up|finger,hand,point
+🖕 middle finger|hand
+👇 backhand index pointing down|finger,hand,point
+☝️ index pointing up|finger,hand,point
+🫵 index pointing at the viewer|finger,hand,poke
+👍 thumbs up|+1,good,hand
+👎 thumbs down|-1,bad,dislike
+✊ raised fist|clenched,hand,punch
+👊 oncoming fist|absolutely,agree,boom
+🤛 left-facing fist|left-facing,leftwards
+🤜 right-facing fist|right-facing,rightwards
+👏 clapping hands|applause,approval,awesome
+🙌 raising hands|celebration,gesture,hand
+🫶 heart hands|<3,love,you
+👐 open hands|hand,hug,jazz
+🤲 palms up together|cupped,dua,hands
+🤝 handshake|agreement,deal,hand
+🙏 folded hands|appreciate,ask,beg
+✍️ writing hand|write
+💅 nail polish|bored,care,cosmetics
+🤳 selfie|camera,phone
+💪 flexed biceps|arm,beast,bench
🦾 mechanical arm|accessibility,prosthetic
🦿 mechanical leg|accessibility,prosthetic
+🦵 leg|bent,foot,kick
+🦶 foot|ankle,feet,kick
+👂 ear|body,ears,hear
+🦻 ear with hearing aid|accessibility,hard
+👃 nose|body,noses,nosey
🧠 brain|intelligent,smart
🫀 anatomical heart|beat,cardiology,heartbeat
🫁 lungs|breath,breathe,exhalation
🦷 tooth|dentist,pearly,teeth
🦴 bone|bones,dog,skeleton
👀 eyes|body,eye,face
👁️ eye|body,one
👅 tongue|body,lick,slurp
👄 mouth|beauty,body,kiss
🫦 biting lip|anxious,bite,fear
+👶 baby|babies,children,goo
+🧒 child|bright-eyed,grandchild,kid
+👦 boy|bright-eyed,child,grandson
+👧 girl|Virgo,bright-eyed,child
+🧑 person|adult
+👱 person: blond hair|blond-haired,human
+👨 man|adult,bro
+🧔 person: beard|bearded,whiskers
🧔‍♂️ man: beard|bearded,whiskers
🧔‍♀️ woman: beard|bearded,whiskers
👨‍🦰 man: red hair|adult,bro,red hair
👨‍🦱 man: curly hair|adult,bro,curly hair
👨‍🦳 man: white hair|adult,bro,white hair
👨‍🦲 man: bald|adult,bro
+👩 woman|adult,lady
👩‍🦰 woman: red hair|adult,lady,red hair
🧑‍🦰 person: red hair|adult,red hair
👩‍🦱 woman: curly hair|adult,curly hair,lady
🧑‍🦱 person: curly hair|adult,curly hair
👩‍🦳 woman: white hair|adult,lady,white hair
🧑‍🦳 person: white hair|adult,white hair
👩‍🦲 woman: bald|adult,lady
🧑‍🦲 person: bald|adult
👱‍♀️ woman: blond hair|blond-haired,blonde
👱‍♂️ man: blond hair|blond-haired
+🧓 older person|adult,elderly,grandparent
+👴 old man|adult,bald,elderly
+👵 old woman|adult,elderly,grandma
+🙍 person frowning|annoyed,disappointed,disgruntled
🙍‍♂️ man frowning|annoyed,disappointed,disgruntled
🙍‍♀️ woman frowning|annoyed,disappointed,disgruntled
+🙎 person pouting|disappointed,downtrodden,frown
🙎‍♂️ man pouting|disappointed,downtrodden,frown
🙎‍♀️ woman pouting|disappointed,downtrodden,frown
+🙅 person gesturing NO|forbidden,gesture,hand
🙅‍♂️ man gesturing NO|forbidden,gesture,hand
🙅‍♀️ woman gesturing NO|forbidden,gesture,hand
+🙆 person gesturing OK|exercise,gesture,hand
🙆‍♂️ man gesturing OK|exercise,gesture,hand
🙆‍♀️ woman gesturing OK|exercise,gesture,hand
+💁 person tipping hand|fetch,flick,flip
💁‍♂️ man tipping hand|fetch,flick,flip
💁‍♀️ woman tipping hand|fetch,flick,flip
+🙋 person raising hand|gesture,here,know
🙋‍♂️ man raising hand|gesture,here,know
🙋‍♀️ woman raising hand|gesture,here,know
+🧏 deaf person|accessibility,ear,gesture
🧏‍♂️ deaf man|accessibility,ear,gesture
🧏‍♀️ deaf woman|accessibility,ear,gesture
+🙇 person bowing|apology,ask,beg
🙇‍♂️ man bowing|apology,ask,beg
🙇‍♀️ woman bowing|apology,ask,beg
+🤦 person facepalming|again,bewilder,disbelief
🤦‍♂️ man facepalming|again,bewilder,disbelief
🤦‍♀️ woman facepalming|again,bewilder,disbelief
+🤷 person shrugging|doubt,dunno,guess
🤷‍♂️ man shrugging|doubt,dunno,guess
🤷‍♀️ woman shrugging|doubt,dunno,guess
🧑‍⚕️ health worker|doctor,healthcare,nurse
👨‍⚕️ man health worker|doctor,healthcare,nurse
👩‍⚕️ woman health worker|doctor,healthcare,nurse
🧑‍🎓 student|graduate
👨‍🎓 man student|graduate
👩‍🎓 woman student|graduate
🧑‍🏫 teacher|instructor,lecturer,professor
👨‍🏫 man teacher|instructor,lecturer,professor
👩‍🏫 woman teacher|instructor,lecturer,professor
🧑‍⚖️ judge|justice,law,scales
👨‍⚖️ man judge|justice,law,scales
👩‍⚖️ woman judge|justice,law,scales
🧑‍🌾 farmer|gardener,rancher
👨‍🌾 man farmer|gardener,rancher
👩‍🌾 woman farmer|gardener,rancher
🧑‍🍳 cook|chef
👨‍🍳 man cook|chef
👩‍🍳 woman cook|chef
🧑‍🔧 mechanic|electrician,plumber,tradesperson
👨‍🔧 man mechanic|electrician,plumber,tradesperson
👩‍🔧 woman mechanic|electrician,plumber,tradesperson
🧑‍🏭 factory worker|assembly,industrial
👨‍🏭 man factory worker|assembly,industrial
👩‍🏭 woman factory worker|assembly,industrial
🧑‍💼 office worker|architect,business,manager
👨‍💼 man office worker|architect,business,manager
👩‍💼 woman office worker|architect,business,manager
🧑‍🔬 scientist|biologist,chemist,engineer
👨‍🔬 man scientist|biologist,chemist,engineer
👩‍🔬 woman scientist|biologist,chemist,engineer
🧑‍💻 technologist|coder,computer,developer
👨‍💻 man technologist|coder,computer,developer
👩‍💻 woman technologist|coder,computer,developer
🧑‍🎤 singer|actor,entertainer,rock
👨‍🎤 man singer|actor,entertainer,rock
👩‍🎤 woman singer|actor,entertainer,rock
🧑‍🎨 artist|palette
👨‍🎨 man artist|palette
👩‍🎨 woman artist|palette
🧑‍✈️ pilot|plane
👨‍✈️ man pilot|plane
👩‍✈️ woman pilot|plane
🧑‍🚀 astronaut|rocket,space
👨‍🚀 man astronaut|rocket,space
👩‍🚀 woman astronaut|rocket,space
🧑‍🚒 firefighter|fire,firetruck
👨‍🚒 man firefighter|fire,firetruck
👩‍🚒 woman firefighter|fire,firetruck
+👮 police officer|apprehend,arrest,citation
👮‍♂️ man police officer|apprehend,arrest,citation
👮‍♀️ woman police officer|apprehend,arrest,citation
+🕵️ detective|sleuth,spy
🕵️‍♂️ man detective|sleuth,spy
🕵️‍♀️ woman detective|sleuth,spy
+💂 guard|buckingham,helmet,london
💂‍♂️ man guard|buckingham,helmet,london
💂‍♀️ woman guard|buckingham,helmet,london
+🥷 ninja|assassin,fight,fighter
+👷 construction worker|build,fix,hardhat
👷‍♂️ man construction worker|build,fix,hardhat
👷‍♀️ woman construction worker|build,fix,hardhat
+🫅 person with crown|monarch,noble,regal
+🤴 prince|crown,fairy,fairytale
+👸 princess|crown,fairy,fairytale
+👳 person wearing turban
👳‍♂️ man wearing turban
👳‍♀️ woman wearing turban
+👲 person with skullcap|Chinese,cap,gua
+🧕 woman with headscarf|bandana,head,hijab
+🤵 person in tuxedo|formal,wedding
🤵‍♂️ man in tuxedo|formal,groom,wedding
🤵‍♀️ woman in tuxedo|formal,wedding
+👰 person with veil|wedding
👰‍♂️ man with veil|wedding
👰‍♀️ woman with veil|bride,wedding
+🤰 pregnant woman
+🫃 pregnant man|belly,bloated,full
+🫄 pregnant person|belly,bloated,full
+🤱 breast-feeding|baby,mom,mother
👩‍🍼 woman feeding baby|feed,mom,mother
👨‍🍼 man feeding baby|dad,father,feed
🧑‍🍼 person feeding baby|feed,nanny,newborn
+👼 baby angel|church,face,fairy
+🎅 Santa Claus|Christmas,celebration,fairy
+🤶 Mrs. Claus|Christmas,celebration,fairy
🧑‍🎄 Mx Claus|Christmas,celebration,fairy
+🦸 superhero|good,hero,superpower
🦸‍♂️ man superhero|good,hero,superpower
🦸‍♀️ woman superhero|good,hero,heroine
+🦹 supervillain|bad,criminal,evil
🦹‍♂️ man supervillain|bad,criminal,evil
🦹‍♀️ woman supervillain|bad,criminal,evil
+🧙 mage|fantasy,magic,play
🧙‍♂️ man mage|fantasy,magic,play
🧙‍♀️ woman mage|fantasy,magic,play
+🧚 fairy|fairytale,fantasy,myth
🧚‍♂️ man fairy|Oberon,Puck,fairytale
🧚‍♀️ woman fairy|Titania,fairytale,fantasy
+🧛 vampire|Dracula,blood,fangs
🧛‍♂️ man vampire|blood,fangs,halloween
🧛‍♀️ woman vampire|blood,fangs,halloween
+🧜 merperson|creature,fairytale,folklore
🧜‍♂️ merman|Neptune,Poseidon,Triton
🧜‍♀️ mermaid|creature,fairytale,folklore
+🧝 elf|elves,enchantment,fantasy
🧝‍♂️ man elf|elves,enchantment,fantasy
🧝‍♀️ woman elf|elves,enchantment,fantasy
🧞 genie|djinn,fantasy,jinn
🧞‍♂️ man genie|djinn,fantasy,jinn
🧞‍♀️ woman genie|djinn,fantasy,jinn
🧟 zombie|apocalypse,dead,halloween
🧟‍♂️ man zombie|apocalypse,dead,halloween
🧟‍♀️ woman zombie|apocalypse,dead,halloween
🧌 troll|fairy,fantasy,monster
+💆 person getting massage|face,headache,relax
💆‍♂️ man getting massage|face,headache,relax
💆‍♀️ woman getting massage|face,headache,relax
+💇 person getting haircut|barber,beauty,chop
💇‍♂️ man getting haircut|barber,beauty,chop
💇‍♀️ woman getting haircut|barber,beauty,chop
+🚶 person walking|amble,gait,hike
🚶‍♂️ man walking|amble,gait,hike
🚶‍♀️ woman walking|amble,gait,hike
+🧍 person standing|stand
🧍‍♂️ man standing|stand
🧍‍♀️ woman standing|stand
+🧎 person kneeling|kneel,knees
🧎‍♂️ man kneeling|kneel,knees
🧎‍♀️ woman kneeling|kneel,knees
🧑‍🦯 person with white cane|accessibility,blind,probing
👨‍🦯 man with white cane|accessibility,blind,probing
👩‍🦯 woman with white cane|accessibility,blind,probing
🧑‍🦼 person in motorized wheelchair|accessibility
👨‍🦼 man in motorized wheelchair|accessibility
👩‍🦼 woman in motorized wheelchair|accessibility
🧑‍🦽 person in manual wheelchair|accessibility
👨‍🦽 man in manual wheelchair|accessibility
👩‍🦽 woman in manual wheelchair|accessibility
+🏃 person running|fast,hurry,marathon
🏃‍♂️ man running|fast,hurry,marathon
🏃‍♀️ woman running|fast,hurry,marathon
+💃 woman dancing|dance,dancer,elegant
+🕺 man dancing|dance,dancer,elegant
+🕴️ person in suit levitating|business
+👯 people with bunny ears|bestie,bff,counterpart
👯‍♂️ men with bunny ears|bestie,bff,counterpart
👯‍♀️ women with bunny ears|bestie,bff,counterpart
+🧖 person in steamy room|day,luxurious,pamper
🧖‍♂️ man in steamy room|day,luxurious,pamper
🧖‍♀️ woman in steamy room|day,luxurious,pamper
+🧗 person climbing|climb,climber,mountain
🧗‍♂️ man climbing|climb,climber,mountain
🧗‍♀️ woman climbing|climb,climber,mountain
🤺 person fencing|fencer,sword
+🏇 horse racing|jockey,racehorse,riding
⛷️ skier|ski,snow
+🏂 snowboarder|ski,snow,snowboard
+🏌️ person golfing|ball,birdie,caddy
🏌️‍♂️ man golfing|ball,birdie,caddy
🏌️‍♀️ woman golfing|ball,birdie,caddy
+🏄 person surfing|beach,ocean,sport
🏄‍♂️ man surfing|beach,ocean,sport
🏄‍♀️ woman surfing|beach,ocean,person
+🚣 person rowing boat|canoe,cruise,fishing
🚣‍♂️ man rowing boat|canoe,cruise,fishing
🚣‍♀️ woman rowing boat|canoe,cruise,fishing
+🏊 person swimming|freestyle,sport,swim
🏊‍♂️ man swimming|freestyle,sport,swim
🏊‍♀️ woman swimming|freestyle,man,sport
+⛹️ person bouncing ball|athletic,basketball,championship
⛹️‍♂️ man bouncing ball|athletic,basketball,championship
⛹️‍♀️ woman bouncing ball|athletic,basketball,championship
+🏋️ person lifting weights|barbell,bodybuilder,deadlift
🏋️‍♂️ man lifting weights|barbell,bodybuilder,deadlift
🏋️‍♀️ woman lifting weights|barbell,bodybuilder,deadlift
+🚴 person biking|bicycle,bicyclist,bike
🚴‍♂️ man biking|bicycle,bicyclist,bike
🚴‍♀️ woman biking|bicycle,bicyclist,bike
+🚵 person mountain biking|bicycle,bicyclist,bike
🚵‍♂️ man mountain biking|bicycle,bicyclist,bike
🚵‍♀️ woman mountain biking|bicycle,bicyclist,bike
+🤸 person cartwheeling|active,cartwheel,excited
🤸‍♂️ man cartwheeling|active,cartwheel,excited
🤸‍♀️ woman cartwheeling|active,cartwheel,excited
+🤼 people wrestling|combat,duel,grapple
🤼‍♂️ men wrestling|combat,duel,grapple
🤼‍♀️ women wrestling|combat,duel,grapple
+🤽 person playing water polo|sport,swimming,waterpolo
🤽‍♂️ man playing water polo|sport,swimming,waterpolo
🤽‍♀️ woman playing water polo|sport,swimming,waterpolo
+🤾 person playing handball|athletics,ball,catch
🤾‍♂️ man playing handball|athletics,ball,catch
🤾‍♀️ woman playing handball|athletics,ball,catch
+🤹 person juggling|act,balance,balancing
🤹‍♂️ man juggling|act,balance,balancing
🤹‍♀️ woman juggling|act,balance,balancing
+🧘 person in lotus position|cross,legged,legs
🧘‍♂️ man in lotus position|cross,legged,legs
🧘‍♀️ woman in lotus position|cross,legged,legs
+🛀 person taking bath|bathtub,tub
+🛌 person in bed|bedtime,good,goodnight
🧑‍🤝‍🧑 people holding hands|bae,bestie,bff
+👭 women holding hands|bae,bestie,bff
+👫 woman and man holding hands|bae,bestie,bff
+👬 men holding hands|bae,bestie,bff
+💏 kiss|anniversary,babe,bae
👩‍❤️‍💋‍👨 kiss: woman, man|anniversary,babe,bae
👨‍❤️‍💋‍👨 kiss: man, man|anniversary,babe,bae
👩‍❤️‍💋‍👩 kiss: woman, woman|anniversary,babe,bae
+💑 couple with heart|anniversary,babe,bae
👩‍❤️‍👨 couple with heart: woman, man|anniversary,babe,bae
👨‍❤️‍👨 couple with heart: man, man|anniversary,babe,bae
👩‍❤️‍👩 couple with heart: woman, woman|anniversary,babe,bae
👨‍👩‍👦 family: man, woman, boy|child
👨‍👩‍👧 family: man, woman, girl|child
👨‍👩‍👧‍👦 family: man, woman, girl, boy|child
👨‍👩‍👦‍👦 family: man, woman, boy, boy|child
👨‍👩‍👧‍👧 family: man, woman, girl, girl|child
👨‍👨‍👦 family: man, man, boy|child
👨‍👨‍👧 family: man, man, girl|child
👨‍👨‍👧‍👦 family: man, man, girl, boy|child
👨‍👨‍👦‍👦 family: man, man, boy, boy|child
👨‍👨‍👧‍👧 family: man, man, girl, girl|child
👩‍👩‍👦 family: woman, woman, boy|child
👩‍👩‍👧 family: woman, woman, girl|child
👩‍👩‍👧‍👦 family: woman, woman, girl, boy|child
👩‍👩‍👦‍👦 family: woman, woman, boy, boy|child
👩‍👩‍👧‍👧 family: woman, woman, girl, girl|child
👨‍👦 family: man, boy|child
👨‍👦‍👦 family: man, boy, boy|child
👨‍👧 family: man, girl|child
👨‍👧‍👦 family: man, girl, boy|child
👨‍👧‍👧 family: man, girl, girl|child
👩‍👦 family: woman, boy|child
👩‍👦‍👦 family: woman, boy, boy|child
👩‍👧 family: woman, girl|child
👩‍👧‍👦 family: woman, girl, boy|child
👩‍👧‍👧 family: woman, girl, girl|child
🗣️ speaking head|face,silhouette,speak
👤 bust in silhouette|mysterious,shadow
👥 busts in silhouette|bff,bust,everyone
🫂 people hugging|comfort,embrace,farewell
👪 family|child
👣 footprints|barefoot,clothing,footprint`],
    ["Animals & Nature", "🐻", `🐵 monkey face|animal,banana
🐒 monkey|animal,banana
🦍 gorilla|animal
🦧 orangutan|animal,ape,monkey
🐶 dog face|adorbs,animal,pet
🐕 dog|animal,animals,dogs
🦮 guide dog|accessibility,animal,blind
🐕‍🦺 service dog|accessibility,animal,assistance
🐩 poodle|animal,dog,fluffy
🐺 wolf|animal,face
🦊 fox|animal,face
🦝 raccoon|animal,curious,sly
🐱 cat face|animal,kitten,kitty
🐈 cat|animal,animals,cats
🐈‍⬛ black cat|animal,feline,halloween
🦁 lion|Leo,alpha,animal
🐯 tiger face|animal,big,cat
🐅 tiger|animal,big,cat
🐆 leopard|animal,big,cat
🐴 horse face|animal,dressage,equine
🫎 moose|alces,animal,antlers
🫏 donkey|animal,ass,burro
🐎 horse|animal,equestrian,farm
🦄 unicorn|face
🦓 zebra|animal,stripe
🦌 deer|animal
🦬 bison|animal,buffalo,herd
🐮 cow face|animal,farm,milk
🐂 ox|Taurus,animal,animals
🐃 water buffalo|animal,zoo
🐄 cow|animal,animals,farm
🐷 pig face|animal,bacon,farm
🐖 pig|animal,bacon,farm
🐗 boar|animal,pig
🐽 pig nose|animal,face,farm
🐏 ram|Aries,animal,horns
🐑 ewe|animal,baa,farm
🐐 goat|Capricorn,animal,farm
🐪 camel|animal,desert,dromedary
🐫 two-hump camel|animal,bactrian,desert
🦙 llama|alpaca,animal,guanaco
🦒 giraffe|animal,spots
🐘 elephant|animal
🦣 mammoth|animal,extinction,large
🦏 rhinoceros|animal
🦛 hippopotamus|animal,hippo
🐭 mouse face|animal
🐁 mouse|animal,animals
🐀 rat|animal
🐹 hamster|animal,face,pet
🐰 rabbit face|animal,bunny,pet
🐇 rabbit|animal,bunny,pet
🐿️ chipmunk|animal,squirrel
🦫 beaver|animal,dam,teeth
🦔 hedgehog|animal,spiny
🦇 bat|animal,vampire
🐻 bear|animal,face,grizzly
🐻‍❄️ polar bear|animal,arctic,white
🐨 koala|animal,australia,bear
🐼 panda|animal,bamboo,face
🦥 sloth|lazy,slow
🦦 otter|animal,fishing,playful
🦨 skunk|animal,stink
🦘 kangaroo|animal,joey,jump
🦡 badger|animal,honey,pester
🐾 paw prints|feet,paws,print
🦃 turkey|bird,gobble,thanksgiving
🐔 chicken|animal,bird,ornithology
🐓 rooster|animal,bird,ornithology
🐣 hatching chick|animal,baby,bird
🐤 baby chick|animal,bird,ornithology
🐥 front-facing baby chick|animal,bird,front-facing
🐦 bird|animal,ornithology
🐧 penguin|animal,antarctica,bird
🕊️ dove|bird,fly,ornithology
🦅 eagle|animal,bird,ornithology
🦆 duck|animal,bird,ornithology
🦢 swan|animal,bird,cygnet
🦉 owl|animal,bird,ornithology
🦤 dodo|animal,bird,extinction
🪶 feather|bird,flight,light
🦩 flamingo|animal,bird,flamboyant
🦚 peacock|animal,bird,colorful
🦜 parrot|animal,bird,ornithology
🪽 wing|angelic,ascend,aviation
🐦‍⬛ black bird|animal,beak,caw
🪿 goose|animal,bird,duck
🐸 frog|animal,face
🐊 crocodile|animal,zoo
🐢 turtle|animal,terrapin,tortoise
🦎 lizard|animal,reptile
🐍 snake|Ophiuchus,animal,bearer
🐲 dragon face|animal,fairy,fairytale
🐉 dragon|animal,fairy,fairytale
🦕 sauropod|brachiosaurus,brontosaurus,dinosaur
🦖 T-Rex|Tyrannosaurus,dinosaur
🐳 spouting whale|animal,beach,face
🐋 whale|animal,beach,ocean
🐬 dolphin|animal,beach,flipper
🦭 seal|animal,lion,ocean
🐟 fish|Pisces,animal,dinner
🐠 tropical fish|animal,fishes
🐡 blowfish|animal,fish
🦈 shark|animal,fish
🐙 octopus|animal,creature,ocean
🐚 spiral shell|animal,beach,conch
🪸 coral|change,climate,ocean
🪼 jellyfish|animal,aquarium,burn
🦀 crab|Cancer,zodiac
🦞 lobster|animal,bisque,claws
🦐 shrimp|food,shellfish,small
🦑 squid|animal,food,mollusk
🦪 oyster|diving,pearl
🐌 snail|animal,escargot,garden
🦋 butterfly|insect,pretty
🐛 bug|animal,garden,insect
🐜 ant|animal,garden,insect
🐝 honeybee|animal,bee,bumblebee
🪲 beetle|animal,bug,insect
🐞 lady beetle|animal,garden,insect
🦗 cricket|Orthoptera,animal,bug
🪳 cockroach|animal,insect,pest
🕷️ spider|animal,insect
🕸️ spider web
🦂 scorpion|Scorpio,Scorpius,zodiac
🦟 mosquito|bite,disease,fever
🪰 fly|animal,disease,insect
🪱 worm|animal,annelid,earthworm
🦠 microbe|amoeba,bacteria,science
💐 bouquet|anniversary,birthday,date
🌸 cherry blossom|flower,plant,spring
💮 white flower
🪷 lotus|Buddhism,Hinduism,beauty
🏵️ rosette|plant
🌹 rose|beauty,elegant,flower
🥀 wilted flower|dying
🌺 hibiscus|flower,plant
🌻 sunflower|flower,outdoors,plant
🌼 blossom|buttercup,dandelion,flower
🌷 tulip|blossom,flower,growth
🪻 hyacinth|bloom,bluebonnet,flower
🌱 seedling|plant,sapling,sprout
🪴 potted plant|decor,grow,house
🌲 evergreen tree|christmas,forest,pine
🌳 deciduous tree|forest,green,habitat
🌴 palm tree|beach,plant,tropical
🌵 cactus|desert,drought,nature
🌾 sheaf of rice|ear,grain,grains
🌿 herb|leaf,plant
☘️ shamrock|irish,plant
🍀 four leaf clover|four-leaf,irish,lucky
🍁 maple leaf|falling
🍂 fallen leaf|autumn,fall,falling
🍃 leaf fluttering in wind|blow,flutter
🪹 empty nest|branch,home,nesting
🪺 nest with eggs|bird,branch,egg
🍄 mushroom|fungus,toadstool`],
    ["Food & Drink", "🍔", `🍇 grapes|Dionysus,fruit,grape
🍈 melon|cantaloupe,fruit
🍉 watermelon|fruit
🍊 tangerine|c,citrus,fruit
🍋 lemon|citrus,fruit,sour
🍌 banana|fruit,potassium
🍍 pineapple|colada,fruit,pina
🥭 mango|food,fruit,tropical
🍎 red apple|diet,food,fruit
🍏 green apple|fruit
🍐 pear|fruit
🍑 peach|fruit
🍒 cherries|berries,cherry,fruit
🍓 strawberry|berry,fruit
🫐 blueberries|berries,berry,bilberry
🥝 kiwi fruit|food
🍅 tomato|food,fruit,vegetable
🫒 olive|food
🥥 coconut|colada,palm,piña
🥑 avocado|food,fruit
🍆 eggplant|aubergine,vegetable
🥔 potato|food,vegetable
🥕 carrot|food,vegetable
🌽 ear of corn|crops,farm,maize
🌶️ hot pepper
🫑 bell pepper|capsicum,food,vegetable
🥒 cucumber|food,pickle,vegetable
🥬 leafy green|bok,burgers,cabbage
🥦 broccoli|cabbage,wild
🧄 garlic|flavoring
🧅 onion|flavoring
🥜 peanuts|food,nut,peanut
🫘 beans|food,kidney,legume
🌰 chestnut|almond,plant
🫚 ginger root|beer,health,herb
🫛 pea pod|beans,beanstalk,edamame
🍞 bread|carbs,food,grain
🥐 croissant|bread,breakfast,crescent
🥖 baguette bread|food,french
🫓 flatbread|arepa,bread,food
🥨 pretzel|convoluted,twisted
🥯 bagel|bakery,bread,breakfast
🥞 pancakes|breakfast,crêpe,food
🧇 waffle|breakfast,indecisive,iron
🧀 cheese wedge
🍖 meat on bone
🍗 poultry leg|bone,chicken,drumstick
🥩 cut of meat|chop,lambchop,porkchop
🥓 bacon|breakfast,food,meat
🍔 hamburger|burger,eat,fast
🍟 french fries|fast,food
🍕 pizza|cheese,food,hungry
🌭 hot dog|frankfurter,hotdog,sausage
🥪 sandwich|bread
🌮 taco|mexican
🌯 burrito|mexican,wrap
🫔 tamale|food,mexican,pamonha
🥙 stuffed flatbread|falafel,food,gyro
🧆 falafel|chickpea,meatball
🥚 egg|breakfast,food
🍳 cooking|breakfast,easy,egg
🥘 shallow pan of food|casserole,paella
🍲 pot of food|soup,stew
🫕 fondue|cheese,chocolate,food
🥣 bowl with spoon|breakfast,cereal,congee
🥗 green salad|food
🍿 popcorn|corn,movie,pop
🧈 butter|dairy
🧂 salt|condiment,flavor,mad
🥫 canned food|can
🍱 bento box|food
🍘 rice cracker|food
🍙 rice ball|Japanese,food
🍚 cooked rice|food
🍛 curry rice|food
🍜 steaming bowl|chopsticks,food,noodle
🍝 spaghetti|food,meatballs,pasta
🍠 roasted sweet potato|food
🍢 oden|food,kebab,restaurant
🍣 sushi|food
🍤 fried shrimp|prawn,tempura
🍥 fish cake with swirl|food,pastry,restaurant
🥮 moon cake|autumn,festival,yuèbǐng
🍡 dango|Japanese,dessert,skewer
🥟 dumpling|empanada,gyōza,jiaozi
🥠 fortune cookie|prophecy
🥡 takeout box|chopsticks,delivery,food
🍦 soft ice cream|dessert,food,icecream
🍧 shaved ice|dessert,restaurant,sweet
🍨 ice cream|dessert,food,restaurant
🍩 doughnut|breakfast,dessert,donut
🍪 cookie|chip,chocolate,dessert
🎂 birthday cake|bday,celebration,dessert
🍰 shortcake|cake,dessert,pastry
🧁 cupcake|bakery,dessert,sprinkles
🥧 pie|apple,filling,fruit
🍫 chocolate bar|candy,dessert,halloween
🍬 candy|cavities,dessert,halloween
🍭 lollipop|candy,dessert,food
🍮 custard|dessert,pudding,sweet
🍯 honey pot|barrel,bear,food
🍼 baby bottle|babies,birth,born
🥛 glass of milk|drink
☕ hot beverage|cafe,caffeine,chai
🫖 teapot|brew,drink,food
🍵 teacup without handle|beverage,cup,drink
🍶 sake|bar,beverage,bottle
🍾 bottle with popping cork|bar,drink
🍷 wine glass|alcohol,bar,beverage
🍸 cocktail glass|alcohol,bar,booze
🍹 tropical drink|alcohol,bar,booze
🍺 beer mug|alcohol,ale,bar
🍻 clinking beer mugs|alcohol,bar,booze
🥂 clinking glasses|celebrate,clink,drink
🥃 tumbler glass|liquor,scotch,shot
🫗 pouring liquid|accident,drink,empty
🥤 cup with straw|drink,juice,malt
🧋 bubble tea|boba,food,milk
🧃 beverage box|juice,straw,sweet
🧉 mate|drink
🧊 ice|cold,cube,iceberg
🥢 chopsticks|hashi,jeotgarak,kuaizi
🍽️ fork and knife with plate|cooking,dinner,eat
🍴 fork and knife|breakfast,breaky,cooking
🥄 spoon|eat,tableware
🔪 kitchen knife|chef,cooking,hocho
🫙 jar|condiment,container,empty
🏺 amphora|Aquarius,cooking,drink`],
    ["Travel & Places", "✈️", `🌍 globe showing Europe-Africa|Europe-Africa,earth,world
🌎 globe showing Americas|earth,world
🌏 globe showing Asia-Australia|Asia-Australia,earth,world
🌐 globe with meridians|earth,internet,web
🗺️ world map
🗾 map of Japan
🧭 compass|direction,magnetic,navigation
🏔️ snow-capped mountain|cold,snow-capped
⛰️ mountain
🌋 volcano|eruption,mountain,nature
🗻 mount fuji|mountain,nature
🏕️ camping
🏖️ beach with umbrella
🏜️ desert
🏝️ desert island
🏞️ national park
🏟️ stadium
🏛️ classical building
🏗️ building construction|crane
🧱 brick|bricks,clay,mortar
🪨 rock|boulder,heavy,solid
🪵 wood|log,lumber,timber
🛖 hut|home,house,roundhouse
🏘️ houses|house
🏚️ derelict house|home
🏠 house|building,country,heart
🏡 house with garden|building,country,heart
🏢 office building|city,cubical,job
🏣 Japanese post office|building
🏤 post office|European,building
🏥 hospital|building,doctor,medicine
🏦 bank|building
🏨 hotel|building
🏩 love hotel|building
🏪 convenience store|building,hours
🏫 school|building
🏬 department store|building
🏭 factory|building
🏯 Japanese castle|building
🏰 castle|European,building
💒 wedding|chapel,hitched,nuptials
🗼 Tokyo tower
🗽 Statue of Liberty|new,ny,nyc
⛪ church|Christian,bless,chapel
🕌 mosque|Muslim,islam,masjid
🛕 hindu temple
🕍 synagogue|Jew,Jewish,judaism
⛩️ shinto shrine|religion
🕋 kaaba|Muslim,hajj,islam
⛲ fountain
⛺ tent|camping
🌁 foggy|fog
🌃 night with stars|star
🏙️ cityscape|city
🌄 sunrise over mountains|morning,sun
🌅 sunrise|morning,nature,sun
🌆 cityscape at dusk|building,city,evening
🌇 sunset|building,dusk,sun
🌉 bridge at night
♨️ hot springs|hotsprings,steaming
🎠 carousel horse|entertainment
🛝 playground slide|amusement,park,play
🎡 ferris wheel|amusement,park,theme
🎢 roller coaster|amusement,park,theme
💈 barber pole|cut,fresh,haircut
🎪 circus tent
🚂 locomotive|caboose,engine,railway
🚃 railway car|electric,train,tram
🚄 high-speed train|high-speed,railway,shinkansen
🚅 bullet train|high-speed,nose,railway
🚆 train|arrived,choo,railway
🚇 metro|subway,travel
🚈 light rail|arrived,monorail,railway
🚉 station|railway,train
🚊 tram|trolleybus
🚝 monorail|vehicle
🚞 mountain railway|car,trip
🚋 tram car|bus,trolley,trolleybus
🚌 bus|school,vehicle
🚍 oncoming bus|cars
🚎 trolleybus|bus,tram,trolley
🚐 minibus|bus,drive,van
🚑 ambulance|emergency,vehicle
🚒 fire engine|truck
🚓 police car|5–0,cops,patrol
🚔 oncoming police car
🚕 taxi|cab,cabbie,car
🚖 oncoming taxi|cab,cabbie,cars
🚗 automobile|car,driving,vehicle
🚘 oncoming automobile|car,cars,drove
🚙 sport utility vehicle|car,drive,recreational
🛻 pickup truck|automobile,car,flatbed
🚚 delivery truck|car,drive,vehicle
🚛 articulated lorry|car,drive,move
🚜 tractor|vehicle
🏎️ racing car|zoom
🏍️ motorcycle|racing
🛵 motor scooter
🦽 manual wheelchair|accessibility
🦼 motorized wheelchair|accessibility
🛺 auto rickshaw|tuk
🚲 bicycle|bike,class,cycle
🛴 kick scooter
🛹 skateboard|board,skate,skater
🛼 roller skate|blades,skates,sport
🚏 bus stop|busstop
🛣️ motorway|highway,road
🛤️ railway track|train
🛢️ oil drum
⛽ fuel pump|diesel,fuelpump,gas
🛞 wheel|car,circle,tire
🚨 police car light|alarm,alert,beacon
🚥 horizontal traffic light|intersection,signal,stop
🚦 vertical traffic light|drove,intersection,signal
🛑 stop sign|octagonal
🚧 construction|barrier
⚓ anchor|ship,tool
🛟 ring buoy|float,life,lifesaver
⛵ sailboat|boat,resort,sailing
🛶 canoe|boat
🚤 speedboat|billionaire,boat,lake
🛳️ passenger ship
⛴️ ferry|boat,passenger
🛥️ motor boat|motorboat
🚢 ship|boat,passenger,travel
✈️ airplane|aeroplane,fly,flying
🛩️ small airplane|aeroplane,plane
🛫 airplane departure|aeroplane,check-in,departures
🛬 airplane arrival|aeroplane,arrivals,arriving
🪂 parachute|hang-glide,parasail,skydive
💺 seat|chair
🚁 helicopter|copter,roflcopter,travel
🚟 suspension railway
🚠 mountain cableway|cable,gondola,lift
🚡 aerial tramway|cable,car,gondola
🛰️ satellite|space
🚀 rocket|launch,rockets,space
🛸 flying saucer|UFO,aliens,extra
🛎️ bellhop bell|hotel
🧳 luggage|bag,packing,roller
⌛ hourglass done|sand,time,timer
⏳ hourglass not done|flowing,hours,sand
⌚ watch|clock,time
⏰ alarm clock|hours,hrs,late
⏱️ stopwatch|clock,time
⏲️ timer clock
🕰️ mantelpiece clock|time
🕛 twelve o’clock|12:00,o’clock,time
🕧 twelve-thirty|12:30,clock,time
🕐 one o’clock|1:00,o’clock,time
🕜 one-thirty|1:30,clock,time
🕑 two o’clock|2:00,o’clock,time
🕝 two-thirty|2:30,clock,time
🕒 three o’clock|3:00,o’clock,time
🕞 three-thirty|3:30,clock,time
🕓 four o’clock|4:00,o’clock,time
🕟 four-thirty|4:30,clock,time
🕔 five o’clock|5:00,o’clock,time
🕠 five-thirty|5:30,clock,time
🕕 six o’clock|6:00,o’clock,time
🕡 six-thirty|6:30,clock
🕖 seven o’clock|7:00,o’clock
🕢 seven-thirty|7:30,clock
🕗 eight o’clock|8:00,o’clock,time
🕣 eight-thirty|8:30,clock,time
🕘 nine o’clock|9:00,o’clock,time
🕤 nine-thirty|9:30,clock,time
🕙 ten o’clock|10:00,o’clock
🕥 ten-thirty|10:30,clock,time
🕚 eleven o’clock|11:00,o’clock,time
🕦 eleven-thirty|11:30,clock,time
🌑 new moon|dark,space
🌒 waxing crescent moon|dreams,space
🌓 first quarter moon|space
🌔 waxing gibbous moon|space
🌕 full moon|space
🌖 waning gibbous moon|space
🌗 last quarter moon|space
🌘 waning crescent moon|space
🌙 crescent moon|ramadan,space
🌚 new moon face|space
🌛 first quarter moon face|space
🌜 last quarter moon face|dreams
🌡️ thermometer|weather
☀️ sun|bright,rays,space
🌝 full moon face|bright
🌞 sun with face|beach,bright,day
🪐 ringed planet|saturn,saturnine
⭐ star|astronomy,medium,stars
🌟 glowing star|glittery,glow,night
🌠 shooting star|falling,night,space
🌌 milky way|space
☁️ cloud|weather
⛅ sun behind cloud|cloudy,weather
⛈️ cloud with lightning and rain|thunder,thunderstorm
🌤️ sun behind small cloud|weather
🌥️ sun behind large cloud|weather
🌦️ sun behind rain cloud|weather
🌧️ cloud with rain|weather
🌨️ cloud with snow|cold,weather
🌩️ cloud with lightning|weather
🌪️ tornado|cloud,weather,whirlwind
🌫️ fog|cloud,weather
🌬️ wind face|blow,cloud
🌀 cyclone|dizzy,hurricane,twister
🌈 rainbow|gay,genderqueer,glbt
🌂 closed umbrella|clothing,rain
☂️ umbrella|clothing,rain
☔ umbrella with rain drops|clothing,drop,weather
⛱️ umbrella on ground|rain,sun
⚡ high voltage|danger,electric,electricity
❄️ snowflake|cold,snow,weather
☃️ snowman|cold,man,snow
⛄ snowman without snow|cold,man
☄️ comet|space
🔥 fire|af,burn,flame
💧 droplet|cold,comic,drop
🌊 water wave|nature,ocean,surf`],
    ["Activities", "⚽", `🎃 jack-o-lantern|celebration,halloween,pumpkin
🎄 Christmas tree|celebration
🎆 fireworks|boom,celebration,entertainment
🎇 sparkler|boom,celebration,fireworks
🧨 firecracker|dynamite,explosive,fire
✨ sparkles|*,magic,sparkle
🎈 balloon|birthday,celebrate,celebration
🎉 party popper|awesome,birthday,celebrate
🎊 confetti ball|celebrate,celebration,party
🎋 tanabata tree|Japanese,banner,celebration
🎍 pine decoration|Japanese,bamboo,celebration
🎎 Japanese dolls|celebration,doll,festival
🎏 carp streamer|celebration
🎐 wind chime|bell,celebration
🎑 moon viewing ceremony|celebration
🧧 red envelope|gift,good,hóngbāo
🎀 ribbon|celebration
🎁 wrapped gift|birthday,bow,box
🎗️ reminder ribbon|celebration
🎟️ admission tickets|ticket
🎫 ticket|admission,stub
🎖️ military medal|award,celebration
🏆 trophy|champion,champs,prize
🏅 sports medal|award,gold,winner
🥇 1st place medal|first,gold
🥈 2nd place medal|second,silver
🥉 3rd place medal|bronze,third
⚽ soccer ball|football,futbol,sport
⚾ baseball|ball,sport
🥎 softball|ball,glove,sports
🏀 basketball|ball,hoop,sport
🏐 volleyball|ball,game
🏈 american football|ball,bowl,sport
🏉 rugby football|ball,sport
🎾 tennis|ball,racquet,sport
🥏 flying disc|ultimate
🎳 bowling|ball,game,sport
🏏 cricket game|ball,bat
🏑 field hockey|ball,game,stick
🏒 ice hockey|game,puck,stick
🥍 lacrosse|ball,goal,sports
🏓 ping pong|ball,bat,game
🏸 badminton|birdie,game,racquet
🥊 boxing glove
🥋 martial arts uniform|judo,karate,taekwondo
🥅 goal net
⛳ flag in hole|golf,sport
⛸️ ice skate|skating
🎣 fishing pole|entertainment,fish,sport
🤿 diving mask|scuba,snorkeling
🎽 running shirt|athletics,sash
🎿 skis|ski,snow,sport
🛷 sled|luge,sledge,sleigh
🥌 curling stone|game,rock
🎯 bullseye|bull,dart,direct
🪀 yo-yo|fluctuate,toy
🪁 kite|fly,soar
🔫 water pistol|gun,handgun,revolver
🎱 pool 8 ball|8ball,billiard,eight
🔮 crystal ball|fairy,fairytale,fantasy
🪄 magic wand|magician,witch,wizard
🎮 video game|controller,entertainment
🕹️ joystick|game,video,videogame
🎰 slot machine|casino,gamble,gambling
🎲 game die|dice,entertainment
🧩 puzzle piece|clue,interlocking,jigsaw
🧸 teddy bear|plaything,plush,stuffed
🪅 piñata|candy,celebrate,celebration
🪩 mirror ball|dance,disco,glitter
🪆 nesting dolls|babooshka,baboushka,babushka
♠️ spade suit|card,game
♥️ heart suit|card,emotion,game
♦️ diamond suit|card,game
♣️ club suit|card,clubs,game
♟️ chess pawn|dupe,expendable
🃏 joker|card,game,wildcard
🀄 mahjong red dragon|game
🎴 flower playing cards|Japanese,card,game
🎭 performing arts|actor,actress,art
🖼️ framed picture|art,frame,museum
🎨 artist palette|art,artsy,arty
🧵 thread|needle,sewing,spool
🪡 sewing needle|embroidery,sew,stitches
🧶 yarn|ball,crochet,knit
🪢 knot|cord,rope,tangled`],
    ["Objects", "💡", `👓 glasses|clothing,eye,eyeglasses
🕶️ sunglasses|dark,eye,eyewear
🥽 goggles|dive,eye,protection
🥼 lab coat|clothes,doctor,dr
🦺 safety vest|emergency
👔 necktie|clothing,employed,serious
👕 t-shirt|blue,casual,clothes
👖 jeans|blue,casual,clothes
🧣 scarf|bundle,cold,neck
🧤 gloves|hand
🧥 coat|brr,bundle,cold
🧦 socks|stocking
👗 dress|clothes,clothing,dressed
👘 kimono|clothing,comfortable
🥻 sari|clothing,dress
🩱 one-piece swimsuit|bathing,one-piece,suit
🩲 briefs|bathing,one-piece,suit
🩳 shorts|bathing,pants,suit
👙 bikini|bathing,beach,clothing
👚 woman’s clothes|blouse,clothing,collar
🪭 folding hand fan|clack,clap,cool
👛 purse|clothes,clothing,coin
👜 handbag|bag,clothes,clothing
👝 clutch bag|clothes,clothing,dress
🛍️ shopping bags|bag,hotel
🎒 backpack|backpacking,bag,bookbag
🩴 thong sandal|beach,flip,flop
👞 man’s shoe|brown,clothes,clothing
👟 running shoe|athletic,clothes,clothing
🥾 hiking boot|backpacking,brown,camping
🥿 flat shoe|ballet,comfy,flats
👠 high-heeled shoe|clothes,clothing,dress
👡 woman’s sandal|clothing,shoe,woman’s
🩰 ballet shoes|dance
👢 woman’s boot|clothes,clothing,dress
🪮 hair pick|Afro,comb,groom
👑 crown|clothing,family,king
👒 woman’s hat|clothes,clothing,garden
🎩 top hat|clothes,clothing,fancy
🎓 graduation cap|celebration,clothing,education
🧢 billed cap|baseball,bent,dad
🪖 military helmet|army,soldier,war
⛑️ rescue worker’s helmet|aid,cross,face
📿 prayer beads|clothing,necklace,religion
💄 lipstick|cosmetics,date,makeup
💍 ring|diamond,engaged,engagement
💎 gem stone|diamond,engagement,jewel
🔇 muted speaker|mute,quiet,silent
🔈 speaker low volume|soft,sound
🔉 speaker medium volume|sound
🔊 speaker high volume|loud,music,sound
📢 loudspeaker|address,communication,loud
📣 megaphone|cheering,sound
📯 postal horn|post
🔔 bell|break,church,sound
🔕 bell with slash|forbidden,mute,no
🎼 musical score|music,note
🎵 musical note|music,sound
🎶 musical notes|music,note,sound
🎙️ studio microphone|mic,music
🎚️ level slider|music
🎛️ control knobs|music
🎤 microphone|karaoke,mic,music
🎧 headphone|earbud,sound
📻 radio|entertainment,tbt,video
🎷 saxophone|instrument,music,sax
🎺 trumpet|instrument,music
🪗 accordion|box,concertina,instrument
🎸 guitar|instrument,music,strat
🎹 musical keyboard|instrument,music,piano
🎻 violin|instrument,music
🪕 banjo|music,stringed
🥁 drum|drumsticks,music
🪘 long drum|beat,conga,instrument
🪇 maracas|cha,dance,instrument
🪈 flute|band,fife,flautist
📱 mobile phone|cell,communication,telephone
📲 mobile phone with arrow|build,call,cell
☎️ telephone|phone
📞 telephone receiver|communication,phone,voip
📟 pager|communication
📠 fax machine|communication
🔋 battery
🪫 low battery|drained,electronic,energy
🔌 electric plug|electricity
💻 laptop|computer,office,pc
🖥️ desktop computer|monitor
🖨️ printer|computer
⌨️ keyboard|computer
🖱️ computer mouse
🖲️ trackball|computer
💽 computer disk|minidisk,optical
💾 floppy disk|computer
💿 optical disk|CD,blu-ray,computer
📀 dvd|Blu-ray,cd,computer
🧮 abacus|calculation,calculator
🎥 movie camera|bollywood,cinema,film
🎞️ film frames|cinema,movie
📽️ film projector|cinema,movie,video
🎬 clapper board|action,movie
📺 television|tv,video
📷 camera|photo,selfie,snap
📸 camera with flash|video
📹 video camera|camcorder,tbt
📼 videocassette|old,school,tape
🔍 magnifying glass tilted left|lab,left-pointing,science
🔎 magnifying glass tilted right|contact,lab,right-pointing
🕯️ candle|light
💡 light bulb|comic,electric,idea
🔦 flashlight|electric,light,tool
🏮 red paper lantern|bar,light,restaurant
🪔 diya lamp|light,oil
📔 notebook with decorative cover|book,decorated,education
📕 closed book|education
📖 open book|education,fantasy,knowledge
📗 green book|education,fantasy,library
📘 blue book|education,fantasy,library
📙 orange book|education,fantasy,library
📚 books|book,education,fantasy
📓 notebook
📒 ledger|notebook
📃 page with curl|document,paper
📜 scroll|paper
📄 page facing up|document,paper
📰 newspaper|communication,news,paper
🗞️ rolled-up newspaper|news,paper,rolled-up
📑 bookmark tabs|mark,marker
🔖 bookmark|mark
🏷️ label|tag
🪙 coin|dollar,euro,gold
💰 money bag|bank,bet,billion
💴 yen banknote|bank,bill,currency
💵 dollar banknote|bank,bill,currency
💶 euro banknote|bank,bill,currency
💷 pound banknote|bank,bill,billion
💸 money with wings|bank,banknote,bill
💳 credit card|bank,cash,charge
🧾 receipt|accounting,bookkeeping,evidence
💹 chart increasing with yen|bank,currency,graph
✉️ envelope|e-mail,email,letter
📧 e-mail|email,letter
📨 incoming envelope|delivering,e-mail,email
📩 envelope with arrow|communication,down,e-mail
📤 outbox tray|box,email,letter
📥 inbox tray|box,email,letter
📦 package|box,communication,delivery
📫 closed mailbox with raised flag|communication,mail,postbox
📪 closed mailbox with lowered flag|mail,postbox
📬 open mailbox with raised flag|mail,postbox
📭 open mailbox with lowered flag|mail,postbox
📮 postbox|mail,mailbox
🗳️ ballot box with ballot
✏️ pencil
✒️ black nib|pen
🖋️ fountain pen
🖊️ pen|ballpoint
🖌️ paintbrush|painting
🖍️ crayon
📝 memo|communication,media,notes
💼 briefcase|office
📁 file folder
📂 open file folder
🗂️ card index dividers
📅 calendar|date
📆 tear-off calendar|tear-off
🗒️ spiral notepad|note,pad
🗓️ spiral calendar|pad
📇 card index|old,rolodex,school
📈 chart increasing|data,graph,growth
📉 chart decreasing|data,down,downward
📊 bar chart|data,graph
📋 clipboard|do,list,notes
📌 pushpin|collage,pin
📍 round pushpin|location,map,pin
📎 paperclip
🖇️ linked paperclips|link,paperclip
📏 straight ruler|angle,edge,math
📐 triangular ruler|angle,math,rule
✂️ scissors|cut,cutting,paper
🗃️ card file box
🗄️ file cabinet|filing,paper
🗑️ wastebasket|can,garbage,trash
🔒 locked|closed,lock,private
🔓 unlocked|cracked,lock,open
🔏 locked with pen|ink,lock,nib
🔐 locked with key|bike,closed,lock
🔑 key|keys,lock,major
🗝️ old key|clue,lock
🔨 hammer|home,improvement,repairs
🪓 axe|ax,chop,hatchet
⛏️ pick|hammer,mining,tool
⚒️ hammer and pick|tool
🛠️ hammer and wrench|spanner,tool
🗡️ dagger|knife,weapon
⚔️ crossed swords|weapon
💣 bomb|boom,comic,dangerous
🪃 boomerang|rebound,repercussion,weapon
🏹 bow and arrow|Sagittarius,archer,archery
🛡️ shield|weapon
🪚 carpentry saw|carpenter,cut,lumber
🔧 wrench|home,improvement,spanner
🪛 screwdriver|flathead,handy,screw
🔩 nut and bolt|home,improvement,tool
⚙️ gear|cog,cogwheel,tool
🗜️ clamp|compress,tool,vice
⚖️ balance scale|Libra,justice,scales
🦯 white cane|accessibility,blind,probing
🔗 link|links
⛓️ chains|chain
🪝 hook|catch,crook,curve
🧰 toolbox|box,chest,mechanic
🧲 magnet|attraction,horseshoe,magnetic
🪜 ladder|climb,rung,step
⚗️ alembic|chemistry,tool
🧪 test tube|chemist,chemistry,experiment
🧫 petri dish|bacteria,biologist,biology
🧬 dna|biologist,evolution,gene
🔬 microscope|experiment,lab,science
🔭 telescope|contact,extraterrestrial,science
📡 satellite antenna|aliens,contact,dish
💉 syringe|doctor,flu,medicine
🩸 drop of blood|bleed,donation,injury
💊 pill|doctor,drugs,medicated
🩹 adhesive bandage
🩼 crutch|aid,cane,disability
🩺 stethoscope|doctor,heart,medicine
🩻 x-ray|bones,doctor,medical
🚪 door|back,closet,front
🛗 elevator|accessibility,hoist,lift
🪞 mirror|makeup,reflection,reflector
🪟 window|air,frame,fresh
🛏️ bed|hotel,sleep
🛋️ couch and lamp|hotel
🪑 chair|seat,sit
🚽 toilet|bathroom
🪠 plunger|cup,force,plumber
🚿 shower|water
🛁 bathtub|bath
🪤 mouse trap|bait,cheese,lure
🪒 razor|sharp,shave
🧴 lotion bottle|moisturizer,shampoo,sunscreen
🧷 safety pin|diaper,punk,rock
🧹 broom|cleaning,sweeping,witch
🧺 basket|farming,laundry,picnic
🧻 roll of paper|toilet,towels
🪣 bucket|cask,pail,vat
🧼 soap|bar,bathing,clean
🫧 bubbles|bubble,burp,clean
🪥 toothbrush|bathroom,brush,clean
🧽 sponge|absorbing,cleaning,porous
🧯 fire extinguisher|extinguish,quench
🛒 shopping cart|trolley
🚬 cigarette|smoking
⚰️ coffin|dead,death,vampire
🪦 headstone|cemetery,dead,grave
⚱️ funeral urn|ashes,death
🧿 nazar amulet|bead,blue,charm
🪬 hamsa|Fatima,Mary,Miriam
🗿 moai|face,moyai,statue
🪧 placard|card,demonstration,notice
🪪 identification card|ID,credentials,document`],
    ["Symbols", "❤️", `🏧 ATM sign|automated,bank,cash
🚮 litter in bin sign|litterbin
🚰 potable water|drinking
♿ wheelchair symbol|access,handicap
🚹 men’s room|WC,bathroom,lavatory
🚺 women’s room|WC,bathroom,lavatory
🚻 restroom|WC,bathroom,lavatory
🚼 baby symbol|changing
🚾 water closet|WC,bathroom,lavatory
🛂 passport control
🛃 customs|packing
🛄 baggage claim|arrived,bags,case
🛅 left luggage|baggage,case,locker
⚠️ warning|caution
🚸 children crossing|child,pedestrian,traffic
⛔ no entry|do,fail,forbidden
🚫 prohibited|entry,forbidden,no
🚳 no bicycles|bicycle,bike,forbidden
🚭 no smoking|forbidden,not,prohibited
🚯 no littering|forbidden,litter,not
🚱 non-potable water|dry,non-drinking,non-potable
🚷 no pedestrians|forbidden,not,pedestrian
📵 no mobile phones|cell,forbidden,not
🔞 no one under eighteen|age,forbidden,not
☢️ radioactive|sign
☣️ biohazard|sign
⬆️ up arrow|cardinal,direction,north
↗️ up-right arrow|direction,intercardinal,northeast
➡️ right arrow|cardinal,direction,east
↘️ down-right arrow|direction,down-right,intercardinal
⬇️ down arrow|cardinal,direction,south
↙️ down-left arrow|direction,down-left,intercardinal
⬅️ left arrow|cardinal,direction,west
↖️ up-left arrow|direction,intercardinal,northwest
↕️ up-down arrow|up-down
↔️ left-right arrow|left-right
↩️ right arrow curving left
↪️ left arrow curving right
⤴️ right arrow curving up
⤵️ right arrow curving down
🔃 clockwise vertical arrows|arrow,refresh,reload
🔄 counterclockwise arrows button|again,anticlockwise,arrow
🔙 BACK arrow
🔚 END arrow
🔛 ON! arrow|ON!,mark
🔜 SOON arrow|brb,omw
🔝 TOP arrow|homie,up
🛐 place of worship|pray,religion
⚛️ atom symbol|atheist
🕉️ om|Hindu,religion
✡️ star of David|Jew,Jewish,judaism
☸️ wheel of dharma|Buddhist,religion
☯️ yin yang|difficult,lives,religion
✝️ latin cross|Christian,christ,religion
☦️ orthodox cross|Christian,religion
☪️ star and crescent|Muslim,islam,ramadan
☮️ peace symbol|healing,peaceful
🕎 menorah|candelabrum,candlestick,hanukkah
🔯 dotted six-pointed star|fortune,jewish,judaism
🪯 khanda|Deg,Fateh,Khalsa
♈ Aries|horoscope,ram,zodiac
♉ Taurus|bull,horoscope,ox
♊ Gemini|horoscope,twins,zodiac
♋ Cancer|crab,horoscope,zodiac
♌ Leo|horoscope,lion,zodiac
♍ Virgo|horoscope,zodiac
♎ Libra|balance,horoscope,justice
♏ Scorpio|Scorpius,horoscope,scorpion
♐ Sagittarius|archer,horoscope,zodiac
♑ Capricorn|goat,horoscope,zodiac
♒ Aquarius|bearer,horoscope,water
♓ Pisces|fish,horoscope,zodiac
⛎ Ophiuchus|bearer,serpent,snake
🔀 shuffle tracks button|arrow,crossed
🔁 repeat button|arrow,clockwise
🔂 repeat single button|arrow,clockwise,once
▶️ play button|arrow,right,triangle
⏩ fast-forward button|arrow,double,fast-forward
⏭️ next track button|arrow,scene,triangle
⏯️ play or pause button|arrow,right,triangle
◀️ reverse button|arrow,left,triangle
⏪ fast reverse button|arrow,double,rewind
⏮️ last track button|arrow,previous,scene
🔼 upwards button|arrow,red,up
⏫ fast up button|arrow,double
🔽 downwards button|arrow,down,red
⏬ fast down button|arrow,double
⏸️ pause button|bar,double,vertical
⏹️ stop button|square
⏺️ record button|circle
⏏️ eject button
🎦 cinema|camera,film,movie
🔅 dim button|brightness,low
🔆 bright button|brightness,light
📶 antenna bars|bar,cell,communication
🛜 wireless|broadband,computer,connectivity
📳 vibration mode|cell,communication,mobile
📴 mobile phone off|cell,telephone
♀️ female sign|woman
♂️ male sign|man
⚧️ transgender symbol
✖️ multiply|cancel,multiplication,sign
➕ plus|+
➖ minus|-,heavy,math
➗ divide|division,heavy,math
🟰 heavy equals sign|answer,equal,equality
♾️ infinity|forever,unbounded,universal
‼️ double exclamation mark|!,!!,bangbang
⁉️ exclamation question mark|!,!?,?
❓ red question mark|?,punctuation
❔ white question mark|?,outlined,punctuation
❕ white exclamation mark|!,bang,outlined
❗ red exclamation mark|!,bang,punctuation
〰️ wavy dash|punctuation
💱 currency exchange|bank,money
💲 heavy dollar sign|billion,cash,charge
⚕️ medical symbol|aesculapius,medicine,staff
♻️ recycling symbol|recycle
⚜️ fleur-de-lis|knights
🔱 trident emblem|anchor,poseidon,ship
📛 name badge
🔰 Japanese symbol for beginner|chevron,green,leaf
⭕ hollow red circle|heavy,large,o
✅ check mark button|checked,checkmark,complete
☑️ check box with check|ballot,checked,done
✔️ check mark|checked,checkmark,done
❌ cross mark|cancel,multiplication,multiply
❎ cross mark button|multiplication,multiply,square
➰ curly loop|curl
➿ double curly loop|curl
〽️ part alternation mark
✳️ eight-spoked asterisk|*,eight-spoked
✴️ eight-pointed star|*,eight-pointed
❇️ sparkle|*
©️ copyright|C
®️ registered|R
™️ trade mark|TM,trademark
#️⃣ keycap: #
*️⃣ keycap: *
0️⃣ keycap: 0|zero
1️⃣ keycap: 1|one
2️⃣ keycap: 2|two
3️⃣ keycap: 3|three
4️⃣ keycap: 4|four
5️⃣ keycap: 5|five
6️⃣ keycap: 6|six
7️⃣ keycap: 7|seven
8️⃣ keycap: 8|eight
9️⃣ keycap: 9|nine
🔟 keycap: 10
🔠 input latin uppercase|ABCD,letters
🔡 input latin lowercase|abcd,letters
🔢 input numbers
🔣 input symbols|%,&,♪
🔤 input latin letters|abc,alphabet
🅰️ A button (blood type)
🆎 AB button (blood type)
🅱️ B button (blood type)
🆑 CL button
🆒 COOL button
🆓 FREE button
ℹ️ information|I
🆔 ID button|identity
Ⓜ️ circled M|circle
🆕 NEW button
🆖 NG button
🅾️ O button (blood type)
🆗 OK button|okay
🅿️ P button|parking
🆘 SOS button|help
🆙 UP! button|UP!,mark
🆚 VS button|versus
🈁 Japanese “here” button|katakana
🈂️ Japanese “service charge” button|katakana
🈷️ Japanese “monthly amount” button|ideograph
🈶 Japanese “not free of charge” button|ideograph
🈯 Japanese “reserved” button|ideograph
🉐 Japanese “bargain” button|ideograph
🈹 Japanese “discount” button|ideograph
🈚 Japanese “free of charge” button|ideograph
🈲 Japanese “prohibited” button|ideograph
🉑 Japanese “acceptable” button|ideograph
🈸 Japanese “application” button|ideograph
🈴 Japanese “passing grade” button|ideograph
🈳 Japanese “vacancy” button|ideograph
㊗️ Japanese “congratulations” button|ideograph
㊙️ Japanese “secret” button|ideograph
🈺 Japanese “open for business” button|ideograph
🈵 Japanese “no vacancy” button|ideograph
🔴 red circle|geometric
🟠 orange circle
🟡 yellow circle
🟢 green circle
🔵 blue circle|geometric
🟣 purple circle
🟤 brown circle
⚫ black circle|geometric
⚪ white circle|geometric
🟥 red square|card,penalty
🟧 orange square
🟨 yellow square|card,penalty
🟩 green square
🟦 blue square
🟪 purple square
🟫 brown square
⬛ black large square|geometric
⬜ white large square|geometric
◼️ black medium square|geometric
◻️ white medium square|geometric
◾ black medium-small square|geometric,medium-small
◽ white medium-small square|geometric,medium-small
▪️ black small square|geometric
▫️ white small square|geometric
🔶 large orange diamond|geometric
🔷 large blue diamond|geometric
🔸 small orange diamond|geometric
🔹 small blue diamond|geometric
🔺 red triangle pointed up|geometric
🔻 red triangle pointed down|geometric
💠 diamond with a dot|comic,geometric
🔘 radio button|geometric
🔳 white square button|geometric,outlined
🔲 black square button|geometric`],
    ["Flags", "🏁", `🏁 chequered flag|checkered,finish,flags
🚩 triangular flag|construction,golf,post
🎌 crossed flags|Japanese,celebration,cross
🏴 black flag|waving
🏳️ white flag|waving
🏳️‍🌈 rainbow flag|bisexual,gay,genderqueer
🏳️‍⚧️ transgender flag|blue,light,pink
🏴‍☠️ pirate flag|Jolly,Roger,plunder
🇦🇨 flag: Ascension Island|AC
🇦🇩 flag: Andorra|AD
🇦🇪 flag: United Arab Emirates|AE
🇦🇫 flag: Afghanistan|AF
🇦🇬 flag: Antigua & Barbuda|AG
🇦🇮 flag: Anguilla|AI
🇦🇱 flag: Albania|AL
🇦🇲 flag: Armenia|AM
🇦🇴 flag: Angola|AO
🇦🇶 flag: Antarctica|AQ
🇦🇷 flag: Argentina|AR
🇦🇸 flag: American Samoa|AS
🇦🇹 flag: Austria|AT
🇦🇺 flag: Australia|AU
🇦🇼 flag: Aruba|AW
🇦🇽 flag: Åland Islands|AX
🇦🇿 flag: Azerbaijan|AZ
🇧🇦 flag: Bosnia & Herzegovina|BA
🇧🇧 flag: Barbados|BB
🇧🇩 flag: Bangladesh|BD
🇧🇪 flag: Belgium|BE
🇧🇫 flag: Burkina Faso|BF
🇧🇬 flag: Bulgaria|BG
🇧🇭 flag: Bahrain|BH
🇧🇮 flag: Burundi|BI
🇧🇯 flag: Benin|BJ
🇧🇱 flag: St. Barthélemy|BL
🇧🇲 flag: Bermuda|BM
🇧🇳 flag: Brunei|BN
🇧🇴 flag: Bolivia|BO
🇧🇶 flag: Caribbean Netherlands|BQ
🇧🇷 flag: Brazil|BR
🇧🇸 flag: Bahamas|BS
🇧🇹 flag: Bhutan|BT
🇧🇻 flag: Bouvet Island|BV
🇧🇼 flag: Botswana|BW
🇧🇾 flag: Belarus|BY
🇧🇿 flag: Belize|BZ
🇨🇦 flag: Canada|CA
🇨🇨 flag: Cocos (Keeling) Islands|CC
🇨🇩 flag: Congo - Kinshasa|CD
🇨🇫 flag: Central African Republic|CF
🇨🇬 flag: Congo - Brazzaville|CG
🇨🇭 flag: Switzerland|CH
🇨🇮 flag: Côte d’Ivoire|CI
🇨🇰 flag: Cook Islands|CK
🇨🇱 flag: Chile|CL
🇨🇲 flag: Cameroon|CM
🇨🇳 flag: China|CN
🇨🇴 flag: Colombia|CO
🇨🇵 flag: Clipperton Island|CP
🇨🇷 flag: Costa Rica|CR
🇨🇺 flag: Cuba|CU
🇨🇻 flag: Cape Verde|CV
🇨🇼 flag: Curaçao|CW
🇨🇽 flag: Christmas Island|CX
🇨🇾 flag: Cyprus|CY
🇨🇿 flag: Czechia|CZ
🇩🇪 flag: Germany|DE
🇩🇬 flag: Diego Garcia|DG
🇩🇯 flag: Djibouti|DJ
🇩🇰 flag: Denmark|DK
🇩🇲 flag: Dominica|DM
🇩🇴 flag: Dominican Republic|DO
🇩🇿 flag: Algeria|DZ
🇪🇦 flag: Ceuta & Melilla|EA
🇪🇨 flag: Ecuador|EC
🇪🇪 flag: Estonia|EE
🇪🇬 flag: Egypt|EG
🇪🇭 flag: Western Sahara|EH
🇪🇷 flag: Eritrea|ER
🇪🇸 flag: Spain|ES
🇪🇹 flag: Ethiopia|ET
🇪🇺 flag: European Union|EU
🇫🇮 flag: Finland|FI
🇫🇯 flag: Fiji|FJ
🇫🇰 flag: Falkland Islands|FK
🇫🇲 flag: Micronesia|FM
🇫🇴 flag: Faroe Islands|FO
🇫🇷 flag: France|FR
🇬🇦 flag: Gabon|GA
🇬🇧 flag: United Kingdom|GB
🇬🇩 flag: Grenada|GD
🇬🇪 flag: Georgia|GE
🇬🇫 flag: French Guiana|GF
🇬🇬 flag: Guernsey|GG
🇬🇭 flag: Ghana|GH
🇬🇮 flag: Gibraltar|GI
🇬🇱 flag: Greenland|GL
🇬🇲 flag: Gambia|GM
🇬🇳 flag: Guinea|GN
🇬🇵 flag: Guadeloupe|GP
🇬🇶 flag: Equatorial Guinea|GQ
🇬🇷 flag: Greece|GR
🇬🇸 flag: South Georgia & South Sandwich Islands|GS
🇬🇹 flag: Guatemala|GT
🇬🇺 flag: Guam|GU
🇬🇼 flag: Guinea-Bissau|GW
🇬🇾 flag: Guyana|GY
🇭🇰 flag: Hong Kong SAR China|HK
🇭🇲 flag: Heard Island & McDonald Islands|HM
🇭🇳 flag: Honduras|HN
🇭🇷 flag: Croatia|HR
🇭🇹 flag: Haiti|HT
🇭🇺 flag: Hungary|HU
🇮🇨 flag: Canary Islands|IC
🇮🇩 flag: Indonesia|ID
🇮🇪 flag: Ireland|IE
🇮🇱 flag: Israel|IL
🇮🇲 flag: Isle of Man|IM
🇮🇳 flag: India|IN
🇮🇴 flag: British Indian Ocean Territory|IO
🇮🇶 flag: Iraq|IQ
🇮🇷 flag: Iran|IR
🇮🇸 flag: Iceland|IS
🇮🇹 flag: Italy|IT
🇯🇪 flag: Jersey|JE
🇯🇲 flag: Jamaica|JM
🇯🇴 flag: Jordan|JO
🇯🇵 flag: Japan|JP
🇰🇪 flag: Kenya|KE
🇰🇬 flag: Kyrgyzstan|KG
🇰🇭 flag: Cambodia|KH
🇰🇮 flag: Kiribati|KI
🇰🇲 flag: Comoros|KM
🇰🇳 flag: St. Kitts & Nevis|KN
🇰🇵 flag: North Korea|KP
🇰🇷 flag: South Korea|KR
🇰🇼 flag: Kuwait|KW
🇰🇾 flag: Cayman Islands|KY
🇰🇿 flag: Kazakhstan|KZ
🇱🇦 flag: Laos|LA
🇱🇧 flag: Lebanon|LB
🇱🇨 flag: St. Lucia|LC
🇱🇮 flag: Liechtenstein|LI
🇱🇰 flag: Sri Lanka|LK
🇱🇷 flag: Liberia|LR
🇱🇸 flag: Lesotho|LS
🇱🇹 flag: Lithuania|LT
🇱🇺 flag: Luxembourg|LU
🇱🇻 flag: Latvia|LV
🇱🇾 flag: Libya|LY
🇲🇦 flag: Morocco|MA
🇲🇨 flag: Monaco|MC
🇲🇩 flag: Moldova|MD
🇲🇪 flag: Montenegro|ME
🇲🇫 flag: St. Martin|MF
🇲🇬 flag: Madagascar|MG
🇲🇭 flag: Marshall Islands|MH
🇲🇰 flag: North Macedonia|MK
🇲🇱 flag: Mali|ML
🇲🇲 flag: Myanmar (Burma)|MM
🇲🇳 flag: Mongolia|MN
🇲🇴 flag: Macao SAR China|MO
🇲🇵 flag: Northern Mariana Islands|MP
🇲🇶 flag: Martinique|MQ
🇲🇷 flag: Mauritania|MR
🇲🇸 flag: Montserrat|MS
🇲🇹 flag: Malta|MT
🇲🇺 flag: Mauritius|MU
🇲🇻 flag: Maldives|MV
🇲🇼 flag: Malawi|MW
🇲🇽 flag: Mexico|MX
🇲🇾 flag: Malaysia|MY
🇲🇿 flag: Mozambique|MZ
🇳🇦 flag: Namibia|NA
🇳🇨 flag: New Caledonia|NC
🇳🇪 flag: Niger|NE
🇳🇫 flag: Norfolk Island|NF
🇳🇬 flag: Nigeria|NG
🇳🇮 flag: Nicaragua|NI
🇳🇱 flag: Netherlands|NL
🇳🇴 flag: Norway|NO
🇳🇵 flag: Nepal|NP
🇳🇷 flag: Nauru|NR
🇳🇺 flag: Niue|NU
🇳🇿 flag: New Zealand|NZ
🇴🇲 flag: Oman|OM
🇵🇦 flag: Panama|PA
🇵🇪 flag: Peru|PE
🇵🇫 flag: French Polynesia|PF
🇵🇬 flag: Papua New Guinea|PG
🇵🇭 flag: Philippines|PH
🇵🇰 flag: Pakistan|PK
🇵🇱 flag: Poland|PL
🇵🇲 flag: St. Pierre & Miquelon|PM
🇵🇳 flag: Pitcairn Islands|PN
🇵🇷 flag: Puerto Rico|PR
🇵🇸 flag: Palestinian Territories|PS
🇵🇹 flag: Portugal|PT
🇵🇼 flag: Palau|PW
🇵🇾 flag: Paraguay|PY
🇶🇦 flag: Qatar|QA
🇷🇪 flag: Réunion|RE
🇷🇴 flag: Romania|RO
🇷🇸 flag: Serbia|RS
🇷🇺 flag: Russia|RU
🇷🇼 flag: Rwanda|RW
🇸🇦 flag: Saudi Arabia|SA
🇸🇧 flag: Solomon Islands|SB
🇸🇨 flag: Seychelles|SC
🇸🇩 flag: Sudan|SD
🇸🇪 flag: Sweden|SE
🇸🇬 flag: Singapore|SG
🇸🇭 flag: St. Helena, Ascension & Tristan da Cunha|SH
🇸🇮 flag: Slovenia|SI
🇸🇯 flag: Svalbard & Jan Mayen|SJ
🇸🇰 flag: Slovakia|SK
🇸🇱 flag: Sierra Leone|SL
🇸🇲 flag: San Marino|SM
🇸🇳 flag: Senegal|SN
🇸🇴 flag: Somalia|SO
🇸🇷 flag: Suriname|SR
🇸🇸 flag: South Sudan|SS
🇸🇹 flag: São Tomé & Príncipe|ST
🇸🇻 flag: El Salvador|SV
🇸🇽 flag: Sint Maarten|SX
🇸🇾 flag: Syria|SY
🇸🇿 flag: Eswatini|SZ
🇹🇦 flag: Tristan da Cunha|TA
🇹🇨 flag: Turks & Caicos Islands|TC
🇹🇩 flag: Chad|TD
🇹🇫 flag: French Southern and Antarctic Lands|TF
🇹🇬 flag: Togo|TG
🇹🇭 flag: Thailand|TH
🇹🇯 flag: Tajikistan|TJ
🇹🇰 flag: Tokelau|TK
🇹🇱 flag: Timor-Leste|TL
🇹🇲 flag: Turkmenistan|TM
🇹🇳 flag: Tunisia|TN
🇹🇴 flag: Tonga|TO
🇹🇷 flag: Türkiye|TR
🇹🇹 flag: Trinidad & Tobago|TT
🇹🇻 flag: Tuvalu|TV
🇹🇼 flag: Taiwan|TW
🇹🇿 flag: Tanzania|TZ
🇺🇦 flag: Ukraine|UA
🇺🇬 flag: Uganda|UG
🇺🇲 flag: U.S. Outlying Islands|UM
🇺🇳 flag: United Nations|UN
🇺🇸 flag: United States|US
🇺🇾 flag: Uruguay|UY
🇺🇿 flag: Uzbekistan|UZ
🇻🇦 flag: Vatican City|VA
🇻🇨 flag: St. Vincent & Grenadines|VC
🇻🇪 flag: Venezuela|VE
🇻🇬 flag: British Virgin Islands|VG
🇻🇮 flag: U.S. Virgin Islands|VI
🇻🇳 flag: Vietnam|VN
🇻🇺 flag: Vanuatu|VU
🇼🇫 flag: Wallis & Futuna|WF
🇼🇸 flag: Samoa|WS
🇽🇰 flag: Kosovo|XK
🇾🇪 flag: Yemen|YE
🇾🇹 flag: Mayotte|YT
🇿🇦 flag: South Africa|ZA
🇿🇲 flag: Zambia|ZM
🇿🇼 flag: Zimbabwe|ZW
🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: England|gbeng
🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland|gbsct
🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales|gbwls`],
];

let groupsCache: EmojiGroup[] | null = null;
function getEmojiGroups(): EmojiGroup[] {
    if (groupsCache) return groupsCache;
    const groups: EmojiGroup[] = EMOJI_RAW.map(([name, icon, raw]) => ({
        name,
        icon,
        items: raw.split("\n").map((line) => {
            const [head, tags = ""] = line.split("|");
            const tone = head.startsWith("+");
            const h = tone ? head.slice(1) : head;
            const sp = h.indexOf(" ");
            const label = h.slice(sp + 1);
            return { char: h.slice(0, sp), label, search: `${label} ${tags}`.toLowerCase(), tone };
        }),
    }));
    groups.push({
        name: "Special characters",
        icon: "★",
        items: SPECIAL.map(([char, label]) => ({ char, label, search: label.toLowerCase(), tone: false, wide: char.length > 2 })),
    });
    groupsCache = groups;
    return groups;
}

const TONES = ["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"];
const withTone = (it: EmojiItem, tone: number) =>
    tone > 0 && it.tone ? it.char.replace(/\uFE0F/g, "") + String.fromCodePoint(0x1f3fa + tone) : it.char;
const QUICK = ["😀", "😂", "😍", "👍", "🙏", "🎉", "🔥", "❤️", "✅", "🙌", "😊", "💯"];

const readLS = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};
const writeLS = (key: string, v: string) => {
    try {
        localStorage.setItem(key, v);
    } catch {
        /* private mode etc. */
    }
};

function EmojiPicker({ onPick }: { onPick: (emoji: string) => void }) {
    const groups = useMemo(getEmojiGroups, []);
    const [query, setQuery] = useState("");
    const [tone, setTone] = useState(() => Number(readLS("wa-emoji-tone") ?? 0) || 0);
    const [recent, setRecent] = useState<string[]>(() => {
        try {
            const r = JSON.parse(readLS("wa-emoji-recent") ?? "[]");
            return Array.isArray(r) ? r.filter((x) => typeof x === "string").slice(0, 32) : [];
        } catch {
            return [];
        }
    });
    const [active, setActive] = useState<string>(() => (readLS("wa-emoji-recent") ? "Recent" : groups[0].name));
    const [hover, setHover] = useState("");
    const scroller = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scroller.current?.scrollTo({ top: 0 });
    }, [active, query]);

    const q = query.trim().toLowerCase();
    const results = useMemo(() => {
        if (!q) return null;
        const out: EmojiItem[] = [];
        for (const g of groups) for (const it of g.items) if (it.search.includes(q) && out.length < 240) out.push(it);
        return out;
    }, [q, groups]);

    const pick = (char: string) => {
        onPick(char);
        const next = [char, ...recent.filter((r) => r !== char)].slice(0, 32);
        setRecent(next);
        writeLS("wa-emoji-recent", JSON.stringify(next));
    };

    const chooseTone = (i: number) => {
        setTone(i);
        writeLS("wa-emoji-tone", String(i));
    };

    const current = groups.find((g) => g.name === active);
    const shown: { char: string; label: string; wide?: boolean }[] | null = results
        ? results.map((it) => ({ char: withTone(it, tone), label: it.label, wide: it.wide }))
        : active === "Recent"
            ? (recent.length ? recent : QUICK).map((c) => ({ char: c, label: recent.length ? "Recently used" : "Popular" }))
            : current
                ? current.items.map((it) => ({ char: withTone(it, tone), label: it.label, wide: it.wide }))
                : [];

    return (
        <div className="w-[21rem] max-w-[calc(100vw-3rem)]">
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-slate-400"><Ico d={I.search} /></span>
                <input
                    type="search"
                    autoFocus
                    aria-label="Search emoji"
                    placeholder="Search emoji, e.g. “heart” or “thanks”"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-8 pr-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E]/25 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)]"
                />
            </div>

            {!results && (
                <div role="tablist" aria-label="Emoji categories" className="mt-2 flex items-center gap-0.5 overflow-x-auto border-b border-slate-200 pb-1 dark:border-[var(--color-childbgdark)]">
                    {[{ name: "Recent", icon: "🕘" }, ...groups].map((g) => (
                        <button
                            key={g.name}
                            role="tab"
                            type="button"
                            aria-selected={active === g.name}
                            aria-label={g.name}
                            title={g.name}
                            onClick={() => setActive(g.name)}
                            className={cx(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-[var(--color-childbgdark)]",
                                active === g.name && "bg-[#E7F7EE] ring-1 ring-[#128C7E]/40 dark:bg-[#128C7E]/25"
                            )}
                        >
                            {g.icon}
                        </button>
                    ))}
                </div>
            )}

            <p className="mt-2 px-1 text-xs font-medium text-slate-500 dark:text-[var(--color-txtlight)]/60">
                {results ? `${results.length} result${results.length === 1 ? "" : "s"}` : active === "Recent" && !recent.length ? "Popular" : active}
            </p>

            <div ref={scroller} className="mt-1 h-60 overflow-y-auto pr-0.5">
                {shown.length ? (
                    <div className="grid grid-cols-8 gap-0.5">
                        {shown.map((e, i) => (
                            <button
                                key={`${e.char}-${i}`}
                                type="button"
                                title={e.label}
                                aria-label={e.label}
                                onMouseDown={(ev) => ev.preventDefault()}
                                onMouseEnter={() => setHover(e.label)}
                                onFocus={() => setHover(e.label)}
                                onClick={() => pick(e.char)}
                                className={cx(
                                    "flex h-9 items-center justify-center rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-[var(--color-childbgdark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E]",
                                    e.wide ? "col-span-4 text-xs tracking-tight" : "text-[22px]"
                                )}
                            >
                                {e.char}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="px-2 py-16 text-center text-sm text-slate-500">No emoji found for “{query}”.</p>
                )}
            </div>

            <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-200 pt-2 dark:border-[var(--color-childbgdark)]">
                <p className="min-w-0 flex-1 truncate text-xs capitalize text-slate-500 dark:text-[var(--color-txtlight)]/60">{hover || "Click to insert. The picker stays open."}</p>
                <div role="group" aria-label="Skin tone" className="flex shrink-0 items-center gap-0.5">
                    {TONES.map((t, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={i === 0 ? "Default skin tone" : `Skin tone ${i}`}
                            aria-pressed={tone === i}
                            onMouseDown={(ev) => ev.preventDefault()}
                            onClick={() => chooseTone(i)}
                            className={cx("flex h-6 w-6 items-center justify-center rounded text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-[var(--color-childbgdark)]", tone === i && "bg-[#E7F7EE] ring-1 ring-[#128C7E]/40 dark:bg-[#128C7E]/25")}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════ the editor ═══════════════════════════ */

const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-1 ";

function ToolBtn({ label, onClick, active, children }: { label: string; onClick: () => void; active?: boolean; children: ReactNode }) {
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            aria-pressed={active}
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClick}
            className={cx(
                "flex h-8 min-w-8 items-center justify-center gap-1 rounded-md px-1.5 text-slate-700 cursor-pointer hover:bg-slate-200/70 dark:text-[var(--color-txtlight)] dark:hover:bg-[var(--color-childbgdark)]",
                active && "!bg-[#E7F7EE] !text-[#128C7E] dark:!bg-[#128C7E]/25 dark:!text-[#25D366]",
                ring
            )}
        >
            {children}
        </button>
    );
}

const Sep = () => <span className="mx-1 h-5 w-px bg-slate-200 dark:bg-[var(--color-childbgdark)]" aria-hidden="true" />;

type Pop = null | "emoji" | "vars";

const stripFormatting = (s: string) => {
    let out = s;
    for (let i = 0; i < 3; i++) {
        out = out
            .replace(/```([\s\S]*?)```/g, "$1")
            .replace(/(?<![\p{L}\p{N}])`(?=\S)([^`\n]*?\S)`/gu, "$1")
            .replace(/(?<![\p{L}\p{N}])\*(?=\S)([^\n]*?\S)\*/gu, "$1")
            .replace(/(?<![\p{L}\p{N}])_(?=\S)([^\n]*?\S)_/gu, "$1")
            .replace(/(?<![\p{L}\p{N}])~(?=\S)([^\n]*?\S)~/gu, "$1");
    }
    return out.replace(/^(\s*)(?:>\s?|[-*]\s+|\d+\.\s+)/gm, "$1");
};

export interface WhatsappMessageEditorProps {
    value: string;
    onChange: (text: string) => void;
    variables?: WhatsappVariable[];
    formatVariable?: (key: string) => string;
    /** counter limit (default 4096, WhatsApp's text-message limit) */
    maxLength?: number;
    minRows?: number;
    placeholder?: string;
    invalid?: boolean;
    disabled?: boolean;
    className?: string;
    id?: string;
    "aria-describedby"?: string;
}

export default function WhatsappMessageEditor({
    value,
    onChange,
    variables = DEFAULT_WA_VARIABLES,
    formatVariable = defaultFormatVariable,
    maxLength = WA_TEXT_LIMIT,
    minRows = 8,
    placeholder = "Type your message. Select text and use B / I / S to format it, or pick an emoji 😊",
    invalid = false,
    disabled = false,
    className,
    id,
    "aria-describedby": describedBy,
}: WhatsappMessageEditorProps) {
    const taRef = useRef<HTMLTextAreaElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const [pop, setPop] = useState<Pop>(null);

    /* auto-grow */
    useEffect(() => {
        const ta = taRef.current;
        if (!ta) return;
        ta.style.height = "auto";
        ta.style.height = Math.min(ta.scrollHeight + 2, 560) + "px";
    }, [value]);

    useEffect(() => {
        if (!pop) return;
        const onDown = (e: MouseEvent) => {
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

    /* replace a range, keeping the browser's native undo history when possible */
    const replace = (start: number, end: number, text: string, selStart: number, selEnd: number) => {
        const ta = taRef.current;
        if (!ta || disabled) return;
        ta.focus();
        ta.setSelectionRange(start, end);
        let done = false;
        try {
            done = document.execCommand("insertText", false, text);
        } catch {
            done = false;
        }
        if (!done) {
            ta.setRangeText(text, start, end, "end");
            ta.dispatchEvent(new Event("input", { bubbles: true }));
        }
        ta.setSelectionRange(selStart, selEnd);
    };

    const insert = (text: string) => {
        const ta = taRef.current;
        if (!ta) return;
        const s = ta.selectionStart;
        const e = ta.selectionEnd;
        replace(s, e, text, s + text.length, s + text.length);
    };

    /* *bold* _italic_ ~strike~ `code` ```mono``` — toggles, trims inner spaces (WhatsApp ignores "* text *") */
    const wrap = (m: string, block = false) => {
        const ta = taRef.current;
        if (!ta) return;
        const v = ta.value;
        let s = ta.selectionStart;
        let e = ta.selectionEnd;

        if (s === e) {
            replace(s, e, m + m, s + m.length, s + m.length);
            return;
        }
        if (block) {
            const sel = v.slice(s, e);
            const isWrapped = sel.startsWith(m) && sel.endsWith(m) && sel.length >= m.length * 2;
            const outer = v.slice(s - m.length, s) === m && v.slice(e, e + m.length) === m;
            if (isWrapped) replace(s, e, sel.slice(m.length, -m.length), s, e - m.length * 2);
            else if (outer) replace(s - m.length, e + m.length, sel, s - m.length, e - m.length);
            else replace(s, e, m + sel + m, s + m.length, e + m.length);
            return;
        }
        // one marker pair per non-empty line
        const sel = v.slice(s, e);
        const lines = sel.split("\n");
        const allWrapped = lines.every((l) => !l.trim() || (l.trim().startsWith(m) && l.trim().endsWith(m) && l.trim().length >= 2));
        const out = lines
            .map((l) => {
                if (!l.trim()) return l;
                const lead = l.length - l.trimStart().length;
                const trail = l.length - l.trimEnd().length;
                const core = l.trim();
                const body = allWrapped ? core.slice(m.length, -m.length) : m + core + m;
                return l.slice(0, lead) + body + (trail ? l.slice(l.length - trail) : "");
            })
            .join("\n");
        if (lines.length === 1 && !allWrapped) {
            // marker sitting just outside the selection counts as already applied
            const t = sel.trim();
            const lead = sel.length - sel.trimStart().length;
            s += lead;
            e = s + t.length;
            if (v.slice(s - m.length, s) === m && v.slice(e, e + m.length) === m) {
                replace(s - m.length, e + m.length, t, s - m.length, e - m.length);
                return;
            }
        }
        replace(s, e, out, s, s + out.length);
    };

    const prefixLines = (kind: "quote" | "bullet" | "number") => {
        const ta = taRef.current;
        if (!ta) return;
        const v = ta.value;
        const s = ta.selectionStart;
        const e = ta.selectionEnd;
        const from = v.lastIndexOf("\n", s - 1) + 1;
        const to = (() => {
            const i = v.indexOf("\n", e > s && v[e - 1] === "\n" ? e - 1 : e);
            return i === -1 ? v.length : i;
        })();
        const re = kind === "quote" ? /^>\s?/ : kind === "bullet" ? /^[-*]\s+/ : /^\d+\.\s+/;
        const lines = v.slice(from, to).split("\n");
        const filled = lines.filter((l) => l.trim());
        const all = filled.length > 0 && filled.every((l) => re.test(l));
        let n = 0;
        const out = lines
            .map((l) => {
                if (!l.trim()) return l;
                if (all) return l.replace(re, "");
                const bare = l.replace(/^(?:>\s?|[-*]\s+|\d+\.\s+)/, "");
                n++;
                return (kind === "quote" ? "> " : kind === "bullet" ? "- " : `${n}. `) + bare;
            })
            .join("\n");
        replace(from, to, out, from, from + out.length);
    };

    const clearFormatting = () => {
        const ta = taRef.current;
        if (!ta) return;
        let s = ta.selectionStart;
        let e = ta.selectionEnd;
        if (s === e) {
            s = ta.value.lastIndexOf("\n", s - 1) + 1;
            const i = ta.value.indexOf("\n", e);
            e = i === -1 ? ta.value.length : i;
        }
        const out = stripFormatting(ta.value.slice(s, e));
        replace(s, e, out, s, s + out.length);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (!(e.ctrlKey || e.metaKey)) return;
        const k = e.key.toLowerCase();
        if (k === "b" && !e.shiftKey) { e.preventDefault(); wrap("*"); }
        else if (k === "i" && !e.shiftKey) { e.preventDefault(); wrap("_"); }
        else if (k === "x" && e.shiftKey) { e.preventDefault(); wrap("~"); }
        else if (k === "m" && e.shiftKey) { e.preventDefault(); wrap("```", true); }
    };

    const used = useMemo(() => extractVariables(value), [value]);
    const known = useMemo(() => new Set(variables.map((v) => v.key)), [variables]);
    const count = cpLength(value);
    const over = count > maxLength;
    const near = !over && count > maxLength * 0.9;

    return (
        <div className={cx("rounded-xl border bg-white dark:bg-[var(--color-bgdark)]", invalid || over ? "border-red-400" : "border-slate-300 dark:border-[var(--color-childbgdark)]", className)}>
            <div ref={toolbarRef} className="relative z-20 flex flex-wrap items-center gap-x-0.5 gap-y-1 rounded-t-xl border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]">
                <ToolBtn label="Bold (Ctrl+B)" onClick={() => wrap("*")}><Ico d={I.bold} /></ToolBtn>
                <ToolBtn label="Italic (Ctrl+I)" onClick={() => wrap("_")}><Ico d={I.italic} /></ToolBtn>
                <ToolBtn label="Strikethrough (Ctrl+Shift+X)" onClick={() => wrap("~")}><Ico d={I.strike} /></ToolBtn>
                <ToolBtn label="Monospace block (Ctrl+Shift+M)" onClick={() => wrap("```", true)}><Ico d={I.mono} /></ToolBtn>
                <ToolBtn label="Inline code" onClick={() => wrap("`")}><Ico d={I.code} /></ToolBtn>
                <Sep />
                <ToolBtn label="Quote" onClick={() => prefixLines("quote")}><Ico d={I.quote} /></ToolBtn>
                <ToolBtn label="Bulleted list" onClick={() => prefixLines("bullet")}><Ico d={I.ul} /></ToolBtn>
                <ToolBtn label="Numbered list" onClick={() => prefixLines("number")}><Ico d={I.ol} /></ToolBtn>
                <Sep />

                <div className="relative">
                    <ToolBtn label="Emoji and special characters" active={pop === "emoji"} onClick={() => setPop((p) => (p === "emoji" ? null : "emoji"))}>
                        <Ico d={I.smile} />
                        <span className="px-0.5 text-sm">Emoji</span>
                        <Ico d={I.chevron} className="h-3 w-3" />
                    </ToolBtn>
                    {pop === "emoji" && (
                        <div className="absolute left-0 top-full z-30 mt-1.5 rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]">
                            <EmojiPicker onPick={insert} />
                        </div>
                    )}
                </div>

                <div className="relative">
                    <ToolBtn label="Insert variable" active={pop === "vars"} onClick={() => setPop((p) => (p === "vars" ? null : "vars"))}>
                        <Ico d={I.braces} />
                        <span className="px-0.5 text-sm">Variable</span>
                        <Ico d={I.chevron} className="h-3 w-3" />
                    </ToolBtn>
                    {pop === "vars" && (
                        <div className="absolute left-0 top-full z-30 mt-1.5 max-h-72 w-64 space-y-0.5 overflow-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]">
                            <p className="px-2.5 pb-1 text-xs text-slate-500">Replaced with each customer’s details when the message is sent.</p>
                            {variables.map((v) => (
                                <button
                                    key={v.key}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => { insert(formatVariable(v.key)); setPop(null); }}
                                    className={cx("flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left cursor-pointer hover:bg-slate-100 dark:hover:bg-[var(--color-childbgdark)]", ring)}
                                >
                                    <span className="text-sm font-medium text-slate-900 dark:text-[var(--color-txtlight)]">{v.label}</span>
                                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600 dark:bg-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)]/70">{formatVariable(v.key)}</code>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <Sep />
                <ToolBtn label="Clear formatting (selection or current line)" onClick={clearFormatting}><Ico d={I.eraser} /></ToolBtn>
            </div>

            <textarea
                id={id}
                ref={taRef}
                value={value}
                disabled={disabled}
                rows={minRows}
                placeholder={placeholder}
                spellCheck
                aria-invalid={invalid || over}
                aria-describedby={describedBy}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={onKeyDown}
                className="block w-full resize-y bg-white px-4 py-3 text-[15px] leading-6 text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:bg-slate-50 dark:bg-[var(--color-bgdark)] dark:text-[var(--color-txtlight)]"
                style={{ minHeight: minRows * 24 + 24, maxHeight: 560 }}
            />

            <div className="flex flex-wrap items-center justify-between gap-2 rounded-b-xl border-t border-slate-200 bg-slate-50 px-3 py-2 text-xs dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)]">
                <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                    {used.length ? (
                        <>
                            <span className="text-slate-500">Variables:</span>
                            {used.map((k) => (
                                <span
                                    key={k}
                                    title={known.has(k) ? undefined : "Not in the variable list. Check the spelling."}
                                    className={cx("inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium", known.has(k) ? "bg-[#E7F7EE] text-[#075E54] dark:bg-[#128C7E]/25 dark:text-[#25D366]" : "bg-amber-100 text-amber-800")}
                                >
                                    {!known.has(k) && <Ico d={I.warn} className="h-3 w-3" />}
                                    {k}
                                </span>
                            ))}
                        </>
                    ) : (
                        <span className="text-slate-500">Tip: select text, then use B / I / S. Variables like <code className="rounded bg-white px-1 py-0.5 ring-1 ring-slate-200 dark:bg-transparent dark:ring-[var(--color-childbgdark)]">{formatVariable(variables[0]?.key ?? "name")}</code> personalise each message.</span>
                    )}
                </div>
                <span aria-live="polite" className={cx("tabular-nums", over ? "font-semibold text-red-600" : near ? "font-medium text-amber-600" : "text-slate-500")}>
                    {count.toLocaleString()} / {maxLength.toLocaleString()}
                </span>
            </div>
        </div>
    );
}