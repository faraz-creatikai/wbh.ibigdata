"use client";

/**
 * useChannelStats — loads the tracking numbers for one channel and refreshes them every minute.
 * Percentages are always "share of everything triggered" = sent + failed (the last N days).
 */
import { useCallback, useEffect, useState } from "react";
import { getChannelStats, type ChannelStats, type TrackedChannel } from "@/store/masters/channeltracking/channeltracking";

interface Options {
  days?: number;
  /** only fetch while true (e.g. while the Overview tab is open) */
  enabled?: boolean;
  /** 0 turns auto-refresh off */
  pollMs?: number;
}

export function useChannelStats(channel: TrackedChannel, { days = 30, enabled = true, pollMs = 60_000 }: Options = {}) {
  const [stats, setStats] = useState<ChannelStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    setLoading(true);
    getChannelStats(channel, days).then((r) => {
      if (!alive) return;
      if (r.ok) {
        setStats(r.data);
        setError(null);
      } else setError(r.error.message);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, [channel, days, enabled, tick]);

  useEffect(() => {
    if (!enabled || !pollMs) return;
    const id = setInterval(() => setTick((t) => t + 1), pollMs);
    return () => clearInterval(id);
  }, [enabled, pollMs]);

  const reload = useCallback(() => setTick((t) => t + 1), []);
  return { stats, loading, error, reload };
}

/* ───────────── percentages + donut ───────────── */

/** 97.3% / 100% / 0% */
export const pct = (n: number, total: number) => (total > 0 ? `${Math.round((n / total) * 1000) / 10}%` : "0%");

export type Slice = { label: string; value: number; color: string };

/**
 * triggered = sent + failed.
 * segments  = mutually exclusive pieces that add up to `triggered` (these draw the donut).
 * extras    = rates shown beside the donut that overlap the segments (opened / read, replied).
 */
export const channelBreakdown = (s: ChannelStats | null, channel: TrackedChannel) => {
  const st = s ?? { sent: 0, failed: 0, bounced: 0, delivered: 0, opened: 0, replied: 0 };
  const triggered = st.sent + st.failed;
  const email = channel === "email";

  const segments: Slice[] = [
    { label: "Delivered", value: st.delivered, color: "#10b981" },
    email
      ? { label: "Bounced", value: st.bounced, color: "#f59e0b" }
      : { label: "Awaiting delivery", value: Math.max(0, st.sent - st.delivered), color: "#f59e0b" },
    { label: "Failed", value: st.failed, color: "#ef4444" },
  ];
  const extras: Slice[] = [
    { label: email ? "Opened" : "Read", value: st.opened, color: "#8b5cf6" },
    { label: "Replied", value: st.replied, color: "#ec4899" },
  ];
  return { triggered, segments, extras };
};