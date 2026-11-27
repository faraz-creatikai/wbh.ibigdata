"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getGDriveStatus,
  getGDriveAuthUrl,
  disconnectGDrive,
} from "@/store/google/gdrive/gdrive";
import { GDriveStatusData } from "@/store/google/gdrive/gdrive.interface";

const formatBytes = (bytes: number | null | undefined) => {
  if (bytes === null || bytes === undefined) return "—";
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );
  const val = bytes / Math.pow(1024, i);
  return `${val.toFixed(i >= 2 ? 2 : 1)} ${units[i]}`;
};

export default function GDriveConnectCard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [statusData, setStatusData] = useState<GDriveStatusData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [actionLoading, setActionLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const fetchStatus = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);

    const data = await getGDriveStatus();
    setStatusData(data);

    setLoading(false);
    setRefreshing(false);
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
        account: null,
        storage: null,
        crmStats: null,
      });
      setFeedback({ type: "success", text: res.message });
    } else {
      setFeedback({ type: "error", text: res.message });
    }
    setActionLoading(false);
  };

  const isConnected = statusData?.connected === true;
  const storage = statusData?.storage;
  const account = statusData?.account;
  const crmStats = statusData?.crmStats;

  const percentUsed = storage?.percentUsed ?? 0;
  const isCritical = percentUsed >= 90;
  const isWarning = percentUsed >= 75 && percentUsed < 90;

  const barColorClass = isCritical
    ? "bg-red-500"
    : isWarning
    ? "bg-amber-500"
    : "bg-[var(--color-primary)]";

  const percentBadgeClass = isCritical
    ? "bg-red-50 text-red-700 ring-red-600/20"
    : isWarning
    ? "bg-amber-50 text-amber-700 ring-amber-600/20"
    : "bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)] ring-[var(--color-primary-light)]";

  return (
    <div className="w-full space-y-5 rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
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
            <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
              Store and sync customer documents for your CRM Knowledge Base.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {!loading && isConnected && (
            <button
              type="button"
              onClick={() => fetchStatus(true)}
              disabled={refreshing || actionLoading}
              title="Refresh storage quota"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-500 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] disabled:opacity-50"
            >
              <svg
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}

          {loading ? (
            <div className="h-9 w-32 animate-pulse rounded-lg bg-gray-100" />
          ) : isConnected ? (
            <button
              type="button"
              onClick={handleDisconnect}
              disabled={actionLoading}
              className="inline-flex items-center justify-center rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actionLoading ? "Disconnecting..." : "Disconnect"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConnect}
              disabled={actionLoading}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actionLoading ? "Redirecting..." : "Connect Google Drive"}
            </button>
          )}
        </div>
      </div>

      {/* Loading Skeleton for Connected Details */}
      {loading && (
        <div className="space-y-3 pt-1">
          <div className="h-16 w-full animate-pulse rounded-xl bg-gray-100" />
          <div className="h-24 w-full animate-pulse rounded-xl bg-gray-100" />
        </div>
      )}

      {/* Connected Account & Storage Details */}
      {!loading && isConnected && (
        <div className="space-y-4">
          {/* Token Warning (if revoked/expired on Google's side) */}
          {statusData?.tokenError && (
            <div className="flex flex-col gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-800 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Unable to fetch live storage stats. Your Google session may have
                expired or been revoked.
              </span>
              <button
                type="button"
                onClick={handleConnect}
                className="shrink-0 rounded-lg bg-amber-600 px-3 py-1.5 font-semibold text-white transition hover:bg-amber-700"
              >
                Reconnect
              </button>
            </div>
          )}

          {/* Linked Google Profile */}
          <div className="flex flex-col gap-3 rounded-xl border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)]/40 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 min-w-0">
              {account?.photoUrl ? (
                <img
                  src={account.photoUrl}
                  alt={account.displayName || "Google Account"}
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 shrink-0 rounded-full border border-white object-cover shadow-xs"
                />
              ) : (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  {(account?.displayName || statusData?.googleEmail || "G")
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">
                  {account?.displayName || "Linked Google Account"}
                </p>
                <p className="truncate text-xs text-[var(--color-primary-darker)]">
                  {statusData?.googleEmail || "Email unavailable"}
                </p>
              </div>
            </div>

            {statusData?.connectedAt && (
              <div className="text-left text-xs text-gray-500 sm:text-right">
                <p>Connected</p>
                <p className="font-medium text-gray-700">
                  {new Date(statusData.connectedAt).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>

          {/* Storage Quota Progress Bar */}
          {storage && (
            <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Drive Storage Quota
                  </h4>
                  <p className="mt-0.5 text-sm font-semibold text-gray-900">
                    {formatBytes(storage.usage)}{" "}
                    <span className="font-normal text-gray-500">
                      of{" "}
                      {storage.limit !== null
                        ? formatBytes(storage.limit)
                        : "Unlimited"}
                    </span>
                  </p>
                </div>

                {storage.percentUsed !== null ? (
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${percentBadgeClass}`}
                  >
                    {storage.percentUsed}% Full
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                    Unlimited Plan
                  </span>
                )}
              </div>

              {/* Progress Track */}
              {storage.limit !== null && (
                <div className="mt-3">
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${barColorClass}`}
                      style={{ width: `${Math.max(percentUsed, 1.5)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Storage Breakdown Row */}
              {/* Storage Breakdown Row */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-gray-500">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    Drive:{" "}
                    <strong className="text-gray-700">
                      {formatBytes(storage.usageInDrive)}
                    </strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    Gmail &amp; Photos:{" "}
                    <strong className="text-gray-700">
                      {formatBytes(Math.max(0, storage.usage - storage.usageInDrive))}
                    </strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gray-400" />
                    Trash:{" "}
                    <strong className="text-gray-700">
                      {formatBytes(storage.usageInTrash)}
                    </strong>
                  </span>
                </div>

                {storage.remaining !== null && (
                  <span>
                    Available:{" "}
                    <strong className="text-emerald-700">
                      {formatBytes(storage.remaining)}
                    </strong>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* CRM Usage Summary Cards */}
          {crmStats && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-3.5">
                <p className="text-xs text-gray-500">CRM Documents</p>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  {crmStats.documentCount}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-3.5">
                <p className="text-xs text-gray-500">CRM Space Used</p>
                <p className="mt-1 text-lg font-bold text-[var(--color-primary-darker)]">
                  {formatBytes(crmStats.totalBytes)}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-3.5">
                <p className="text-xs text-gray-500">Target Folder</p>
                <p
                  className="mt-1 truncate text-sm font-semibold text-gray-800"
                  title={crmStats.folderName}
                >
                  /{crmStats.folderName}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Status / Error Banner */}
      {feedback && (
        <div
          className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
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