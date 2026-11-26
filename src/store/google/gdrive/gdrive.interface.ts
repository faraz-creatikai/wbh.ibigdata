export type GDriveStatusType = "CONNECTED" | "DISCONNECTED" | "REVOKED";

export interface GDriveStatusData {
  connected: boolean;
  status: GDriveStatusType;
  googleEmail: string | null;
  updatedAt: string | null;
}

export interface GDriveAuthUrlData {
  authUrl: string;
}

export interface GDriveApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}



// documents interface

export type RagStatusType = "PENDING" | "PROCESSING" | "INDEXED" | "FAILED";

export interface CustomerDocumentItem {
  id: string;
  customerId: string | null;
  uploadedById: string;
  title: string;
  category: string;
  fileName: string;
  mimeType: string;
  fileSize: number | null;
  driveFileId: string;
  webViewLink: string | null;
  webContentLink: string | null;
  ragStatus: RagStatusType;
  createdAt: string;
  updatedAt: string;
  customer: {
    id: string;
    customerName: string;
    ContactNumber: string;
  } | null;
  uploadedBy: {
    id: string;
    name: string;
  };
}

export interface GetCustomerDocumentsParams {
  customerId?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetCustomerDocumentsParams {
  customerId?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetCustomerDocumentsResponse {
  success: boolean;
  total: number;
  currentPage: number;
  totalPages: number;
  data: CustomerDocumentItem[];
}