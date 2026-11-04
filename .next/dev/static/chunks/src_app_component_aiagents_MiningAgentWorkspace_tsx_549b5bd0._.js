(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacebookScrapper",
    ()=>FacebookScrapper,
    "InstagramScrapper",
    ()=>InstagramScrapper,
    "RedditScrapper",
    ()=>RedditScrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/social-content/socialContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
"use client";
;
;
;
const SOURCE_REGISTRY = [
    {
        id: 'facebook',
        label: 'Facebook',
        color: '#1877F2',
        colorSoft: 'rgba(24,119,242,0.09)',
        fetchSteps: [
            'Connecting to Facebook API…',
            'Loading posts from database…',
            'Detecting engagement patterns…',
            'Scoring opportunities…',
            'Packaging insights…'
        ],
        scanChips: [
            'Page posts',
            'Engagement score',
            'Reactions',
            'Share patterns',
            'Comment threads',
            'Pages',
            'Intent mining',
            'Opportunity score'
        ],
        suggestedQueries: [],
        scrapFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapNewPosts"]
    },
    {
        id: 'instagram',
        label: 'Instagram',
        color: '#EE2A7B',
        colorSoft: 'rgba(238,42,123,0.08)',
        fetchSteps: [
            'Connecting to Instagram API…',
            'Loading posts from database…',
            'Analysing visual content…',
            'Scoring opportunities…',
            'Packaging insights…'
        ],
        scanChips: [
            'Reels',
            'Engagement score',
            'Likes',
            'Hashtags',
            'Comment threads',
            'Accounts',
            'Intent mining',
            'Opportunity score'
        ],
        suggestedQueries: [],
        scrapFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapNewInstaPosts"]
    },
    {
        id: 'reddit',
        label: 'Reddit',
        color: '#FF4500',
        colorSoft: 'rgba(255,69,0,0.09)',
        fetchSteps: [
            'Connecting to Reddit API…',
            'Scanning post signals…',
            'Detecting demand patterns…',
            'Scoring opportunities…',
            'Packaging insights…'
        ],
        scanChips: [
            'Reddit posts',
            'Demand signals',
            'Property',
            'Upvote patterns',
            'Comment threads',
            'Subreddits',
            'Intent mining',
            'Opportunity score'
        ],
        suggestedQueries: [
            'Property investment Jaipur 2026',
            'Best areas to live in Bangalore',
            'Startup jobs remote India',
            'EV cars buying advice India'
        ]
    }
];
const getSourceConfig = (id)=>SOURCE_REGISTRY.find((s)=>s.id === id);
/* ═══════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════ */ const TABS = [
    {
        key: 'posts',
        label: 'Posts',
        color: '#0369a1',
        bg: 'rgba(3,105,161,0.08)'
    },
    {
        key: 'insights',
        label: 'Insights',
        color: '#7c3aed',
        bg: 'rgba(124,58,237,0.08)'
    },
    {
        key: 'signals',
        label: 'Signals',
        color: '#d97706',
        bg: 'rgba(217,119,6,0.08)'
    },
    {
        key: 'opps',
        label: 'Opps',
        color: '#059669',
        bg: 'rgba(5,150,105,0.08)'
    }
];
const CONF_STYLE = {
    high: {
        bg: 'rgba(5,150,105,0.08)',
        color: '#065f46',
        dot: '#10b981'
    },
    medium: {
        bg: 'rgba(217,119,6,0.09)',
        color: '#92400e',
        dot: '#f59e0b'
    },
    low: {
        bg: 'rgba(100,116,139,0.08)',
        color: '#475569',
        dot: '#94a3b8'
    }
};
/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */ const fmtTime = (d)=>d ? d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    }) : '';
const fmtNum = (n)=>n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
const fmtDate = (iso)=>{
    try {
        return new Date(iso).toLocaleDateString([], {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    } catch  {
        return '';
    }
};
const uid = ()=>Math.random().toString(36).slice(2, 9);
/* ═══════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════ */ const SendIcon = ({ color = 'white' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 14,
        height: 14,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 217,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "22 2 15 22 11 13 2 9 22 2"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 217,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 216,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SendIcon;
const RefreshIcon = ({ color = '#64748b', size = 12 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 4v6h6M23 20v-6h-6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 222,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 223,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 221,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = RefreshIcon;
const ArrowUpIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 9,
        height: 9,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#059669",
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 19V5M5 12l7-7 7 7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 226,
            columnNumber: 166
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 226,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ArrowUpIcon;
const ChatBubbleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 9,
        height: 9,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#94a3b8",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 227,
            columnNumber: 167
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 227,
        columnNumber: 31
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ChatBubbleIcon;
const ShareIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 9,
        height: 9,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#94a3b8",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "5",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 162
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 193
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "19",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 224
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8.59",
                y1: "13.51",
                x2: "15.42",
                y2: "17.49"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 256
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15.41",
                y1: "6.51",
                x2: "8.59",
                y2: "10.49"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 228,
                columnNumber: 307
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 228,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ShareIcon;
const ExternalIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 9,
        height: 9,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#94a3b8",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 229,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "15 3 21 3 21 9"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 229,
                columnNumber: 230
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 229,
                columnNumber: 266
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 229,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ExternalIcon;
const TrendIcon = ({ color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 11,
        height: 11,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 7 13.5 15.5 8.5 10.5 2 17"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 230,
                columnNumber: 216
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "16 7 22 7 22 13"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 230,
                columnNumber: 266
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 230,
        columnNumber: 54
    }, ("TURBOPACK compile-time value", void 0));
_c6 = TrendIcon;
const SignalIcon = ({ color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 11,
        height: 11,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 231,
            columnNumber: 217
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 231,
        columnNumber: 55
    }, ("TURBOPACK compile-time value", void 0));
_c7 = SignalIcon;
const ZapIcon = ({ color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 11,
        height: 11,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 232,
            columnNumber: 214
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 232,
        columnNumber: 52
    }, ("TURBOPACK compile-time value", void 0));
_c8 = ZapIcon;
const ChevronDownIcon = ({ color = '#94a3b8', size = 11 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "6 9 12 15 18 9"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 233,
            columnNumber: 241
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 233,
        columnNumber: 99
    }, ("TURBOPACK compile-time value", void 0));
_c9 = ChevronDownIcon;
const SpinnerIcon = ({ size = 13, color = '#0369a1' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
            animation: 'sm-spin .7s linear infinite',
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 234,
            columnNumber: 268
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 234,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
_c10 = SpinnerIcon;
const ImageIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 10,
        height: 10,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "#059669",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 235,
                columnNumber: 164
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 235,
                columnNumber: 214
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "21 15 16 10 5 21"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 235,
                columnNumber: 250
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 235,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
_c11 = ImageIcon;
const DownloadCloudIcon = ({ color = 'white', size = 12 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8 17 12 21 16 17"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 238,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "12",
                x2: "12",
                y2: "21"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 239,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 240,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 237,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = DownloadCloudIcon;
const CheckIcon = ({ color = 'white', size = 11 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 245,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 244,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = CheckIcon;
const DatabaseIcon = ({ color = 'white', size = 14 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "5",
                rx: "9",
                ry: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 250,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 251,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 252,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 249,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c14 = DatabaseIcon;
const CsvIcon = ({ color = '#059669', size = 11 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 257,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 258,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "13",
                x2: "16",
                y2: "13"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 259,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "17",
                x2: "16",
                y2: "17"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 260,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 256,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c15 = CsvIcon;
const PdfIcon = ({ color = '#dc2626', size = 11 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 265,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "14 2 14 8 20 8"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 266,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 15v-4h2a2 2 0 010 4H9zM15 11v4M12 11v4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 267,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 264,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c16 = PdfIcon;
const SettingsIcon = ({ color = '#64748b', size = 12 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 272,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 273,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 271,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c17 = SettingsIcon;
const XIcon = ({ color = '#94a3b8', size = 8 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 278,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 278,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 277,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c18 = XIcon;
/* ── Platform Brand Icons ── */ const RedditBrandIcon = ({ size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                fill: "#FF4500"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 285,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.67 10a1.46 1.46 0 00-2.47-1 7.12 7.12 0 00-3.85-1.23l.65-3.08 2.13.45a1 1 0 101.07-1 1 1 0 00-.96.68l-2.38-.5a.27.27 0 00-.32.2l-.73 3.44a7.14 7.14 0 00-3.89 1.23 1.46 1.46 0 10-1.61 2.39 2.87 2.87 0 000 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 000-.44 1.46 1.46 0 00.6-1.58zM7.27 11a1 1 0 111 1 1 1 0 01-1-1zm5.58 2.71a3.58 3.58 0 01-2.85.77 3.58 3.58 0 01-2.85-.77.27.27 0 01.38-.38 3.27 3.27 0 002.47.6 3.27 3.27 0 002.47-.6.27.27 0 01.38.38zm-.22-1.71a1 1 0 111-1 1 1 0 01-1 1z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 286,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 284,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c19 = RedditBrandIcon;
const FacebookBrandIcon = ({ size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                fill: "#1877F2"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 291,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.5 10H11.5V16H9V10H7.5V7.5H9V6C9 4.34 9.84 3 12 3H14V5.5H12.5C11.95 5.5 11.5 5.95 11.5 6.5V7.5H14L13.5 10Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 292,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 290,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c20 = FacebookBrandIcon;
const InstagramBrandIcon = ({ size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "20",
                height: "20",
                rx: "5",
                fill: "url(#ig-grad)"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 297,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "5",
                width: "10",
                height: "10",
                rx: "3",
                stroke: "white",
                strokeWidth: "1.5",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 298,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10",
                cy: "10",
                r: "2.5",
                stroke: "white",
                strokeWidth: "1.5",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 299,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "14",
                cy: "6",
                r: "0.9",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 300,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "ig-grad",
                    x1: "0",
                    y1: "20",
                    x2: "20",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#F9CE34"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 303,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "33%",
                            stopColor: "#EE2A7B"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 304,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#6228D7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 305,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 302,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 301,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 296,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c21 = InstagramBrandIcon;
const SaveIcon = ({ color = 'white', size = 11 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 316,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "17 21 17 13 7 13 7 21"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 317,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 3 7 8 15 8"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 318,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 314,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c22 = SaveIcon;
const SourceBrandIcon = ({ source, size = 18 })=>{
    if (source === 'reddit') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RedditBrandIcon, {
        size: size
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 323,
        columnNumber: 35
    }, ("TURBOPACK compile-time value", void 0));
    if (source === 'instagram') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramBrandIcon, {
        size: size
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 324,
        columnNumber: 38
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookBrandIcon, {
        size: size
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 325,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c23 = SourceBrandIcon;
/* ═══════════════════════════════════════════════
   BADGE
═══════════════════════════════════════════════ */ const Badge = ({ label, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9.5px] font-semibold flex-shrink-0",
        style: {
            background: style.bg,
            color: style.color
        },
        children: [
            style.dot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                style: {
                    background: style.dot
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 334,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 332,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c24 = Badge;
const ChipInput = ({ chips, onChange, placeholder, color, colorSoft, normalize, prefix = '' })=>{
    _s();
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const commit = (raw)=>{
        const val = (normalize ? normalize(raw) : raw).trim();
        if (!val || chips.includes(val)) {
            setDraft('');
            return;
        }
        onChange([
            ...chips,
            val
        ]);
        setDraft('');
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            commit(draft);
        } else if (e.key === 'Backspace' && !draft && chips.length) {
            onChange(chips.slice(0, -1));
        }
    };
    const remove = (idx)=>onChange(chips.filter((_, i)=>i !== idx));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-1 px-2 py-1.5 rounded-lg min-h-[32px] items-center",
        style: {
            background: '#f8fafc',
            border: `1px solid ${color}22`,
            transition: 'border-color 150ms'
        },
        onClick: ()=>{},
        children: [
            chips.map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",
                    style: {
                        background: colorSoft,
                        color: color,
                        border: `1px solid ${color}22`
                    },
                    children: [
                        prefix,
                        chip,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>remove(i),
                            style: {
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                color: color,
                                size: 8
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 389,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onKeyDown: handleKeyDown,
                onBlur: ()=>draft.trim() && commit(draft),
                placeholder: chips.length === 0 ? placeholder : '',
                className: "flex-1 text-[11px] bg-transparent outline-none text-slate-600 placeholder-slate-300",
                style: {
                    minWidth: 80
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 377,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChipInput, "47iAfciM0B18U/7Hf24u+IqJxRw=");
_c25 = ChipInput;
const FacebookParamsPanel = ({ params, onChange, color, colorSoft })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2.5 px-4 py-3",
        style: {
            background: '#fafbfc',
            borderBottom: '1px solid #f1f5f9'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: [
                                "Group URLs ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-normal normal-case tracking-normal text-slate-300",
                                    children: "(optional — Enter to add)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 430,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 429,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipInput, {
                            chips: params.groupUrls,
                            onChange: (groupUrls)=>onChange({
                                    ...params,
                                    groupUrls
                                }),
                            placeholder: "https://facebook.com/groups/…",
                            color: color,
                            colorSoft: colorSoft
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 432,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 428,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minWidth: 72
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: "Limit"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 441,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: 1,
                            max: 500,
                            value: params.limit ?? '',
                            onChange: (e)=>onChange({
                                    ...params,
                                    limit: e.target.value ? Number(e.target.value) : undefined
                                }),
                            placeholder: "—",
                            className: "w-full px-2 py-1.5 rounded-lg text-[11px] text-slate-700 outline-none",
                            style: {
                                background: '#f8fafc',
                                border: `1px solid ${color}22`,
                                height: 32
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 442,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 440,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minWidth: 72
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: "Days"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 458,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: 1,
                            max: 365,
                            value: params.days ?? '',
                            onChange: (e)=>onChange({
                                    ...params,
                                    days: e.target.value ? Number(e.target.value) : undefined
                                }),
                            placeholder: "—",
                            className: "w-full px-2 py-1.5 rounded-lg text-[11px] text-slate-700 outline-none",
                            style: {
                                background: '#f8fafc',
                                border: `1px solid ${color}22`,
                                height: 32
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 459,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 457,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 427,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 423,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c26 = FacebookParamsPanel;
const InstagramParamsPanel = ({ params, onChange, color, colorSoft })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2.5 px-4 py-3",
        style: {
            background: '#fafbfc',
            borderBottom: '1px solid #f1f5f9'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: [
                                "Hashtags ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-normal normal-case tracking-normal text-slate-300",
                                    children: "(optional — Enter to add)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 493,
                                    columnNumber: 20
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 492,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipInput, {
                            chips: params.hashtags,
                            onChange: (hashtags)=>onChange({
                                    ...params,
                                    hashtags
                                }),
                            placeholder: "#realestate, #jaipur…",
                            color: color,
                            colorSoft: colorSoft,
                            normalize: (v)=>v.replace(/^#+/, ''),
                            prefix: "#"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 495,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 491,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minWidth: 72
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: "Limit"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 506,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: 1,
                            max: 500,
                            value: params.limit ?? '',
                            onChange: (e)=>onChange({
                                    ...params,
                                    limit: e.target.value ? Number(e.target.value) : undefined
                                }),
                            placeholder: "—",
                            className: "w-full px-2 py-1.5 rounded-lg text-[11px] text-slate-700 outline-none",
                            style: {
                                background: '#f8fafc',
                                border: `1px solid ${color}22`,
                                height: 32
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 507,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 505,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minWidth: 72
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-400 mb-1",
                            children: "Days"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 523,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: 1,
                            max: 365,
                            value: params.days ?? '',
                            onChange: (e)=>onChange({
                                    ...params,
                                    days: e.target.value ? Number(e.target.value) : undefined
                                }),
                            placeholder: "—",
                            className: "w-full px-2 py-1.5 rounded-lg text-[11px] text-slate-700 outline-none",
                            style: {
                                background: '#f8fafc',
                                border: `1px solid ${color}22`,
                                height: 32
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 524,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 522,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 490,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 486,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c27 = InstagramParamsPanel;
const ScrapeNewDataButton = ({ onScraped, disabled, scrapFn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrapNewPosts"], scrapParams = {}, label = 'Scrape New Data' })=>{
    _s1();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleClick = async ()=>{
        if (status === 'scraping' || disabled) return;
        setStatus('scraping');
        try {
            const result = await scrapFn(scrapParams);
            if (result !== null) {
                setStatus('done');
                setTimeout(()=>{
                    setStatus('idle');
                    onScraped();
                }, 1400);
            } else {
                setStatus('error');
                setTimeout(()=>setStatus('idle'), 2500);
            }
        } catch  {
            setStatus('error');
            setTimeout(()=>setStatus('idle'), 2500);
        }
    };
    const isScraping = status === 'scraping';
    const isDone = status === 'done';
    const isError = status === 'error';
    const bg = isDone ? 'linear-gradient(135deg,#059669,#10b981)' : isError ? 'linear-gradient(135deg,#dc2626,#ef4444)' : isScraping ? 'linear-gradient(135deg,#1d4ed8,#7c3aed)' : 'linear-gradient(135deg,#1877F2,#7c3aed)';
    const displayLabel = isDone ? 'Synced!' : isError ? 'Failed — Retry?' : isScraping ? 'Scraping…' : label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        disabled: isScraping || disabled,
        title: "Pull fresh posts into the database, then refresh",
        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10.5px] font-semibold text-white transition-all active:scale-95",
        style: {
            background: bg,
            border: 'none',
            cursor: isScraping || disabled ? 'not-allowed' : 'pointer',
            boxShadow: isScraping || disabled ? 'none' : '0 2px 8px rgba(24,119,242,0.28)',
            opacity: disabled && !isScraping ? 0.55 : 1,
            transition: 'background 300ms, box-shadow 200ms, opacity 200ms',
            whiteSpace: 'nowrap'
        },
        children: [
            isScraping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                size: 11,
                color: "rgba(255,255,255,0.85)"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 616,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                color: "white",
                size: 11
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 618,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11,
                    lineHeight: 1
                },
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 620,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadCloudIcon, {
                color: "white",
                size: 12
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 621,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            displayLabel
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 600,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ScrapeNewDataButton, "pMVgpsUAJOHrZfHrrx/6nNCpzkc=");
_c28 = ScrapeNewDataButton;
/* ═══════════════════════════════════════════════
   MEDIA GALLERY
═══════════════════════════════════════════════ */ const MediaGallery = ({ media })=>{
    _s2();
    const imageUrls = media.filter((url)=>/\.(jpg|jpeg|png|gif|webp)/i.test(url) || url.includes('fbcdn.net'));
    if (imageUrls.length === 0) return null;
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const shown = imageUrls.slice(0, 4);
    const overflow = imageUrls.length - 4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1 mb-2",
                style: {
                    gridTemplateColumns: shown.length === 1 ? '1fr' : shown.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)'
                },
                children: shown.map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden max-w-[500px] max-h-[300px] rounded-lg cursor-pointer group",
                        style: {
                            aspectRatio: '1',
                            background: '#f1f5f9'
                        },
                        onClick: ()=>setLightbox(url),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: url,
                                alt: `media-${i}`,
                                className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
                                onError: (e)=>{
                                    e.target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            i === 3 && overflow > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                style: {
                                    background: 'rgba(0,0,0,0.45)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold text-[13px]",
                                    children: [
                                        "+",
                                        overflow
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 655,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 653,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 646,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 643,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                style: {
                    background: 'rgba(0,0,0,0.8)'
                },
                onClick: ()=>setLightbox(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: lightbox,
                    alt: "preview",
                    className: "max-w-[90vw] max-h-[80vh] rounded-xl object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 665,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 662,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s2(MediaGallery, "1oCL8TsZZRhQD/eSaq466G84bdA=");
_c29 = MediaGallery;
/* ═══════════════════════════════════════════════
   SCANNING ANIMATION
═══════════════════════════════════════════════ */ const ScanningAnimation = ({ step, query, cfg })=>{
    _s3();
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScanningAnimation.useEffect": ()=>{
            const t = setInterval({
                "ScanningAnimation.useEffect.t": ()=>setTick({
                        "ScanningAnimation.useEffect.t": (n)=>n + 1
                    }["ScanningAnimation.useEffect.t"])
            }["ScanningAnimation.useEffect.t"], 1400);
            return ({
                "ScanningAnimation.useEffect": ()=>clearInterval(t)
            })["ScanningAnimation.useEffect"];
        }
    }["ScanningAnimation.useEffect"], []);
    const pct = Math.round(step / cfg.fetchSteps.length * 100);
    const label = cfg.fetchSteps[Math.max(0, step - 1)] ?? 'Processing…';
    const chip1 = cfg.scanChips[tick % cfg.scanChips.length];
    const chip2 = cfg.scanChips[(tick + 3) % cfg.scanChips.length];
    const dots = [
        {
            cx: 148,
            cy: 42,
            delay: '0s'
        },
        {
            cx: 44,
            cy: 58,
            delay: '.47s'
        },
        {
            cx: 158,
            cy: 108,
            delay: '.93s'
        },
        {
            cx: 28,
            cy: 130,
            delay: '1.4s'
        },
        {
            cx: 110,
            cy: 158,
            delay: '1.86s'
        },
        {
            cx: 68,
            cy: 22,
            delay: '2.33s'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",
                style: {
                    background: cfg.colorSoft
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                    source: cfg.id
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 691,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 rounded-2xl rounded-tl-sm p-4",
                style: {
                    background: '#fff',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto mb-4",
                        style: {
                            width: 120,
                            height: 120
                        },
                        children: [
                            [
                                34,
                                48,
                                60
                            ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute rounded-full",
                                    style: {
                                        width: r * 2,
                                        height: r * 2,
                                        top: 60 - r,
                                        left: 60 - r,
                                        border: `1px solid ${cfg.color}22`,
                                        animation: 'sm-ring-pulse 3.4s ease-in-out infinite',
                                        animationDelay: `${i * 0.9}s`
                                    }
                                }, r, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 697,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0",
                                width: "120",
                                height: "120",
                                viewBox: "0 0 120 120",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "60",
                                        y1: "0",
                                        x2: "60",
                                        y2: "120",
                                        stroke: `${cfg.color}11`,
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "60",
                                        x2: "120",
                                        y2: "60",
                                        stroke: `${cfg.color}11`,
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 702,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                style: {
                                    animation: 'sm-radar-spin 2.8s linear infinite'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "120",
                                    height: "120",
                                    viewBox: "0 0 120 120",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                                id: `sweep-${cfg.id}`,
                                                cx: "50%",
                                                cy: "50%",
                                                r: "50%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: cfg.color,
                                                        stopOpacity: "0.22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: cfg.color,
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M60,60 L60,0 A60,60 0 0,1 111.96,30 Z",
                                            fill: `url(#sweep-${cfg.id})`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 712,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "60",
                                            y1: "60",
                                            x2: "60",
                                            y2: "0",
                                            stroke: cfg.color,
                                            strokeWidth: "1.2",
                                            strokeOpacity: "0.4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 713,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 705,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            dots.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute rounded-full",
                                    style: {
                                        width: 5,
                                        height: 5,
                                        left: d.cx / 180 * 120 - 2.5,
                                        top: d.cy / 180 * 120 - 2.5,
                                        background: cfg.color,
                                        animation: 'sm-dot-blink 2.8s ease-in-out infinite',
                                        animationDelay: d.delay
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute flex items-center justify-center rounded-full",
                                style: {
                                    width: 30,
                                    height: 30,
                                    top: 45,
                                    left: 45,
                                    background: cfg.colorSoft,
                                    border: `1px solid ${cfg.color}33`,
                                    animation: 'sm-core-pulse 2.2s ease-in-out infinite'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full",
                                    style: {
                                        width: 9,
                                        height: 9,
                                        background: cfg.color,
                                        opacity: 0.65
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 722,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 695,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-semibold text-slate-700 text-center mb-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 725,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 mb-3.5",
                        style: {
                            minHeight: 22
                        },
                        children: [
                            chip1,
                            chip2
                        ].map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded-full text-[10px] font-medium",
                                style: {
                                    background: cfg.colorSoft,
                                    border: `1px solid ${cfg.color}22`,
                                    color: cfg.id === 'reddit' ? '#c2410c' : '#1d4ed8',
                                    animation: 'sm-chip-in 0.35s ease both',
                                    animationDelay: `${i * 80}ms`
                                },
                                children: chip
                            }, `${chip}-${tick}-${i}`, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 728,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-[10px] text-slate-400 mb-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Step ",
                                    step,
                                    " / ",
                                    cfg.fetchSteps.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: cfg.id === 'reddit' ? '#c2410c' : '#2563eb',
                                    fontWeight: 600
                                },
                                children: [
                                    pct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 rounded-full overflow-hidden",
                        style: {
                            background: '#f1f5f9'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full",
                            style: {
                                width: `${pct}%`,
                                background: cfg.id === 'reddit' ? 'linear-gradient(90deg,#ff4500,#7c3aed)' : 'linear-gradient(90deg,#1877F2,#7c3aed)',
                                transition: 'width 700ms cubic-bezier(0.4,0,0.2,1)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 740,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 739,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 693,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 688,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ScanningAnimation, "839eW04Tz1hf/F1sZl1qo36v9fQ=");
_c30 = ScanningAnimation;
const SelectionRing = ({ selected, onToggle, color, alreadySaved })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (e)=>{
            e.stopPropagation();
            if (!alreadySaved) onToggle();
        },
        title: alreadySaved ? 'Already in database' : selected ? 'Deselect' : 'Select to save',
        className: "flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all mt-0.5",
        style: {
            borderColor: alreadySaved ? '#10b981' : selected ? color : '#cbd5e1',
            background: alreadySaved ? '#ecfdf5' : selected ? color : 'transparent',
            cursor: alreadySaved ? 'default' : 'pointer'
        },
        children: (selected || alreadySaved) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
            color: alreadySaved ? '#10b981' : 'white',
            size: 8
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
            lineNumber: 776,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 765,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c31 = SelectionRing;
const RedditPostCard = ({ post, index, selected, onToggle, alreadySaved })=>{
    _s4();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasText = post.text?.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl overflow-hidden transition-all",
        onClick: ()=>{
            if (!alreadySaved) onToggle();
        },
        style: {
            background: selected ? 'rgba(255,69,0,0.03)' : '#fafbfc',
            border: `1px solid ${selected ? 'rgba(255,69,0,0.25)' : alreadySaved ? 'rgba(16,185,129,0.2)' : '#f1f5f9'}`,
            animation: 'sm-cardstream .32s ease both',
            animationDelay: `${index * 50}ms`,
            cursor: alreadySaved ? 'default' : 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 pt-3 pb-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionRing, {
                                selected: selected,
                                onToggle: onToggle,
                                color: "#FF4500",
                                alreadySaved: alreadySaved
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11.5px] font-semibold text-slate-800 leading-snug flex-1",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: post.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: (e)=>e.stopPropagation(),
                                className: "flex-shrink-0 mt-0.5 opacity-50 hover:opacity-90 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 808,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 805,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide",
                                style: {
                                    background: 'rgba(255,69,0,0.07)',
                                    color: '#c2410c'
                                },
                                children: [
                                    "r/",
                                    post.subreddit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 812,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9.5px] text-slate-400",
                                children: [
                                    "u/",
                                    post.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 816,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-0.5 text-[10px] font-semibold",
                                        style: {
                                            color: '#059669'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 819,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            fmtNum(post.upvotes)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 818,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-0.5 text-[10px] text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBubbleIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 822,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            post.comments
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 821,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 801,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: expanded ? 200 : 0,
                            overflow: 'hidden',
                            transition: 'max-height 260ms ease'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-3.5 pb-3 pt-2.5 text-[11px] leading-relaxed text-slate-500",
                            style: {
                                borderTop: '0.5px solid #f1f5f9'
                            },
                            children: post.text
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 830,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 829,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            setExpanded((v)=>!v);
                        },
                        className: "w-full px-3.5 py-1.5 flex items-center gap-1 text-[9.5px] text-slate-400 hover:text-slate-600 transition-colors",
                        style: {
                            background: 'none',
                            border: 'none',
                            borderTop: '0.5px solid #f1f5f9',
                            cursor: 'pointer'
                        },
                        children: [
                            expanded ? 'Collapse' : 'Read more',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    transform: expanded ? 'rotate(180deg)' : 'none',
                                    transition: 'transform 200ms',
                                    display: 'inline-flex'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {
                                    size: 9
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 841,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 840,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 835,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 790,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(RedditPostCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c32 = RedditPostCard;
const FacebookPostCard = ({ post, index, selected, onToggle, alreadySaved })=>{
    _s5();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasText = post.text?.trim().length > 0;
    const isLong = post.text?.length > 160;
    const truncText = isLong ? post.text.slice(0, 160) + '…' : post.text;
    const avatarLetter = post.author && post.author !== 'unknown' ? post.author.charAt(0).toUpperCase() : 'F';
    const displayName = post.author && post.author !== 'unknown' ? post.author : post.authorId ?? 'Facebook User';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl overflow-hidden w-full max-w-[800px] mx-auto transition-all",
        onClick: ()=>{
            if (!alreadySaved) onToggle();
        },
        style: {
            background: selected ? 'rgba(24,119,242,0.03)' : '#fafbfc',
            border: `1px solid ${selected ? 'rgba(24,119,242,0.25)' : alreadySaved ? 'rgba(16,185,129,0.2)' : '#f1f5f9'}`,
            animation: 'sm-cardstream .32s ease both',
            animationDelay: `${index * 50}ms`,
            cursor: alreadySaved ? 'default' : 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 pt-3 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionRing, {
                                selected: selected,
                                onToggle: onToggle,
                                color: "#1877F2",
                                alreadySaved: alreadySaved
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 874,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white",
                                style: {
                                    background: 'linear-gradient(135deg,#1877F2,#42a5f5)'
                                },
                                children: avatarLetter
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 875,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold text-slate-700 leading-none truncate",
                                        children: displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 880,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-slate-400 mt-0.5",
                                        children: fmtDate(post.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 881,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 879,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: post.externalLink ?? post.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: (e)=>e.stopPropagation(),
                                className: "flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 886,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 883,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    post.title && post.title.trim() !== post.text?.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11.5px] font-semibold text-slate-800 leading-snug mb-1.5 line-clamp-2",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 890,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-relaxed text-slate-500 mb-2 whitespace-pre-line",
                        children: [
                            expanded ? post.text : truncText,
                            isLong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setExpanded((v)=>!v);
                                },
                                className: "ml-1 text-[10px] font-semibold",
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#1877F2'
                                },
                                children: expanded ? ' less' : ' more'
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 896,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 893,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    post.hasMedia && post.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGallery, {
                        media: post.media
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 905,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-3.5 py-2",
                style: {
                    borderTop: '0.5px solid #f1f5f9',
                    background: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-[10px] font-semibold",
                        style: {
                            color: '#1877F2'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrLike"], {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 910,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            fmtNum(post.likes)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-0.5 text-[10px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBubbleIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            fmtNum(post.comments)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 912,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-0.5 text-[10px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShareIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 916,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            fmtNum(post.shares)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 915,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: post.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e)=>e.stopPropagation(),
                        className: "ml-auto text-[9px] font-semibold transition-colors",
                        style: {
                            color: '#1877F2',
                            textDecoration: 'none'
                        },
                        children: "View post ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 918,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 907,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 861,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(FacebookPostCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c33 = FacebookPostCard;
const InstagramPostCard = ({ post, index, selected, onToggle, alreadySaved })=>{
    _s6();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasText = post.text?.trim().length > 0;
    const isLong = post.text?.length > 160;
    const truncText = isLong ? post.text.slice(0, 160) + '…' : post.text;
    const avatarLetter = post.author ? post.author.charAt(0).toUpperCase() : 'I';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl overflow-hidden w-full max-w-[800px] mx-auto transition-all",
        onClick: ()=>{
            if (!alreadySaved) onToggle();
        },
        style: {
            background: selected ? 'rgba(238,42,123,0.03)' : '#fafbfc',
            border: `1px solid ${selected ? 'rgba(238,42,123,0.25)' : alreadySaved ? 'rgba(16,185,129,0.2)' : '#f1f5f9'}`,
            animation: 'sm-cardstream .32s ease both',
            animationDelay: `${index * 50}ms`,
            cursor: alreadySaved ? 'default' : 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 pt-3 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectionRing, {
                                selected: selected,
                                onToggle: onToggle,
                                color: "#EE2A7B",
                                alreadySaved: alreadySaved
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 952,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white",
                                style: {
                                    background: 'linear-gradient(135deg,#F9CE34,#EE2A7B,#6228D7)'
                                },
                                children: avatarLetter
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold text-slate-700 leading-none truncate",
                                        children: [
                                            "@",
                                            post.author
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 958,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-slate-400 mt-0.5",
                                        children: fmtDate(post.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 959,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 957,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: post.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: (e)=>e.stopPropagation(),
                                className: "flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 964,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 961,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 951,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-relaxed text-slate-500 mb-2 whitespace-pre-line",
                        children: [
                            expanded ? post.text : truncText,
                            isLong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setExpanded((v)=>!v);
                                },
                                className: "ml-1 text-[10px] font-semibold",
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#EE2A7B'
                                },
                                children: expanded ? ' less' : ' more'
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 971,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 968,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    post.hasMedia && post.media.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaGallery, {
                        media: post.media
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 980,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 950,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-3.5 py-2",
                style: {
                    borderTop: '0.5px solid #f1f5f9',
                    background: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1 text-[10px] font-semibold",
                        style: {
                            color: '#EE2A7B'
                        },
                        children: [
                            "♥ ",
                            fmtNum(post.likes)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 984,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-0.5 text-[10px] text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatBubbleIcon, {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 988,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            fmtNum(post.comments)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: post.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: (e)=>e.stopPropagation(),
                        className: "ml-auto text-[9px] font-semibold transition-colors",
                        style: {
                            color: '#EE2A7B',
                            textDecoration: 'none'
                        },
                        children: "View post ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 990,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 982,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 939,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s6(InstagramPostCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c34 = InstagramPostCard;
const PostCard = ({ post, source, index, selected, onToggle, alreadySaved })=>{
    if (source === 'facebook') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookPostCard, {
        post: post,
        index: index,
        selected: selected,
        onToggle: onToggle,
        alreadySaved: alreadySaved
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1003,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
    if (source === 'instagram') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramPostCard, {
        post: post,
        index: index,
        selected: selected,
        onToggle: onToggle,
        alreadySaved: alreadySaved
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1005,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RedditPostCard, {
        post: post,
        index: index,
        selected: selected,
        onToggle: onToggle,
        alreadySaved: alreadySaved
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1006,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c35 = PostCard;
/* ═══════════════════════════════════════════════
   EXPORT UTILITIES
═══════════════════════════════════════════════ */ const escapeCsvCell = (val)=>{
    const s = String(val ?? '');
    if (s.includes(',') || s.includes('"') || s.includes('\n')) {
        return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
};
const exportToCSV = (posts, source, query)=>{
    const headers = [
        '#',
        'Source',
        'Author',
        'Title',
        'Caption',
        'Likes',
        'Comments',
        'Shares',
        'Engagement Score',
        'URL',
        'Date'
    ];
    const rows = posts.map((p, i)=>{
        if (source === 'reddit') {
            const r = p;
            return [
                i + 1,
                'Reddit',
                `u/${r.author}`,
                r.title,
                r.text ?? '',
                r.upvotes,
                r.comments,
                0,
                0,
                r.url,
                ''
            ];
        }
        const f = p;
        return [
            i + 1,
            source === 'instagram' ? 'Instagram' : 'Facebook',
            f.author,
            f.title ?? '',
            f.text ?? '',
            f.likes,
            f.comments,
            f.shares,
            f.engagementScore,
            f.url,
            f.createdAt ? fmtDate(f.createdAt) : ''
        ];
    });
    const csv = [
        headers,
        ...rows
    ].map((row)=>row.map(escapeCsvCell).join(',')).join('\n');
    const blob = new Blob([
        csv
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${source}-posts-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
};
const exportToPDF = (posts, insights, source, query)=>{
    const sourceLabel = source.charAt(0).toUpperCase() + source.slice(1);
    const dateStr = new Date().toLocaleDateString([], {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const brandColor = source === 'reddit' ? '#FF4500' : source === 'instagram' ? '#EE2A7B' : '#1877F2';
    const postRows = posts.map((p, i)=>{
        if (source === 'reddit') {
            const r = p;
            return `<tr><td>${i + 1}</td><td>u/${r.author}</td><td>${(r.title ?? '').slice(0, 80)}${(r.title ?? '').length > 80 ? '…' : ''}</td><td style="text-align:center">${r.upvotes}</td><td style="text-align:center">${r.comments}</td><td><a href="${r.url}" style="color:${brandColor}">View ↗</a></td></tr>`;
        }
        const f = p;
        const caption = (f.text ?? '').slice(0, 80) + ((f.text ?? '').length > 80 ? '…' : '');
        return `<tr><td>${i + 1}</td><td>${f.author ?? '—'}</td><td>${caption}</td><td style="text-align:center">${f.likes}</td><td style="text-align:center">${f.comments}</td><td><a href="${f.url}" style="color:${brandColor}">View ↗</a></td></tr>`;
    }).join('');
    const trendRows = insights.trends.map((t)=>`<tr><td><strong>${t.keyword}</strong></td><td>${t.insight}</td><td style="text-align:center;text-transform:capitalize">${t.confidence}</td></tr>`).join('');
    const signalRows = insights.demandSignals.map((s)=>`<tr><td style="text-transform:capitalize">${s.type}</td><td>${s.location}</td><td>${s.description}</td></tr>`).join('');
    const oppRows = insights.opportunities.map((o, i)=>`<tr><td>${i + 1}</td><td><strong>${o.title}</strong></td><td>${o.action}</td></tr>`).join('');
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/><title>${sourceLabel} Social Mining Report</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1e293b;background:#fff;padding:40px;font-size:12px;line-height:1.6}.header{border-bottom:3px solid ${brandColor};padding-bottom:18px;margin-bottom:28px;display:flex;justify-content:space-between;align-items:flex-end}.header h1{font-size:22px;font-weight:700;color:${brandColor}}.header .meta{font-size:11px;color:#94a3b8;text-align:right}.summary-box{background:#f8fafc;border-left:4px solid ${brandColor};padding:14px 16px;border-radius:4px;margin-bottom:24px;font-size:12px;color:#475569;line-height:1.7}.stats-row{display:flex;gap:12px;margin-bottom:28px}.stat{flex:1;background:#f8fafc;border-radius:6px;padding:12px;text-align:center}.stat .val{font-size:20px;font-weight:700;color:${brandColor}}.stat .lbl{font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-top:2px}h2{font-size:14px;font-weight:700;color:#1e293b;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid #e2e8f0}section{margin-bottom:28px}table{width:100%;border-collapse:collapse;font-size:11px}th{background:${brandColor};color:#fff;font-weight:600;padding:8px 10px;text-align:left}td{padding:7px 10px;border-bottom:1px solid #f1f5f9;vertical-align:top}tr:nth-child(even) td{background:#fafbfc}a{color:${brandColor};text-decoration:none}.footer{margin-top:32px;padding-top:14px;border-top:1px solid #e2e8f0;font-size:10px;color:#cbd5e1;text-align:center}@media print{body{padding:24px}}</style></head><body><div class="header"><div><div style="font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Social Mining Report</div><h1>${sourceLabel} — ${query}</h1></div><div class="meta">Generated ${dateStr}<br/>${posts.length} posts analysed</div></div><div class="summary-box">${insights.summary}</div><div class="stats-row"><div class="stat"><div class="val">${posts.length}</div><div class="lbl">Posts</div></div><div class="stat"><div class="val">${insights.trends.length}</div><div class="lbl">Trends</div></div><div class="stat"><div class="val">${insights.demandSignals.length}</div><div class="lbl">Signals</div></div><div class="stat"><div class="val">${insights.opportunities.length}</div><div class="lbl">Opportunities</div></div><div class="stat"><div class="val">${Math.round(insights.sentiment.positive * 100)}%</div><div class="lbl">Positive</div></div></div><section><h2>Posts</h2><table><thead><tr><th>#</th><th>Author</th><th>Caption</th><th>Likes</th><th>Comments</th><th>Link</th></tr></thead><tbody>${postRows}</tbody></table></section><section><h2>Trends</h2><table><thead><tr><th>Keyword</th><th>Insight</th><th>Confidence</th></tr></thead><tbody>${trendRows}</tbody></table></section><section><h2>Demand Signals</h2><table><thead><tr><th>Type</th><th>Location</th><th>Description</th></tr></thead><tbody>${signalRows}</tbody></table></section><section><h2>Opportunities</h2><table><thead><tr><th>#</th><th>Title</th><th>Recommended Action</th></tr></thead><tbody>${oppRows}</tbody></table></section><div class="footer">Social Miner · ${sourceLabel} · ${dateStr}</div><script>window.onload=()=>window.print()</script></body></html>`;
    const w = window.open('', '_blank');
    if (w) {
        w.document.write(html);
        w.document.close();
    }
};
/* ═══════════════════════════════════════════════
   RESULTS BUBBLE
═══════════════════════════════════════════════ */ const ResultsBubble = ({ msg, cfg, onRerun, mode, onLoadMore, onPostsDeleted })=>{
    _s7();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('posts');
    const [selectedUrls, setSelectedUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [saveResult, setSaveResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { insights, posts, pagination, fetchedAt } = msg;
    if (!insights) return null;
    const allUrls = posts.map((p)=>p.url);
    const allSelected = allUrls.length > 0 && allUrls.every((u)=>selectedUrls.has(u));
    const togglePost = (url)=>{
        setSelectedUrls((prev)=>{
            const next = new Set(prev);
            next.has(url) ? next.delete(url) : next.add(url);
            return next;
        });
    };
    const toggleAll = ()=>{
        if (allSelected) {
            setSelectedUrls(new Set());
        } else {
            setSelectedUrls(new Set(allUrls));
        }
    };
    /* ──────────────────────────────────────────────
     handleSave
     After a successful save the backend removes
     those records from the scrape collection, so
     we mirror that by removing them from the UI.
  ────────────────────────────────────────────── */ const handleSave = async ()=>{
        if (saveStatus === 'saving' || selectedUrls.size === 0) return;
        setSaveStatus('saving');
        const toSave = posts.filter((p)=>selectedUrls.has(p.url));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLeadsToDB"])(toSave, cfg.id);
        if (result !== null) {
            setSaveStatus('saved');
            setSaveResult(result);
            const deletedUrls = Array.from(selectedUrls);
            // Clear selection first
            setSelectedUrls(new Set());
            // Remove deleted posts from parent message state
            onPostsDeleted(msg.id, deletedUrls);
            setTimeout(()=>{
                setSaveStatus('idle');
                setSaveResult(null);
            }, 3000);
        } else {
            setSaveStatus('error');
            setTimeout(()=>setSaveStatus('idle'), 2500);
        }
    };
    const { positive, neutral, negative } = insights.sentiment;
    const sentTotal = positive + neutral + negative || 1;
    const tabCount = (key)=>{
        if (key === 'posts') return posts.length;
        if (key === 'insights') return insights.trends.length;
        if (key === 'signals') return insights.demandSignals.length;
        return insights.opportunities.length;
    };
    const isSaving = saveStatus === 'saving';
    const isSaved = saveStatus === 'saved';
    const isError = saveStatus === 'error';
    const saveBg = isSaved ? 'linear-gradient(135deg,#059669,#10b981)' : isError ? 'linear-gradient(135deg,#dc2626,#ef4444)' : isSaving ? 'linear-gradient(135deg,#1d4ed8,#7c3aed)' : 'linear-gradient(135deg,#0f766e,#0369a1)';
    const saveLabel = isSaved ? saveResult ? `Saved ${saveResult.saved}${saveResult.duplicates > 0 ? ` · ${saveResult.duplicates} dupes skipped` : ''}` : 'Saved!' : isError ? 'Save failed' : isSaving ? 'Saving…' : `Save ${selectedUrls.size} lead${selectedUrls.size !== 1 ? 's' : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3",
        style: {
            animation: 'sm-fadein .4s ease both'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",
                style: {
                    background: cfg.colorSoft
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                    source: cfg.id
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1164,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 rounded-2xl rounded-tl-sm overflow-hidden",
                style: {
                    background: '#fff',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 border-b",
                        style: {
                            borderColor: '#f8fafc'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11.5px] leading-relaxed text-slate-600 mb-2.5 max-w-[1000px]",
                                children: insights.summary
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-wrap",
                                children: [
                                    [
                                        {
                                            v: `${posts.length} posts`,
                                            c: '#0369a1'
                                        },
                                        {
                                            v: `${insights.trends.length} trends`,
                                            c: '#7c3aed'
                                        },
                                        {
                                            v: `${insights.demandSignals.length} signals`,
                                            c: '#d97706'
                                        },
                                        {
                                            v: `${insights.opportunities.length} opps`,
                                            c: '#059669'
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10.5px] font-semibold",
                                            style: {
                                                color: s.c
                                            },
                                            children: s.v
                                        }, s.v, false, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 24
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9.5px] text-slate-300",
                                                children: fmtTime(fetchedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1181,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>exportToCSV(posts, cfg.id, msg.query),
                                                title: "Export CSV",
                                                className: "flex items-center gap-1 px-2 py-1 rounded-md text-[9.5px] font-semibold transition-all hover:bg-emerald-50 active:scale-95",
                                                style: {
                                                    background: 'none',
                                                    border: '1px solid rgba(5,150,105,0.2)',
                                                    cursor: 'pointer',
                                                    color: '#059669'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CsvIcon, {
                                                        color: "#059669",
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " CSV"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1182,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>exportToPDF(posts, insights, cfg.id, msg.query),
                                                title: "Export PDF",
                                                className: "flex items-center gap-1 px-2 py-1 rounded-md text-[9.5px] font-semibold transition-all hover:bg-red-50 active:scale-95",
                                                style: {
                                                    background: 'none',
                                                    border: '1px solid rgba(220,38,38,0.2)',
                                                    cursor: 'pointer',
                                                    color: '#dc2626'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfIcon, {
                                                        color: "#dc2626",
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onRerun(msg.query),
                                                className: "p-1 rounded-md transition-all hover:bg-slate-50 active:scale-90",
                                                style: {
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                },
                                                title: "Re-run",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1194,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        style: {
                            borderBottom: '1px solid #f8fafc'
                        },
                        children: TABS.map((t)=>{
                            const active = t.key === activeTab;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(t.key),
                                className: "flex-1 py-2.5 flex items-center justify-center gap-1.5 text-[11px] font-medium",
                                style: {
                                    background: active ? t.bg : 'transparent',
                                    color: active ? t.color : '#94a3b8',
                                    border: 'none',
                                    cursor: 'pointer',
                                    borderBottom: active ? `2px solid ${t.color}` : '2px solid transparent',
                                    transition: 'all 150ms'
                                },
                                children: [
                                    t.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-bold px-1 py-0.5 rounded",
                                        style: {
                                            background: active ? `${t.color}18` : '#f8fafc',
                                            color: active ? t.color : '#cbd5e1'
                                        },
                                        children: tabCount(t.key)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, t.key, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1208,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto",
                        style: {
                            maxHeight: 450,
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: [
                            activeTab === 'posts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-0 z-10 flex items-center gap-2 px-3.5 py-2",
                                        style: {
                                            background: 'rgba(248,250,252,0.95)',
                                            backdropFilter: 'blur(6px)',
                                            borderBottom: '1px solid #f1f5f9'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleAll,
                                                className: "flex items-center gap-1.5 text-[10px] font-semibold transition-all px-2 py-1 rounded-lg",
                                                style: {
                                                    background: allSelected ? 'rgba(3,105,161,0.06)' : 'transparent',
                                                    border: '1px solid rgba(3,105,161,0.15)',
                                                    color: '#0369a1',
                                                    cursor: 'pointer'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded border flex items-center justify-center",
                                                        style: {
                                                            borderColor: allSelected ? '#0369a1' : '#cbd5e1',
                                                            background: allSelected ? '#0369a1' : 'transparent'
                                                        },
                                                        children: allSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                                                            color: "white",
                                                            size: 7
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1246,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                        lineNumber: 1244,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    allSelected ? 'Deselect all' : 'Select all'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1235,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9.5px] text-slate-400",
                                                children: selectedUrls.size > 0 ? `${selectedUrls.size} selected` : `Click posts to select`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1251,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSave,
                                                    disabled: selectedUrls.size === 0 || isSaving,
                                                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white transition-all active:scale-95",
                                                    style: {
                                                        background: selectedUrls.size === 0 ? '#e2e8f0' : saveBg,
                                                        border: 'none',
                                                        cursor: selectedUrls.size === 0 || isSaving ? 'not-allowed' : 'pointer',
                                                        color: selectedUrls.size === 0 ? '#94a3b8' : 'white',
                                                        boxShadow: selectedUrls.size > 0 && !isSaving ? '0 2px 8px rgba(15,118,110,0.28)' : 'none',
                                                        transition: 'all 200ms',
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    children: [
                                                        isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                                            size: 10,
                                                            color: "rgba(255,255,255,0.85)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1272,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : isSaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                                                            color: "white",
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1274,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveIcon, {
                                                            color: selectedUrls.size === 0 ? '#94a3b8' : 'white',
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        saveLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1257,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1233,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 flex flex-col gap-2",
                                        children: [
                                            posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-[11px] text-slate-400 py-6",
                                                children: "All posts have been saved as leads."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : posts.map((p, i)=>{
                                                const url = p.url;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostCard, {
                                                    post: p,
                                                    source: cfg.id,
                                                    index: i,
                                                    selected: selectedUrls.has(url),
                                                    onToggle: ()=>togglePost(url),
                                                    alreadySaved: false
                                                }, `${url}-${i}`, false, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1292,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            mode === 'query' && pagination.hasMore && posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onLoadMore(msg.id),
                                                disabled: msg.loadingMore,
                                                className: "w-full py-2.5 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all",
                                                style: {
                                                    background: msg.loadingMore ? '#f8fafc' : 'rgba(3,105,161,0.04)',
                                                    border: '1px dashed rgba(3,105,161,0.2)',
                                                    color: msg.loadingMore ? '#94a3b8' : '#0369a1',
                                                    cursor: msg.loadingMore ? 'not-allowed' : 'pointer'
                                                },
                                                children: msg.loadingMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                                            size: 11,
                                                            color: "#94a3b8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Loading more…"
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {
                                                            color: "#0369a1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1318,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Load more posts"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !pagination.hasMore && posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-[9.5px] text-slate-300 py-1.5",
                                                children: [
                                                    posts.length,
                                                    " of ",
                                                    pagination.count || posts.length,
                                                    " posts loaded"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1283,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1231,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'insights' && /* ... your existing insights tab JSX ... */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                            activeTab === 'signals' && /* ... your existing signals tab JSX ...  */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                            activeTab === 'opps' && /* ... your existing opps tab JSX ...     */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1229,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1161,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s7(ResultsBubble, "9qap+nQuXq1cJAMQGGg0YHYBCmQ=");
_c36 = ResultsBubble;
/* ═══════════════════════════════════════════════
   WELCOME SCREEN — REDDIT (query mode)
═══════════════════════════════════════════════ */ const WelcomeScreenQuery = ({ cfg, onSelect })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col items-center justify-center px-5 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-4",
                style: {
                    background: `linear-gradient(135deg,${cfg.colorSoft},rgba(124,58,237,0.08))`,
                    border: `1px solid ${cfg.color}22`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                    source: cfg.id,
                    size: 26
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1348,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1346,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[13px] font-semibold text-slate-700 mb-1",
                children: [
                    cfg.label,
                    " Miner"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1350,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11.5px] text-slate-400 mb-6 text-center max-w-[220px] leading-relaxed",
                children: [
                    "Surface demand signals, trends & opportunities from ",
                    cfg.label,
                    " posts."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1351,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] font-bold uppercase tracking-widest text-slate-300 mb-2.5 text-center",
                        children: "Try a query"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1355,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: cfg.suggestedQueries.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelect(q),
                                className: "w-full text-left px-4 py-2.5 rounded-xl text-[12px] text-slate-600 font-medium transition-all active:scale-[0.98]",
                                style: {
                                    background: '#fff',
                                    border: '1px solid #f1f5f9',
                                    cursor: 'pointer',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                                    animation: 'sm-cardstream .35s ease both',
                                    animationDelay: `${i * 60}ms`
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = `${cfg.color}44`;
                                    e.currentTarget.style.background = cfg.colorSoft;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                    e.currentTarget.style.background = '#fff';
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        style: {
                                            color: cfg.color,
                                            fontSize: 11
                                        },
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    q
                                ]
                            }, q, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1358,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1356,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1354,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1345,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c37 = WelcomeScreenQuery;
/* ═══════════════════════════════════════════════
   WELCOME SCREEN — FACEBOOK/INSTAGRAM (button mode)
═══════════════════════════════════════════════ */ const WelcomeScreenButton = ({ cfg, onFetch, isFetching })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col items-center justify-center px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-2xl flex items-center justify-center mb-5",
                style: {
                    background: `linear-gradient(135deg,${cfg.colorSoft},rgba(124,58,237,0.08))`,
                    border: `1px solid ${cfg.color}22`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                    source: cfg.id,
                    size: 30
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1391,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1384,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[13px] font-semibold text-slate-700 mb-1",
                children: [
                    cfg.label,
                    " Feed"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1394,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11.5px] text-slate-400 mb-7 text-center max-w-[210px] leading-relaxed",
                children: [
                    "Load all saved ",
                    cfg.label,
                    " posts from the database and surface insights in one click."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1395,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-1.5 mb-7",
                children: [
                    'Trends',
                    'Demand Signals',
                    'Sentiment',
                    'Opportunities'
                ].map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2.5 py-1 rounded-full text-[10px] font-semibold",
                        style: {
                            background: cfg.colorSoft,
                            color: '#1d4ed8',
                            border: `1px solid ${cfg.color}20`,
                            animation: 'sm-cardstream .35s ease both',
                            animationDelay: `${i * 55}ms`
                        },
                        children: label
                    }, label, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1401,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1399,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onFetch,
                disabled: isFetching,
                className: "flex items-center gap-2.5 px-6 py-3 rounded-2xl text-[13px] font-bold text-white transition-all active:scale-95",
                style: {
                    background: isFetching ? 'linear-gradient(135deg,#1d4ed8,#7c3aed)' : 'linear-gradient(135deg,#1877F2,#7c3aed)',
                    border: 'none',
                    cursor: isFetching ? 'not-allowed' : 'pointer',
                    boxShadow: isFetching ? 'none' : '0 4px 18px rgba(24,119,242,0.35)',
                    opacity: isFetching ? 0.75 : 1,
                    transition: 'all 200ms',
                    minWidth: 190,
                    justifyContent: 'center'
                },
                children: isFetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                            size: 14,
                            color: "rgba(255,255,255,0.85)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1435,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Fetching Posts…"
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatabaseIcon, {
                            color: "white",
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1436,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Fetch All Posts"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1417,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[9.5px] text-slate-300 mt-3 text-center",
                children: "Loads all posts from your database"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1440,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1383,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c38 = WelcomeScreenButton;
/* ═══════════════════════════════════════════════
   PROMPT BAR  (Reddit / query mode only)
═══════════════════════════════════════════════ */ const PromptBar = ({ value, onChange, onSubmit, disabled, placeholder })=>{
    _s8();
    const taRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canSend = !disabled && value.trim().length > 0;
    const handleKey = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (canSend) onSubmit();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PromptBar.useEffect": ()=>{
            const ta = taRef.current;
            if (!ta) return;
            ta.style.height = 'auto';
            ta.style.height = `${Math.min(ta.scrollHeight, 110)}px`;
        }
    }["PromptBar.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 px-4 py-3 border-t",
        style: {
            borderColor: '#f1f5f9',
            background: '#fff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2.5 rounded-2xl px-4 py-3",
                style: {
                    background: '#f8fafc',
                    border: `1.5px solid ${canSend ? '#bfdbfe' : '#e2e8f0'}`,
                    boxShadow: canSend ? '0 0 0 3px rgba(3,105,161,0.06)' : 'none',
                    transition: 'border-color 150ms,box-shadow 150ms'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: taRef,
                        rows: 1,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        onKeyDown: handleKey,
                        disabled: disabled,
                        placeholder: placeholder,
                        className: "flex-1 resize-none bg-transparent text-[12.5px] text-slate-700 placeholder-slate-400 outline-none leading-relaxed",
                        style: {
                            minHeight: 22,
                            maxHeight: 110
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1472,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSubmit,
                        disabled: !canSend,
                        className: "flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all active:scale-90",
                        style: {
                            background: canSend ? 'linear-gradient(135deg,#0369a1,#7c3aed)' : '#e2e8f0',
                            border: 'none',
                            cursor: canSend ? 'pointer' : 'not-allowed',
                            boxShadow: canSend ? '0 2px 8px rgba(3,105,161,0.28)' : 'none',
                            transition: 'all 150ms'
                        },
                        children: disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                            size: 13,
                            color: "#94a3b8"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1479,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {
                            color: canSend ? 'white' : '#94a3b8'
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1479,
                            columnNumber: 67
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1476,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1470,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[9px] text-slate-300 mt-1.5 text-center tracking-wide",
                children: "Enter ↵ to mine · Shift+Enter for new line"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1482,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1469,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s8(PromptBar, "XgTBvgDGVvK0yshWvgt2kIbFJ6I=");
_c39 = PromptBar;
/* ═══════════════════════════════════════════════
   FETCH BAR  (Facebook/Instagram / button mode)
═══════════════════════════════════════════════ */ const FetchBar = ({ onFetch, disabled, lastFetchedAt })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 px-4 py-3 border-t flex items-center gap-3",
        style: {
            borderColor: '#f1f5f9',
            background: '#fff'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: lastFetchedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-400",
                    children: [
                        "Last fetched at ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-500",
                            children: fmtTime(lastFetchedAt)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1506,
                            columnNumber: 27
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1505,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-400",
                    children: "Fetch all posts from the database"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1509,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1503,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onFetch,
                disabled: disabled,
                className: "flex items-center gap-2 px-4 py-2 rounded-xl text-[11.5px] font-bold text-white transition-all active:scale-95 flex-shrink-0",
                style: {
                    background: disabled ? 'linear-gradient(135deg,#1d4ed8,#7c3aed)' : 'linear-gradient(135deg,#1877F2,#7c3aed)',
                    border: 'none',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    boxShadow: disabled ? 'none' : '0 2px 10px rgba(24,119,242,0.3)',
                    opacity: disabled ? 0.7 : 1,
                    whiteSpace: 'nowrap',
                    transition: 'all 150ms'
                },
                children: disabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                            size: 12,
                            color: "rgba(255,255,255,0.85)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1529,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Fetching…"
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {
                            color: "white",
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1530,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Fetch Posts"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1512,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1499,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c40 = FetchBar;
const BUTTON_MODE_LABEL = 'All Posts';
const ScraperWorkspace = ({ cfg, fetchFn, defaultQuery, mode = 'query' })=>{
    _s9();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputQuery, setInputQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const isFetching = messages.some((m)=>m.status === 'fetching');
    const lastQueryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const [lastFetchedAt, setLastFetchedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ── Per-source scraper params ── */ const [fbParams, setFbParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        groupUrls: []
    });
    const [igParams, setIgParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hashtags: []
    });
    const [showParams, setShowParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeScraperParams = cfg.id === 'facebook' ? fbParams : cfg.id === 'instagram' ? igParams : {};
    const clearTimersFor = (id)=>{
        timersRef.current.get(id)?.forEach(clearTimeout);
        timersRef.current.delete(id);
    };
    const updateMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[updateMsg]": (id, patch)=>{
            setMessages({
                "ScraperWorkspace.useCallback[updateMsg]": (prev)=>prev.map({
                        "ScraperWorkspace.useCallback[updateMsg]": (m)=>m.id === id ? {
                                ...m,
                                ...patch
                            } : m
                    }["ScraperWorkspace.useCallback[updateMsg]"])
            }["ScraperWorkspace.useCallback[updateMsg]"]);
        }
    }["ScraperWorkspace.useCallback[updateMsg]"], []);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScraperWorkspace.useEffect": ()=>{
            messagesRef.current = messages;
        }
    }["ScraperWorkspace.useEffect"], [
        messages
    ]);
    /* ── Remove posts deleted via save ── */ const handlePostsDeleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[handlePostsDeleted]": (msgId, deletedUrls)=>{
            const urlSet = new Set(deletedUrls);
            setMessages({
                "ScraperWorkspace.useCallback[handlePostsDeleted]": (prev)=>prev.map({
                        "ScraperWorkspace.useCallback[handlePostsDeleted]": (m)=>{
                            if (m.id !== msgId) return m;
                            return {
                                ...m,
                                posts: m.posts.filter({
                                    "ScraperWorkspace.useCallback[handlePostsDeleted]": (p)=>!urlSet.has(p.url)
                                }["ScraperWorkspace.useCallback[handlePostsDeleted]"])
                            };
                        }
                    }["ScraperWorkspace.useCallback[handlePostsDeleted]"])
            }["ScraperWorkspace.useCallback[handlePostsDeleted]"]);
        }
    }["ScraperWorkspace.useCallback[handlePostsDeleted]"], []);
    const handleLoadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[handleLoadMore]": async (msgId)=>{
            const msg = messagesRef.current.find({
                "ScraperWorkspace.useCallback[handleLoadMore].msg": (m)=>m.id === msgId
            }["ScraperWorkspace.useCallback[handleLoadMore].msg"]);
            if (!msg || !msg.pagination.after || msg.loadingMore) return;
            updateMsg(msgId, {
                loadingMore: true
            });
            try {
                const result = await fetchFn(`${msg.query}&after=${msg.pagination.after}`);
                if (result?.success) {
                    setMessages({
                        "ScraperWorkspace.useCallback[handleLoadMore]": (prev)=>prev.map({
                                "ScraperWorkspace.useCallback[handleLoadMore]": (m)=>{
                                    if (m.id !== msgId) return m;
                                    const old = m.insights;
                                    const next = result.insights;
                                    const merged = old && next ? {
                                        summary: old.summary,
                                        trends: [
                                            ...old.trends,
                                            ...next.trends
                                        ],
                                        demandSignals: [
                                            ...old.demandSignals,
                                            ...next.demandSignals
                                        ],
                                        opportunities: [
                                            ...old.opportunities,
                                            ...next.opportunities
                                        ],
                                        sentiment: {
                                            positive: old.sentiment.positive + next.sentiment.positive,
                                            neutral: old.sentiment.neutral + next.sentiment.neutral,
                                            negative: old.sentiment.negative + next.sentiment.negative
                                        }
                                    } : old ?? next;
                                    return {
                                        ...m,
                                        posts: [
                                            ...m.posts,
                                            ...result.posts ?? []
                                        ],
                                        pagination: result.pagination ?? m.pagination,
                                        insights: merged,
                                        loadingMore: false
                                    };
                                }
                            }["ScraperWorkspace.useCallback[handleLoadMore]"])
                    }["ScraperWorkspace.useCallback[handleLoadMore]"]);
                } else {
                    updateMsg(msgId, {
                        loadingMore: false
                    });
                }
            } catch (e) {
                console.error(e);
                updateMsg(msgId, {
                    loadingMore: false
                });
            }
        }
    }["ScraperWorkspace.useCallback[handleLoadMore]"], [
        fetchFn,
        updateMsg
    ]);
    const runFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[runFetch]": async (query)=>{
            lastQueryRef.current = query;
            const id = uid();
            const newMsg = {
                id,
                query,
                status: 'fetching',
                step: 0,
                posts: [],
                insights: null,
                pagination: {
                    datasetId: '',
                    count: 0
                },
                loadingMore: false,
                fetchedAt: null
            };
            setMessages({
                "ScraperWorkspace.useCallback[runFetch]": (prev)=>[
                        ...prev,
                        newMsg
                    ]
            }["ScraperWorkspace.useCallback[runFetch]"]);
            const timers = [];
            cfg.fetchSteps.forEach({
                "ScraperWorkspace.useCallback[runFetch]": (_, i)=>{
                    const t = setTimeout({
                        "ScraperWorkspace.useCallback[runFetch].t": ()=>updateMsg(id, {
                                step: i + 1
                            })
                    }["ScraperWorkspace.useCallback[runFetch].t"], i * 800 + 500);
                    timers.push(t);
                }
            }["ScraperWorkspace.useCallback[runFetch]"]);
            timersRef.current.set(id, timers);
            let result = null;
            try {
                result = mode === 'button' ? await fetchFn(undefined, activeScraperParams) : await fetchFn(query);
            } catch (e) {
                console.error(e);
            }
            const delay = cfg.fetchSteps.length * 800 + 700;
            const finish = setTimeout({
                "ScraperWorkspace.useCallback[runFetch].finish": ()=>{
                    const now = new Date();
                    if (result?.success) {
                        updateMsg(id, {
                            status: 'done',
                            posts: result.posts ?? [],
                            insights: result.insights ?? null,
                            pagination: result.pagination ?? {
                                datasetId: '',
                                count: 0
                            },
                            fetchedAt: now
                        });
                        setLastFetchedAt(now);
                    } else {
                        updateMsg(id, {
                            status: 'error',
                            fetchedAt: now
                        });
                    }
                    clearTimersFor(id);
                }
            }["ScraperWorkspace.useCallback[runFetch].finish"], delay);
            timers.push(finish);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ScraperWorkspace.useCallback[runFetch]"], [
        cfg,
        fetchFn,
        mode,
        updateMsg,
        fbParams,
        igParams
    ]);
    const handleRerun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[handleRerun]": (query)=>{
            runFetch(query);
        }
    }["ScraperWorkspace.useCallback[handleRerun]"], [
        runFetch
    ]);
    const handleFetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[handleFetch]": ()=>{
            if (isFetching) return;
            if (mode === 'button') {
                runFetch(BUTTON_MODE_LABEL);
            } else {
                const q = inputQuery.trim();
                if (!q) return;
                setInputQuery('');
                runFetch(q);
            }
        }
    }["ScraperWorkspace.useCallback[handleFetch]"], [
        isFetching,
        mode,
        inputQuery,
        runFetch
    ]);
    const handlePostScrape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScraperWorkspace.useCallback[handlePostScrape]": ()=>{
            const q = lastQueryRef.current || (mode === 'button' ? BUTTON_MODE_LABEL : cfg.suggestedQueries[0]);
            if (q) runFetch(q);
        }
    }["ScraperWorkspace.useCallback[handlePostScrape]"], [
        runFetch,
        mode,
        cfg.suggestedQueries
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScraperWorkspace.useEffect": ()=>{
            const el = scrollRef.current;
            if (!el) return;
            setTimeout({
                "ScraperWorkspace.useEffect": ()=>el.scrollTo({
                        top: el.scrollHeight,
                        behavior: 'smooth'
                    })
            }["ScraperWorkspace.useEffect"], 80);
        }
    }["ScraperWorkspace.useEffect"], [
        messages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScraperWorkspace.useEffect": ()=>{
            if (mode === 'query' && defaultQuery) {
                runFetch(defaultQuery);
            }
            return ({
                "ScraperWorkspace.useEffect": ()=>{
                    timersRef.current.forEach({
                        "ScraperWorkspace.useEffect": (ts)=>ts.forEach(clearTimeout)
                    }["ScraperWorkspace.useEffect"]);
                }
            })["ScraperWorkspace.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ScraperWorkspace.useEffect"], []);
    const isButtonMode = mode === 'button';
    const hasMessages = messages.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden",
        style: {
            background: '#f8fafc'
        },
        children: [
            isButtonMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-between px-4",
                        style: {
                            height: 46,
                            background: '#fff',
                            borderBottom: showParams ? 'none' : '1px solid #f1f5f9',
                            boxShadow: showParams ? 'none' : '0 1px 0 #f1f5f9'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                                        source: cfg.id,
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1732,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                        style: {
                                            color: '#94a3b8',
                                            letterSpacing: '0.1em'
                                        },
                                        children: [
                                            cfg.label,
                                            " Feed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1733,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1731,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowParams((v)=>!v),
                                        title: "Configure scrape parameters",
                                        className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold transition-all",
                                        style: {
                                            background: showParams ? cfg.id === 'instagram' ? 'rgba(238,42,123,0.07)' : 'rgba(24,119,242,0.07)' : 'transparent',
                                            border: `1px solid ${showParams ? cfg.color + '33' : '#e2e8f0'}`,
                                            color: showParams ? cfg.color : '#94a3b8',
                                            cursor: 'pointer',
                                            transition: 'all 150ms'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsIcon, {
                                                color: showParams ? cfg.color : '#94a3b8',
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1754,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            cfg.id === 'facebook' ? fbParams.groupUrls.length > 0 || fbParams.limit || fbParams.days ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: cfg.color
                                                },
                                                children: "configured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1756,
                                                columnNumber: 89
                                            }, ("TURBOPACK compile-time value", void 0)) : 'configure' : igParams.hashtags.length > 0 || igParams.limit || igParams.days ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: cfg.color
                                                },
                                                children: "configured"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1757,
                                                columnNumber: 88
                                            }, ("TURBOPACK compile-time value", void 0)) : 'configure'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1742,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrapeNewDataButton, {
                                        onScraped: handlePostScrape,
                                        disabled: isFetching,
                                        scrapFn: cfg.scrapFn,
                                        scrapParams: activeScraperParams,
                                        label: "Scrape New Data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1760,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1740,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1722,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: showParams ? 140 : 0,
                            overflow: 'hidden',
                            transition: 'max-height 280ms cubic-bezier(0.4,0,0.2,1)'
                        },
                        children: [
                            cfg.id === 'facebook' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookParamsPanel, {
                                params: fbParams,
                                onChange: setFbParams,
                                color: cfg.color,
                                colorSoft: cfg.colorSoft
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1777,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            cfg.id === 'instagram' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramParamsPanel, {
                                params: igParams,
                                onChange: setIgParams,
                                color: cfg.color,
                                colorSoft: cfg.colorSoft
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1785,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1771,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1720,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto",
                style: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#e2e8f0 transparent'
                },
                children: !hasMessages ? mode === 'button' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WelcomeScreenButton, {
                    cfg: cfg,
                    onFetch: handleFetch,
                    isFetching: isFetching
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1806,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WelcomeScreenQuery, {
                    cfg: cfg,
                    onSelect: (q)=>{
                        setInputQuery('');
                        runFetch(q);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1808,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col gap-5",
                    children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[78%] px-4 py-2.5 rounded-2xl rounded-br-sm text-[12px] text-white leading-relaxed flex items-center gap-2",
                                        style: {
                                            background: 'linear-gradient(135deg,#0369a1,#7c3aed)',
                                            boxShadow: '0 2px 8px rgba(3,105,161,0.22)'
                                        },
                                        children: [
                                            mode === 'button' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatabaseIcon, {
                                                color: "rgba(255,255,255,0.7)",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1824,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            mode === 'button' ? 'Fetch All Posts' : msg.query
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                        lineNumber: 1817,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 1816,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                msg.status === 'fetching' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScanningAnimation, {
                                    step: msg.step,
                                    query: msg.query,
                                    cfg: cfg
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 1830,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                msg.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                                            style: {
                                                background: cfg.colorSoft
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                                                source: cfg.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 1834,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 rounded-2xl rounded-tl-sm p-4",
                                            style: {
                                                background: '#fff',
                                                border: '1px solid #fecaca'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] font-semibold text-red-500 mb-1",
                                                    children: "Could not fetch posts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1840,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 mb-2",
                                                    children: mode === 'button' ? 'Unable to load posts from the database. Please try again.' : 'Try a different query or check your connection.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1841,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleRerun(msg.query),
                                                    className: "flex items-center gap-1.5 text-[10.5px] font-semibold px-3 py-1.5 rounded-lg transition-all active:scale-95",
                                                    style: {
                                                        background: 'rgba(3,105,161,0.06)',
                                                        color: '#0369a1',
                                                        border: 'none',
                                                        cursor: 'pointer'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {
                                                            color: "#0369a1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                            lineNumber: 1851,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Retry"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                                    lineNumber: 1846,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                            lineNumber: 1838,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 1833,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                msg.status === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsBubble, {
                                    msg: msg,
                                    cfg: cfg,
                                    onRerun: handleRerun,
                                    mode: mode,
                                    onLoadMore: handleLoadMore,
                                    onPostsDeleted: handlePostsDeleted
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 1857,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 1813,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1811,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1799,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mode === 'query' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptBar, {
                value: inputQuery,
                onChange: setInputQuery,
                onSubmit: handleFetch,
                disabled: isFetching,
                placeholder: isFetching ? 'Mining in progress…' : `Mine ${cfg.label} for any topic…`
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1876,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : hasMessages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FetchBar, {
                onFetch: handleFetch,
                disabled: isFetching,
                lastFetchedAt: lastFetchedAt
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1884,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1714,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s9(ScraperWorkspace, "xBymFVnH25b5Mi7eu3N6d0q5TMQ=");
_c41 = ScraperWorkspace;
const RedditScrapper = ({ defaultQuery })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScraperWorkspace, {
        cfg: getSourceConfig('reddit'),
        fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRedditPosts"],
        defaultQuery: defaultQuery,
        mode: "query"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1902,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c42 = RedditScrapper;
const FacebookScrapper = ({ defaultQuery })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScraperWorkspace, {
        cfg: getSourceConfig('facebook'),
        fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFacebookPosts"],
        mode: "button"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1911,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c43 = FacebookScrapper;
const InstagramScrapper = ({ defaultQuery })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScraperWorkspace, {
        cfg: getSourceConfig('instagram'),
        fetchFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$social$2d$content$2f$socialContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInstagramPosts"],
        mode: "button"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1919,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c44 = InstagramScrapper;
/* ═══════════════════════════════════════════════
   SOURCE NAV ITEM
═══════════════════════════════════════════════ */ const SourceNavItem = ({ cfg, active, onClick, msgCount })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all group",
        style: {
            background: active ? '#fff' : 'transparent',
            border: active ? `1px solid ${cfg.color}22` : '1px solid transparent',
            boxShadow: active ? '0 1px 6px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer'
        },
        children: [
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full",
                style: {
                    background: cfg.color,
                    marginLeft: -1
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1941,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                    background: active ? cfg.colorSoft : '#f1f5f9'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceBrandIcon, {
                    source: cfg.id,
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                    lineNumber: 1946,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1944,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11.5px] font-semibold leading-none truncate",
                        style: {
                            color: active ? cfg.color : '#475569'
                        },
                        children: cfg.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1949,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] text-slate-400 mt-0.5",
                        children: [
                            cfg.id === 'facebook' && 'Group posts & listings',
                            cfg.id === 'instagram' && 'Reels, posts & hashtags',
                            cfg.id === 'reddit' && 'Community discussions'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1953,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1948,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            msgCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                style: {
                    background: active ? `${cfg.color}15` : '#f1f5f9',
                    color: active ? cfg.color : '#94a3b8'
                },
                children: msgCount
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1960,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1937,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c45 = SourceNavItem;
const SocialMiningAgentWorkspace = ({ isOpen = true, defaultQuery = '', defaultSource = 'facebook' })=>{
    _s10();
    const [activeSource, setActiveSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSource);
    const scrapers = [
        {
            source: 'facebook',
            Component: FacebookScrapper
        },
        {
            source: 'instagram',
            Component: InstagramScrapper
        },
        {
            source: 'reddit',
            Component: RedditScrapper
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full overflow-hidden rounded-xl",
        style: {
            background: '#f8fafc'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-shrink-0 py-3 px-2 gap-1",
                style: {
                    background: '#f1f5f9',
                    borderRight: '1px solid #e2e8f0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pb-3 mb-1",
                        style: {
                            borderBottom: '1px solid #e2e8f0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[7px] font-bold text-slate-500 uppercase tracking-widest leading-none",
                                children: "Social"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1995,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] font-bold text-[var(--color-primary)] leading-snug",
                                children: "Miner"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                lineNumber: 1996,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1994,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[8.5px] font-bold uppercase tracking-widest text-slate-400 px-2 pt-1 pb-0.5",
                        children: "Sources"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 1998,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    SOURCE_REGISTRY.map((cfg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceNavItem, {
                            cfg: cfg,
                            active: activeSource === cfg.id,
                            onClick: ()=>setActiveSource(cfg.id),
                            msgCount: 0
                        }, cfg.id, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 2000,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto px-2 pt-2",
                        style: {
                            borderTop: '1px solid #e2e8f0'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] text-slate-300 leading-relaxed",
                            children: [
                                "More sources",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                                    lineNumber: 2004,
                                    columnNumber: 80
                                }, ("TURBOPACK compile-time value", void 0)),
                                "coming soon"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 2004,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 2003,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 1992,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0 overflow-hidden",
                children: scrapers.map(({ source, Component })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: source === activeSource ? 'flex' : 'none',
                            flexDirection: 'column',
                            height: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                            defaultQuery: source === defaultSource ? defaultQuery : undefined
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                            lineNumber: 2010,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, source, false, {
                        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                        lineNumber: 2009,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 2007,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes sm-spin        { to { transform: rotate(360deg); } }
        @keyframes sm-radar-spin  { to { transform: rotate(360deg); } }
        @keyframes sm-ring-pulse  { 0%,100%{ opacity:.3 } 50%{ opacity:.85 } }
        @keyframes sm-dot-blink   { 0%,100%{ opacity:0; transform:scale(.35) } 30%,70%{ opacity:1; transform:scale(1) } }
        @keyframes sm-core-pulse  { 0%,100%{ transform:scale(1); opacity:.75 } 50%{ transform:scale(1.14); opacity:1 } }
        @keyframes sm-chip-in     { from{ opacity:0; transform:translateY(4px) } to{ opacity:1; transform:translateY(0) } }
        @keyframes sm-cardstream  { from{ opacity:0; transform:translateX(-7px) } to{ opacity:1; transform:translateX(0) } }
        @keyframes sm-fadein      { from{ opacity:0; transform:translateY(6px) } to{ opacity:1; transform:translateY(0) } }
        .sm-line-clamp { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
                lineNumber: 2014,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/MiningAgentWorkspace.tsx",
        lineNumber: 1991,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s10(SocialMiningAgentWorkspace, "bpaUw0bXVNDst7xVZsjtSpC9/wA=");
_c46 = SocialMiningAgentWorkspace;
const __TURBOPACK__default__export__ = SocialMiningAgentWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46;
__turbopack_context__.k.register(_c, "SendIcon");
__turbopack_context__.k.register(_c1, "RefreshIcon");
__turbopack_context__.k.register(_c2, "ArrowUpIcon");
__turbopack_context__.k.register(_c3, "ChatBubbleIcon");
__turbopack_context__.k.register(_c4, "ShareIcon");
__turbopack_context__.k.register(_c5, "ExternalIcon");
__turbopack_context__.k.register(_c6, "TrendIcon");
__turbopack_context__.k.register(_c7, "SignalIcon");
__turbopack_context__.k.register(_c8, "ZapIcon");
__turbopack_context__.k.register(_c9, "ChevronDownIcon");
__turbopack_context__.k.register(_c10, "SpinnerIcon");
__turbopack_context__.k.register(_c11, "ImageIcon");
__turbopack_context__.k.register(_c12, "DownloadCloudIcon");
__turbopack_context__.k.register(_c13, "CheckIcon");
__turbopack_context__.k.register(_c14, "DatabaseIcon");
__turbopack_context__.k.register(_c15, "CsvIcon");
__turbopack_context__.k.register(_c16, "PdfIcon");
__turbopack_context__.k.register(_c17, "SettingsIcon");
__turbopack_context__.k.register(_c18, "XIcon");
__turbopack_context__.k.register(_c19, "RedditBrandIcon");
__turbopack_context__.k.register(_c20, "FacebookBrandIcon");
__turbopack_context__.k.register(_c21, "InstagramBrandIcon");
__turbopack_context__.k.register(_c22, "SaveIcon");
__turbopack_context__.k.register(_c23, "SourceBrandIcon");
__turbopack_context__.k.register(_c24, "Badge");
__turbopack_context__.k.register(_c25, "ChipInput");
__turbopack_context__.k.register(_c26, "FacebookParamsPanel");
__turbopack_context__.k.register(_c27, "InstagramParamsPanel");
__turbopack_context__.k.register(_c28, "ScrapeNewDataButton");
__turbopack_context__.k.register(_c29, "MediaGallery");
__turbopack_context__.k.register(_c30, "ScanningAnimation");
__turbopack_context__.k.register(_c31, "SelectionRing");
__turbopack_context__.k.register(_c32, "RedditPostCard");
__turbopack_context__.k.register(_c33, "FacebookPostCard");
__turbopack_context__.k.register(_c34, "InstagramPostCard");
__turbopack_context__.k.register(_c35, "PostCard");
__turbopack_context__.k.register(_c36, "ResultsBubble");
__turbopack_context__.k.register(_c37, "WelcomeScreenQuery");
__turbopack_context__.k.register(_c38, "WelcomeScreenButton");
__turbopack_context__.k.register(_c39, "PromptBar");
__turbopack_context__.k.register(_c40, "FetchBar");
__turbopack_context__.k.register(_c41, "ScraperWorkspace");
__turbopack_context__.k.register(_c42, "RedditScrapper");
__turbopack_context__.k.register(_c43, "FacebookScrapper");
__turbopack_context__.k.register(_c44, "InstagramScrapper");
__turbopack_context__.k.register(_c45, "SourceNavItem");
__turbopack_context__.k.register(_c46, "SocialMiningAgentWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_aiagents_MiningAgentWorkspace_tsx_549b5bd0._.js.map