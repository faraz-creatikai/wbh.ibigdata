(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/store/masters/campaign/campaign.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCampaign",
    ()=>addCampaign,
    "deleteCampaign",
    ()=>deleteCampaign,
    "getCampaign",
    ()=>getCampaign,
    "getCampaignById",
    ()=>getCampaignById,
    "getFilteredCampaign",
    ()=>getFilteredCampaign,
    "updateCampaign",
    ()=>updateCampaign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getCampaign = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCampaignById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredCampaign = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.GET_BY_PARAMS(params), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addCampaign = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateCampaign = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCampaign = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.CAMPAIGN.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/aiagent/aiagent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAIAgent",
    ()=>addAIAgent,
    "addVideoProjectPhoto",
    ()=>addVideoProjectPhoto,
    "assignAIAgent",
    ()=>assignAIAgent,
    "compareProductPrice",
    ()=>compareProductPrice,
    "deleteAIAgent",
    ()=>deleteAIAgent,
    "generateVideoProjectScript",
    ()=>generateVideoProjectScript,
    "getAIAgent",
    ()=>getAIAgent,
    "getAIAgentById",
    ()=>getAIAgentById,
    "getFilteredAIAgent",
    ()=>getFilteredAIAgent,
    "renderVideoProject",
    ()=>renderVideoProject,
    "runWebhookAgent",
    ()=>runWebhookAgent,
    "updateAIAgent",
    ()=>updateAIAgent
]);
// note: do not use any
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getAIAgent = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getAIAgentById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredAIAgent = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.GET_BY_PARAMS(params), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addAIAgent = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.ADD, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateAIAgent = async (id, data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.UPDATE(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteAIAgent = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.DELETE(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const assignAIAgent = async (data)=>{
    try {
        console.log("assign customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.ASSIGNAIAGENT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(" assign customer api , response ", result);
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const runWebhookAgent = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.RUNWEBHOOKAGENT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response);
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const compareProductPrice = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].AIAGENT.COMPARE_PRODUCT_PRICE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response);
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addVideoProjectPhoto = async (formData)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].VIDEOPROJECT.ADDPHOTOS, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response);
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const generateVideoProjectScript = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].VIDEOPROJECT.GENERATESCRIPT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response);
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const renderVideoProject = async (formData)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].VIDEOPROJECT.RENDER, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response);
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/aiagents/add/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewAgentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/campaign/campaign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/aiagent/aiagent.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ─── Constants ────────────────────────────────────────────────────────────────
const AGENT_TYPES = [
    "Matching",
    "Followup",
    "Qualification",
    "Calling",
    "Recommendation",
    "Mining",
    "Analytics",
    "Social",
    "Script",
    "Email",
    "Video",
    "Assistant"
];
const SUB_TYPES = {
    Qualification: [
        "Lead Scoring",
        "Pipeline Analytics",
        "Meeting Scheduler",
        "Proposal Generator",
        "Deal Tracking"
    ],
    Calling: [
        "Data Enrichment",
        "Report Generator",
        "Workflow Automation",
        "Integration Manager",
        "Audit Logger"
    ],
    Recommendation: [
        "Property Recommendation",
        "Lead Scoring",
        "Pipeline Analytics",
        "Meeting Scheduler",
        "Proposal Generator"
    ],
    Marketing: [
        "Email Outreach",
        "Content Generation",
        "Ad Optimization",
        "SEO Assistant",
        "Campaign Analytics"
    ],
    Support: [
        "Ticket Resolution",
        "FAQ Bot",
        "Escalation Manager",
        "Sentiment Analysis",
        "Knowledge Base"
    ],
    Operations: [
        "Data Enrichment",
        "Report Generator",
        "Workflow Automation",
        "Integration Manager",
        "Audit Logger"
    ],
    Success: [
        "Onboarding",
        "Churn Prediction",
        "Health Scoring",
        "Renewal Manager",
        "Upsell Detector"
    ],
    Mining: [
        "Customer Segmentation",
        "Churn Analysis",
        "Sales Forecasting",
        "Behavioral Analytics",
        "Risk Assessment"
    ],
    Analytics: [
        "Customer Segmentation",
        "Churn Analysis",
        "Sales Forecasting",
        "Behavioral Analytics",
        "Risk Assessment"
    ],
    Social: [
        "Content Creation",
        "Post Scheduling",
        "Engagement Analysis",
        "Trend Monitoring",
        "Competitor Analysis"
    ],
    Script: [
        "Script Creation",
        "Lead Analyse Before Generating",
        "Tips for Intraction"
    ],
    Email: [
        "Email Campaign Run",
        "Email Leads",
        "Generate Email Template"
    ],
    Video: [
        "Video Generation",
        "Video Script Generation"
    ],
    Assistant: [
        "Webhook Integration",
        "Chat Assistant",
        "Data collection",
        "Action Perform"
    ]
};
const CUSTOMER_TYPES = [
    "All",
    "SMB",
    "Mid-Market",
    "Enterprise",
    "Startup"
];
const CAMPAIGNS = [
    "Q2 Pipeline Growth",
    "Spring Outbound",
    "Demo Drive",
    "Brand Refresh",
    "Q3 Forecast",
    "Renewal Watch",
    "None"
];
const TYPE_ICON = {
    Matching: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png",
        alt: "Matching",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 69,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Followup: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 70,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Qualification: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png",
        alt: "Qualification",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 71,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    Calling: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png",
        alt: "Calling",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 72,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Recommendation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 73,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    Mining: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Mining",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 74,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Analytics: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Analytics",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 75,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    Social: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 76,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Script: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 77,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Email: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 78,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Video: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 79,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Assistant: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Analytics",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 80,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0))
};
const TYPE_COLORS = {
    Matching: {
        bg: "bg-amber-50 dark:bg-amber-950",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        ring: "ring-amber-300 dark:ring-amber-700"
    },
    Followup: {
        bg: "bg-amber-50 dark:bg-amber-950",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        ring: "ring-amber-300 dark:ring-amber-700"
    },
    Qualification: {
        bg: "bg-emerald-50 dark:bg-emerald-950",
        text: "text-emerald-700 dark:text-emerald-300",
        border: "border-emerald-200 dark:border-emerald-800",
        ring: "ring-emerald-300 dark:ring-emerald-700"
    },
    Calling: {
        bg: "bg-violet-50 dark:bg-violet-950",
        text: "text-violet-700 dark:text-violet-300",
        border: "border-violet-200 dark:border-violet-800",
        ring: "ring-violet-300 dark:ring-violet-700"
    },
    Recommendation: {
        bg: "bg-sky-50 dark:bg-sky-950",
        text: "text-sky-700 dark:text-sky-300",
        border: "border-sky-200 dark:border-sky-800",
        ring: "ring-sky-300 dark:ring-sky-700"
    },
    Mining: {
        bg: "bg-amber-50 dark:bg-amber-950",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        ring: "ring-amber-300 dark:ring-amber-700"
    },
    Analytics: {
        bg: "bg-rose-50 dark:bg-rose-950",
        text: "text-rose-700 dark:text-rose-300",
        border: "border-rose-200 dark:border-rose-800",
        ring: "ring-rose-300 dark:ring-rose-700"
    },
    Social: {
        bg: "bg-green-50 dark:bg-green-950",
        text: "text-green-700 dark:text-green-300",
        border: "border-green-200 dark:border-green-800",
        ring: "ring-green-300 dark:ring-green-700"
    },
    Script: {
        bg: "bg-amber-50 dark:bg-amber-950",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        ring: "ring-amber-300 dark:ring-amber-700"
    },
    Email: {
        bg: "bg-amber-50 dark:bg-amber-950",
        text: "text-amber-700 dark:text-amber-300",
        border: "border-amber-200 dark:border-amber-800",
        ring: "ring-amber-300 dark:ring-amber-700"
    },
    Video: {
        bg: "bg-sky-50 dark:bg-sky-950",
        text: "text-sky-700 dark:text-sky-300",
        border: "border-sky-200 dark:border-sky-800",
        ring: "ring-sky-300 dark:ring-sky-700"
    },
    Assistant: {
        bg: "bg-rose-50 dark:bg-rose-950",
        text: "text-rose-700 dark:text-rose-300",
        border: "border-rose-200 dark:border-rose-800",
        ring: "ring-rose-300 dark:ring-rose-700"
    }
};
// ─── Reusable field wrapper ───────────────────────────────────────────────────
function Field({ label, required, hint, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                        children: [
                            label,
                            required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-0.5 text-rose-500",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                lineNumber: 117,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this),
                    hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400 dark:text-gray-500",
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 119,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/aiagents/add/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center gap-1 text-xs text-rose-500 dark:text-rose-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-3.5 h-3.5 flex-shrink-0",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 125,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/aiagents/add/page.tsx",
                lineNumber: 123,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_c = Field;
const inputClass = "w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 focus:border-[var(--color-primary)] transition-all";
const errorInputClass = "w-full px-3.5 py-2.5 text-sm rounded-xl border border-rose-300 dark:border-rose-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-300/30 focus:border-rose-400 transition-all";
function NewAgentPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        type: "",
        status: true,
        campaign: "",
        targetSegment: "",
        capability: "",
        promptRole: "",
        webhookUrl: "",
        webhookMethod: "POST",
        webhookHeaders: "",
        webhookPayload: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignOptions, setCampaignOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function tryParseJson(text) {
        const trimmed = text.trim();
        if (!trimmed) return {
            ok: true,
            value: undefined
        };
        try {
            return {
                ok: true,
                value: JSON.parse(trimmed)
            };
        } catch  {
            return {
                ok: false
            };
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewAgentPage.useEffect": ()=>{
            getCampaignOptions();
        }
    }["NewAgentPage.useEffect"], []);
    const set = (key, value)=>{
        setForm((prev)=>({
                ...prev,
                [key]: value
            }));
        if (key in errors) setErrors((prev)=>({
                ...prev,
                [key]: undefined
            }));
    };
    const validate = ()=>{
        const next = {};
        if (!form.name.trim()) next.name = "Agent name is required.";
        if (!form.type) next.type = "Please select a type.";
        if (form.webhookUrl.trim()) {
            try {
                new URL(form.webhookUrl.trim());
            } catch  {
                next.webhookUrl = "Enter a valid URL.";
            }
        }
        if (!tryParseJson(form.webhookHeaders).ok) {
            next.webhookHeaders = "Headers must be valid JSON.";
        }
        if (!tryParseJson(form.webhookPayload).ok) {
            next.webhookPayload = "Payload must be valid JSON.";
        }
        setErrors(next);
        return Object.keys(next).length === 0;
    };
    const handleSubmit = async ()=>{
        if (!validate()) return;
        setLoading(true);
        const headersParsed = tryParseJson(form.webhookHeaders);
        const payloadParsed = tryParseJson(form.webhookPayload);
        const payload = {
            name: form.name,
            description: form.description,
            type: form.type,
            status: form.status ? "Active" : "Inactive",
            campaign: form.campaign,
            targetSegment: form.targetSegment,
            capability: form.capability,
            promptRole: form.promptRole || undefined,
            webhookUrl: form.webhookUrl.trim() || undefined,
            webhookMethod: form.webhookUrl.trim() ? form.webhookMethod : undefined,
            webhookHeaders: headersParsed.ok ? headersParsed.value : undefined,
            webhookPayload: payloadParsed.ok ? payloadParsed.value : undefined
        };
        /* const res = await fetch("/api/ai-agents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to create agent"); */ const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAIAgent"])(payload);
        if (res) {
            setSubmitted(true);
        }
        setLoading(false);
    };
    const handleReset = ()=>{
        setForm({
            name: "",
            description: "",
            type: "",
            status: true,
            campaign: "",
            targetSegment: "",
            capability: "",
            promptRole: "",
            webhookUrl: "",
            webhookMethod: "POST",
            webhookHeaders: "",
            webhookPayload: ""
        });
        setErrors({});
        setSubmitted(false);
    };
    const getCampaignOptions = async ()=>{
        let campaigns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$campaign$2f$campaign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCampaign"])();
        campaigns = campaigns.filter((e)=>e.Status !== "Inactive");
        console.log(" campaigns are here ", campaigns);
        setCampaignOptions(campaigns.map((e)=>e.Name));
    };
    // ── Success screen ──────────────────────────────────────────────────────────
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white rounded-md dark:bg-gray-950 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-10 max-w-md w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl",
                        style: {
                            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary, var(--color-primary)))"
                        },
                        children: "🤖"
                    }, void 0, false, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 280,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                        children: "Agent Created!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 286,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-gray-800 dark:text-gray-200",
                                children: form.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                lineNumber: 288,
                                columnNumber: 25
                            }, this),
                            " has been added to your workspace."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 287,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 dark:text-gray-500 mb-8",
                        children: [
                            "It will start ",
                            form.status ? "running immediately." : "in paused mode."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 290,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/aiagents",
                                className: "flex-1 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center",
                                children: "View All Agents"
                            }, void 0, false, {
                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                lineNumber: 294,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer",
                                style: {
                                    background: "var(--color-primary)"
                                },
                                children: "Add Another"
                            }, void 0, false, {
                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                        lineNumber: 293,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/aiagents/add/page.tsx",
                lineNumber: 279,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/aiagents/add/page.tsx",
            lineNumber: 278,
            columnNumber: 13
        }, this);
    }
    const selectedTypeColors = form.type ? TYPE_COLORS[form.type] : null;
    const availableSubTypes = form.type ? SUB_TYPES[form.type] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white rounded-md dark:bg-gray-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/ai-agents",
                            className: "hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 25
                                }, this),
                                "AI Agents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 331,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 dark:text-gray-400 font-medium",
                            children: "New Agent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 334,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight",
                            children: "Create AI Agent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-gray-500 dark:text-gray-400",
                            children: "Configure a new autonomous agent to handle tasks in your CRM workflow."
                        }, void 0, false, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                    lineNumber: 338,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-6 flex flex-col gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pb-1 border-b border-gray-100 dark:border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-md flex items-center justify-center",
                                                    style: {
                                                        background: "var(--color-primary)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3.5 h-3.5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold text-gray-800 dark:text-gray-200",
                                                    children: "Identity"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Agent Name",
                                            required: true,
                                            error: errors.name,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "e.g. LeadRadar, SupportBot…",
                                                value: form.name,
                                                onChange: (e)=>set("name", e.target.value),
                                                className: errors.name ? errorInputClass : inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Description",
                                            hint: "Optional",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "What does this agent do? What problem does it solve?",
                                                value: form.description,
                                                onChange: (e)=>set("description", e.target.value),
                                                rows: 3,
                                                className: `${inputClass} resize-none`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-6 flex flex-col gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pb-1 border-b border-gray-100 dark:border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-md flex items-center justify-center",
                                                    style: {
                                                        background: "var(--color-primary)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3.5 h-3.5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M6 6h.008v.008H6V6Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold text-gray-800 dark:text-gray-200",
                                                    children: "Classification"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Type",
                                            required: true,
                                            error: errors.type,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-5 gap-2",
                                                children: AGENT_TYPES.map((t)=>{
                                                    const c = TYPE_COLORS[t];
                                                    const isSelected = form.type === t;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            set("type", t);
                                                        /*                           set("subType", ""); */ },
                                                        className: [
                                                            "flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 text-center transition-all cursor-pointer",
                                                            isSelected ? `${c.bg} ${c.text} ${c.border} ring-2 ${c.ring} ring-offset-1 ring-offset-white dark:ring-offset-gray-900` : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                                                        ].join(" "),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl leading-none",
                                                                children: TYPE_ICON[t]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-semibold leading-tight",
                                                                children: t
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, t, true, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-6 flex flex-col gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pb-1 border-b border-gray-100 dark:border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-md flex items-center justify-center",
                                                    style: {
                                                        background: "var(--color-primary)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3.5 h-3.5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold text-gray-800 dark:text-gray-200",
                                                    children: "Campaign"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-gray-400 dark:text-gray-500",
                                                    children: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Assign to Campaign",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: campaignOptions.map((c)=>{
                                                    const val = c === "None" ? "" : c;
                                                    const isSelected = form.campaign === val;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>set("campaign", isSelected ? "" : val),
                                                        className: [
                                                            "py-2.5 px-3 rounded-xl border text-sm text-left transition-all cursor-pointer",
                                                            isSelected ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/5 font-medium" : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600",
                                                            c === "None" ? "text-gray-400 dark:text-gray-500 italic" : ""
                                                        ].join(" "),
                                                        children: [
                                                            c !== "None" && isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mr-1.5 mb-0.5 align-middle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 53
                                                            }, this),
                                                            c
                                                        ]
                                                    }, c, true, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 513,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-6 flex flex-col gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pb-1 border-b border-gray-100 dark:border-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-md flex items-center justify-center",
                                                    style: {
                                                        background: "var(--color-primary)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3.5 h-3.5 text-white",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757M10.81 15.312a4.5 4.5 0 0 1-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-semibold text-gray-800 dark:text-gray-200",
                                                    children: "Webhook"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-gray-400 dark:text-gray-500",
                                                    children: "Optional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Prompt Role",
                                            hint: "Optional",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "e.g. system, assistant…",
                                                value: form.promptRole,
                                                onChange: (e)=>set("promptRole", e.target.value),
                                                className: inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Webhook URL",
                                            error: errors.webhookUrl,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "https://example.com/webhook",
                                                value: form.webhookUrl,
                                                onChange: (e)=>set("webhookUrl", e.target.value),
                                                className: errors.webhookUrl ? errorInputClass : inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 29
                                        }, this),
                                        form.webhookUrl.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Webhook Method",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    "POST",
                                                    "PUT",
                                                    "PATCH",
                                                    "GET"
                                                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>set("webhookMethod", m),
                                                        className: [
                                                            "px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all cursor-pointer",
                                                            form.webhookMethod === m ? "border-[var(--color-primary)] text-white bg-[var(--color-primary)]" : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900"
                                                        ].join(" "),
                                                        children: m
                                                    }, m, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Webhook Headers",
                                            hint: "JSON, optional",
                                            error: errors.webhookHeaders,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: '{ "Authorization": "Bearer …" }',
                                                value: form.webhookHeaders,
                                                onChange: (e)=>set("webhookHeaders", e.target.value),
                                                rows: 3,
                                                className: `${errors.webhookHeaders ? errorInputClass : inputClass} font-mono resize-none`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 594,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Webhook Payload",
                                            hint: "JSON, optional",
                                            error: errors.webhookPayload,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: '{ "extra": "field" }',
                                                value: form.webhookPayload,
                                                onChange: (e)=>set("webhookPayload", e.target.value),
                                                rows: 3,
                                                className: `${errors.webhookPayload ? errorInputClass : inputClass} font-mono resize-none`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                lineNumber: 604,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 603,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 lg:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/ai-agents",
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 616,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: loading,
                                            className: "flex-1 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2",
                                            style: {
                                                background: "var(--color-primary)"
                                            },
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 animate-spin",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Creating…"
                                                ]
                                            }, void 0, true) : "Create Agent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 615,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 350,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: [
                                                "rounded-xl border-2 p-4 transition-all cursor-pointer",
                                                form.status ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950" : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                                            ].join(" "),
                                            onClick: ()=>set("status", !form.status),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: [
                                                                        "w-2.5 h-2.5 rounded-full",
                                                                        form.status ? "bg-emerald-400 animate-pulse" : "bg-gray-300 dark:bg-gray-600"
                                                                    ].join(" ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: [
                                                                        "text-sm font-semibold",
                                                                        form.status ? "text-emerald-700 dark:text-emerald-300" : "text-gray-500 dark:text-gray-400"
                                                                    ].join(" "),
                                                                    children: form.status ? "Active" : "Paused"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: [
                                                                "relative w-10 h-5 rounded-full transition-all duration-300",
                                                                form.status ? "bg-emerald-400 dark:bg-emerald-500" : "bg-gray-200 dark:bg-gray-700"
                                                            ].join(" "),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: [
                                                                    "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300",
                                                                    form.status ? "translate-x-5" : "translate-x-0"
                                                                ].join(" ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 dark:text-gray-400 leading-relaxed",
                                                    children: form.status ? "Agent will begin processing tasks immediately after creation." : "Agent will be created but won't run until manually activated."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xs p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: [
                                                            "w-9 h-9 rounded-lg flex items-center justify-center text-base border transition-all",
                                                            selectedTypeColors ? `${selectedTypeColors.bg} ${selectedTypeColors.text} ${selectedTypeColors.border}` : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-400"
                                                        ].join(" "),
                                                        children: form.type ? TYPE_ICON[form.type] : "🤖"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed line-clamp-2",
                                                    children: form.description || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "italic",
                                                        children: "No description yet…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 58
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: form.campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-medium px-2 py-0.5 rounded-full border border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500",
                                                        children: form.campaign
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 pt-1 border-t border-gray-100 dark:border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: [
                                                                "w-1.5 h-1.5 rounded-full",
                                                                form.status ? "bg-emerald-400 animate-pulse" : "bg-gray-300 dark:bg-gray-600"
                                                            ].join(" ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: [
                                                                "text-[11px] font-medium",
                                                                form.status ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400 dark:text-gray-500"
                                                            ].join(" "),
                                                            children: form.status ? "Active" : "Paused"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 702,
                                    columnNumber: 25
                                }, this),
                                Object.keys(errors).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-3.5 h-3.5",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 37
                                                }, this),
                                                "Please fix the following"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 782,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "flex flex-col gap-1",
                                            children: Object.values(errors).filter(Boolean).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-xs text-rose-500 dark:text-rose-400",
                                                    children: [
                                                        "• ",
                                                        e
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 788,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: loading,
                                            className: "w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2 shadow-sm",
                                            style: {
                                                background: "var(--color-primary)"
                                            },
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 animate-spin",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Creating…"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2.5,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M12 4.5v15m7.5-7.5h-15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aiagents/add/page.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Create Agent"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 798,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/ai-agents",
                                            className: "w-full py-2.5 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                                    lineNumber: 797,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/aiagents/add/page.tsx",
                            lineNumber: 644,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/aiagents/add/page.tsx",
                    lineNumber: 347,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/aiagents/add/page.tsx",
            lineNumber: 318,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/aiagents/add/page.tsx",
        lineNumber: 317,
        columnNumber: 9
    }, this);
}
_s(NewAgentPage, "a0MuTKnEG2bK/WbtKtdobnhhXnI=");
_c1 = NewAgentPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "NewAgentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_df117698._.js.map