"use client";

import React, { useEffect, useState } from "react";
import { fetchDocumentBlob } from "@/store/google/gdrive/gdrive";
import { CustomerDocumentItem, RagStatusType } from "@/store/google/gdrive/gdrive.interface";

interface DocumentPreviewPanelProps {
  doc: CustomerDocumentItem | null;
  onClose: () => void;
  onDelete?: (doc: CustomerDocumentItem) => void;
  deleting?: boolean;
}

const formatFileSize = (bytes: number | null) => {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const ragBadgeStyle = (status: RagStatusType) => {
  switch (status) {
    case "INDEXED":
      return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
    case "PROCESSING":
      return "bg-blue-50 text-blue-700 ring-blue-600/20";
    case "FAILED":
      return "bg-red-50 text-red-700 ring-red-600/20";
    default:
      return "bg-amber-50 text-amber-700 ring-amber-600/20";
  }
};

export default function DocumentPreviewPanel({
  doc,
  onClose,
  onDelete,
  deleting = false,
}: DocumentPreviewPanelProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [textContent, setTextContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mime = (doc?.mimeType || "").toLowerCase();
  const isImage = mime.startsWith("image/");
  const isPdf = mime === "application/pdf";
  const isText = mime.startsWith("text/") || mime === "application/json";
  const isPreviewable = isImage || isPdf || isText;

  // Close on Escape key
  useEffect(() => {
    if (!doc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [doc, onClose]);

  // Fetch file stream for previewable types
  useEffect(() => {
    if (!doc) return;

    let active = true;
    let objectUrl: string | null = null;

    setBlobUrl(null);
    setTextContent(null);
    setError(null);

    if (!isPreviewable) {
      setLoading(false);
      return;
    }

    const loadPreview = async () => {
      setLoading(true);
      const { blob, error: fetchErr } = await fetchDocumentBlob(doc.id, false);
      if (!active) return;

      if (!blob || fetchErr) {
        setError(fetchErr || "Unable to preview this document.");
        setLoading(false);
        return;
      }

      if (isText) {
        const text = await blob.text();
        if (active) setTextContent(text);
      } else {
        // Ensure PDF blob carries the right MIME so the browser iframe renders it inline
        const typedBlob = isPdf ? new Blob([blob], { type: "application/pdf" }) : blob;
        objectUrl = URL.createObjectURL(typedBlob);
        if (active) setBlobUrl(objectUrl);
      }

      if (active) setLoading(false);
    };

    loadPreview();

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [doc, isPdf, isText, isPreviewable]);

  if (!doc) return null;

  const handleDownload = async () => {
    setDownloading(true);
    const { blob, error: dlErr } = await fetchDocumentBlob(doc.id, true);
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } else {
      alert(dlErr || "Failed to download file");
    }
    setDownloading(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-4xl flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
       {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="truncate text-base font-semibold text-gray-900"
                title={doc.title || doc.fileName}
              >
                {doc.title || doc.fileName}
              </h3>
              <span className="inline-flex items-center rounded-md bg-[var(--color-primary-lighter)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-darker)]">
                {doc.category || "General"}
              </span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${ragBadgeStyle(
                  doc.ragStatus
                )}`}
              >
                {doc.ragStatus}
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
              {doc.title && doc.title !== doc.fileName && (
                <span className="truncate font-mono text-gray-600" title={doc.fileName}>
                  {doc.fileName}
                </span>
              )}
              {doc.customer && (
                <span className="font-medium text-[var(--color-primary-darker)]">
                  {doc.title && doc.title !== doc.fileName ? "• " : ""}
                  {doc.customer.customerName}
                  {doc.customer.ContactNumber ? ` (${doc.customer.ContactNumber})` : ""}
                </span>
              )}
              <span>• {formatFileSize(doc.fileSize)}</span>
              <span>• Uploaded {new Date(doc.createdAt).toLocaleDateString()}</span>
              {doc.uploadedBy?.name && <span>• by {doc.uploadedBy.name}</span>}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50/80 px-6 py-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs transition hover:bg-[var(--color-primary-dark)] disabled:opacity-60"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              {downloading ? "Downloading..." : "Download"}
            </button>

            {doc.webViewLink && (
              <a
                href={doc.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14M5 5H3v16h16v-2" />
                </svg>
                Open in Drive
              </a>
            )}
          </div>

          {onDelete && (
            <button
              type="button"
              disabled={deleting}
              onClick={() => onDelete(doc)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>

        {/* Preview Stage */}
        <div className="relative flex-1 overflow-auto bg-gray-100/80 p-4 sm:p-6">
          {loading ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
              <p className="text-sm font-medium">Loading preview from Google Drive...</p>
            </div>
          ) : error ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="max-w-md rounded-xl border border-red-200 bg-white p-6 shadow-xs">
                <p className="text-sm font-semibold text-red-600">Preview Unavailable</p>
                <p className="mt-1 text-xs text-gray-500">{error}</p>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="mt-4 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-primary-dark)]"
                >
                  Download Instead
                </button>
              </div>
            </div>
          ) : isPdf && blobUrl ? (
            <iframe
              src={blobUrl}
              title={doc.fileName}
              className="h-full min-h-[70vh] w-full rounded-xl border border-gray-200 bg-white shadow-sm"
            />
          ) : isImage && blobUrl ? (
            <div className="flex min-h-full items-center justify-center">
              <img
                src={blobUrl}
                alt={doc.fileName}
                className="max-h-[78vh] max-w-full rounded-xl border border-gray-200 bg-white object-contain shadow-md"
              />
            </div>
          ) : isText && textContent !== null ? (
            <pre className="min-h-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-gray-200 bg-white p-5 font-mono text-xs leading-relaxed text-gray-800 shadow-xs">
              {textContent}
            </pre>
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9l-5-5H7a2 2 0 00-2 2v13a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="mt-4 text-sm font-semibold text-gray-900">
                  In-browser preview isn&apos;t supported for this file type
                </h4>
                <p className="mt-1 text-xs text-gray-500">
                  Word and Excel files can be downloaded directly or opened in Google Drive.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={downloading}
                    className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white transition hover:bg-[var(--color-primary-dark)]"
                  >
                    {downloading ? "Downloading..." : "Download File"}
                  </button>
                  {doc.webViewLink && (
                    <a
                      href={doc.webViewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                      Open in Google Drive
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}