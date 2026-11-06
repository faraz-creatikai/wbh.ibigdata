'use client';
/**
 * Compose / reply window — e.g. app/component/email/EmailComposeModal.tsx
 *
 *  mode="compose": bulk send. Recipients = the inbox messages the admin ticked (their senders)
 *                  plus any typed addresses. Every recipient gets their own personalised email.
 *  mode="reply":   one reply to `replyTo`. Threading headers are built by the server.
 *
 * Flow: edit -> send (server queues a batch) -> progress view (polls every 2s, can cancel)
 *       -> result. Closing the window while a bulk send runs does NOT stop it.
 *
 * The message editor is a sandboxed iframe in designMode: no scripts can ever run inside it,
 * even if a template contains `<img onerror=...>`.
 */
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
    cancelEmailSendBatch,
    composeEmail,
    getEmailSendBatch,
    replyToEmail,
} from '@/store/masters/mail/mail';
import type {
    EmailMessageFull,
    EmailSendBatch,
    EmailSendOutcome,
    EmailSendRecipient,
    EmailSendResult,
} from '@/store/masters/mail/mail.interface';
import EmailTemplatePicker, { type PickedTemplate } from './EmailTemplatePicker';

export type ComposeRecipient = { messageId: string; email: string; name: string };

type Props = {
    isOpen: boolean;
    onClose: () => void;
    mode: 'compose' | 'reply';
    recipients?: ComposeRecipient[]; // compose: the ticked inbox messages
    replyTo?: EmailMessageFull | null; // reply: the message being answered
    onFinished?: () => void; // a send finished: parent clears its selection / refreshes
};

// keep in sync with the SETTINGS block of controller.emailCompose.js
const MAX_RECIPIENTS = 500;
const MAX_FILES = 5;
const MAX_ATTACH_BYTES = 20 * 1024 * 1024;
const POLL_MS = 2000;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PLACEHOLDERS = ['Name', 'City', 'Campaign', 'ContactNumber', 'Email'];

const REASONS: Record<string, string> = {
    duplicate: 'Duplicate address',
    invalid_address: 'Invalid address',
    own_address: 'Your own address',
    no_reply_address: 'No-reply address',
    message_not_found: 'Message not found',
    cancelled: 'Cancelled before sending',
    batch_stopped: 'Not sent because the send stopped',
};

const extOf = (n: string) => (n.match(/\.[A-Za-z0-9]{1,6}$/) || [''])[0];

/** Downloads the template's file(s) in the browser so they go out like any manually attached file. */
const loadTemplateFiles = async (media: NonNullable<PickedTemplate['media']>): Promise<File[]> => {
    const out: File[] = [];
    for (const [i, url] of media.urls.entries()) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        let last = '';
        try { last = decodeURIComponent(url.split('?')[0].split('/').pop() || ''); } catch { /* keep "" */ }
        let name = (media.kind === 'document' && media.urls.length === 1 && media.fileName) || last || `template-file-${i + 1}`;
        if (!extOf(name) && extOf(last)) name += extOf(last); // "Brochure" -> "Brochure.pdf"
        out.push(new File([blob], name, { type: blob.type || 'application/octet-stream' }));
    }
    return out;
};

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
const reSubject = (s: string) => (/^\s*(re|aw|sv)\s*:/i.test(s || '') ? s : `Re: ${s || ''}`.trim());
const fileSize = (n: number) =>
    n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : n >= 1024 ? `${Math.round(n / 1024)} KB` : `${n} B`;

