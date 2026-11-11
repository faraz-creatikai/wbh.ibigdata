/**
 * channeltracking.ts
 * Channel-level numbers for the Overview tabs (email + WhatsApp Baileys).
 * Returns { ok: true, data } | { ok: false, error: { message, status? } } so the UI never needs try/catch.
 */
import { API_ROUTES } from "@/constants/ApiRoute";
import type { ApiResult } from "@/store/masters/outreachcampaign/outreachcampaign.interface";

const R = API_ROUTES.CHANNELTRACKING;

export type TrackedChannel = "email" | "whatsapp_baileys";

export interface ChannelStats {
  sent: number;
  failed: number;
  bounced: number; // email only (stays 0 for WhatsApp)
  delivered: number; // email: sent minus bounced. WhatsApp: real delivery receipts
  opened: number; // email: pixel opens (approximate). WhatsApp: read receipts
  replied: number;
}

export const EMPTY_STATS: ChannelStats = { sent: 0, failed: 0, bounced: 0, delivered: 0, opened: 0, replied: 0 };

const NETWORK_ERROR = "Couldn't reach the server. Check your connection and try again.";

/** GET /channel-tracking/stats?channel=email&days=30 */
export const getChannelStats = async (channel: TrackedChannel, days = 30): Promise<ApiResult<ChannelStats>> => {
  try {
    const res = await fetch(R.STATS(new URLSearchParams({ channel, days: String(days) }).toString()), {
      method: "GET",
      credentials: "include",
    });
    const json = await res.json().catch(() => null);
    if (!res.ok) {
      return { ok: false, error: { message: json?.message || json?.error || `Request failed (${res.status})`, status: res.status } };
    }
    return { ok: true, data: { ...EMPTY_STATS, ...(json?.data ?? {}) } as ChannelStats };
  } catch (err) {
    console.log("SERVER ERROR: ", err);
    return { ok: false, error: { message: NETWORK_ERROR } };
  }
};