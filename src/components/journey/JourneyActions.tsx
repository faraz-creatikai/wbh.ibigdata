"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Copy,
  MoreHorizontal,
  Pencil,
  Play,
  Pause,
  Trash2,
  Loader2,
} from "lucide-react";
import type { Journey } from "@/types/journey";
import { API_ROUTES } from "@/constants/ApiRoute";
import { apiRequest } from "@/lib/journeyApi";

interface JourneyActionsProps {
  journey: Journey;
  onDuplicate: (journey: Journey) => void;
  onToggleStatus: (journey: Journey) => void;
  onDelete: (journey: Journey) => void;
}

const MENU_WIDTH = 176; // w-44
const MENU_HEIGHT = 210; // approximate, used to decide whether to open upwards

const itemClass =
  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[12px] font-medium text-crm-text hover:bg-crm-primary-light hover:text-crm-primary-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-crm-text";

export default function JourneyActions({
  journey,
  onDuplicate,
  onToggleStatus,
  onDelete,
}: JourneyActionsProps) {
  const isDraft = journey.status === "draft";
  const isActive = journey.status === "active";

  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [pos, setPos] = useState<{
    top?: number;
    bottom?: number;
    left: number;
  }>({ left: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const toggle = () => {
    if (open) return close();

    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const left = Math.max(8, rect.right - MENU_WIDTH);
    const openUp = rect.bottom + MENU_HEIGHT > window.innerHeight;

    setPos(
      openUp
        ? { bottom: window.innerHeight - rect.top + 6, left }
        : { top: rect.bottom + 6, left }
    );
    setOpen(true);
  };

  // Close on outside click, Escape, scroll and resize
  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [open, close]);


  return (
    <>
    

      {/* THREE DOTS MENU */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={`Actions for ${journey.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-crm-muted transition hover:bg-crm-primary-light hover:text-crm-primary-dark"
      >
        <MoreHorizontal size={19} />
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{
              position: "fixed",
              top: pos.top,
              bottom: pos.bottom,
              left: pos.left,
              width: MENU_WIDTH,
            }}
            className="z-[1000] rounded-xl border border-crm-border bg-white p-1.5 shadow-xl"
          >
            <Link
              href={`/journey/builder/${journey.id}`}
              onClick={close}
              className={itemClass}
            >
              <Pencil size={14} /> Edit journey
            </Link>

            <button
              type="button"
              onClick={() => {
                close();
                onDuplicate(journey);
              }}
              className={itemClass}
            >
              <Copy size={14} /> Duplicate
            </button>

            {!isDraft && (
              <button
                type="button"
                onClick={() => {
                  close();
                  onToggleStatus(journey);
                }}
                className={itemClass}
              >
                {isActive ? <Pause size={14} /> : <Play size={14} />}
                {isActive ? "Pause journey" : "Resume journey"}
              </button>
            )}

            <div className="my-1 border-t border-crm-border" />

            <button
              type="button"
              onClick={() => {
                close();
                onDelete(journey);
              }}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[12px] font-medium text-red-600 hover:bg-red-50"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>,
          document.body
        )}
    </>
  );
}