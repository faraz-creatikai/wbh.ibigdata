"use client";

import React, { useEffect, useState, useCallback, useRef, Suspense } from "react";
import {
  uploadCustomerDocument,
  getCustomerDocuments,
  deleteCustomerDocument,
} from "@/store/google/gdrive/gdrive";
import {
  CustomerDocumentItem,
  RagStatusType,
} from "@/store/google/gdrive/gdrive.interface";
import CustomerSelector, {
  SelectedCustomerOption,
} from "@/app/component/datafields/CustomerSelector";
import GDriveSettingsButton from "../component/google/GDriveSettingButton";
import DocumentPreviewPanel from "../component/google/DocumentPreviewPanel";

const DOCUMENT_CATEGORIES = [
  "General",
  "KYC / ID Proof",
  "Agreement / Contract",
  "Invoice / Payment",
  "Property / Brochure",
  "Proposal / Quote",
  "Other",
];

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

export default function KnowledgeBaseManager() {
  // Upload dialog state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [docTitle, setDocTitle] = useState("");
  const [docCategory, setDocCategory] = useState("General");
  const [uploadCustomer, setUploadCustomer] =
    useState<SelectedCustomerOption | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadFeedback, setUploadFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Documents list & filter state
  const [filterCustomer, setFilterCustomer] =
    useState<SelectedCustomerOption | null>(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalDocs, setTotalDocs] = useState(0);
  const [documents, setDocuments] = useState<CustomerDocumentItem[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<CustomerDocumentItem | null>(
    null
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchDocuments = useCallback(async () => {
    setLoadingDocs(true);
    const res = await getCustomerDocuments({
      customerId: filterCustomer?.id,
      category: filterCategory || undefined,
      search: debouncedSearch || undefined,
      page,
      limit: 10,
    });
    setDocuments(res.data);
    setTotalDocs(res.total);
    setTotalPages(res.totalPages);
    setLoadingDocs(false);
  }, [filterCustomer?.id, filterCategory, debouncedSearch, page]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  const resetUploadForm = () => {
    setDocTitle("");
    setDocCategory("General");
    setUploadCustomer(null);
    setSelectedFile(null);
    setUploadFeedback(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const closeUploadModal = () => {
    if (uploading) return;
    setIsUploadOpen(false);
    setUploadFeedback(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 25 * 1024 * 1024) {
      setUploadFeedback({
        type: "error",
        text: "File exceeds the 25 MB maximum size limit.",
      });
      return;
    }
    setUploadFeedback(null);
    setSelectedFile(file);

    // Auto-fill title from filename (without extension) if admin hasn't typed one yet
    if (file && !docTitle.trim()) {
      const baseName = file.name.replace(/\.[^/.]+$/, "");
      setDocTitle(baseName);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!docTitle.trim()) {
      setUploadFeedback({
        type: "error",
        text: "Please enter a document title.",
      });
      return;
    }
    if (!uploadCustomer) {
      setUploadFeedback({
        type: "error",
        text: "Please select a customer.",
      });
      return;
    }
    if (!selectedFile) {
      setUploadFeedback({
        type: "error",
        text: "Please choose a file to upload.",
      });
      return;
    }

    setUploading(true);
    setUploadFeedback(null);

    const res = await uploadCustomerDocument(
      selectedFile,
      uploadCustomer.id,
      docTitle,
      docCategory
    );

    if (res.success) {
      resetUploadForm();
      setIsUploadOpen(false);
      setPage(1);
      fetchDocuments();
    } else {
      setUploadFeedback({
        type: "error",
        text:
          res.message || "Upload failed. Make sure Google Drive is connected.",
      });
    }
    setUploading(false);
  };

  const handleDelete = async (doc: CustomerDocumentItem) => {
    const confirmed = window.confirm(
      `Delete "${doc.title || doc.fileName}" from both CRM and Google Drive?`
    );
    if (!confirmed) return;

    setDeletingId(doc.id);
    const res = await deleteCustomerDocument(doc.id);
    if (res.success) {
      if (previewDoc?.id === doc.id) setPreviewDoc(null);
      fetchDocuments();
    } else {
      alert(res.message || "Failed to delete document");
    }
    setDeletingId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 rounded-2xl border border-[var(--color-primary-light)] bg-gradient-to-r from-gray-900 via-[var(--color-primary-darker)] to-[var(--color-primary)] p-6 shadow-xs lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-2.5 py-0.5 text-xs font-medium text-white">
              Knowledge Base
            </span>
            <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary-darker)] ring-1 ring-inset ring-[var(--color-primary-light)]">
              {totalDocs} {totalDocs === 1 ? "Document" : "Documents"}
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Customer Documents &amp; RAG Storage
          </h1>
          <p className="mt-1 text-sm text-gray-100">
            Organize customer files in Google Drive and prepare them for your AI
            agents.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Suspense
            fallback={
              <div className="h-10 w-44 animate-pulse rounded-xl bg-gray-100" />
            }
          >
            <GDriveSettingsButton />
          </Suspense>

          <button
            type="button"
            onClick={() => {
              setUploadFeedback(null);
              setIsUploadOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Document
          </button>
        </div>
      </div>

      {/* Documents Table Card */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Filters Toolbar */}
        <div className="flex flex-col gap-3 border-b border-gray-200 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              All Documents
            </h2>
            <p className="text-xs text-gray-500">
              Filter by customer, category, or search by title and filename
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="w-full sm:w-56">
              <CustomerSelector
                selectedCustomer={filterCustomer}
                onSelect={(c) => {
                  setFilterCustomer(c);
                  setPage(1);
                }}
                placeholder="Filter by customer..."
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] sm:w-44"
            >
              <option value="">All Categories</option>
              {DOCUMENT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title or filename..."
              className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] sm:w-52"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <th className="px-5 py-3">Document</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Size</th>
                <th className="px-5 py-3">RAG Status</th>
                <th className="px-5 py-3">Uploaded</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loadingDocs ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i}>
                    <td colSpan={7} className="px-5 py-4">
                      <div className="h-5 w-full animate-pulse rounded bg-gray-100" />
                    </td>
                  </tr>
                ))
              ) : documents.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-14 text-center text-gray-500"
                  >
                    <p className="font-medium text-gray-700">
                      No documents found
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Click &ldquo;Add Document&rdquo; in the top right to
                      upload your first customer document.
                    </p>
                  </td>
                </tr>
              ) : (
                documents.map((doc) => (
                  <tr key={doc.id} className="transition hover:bg-gray-50/70">
                    <td className="max-w-xs px-5 py-3.5">
                      <p
                        className="truncate font-semibold text-gray-900"
                        title={doc.title || doc.fileName}
                      >
                        {doc.title || doc.fileName}
                      </p>
                      <p
                        className="truncate text-xs text-gray-400"
                        title={doc.fileName}
                      >
                        {doc.fileName} • by {doc.uploadedBy?.name || "Admin"}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span className="inline-flex items-center rounded-md bg-[var(--color-primary-lighter)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-darker)]">
                        {doc.category || "General"}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      {doc.customer ? (
                        <div>
                          <p className="font-medium text-gray-800">
                            {doc.customer.customerName}
                          </p>
                          <p className="text-xs text-gray-400">
                            {doc.customer.ContactNumber}
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">
                          General KB
                        </span>
                      )}
                    </td>

                    <td className="whitespace-nowrap px-5 py-3.5 text-gray-600">
                      {formatFileSize(doc.fileSize)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${ragBadgeStyle(
                          doc.ragStatus
                        )}`}
                      >
                        {doc.ragStatus}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-3.5 text-xs text-gray-500">
                      {new Date(doc.createdAt).toLocaleDateString()}
                    </td>

                    <td className="whitespace-nowrap px-5 py-3.5 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewDoc(doc)}
                          className="rounded-lg border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-primary-darker)] transition hover:bg-[var(--color-primary-light)]"
                        >
                          Preview
                        </button>
                        <button
                          type="button"
                          disabled={deletingId === doc.id}
                          onClick={() => handleDelete(doc)}
                          className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                        >
                          {deletingId === doc.id ? "..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 px-5 py-3.5">
            <span className="text-xs text-gray-500">
              Page {page} of {totalPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={page <= 1 || loadingDocs}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={page >= totalPages || loadingDocs}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-white hover:bg-[var(--color-primary-dark)] disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Document Dialog */}
      {isUploadOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          onClick={closeUploadModal}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Add Customer Document
                </h3>
                <p className="text-xs text-gray-500">
                  Uploads directly to your connected Google Drive (
                  <span className="font-medium text-gray-700">
                    CRM_Documents
                  </span>
                  )
                </p>
              </div>
              <button
                type="button"
                onClick={closeUploadModal}
                disabled={uploading}
                className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 disabled:opacity-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Dialog Form */}
            <form onSubmit={handleUpload} className="space-y-4 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Document Title */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Document Title *
                  </label>
                  <input
                    type="text"
                    value={docTitle}
                    onChange={(e) => setDocTitle(e.target.value)}
                    disabled={uploading}
                    placeholder="e.g. Sale Agreement Q4"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] disabled:bg-gray-100"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Category *
                  </label>
                  <select
                    value={docCategory}
                    onChange={(e) => setDocCategory(e.target.value)}
                    disabled={uploading}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] disabled:bg-gray-100"
                  >
                    {DOCUMENT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Selector */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Customer *
                </label>
                <CustomerSelector
                  selectedCustomer={uploadCustomer}
                  onSelect={setUploadCustomer}
                  placeholder="Choose customer..."
                  disabled={uploading}
                />
              </div>

              {/* File Input */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Document File (Max 25 MB) *
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  disabled={uploading}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.png,.jpg,.jpeg,.webp"
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white text-sm text-gray-600 file:mr-3 file:cursor-pointer file:border-0 file:bg-[var(--color-primary-lighter)] file:px-3.5 file:py-2.5 file:text-sm file:font-medium file:text-[var(--color-primary-darker)] hover:file:bg-[var(--color-primary-light)]"
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  {selectedFile
                    ? `Selected: ${selectedFile.name} (${formatFileSize(
                        selectedFile.size
                      )})`
                    : "Supported: PDF, DOCX, TXT, CSV, Excel, Images"}
                </p>
              </div>

              {uploadFeedback && (
                <div
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                    uploadFeedback.type === "success"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {uploadFeedback.text}
                </div>
              )}

              {/* Dialog Footer */}
              <div className="flex items-center justify-end gap-2.5 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={closeUploadModal}
                  disabled={uploading}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={
                    uploading ||
                    !docTitle.trim() ||
                    !uploadCustomer ||
                    !selectedFile
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {uploading ? "Uploading to Drive..." : "Upload Document"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Document Preview Slide-Over */}
      <DocumentPreviewPanel
        doc={previewDoc}
        onClose={() => setPreviewDoc(null)}
        onDelete={handleDelete}
        deleting={deletingId === previewDoc?.id}
      />
    </div>
  );
}