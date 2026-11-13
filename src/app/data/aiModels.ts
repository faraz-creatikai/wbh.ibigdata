// app/data/aiModels.ts
//
// Model catalogue for OpenAI, Google Gemini, Anthropic (Claude) and Groq.
// Checked against provider docs and pricing pages on 13 Nov 2026.
// Free tiers and prices change often: re-verify before relying on them.
//
// Per-model fields
//   free          true  = usable on the provider's free tier / free plan (rate-limited)
//                 false = paid (billing, prepaid credits or an enterprise contract needed)
//   type          "text" is the only type that can answer a prompt in executeDynamicPrompt().
//                 realtime_voice / transcription / speech / safety need their own endpoints.
//   price         USD per 1M tokens at the PAID rate (for free-tier models: what you pay once billing is on)
//   limits        free-plan rate limits, where known
//   preview       provider calls it a preview model (may change or be removed at short notice)
//   legacy        deprecated / only for existing projects, not for new integrations
//   enterpriseOnly  not sold self-serve (contact sales)

export type ModelType = "text" | "realtime_voice" | "transcription" | "speech" | "safety";

export interface AiModel {
  id: string;
  name: string;
  description: string;
  free: boolean;
  type: ModelType;
  price?: { input: number; output: number };
  limits?: string;
  preview?: boolean;
  legacy?: boolean;
  enterpriseOnly?: boolean;
  note?: string;
}

export interface AiProvider {
  providerId: string;
  displayName: string;
  icon?: string;
  models: AiModel[];
}

