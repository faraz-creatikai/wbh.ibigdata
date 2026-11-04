module.exports = [
"[project]/src/app/component/aiagents/AIChatMessages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AIChatMessages = ({ agentName, messages, aiLoading = false, currentStep = "Thinking...", hints = [], onHintClick, maxHeight = "400px" })=>{
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        aiLoading
    ]);
    const getInitials = (name)=>name.split(" ").map((w)=>w[0]).join("").slice(0, 2).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto px-5 pb-4 pt-3 flex flex-col gap-3",
        style: {
            maxHeight,
            scrollbarWidth: "thin",
            scrollbarColor: "#e2e8f0 transparent"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 max-w-[88%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border",
                        style: {
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12.5px] leading-relaxed",
                                style: {
                                    color: "#475569"
                                },
                                children: [
                                    "👋 Hi! I'm",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            hints.length > 0 && messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mt-2.5",
                                children: hints.map((hint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 my-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px",
                                    style: {
                                        background: "#e2e8f0"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/aiagents/AIChatMessages.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-end gap-2 max-w-[82%] ${isUser ? "ml-auto flex-row-reverse" : ""}`,
                            children: [
                                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                isUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl rounded-br-[4px] px-3.5 py-2.5",
                                    style: {
                                        background: "#0284c7",
                                        boxShadow: "0 2px 8px rgba(2,132,199,0.25)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border",
                                    style: {
                                        background: "#ffffff",
                                        borderColor: "#e2e8f0",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-2 max-w-[88%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl rounded-bl-[4px] px-3.5 py-2.5 border flex items-center gap-2",
                        style: {
                            background: "#ffffff",
                            borderColor: "#e2e8f0",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    0,
                                    140,
                                    280
                                ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = AIChatMessages;
}),
"[project]/src/app/component/aiagents/AIAgentDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAgentDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
"use client";
;
;
;
const ICONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
];
const TYPE_ICON = {
    Outreach: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {}, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 31,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Analytics: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Analytics",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 32,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    Recommendation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 33,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    Research: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/icons/research.png",
        alt: "Research"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 34,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Automation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/icons/automation.png",
        alt: "Automation"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 35,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    Calling: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png",
        alt: "Calling",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 36,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Followup: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 37,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Matching: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png",
        alt: "Matching",
        className: "object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 38,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    Qualification: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png",
        alt: "Qualification",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 39,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    Mining: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png",
        alt: "Mining",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 40,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Social: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 41,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Script: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png",
        alt: "Social",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 42,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Email: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png",
        alt: "Followup",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Video: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png",
        alt: "Recommendation",
        className: " object-contain w-10 h-10"
    }, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 44,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Assistant: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
            lineNumber: 68,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
        className: `${className} ${icon.props?.className || ""}`
    });
}
function getTypeColor(type) {
    return TYPE_COLORS[type] ?? TYPE_COLORS._default;
}
function AIAgentDropdown({ agents, setSelectedAgent, setIsAIAgentDialogOpen, isLoading = false }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>document.removeEventListener("mousedown", handler);
    }, []);
    const handleSelect = (agent)=>{
        setActive(agent);
        setSelectedAgent(agent);
        setIsAIAgentDialogOpen(true);
        setIsOpen(false);
    };
    const activeIdx = active ? agents.indexOf(active) : -1;
    const ActiveIcon = activeIdx >= 0 ? ICONS[activeIdx % ICONS.length] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"];
    const activeIcon = active ? TYPE_ICON[active.type] ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
        lineNumber: 110,
        columnNumber: 37
    }, this) : null;
    const activeColor = active ? getTypeColor(active.type) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative inline-flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-medium text-gray-400 uppercase tracking-wider select-none whitespace-nowrap",
                children: "AI Agent"
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen((v)=>!v),
                className: [
                    "inline-flex cursor-pointer items-center gap-1.5 h-7 px-2.5 rounded-full border text-xs font-medium",
                    "transition-all duration-150 select-none whitespace-nowrap",
                    active ? `${activeColor.bg} ${activeColor.text} border-transparent hover:brightness-95` : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50",
                    isOpen ? "ring-2 ring-offset-1 ring-gray-200" : ""
                ].join(" "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? active.status === "Active" ? "bg-emerald-500" : "bg-gray-300" : "bg-gray-300"}`
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            active && renderIcon(activeIcon, "w-3 h-3 flex-shrink-0 opacity-70"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: active.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Assign agent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                        lineNumber: 146,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full right-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl overflow-hidden min-w-[260px] max-w-[320px]",
                style: {
                    boxShadow: "0 4px 20px -4px rgba(0,0,0,0.12), 0 1px 6px -1px rgba(0,0,0,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pt-2.5 pb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "pb-1 max-h-[260px] overflow-y-auto",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-2 py-2 flex flex-col gap-1.5",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-1 py-1.5 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-7 h-7 rounded-lg bg-gray-100 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                            lineNumber: 173,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2.5 bg-gray-100 rounded-full w-2/3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        }, this) : agents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-3 py-4 text-center text-xs text-gray-400",
                            children: "No agents available"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                            lineNumber: 183,
                            columnNumber: 29
                        }, this) : agents.map((agent, i)=>{
                            const icon = TYPE_ICON[agent.type] ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                lineNumber: 186,
                                columnNumber: 71
                            }, this);
                            const color = getTypeColor(agent.type);
                            const isActive = active?.id === agent.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSelect(agent),
                                    className: `w-full cursor-pointer flex items-center gap-3 px-3 py-2 text-left text-xs transition-colors duration-100 ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `relative flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${color.bg}`,
                                            children: [
                                                renderIcon(icon, `w-3.5 h-3.5 ${color.text}`),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-800 truncate leading-tight",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 flex-shrink-0",
                                            children: [
                                                agent.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full ${color.bg} ${color.text}`,
                                                    children: agent.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/aiagents/AIAgentDropdown.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1.5 border-t border-gray-100 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/app/component/aiagents/AIAgentSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[250px] flex-shrink-0 flex flex-col relative overflow-hidden",
        style: {
            background: "#0d1117",
            borderRight: "1px solid rgba(255,255,255,0.07)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "w-7 h-7 z-50 cursor-pointer absolute top-4 right-2 flex items-center justify-center rounded-lg bg-transparent hover:text-[#d5d5d5] text-[#94a3b8] transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsArrowLeftShort"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 pt-5 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mt-2.5",
                        children: [
                            selectedAgent?.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            selectedAgent?.campaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            selectedAgent?.targetSegment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: steps.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-4 py-3 flex-1 overflow-y-auto",
                style: {
                    scrollbarWidth: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: capabilities.map((cap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1 h-1 rounded-full flex-shrink-0",
                                        style: {
                                            background: "#38bdf8"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/aiagents/AIAgentSidebar.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-[10px] px-3 py-2.5",
                        style: {
                            background: "rgba(56,189,248,0.07)",
                            border: "1px solid rgba(56,189,248,0.15)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center justify-between px-4 py-3",
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = AIAgentSidebar;
}),
];

//# sourceMappingURL=src_app_component_aiagents_02108864._.js.map