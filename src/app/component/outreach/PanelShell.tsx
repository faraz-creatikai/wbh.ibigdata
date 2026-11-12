"use client";

/**
 * PanelShell — right-hand slide-over used by the Schedules and Run history panels.
 * Esc closes it (unless `locked`, e.g. while a ConfirmModal is open on top of it).
 */
import { useEffect, type ReactNode } from "react";
import { ICONS, Icon, cx, focusRing } from "./CampaignUi";

interface Props {
  title: string;
  subtitle?: string;
  onClose: () => void;
  locked?: boolean;
  children: ReactNode;
}

export default function PanelShell({ title, subtitle, onClose, locked, children }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !locked) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [locked, onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/50" onClick={() => !locked && onClose()} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label={title} className="relative flex h-full w-full max-w-4xl flex-col bg-white shadow-xl">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-0.5 truncate text-sm text-slate-500">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={cx("flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100", focusRing)}
          >
            <Icon d={ICONS.close} className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">{children}</div>
      </div>
    </div>
  );
}