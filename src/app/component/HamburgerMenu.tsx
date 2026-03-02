"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrickWallFire, Podcast, School, Cable, ShieldUser, NotebookTabs, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { useAuth } from "@/context/AuthContext";

export default function MobileHamburger() {
  const { admin, isLoading, login } = useAuth();

  const data = [
    { title: "Dashboard",        url: "/dashboard",                                                                             icon: <Home size={16} />,          color: "#6366f1" },
    { title: "Campaign",         url: `${admin?.role !== "administrator" ? "/masters/campaign/allcampaigns" : "/masters/campaign"}`, icon: <BrickWallFire size={16} />, color: "#ef4444" },
    { title: "Customer",         url: "/customer",                                                                              icon: <Podcast size={16} />,        color: "#8b5cf6" },
    { title: "FollowUp",         url: "/followups/customer",                                                                    icon: <School size={16} />,         color: "#0d9488" },
    { title: "Contact",          url: "/contact",                                                                               icon: <Podcast size={16} />,        color: "#3b82f6" },
    { title: "Contact FollowUp", url: "/followups/contact",                                                                     icon: <School size={16} />,         color: "#06b6d4" },
    { title: "Status Type",      url: "/masters/status-type",                                                                   icon: <NotebookTabs size={16} />,   color: "#f59e0b" },
    { title: "Favroites",        url: "/favourites",                                                                            icon: <Cable size={16} />,          color: "#ec4899" },
    { title: "Task",             url: "/task",                                                                                  icon: <ShieldUser size={16} />,     color: "#10b981" },
    { title: "Report",           url: `/reports/customer`,                                                                      icon: <BrickWallFire size={16} />,  color: "#f97316" },
  ];

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Outside click + ESC
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="sm:hidden grid place-items-center">

      {/* ── Hamburger trigger ─────────────────────────────────────────────
          z-index: sits inside the fixed header (header is z-50),
          so the button itself doesn't need a z-index override.
      ─────────────────────────────────────────────────────────────────── */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative mx-3 w-8 h-8 flex items-center justify-center outline-none rounded-xl"
      >
        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          className="relative w-5 h-[14px]"
        >
          <motion.span
            variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 top-0 w-5 h-[2px] bg-slate-900 dark:bg-white rounded-full block"
          />
          <motion.span
            variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-slate-900 dark:bg-white/70 rounded-full block"
          />
          <motion.span
            variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-0 bottom-0 w-5 h-[2px] bg-slate-900 dark:bg-white rounded-full block"
          />
        </motion.div>
      </button>

      {/* ── Backdrop ──────────────────────────────────────────────────────
          z-[2000]: above header (z-50) and admin dropdown (z-[1002]),
          below the drawer (z-[2001]) and close button (z-[2002])
      ─────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-[3px]"
            style={{ zIndex: 2000 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Slide-in drawer ───────────────────────────────────────────────
          z-[2001]: above backdrop
      ─────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { type: "spring", stiffness: 280, damping: 28 } }}
            exit={{ x: "-100%", transition: { duration: 0.2, ease: "easeIn" } }}
            className="fixed top-0 left-0 h-screen w-[272px] bg-white dark:bg-[#080a10] flex flex-col overflow-hidden"
            style={{ zIndex: 2001,  }}
          >
            {/* ── Background details ──────────────────────────────────── */}
            {/* Fine grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Primary glow top-left */}
            <div
              className="pointer-events-none absolute -top-16 -left-12 w-52 h-52 rounded-full blur-3xl"
              style={{ backgroundColor: "var(--color-primary)", opacity: 0.12 }}
            />
            {/* Secondary glow bottom-right */}
            <div className="pointer-events-none absolute -bottom-20 -right-10 w-44 h-44 rounded-full blur-3xl bg-indigo-500/10" />
            {/* Top accent bar */}
            <div
              className="absolute top-0 inset-x-0 h-[2.5px]"
              style={{ background: "linear-gradient(90deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 0%, transparent) 80%)", zIndex: 1 }}
            />

            {/* ── Brand header ──────────────────────────────────────────
                z-[2002]: close button sits here, above everything
            ─────────────────────────────────────────────────────────── */}
            <div className="relative px-5 pt-6 pb-4 border-b border-white/[0.05] shrink-0" style={{ zIndex: 2002 }}>
              <div className="flex items-center justify-between">
                {/* Wordmark */}
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="dark:text-white font-black text-[22px] tracking-tight leading-none">i</span>
                    <span className="font-black text-[22px] tracking-tight leading-none" style={{ color: "var(--color-primary)" }}>big</span>
                    <span className="dark:text-white font-black text-[22px] tracking-tight leading-none">data</span>
                    <span
                      className="ml-1.5 text-[7px] font-black tracking-[0.18em] uppercase px-1.5 py-[3px] rounded-full border self-center"
                      style={{
                        color: "var(--color-primary)",
                        borderColor: "color-mix(in srgb, var(--color-primary) 35%, transparent)",
                        backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                      }}
                    >
                      WBH
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-white/25 font-medium tracking-wider mt-0.5">
                    WBH Insights, Made Easy
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-xl bg-slate-300 dark:bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.08] flex items-center justify-center transition-colors shrink-0 active:scale-90"
                >
                  <TfiClose size={10} className=" dark:text-white/40" />
                </button>
              </div>
            </div>

            {/* ── Section label ─────────────────────────────────────── */}
            <div className="relative px-5 pt-4 pb-1.5 shrink-0" style={{ zIndex: 2001 }}>
              <span className="text-[9px] font-black tracking-[0.28em] uppercase dark:text-[rgba(255,255,255,0.2)]" >
                Navigation
              </span>
            </div>

            {/* ── Nav list ──────────────────────────────────────────── */}
            <nav className="relative flex-1 overflow-y-auto px-3 pb-2 space-y-[2px] [&::-webkit-scrollbar]:hidden" style={{ zIndex: 2001 }}>
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * index, duration: 0.2 }}
                >
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className="group relative flex items-center gap-3 px-3 py-2.5 rounded-xl overflow-hidden transition-all duration-150 active:scale-[0.97]"
                  >
                    {/* Hover bg — using inline style for dynamic color */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-150"
                      style={{ backgroundColor: `${item.color}10` }}
                    />
                    {/* Left micro-strip on hover */}
                    <span
                      className="absolute left-0 top-2 bottom-2 w-[2.5px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Icon box */}
                    <span
                      className="relative z-10 w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </span>

                    {/* Label */}
                    <span className="relative z-10 flex-1 text-[13px] font-semibold dark:text-white/55 group-hover:text-white/90 transition-colors tracking-tight">
                      {item.title}
                    </span>

                    {/* Chevron */}
                    <ChevronRight
                      size={12}
                      className="relative z-10 shrink-0 transition-all duration-150 text-white/10 group-hover:text-white/25 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ── Footer ────────────────────────────────────────────── */}
            <div className="relative px-5 py-4 border-t border-white/[0.05] shrink-0" style={{ zIndex: 2001 }}>
              <div
                className="w-5 h-[2px] rounded-full mb-2 opacity-25"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <p className="text-[9px] text-slate-600 dark:text-white/15 font-semibold tracking-[0.22em] uppercase">
                &copy; {currentYear} ibigdata — all rights reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}