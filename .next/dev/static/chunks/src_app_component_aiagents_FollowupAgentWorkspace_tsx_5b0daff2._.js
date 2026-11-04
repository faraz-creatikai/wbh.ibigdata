(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$formatDateDMY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/formatDateDMY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customerFollowups.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PAGE_SIZE = 20;
/* ─────────────────────────── icons ─────────────────────────── */ const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "9",
        height: "9",
        viewBox: "0 0 9 9",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.5 4.5L3.5 6.5L7.5 2.5",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = CheckIcon;
const WaIcon = ({ c = 'w-3.5 h-3.5' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: c,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-5.8c-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12s-.65.82-.8 1-.29.19-.54.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42l-.8-1.92c-.21-.5-.42-.44-.58-.44h-.5c-.17 0-.44.06-.67.31s-.87.85-.87 2.07.9 2.4 1.02 2.57c.13.16 1.76 2.7 4.28 3.78 1.6.69 2.22.75 3.02.63.49-.07 1.5-.61 1.71-1.21.21-.6.21-1.1.15-1.21-.06-.1-.23-.16-.48-.29z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = WaIcon;
const MailIcon = ({ c = 'w-3.5 h-3.5' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: c,
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "4.5",
                width: "20",
                height: "15",
                rx: "2",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.5 6.5l9.5 7 9.5-7",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MailIcon;
const SparkleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SparkleIcon;
const AlertIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 9v4m0 4h.01M10.29 3.86L2.1 18a2 2 0 001.72 3h16.36a2 2 0 001.72-3L13.71 3.86a2 2 0 00-3.42 0z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = AlertIcon;
const EyeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = EyeIcon;
const BackIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 12H5m7-7l-7 7 7 7"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = BackIcon;
const ArrowIcon = ({ dir })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: dir === 'l' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = ArrowIcon;
const STATUS_CFG = {
    'Interested': {
        bg: '#f0fdf4',
        color: '#166534',
        border: '#bbf7d0'
    },
    'Converted': {
        bg: '#eef2ff',
        color: '#4338ca',
        border: '#c7d2fe'
    },
    'Callback Later': {
        bg: '#fff7ed',
        color: '#c2410c',
        border: '#fed7aa'
    },
    'No Response': {
        bg: '#f8fafc',
        color: '#64748b',
        border: '#e2e8f0'
    },
    'Not Interested': {
        bg: '#fef2f2',
        color: '#b91c1c',
        border: '#fecaca'
    },
    'Wrong Number': {
        bg: '#fef2f2',
        color: '#b91c1c',
        border: '#fecaca'
    }
};
const statusCfg = (s)=>STATUS_CFG[s || ''] || STATUS_CFG['No Response'];
const WA_TONE = {
    bg: '#f0fdf4',
    color: '#166534',
    border: '#bbf7d0'
};
const EMAIL_TONE = {
    bg: '#eef2ff',
    color: '#4338ca',
    border: '#c7d2fe'
};
const LANGUAGES = [
    {
        value: 'hinglish',
        label: 'Hinglish'
    },
    {
        value: 'english',
        label: 'English'
    },
    {
        value: 'hindi',
        label: 'Hindi'
    }
];
const PROMPT_HINTS = [
    {
        label: 'Interested',
        prompt: 'Customer liked the plan and asked us to send the details on email. Wants to decide this week.'
    },
    {
        label: 'Callback',
        prompt: 'Customer is busy right now, asked to call back next week.'
    },
    {
        label: 'No answer',
        prompt: 'Customer is not picking calls, tried twice today.'
    },
    {
        label: 'Closed',
        prompt: 'Customer confirmed the booking and made the payment.'
    }
];
const ProviderCard = ({ active, onToggle, icon, name, hint, reachable, total, tone })=>{
    const missing = total - reachable;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        className: "flex-1 flex items-start gap-2.5 px-3 py-2.5 rounded-xl border text-left cursor-pointer transition-all active:scale-[0.98]",
        style: active ? {
            background: tone.bg,
            borderColor: tone.border,
            boxShadow: `0 0 0 2px ${tone.border}55`
        } : {
            background: '#fff',
            borderColor: '#e7e5e4'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
                style: active ? {
                    background: '#fff',
                    color: tone.color
                } : {
                    background: '#f5f5f4',
                    color: '#d6d3d1'
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11.5px] font-bold",
                                style: {
                                    color: active ? tone.color : '#a8a29e'
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14px] h-[14px] rounded-[4px] flex items-center justify-center border flex-shrink-0 ml-auto transition-all",
                                style: active ? {
                                    background: tone.color,
                                    borderColor: tone.color
                                } : {
                                    background: '#fff',
                                    borderColor: '#d6d3d1'
                                },
                                children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 121,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] mt-0.5 leading-tight",
                        style: {
                            color: active ? tone.color : '#d6d3d1'
                        },
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9.5px] font-mono mt-1",
                        style: {
                            color: active ? tone.color : '#d6d3d1'
                        },
                        children: [
                            reachable,
                            "/",
                            total,
                            " reachable",
                            active && missing > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-500",
                                children: [
                                    " · ",
                                    missing,
                                    " skipped"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 128,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = ProviderCard;
/* ─────────────────────────── component ─────────────────────────── */ const FollowupAgentWorkspace = ({ onClose })=>{
    _s();
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PAGE_SIZE);
    const [isFetching, setIsFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hinglish');
    const [waOn, setWaOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [emailOn, setEmailOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('compose');
    const [drafts, setDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeIdx, setActiveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [personalized, setPersonalized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [emailHtmlMode, setEmailHtmlMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPreviewing, setIsPreviewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapCustomer = (item)=>{
        const date = new Date(item.createdAt);
        const formattedDate = date.getDate().toString().padStart(2, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getFullYear();
        return {
            _id: item._id,
            Campaign: item.Campaign,
            Type: item.CustomerType,
            SubType: item.CustomerSubType,
            Name: item.customerName,
            Description: item.Description,
            Email: item.Email,
            City: item.City,
            Location: item.Location,
            Adderess: item.Adderess,
            Area: item.Area,
            SubLocation: item.SubLocation,
            CustomerId: item.CustomerId,
            ClientId: item.ClientId,
            CustomerYear: item.CustomerYear,
            Facillities: item.Facillities,
            ContactNumber: item.ContactNumber?.slice(0, 10),
            ReferenceId: item.ReferenceId,
            AssignTo: item.AssignTo ?? [],
            isFavourite: item.isFavourite,
            isChecked: item.isChecked,
            Other: item.Other,
            Date: item.CustomerDate === 'N/A' ? 'N/A' : item.CustomerDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$formatDateDMY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateDMY"])(item.CustomerDate) : formattedDate,
            CustomerImage: item.CustomerImage || '',
            SitePlan: item.SitePlan || '',
            URL: item.URL || '',
            Video: item.Video || '',
            GoogleMap: item.GoogleMap || '',
            Price: item.Price || '',
            CustomerFields: item.CustomerFields || {}
        };
    };
    const fetchCustomer = async ()=>{
        setIsFetching(true);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomer"])();
        if (res) setCustomerData(res.map(mapCustomer));
        setIsFetching(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowupAgentWorkspace.useEffect": ()=>{
            fetchCustomer();
        }
    }["FollowupAgentWorkspace.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowupAgentWorkspace.useEffect": ()=>{
            setVisibleCount(PAGE_SIZE);
        }
    }["FollowupAgentWorkspace.useEffect"], [
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowupAgentWorkspace.useEffect": ()=>{
            const onKey = {
                "FollowupAgentWorkspace.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape' && showConfirm && !isSending) setShowConfirm(false);
                }
            }["FollowupAgentWorkspace.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "FollowupAgentWorkspace.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["FollowupAgentWorkspace.useEffect"];
        }
    }["FollowupAgentWorkspace.useEffect"], [
        showConfirm,
        isSending
    ]);
    const filteredCustomers = customerData.filter((c)=>c.Campaign?.includes(searchQuery) || c.Type?.includes(searchQuery) || c.SubType?.includes(searchQuery) || c.Name?.toLowerCase().includes(searchQuery.toLowerCase()) || c.Email?.toLowerCase().includes(searchQuery.toLowerCase()) || c.ContactNumber?.includes(searchQuery));
    const visibleCustomers = filteredCustomers.slice(0, visibleCount);
    const hasMore = visibleCount < filteredCustomers.length;
    const remaining = filteredCustomers.length - visibleCount;
    const selectedCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FollowupAgentWorkspace.useMemo[selectedCustomers]": ()=>customerData.filter({
                "FollowupAgentWorkspace.useMemo[selectedCustomers]": (c)=>selectedIds.includes(c._id)
            }["FollowupAgentWorkspace.useMemo[selectedCustomers]"])
    }["FollowupAgentWorkspace.useMemo[selectedCustomers]"], [
        customerData,
        selectedIds
    ]);
    const reachableWa = selectedCustomers.filter((c)=>c.ContactNumber).length;
    const reachableEmail = selectedCustomers.filter((c)=>c.Email).length;
    /* counts across ALL drafts, not just the visible one */ const waToSend = drafts.filter((d)=>!d.error && d.whatsapp?.trim() && d.phone && !d.skipWa).length;
    const emailToSend = drafts.filter((d)=>!d.error && d.emailContent?.subject?.trim() && d.emailContent?.body?.trim() && d.email && !d.skipEmail).length;
    const failedDrafts = drafts.filter((d)=>d.error).length;
    const waSeconds = waToSend > 1 ? Math.round(waToSend * 5) : 0;
    const etaLabel = waSeconds > 90 ? `~${Math.ceil(waSeconds / 60)} min` : waSeconds ? `~${waSeconds}s` : null;
    const active = drafts[activeIdx];
    const patchActive = (patch)=>setDrafts((prev)=>prev.map((d, i)=>i === activeIdx ? {
                    ...d,
                    ...patch
                } : d));
    const toggleSelect = (id)=>setSelectedIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    const toggleSelectAll = ()=>setSelectedIds(selectedIds.length === filteredCustomers.length ? [] : filteredCustomers.map((c)=>c._id));
    const isAllSelected = filteredCustomers.length > 0 && selectedIds.length === filteredCustomers.length;
    const isIndeterminate = selectedIds.length > 0 && selectedIds.length < filteredCustomers.length;
    const autoResize = ()=>{
        const el = textareaRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 120) + 'px';
        }
    };
    const basePayload = ()=>({
            customerIds: selectedIds,
            userPrompt: prompt.trim(),
            language,
            sendWhatsapp: waOn,
            sendEmail: emailOn
        });
    /* ── STEP 1: draft one message per customer ── */ const handlePreview = async ()=>{
        if (!prompt.trim() || selectedIds.length === 0 || isPreviewing) return;
        setError(null);
        setIsPreviewing(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAiFollowup"])({
                ...basePayload(),
                confirm: false
            });
            if (!res || res.success === false || !Array.isArray(res.drafts)) {
                setError(res?.message || 'Could not generate the follow-ups. Please try again.');
                return;
            }
            setDrafts(res.drafts.map((d)=>({
                    ...d,
                    skipWa: false,
                    skipEmail: false
                })));
            setPersonalized(res.personalized !== false);
            setActiveIdx(0);
            setEmailHtmlMode(false);
            setStep('review');
        } catch  {
            setError('Something went wrong. Please try again.');
        } finally{
            setIsPreviewing(false);
        }
    };
    /* ── STEP 2: send the reviewed drafts verbatim — no new AI calls ── */ const handleSend = async ()=>{
        setIsSending(true);
        setError(null);
        try {
            const payloadDrafts = drafts.filter((d)=>!d.error).map((d)=>({
                    customerId: d.customerId,
                    data: d.data,
                    whatsapp: !d.skipWa && d.whatsapp?.trim() ? d.whatsapp.trim() : null,
                    emailContent: !d.skipEmail && d.emailContent?.subject?.trim() && d.emailContent?.body?.trim() ? {
                        subject: d.emailContent.subject.trim(),
                        body: d.emailContent.body
                    } : null
                }));
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customerFollowups$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAiFollowup"])({
                ...basePayload(),
                confirm: true,
                drafts: payloadDrafts
            });
            if (!res || res.success === false) {
                setError(res?.message || 'Sending failed. Please try again.');
                return;
            }
            setResult(res);
            setShowConfirm(false);
            setStep('done');
        } catch  {
            setError('Something went wrong while sending.');
        } finally{
            setIsSending(false);
        }
    };
    const reset = ()=>{
        setStep('compose');
        setDrafts([]);
        setResult(null);
        setActiveIdx(0);
        setPrompt('');
        setError(null);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handlePreview();
        }
    };
    const canPreview = !!prompt.trim() && selectedIds.length > 0 && !isPreviewing;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden bg-stone-50 relative",
        children: [
            step === 'compose' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 bg-white border-b border-stone-200 px-4 pt-2 pb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none",
                                    width: "13",
                                    height: "13",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "7",
                                            stroke: "currentColor",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 332,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m16.5 16.5 4 4",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 333,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 331,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search by name, email or phone...",
                                    className: "w-full h-9 pl-8 pr-3 text-[12.5px] bg-stone-100 border border-stone-200 rounded-lg outline-none placeholder-stone-400 text-stone-800 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 330,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 329,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-between bg-white border-b border-stone-200 px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-[11.5px] text-stone-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-indigo-50 text-indigo-600 font-semibold text-[11px] px-2 py-0.5 rounded-full",
                                        children: filteredCustomers.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 343,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "customers",
                                    selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-stone-300",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 347,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-orange-50 text-orange-500 font-semibold text-[11px] px-2 py-0.5 rounded-full",
                                                children: [
                                                    selectedIds.length,
                                                    " selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 348,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 342,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            filteredCustomers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSelectAll,
                                className: "text-[11.5px] font-medium text-indigo-500 hover:text-indigo-700 transition-colors cursor-pointer",
                                children: isAllSelected ? 'Deselect all' : 'Select all'
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 353,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 341,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto min-h-0",
                        children: isFetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-14",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-5 h-5 rounded-full border-2 border-stone-200 border-t-indigo-500 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 362,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 361,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-14 text-stone-400 text-[13px] gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    className: "opacity-30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "8",
                                            r: "4",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 367,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 20c0-4 3.6-7 8-7s8 3 8 7",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 368,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 366,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                "No customers found"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 365,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[250px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "sticky top-0 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-10 pl-4 py-2 bg-stone-100 border-b border-stone-200 text-left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: toggleSelectAll,
                                                        className: `w-[15px] h-[15px] rounded cursor-pointer flex items-center justify-center border transition-all
                                                        ${isAllSelected || isIndeterminate ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-stone-300 hover:border-indigo-400'}`,
                                                        children: [
                                                            isAllSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 71
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            isIndeterminate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-0.5 bg-white rounded-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 73
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                [
                                                    'Campaign',
                                                    'Customer',
                                                    'Contact'
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-2 px-2 text-left text-[10.5px] font-semibold uppercase tracking-wider text-stone-400 bg-stone-100 border-b border-stone-200",
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 376,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 375,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            visibleCustomers.map((c)=>{
                                                const isSelected = selectedIds.includes(c._id);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    onClick: ()=>toggleSelect(c._id),
                                                    className: `border-b border-stone-100 cursor-pointer transition-colors ${isSelected ? 'bg-indigo-50 hover:bg-indigo-100/70' : 'bg-white hover:bg-stone-50'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "pl-4 py-2.5 w-10 align-middle",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-[15px] h-[15px] rounded flex items-center justify-center border flex-shrink-0 transition-all ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-stone-300'}`,
                                                                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 76
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                lineNumber: 397,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 px-2 align-middle",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[12.5px] font-medium text-stone-800 truncate leading-none",
                                                                    children: c.Campaign || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-indigo-400 truncate mt-0.5",
                                                                    children: c.Type || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 px-2 align-middle",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[12.5px] font-medium text-stone-800 truncate leading-none",
                                                                            children: c.Name || '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                            lineNumber: 407,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        !c.Email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[8.5px] font-bold px-1 py-0.5 rounded bg-red-50 text-red-600 flex-shrink-0",
                                                                            children: "no email"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 74
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        !c.ContactNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[8.5px] font-bold px-1 py-0.5 rounded bg-red-50 text-red-600 flex-shrink-0",
                                                                            children: "no phone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 82
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-indigo-400 truncate mt-0.5",
                                                                    children: c.Email || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2.5 px-2 pr-4 align-middle",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[12px] text-stone-600 tabular-nums whitespace-nowrap",
                                                                    children: c.ContactNumber || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 57
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                c.City && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-stone-400 mt-0.5 truncate",
                                                                    children: c.City
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 68
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, c._id, true, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0));
                                            }),
                                            hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "px-4 py-3 bg-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setVisibleCount((v)=>v + PAGE_SIZE);
                                                        },
                                                        className: "w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-dashed border-stone-300 text-[12px] font-medium text-stone-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/40 transition-all cursor-pointer",
                                                        children: [
                                                            "Load ",
                                                            Math.min(PAGE_SIZE, remaining),
                                                            " more",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-stone-400 font-normal",
                                                                children: [
                                                                    "(",
                                                                    remaining,
                                                                    " remaining)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 421,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    className: "py-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 431,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 390,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 374,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 373,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 359,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            step === 'review' && active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 bg-white border-b border-stone-200 px-3 py-2 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setStep('compose');
                                            setError(null);
                                        },
                                        className: "flex items-center gap-1 text-[11px] font-semibold text-stone-500 hover:text-indigo-600 cursor-pointer transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackIcon, {}, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 448,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Brief"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 446,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-stone-700 ml-1",
                                        children: [
                                            drafts.length,
                                            " draft",
                                            drafts.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 450,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    failedDrafts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-600",
                                        children: [
                                            failedDrafts,
                                            " failed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 454,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !personalized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-semibold px-1.5 py-0.5 rounded bg-stone-100 text-stone-500",
                                        children: "shared copy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 459,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveIdx((i)=>Math.max(0, i - 1)),
                                                disabled: activeIdx === 0,
                                                className: "w-6 h-6 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:border-indigo-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                                    dir: "l"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 464,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px] font-mono text-stone-400 w-10 text-center",
                                                children: [
                                                    activeIdx + 1,
                                                    "/",
                                                    drafts.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 468,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveIdx((i)=>Math.min(drafts.length - 1, i + 1)),
                                                disabled: activeIdx === drafts.length - 1,
                                                className: "w-6 h-6 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:border-indigo-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                                    dir: "r"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 469,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 463,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 445,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                                children: drafts.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveIdx(i);
                                            setEmailHtmlMode(false);
                                        },
                                        className: "flex items-center gap-1 text-[10.5px] font-semibold px-2 py-1 rounded-lg border cursor-pointer whitespace-nowrap flex-shrink-0 transition-all",
                                        style: i === activeIdx ? {
                                            background: '#4f46e5',
                                            color: '#fff',
                                            borderColor: '#4f46e5'
                                        } : d.error ? {
                                            background: '#fef2f2',
                                            color: '#b91c1c',
                                            borderColor: '#fecaca'
                                        } : {
                                            background: '#fff',
                                            color: '#78716c',
                                            borderColor: '#e7e5e4'
                                        },
                                        children: [
                                            d.name || '—',
                                            !d.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-0.5 opacity-70",
                                                children: [
                                                    d.whatsapp && !d.skipWa && d.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaIcon, {
                                                        c: "w-2.5 h-2.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 84
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    d.emailContent?.subject && !d.skipEmail && d.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {
                                                        c: "w-2.5 h-2.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 100
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 488,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, d.customerId, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 479,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 477,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 444,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto min-h-0 px-4 py-3 flex flex-col gap-3",
                        children: [
                            active.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-red-200 bg-red-50 p-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-semibold text-red-700",
                                        children: [
                                            "Draft failed for ",
                                            active.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 502,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-red-600 mt-1",
                                        children: active.error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 503,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10.5px] text-red-400 mt-1.5",
                                        children: "This customer will be skipped. The rest still send normally."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 504,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 501,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-stone-200 bg-white p-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9.5px] font-bold uppercase tracking-widest text-stone-300 mb-2",
                                                children: [
                                                    "Follow-up record · ",
                                                    active.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10.5px] font-bold px-2 py-0.5 rounded-lg border",
                                                        style: {
                                                            background: statusCfg(active.data?.StatusType).bg,
                                                            color: statusCfg(active.data?.StatusType).color,
                                                            borderColor: statusCfg(active.data?.StatusType).border
                                                        },
                                                        children: active.data?.StatusType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    active.data?.FollowupNextDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10.5px] font-medium px-2 py-0.5 rounded-lg bg-stone-100 text-stone-600",
                                                        children: [
                                                            "Next: ",
                                                            active.data.FollowupNextDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10.5px] font-medium px-2 py-0.5 rounded-lg bg-stone-100 text-stone-400",
                                                        children: "No next follow-up"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 513,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] text-stone-600 leading-relaxed",
                                                children: active.data?.Description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 530,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            active.aiMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-indigo-500 mt-2 flex items-start gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 84
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    active.aiMessage
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 532,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 509,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !active.whatsapp && !active.emailContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-stone-200 bg-stone-100 p-3.5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] font-semibold text-stone-600",
                                                children: [
                                                    "No message for ",
                                                    active.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 541,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-stone-400 mt-1",
                                                children: waOn || emailOn ? `"${active.data?.StatusType}" doesn't warrant outreach. The record still saves.` : 'No provider selected. The record still saves.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 542,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 540,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    active.whatsapp !== null && active.whatsapp !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-stone-200 bg-white overflow-hidden transition-opacity",
                                        style: {
                                            opacity: active.skipWa ? 0.55 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3.5 py-2.5 border-b border-stone-100",
                                                style: {
                                                    background: active.skipWa ? '#fafaf9' : 'rgba(240,253,244,0.5)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: active.skipWa ? '#d6d3d1' : '#16a34a'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 108
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        style: {
                                                            color: active.skipWa ? '#a8a29e' : '#15803d'
                                                        },
                                                        children: "WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-mono text-stone-400",
                                                        children: [
                                                            active.whatsapp.length,
                                                            " chars"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !active.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-600",
                                                        children: "no phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>patchActive({
                                                                skipWa: !active.skipWa
                                                            }),
                                                        className: "ml-auto text-[9.5px] font-bold px-2 py-1 rounded-lg border cursor-pointer transition-all",
                                                        style: active.skipWa ? {
                                                            background: '#fff',
                                                            color: '#a8a29e',
                                                            borderColor: '#e7e5e4'
                                                        } : {
                                                            background: '#dcfce7',
                                                            color: '#15803d',
                                                            borderColor: '#bbf7d0'
                                                        },
                                                        children: active.skipWa ? 'Skipped' : 'Will send'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 554,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: active.whatsapp,
                                                onChange: (e)=>patchActive({
                                                        whatsapp: e.target.value
                                                    }),
                                                rows: 6,
                                                disabled: active.skipWa,
                                                className: "w-full resize-y px-3.5 py-3 text-[12.5px] leading-relaxed outline-none text-stone-700 bg-white focus:bg-stone-50 transition-colors disabled:cursor-not-allowed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 568,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 552,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    active.emailContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-stone-200 bg-white overflow-hidden transition-opacity",
                                        style: {
                                            opacity: active.skipEmail ? 0.55 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3.5 py-2.5 border-b border-stone-100",
                                                style: {
                                                    background: active.skipEmail ? '#fafaf9' : 'rgba(238,242,255,0.5)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: active.skipEmail ? '#d6d3d1' : '#4f46e5'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 111
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        style: {
                                                            color: active.skipEmail ? '#a8a29e' : '#4338ca'
                                                        },
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !active.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-600",
                                                        children: "no email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>patchActive({
                                                                skipEmail: !active.skipEmail
                                                            }),
                                                        className: "ml-auto text-[9.5px] font-bold px-2 py-1 rounded-lg border cursor-pointer transition-all",
                                                        style: active.skipEmail ? {
                                                            background: '#fff',
                                                            color: '#a8a29e',
                                                            borderColor: '#e7e5e4'
                                                        } : {
                                                            background: '#e0e7ff',
                                                            color: '#4338ca',
                                                            borderColor: '#c7d2fe'
                                                        },
                                                        children: active.skipEmail ? 'Skipped' : 'Will send'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEmailHtmlMode((v)=>!v),
                                                        className: "flex items-center gap-1 text-[9.5px] font-semibold px-2 py-1 rounded-lg cursor-pointer transition-all",
                                                        style: emailHtmlMode ? {
                                                            background: '#f1f5f9',
                                                            color: '#64748b'
                                                        } : {
                                                            background: '#4f46e5',
                                                            color: '#fff'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EyeIcon, {}, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            emailHtmlMode ? 'Preview' : 'Edit HTML'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 580,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3.5 py-2.5 border-b border-stone-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: active.emailContent.subject,
                                                    disabled: active.skipEmail,
                                                    onChange: (e)=>patchActive({
                                                            emailContent: {
                                                                ...active.emailContent,
                                                                subject: e.target.value
                                                            }
                                                        }),
                                                    placeholder: "Subject",
                                                    className: "w-full text-[12.5px] font-medium text-stone-800 outline-none bg-transparent placeholder-stone-300 disabled:cursor-not-allowed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 598,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            emailHtmlMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: active.emailContent.body,
                                                disabled: active.skipEmail,
                                                onChange: (e)=>patchActive({
                                                        emailContent: {
                                                            ...active.emailContent,
                                                            body: e.target.value
                                                        }
                                                    }),
                                                rows: 10,
                                                className: "w-full resize-y px-3.5 py-3 text-[11.5px] font-mono leading-relaxed outline-none text-stone-700 bg-stone-50 disabled:cursor-not-allowed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 607,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[280px] bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    srcDoc: active.emailContent.body,
                                                    title: "Email preview",
                                                    className: "w-full h-full border-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 614,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 578,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 rounded-lg text-[11px] bg-red-50 text-red-700",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 623,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 498,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            step === 'done' && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto min-h-0 px-4 py-3 flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-stone-200 bg-white p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] font-bold text-stone-800 mb-2.5",
                                children: "Follow-ups created"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 632,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-lg border bg-stone-50 text-stone-600 border-stone-200",
                                        children: [
                                            result.count,
                                            " record",
                                            result.count !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 634,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-lg border bg-green-50 text-green-700 border-green-200",
                                        children: [
                                            result.whatsappSent || 0,
                                            " WhatsApp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 637,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-lg border bg-indigo-50 text-indigo-700 border-indigo-200",
                                        children: [
                                            result.emailSent || 0,
                                            " email"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 640,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 633,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 631,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: (result.results || []).map((r)=>{
                            const failed = r.errors?.length > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 px-3 py-2 rounded-xl border bg-white border-stone-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11.5px] font-semibold text-stone-800 truncate",
                                                        children: r.name || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    r.statusType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8.5px] font-bold px-1.5 py-0.5 rounded flex-shrink-0",
                                                        style: {
                                                            background: statusCfg(r.statusType).bg,
                                                            color: statusCfg(r.statusType).color
                                                        },
                                                        children: r.statusType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 652,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-red-600 truncate",
                                                children: r.errors.join(' · ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 661,
                                                columnNumber: 52
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 651,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 flex-shrink-0",
                                        children: [
                                            r.sent?.includes('whatsapp') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600",
                                                title: "WhatsApp sent",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaIcon, {
                                                    c: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 129
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 664,
                                                columnNumber: 74
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            r.sent?.includes('email') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-indigo-600",
                                                title: "Email sent",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {
                                                    c: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 124
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 665,
                                                columnNumber: 71
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !r.sent?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9.5px] font-semibold text-stone-400",
                                                children: "nothing sent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 666,
                                                columnNumber: 61
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 663,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, r.id, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 650,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 646,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        className: "mt-1 w-full py-2.5 rounded-xl text-[12px] font-bold text-white cursor-pointer transition-all active:scale-95",
                        style: {
                            background: '#4f46e5'
                        },
                        children: "Start a new follow-up"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 673,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 630,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 bg-white border-t border-stone-200 px-3 pt-2.5 pb-3 flex flex-col gap-2",
                children: [
                    step === 'compose' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest text-stone-300",
                                        children: "Send via"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 687,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-stretch gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderCard, {
                                                active: waOn,
                                                onToggle: ()=>setWaOn((v)=>!v),
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 43
                                                }, void 0),
                                                name: "WhatsApp",
                                                hint: "Instant, high open rate",
                                                reachable: reachableWa,
                                                total: selectedIds.length,
                                                tone: WA_TONE
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 689,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProviderCard, {
                                                active: emailOn,
                                                onToggle: ()=>setEmailOn((v)=>!v),
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailIcon, {}, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 43
                                                }, void 0),
                                                name: "Email",
                                                hint: "Better for details",
                                                reachable: reachableEmail,
                                                total: selectedIds.length,
                                                tone: EMAIL_TONE
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 692,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 688,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !waOn && !emailOn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10.5px] text-orange-500",
                                        children: "No provider selected — records will be saved, but nothing will be sent."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 697,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 686,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-bold uppercase tracking-widest text-stone-300 mr-0.5",
                                        children: "Tone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 704,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    LANGUAGES.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage(l.value),
                                            className: "text-[10px] font-semibold px-2 py-1 rounded-lg border cursor-pointer transition-all",
                                            style: language === l.value ? {
                                                background: '#f5f5f4',
                                                color: '#44403c',
                                                borderColor: '#d6d3d1'
                                            } : {
                                                background: '#fff',
                                                color: '#cbd5e1',
                                                borderColor: '#e7e5e4'
                                            },
                                            children: l.label
                                        }, l.value, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 706,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 703,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-wrap",
                                children: PROMPT_HINTS.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setPrompt(h.prompt);
                                            setTimeout(autoResize, 0);
                                        },
                                        className: "text-[9.5px] font-medium px-2 py-1 rounded-lg border bg-stone-50 border-stone-200 text-stone-500 hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-all",
                                        children: h.label
                                    }, h.label, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 718,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 716,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 727,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11.5px] font-medium text-indigo-500",
                                        children: [
                                            selectedIds.length,
                                            " customer",
                                            selectedIds.length !== 1 ? 's' : '',
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 728,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px] text-stone-400",
                                        children: [
                                            "· ",
                                            selectedIds.length,
                                            " message",
                                            selectedIds.length !== 1 ? 's' : '',
                                            " will be written"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 731,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 726,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 rounded-lg text-[11px] bg-red-50 text-red-700",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 735,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative rounded-xl border overflow-hidden transition-all
                            ${selectedIds.length === 0 ? 'border-stone-200 bg-stone-50 opacity-60 pointer-events-none' : 'border-stone-200 bg-stone-50 focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: textareaRef,
                                        rows: 1,
                                        value: prompt,
                                        onChange: (e)=>{
                                            setPrompt(e.target.value);
                                            autoResize();
                                        },
                                        onKeyDown: handleKeyDown,
                                        disabled: selectedIds.length === 0 || isPreviewing,
                                        placeholder: selectedIds.length === 0 ? 'Select customers above to begin...' : 'What happened on the call? e.g. "customer liked it, send details on email"',
                                        className: "w-full min-h-[44px] max-h-[120px] px-3 pt-2.5 pb-9 bg-transparent border-none outline-none resize-none text-[13px] text-stone-800 placeholder-stone-400 leading-snug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 741,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-1.5 left-3 right-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-stone-400 pointer-events-none select-none",
                                                children: isPreviewing ? `Writing ${selectedIds.length} message${selectedIds.length !== 1 ? 's' : ''}...` : 'Enter ↵ draft · nothing sends yet'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 752,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePreview,
                                                disabled: !canPreview,
                                                className: `px-2.5 h-7 rounded-lg flex items-center gap-1.5 text-[11px] font-bold transition-all cursor-pointer
                                        ${canPreview ? 'bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-sm shadow-indigo-200 hover:scale-[1.03] active:scale-95' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`,
                                                children: isPreviewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 43
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Draft"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                                lineNumber: 755,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 751,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 737,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedIds.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[11px] text-stone-400",
                                children: "Select at least one customer to use the AI agent"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 768,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    step === 'review' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-medium text-stone-700 truncate",
                                        children: waToSend || emailToSend ? `${waToSend} WhatsApp · ${emailToSend} email` : 'Records only — no messages'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 776,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    etaLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-orange-500 mt-0.5",
                                        children: [
                                            "Takes ",
                                            etaLabel,
                                            " — WhatsApp is paced to protect the number"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 782,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 775,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowConfirm(true),
                                className: "flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11.5px] font-bold text-white cursor-pointer transition-all active:scale-95",
                                style: {
                                    background: '#ea580c',
                                    boxShadow: '0 3px 10px rgba(234,88,12,0.35)'
                                },
                                children: "Confirm & Send All"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                lineNumber: 787,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                        lineNumber: 774,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 682,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-40 flex items-center justify-center px-6",
                style: {
                    background: 'rgba(15,23,42,0.4)',
                    backdropFilter: 'blur(2px)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[380px] rounded-2xl overflow-hidden bg-white",
                    style: {
                        boxShadow: '0 20px 60px rgba(0,0,0,0.25)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 pt-5 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-xl flex items-center justify-center mb-3 bg-orange-50 text-orange-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                        lineNumber: 802,
                                        columnNumber: 132
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 802,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] font-bold text-stone-900",
                                    children: "Send all drafts?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 803,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11.5px] mt-1.5 leading-relaxed text-stone-500",
                                    children: [
                                        "Creates ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-stone-800",
                                            children: drafts.filter((d)=>!d.error).length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 805,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " follow-up record",
                                        drafts.filter((d)=>!d.error).length !== 1 ? 's' : '',
                                        " and sends",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-stone-800",
                                            children: waToSend
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 806,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " WhatsApp and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-stone-800",
                                            children: emailToSend
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 806,
                                            columnNumber: 91
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " email",
                                        emailToSend !== 1 ? 's' : '',
                                        ". This can't be undone."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 804,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                failedDrafts > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10.5px] mt-2 px-3 py-2 rounded-lg bg-red-50 text-red-700",
                                    children: [
                                        failedDrafts,
                                        " draft",
                                        failedDrafts !== 1 ? 's' : '',
                                        " failed to generate and will be skipped."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 809,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                etaLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10.5px] mt-2.5 px-3 py-2 rounded-lg bg-orange-50 text-orange-700",
                                    children: [
                                        "Keep this open for about ",
                                        etaLabel,
                                        " — WhatsApp sends are spaced 3–7s apart to avoid a ban."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 814,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] mt-3 px-3 py-2 rounded-lg bg-red-50 text-red-700",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 818,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 801,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-5 py-3.5 border-t border-stone-100 bg-stone-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>!isSending && setShowConfirm(false),
                                    disabled: isSending,
                                    className: "flex-1 py-2.5 rounded-xl text-[12px] font-semibold bg-white text-stone-500 border border-stone-200 cursor-pointer disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 821,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: isSending,
                                    className: "flex-1 py-2.5 rounded-xl text-[12px] font-bold text-white cursor-pointer active:scale-95 disabled:opacity-70 flex items-center justify-center gap-1.5",
                                    style: {
                                        background: '#ea580c',
                                        boxShadow: '0 3px 10px rgba(234,88,12,0.35)'
                                    },
                                    children: [
                                        isSending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                            lineNumber: 828,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSending ? 'Sending…' : 'Confirm & Send'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                                    lineNumber: 825,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                            lineNumber: 820,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                    lineNumber: 800,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
                lineNumber: 798,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/FollowupAgentWorkspace.tsx",
        lineNumber: 324,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FollowupAgentWorkspace, "dcu4/HCh1xQUPde52Bwe1QNPT+w=");
_c9 = FollowupAgentWorkspace;
const __TURBOPACK__default__export__ = FollowupAgentWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "CheckIcon");
__turbopack_context__.k.register(_c1, "WaIcon");
__turbopack_context__.k.register(_c2, "MailIcon");
__turbopack_context__.k.register(_c3, "SparkleIcon");
__turbopack_context__.k.register(_c4, "AlertIcon");
__turbopack_context__.k.register(_c5, "EyeIcon");
__turbopack_context__.k.register(_c6, "BackIcon");
__turbopack_context__.k.register(_c7, "ArrowIcon");
__turbopack_context__.k.register(_c8, "ProviderCard");
__turbopack_context__.k.register(_c9, "FollowupAgentWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_aiagents_FollowupAgentWorkspace_tsx_5b0daff2._.js.map