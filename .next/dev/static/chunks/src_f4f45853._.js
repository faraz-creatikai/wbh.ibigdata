(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/MasterProtectedRoutes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasterProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MasterProtectedRoute({ children }) {
    _s();
    const { admin, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MasterProtectedRoute.useEffect": ()=>{
            // Only check redirect after auth finishes loading
            if (!isLoading) {
                if (!admin || admin.role !== "administrator") {
                    router.push("/dashboard"); // Redirect if not logged in or not admin
                }
            }
        }
    }["MasterProtectedRoute.useEffect"], [
        admin,
        isLoading,
        router
    ]);
    // Show loading screen while auth is checking
    if (isLoading || !admin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid place-items-center min-h-[calc(100vh-0px)] w-full text-gray-600",
            children: "Loading page..."
        }, void 0, false, {
            fileName: "[project]/src/app/component/MasterProtectedRoutes.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    // Render children only if admin
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(MasterProtectedRoute, "CAthe5QIDxakCx0ZvX83G12Y43M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MasterProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "MasterProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BaileysWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const fmt = (n)=>n.toLocaleString("en-IN");
const cardCls = "rounded-2xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)]";
const StrokeIcon = ({ className = "", children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = StrokeIcon;
const WhatsAppIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.031 21.172c-1.636 0-3.23-.42-4.63-1.215l-.333-.188-3.447.904.922-3.36-.206-.328c-.874-1.395-1.336-3.003-1.336-4.664 0-4.85 3.948-8.798 8.802-8.798 2.355 0 4.568.917 6.233 2.583 1.666 1.666 2.583 3.88 2.583 6.235 0 4.85-3.95 8.83-8.588 8.83zM12.031 4.73c-4.115 0-7.465 3.35-7.465 7.465 0 1.316.344 2.6.997 3.734l.115.197-.55 2.003 2.05-.538.2.115c1.1.62 2.35.946 3.65.946 4.116 0 7.468-3.35 7.468-7.466 0-2-.778-3.877-2.193-5.293-1.414-1.415-3.293-2.194-5.272-2.194v.03z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.14 13.513c-.225-.113-1.33-.657-1.536-.732-.206-.075-.357-.113-.507.113-.15.225-.582.732-.714.88-.13.15-.262.17-.487.056-.225-.113-.95-.35-1.812-1.12-.67-.597-1.12-1.335-1.252-1.56-.13-.225-.014-.347.1-.46.1-.1.225-.262.338-.393.113-.13.15-.225.225-.375.075-.15.038-.282-.02-.395-.056-.112-.507-1.222-.693-1.673-.182-.44-.367-.38-.507-.387-.13-.007-.282-.007-.432-.007-.15 0-.395.056-.6.282-.207.225-.79.77-.79 1.875s.81 2.175.92 2.325c.113.15 1.583 2.415 3.834 3.386 1.8.784 2.392.83 3.19.73 1.05-.13 2.502-1.023 2.858-2.012.356-.99.356-1.838.25-2.013-.105-.175-.386-.282-.612-.395z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = WhatsAppIcon;
const PowerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.36 6.64a9 9 0 1 1-12.73 0"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = PowerIcon;
const SpinnerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SpinnerIcon;
const SendIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 11 13"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 15 22l-4-9-9-4 20-7Z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SendIcon;
const DoubleCheckIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 13l4 4L14 7"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 15l2 2L22 7"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = DoubleCheckIcon;
const ReplyIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 14 4 9l5-5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9h10a6 6 0 0 1 6 6v3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = ReplyIcon;
const UsersIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = UsersIcon;
const PlusIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
            lineNumber: 117,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = PlusIcon;
/* ── Overview pieces ─────────────────────────────────────────────── */ const StatCard = ({ label, value, badge, icon, tint, iconCls })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 rounded-2xl border p-4 dark:bg-[var(--color-childbgdark)] dark:border-transparent ${tint}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[var(--color-bgdark)] ${iconCls}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "self-end rounded-full bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-bold text-[#075E54]",
                children: badge
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 143,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c9 = StatCard;
const StatsRow = ({ stats })=>{
    const trend = (n)=>n === undefined ? undefined : `${n >= 0 ? "↑ +" : "↓ "}${n}%`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Messages Sent",
                value: stats ? fmt(stats.messagesSent) : "—",
                badge: stats ? trend(stats.messagesSentTrend) : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                    lineNumber: 155,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[var(--color-primary-lighter)]/70 border-[var(--color-primary-light)]/60",
                iconCls: "text-[var(--color-primary)]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Delivered",
                value: stats ? fmt(stats.delivered) : "—",
                badge: stats ? `${stats.deliveredRate}%` : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoubleCheckIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                    lineNumber: 163,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#ECFDF3] border-[#CFF3DD]",
                iconCls: "text-[#16A34A]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Replies",
                value: stats ? fmt(stats.replies) : "—",
                badge: stats ? `${stats.replyRate}%` : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#F5F0FF] border-[#E4DAFF]",
                iconCls: "text-[#7C3AED]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Contacts",
                value: stats ? fmt(stats.contacts) : "—",
                badge: stats ? trend(stats.contactsTrend) : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UsersIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                    lineNumber: 179,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#FFF6EA] border-[#FFE3BF]",
                iconCls: "text-[#F59E0B]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 150,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = StatsRow;
const RecentCampaigns = ({ campaigns })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-5 min-w-0`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: "Recent Campaigns"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[620px] text-left text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[var(--color-primary-lighter)]/50 dark:bg-[var(--color-childbgdark)] text-gray-600 dark:text-[var(--color-txtlight)]/70",
                                children: [
                                    "Campaign Name",
                                    "Channel",
                                    "Sent",
                                    "Delivered",
                                    "Replies",
                                    "Status",
                                    "Date"
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold first:rounded-l-lg last:rounded-r-lg",
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 195,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                            lineNumber: 192,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "text-gray-800 dark:text-[var(--color-txtlight)]",
                            children: campaigns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 7,
                                    className: "px-3 py-10 text-center text-gray-400",
                                    children: "No campaigns yet — create your first campaign to see it here."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : campaigns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-gray-100 dark:border-[var(--color-childbgdark)] last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 font-semibold",
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 211,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                                        className: "h-4 w-4 text-[#25D366]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Baileys"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                                lineNumber: 213,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 212,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: fmt(c.sent)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 218,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: [
                                                fmt(c.delivered),
                                                " (",
                                                c.deliveredRate,
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 219,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: [
                                                fmt(c.replies),
                                                " (",
                                                c.replyRate,
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-semibold text-[#075E54]",
                                                children: c.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                                lineNumber: 226,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 225,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 whitespace-nowrap",
                                            children: c.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                    lineNumber: 210,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                            lineNumber: 201,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c11 = RecentCampaigns;
const ChannelUsage = ({ stats })=>{
    const R = 46;
    const C = 2 * Math.PI * R;
    const parts = stats ? [
        {
            label: "Delivered",
            value: stats.deliveredRate,
            color: "#16A34A",
            dot: "bg-[#16A34A]"
        },
        {
            label: "Replied",
            value: stats.replyRate,
            color: "#8B5CF6",
            dot: "bg-[#8B5CF6]"
        },
        {
            label: "Failed",
            value: stats.failedRate,
            color: "#D1D5DB",
            dot: "bg-gray-300"
        }
    ] : [];
    const total = parts.reduce((sum, p)=>sum + p.value, 0) || 1;
    let offset = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-5`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: "Channel Usage (This Month)"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[120px] w-[120px] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 120 120",
                                className: "h-full w-full -rotate-90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "60",
                                        cy: "60",
                                        r: R,
                                        fill: "none",
                                        stroke: "#E5E7EB",
                                        strokeWidth: "12",
                                        className: "dark:opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 257,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    parts.map((p)=>{
                                        const len = p.value / total * C;
                                        const el = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "60",
                                            cy: "60",
                                            r: R,
                                            fill: "none",
                                            stroke: p.color,
                                            strokeWidth: "12",
                                            strokeDasharray: `${len} ${C - len}`,
                                            strokeDashoffset: -offset
                                        }, p.label, false, {
                                            fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                            lineNumber: 261,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0));
                                        offset += len;
                                        return el;
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 256,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]",
                                        children: stats ? fmt(stats.messagesSent) : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-gray-500",
                                        children: "Total Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 255,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex-1 space-y-2 text-xs text-gray-700 dark:text-[var(--color-txtlight)]/80",
                        children: (parts.length ? parts : [
                            {
                                label: "Delivered",
                                value: null,
                                dot: "bg-[#16A34A]"
                            },
                            {
                                label: "Replied",
                                value: null,
                                dot: "bg-[#8B5CF6]"
                            },
                            {
                                label: "Failed",
                                value: null,
                                dot: "bg-gray-300"
                            }
                        ]).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `h-2 w-2 rounded-full ${p.dot}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                                lineNumber: 294,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            p.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 293,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: p.value === null ? "—" : `${p.value}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 297,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, p.label, true, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 292,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 283,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 252,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c12 = ChannelUsage;
/* ── Placeholders + settings ─────────────────────────────────────── */ const EmptyState = ({ title, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} flex flex-col items-center justify-center px-6 py-16 text-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 309,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 max-w-sm text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c13 = EmptyState;
const SettingsPanel = ({ account, isDisconnecting, onDisconnect })=>{
    const name = account?.name ?? "WhatsApp";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-6 space-y-6 max-w-2xl`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    account?.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: account.imageUrl,
                        alt: name,
                        className: "h-14 w-14 rounded-full object-cover shadow-sm shrink-0 ring-2 ring-[#25D366]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 329,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-14 w-14 bg-[#128C7E] rounded-full flex items-center justify-center text-white font-bold text-lg uppercase shrink-0 ring-2 ring-[#25D366]",
                        children: name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 331,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-gray-900 dark:text-[var(--color-txtlight)] truncate",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 flex items-center gap-2 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-[#25D366]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    account?.phone ? `+${account.phone}` : "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 335,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/5 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-900 dark:text-[var(--color-txtlight)]",
                        children: "Disconnect this channel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 345,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60",
                        children: "This only unlinks this device from your WhatsApp account — your WhatsApp itself is not affected."
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDisconnect,
                        disabled: isDisconnecting,
                        className: "mt-3 flex items-center gap-2 rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/10 px-4 py-2.5 text-xs font-semibold text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/20 disabled:opacity-50 cursor-pointer",
                        children: [
                            isDisconnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                className: "h-3.5 w-3.5 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 354,
                                columnNumber: 40
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerIcon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 354,
                                columnNumber: 95
                            }, ("TURBOPACK compile-time value", void 0)),
                            isDisconnecting ? "Disconnecting..." : "Disconnect Account"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 349,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 344,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 326,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c14 = SettingsPanel;
/* ── Workspace ───────────────────────────────────────────────────── */ const TABS = [
    {
        id: "overview",
        label: "Overview"
    },
    {
        id: "campaigns",
        label: "Campaigns"
    },
    {
        id: "templates",
        label: "Templates"
    },
    {
        id: "automations",
        label: "Automations"
    },
    {
        id: "settings",
        label: "Settings"
    }
];
function BaileysWorkspace({ account, isDisconnecting, onDisconnect, settingsSignal }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    // Jump to Settings when the parent bumps the signal (ignore the value we mounted with)
    const lastSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(settingsSignal);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BaileysWorkspace.useEffect": ()=>{
            if (settingsSignal !== lastSignal.current) {
                lastSignal.current = settingsSignal;
                setTab("settings");
            }
        }
    }["BaileysWorkspace.useEffect"], [
        settingsSignal
    ]);
    // TODO: load Baileys stats + recent campaigns from your API and replace these.
    const stats = null;
    const campaigns = [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(t.id),
                                className: `rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${tab === t.id ? "bg-[#E7F7EE] text-[#128C7E] dark:bg-[#128C7E]/20 dark:text-[#25D366]" : "text-gray-600 hover:bg-[var(--color-primary-lighter)]/60 dark:text-[var(--color-txtlight)]/70 dark:hover:bg-[var(--color-childbgdark)]"}`,
                                children: t.label
                            }, t.id, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 392,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 390,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab("campaigns"),
                        className: "flex items-center gap-2 rounded-xl bg-[#128C7E] hover:bg-[#0F7A6E] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 410,
                                columnNumber: 21
                            }, this),
                            "Create Campaign"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 389,
                columnNumber: 13
            }, this),
            tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsRow, {
                        stats: stats
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 417,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecentCampaigns, {
                                campaigns: campaigns
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 419,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelUsage, {
                                stats: stats
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                                lineNumber: 420,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                        lineNumber: 418,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 416,
                columnNumber: 17
            }, this),
            tab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                title: "Campaigns for Baileys",
                text: "Baileys campaign tools aren't wired up yet. Build them here — this file only affects the Baileys side."
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 426,
                columnNumber: 17
            }, this),
            tab === "templates" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                title: "Templates are a Meta feature",
                text: "Message templates only apply to the official Meta Cloud API. Baileys sessions send regular messages, so there's nothing to manage here."
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 433,
                columnNumber: 17
            }, this),
            tab === "automations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                title: "Automations coming soon",
                text: "Automated follow-ups and triggers will show up here."
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 439,
                columnNumber: 39
            }, this),
            tab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanel, {
                account: account,
                isDisconnecting: isDisconnecting,
                onDisconnect: onDisconnect
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
                lineNumber: 441,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx",
        lineNumber: 388,
        columnNumber: 9
    }, this);
}
_s(BaileysWorkspace, "wMfwsy0KdIftbAmr0ittBAE9JDU=");
_c15 = BaileysWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "StrokeIcon");
__turbopack_context__.k.register(_c1, "WhatsAppIcon");
__turbopack_context__.k.register(_c2, "PowerIcon");
__turbopack_context__.k.register(_c3, "SpinnerIcon");
__turbopack_context__.k.register(_c4, "SendIcon");
__turbopack_context__.k.register(_c5, "DoubleCheckIcon");
__turbopack_context__.k.register(_c6, "ReplyIcon");
__turbopack_context__.k.register(_c7, "UsersIcon");
__turbopack_context__.k.register(_c8, "PlusIcon");
__turbopack_context__.k.register(_c9, "StatCard");
__turbopack_context__.k.register(_c10, "StatsRow");
__turbopack_context__.k.register(_c11, "RecentCampaigns");
__turbopack_context__.k.register(_c12, "ChannelUsage");
__turbopack_context__.k.register(_c13, "EmptyState");
__turbopack_context__.k.register(_c14, "SettingsPanel");
__turbopack_context__.k.register(_c15, "BaileysWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/masters/whatsapp/whatsapp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWhatsapp",
    ()=>addWhatsapp,
    "deleteWhatsapp",
    ()=>deleteWhatsapp,
    "getFilteredWhatsapp",
    ()=>getFilteredWhatsapp,
    "getWhatsapp",
    ()=>getWhatsapp,
    "getWhatsappById",
    ()=>getWhatsappById,
    "sendDirectMessageApi",
    ()=>sendDirectMessageApi,
    "updateWhatsapp",
    ()=>updateWhatsapp,
    "whatsappAllContact",
    ()=>whatsappAllContact,
    "whatsappAllCustomer",
    ()=>whatsappAllCustomer,
    "whatsappProperties",
    ()=>whatsappProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
;
const getWhatsapp = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.GET_ALL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getWhatsappById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.GET_BY_ID(id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredWhatsapp = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.GET_BY_PARAMS(params), {
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
const addWhatsapp = async (payload)=>{
    try {
        /*  const payload = { ...data, type: 'whatsapp' } */ let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.ADD, {
            method: "POST",
            body: payload,
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>null);
            const message = errorData?.message || errorData?.error || `HTTP error! status: ${response.status}`;
            throw new Error(message);
        }
        response = await response.json();
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateWhatsapp = async (id, payload)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.UPDATE(id), {
            method: "PUT",
            body: payload,
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteWhatsapp = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.DELETE(id), {
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
const whatsappAllCustomer = async (data)=>{
    try {
        console.log("whatsappall contact data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPPALL, {
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
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const whatsappAllContact = async (data)=>{
    try {
        console.log("whatsappall contact data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPPALL, {
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
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const whatsappProperties = async (data)=>{
    try {
        console.log("whatsappall contact data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPP_PROPERTIES, {
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
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const sendDirectMessageApi = async (formData)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPP_DIRECT_MESSAGE, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/customer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCustomer",
    ()=>addCustomer,
    "addToShortlist",
    ()=>addToShortlist,
    "archieveCustomer",
    ()=>archieveCustomer,
    "assignCustomer",
    ()=>assignCustomer,
    "closeCustomerDeal",
    ()=>closeCustomerDeal,
    "customerExcelHeaders",
    ()=>customerExcelHeaders,
    "dataMining",
    ()=>dataMining,
    "deleteAllCustomer",
    ()=>deleteAllCustomer,
    "deleteCallLog",
    ()=>deleteCallLog,
    "deleteCustomer",
    ()=>deleteCustomer,
    "getAllCustomer",
    ()=>getAllCustomer,
    "getArchivedCustomer",
    ()=>getArchivedCustomer,
    "getCallLogs",
    ()=>getCallLogs,
    "getCallReport",
    ()=>getCallReport,
    "getClosedDeals",
    ()=>getClosedDeals,
    "getCustomFieldValues",
    ()=>getCustomFieldValues,
    "getCustomer",
    ()=>getCustomer,
    "getCustomerById",
    ()=>getCustomerById,
    "getCustomerCount",
    ()=>getCustomerCount,
    "getCustomerLocationStats",
    ()=>getCustomerLocationStats,
    "getDashboardStatsCount",
    ()=>getDashboardStatsCount,
    "getDuplicateContacts",
    ()=>getDuplicateContacts,
    "getFavoutiteCustomer",
    ()=>getFavoutiteCustomer,
    "getFilteredArchievedCustomer",
    ()=>getFilteredArchievedCustomer,
    "getFilteredClosedDeals",
    ()=>getFilteredClosedDeals,
    "getFilteredCustomer",
    ()=>getFilteredCustomer,
    "getFollowupChartStats",
    ()=>getFollowupChartStats,
    "getLeadSourcesStats",
    ()=>getLeadSourcesStats,
    "getLeadTemperatureStats",
    ()=>getLeadTemperatureStats,
    "getQualification",
    ()=>getQualification,
    "getRadarChartStats",
    ()=>getRadarChartStats,
    "getRecommendedCustomers",
    ()=>getRecommendedCustomers,
    "getShortlist",
    ()=>getShortlist,
    "getTodayCustomer",
    ()=>getTodayCustomer,
    "getVisiterChartStats",
    ()=>getVisiterChartStats,
    "importCustomer",
    ()=>importCustomer,
    "removeShortlist",
    ()=>removeShortlist,
    "reopenDeal",
    ()=>reopenDeal,
    "startCallByAIAgent",
    ()=>startCallByAIAgent,
    "unArchieveCustomer",
    ()=>unArchieveCustomer,
    "updateCustomer",
    ()=>updateCustomer,
    "updateShortlist",
    ()=>updateShortlist
]);
// note do not use any
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
;
const getCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getDashboardStatsCount = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DASHBOARD_STATS_COUNT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getLeadSourcesStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADSOURCE_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getLeadTemperatureStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LEADTEMPERATURE_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getVisiterChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.VISITER_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFollowupChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.FOLLOWUP_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerLocationStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.LOCATION_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getRadarChartStats = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RADAR_CHART_STATS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerCount = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_COUNT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getAllCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ALL_TOTAL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomFieldValues = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CUSTOMER_FIELDS_VALUES, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCustomerById = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_ID(id), {
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
const getTodayCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_TODAY_ALL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFavoutiteCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_FAVOURITES_CUSTOMER, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredCustomer = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getDuplicateContacts = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CHECKDUPLICATES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        return response;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const addCustomer = async (formData)=>{
    try {
        for (let [key, value] of formData.entries()){
            console.log(`${key}:`, value);
        }
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADD, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const importCustomer = async (formData)=>{
    try {
        /* for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMERIMPORT, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(" import customer result ", result);
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const customerExcelHeaders = async (formData)=>{
    try {
        /* for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    } */ const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CUSTOMEREXCELHEADERS, {
            method: "POST",
            body: formData,
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const assignCustomer = async (data)=>{
    try {
        console.log("assign customer data ", data);
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ASSIGNCUSTOMER, {
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
const updateCustomer = async (id, formData)=>{
    try {
        //Don't manually set "Content-Type" — fetch will handle it for FormData
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATE(id), {
            method: "PUT",
            body: formData,
            credentials: "include"
        });
        const result = await response.json();
        if (!result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.message ?? "Something went wrong");
            throw new Error(result.message ?? "Something went wrong");
        }
        return result;
    } catch (error) {
        console.error("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCustomer = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETE(id), {
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
const deleteAllCustomer = async (payload)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETEALL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
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
const getQualification = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.QUALIFYCUSTOMER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getRecommendedCustomers = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.RECOMENDCUSTOMER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const dataMining = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DATAMINING, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const startCallByAIAgent = async (data)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.AGENTCALLING, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json(); // ✅ new variable
        return json;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCallLogs = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLLOGS, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getCallReport = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCALLREPORT, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const deleteCallLog = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.DELETECALLLOG(id), {
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
const getClosedDeals = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETCLOSEDDEAL, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredClosedDeals = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_CLOSEDDEAL_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const closeCustomerDeal = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.CLOSEDEAL(id), {
            method: "POST",
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
const reopenDeal = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REOPENDEAL(id), {
            method: "POST",
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
const getArchivedCustomer = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETARCHIEVEDCUSTOMER, {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const getFilteredArchievedCustomer = async (params)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GET_ARCHIEVEDCUSTOMER_BY_PARAMS(params), {
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log(" params : ", params, "\n", " Data:", data);
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const archieveCustomer = async (ids)=>{
    try {
        const payload = {
            customerIds: ids
        };
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ARCHIEVECUSTOMER, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
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
const unArchieveCustomer = async (ids)=>{
    try {
        const payload = {
            customerIds: ids
        };
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UNARCHIEVECUSTOMER, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
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
const addToShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.ADDSHORTLIST, {
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
const getShortlist = async (id)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.GETSHORTLIST(id), {
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
const removeShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.REMOVESHORTLIST, {
            method: "DELETE",
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
const updateShortlist = async (data)=>{
    try {
        let response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].CUSTOMER.UPDATESHORTLIST, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetaWhatsAppCampaigns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$whatsapp$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/whatsapp/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)"); // Adjust path if needed based on your CRM
;
var _s = __turbopack_context__.k.signature();
// MetaWhatsAppCampaigns.tsx
"use client";
;
;
;
function MetaWhatsAppCampaigns({ adminId }) {
    _s();
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // --- UI State ---
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewingInsights, setViewingInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Form State ---
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTemplateId, setSelectedTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCustomerIds, setSelectedCustomerIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Customer Pagination State ---
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [custSearch, setCustSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [custPage, setCustPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingCust, setIsLoadingCust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMoreCust, setHasMoreCust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // --- Template State ---
    const [verifiedTemplates, setVerifiedTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Compute selected template for preview
    const activeTemplate = verifiedTemplates.find((t)=>(t.id || t._id) === selectedTemplateId);
    // 1. Fetch Main Dashboard
    const loadDashboard = async ()=>{
        setLoading(true);
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-campaigns`, {
                credentials: "include"
            });
            const data = await res.json();
            if (data.success) setCampaigns(data.campaigns);
        } catch (err) {
            console.error("Failed to load campaigns", err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetaWhatsAppCampaigns.useEffect": ()=>{
            loadDashboard();
        }
    }["MetaWhatsAppCampaigns.useEffect"], []);
    // 2. Fetch Templates (Cross-referencing CRM with Meta APPROVED status)
    const loadTemplates = async ()=>{
        try {
            const crmData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$whatsapp$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredWhatsapp"])("?type=whatsapp&limit=100");
            const crmTemplates = crmData?.data || [];
            const metaRes = await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-templates`, {
                credentials: "include"
            });
            const metaData = await metaRes.json();
            // Extract names of templates that Meta explicitly marks as APPROVED
            const approvedMetaNames = new Set((metaData.metaTemplates || []).filter((t)=>t.status === "APPROVED").map((t)=>t.name));
            // Filter CRM templates to only include those Meta approved
            const approvedTemplates = crmTemplates.filter((t)=>{
                const metaName = t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_');
                return approvedMetaNames.has(metaName);
            });
            setVerifiedTemplates(approvedTemplates);
        } catch (err) {
            console.error("Failed to load templates", err);
        }
    };
    // 3. Fetch Customers (Paginated & Searchable)
    const loadCustomers = async (page, search, append = false)=>{
        setIsLoadingCust(true);
        try {
            const limit = 50;
            const skip = page * limit;
            let query = `?Limit=${limit}&Skip=${skip}`;
            if (search) query += `&Keyword=${encodeURIComponent(search)}`;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredCustomer"])(query);
            // Assuming data is an array based on your backend controller return
            if (Array.isArray(data)) {
                setCustomers((prev)=>append ? [
                        ...prev,
                        ...data
                    ] : data);
                setHasMoreCust(data.length === limit);
            }
        } catch (err) {
            console.error("Failed to load customers", err);
        } finally{
            setIsLoadingCust(false);
        }
    };
    // Debounce Customer Search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetaWhatsAppCampaigns.useEffect": ()=>{
            if (!isCreateModalOpen) return;
            const timer = setTimeout({
                "MetaWhatsAppCampaigns.useEffect.timer": ()=>{
                    setCustPage(0);
                    loadCustomers(0, custSearch, false);
                }
            }["MetaWhatsAppCampaigns.useEffect.timer"], 400);
            return ({
                "MetaWhatsAppCampaigns.useEffect": ()=>clearTimeout(timer)
            })["MetaWhatsAppCampaigns.useEffect"];
        }
    }["MetaWhatsAppCampaigns.useEffect"], [
        custSearch,
        isCreateModalOpen
    ]);
    const handleOpenCreateModal = ()=>{
        setName("");
        setSelectedTemplateId("");
        setSelectedCustomerIds(new Set());
        setCustSearch("");
        setCustPage(0);
        loadTemplates();
        setIsCreateModalOpen(true);
    };
    // 4. CRUD Actions
    const handleCreateDraft = async ()=>{
        if (!name || !selectedTemplateId) return alert("Please provide a name and select a verified template.");
        if (selectedCustomerIds.size === 0) return alert("Please select at least one recipient.");
        setIsSubmitting(true);
        try {
            await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-campaigns`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    templateId: selectedTemplateId,
                    targetIds: Array.from(selectedCustomerIds)
                })
            });
            setIsCreateModalOpen(false);
            loadDashboard();
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleStartCampaign = async (campaignId)=>{
        if (!confirm("Are you sure you want to execute this campaign now?")) return;
        try {
            await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-campaigns/${campaignId}/start`, {
                method: "POST",
                credentials: "include"
            });
            loadDashboard();
        } catch (err) {
            alert("Failed to start campaign.");
        }
    };
    const handleDelete = async (campaignId)=>{
        if (!confirm("Delete this draft permanently?")) return;
        try {
            await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-campaigns/${campaignId}`, {
                method: "DELETE",
                credentials: "include"
            });
            loadDashboard();
        } catch (err) {
            alert("Failed to delete.");
        }
    };
    // ==========================================
    // VIEW: INSIGHTS DASHBOARD (Light Mode)
    // ==========================================
    if (viewingInsights) {
        const session = viewingInsights.sessions[0]; // For MVP, grab the latest run
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col p-8 bg-gray-50 text-gray-900 overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setViewingInsights(null),
                            className: "px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium shadow-sm",
                            children: "← Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: viewingInsights.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 font-medium mt-0.5",
                                    children: [
                                        "Executed on ",
                                        session ? new Date(session.startedAt).toLocaleString() : 'N/A'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 203,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 199,
                    columnNumber: 17
                }, this),
                session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-5 gap-5 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-xs font-bold uppercase tracking-wider mb-2",
                                    children: "Total Recipients"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-black text-gray-900",
                                    children: session.totalRecipients
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-500 text-xs font-bold uppercase tracking-wider mb-2",
                                    children: "Delivered"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 216,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-black text-blue-600",
                                    children: session.delivered
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 217,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 215,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-purple-500 text-xs font-bold uppercase tracking-wider mb-2",
                                    children: "Read"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-black text-purple-600",
                                    children: session.read
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 221,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-emerald-500 text-xs font-bold uppercase tracking-wider mb-2",
                                    children: "Replied"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 224,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-black text-emerald-600",
                                    children: session.replied
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-red-100 shadow-sm bg-red-50/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-xs font-bold uppercase tracking-wider mb-2",
                                    children: "Failed"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-4xl font-black text-red-600",
                                    children: session.failed
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 227,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 210,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-10 rounded-2xl border border-gray-200 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: "No session execution data found yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                        lineNumber: 234,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 233,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
            lineNumber: 198,
            columnNumber: 13
        }, this);
    }
    // ==========================================
    // VIEW: MAIN CAMPAIGN LIST (Light Mode)
    // ==========================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col p-8 bg-gray-50 text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 mb-1",
                                children: "Bulk Campaigns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm font-medium",
                                children: "Plan, schedule, and track WhatsApp broadcast messages."
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleOpenCreateModal,
                        className: "px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-sm transition-colors flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 252,
                                    columnNumber: 100
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            "New Campaign"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-4 pr-2",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-400 py-10 font-medium animate-pulse",
                    children: "Loading campaigns..."
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 259,
                    columnNumber: 21
                }, this) : campaigns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: "No campaigns created yet."
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                        lineNumber: 262,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 261,
                    columnNumber: 21
                }, this) : campaigns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg text-gray-900",
                                                children: c.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                lineNumber: 268,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${c.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : c.status === 'DRAFT' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`,
                                                children: c.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                lineNumber: 269,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                        lineNumber: 267,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-medium text-gray-500",
                                        children: [
                                            "Created ",
                                            new Date(c.createdAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                        lineNumber: 277,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                lineNumber: 266,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: c.status === "DRAFT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(c.id),
                                            className: "px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-100",
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 283,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleStartCampaign(c.id),
                                            className: "px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-lg transition-colors shadow-sm",
                                            children: "Start Now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 284,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewingInsights(c),
                                    className: "px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-100",
                                    children: "View Insights"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 287,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                lineNumber: 280,
                                columnNumber: 25
                            }, this)
                        ]
                    }, c.id, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                        lineNumber: 265,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this),
            isCreateModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-100 flex justify-between items-center shrink-0 bg-gray-50/50 rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Create Bulk Campaign"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 302,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCreateModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-800 text-2xl transition-colors",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 303,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 301,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-8 bg-gray-50/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2",
                                                    children: "Campaign Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    placeholder: "e.g. Diwali Sale 2026",
                                                    className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 311,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2",
                                                    children: "Template (Meta Verified) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedTemplateId,
                                                    onChange: (e)=>setSelectedTemplateId(e.target.value),
                                                    className: "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm appearance-none font-medium text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            disabled: true,
                                                            children: "-- Select an Approved Template --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 41
                                                        }, this),
                                                        verifiedTemplates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: t.id || t._id,
                                                                children: t.name
                                                            }, t.id || t._id, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 322,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-[350px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-end mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-500 uppercase tracking-wider",
                                                            children: [
                                                                "Recipients (",
                                                                selectedCustomerIds.size,
                                                                " Selected)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 41
                                                        }, this),
                                                        selectedCustomerIds.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedCustomerIds(new Set()),
                                                            className: "text-xs font-bold text-indigo-600 hover:text-indigo-800",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: custSearch,
                                                    onChange: (e)=>setCustSearch(e.target.value),
                                                    placeholder: "Search customers by name, phone, or keyword...",
                                                    className: "w-full bg-white border border-gray-200 rounded-t-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 transition-all shadow-sm border-b-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-gray-200 rounded-b-xl flex-1 overflow-y-auto p-2 shadow-sm relative",
                                                    children: isLoadingCust && customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center bg-white/50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-gray-400",
                                                            children: "Searching..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 124
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 45
                                                    }, this) : customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 p-4 text-center font-medium",
                                                        children: "No customers found."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedCustomerIds.has(c.id || c._id),
                                                                            onChange: (e)=>{
                                                                                const next = new Set(selectedCustomerIds);
                                                                                if (e.target.checked) next.add(c.id || c._id);
                                                                                else next.delete(c.id || c._id);
                                                                                setSelectedCustomerIds(next);
                                                                            },
                                                                            className: "w-4 h-4 rounded bg-gray-100 border-gray-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 cursor-pointer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0 flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-semibold text-gray-900 truncate",
                                                                                    children: c.customerName || c.Name || "Unknown"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                                    lineNumber: 375,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-gray-500 font-medium",
                                                                                    children: c.ContactNumber
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                                    lineNumber: 376,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                            lineNumber: 374,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, c.id || c._id, true, {
                                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 53
                                                                }, this)),
                                                            hasMoreCust && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const nextPage = custPage + 1;
                                                                    setCustPage(nextPage);
                                                                    loadCustomers(nextPage, custSearch, true);
                                                                },
                                                                disabled: isLoadingCust,
                                                                className: "w-full mt-2 py-2 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",
                                                                children: isLoadingCust ? "Loading..." : "Load More Customers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 337,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 309,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-80 shrink-0 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2",
                                            children: "Message Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 401,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 bg-[#efeae2] border border-gray-200 rounded-2xl p-4 shadow-inner relative",
                                            style: {
                                                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
                                                backgroundSize: '16px 16px'
                                            },
                                            children: activeTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-2xl rounded-tl-sm p-1.5 shadow-sm inline-block w-full",
                                                children: [
                                                    activeTemplate.whatsappMediaType === "image" && activeTemplate.whatsappImage?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-32 bg-gray-100 rounded-xl mb-2 flex items-center justify-center overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400 font-bold uppercase",
                                                            children: "Image Header"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 49
                                                    }, this),
                                                    activeTemplate.whatsappMediaType === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-gray-100 rounded-xl p-3 flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "p-2 bg-indigo-100 text-indigo-500 rounded-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 195
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 116
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-gray-700 truncate",
                                                                children: "Document Attached"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words",
                                                        children: activeTemplate.body.replace(/\{\{.+?\}\}/g, "[Customer Name]")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                lineNumber: 404,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full items-center justify-center text-center p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 font-medium",
                                                    children: "Select a verified template to see the preview here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                                lineNumber: 422,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                            lineNumber: 402,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 400,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 306,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCreateModalOpen(false),
                                    className: "px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 432,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateDraft,
                                    disabled: isSubmitting,
                                    className: "px-6 py-2.5 text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl disabled:opacity-50 shadow-md transition-all",
                                    children: isSubmitting ? "Saving Draft..." : "Create Campaign Draft"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                                    lineNumber: 433,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                            lineNumber: 431,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                    lineNumber: 299,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
                lineNumber: 298,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx",
        lineNumber: 245,
        columnNumber: 9
    }, this);
}
_s(MetaWhatsAppCampaigns, "AKZJ+bICvK9czbXQ4FGo8esdFHU=");
_c = MetaWhatsAppCampaigns;
var _c;
__turbopack_context__.k.register(_c, "MetaWhatsAppCampaigns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetaWhatsAppTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$whatsapp$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/masters/whatsapp/whatsapp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MetaWhatsAppTemplates({ adminId }) {
    _s();
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [metaStatuses, setMetaStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("APPROVED");
    // Modal State
    const [sendModalOpen, setSendModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Customer Selection State (Reused logic from Campaign)
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [custSearch, setCustSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [custPage, setCustPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoadingCust, setIsLoadingCust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMoreCust, setHasMoreCust] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedCustomerIds, setSelectedCustomerIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVerifyingId, setIsVerifyingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadData = async ()=>{
        setLoading(true);
        try {
            // 1. Fetch CRM Templates
            const crmData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$masters$2f$whatsapp$2f$whatsapp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredWhatsapp"])("?type=whatsapp&limit=100");
            const mappedCrm = (crmData?.data || []).map((t)=>({
                    ...t,
                    id: t._id || t.id,
                    metaName: t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')
                }));
            setTemplates(mappedCrm);
            // 2. Fetch Meta Statuses
            const metaRes = await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/meta-templates`, {
                credentials: "include"
            });
            const metaData = await metaRes.json();
            const metaMap = {};
            (metaData.metaTemplates || []).forEach((t)=>{
                metaMap[t.name] = t;
            });
            setMetaStatuses(metaMap);
        } catch (err) {
            console.error("Failed to load templates", err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetaWhatsAppTemplates.useEffect": ()=>{
            loadData();
        }
    }["MetaWhatsAppTemplates.useEffect"], []);
    // --- Customer Loading Logic for Modal ---
    const loadCustomers = async (page, search, append = false)=>{
        setIsLoadingCust(true);
        try {
            const limit = 50;
            const skip = page * limit;
            let query = `?Limit=${limit}&Skip=${skip}`;
            if (search) query += `&Keyword=${encodeURIComponent(search)}`;
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredCustomer"])(query);
            if (Array.isArray(data)) {
                setCustomers((prev)=>append ? [
                        ...prev,
                        ...data
                    ] : data);
                setHasMoreCust(data.length === limit);
            }
        } catch (err) {
            console.error("Failed to load customers");
        } finally{
            setIsLoadingCust(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetaWhatsAppTemplates.useEffect": ()=>{
            if (!sendModalOpen) return;
            const timer = setTimeout({
                "MetaWhatsAppTemplates.useEffect.timer": ()=>{
                    setCustPage(0);
                    loadCustomers(0, custSearch, false);
                }
            }["MetaWhatsAppTemplates.useEffect.timer"], 400);
            return ({
                "MetaWhatsAppTemplates.useEffect": ()=>clearTimeout(timer)
            })["MetaWhatsAppTemplates.useEffect"];
        }
    }["MetaWhatsAppTemplates.useEffect"], [
        custSearch,
        sendModalOpen
    ]);
    // --- Actions ---
    const handleOpenSend = (t)=>{
        setSelectedTemplate(t);
        setSelectedCustomerIds(new Set());
        setCustSearch("");
        setSendModalOpen(true);
    };
    const handleSendTemplate = async ()=>{
        if (selectedCustomerIds.size === 0 || !selectedTemplate) return alert("Select at least one recipient.");
        setIsSending(true);
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/send-meta-template`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    templateId: selectedTemplate.id,
                    targetIds: Array.from(selectedCustomerIds)
                })
            });
            const data = await res.json();
            if (data.success) {
                alert("Template sent successfully!");
                setSendModalOpen(false);
            } else {
                alert(data.message || "Failed to send.");
            }
        } catch (err) {
            alert("Error sending template.");
        } finally{
            setIsSending(false);
        }
    };
    const handleVerify = async (templateId)=>{
        setIsVerifyingId(templateId);
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "https://apiorbit.ibigdata.in")}/api/social-auth/verify-meta-template`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    templateId
                })
            });
            const data = await res.json();
            if (data.success && data.results[0].success) {
                alert("Submitted for review!");
                loadData(); // Refresh statuses
            } else {
                alert(data.results[0].error || "Failed to submit.");
            }
        } catch (err) {
            alert("Verification error.");
        } finally{
            setIsVerifyingId(null);
        }
    };
    // Filter Logic
    const filteredTemplates = templates.filter((t)=>{
        const metaStatus = metaStatuses[t.metaName]?.status;
        if (activeFilter === "APPROVED") return metaStatus === "APPROVED";
        if (activeFilter === "PENDING") return metaStatus === "PENDING";
        return metaStatus !== "APPROVED" && metaStatus !== "PENDING"; // Unverified or Rejected
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col p-8 bg-gray-50 text-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 mb-1",
                                children: "WhatsApp Templates"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm font-medium",
                                children: "Manage and send approved templates to your customers."
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadData,
                        className: "p-2 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm transition-all",
                        title: "Refresh Statuses",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                lineNumber: 181,
                                columnNumber: 100
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                            lineNumber: 181,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter("APPROVED"),
                        className: `px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'APPROVED' ? 'bg-[#25D366] text-white border-[#25D366] shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-[#25D366]/50'}`,
                        children: "Verified"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter("PENDING"),
                        className: `px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'PENDING' ? 'bg-blue-500 text-white border-blue-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-500/50'}`,
                        children: "In Review"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFilter("UNVERIFIED"),
                        className: `px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'UNVERIFIED' ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-amber-500/50'}`,
                        children: "Unverified"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto pb-6",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-400 py-10 font-medium animate-pulse",
                    children: "Syncing templates with Meta..."
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                    lineNumber: 201,
                    columnNumber: 21
                }, this) : filteredTemplates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium",
                        children: "No templates found in this category."
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                        lineNumber: 204,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                    lineNumber: 203,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: filteredTemplates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-b border-gray-100 flex justify-between items-start bg-gray-50/50 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pr-3 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-900 truncate",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mt-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md uppercase tracking-wider",
                                                            children: t.category || "GENERAL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 45
                                                        }, this),
                                                        activeFilter === "UNVERIFIED" && metaStatuses[t.metaName]?.status === "REJECTED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 rounded-md uppercase tracking-wider",
                                                            children: "REJECTED"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 212,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 pt-0.5",
                                            children: [
                                                activeFilter === "APPROVED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2.5 h-2.5 rounded-full bg-[#25D366] block shadow-sm",
                                                    title: "Approved"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 73
                                                }, this),
                                                activeFilter === "PENDING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2.5 h-2.5 rounded-full bg-blue-500 block shadow-sm animate-pulse",
                                                    title: "Reviewing"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 72
                                                }, this),
                                                activeFilter === "UNVERIFIED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2.5 h-2.5 rounded-full bg-gray-300 block",
                                                    title: "Unverified"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 223,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 211,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5 flex-1 bg-[#efeae2] relative",
                                    style: {
                                        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
                                        backgroundSize: '16px 16px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl rounded-tl-sm p-2 shadow-sm inline-block w-full",
                                        children: [
                                            t.whatsappMediaType === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-24 bg-gray-100 rounded-xl mb-2 flex items-center justify-center border border-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6 text-gray-300",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 128
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 234,
                                                columnNumber: 45
                                            }, this),
                                            t.whatsappMediaType === "document" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-50 border border-gray-100 rounded-xl p-2.5 flex items-center gap-2 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-1.5 bg-indigo-100 text-indigo-500 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3.5 h-3.5",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 197
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 114
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold text-gray-500 uppercase tracking-wider",
                                                        children: "Document"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 239,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words line-clamp-4",
                                                children: t.body.replace(/\{\{.+?\}\}/g, "[...] ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 244,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                        lineNumber: 232,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 231,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-t border-gray-100 bg-white shrink-0",
                                    children: [
                                        activeFilter === "APPROVED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOpenSend(t),
                                            className: "w-full py-2.5 bg-white border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 110
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 45
                                                }, this),
                                                "Use Template"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 253,
                                            columnNumber: 41
                                        }, this),
                                        activeFilter === "PENDING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: true,
                                            className: "w-full py-2.5 bg-gray-100 text-gray-400 text-sm font-bold rounded-xl cursor-not-allowed",
                                            children: "In Review"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 259,
                                            columnNumber: 41
                                        }, this),
                                        activeFilter === "UNVERIFIED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleVerify(t.id),
                                            disabled: isVerifyingId === t.id,
                                            className: "w-full py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-50",
                                            children: isVerifyingId === t.id ? "Submitting..." : "Submit for Review"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 264,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 251,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, t.id, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                            lineNumber: 209,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                    lineNumber: 207,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            sendModalOpen && selectedTemplate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[85vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 border-b border-gray-100 flex justify-between items-center shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: "Send Template"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 281,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 font-medium mt-0.5",
                                            children: selectedTemplate.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 282,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 280,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSendModalOpen(false),
                                    className: "text-gray-400 hover:text-gray-800 text-2xl transition-colors",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 284,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                            lineNumber: 279,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 overflow-y-auto flex-1 bg-gray-50/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col h-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-end mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-bold text-gray-500 uppercase tracking-wider",
                                                children: [
                                                    "Select Recipients (",
                                                    selectedCustomerIds.size,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 290,
                                                columnNumber: 37
                                            }, this),
                                            selectedCustomerIds.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedCustomerIds(new Set()),
                                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800",
                                                children: "Clear All"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 294,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                        lineNumber: 289,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: custSearch,
                                        onChange: (e)=>setCustSearch(e.target.value),
                                        placeholder: "Search by name or phone...",
                                        className: "w-full bg-white border border-gray-200 rounded-t-xl px-4 py-2.5 text-sm outline-none focus:border-[#25D366] transition-all shadow-sm border-b-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                        lineNumber: 298,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-200 rounded-b-xl flex-1 overflow-y-auto p-2 shadow-sm relative",
                                        children: isLoadingCust && customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center bg-white/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-400",
                                                children: "Loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                lineNumber: 307,
                                                columnNumber: 120
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 307,
                                            columnNumber: 41
                                        }, this) : customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 p-4 text-center font-medium",
                                            children: "No customers found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                            lineNumber: 309,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                customers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: selectedCustomerIds.has(c.id || c._id),
                                                                onChange: (e)=>{
                                                                    const next = new Set(selectedCustomerIds);
                                                                    if (e.target.checked) next.add(c.id || c._id);
                                                                    else next.delete(c.id || c._id);
                                                                    setSelectedCustomerIds(next);
                                                                },
                                                                className: "w-4 h-4 rounded bg-gray-100 border-gray-300 text-[#25D366] focus:ring-[#25D366] focus:ring-offset-0 cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-gray-900 truncate",
                                                                        children: c.customerName || c.Name || "Unknown"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500 font-medium",
                                                                        children: c.ContactNumber
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, c.id || c._id, true, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 49
                                                    }, this)),
                                                hasMoreCust && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const nextPage = custPage + 1;
                                                        setCustPage(nextPage);
                                                        loadCustomers(nextPage, custSearch, true);
                                                    },
                                                    disabled: isLoadingCust,
                                                    className: "w-full mt-2 py-2 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",
                                                    children: isLoadingCust ? "Loading..." : "Load More"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                        lineNumber: 305,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                lineNumber: 288,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSendModalOpen(false),
                                    className: "px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 351,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendTemplate,
                                    disabled: isSending || selectedCustomerIds.size === 0,
                                    className: "px-6 py-2.5 text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl disabled:opacity-50 shadow-md transition-all",
                                    children: isSending ? "Sending..." : `Send to ${selectedCustomerIds.size} users`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                                    lineNumber: 352,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                            lineNumber: 350,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                    lineNumber: 278,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
                lineNumber: 277,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx",
        lineNumber: 173,
        columnNumber: 9
    }, this);
}
_s(MetaWhatsAppTemplates, "qmTVGKMp59kq5MOrcx28xGGM0R4=");
_c = MetaWhatsAppTemplates;
var _c;
__turbopack_context__.k.register(_c, "MetaWhatsAppTemplates");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetaWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWhatsappCampaign$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/whatsapp/meta/MetaWhatsappCampaign.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWhatsappTemplate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/whatsapp/meta/MetaWhatsappTemplate.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const fmt = (n)=>n.toLocaleString("en-IN");
const cardCls = "rounded-2xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)]";
const StrokeIcon = ({ className = "", children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = StrokeIcon;
const MetaIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 12c-1.8-2.6-3.6-4-5.5-4C4 8 2.5 9.8 2.5 12s1.5 4 4 4c1.9 0 3.7-1.4 5.5-4Zm0 0c1.8 2.6 3.6 4 5.5 4 2.5 0 4-1.8 4-4s-1.5-4-4-4c-1.9 0-3.7 1.4-5.5 4Z"
        }, void 0, false, {
            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = MetaIcon;
const PowerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.36 6.64a9 9 0 1 1-12.73 0"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = PowerIcon;
const SpinnerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SpinnerIcon;
const SendIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 11 13"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 15 22l-4-9-9-4 20-7Z"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SendIcon;
const DoubleCheckIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 13l4 4L14 7"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 15l2 2L22 7"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = DoubleCheckIcon;
const ReplyIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 14 4 9l5-5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 9h10a6 6 0 0 1 6 6v3"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = ReplyIcon;
const UsersIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "7",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = UsersIcon;
const PlusIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
            lineNumber: 120,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = PlusIcon;
/* ── Overview pieces ─────────────────────────────────────────────── */ const StatCard = ({ label, value, badge, icon, tint, iconCls })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-3 rounded-2xl border p-4 dark:bg-[var(--color-childbgdark)] dark:border-transparent ${tint}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-[var(--color-bgdark)] ${iconCls}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "self-end rounded-full bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-bold text-[#075E54]",
                children: badge
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 146,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c9 = StatCard;
const StatsRow = ({ stats })=>{
    const trend = (n)=>n === undefined ? undefined : `${n >= 0 ? "↑ +" : "↓ "}${n}%`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Messages Sent",
                value: stats ? fmt(stats.messagesSent) : "—",
                badge: stats ? trend(stats.messagesSentTrend) : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 158,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[var(--color-primary-lighter)]/70 border-[var(--color-primary-light)]/60",
                iconCls: "text-[var(--color-primary)]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Delivered",
                value: stats ? fmt(stats.delivered) : "—",
                badge: stats ? `${stats.deliveredRate}%` : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoubleCheckIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 166,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#ECFDF3] border-[#CFF3DD]",
                iconCls: "text-[#16A34A]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Replies",
                value: stats ? fmt(stats.replies) : "—",
                badge: stats ? `${stats.replyRate}%` : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReplyIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#F5F0FF] border-[#E4DAFF]",
                iconCls: "text-[#7C3AED]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                label: "Contacts",
                value: stats ? fmt(stats.contacts) : "—",
                badge: stats ? trend(stats.contactsTrend) : undefined,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UsersIcon, {
                    className: "h-5 w-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 182,
                    columnNumber: 23
                }, void 0),
                tint: "bg-[#FFF6EA] border-[#FFE3BF]",
                iconCls: "text-[#F59E0B]"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 153,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c10 = StatsRow;
const RecentCampaigns = ({ campaigns })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-5 min-w-0`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: "Recent Campaigns"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[620px] text-left text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[var(--color-primary-lighter)]/50 dark:bg-[var(--color-childbgdark)] text-gray-600 dark:text-[var(--color-txtlight)]/70",
                                children: [
                                    "Campaign Name",
                                    "Channel",
                                    "Sent",
                                    "Delivered",
                                    "Replies",
                                    "Status",
                                    "Date"
                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 py-2.5 font-semibold first:rounded-l-lg last:rounded-r-lg",
                                        children: h
                                    }, h, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 198,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                            lineNumber: 195,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "text-gray-800 dark:text-[var(--color-txtlight)]",
                            children: campaigns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 7,
                                    className: "px-3 py-10 text-center text-gray-400",
                                    children: "No campaigns yet — create your first campaign to see it here."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 206,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : campaigns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-gray-100 dark:border-[var(--color-childbgdark)] last:border-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 font-semibold",
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 214,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                                                        className: "h-4 w-4 text-[var(--color-primary)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Meta"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                                lineNumber: 216,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 215,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: fmt(c.sent)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: [
                                                fmt(c.delivered),
                                                " (",
                                                c.deliveredRate,
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: [
                                                fmt(c.replies),
                                                " (",
                                                c.replyRate,
                                                "%)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 225,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-[#DCF8C6] px-2 py-0.5 text-[10px] font-semibold text-[#075E54]",
                                                children: c.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                                lineNumber: 229,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-3 whitespace-nowrap",
                                            children: c.date
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 231,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                            lineNumber: 204,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 194,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c11 = RecentCampaigns;
const ChannelUsage = ({ stats })=>{
    const R = 46;
    const C = 2 * Math.PI * R;
    const parts = stats ? [
        {
            label: "Delivered",
            value: stats.deliveredRate,
            color: "#16A34A",
            dot: "bg-[#16A34A]"
        },
        {
            label: "Replied",
            value: stats.replyRate,
            color: "#8B5CF6",
            dot: "bg-[#8B5CF6]"
        },
        {
            label: "Failed",
            value: stats.failedRate,
            color: "#D1D5DB",
            dot: "bg-gray-300"
        }
    ] : [];
    const total = parts.reduce((sum, p)=>sum + p.value, 0) || 1;
    let offset = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-5`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: "Channel Usage (This Month)"
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[120px] w-[120px] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 120 120",
                                className: "h-full w-full -rotate-90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "60",
                                        cy: "60",
                                        r: R,
                                        fill: "none",
                                        stroke: "#E5E7EB",
                                        strokeWidth: "12",
                                        className: "dark:opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 260,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    parts.map((p)=>{
                                        const len = p.value / total * C;
                                        const el = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "60",
                                            cy: "60",
                                            r: R,
                                            fill: "none",
                                            stroke: p.color,
                                            strokeWidth: "12",
                                            strokeDasharray: `${len} ${C - len}`,
                                            strokeDashoffset: -offset
                                        }, p.label, false, {
                                            fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                            lineNumber: 264,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0));
                                        offset += len;
                                        return el;
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 259,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-extrabold text-gray-900 dark:text-[var(--color-txtlight)]",
                                        children: stats ? fmt(stats.messagesSent) : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] text-gray-500",
                                        children: "Total Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 282,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex-1 space-y-2 text-xs text-gray-700 dark:text-[var(--color-txtlight)]/80",
                        children: (parts.length ? parts : [
                            {
                                label: "Delivered",
                                value: null,
                                dot: "bg-[#16A34A]"
                            },
                            {
                                label: "Replied",
                                value: null,
                                dot: "bg-[#8B5CF6]"
                            },
                            {
                                label: "Failed",
                                value: null,
                                dot: "bg-gray-300"
                            }
                        ]).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `h-2 w-2 rounded-full ${p.dot}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                                lineNumber: 297,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            p.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 296,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: p.value === null ? "—" : `${p.value}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 300,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, p.label, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 295,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c12 = ChannelUsage;
