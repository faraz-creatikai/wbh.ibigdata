"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardData {
  company: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const cards: CardData[] = [
  {
    company: "Bedquest",
    image: "/crm-sliderImage.jfif",
    title: "We Made A Community Mural With AI",
    description:
      "Using tools like geofencing and keyword retargeting, we target customers based on location and behavior, ensuring every impression counts.",
    tags: ["CEO", "SEO", "Branding"],
    link: "#",
  },
  {
    company: "Apple",
    image: "\\crm-siderImage7.png",
    title: "Reimagining Retail Experience",
    description:
      "Apple redefined in-store customer interactions using AR and personalized AI assistants.",
    tags: ["AR", "UX", "Retail"],
    link: "#",
  },
  {
    company: "Google",
    image: "/crm-sliderImage22.webp",
    title: "AI-Powered Workspace Tools",
    description:
      "Google Workspace now leverages AI to automate workflow and increase team productivity.",
    tags: ["AI", "Cloud", "Productivity"],
    link: "#",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        setIsTransitioning(false);
        AOS.refresh();
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentCard = cards[currentIndex];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black">

        {/* ── Full bleed background image ─────────────────────────────── */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={currentCard.image}
            alt={currentCard.title}
            className="w-full h-full object-cover scale-105"
            style={{ filter: "brightness(0.45) saturate(1.2)" }}
          />
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Bottom fade into page bg */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-50 dark:from-[var(--color-childbgdark)] to-transparent z-10" />

        {/* ── Content ──────────────────────────────────────────────────── */}
        <div className="relative z-10 px-4 pt-5 pb-10 min-h-[34vh] flex flex-col justify-between">

          {/* Top row: brand pill + slide number */}
          <div className="flex items-center justify-between">
            {/* Brand chip */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 30%, rgba(0,0,0,0.3))" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span className="text-[9px] font-black tracking-[0.25em] uppercase text-white">
                {currentCard.company}
              </span>
            </div>

            {/* Slide counter box */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/10">
              <span className="text-white text-xs font-black tabular-nums">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-white/30 text-[9px] font-bold">/ {String(cards.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Bottom: tags + title + description + controls */}
          <div className="mt-auto space-y-3">

            {/* Tags row */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {currentCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[8px] font-black tracking-[0.2em] uppercase rounded-md"
                  style={{
                    color: "var(--color-primary-lighter)",
                    backgroundColor: "color-mix(in srgb, var(--color-primary) 20%, rgba(0,0,0,0.4))",
                    border: "1px solid color-mix(in srgb, var(--color-primary) 40%, transparent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <div>
              <h2
                key={`title-${currentIndex}`}
                data-aos="fade-up"
                className="text-white text-lg font-black leading-tight tracking-tight"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
              >
                {currentCard.title}
              </h2>
              {/* Description — truncated */}
              <p
                key={`desc-${currentIndex}`}
                data-aos="fade-up"
                className="text-white/50 text-[11px] leading-snug mt-1.5 line-clamp-2"
              >
                {currentCard.description}
              </p>
            </div>

            {/* Controls row: progress + dots + read more */}
            <div className="flex items-center gap-3">
              {/* Vertical stack of dot indicators */}
              <div className="flex flex-col gap-1 shrink-0">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => { setCurrentIndex(i); setIsTransitioning(false); }, 300);
                    }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: "3px",
                      height: i === currentIndex ? "20px" : "6px",
                      backgroundColor: i === currentIndex ? "var(--color-primary)" : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Sweep progress bar */}
              <div className="flex-1 h-[2px] rounded-full bg-white/10 overflow-hidden">
                <div
                  key={`bar-${currentIndex}`}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    animation: "richProgress 3s linear forwards",
                  }}
                />
              </div>

              {/* Read more pill */}
              <a
                href={currentCard.link}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase text-white border border-white/20 bg-white/10 backdrop-blur-md active:scale-95 transition-transform"
              >
                Explore
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Glowing brand line at very top */}
        <div
          className="absolute top-0 inset-x-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, transparent, var(--color-primary), transparent)` }}
        />
      </section>

      <style jsx>{`
        @keyframes richProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </>
  );
}