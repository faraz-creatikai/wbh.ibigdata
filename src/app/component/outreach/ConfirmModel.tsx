"use client";

/**
 * ConfirmModal — small confirmation dialog used for "Run now" and "Delete campaign".
 * Same behaviour as the ConfirmDialog on your email page (focus starts on Cancel, Esc closes, Tab stays inside).
 */
import { useEffect, useRef, type ReactNode } from "react";
import { Banner, Icon, Spinner, btnSecondary, cx, focusRing } from "./CampaignUi";

const WARN = "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z";
const PLAY = "M6 4l14 8-14 8V4Z";

interface Props {
  title: string;
  children: ReactNode;
  confirmLabel: string;
  busyLabel: string;
  cancelLabel?: string;
  tone?: "primary" | "danger";
  busy: boolean;
  error?: string | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  title,
  children,
  confirmLabel,
  busyLabel,
  cancelLabel = "Cancel",
  tone = "primary",
  busy,
  error,
  onConfirm,
  onCancel,
}: Props) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    cancelRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      trigger?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !busy) onCancel();
      if (e.key === "Tab") {
        const els = panelRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])");
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
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [busy, onCancel]);

  const danger = tone === "danger";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50" onClick={() => !busy && onCancel()} aria-hidden="true" />
      <div
        ref={panelRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-desc"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="flex gap-4">
          <span
            className={cx(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              danger ? "bg-red-50 text-[var(--color-destructive)]" : "bg-[var(--color-primary-lighter)] text-[var(--color-primary)]"
            )}
          >
            <Icon d={danger ? WARN : PLAY} className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 id="confirm-modal-title" className="text-lg font-semibold text-slate-900">
              {title}
            </h2>
            <div id="confirm-modal-desc" className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
              {children}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4">
            <Banner tone="error">{error}</Banner>
          </div>
        )}

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button ref={cancelRef} type="button" className={btnSecondary} onClick={onCancel} disabled={busy}>
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className={cx(
              "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50",
              focusRing,
              danger ? "bg-[var(--color-destructive)] hover:opacity-90" : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]"
            )}
          >
            {busy && <Spinner />}
            {busy ? busyLabel : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}