"use client";

import { BrickWallFire, Podcast, School, Cable, ShieldUser, NotebookTabs, TrendingUp, Activity } from "lucide-react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const SmallScreenData = () => {
  const { admin, isLoading, login } = useAuth();

  const boxeButtons = [
    {
      pTag: "Campaigns",
      icon: <BrickWallFire size={20} />,
      url: `${admin?.role !== "administrator" ? "/masters/campaign/allcampaigns" : "/masters/campaign"}`,
      solidColor: "#dc2626",
      label: "View all running campaigns",
      number: "01",
      badge: "Active",
      badgeBg: "#dc262618",
    },
    {
      pTag: "Customer",
      icon: <Podcast size={20} />,
      url: "/customer",
      solidColor: "#7c3aed",
      label: "Manage your customer base",
      number: "02",
      badge: "New",
      badgeBg: "#7c3aed18",
    },
    {
      pTag: "Followups",
      icon: <School size={20} />,
      url: "/followups/customer",
      solidColor: "#0d9488",
      label: "Track pending follow-ups",
      number: "03",
      badge: "Pending",
      badgeBg: "#0d948818",
    },
    {
      pTag: "Favorites",
      icon: <ShieldUser size={20} />,
      url: "/favourites",
      solidColor: "#2563eb",
      label: "Your starred leads & contacts",
      number: "04",
      badge: "Saved",
      badgeBg: "#2563eb18",
    },
    {
      pTag: "Report",
      icon: <Cable size={20} />,
      url: "/reports/customer",
      solidColor: "#16a34a",
      label: "Analytics and data exports",
      number: "05",
      badge: "Live",
      badgeBg: "#16a34a18",
    },
    {
      pTag: "Status Type",
      icon: <NotebookTabs size={20} />,
      url: "/masters/status-type",
      solidColor: "#4b5563",
      label: "Configure status categories",
      number: "06",
      badge: "Config",
      badgeBg: "#4b556318",
    },
  ];

  const stats = [
    { label: "Customers", value: "—", icon: <Podcast size={13} />, color: "#7c3aed" },
    { label: "Followups", value: "—", icon: <School size={13} />, color: "#0d9488" },
    { label: "Campaigns", value: "—", icon: <BrickWallFire size={13} />, color: "#dc2626" },
  ];

  const recentActivity = [
    { text: "New customer added", time: "Just now", color: "#7c3aed" },
    { text: "Followup scheduled", time: "2m ago", color: "#0d9488" },
    { text: "Campaign updated", time: "15m ago", color: "#dc2626" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[var(--color-childbgdark)]">

      {/* ── Slider ──────────────────────────────────────────────────────── */}
      <ImageSlider />

      <div className="px-4 pt-5 pb-10 space-y-5">

        {/* ── Hero welcome card ───────────────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-2xl p-4"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }}
          />
          <div className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -right-2 -bottom-6 w-20 h-20 rounded-full bg-white/5" />

          <div className="relative z-10 flex items-center justify-between mb-4">
            <div>
              <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Welcome back</p>
              <h2 className="text-white text-lg font-black tracking-tight mt-0.5">CRM Dashboard</h2>
              <p className="text-white/40 text-[10px] mt-0.5">ibigdata · Travel CRM</p>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
          </div>

          {/* Mini stats */}
          <div className="relative z-10 grid grid-cols-3 gap-2">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center py-2.5 rounded-xl bg-white/10">
                <span className="text-white/70 mb-1">{s.icon}</span>
                <p className="text-white text-sm font-black leading-none">{s.value}</p>
                <p className="text-white/50 text-[9px] font-semibold tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Recent activity ─────────────────────────────────────────── */}
      {/*   <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-black tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500">Recent Activity</p>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-emerald-500 tracking-wider uppercase">Live</span>
            </span>
          </div>
          <div className="space-y-1.5">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05]">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <p className="flex-1 text-xs font-medium text-gray-700 dark:text-gray-300">{item.text}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-600 shrink-0">{item.time}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── Navigation label ────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <p className="text-[9px] font-black tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 shrink-0">Navigation</p>
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.05]" />
          <span className="text-[9px] font-bold text-gray-300 dark:text-gray-600">{boxeButtons.length} modules</span>
        </div>

        {/* ── Menu list ───────────────────────────────────────────────── */}
        <div className="space-y-2">
          {boxeButtons.map((data, index) => (
            <Link
              key={index}
              href={data?.url ?? ""}
              className="group relative flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.05] active:scale-[0.98] transition-all duration-150 overflow-hidden"
            >
              {/* Left strip */}
              <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full" style={{ backgroundColor: data.solidColor }} />

              {/* Ghost number */}
              <span
                className="absolute right-12 top-1/2 -translate-y-1/2 text-[38px] font-black leading-none select-none pointer-events-none tabular-nums"
                style={{ color: data.solidColor, opacity: 0.05 }}
              >{data.number}</span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ml-2" style={{ backgroundColor: data.badgeBg }}>
                <span style={{ color: data.solidColor }}>{data.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">{data.pTag}</p>
                  <span className="text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded-md" style={{ color: data.solidColor, backgroundColor: data.badgeBg }}>
                    {data.badge}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-none">{data.label}</p>
              </div>

              {/* Arrow */}
              <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: data.badgeBg }}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: data.solidColor }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom tiles ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-2.5">
          <div
            className="rounded-2xl p-3.5 flex flex-col gap-1.5"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)"
            }}
          >
            <TrendingUp size={16} style={{ color: "var(--color-primary)" }} />
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Total Modules</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">{boxeButtons.length}</p>
            <p className="text-[10px] text-gray-400 dark:text-gray-500">All active & ready</p>
          </div>

          <div className="rounded-2xl p-3.5 flex flex-col gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
            <Activity size={16} className="text-emerald-500" />
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">System</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">Online</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">All systems OK</p>
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.04]" />
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-300 dark:text-gray-600">ibigdata · Travel CRM</p>
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.04]" />
        </div>

      </div>
    </div>
  );
};

export default SmallScreenData;