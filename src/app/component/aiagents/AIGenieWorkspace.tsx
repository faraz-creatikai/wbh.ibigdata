"use client";

import React, { useState, useRef, useEffect } from "react";
import { askRagAssistant } from "@/store/rag/rag";
import { RagMatchedCustomer, RagSourceItem } from "@/store/rag/rag.interface";
import CustomerSelector, {
  SelectedCustomerOption,
} from "@/app/component/datafields/CustomerSelector";

const CATEGORIES = [
  "General",
  "KYC / ID Proof",
  "Agreement / Contract",
  "Invoice / Payment",
  "Property / Brochure",
  "Proposal / Quote",
  "Other",
];

const STARTER_PROMPTS = [
  {
    label: "Hot Leads & Budgets",
    description: "Find high-priority leads with their city and budget",
    prompt: "Show all hot leads along with their city, phone number, and budget.",
  },
  {
    label: "Summarize Agreements",
    description: "Pull key terms from uploaded contract documents",
    prompt: "Summarize the key terms from the uploaded agreements and contracts.",
  },
  {
    label: "KYC Document Check",
    description: "See which customers have KYC or ID proofs uploaded",
    prompt: "Which customers have KYC or ID proof documents uploaded?",
  },
  {
    label: "Recent Lead Overview",
    description: "Get a quick breakdown of active leads by location",
    prompt: "Give me an overview of active leads grouped by city and campaign.",
  },
];

interface WorkspaceMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  confidence?: "high" | "medium" | "low";
  sources?: RagSourceItem[];
  matchedCustomers?: RagMatchedCustomer[];
  isError?: boolean;
}

interface AIGenieWorkspaceProps {
  agentName?: string;
  onOpenDocument?: (documentId: string) => void;
  onSelectCustomer?: (customer: RagMatchedCustomer) => void;
}

/**
 * Renders inline markdown (**bold**, `code`) safely as React nodes.
 */
