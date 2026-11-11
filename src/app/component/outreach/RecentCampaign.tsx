"use client";

/**
 * RecentCampaigns — the "Recent Campaigns" card for the Overview tab (email + WhatsApp).
 *
 *   <RecentCampaigns scope="email" onViewAll={() => setTab("Campaigns")} onCreate={() => setDialog({ open: true, id: null })} />
 *
 * Shows the 5 newest campaigns for the channel. "View all" should switch the page to its Campaigns tab.
 */
import { useEffect, useState } from "react";
import { getCampaigns } from "@/store/masters/outreachcampaign/outreachcampaign";
import {
  campaignMatchesScope,
  channelsForScope,
  type CampaignListItem,
  type CampaignScope,
} from "@/store/masters/outreachcampaign/outreachcampaign.interface";
import { Banner, Spinner, btnPrimary, btnSecondary, cx, focusRing } from "./CampaignUi";

interface Props {
  scope: CampaignScope;
  onViewAll: () => void;
  onCreate?: () => void;
  /** bump to reload (e.g. after a campaign is saved) */
  refreshKey?: number;
  limit?: number;
}

const SHORT: Record<string, string> = { email: "Email", whatsapp_baileys: "WhatsApp", whatsapp_meta: "WhatsApp (Meta)", ai_calling: "AI calling" };

const timeAgo = (iso?: string | null) => {
  if (!iso) return "Never";
  const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 45) return "Just now";
  if (s < 3600) return `${Math.round(s / 60)} min ago`;
  if (s < 86400) return `${Math.round(s / 3600)} h ago`;
  if (s < 86400 * 7) return `${Math.round(s / 86400)} d ago`;
  return new Date(iso).toLocaleDateString();
};

export default function RecentCampaigns({ scope, onViewAll, onCreate, refreshKey = 0, limit = 5 }: Props) {
  const [items, setItems] = useState<CampaignListItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    setError(null);
    getCampaigns({ page: 1, limit, channel: scope === "all" ? undefined : channelsForScope(scope) }).then((r) => {
      if (!alive) return;
      if (r.ok) setItems(r.data.data.filter((c) => campaignMatchesScope(c, scope)));
      else setError(r.error.message);
    });
    return () => {
      alive = false;
    };
  }, [scope, limit, refreshKey, tick]);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-slate-900">Recent Campaigns</h2>
        <button
          type="button"
          onClick={onViewAll}
          className={cx("cursor-pointer text-sm font-medium text-[var(--color-primary-darker)] hover:underline", focusRing)}
        >
          View all
        </button>
      </div>

      {error && (
        <div className="space-y-3">
          <Banner tone="error" title="Couldn’t load campaigns">{error}</Banner>
          <button type="button" className={btnSecondary} onClick={() => setTick((t) => t + 1)}>Try again</button>
        </div>
      )}

      {!items && !error && (
        <div className="flex items-center gap-3 py-6 text-sm text-slate-600"><Spinner /> Loading campaigns…</div>
      )}

      {items && items.length === 0 && (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-300 px-6 py-10 text-center">
          <p className="text-sm text-slate-600">No campaigns yet. Create your first one to see it here.</p>
          {onCreate && (
            <button type="button" className={btnPrimary} onClick={onCreate}>Create campaign</button>
          )}
        </div>
      )}

      {items && items.length > 0 && (
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-600">
              <tr>
                {["Campaign Name", "Channels", "Customers", "Runs", "Last run", "Status"].map((h) => (
                  <th key={h} className="px-3 py-2.5 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((c) => {
                const paused = c.status === "paused";
                return (
                  <tr key={c.id}>
                    <td className="px-3 py-3 font-medium text-slate-900">{c.name}</td>
                    <td className="px-3 py-3 text-slate-700">{c.channels.map((ch) => SHORT[ch] ?? ch).join(", ")}</td>
                    <td className="px-3 py-3">{c.customerCount.toLocaleString()}</td>
                    <td className="px-3 py-3">{c._count.runs}</td>
                    <td className="whitespace-nowrap px-3 py-3 text-slate-600">{timeAgo(c.lastRunAt)}</td>
                    <td className="px-3 py-3">
                      <span className={cx("rounded-md px-2 py-0.5 text-xs font-medium", paused ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800")}>
                        {paused ? "Paused" : "Active"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}