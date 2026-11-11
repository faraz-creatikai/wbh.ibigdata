/**
 * outreachcampaign.ts
 * Every call returns { ok: true, data } | { ok: false, error: { message, status? } }
 * (same style as your email channel api) so the UI never needs try/catch.
 */
import { API_ROUTES } from "@/constants/ApiRoute";
import type {
  ApiResult,
  CampaignDetail,
  CampaignPayload,
  CampaignQuery,
  CampaignRun,
  CampaignSaveResponse,
  CampaignSchedule,
  CampaignListItem,
  CustomerFilters,
  CustomerLite,
  CustomerPage,
  Paginated,
  RunDetailResponse,
  RunLogQuery,
  RunStartResponse,
  SchedulePayload,
  TemplateItem,
  TemplateKind,
  TemplateQuery,
} from "./outreachcampaign.interface";

const R = API_ROUTES.OUTREACHCAMPAIGN;

/* ───────────────────────── helpers ───────────────────────── */

/** Builds a query string and drops empty values. */
const qs = (obj: Record<string, string | number | boolean | null | undefined>) => {
  const p = new URLSearchParams();
  Object.entries(obj).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    const s = String(v).trim();
    if (s !== "") p.set(k, s);
  });
  return p.toString();
};

const NETWORK_ERROR = "Couldn't reach the server. Check your connection and try again.";

const messageFrom = (body: any, status: number) =>
  body?.message || body?.error || `Request failed (${status})`;

async function request<T>(url: string, opts: { method?: string; body?: unknown } = {}): Promise<ApiResult<T>> {
  const hasBody = opts.body !== undefined;
  try {
    const res = await fetch(url, {
      method: opts.method ?? "GET",
      credentials: "include",
      headers: hasBody ? { "Content-Type": "application/json" } : undefined,
      body: hasBody ? JSON.stringify(opts.body) : undefined,
    });
    const json = await res.json().catch(() => null);
    if (!res.ok) return { ok: false, error: { message: messageFrom(json, res.status), status: res.status } };
    return { ok: true, data: json as T };
  } catch (err) {
    console.log("SERVER ERROR: ", err);
    return { ok: false, error: { message: NETWORK_ERROR } };
  }
}

/* ───────────────────────── campaigns (CRUD) ───────────────────────── */

export const getCampaigns = (q: CampaignQuery = {}) =>
  request<Paginated<CampaignListItem>>(
    R.GET_BY_PARAMS(
      qs({
        page: q.page ?? 1,
        limit: q.limit ?? 10,
        search: q.search,
        channel: Array.isArray(q.channel) ? q.channel.join(",") : q.channel,
      })
    )
  );

export const getCampaignById = (id: string) =>
  request<{ success: boolean; data: CampaignDetail }>(R.GET_BY_ID(id));

export const createCampaign = (payload: CampaignPayload) =>
  request<CampaignSaveResponse>(R.ADD, { method: "POST", body: payload });

/** PUT expects the full form, same body as create. */
export const updateCampaign = (id: string, payload: CampaignPayload) =>
  request<CampaignSaveResponse>(R.UPDATE(id), { method: "PUT", body: payload });

export const deleteCampaign = (id: string) =>
  request<{ success: boolean; message: string }>(R.DELETE(id), { method: "DELETE" });

/* ───────────────────────── runs + reports ───────────────────────── */

export const runCampaign = (id: string) =>
  request<RunStartResponse>(R.RUN(id), { method: "POST" });

export const getCampaignRuns = (id: string, q: { page?: number; limit?: number } = {}) =>
  request<Paginated<CampaignRun>>(R.RUNS(id, qs({ page: q.page ?? 1, limit: q.limit ?? 10 })));

/** Poll this every few seconds while run.status === "running". */
export const getCampaignRun = (id: string, runId: string, q: RunLogQuery = {}) =>
  request<RunDetailResponse>(
    R.RUN_BY_ID(id, runId, qs({ channel: q.channel, status: q.status, page: q.page ?? 1, limit: q.limit ?? 50 }))
  );

export const cancelCampaignRun = (id: string, runId: string) =>
  request<{ success: boolean; run: CampaignRun }>(R.CANCEL_RUN(id, runId), { method: "POST" });

/* ───────────────────────── schedules ───────────────────────── */

