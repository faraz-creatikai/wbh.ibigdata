"use client";

import React, { useState, useRef, useEffect } from "react";
import { askRagAssistant } from "@/store/rag/rag";

import CustomerSelector, {
  SelectedCustomerOption,
} from "@/app/component/datafields/CustomerSelector";
import { RagMatchedCustomer, RagSourceItem } from "@/store/rag/rag.interface";

const CATEGORIES = [
  "General",
  "KYC / ID Proof",
  "Agreement / Contract",
  "Invoice / Payment",
  "Property / Brochure",
  "Proposal / Quote",
  "Other",
];

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  confidence?: "high" | "medium" | "low";
  sources?: RagSourceItem[];
  matchedCustomers?: RagMatchedCustomer[];
}

interface RagChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDocument?: (documentId: string) => void;
}

export default function RagChatDrawer({
  isOpen,
  onClose,
  onOpenDocument,
}: RagChatDrawerProps) {
  const [selectedCustomer, setSelectedCustomer] =
    useState<SelectedCustomerOption | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Ask me anything about your CRM customers or uploaded Knowledge Base documents. You can search globally or filter by a specific customer above.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  if (!isOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const question = (customPrompt ?? input).trim();
    if (!question || sending) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: question,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    if (!customPrompt) setInput("");
    setSending(true);

    const history = nextMessages
      .filter((m) => m.id !== "welcome")
      .slice(-6)
      .map((m) => ({ role: m.role, content: m.content }));

    const res = await askRagAssistant({
      query: question,
      customerId: selectedCustomer?.id,
      category: selectedCategory || undefined,
      history,
    });

    const assistantMsg: ChatMessage =
      res.success && res.data
        ? {
          id: `a-${Date.now()}`,
          role: "assistant",
          content: res.data.answer,
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
        };

    setMessages((prev) => [...prev, assistantMsg]);
    setSending(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Conversation cleared. Ask me anything about your customers or Knowledge Base documents.",
      },
    ]);
  };

  return (
    <div
      className="fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-[var(--color-primary-lighter)] via-white to-white px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex  items-center justify-center rounded-xl  text-white shadow-xs">
              <img src={"/taskbot.png"} className=" h-12 w-12 rounded-full " />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                CRM AI Knowledge Assistant
              </h3>
              <p className="text-xs text-gray-500">
                Searches live Customer records &amp; indexed Drive documents
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleClearChat}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={onClose}
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
        </div>

        {/* Context Scope Bar */}
        <div className="grid grid-cols-1 gap-2.5 border-b border-gray-200 bg-gray-50/80 px-5 py-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Customer Scope (Optional)
            </label>
            <CustomerSelector
              selectedCustomer={selectedCustomer}
              onSelect={setSelectedCustomer}
              placeholder="All customers (Global)..."
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Document Category (Optional)
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
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

        {/* Chat Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50/40 p-5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"
                }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xs ${msg.role === "user"
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-gray-200 bg-white text-gray-800"
                  }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                {/* Matched Customers Pills */}
                {msg.matchedCustomers && msg.matchedCustomers.length > 0 && (
                  <div className="mt-3 border-t border-gray-100 pt-2.5">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      Matched Customers ({msg.matchedCustomers.length})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.matchedCustomers.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() =>
                            setSelectedCustomer({
                              id: c.id,
                              customerName: c.customerName,
                              ContactNumber: c.ContactNumber,
                              City: c.City,
                              LeadTemperature: c.LeadTemperature,
                            })
                          }
                          title="Click to focus chat on this customer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)]/60 px-2.5 py-1 text-xs font-medium text-[var(--color-primary-darker)] transition hover:bg-[var(--color-primary-light)]"
                        >
                          <span>{c.customerName}</span>
                          {c.City && (
                            <span className="text-[11px] opacity-75">
                              • {c.City}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Document Sources */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 border-t border-gray-100 pt-2.5">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                      Document Sources
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.sources.map((src, idx) => (
                        <button
                          key={`${src.documentId}-${idx}`}
                          type="button"
                          onClick={() => onOpenDocument?.(src.documentId)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                        >
                          <span>📄 {src.title}</span>
                          <span className="rounded bg-white px-1 text-[10px] text-gray-500">
                            {Math.round(src.score * 100)}%
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {sending && (
            <div className="flex items-start">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-xs font-medium text-gray-500 shadow-xs">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-primary)]" />
                Searching customers &amp; documents...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick Starter Prompts */}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-1.5 border-t border-gray-100 bg-white px-5 py-2.5">
            {[
              "Show hot leads and their budgets",
              "Summarize uploaded agreements",
              "Which customers have KYC documents?",
            ].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleSend(sample)}
                className="rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)]/50 px-3 py-1 text-xs font-medium text-[var(--color-primary-darker)] transition hover:bg-[var(--color-primary-light)]"
              >
                {sample}
              </button>
            ))}
          </div>
        )}

        {/* Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 border-t border-gray-200 bg-white p-4"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sending}
            placeholder={
              selectedCustomer
                ? `Ask about ${selectedCustomer.customerName}...`
                : "Ask about leads, budgets, agreements, KYC..."
            }
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={sending || !input.trim()}
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-darker)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}