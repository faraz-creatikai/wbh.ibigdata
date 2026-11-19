"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Search,
  X,
  Users,
  UserPlus,
  Loader2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

import JourneyFilters from "@/components/journey/JourneyFilters";
import JourneyHeader from "@/components/journey/JourneyHeader";
import JourneyPagination from "@/components/journey/JourneyPagination";
import JourneyStats from "@/components/journey/JourneyStats";
import JourneyTable from "@/components/journey/JourneyTable";
import JourneyTabs from "@/components/journey/JourneyTabs";

import type {
  Journey,
  JourneyChannel,
  JourneyChannelFilter,
  JourneySortOption,
  JourneyStatus,
  JourneyStatusFilter,
} from "@/types/journey";

import { apiRequest } from "@/lib/journeyApi";
import { getFilteredCustomer } from "@/store/customer";
import { API_ROUTES } from "@/constants/ApiRoute";

const PAGE_SIZE = 5;
const DEFAULT_CONTACT_LIMIT = 20;
const CONTACT_LIMIT_OPTIONS = [10, 20, 50, 100];

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface ApiJourney {
  id: string;
  name: string;
  description: string | null;
  status: string;
  updatedAt: string;

  nodes?: Array<{
    id: string;
    type: string;
    title: string;
    description: string | null;
    config: unknown;
  }>;

  _count?: {
    nodes: number;
    edges: number;
    executions: number;
  };
}

// Row shape returned by GET /journey/analytics -> data.journeys
interface JourneyPerformance {
  id: string;
  totalExecutions: number;
  completed: number;
}

// Enrollment works on Customer records in the backend.
interface ApiCustomer {
  id: string;
  customerName?: string | null;
  CustomerName?: string | null;
  name?: string | null;
  Email?: string | null;
  email?: string | null;
  ContactNumber?: string | null;
  CountryCode?: string | null;
  City?: string | null;
  Campaign?: string | null;
  CustomerType?: string | null;
  LeadTemperature?: string | null;
}

// Shape the enrollment popup renders (customers are mapped into this).
interface ApiContact {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  city: string | null;
  campaign: string | null;
  status: string;
}

interface EnrollmentResult {
  requested: number;
  enrolled: number;
  executionsCreated: number;
  alreadyEnrolled: number;
  duplicateCustomerIds?: string[];
}

interface CustomerFilterState {
  Campaign: string;
  CustomerType: string;
  LeadTemperature: string;
  City: string;
  isFavourite: "" | "true" | "false";
  sort: "" | "asc" | "desc";
}

const INITIAL_CUSTOMER_FILTERS: CustomerFilterState = {
  Campaign: "",
  CustomerType: "",
  LeadTemperature: "",
  City: "",
  isFavourite: "",
  sort: "",
};

// ─────────────────────────────────────────────────────────────
// Mappers
// ─────────────────────────────────────────────────────────────

