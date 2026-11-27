export interface RagSourceItem {
  documentId: string;
  title: string;
  category: string;
  customerId: string | null;
  customerName: string | null;
  score: number;
}

export interface RagMatchedCustomer {
  id: string;
  customerName: string;
  ContactNumber: string;
  City: string;
  LeadTemperature: string;
}

export interface RagChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

export interface RagAskPayload {
  query: string;
  customerId?: string;
  category?: string;
  history?: RagChatHistoryItem[];
}

export interface RagAskResponseData {
  answer: string;
  confidence: "high" | "medium" | "low";
  sources: RagSourceItem[];
  matchedCustomers: RagMatchedCustomer[];
}