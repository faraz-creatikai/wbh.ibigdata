"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getGDriveStatus } from "@/store/google/gdrive/gdrive";
import { GDriveStatusData } from "@/store/google/gdrive/gdrive.interface";
import GDriveConnectCard from "./GDriveConnectCard";

export default function GDriveSettingsButton() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [statusData, setStatusData] = useState<GDriveStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStatus = async () => {
    setLoading(true);
    const data = await getGDriveStatus();
    setStatusData(data);
    setLoading(false);
  };

  useEffect(() => {
    loadStatus();
  }, []);

  // Auto-open modal when returning from Google OAuth redirect
  useEffect(() => {
    if (searchParams.get("gdrive")) {
      setIsOpen(true);
      loadStatus();
    }
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    // Refresh header status in case user disconnected inside the modal
    loadStatus();
  };

  const isConnected = statusData?.connected === true;

  return (
    <>
      {/* Header Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-xs transition ${
          isConnected
            ? "border-gray-200 bg-white text-gray-800 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)]"
            : "border-[var(--color-primary)] bg-white text-gray-800 hover:bg-[var(--color-primary-lighter)]"
        }`}
      >
        {/* Status Dot */}
        {!loading && (
          <span
            className={`h-2 w-2 rounded-full ${
              isConnected ? "bg-emerald-500" : "bg-amber-300"
            }`}
          />
        )}

        <span className="max-w-[180px] truncate">
          {loading
            ? "Checking Drive..."
            : isConnected
            ? statusData?.googleEmail || "Drive Connected"
            : "Connect Google Drive"}
        </span>

        {/* Settings Gear Icon */}
        <svg
          className={`h-4 w-4 shrink-0 ${
            isConnected ? "text-gray-500" : "text-gray-500"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* Settings Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Google Drive Account Settings
                </h3>
                <p className="text-xs text-gray-500">
                  Manage the Google Drive account linked to your CRM Knowledge Base
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
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

            {/* Modal Body */}
            <div className="p-6">
              <GDriveConnectCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}