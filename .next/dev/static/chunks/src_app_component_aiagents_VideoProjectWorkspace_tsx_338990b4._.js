(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/aiagent/aiagent.ts [app-client] (ecmascript)"); // TODO: adjust to wherever you place videoproject.ts
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* ── media base url — backend and frontend are different origins, so
   relative paths like "/uploads/xyz.jpg" returned by the API need a prefix.
   Set NEXT_PUBLIC_API_BASE_URL to your backend origin (e.g. http://localhost:5000). ── */ const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || '';
const resolveMediaUrl = (url)=>{
    if (!url) return '';
    let finalUrl = url;
    // If it's a relative path, prepend the API_BASE
    if (!/^https?:\/\//.test(finalUrl) && !finalUrl.startsWith('blob:')) {
        finalUrl = `${API_BASE}${finalUrl}`;
    }
    // 🔥 THE FIX: If the frontend is secure (HTTPS), force the media URL to be HTTPS too
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.location.protocol === 'https:' && finalUrl.startsWith('http://')) {
        finalUrl = finalUrl.replace(/^http:\/\//i, 'https://');
    }
    return finalUrl;
};
/* ── tiny icon components (same visual language as ScriptAgentWorkspace) ── */ const SparkleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = SparkleIcon;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12",
            strokeWidth: 2.5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CheckIcon;
const CloseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = CloseIcon;
const UploadCloudIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M7 16a4 4 0 01-1-7.87A5.5 5.5 0 0116.9 6.1 4.5 4.5 0 0118 15"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M12 12v9M9 15l3-3 3 3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = UploadCloudIcon;
const ArrowUpIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2.5,
            d: "M12 19V5M5 12l7-7 7 7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ArrowUpIcon;
const ArrowDownIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2.5,
            d: "M12 5v14M5 12l7 7 7-7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ArrowDownIcon;
const TrashIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 7l-.87 12.14A2 2 0 0116.14 21H7.86a2 2 0 01-2-1.86L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M4 7h16"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 67,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = TrashIcon;
const HomeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V10"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 73,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = HomeIcon;
const MicIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 15a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 11a7 7 0 01-14 0M12 18v3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = MicIcon;
const WandIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 86,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c9 = WandIcon;
const PlayIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5v14l11-7z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 92,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c10 = PlayIcon;
const DownloadIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 97,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c11 = DownloadIcon;
const RefreshIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 4v5h.58M20 20v-5h-.58M4.58 9a8 8 0 0113.9-3.36L20 9M19.42 15a8 8 0 01-13.9 3.36L4 15"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 103,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c12 = RefreshIcon;
const GripIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-4",
        viewBox: "0 0 16 24",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "5",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 109,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "19",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 109,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "5",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 110,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "19",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 110,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c13 = GripIcon;
const ChevronDownIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 9l6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 115,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c14 = ChevronDownIcon;
const TagIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.59 13.41L11 3.83A2 2 0 009.59 3.24L4 3a1 1 0 00-1 1l.24 5.59a2 2 0 00.58 1.41l9.58 9.58a2 2 0 002.83 0l4.36-4.36a2 2 0 000-2.81z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7.5",
                cy: "7.5",
                r: "1.2",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c15 = TagIcon;
const STEPS = [
    {
        id: 1,
        label: 'Photos',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadCloudIcon, {}, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 138,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 2,
        label: 'Property',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeIcon, {}, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 139,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 3,
        label: 'Script',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 140,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 4,
        label: 'Voice',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 141,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 5,
        label: 'Preview',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {}, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
            lineNumber: 142,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const VOICE_OPTIONS = [
    {
        id: 'female_1',
        name: 'Priya',
        tag: 'Clear & professional',
        avatar: '👩'
    },
    {
        id: 'male_1',
        name: 'Rahul',
        tag: 'Friendly & energetic',
        avatar: '👨'
    },
    {
        id: 'female_2',
        name: 'Aarti',
        tag: 'Warm & inviting',
        avatar: '👩‍🦱'
    },
    {
        id: 'male_2',
        name: 'Vikram',
        tag: 'Deep & authoritative',
        avatar: '🧔'
    }
];
/* ── small reusable bits ── */ const Badge = ({ children, tone = 'blue' })=>{
    const styles = {
        blue: {
            background: 'rgba(0,102,204,0.1)',
            color: '#0066cc'
        },
        slate: {
            background: '#f1f5f9',
            color: '#64748b'
        },
        green: {
            background: 'rgba(5,150,105,0.1)',
            color: '#059669'
        }
    }[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2 py-[3px] rounded-full text-[9.5px] font-bold whitespace-nowrap",
        style: styles,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 160,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c16 = Badge;
/* ── step indicator (clickable on completed steps, animated fill) ── */ const StepIndicator = ({ current, onJump })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 sm:gap-1.5 px-4 sm:px-5 py-3 border-b flex-shrink-0 overflow-x-auto",
        style: {
            borderColor: '#e2e8f0',
            background: '#ffffff'
        },
        children: STEPS.map((s, i)=>{
            const isDone = s.id < current;
            const isActive = s.id === current;
            const clickable = isDone;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !clickable,
                        onClick: ()=>clickable && onJump(s.id),
                        className: "flex items-center cursor-pointer gap-1.5 flex-shrink-0 rounded-lg px-1 py-0.5 -mx-1 transition-all",
                        style: {
                            cursor: clickable ? 'pointer' : 'default'
                        },
                        onMouseEnter: (e)=>{
                            if (clickable) e.currentTarget.style.background = '#f0f7ff';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'transparent';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9.5px] font-bold flex-shrink-0 transition-all duration-300",
                                style: isDone ? {
                                    background: '#0066cc',
                                    color: '#ffffff'
                                } : isActive ? {
                                    background: 'rgba(0,102,204,0.12)',
                                    color: '#0066cc',
                                    border: '1.5px solid #0066cc',
                                    boxShadow: '0 0 0 3px rgba(0,102,204,0.08)'
                                } : {
                                    background: '#f1f5f9',
                                    color: '#94a3b8'
                                },
                                children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 191,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0)) : s.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 184,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10.5px] font-semibold hidden sm:inline",
                                style: {
                                    color: isActive ? '#0066cc' : isDone ? '#334155' : '#94a3b8'
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 193,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 176,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    i < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-4 sm:w-6 h-px mx-0.5 sm:mx-1 flex-shrink-0 transition-all duration-500",
                        style: {
                            background: s.id < current ? '#0066cc' : '#e2e8f0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 198,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, s.id, true, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c17 = StepIndicator;
/* ── error banner ── */ const ErrorBanner = ({ message, onDismiss })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-3.5 py-2.5 rounded-xl border mb-4",
        style: {
            background: '#fff1f2',
            borderColor: '#fecdd3',
            color: '#e11d48',
            animation: 'vp-slide-down 0.2s ease-out'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4 flex-shrink-0",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeWidth: 1.5,
                        d: "M12 8v4M12 16h.01"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11.5px] flex-1",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDismiss,
                style: {
                    color: '#e11d48',
                    cursor: "pointer"
                },
                "aria-label": "Dismiss error",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                    lineNumber: 215,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c18 = ErrorBanner;
const PrimaryButton = ({ children, onClick, disabled, loading })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled || loading,
        className: "flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-bold transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed",
        style: {
            background: '#0066cc',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,102,204,0.25)'
        },
        onMouseEnter: (e)=>{
            if (!disabled && !loading) e.currentTarget.style.background = '#005bb8';
        },
        onMouseLeave: (e)=>e.currentTarget.style.background = '#0066cc',
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent",
                style: {
                    animation: 'vp-spin 0.8s linear infinite'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 227,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c19 = PrimaryButton;
const SecondaryButton = ({ children, onClick, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: "flex items-center cursor-pointer justify-center gap-2 px-4 py-2.5 rounded-xl text-[11.5px] font-semibold border transition-all disabled:opacity-40 disabled:cursor-not-allowed",
        style: {
            background: '#f8fafc',
            borderColor: '#e2e8f0',
            color: '#475569'
        },
        onMouseEnter: (e)=>{
            if (!disabled) {
                e.currentTarget.style.background = '#f1f5f9';
            }
        },
        onMouseLeave: (e)=>e.currentTarget.style.background = '#f8fafc',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c20 = SecondaryButton;
/* ── custom dropdown for AI voice selection ── */ const VoiceDropdown = ({ value, onChange })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoiceDropdown.useEffect": ()=>{
            const onClickOutside = {
                "VoiceDropdown.useEffect.onClickOutside": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
                }
            }["VoiceDropdown.useEffect.onClickOutside"];
            const onEsc = {
                "VoiceDropdown.useEffect.onEsc": (e)=>{
                    if (e.key === 'Escape') setOpen(false);
                }
            }["VoiceDropdown.useEffect.onEsc"];
            document.addEventListener('mousedown', onClickOutside);
            document.addEventListener('keydown', onEsc);
            return ({
                "VoiceDropdown.useEffect": ()=>{
                    document.removeEventListener('mousedown', onClickOutside);
                    document.removeEventListener('keydown', onEsc);
                }
            })["VoiceDropdown.useEffect"];
        }
    }["VoiceDropdown.useEffect"], []);
    const selected = VOICE_OPTIONS.find((v)=>v.id === value) ?? VOICE_OPTIONS[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((o)=>!o),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                className: "w-full flex cursor-pointer items-center gap-3 px-3.5 py-2.5 rounded-xl border-2 text-left transition-all",
                style: {
                    borderColor: open ? '#0066cc' : '#e2e8f0',
                    background: '#ffffff',
                    boxShadow: open ? '0 0 0 3px rgba(0,102,204,0.08)' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0",
                        style: {
                            background: 'rgba(0,102,204,0.1)'
                        },
                        children: selected.avatar
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 273,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold",
                                style: {
                                    color: '#1e293b'
                                },
                                children: selected.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] truncate",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: selected.tag
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 276,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#94a3b8',
                            transform: open ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDownIcon, {}, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 281,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "listbox",
                className: "absolute left-0 right-0 mt-1.5 rounded-xl border overflow-hidden z-30",
                style: {
                    background: '#ffffff',
                    borderColor: '#e2e8f0',
                    boxShadow: '0 16px 36px rgba(15,23,42,0.14)',
                    animation: 'vp-dropdown 0.15s ease-out',
                    transformOrigin: 'top'
                },
                children: VOICE_OPTIONS.map((v)=>{
                    const isSelected = v.id === value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "option",
                        "aria-selected": isSelected,
                        onClick: ()=>{
                            onChange(v.id);
                            setOpen(false);
                        },
                        className: "w-full cursor-pointer flex items-center gap-3 px-3.5 py-2.5 transition-all text-left",
                        style: {
                            background: isSelected ? '#f0f7ff' : '#ffffff'
                        },
                        onMouseEnter: (e)=>{
                            if (!isSelected) e.currentTarget.style.background = '#f8fafc';
                        },
                        onMouseLeave: (e)=>{
                            if (!isSelected) e.currentTarget.style.background = '#ffffff';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0",
                                style: {
                                    background: 'rgba(0,102,204,0.1)'
                                },
                                children: v.avatar
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 301,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-bold",
                                        style: {
                                            color: '#1e293b'
                                        },
                                        children: v.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                        lineNumber: 305,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] truncate",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: v.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                        lineNumber: 306,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 304,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#0066cc'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 308,
                                    columnNumber: 82
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                lineNumber: 308,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, v.id, true, {
                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                        lineNumber: 291,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 286,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 265,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VoiceDropdown, "wl9VvfhnMVWQ+kCekFjcRPEi3/0=");
_c21 = VoiceDropdown;
/* ─────────────────────────────────────────────── */ const VideoProjectWorkspace = ({ isOpen })=>{
    _s1();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Step 1 — photos, arranged before upload; uploadedPhotos after upload
    const [draftPhotos, setDraftPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadedPhotos, setUploadedPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragDepth, setDragDepth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0) // file-drop-zone drag counter
    ;
    const [draggedId, setDraggedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // photo being reordered
    ;
    const [dragOverId, setDragOverId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Step 2 — property details + mode
    const [propertyDetails, setPropertyDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hinglish');
    // Step 3 — generated / edited script, one line per photo
    const [scriptLines, setScriptLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scriptMeta, setScriptMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingScript, setIsGeneratingScript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Step 4 — voiceover method + render
    const [voiceoverMethod, setVoiceoverMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ai_voice');
    const [voiceFile, setVoiceFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRendering, setIsRendering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const voiceInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [aiVoice, setAiVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('female_1');
    const [voiceFileDragDepth, setVoiceFileDragDepth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thumbnailUrl, setThumbnailUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRecordingConfirmed, setIsRecordingConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoAspectRatio, setVideoAspectRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('portrait');
    const CSS_RATIO = {
        portrait: '9 / 16',
        square: '1 / 1',
        landscape: '16 / 9'
    };
    // ── new state, near your other Step 4 state ──
    const [recordMethod, setRecordMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('file');
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordedBlob, setRecordedBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recordedPreviewUrl, setRecordedPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recordingSeconds, setRecordingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // cleanup on unmount, alongside your existing draftPhotos revoke effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoProjectWorkspace.useEffect": ()=>{
            return ({
                "VideoProjectWorkspace.useEffect": ()=>{
                    if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
                    streamRef.current?.getTracks().forEach({
                        "VideoProjectWorkspace.useEffect": (t)=>t.stop()
                    }["VideoProjectWorkspace.useEffect"]);
                    if (recordedPreviewUrl) URL.revokeObjectURL(recordedPreviewUrl);
                }
            })["VideoProjectWorkspace.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VideoProjectWorkspace.useEffect"], []);
    const startRecording = async ()=>{
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            streamRef.current = stream;
            audioChunksRef.current = [];
            const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
            const recorder = mimeType ? new MediaRecorder(stream, {
                mimeType
            }) : new MediaRecorder(stream);
            recorder.ondataavailable = (e)=>{
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };
            recorder.onstop = ()=>{
                const blob = new Blob(audioChunksRef.current, {
                    type: recorder.mimeType || 'audio/webm'
                });
                setRecordedBlob(blob);
                setRecordedPreviewUrl(URL.createObjectURL(blob));
                stream.getTracks().forEach((t)=>t.stop());
                streamRef.current = null;
            };
            recorder.start();
            mediaRecorderRef.current = recorder;
            setIsRecording(true);
            setRecordingSeconds(0);
            recordingTimerRef.current = setInterval(()=>setRecordingSeconds((s)=>s + 1), 1000);
        } catch  {
            setError('Microphone access was denied or unavailable. Please allow mic access, or upload a file instead.');
        }
    };
    const stopRecording = ()=>{
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
        if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    };
    const discardRecording = ()=>{
        if (recordedPreviewUrl) URL.revokeObjectURL(recordedPreviewUrl);
        setRecordedBlob(null);
        setRecordedPreviewUrl(null);
        setRecordingSeconds(0);
        setIsRecordingConfirmed(false);
    };
    const confirmRecordedVoice = ()=>{
        if (!recordedBlob) return;
        const type = recordedBlob.type || '';
        const ext = type.includes('mp4') ? 'm4a' : type.includes('ogg') ? 'ogg' : type.includes('wav') ? 'wav' : 'webm';
        const file = new File([
            recordedBlob
        ], `voice-recording-${Date.now()}.${ext}`, {
            type: recordedBlob.type
        });
        setVoiceFile(file);
        setIsRecordingConfirmed(true); // ← keep recordedBlob/previewUrl alive, just mark as confirmed
    };
    // Used by the "Re-record" button in BOTH the preview state and the
    // confirmed state. If a recording was already confirmed (i.e. is
    // currently set as voiceFile), clear that too — otherwise re-recording
    // would silently leave the old attached voice in place.
    const handleReRecordLive = ()=>{
        if (isRecordingConfirmed) setVoiceFile(null);
        discardRecording();
    };
    const formatSeconds = (s)=>`${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    // Step 5 — final result
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoProjectWorkspace.useEffect": ()=>{
            return ({
                "VideoProjectWorkspace.useEffect": ()=>{
                    draftPhotos.forEach({
                        "VideoProjectWorkspace.useEffect": (p)=>URL.revokeObjectURL(p.previewUrl)
                    }["VideoProjectWorkspace.useEffect"]);
                }
            })["VideoProjectWorkspace.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["VideoProjectWorkspace.useEffect"], []);
    if (!isOpen) return null;
    /* ── step 1: photo selection + ordering ── */ const handleFilesSelected = (fileList)=>{
        if (!fileList || fileList.length === 0) return;
        const files = Array.from(fileList).filter((f)=>f.type.startsWith('image/'));
        const newDrafts = files.map((file, i)=>({
                id: `${Date.now()}-${i}-${file.name}`,
                file,
                previewUrl: URL.createObjectURL(file),
                label: ''
            }));
        setDraftPhotos((prev)=>[
                ...prev,
                ...newDrafts
            ]);
        setError(null);
    };
    const removeDraftPhoto = (id)=>{
        setDraftPhotos((prev)=>{
            const target = prev.find((p)=>p.id === id);
            if (target) URL.revokeObjectURL(target.previewUrl);
            return prev.filter((p)=>p.id !== id);
        });
    };
    const clearAllDraftPhotos = ()=>{
        draftPhotos.forEach((p)=>URL.revokeObjectURL(p.previewUrl));
        setDraftPhotos([]);
    };
    const moveDraftPhoto = (index, direction)=>{
        setDraftPhotos((prev)=>{
            const next = [
                ...prev
            ];
            const target = index + direction;
            if (target < 0 || target >= next.length) return prev;
            [next[index], next[target]] = [
                next[target],
                next[index]
            ];
            return next;
        });
    };
    const updateDraftLabel = (id, label)=>{
        setDraftPhotos((prev)=>prev.map((p)=>p.id === id ? {
                    ...p,
                    label
                } : p));
    };
    /* drag-to-reorder handlers (mouse-driven, native HTML5 DnD) */ const handlePhotoDragStart = (e, id)=>{
        setDraggedId(id);
        e.dataTransfer.effectAllowed = 'move';
        try {
            e.dataTransfer.setData('text/plain', id);
        } catch  {}
    };
    const handlePhotoDragOver = (e, id)=>{
        e.preventDefault();
        if (id !== dragOverId) setDragOverId(id);
    };
    const handlePhotoDragEnd = ()=>{
        setDraggedId(null);
        setDragOverId(null);
    };
    const handlePhotoDrop = (e, targetId)=>{
        e.preventDefault();
        if (!draggedId || draggedId === targetId) {
            handlePhotoDragEnd();
            return;
        }
        setDraftPhotos((prev)=>{
            const next = [
                ...prev
            ];
            const fromIndex = next.findIndex((p)=>p.id === draggedId);
            const toIndex = next.findIndex((p)=>p.id === targetId);
            if (fromIndex === -1 || toIndex === -1) return prev;
            const [moved] = next.splice(fromIndex, 1);
            next.splice(toIndex, 0, moved);
            return next;
        });
        handlePhotoDragEnd();
    };
    /* drag-drop file upload onto the dropzone */ const handleDropzoneDragEnter = (e)=>{
        e.preventDefault();
        setDragDepth((d)=>d + 1);
    };
    const handleDropzoneDragOver = (e)=>{
        e.preventDefault();
    };
    const handleDropzoneDragLeave = (e)=>{
        e.preventDefault();
        setDragDepth((d)=>Math.max(0, d - 1));
    };
    const handleDropzoneDrop = (e)=>{
        e.preventDefault();
        setDragDepth(0);
        handleFilesSelected(e.dataTransfer.files);
    };
    const handleUploadPhotos = async ()=>{
        if (draftPhotos.length === 0) {
            setError('Upload at least one photo to continue');
            return;
        }
        if (draftPhotos.some((p)=>!p.label.trim())) {
            setError('Give every photo a short area label (e.g. "hall", "kitchen") before continuing');
            return;
        }
        setIsUploading(true);
        setError(null);
        try {
            const formData = new FormData();
            draftPhotos.forEach((p)=>formData.append('photos', p.file));
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoProjectPhoto"])(formData);
            if (!res?.photos || !Array.isArray(res.photos) || res.photos.length !== draftPhotos.length) {
                throw new Error('Upload failed');
            }
            // Server preserves upload order, so index-match back to our labels.
            const combined = res.photos.map((serverPhoto, i)=>({
                    fileName: serverPhoto.fileName,
                    originalName: serverPhoto.originalName,
                    url: serverPhoto.url,
                    label: draftPhotos[i].label.trim()
                }));
            setUploadedPhotos(combined);
            setStep(2);
        } catch  {
            setError('Could not upload the photos. Please try again.');
        } finally{
            setIsUploading(false);
        }
    };
    /* ── step 2 → 3: generate script ── */ const handleGenerateScript = async ()=>{
        if (!propertyDetails.trim()) {
            setError('Add a short property description first');
            return;
        }
        setIsGeneratingScript(true);
        setError(null);
        try {
            const sequenceText = uploadedPhotos.map((p)=>p.label).join('\n');
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateVideoProjectScript"])({
                propertyDetails,
                sequenceText,
                totalPhotos: uploadedPhotos.length,
                mode
            });
            if (!res?.voiceovers || !Array.isArray(res.voiceovers)) {
                throw new Error('Script generation failed');
            }
            setScriptLines(res.voiceovers);
            setScriptMeta(res.metadata ?? null);
            setStep(3);
        } catch  {
            setError('Could not generate the voice script. Please try again.');
        } finally{
            setIsGeneratingScript(false);
        }
    };
    const handleRegenerateScript = async ()=>{
        setIsGeneratingScript(true);
        setError(null);
        try {
            const sequenceText = uploadedPhotos.map((p)=>p.label).join('\n');
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateVideoProjectScript"])({
                propertyDetails,
                sequenceText,
                totalPhotos: uploadedPhotos.length,
                mode
            });
            if (!res?.voiceovers) throw new Error('Script generation failed');
            setScriptLines(res.voiceovers);
            setScriptMeta(res.metadata ?? null);
        } catch  {
            setError('Could not regenerate the script. Please try again.');
        } finally{
            setIsGeneratingScript(false);
        }
    };
    const updateScriptLine = (index, value)=>{
        setScriptLines((prev)=>prev.map((line, i)=>i === index ? value : line));
    };
    const wordCount = (text)=>text.trim().split(/\s+/).filter(Boolean).length;
    /* ── step 4: voice + render ── */ const handleVoiceFileDragEnter = (e)=>{
        e.preventDefault();
        setVoiceFileDragDepth((d)=>d + 1);
    };
    const handleVoiceFileDragOver = (e)=>{
        e.preventDefault();
    };
    const handleVoiceFileDragLeave = (e)=>{
        e.preventDefault();
        setVoiceFileDragDepth((d)=>Math.max(0, d - 1));
    };
    const handleVoiceFileDrop = (e)=>{
        e.preventDefault();
        setVoiceFileDragDepth(0);
        const file = e.dataTransfer.files?.[0];
        if (file) setVoiceFile(file);
    };
    const handleRender = async ()=>{
        if (scriptLines.length !== uploadedPhotos.length || scriptLines.some((l)=>!l.trim())) {
            setError('Every photo needs a non-empty script line before rendering');
            return;
        }
        if (voiceoverMethod === 'uploaded_voice' && !voiceFile) {
            setError('Upload your recorded voiceover, or switch to AI voice');
            return;
        }
        setIsRendering(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('mode', mode);
            formData.append('voiceoverMethod', voiceoverMethod);
            formData.append('aiVoice', aiVoice);
            formData.append('photoFileNames', JSON.stringify(uploadedPhotos.map((p)=>p.fileName)));
            formData.append('scriptContent', JSON.stringify(scriptLines));
            if (voiceoverMethod === 'uploaded_voice' && voiceFile) {
                formData.append('uploadedVoiceover', voiceFile);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$aiagent$2f$aiagent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderVideoProject"])(formData);
            if (!res?.videoUrl) throw new Error('Render failed');
            setVideoUrl(res.videoUrl);
            setThumbnailUrl(res.thumbnailUrl ?? null);
            setVideoAspectRatio(res.aspectRatio ?? 'portrait');
            setStep(5);
        } catch  {
            setError('Could not render the video. Please try again.');
        } finally{
            setIsRendering(false);
        }
    };
    const handleStartOver = ()=>{
        draftPhotos.forEach((p)=>URL.revokeObjectURL(p.previewUrl));
        setDraftPhotos([]);
        setUploadedPhotos([]);
        setPropertyDetails('');
        setMode('hinglish');
        setScriptLines([]);
        setScriptMeta(null);
        setVoiceoverMethod('ai_voice');
        setVoiceFile(null);
        setVideoUrl(null);
        setError(null);
        setRecordMethod('file');
        discardRecording();
        setStep(1);
    };
    const totalPhotos = uploadedPhotos.length || draftPhotos.length;
    const isFileDragOver = dragDepth > 0;
    const isVoiceFileDragOver = voiceFileDragDepth > 0;
    const handleDownload = async (e)=>{
        e.preventDefault(); // Stop the browser from opening the URL
        if (isDownloading || !videoUrl) return;
        setIsDownloading(true);
        try {
            const url = resolveMediaUrl(videoUrl);
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch video");
            // Convert the video to a local blob
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            // Create a temporary hidden link and click it
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = url.split('/').pop() || "project-video.mp4"; // Extracts filename from URL
            document.body.appendChild(link);
            link.click();
            // Cleanup
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download error:", err);
            setError("Failed to download the video. Please try again.");
        } finally{
            setIsDownloading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden rounded-xl relative",
        style: {
            background: '#f8fafc'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                current: step,
                onJump: setStep
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 736,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 sm:px-6 py-5",
                style: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#e2e8f0 transparent'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[720px] mx-auto",
                    style: {
                        animation: 'vp-fade-in 0.25s ease-out'
                    },
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBanner, {
                            message: error,
                            onDismiss: ()=>setError(null)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 740,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                                    style: {
                                                        background: 'rgba(0,102,204,0.1)',
                                                        color: '#0066cc'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadCloudIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13.5px] font-bold",
                                                    style: {
                                                        color: '#1e293b'
                                                    },
                                                    children: "Upload property photos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 746,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        draftPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            children: [
                                                draftPhotos.length,
                                                " photo",
                                                draftPhotos.length === 1 ? '' : 's'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 752,
                                            columnNumber: 60
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 745,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] mb-4",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "Add every photo for the video, label the area it shows, then drag each row by its handle to set the order they appear in."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 754,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/webp",
                                    multiple: true,
                                    className: "hidden",
                                    onChange: (e)=>handleFilesSelected(e.target.files)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 758,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onDragEnter: handleDropzoneDragEnter,
                                    onDragOver: handleDropzoneDragOver,
                                    onDragLeave: handleDropzoneDragLeave,
                                    onDrop: handleDropzoneDrop,
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "w-full flex flex-col items-center justify-center gap-2 py-8 rounded-2xl border-2 border-dashed transition-all mb-4 cursor-pointer",
                                    style: isFileDragOver ? {
                                        borderColor: '#0066cc',
                                        background: '#eaf3ff',
                                        color: '#0066cc',
                                        boxShadow: '0 0 0 4px rgba(0,102,204,0.08)'
                                    } : {
                                        borderColor: '#cbd5e1',
                                        background: '#ffffff',
                                        color: '#94a3b8'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isFileDragOver) {
                                            e.currentTarget.style.borderColor = '#99c2ff';
                                            e.currentTarget.style.background = '#f0f7ff';
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isFileDragOver) {
                                            e.currentTarget.style.borderColor = '#cbd5e1';
                                            e.currentTarget.style.background = '#ffffff';
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: isFileDragOver ? 'translateY(-2px) scale(1.08)' : 'none',
                                                transition: 'transform 0.15s'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadCloudIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                lineNumber: 779,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 778,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11.5px] font-semibold",
                                            style: {
                                                color: isFileDragOver ? '#0066cc' : '#475569'
                                            },
                                            children: isFileDragOver ? 'Drop to add photos' : 'Click or drag photos here'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 781,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px]",
                                            style: {
                                                color: isFileDragOver ? '#0066cc' : '#cbd5e1'
                                            },
                                            children: "JPG, PNG or WEBP · multiple files supported"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 784,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 766,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                draftPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9.5px] font-bold uppercase tracking-wider",
                                            style: {
                                                color: '#94a3b8'
                                            },
                                            children: "Drag rows to reorder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 789,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAllDraftPhotos,
                                            className: "text-[10px] font-semibold cursor-pointer",
                                            style: {
                                                color: '#e11d48'
                                            },
                                            children: "Clear all"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 790,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 788,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                draftPhotos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 mb-5",
                                    children: draftPhotos.map((photo, index)=>{
                                        const isDragging = draggedId === photo.id;
                                        const isOver = dragOverId === photo.id && draggedId !== photo.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            draggable: true,
                                            onDragStart: (e)=>handlePhotoDragStart(e, photo.id),
                                            onDragOver: (e)=>handlePhotoDragOver(e, photo.id),
                                            onDrop: (e)=>handlePhotoDrop(e, photo.id),
                                            onDragEnd: handlePhotoDragEnd,
                                            className: "group flex items-center gap-2 p-2.5 rounded-xl border transition-all",
                                            style: {
                                                background: '#ffffff',
                                                borderColor: isOver ? '#0066cc' : '#e2e8f0',
                                                borderTopWidth: isOver ? '2px' : '1px',
                                                opacity: isDragging ? 0.4 : 1,
                                                transform: isDragging ? 'scale(1.01)' : 'none',
                                                boxShadow: isDragging ? '0 8px 20px rgba(15,23,42,0.12)' : 'none'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center flex-shrink-0 cursor-grab active:cursor-grabbing",
                                                    style: {
                                                        color: '#cbd5e1'
                                                    },
                                                    "aria-label": "Drag to reorder",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GripIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0",
                                                    style: {
                                                        background: '#f1f5f9',
                                                        color: '#64748b'
                                                    },
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: photo.previewUrl,
                                                    alt: "",
                                                    draggable: false,
                                                    className: "w-12 h-12 rounded-lg object-cover flex-shrink-0",
                                                    style: {
                                                        border: '1px solid #f1f5f9'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0 relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none",
                                                            style: {
                                                                color: '#cbd5e1'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 828,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 827,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: photo.label,
                                                            onChange: (e)=>updateDraftLabel(photo.id, e.target.value),
                                                            placeholder: "e.g. hall, kitchen, master bedroom…",
                                                            className: "w-full min-w-0 rounded-lg border pl-7 pr-2.5 py-1.5 text-[11px] outline-none",
                                                            style: {
                                                                borderColor: '#e2e8f0',
                                                                background: '#f8fafc',
                                                                color: '#334155'
                                                            },
                                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#99c2ff',
                                                            onBlur: (e)=>e.currentTarget.style.borderColor = '#e2e8f0'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 830,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 flex-shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveDraftPhoto(index, -1),
                                                            disabled: index === 0,
                                                            className: "w-6 h-6 rounded-md cursor-pointer flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0",
                                                            style: {
                                                                background: '#f8fafc',
                                                                color: '#64748b'
                                                            },
                                                            "aria-label": "Move up",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 842,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveDraftPhoto(index, 1),
                                                            disabled: index === draftPhotos.length - 1,
                                                            className: "w-6 h-6 rounded-md flex cursor-pointer items-center justify-center transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0",
                                                            style: {
                                                                background: '#f8fafc',
                                                                color: '#64748b'
                                                            },
                                                            "aria-label": "Move down",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowDownIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeDraftPhoto(photo.id),
                                                            className: "w-6 h-6 rounded-md cursor-pointer flex items-center justify-center transition-all",
                                                            style: {
                                                                background: '#fff1f2',
                                                                color: '#e11d48'
                                                            },
                                                            "aria-label": "Remove photo",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 855,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 852,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, photo.id, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 802,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 797,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                        onClick: handleUploadPhotos,
                                        disabled: draftPhotos.length === 0,
                                        loading: isUploading,
                                        children: isUploading ? 'Uploading…' : `Continue with ${draftPhotos.length} photo${draftPhotos.length === 1 ? '' : 's'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                        lineNumber: 865,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 864,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 744,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                            style: {
                                                background: 'rgba(0,102,204,0.1)',
                                                color: '#0066cc'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                lineNumber: 877,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 876,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13.5px] font-bold",
                                            style: {
                                                color: '#1e293b'
                                            },
                                            children: "Property details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 879,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 875,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] mb-4",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: [
                                        "Describe the property — the AI uses this plus your ",
                                        totalPhotos,
                                        " photo labels to write the voiceover."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 881,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 overflow-x-auto pb-3",
                                        style: {
                                            scrollbarWidth: 'thin'
                                        },
                                        children: uploadedPhotos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: resolveMediaUrl(p.url),
                                                        alt: "",
                                                        className: "w-20 h-20 rounded-lg object-cover",
                                                        style: {
                                                            border: '1px solid #e2e8f0'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-semibold text-center mt-1 truncate",
                                                        style: {
                                                            color: '#64748b'
                                                        },
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            p.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, p.fileName, true, {
                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                lineNumber: 889,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                        lineNumber: 887,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 886,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: propertyDetails,
                                            onChange: (e)=>setPropertyDetails(e.target.value),
                                            rows: 5,
                                            placeholder: "e.g. 3 BHK flat for rent in Ganesh Nagar, Mansarovar, Jaipur. Fully furnished, AC, modular kitchen and parking. Contact Jaipur Rental today.",
                                            className: "w-full rounded-xl border px-3.5 py-3 text-[12px] leading-relaxed outline-none resize-none",
                                            style: {
                                                borderColor: '#e2e8f0',
                                                background: '#ffffff',
                                                color: '#334155'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#99c2ff',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = '#e2e8f0'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 899,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-2 right-3 text-[9.5px]",
                                            style: {
                                                color: '#cbd5e1'
                                            },
                                            children: [
                                                propertyDetails.length,
                                                " characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 909,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 898,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9.5px] font-bold uppercase tracking-wider mb-2",
                                            style: {
                                                color: '#94a3b8'
                                            },
                                            children: "Script language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 913,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex rounded-lg border overflow-hidden w-fit",
                                            style: {
                                                borderColor: '#e2e8f0'
                                            },
                                            children: [
                                                {
                                                    val: 'hinglish',
                                                    label: '🇮🇳 Hinglish'
                                                },
                                                {
                                                    val: 'hindi',
                                                    label: '🇮🇳 Hindi'
                                                },
                                                {
                                                    val: 'english',
                                                    label: '🇬🇧 English'
                                                }
                                            ].map(({ val, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setMode(val),
                                                    className: "px-3 py-1.5 text-[10px] cursor-pointer font-bold transition-all",
                                                    style: mode === val ? {
                                                        background: '#0066cc',
                                                        color: '#ffffff'
                                                    } : {
                                                        background: '#f8fafc',
                                                        color: '#94a3b8'
                                                    },
                                                    children: label
                                                }, val, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 914,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 912,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondaryButton, {
                                            onClick: ()=>setStep(1),
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 930,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                            onClick: handleGenerateScript,
                                            loading: isGeneratingScript,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 932,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isGeneratingScript ? 'Writing script…' : 'Generate voice script'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 931,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 929,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 874,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                                    style: {
                                                        background: 'rgba(0,102,204,0.1)',
                                                        color: '#0066cc'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13.5px] font-bold",
                                                    style: {
                                                        color: '#1e293b'
                                                    },
                                                    children: "Review the voice script"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 942,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleRegenerateScript,
                                            disabled: isGeneratingScript,
                                            className: "flex cursor-pointer items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[10px] font-semibold transition-all disabled:opacity-40",
                                            style: {
                                                background: '#f8fafc',
                                                borderColor: '#e2e8f0',
                                                color: '#64748b'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: 'inline-flex',
                                                        animation: isGeneratingScript ? 'vp-spin 0.8s linear infinite' : 'none'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 151
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Regenerate"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 948,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 941,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11.5px]",
                                            style: {
                                                color: '#94a3b8'
                                            },
                                            children: "Edit any line — each one plays over its matching photo, in order."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 955,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        scriptMeta?.attempts != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            tone: "slate",
                                            children: [
                                                scriptMeta.attempts,
                                                " attempt",
                                                scriptMeta.attempts === 1 ? '' : 's'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 959,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 954,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2.5 mb-5",
                                    children: uploadedPhotos.map((photo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 p-2.5 rounded-xl border",
                                            style: {
                                                background: '#ffffff',
                                                borderColor: '#e2e8f0'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: resolveMediaUrl(photo.url),
                                                    alt: "",
                                                    className: "w-14 h-14 rounded-lg object-cover flex-shrink-0",
                                                    style: {
                                                        border: '1px solid #f1f5f9'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 967,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9.5px] font-semibold uppercase tracking-wide mb-1",
                                                            style: {
                                                                color: '#94a3b8'
                                                            },
                                                            children: [
                                                                "Photo ",
                                                                i + 1,
                                                                " · ",
                                                                photo.label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: scriptLines[i] ?? '',
                                                            onChange: (e)=>updateScriptLine(i, e.target.value),
                                                            rows: 2,
                                                            className: "w-full rounded-lg border px-2.5 py-2 text-[11.5px] leading-relaxed outline-none resize-none",
                                                            style: {
                                                                borderColor: '#e2e8f0',
                                                                background: '#f8fafc',
                                                                color: '#334155'
                                                            },
                                                            onFocus: (e)=>e.currentTarget.style.borderColor = '#99c2ff',
                                                            onBlur: (e)=>e.currentTarget.style.borderColor = '#e2e8f0'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] text-right mt-1",
                                                            style: {
                                                                color: '#cbd5e1'
                                                            },
                                                            children: [
                                                                wordCount(scriptLines[i] ?? ''),
                                                                " words"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 981,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 968,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, photo.fileName, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 965,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 963,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondaryButton, {
                                            onClick: ()=>setStep(2),
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 990,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                            onClick: ()=>setStep(4),
                                            children: "Continue to voice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 991,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 989,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 940,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                            style: {
                                                background: 'rgba(0,102,204,0.1)',
                                                color: '#0066cc'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13.5px] font-bold",
                                            style: {
                                                color: '#1e293b'
                                            },
                                            children: "Choose how the script is spoken"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 999,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] mb-4",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "AI voice narrates automatically, matched to each photo. Or upload your own recording of the full script, read in order."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setVoiceoverMethod('ai_voice'),
                                            className: "relative cursor-pointer flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all",
                                            style: voiceoverMethod === 'ai_voice' ? {
                                                borderColor: '#0066cc',
                                                background: 'rgba(0,102,204,0.05)'
                                            } : {
                                                borderColor: '#e2e8f0',
                                                background: '#ffffff'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 right-3 w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                                    style: voiceoverMethod === 'ai_voice' ? {
                                                        borderColor: '#0066cc'
                                                    } : {
                                                        borderColor: '#cbd5e1'
                                                    },
                                                    children: voiceoverMethod === 'ai_voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            background: '#0066cc'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 76
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1015,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                                    style: {
                                                        background: 'rgba(0,102,204,0.1)',
                                                        color: '#0066cc'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WandIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 1020,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1019,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] font-bold",
                                                    style: {
                                                        color: '#1e293b'
                                                    },
                                                    children: "Automatic AI voice"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10.5px] leading-relaxed",
                                                    style: {
                                                        color: '#94a3b8'
                                                    },
                                                    children: "Generated and timed to each photo automatically."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setVoiceoverMethod('uploaded_voice'),
                                            className: "relative cursor-pointer flex flex-col items-start gap-2 p-4 rounded-xl border-2 text-left transition-all",
                                            style: voiceoverMethod === 'uploaded_voice' ? {
                                                borderColor: '#0066cc',
                                                background: 'rgba(0,102,204,0.05)'
                                            } : {
                                                borderColor: '#e2e8f0',
                                                background: '#ffffff'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 right-3 w-4 h-4 rounded-full border-2 flex items-center justify-center",
                                                    style: voiceoverMethod === 'uploaded_voice' ? {
                                                        borderColor: '#0066cc'
                                                    } : {
                                                        borderColor: '#cbd5e1'
                                                    },
                                                    children: voiceoverMethod === 'uploaded_voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            background: '#0066cc'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 82
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1033,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                                    style: {
                                                        background: 'rgba(0,102,204,0.1)',
                                                        color: '#0066cc'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                        lineNumber: 1038,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] font-bold",
                                                    style: {
                                                        color: '#1e293b'
                                                    },
                                                    children: "Upload my recording"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1040,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10.5px] leading-relaxed",
                                                    style: {
                                                        color: '#94a3b8'
                                                    },
                                                    children: "Read the script above in one take, then upload it."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1041,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                voiceoverMethod === 'ai_voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9.5px] font-bold uppercase tracking-wider mb-2",
                                            style: {
                                                color: '#94a3b8'
                                            },
                                            children: "Choose a voice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1049,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VoiceDropdown, {
                                            value: aiVoice,
                                            onChange: setAiVoice
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1050,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1048,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                voiceoverMethod === 'uploaded_voice' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex rounded-lg border overflow-hidden w-fit mb-3",
                                            style: {
                                                borderColor: '#e2e8f0'
                                            },
                                            children: [
                                                {
                                                    val: 'file',
                                                    label: 'Upload a file'
                                                },
                                                {
                                                    val: 'live',
                                                    label: 'Record live'
                                                }
                                            ].map(({ val, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setRecordMethod(val);
                                                        if (val === 'live' && voiceFile && !isRecordingConfirmed) setVoiceFile(null);
                                                        if (val === 'file' && (recordedBlob || isRecordingConfirmed)) {
                                                            if (isRecordingConfirmed) setVoiceFile(null);
                                                            discardRecording();
                                                        }
                                                    },
                                                    className: "px-3 py-1.5 text-[10px] cursor-pointer font-bold transition-all",
                                                    style: recordMethod === val ? {
                                                        background: '#0066cc',
                                                        color: '#ffffff'
                                                    } : {
                                                        background: '#f8fafc',
                                                        color: '#94a3b8'
                                                    },
                                                    children: label
                                                }, val, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1056,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        recordMethod === 'file' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: voiceInputRef,
                                                    type: "file",
                                                    accept: "audio/mpeg,audio/wav,audio/mp4,audio/aac,audio/ogg,.mp3,.wav,.m4a,.aac,.ogg",
                                                    className: "hidden",
                                                    onChange: (e)=>setVoiceFile(e.target.files?.[0] ?? null)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !voiceFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>voiceInputRef.current?.click(),
                                                    onDragEnter: handleVoiceFileDragEnter,
                                                    onDragOver: handleVoiceFileDragOver,
                                                    onDragLeave: handleVoiceFileDragLeave,
                                                    onDrop: handleVoiceFileDrop,
                                                    className: "w-full flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-dashed transition-all cursor-pointer",
                                                    style: isVoiceFileDragOver ? {
                                                        borderColor: '#0066cc',
                                                        background: '#eaf3ff',
                                                        color: '#0066cc'
                                                    } : {
                                                        borderColor: '#cbd5e1',
                                                        background: '#ffffff',
                                                        color: '#64748b'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11.5px] font-semibold",
                                                            children: isVoiceFileDragOver ? 'Drop your recording here' : 'Click or drag your recording here (mp3, wav, m4a, aac, ogg)'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1098,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-3 rounded-xl border",
                                                    style: {
                                                        background: '#ffffff',
                                                        borderColor: '#e2e8f0'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                                            style: {
                                                                background: 'rgba(0,102,204,0.1)',
                                                                color: '#0066cc'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1104,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] font-semibold truncate",
                                                                    style: {
                                                                        color: '#334155'
                                                                    },
                                                                    children: voiceFile.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1108,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                    controls: true,
                                                                    src: URL.createObjectURL(voiceFile),
                                                                    className: "w-full h-8 mt-1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1109,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setVoiceFile(null),
                                                            className: "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 cursor-pointer",
                                                            style: {
                                                                background: '#fff1f2',
                                                                color: '#e11d48'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1112,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1103,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true),
                                        recordMethod === 'live' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-3 p-5 rounded-xl border",
                                            style: {
                                                background: '#ffffff',
                                                borderColor: '#e2e8f0'
                                            },
                                            children: [
                                                !isRecording && !recordedBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: startRecording,
                                                            className: "w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all",
                                                            style: {
                                                                background: '#0066cc',
                                                                boxShadow: '0 2px 8px rgba(0,102,204,0.3)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#fff'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 89
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1130,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1125,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11.5px] font-semibold",
                                                            style: {
                                                                color: '#475569'
                                                            },
                                                            children: "Tap to start recording"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1132,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px]",
                                                            style: {
                                                                color: '#cbd5e1'
                                                            },
                                                            children: "Needs microphone access, and a secure (https) connection."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1133,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true),
                                                isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: stopRecording,
                                                            className: "w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all",
                                                            style: {
                                                                background: '#e11d48',
                                                                boxShadow: '0 0 0 6px rgba(225,29,72,0.15)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#fff'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicIcon, {}, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1145,
                                                                    columnNumber: 89
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1140,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11.5px] font-semibold",
                                                            style: {
                                                                color: '#e11d48'
                                                            },
                                                            children: [
                                                                "Recording… ",
                                                                formatSeconds(recordingSeconds)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px]",
                                                            style: {
                                                                color: '#94a3b8'
                                                            },
                                                            children: "Read your script in order, then tap again to stop."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true),
                                                !isRecording && recordedBlob && !isRecordingConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10.5px] font-semibold text-center",
                                                            style: {
                                                                color: '#475569'
                                                            },
                                                            children: "Preview your recording"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                            controls: true,
                                                            src: recordedPreviewUrl ?? undefined,
                                                            className: "w-full h-9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondaryButton, {
                                                                    onClick: handleReRecordLive,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                            lineNumber: 1159,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " Re-record"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1158,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                                                    onClick: confirmRecordedVoice,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                            lineNumber: 1162,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " Use this recording"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1161,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1157,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !isRecording && recordedBlob && isRecordingConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex items-center gap-3 p-3 rounded-xl border",
                                                    style: {
                                                        background: '#f0fdf4',
                                                        borderColor: '#bbf7d0'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                                            style: {
                                                                background: 'rgba(5,150,105,0.12)',
                                                                color: '#059669'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1172,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] font-semibold",
                                                                    style: {
                                                                        color: '#166534'
                                                                    },
                                                                    children: "Recording attached"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1175,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                                    controls: true,
                                                                    src: recordedPreviewUrl ?? undefined,
                                                                    className: "w-full h-8 mt-1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                    lineNumber: 1176,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1174,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleReRecordLive,
                                                            className: "w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 cursor-pointer",
                                                            style: {
                                                                background: '#fff1f2',
                                                                color: '#e11d48'
                                                            },
                                                            "aria-label": "Remove and re-record",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                                lineNumber: 1183,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                            lineNumber: 1178,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1170,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1120,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1055,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                isRendering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 px-3.5 py-3 rounded-xl border mb-5",
                                    style: {
                                        background: '#f0f7ff',
                                        borderColor: '#bae6fd'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 rounded-full border-2 flex-shrink-0",
                                            style: {
                                                borderColor: '#0066cc',
                                                borderTopColor: 'transparent',
                                                animation: 'vp-spin 0.8s linear infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px]",
                                            style: {
                                                color: '#0369a1'
                                            },
                                            children: "Rendering your video — this can take a minute or two, please don't close this tab."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondaryButton, {
                                            onClick: ()=>setStep(3),
                                            disabled: isRendering,
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimaryButton, {
                                            onClick: handleRender,
                                            loading: isRendering,
                                            children: isRendering ? 'Rendering…' : 'Generate final video'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 998,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 5 && videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                            style: {
                                                background: 'rgba(5,150,105,0.1)',
                                                color: '#059669',
                                                animation: 'vp-pop 0.35s ease-out'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                lineNumber: 1213,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13.5px] font-bold",
                                            style: {
                                                color: '#1e293b'
                                            },
                                            children: "Your video is ready"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] mb-4",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "Preview below, then download or start a new video."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1217,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-[26px]",
                                        style: {
                                            background: '#0f172a',
                                            boxShadow: '0 12px 32px rgba(15,23,42,0.18)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            controls: true,
                                            poster: thumbnailUrl ? resolveMediaUrl(thumbnailUrl) : undefined,
                                            src: resolveMediaUrl(videoUrl),
                                            className: "rounded-2xl",
                                            style: {
                                                maxWidth: videoAspectRatio === 'landscape' ? '480px' : '300px',
                                                width: '100%',
                                                aspectRatio: CSS_RATIO[videoAspectRatio],
                                                background: '#000'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: resolveMediaUrl(videoUrl),
                                            onClick: handleDownload,
                                            className: "flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-bold transition-all active:scale-[0.98] cursor-pointer",
                                            style: {
                                                background: '#0066cc',
                                                color: '#ffffff',
                                                boxShadow: '0 2px 8px rgba(0,102,204,0.25)',
                                                opacity: isDownloading ? 0.7 : 1,
                                                pointerEvents: isDownloading ? 'none' : 'auto'
                                            },
                                            children: [
                                                isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent",
                                                    style: {
                                                        animation: 'vp-spin 0.8s linear infinite'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DownloadIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1254,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isDownloading ? 'Downloading...' : 'Download video'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1239,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SecondaryButton, {
                                            onClick: handleStartOver,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                                    lineNumber: 1259,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Create another"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                            lineNumber: 1258,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                                    lineNumber: 1238,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                            lineNumber: 1210,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, step, true, {
                    fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                    lineNumber: 739,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 738,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes vp-spin { to { transform: rotate(360deg); } }
                @keyframes vp-fade-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes vp-slide-down { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes vp-dropdown { from { opacity: 0; transform: scaleY(0.92) translateY(-4px); } to { opacity: 1; transform: scaleY(1) translateY(0); } }
                @keyframes vp-pop { 0% { transform: scale(0.6); opacity: 0; } 60% { transform: scale(1.12); } 100% { transform: scale(1); opacity: 1; } }
            `
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
                lineNumber: 1267,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/VideoProjectWorkspace.tsx",
        lineNumber: 735,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(VideoProjectWorkspace, "Oh/7DkmEqjWziAOUm3yOErfOh14=");
_c22 = VideoProjectWorkspace;
const __TURBOPACK__default__export__ = VideoProjectWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;
__turbopack_context__.k.register(_c, "SparkleIcon");
__turbopack_context__.k.register(_c1, "CheckIcon");
__turbopack_context__.k.register(_c2, "CloseIcon");
__turbopack_context__.k.register(_c3, "UploadCloudIcon");
__turbopack_context__.k.register(_c4, "ArrowUpIcon");
__turbopack_context__.k.register(_c5, "ArrowDownIcon");
__turbopack_context__.k.register(_c6, "TrashIcon");
__turbopack_context__.k.register(_c7, "HomeIcon");
__turbopack_context__.k.register(_c8, "MicIcon");
__turbopack_context__.k.register(_c9, "WandIcon");
__turbopack_context__.k.register(_c10, "PlayIcon");
__turbopack_context__.k.register(_c11, "DownloadIcon");
__turbopack_context__.k.register(_c12, "RefreshIcon");
__turbopack_context__.k.register(_c13, "GripIcon");
__turbopack_context__.k.register(_c14, "ChevronDownIcon");
__turbopack_context__.k.register(_c15, "TagIcon");
__turbopack_context__.k.register(_c16, "Badge");
__turbopack_context__.k.register(_c17, "StepIndicator");
__turbopack_context__.k.register(_c18, "ErrorBanner");
__turbopack_context__.k.register(_c19, "PrimaryButton");
__turbopack_context__.k.register(_c20, "SecondaryButton");
__turbopack_context__.k.register(_c21, "VoiceDropdown");
__turbopack_context__.k.register(_c22, "VideoProjectWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_aiagents_VideoProjectWorkspace_tsx_338990b4._.js.map