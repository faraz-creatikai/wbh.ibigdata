// Shared fetch helper for the hosted Node backend (journey routes).
// Every journey controller replies { success, message?, data? }.

// Not used while auth is cookie-based (credentials: "include" below).
// Kept in case something still imports it.
export const getAuthHeaders = (): Record<string, string> => {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiResult = any;

async function send(url: string, options: RequestInit): Promise<ApiResult> {
  const response = await fetch(url, {
    cache: "no-store",
    ...options,
    headers: {
      // Only when there is a body. Sending Content-Type on a GET turns it into
      // a "non-simple" CORS request and the browser adds an extra OPTIONS call.
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers ?? {}),
    },
    credentials: "include",
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    // Test runs report the real reason in `error`, everything else in `message`.
    throw new Error(
      result?.error || result?.message || "Request failed. Please try again."
    );
  }

  return result;
}

// Identical GETs that are still in flight share ONE network request. This
// covers React Strict Mode running effects twice in `next dev`, and two
// components asking for the same URL at the same moment.
const inflightGets = new Map<string, Promise<ApiResult>>();

export function apiRequest(
  url: string,
  options: RequestInit = {}
): Promise<ApiResult> {
  const method = (options.method ?? "GET").toUpperCase();

  // Never share writes (POST / PUT / PATCH / DELETE).
  if (method !== "GET") return send(url, options);

  const existing = inflightGets.get(url);
  if (existing) return existing;

  const request = send(url, options).finally(() => inflightGets.delete(url));
  inflightGets.set(url, request);
  return request;
}