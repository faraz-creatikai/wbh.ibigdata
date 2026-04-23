"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaUserAlt, FaLock, FaGoogle, FaGithub, FaCog } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const { admin, isLoading, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (admin) router.push("/dashboard");
  }, [admin]);

  if (isLoading || loading) {
    return (
      <div className="grid place-items-center min-h-screen w-full text-lg text-gray-500">
        Loading...
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await login({ email, password });
    if (admin) router.push("/dashboard");
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden"
      style={{ backgroundColor: "var(--color-bg, #f0f4ff)" }}
    >
      <Toaster position="top-right" />

      {/* ─── HERO PANEL ─────────────────────────────────────────────────────── */}
      {/* Mobile: top 45vh strip  |  Desktop: left 45% full-height panel        */}
      <div
        className="relative flex-shrink-0 lg:w-[45%] lg:min-h-screen"
        style={{ height: "45vh" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/authbg.jpeg')",
          }}
        />

        {/* Primary colour overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-primary, #1e88e5) 88%, transparent)" }}
        />

        {/* ── Decorative dot grids ── */}
        <div className="absolute top-8 left-6 grid grid-cols-4 gap-[5px]">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] rounded-full bg-white/60" />
          ))}
        </div>
        <div className="absolute bottom-14 right-6 grid grid-cols-3 gap-[5px] lg:bottom-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] rounded-full bg-white/40" />
          ))}
        </div>

        {/* ── Floating blob accents ── */}
        <div className="absolute -left-4 top-[45%] w-10 h-10 rounded-full bg-white/20" />
        <div className="absolute -right-3 top-[38%] w-7 h-7 rounded-full bg-white/20" />
        <div className="absolute top-6 right-10 w-2.5 h-2.5 rounded-full bg-white/50" />
        <div className="absolute top-10 right-1/3 w-1.5 h-1.5 rounded-full bg-white/40" />

        {/* ── Brand / logo content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pb-10 lg:pb-0 gap-3">
          <Link href="https://estateai.in">
            <img
              src="/workbyhomeicon.jpeg"
              alt="EstateAI"
              className="w-20 rounded-full sm:w-22 lg:w-26 h-auto"
            />
          </Link>

          <p className="text-white/75 text-sm text-center max-w-xs leading-relaxed">
            AI‑powered real estate workspace — manage leads, automation &amp; deals smarter.
          </p>

          {/* Robot visible only on desktop */}
          <div className="hidden lg:block mt-6">
            <img
              src="/bglogo.png"
              className="w-72 h-72 object-contain drop-shadow-xl"
              alt="AI Robot"
            />
          </div>
        </div>

        {/* ── Curved bottom edge (mobile only) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden lg:hidden"
          style={{ height: 52 }}
        >
          <svg
            viewBox="0 0 375 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0,60 L0,30 Q187.5,-20 375,30 L375,60 Z"
              fill="var(--color-bg, #f0f4ff)"
            />
          </svg>
        </div>

        {/* ── Curved right edge (desktop only) ── */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 overflow-hidden"
          style={{ width: 56 }}
        >
          <svg
            viewBox="0 0 60 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M60,0 L28,0 Q-18,450 28,900 L60,900 Z"
              fill="var(--color-bg, #f0f4ff)"
            />
          </svg>
        </div>
      </div>

      {/* ─── FORM SECTION ────────────────────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col items-center lg:justify-center px-6 py-5 lg:py-0"
        style={{ backgroundColor: "var(--color-bg, #f0f4ff)" }}
      >
        <div className="w-full max-w-sm">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div
              className="flex items-center gap-3 bg-white border-2 rounded-full px-4 py-3 shadow-sm"
              style={{ borderColor: "var(--color-primary, #1e88e5)" }}
            >
              <FaUserAlt
                className="text-sm flex-shrink-0"
                style={{ color: "var(--color-primary, #1e88e5)" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-gray-700 text-base placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div
              className="relative flex items-center gap-3 bg-white border-2 rounded-full px-4 py-3 shadow-sm"
              style={{ borderColor: "var(--color-primary, #1e88e5)" }}
            >
              <FaLock
                className="text-sm flex-shrink-0"
                style={{ color: "var(--color-primary, #1e88e5)" }}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none text-gray-700 text-base placeholder-gray-400 pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 transition"
                style={{ color: "var(--color-primary, #1e88e5)" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-between rounded-xl px-5 py-3.5 text-white font-semibold text-base tracking-widest uppercase disabled:opacity-60 hover:opacity-90 active:scale-[0.98] transition-all"
              style={{ backgroundColor: "#F5A623" }}
            >
              <span className="flex-1 text-center">
                {loading ? "Signing in…" : "SIGN IN"}
              </span>
              <span className="ml-2 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>

          {/* Social */}
{/*           <div className="text-center mt-7 text-gray-400 text-sm">Or sign in with</div>
          <div className="flex justify-center gap-4 mt-3">
            {[
              { icon: <FaGoogle className="text-xl" style={{ color: "#4285F4" }} /> },
              { icon: <FaGithub className="text-xl text-gray-800" /> },
              {
                icon: (
                  <FaCog
                    className="text-xl"
                    style={{ color: "var(--color-primary, #1e88e5)" }}
                  />
                ),
              },
            ].map((btn, i) => (
              <button
                key={i}
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:scale-110 transition shadow-sm border border-gray-100"
              >
                {btn.icon}
              </button>
            ))}
          </div> */}

          <p className="text-center mt-7 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;