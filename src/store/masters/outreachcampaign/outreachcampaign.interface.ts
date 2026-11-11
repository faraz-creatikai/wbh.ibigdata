/**
 * outreachcampaign.interface.ts
 * Types + small constants/helpers shared by the campaign API file and UI.
 * Mirrors the Prisma models and controller responses of the outreach campaign backend.
 */

/* ───────────────────────── generic ───────────────────────── */

export type ApiError = { message: string; status?: number };
export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

export interface Paginated<T> {
  success: boolean;
  total: number;
  currentPage: number;
  totalPages: number;
  data: T[];
}

/* ───────────────────────── campaign ───────────────────────── */

export type CampaignChannel = "email" | "whatsapp_baileys" | "whatsapp_meta" | "ai_calling";
export type CampaignStatus = "active" | "paused";
export type TemplateKind = "email" | "whatsapp";

/** Which channel page is opening the dialog. "all" = multi-channel campaigns. */
export type CampaignScope = "email" | "whatsapp" | "all";

export interface ChannelInfo {
  id: CampaignChannel;
  label: string;
  description: string;
  kind: "email" | "whatsapp" | "call";
  /** false = saved fine, but the backend skips it when running ("coming soon") */
  runnable: boolean;
}

export const CAMPAIGN_CHANNELS: ChannelInfo[] = [
  { id: "email", label: "Email", description: "Sent from your connected mailbox", kind: "email", runnable: true },
  { id: "whatsapp_baileys", label: "WhatsApp (QR session)", description: "Sent from your linked WhatsApp number", kind: "whatsapp", runnable: true },
  { id: "whatsapp_meta", label: "WhatsApp (Meta Cloud API)", description: "Official WhatsApp Business API", kind: "whatsapp", runnable: false },
  { id: "ai_calling", label: "AI calling", description: "Automated voice calls by an AI agent", kind: "call", runnable: false },
];

/** Same cap as MAX_CAMPAIGN_CUSTOMERS in controller.outreachCampaign.js */
export const MAX_CAMPAIGN_CUSTOMERS = 500;

export const channelsForScope = (scope: CampaignScope): CampaignChannel[] => {
  if (scope === "email") return ["email"];
  if (scope === "whatsapp") return ["whatsapp_baileys", "whatsapp_meta"];
  return CAMPAIGN_CHANNELS.map((c) => c.id);
};

export const defaultChannelsForScope = (scope: CampaignScope): CampaignChannel[] =>
  scope === "email" ? ["email"] : scope === "whatsapp" ? ["whatsapp_baileys"] : [];

/** True if the campaign uses at least one channel of the given scope (used to split lists per channel page). */
export const campaignMatchesScope = (c: { channels: CampaignChannel[] }, scope: CampaignScope) =>
  scope === "all" || c.channels.some((ch) => channelsForScope(scope).includes(ch));

export interface TemplateRef {
  id: string;
  name: string;
}

/** Row returned by GET /campaigns (list) and by create/update. */
export interface CampaignListItem {
  id: string;
  name: string;
  description: string;
  status: CampaignStatus;
  channels: CampaignChannel[];
  emailTemplateId: string | null;
  whatsappTemplateId: string | null;
  aiAgentId: string | null;
  customerCount: number;
  lastRunAt: string | null;
  createdAt: string;
  updatedAt: string;
  emailTemplate: TemplateRef | null;
  whatsappTemplate: TemplateRef | null;
  createdBy: { id: string; name: string };
  _count: { schedules: number; runs: number };
}

/** GET /campaigns/:id — same as the list row plus the customer ids (for the edit form). */
export interface CampaignDetail extends CampaignListItem {
  customerIds: string[];
}

/** Body for POST /campaigns and PUT /campaigns/:id (PUT expects the full form). */
export interface CampaignPayload {
  name: string;
  description?: string | null;
  channels: CampaignChannel[];
  emailTemplateId?: string | null;
  whatsappTemplateId?: string | null;
  aiAgentId?: string | null;
  customerIds: string[];
  status?: CampaignStatus;
}

export interface CampaignSaveResponse {
  success: boolean;
  /** ids that were unknown or not visible to this admin and were dropped */
  removedCustomers: number;
  data: CampaignListItem;
}

export interface CampaignQuery {
  page?: number;
  limit?: number;
  search?: string;
  /** Needs the small backend filter described in the notes; ignored by the current backend. */
   channel?: CampaignChannel | CampaignChannel[];
}

