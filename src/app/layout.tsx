"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./component/Nav";
import { AppSidebar } from "../components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "../components/ui/separator";
import ProtectedRoute from "./component/ProtectedRoutes";
import { AuthProvider } from "@/context/AuthContext";
import { Poppins, Manrope, Schibsted_Grotesk } from 'next/font/google'
import { CustomerImportProvider } from "@/context/CustomerImportContext";
import { ContactImportProvider } from "@/context/ContactImportContext";
import MobileHamburger from "./component/HamburgerMenu";
import Link from "next/link";
import { Router } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/muiTheme";
import { CustomerFieldLabelProvider } from "@/context/customer/CustomerFieldLabelContext";
import { ThemeProviderCustom, useThemeCustom } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";


const poppins = Schibsted_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname === "/admin" || pathname === "/register";


  /*   const [toggleTheme, setToggleTheme] = useState(false); */

  useEffect(() => {
    if (Router && "prefetch" in Router) {
      Router.prefetch = async () => { }; // override prefetch globally
    }
  }, []);

  return (
    <html lang="en" className={`min-h-screen w-full overflow-x-hidden ${poppins.className}`}>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-startup-image" href="/icons/icon-512x512.png" />
      <title>Prime Consultancy Leads</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <body className="min-h-screen w-full bg-violet-100 overflow-x-hidden">
        <AuthProvider>
          <ThemeProviderCustom>
            <CustomerImportProvider>
              <ContactImportProvider>
                <CustomerFieldLabelProvider>
                  <ThemeProvider theme={theme}>
                    {isAdminPage ? (
                      <main className="min-h-screen ">{children}</main>
                    ) : (
                      <ProtectedRoute>
                        <SidebarProvider>
                          <div className="flex min-h-screen w-full dark:text-black overflow-hidden">
                            {/* Sidebar */}
                            <AppSidebar />

                            {/* Main Area */}
                            <SidebarInset className="flex flex-col flex-1 min-h-screen overflow-hidden">

                              {/* Navbar */}
                              {/* ─────────────────────────────────────────────────────────────────────────
    DROP-IN REPLACEMENT FOR <header>
    All components (MobileHamburger, Navbar, SidebarTrigger, Separator, Link)
    are preserved exactly. Only the shell design changes.
───────────────────────────────────────────────────────────────────────── */}

                              <header className="flex items-center shrink-0 z-50 bg-white max-sm:dark:bg-[var(--color-childbgdark)] border-b border-gray-100 max-sm:dark:border-white/[0.06] shadow-sm max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:bg-transparent max-sm:border-0 max-sm:shadow-none">

                                {/* ── Desktop: sidebar trigger ───────────────────────────────────────── */}
                                <div className="flex items-center max-sm:dark:text-slate-300 gap-2 ml-2 max-sm:hidden">
                                  <SidebarTrigger className="ml-1 cursor-pointer" />
                                  <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                                </div>

                                {/* ══════════════════════════════════════════════════════════════════════
      MOBILE HEADER — completely new dark charcoal glass design
  ══════════════════════════════════════════════════════════════════════ */}
                                <div className="sm:hidden relative w-full flex items-center gap-0 overflow-hidden bg-slate-100/90  max-sm:dark:bg-[#0f1117]">

                                  {/* Subtle grid texture */}
                                  <div
                                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                    style={{
                                      backgroundImage:
                                        "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                                      backgroundSize: "20px 20px",
                                    }}
                                  />

                                  {/* Brand accent glow — bottom-left */}
                                  <div
                                    className="pointer-events-none absolute -bottom-6 -left-6 w-28 h-28 rounded-full blur-2xl opacity-20"
                                    style={{ backgroundColor: "var(--color-primary)" }}
                                  />

                                  {/* Top hairline in brand color */}
                                  <div
                                    className="absolute top-0 inset-x-0 h-[2px]"
                                    style={{ background: "linear-gradient(90deg, var(--color-primary), transparent 60%)" }}
                                  />

                                  {/* ── LEFT: Hamburger ─────────────────────────────────────────────── */}
                                  <div className="relative z-10 pl-1">
                                    <MobileHamburger />
                                  </div>

                                  {/* ── CENTER: Logo wordmark ────────────────────────────────────────── */}
                                  <Link
                                    href="/dashboard"
                                    className="relative  flex-1 flex flex-col items-center justify-center py-3 cursor-pointer select-none"
                                  >
                                    {/* Wordmark */}
                                    <div className="flex items-baseline gap-0.5">
                                      <span className="dark:text-white font-black text-lg tracking-tight leading-none">i</span>
                                      <span className="font-black text-lg tracking-tight leading-none" style={{ color: "var(--color-secondary)" }}>big</span>
                                      <span className="dark:text-white font-black text-lg tracking-tight leading-none">data</span>
                                      {/* Version/type tag */}
                                      <span
                                        className="ml-1.5 mb-0.5 self-start text-[7px] font-black tracking-[0.2em] uppercase px-1.5 py-0.5 rounded-full border"
                                        style={{
                                          color: "var(--color-secondary)",
                                          borderColor: "color-mix(in srgb, var(--color-secondary) 40%, transparent)",
                                          backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
                                        }}
                                      >
                                        CRM
                                      </span>
                                    </div>
                                    {/* Sub-label */}
                                    <span className="dark:text-white/30 text-[8px] font-semibold tracking-[0.3em] uppercase mt-0.5">
                                      WBH Suite
                                    </span>
                                  </Link>

                                  {/* ── RIGHT: Navbar ───────────────────────────────────────────────── */}
                                  <div className="pr-1">
                                    <Navbar />
                                  </div>
                                </div>

                                {/* ── Desktop: Navbar ─────────────────────────────────────────────────── */}
                                <div className="ml-auto w-full max-sm:hidden">
                                  <Navbar />
                                </div>

                              </header>

                              {/* Page Content */}
                              <main className={`flex-1 overflow-y-auto   bg-[var(--color-childbglight)] max-md:dark:bg-[var(--color-bgdark)]`}>

                                {/* Mobile Sidebar Trigger */}
                                <div className="flex items-center gap-2 max-w-[100px] max-md:hidden md:hidden mt-4 ml-4">
                                  <SidebarTrigger className="ml-1" />
                                  <Separator
                                    orientation="vertical"
                                    className="mr-2 data-[orientation=vertical]:h-4"
                                  />
                                </div>

                                {/* Actual Page */}
                                <div className=" bg-white max-md:px-2 max-md:py-2 max-sm:mt-[52px]">{children}</div>
                              </main>
                            </SidebarInset>
                          </div>
                        </SidebarProvider>
                      </ProtectedRoute>
                    )}
                  </ThemeProvider>
                </CustomerFieldLabelProvider>
              </ContactImportProvider>
            </CustomerImportProvider>
          </ThemeProviderCustom>
        </AuthProvider>
      </body>
    </html>
  );
}