function renderInlineMarkup(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={idx}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[12px] text-[var(--color-primary-darker)]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

type ParsedBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | {
      type: "list";
      ordered: boolean;
      items: { text: string; subItems: string[] }[];
    };

function parseMarkdownBlocks(content: string): ParsedBlock[] {
  const lines = content.split("\n");
  const blocks: ParsedBlock[] = [];
  let currentList: {
    ordered: boolean;
    items: { text: string; subItems: string[] }[];
  } | null = null;

  const flushList = () => {
    if (!currentList) return;
    blocks.push({
      type: "list",
      ordered: currentList.ordered,
      items: currentList.items,
    });
    currentList = null;
  };

  for (const rawLine of lines) {
    if (!rawLine.trim()) {
      flushList();
      continue;
    }

    // Detect indentation level for sub-bullets
    const indentMatch = rawLine.match(/^(\s+)([-*•]|\d+\.)\s+(.*)$/);
    if (indentMatch && currentList && currentList.items.length > 0) {
      const lastItem = currentList.items[currentList.items.length - 1];
      lastItem.subItems.push(indentMatch[3].trim());
      continue;
    }

    const trimmed = rawLine.trim();

    // Top-level unordered bullet
    const ulMatch = trimmed.match(/^[-*•]\s+(.*)$/);
    if (ulMatch) {
      if (!currentList || currentList.ordered) {
        flushList();
        currentList = { ordered: false, items: [] };
      }
      currentList.items.push({ text: ulMatch[1].trim(), subItems: [] });
      continue;
    }

    // Top-level ordered bullet
    const olMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      if (!currentList || !currentList.ordered) {
        flushList();
        currentList = { ordered: true, items: [] };
      }
      currentList.items.push({ text: olMatch[1].trim(), subItems: [] });
      continue;
    }

    flushList();

    // Heading
    const headingMatch = trimmed.match(/^#{1,3}\s+(.*)$/);
    if (headingMatch) {
      blocks.push({ type: "h", text: headingMatch[1].trim() });
      continue;
    }

    // Paragraph
    blocks.push({ type: "p", text: trimmed });
  }

  flushList();
  return blocks;
}

/**
 * Formats AI markdown output into clean typography and grouped lead/entity cards.
 */
function FormattedAIContent({ content }: { content: string }) {
  const blocks = parseMarkdownBlocks(content);

  return (
    <div className="space-y-2.5 text-[13px] leading-relaxed text-slate-700">
      {blocks.map((block, idx) => {
        if (block.type === "h") {
          return (
            <h4 key={idx} className="pt-1 text-sm font-bold text-slate-900">
              {renderInlineMarkup(block.text)}
            </h4>
          );
        }

        if (block.type === "p") {
          return (
            <p key={idx} className="leading-relaxed text-slate-700">
              {renderInlineMarkup(block.text)}
            </p>
          );
        }

        // Render items with sub-items as clean, scannable cards
        const hasGroupedSubItems = block.items.some(
          (item) => item.subItems.length > 0
        );

        if (hasGroupedSubItems) {
          return (
            <div key={idx} className="my-2 space-y-2.5">
              {block.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5"
                >
                  <div className="text-[13px] font-semibold text-slate-900">
                    {renderInlineMarkup(item.text)}
                  </div>
                  {item.subItems.length > 0 && (
                    <dl className="mt-1.5 grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-slate-600 sm:grid-cols-2">
                      {item.subItems.map((sub, j) => {
                        const colonIdx = sub.indexOf(":");
                        if (colonIdx > 0 && colonIdx < 24) {
                          const label = sub
                            .slice(0, colonIdx)
                            .replace(/\*\*/g, "")
                            .trim();
                          const val = sub.slice(colonIdx + 1).trim();
                          return (
                            <div key={j} className="flex items-baseline gap-1.5">
                              <dt className="font-medium text-slate-400">
                                {label}:
                              </dt>
                              <dd className="font-medium text-slate-800">
                                {renderInlineMarkup(val)}
                              </dd>
                            </div>
                          );
                        }
                        return (
                          <div key={j} className="col-span-full text-slate-700">
                            {renderInlineMarkup(sub)}
                          </div>
                        );
                      })}
                    </dl>
                  )}
                </div>
              ))}
            </div>
          );
        }

        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag
            key={idx}
            className={`my-1.5 space-y-1.5 pl-5 text-slate-700 ${
              block.ordered
                ? "list-decimal marker:font-semibold marker:text-[var(--color-primary)]"
                : "list-disc marker:text-[var(--color-primary)]"
            }`}
          >
            {block.items.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {renderInlineMarkup(item.text)}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}

const getRelevantCustomers = (msg: WorkspaceMessage): RagMatchedCustomer[] => {
  if (!msg.matchedCustomers?.length) return [];

  const docCustomerIds = new Set(
    (msg.sources || []).map((s) => s.customerId).filter(Boolean)
  );
  const answerLower = msg.content.toLowerCase();

  const relevant = msg.matchedCustomers.filter(
    (c) =>
      docCustomerIds.has(c.id) ||
      (c.customerName && answerLower.includes(c.customerName.toLowerCase()))
  );

  return (relevant.length > 0 ? relevant : msg.matchedCustomers).slice(0, 6);
};

const confidenceBadge = (level?: "high" | "medium" | "low") => {
  if (level === "high") {
    return {
      label: "High Match",
      cls: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    };
  }
  if (level === "medium") {
    return {
      label: "Partial Match",
      cls: "bg-amber-50 text-amber-700 ring-amber-600/20",
    };
  }
  return {
    label: "Low Match",
    cls: "bg-slate-100 text-slate-600 ring-slate-500/20",
  };
};

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function AIGenieWorkspace({
  agentName = "AI Genie",
  onOpenDocument,
  onSelectCustomer,
}: AIGenieWorkspaceProps) {
  const [selectedCustomer, setSelectedCustomer] =
    useState<SelectedCustomerOption | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [input, setInput] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [messages, setMessages] = useState<WorkspaceMessage[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, aiLoading]);

  const activeFilterCount =
    (selectedCustomer ? 1 : 0) + (selectedCategory ? 1 : 0);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Clipboard unavailable
    }
  };

  const handleSend = async (customPrompt?: string) => {
    const question = (customPrompt ?? input).trim();
    if (!question || aiLoading) return;

    const userMsg: WorkspaceMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: question,
      timestamp: formatTime(),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    if (!customPrompt) setInput("");
    setAiLoading(true);

    const history = nextMessages
      .slice(-6)
      .map((m) => ({ role: m.role, content: m.content }));

    const res = await askRagAssistant({
      query: question,
      customerId: selectedCustomer?.id,
      category: selectedCategory || undefined,
      history,
    });

    const assistantMsg: WorkspaceMessage =
      res.success && res.data
        ? {
            id: `a-${Date.now()}`,
            role: "assistant",
            content: res.data.answer,
            timestamp: formatTime(),
            confidence: res.data.confidence,
            sources: res.data.sources,
            matchedCustomers: res.data.matchedCustomers,
          }
        : {
            id: `a-${Date.now()}`,
            role: "assistant",
            content:
              res.message ||
              "Sorry, I encountered an error while searching your CRM data.",
            timestamp: formatTime(),
            isError: true,
          };

    setMessages((prev) => [...prev, assistantMsg]);
    setAiLoading(false);
    textareaRef.current?.focus();
  };

  const handleResetChat = () => {
    setMessages([]);
    setInput("");
  };

  const handleClearFilters = () => {
    setSelectedCustomer(null);
    setSelectedCategory("");
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-slate-50">
      {/* ── TOP CONTEXT & ACTION BAR ── */}
      <div className="flex-shrink-0 border-b border-slate-200 bg-white px-4 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Current Search Scope Indicator */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">Searching:</span>
            {activeFilterCount === 0 ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                All Leads &amp; Documents
              </span>
            ) : (
              <>
                {selectedCustomer && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-lighter)] px-2.5 py-1 font-medium text-[var(--color-primary-darker)] ring-1 ring-inset ring-[var(--color-primary-light)]">
                    Lead: {selectedCustomer.customerName}
                    <button
                      type="button"
                      onClick={() => setSelectedCustomer(null)}
                      title="Remove customer filter"
                      className="ml-0.5 rounded-full p-0.5 hover:bg-[var(--color-primary-light)]"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary-lighter)] px-2.5 py-1 font-medium text-[var(--color-primary-darker)] ring-1 ring-inset ring-[var(--color-primary-light)]">
                    Category: {selectedCategory}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("")}
                      title="Remove category filter"
                      className="ml-0.5 rounded-full p-0.5 hover:bg-[var(--color-primary-light)]"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </>
            )}
          </div>

          {/* Right Controls: Filter Toggle & New Chat */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                showFilters || activeFilterCount > 0
                  ? "border-[var(--color-primary)] bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)]"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="rounded-full bg-[var(--color-primary)] px-1.5 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {messages.length > 0 && (
              <button
                type="button"
                onClick={handleResetChat}
                disabled={aiLoading}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50"
              >
                New Chat
              </button>
            )}
          </div>
        </div>

        {/* Expandable Filter Panel */}
        {showFilters && (
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/90 p-3.5">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-700">
                Narrow AI search to a specific customer or document type
              </p>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs font-medium text-[var(--color-primary)] hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Focus on Customer (Optional)
                </label>
                <CustomerSelector
                  selectedCustomer={selectedCustomer}
                  onSelect={setSelectedCustomer}
                  placeholder="All customers..."
                  disabled={aiLoading}
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-medium text-slate-600">
                  Document Category (Optional)
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  disabled={aiLoading}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MAIN CONVERSATION AREA ── */}
      <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
        {messages.length === 0 ? (
          /* Clean Empty / Welcome State */
          <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center py-6 text-center">
            <img
              src="/taskbot.png"
              alt={agentName}
              className="h-14 w-14 rounded-full object-cover shadow-xs"
            />

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              {agentName}
            </h2>
            <p className="mt-1 max-w-md text-sm text-slate-500">
              Ask questions across your live CRM leads and uploaded Knowledge
              Base documents. Pick a starter below or type your own question.
            </p>

            <div className="mt-6 grid w-full grid-cols-1 gap-2.5 text-left sm:grid-cols-2">
              {STARTER_PROMPTS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSend(item.prompt)}
                  className="group rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)]/30"
                >
                  <p className="text-xs font-semibold text-slate-800 group-hover:text-[var(--color-primary-darker)]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-slate-500">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Active Conversation Thread */
          <div className="mx-auto max-w-3xl space-y-5">
            {messages.map((msg) => {
              if (msg.role === "user") {
                return (
                  <div key={msg.id} className="flex flex-col items-end">
                    <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-[var(--color-primary)] px-4 py-3 text-sm leading-relaxed text-white shadow-xs">
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    <span className="mt-1 px-1 text-[11px] text-slate-400">
                      You • {msg.timestamp}
                    </span>
                  </div>
                );
              }

              const visibleCustomers = getRelevantCustomers(msg);

              return (
                <div key={msg.id} className="flex items-start gap-3">
                  {/* AI Avatar */}
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)] ring-1 ring-inset ring-[var(--color-primary-light)]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  </div>

                  {/* Card Body */}
                  <div className="min-w-0 flex-1">
                    <div
                      className={`rounded-2xl rounded-tl-sm border bg-white p-4 shadow-2xs ${
                        msg.isError
                          ? "border-red-200 bg-red-50/40"
                          : "border-slate-200"
                      }`}
                    >
                      {/* Message Top Meta */}
                      <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-900">
                            {agentName}
                          </span>
                          {msg.confidence && !msg.isError && (
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10.5px] font-medium ring-1 ring-inset ${
                                confidenceBadge(msg.confidence).cls
                              }`}
                            >
                              {confidenceBadge(msg.confidence).label}
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="rounded-md px-2 py-1 text-[11px] font-medium text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        >
                          {copiedId === msg.id ? "Copied ✓" : "Copy"}
                        </button>
                      </div>

                      {/* Formatted AI Response */}
                      <FormattedAIContent content={msg.content} />

                      {/* Relevant Matched Leads Section */}
                      {visibleCustomers.length > 0 && (
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Matched Leads ({visibleCustomers.length})
                          </p>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {visibleCustomers.map((c) => (
                              <div
                                key={c.id}
                                className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2"
                              >
                                <div className="min-w-0">
                                  <p className="truncate text-xs font-semibold text-slate-900">
                                    {c.customerName}
                                  </p>
                                  <p className="truncate text-[11px] text-slate-500">
                                    {[
                                      c.City,
                                      c.ContactNumber &&
                                      c.ContactNumber !== "Masked"
                                        ? c.ContactNumber
                                        : null,
                                    ]
                                      .filter(Boolean)
                                      .join(" • ") || "CRM Lead"}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedCustomer({
                                      id: c.id,
                                      customerName: c.customerName,
                                      ContactNumber: c.ContactNumber,
                                      City: c.City,
                                      LeadTemperature: c.LeadTemperature,
                                    });
                                    onSelectCustomer?.(c);
                                  }}
                                  className="shrink-0 rounded-lg border border-[var(--color-primary-light)] bg-white px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary-darker)] transition hover:bg-[var(--color-primary-lighter)]"
                                >
                                  Focus Chat
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Knowledge Base Sources Section */}
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Referenced Documents ({msg.sources.length})
                          </p>
                          <div className="space-y-1.5">
                            {msg.sources.map((src, idx) => (
                              <div
                                key={`${src.documentId}-${idx}`}
                                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2"
                              >
                                <div className="min-w-0">
                                  <p className="truncate text-xs font-semibold text-slate-800">
                                    {src.title}
                                  </p>
                                  <p className="text-[11px] text-slate-500">
                                    {src.category} •{" "}
                                    <span className="font-medium text-[var(--color-primary-darker)]">
                                      {Math.round(src.score * 100)}% relevance
                                    </span>
                                  </p>
                                </div>
                                {onOpenDocument && (
                                  <button
                                    type="button"
                                    onClick={() => onOpenDocument(src.documentId)}
                                    className="shrink-0 rounded-lg bg-[var(--color-primary-lighter)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-primary-darker)] transition hover:bg-[var(--color-primary-light)]"
                                  >
                                    Preview
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="mt-1 block px-1 text-[11px] text-slate-400">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Loading / Thinking Card */}
            {aiLoading && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-lighter)] text-[var(--color-primary)]">
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[var(--color-primary-light)] border-t-[var(--color-primary)]" />
                </div>
                <div className="flex-1 rounded-2xl rounded-tl-sm border border-slate-200 bg-white p-4 shadow-2xs">
                  <p className="text-xs font-medium text-slate-600">
                    Searching CRM leads &amp; Knowledge Base documents…
                  </p>
                  <div className="mt-2.5 space-y-2">
                    <div className="h-2.5 w-3/4 animate-pulse rounded bg-slate-100" />
                    <div className="h-2.5 w-1/2 animate-pulse rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* ── COMPOSER (INPUT BAR) ── */}
      <div className="flex-shrink-0 border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div
            className={`flex items-end gap-2.5 rounded-2xl border bg-white p-2.5 transition ${
              aiLoading
                ? "border-slate-200 bg-slate-50"
                : "border-slate-300 focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary-light)]"
            }`}
          >
            <textarea
              ref={textareaRef}
              rows={2}
              value={input}
              disabled={aiLoading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={
                selectedCustomer
                  ? `Ask about ${selectedCustomer.customerName} or their documents...`
                  : "Ask about leads, budgets, locations, agreements, or KYC documents..."
              }
              style={{ outline: "none", boxShadow: "none" }}
              className="w-full resize-none border-0 bg-transparent px-1.5 py-1 text-sm leading-relaxed text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none disabled:opacity-50"
            />

            <button
              type="button"
              disabled={aiLoading || !input.trim()}
              onClick={() => handleSend()}
              className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-4 text-sm font-semibold text-white shadow-xs transition hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span>{aiLoading ? "Thinking..." : "Send"}</span>
              {!aiLoading && (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="mt-1.5 flex items-center justify-between px-1 text-[11px] text-slate-400">
            <span>Press Enter to send • Shift + Enter for new line</span>
            <span>Powered by CRM Data + Knowledge Base</span>
          </div>
        </div>
      </div>
    </div>
  );
}