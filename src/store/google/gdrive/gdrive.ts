import { API_ROUTES } from "@/constants/ApiRoute"; // adjust path to your constants file
import { CustomerDocumentItem, GDriveStatusData, GetCustomerDocumentsParams, GetCustomerDocumentsResponse } from "./gdrive.interface";

export const getGDriveStatus = async (): Promise<GDriveStatusData | null> => {
  try {
    const response = await fetch(API_ROUTES.GDRIVE.STATUS, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to fetch Google Drive status");
    const json = await response.json();
    return json.data || null;
  } catch (error) {
    console.error("GET GDRIVE STATUS ERROR:", error);
    return null;
  }
};

export const getGDriveAuthUrl = async (): Promise<string | null> => {
  try {
    const response = await fetch(API_ROUTES.GDRIVE.AUTH_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to generate Google Drive auth URL");
    const json = await response.json();
    return json.data?.authUrl || null;
  } catch (error) {
    console.error("GET GDRIVE AUTH URL ERROR:", error);
    return null;
  }
};

export const disconnectGDrive = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const response = await fetch(API_ROUTES.GDRIVE.DISCONNECT, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to disconnect Google Drive");
    }
    return {
      success: true,
      message: json.message || "Google Drive disconnected",
    };
  } catch (error: any) {
    console.error("DISCONNECT GDRIVE ERROR:", error);
    return {
      success: false,
      message: error?.message || "Failed to disconnect Google Drive",
    };
  }
};


//documents api call functions


export const uploadCustomerDocument = async (
  file: File,
  customerId: string,
  title: string,
  category: string
): Promise<{
  success: boolean;
  data?: CustomerDocumentItem;
  message?: string;
}> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("customerId", customerId);
    formData.append("title", title.trim());
    formData.append("category", category.trim());

    const response = await fetch(API_ROUTES.GDRIVE.DOCUMENTS, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to upload document");
    }

    return { success: true, data: json.data };
  } catch (error: any) {
    console.error("UPLOAD CUSTOMER DOCUMENT ERROR:", error);
    return {
      success: false,
      message: error?.message || "Failed to upload document",
    };
  }
};

export const getCustomerDocuments = async (
  params: GetCustomerDocumentsParams = {}
): Promise<GetCustomerDocumentsResponse> => {
  try {
    const query = new URLSearchParams();
    if (params.customerId) query.set("customerId", params.customerId);
    if (params.category) query.set("category", params.category);
    if (params.search) query.set("search", params.search);
    if (params.page) query.set("page", String(params.page));
    if (params.limit) query.set("limit", String(params.limit));

    const qs = query.toString();
    const url = qs
      ? `${API_ROUTES.GDRIVE.DOCUMENTS}?${qs}`
      : API_ROUTES.GDRIVE.DOCUMENTS;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to fetch customer documents");
    const json = await response.json();

    return {
      success: true,
      total: json.total ?? 0,
      currentPage: json.currentPage ?? 1,
      totalPages: json.totalPages ?? 0,
      data: json.data || [],
    };
  } catch (error) {
    console.error("GET CUSTOMER DOCUMENTS ERROR:", error);
    return {
      success: false,
      total: 0,
      currentPage: 1,
      totalPages: 0,
      data: [],
    };
  }
};

export const deleteCustomerDocument = async (
  id: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(API_ROUTES.GDRIVE.DELETE_DOCUMENT(id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to delete document");
    }

    return {
      success: true,
      message: json.message || "Document deleted",
    };
  } catch (error: any) {
    console.error("DELETE CUSTOMER DOCUMENT ERROR:", error);
    return {
      success: false,
      message: error?.message || "Failed to delete document",
    };
  }
};

export const fetchDocumentBlob = async (
  id: string,
  download = false
): Promise<{ blob: Blob | null; error?: string }> => {
  try {
    const response = await fetch(API_ROUTES.GDRIVE.STREAM_DOCUMENT(id, download), {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      let msg = "Failed to load document";
      try {
        const errJson = await response.json();
        if (errJson?.message) msg = errJson.message;
      } catch {
        // non-JSON error body
      }
      return { blob: null, error: msg };
    }

    const blob = await response.blob();
    return { blob };
  } catch (error: any) {
    console.error("STREAM DOCUMENT ERROR:", error);
    return { blob: null, error: error?.message || "Failed to load document" };
  }
};