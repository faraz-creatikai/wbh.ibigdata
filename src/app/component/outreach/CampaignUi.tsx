"use client";

/**
 * Small shared pieces for the campaign dialog, customer picker and template picker.
 * Styling matches your email channel page (slate neutrals + your --color-primary variables).
 */
import { useEffect, useState, type ReactNode } from "react";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export function useDebounce<T>(value: T, ms = 400): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return v;
}

/* ───────────── classes ───────────── */

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ";
export const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 " +
  "focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 disabled:bg-slate-50 disabled:text-slate-500";
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ";
export const btnPrimary = btnBase + "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] " + focusRing;
export const btnSecondary = btnBase + "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 " + focusRing;
export const btnOutline =
  btnBase + "border border-[var(--color-primary)] bg-white text-[var(--color-primary-darker)] hover:bg-[var(--color-primary-lighter)] " + focusRing;
export const checkboxCls = "h-4 w-4 cursor-pointer rounded border-slate-300 accent-[var(--color-primary)]";

/* ───────────── icons ───────────── */

export const ICONS = {
  search: "M21 21l-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
  close: "M18 6 6 18M6 6l12 12",
  check: "M20 6 9 17l-5-5",
  chevL: "m15 18-6-6 6-6",
  chevR: "m9 18 6-6-6-6",
  filter: "M3 5h18l-7 8v6l-4 2v-8L3 5Z",
  trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
  mail: "M4 5h16v14H4zM4 7l8 6 8-6",
  chat: "M21 12a8 8 0 0 1-11.7 7L3 21l2-6.1A8 8 0 1 1 21 12Z",
  call: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
} as const;

export const Icon = ({ d, className = "h-4 w-4" }: { d: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export const Spinner = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={cx(className, "animate-spin motion-reduce:animate-none")} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ───────────── banner ───────────── */

export const Banner = ({
  tone,
  title,
  children,
}: {
  tone: "success" | "error" | "warn" | "info";
  title?: string;
  children?: ReactNode;
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

export const Field = ({ id, label, hint, children }: { id: string; label: string; hint?: string; children: ReactNode }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800">
      {label}
    </label>
    {children}
    {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
  </div>
);

/* ───────────── pagination ───────────── */

const pageWindow = (page: number, total: number): (number | "gap")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const keep = [...new Set([1, total, page - 1, page, page + 1])].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  keep.forEach((n, i) => {
    if (i > 0 && n - keep[i - 1] > 1) out.push("gap");
    out.push(n);
  });
  return out;
};

/**
 * `total` may be null (unknown) — then only previous/next are shown and `hasMore` decides if next is enabled.
 */
export const Pagination = ({
  page,
  limit,
  total,
  hasMore,
  itemCount,
  onPage,
  onLimit,
  limits = [10, 25, 50],
  disabled,
}: {
  page: number;
  limit: number;
  total: number | null;
  hasMore?: boolean;
  itemCount: number;
  onPage: (p: number) => void;
  onLimit?: (l: number) => void;
  limits?: number[];
  disabled?: boolean;
}) => {
  const totalPages = total !== null ? Math.max(1, Math.ceil(total / limit)) : null;
  const canNext = totalPages !== null ? page < totalPages : !!hasMore;
  const from = itemCount === 0 ? 0 : (page - 1) * limit + 1;
  const to = (page - 1) * limit + itemCount;
  const navBtn =
    "flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 " + focusRing;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
      <div className="flex items-center gap-3">
        <span>{total !== null ? `${from}–${to} of ${total}` : itemCount ? `Showing ${from}–${to}` : "No results"}</span>
        {onLimit && (
          <label className="flex items-center gap-1.5 text-xs">
            Per page
            <select
              value={limit}
              onChange={(e) => onLimit(Number(e.target.value))}
              disabled={disabled}
              className="rounded-md border border-slate-300 bg-white px-1.5 py-1 text-xs text-slate-800"
            >
              {limits.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <nav className="flex items-center gap-1" aria-label="Pagination">
        <button type="button" className={cx(navBtn, "text-slate-700 hover:bg-slate-100")} onClick={() => onPage(page - 1)} disabled={disabled || page <= 1} aria-label="Previous page">
          <Icon d={ICONS.chevL} />
        </button>
        {totalPages !== null ? (
          pageWindow(page, totalPages).map((p, i) =>
            p === "gap" ? (
              <span key={`gap-${i}`} className="px-1 text-slate-400">
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => onPage(p)}
                disabled={disabled}
                aria-current={p === page ? "page" : undefined}
                className={cx(navBtn, p === page ? "bg-[var(--color-primary)] font-medium text-white" : "text-slate-700 hover:bg-slate-100")}
              >
                {p}
              </button>
            )
          )
        ) : (
          <span className="px-2 text-slate-700">Page {page}</span>
        )}
        <button type="button" className={cx(navBtn, "text-slate-700 hover:bg-slate-100")} onClick={() => onPage(page + 1)} disabled={disabled || !canNext} aria-label="Next page">
          <Icon d={ICONS.chevR} />
        </button>
      </nav>
    </div>
  );
};