export const listSchedules = (id: string) =>
  request<{ success: boolean; data: CampaignSchedule[] }>(R.SCHEDULES(id));

export const createSchedule = (id: string, payload: SchedulePayload) =>
  request<{ success: boolean; data: CampaignSchedule }>(R.SCHEDULES(id), { method: "POST", body: payload });

/** Send only what changed. { enabled: false } is the on/off switch. */
export const updateSchedule = (id: string, scheduleId: string, payload: Partial<SchedulePayload>) =>
  request<{ success: boolean; data: CampaignSchedule }>(R.SCHEDULE_BY_ID(id, scheduleId), { method: "PUT", body: payload });

export const deleteSchedule = (id: string, scheduleId: string) =>
  request<{ success: boolean; message: string }>(R.SCHEDULE_BY_ID(id, scheduleId), { method: "DELETE" });

/* ───────────────────────── picker data: customers ───────────────────────── */

const str = (v: unknown) => (v === null || v === undefined ? "" : String(v));

const toCustomerLite = (c: any): CustomerLite => ({
  id: str(c.id ?? c._id),
  customerName: str(c.customerName),
  ContactNumber: str(c.ContactNumber),
  CountryCode: str(c.CountryCode),
  Email: str(c.Email),
  City: str(c.City),
  Campaign: str(c.Campaign),
  LeadTemperature: str(c.LeadTemperature),
  LeadType: str(c.LeadType),
  CustomerType: str(c.CustomerType),
});

/**
 * One page of customers for the picker, using the same GET /customer endpoint and filters as your customer screen.
 * Not using getFilteredCustomer() on purpose: it returns only the body, but the page count lives in the
 * X-Total-Count response header. If that header isn't readable, `total` is null and the pager falls back to next/previous.
 */
export const fetchCustomerPage = async (
  filters: CustomerFilters,
  page: number,
  limit: number
): Promise<ApiResult<CustomerPage>> => {
  const skip = (page - 1) * limit;
  const params = qs({
    Keyword: filters.keyword,
    City: filters.city,
    Campaign: filters.campaign,
    CustomerType: filters.customerType,
    LeadTemperature: filters.leadTemperature,
    LeadType: filters.leadType,
    StatusType: filters.statusType,
    StartDate: filters.startDate,
    EndDate: filters.endDate,
    isFavourite: filters.isFavourite ? "true" : undefined,
    sort: filters.sort === "asc" ? "asc" : undefined,
    Limit: limit,
    Skip: skip,
  });

  try {
    const res = await fetch(API_ROUTES.CUSTOMER.GET_BY_PARAMS(params), { credentials: "include" });
    const body = await res.json().catch(() => null);
    if (!res.ok) return { ok: false, error: { message: messageFrom(body, res.status), status: res.status } };

    const items = (Array.isArray(body) ? body : []).map(toCustomerLite).filter((c) => c.id);
    const header = res.headers.get("X-Total-Count");
    const parsed = header !== null && header.trim() !== "" ? Number(header) : NaN;
    const total = Number.isFinite(parsed) ? parsed : null;

    return {
      ok: true,
      data: { items, total, hasMore: total !== null ? skip + items.length < total : items.length === limit },
    };
  } catch (err) {
    console.log("SERVER ERROR: ", err);
    return { ok: false, error: { message: NETWORK_ERROR } };
  }
};

/* ───────────────────────── picker data: templates ───────────────────────── */

/**
 * One page of templates for the picker. Uses the same routes as getFilteredMail / getFilteredWhatsapp.
 * NOTE: if your MASTERS.MAIL / MASTERS.WHATSAPP GET_BY_PARAMS routes already add `type=` themselves,
 * delete the `type` line below to avoid sending it twice.
 */
export const fetchTemplatePage = (kind: TemplateKind, q: TemplateQuery = {}) => {
  const params = qs({
    type: kind,
    search: q.search,
    page: q.page ?? 1,
    limit: q.limit ?? 6,
    status: q.includeInactive ? undefined : "Active",
  });
  const url =
    kind === "email" ? API_ROUTES.MASTERS.MAIL.GET_BY_PARAMS(params) : API_ROUTES.MASTERS.WHATSAPP.GET_BY_PARAMS(params);
  return request<Paginated<TemplateItem>>(url);
};