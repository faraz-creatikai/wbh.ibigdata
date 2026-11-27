import { API_ROUTES } from "@/constants/ApiRoute";
import {
  RagAskPayload,
  RagAskResponseData,
} from "./rag.interface";

export const reindexCustomerDocument = async (
  id: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(API_ROUTES.RAG.REINDEX_DOCUMENT(id), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to re-index document");
    }
    return {
      success: true,
      message: json.message || "Document indexed successfully",
    };
  } catch (error: any) {
    console.error("REINDEX DOCUMENT ERROR:", error);
    return {
      success: false,
      message: error?.message || "Failed to re-index document",
    };
  }
};

export const askRagAssistant = async (
  payload: RagAskPayload
): Promise<{
  success: boolean;
  data?: RagAskResponseData;
  message?: string;
}> => {
  try {
    const response = await fetch(API_ROUTES.RAG.RAG_ASK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to get AI response");
    }

    return { success: true, data: json.data };
  } catch (error: any) {
    console.error("ASK RAG ASSISTANT ERROR:", error);
    return {
      success: false,
      message: error?.message || "Failed to get AI response",
    };
  }
};