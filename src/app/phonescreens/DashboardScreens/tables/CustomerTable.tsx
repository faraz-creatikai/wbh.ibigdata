"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaEye, FaWhatsapp } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import { AiOutlineBackward, AiOutlineForward } from "react-icons/ai";
import { IoIosHeart, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PopupMenu from "@/app/component/popups/PopupMenu";
import { GoArrowLeft } from "react-icons/go";
import CustomerImageSlider from "@/app/component/slides/CustomerImageSlider";
import { UserPlus, MapPin, Phone } from "lucide-react";

export interface LabelConfig {
    key: string;
    label: string;
}

interface LeadsSectionProps<T extends Record<string, any>> {
    leads: T[];
    labelLeads: LabelConfig[];
    allLabelLeads?: LabelConfig[];
    isCustomerPage?: boolean;
    onAdd?: (id: string) => void;
    onEdit?: (id: string) => void;
    onWhatsappClick?: (lead: T) => void;
    onMailClick?: (lead: T) => void;
    onFavourite?: (lead: T) => void;
    onViewFollowup?: (id: string, Name: string) => void;
    onGoogleMapViewAddress?: (Address: string) => void;
    loader?: boolean;
    hasMoreCustomers?: boolean;
    fetchMore?: () => Promise<void>;
    duplicateContacts?: Record<string, boolean>;
    onViewDuplicate?: (contactNumber: string) => void;
}

export default function CustomerTable<T extends Record<string, any>>({
    leads,
    labelLeads,
    allLabelLeads,
    onAdd,
    onEdit,
    onWhatsappClick,
    onMailClick,
    onFavourite,
    onViewFollowup,
    loader,
    hasMoreCustomers,
    fetchMore,
    duplicateContacts,
    onViewDuplicate,
    onGoogleMapViewAddress,
}: LeadsSectionProps<T>) {
    const [toggleSearchDropdown, setToggleSearchDropdown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsperpage = 10;
    const [viewAll, setViewAll] = useState(false);
    const [viewLeadData, setViewLeadData] = useState<T | null>(null);

    const totalPages = Math.ceil(leads.length / itemsperpage);
    const startIndex = (currentPage - 1) * itemsperpage;
    const paginatedLeads = leads.slice(startIndex, startIndex + itemsperpage);
    const router = useRouter();

    const nextPage = async () => {
        if (currentPage < totalPages) { setCurrentPage(prev => prev + 1); return; }
        if (hasMoreCustomers && fetchMore) {
            await fetchMore();
            const newTotalPages = Math.ceil((leads.length + itemsperpage) / itemsperpage);
            if (currentPage < newTotalPages) setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

    const getDisplayedPages = () => {
        if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (currentPage === 1) return [1, 2, 3];
        if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
        return [currentPage - 1, currentPage, currentPage + 1];
    };
    const pages = getDisplayedPages();

    const followupRedirect = () => { router.push('/followups/customer'); };

    // ── Loader ──────────────────────────────────────────────────────────────────
    if (loader) {
        return (
            <div className="px-3 pb-6 space-y-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden bg-white dark:bg-[var(--color-childbgdark)] border border-gray-100 dark:border-white/[0.06] animate-pulse">
                        <div className="h-1 w-full" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 30%, transparent)" }} />
                        <div className="p-4 flex gap-3">
                            <div className="flex-1 space-y-3">
                                <div className="h-2.5 bg-gray-100 dark:bg-white/10 rounded-full w-3/4" />
                                <div className="h-2.5 bg-gray-100 dark:bg-white/10 rounded-full w-1/2" />
                                <div className="h-2.5 bg-gray-100 dark:bg-white/10 rounded-full w-2/3" />
                            </div>
                            <div className="w-[88px] h-[66px] rounded-xl bg-gray-100 dark:bg-white/10" />
                        </div>
                        <div className="h-11 mx-3 mb-3 rounded-xl bg-gray-50 dark:bg-white/[0.04]" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            {/* ── Detail popup ──────────────────────────────────────────────────────── */}
            {viewAll && (
                <PopupMenu onClose={() => { setViewAll(false); }}>
                    <div className="bg-white dark:bg-[var(--color-childbgdark)] relative w-full h-full flex flex-col">
                        {/* Back button */}
                        <button
                            className="absolute top-4 left-4 z-[2000] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md border border-gray-100 dark:border-white/10 shadow-sm"
                            onClick={() => { setViewAll(false); setViewLeadData(null); }}
                        >
                            <GoArrowLeft size={16} className="text-gray-700 dark:text-white" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-white">Back</span>
                        </button>

                        <CustomerImageSlider
                            images={viewLeadData?.CustomerImage?.length ? viewLeadData.CustomerImage : ["/siteplan2.png"]}
                        />

                        <div className="max-h-[calc(80vh-240px)] absolute top-[380px] w-full bg-white dark:bg-[var(--color-childbgdark)] overflow-y-auto px-4 py-5 rounded-t-3xl">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.06]" />
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
                                    <span className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: "var(--color-primary)" }}>
                                        Customer Info
                                    </span>
                                </div>
                                <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.06]" />
                            </div>

                            <div className="space-y-2">
                                {allLabelLeads?.map((item, j) => (
                                    <div
                                        key={j}
                                        className={`relative flex ${viewLeadData?.[item.key]?.length > 30 ? "flex-col gap-1.5" : "items-center justify-between"} p-3 rounded-xl bg-gray-50 dark:bg-[var(--color-secondary-darker)] overflow-hidden`}
                                    >
                                        {/* Left accent */}
                                        <span className="absolute left-0 top-2 bottom-2 w-[2.5px] rounded-r-full" style={{ backgroundColor: "var(--color-primary)", opacity: 0.4 }} />

                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-[var(--color-txtlight)] pl-1">
                                            {item.label}
                                        </span>

                                        {item.label === "Contact No" ? (
                                            <a href={`tel:+91${viewLeadData?.[item.key] ?? ""}`} className="text-sm font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>
                                                {viewLeadData?.[item.key] ?? ""}
                                            </a>
                                        ) : item.label === "Address" ? (
                                            <span className="text-sm font-medium underline cursor-pointer text-right" style={{ color: "var(--color-primary)" }} onClick={() => onGoogleMapViewAddress?.(viewLeadData?.[item.key])}>
                                                {viewLeadData?.[item.key] ?? ""}
                                            </span>
                                        ) : (
                                            <span className={`text-sm font-medium text-gray-800 dark:text-[var(--color-txtlight)] ${viewLeadData?.[item.key]?.length > 30 ? "w-full" : "text-right max-w-[60%]"}`}>
                                                {viewLeadData?.[item.key] ?? ""}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </PopupMenu>
            )}

            {/* ── Lead cards ────────────────────────────────────────────────────────── */}
            <div className="px-3 pb-4 space-y-3">

                {/* Empty state */}
                {paginatedLeads.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
                        >
                            <UserPlus size={22} style={{ color: "var(--color-primary)" }} />
                        </div>
                        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500">No customers available</p>
                    </div>
                )}

                {paginatedLeads.map((lead, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.045, duration: 0.22 }}
                        className="relative w-full bg-white dark:bg-[var(--color-childbgdark)] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.06] shadow-sm"
                    >
                        {/* Noise texture overlay */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03] rounded-2xl"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                            }}
                        />

                        {/* Top brand stripe with ghost index */}
                        <div
                            className="relative h-8 flex items-center justify-between px-4 overflow-hidden"
                            style={{ backgroundColor: "var(--color-primary)" }}
                        >
                            {/* Ghost number watermark */}
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[28px] font-black tabular-nums text-white/10 leading-none select-none pointer-events-none">
                                {String(startIndex + index + 1).padStart(2, "0")}
                            </span>
                            {/* Left dot + label */}
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                                <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/60">Customer</span>
                            </div>
                            <span className="text-[9px] font-black tabular-nums text-white/40">#{startIndex + index + 1}</span>
                        </div>

                        {/* ── Card body ─────────────────────────────────────────────── */}
                        <div className="flex gap-3 p-3.5">

                            {/* Left: lead info */}
                            <div className="flex-1 min-w-0 space-y-2">
                                {labelLeads.map((item, j) => (
                                    <div key={j} className="flex items-baseline gap-2">
                                        <span
                                            className="text-[9px] font-black uppercase tracking-wider shrink-0 w-[68px]"
                                            style={{ color: "var(--color-primary)", opacity: 0.7 }}
                                        >
                                            {item.label}
                                        </span>
                                        <span className="text-[10px] text-gray-300 dark:text-white/20 shrink-0">·</span>
                                        <span className="text-xs font-semibold text-gray-800 dark:text-[var(--color-primary-lighter)] truncate">
                                            {String(lead[item.key])}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Right: image + actions */}
                            <div className="flex flex-col items-end gap-2 shrink-0">
                                {/* Thumbnail */}
                                <div
                                    className="w-[80px] h-[60px] rounded-xl overflow-hidden border border-gray-100 dark:border-white/[0.06] cursor-pointer active:scale-95 transition-transform"
                                    style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 6%, #f3f4f6)" }}
                                    onClick={() => { setViewAll(true); setViewLeadData(lead); }}
                                >
                                    <img
                                        width={80}
                                        className={`w-full h-full ${lead.SitePlan?.length > 0 ? "object-cover" : "object-contain p-2 opacity-40"}`}
                                        src={lead.SitePlan?.length > 0 ? lead.SitePlan : "/siteplan2.png"}
                                    />
                                </div>

                                {/* Action icon row 1 */}
                                <div className="flex items-center gap-1.5">
                                    <button
                                        className="w-7 h-7 rounded-lg flex items-center justify-center active:scale-90 transition-transform"
                                        style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)" }}
                                        onClick={() => onViewFollowup?.(lead._id, lead.Name)}
                                    >
                                        <UserPlus size={13} style={{ color: "var(--color-primary)" }} />
                                    </button>
                                    <button
                                        className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/[0.05] flex items-center justify-center active:scale-90 transition-transform"
                                        onClick={() => onFavourite?.(lead)}
                                    >
                                        {lead.isFavourite
                                            ? <IoIosHeart size={14} style={{ color: "var(--color-primary)" }} />
                                            : <AiOutlineHeart size={14} className="text-gray-400" />}
                                    </button>
                                </div>

                                {/* Action icon row 2 */}
                                <div className="flex items-center gap-1.5">
                                    {duplicateContacts?.[String(lead.ContactNumber)] ? (
                                        <button
                                            className="w-7 h-7 rounded-lg flex items-center justify-center active:scale-90 transition-transform"
                                            style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)" }}
                                            onClick={() => onViewDuplicate?.(String(lead.ContactNumber))}
                                        >
                                            <FaEye size={12} style={{ color: "var(--color-primary)" }} />
                                        </button>
                                    ) : <div className="w-7" />}
                                    <button
                                        className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/[0.05] flex items-center justify-center active:scale-90 transition-transform"
                                        onClick={() => onEdit?.(lead._id)}
                                    >
                                        <MdEdit size={14} style={{ color: "var(--color-primary)" }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ── Action footer ──────────────────────────────────────────── */}
                        <div className="mx-3 mb-3 rounded-xl overflow-hidden" style={{ backgroundColor: "var(--color-primary)" }}>
                            {/* Noise on footer too */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                                }}
                            />
                            <div className="relative flex items-center justify-between px-3 py-2.5">
                                {/* Follow up button */}
                                <button
                                    onClick={() => onAdd?.(lead._id)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 border border-white/20 active:bg-white/25 transition-colors"
                                >
                                    <UserPlus size={12} className="text-white" />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-white">Follow Up</span>
                                </button>

                                {/* Contact icons */}
                                <div className="flex items-center gap-2">
                                    <a
                                        href={`tel:+91${String(lead["ContactNumber"]) ?? String(lead["ContactNo"]) ?? ""}`}
                                        className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center active:bg-white/30 transition-colors"
                                        onClick={() => onAdd?.(lead._id)}
                                    >
                                        <MdPhone size={16} className="text-white" />
                                    </a>
                                    <button
                                        onClick={() => onMailClick?.(lead)}
                                        className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center active:bg-white/30 transition-colors"
                                    >
                                        <MdEmail size={16} className="text-white" />
                                    </button>
                                    <button
                                        onClick={() => onWhatsappClick?.(lead)}
                                        className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center active:bg-white/30 transition-colors"
                                    >
                                        <FaWhatsapp size={16} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* ── Pagination ────────────────────────────────────────────────── */}
                {paginatedLeads.length > 0 && (
                    <div className="flex items-center justify-center pt-2 pb-1">
                        <div className="flex items-center gap-1.5 bg-white dark:bg-[var(--color-childbgdark)] border border-gray-100 dark:border-white/[0.07] rounded-2xl shadow-sm px-3 py-2">
                            {/* First */}
                            <button
                                onClick={() => setCurrentPage(1)}
                                className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/[0.04] hover:bg-gray-100 dark:hover:bg-white/[0.08] flex items-center justify-center text-gray-400 transition-colors"
                            >
                                <AiOutlineBackward size={12} />
                            </button>
                            {/* Prev */}
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${currentPage === 1 ? "opacity-25 cursor-not-allowed" : "bg-gray-50 dark:bg-white/[0.04] hover:bg-gray-100"}`}
                            >
                                <GrFormPrevious size={14} />
                            </button>

                            {/* Page numbers */}
                            <AnimatePresence mode="popLayout">
                                {pages.map((num) => (
                                    <motion.button
                                        key={num}
                                        onClick={() => setCurrentPage(num)}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.15 }}
                                        className="rounded-lg text-sm font-bold flex items-center justify-center transition-all"
                                        style={
                                            num === currentPage
                                                ? { width: 32, height: 32, backgroundColor: "var(--color-primary)", color: "#fff" }
                                                : { width: 28, height: 28, backgroundColor: "transparent", color: "#9ca3af" }
                                        }
                                    >
                                        {num}
                                    </motion.button>
                                ))}
                            </AnimatePresence>

                            {/* Next */}
                            <button
                                onClick={nextPage}
                                disabled={!hasMoreCustomers && currentPage === totalPages}
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${(!hasMoreCustomers && currentPage === totalPages) ? "opacity-25 cursor-not-allowed" : "bg-gray-50 dark:bg-white/[0.04] hover:bg-gray-100"}`}
                            >
                                <GrFormNext size={14} />
                            </button>
                            {/* Last */}
                            <button
                                onClick={() => setCurrentPage(totalPages)}
                                className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/[0.04] hover:bg-gray-100 dark:hover:bg-white/[0.08] flex items-center justify-center text-gray-400 transition-colors"
                            >
                                <AiOutlineForward size={12} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}