export const AI_PROVIDERS_CONFIG: AiProvider[] = [
  /* ───────────────────────── OPENAI ───────────────────────── */
  {
    providerId: "OPENAI",
    displayName: "OpenAI",
    icon: "/icons/openai.svg",
    // OpenAI has no free GPT model in the API (pay-as-you-go, prepaid credits from $5).
    models: [
      { id: "gpt-6-luna", name: "GPT-6 Luna", description: "Fast and cheap. High-volume, latency-sensitive tasks.", free: false, type: "text", price: { input: 0.1, output: 0.5 } },
      { id: "gpt-6.1-terra", name: "GPT-6.1 Terra", description: "Balanced quality and cost for everyday agents.", free: false, type: "text", price: { input: 1, output: 5 } },
      { id: "gpt-6.1-sol", name: "GPT-6.1 Sol", description: "General-purpose agents and advanced tasks.", free: false, type: "text", price: { input: 2, output: 10 } },
      { id: "gpt-6-astra", name: "GPT-6 Astra", description: "Top model for complex reasoning.", free: false, type: "text", price: { input: 10, output: 50 } },
      { id: "omni-moderation-latest", name: "Omni Moderation", description: "Content moderation. Listed as free in OpenAI's price list.", free: true, type: "safety" }
    ]
  },

  /* ───────────────────────── GEMINI ───────────────────────── */
  {
    providerId: "GEMINI",
    displayName: "Google Gemini",
    icon: "/icons/google.svg",
    models: [
      // Free tier text models (free of charge in Google AI Studio, rate-limited)
      { id: "gemini-3.8-flash", name: "Gemini 3.8 Flash", description: "Advanced agents, reasoning and coding.", free: true, type: "text", price: { input: 0.75, output: 3.75 }, note: "Paid price doubles on 1 Jan 2027. Free tier stays free." },
      { id: "gemini-3.6-flash", name: "Gemini 3.6 Flash", description: "General AI agents and automation.", free: true, type: "text", price: { input: 0.75, output: 3.75 }, note: "Paid price doubles on 1 Jan 2027. Free tier stays free." },
      { id: "gemini-3.5-flash-lite", name: "Gemini 3.5 Flash-Lite", description: "Low-cost, high-volume lightweight tasks.", free: true, type: "text", price: { input: 0.3, output: 2.5 } },
      { id: "gemini-3.1-flash-lite", name: "Gemini 3.1 Flash-Lite", description: "Fast, simple CRM and chat workflows.", free: true, type: "text", price: { input: 0.25, output: 1.5 } },
      { id: "gemini-3-flash-preview", name: "Gemini 3 Flash (Preview)", description: "Preview Flash model.", free: true, type: "text", preview: true, price: { input: 0.5, output: 3 } },
      // Paid only
      { id: "gemini-4-argon", name: "Gemini 4 Argon", description: "Google's flagship reasoning model (long-horizon coding, math, agents).", free: false, type: "text", price: { input: 2, output: 10 }, note: "Price doubles to $4 / $20 on 1 Dec 2026." },
      { id: "gemini-3.1-pro-preview", name: "Gemini 3.1 Pro (Preview)", description: "Pro-level reasoning. No free tier.", free: false, type: "text", preview: true, price: { input: 2, output: 12 } },
      // Legacy (existing eligible projects only; routed to newer models from 1 Dec 2026)
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", description: "Legacy. Existing eligible projects only.", free: true, type: "text", legacy: true, price: { input: 1.25, output: 10 }, note: "From 1 Dec 2026 requests route to Gemini 3.8 Flash." },
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", description: "Legacy. Existing eligible projects only.", free: true, type: "text", legacy: true, price: { input: 0.3, output: 2.5 }, note: "From 1 Dec 2026 requests route to Gemini 3.5 Flash-Lite." },
      { id: "gemini-2.5-flash-lite", name: "Gemini 2.5 Flash-Lite", description: "Legacy. Existing eligible projects only.", free: true, type: "text", legacy: true, price: { input: 0.1, output: 0.4 } },
      // Real-time voice (free)
      { id: "gemini-3.8-live", name: "Gemini 3.8 Live", description: "Real-time voice conversations.", free: true, type: "realtime_voice" },
      { id: "gemini-3.8-live-extended-thinking", name: "Gemini 3.8 Live (Extended Thinking)", description: "Live voice with deeper reasoning.", free: true, type: "realtime_voice" },
      { id: "gemini-3.1-flash-live-preview", name: "Gemini 3.1 Flash Live (Preview)", description: "Preview real-time audio model.", free: true, type: "realtime_voice", preview: true }
    ]
  },

  /* ───────────────────────── ANTHROPIC ───────────────────────── */
  {
    providerId: "ANTHROPIC",
    displayName: "Anthropic Claude",
    icon: "/icons/anthropic.svg",
    // Claude API has no free tier (pay-as-you-go).
    models: [
      { id: "claude-haiku-5-5", name: "Claude Haiku 5.5", description: "Fastest and most affordable Claude.", free: false, type: "text", price: { input: 0.1, output: 0.5 } },
      { id: "claude-sonnet-5-5", name: "Claude Sonnet 5.5", description: "Balanced speed and intelligence.", free: false, type: "text", price: { input: 2, output: 10 } },
      { id: "claude-opus-5-5", name: "Claude Opus 5.5", description: "Strong reasoning for hard problems.", free: false, type: "text", price: { input: 4, output: 20 } },
      { id: "claude-fable-5-2", name: "Claude Fable 5.2", description: "Most capable generally available Claude.", free: false, type: "text", price: { input: 8, output: 40 } }
    ]
  },

  /* ───────────────────────── GROQ ───────────────────────── */
  {
    providerId: "GROQ",
    displayName: "Groq",
    icon: "/icons/groq.svg",
    // Free plan: no credit card. Limits are per organisation, not per key.
    models: [
      { id: "openai/gpt-oss-120b", name: "GPT-OSS 120B", description: "Stronger reasoning and agents.", free: true, type: "text", price: { input: 0.15, output: 0.6 }, limits: "30 req/min · 1,000 req/day · 8K tokens/min · 200K tokens/day" },
      { id: "openai/gpt-oss-20b", name: "GPT-OSS 20B", description: "Very fast text generation, chat and automation.", free: true, type: "text", price: { input: 0.075, output: 0.3 }, limits: "30 req/min · 1,000 req/day · 8K tokens/min · 200K tokens/day" },
      { id: "qwen/qwen3.8-27b", name: "Qwen 3.8 27B", description: "Reasoning and image input.", free: true, type: "text", preview: true, price: { input: 0.8, output: 4 }, limits: "30 req/min · 1,000 req/day · 8K tokens/min · 200K tokens/day" },
      // Enterprise-only (not sold self-serve; hidden from the dropdown)
      { id: "llama-3.3-70b-versatile", name: "Llama 3.3 70B Versatile", description: "Enterprise contract only (contact sales).", free: false, type: "text", enterpriseOnly: true },
      { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B Instant", description: "Enterprise contract only (contact sales).", free: false, type: "text", enterpriseOnly: true },
      { id: "minimaxai/minimax-m2.7", name: "MiniMax M2.7", description: "Enterprise contract only (contact sales).", free: false, type: "text", preview: true, enterpriseOnly: true },
      { id: "meta-models/muse-spark-open", name: "Muse Spark Open", description: "Enterprise contract only (contact sales).", free: false, type: "text", preview: true, enterpriseOnly: true },
      // Safety / audio (free, not chat models)
      { id: "openai/gpt-oss-safeguard-20b", name: "GPT-OSS Safeguard 20B", description: "Safety classification.", free: true, type: "safety", preview: true, limits: "3 req/min · 1,000 req/day" },
      { id: "meta-llama/llama-prompt-guard-2-22m", name: "Llama Prompt Guard 2 (22M)", description: "Prompt-injection screening.", free: true, type: "safety", preview: true },
      { id: "meta-llama/llama-prompt-guard-2-86m", name: "Llama Prompt Guard 2 (86M)", description: "Prompt-injection screening.", free: true, type: "safety", preview: true },
      { id: "whisper-large-v3", name: "Whisper Large v3", description: "Speech transcription.", free: true, type: "transcription", limits: "20 req/min · 2,000 req/day" },
      { id: "whisper-large-v3-turbo", name: "Whisper Large v3 Turbo", description: "Faster speech transcription.", free: true, type: "transcription", limits: "20 req/min · 2,000 req/day" },
      { id: "canopylabs/orpheus-v1-english", name: "Orpheus V1 English", description: "Text to speech (English).", free: true, type: "speech", preview: true, limits: "10 req/min · 100 req/day" },
      { id: "canopylabs/orpheus-arabic-saudi", name: "Orpheus Arabic (Saudi)", description: "Text to speech (Arabic).", free: true, type: "speech", preview: true, limits: "10 req/min · 100 req/day" }
    ]
  }
];

/* ─── Helpers ─────────────────────────────────────────────────────────── */

export type TierFilter = "all" | "free" | "paid";

/**
 * Models that can answer a text prompt (what executeDynamicPrompt needs).
 * Hides legacy and enterprise-only models by default.
 * keepIds: always keep these ids (so a model already saved in the DB still shows when editing).
 */
export const getSelectableModels = (
  provider: AiProvider | null | undefined,
  opts: { tier?: TierFilter; includeLegacy?: boolean; keepIds?: string[] } = {}
): AiModel[] => {
  const { tier = "all", includeLegacy = false, keepIds = [] } = opts;
  return (provider?.models ?? []).filter(m => {
    if (keepIds.includes(m.id)) return true;
    if (m.type !== "text") return false;
    if (m.enterpriseOnly) return false;
    if (m.legacy && !includeLegacy) return false;
    if (tier === "free") return m.free;
    if (tier === "paid") return !m.free;
    return true;
  });
};

/** "Free", "Paid" or "Free + Paid", based on the models a user can actually pick. */
export const providerTierLabel = (provider: AiProvider): string => {
  const list = getSelectableModels(provider);
  const hasFree = list.some(m => m.free);
  const hasPaid = list.some(m => !m.free);
  if (hasFree && hasPaid) return "Free + Paid";
  return hasFree ? "Free" : "Paid";
};

/** Label used inside dropdowns, e.g. "Gemini 3.8 Flash · Free". */
export const modelLabel = (m: AiModel): string =>
  `${m.name} · ${m.free ? "Free" : "Paid"}${m.preview ? " (preview)" : ""}${m.legacy ? " (legacy)" : ""}`;

/** "$0.75 in / $3.75 out per 1M tokens" */
export const formatPrice = (m: AiModel): string | null =>
  m.price ? `$${m.price.input} in / $${m.price.output} out per 1M tokens` : null;