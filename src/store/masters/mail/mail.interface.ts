export interface mailAllDataInterface {
    name: string;
    subject: string;
    body: string;
    status: string;
}

export interface mailGetDataInterface {
    _id: string;
    name: string;
    status?: string;
    body?:string;
}
export interface mailAllCustomerInterface {
    templateId: string,
    customerIds: string[]
}
export interface mailAllContactInterface {
    templateId: string,
    contactIds: string[]
}
export interface mailDialogDataInterface {
    id: string;
    name: string;
    status: string;
}




// ─────────────────────────────────────────────────────────────
// PASTE into mail.interface.ts  (types for the email INBOX)
// ─────────────────────────────────────────────────────────────

export interface EmailAddress {
  name: string;
  address: string;
}

export interface EmailAttachmentMeta {
  index: number; // position used by the download endpoint
  filename: string;
  contentType: string;
  size: number; // bytes
  inline: boolean; // true = embedded image (cid) — not shown as a downloadable file
}

/** CRM lead matched by the sender's email (only leads this admin is allowed to see). */
export interface EmailInboxCustomer {
  id: string;
  name: string;
}

export interface EmailMessageFlags {
  isRead?: boolean;
  isStarred?: boolean;
}

/** GET /email/inbox/status */
export interface EmailInboxStatus {
  success: true;
  connected: boolean; // a mailbox is saved and active
  available: boolean; // ...and it has IMAP details (false => reconnect once)
  email: string | null;
  unread: number;
  lastSyncAt: string | null;
  lastError: string | null;
}

/** One row of the message list (no body). */
export interface EmailMessageSummary {
  id: string;
  threadKey: string;
  fromEmail: string;
  fromName: string | null;
  subject: string;
  snippet: string;
  date: string; // ISO
  isRead: boolean;
  isStarred: boolean;
  hasAttachments: boolean;
  customer: EmailInboxCustomer | null;
}

/** Thread rows come back without the CRM tag. */
export type EmailThreadItem = Omit<EmailMessageSummary, "customer">;

/** Full message (GET /email/inbox/messages/:id). */
export interface EmailMessageFull extends EmailMessageSummary {
  messageId: string | null; // RFC Message-ID — needed later for replies (In-Reply-To)
  refs: string | null; // space-separated References — needed later for replies
  toList: EmailAddress[];
  ccList: EmailAddress[];
  bodyText: string | null;
  bodyHtml: string | null; // already sanitized by the backend
  attachments: EmailAttachmentMeta[];
}

export interface EmailInboxQuery {
  page?: number;
  limit?: number;
  unread?: boolean;
  starred?: boolean;
  q?: string;
}

export interface EmailMessagesPage {
  success: true;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  messages: EmailMessageSummary[];
}

export interface EmailMessageDetail {
  success: true;
  message: EmailMessageFull;
  thread: EmailThreadItem[]; // other messages of the same conversation
}

/** POST /email/inbox/sync */
export interface EmailInboxSyncResult {
  success: boolean;
  added?: number;
  skipped?: string; // "busy" | "inbox_unavailable"
  pending?: boolean; // still running in the background after 20s
  throttled?: boolean; // synced < 10s ago
}

export interface EmailInboxUpdateResult {
  success: true;
  updated: number;
}



// compose interface for email

export type EmailSendKind = "compose" | "reply";
export type EmailSendStatus = "queued" | "sending" | "done" | "failed" | "cancelled";
export type EmailRecipientStatus = "queued" | "sending" | "sent" | "failed" | "skipped";

export interface EmailSendRecipient {
  email: string;
  name: string;
  status: EmailRecipientStatus;
  reason?: string; // duplicate | invalid_address | own_address | no_reply_address | message_not_found | cancelled | batch_stopped
  error?: string;
  lead: boolean; // matched a CRM lead (placeholders were filled from it)
}

export interface EmailSendBatch {
  id: string;
  kind: EmailSendKind;
  status: EmailSendStatus;
  subject: string;
  total: number;
  sent: number;
  failed: number;
  skipped: number;
  pending: number;
  error: string | null;
  createdAt: string;
  finishedAt: string | null;
  recipients: EmailSendRecipient[];
}

/** Success body of send / reply / batch status / cancel. done=false => keep polling batch.id */
export interface EmailSendResult {
  success: true;
  done: boolean;
  batch: EmailSendBatch;
}

export interface EmailSendError {
  success: false;
  message: string;
  activeBatchId?: string; // 409: another bulk send is running -> resume polling it
  remaining?: number; // 429: emails left in the daily limit
  limit?: number;
  recipients?: EmailSendRecipient[]; // 422: why nobody could be emailed
}

export type EmailSendOutcome =
  | { ok: true; data: EmailSendResult }
  | { ok: false; status: number; error: EmailSendError };

export interface EmailComposePayload {
  subject: string; // may contain {{placeholders}}
  body: string; // HTML, may contain {{placeholders}}
  messageIds?: string[]; // inbox message ids (recipients = their senders)
  emails?: string[]; // extra typed addresses
  files?: File[]; // max 5, 20 MB total
  templateId?: string;
}

export interface EmailReplyPayload {
  messageId: string;
  body: string;
  subject?: string;
  includeQuote?: boolean; // default true
  files?: File[];
  templateId?: string;
}