/* ───────────────────────── runs ───────────────────────── */

export type RunStatus = "running" | "completed" | "failed" | "cancelled";
export type LogStatus = "sent" | "failed" | "skipped";

export interface ChannelCounts {
  sent: number;
  failed: number;
  skipped: number;
}

export type RunSummary = Partial<Record<CampaignChannel, ChannelCounts>> & {
  notRun?: CampaignChannel[];
  unavailableCustomers?: number;
};

export interface CampaignRun {
  id: string;
  campaignId: string;
  trigger: "manual" | "scheduled";
  status: RunStatus;
  totalCustomers: number;
  summary: RunSummary | null;
  error: string | null;
  startedAt: string;
  finishedAt: string | null;
}

export interface RunLogItem {
  id: string;
  customerId: string;
  customerName: string;
  contactNumber: string | null;
  email: string | null;
  channel: CampaignChannel;
  status: LogStatus;
  detail: string | null;
  createdAt: string;
}

export interface RunDetailResponse {
  success: boolean;
  run: CampaignRun;
  logs: { total: number; page: number; limit: number; totalPages: number; items: RunLogItem[] };
}

export interface RunStartResponse {
  success: boolean;
  warning?: string;
  run: CampaignRun;
}

export interface RunLogQuery {
  channel?: CampaignChannel;
  status?: LogStatus;
  page?: number;
  limit?: number;
}

/* ───────────────────────── schedules ───────────────────────── */

export interface CampaignSchedule {
  id: string;
  campaignId: string;
  label: string;
  time: string; // "HH:mm" 24h
  days: number[]; // 0 = Sunday … 6 = Saturday, [] = once
  timezone: string;
  enabled: boolean;
  nextRunAt: string | null;
  lastRunAt: string | null;
  lastRunStatus: "started" | "skipped_paused" | "skipped_running" | "missed" | "failed" | null;
  lastError: string | null;
  createdAt: string;
}

export interface SchedulePayload {
  label?: string | null;
  time: string;
  days: number[];
  timezone?: string | null;
  enabled?: boolean;
}

/* ───────────────────────── customer picker ───────────────────────── */

/** The fields the picker needs from GET /customer (everything else is ignored). */
export interface CustomerLite {
  id: string;
  customerName: string;
  ContactNumber: string;
  CountryCode: string;
  Email: string;
  City: string;
  Campaign: string;
  LeadTemperature: string;
  LeadType: string;
  CustomerType: string;
}

/**
 * Selected customers across all pages. Value is null for ids that came from a saved campaign
 * (edit mode) and haven't been seen in the list yet — they are filled in as the user browses.
 */
export type SelectedCustomers = Map<string, CustomerLite | null>;

export interface CustomerFilters {
  keyword: string;
  city: string;
  campaign: string;
  customerType: string;
  leadTemperature: string;
  leadType: string;
  statusType: string;
  startDate: string; // YYYY-MM-DD (backend needs BOTH dates)
  endDate: string;
  isFavourite: boolean;
  sort: "asc" | "desc";
}

export const EMPTY_CUSTOMER_FILTERS: CustomerFilters = {
  keyword: "",
  city: "",
  campaign: "",
  customerType: "",
  leadTemperature: "",
  leadType: "",
  statusType: "",
  startDate: "",
  endDate: "",
  isFavourite: false,
  sort: "desc",
};

export interface CustomerPage {
  items: CustomerLite[];
  /** from the X-Total-Count header; null when the header isn't readable (CORS) */
  total: number | null;
  hasMore: boolean;
}

/* ───────────────────────── template picker ───────────────────────── */

export interface TemplateItem {
  id: string;
  name: string;
  type: TemplateKind;
  subject: string;
  body: string;
  description: string;
  status: "Active" | "Inactive";
  category?: string | null;
  variables?: string[] | null;
  whatsappImage?: string[] | null;
  whatsappMediaType?: "image" | "video" | "document" | "none" | null;
  whatsappFileName?: string | null;
  whatsappPoll?: { name: string; options?: string[] } | null;
  whatsappLocation?: { lat: number; lng: number; name?: string; address?: string } | null;
  updatedAt?: string;
}

export interface TemplateQuery {
  search?: string;
  page?: number;
  limit?: number;
  /** false (default) asks the backend for Active templates only (needs the small backend filter in the notes) */
  includeInactive?: boolean;
}