"use client";

import React, { useEffect, useState, useCallback } from "react";
// TODO: Update this import path to your actual customer service file
import { getFilteredCustomer } from "@/store/customer";

export interface SelectedCustomerOption {
  id: string;
  customerName: string;
  ContactNumber?: string;
  City?: string;
  Campaign?: string;
  LeadTemperature?: string;
}

interface CustomerSelectorProps {
  selectedCustomer: SelectedCustomerOption | null;
  onSelect: (customer: SelectedCustomerOption | null) => void;
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
}

const PAGE_LIMIT = 15;

export default function CustomerSelector({
  selectedCustomer,
  onSelect,
  placeholder = "Select a customer...",
  allowClear = true,
  disabled = false,
}: CustomerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Server filter states matching your backend `getCustomer` query params
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [city, setCity] = useState("");
  const [campaign, setCampaign] = useState("");
  const [leadTemp, setLeadTemp] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination & results
  const [page, setPage] = useState(1);
  const [customers, setCustomers] = useState<SelectedCustomerOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  // Debounce keyword input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword.trim());
      setPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [keyword]);

  const fetchCustomers = useCallback(async () => {
    if (!isOpen) return;
    setLoading(true);

    const query = new URLSearchParams();
    query.set("Limit", String(PAGE_LIMIT));
    query.set("Skip", String((page - 1) * PAGE_LIMIT));

    if (debouncedKeyword) query.set("Keyword", debouncedKeyword);
    if (city.trim()) query.set("City", city.trim());
    if (campaign.trim()) query.set("Campaign", campaign.trim());
    if (leadTemp) query.set("LeadTemperature", leadTemp);
    if (contactNumber.trim()) query.set("ContactNumber", contactNumber.trim());

    const res = await getFilteredCustomer(query.toString());
    const list: any[] = Array.isArray(res) ? res : res?.data || [];

    const normalized: SelectedCustomerOption[] = list.map((c) => ({
      id: c.id || c._id,
      customerName: c.customerName || c.Name || "Unnamed Customer",
      ContactNumber: c.ContactNumber || "",
      City: c.City || "",
      Campaign: c.Campaign || "",
      LeadTemperature: c.LeadTemperature || "",
    }));

    setCustomers(normalized);
    setHasMore(normalized.length === PAGE_LIMIT);
    setLoading(false);
  }, [isOpen, page, debouncedKeyword, city, campaign, leadTemp, contactNumber]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const handleResetFilters = () => {
    setKeyword("");
    setDebouncedKeyword("");
    setCity("");
    setCampaign("");
    setLeadTemp("");
    setContactNumber("");
    setPage(1);
  };

  const activeFilterCount = [city, campaign, leadTemp, contactNumber].filter(
    (v) => v.trim() !== ""
  ).length;

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(true)}
          className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-left text-sm transition hover:border-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          {selectedCustomer ? (
            <div className="flex min-w-0 items-center gap-2">
              <span className="truncate font-medium text-gray-900">
                {selectedCustomer.customerName}
              </span>
              {selectedCustomer.ContactNumber &&
                selectedCustomer.ContactNumber !== "Forbidden" && (
                  <span className="shrink-0 rounded bg-[var(--color-primary-lighter)] px-1.5 py-0.5 text-xs font-medium text-[var(--color-primary-darker)]">
                    {selectedCustomer.ContactNumber}
                  </span>
                )}
            </div>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}

          <svg
            className="ml-2 h-4 w-4 shrink-0 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {allowClear && selectedCustomer && !disabled && (
          <button
            type="button"
            onClick={() => onSelect(null)}
            title="Clear selection"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Select Customer
                </h3>
                <p className="text-xs text-gray-500">
                  Search and filter across your CRM leads
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search & Filter Bar */}
            <div className="space-y-3 border-b border-gray-100 bg-gray-50/70 px-5 py-3.5">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <svg
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search by name, location, keyword..."
                    className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setShowFilters((prev) => !prev)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition ${
                    showFilters || activeFilterCount > 0
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="rounded-full bg-[var(--color-primary)] px-1.5 py-0.2 text-xs text-white">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Collapsible Advanced Filters */}
              {showFilters && (
                <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => {
                      setContactNumber(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Phone / Contact Number"
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setPage(1);
                    }}
                    placeholder="City"
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={campaign}
                    onChange={(e) => {
                      setCampaign(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Campaign"
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                  />
                  <select
                    value={leadTemp}
                    onChange={(e) => {
                      setLeadTemp(e.target.value);
                      setPage(1);
                    }}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-[var(--color-primary)] focus:outline-none"
                  >
                    <option value="">All Lead Temperatures</option>
                    <option value="hot">Hot</option>
                    <option value="warm">Warm</option>
                    <option value="cold">Cold</option>
                  </select>

                  {activeFilterCount > 0 && (
                    <button
                      type="button"
                      onClick={handleResetFilters}
                      className="text-left text-xs font-medium text-[var(--color-primary)] hover:underline sm:col-span-2"
                    >
                      Reset all filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Customer List */}
            <div className="flex-1 overflow-y-auto p-3">
              {loading ? (
                <div className="space-y-2 p-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-14 animate-pulse rounded-lg bg-gray-100"
                    />
                  ))}
                </div>
              ) : customers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-sm font-medium text-gray-700">
                    No customers found
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Try adjusting your search keyword or filters.
                  </p>
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {customers.map((c) => {
                    const isSelected = selectedCustomer?.id === c.id;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => {
                            onSelect(c);
                            setIsOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                            isSelected
                              ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)]"
                              : "border-gray-100 bg-white hover:border-[var(--color-primary-light)] hover:bg-gray-50"
                          }`}
                        >
                          <div className="min-w-0 pr-3">
                            <p className="truncate text-sm font-semibold text-gray-900">
                              {c.customerName}
                            </p>
                            <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-gray-500">
                              {c.ContactNumber &&
                                c.ContactNumber !== "Forbidden" && (
                                  <span>{c.ContactNumber}</span>
                                )}
                              {c.City && <span>• {c.City}</span>}
                              {c.Campaign && <span>• {c.Campaign}</span>}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            {c.LeadTemperature && (
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                                  c.LeadTemperature.toLowerCase() === "hot"
                                    ? "bg-red-50 text-red-700"
                                    : c.LeadTemperature.toLowerCase() === "warm"
                                    ? "bg-amber-50 text-amber-700"
                                    : "bg-sky-50 text-sky-700"
                                }`}
                              >
                                {c.LeadTemperature}
                              </span>
                            )}
                            {isSelected && (
                              <span className="text-xs font-semibold text-[var(--color-primary)]">
                                Selected
                              </span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-5 py-3">
              <span className="text-xs font-medium text-gray-500">
                Page {page}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page === 1 || loading}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={!hasMore || loading}
                  onClick={() => setPage((p) => p + 1)}
                  className="rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}