const ICONS = {
    close: 'M6 18 18 6M6 6l12 12',
    clip: 'm21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7',
    layout: 'M3 3h18v18H3zM3 9h18M9 21V9',
} as const;
const Ico = ({ name, className = 'h-4 w-4' }: { name: keyof typeof ICONS; className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={ICONS[name]} />
    </svg>
);

/* ───────────────────────────── message editor ───────────────────────────── */

type EditorHandle = {
    getHtml: () => string;
    setHtml: (html: string) => void;
    isEmpty: () => boolean;
    insertText: (text: string) => void;
    exec: (cmd: string, value?: string) => void;
};

const EDITOR_DOC =
    `<!doctype html><html><head><meta charset="utf-8"><style>` +
    `html{height:100%}body{margin:0;padding:12px 14px;min-height:100%;box-sizing:border-box;outline:none;` +
    `font:14px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;color:#0f172a;overflow-wrap:anywhere}` +
    `img{max-width:100%;height:auto}a{color:#2563eb}blockquote{margin:0 0 0 4px;padding-left:12px;border-left:3px solid #e2e8f0;color:#475569}` +
    `</style></head><body></body></html>`;

const RichEditor = React.forwardRef<EditorHandle>(function RichEditor(_props, ref) {
    const frame = useRef<HTMLIFrameElement>(null);
    const pending = useRef<string | null>(null); // html set before the iframe finished loading
    const doc = () => frame.current?.contentDocument ?? null;

    useImperativeHandle(ref, () => ({
        getHtml: () => doc()?.body?.innerHTML ?? '',
        setHtml: (html) => {
            const d = doc();
            if (d?.body) d.body.innerHTML = html;
            else pending.current = html;
        },
        isEmpty: () => {
            const b = doc()?.body;
            return !b || ((b.textContent || '').trim() === '' && !b.querySelector('img'));
        },
        insertText: (text) => {
            const d = doc();
            if (!d) return;
            frame.current?.contentWindow?.focus();
            d.execCommand('insertText', false, text);
        },
        exec: (cmd, value) => {
            const d = doc();
            if (!d) return;
            frame.current?.contentWindow?.focus();
            d.execCommand(cmd, false, value);
        },
    }));

    return (
        <iframe
            ref={frame}
            title="Message"
            sandbox="allow-same-origin" // no allow-scripts: NEVER add it
            srcDoc={EDITOR_DOC}
            className="h-full w-full border-0 bg-white"
            onLoad={() => {
                const d = doc();
                if (!d) return;
                d.designMode = 'on';
                if (pending.current !== null && d.body) {
                    d.body.innerHTML = pending.current;
                    pending.current = null;
                }
            }}
        />
    );
});

/* ───────────────────────────── main component ───────────────────────────── */

export default function EmailComposeModal({ isOpen, onClose, mode, recipients, replyTo, onFinished }: Props) {
    const editor = useRef<EditorHandle>(null);
    const fileInput = useRef<HTMLInputElement>(null);
    const onFinishedRef = useRef(onFinished);
    onFinishedRef.current = onFinished;
    const finishedFor = useRef<string | null>(null);

    const [picked, setPicked] = useState<ComposeRecipient[]>([]);
    const [typed, setTyped] = useState<string[]>([]);
    const [typedInput, setTypedInput] = useState('');
    const [typedError, setTypedError] = useState('');
    const [subject, setSubject] = useState('');
    const [template, setTemplate] = useState<PickedTemplate | null>(null);
    const [useTplMedia, setUseTplMedia] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const [attachError, setAttachError] = useState('');
    const [includeQuote, setIncludeQuote] = useState(true);
    const [pickerOpen, setPickerOpen] = useState(false);

    const [phase, setPhase] = useState<'edit' | 'sending' | 'done'>('edit');
    const [batch, setBatch] = useState<EmailSendBatch | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [cancelling, setCancelling] = useState(false);
    const [error, setError] = useState('');
    const [blocked, setBlocked] = useState<EmailSendRecipient[] | null>(null);
    const [notice, setNotice] = useState('');

    const isReply = mode === 'reply';

    /* ---------- open / close ---------- */
    useEffect(() => {
        if (!isOpen) {
            setPicked([]); setTyped([]); setTypedInput(''); setTypedError('');
            setSubject(''); setTemplate(null); setUseTplMedia(true);
            setFiles([]); setAttachError(''); setIncludeQuote(true); setPickerOpen(false);
            setPhase('edit'); setBatch(null); setSubmitting(false); setCancelling(false);
            setError(''); setBlocked(null); setNotice('');
            finishedFor.current = null;
            return;
        }
        // one chip per sender, even if several of their messages were ticked
        const seen = new Set<string>();
        setPicked(
            (recipients ?? []).filter((r) => {
                const k = r.email.toLowerCase();
                if (seen.has(k)) return false;
                seen.add(k);
                return true;
            })
        );
        setSubject(isReply && replyTo ? reSubject(replyTo.subject) : '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    /* ---------- progress polling ---------- */
    const markFinished = (id: string) => {
        if (finishedFor.current === id) return;
        finishedFor.current = id;
        onFinishedRef.current?.();
    };

    useEffect(() => {
        if (phase !== 'sending' || !batch?.id) return;
        const id = batch.id;
        let stop = false;
        let timer: ReturnType<typeof setTimeout>;
        const tick = async () => {
            const r = await getEmailSendBatch(id);
            if (stop) return;
            if (r.ok) {
                setBatch(r.data.batch);
                if (r.data.done) {
                    setPhase('done');
                    markFinished(id);
                    return;
                }
            }
            timer = setTimeout(tick, POLL_MS); // network hiccup: just try again
        };
        timer = setTimeout(tick, POLL_MS);
        return () => { stop = true; clearTimeout(timer); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase, batch?.id]);

    /* ---------- derived ---------- */
    const tplMediaCount = template?.media && useTplMedia ? template.media.count : 0;
    const recipientCount = picked.length + typed.length;

    const placeholdersHint =
        'Placeholders are filled in per person. {{Name}} falls back to the name in their email header; the others stay blank unless they are a CRM lead.';

    /* ---------- recipients (compose) ---------- */
    const commitTyped = (raw: string) => {
        const parts = raw.split(/[,;\s]+/).map((p) => p.trim().toLowerCase()).filter(Boolean);
        if (!parts.length) return;
        const known = new Set([...picked.map((p) => p.email.toLowerCase()), ...typed]);
        const add: string[] = [];
        const bad: string[] = [];
        for (const p of parts) {
            if (!EMAIL_RE.test(p)) bad.push(p);
            else if (!known.has(p)) { known.add(p); add.push(p); }
        }
        if (recipientCount + add.length > MAX_RECIPIENTS) {
            setTypedError(`At most ${MAX_RECIPIENTS} recipients per send.`);
            return;
        }
        if (add.length) setTyped((t) => [...t, ...add]);
        setTypedInput(bad.join(' '));
        setTypedError(bad.length ? `Not a valid email address: ${bad.join(', ')}` : '');
    };

    /* ---------- attachments ---------- */
    const addFiles = (list: FileList | null) => {
        if (!list?.length) return;
        const next = [...files];
        for (const f of Array.from(list)) {
            if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f);
        }
        if (next.length + tplMediaCount > MAX_FILES) {
            setAttachError(`You can attach at most ${MAX_FILES} files${tplMediaCount ? ' (the template’s file counts too)' : ''}.`);
            return;
        }
        if (next.reduce((n, f) => n + f.size, 0) > MAX_ATTACH_BYTES) {
            setAttachError(`Attachments are too large (max ${MAX_ATTACH_BYTES / 1024 / 1024} MB in total).`);
            return;
        }
        setAttachError('');
        setFiles(next);
    };

    /* ---------- template ---------- */
    const applyTemplate = (t: PickedTemplate) => {
        const hasDraft = !editor.current?.isEmpty() || (!isReply && subject.trim() !== '');
        if (hasDraft && !window.confirm('Replace what you have written with this template?')) return;
        if (!isReply) setSubject(t.subject);
        editor.current?.setHtml(t.body);
        setTemplate(t);
        setUseTplMedia(!!t.media);
        setAttachError('');
        setPickerOpen(false);
    };

    /* ---------- send ---------- */
    const startTracking = (data: EmailSendResult) => {
        setBatch(data.batch);
        setPhase(data.done ? 'done' : 'sending');
        if (data.done) markFinished(data.batch.id);
    };

    const handleOutcome = async (o: EmailSendOutcome) => {
        if (o.ok) return startTracking(o.data);
        const e = o.error;
        if (o.status === 409 && e.activeBatchId) {
            // another bulk send is running: show its progress instead of a dead end
            const r = await getEmailSendBatch(e.activeBatchId);
            if (r.ok) {
                setNotice('Another bulk send is still running. Showing its progress.');
                return startTracking(r.data);
            }
        }
        setError(e.message);
        if (e.recipients?.length) setBlocked(e.recipients);
    };

    const send = async () => {
        if (submitting) return;
        setError(''); setBlocked(null); setNotice('');
        if (!isReply) {
            if (!subject.trim()) return setError('Add a subject.');
            if (recipientCount === 0) return setError('Add at least one recipient.');
        }
        if (!editor.current || editor.current.isEmpty()) return setError('Write a message first.');

        const body = editor.current.getHtml();
        setSubmitting(true);

        // the template's own file(s) are fetched here and sent like any other attachment
        let allFiles = files;
        if (template?.media && useTplMedia) {
            try {
                allFiles = [...(await loadTemplateFiles(template.media)), ...files];
            } catch {
                setSubmitting(false);
                return setError('Could not load the template’s file. Untick “Attach the template’s file” to send without it, or try again.');
            }
            if (allFiles.length > MAX_FILES) { setSubmitting(false); return setError(`You can attach at most ${MAX_FILES} files.`); }
            if (allFiles.reduce((n, f) => n + f.size, 0) > MAX_ATTACH_BYTES) {
                setSubmitting(false);
                return setError(`Attachments are too large (max ${MAX_ATTACH_BYTES / 1024 / 1024} MB in total, including the template’s file).`);
            }
        }

        const outcome =
            isReply && replyTo
                ? await replyToEmail({ messageId: replyTo.id, body, subject: subject.trim() || undefined, includeQuote, files: allFiles })
                : await composeEmail({ subject: subject.trim(), body, messageIds: picked.map((p) => p.messageId), emails: typed, files: allFiles });
        setSubmitting(false);
        await handleOutcome(outcome);
    };

    const cancel = async () => {
        if (!batch || cancelling) return;
        setCancelling(true);
        const r = await cancelEmailSendBatch(batch.id);
        setCancelling(false);
        if (r.ok) {
            setBatch(r.data.batch);
            if (r.data.done) { setPhase('done'); markFinished(r.data.batch.id); }
        } else {
            setError(r.error.message);
        }
    };

    if (!isOpen) return null;

    /* ───────────── progress / result view ───────────── */
    const handled = batch ? batch.sent + batch.failed + batch.skipped : 0;
    const pct = batch && batch.total ? Math.round((handled / batch.total) * 100) : 0;
    const title =
        phase === 'sending' ? 'Sending…'
            : batch?.status === 'cancelled' ? 'Send cancelled'
                : batch?.status === 'failed' ? 'Send stopped'
                    : batch && batch.failed > 0 ? 'Finished with some failures'
                        : isReply ? 'Reply sent' : 'All emails sent';

    const statusChip = (s: EmailSendRecipient['status']) =>
        cx(
            'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold',
            s === 'sent' && 'bg-emerald-50 text-emerald-700',
            s === 'failed' && 'bg-red-50 text-red-700',
            s === 'skipped' && 'bg-slate-100 text-slate-500',
            (s === 'queued' || s === 'sending') && 'bg-amber-50 text-amber-700'
        );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => phase !== 'edit' && onClose()}>
            <div
                className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-label={isReply ? 'Reply' : 'New email'}
            >
                <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-3">
                    <h2 className="min-w-0 flex-1 truncate text-base font-semibold text-slate-900">
                        {phase === 'edit' ? (isReply ? 'Reply' : 'New email') : title}
                    </h2>
                    <button type="button" onClick={onClose} aria-label="Close" className="cursor-pointer rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                        <Ico name="close" />
                    </button>
                </div>

                {/* ───── edit pane (stays mounted so a draft survives a 409) ───── */}
                <div className={cx('flex min-h-0 flex-1 flex-col', phase !== 'edit' && 'hidden')}>
                    <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-4">
                        {/* recipients */}
                        {isReply ? (
                            <p className="text-sm text-slate-700">
                                <span className="text-slate-500">To: </span>
                                {replyTo?.fromName ? `${replyTo.fromName} <${replyTo.fromEmail}>` : replyTo?.fromEmail}
                            </p>
                        ) : (
                            <div>
                                <label className="mb-1 block text-xs font-medium text-slate-600">
                                    To <span className="text-slate-400">({recipientCount} of {MAX_RECIPIENTS})</span>
                                </label>
                                <div className="flex max-h-28 flex-wrap items-center gap-1.5 overflow-y-auto rounded-xl border border-slate-200 p-2 focus-within:border-[var(--color-primary)]">
                                    {picked.map((p) => (
                                        <span key={p.messageId} className="inline-flex max-w-full items-center gap-1 rounded-full bg-[var(--color-primary-lighter)] py-0.5 pl-2.5 pr-1 text-xs text-slate-800">
                                            <span className="truncate">{p.name || p.email}</span>
                                            <button type="button" aria-label={`Remove ${p.email}`} onClick={() => setPicked((l) => l.filter((x) => x.messageId !== p.messageId))} className="cursor-pointer rounded-full p-0.5 text-slate-500 hover:bg-white">
                                                <Ico name="close" className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))}
                                    {typed.map((e) => (
                                        <span key={e} className="inline-flex max-w-full items-center gap-1 rounded-full bg-slate-100 py-0.5 pl-2.5 pr-1 text-xs text-slate-800">
                                            <span className="truncate">{e}</span>
                                            <button type="button" aria-label={`Remove ${e}`} onClick={() => setTyped((l) => l.filter((x) => x !== e))} className="cursor-pointer rounded-full p-0.5 text-slate-500 hover:bg-white">
                                                <Ico name="close" className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))}
                                    <input
                                        value={typedInput}
                                        onChange={(e) => {
                                            const v = e.target.value;
                                            if (/[,;\s]$/.test(v)) commitTyped(v);
                                            else setTypedInput(v);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') { e.preventDefault(); commitTyped(typedInput); }
                                            if (e.key === 'Backspace' && !typedInput && typed.length) setTyped((l) => l.slice(0, -1));
                                        }}
                                        onBlur={() => commitTyped(typedInput)}
                                        onPaste={(e) => {
                                            const text = e.clipboardData.getData('text');
                                            if (/[,;\s]/.test(text.trim())) { e.preventDefault(); commitTyped(text); }
                                        }}
                                        placeholder={recipientCount ? 'Add another address…' : 'Type an email address, or tick messages in the inbox'}
                                        aria-label="Add recipient"
                                        className="min-w-[200px] flex-1 bg-transparent px-1 py-1 text-sm outline-none placeholder:text-slate-400"
                                    />
                                </div>
                                {typedError && <p className="mt-1 text-xs text-red-600">{typedError}</p>}
                                <p className="mt-1 text-[11px] text-slate-400">Everyone gets their own email. Nobody sees the other recipients.</p>
                            </div>
                        )}

                        {/* subject */}
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject"
                            aria-label="Subject"
                            maxLength={300}
                            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                        />

                        {/* editor toolbar */}
                        <div className="flex flex-wrap items-center gap-1.5">
                            <button type="button" onClick={() => setPickerOpen(true)} className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-[var(--color-primary-lighter)]">
                                <Ico name="layout" className="h-3.5 w-3.5" /> Use template
                            </button>
                            <span className="mx-1 h-5 w-px bg-slate-200" />
                            {[
                                { label: 'B', cls: 'font-bold', run: () => editor.current?.exec('bold'), title: 'Bold' },
                                { label: 'I', cls: 'italic', run: () => editor.current?.exec('italic'), title: 'Italic' },
                                { label: 'U', cls: 'underline', run: () => editor.current?.exec('underline'), title: 'Underline' },
                                { label: '• List', cls: '', run: () => editor.current?.exec('insertUnorderedList'), title: 'Bulleted list' },
                                {
                                    label: 'Link', cls: '', title: 'Add link',
                                    run: () => {
                                        const url = window.prompt('Link address (https://…)');
                                        if (url && /^(https?:\/\/|mailto:)/i.test(url.trim())) editor.current?.exec('createLink', url.trim());
                                    },
                                },
                                { label: 'Clear', cls: '', run: () => editor.current?.exec('removeFormat'), title: 'Clear formatting' },
                            ].map((b) => (
                                <button
                                    key={b.label}
                                    type="button"
                                    title={b.title}
                                    onMouseDown={(e) => e.preventDefault()} // keep the caret inside the editor
                                    onClick={b.run}
                                    className={cx('cursor-pointer rounded-lg px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100', b.cls)}
                                >
                                    {b.label}
                                </button>
                            ))}
                            <span className="mx-1 h-5 w-px bg-slate-200" />
                            <span className="text-[11px] text-slate-400">Insert:</span>
                            {PLACEHOLDERS.map((p) => (
                                <button
                                    key={p}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => editor.current?.insertText(`{{${p}}}`)}
                                    className="cursor-pointer rounded-md bg-emerald-50 px-1.5 py-1 text-[11px] font-medium text-emerald-800 hover:bg-emerald-100"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>

                        {/* editor */}
                        <div className="h-[280px] overflow-hidden rounded-xl border border-slate-200 focus-within:border-[var(--color-primary)]">
                            <RichEditor ref={editor} />
                        </div>
                        <p className="text-[11px] text-slate-400">{placeholdersHint}</p>

                        {isReply && (
                            <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600">
                                <input type="checkbox" checked={includeQuote} onChange={(e) => setIncludeQuote(e.target.checked)} className="h-4 w-4 accent-[var(--color-primary)]" />
                                Include the original message below your reply
                            </label>
                        )}

                        {/* attachments */}
                        <div className="space-y-2">
                            {template?.media && (
                                <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">
                                    <input
                                        type="checkbox"
                                        checked={useTplMedia}
                                        onChange={(e) => { setUseTplMedia(e.target.checked); setAttachError(''); }}
                                        className="h-4 w-4 accent-[var(--color-primary)]"
                                    />
                                    <span className="min-w-0 flex-1 truncate">
                                        Attach the template’s {template.media.kind}: <strong>{template.media.fileName}</strong>
                                        {template.media.count > 1 ? ` +${template.media.count - 1} more` : ''}
                                    </span>
                                </label>
                            )}
                            {files.length > 0 && (
                                <ul className="flex flex-wrap gap-2">
                                    {files.map((f) => (
                                        <li key={`${f.name}-${f.size}`} className="flex max-w-full items-center gap-2 rounded-xl border border-slate-200 py-1.5 pl-3 pr-1.5 text-xs text-slate-700">
                                            <span className="min-w-0 truncate font-medium">{f.name}</span>
                                            <span className="shrink-0 text-slate-400">{fileSize(f.size)}</span>
                                            <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles((l) => l.filter((x) => x !== f))} className="cursor-pointer rounded-full p-0.5 text-slate-500 hover:bg-slate-100">
                                                <Ico name="close" className="h-3 w-3" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <input ref={fileInput} type="file" multiple hidden onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }} />
                            <button type="button" onClick={() => fileInput.current?.click()} className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                                <Ico name="clip" className="h-3.5 w-3.5" /> Attach files
                            </button>
                            <span className="ml-2 text-[11px] text-slate-400">Up to {MAX_FILES} files, {MAX_ATTACH_BYTES / 1024 / 1024} MB in total</span>
                            {attachError && <p className="text-xs text-red-600">{attachError}</p>}
                        </div>

                        {error && (
                            <div role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
                                <p>{error}</p>
                                {blocked && (
                                    <ul className="mt-1 list-disc pl-4">
                                        {blocked.map((r, i) => (
                                            <li key={i}>{r.email}: {REASONS[r.reason || ''] || r.reason || 'Skipped'}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="border-t border-slate-100 p-3">
                        <button
                            type="button"
                            onClick={send}
                            disabled={submitting}
                            className="w-full cursor-pointer rounded-xl bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:cursor-wait disabled:opacity-60"
                        >
                            {submitting
                                ? 'Sending…'
                                : isReply ? 'Send reply' : `Send to ${recipientCount} recipient${recipientCount === 1 ? '' : 's'}`}
                        </button>
                    </div>
                </div>

                {/* ───── progress / result pane ───── */}
                {phase !== 'edit' && batch && (
                    <div className="flex min-h-0 flex-1 flex-col">
                        <div className="space-y-3 border-b border-slate-100 px-5 py-4">
                            {notice && <p className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600">{notice}</p>}
                            <div className="flex items-baseline justify-between text-sm">
                                <span className="font-medium text-slate-800">{batch.subject}</span>
                                <span className="text-xs text-slate-500">{handled} of {batch.total}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                                <div className="h-full bg-[var(--color-primary)] transition-[width] duration-500" style={{ width: `${pct}%` }} />
                            </div>
                            <p className="text-xs text-slate-600">
                                {batch.sent} sent · {batch.failed} failed · {batch.skipped} skipped
                                {phase === 'sending' && batch.pending > 0 ? ` · ${batch.pending} waiting` : ''}
                            </p>
                            {batch.error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{batch.error}</p>}
                            {error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
                            {phase === 'sending' && (
                                <p className="text-[11px] text-slate-400">
                                    Emails go out one by one with a short pause. You can close this window; sending continues in the background.
                                </p>
                            )}
                        </div>

                        <ul className="min-h-0 flex-1 divide-y divide-slate-100 overflow-y-auto">
                            {batch.recipients.map((r, i) => (
                                <li key={`${r.email}-${i}`} className="flex items-start gap-3 px-5 py-2">
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm text-slate-800">{r.name ? `${r.name} · ${r.email}` : r.email}</p>
                                        {(r.error || r.reason) && (
                                            <p className="text-xs text-slate-500">{r.error || REASONS[r.reason || ''] || r.reason}</p>
                                        )}
                                    </div>
                                    <span className={statusChip(r.status)}>{r.status === 'sending' ? 'sending' : r.status}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-2 border-t border-slate-100 p-3">
                            {phase === 'sending' ? (
                                <>
                                    <button type="button" onClick={cancel} disabled={cancelling} className="flex-1 cursor-pointer rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-wait disabled:opacity-60">
                                        {cancelling ? 'Cancelling…' : 'Cancel remaining'}
                                    </button>
                                    <button type="button" onClick={onClose} className="flex-1 cursor-pointer rounded-xl bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]">
                                        Close
                                    </button>
                                </>
                            ) : (
                                <button type="button" onClick={onClose} className="w-full cursor-pointer rounded-xl bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]">
                                    Done
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <EmailTemplatePicker isOpen={pickerOpen} onClose={() => setPickerOpen(false)} onPick={applyTemplate} />
        </div>
    );
}