function formatUpdatedLabel(dateValue: string) {
  const date = new Date(dateValue);
  const now = new Date();

  const difference = Math.max(0, now.getTime() - date.getTime());
  const minutes = Math.floor(difference / 60000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString();
}

function mapJourneyStatus(status: string): JourneyStatus {
  if (status === "active") return "active";
  if (status === "paused") return "paused";
  return "draft";
}

function mapApiJourney(
  item: ApiJourney,
  performance?: JourneyPerformance
): Journey {
  const nodes = item.nodes ?? [];

  const channels = new Set<JourneyChannel>();

  nodes.forEach((node) => {
    const config =
      node.config && typeof node.config === "object"
        ? (node.config as Record<string, unknown>)
        : {};

    if (node.type === "whatsapp") {
      channels.add(
        config.provider === "meta" ? "meta_whatsapp" : "baileys_whatsapp"
      );
    }

    if (node.type === "email") channels.add("email");
    if (node.type === "sms") channels.add("sms");
  });

  const triggerNode = nodes.find((node) => node.type === "trigger");

  return {
    id: item.id,
    name: item.name,
    description: item.description ?? "",
    trigger:
      triggerNode?.title ??
      triggerNode?.description ??
      "No trigger configured",
    channels: Array.from(channels),
    // Every real enrollment creates exactly one execution, so analytics
    // execution counts are used as the enrolled/completed numbers.
    enrolled: performance?.totalExecutions ?? 0,
    completed: performance?.completed ?? 0,
    status: mapJourneyStatus(item.status),
    updatedAt: item.updatedAt,
    updatedLabel: formatUpdatedLabel(item.updatedAt),
  };
}

function mapCustomerToContact(customer: ApiCustomer): ApiContact {
  const phone = customer.ContactNumber
    ? customer.ContactNumber === "Forbidden"
      ? "Forbidden"
      : `${
          customer.CountryCode
            ? `+${customer.CountryCode.replace(/^\+/, "")} `
            : ""
        }${customer.ContactNumber}`
    : null;

  const displayName =
    customer.customerName || customer.CustomerName || customer.name || null;
  const email = customer.Email || customer.email || null;

  return {
    id: customer.id,
    firstName: displayName,
    lastName: null,
    email,
    phone,
    company: customer.Campaign || customer.CustomerType || customer.City || null,
    city: customer.City || null,
    campaign: customer.Campaign || null,
    status: customer.LeadTemperature || "cold",
  };
}

function getContactName(contact: ApiContact) {
  return (
    [contact.firstName, contact.lastName].filter(Boolean).join(" ") ||
    "Unnamed Contact"
  );
}

function extractCustomerListAndTotal(
  raw: unknown,
  fallbackTotalFromHeader?: string | null
): { customers: ApiCustomer[]; total: number } {
  const customers: ApiCustomer[] = Array.isArray(raw)
    ? (raw as ApiCustomer[])
    : Array.isArray((raw as any)?.data)
      ? (raw as any).data
      : Array.isArray((raw as any)?.customers)
        ? (raw as any).customers
        : Array.isArray((raw as any)?.data?.customers)
          ? (raw as any).data.customers
          : [];

  const headerNum =
    fallbackTotalFromHeader !== null && fallbackTotalFromHeader !== undefined
      ? Number(fallbackTotalFromHeader)
      : NaN;

  const total = Number.isFinite(headerNum)
    ? headerNum
    : Number(
        (raw as any)?.totalCount ??
          (raw as any)?.total ??
          (raw as any)?.pagination?.total ??
          (raw as any)?.data?.pagination?.total ??
          customers.length
      );

  return { customers, total };
}

export default function JourneyPage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [status, setStatus] = useState<JourneyStatusFilter>("all");
  const [search, setSearch] = useState("");
  const [channel, setChannel] = useState<JourneyChannelFilter>("all");
  const [sort, setSort] = useState<JourneySortOption>("updated_desc");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Enrollment popup state
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(
    null
  );

  const [contacts, setContacts] = useState<ApiContact[]>([]);
  const [contactsLoading, setContactsLoading] = useState(false);
  const [contactsError, setContactsError] = useState<string | null>(null);

  const [contactSearch, setContactSearch] = useState("");
  const [customerFilters, setCustomerFilters] = useState<CustomerFilterState>(
    INITIAL_CUSTOMER_FILTERS
  );
  const [contactLimit, setContactLimit] = useState<number>(
    DEFAULT_CONTACT_LIMIT
  );
  const [contactPage, setContactPage] = useState(1);
  const [jumpPageInput, setJumpPageInput] = useState("1");
  const [contactTotal, setContactTotal] = useState(0);

  const [selectedContactIds, setSelectedContactIds] = useState<Set<string>>(
    new Set()
  );

  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentResult, setEnrollmentResult] =
    useState<EnrollmentResult | null>(null);
  const [enrollmentError, setEnrollmentError] = useState<string | null>(
    null
  );

  // Fetch journeys (+ per-journey execution stats) from the backend.
  const fetchJourneys = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [listResult, analyticsResult] = await Promise.all([
        apiRequest(API_ROUTES.JOURNEY.GET_ALL),
        // Stats are optional: a failure here must not break the list.
        apiRequest(API_ROUTES.JOURNEY.ANALYTICS).catch(() => null),
      ]);

      const performanceById = new Map<string, JourneyPerformance>(
        ((analyticsResult?.data?.journeys ?? []) as JourneyPerformance[]).map(
          (item) => [item.id, item]
        )
      );

      setJourneys(
        (listResult.data as ApiJourney[]).map((item) =>
          mapApiJourney(item, performanceById.get(item.id))
        )
      );
    } catch (err) {
      console.error("Journey loading error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading journeys."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJourneys();
  }, [fetchJourneys]);

  // Fetch customers for the enrollment popup via imported getFilteredCustomer.
  const fetchEnrollmentContacts = useCallback(async () => {
    if (!enrollModalOpen) return;

    try {
      setContactsLoading(true);
      setContactsError(null);

      const skip = Math.max(0, (contactPage - 1) * contactLimit);
      const searchParams = new URLSearchParams({
        Limit: String(contactLimit),
        Skip: String(skip),
      });

      if (contactSearch.trim()) {
        searchParams.set("Keyword", contactSearch.trim());
      }
      if (customerFilters.Campaign.trim()) {
        searchParams.set("Campaign", customerFilters.Campaign.trim());
      }
      if (customerFilters.CustomerType.trim()) {
        searchParams.set("CustomerType", customerFilters.CustomerType.trim());
      }
      if (customerFilters.LeadTemperature.trim()) {
        searchParams.set(
          "LeadTemperature",
          customerFilters.LeadTemperature.trim()
        );
      }
      if (customerFilters.City.trim()) {
        searchParams.set("City", customerFilters.City.trim());
      }
      if (customerFilters.isFavourite) {
        searchParams.set("isFavourite", customerFilters.isFavourite);
      }
      if (customerFilters.sort) {
        searchParams.set("sort", customerFilters.sort);
      }

      const result = await getFilteredCustomer(searchParams.toString());

      if (!result) {
        throw new Error("Unable to load customers.");
      }

      const { customers, total } = extractCustomerListAndTotal(result);

      setContacts(customers.map(mapCustomerToContact));
      setContactTotal(total);
    } catch (err) {
      console.error("Enrollment customers error:", err);

      setContactsError(
        err instanceof Error ? err.message : "Unable to load contacts."
      );
    } finally {
      setContactsLoading(false);
    }
  }, [
    enrollModalOpen,
    contactPage,
    contactLimit,
    contactSearch,
    customerFilters,
  ]);

  useEffect(() => {
    fetchEnrollmentContacts();
  }, [fetchEnrollmentContacts]);

  useEffect(() => {
    setJumpPageInput(String(contactPage));
  }, [contactPage]);

  const handleCustomerFilterChange = <K extends keyof CustomerFilterState>(
    field: K,
    value: CustomerFilterState[K]
  ) => {
    setCustomerFilters((prev) => ({ ...prev, [field]: value }));
    setContactPage(1);
    setEnrollmentResult(null);
    setEnrollmentError(null);
  };

  const handleContactLimitChange = (newLimit: number) => {
    setContactLimit(newLimit);
    setContactPage(1);
    setEnrollmentResult(null);
    setEnrollmentError(null);
  };

  const handleResetCustomerFilters = () => {
    setContactSearch("");
    setCustomerFilters(INITIAL_CUSTOMER_FILTERS);
    setContactLimit(DEFAULT_CONTACT_LIMIT);
    setContactPage(1);
    setEnrollmentResult(null);
    setEnrollmentError(null);
  };

  // Open enrollment popup for a journey.
  const handleOpenEnroll = (journey: Journey) => {
    if (journey.status !== "active") {
      window.alert("Please activate this journey before enrolling contacts.");
      return;
    }

    setSelectedJourney(journey);
    setSelectedContactIds(new Set());
    setContactSearch("");
    setCustomerFilters(INITIAL_CUSTOMER_FILTERS);
    setContactLimit(DEFAULT_CONTACT_LIMIT);
    setContactPage(1);
    setJumpPageInput("1");
    setEnrollmentResult(null);
    setEnrollmentError(null);
    setContactsError(null);
    setContacts([]);
    setContactTotal(0);
    setEnrollModalOpen(true);
  };

  const handleCloseEnroll = () => {
    if (enrolling) return;

    setEnrollModalOpen(false);
    setSelectedJourney(null);
    setSelectedContactIds(new Set());
    setEnrollmentResult(null);
    setEnrollmentError(null);
    setContactsError(null);
  };

  // Select or deselect one contact.
  const handleContactSelection = (contactId: string) => {
    setSelectedContactIds((previous) => {
      const updated = new Set(previous);

      if (updated.has(contactId)) {
        updated.delete(contactId);
      } else {
        updated.add(contactId);
      }

      return updated;
    });

    setEnrollmentResult(null);
    setEnrollmentError(null);
  };

  // Select or deselect all contacts on the current page.
  const allCurrentPageSelected =
    contacts.length > 0 &&
    contacts.every((contact) => selectedContactIds.has(contact.id));

  const handleSelectAll = () => {
    setSelectedContactIds((previous) => {
      const updated = new Set(previous);

      if (allCurrentPageSelected) {
        contacts.forEach((contact) => updated.delete(contact.id));
      } else {
        contacts.forEach((contact) => updated.add(contact.id));
      }

      return updated;
    });

    setEnrollmentResult(null);
    setEnrollmentError(null);
  };

  // Enroll selected customers into the journey.
  const handleEnrollSelected = async () => {
    if (!selectedJourney || selectedContactIds.size === 0) return;

    try {
      setEnrolling(true);
      setEnrollmentError(null);
      setEnrollmentResult(null);

      // Backend expects `customerIds` (max 500 per request).
      const result = await apiRequest(
        API_ROUTES.JOURNEY.ENROLL(selectedJourney.id),
        {
          method: "POST",
          body: JSON.stringify({
            customerIds: Array.from(selectedContactIds),
            source: "manual",
          }),
        }
      );

      // Response: { data: { summary: {...}, duplicateCustomerIds, enrollments } }
      const responseData = result.data ?? {};
      const summary = responseData.summary ?? {};

      setEnrollmentResult({
        requested: summary.requested ?? selectedContactIds.size,
        enrolled: summary.enrolled ?? 0,
        executionsCreated: summary.executionsCreated ?? 0,
        alreadyEnrolled: summary.alreadyEnrolled ?? 0,
        duplicateCustomerIds: responseData.duplicateCustomerIds ?? [],
      });

      setSelectedContactIds(new Set());

      await fetchJourneys();
    } catch (err) {
      console.error("Journey enrollment error:", err);

      setEnrollmentError(
        err instanceof Error
          ? err.message
          : "Something went wrong during enrollment."
      );
    } finally {
      setEnrolling(false);
    }
  };

  const totalContactPages = Math.max(
    1,
    Math.ceil(contactTotal / contactLimit)
  );

  const safeContactPage = Math.min(contactPage, totalContactPages);

  const handleJumpToPage = () => {
    const parsed = parseInt(jumpPageInput, 10);
    if (Number.isNaN(parsed)) {
      setJumpPageInput(String(safeContactPage));
      return;
    }
    const targetPage = Math.min(totalContactPages, Math.max(1, parsed));
    setJumpPageInput(String(targetPage));
    setContactPage(targetPage);
  };

  const filteredJourneys = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = journeys.filter((journey) => {
      const matchesStatus = status === "all" || journey.status === status;

      const matchesChannel =
        channel === "all" || journey.channels.includes(channel);

      const matchesSearch =
        normalizedSearch.length === 0 ||
        journey.name.toLowerCase().includes(normalizedSearch) ||
        journey.trigger.toLowerCase().includes(normalizedSearch) ||
        journey.description.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesChannel && matchesSearch;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "updated_asc":
          return (
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
          );

        case "name_asc":
          return a.name.localeCompare(b.name);

        case "enrolled_desc":
          return b.enrolled - a.enrolled;

        case "updated_desc":
        default:
          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
      }
    });
  }, [journeys, status, search, channel, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredJourneys.length / PAGE_SIZE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const visibleJourneys = filteredJourneys.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const handleStatusChange = (value: JourneyStatusFilter) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleChannelChange = (value: JourneyChannelFilter) => {
    setChannel(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: JourneySortOption) => {
    setSort(value);
    setCurrentPage(1);
  };

  // Duplicate journey: load the original graph, then POST a copy as a draft.
  const handleDuplicate = async (journey: Journey) => {
    try {
      const detailResult = await apiRequest(
        API_ROUTES.JOURNEY.GET_BY_ID(journey.id)
      );

      const original = detailResult.data;

      const idMap = new Map<string, string>(
        (original.nodes ?? []).map((node: any) => [
          node.id,
          `node-${crypto.randomUUID()}`,
        ])
      );

      const duplicatedNodes = (original.nodes ?? []).map((node: any) => ({
        id: idMap.get(node.id)!,
        type: node.type,
        position: {
          x: node.positionX,
          y: node.positionY,
        },
        data: {
          title: node.title,
          description: node.description,
          config: node.config,
          actionId: node.actionId,
          category: node.category,
          icon: node.icon,
          color: node.color,
        },
      }));

      const duplicatedEdges = (original.edges ?? []).map((edge: any) => ({
        id: `edge-${crypto.randomUUID()}`,
        source: idMap.get(edge.sourceNodeId),
        target: idMap.get(edge.targetNodeId),
        sourceHandle: edge.sourceHandle,
        targetHandle: edge.targetHandle,
        type: edge.edgeType,
        label: edge.label,
        animated: edge.animated,
      }));

      await apiRequest(API_ROUTES.JOURNEY.ADD, {
        method: "POST",
        body: JSON.stringify({
          name: `${journey.name} (Copy)`,
          description: original.description ?? "",
          status: "draft",
          nodes: duplicatedNodes,
          edges: duplicatedEdges,
        }),
      });

      await fetchJourneys();

      setStatus("all");
      setChannel("all");
      setSearch("");
      setSort("updated_desc");
      setCurrentPage(1);

      window.alert("Journey duplicated successfully!");
    } catch (err) {
      console.error("Duplicate journey error:", err);

      window.alert(
        err instanceof Error ? err.message : "Could not duplicate journey."
      );
    }
  };

  // Update journey status (PATCH /journey/:id/status).
  // The backend rejects "active" if the journey has no trigger node;
  // that message is shown in the alert below.
  const handleToggleStatus = async (journey: Journey) => {
    const newStatus = journey.status === "active" ? "paused" : "active";

    try {
      await apiRequest(API_ROUTES.JOURNEY.UPDATE_STATUS(journey.id), {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });

      await fetchJourneys();
    } catch (err) {
      console.error("Journey status update error:", err);
      window.alert(
        err instanceof Error ? err.message : "Could not update status."
      );
    }
  };

  // Delete journey (also removes its nodes, edges, enrollments, executions).
  const handleDelete = async (journey: Journey) => {
    const confirmed = window.confirm(
      `Delete "${journey.name}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      await apiRequest(API_ROUTES.JOURNEY.DELETE(journey.id), {
        method: "DELETE",
      });

      setJourneys((current) =>
        current.filter((item) => item.id !== journey.id)
      );

      setCurrentPage(1);
    } catch (err) {
      console.error("Journey deletion error:", err);
      window.alert(
        err instanceof Error ? err.message : "Could not delete journey."
      );
    }
  };

  const hasActiveCustomerFilters =
    Boolean(contactSearch.trim()) ||
    contactLimit !== DEFAULT_CONTACT_LIMIT ||
    Object.values(customerFilters).some((v) => v !== "");

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <JourneyHeader />

      <JourneyTabs activeTab="journeys" />

      <JourneyStats journeys={journeys} />

      <div className="crm-card p-4 md:p-5">
        <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-[15px] font-bold text-crm-heading">
              My Journeys
            </h2>

            <p className="mt-0.5 text-[11px] text-crm-muted">
              Manage and track your customer automation workflows.
            </p>
          </div>

          <span className="text-[11px] text-crm-muted">
            {journeys.length} total{" "}
            {journeys.length === 1 ? "journey" : "journeys"}
          </span>
        </div>

        <JourneyFilters
          status={status}
          onStatusChange={handleStatusChange}
          search={search}
          onSearchChange={handleSearchChange}
          channel={channel}
          onChannelChange={handleChannelChange}
          sort={sort}
          onSortChange={handleSortChange}
        />

        {loading ? (
          <div className="py-12 text-center text-sm text-crm-muted">
            Loading journeys...
          </div>
        ) : error ? (
          <div className="py-10 text-center">
            <p className="text-sm text-red-500">{error}</p>

            <button
              type="button"
              onClick={fetchJourneys}
              className="mt-3 rounded-lg border border-crm-border px-4 py-2 text-xs font-semibold text-crm-text hover:bg-crm-primary-light"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <JourneyTable
              journeys={visibleJourneys}
              onDuplicate={handleDuplicate}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDelete}
              onEnroll={handleOpenEnroll}
            />

            <JourneyPagination
              currentPage={safePage}
              totalPages={totalPages}
              pageSize={PAGE_SIZE}
              totalItems={filteredJourneys.length}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      {/* Enroll Contacts Modal */}
      {enrollModalOpen && selectedJourney && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102A36]/50 p-3 backdrop-blur-[2px] sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseEnroll();
            }
          }}
        >
          <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#E5EDF0] bg-white shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-[#E8EFF2] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F6] text-[#168B83]">
                  <UserPlus size={20} />
                </div>

                <div>
                  <h2 className="text-[16px] font-bold text-[#18313B]">
                    Enroll Contacts
                  </h2>
                  <p className="mt-0.5 text-[11px] text-[#71849A]">
                    Journey: {selectedJourney.name}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseEnroll}
                disabled={enrolling}
                className="rounded-lg p-1.5 text-[#71849A] hover:bg-[#F3F7F9] hover:text-[#18313B] disabled:opacity-50"
                aria-label="Close enrollment modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search & filter controls */}
            <div className="space-y-3 border-b border-[#E8EFF2] bg-[#FAFDFD] px-5 py-3.5 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="relative min-w-[220px] flex-1">
                  <Search
                    size={15}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8DA0B3]"
                  />
                  <input
                    type="text"
                    value={contactSearch}
                    onChange={(e) => {
                      setContactSearch(e.target.value);
                      setContactPage(1);
                    }}
                    placeholder="Search by keyword (name, email, phone, price)..."
                    className="w-full rounded-lg border border-[#DCE6EA] bg-white py-2 pl-9 pr-8 text-xs text-[#18313B] placeholder:text-[#9AAAB9] focus:border-[#168B83] focus:outline-none"
                  />
                  {contactSearch && (
                    <button
                      type="button"
                      onClick={() => {
                        setContactSearch("");
                        setContactPage(1);
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8DA0B3] hover:text-[#18313B]"
                      aria-label="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5B6E82]">
                  <Users size={14} className="text-[#168B83]" />
                  <span>
                    <strong className="text-[#18313B]">
                      {selectedContactIds.size}
                    </strong>{" "}
                    selected
                  </span>
                  <span className="text-[#CBD5DF]">|</span>
                  <span>
                    <strong className="text-[#18313B]">{contactTotal}</strong>{" "}
                    matching customers
                  </span>
                  <span className="text-[#CBD5DF]">|</span>
                  <label className="flex items-center gap-1.5 text-xs text-[#5B6E82]">
                    <span>Limit:</span>
                    <select
                      value={contactLimit}
                      onChange={(e) =>
                        handleContactLimitChange(Number(e.target.value))
                      }
                      aria-label="Rows per page"
                      className="rounded-lg border border-[#DCE6EA] bg-white px-2 py-1 text-xs font-medium text-[#18313B] focus:border-[#168B83] focus:outline-none"
                    >
                      {CONTACT_LIMIT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} / page
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                <input
                  type="text"
                  value={customerFilters.Campaign}
                  onChange={(e) =>
                    handleCustomerFilterChange("Campaign", e.target.value)
                  }
                  placeholder="Campaign"
                  className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] placeholder:text-[#9AAAB9] focus:border-[#168B83] focus:outline-none"
                />

                <input
                  type="text"
                  value={customerFilters.CustomerType}
                  onChange={(e) =>
                    handleCustomerFilterChange("CustomerType", e.target.value)
                  }
                  placeholder="Customer Type"
                  className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] placeholder:text-[#9AAAB9] focus:border-[#168B83] focus:outline-none"
                />

                <input
                  type="text"
                  value={customerFilters.LeadTemperature}
                  onChange={(e) =>
                    handleCustomerFilterChange("LeadTemperature", e.target.value)
                  }
                  placeholder="Lead Temp"
                  className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] placeholder:text-[#9AAAB9] focus:border-[#168B83] focus:outline-none"
                />

                <input
                  type="text"
                  value={customerFilters.City}
                  onChange={(e) =>
                    handleCustomerFilterChange("City", e.target.value)
                  }
                  placeholder="City"
                  className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] placeholder:text-[#9AAAB9] focus:border-[#168B83] focus:outline-none"
                />

                <select
                  value={customerFilters.isFavourite}
                  onChange={(e) =>
                    handleCustomerFilterChange(
                      "isFavourite",
                      e.target.value as CustomerFilterState["isFavourite"]
                    )
                  }
                  className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] focus:border-[#168B83] focus:outline-none"
                >
                  <option value="">All Favourites</option>
                  <option value="true">Favourites only</option>
                  <option value="false">Non-favourites</option>
                </select>

                <div className="flex items-center gap-1.5">
                  <select
                    value={customerFilters.sort}
                    onChange={(e) =>
                      handleCustomerFilterChange(
                        "sort",
                        e.target.value as CustomerFilterState["sort"]
                      )
                    }
                    className="w-full rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs text-[#18313B] focus:border-[#168B83] focus:outline-none"
                  >
                    <option value="">Recent (Default)</option>
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                  </select>

                  {hasActiveCustomerFilters && (
                    <button
                      type="button"
                      onClick={handleResetCustomerFilters}
                      title="Reset filters"
                      className="rounded-lg border border-[#DCE6EA] bg-white p-1.5 text-[#5B6E82] hover:bg-[#F3F7F9] hover:text-[#18313B]"
                    >
                      <RotateCcw size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Status / result banners */}
            {enrollmentError && (
              <div className="mx-5 mt-3 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-700 sm:mx-6">
                {enrollmentError}
              </div>
            )}

            {enrollmentResult && (
              <div className="mx-5 mt-3 flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-xs text-emerald-800 sm:mx-6">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <div>
                  <p className="font-semibold">
                    Enrolled {enrollmentResult.enrolled} of{" "}
                    {enrollmentResult.requested} selected contacts.
                  </p>
                  <p className="mt-0.5 text-[11px] text-emerald-700">
                    Executions created: {enrollmentResult.executionsCreated}
                    {enrollmentResult.alreadyEnrolled > 0
                      ? ` · Already enrolled: ${enrollmentResult.alreadyEnrolled}`
                      : ""}
                  </p>
                </div>
              </div>
            )}

            {/* Customer table body */}
            <div className="flex-1 overflow-auto px-5 py-3 sm:px-6">
              {contactsLoading ? (
                <div className="flex items-center justify-center py-14 text-xs text-[#71849A]">
                  <Loader2
                    size={18}
                    className="mr-2 animate-spin text-[#168B83]"
                  />
                  Loading customers...
                </div>
              ) : contactsError ? (
                <div className="py-12 text-center">
                  <p className="text-xs text-red-600">{contactsError}</p>
                  <button
                    type="button"
                    onClick={fetchEnrollmentContacts}
                    className="mt-3 rounded-lg border border-[#DCE6EA] px-3.5 py-1.5 text-xs font-semibold text-[#18313B] hover:bg-[#F3F7F9]"
                  >
                    Retry
                  </button>
                </div>
              ) : contacts.length === 0 ? (
                <div className="py-14 text-center text-xs text-[#71849A]">
                  No customers match the current search or filters.
                </div>
              ) : (
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E8EFF2] text-[11px] font-semibold uppercase tracking-wide text-[#71849A]">
                      <th className="w-10 py-2.5 pr-2">
                        <input
                          type="checkbox"
                          checked={allCurrentPageSelected}
                          onChange={handleSelectAll}
                          aria-label="Select all customers on page"
                          className="h-3.5 w-3.5 rounded border-[#CBD5DF] accent-[#168B83]"
                        />
                      </th>
                      <th className="py-2.5 pr-3">Name</th>
                      <th className="py-2.5 pr-3">Phone</th>
                      <th className="py-2.5 pr-3">Email</th>
                      <th className="py-2.5 pr-3">Campaign / City</th>
                      <th className="py-2.5">Lead Temp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F4F6]">
                    {contacts.map((contact) => {
                      const isSelected = selectedContactIds.has(contact.id);
                      return (
                        <tr
                          key={contact.id}
                          onClick={() => handleContactSelection(contact.id)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? "bg-[#EAF8F6]/70" : "hover:bg-[#F8FBFC]"
                          }`}
                        >
                          <td
                            className="py-2.5 pr-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleContactSelection(contact.id)}
                              aria-label={`Select ${getContactName(contact)}`}
                              className="h-3.5 w-3.5 rounded border-[#CBD5DF] accent-[#168B83]"
                            />
                          </td>
                          <td className="py-2.5 pr-3 font-medium text-[#18313B]">
                            {getContactName(contact)}
                          </td>
                          <td className="py-2.5 pr-3 text-[#4A5E70]">
                            {contact.phone || "—"}
                          </td>
                          <td className="py-2.5 pr-3 text-[#4A5E70]">
                            {contact.email || "—"}
                          </td>
                          <td className="py-2.5 pr-3 text-[#4A5E70]">
                            {[contact.campaign, contact.city]
                              .filter(Boolean)
                              .join(" · ") ||
                              contact.company ||
                              "—"}
                          </td>
                          <td className="py-2.5">
                            <span className="inline-block rounded-full bg-[#F1F5F8] px-2.5 py-0.5 text-[11px] font-medium capitalize text-[#3B4F61]">
                              {contact.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>

            {/* Modal footer with pagination, go-to-page & enroll action */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E8EFF2] bg-[#FAFDFD] px-5 py-3.5 sm:px-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#5B6E82]">
                <button
                  type="button"
                  onClick={() => setContactPage((p) => Math.max(1, p - 1))}
                  disabled={safeContactPage <= 1 || contactsLoading}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs font-medium text-[#18313B] hover:bg-[#F3F7F9] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  <ChevronLeft size={14} />
                  Prev
                </button>

                <span>
                  Page{" "}
                  <strong className="text-[#18313B]">{safeContactPage}</strong>{" "}
                  of{" "}
                  <strong className="text-[#18313B]">{totalContactPages}</strong>
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setContactPage((p) => Math.min(totalContactPages, p + 1))
                  }
                  disabled={safeContactPage >= totalContactPages || contactsLoading}
                  className="inline-flex items-center gap-1 rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1.5 text-xs font-medium text-[#18313B] hover:bg-[#F3F7F9] disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                  <ChevronRight size={14} />
                </button>

                <div className="ml-1 flex items-center gap-1.5">
                  <label htmlFor="jump-to-page" className="text-xs text-[#5B6E82]">
                    Go to:
                  </label>
                  <input
                    id="jump-to-page"
                    type="number"
                    min={1}
                    max={totalContactPages}
                    value={jumpPageInput}
                    onChange={(e) => setJumpPageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleJumpToPage();
                      }
                    }}
                    disabled={contactsLoading}
                    className="w-14 rounded-lg border border-[#DCE6EA] bg-white px-2 py-1 text-xs text-[#18313B] focus:border-[#168B83] focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={handleJumpToPage}
                    disabled={contactsLoading}
                    className="rounded-lg border border-[#DCE6EA] bg-white px-2.5 py-1 text-xs font-semibold text-[#18313B] hover:bg-[#F3F7F9] disabled:opacity-50"
                  >
                    Go
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCloseEnroll}
                  disabled={enrolling}
                  className="rounded-lg border border-[#DCE6EA] bg-white px-4 py-2 text-xs font-semibold text-[#5B6E82] hover:bg-[#F3F7F9] disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleEnrollSelected}
                  disabled={enrolling || selectedContactIds.size === 0}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#168B83] px-4 py-2 text-xs font-semibold text-white hover:bg-[#12736C] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {enrolling && <Loader2 size={14} className="animate-spin" />}
                  Enroll Selected ({selectedContactIds.size})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}