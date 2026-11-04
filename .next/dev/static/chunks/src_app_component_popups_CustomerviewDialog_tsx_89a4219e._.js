(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/component/popups/CustomerviewDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerViewDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-client] (ecmascript) <export default as PencilLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/customer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$customer$2f$CustomerFieldLabelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/customer/CustomerFieldLabelContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/countryCodes.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ============================================================
   HELPERS
   ============================================================ */ // "websiteExists" -> "Website Exists", "SEO-Optimised" -> "SEO Optimised"
const humanizeKey = (key)=>key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (c)=>c.toUpperCase());
const formatDate = (value)=>{
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};
const hasValue = (v)=>v !== undefined && v !== null && String(v).trim() !== "" && v !== "0";
const getInitials = (name)=>{
    if (!name) return "?";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const initials = parts.slice(0, 2).map((p)=>p[0]?.toUpperCase() ?? "").join("");
    return initials || "?";
};
// values longer than this read better on their own row than crammed into a grid column
const LONG_VALUE_THRESHOLD = 45;
/* ============================================================
   SMALL PRESENTATIONAL PIECES
   ============================================================ */ const SectionCard = ({ title, icon, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-gray-100 max-sm:dark:border-white/10 p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold uppercase tracking-wide text-gray-700 max-sm:dark:text-gray-300",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 161,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 157,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
        lineNumber: 156,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SectionCard;
const DetailItem = ({ label, value, fullWidth, icon, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: fullWidth ? "col-span-full" : "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-medium text-gray-400 max-sm:dark:text-gray-500 uppercase tracking-wide mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 183,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1.5 text-[15px] text-[var(--color-primary)] hover:underline break-words",
                children: [
                    icon,
                    value
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-start gap-1.5 text-[15px] text-gray-800 max-sm:dark:text-gray-200 break-words leading-relaxed",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
        lineNumber: 182,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = DetailItem;
const Badge = ({ children, color })=>{
    const colorMap = {
        green: "bg-green-100 text-green-700 max-sm:dark:bg-green-500/15 max-sm:dark:text-green-400",
        gray: "bg-gray-100 text-gray-600 max-sm:dark:bg-white/10 max-sm:dark:text-gray-300",
        red: "bg-red-100 text-red-700 max-sm:dark:bg-red-500/15 max-sm:dark:text-red-400",
        amber: "bg-amber-100 text-amber-700 max-sm:dark:bg-amber-500/15 max-sm:dark:text-amber-400",
        blue: "bg-blue-100 text-blue-700 max-sm:dark:bg-blue-500/15 max-sm:dark:text-blue-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${colorMap[color]}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Badge;
const Gallery = ({ images, altPrefix, onOpen })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3",
        children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onOpen(i),
                className: "group relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-lg border border-gray-200 max-sm:dark:border-white/10 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: `${altPrefix}-${i}`,
                        className: "h-full w-full object-cover transition duration-200 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            size: 18,
                            className: "text-white opacity-0 transition group-hover:opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
        lineNumber: 235,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Gallery;
function CustomerViewDialog({ isOpen, onClose, customerId, onEdit }) {
    _s();
    const { getLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$customer$2f$CustomerFieldLabelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerFieldLabel"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerViewDialog.useEffect": ()=>{
            if (!isOpen || !customerId) return;
            const fetchCustomer = {
                "CustomerViewDialog.useEffect.fetchCustomer": async ()=>{
                    setLoading(true);
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerById"])(customerId);
                        if (!res) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Customer not found");
                            onClose();
                            return;
                        }
                        setData(res);
                    } catch (error) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error fetching customer");
                        onClose();
                    } finally{
                        setLoading(false);
                    }
                }
            }["CustomerViewDialog.useEffect.fetchCustomer"];
            fetchCustomer();
        }
    }["CustomerViewDialog.useEffect"], [
        customerId,
        isOpen
    ]);
    // clear transient view state (open image, etc.) whenever a new customer is shown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerViewDialog.useEffect": ()=>{
            if (isOpen) setLightbox(null);
        }
    }["CustomerViewDialog.useEffect"], [
        isOpen,
        customerId
    ]);
    // close the dialog on Escape, unless the lightbox should absorb it first
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerViewDialog.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeydown = {
                "CustomerViewDialog.useEffect.handleKeydown": (e)=>{
                    if (e.key === "Escape" && !lightbox) onClose();
                }
            }["CustomerViewDialog.useEffect.handleKeydown"];
            window.addEventListener("keydown", handleKeydown);
            return ({
                "CustomerViewDialog.useEffect": ()=>window.removeEventListener("keydown", handleKeydown)
            })["CustomerViewDialog.useEffect"];
        }
    }["CustomerViewDialog.useEffect"], [
        isOpen,
        lightbox,
        onClose
    ]);
    // lightbox keyboard controls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerViewDialog.useEffect": ()=>{
            if (!lightbox) return;
            const handleKeydown = {
                "CustomerViewDialog.useEffect.handleKeydown": (e)=>{
                    if (e.key === "Escape") setLightbox(null);
                    if (e.key === "ArrowLeft") {
                        setLightbox({
                            "CustomerViewDialog.useEffect.handleKeydown": (lb)=>lb && {
                                    ...lb,
                                    index: (lb.index - 1 + lb.images.length) % lb.images.length
                                }
                        }["CustomerViewDialog.useEffect.handleKeydown"]);
                    }
                    if (e.key === "ArrowRight") {
                        setLightbox({
                            "CustomerViewDialog.useEffect.handleKeydown": (lb)=>lb && {
                                    ...lb,
                                    index: (lb.index + 1) % lb.images.length
                                }
                        }["CustomerViewDialog.useEffect.handleKeydown"]);
                    }
                }
            }["CustomerViewDialog.useEffect.handleKeydown"];
            window.addEventListener("keydown", handleKeydown);
            return ({
                "CustomerViewDialog.useEffect": ()=>window.removeEventListener("keydown", handleKeydown)
            })["CustomerViewDialog.useEffect"];
        }
    }["CustomerViewDialog.useEffect"], [
        lightbox
    ]);
    if (!isOpen) return null;
    const leadTempColor = data?.LeadTemperature === "hot" ? "red" : data?.LeadTemperature === "warm" ? "amber" : "blue";
    const assignedNames = Array.isArray(data?.AssignTo) ? data?.AssignTo.map((a)=>a?.Name).filter(Boolean).join(", ") : data?.AssignTo?.Name;
    const copyToClipboard = async (value, label)=>{
        try {
            await navigator.clipboard.writeText(value);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`${label} copied`);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Couldn't copy to clipboard");
        }
    };
    const countryInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((c)=>c.code === (data?.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"])) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((c)=>c.code === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"]);
    // Formatting strings properly without spaces for correct copying/calling
    const cleanCountryCode = (countryInfo.code || "").replace(/\s/g, "");
    const cleanPhone = (data?.ContactNumber || "").replace(/\s/g, "");
    const fullPhoneForCopy = `+${cleanCountryCode}${cleanPhone}`;
    const quickStats = data ? [
        hasValue(data.ContactNumber) && {
            key: "contact",
            label: getLabel("ContactNumber", "Contact No"),
            value: data.ContactNumber,
            href: `tel:${fullPhoneForCopy}`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 357,
                columnNumber: 17
            }, this),
            copyValue: fullPhoneForCopy,
            prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-1 mr-1 mb-[3px] text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif"
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToFlagEmoji"])({
                            iso2: countryInfo.iso2
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 362,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-sans tracking-normal",
                        children: [
                            "+",
                            cleanCountryCode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 367,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 360,
                columnNumber: 13
            }, this)
        },
        hasValue(data.Email) && {
            key: "email",
            label: getLabel("Email", "Email"),
            value: data.Email,
            href: `mailto:${data.Email}`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 376,
                columnNumber: 17
            }, this),
            copyValue: data.Email
        },
        hasValue(data.Price) && {
            key: "price",
            label: getLabel("Price", "Price"),
            value: data.Price,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 383,
                columnNumber: 17
            }, this)
        },
        assignedNames && {
            key: "assigned",
            label: "Assigned To",
            value: assignedNames,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 389,
                columnNumber: 17
            }, this)
        },
        hasValue(data.CustomerDate) && {
            key: "date",
            label: getLabel("CustomerDate", "Customer Date"),
            value: formatDate(data.CustomerDate),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                lineNumber: 395,
                columnNumber: 17
            }, this)
        }
    ].filter((s)=>Boolean(s)) : [];
    const containerWidthClass = isFullscreen ? "w-[100dvw] h-[100dvh] rounded-none" : "w-[100dvw] md:max-w-[80dvw] md:max-h-[95dvh] max-md:w-[100dvw] max-md:h-[100dvh] rounded-2xl";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        onClose: onClose,
        isOpen: isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px] z-50 ${isFullscreen ? "p-0" : "p-4"} max-sm:p-0`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white max-sm:dark:bg-[var(--color-childbgdark)] flex flex-col shadow-2xl transition-[width,height,border-radius] duration-200 max-sm:w-[100dvw] max-sm:h-[100dvh] max-sm:rounded-none ${containerWidthClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-start justify-between gap-4 border-b max-sm:dark:border-white/10 bg-gradient-to-r from-[var(--color-primary)]/[0.06] to-transparent p-5 sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-semibold text-white shadow-sm sm:flex",
                                                children: getInitials(data?.customerName)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "truncate text-xl font-bold max-sm:dark:text-[var(--color-primary)] sm:text-2xl",
                                                        children: data?.customerName || "Customer Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this),
                                                    !loading && (data?.CustomerType?.Name || data?.City?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-0.5 truncate text-sm text-gray-500 max-sm:dark:text-gray-400",
                                                        children: [
                                                            data?.CustomerType?.Name,
                                                            data?.City?.Name
                                                        ].filter(Boolean).join(" · ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex flex-wrap items-center gap-2",
                                                        children: [
                                                            data?.isFavourite && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                color: "amber",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            size: 12,
                                                                            className: "fill-current"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                            lineNumber: 435,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " Favourite"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 433,
                                                                columnNumber: 25
                                                            }, this),
                                                            hasValue(data?.LeadTemperature) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                color: leadTempColor,
                                                                children: [
                                                                    data.LeadTemperature.toUpperCase(),
                                                                    " LEAD"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 25
                                                            }, this),
                                                            data?.DealClosed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                color: "green",
                                                                children: "Deal Closed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 44
                                                            }, this),
                                                            hasValue(data?.Verified) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                color: data?.Verified?.toLowerCase() === "yes" ? "green" : "gray",
                                                                children: data?.Verified?.toLowerCase() === "yes" ? "Verified" : "Not Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 25
                                                            }, this),
                                                            data?.CustomerType?.Name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                color: "gray",
                                                                children: data.CustomerType.Name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 52
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 items-center gap-1",
                                        children: [
                                            onEdit && data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex cursor-pointer items-center gap-1.5 rounded-md p-2 text-sm font-medium transition hover:bg-[var(--color-primary)] hover:text-white max-sm:dark:text-white",
                                                onClick: ()=>onEdit(data._id),
                                                title: "Edit customer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer rounded-md p-2 transition hover:bg-[var(--color-primary)] hover:text-white max-sm:hidden max-sm:dark:text-white",
                                                onClick: ()=>setIsFullscreen((f)=>!f),
                                                title: isFullscreen ? "Exit full screen" : "Full screen",
                                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 35
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 61
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "cursor-pointer rounded-md p-2 transition hover:bg-[var(--color-primary)] hover:text-white max-sm:dark:text-white",
                                                onClick: onClose,
                                                title: "Close",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 472,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-5 py-6 sm:px-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: isFullscreen ? "mx-auto max-w-5xl" : "",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-pulse space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4",
                                                children: Array.from({
                                                    length: 4
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-16 w-[180px] shrink-0 rounded-xl bg-gray-100 max-sm:dark:bg-white/5 sm:w-auto"
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 487,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-40 rounded bg-gray-100 max-sm:dark:bg-white/5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1",
                                                        children: Array.from({
                                                            length: 6
                                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-10 rounded bg-gray-100 max-sm:dark:bg-white/5"
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 499,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 495,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 486,
                                        columnNumber: 19
                                    }, this) : data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            quickStats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex snap-x gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4",
                                                children: quickStats.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex w-[190px] shrink-0 snap-start items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3.5 max-sm:dark:border-white/10 max-sm:dark:bg-white/5 sm:w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
                                                                children: stat.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] font-medium uppercase tracking-wide text-gray-400 max-sm:dark:text-gray-500",
                                                                        children: stat.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    stat.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: stat.href,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "flex items-center truncate text-sm font-medium text-[var(--color-primary)] hover:underline",
                                                                        children: [
                                                                            stat.prefix,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "truncate",
                                                                                children: stat.value
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                        lineNumber: 522,
                                                                        columnNumber: 33
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "flex items-center truncate text-sm font-medium text-gray-800 max-sm:dark:text-gray-200",
                                                                        children: [
                                                                            stat.prefix,
                                                                            stat.value
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 29
                                                            }, this),
                                                            stat.copyValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>copyToClipboard(stat.copyValue, stat.label),
                                                                className: "shrink-0 cursor-pointer text-gray-300 transition hover:text-[var(--color-primary)] max-sm:dark:text-gray-600",
                                                                title: `Copy ${stat.label}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, stat.key, true, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 508,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                                title: "Customer Information",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 69
                                                }, void 0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1",
                                                    children: [
                                                        hasValue(data.Campaign?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Campaign", "Campaign"),
                                                            value: data.Campaign.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.CustomerType?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("CustomerType", "Customer Type"),
                                                            value: data.CustomerType.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.CustomerSubType?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("CustomerSubType", "Customer Subtype"),
                                                            value: data.CustomerSubType.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.City?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("City", "City"),
                                                            value: data.City.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.Location?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Location", "Location"),
                                                            value: data.Location.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.SubLocation?.Name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("SubLocation", "Sub Location"),
                                                            value: data.SubLocation.Name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.Area) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Area", "Area"),
                                                            value: data.Area
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.Adderess) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Address", "Address"),
                                                            value: data.Adderess,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 14,
                                                                className: "mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 590,
                                                                columnNumber: 35
                                                            }, void 0),
                                                            fullWidth: data.Adderess.length > LONG_VALUE_THRESHOLD
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 27
                                                        }, this),
                                                        hasValue(data.GoogleMap) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("GoogleMap", "Google Map"),
                                                            value: "Open location",
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 14,
                                                                className: "mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 598,
                                                                columnNumber: 35
                                                            }, void 0),
                                                            href: data.GoogleMap
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 554,
                                                columnNumber: 21
                                            }, this),
                                            (hasValue(data.CustomerId) || hasValue(data.ClientId) || hasValue(data.ReferenceId) || hasValue(data.CustomerDate) || hasValue(data.CustomerYear) || hasValue(data.LeadType) || hasValue(data.Facillities) || hasValue(data.URL) || hasValue(data.Video) || hasValue(data.Other)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                                title: "Lead & Business Details",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 76
                                                }, void 0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1",
                                                    children: [
                                                        hasValue(data.CustomerId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("CustomerId", "Customer ID"),
                                                            value: data.CustomerId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.ClientId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("ClientId", "Client ID"),
                                                            value: data.ClientId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.ReferenceId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("ReferenceId", "Reference Id"),
                                                            value: data.ReferenceId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.LeadType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("LeadType", "Lead Type"),
                                                            value: data.LeadType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.Facillities) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Facillities", "Facilities"),
                                                            value: data.Facillities
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.CustomerDate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("CustomerDate", "Customer Date"),
                                                            value: formatDate(data.CustomerDate),
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                size: 14,
                                                                className: "mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 39
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.CustomerYear) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("CustomerYear", "Customer Year"),
                                                            value: data.CustomerYear
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.URL) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("URL", "URL"),
                                                            value: data.URL,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                                size: 14,
                                                                className: "mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 39
                                                            }, void 0),
                                                            href: data.URL
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.Video) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Video", "Video"),
                                                            value: data.Video,
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                size: 14,
                                                                className: "mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 39
                                                            }, void 0),
                                                            href: data.Video
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 31
                                                        }, this),
                                                        hasValue(data.Other) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel("Other", "Others"),
                                                            value: data.Other,
                                                            fullWidth: data.Other.length > LONG_VALUE_THRESHOLD
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 616,
                                                columnNumber: 25
                                            }, this),
                                            hasValue(data.Description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                                title: getLabel("Description", "Description"),
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 89
                                                }, void 0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-[15px] leading-relaxed text-gray-700 max-sm:dark:bg-white/5 max-sm:dark:text-gray-300",
                                                    children: data.Description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 681,
                                                columnNumber: 23
                                            }, this),
                                            (data.CustomerImage && data.CustomerImage.length > 0 || data.SitePlan && data.SitePlan.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                                title: "Media",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 58
                                                }, void 0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-5",
                                                    children: [
                                                        data.CustomerImage && data.CustomerImage.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-2 text-xs font-medium uppercase tracking-wide text-gray-400 max-sm:dark:text-gray-500",
                                                                    children: getLabel("CustomerImage", "Customer Images")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gallery, {
                                                                    images: data.CustomerImage,
                                                                    altPrefix: "customer",
                                                                    onOpen: (index)=>setLightbox({
                                                                            images: data.CustomerImage,
                                                                            index
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 31
                                                        }, this),
                                                        data.SitePlan && data.SitePlan.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-2 text-xs font-medium uppercase tracking-wide text-gray-400 max-sm:dark:text-gray-500",
                                                                    children: getLabel("SitePlan", "Site Plan")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Gallery, {
                                                                    images: data.SitePlan,
                                                                    altPrefix: "site-plan",
                                                                    onOpen: (index)=>setLightbox({
                                                                            images: data.SitePlan,
                                                                            index
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 691,
                                                columnNumber: 25
                                            }, this),
                                            data.CustomerFields && Object.keys(data.CustomerFields).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                                title: "Additional Information",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 73
                                                }, void 0),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-x-6 gap-y-5 max-xl:grid-cols-2 max-sm:grid-cols-1",
                                                    children: Object.entries(data.CustomerFields).filter(([, value])=>hasValue(value)).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailItem, {
                                                            label: getLabel(key, humanizeKey(key)),
                                                            value: value,
                                                            fullWidth: value.length > LONG_VALUE_THRESHOLD
                                                        }, key, false, {
                                                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                            lineNumber: 728,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 723,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-x-6 gap-y-1 border-t pt-4 text-xs text-gray-400 max-sm:dark:border-white/10 max-sm:dark:text-gray-500",
                                                children: [
                                                    data.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Created ",
                                                            formatDate(data.createdAt)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 42
                                                    }, this),
                                                    data.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Last updated ",
                                                            formatDate(data.updatedAt)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 42
                                                    }, this),
                                                    data.CreatedBy?.Name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "By ",
                                                            data.CreatedBy.Name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                                lineNumber: 740,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 505,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "py-20 text-center text-gray-400",
                                        children: "No data available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 747,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 flex-col-reverse gap-3 border-t p-4 max-sm:dark:border-white/10 sm:flex-row sm:justify-end sm:p-6",
                                children: [
                                    onEdit && data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full cursor-pointer rounded-lg border border-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white sm:w-auto",
                                        onClick: ()=>onEdit(data._id),
                                        children: "Edit Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 755,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full cursor-pointer rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto",
                                        onClick: onClose,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 753,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this),
                lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4",
                    onClick: ()=>setLightbox(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute right-4 top-4 cursor-pointer text-white/80 transition hover:text-white",
                            onClick: ()=>setLightbox(null),
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 783,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 778,
                            columnNumber: 13
                        }, this),
                        lightbox.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute left-4 cursor-pointer text-white/80 transition hover:text-white",
                            onClick: (e)=>{
                                e.stopPropagation();
                                setLightbox((lb)=>lb && {
                                        ...lb,
                                        index: (lb.index - 1 + lb.images.length) % lb.images.length
                                    });
                            },
                            title: "Previous image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 796,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 786,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: lightbox.images[lightbox.index],
                            alt: `preview-${lightbox.index}`,
                            onClick: (e)=>e.stopPropagation(),
                            className: "max-h-[85dvh] max-w-[90dvw] rounded-lg object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 799,
                            columnNumber: 13
                        }, this),
                        lightbox.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute right-4 cursor-pointer text-white/80 transition hover:text-white",
                            onClick: (e)=>{
                                e.stopPropagation();
                                setLightbox((lb)=>lb && {
                                        ...lb,
                                        index: (lb.index + 1) % lb.images.length
                                    });
                            },
                            title: "Next image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                                lineNumber: 814,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 806,
                            columnNumber: 15
                        }, this),
                        lightbox.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-5 text-sm text-white/70",
                            children: [
                                lightbox.index + 1,
                                " / ",
                                lightbox.images.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                            lineNumber: 818,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
                    lineNumber: 774,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/app/component/popups/CustomerviewDialog.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_s(CustomerViewDialog, "1ErAXSchLy1/QUcLxATAz3syW3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$customer$2f$CustomerFieldLabelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerFieldLabel"]
    ];
});
_c4 = CustomerViewDialog;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SectionCard");
__turbopack_context__.k.register(_c1, "DetailItem");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "Gallery");
__turbopack_context__.k.register(_c4, "CustomerViewDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_component_popups_CustomerviewDialog_tsx_89a4219e._.js.map