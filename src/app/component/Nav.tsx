"use client";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { LuKey } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import PopUps from "./PopUps";
import { useRouter } from "next/navigation";
import ProtectedRoute from "./ProtectedRoutes";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Moon, Sun, Bell, ChevronDown, ChevronUp, Plus, LogOut, User, KeyRound, Zap } from "lucide-react";
import { useThemeCustom } from "@/context/ThemeContext";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"notifications" | "quickAdd" | "adminMail" | null>(null);
  const router = useRouter();
  const { admin, logout } = useAuth();
  const notificationsRef = useRef<HTMLLIElement>(null);
  const quickAddRef = useRef<HTMLLIElement>(null);
  const adminMailRef = useRef<HTMLLIElement>(null);
  const { dark, toggleTheme } = useThemeCustom();

  const quickadds = [
    { name: "Add References", link: "/masters/references/add" },
    { name: "Add City", link: "/masters/city/add" },
    { name: "Add Location", link: "/masters/locations/add" },
    { name: "Add Functional Area", link: "/masters/functional-areas/add" },
    { name: "Add Industry", link: "/masters/industries/add" },
    { name: "Add Campaign", link: "/masters/campaign/add" },
    { name: "Add Income", link: "/masters/incomes/add" },
    { name: "Add Expenses", link: "/masters/expenses/add" },
    { name: "Add Status Type", link: "/masters/status-type/add" },
    { name: "Add Mail Template", link: "/masters/mail-templates/add" },
    { name: "Add Whatsapp Template", link: "/masters/whatsapp-templates/add" },
    { name: "Add Payment Method", link: "/masters/payment-methods/add" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        notificationsRef.current && !notificationsRef.current.contains(e.target as Node) &&
        quickAddRef.current && !quickAddRef.current.contains(e.target as Node) &&
        adminMailRef.current && !adminMailRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutDashboard = async () => {
    await logout();
    router.push("/admin");
  };

  const dropdownBase = "absolute z-[100] transition-all duration-200";
  const dropdownVisible = "opacity-100 scale-100 pointer-events-auto";
  const dropdownHidden = "opacity-0 scale-95 pointer-events-none";

  const initials = admin?.email?.slice(0, 2).toUpperCase() ?? "AD";

  return (
    <ProtectedRoute>
      <div className="flex items-center justify-end gap-1 px-2 py-2 bg-white  max-sm:bg-transparent">

        {/* ── Theme toggle ─────────────────────────────────────────────── */}
        <button
          onClick={toggleTheme}
          className="relative w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-150 bg-gray-100 max-sm:dark:bg-white/[0.06] hover:bg-gray-200 max-sm:dark:hover:bg-white/10 max-sm:bg-white/10 max-sm:hover:bg-white/20"
          title="Toggle theme"
        >
          {dark
            ? <Sun size={15} className="text-amber-400" />
            : <Moon size={15} className="max-sm:dark:text-gray-500 text-gray-800 max-sm:dark:text-white" />
          }
        </button>

        <nav style={{ zIndex: 1000 }}>
          <ul className="flex items-center gap-1">

            {/* ── Notifications ─────────────────────────────────────────── */}
            <li ref={notificationsRef} className="relative max-md:hidden">
              <button
                className="relative w-8 h-8 rounded-xl flex items-center justify-center bg-gray-100 max-sm:dark:bg-white/[0.06] hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-150"
                onClick={() => setOpenMenu(openMenu === "notifications" ? null : "notifications")}
                onMouseEnter={() => setOpenMenu("notifications")}
              >
                <Bell size={15} className="text-gray-500 max-sm:dark:text-gray-400" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
              </button>
              <div className={`${dropdownBase} top-full right-0 mt-2 origin-top-right ${openMenu === "notifications" ? dropdownVisible : dropdownHidden}`}>
                <div className="w-[300px] rounded-2xl overflow-hidden bg-white max-sm:dark:bg-[#0f1117] border border-gray-100 max-sm:dark:border-white/[0.08] shadow-2xl">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 max-sm:dark:border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-gray-500 max-sm:dark:text-gray-400">Notifications</span>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>View all</button>
                  </div>
                  <div className="flex flex-col items-center justify-center py-10 gap-2">
                    <div className="w-10 h-10 rounded-2xl bg-gray-50 max-sm:dark:bg-white/[0.04] flex items-center justify-center">
                      <Bell size={16} className="text-gray-300 max-sm:dark:text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-400 max-sm:dark:text-gray-600 font-medium">No new notifications</p>
                  </div>
                </div>
              </div>
            </li>

            {/* ── Quick Add ─────────────────────────────────────────────── */}
            <li ref={quickAddRef} className="relative max-md:hidden">
              <button
                className="flex items-center gap-1.5 h-8 px-3 rounded-xl text-white text-xs font-bold tracking-wide transition-all duration-150 active:scale-[0.97]"
                style={{ backgroundColor: "var(--color-primary)" }}
                onClick={() => setOpenMenu(openMenu === "quickAdd" ? null : "quickAdd")}
                onMouseEnter={() => setOpenMenu("quickAdd")}
              >
                <Plus size={13} />
                <span>Quick Add</span>
                {openMenu === "quickAdd" ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
              <div className={`${dropdownBase} top-full right-0 mt-2 origin-top-right ${openMenu === "quickAdd" ? dropdownVisible : dropdownHidden}`}>
                <div className="w-[220px] rounded-2xl overflow-hidden bg-white max-sm:dark:bg-[#0f1117] border border-gray-100 max-sm:dark:border-white/[0.08] shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                  <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }} />
                  <div className="py-2">
                    {quickadds.map((item, i) => (
                      <Link key={item.name + i} href={item.link} onClick={() => setOpenMenu(null)}
                        className="group flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 max-sm:dark:hover:bg-white/[0.04] transition-colors duration-100"
                      >
                        <span className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                          style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 12%, transparent)" }}>
                          <Plus size={10} style={{ color: "var(--color-primary)" }} />
                        </span>
                        <p className="text-xs font-medium text-gray-600 max-sm:dark:text-gray-400 whitespace-nowrap group-hover:text-gray-900 max-sm:dark:group-hover:text-white transition-colors">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* ── Admin menu ────────────────────────────────────────────── */}
            {/*
              FIX: On mobile the header is fixed and the avatar button sits
              near the right edge of the screen. Using `right-0` anchors the
              dropdown to the right edge of the <li> — but the panel is wider
              than the remaining screen space, so it clips off to the left.

              Solution: use a fixed-position dropdown on mobile (max-sm) so it
              anchors to the actual viewport right edge, not the li's right edge.
              We achieve this by rendering TWO wrappers — one for desktop (absolute)
              and one for mobile (fixed) — controlled by the same openMenu state.
            */}
            <li ref={adminMailRef} className="relative">
              <button
                className="flex items-center gap-2 h-8 px-2 rounded-xl hover:bg-gray-100 max-sm:dark:hover:bg-white/[0.06] max-sm:hover:bg-white/10 transition-all duration-150"
                onClick={() => setOpenMenu(openMenu === "adminMail" ? null : "adminMail")}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-black text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {initials}
                </div>
                <span className="text-xs font-semibold text-gray-700 max-sm:dark:text-gray-300 max-sm:text-white max-md:hidden">
                  {admin?.email?.split("@")[0] ?? "Admin"}
                </span>
                <span className="max-md:hidden">
                  {openMenu === "adminMail"
                    ? <ChevronUp size={12} className="text-gray-400 max-sm:text-white/60" />
                    : <ChevronDown size={12} className="text-gray-400 max-sm:text-white/60" />
                  }
                </span>
              </button>

              {/* Desktop dropdown — absolute, anchored to li */}
              <div className={`hidden sm:block ${dropdownBase} top-full right-0 mt-2 origin-top-right ${openMenu === "adminMail" ? dropdownVisible : dropdownHidden}`}>
                <AdminDropdownPanel
                  initials={initials}
                  admin={admin}
                  setOpenMenu={setOpenMenu}
                  router={router}
                  logoutDashboard={logoutDashboard}
                />
              </div>

              {/* Mobile dropdown — fixed to viewport, anchored top-right safely */}
              <div
                className={`sm:hidden fixed top-[56px] right-2 z-[1002] transition-all duration-200 origin-top-right ${openMenu === "adminMail" ? dropdownVisible : dropdownHidden}`}
              >
                <AdminDropdownPanel
                  initials={initials}
                  admin={admin}
                  setOpenMenu={setOpenMenu}
                  router={router}
                  logoutDashboard={logoutDashboard}
                />
              </div>
            </li>

            {/* ── Standalone logout (desktop only) ──────────────────────── */}
            <li className="max-md:hidden">
              <button
                onClick={logoutDashboard}
                className="w-8 h-8 rounded-xl flex items-center justify-center bg-gray-100 max-sm:dark:bg-white/[0.06] hover:bg-red-50 max-sm:dark:hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all duration-150"
                title="Logout"
              >
                <LogOut size={14} />
              </button>
            </li>

          </ul>
        </nav>
      </div>
    </ProtectedRoute>
  );
}

/* ── Shared admin dropdown panel (used in both mobile + desktop) ──────────── */
function AdminDropdownPanel({
  initials,
  admin,
  setOpenMenu,
  router,
  logoutDashboard,
}: {
  initials: string;
  admin: any;
  setOpenMenu: (v: null) => void;
  router: any;
  logoutDashboard: () => void;
}) {
  const items = [
    {
      icon: <User size={13} />,
      label: "Edit Profile",
      action: () => { setOpenMenu(null); router.push(`/users/edit/${admin?._id}`); },
      danger: false,
    },
    {
      icon: <KeyRound size={13} />,
      label: "Change Password",
      action: () => { setOpenMenu(null); router.push("/users/change_password"); },
      danger: false,
    },
    {
      icon: <LogOut size={13} />,
      label: "Logout",
      action: () => { setOpenMenu(null); logoutDashboard(); },
      danger: true,
    },
  ];

  return (
    <div className="w-[210px] rounded-2xl overflow-hidden bg-white max-sm:dark:bg-[#0f1117] border border-gray-100 max-sm:dark:border-white/[0.08] shadow-2xl shadow-black/20">
      {/* Top accent line */}
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }} />

      {/* User info */}
      <div className="px-4 py-3 border-b border-gray-50 max-sm:dark:border-white/[0.05]">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-white shrink-0"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-900 max-sm:dark:text-white truncate">
              {admin?.email?.split("@")[0] ?? "Admin"}
            </p>
            <p className="text-[10px] text-gray-400 max-sm:dark:text-gray-500 truncate">
              {admin?.email ?? ""}
            </p>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="py-2">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-100 ${
              item.danger
                ? "hover:bg-red-50 max-sm:dark:hover:bg-red-500/10 text-red-500"
                : "hover:bg-gray-50 max-sm:dark:hover:bg-white/[0.04] text-gray-600 max-sm:dark:text-gray-400 hover:text-gray-900 max-sm:dark:hover:text-white"
            }`}
          >
            <span className={item.danger ? "text-red-400" : "text-gray-400 max-sm:dark:text-gray-500"}>
              {item.icon}
            </span>
            <span className="text-xs font-semibold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}