/* ── Placeholders + settings ─────────────────────────────────────── */ const EmptyState = ({ title, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} flex flex-col items-center justify-center px-6 py-16 text-center`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 max-w-sm text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 311,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c13 = EmptyState;
const SettingsPanel = ({ accountDetails, isDisconnecting, onDisconnect })=>{
    const { name, phone, profilePicture, qualityRating } = accountDetails;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} p-6 space-y-6 max-w-2xl`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    profilePicture ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: profilePicture,
                        alt: name,
                        className: "h-14 w-14 rounded-full object-cover shadow-sm shrink-0 ring-2 ring-[#25D366]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 332,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-14 w-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white font-bold text-lg uppercase shrink-0",
                        children: name.charAt(0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 334,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-gray-900 dark:text-[var(--color-txtlight)] truncate",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 340,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${qualityRating === "GREEN" ? "bg-green-100 text-green-700" : qualityRating === "YELLOW" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`,
                                        children: [
                                            "Quality: ",
                                            qualityRating
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 341,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 339,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 flex items-center gap-2 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-[#25D366]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 353,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 330,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/5 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-gray-900 dark:text-[var(--color-txtlight)]",
                        children: "Disconnect this channel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 361,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60",
                        children: "This will stop all incoming messages and broadcasts from the official WhatsApp connection."
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 362,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDisconnect,
                        disabled: isDisconnecting,
                        className: "mt-3 flex items-center gap-2 rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/10 px-4 py-2.5 text-xs font-semibold text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/20 disabled:opacity-50 cursor-pointer",
                        children: [
                            isDisconnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                className: "h-3.5 w-3.5 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 370,
                                columnNumber: 40
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerIcon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 370,
                                columnNumber: 95
                            }, ("TURBOPACK compile-time value", void 0)),
                            isDisconnecting ? "Disconnecting..." : "Disconnect Account"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 365,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 360,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 329,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c14 = SettingsPanel;
/* ── Workspace ───────────────────────────────────────────────────── */ const TABS = [
    {
        id: "overview",
        label: "Overview"
    },
    {
        id: "campaigns",
        label: "Campaigns"
    },
    {
        id: "templates",
        label: "Templates"
    },
    {
        id: "automations",
        label: "Automations"
    },
    {
        id: "settings",
        label: "Settings"
    }
];
function MetaWorkspace({ accountDetails, isDisconnecting, onDisconnect, settingsSignal }) {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    // Jump to Settings when the parent bumps the signal (ignore the value we mounted with)
    const lastSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(settingsSignal);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetaWorkspace.useEffect": ()=>{
            if (settingsSignal !== lastSignal.current) {
                lastSignal.current = settingsSignal;
                setTab("settings");
            }
        }
    }["MetaWorkspace.useEffect"], [
        settingsSignal
    ]);
    // TODO: load Meta stats + recent campaigns from your API and replace these.
    const stats = null;
    const campaigns = [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTab(t.id),
                                className: `rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${tab === t.id ? "bg-[#E7F7EE] text-[#128C7E] dark:bg-[#128C7E]/20 dark:text-[#25D366]" : "text-gray-600 hover:bg-[var(--color-primary-lighter)]/60 dark:text-[var(--color-txtlight)]/70 dark:hover:bg-[var(--color-childbgdark)]"}`,
                                children: t.label
                            }, t.id, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 408,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 406,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab("campaigns"),
                        className: "flex items-center gap-2 rounded-xl bg-[#128C7E] hover:bg-[#0F7A6E] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 426,
                                columnNumber: 21
                            }, this),
                            "Create Campaign"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 422,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 405,
                columnNumber: 13
            }, this),
            tab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsRow, {
                        stats: stats
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 433,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecentCampaigns, {
                                campaigns: campaigns
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 435,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelUsage, {
                                stats: stats
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                                lineNumber: 436,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                        lineNumber: 434,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 432,
                columnNumber: 17
            }, this),
            tab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${cardCls} h-[70vh] min-h-[520px] overflow-hidden flex flex-col`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWhatsappCampaign$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    adminId: accountDetails.adminId
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 443,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 442,
                columnNumber: 17
            }, this),
            tab === "templates" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${cardCls} h-[70vh] min-h-[520px] overflow-hidden flex flex-col`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWhatsappTemplate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    adminId: accountDetails.adminId
                }, void 0, false, {
                    fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                    lineNumber: 449,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 448,
                columnNumber: 17
            }, this),
            tab === "automations" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyState, {
                title: "Automations coming soon",
                text: "Automated follow-ups and triggers will show up here."
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 453,
                columnNumber: 39
            }, this),
            tab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanel, {
                accountDetails: accountDetails,
                isDisconnecting: isDisconnecting,
                onDisconnect: onDisconnect
            }, void 0, false, {
                fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
                lineNumber: 456,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx",
        lineNumber: 404,
        columnNumber: 9
    }, this);
}
_s(MetaWorkspace, "wMfwsy0KdIftbAmr0ittBAE9JDU=");
_c15 = MetaWorkspace;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "StrokeIcon");
__turbopack_context__.k.register(_c1, "MetaIcon");
__turbopack_context__.k.register(_c2, "PowerIcon");
__turbopack_context__.k.register(_c3, "SpinnerIcon");
__turbopack_context__.k.register(_c4, "SendIcon");
__turbopack_context__.k.register(_c5, "DoubleCheckIcon");
__turbopack_context__.k.register(_c6, "ReplyIcon");
__turbopack_context__.k.register(_c7, "UsersIcon");
__turbopack_context__.k.register(_c8, "PlusIcon");
__turbopack_context__.k.register(_c9, "StatCard");
__turbopack_context__.k.register(_c10, "StatsRow");
__turbopack_context__.k.register(_c11, "RecentCampaigns");
__turbopack_context__.k.register(_c12, "ChannelUsage");
__turbopack_context__.k.register(_c13, "EmptyState");
__turbopack_context__.k.register(_c14, "SettingsPanel");
__turbopack_context__.k.register(_c15, "MetaWorkspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/outreach/whatsapp/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppConnectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/socket/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/MasterProtectedRoutes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$baileys$2f$BaileysWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/whatsapp/baileys/BaileysWorkspace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/whatsapp/meta/MetaWorkspace.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ────────────────────────────────────────────────────────────────────
 * Constants
 * ──────────────────────────────────────────────────────────────────── */ const RING_RADIUS = 54;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const DEFAULT_REFRESH_MS = 20_000;
const PAIRING_CODE_TTL_MS = 60_000; // WhatsApp pairing codes expire ~60s
const cardCls = "rounded-2xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)]";
const StrokeIcon = ({ className = "", children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = StrokeIcon;
const WhatsAppIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.031 21.172c-1.636 0-3.23-.42-4.63-1.215l-.333-.188-3.447.904.922-3.36-.206-.328c-.874-1.395-1.336-3.003-1.336-4.664 0-4.85 3.948-8.798 8.802-8.798 2.355 0 4.568.917 6.233 2.583 1.666 1.666 2.583 3.88 2.583 6.235 0 4.85-3.95 8.83-8.588 8.83zM12.031 4.73c-4.115 0-7.465 3.35-7.465 7.465 0 1.316.344 2.6.997 3.734l.115.197-.55 2.003 2.05-.538.2.115c1.1.62 2.35.946 3.65.946 4.116 0 7.468-3.35 7.468-7.466 0-2-.778-3.877-2.193-5.293-1.414-1.415-3.293-2.194-5.272-2.194v.03z"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.14 13.513c-.225-.113-1.33-.657-1.536-.732-.206-.075-.357-.113-.507.113-.15.225-.582.732-.714.88-.13.15-.262.17-.487.056-.225-.113-.95-.35-1.812-1.12-.67-.597-1.12-1.335-1.252-1.56-.13-.225-.014-.347.1-.46.1-.1.225-.262.338-.393.113-.13.15-.225.225-.375.075-.15.038-.282-.02-.395-.056-.112-.507-1.222-.693-1.673-.182-.44-.367-.38-.507-.387-.13-.007-.282-.007-.432-.007-.15 0-.395.056-.6.282-.207.225-.79.77-.79 1.875s.81 2.175.92 2.325c.113.15 1.583 2.415 3.834 3.386 1.8.784 2.392.83 3.19.73 1.05-.13 2.502-1.023 2.858-2.012.356-.99.356-1.838.25-2.013-.105-.175-.386-.282-.612-.395z"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = WhatsAppIcon;
const MetaIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 12c-1.8-2.6-3.6-4-5.5-4C4 8 2.5 9.8 2.5 12s1.5 4 4 4c1.9 0 3.7-1.4 5.5-4Zm0 0c1.8 2.6 3.6 4 5.5 4 2.5 0 4-1.8 4-4s-1.5-4-4-4c-1.9 0-3.7 1.4-5.5 4Z"
        }, void 0, false, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 64,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = MetaIcon;
const QrIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4M20 17v4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = QrIcon;
const KeyIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "15",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 12.5 20 3M17 6l3 3M14 9l2 2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = KeyIcon;
const LockIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "11",
                width: "14",
                height: "9",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 11V7a4 4 0 0 1 8 0v4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = LockIcon;
const CheckIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7"
        }, void 0, false, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c6 = CheckIcon;
const PowerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.36 6.64a9 9 0 1 1-12.73 0"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c7 = PowerIcon;
const SpinnerIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = SpinnerIcon;
const SendIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 11 13"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 2 15 22l-4-9-9-4 20-7Z"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c9 = SendIcon;
const MoreIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "19",
                r: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c10 = MoreIcon;
const PhoneIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
        }, void 0, false, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 128,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c11 = PhoneIcon;
const LinkIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c12 = LinkIcon;
const SlidersIcon = ({ className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrokeIcon, {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 6h8M18 6h2M4 12h2M12 12h8M4 18h10M18 18h2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "15",
                cy: "6",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "12",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "18",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c13 = SlidersIcon;
/* ────────────────────────────────────────────────────────────────────
 * Hook: Baileys (QR / pairing code) connection
 * ──────────────────────────────────────────────────────────────────── */ function useBaileysConnection() {
    _s();
    const [qrCode, setQrCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qrMeta, setQrMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDisconnecting, setIsDisconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("qr");
    const [phoneInput, setPhoneInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pairingCode, setPairingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pairingGeneratedAt, setPairingGeneratedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pairingError, setPairingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRequestingCode, setIsRequestingCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pairingSecondsLeft, setPairingSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // QR countdown ring
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaileysConnection.useEffect": ()=>{
            if (!qrMeta) return;
            const tick = {
                "useBaileysConnection.useEffect.tick": ()=>{
                    const remaining = Math.max(0, qrMeta.refreshInterval - (Date.now() - qrMeta.generatedAt));
                    setSecondsLeft(Math.ceil(remaining / 1000));
                    setProgress(remaining / qrMeta.refreshInterval);
                }
            }["useBaileysConnection.useEffect.tick"];
            tick();
            const id = setInterval(tick, 250);
            return ({
                "useBaileysConnection.useEffect": ()=>clearInterval(id)
            })["useBaileysConnection.useEffect"];
        }
    }["useBaileysConnection.useEffect"], [
        qrMeta
    ]);
    // Pairing-code countdown (codes expire ~60s)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaileysConnection.useEffect": ()=>{
            if (!pairingGeneratedAt) return;
            const tick = {
                "useBaileysConnection.useEffect.tick": ()=>{
                    const remaining = Math.max(0, PAIRING_CODE_TTL_MS - (Date.now() - pairingGeneratedAt));
                    setPairingSecondsLeft(Math.ceil(remaining / 1000));
                    if (remaining <= 0) {
                        setPairingCode(null);
                        setPairingGeneratedAt(null);
                        setPairingError("That code expired. Request a new one.");
                    }
                }
            }["useBaileysConnection.useEffect.tick"];
            tick();
            const id = setInterval(tick, 250);
            return ({
                "useBaileysConnection.useEffect": ()=>clearInterval(id)
            })["useBaileysConnection.useEffect"];
        }
    }["useBaileysConnection.useEffect"], [
        pairingGeneratedAt
    ]);
    // Initial status + socket subscriptions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaileysConnection.useEffect": ()=>{
            fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPP_CONNECTION_STATUS).then({
                "useBaileysConnection.useEffect": (res)=>res.json()
            }["useBaileysConnection.useEffect"]).then({
                "useBaileysConnection.useEffect": (data)=>{
                    if (data.status === "connected") {
                        setStatus("connected");
                        setAccount(data.user);
                    } else if (data.status === "scanning") {
                        setStatus("scanning");
                        setMode("qr");
                        setQrCode(data.qrString);
                        setQrMeta({
                            generatedAt: data.generatedAt ?? Date.now(),
                            refreshInterval: data.refreshInterval ?? DEFAULT_REFRESH_MS
                        });
                    } else if (data.status === "pairing") {
                        // resume an in-flight pairing code after a page refresh
                        setStatus("pairing");
                        setMode("pairing");
                        setPairingCode(data.pairingCode);
                        setPairingGeneratedAt(data.generatedAt ?? Date.now());
                        if (data.phoneNumber) setPhoneInput(data.phoneNumber);
                    }
                }
            }["useBaileysConnection.useEffect"]).catch({
                "useBaileysConnection.useEffect": (err)=>console.error("Failed to fetch initial status", err)
            }["useBaileysConnection.useEffect"]).finally({
                "useBaileysConnection.useEffect": ()=>setIsChecked(true)
            }["useBaileysConnection.useEffect"]);
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
            if (!socket) return;
            socket.emit("whatsapp:start_viewing");
            const handleQR = {
                "useBaileysConnection.useEffect.handleQR": (data)=>{
                    setQrCode(data.qrString);
                    setQrMeta({
                        generatedAt: data.generatedAt ?? Date.now(),
                        refreshInterval: data.refreshInterval ?? DEFAULT_REFRESH_MS
                    });
                    setIsDisconnecting(false);
                    setStatus({
                        "useBaileysConnection.useEffect.handleQR": (prev)=>prev === "connected" ? prev : "scanning"
                    }["useBaileysConnection.useEffect.handleQR"]);
                }
            }["useBaileysConnection.useEffect.handleQR"];
            const handlePairingCode = {
                "useBaileysConnection.useEffect.handlePairingCode": (data)=>{
                    setStatus({
                        "useBaileysConnection.useEffect.handlePairingCode": (prev)=>prev === "connected" ? prev : "pairing"
                    }["useBaileysConnection.useEffect.handlePairingCode"]);
                    setMode("pairing");
                    setPairingCode(data.code);
                    setPairingGeneratedAt(data.generatedAt ?? Date.now());
                    setPairingError(null);
                    setIsRequestingCode(false);
                }
            }["useBaileysConnection.useEffect.handlePairingCode"];
            const handlePairingError = {
                "useBaileysConnection.useEffect.handlePairingError": (data)=>{
                    setPairingError(data.message || "Failed to generate pairing code. Try again.");
                    setIsRequestingCode(false);
                }
            }["useBaileysConnection.useEffect.handlePairingError"];
            const handleStatus = {
                "useBaileysConnection.useEffect.handleStatus": (data)=>{
                    if (data.status === "connected") {
                        setStatus("connected");
                        setQrCode(null);
                        setQrMeta(null);
                        setPairingCode(null);
                        setPairingGeneratedAt(null);
                        setIsDisconnecting(false);
                        if (data.user) setAccount(data.user);
                    } else if (data.status === "disconnected") {
                        setStatus("loading");
                        setAccount(null);
                        setQrMeta(null);
                        setPairingCode(null);
                        setPairingGeneratedAt(null);
                    }
                }
            }["useBaileysConnection.useEffect.handleStatus"];
            socket.on("whatsapp:qr", handleQR);
            socket.on("whatsapp:status", handleStatus);
            socket.on("whatsapp:pairing_code", handlePairingCode);
            socket.on("whatsapp:pairing_error", handlePairingError);
            return ({
                "useBaileysConnection.useEffect": ()=>{
                    socket.off("whatsapp:qr", handleQR);
                    socket.off("whatsapp:status", handleStatus);
                    socket.off("whatsapp:pairing_code", handlePairingCode);
                    socket.off("whatsapp:pairing_error", handlePairingError);
                    socket.emit("whatsapp:stop_viewing");
                }
            })["useBaileysConnection.useEffect"];
        }
    }["useBaileysConnection.useEffect"], []);
    const disconnect = async ()=>{
        setIsDisconnecting(true);
        try {
            await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPP_CONNECTION_LOGOUT, {
                method: "POST"
            });
        } catch (error) {
            console.error("Failed to disconnect", error);
            setIsDisconnecting(false);
        }
    };
    const requestPairingCode = async ()=>{
        const digitsOnly = phoneInput.replace(/[^0-9]/g, "");
        if (digitsOnly.length < 8) {
            setPairingError("Enter your full number with country code, e.g. 91XXXXXXXXXX.");
            return;
        }
        setPairingError(null);
        setPairingCode(null);
        setIsRequestingCode(true);
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].MASTERS.WHATSAPP.WHATSAPP_CONNECTION_PAIRING_CODE, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: digitsOnly
                })
            });
            const data = await res.json();
            if (!data.success) {
                setPairingError(data.error || "Something went wrong. Try again.");
                setIsRequestingCode(false);
            }
        // success: the code arrives through the "whatsapp:pairing_code" socket event
        } catch (error) {
            console.error("Failed to request pairing code", error);
            setPairingError("Couldn't reach the server. Try again.");
            setIsRequestingCode(false);
        }
    };
    return {
        status,
        isChecked,
        isConnected: status === "connected",
        account,
        qrCode,
        secondsLeft,
        progress,
        isDisconnecting,
        mode,
        setMode,
        phoneInput,
        setPhoneInput,
        pairingCode,
        pairingSecondsLeft,
        pairingError,
        setPairingError,
        isRequestingCode,
        disconnect,
        requestPairingCode
    };
}
_s(useBaileysConnection, "/+JNS+AaC/DMWD6m6ziEnLQFWKM=");
/* ────────────────────────────────────────────────────────────────────
 * Hook: Meta official WhatsApp (Embedded Signup)
 * ──────────────────────────────────────────────────────────────────── */ function useMetaConnection() {
    _s1();
    const [isSdkLoaded, setIsSdkLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDisconnecting, setIsDisconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [accountDetails, setAccountDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const signupData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        waba_id: null,
        phone_number_id: null
    });
    const refreshStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMetaConnection.useCallback[refreshStatus]": async ()=>{
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].SOCIALMEDIA.WHATSAPP.CHECK_META_WHATSAPP_STATUS, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            if (data.connected) {
                setIsConnected(true);
                setAccountDetails({
                    ...data.accountDetails,
                    adminId: data.config.adminId
                });
            }
        }
    }["useMetaConnection.useCallback[refreshStatus]"], []);
    // Initial connection check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaConnection.useEffect": ()=>{
            refreshStatus().catch({
                "useMetaConnection.useEffect": (error)=>console.error("Failed to check connection status:", error)
            }["useMetaConnection.useEffect"]).finally({
                "useMetaConnection.useEffect": ()=>setIsChecking(false)
            }["useMetaConnection.useEffect"]);
        }
    }["useMetaConnection.useEffect"], [
        refreshStatus
    ]);
    // Facebook SDK + embedded-signup listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaConnection.useEffect": ()=>{
            const initFb = {
                "useMetaConnection.useEffect.initFb": ()=>{
                    window.FB.init({
                        appId: ("TURBOPACK compile-time value", "1495170585752970") || "",
                        cookie: true,
                        xfbml: true,
                        version: "v21.0"
                    });
                    setIsSdkLoaded(true);
                }
            }["useMetaConnection.useEffect.initFb"];
            window.fbAsyncInit = initFb;
            // SDK already on the page (e.g. navigating back to this screen)
            if (window.FB) {
                initFb();
            } else {
                ({
                    "useMetaConnection.useEffect": function(d, s, id) {
                        const fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        const js = d.createElement(s);
                        js.id = id;
                        js.src = "https://connect.facebook.net/en_US/sdk.js";
                        if (fjs && fjs.parentNode) {
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }
                })["useMetaConnection.useEffect"](document, "script", "facebook-jssdk");
            }
            const sessionInfoListener = {
                "useMetaConnection.useEffect.sessionInfoListener": (event)=>{
                    try {
                        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
                        if (data?.type === "WA_EMBEDDED_SIGNUP") {
                            if (data.event.includes("FINISH")) {
                                signupData.current.phone_number_id = data.data?.phone_number_id || null;
                                signupData.current.waba_id = data.data?.waba_id || null;
                            }
                        }
                    } catch  {
                    // ignore parsing errors
                    }
                }
            }["useMetaConnection.useEffect.sessionInfoListener"];
            window.addEventListener("message", sessionInfoListener);
            return ({
                "useMetaConnection.useEffect": ()=>window.removeEventListener("message", sessionInfoListener)
            })["useMetaConnection.useEffect"];
        }
    }["useMetaConnection.useEffect"], []);
    // Auto-dismiss success notices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMetaConnection.useEffect": ()=>{
            if (notice?.type !== "success") return;
            const id = setTimeout({
                "useMetaConnection.useEffect.id": ()=>setNotice(null)
            }["useMetaConnection.useEffect.id"], 5000);
            return ({
                "useMetaConnection.useEffect": ()=>clearTimeout(id)
            })["useMetaConnection.useEffect"];
        }
    }["useMetaConnection.useEffect"], [
        notice
    ]);
    const connect = ()=>{
        if (!window.FB) {
            setNotice({
                type: "error",
                text: "Facebook SDK is not loaded yet."
            });
            return;
        }
        setIsLoading(true);
        setNotice(null);
        window.FB.login(function(response) {
            setTimeout(()=>{
                (async ()=>{
                    if (response.authResponse?.code) {
                        const code = response.authResponse.code;
                        const { waba_id, phone_number_id } = signupData.current;
                        if (!waba_id) {
                            setIsLoading(false);
                            setNotice({
                                type: "error",
                                text: "Setup incomplete. Meta did not return a WABA ID."
                            });
                            return;
                        }
                        try {
                            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].SOCIALMEDIA.WHATSAPP.CONNECT_META_WHATSAPP, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                credentials: "include",
                                body: JSON.stringify({
                                    code,
                                    waba_id,
                                    phone_number_id
                                })
                            });
                            const data = await res.json();
                            if (!res.ok) throw new Error(data.message || "Failed to connect to backend.");
                            setNotice({
                                type: "success",
                                text: data.message || "WhatsApp Connected!"
                            });
                            await refreshStatus();
                        } catch (error) {
                            setNotice({
                                type: "error",
                                text: error.message || "Failed to connect to backend."
                            });
                        }
                    } else {
                        setNotice({
                            type: "error",
                            text: "Facebook login was cancelled or failed."
                        });
                    }
                    setIsLoading(false);
                })();
            }, 1000);
        }, {
            config_id: ("TURBOPACK compile-time value", "1842894810241436"),
            response_type: "code",
            override_default_response_type: true,
            extras: {
                setup: {},
                featureType: "whatsapp_business_app_onboarding"
            }
        });
    };
    const disconnect = async ()=>{
        if (!confirm("Are you sure you want to disconnect WhatsApp? This will stop all incoming messages and broadcasts.")) return;
        setIsDisconnecting(true);
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ROUTES"].SOCIALMEDIA.WHATSAPP.DISCONNECT_META_WHATSAPP, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            if (!res.ok) throw new Error("Failed to disconnect");
            setIsConnected(false);
            setAccountDetails(null);
            setNotice({
                type: "success",
                text: "WhatsApp disconnected successfully."
            });
        } catch  {
            setNotice({
                type: "error",
                text: "Failed to disconnect. Please try again."
            });
        } finally{
            setIsDisconnecting(false);
        }
    };
    return {
        isSdkLoaded,
        isLoading,
        isDisconnecting,
        isConnected,
        isChecking,
        accountDetails,
        notice,
        dismissNotice: ()=>setNotice(null),
        connect,
        disconnect
    };
}
_s1(useMetaConnection, "lk33pHkiF05WonEHOkm9LhSCIzM=");
/* ────────────────────────────────────────────────────────────────────
 * Small shared UI pieces
 * ──────────────────────────────────────────────────────────────────── */ const StepList = ({ steps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        className: "mt-6 w-full space-y-3",
        children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-lighter)] text-[10px] font-bold text-[var(--color-primary)]",
                        children: i + 1
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 555,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600 dark:text-[var(--color-txtlight)]/70 leading-snug pt-0.5",
                        children: step
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 558,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 554,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 552,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c14 = StepList;
const EncryptionNote = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-5 flex items-start gap-2 rounded-xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-primary-darker)]/20 px-3 py-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {
                className: "h-3.5 w-3.5 text-[var(--color-primary)] shrink-0 mt-0.5"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 566,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-snug text-gray-500 dark:text-[var(--color-txtlight)]/70",
                children: "Your chats stay end-to-end encrypted — we only relay them through your own WhatsApp number."
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 565,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c15 = EncryptionNote;
const LivePill = ({ label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#DCF8C6]/60 dark:bg-[#128C7E]/20 rounded-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex h-2 w-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 576,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 577,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 575,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-bold tracking-wide text-[#075E54] dark:text-[#25D366] uppercase",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 579,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 574,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c16 = LivePill;
/* ────────────────────────────────────────────────────────────────────
 * Channel switcher (Baileys / Meta) — hidden until a platform is picked
 * ──────────────────────────────────────────────────────────────────── */ const ChannelTabs = ({ active, onChange, connected })=>{
    const items = [
        {
            id: "baileys",
            label: "Baileys WhatsApp",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 596,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: "meta",
            label: "Meta WhatsApp",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 597,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-3",
        children: items.map((item)=>{
            const isActive = active === item.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(item.id),
                className: `relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${isActive ? "bg-[#128C7E] text-white shadow-md shadow-[#128C7E]/25" : "bg-[var(--color-primary-lighter)]/70 text-gray-700 hover:bg-[var(--color-primary-lighter)] dark:bg-[var(--color-childbgdark)] dark:text-[var(--color-txtlight)]/80"}`,
                children: [
                    item.icon,
                    item.label,
                    connected[item.id] && !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-[#25D366]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 616,
                        columnNumber: 61
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item.id, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 605,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 601,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c17 = ChannelTabs;
/* ────────────────────────────────────────────────────────────────────
 * Hero (shown only while NO platform is connected and none is selected)
 * ──────────────────────────────────────────────────────────────────── */ const HeroSection = ({ onConnectBaileys, onConnectMeta, metaBusy })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardCls} overflow-hidden`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold text-[#128C7E]",
                            children: "WhatsApp Channel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 640,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-[var(--color-txtlight)]",
                            children: [
                                "Connect ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#16A34A]",
                                    children: "WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                " to Start Outreach"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 641,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-sm sm:text-base text-gray-600 dark:text-[var(--color-txtlight)]/70 max-w-md leading-relaxed",
                            children: "Choose your preferred WhatsApp connection to send campaigns, automate follow-ups, and manage customer conversations directly from your CRM."
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 644,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-6 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 text-sm text-gray-800 dark:text-[var(--color-txtlight)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QrIcon, {
                                            className: "h-5 w-5 shrink-0 text-gray-700 dark:text-[var(--color-txtlight)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Baileys WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " – Connect using QR code (Self-hosted)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 text-sm text-gray-800 dark:text-[var(--color-txtlight)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                                            className: "h-5 w-5 shrink-0 text-[var(--color-primary)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "Meta WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " – Official WhatsApp Cloud API by Meta"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 648,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConnectBaileys,
                                    className: "flex items-center gap-2 rounded-xl bg-[#128C7E] hover:bg-[#0F7A6E] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#128C7E]/25 transition-all cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Connect Baileys"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onConnectMeta,
                                    disabled: metaBusy,
                                    className: "flex items-center gap-2 rounded-xl border-2 border-[var(--color-primary)] bg-white dark:bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)] transition-all disabled:opacity-60 cursor-pointer",
                                    children: [
                                        metaBusy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 88
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Connect Meta"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 671,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 663,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 639,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col lg:block items-center min-h-[380px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 lg:left-4 top-8 h-[300px] w-[300px] rounded-full bg-[#DCF8C6]/60 dark:bg-[#128C7E]/10 blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 685,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 684,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto lg:mx-0 lg:ml-10 h-[360px] w-[210px] rounded-[2.2rem] border-[7px] border-[#0B3B36] bg-white dark:bg-[var(--color-bgdark)] shadow-2xl flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-2 h-3 w-14 rounded-full bg-[#0B3B36]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 689,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-16 w-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                                        className: "h-10 w-10 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-center text-sm font-bold leading-tight text-gray-900 dark:text-[var(--color-txtlight)]",
                                    children: [
                                        "WhatsApp",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Business"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {
                                    className: "mt-5 h-9 w-9 text-[#25D366]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 698,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -left-14 top-12 hidden sm:flex h-10 w-14 items-center justify-center rounded-xl bg-[#DCF8C6] shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block h-0.5 w-7 rounded bg-[#128C7E]/60"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block h-0.5 w-5 rounded bg-[#128C7E]/60"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                lineNumber: 703,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 701,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 700,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -right-6 bottom-12 flex h-9 w-9 items-center justify-center rounded-full bg-[#DCF8C6] text-[#128C7E] shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SendIcon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 707,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 688,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[270px] rounded-2xl bg-white/90 dark:bg-[var(--color-childbgdark)] border border-[#CFF3DD] dark:border-transparent p-5 shadow-lg backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                                    children: "Get Started in 2 Steps"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 712,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2.5",
                                    children: [
                                        "Choose Baileys or Meta",
                                        "Connect and start campaigns"
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-3 rounded-lg bg-[#F3FCF7] dark:bg-[var(--color-bgdark)] px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-[11px] font-bold text-white",
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-700 dark:text-[var(--color-txtlight)]",
                                                    children: s
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, s, true, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 711,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 683,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 637,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 636,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c18 = HeroSection;
const CardMenu = ({ onDisconnect, busy })=>{
    _s2();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                "aria-label": "Channel options",
                className: "flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreIcon, {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 741,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 736,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-10",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 745,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 z-20 mt-1 w-44 overflow-hidden rounded-xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setOpen(false);
                                onDisconnect();
                            },
                            disabled: busy,
                            className: "flex w-full items-center gap-2 px-3 py-2.5 text-xs font-semibold text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/10 disabled:opacity-50 cursor-pointer",
                            children: [
                                busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PowerIcon, {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 755,
                                    columnNumber: 92
                                }, ("TURBOPACK compile-time value", void 0)),
                                busy ? "Disconnecting…" : "Disconnect"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 747,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 746,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 735,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(CardMenu, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c19 = CardMenu;
const ChannelStatusCard = ({ channel, connected, title, subtitle, fields, busy, onSelect, onDisconnect })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-4 rounded-2xl border p-4 ${connected ? "border-[#CFF3DD] bg-[#F3FCF7] dark:bg-[var(--color-childbgdark)] dark:border-[#128C7E]/30" : "border-dashed border-[var(--color-primary-light)] bg-white dark:bg-[var(--color-bgdark)] dark:border-[var(--color-childbgdark)]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${channel === "baileys" ? "bg-[#25D366] text-white" : "bg-white text-[var(--color-primary)] border border-[var(--color-primary-light)]"}`,
                children: channel === "baileys" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 796,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 796,
                    columnNumber: 77
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 791,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 801,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 rounded-full bg-[#16A34A] px-2 py-0.5 text-[10px] font-semibold text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                                        className: "h-2.5 w-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Connected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 803,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex rounded-full bg-gray-100 dark:bg-[var(--color-bgdark)] px-2 py-0.5 text-[10px] font-semibold text-gray-500",
                                children: "Not connected"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 807,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 800,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-xs text-gray-500 dark:text-[var(--color-txtlight)]/60 truncate",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 812,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 799,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center gap-5",
                        children: fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-1 text-[10px] font-medium text-gray-500 dark:text-[var(--color-txtlight)]/60",
                                        children: [
                                            f.icon,
                                            f.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                                        children: [
                                            f.live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-full bg-[#25D366] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                lineNumber: 825,
                                                columnNumber: 44
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            f.value
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, f.label, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 819,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 817,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardMenu, {
                        onDisconnect: onDisconnect,
                        busy: busy
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 831,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSelect,
                className: "shrink-0 rounded-lg border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-lighter)] cursor-pointer",
                children: "Connect"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 834,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 784,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c20 = ChannelStatusCard;
/* ────────────────────────────────────────────────────────────────────
 * Connection panels (shown when the selected channel isn't connected)
 * ──────────────────────────────────────────────────────────────────── */ const BaileysConnectPanel = ({ b })=>{
    const formattedPairingCode = b.pairingCode ? b.pairingCode.match(/.{1,4}/g)?.join("-") ?? b.pairingCode : null;
    const showQr = b.mode === "qr" && b.status === "scanning" && !!b.qrCode;
    const showSpinner = b.mode === "qr" && !showQr;
    const showPairingForm = b.mode === "pairing" && !b.pairingCode;
    const showPairingCode = b.mode === "pairing" && !!b.pairingCode;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-[480px] overflow-hidden rounded-[1.75rem] border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] shadow-[0_20px_60px_-15px_rgba(0,102,204,0.18)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex p-1 rounded-xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-childbgdark)]",
                    children: [
                        {
                            id: "qr",
                            label: "Scan QR",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QrIcon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 862,
                                columnNumber: 65
                            }, ("TURBOPACK compile-time value", void 0))
                        },
                        {
                            id: "pairing",
                            label: "Pairing Code",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 863,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0))
                        }
                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                b.setMode(m.id);
                                b.setPairingError(null);
                            },
                            className: `flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${b.mode === m.id ? "bg-white dark:bg-[var(--color-bgdark)] text-[var(--color-primary)] shadow-sm" : "text-gray-500 dark:text-[var(--color-txtlight)]/60"}`,
                            children: [
                                m.icon,
                                m.label
                            ]
                        }, m.id, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 866,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 859,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 858,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 py-8",
                children: [
                    showSpinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-6 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-12 w-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border-[3px] border-[var(--color-primary-lighter)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 890,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border-[3px] border-[var(--color-primary)] border-t-transparent animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 889,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-gray-800 dark:text-[var(--color-txtlight)]",
                                        children: b.isDisconnecting ? "Disconnecting your account…" : b.status === "loading" ? "Checking your connection…" : "Generating QR code…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 894,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: b.isDisconnecting ? "Unlinking this device from WhatsApp." : "This usually takes just a few seconds."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 901,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 893,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 888,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    showPairingForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-14 w-14 rounded-2xl bg-[var(--color-primary-lighter)] flex items-center justify-center text-[var(--color-primary)] mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 911,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-gray-900 dark:text-[var(--color-txtlight)]",
                                children: "Link with a pairing code"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 914,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-1 text-center max-w-[280px]",
                                children: "Enter your WhatsApp number with country code — no camera needed."
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 915,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-5 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        inputMode: "numeric",
                                        value: b.phoneInput,
                                        onChange: (e)=>b.setPhoneInput(e.target.value),
                                        placeholder: "e.g. 919876543210",
                                        className: "w-full px-4 py-3 rounded-xl border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-childbgdark)] text-sm text-gray-900 dark:text-[var(--color-txtlight)] outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    b.pairingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[var(--color-destructive)] font-medium px-1",
                                        children: b.pairingError
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 928,
                                        columnNumber: 48
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: b.requestPairingCode,
                                        disabled: b.isRequestingCode,
                                        className: "w-full py-3 px-4 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl text-xs font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer",
                                        children: b.isRequestingCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                                                    className: "animate-spin h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Generating code…"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyIcon, {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Send me a pairing code"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 929,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 919,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 910,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    showPairingCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-gray-500 dark:text-[var(--color-txtlight)]/70 mb-3",
                                children: "Enter this code on your phone"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 953,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-6 py-4 rounded-2xl bg-[var(--color-primary-lighter)]/60 dark:bg-[var(--color-primary-darker)]/20 border border-dashed border-[var(--color-primary)]/40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold tracking-[0.2em] text-[var(--color-primary)] font-mono",
                                    children: formattedPairingCode
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 956,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 955,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-[11px] font-semibold text-[#128C7E] dark:text-[#25D366]",
                                children: [
                                    "Expires in ",
                                    b.pairingSecondsLeft,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 959,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LivePill, {
                                label: "Waiting for pairing"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 961,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepList, {
                                steps: [
                                    "Open WhatsApp on your phone",
                                    "Tap Menu or Settings, then Linked Devices",
                                    'Tap "Link with phone number instead" and enter the code above'
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 963,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EncryptionNote, {}, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 970,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 952,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    showQr && b.qrCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[196px] h-[196px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 120 120",
                                        className: "absolute inset-0 w-full h-full -rotate-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "60",
                                                cy: "60",
                                                r: RING_RADIUS,
                                                fill: "none",
                                                stroke: "#DCF8C6",
                                                strokeWidth: "6",
                                                className: "dark:opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                lineNumber: 979,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "60",
                                                cy: "60",
                                                r: RING_RADIUS,
                                                fill: "none",
                                                stroke: "#25D366",
                                                strokeWidth: "6",
                                                strokeLinecap: "round",
                                                strokeDasharray: RING_CIRCUMFERENCE,
                                                strokeDashoffset: RING_CIRCUMFERENCE * (1 - b.progress),
                                                style: {
                                                    transition: "stroke-dashoffset 0.25s linear"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                lineNumber: 980,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-[14px] rounded-2xl bg-white flex items-center justify-center shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                            value: b.qrCode,
                                            size: 150,
                                            bgColor: "#ffffff",
                                            fgColor: "#0f172a",
                                            level: "L"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                            lineNumber: 994,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                        lineNumber: 993,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 977,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-[11px] font-semibold text-[#128C7E] dark:text-[#25D366]",
                                children: [
                                    "Refreshes in ",
                                    b.secondsLeft,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 998,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LivePill, {
                                label: "Live QR Active"
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 1000,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepList, {
                                steps: [
                                    "Open WhatsApp on your phone",
                                    "Tap Menu or Settings, then Linked Devices",
                                    "Point your phone at this screen to scan"
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 1002,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EncryptionNote, {}, void 0, false, {
                                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                lineNumber: 1009,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 976,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 885,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center pl-8 pb-4 gap-1.5 text-[11px] text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockIcon, {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                        lineNumber: 1015,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Secured with end-to-end encryption"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1014,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 856,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c21 = BaileysConnectPanel;
const MetaConnectPanel = ({ m })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-2xl rounded-[1.75rem] border border-[var(--color-primary-light)]/60 dark:border-[var(--color-childbgdark)] bg-white dark:bg-[var(--color-bgdark)] p-10 text-center shadow-[0_20px_60px_-15px_rgba(0,102,204,0.18)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-20 h-20 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhatsAppIcon, {
                    className: "w-10 h-10 text-[#25D366]"
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 1024,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1023,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900 dark:text-[var(--color-txtlight)] mb-3",
                children: "Connect Official WhatsApp"
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1026,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 dark:text-[var(--color-txtlight)]/70 mb-8 text-base",
                children: "Sync incoming messages, send broadcasts, and manage client conversations directly from your CRM workspace."
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1027,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: m.connect,
                disabled: !m.isSdkLoaded || m.isLoading,
                className: "w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl shadow-md text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all cursor-pointer",
                children: m.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {
                            className: "h-5 w-5 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1038,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Authenticating with Meta..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaIcon, {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1043,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Connect via Meta"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1031,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-6 text-sm text-gray-400",
                children: "Requires a verified Meta Business Manager account."
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1049,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 1022,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c22 = MetaConnectPanel;
function WhatsAppConnectionPage() {
    _s3();
    const baileys = useBaileysConnection();
    const meta = useMetaConnection();
    const [activeChannel, setActiveChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("baileys");
    // true once the user has picked a platform from the hero card (or a pairing is already in flight)
    const [panelOpen, setPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // bumped by "Channel Settings" so the active workspace jumps to its Settings tab
    const [settingsSignal, setSettingsSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isInitialising = !baileys.isChecked || meta.isChecking;
    const connected = {
        baileys: baileys.isConnected,
        meta: meta.isConnected
    };
    const anyConnected = connected.baileys || connected.meta;
    // Hero card: only while NOTHING is connected and the user hasn't picked a platform yet.
    // The channel tabs + Channel Settings row are hidden for as long as the hero is showing.
    const showHero = !anyConnected && !panelOpen;
    // On first load, if only Meta is connected, land on the Meta tab
    const didAutoSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppConnectionPage.useEffect": ()=>{
            if (isInitialising || didAutoSelect.current) return;
            didAutoSelect.current = true;
            if (!baileys.isConnected && meta.isConnected) setActiveChannel("meta");
        }
    }["WhatsAppConnectionPage.useEffect"], [
        isInitialising,
        baileys.isConnected,
        meta.isConnected
    ]);
    // A Baileys pairing already in flight (e.g. after refresh) → skip the hero, show that flow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppConnectionPage.useEffect": ()=>{
            if (!isInitialising && baileys.status === "pairing") {
                setActiveChannel("baileys");
                setPanelOpen(true);
            }
        }
    }["WhatsAppConnectionPage.useEffect"], [
        isInitialising,
        baileys.status
    ]);
    // When the last connected platform is disconnected, go back to the hero card
    const hadConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppConnectionPage.useEffect": ()=>{
            if (hadConnection.current && !anyConnected) setPanelOpen(false);
            hadConnection.current = anyConnected;
        }
    }["WhatsAppConnectionPage.useEffect"], [
        anyConnected
    ]);
    const selectChannel = (c)=>{
        setActiveChannel(c);
        setPanelOpen(true);
    };
    if (isInitialising) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[60vh] items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 border-4 border-[#25D366] border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1107,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 font-medium",
                            children: "Verifying WhatsApp Workspace..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1108,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 1106,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                lineNumber: 1105,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 1104,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$MasterProtectedRoutes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto space-y-5",
            children: [
                !showHero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelTabs, {
                            active: activeChannel,
                            onChange: selectChannel,
                            connected: connected
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1121,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSettingsSignal((n)=>n + 1),
                            disabled: !connected[activeChannel],
                            className: "flex items-center gap-2 rounded-lg border border-[#128C7E]/40 px-4 py-2 text-xs font-semibold text-[#128C7E] hover:bg-[#E7F7EE] dark:hover:bg-[#128C7E]/10 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlidersIcon, {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 29
                                }, this),
                                "Channel Settings"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1122,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 1120,
                    columnNumber: 21
                }, this),
                meta.notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-start justify-between gap-3 rounded-xl px-4 py-3 text-sm ${meta.notice.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: meta.notice.text
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1140,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: meta.dismissNotice,
                            className: "text-xs font-semibold opacity-70 hover:opacity-100 cursor-pointer",
                            children: "Dismiss"
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1141,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 1135,
                    columnNumber: 21
                }, this),
                showHero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                    onConnectBaileys: ()=>selectChannel("baileys"),
                    onConnectMeta: ()=>{
                        selectChannel("meta");
                        meta.connect();
                    },
                    metaBusy: meta.isLoading
                }, void 0, false, {
                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                    lineNumber: 1149,
                    columnNumber: 21
                }, this),
                !showHero && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        anyConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 xl:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelStatusCard, {
                                    channel: "baileys",
                                    connected: baileys.isConnected,
                                    title: "Baileys WhatsApp",
                                    subtitle: baileys.isConnected ? "Connected via Baileys (QR Session)" : "Connect using QR code (Self-hosted)",
                                    fields: [
                                        ...baileys.account?.phone ? [
                                            {
                                                label: "Number",
                                                value: `+${baileys.account.phone}`
                                            }
                                        ] : [],
                                        {
                                            label: "Session Status",
                                            value: "Live",
                                            live: true
                                        }
                                    ],
                                    busy: baileys.isDisconnecting,
                                    onSelect: ()=>selectChannel("baileys"),
                                    onDisconnect: baileys.disconnect
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelStatusCard, {
                                    channel: "meta",
                                    connected: meta.isConnected,
                                    title: "Meta WhatsApp",
                                    subtitle: meta.isConnected ? "Official Meta WhatsApp Cloud API" : "Official WhatsApp Cloud API by Meta",
                                    fields: [
                                        ...meta.accountDetails?.phone ? [
                                            {
                                                label: "Business Number",
                                                value: meta.accountDetails.phone,
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                                    lineNumber: 1184,
                                                    columnNumber: 116
                                                }, void 0)
                                            }
                                        ] : [],
                                        {
                                            label: "Status",
                                            value: "Live",
                                            live: true
                                        }
                                    ],
                                    busy: meta.isDisconnecting,
                                    onSelect: ()=>selectChannel("meta"),
                                    onDisconnect: meta.disconnect
                                }, void 0, false, {
                                    fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1163,
                            columnNumber: 29
                        }, this),
                        activeChannel === "baileys" ? baileys.isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$baileys$2f$BaileysWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            account: baileys.account,
                            isDisconnecting: baileys.isDisconnecting,
                            onDisconnect: baileys.disconnect,
                            settingsSignal: settingsSignal
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1197,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BaileysConnectPanel, {
                            b: baileys
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1204,
                            columnNumber: 33
                        }, this) : meta.isConnected && meta.accountDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$whatsapp$2f$meta$2f$MetaWorkspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            accountDetails: meta.accountDetails,
                            isDisconnecting: meta.isDisconnecting,
                            onDisconnect: meta.disconnect,
                            settingsSignal: settingsSignal
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1207,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaConnectPanel, {
                            m: meta
                        }, void 0, false, {
                            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
                            lineNumber: 1214,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
            lineNumber: 1117,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/outreach/whatsapp/page.tsx",
        lineNumber: 1116,
        columnNumber: 9
    }, this);
}
_s3(WhatsAppConnectionPage, "fTLtbyXQB0HRlTmTQC3/m78UGUg=", false, function() {
    return [
        useBaileysConnection,
        useMetaConnection
    ];
});
_c23 = WhatsAppConnectionPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
__turbopack_context__.k.register(_c, "StrokeIcon");
__turbopack_context__.k.register(_c1, "WhatsAppIcon");
__turbopack_context__.k.register(_c2, "MetaIcon");
__turbopack_context__.k.register(_c3, "QrIcon");
__turbopack_context__.k.register(_c4, "KeyIcon");
__turbopack_context__.k.register(_c5, "LockIcon");
__turbopack_context__.k.register(_c6, "CheckIcon");
__turbopack_context__.k.register(_c7, "PowerIcon");
__turbopack_context__.k.register(_c8, "SpinnerIcon");
__turbopack_context__.k.register(_c9, "SendIcon");
__turbopack_context__.k.register(_c10, "MoreIcon");
__turbopack_context__.k.register(_c11, "PhoneIcon");
__turbopack_context__.k.register(_c12, "LinkIcon");
__turbopack_context__.k.register(_c13, "SlidersIcon");
__turbopack_context__.k.register(_c14, "StepList");
__turbopack_context__.k.register(_c15, "EncryptionNote");
__turbopack_context__.k.register(_c16, "LivePill");
__turbopack_context__.k.register(_c17, "ChannelTabs");
__turbopack_context__.k.register(_c18, "HeroSection");
__turbopack_context__.k.register(_c19, "CardMenu");
__turbopack_context__.k.register(_c20, "ChannelStatusCard");
__turbopack_context__.k.register(_c21, "BaileysConnectPanel");
__turbopack_context__.k.register(_c22, "MetaConnectPanel");
__turbopack_context__.k.register(_c23, "WhatsAppConnectionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f4f45853._.js.map