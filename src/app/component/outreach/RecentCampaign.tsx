"use client";

import { useEffect, useState } from "react";
import { getCampaigns } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  campaignMatchesScope,
  channelsForScope,
  type CampaignListItem,
  type CampaignScope,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, Spinner, focusRing } from "./CampaignUi";

// Expected enriched campaign from the updated getCampaigns controller
interface EnrichedCampaign extends CampaignListItem {
  lifetimeStats?: { sent: number; failed: number; delivered: number; opened: number; replied: number; };
}

interface Props {
  scope: CampaignScope;
  onViewAll: () => void;
  onCreate?: () => void;
  refreshKey?: number;
  limit?: number;
}

const SHORT: Record<string, string> = { 
  email: "Email", 
  whatsapp_baileys: "WhatsApp", 
  whatsapp_meta: "WhatsApp (Meta)", 
  ai_calling: "AI Calling" 
};

const fmt = (n: number) => n.toLocaleString("en-IN");

const timeAgo = (iso?: string | null) => {
  if (!iso) return "Never";
  const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 45) return "Just now";
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  if (s < 86400 * 7) return `${Math.round(s / 86400)} d ago`;
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

const PlusIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function RecentCampaigns({ scope, onViewAll, onCreate, refreshKey = 0, limit = 5 }: Props) {
  const [items, setItems] = useState<EnrichedCampaign[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    setError(null);
    getCampaigns({ page: 1, limit, channel: scope === "all" ? undefined : channelsForScope(scope) }).then((r) => {
      if (!alive) return;
      if (r.ok) setItems(r.data.data.filter((c: any) => campaignMatchesScope(c, scope)));
      else setError(r.error.message);
    });
    return () => {
      alive = false;
    };
  }, [scope, limit, refreshKey, tick]);

  return (
    <section className="rounded-2xl border border-[var(--color-primary-light)]/60 bg-white p-5 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-bgdark)] xl:flex-1">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-gray-900 dark:text-[var(--color-txtlight)]">Recent Campaigns</h2>
        <button
          type="button"
          onClick={onViewAll}
          className={cx("cursor-pointer text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-darker)] hover:underline dark:hover:text-[var(--color-primary-light)]", focusRing)}
        >
          View all →
        </button>
      </div>

      {error && (
        <div className="mb-4 space-y-3">
          <Banner tone="error" title="Couldn’t load campaigns">{error}</Banner>
          <button 
            type="button" 
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setTick((t) => t + 1)}
          >
            Try again
          </button>
        </div>
      )}

      {!items && !error && (
        <div className="flex h-32 items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <Spinner /> Loading campaigns…
        </div>
      )}

      {items && items.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-primary-light)]/60 bg-[var(--color-primary-lighter)]/10 px-6 py-12 text-center dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-childbgdark)]/20">
          <p className="text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]">No campaigns yet</p>
          <p className="mt-1 max-w-sm text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60">
            Create your first {SHORT[scope] || "campaign"} to see it here and start tracking performance.
          </p>
          {onCreate && (
            <button
              onClick={onCreate}
              className="mt-5 flex cursor-pointer items-center gap-2 rounded-xl bg-[#128C7E] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all hover:bg-[#0F7A6E]"
            >
              <PlusIcon className="h-4 w-4" />
              Create Campaign
            </button>
          )}
        </div>
      )}

      {items && items.length > 0 && (
        <div className="flex flex-col gap-4">
          {items.map((c) => {
            const paused = c.status === "paused";
            const stats = c.lifetimeStats;
            const hasRun = c._count.runs > 0;
            
            return (
              <div 
                key={c.id} 
                className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-primary-light)]/50 bg-white transition-colors hover:border-[var(--color-primary-light)] dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-childbgdark)]/30 dark:hover:border-gray-600 xl:flex-row"
              >
                {/* Left Side: Campaign Info */}
                <div className="flex w-full flex-col justify-between border-b border-[var(--color-primary-light)]/50 bg-gray-50/50 p-5 dark:border-[var(--color-childbgdark)] dark:bg-[var(--color-childbgdark)]/20 xl:w-[35%] xl:border-b-0 xl:border-r">
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="truncate text-base font-bold text-gray-900 dark:text-[var(--color-txtlight)]" title={c.name}>
                        {c.name || "Unnamed Campaign"}
                      </h3>
                      <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${paused ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" : "bg-[#DCF8C6] text-[#075E54] dark:bg-[#25D366]/20 dark:text-[#25D366]"}`}>
                        {paused ? "Paused" : "Active"}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60">
                      <span className="flex items-center gap-1.5 text-gray-700 dark:text-[var(--color-txtlight)]/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] dark:bg-[#25D366]"></span>
                        {c.channels.map((ch) => SHORT[ch] ?? ch).join(", ")}
                      </span>
                      <span>•</span>
                      <span>{fmt(c.customerCount)} targets</span>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-500 dark:text-[var(--color-txtlight)]/50">
                    <div><strong className="text-gray-700 dark:text-[var(--color-txtlight)]/80">{fmt(c._count.runs)}</strong> runs</div>
                    <div>Last run: <strong className="text-gray-700 dark:text-[var(--color-txtlight)]/80">{timeAgo(c.lastRunAt)}</strong></div>
                  </div>
                </div>

                {/* Right Side: Tracking Stats */}
                <div className="flex w-full items-center p-4 xl:w-[65%] xl:p-5">
                  {hasRun ? (
                    stats ? (
                      <div className="grid w-full grid-cols-5 gap-2 sm:gap-3">
                        {/* Sent */}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-[var(--color-primary-light)]/40 bg-[var(--color-primary-lighter)]/30 p-2.5 text-center dark:border-transparent dark:bg-[var(--color-bgdark)] sm:p-3">
                          <p className="text-lg font-extrabold text-[var(--color-primary)] sm:text-xl">{fmt(stats.sent)}</p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">Sent</p>
                        </div>
                        {/* Delivered */}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-[#CFF3DD]/60 bg-[#ECFDF3]/50 p-2.5 text-center dark:border-transparent dark:bg-[#16A34A]/10 sm:p-3">
                          <p className="text-lg font-extrabold text-[#16A34A] sm:text-xl">{fmt(stats.delivered)}</p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">Delivered</p>
                        </div>
                        {/* Read (WhatsApp terminology) */}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-[#D3E6FF]/60 bg-[#EEF6FF]/50 p-2.5 text-center dark:border-transparent dark:bg-[#2563EB]/10 sm:p-3">
                          <p className="text-lg font-extrabold text-[#2563EB] sm:text-xl">{fmt(stats.opened)}</p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">{scope.includes("whatsapp") ? "Read" : "Opened"}</p>
                        </div>
                        {/* Replies */}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-[#E4DAFF]/60 bg-[#F5F0FF]/50 p-2.5 text-center dark:border-transparent dark:bg-[#7C3AED]/10 sm:p-3">
                          <p className="text-lg font-extrabold text-[#7C3AED] sm:text-xl">{fmt(stats.replied)}</p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">Replies</p>
                        </div>
                        {/* Failed */}
                        <div className="flex flex-col items-center justify-center rounded-lg border border-rose-100/60 bg-rose-50/50 p-2.5 text-center dark:border-transparent dark:bg-rose-500/10 sm:p-3">
                          <p className="text-lg font-extrabold text-rose-600 dark:text-rose-500 sm:text-xl">{fmt(stats.failed)}</p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">Failed</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex w-full items-center justify-center rounded-xl border border-dashed border-[var(--color-primary-light)]/60 py-6 text-sm text-gray-400 dark:border-[var(--color-childbgdark)]">
                        Calculating stats...
                      </div>
                    )
                  ) : (
                    <div className="flex w-full items-center justify-center rounded-xl border border-dashed border-[var(--color-primary-light)]/60 py-6 text-sm text-gray-500 dark:border-[var(--color-childbgdark)] dark:text-gray-400">
                      Campaign has not been run yet.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

// Utility to handle classNames easily (assuming you have this in CampaignUi, if not here is a simple version)
function cx(...args: (string | undefined | null | false)[]) {
  return args.filter(Boolean).join(" ");
}