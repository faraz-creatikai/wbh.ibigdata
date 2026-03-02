"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi2";
import { TbArrowRight } from "react-icons/tb";

export interface LabelConfig {
  key: string;
  label: string;
}

interface LeadsSectionProps<T extends Record<string, any>> {
  leads: T[];
  labelLeads: LabelConfig[];
  onFollowup?: (lead: T) => void;
  onAdd?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (lead: T) => void;
}

export default function FollowupTable<T extends Record<string, any>>({
  leads,
  labelLeads,
  onFollowup,
  onAdd,
  onEdit,
  onDelete,
}: LeadsSectionProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(leads.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const uniqueLeads = leads
    .filter(
      (item, index, arr) =>
        arr.findIndex((row) => row.customerid === item.customerid) === index
    )
    .slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const getPages = (): number[] => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className="w-full space-y-2.5 pb-6">

      {/* ── Empty State ── */}
      {uniqueLeads.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] py-16">
          <div className="size-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
            <MdAdd size={22} className="text-gray-400 dark:text-white/25" />
          </div>
          <p className="text-sm text-gray-400 dark:text-white/30 tracking-wide">
            No follow-ups available
          </p>
        </div>
      )}

      {/* ── Cards ── */}
      <AnimatePresence mode="popLayout">
        {uniqueLeads.map((lead, index) => (
          <motion.div
            key={lead.customerid ?? index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, delay: index * 0.04, ease: "easeOut" }}
            className={[
              "group relative rounded-2xl overflow-hidden",
              "border border-gray-100 dark:border-white/[0.07]",
              "bg-white dark:bg-white/[0.04]",
              "hover:border-[var(--color-primary)]/50 dark:hover:border-[var(--color-primary)]/40",
              "shadow-sm hover:shadow-[0_4px_20px_0_var(--color-primary,#6366f1)1a]",
              "dark:shadow-none",
              "transition-all duration-200",
            ].join(" ")}
          >
            {/* Animated left accent bar */}
            <div
              className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl bg-[var(--color-primary)] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300"
            />

            {/* ── Main content row ── */}
            <div className="flex items-stretch">

              {/* Fields grid */}
              <div className="flex-1 px-5 py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3.5">
                {labelLeads.map((item, j) => (
                  <div key={j} className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.12em] truncate"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white/75 truncate">
                      {String(lead[item.key] ?? "—")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action column */}
              <div
                className={[
                  "flex flex-col items-center justify-center gap-1.5 px-3 py-3",
                  "border-l border-gray-100 dark:border-white/[0.06]",
                  "bg-gray-50/70 dark:bg-white/[0.02]",
                ].join(" ")}
              >
                <ActionBtn
                  title="Add"
                  hoverColor="var(--color-primary)"
                  onClick={() => onAdd?.(lead.customerid)}
                >
                  <MdAdd size={17} />
                </ActionBtn>

                <ActionBtn
                  title="Edit"
                  hoverColor="var(--color-secondary)"
                  onClick={() => onEdit?.(lead.customerid)}
                >
                  <MdEdit size={15} />
                </ActionBtn>

                <ActionBtn
                  title="Delete"
                  hoverColor="#ef4444"
                  onClick={() => onDelete?.(lead)}
                >
                  <MdDelete size={15} />
                </ActionBtn>
              </div>
            </div>

            {/* ── Footer ── */}
            <div
              className={[
                "flex items-center justify-between",
                "px-5 py-2.5",
                "border-t border-gray-100 dark:border-white/[0.05]",
                "bg-gray-50/50 dark:bg-white/[0.015]",
              ].join(" ")}
            >
              <span className="text-[11px] text-gray-400 dark:text-white/25 tracking-wide">
                ID ·{" "}
                <span className="text-gray-500 dark:text-white/35">
                  {lead.customerid ?? "—"}
                </span>
              </span>

              <button
                onClick={() => onFollowup?.(lead)}
                className={[
                  "group/fu flex items-center gap-1.5",
                  "text-xs font-semibold tracking-wide",
                  "text-[var(--color-primary)]",
                  "bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]",
                  "hover:text-white",
                  "px-3 py-1.5 rounded-lg",
                  "transition-all duration-200",
                ].join(" ")}
              >
                Follow Up
                <TbArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover/fu:translate-x-0.5"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── Pagination ── */}
      {uniqueLeads.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-3">
          <PageBtn
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            title="First"
          >
            <HiChevronDoubleLeft size={13} />
          </PageBtn>

          <PageBtn onClick={prevPage} disabled={currentPage === 1} title="Prev">
            <HiChevronLeft size={13} />
          </PageBtn>

          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-0.5" />

          <AnimatePresence mode="popLayout">
            {getPages().map((num) => (
              <motion.button
                key={num}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                onClick={() => setCurrentPage(num)}
                style={
                  num === currentPage
                    ? {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                        boxShadow: "0 2px 10px 0 color-mix(in srgb, var(--color-primary) 40%, transparent)",
                      }
                    : {}
                }
                className={[
                  "size-8 rounded-xl text-xs font-semibold transition-all duration-150",
                  num === currentPage
                    ? "scale-105"
                    : "text-gray-500 dark:text-white/40 hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-gray-800 dark:hover:text-white/70",
                ].join(" ")}
              >
                {num}
              </motion.button>
            ))}
          </AnimatePresence>

          <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-0.5" />

          <PageBtn
            onClick={nextPage}
            disabled={currentPage === totalPages}
            title="Next"
          >
            <HiChevronRight size={13} />
          </PageBtn>

          <PageBtn
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            title="Last"
          >
            <HiChevronDoubleRight size={13} />
          </PageBtn>
        </div>
      )}
    </div>
  );
}

/* ── Helper: icon action button ── */
function ActionBtn({
  children,
  onClick,
  title,
  hoverColor,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  hoverColor?: string;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.backgroundColor = hoverColor ?? "#6366f1";
        el.style.color = "white";
        el.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.backgroundColor = "";
        el.style.color = "";
        el.style.transform = "";
      }}
      className="size-8 rounded-xl flex items-center justify-center text-gray-400 dark:text-white/35 transition-all duration-150"
    >
      {children}
    </button>
  );
}

/* ── Helper: pagination button ── */
function PageBtn({
  children,
  onClick,
  disabled,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className="size-8 rounded-xl flex items-center justify-center text-gray-500 dark:text-white/40 hover:bg-gray-100 dark:hover:bg-white/[0.06] hover:text-gray-800 dark:hover:text-white/70 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150"
    >
      {children}
    </button>
  );
}