import { API_ROUTES } from "@/constants/ApiRoute";
import { mailAllContactInterface, mailAllCustomerInterface, mailAllDataInterface } from "./mail.interface";
import type {
  EmailComposePayload,
  EmailInboxQuery,
  EmailInboxStatus,
  EmailInboxSyncResult,
  EmailInboxUpdateResult,
  EmailMessageDetail,
  EmailMessageFlags,
  EmailMessagesPage,
  EmailReplyPayload,
  EmailSendOutcome,
  EmailSendResult,
} from "./mail.interface";

export const getMail = async () => {
  try {
    const response = await fetch(API_ROUTES.MASTERS.MAIL.GET_ALL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });


    // console.log("mail data ",data)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const getMailById = async (id: string) => {
  try {
    const response = await fetch(API_ROUTES.MASTERS.MAIL.GET_BY_ID(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const getFilteredMail = async (params: string) => {
  try {
    const response = await fetch(API_ROUTES.MASTERS.MAIL.GET_BY_PARAMS(params), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const addMail = async (data: mailAllDataInterface) => {
  try {
    const payload = { ...data, type: 'email' }
    const response = await fetch(API_ROUTES.MASTERS.MAIL.ADD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include"
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const updateMail = async (id: string, data: mailAllDataInterface) => {
  try {
    const response = await fetch(API_ROUTES.MASTERS.MAIL.UPDATE(id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const deleteMail = async (id: string) => {
  try {
    const response = await fetch(API_ROUTES.MASTERS.MAIL.DELETE(id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("SERVER ERROR: ", error);
    return null;
  }
};

export const emailAllCustomer = async (data: mailAllCustomerInterface) => {
  try {

    console.log("emailall customer data ", data)
    const response = await fetch(API_ROUTES.MASTERS.MAIL.MAILALL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("SERVER ERROR: ", error);
    return null;
  }
};

export const emailAllContact = async (data: mailAllContactInterface) => {
  try {

    console.log("emailall customer data ", data)
    const response = await fetch(API_ROUTES.MASTERS.MAIL.MAILALL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("SERVER ERROR: ", error);
    return null;
  }
};

export const emailCustomerViaAi = async (data: any) => {
  try {

    console.log("emailall customer data ", data)
    const response = await fetch(API_ROUTES.MASTERS.MAIL.SEND_EMAIL_VIA_AI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(" result is zoro", result)
    return result;
  } catch (error) {
    console.error("SERVER ERROR: ", error);
    return null;
  }
};






// connection api call for email


// ─────────────────────────────────────────────────────────────
// APPEND to the bottom of your existing mail api file
// (the one that already imports API_ROUTES). Types can also be
// moved into mail.interface.ts if you prefer.
//
// NOTE: unlike the older functions (which return null on any error),
// these return { ok, ... } so the UI can read the backend's 422 body
// (code / message / hint / needsAdvanced / tried[]).
// ─────────────────────────────────────────────────────────────

/* ---------- Types ---------- */
export type EmailErrorCode =
  | "AUTH_FAILED"
  | "APP_PASSWORD_REQUIRED"
  | "BASIC_AUTH_DISABLED"
  | "OAUTH_REQUIRED"
  | "UNSUPPORTED_PROVIDER"
  | "INVALID_DOMAIN"
  | "TLS_CERT_MISMATCH"
  | "UNREACHABLE";

export interface EmailConnection {
  connected: boolean;
  email?: string;
  fromName?: string;
  provider?: string;
  providerLabel?: string;
  smtp?: { host: string; port: number; secure: boolean };
  saveToSent?: boolean;
  sentFolder?: string | null;
  status?: "connected" | "failed" | string;
  lastVerifiedAt?: string | null;
  lastError?: string | null;
  updatedAt?: string;
}

export interface EmailAttempt {
  host: string;
  port: number;
  secure?: boolean;
  result: string; // ok | auth_failed | app_password_required | basic_auth_disabled | tls_cert | unreachable | blocked_private_address | dns_not_found
}

export interface EmailConnectionError {
  success: false;
  code?: EmailErrorCode;
  message: string;
  hint?: string;
  needsAdvanced?: boolean;
  provider?: string;
  providerLabel?: string;
  tried?: EmailAttempt[];
  connection?: EmailConnection; // present on a failed /verify
}

export interface EmailDetected {
  ok: boolean;
  provider: string;
  providerLabel: string;
  source: "registry" | "mx" | "autoconfig" | "guess" | "manual";
  smtp: { host: string; port: number; secure: boolean; user: string };
  imap: { host: string; port: number; secure: boolean; user: string } | null;
  saveToSent: boolean;
  sentFolder: string | null;
  warnings: string[];
}

export interface EmailConnectPayload {
  email: string;
  password: string;
  fromName?: string;
  advanced?: {
    smtpHost: string;
    smtpPort: number;
    smtpUser?: string;
    imapHost?: string;
    imapPort?: number;
  };
}

export type EmailConnectionResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number; error: EmailConnectionError };

/* ---------- Shared request helper ---------- */
async function emailConnectionRequest<T>(
  url: string,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  body?: unknown
): Promise<EmailConnectionResult<T>> {
  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      credentials: "include",
    });

    let json: any = null;
    try {
      json = await response.json();
    } catch {
      /* empty / non-JSON body */
    }

    if (response.ok && json?.success !== false) {
      return { ok: true, data: json as T };
    }

    return {
      ok: false,
      status: response.status,
      error: {
        success: false,
        code: json?.code,
        message:
          json?.message ||
          json?.connection?.lastError ||
          (response.status === 429
            ? "A connection check is already running. Please wait a moment."
            : `Request failed (HTTP ${response.status})`),
        hint: json?.hint,
        needsAdvanced: json?.needsAdvanced,
        provider: json?.provider,
        providerLabel: json?.providerLabel,
        tried: json?.tried,
        connection: json?.connection,
      },
    };
  } catch (error) {
    console.error("SERVER ERROR: ", error);
    return {
      ok: false,
      status: 0,
      error: { success: false, message: "Could not reach the server. Check your connection and try again." },
    };
  }
}

/* ---------- API calls ---------- */

/** Current saved mailbox (never includes the password). */
export const getEmailConnection = () =>
  emailConnectionRequest<{ success: true; connection: EmailConnection }>(
    API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION,
    "GET"
  );

/** Detect + verify only. Saves nothing. */
export const testEmailConnection = (payload: EmailConnectPayload) =>
  emailConnectionRequest<{ success: true; detected: EmailDetected }>(
    API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION_TEST,
    "POST",
    payload
  );

/** Sends a real email to the admin's own mailbox through their connected account. */
export const sendTestEmail = () =>
  emailConnectionRequest<{
    success: true;
    message: string;
    sentCopy: "saved" | "failed" | "skipped";
    sentCopyError?: string | null;
  }>(API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION_SEND_TEST, "POST");

/** Detect + verify + save (replaces any existing connection). */
export const connectEmail = (payload: EmailConnectPayload) =>
  emailConnectionRequest<{
    success: true;
    message: string;
    warnings: string[];
    connection: EmailConnection;
  }>(API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION, "POST", payload);

/** Re-check the saved mailbox (e.g. after a password change at the provider). */
export const verifyEmailConnection = () =>
  emailConnectionRequest<{ success: true; connection: EmailConnection }>(
    API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION_VERIFY,
    "POST"
  );

/** Disconnect — sending falls back to the default platform mailbox. */
export const disconnectEmail = () =>
  emailConnectionRequest<{ success: true; message: string; connection: EmailConnection }>(
    API_ROUTES.MASTERS.MAIL.EMAIL_CONNECTION,
    "DELETE"
  );




  //inbox api call for email

  // ─────────────────────────────────────────────────────────────
// APPEND to the bottom of MAIL.ts  (after disconnectEmail)
//
// Needs ONE small edit higher up in the same file: in emailConnectionRequest, widen
//     method: "GET" | "POST" | "DELETE"
// to
//     method: "GET" | "POST" | "PATCH" | "DELETE"
//
// Same { ok, data | error } result style as the email-connection calls above.
// ─────────────────────────────────────────────────────────────


const inboxQueryString = (p: EmailInboxQuery = {}) => {
  const s = new URLSearchParams();
  if (p.page) s.set("page", String(p.page));
  if (p.limit) s.set("limit", String(p.limit));
  if (p.unread) s.set("unread", "true");
  if (p.starred) s.set("starred", "true");
  if (p.q) s.set("q", p.q);
  const str = s.toString();
  return str ? `?${str}` : "";
};

/** Connected? has IMAP? unread count, last sync time / error. */
export const getEmailInboxStatus = () =>
  emailConnectionRequest<EmailInboxStatus>(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_STATUS, "GET");

/** "Refresh" button — waits up to ~20s, then keeps syncing in the background (pending:true). */
export const syncEmailInbox = () =>
  emailConnectionRequest<EmailInboxSyncResult>(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_SYNC, "POST");

export const listEmailMessages = (params?: EmailInboxQuery) =>
  emailConnectionRequest<EmailMessagesPage>(
    `${API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_MESSAGES}${inboxQueryString(params)}`,
    "GET"
  );

export const getEmailMessage = (id: string) =>
  emailConnectionRequest<EmailMessageDetail>(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_MESSAGE(id), "GET");

/** Single or bulk: mark read/unread, star/unstar. */
export const updateEmailMessages = (payload: { ids: string[] } & EmailMessageFlags) =>
  emailConnectionRequest<EmailInboxUpdateResult>(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_MESSAGES, "PATCH", payload);

/**
 * Downloads through fetch (not a plain <a href>) so the auth cookie is always sent,
 * even when the API is on another origin.
 */
export const downloadEmailAttachment = async (
  messageId: string,
  index: number,
  filename: string
): Promise<{ ok: boolean; message?: string }> => {
  try {
    const res = await fetch(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_ATTACHMENT(messageId, index), {
      credentials: "include",
    });
    if (!res.ok) {
      let message = `Download failed (HTTP ${res.status})`;
      try {
        message = (await res.json())?.message || message;
      } catch {
        /* non-JSON body */
      }
      return { ok: false, message };
    }
    const url = URL.createObjectURL(await res.blob());
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    return { ok: true };
  } catch {
    return { ok: false, message: "Could not reach the server. Check your connection and try again." };
  }
};



// compose email api call for email
/* ---------- compose / reply / progress ---------- */

// Separate from emailConnectionRequest on purpose: it must (a) send multipart without a JSON
// Content-Type header, and (b) keep the extra fields the backend returns on 409/422/429.
async function emailSendRequest(
  url: string,
  method: "GET" | "POST",
  body?: FormData | Record<string, unknown>
): Promise<EmailSendOutcome> {
  try {
    const isForm = typeof FormData !== "undefined" && body instanceof FormData;
    const response = await fetch(url, {
      method,
      headers: body && !isForm ? { "Content-Type": "application/json" } : undefined, // never set it for FormData
      body: body === undefined ? undefined : isForm ? (body as FormData) : JSON.stringify(body),
      credentials: "include",
    });

    let json: any = null;
    try { json = await response.json(); } catch { /* non-JSON body */ }

    if (response.ok && json?.success !== false) return { ok: true, data: json as EmailSendResult };

    return {
      ok: false,
      status: response.status,
      error: {
        success: false,
        message:
          json?.message ||
          (response.status === 413 ? "Attachments are too large." : `Request failed (HTTP ${response.status})`),
        activeBatchId: json?.activeBatchId,
        remaining: json?.remaining,
        limit: json?.limit,
        recipients: json?.recipients,
      },
    };
  } catch (error) {
    console.error("SERVER ERROR: ", error);
    return { ok: false, status: 0, error: { success: false, message: "Could not reach the server. Check your connection and try again." } };
  }
}

const sendForm = (fields: Record<string, string | undefined>, files: File[]) => {
  const fd = new FormData();
  Object.entries(fields).forEach(([k, v]) => v !== undefined && fd.append(k, v));
  files.forEach((f) => fd.append("attachments", f)); // field name the backend reads
  return fd;
};

/** Bulk compose: one personalised email per recipient, sent in the background. */
export const composeEmail = (p: EmailComposePayload) => {
  const messageIds = p.messageIds ?? [];
  const emails = p.emails ?? [];
  const body = p.files?.length
    ? sendForm({ subject: p.subject, body: p.body, templateId: p.templateId, messageIds: JSON.stringify(messageIds), emails: JSON.stringify(emails) }, p.files)
    : { subject: p.subject, body: p.body, templateId: p.templateId, messageIds, emails };
  return emailSendRequest(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_SEND, "POST", body);
};

/** Reply to one inbox message (threading headers are built server-side). */
export const replyToEmail = (p: EmailReplyPayload) => {
  const includeQuote = p.includeQuote ?? true;
  const body = p.files?.length
    ? sendForm({ messageId: p.messageId, body: p.body, subject: p.subject, templateId: p.templateId, includeQuote: String(includeQuote) }, p.files)
    : { messageId: p.messageId, body: p.body, subject: p.subject, templateId: p.templateId, includeQuote };
  return emailSendRequest(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_REPLY, "POST", body);
};

/** Poll while result.data.done === false. */
export const getEmailSendBatch = (id: string) =>
  emailSendRequest(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_BATCH(id), "GET");

export const cancelEmailSendBatch = (id: string) =>
  emailSendRequest(API_ROUTES.MASTERS.MAIL.EMAIL_INBOX_BATCH_CANCEL(id), "POST");