// Define what you send to the backend to trigger the call
export interface TriggerSarvamCallPayload {
    userPrompt: string;
    customerId: string;
    promptMode?: string; // Optional: "text" or "voice", defaults to "text"
    voice?: string; 
}

// Define the structure of the AI Instructions returned
export interface SarvamAiInstructions {
    callingPrompt: string;
    aiAnswer: string;
}

// Define the response shape from your backend controller
export interface TriggerSarvamCallResponse {
    success: boolean;
    message: string;
    aiInstructions: SarvamAiInstructions;
    sarvamData: {
        interaction_id?: string;
        outbound_id?: string;
        status?: string;
        [key: string]: any; // Catch-all for extra Sarvam response fields
    };
}



// --- Interfaces for Config ---
export interface CallingAgentConfigPayload {
    name :string;
    description: string;
    transferNumber?: string;
    apiKey: string;
    orgId: string;
    workspaceId: string;
    appId: string;
    appVersion?: number;
    connectionId: string;
    callerNumber: string;
    isActive?: boolean;
}

export interface CallingAgentConfigResponse {
    id: string;
    name: string;
    description: string;
    transferNumber?: string;
    apiKey: string;
    orgId: string;
    workspaceId: string;
    appId: string;
    appVersion: number;
    connectionId: string;
    callerNumber: string;
    isActive: boolean;
    adminId: string;
    createdAt: string;
}