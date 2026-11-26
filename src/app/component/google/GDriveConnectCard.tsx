"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getGDriveStatus,
  getGDriveAuthUrl,
  disconnectGDrive,
} from "@/store/google/gdrive/gdrive"; // adjust path
import { GDriveStatusData } from "@/store/google/gdrive/gdrive.interface"; // adjust path

export default function GDriveConnectCard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [statusData, setStatusData] = useState<GDriveStatusData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    const data = await getGDriveStatus();
    setStatusData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // Handle OAuth redirect feedback (?gdrive=connected or ?gdrive=error)
  useEffect(() => {
    const gdriveParam = searchParams.get("gdrive");
    if (!gdriveParam) return;

    if (gdriveParam === "connected") {
      setFeedback({
        type: "success",
        text: "Google Drive connected successfully.",
      });
      fetchStatus();
    } else if (gdriveParam === "error") {
      const reason = searchParams.get("reason") || "Authorization failed";
      setFeedback({
        type: "error",
        text: `Google Drive connection failed (${reason.replace(/_/g, " ")}).`,
      });
    }

    // Clean query params from URL without full reload
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("gdrive");
    nextParams.delete("reason");
    const qs = nextParams.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [searchParams, pathname, router]);

  const handleConnect = async () => {
    setActionLoading(true);
    setFeedback(null);
    const authUrl = await getGDriveAuthUrl();
    if (authUrl) {
      window.location.href = authUrl;
    } else {
      setFeedback({
        type: "error",
        text: "Could not start Google Drive authorization. Please try again.",
      });
      setActionLoading(false);
    }
  };

  const handleDisconnect = async () => {
    setActionLoading(true);
    setFeedback(null);
    const res = await disconnectGDrive();
    if (res.success) {
      setStatusData({
        connected: false,
        status: "DISCONNECTED",
        googleEmail: null,
        updatedAt: null,
      });
      setFeedback({ type: "success", text: res.message });
    } else {
      setFeedback({ type: "error", text: res.message });
    }
    setActionLoading(false);
  };

  const isConnected = statusData?.connected === true;

  return (
    <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
            {/* Google Drive SVG Icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.71 3.5 1.15 15l3.43 6 6.55-11.5L7.71 3.5zm1.14 0 6.56 11.5h6.86L15.71 3.5H8.85zm6.29 12.5-3.43 6h11.14l-3.43-6h-4.28z" />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-base font-semibold text-gray-900">
                Google Drive Storage
              </h3>
              {!loading && (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    isConnected
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
                      : "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-500/10"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isConnected ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  />
                  {isConnected ? "Connected" : "Not Connected"}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Connect your Google Drive to store and sync Knowledge Base files for RAG.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          {loading ? (
            <div className="h-9 w-36 animate-pulse rounded-lg bg-gray-100" />
          ) : isConnected ? (
            <button
              type="button"
              onClick={handleDisconnect}
              disabled={actionLoading}
              className="inline-flex w-full items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {actionLoading ? "Disconnecting..." : "Disconnect"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConnect}
              disabled={actionLoading}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {actionLoading ? "Redirecting..." : "Connect Google Drive"}
            </button>
          )}
        </div>
      </div>

      {/* Connected Account Details */}
      {!loading && isConnected && (
        <div className="mt-5 flex flex-col gap-2 rounded-lg border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)]/50 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[var(--color-primary-darker)]">
            <span className="font-medium">Account:</span>
            <span className="truncate">{statusData?.googleEmail || "Linked Google Account"}</span>
          </div>
          {statusData?.updatedAt && (
            <span className="text-xs text-gray-500">
              Updated {new Date(statusData.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      )}

      {/* Status / Error Banner */}
      {feedback && (
        <div
          className={`mt-4 rounded-lg px-4 py-2.5 text-sm font-medium ${
            feedback.type === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {feedback.text}
        </div>
      )}
    </div>
  );
}