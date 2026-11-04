(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/aiagents/AIChatMessages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const AIChatMessages = ({ agentName, messages, aiLoading = false, currentStep = "Thinking...", hints = [], onHintClick, maxHeight = "400px" })=>{
    _s();
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatMessages.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AIChatMessages.useEffect"], [
        messages,
        aiLoading
    ]);
    const getInitials = (name)=>name.split(" ").map((w)=>w[0]).join("").slice(0, 2).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto px-5 pb-4 pt-3 flex flex-col gap-3",
        style: {
            maxHeight,
            scrollbarWidth: "thin",
            scrollbarColor: "#e2e8f0 transparent"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 max-w-[88%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-semibold flex-shrink-0",
                        style: {
                            background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                            boxShadow: "0 2px 6px rgba(2,132,199,0.3)"
                        },
                        children: getInitials(agentName)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border",
                        style: {
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12.5px] leading-relaxed",
                                style: {
                                    color: "#475569"
                                },
                                children: [
                                    "👋 Hi! I'm",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sky-600",
                                        children: agentName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ".",
                                    " ",
                                    "Describe what you're looking for and I'll help you using AI."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            hints.length > 0 && messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mt-2.5",
                                children: hints.map((hint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onHintClick?.(hint),
                                        className: "text-[10px] px-2.5 py-1 rounded-full transition-all",
                                        style: {
                                            border: "1px solid #e2e8f0",
                                            background: "#f8fafc",
                                            color: "#64748b"
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.borderColor = "#7dd3fc";
                                            el.style.color = "#0284c7";
                                            el.style.background = "#f0f9ff";
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.borderColor = "#e2e8f0";
                                            el.style.color = "#64748b";
                                            el.style.background = "#f8fafc";
                                        },
                                        children: hint
                                    }, hint, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            messages.map((msg, i)=>{
                const isUser = msg.role === "user";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 my-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px",
                                    style: {
                                        background: "#e2e8f0"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-mono",
                                    style: {
                                        color: "#94a3b8"
                                    },
                                    children: "result"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px",
                                    style: {
                                        background: "#e2e8f0"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-end gap-2 max-w-[82%] ${isUser ? "ml-auto flex-row-reverse" : ""}`,
                            children: [
                                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-semibold flex-shrink-0",
                                    style: {
                                        background: "#e2e8f0",
                                        color: "#64748b"
                                    },
                                    children: "You"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-semibold flex-shrink-0",
                                    style: {
                                        background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                                        boxShadow: "0 2px 6px rgba(2,132,199,0.3)"
                                    },
                                    children: getInitials(agentName)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl rounded-br-[4px] px-3.5 py-2.5",
                                    style: {
                                        background: "#0284c7",
                                        boxShadow: "0 2px 8px rgba(2,132,199,0.25)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12.5px] leading-relaxed text-white",
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border",
                                    style: {
                                        background: "#ffffff",
                                        borderColor: "#e2e8f0",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12.5px] leading-relaxed",
                                        style: {
                                            color: "#475569"
                                        },
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 max-w-[88%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-semibold flex-shrink-0",
                        style: {
                            background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                            boxShadow: "0 2px 6px rgba(2,132,199,0.3)"
                        },
                        children: getInitials(agentName)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border flex items-center gap-2",
                        style: {
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    0,
                                    140,
                                    280
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full animate-bounce",
                                        style: {
                                            background: "#cbd5e1",
                                            animationDelay: `${d}ms`
                                        }
                                    }, d, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono",
                                style: {
                                    color: "#94a3b8"
                                },
                                children: currentStep
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottomRef
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AIChatMessages, "eaUWg0io6wE0buoFSqU1QLjVsUo=");
_c = AIChatMessages;
const __TURBOPACK__default__export__ = AIChatMessages;
var _c;
__turbopack_context__.k.register(_c, "AIChatMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/aiagents/AIAgentDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAgentDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ICONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
];
const TYPE_ICON = {
    Outreach: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {}, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 31,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Analytics: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Analytics",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 32,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    Recommendation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 33,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    Research: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/icons/research.png",
        alt: "Research"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 34,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Automation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/icons/automation.png",
        alt: "Automation"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 35,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    Calling: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png",
        alt: "Calling",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 36,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Followup: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 37,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Matching: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png",
        alt: "Matching",
        className: "object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 38,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Qualification: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png",
        alt: "Qualification",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 39,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    Mining: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Mining",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 40,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Social: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 41,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Script: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 42,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Email: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Video: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 44,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Assistant: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Analytics",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 45,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0))
};
const TYPE_COLORS = {
    Qualification: {
        bg: "bg-sky-50",
        text: "text-sky-700"
    },
    Followup: {
        bg: "bg-amber-50",
        text: "text-amber-700"
    },
    Matching: {
        bg: "bg-emerald-50",
        text: "text-emerald-700"
    },
    Research: {
        bg: "bg-rose-50",
        text: "text-rose-700"
    },
    Automation: {
        bg: "bg-violet-50",
        text: "text-violet-700"
    },
    Calling: {
        bg: "bg-violet-50",
        text: "text-violet-700"
    },
    Recommendation: {
        bg: "bg-sky-50",
        text: "text-sky-700"
    },
    Mining: {
        bg: "bg-fuchsia-50",
        text: "text-fuchsia-700"
    },
    Analytics: {
        bg: "bg-fuchsia-50",
        text: "text-fuchsia-700"
    },
    Social: {
        bg: "bg-rose-50",
        text: "text-rose-700"
    },
    Script: {
        bg: "bg-amber-50",
        text: "text-amber-700"
    },
    Email: {
        bg: "bg-amber-50",
        text: "text-amber-700"
    },
    Assistant: {
        bg: "bg-fuchsia-50",
        text: "text-fuchsia-700"
    },
    _default: {
        bg: "bg-gray-50",
        text: "text-gray-600"
    }
};
function renderIcon(icon, className) {
    if (typeof icon === "string") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
            lineNumber: 68,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
        className: `${className} ${icon.props?.className || ""}`
    });
}
function getTypeColor(type) {
    return TYPE_COLORS[type] ?? TYPE_COLORS._default;
}
function AIAgentDropdown({ agents, setSelectedAgent, setIsAIAgentDialogOpen, isLoading = false }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAgentDropdown.useEffect": ()=>{
            const handler = {
                "AIAgentDropdown.useEffect.handler": (e)=>{
                    if (ref.current && !ref.current.contains(e.target)) {
                        setIsOpen(false);
                    }
                }
            }["AIAgentDropdown.useEffect.handler"];
            document.addEventListener("mousedown", handler);
            return ({
                "AIAgentDropdown.useEffect": ()=>document.removeEventListener("mousedown", handler)
            })["AIAgentDropdown.useEffect"];
        }
    }["AIAgentDropdown.useEffect"], []);
    const handleSelect = (agent)=>{
        setActive(agent);
        setSelectedAgent(agent);
        setIsAIAgentDialogOpen(true);
        setIsOpen(false);
    };
    const activeIdx = active ? agents.indexOf(active) : -1;
    const ActiveIcon = activeIdx >= 0 ? ICONS[activeIdx % ICONS.length] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"];
    const activeIcon = active ? TYPE_ICON[active.type] ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 110,
        columnNumber: 37
    }, this) : null;
    const activeColor = active ? getTypeColor(active.type) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative inline-flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-medium text-gray-400 uppercase tracking-wider select-none whitespace-nowrap",
                children: "AI Agent"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen((v)=>!v),
                className: [
                    "inline-flex cursor-pointer items-center gap-1.5 h-7 px-2.5 rounded-full border text-xs font-medium",
                    "transition-all duration-150 select-none whitespace-nowrap",
                    active ? `${activeColor.bg} ${activeColor.text} border-transparent hover:brightness-95` : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                    isOpen ? "ring-2 ring-offset-1 ring-gray-200" : ""
                ].join(" "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? active.status === "Active" ? "bg-emerald-500" : "bg-gray-300" : "bg-gray-300"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            active && renderIcon(activeIcon, "w-3 h-3 flex-shrink-0 opacity-70"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: active.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Assign agent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: `w-3 h-3 flex-shrink-0 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full right-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl overflow-hidden min-w-[260px] max-w-[320px]",
                style: {
                    boxShadow: "0 4px 20px -4px rgba(0,0,0,0.12), 0 1px 6px -1px rgba(0,0,0,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pt-2.5 pb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-semibold uppercase tracking-widest text-gray-400",
                            children: "Choose assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 161,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "pb-1 max-h-[260px] overflow-y-auto",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-2 py-2 flex flex-col gap-1.5",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-1 py-1.5 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-lg bg-gray-100 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 173,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2.5 bg-gray-100 rounded-full w-2/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded-full w-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 174,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-4 rounded-full bg-gray-100 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 178,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                    lineNumber: 172,
                                    columnNumber: 37
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                            lineNumber: 170,
                            columnNumber: 29
                        }, this) : agents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-3 py-4 text-center text-xs text-gray-400",
                            children: "No agents available"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                            lineNumber: 183,
                            columnNumber: 29
                        }, this) : agents.map((agent, i)=>{
                            const icon = TYPE_ICON[agent.type] ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 186,
                                columnNumber: 71
                            }, this);
                            const color = getTypeColor(agent.type);
                            const isActive = active?.id === agent.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSelect(agent),
                                    className: `w-full cursor-pointer flex items-center gap-3 px-3 py-2 text-left text-xs transition-colors duration-100 ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${color.bg}`,
                                            children: [
                                                renderIcon(icon, `w-3.5 h-3.5 ${color.text}`),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-white ${agent.status === "Active" ? "bg-emerald-500" : "bg-gray-300"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 197,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-800 truncate leading-tight",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 truncate mt-px text-[11px]",
                                                    children: agent.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 206,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 flex-shrink-0",
                                            children: [
                                                agent.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${color.bg} ${color.text}`,
                                                    children: agent.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: `w-3.5 h-3.5 text-emerald-500 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 212,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                    lineNumber: 191,
                                    columnNumber: 41
                                }, this)
                            }, agent.id, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 190,
                                columnNumber: 37
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1.5 border-t border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-gray-400",
                                children: [
                                    agents.filter((a)=>a.status === "Active").length,
                                    " active · ",
                                    agents.length,
                                    " total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 229,
                                columnNumber: 25
                            }, this),
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActive(null);
                                    setIsOpen(false);
                                },
                                className: "text-[10px] cursor-pointer text-gray-400 hover:text-gray-600 transition-colors",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 233,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 228,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                lineNumber: 156,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
}
_s(AIAgentDropdown, "dFSHgWdVRW2r5eDl0UCU1mEt6mA=");
_c = AIAgentDropdown;
var _c;
__turbopack_context__.k.register(_c, "AIAgentDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$formatDateDMY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/formatDateDMY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ── tiny icon components (no extra deps) ── */ const SearchIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "11",
                cy: "11",
                r: "8",
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m21 21-4.35-4.35",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = SearchIcon;
const UserIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = UserIcon;
const SendIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5 fill-white",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SendIcon;
const SparkleIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SparkleIcon;
const ClearIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3 h-3",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = ClearIcon;
/* ── temperature badge ── */ const TempBadge = ({ label })=>{
    const map = {
        Hot: {
            bg: 'rgba(239,68,68,0.08)',
            color: '#dc2626',
            dot: '#ef4444'
        },
        Warm: {
            bg: 'rgba(249,115,22,0.08)',
            color: '#ea580c',
            dot: '#f97316'
        },
        Cold: {
            bg: 'rgba(59,130,246,0.08)',
            color: '#2563eb',
            dot: '#3b82f6'
        },
        Mild: {
            bg: 'rgba(16,185,129,0.08)',
            color: '#059669',
            dot: '#10b981'
        }
    };
    const s = map[label] ?? {
        bg: 'rgba(100,116,139,0.08)',
        color: '#475569',
        dot: '#94a3b8'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold",
        style: {
            background: s.bg,
            color: s.color
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full",
                style: {
                    background: s.dot
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = TempBadge;
const extractTemp = (text)=>{
    const m = text.match(/Lead:\s*(\w+)/i);
    return m ? m[1] : null;
};
/* ── avatar initials ── */ const Avatar = ({ name })=>{
    const initials = (name || '?').split(' ').map((w)=>w[0]).slice(0, 2).join('').toUpperCase();
    const colors = [
        [
            '#e0f2fe',
            '#0284c7'
        ],
        [
            '#fce7f3',
            '#db2777'
        ],
        [
            '#d1fae5',
            '#059669'
        ],
        [
            '#ede9fe',
            '#7c3aed'
        ],
        [
            '#fef3c7',
            '#d97706'
        ],
        [
            '#fee2e2',
            '#dc2626'
        ]
    ];
    const idx = (name?.charCodeAt(0) ?? 0) % colors.length;
    const [bg, fg] = colors[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold flex-shrink-0",
        style: {
            background: bg,
            color: fg
        },
        children: initials
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = Avatar;
/* ─────────────────────────────────────────────── */ const CallingAgentWorkspace = ({ isOpen })=>{
    _s();
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchField, setSearchField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCustomersLoading, setIsCustomersLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallingAgentWorkspace.useEffect": ()=>{
            if (!isOpen) return;
            const fetchCustomers = {
                "CallingAgentWorkspace.useEffect.fetchCustomers": async ()=>{
                    setIsCustomersLoading(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomer"])();
                        if (res) setCustomers(res.map(mapCustomer));
                    } catch (err) {
                        console.error(err);
                    } finally{
                        setIsCustomersLoading(false);
                    }
                }
            }["CallingAgentWorkspace.useEffect.fetchCustomers"];
            fetchCustomers();
        }
    }["CallingAgentWorkspace.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallingAgentWorkspace.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["CallingAgentWorkspace.useEffect"], [
        messages,
        isLoading
    ]);
    const SEARCH_FIELDS = [
        'All',
        'Name',
        'Email',
        'Campaign',
        'Type',
        'Phone'
    ];
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CallingAgentWorkspace.useMemo[filteredCustomers]": ()=>{
            if (!searchQuery.trim()) return customers;
            const q = searchQuery.toLowerCase();
            return customers.filter({
                "CallingAgentWorkspace.useMemo[filteredCustomers]": (c)=>{
                    if (searchField === 'All') {
                        return c.Name?.toLowerCase().includes(q) || c.Email?.toLowerCase().includes(q) || c.Campaign?.toLowerCase().includes(q) || c.Type?.toLowerCase().includes(q) || c.ContactNumber?.includes(q);
                    }
                    const fieldMap = {
                        Name: c.Name,
                        Email: c.Email,
                        Campaign: c.Campaign,
                        Type: c.Type,
                        Phone: c.ContactNumber
                    };
                    return fieldMap[searchField]?.toLowerCase().includes(q);
                }
            }["CallingAgentWorkspace.useMemo[filteredCustomers]"]);
        }
    }["CallingAgentWorkspace.useMemo[filteredCustomers]"], [
        customers,
        searchQuery,
        searchField
    ]);
    const selectedCustomer = customers.find((c)=>c._id === selectedId);
    const autoResize = ()=>{
        const el = textareaRef.current;
        if (el) {
            el.style.height = 'auto';
            el.style.height = Math.min(el.scrollHeight, 120) + 'px';
        }
    };
    const handleSubmit = async ()=>{
        if (!prompt.trim() || !selectedId || isLoading) return;
        const userText = prompt;
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    text: userText
                }
            ]);
        setPrompt('');
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
        setIsLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startCallByAIAgent"])({
                customerId: selectedId,
                userPrompt: userText
            });
            const aiText = `\nLead: ${res?.data?.leadTemperature}\n\nReason: ${res?.data?.aiReason}`;
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'ai',
                        answer: res?.data?.aiAnswer,
                        confirmed: false
                    }
                ]);
        // setMessages((prev: any[]) => [...prev, { role: 'ai', text: aiText }])
        /* setMessages(prev => [
                ...prev,
                {
                    role: 'ai',
                    text: aiText,
                    leadTemperature: res?.data?.leadTemperature,
                    aiReason: res?.data?.aiReason,
                    answer: res?.data?.answer,
                    confirmed: false
                }
            ]) */ } catch  {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'ai',
                        text: 'Something went wrong. Please try again.'
                    }
                ]);
        }
        setIsLoading(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };
    const hints = [
        'Call this lead now',
        'Initiate site visit discussion call',
        'Connect with this lead for property details',
        'Begin conversation to schedule site visit',
        'Talk to this customer about property visit'
    ];
    const handleUpdateTemperature = async (id, value)=>{
        console.log(" id is ", id, "payload is ", value);
        const formData = new FormData();
        formData.append("LeadTemperature", value.toString());
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCustomer"])(id, formData);
        if (res) {
            return;
        }
    };
    const handleConfirm = async (index, isYes)=>{
        const msg = messages[index];
        if (!msg?.leadTemperature || !selectedId) return;
        let updated = false;
        if (isYes) {
            await handleUpdateTemperature(selectedId, msg.leadTemperature);
            updated = true;
        }
        // update message state
        setMessages((prev)=>prev.map((m, i)=>i === index ? {
                    ...m,
                    confirmed: true,
                    updated
                } : m));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full overflow-hidden rounded-xl",
        style: {
            background: '#f8fafc'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col border-r",
                style: {
                    width: '272px',
                    minWidth: '272px',
                    borderColor: '#e2e8f0',
                    background: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-4 pb-3 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-lg flex items-center justify-center",
                                        style: {
                                            background: 'rgba(2,132,199,0.1)',
                                            color: '#0284c7'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 288,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-semibold tracking-wide uppercase",
                                        style: {
                                            color: '#64748b'
                                        },
                                        children: "Customers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 290,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-md",
                                        style: {
                                            background: '#f1f5f9',
                                            color: '#94a3b8'
                                        },
                                        children: filteredCustomers.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 293,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 285,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 302,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search customers…",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-8 pr-7 py-2 rounded-xl text-[11.5px] outline-none border transition-all duration-150",
                                        style: {
                                            background: '#f8fafc',
                                            borderColor: '#e2e8f0',
                                            color: '#334155'
                                        },
                                        onFocus: (e)=>{
                                            e.currentTarget.style.borderColor = '#7dd3fc';
                                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(125,211,252,0.12)';
                                        },
                                        onBlur: (e)=>{
                                            e.currentTarget.style.borderColor = '#e2e8f0';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(''),
                                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = '#94a3b8',
                                        onMouseLeave: (e)=>e.currentTarget.style.color = '#cbd5e1',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClearIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 327,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 321,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 flex-wrap",
                                children: SEARCH_FIELDS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchField(f),
                                        className: "text-[9.5px] font-semibold px-2 py-0.5 rounded-full transition-all duration-150",
                                        style: searchField === f ? {
                                            background: '#0284c7',
                                            color: '#ffffff'
                                        } : {
                                            background: '#f1f5f9',
                                            color: '#94a3b8'
                                        },
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 333,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 284,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        style: {
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: isCustomersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 px-4 py-4",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-pulse flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-xl bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2.5 bg-gray-200 rounded w-2/3 mb-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded w-1/2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                            lineNumber: 350,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0)) : filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-10 px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-xl flex items-center justify-center mb-2",
                                    style: {
                                        background: '#f1f5f9',
                                        color: '#cbd5e1'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 365,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 363,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-medium",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: "No customers found"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 367,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                            lineNumber: 362,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : filteredCustomers.map((c)=>{
                            const isSelected = selectedId === c._id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedId(c._id);
                                    setMessages([]);
                                },
                                className: "w-full text-left px-4 py-3 transition-all duration-150 border-b",
                                style: {
                                    borderColor: '#f1f5f9',
                                    background: isSelected ? 'rgba(2,132,199,0.05)' : 'transparent',
                                    borderLeft: isSelected ? '2px solid #0284c7' : '2px solid transparent'
                                },
                                onMouseEnter: (e)=>{
                                    if (!isSelected) e.currentTarget.style.background = '#f8fafc';
                                },
                                onMouseLeave: (e)=>{
                                    if (!isSelected) e.currentTarget.style.background = 'transparent';
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                            name: c.Name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 385,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] font-semibold truncate",
                                                    style: {
                                                        color: isSelected ? '#0284c7' : '#1e293b'
                                                    },
                                                    children: c.Name || '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10.5px] truncate mt-0.5",
                                                    style: {
                                                        color: '#94a3b8'
                                                    },
                                                    children: c.ContactNumber || c.Email || '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mt-1.5 flex-wrap",
                                                    children: [
                                                        c.Campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-medium px-1.5 py-0.5 rounded-md",
                                                            style: {
                                                                background: '#f0f9ff',
                                                                color: '#0369a1'
                                                            },
                                                            children: c.Campaign
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        c.Type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-medium px-1.5 py-0.5 rounded-md",
                                                            style: {
                                                                background: '#f0fdf4',
                                                                color: '#166534'
                                                            },
                                                            children: c.Type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 386,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 384,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, c._id, false, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 372,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    selectedCustomer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 px-5 py-3 border-b flex items-center gap-3",
                        style: {
                            background: '#ffffff',
                            borderColor: '#e2e8f0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                name: selectedCustomer.Name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 422,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-semibold",
                                        style: {
                                            color: '#1e293b'
                                        },
                                        children: selectedCustomer.Name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 424,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-0.5 flex-wrap",
                                        children: [
                                            selectedCustomer.Email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px]",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: selectedCustomer.Email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                lineNumber: 429,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedCustomer.ContactNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px]",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    "· ",
                                                    selectedCustomer.ContactNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                lineNumber: 432,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedCustomer.City && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px]",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    "· ",
                                                    selectedCustomer.City
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                lineNumber: 435,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 427,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 423,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end",
                                children: [
                                    selectedCustomer.Campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-semibold px-2 py-1 rounded-lg",
                                        style: {
                                            background: '#f0f9ff',
                                            color: '#0369a1',
                                            border: '1px solid #bae6fd'
                                        },
                                        children: selectedCustomer.Campaign
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 441,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedCustomer.Type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9.5px] font-semibold px-2 py-1 rounded-lg",
                                        style: {
                                            background: '#f0fdf4',
                                            color: '#166534',
                                            border: '1px solid #bbf7d0'
                                        },
                                        children: selectedCustomer.Type
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 447,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 439,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 420,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 border-b",
                        style: {
                            background: '#ffffff',
                            borderColor: '#e2e8f0',
                            height: '56px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 455,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3",
                        style: {
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#e2e8f0 transparent'
                        },
                        children: [
                            !selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center py-16 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-2xl flex items-center justify-center mb-4",
                                        style: {
                                            background: 'rgba(2,132,199,0.08)',
                                            color: '#0284c7'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.413-1.798-1.414-2.798L4.2 15.3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                lineNumber: 468,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 467,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 465,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] font-semibold",
                                        style: {
                                            color: '#334155'
                                        },
                                        children: "Select a customer to qualify"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 472,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11.5px] mt-1",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "Choose from the list and ask about lead quality"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 473,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 464,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedId && messages.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center flex-1 py-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-2xl flex items-center justify-center mb-3",
                                        style: {
                                            background: 'rgba(2,132,199,0.08)',
                                            color: '#0284c7'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 484,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 482,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] font-semibold mb-1",
                                        style: {
                                            color: '#334155'
                                        },
                                        children: "Qualification AI ready"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 486,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] mb-5",
                                        style: {
                                            color: '#94a3b8'
                                        },
                                        children: "Ask anything about this lead"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 487,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 w-full max-w-[320px]",
                                        children: hints.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPrompt(h),
                                                className: "text-left px-3.5 py-2.5 rounded-xl text-[11.5px] font-medium transition-all duration-150 border",
                                                style: {
                                                    background: '#f8fafc',
                                                    borderColor: '#e2e8f0',
                                                    color: '#475569'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = '#f0f9ff';
                                                    e.currentTarget.style.borderColor = '#bae6fd';
                                                    e.currentTarget.style.color = '#0284c7';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = '#f8fafc';
                                                    e.currentTarget.style.borderColor = '#e2e8f0';
                                                    e.currentTarget.style.color = '#475569';
                                                },
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                lineNumber: 490,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 488,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 481,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            messages.map((m, i)=>{
                                //  const temp = m.role === 'ai' ? extractTemp(m.text) : null
                                // const reason = m.role === 'ai' ? m.text.replace(/^[\s\S]*?Reason:\s*/i, '').trim() : null
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: [
                                        m.role === 'ai' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-[80%] rounded-2xl rounded-tl-md overflow-hidden border",
                                            style: {
                                                borderColor: '#e2e8f0',
                                                background: '#ffffff',
                                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                                            },
                                            children: [
                                                m.leadTemperature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 border-b flex items-center justify-between",
                                                    style: {
                                                        borderColor: '#f1f5f9',
                                                        background: '#f8fafc'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-semibold uppercase tracking-wider",
                                                            style: {
                                                                color: '#94a3b8'
                                                            },
                                                            children: "Potential qualification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TempBadge, {
                                                            label: m.leadTemperature
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 7
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                m.aiReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 pt-3 pb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold uppercase tracking-wider mb-1.5",
                                                            style: {
                                                                color: '#94a3b8'
                                                            },
                                                            children: "Reason"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12.5px] leading-relaxed",
                                                            style: {
                                                                color: '#334155'
                                                            },
                                                            children: m.aiReason
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 7
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                m.answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 pt-3 pb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold uppercase tracking-wider mb-1.5",
                                                            style: {
                                                                color: '#94a3b8'
                                                            },
                                                            children: "Answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12.5px] leading-relaxed",
                                                            style: {
                                                                color: '#334155'
                                                            },
                                                            children: m.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 9
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 7
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                m.leadTemperature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 pb-3 border-t pt-3 flex flex-col gap-2",
                                                    style: {
                                                        borderColor: '#f1f5f9'
                                                    },
                                                    children: !m.confirmed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11.5px]",
                                                                style: {
                                                                    color: '#64748b'
                                                                },
                                                                children: "Save this qualification status to the customer profile?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleConfirm(i, true),
                                                                        className: "text-[11.5px] cursor-pointer font-medium px-3 py-1.5 rounded-lg transition-opacity",
                                                                        style: {
                                                                            background: '#dcfce7',
                                                                            color: '#166534',
                                                                            border: '1px solid #bbf7d0'
                                                                        },
                                                                        children: "Yes, update"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                        lineNumber: 566,
                                                                        columnNumber: 15
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleConfirm(i, false),
                                                                        className: "text-[11.5px] cursor-pointer font-medium px-3 py-1.5 rounded-lg transition-opacity border",
                                                                        style: {
                                                                            borderColor: '#e2e8f0',
                                                                            color: '#64748b',
                                                                            background: 'transparent'
                                                                        },
                                                                        children: "No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                        lineNumber: 571,
                                                                        columnNumber: 15
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: m.updated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3.5 h-3.5",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "#166534",
                                                                    strokeWidth: "2.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "20 6 9 17 4 12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 160
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                    lineNumber: 581,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11.5px] font-medium",
                                                                    style: {
                                                                        color: '#166534'
                                                                    },
                                                                    children: "Qualification status updated"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3.5 h-3.5",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "#94a3b8",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "18",
                                                                            y1: "6",
                                                                            x2: "6",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                            lineNumber: 583,
                                                                            columnNumber: 158
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "6",
                                                                            y1: "6",
                                                                            x2: "18",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                            lineNumber: 583,
                                                                            columnNumber: 195
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11.5px]",
                                                                    style: {
                                                                        color: '#94a3b8'
                                                                    },
                                                                    children: "Not saved"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 7
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 520,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        m.role === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-[72%] px-3.5 py-2.5 rounded-2xl rounded-tr-md text-[12px] leading-relaxed",
                                            style: {
                                                background: '#0284c7',
                                                color: '#ffffff',
                                                boxShadow: '0 2px 8px rgba(2,132,199,0.25)'
                                            },
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 595,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 516,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0",
                                        style: {
                                            background: 'rgba(2,132,199,0.1)',
                                            color: '#0284c7'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 616,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 614,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 rounded-2xl rounded-tl-md border",
                                        style: {
                                            background: '#ffffff',
                                            borderColor: '#e2e8f0'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                0,
                                                1,
                                                2
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full",
                                                    style: {
                                                        background: '#0284c7',
                                                        opacity: 0.6,
                                                        animation: `qa-bounce 1.2s ${i * 0.2}s infinite`
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 620,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 618,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 613,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                lineNumber: 633,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 459,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 border-t px-4 pt-3 pb-4",
                        style: {
                            borderColor: '#e2e8f0',
                            background: '#ffffff'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end gap-2 rounded-2xl px-3.5 pt-2.5 pb-2 border-[1.5px] transition-all duration-200",
                            style: {
                                background: '#ffffff',
                                borderColor: '#e2e8f0'
                            },
                            onFocusCapture: (e)=>{
                                const w = e.currentTarget;
                                w.style.borderColor = '#7dd3fc';
                                w.style.boxShadow = '0 0 0 3px rgba(125,211,252,0.12)';
                            },
                            onBlurCapture: (e)=>{
                                const w = e.currentTarget;
                                w.style.borderColor = '#e2e8f0';
                                w.style.boxShadow = 'none';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
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
                                            placeholder: "Ask about this customer's lead quality…",
                                            disabled: isLoading,
                                            className: "w-full resize-none bg-transparent outline-none leading-relaxed disabled:opacity-40",
                                            style: {
                                                fontSize: '12.5px',
                                                color: '#0f172a',
                                                minHeight: '24px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 655,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-1.5 mt-1 border-t",
                                            style: {
                                                borderColor: '#f1f5f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: hints.slice(0, 2).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setPrompt(h),
                                                            className: "text-[9.5px] font-medium px-2 py-0.5 rounded-lg transition-all border",
                                                            style: {
                                                                borderColor: '#e2e8f0',
                                                                background: '#f8fafc',
                                                                color: '#94a3b8'
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.borderColor = '#bae6fd';
                                                                e.currentTarget.style.background = '#f0f9ff';
                                                                e.currentTarget.style.color = '#0284c7';
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.borderColor = '#e2e8f0';
                                                                e.currentTarget.style.background = '#f8fafc';
                                                                e.currentTarget.style.color = '#94a3b8';
                                                            },
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-mono",
                                                    style: {
                                                        color: '#cbd5e1'
                                                    },
                                                    children: "↵ send"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                            lineNumber: 666,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 654,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    disabled: isLoading || !prompt.trim(),
                                    className: "w-8 h-8 mb-1 rounded-xl flex items-center justify-center transition-all duration-150 flex-shrink-0 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed",
                                    style: {
                                        background: '#0284c7',
                                        boxShadow: '0 2px 8px rgba(2,132,199,0.3)'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!isLoading && prompt.trim()) e.currentTarget.style.background = '#0369a1';
                                    },
                                    onMouseLeave: (e)=>e.currentTarget.style.background = '#0284c7',
                                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent",
                                        style: {
                                            animation: 'qa-spin 0.8s linear infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 699,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {}, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                        lineNumber: 701,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                                    lineNumber: 690,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                            lineNumber: 640,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                        lineNumber: 638,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes qa-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        @keyframes qa-spin {
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
                lineNumber: 709,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/CallingAgentWorkspace.tsx",
        lineNumber: 276,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CallingAgentWorkspace, "QFkWjEUxwl4ZpK4cXTW6+DAnbJU=");
_c7 = CallingAgentWorkspace;
const __TURBOPACK__default__export__ = CallingAgentWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "UserIcon");
__turbopack_context__.k.register(_c2, "SendIcon");
__turbopack_context__.k.register(_c3, "SparkleIcon");
__turbopack_context__.k.register(_c4, "ClearIcon");
__turbopack_context__.k.register(_c5, "TempBadge");
__turbopack_context__.k.register(_c6, "Avatar");
__turbopack_context__.k.register(_c7, "CallingAgentWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/aiagents/AIAgentSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
"use client";
;
;
const AIAgentSidebar = ({ selectedAgent, onClose, AGENTS_TYPE_ICON })=>{
    const steps = selectedAgent?.type === "Matching" ? [
        {
            step: "1",
            label: "Describe your ideal lead",
            icon: "✍️"
        },
        {
            step: "2",
            label: "AI scans your database",
            icon: "🔍"
        },
        {
            step: "3",
            label: "Get ranked matches instantly",
            icon: "⚡"
        }
    ] : selectedAgent?.type === "Followup" ? [
        {
            step: "1",
            label: "Select leads to follow up",
            icon: "✍️"
        },
        {
            step: "2",
            label: "AI drafts personalised messages",
            icon: "💬"
        },
        {
            step: "3",
            label: "Review & send with one click",
            icon: "📤"
        }
    ] : selectedAgent?.type === "Qualification" ? [
        {
            step: "1",
            label: "Pick a customer from the list",
            icon: "👤"
        },
        {
            step: "2",
            label: "Ask the AI about lead quality",
            icon: "🤖"
        },
        {
            step: "3",
            label: "Save the qualification status",
            icon: "✅"
        }
    ] : selectedAgent?.type === "Recommendation" ? [
        {
            step: "1",
            label: "Select a base customer",
            icon: "👤"
        },
        {
            step: "2",
            label: "AI finds similar profiles",
            icon: "🔗"
        },
        {
            step: "3",
            label: "Explore recommended leads",
            icon: "📋"
        }
    ] : selectedAgent?.type === "Calling" ? [
        {
            step: "1",
            label: "Choose a customer to call",
            icon: "📞"
        },
        {
            step: "2",
            label: "AI prepares call context",
            icon: "🧠"
        },
        {
            step: "3",
            label: "Log outcome after the call",
            icon: "📝"
        }
    ] : selectedAgent?.type === "Mining" ? [
        {
            step: "1",
            label: "Open the Mining workspace",
            icon: "🗄️"
        },
        {
            step: "2",
            label: "AI scans your entire lead database",
            icon: "🤖"
        },
        {
            step: "3",
            label: "Review patterns, risks & recommendations",
            icon: "📊"
        }
    ] : selectedAgent?.type === "Social" ? [
        {
            step: "1",
            label: "Connect your social accounts",
            icon: "🔗"
        },
        {
            step: "2",
            label: "AI analyses trends & engagement",
            icon: "📈"
        },
        {
            step: "3",
            label: "Get content suggestions & insights",
            icon: "💡"
        }
    ] : selectedAgent?.type === "Script" ? [
        {
            step: "1",
            label: "Enter prompt or customer details",
            icon: "📝"
        },
        {
            step: "2",
            label: "AI analyzes context & requirements",
            icon: "🧠"
        },
        {
            step: "3",
            label: "Generate and refine sales script",
            icon: "✨"
        }
    ] : selectedAgent?.type === "Email" ? [
        {
            step: "1",
            label: "Select leads to Email",
            icon: "✍️"
        },
        {
            step: "2",
            label: "AI Create Email Template and Sends",
            icon: "💬"
        },
        {
            step: "3",
            label: "Review Your Email Campaigns from gmail account",
            icon: "📤"
        }
    ] : selectedAgent?.type === "Video" ? [
        {
            step: "1",
            label: "Select Images & Enter a Video Description",
            icon: "🖼️"
        },
        {
            step: "2",
            label: "Arrange Images in the Desired Order",
            icon: "📑"
        },
        {
            step: "3",
            label: "AI Generates the Video Script • Choose an AI Voice or Upload a Recorded Voice",
            icon: "🎙️"
        },
        {
            step: "4",
            label: "Wait While Your Video is Generated",
            icon: "🎬"
        }
    ] : selectedAgent?.type === "Assistant" ? [
        {
            step: "1",
            label: "talk to agent, tell requirement",
            icon: "👤"
        },
        {
            step: "2",
            label: "let agent do action",
            icon: "🔗"
        },
        {
            step: "3",
            label: "Explore its capabilities",
            icon: "📋"
        }
    ] : [
        {
            step: "1",
            label: "Select an agent type",
            icon: "🤖"
        },
        {
            step: "2",
            label: "Describe your task",
            icon: "✍️"
        },
        {
            step: "3",
            label: "Get AI-powered results",
            icon: "⚡"
        }
    ];
    const capabilities = selectedAgent?.type === "Matching" ? [
        "Natural language lead search",
        "Multi-field filter support",
        "Semantic similarity scoring",
        "Campaign & segment filtering",
        "Real-time database scanning"
    ] : selectedAgent?.type === "Followup" ? [
        "Personalised message drafting",
        "Follow-up scheduling suggestions",
        "Tone & channel customisation",
        "Lead history awareness",
        "Bulk follow-up support"
    ] : selectedAgent?.type === "Qualification" ? [
        "Hot / Warm / Cold scoring",
        "Reason-backed qualification",
        "One-click profile update",
        "Conversation history retention",
        "Custom prompt support"
    ] : selectedAgent?.type === "Recommendation" ? [
        "Profile similarity matching",
        "Campaign & type-based grouping",
        "AI-generated match insights",
        "Bulk recommendation export",
        "Context-aware filtering"
    ] : selectedAgent?.type === "Calling" ? [
        "Pre-call briefing generation",
        "Customer history summary",
        "Call script suggestions",
        "Post-call note logging",
        "Follow-up action planning"
    ] : selectedAgent?.type === "Mining" ? [
        "Full-funnel pattern detection",
        "Lead source concentration analysis",
        "Conversion rate & drop-off insights",
        "Geographic distribution breakdown",
        "Budget segment profiling",
        "Risk factor identification",
        "Actionable improvement suggestions"
    ] : selectedAgent?.type === "Social" ? [
        "Content performance analysis",
        "Optimal posting time suggestions",
        "Audience engagement insights",
        "Trend monitoring & alerts",
        "Competitor content analysis"
    ] : selectedAgent?.type === "Social" ? [
        "AI-powered sales script generation",
        "Personalized customer context analysis",
        "Multi-language script support",
        "Lead & follow-up based script creation",
        "Custom script editing & refinement"
    ] : selectedAgent?.type === "Email" ? [
        "Generate Personalised Email",
        "Run Email Campaign"
    ] : selectedAgent?.type === "Video" ? [
        "Turn images into engaging AI videos",
        "Generate scripts, AI voiceovers, and cinematic videos in minutes"
    ] : selectedAgent?.type === "Assistant" ? [
        "Webhook integrated",
        "user friendly",
        "Audience engagement insights"
    ] : [
        "Intelligent lead matching",
        "Natural language interface",
        "Real-time AI processing",
        "CRM data integration",
        "Actionable insights"
    ];
    const tip = selectedAgent?.type === "Matching" ? "Be specific — mention city, budget range, or property type for better results." : selectedAgent?.type === "Followup" ? "Mention the last interaction date to get more personalised follow-up drafts." : selectedAgent?.type === "Qualification" ? "Ask 'Is this a high-value prospect?' for a detailed scoring breakdown." : selectedAgent?.type === "Recommendation" ? "Select a recently active customer for the most relevant recommendations." : selectedAgent?.type === "Mining" ? "Click Re-analyse after adding new leads to get fresh insights on the latest data." : selectedAgent?.type === "Calling" ? "Review the AI briefing before the call to improve conversion chances." : selectedAgent?.type === "Email" ? "Make Sure Lead Data Contains Valid Email Adderess" : selectedAgent?.type === "Video" ? "Use high-quality images and provide a clear video description for the best results." : selectedAgent?.type === "Social" ? "For content suggestions, specify the platform and audience for more tailored insights." : "Use natural language — the AI understands context, not just keywords.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[250px] flex-shrink-0 flex flex-col relative overflow-hidden",
        style: {
            background: "#0d1117",
            borderRight: "1px solid rgba(255,255,255,0.07)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "w-7 h-7 z-50 cursor-pointer absolute top-4 right-2 flex items-center justify-center rounded-lg bg-transparent hover:text-[#d5d5d5] text-[#94a3b8] transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsArrowLeftShort"], {
                    size: 30
                }, void 0, false, {
                    fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-40",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 pt-5 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-11 h-11 rounded-[14px] flex items-center justify-center text-white text-[13px] font-semibold",
                                style: {
                                    background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
                                    boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 4px 14px rgba(2,132,199,0.4)"
                                },
                                children: AGENTS_TYPE_ICON[selectedAgent?.type ?? "default"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2",
                                style: {
                                    background: "#10b981",
                                    borderColor: "#0d1117",
                                    boxShadow: "0 0 6px rgba(16,185,129,0.6)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 241,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-semibold leading-tight",
                        style: {
                            color: "#e6edf3"
                        },
                        children: selectedAgent?.name ?? "AI Genie Agent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] mt-0.5 font-mono",
                        style: {
                            color: "#8b949e"
                        },
                        children: [
                            selectedAgent?.type?.toLowerCase() ?? "matching",
                            " · v2.1"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mt-2.5",
                        children: [
                            selectedAgent?.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full",
                                style: {
                                    color: "#38bdf8",
                                    background: "rgba(56,189,248,0.12)",
                                    border: "1px solid rgba(56,189,248,0.25)"
                                },
                                children: selectedAgent.type
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 282,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedAgent?.campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full",
                                style: {
                                    color: "#fbbf24",
                                    background: "rgba(251,191,36,0.1)",
                                    border: "1px solid rgba(251,191,36,0.25)"
                                },
                                children: selectedAgent.campaign
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 295,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedAgent?.targetSegment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-full",
                                style: {
                                    color: "#34d399",
                                    background: "rgba(52,211,153,0.1)",
                                    border: "1px solid rgba(52,211,153,0.25)"
                                },
                                children: selectedAgent.targetSegment
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 308,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 relative z-10",
                style: {
                    height: "1px",
                    background: "rgba(255,255,255,0.07)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 323,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] font-semibold uppercase tracking-widest mb-2.5",
                        style: {
                            color: "#8b949e"
                        },
                        children: "How it works"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: steps.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5",
                                        style: {
                                            background: "rgba(56,189,248,0.15)",
                                            color: "#38bdf8",
                                            border: "1px solid rgba(56,189,248,0.25)"
                                        },
                                        children: item.step
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                        lineNumber: 340,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10.5px] leading-snug",
                                        style: {
                                            color: "#8b949e"
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                        lineNumber: 351,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.step, true, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 339,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 337,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 329,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 relative z-10",
                style: {
                    height: "1px",
                    background: "rgba(255,255,255,0.07)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 363,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 py-3 flex-1 overflow-y-auto",
                style: {
                    scrollbarWidth: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] font-semibold uppercase tracking-widest mb-2.5",
                        style: {
                            color: "#8b949e"
                        },
                        children: "Capabilities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 373,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: capabilities.map((cap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full flex-shrink-0",
                                        style: {
                                            background: "#38bdf8"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10.5px]",
                                        style: {
                                            color: "#8b949e"
                                        },
                                        children: cap
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                        lineNumber: 387,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, cap, true, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 382,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 380,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-[10px] px-3 py-2.5",
                        style: {
                            background: "rgba(56,189,248,0.07)",
                            border: "1px solid rgba(56,189,248,0.15)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] font-semibold uppercase tracking-widest mb-1",
                                style: {
                                    color: "#38bdf8"
                                },
                                children: "💡 Pro tip"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 405,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] leading-relaxed",
                                style: {
                                    color: "#8b949e"
                                },
                                children: tip
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 398,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 369,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center justify-between px-4 py-3",
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full animate-pulse",
                                style: {
                                    background: "#10b981",
                                    boxShadow: "0 0 0 3px rgba(16,185,129,0.2)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 427,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-mono",
                                style: {
                                    color: "#8b949e"
                                },
                                children: "Agent online"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                lineNumber: 434,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 426,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] font-mono",
                        style: {
                            color: "#30363d"
                        },
                        children: "v2.1.0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                        lineNumber: 442,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 422,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
        lineNumber: 205,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AIAgentSidebar;
const __TURBOPACK__default__export__ = AIAgentSidebar;
var _c;
__turbopack_context__.k.register(_c, "AIAgentSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_aiagents_d916146b._.js.map