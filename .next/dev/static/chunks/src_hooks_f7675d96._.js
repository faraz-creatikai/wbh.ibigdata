(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useHorizontalScroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useHorizontalScroll
]);
// hooks/useHorizontalScroll.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useHorizontalScroll() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHorizontalScroll.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const TOLERANCE = 1; // px tolerance for floating point rounding
            const clamp = {
                "useHorizontalScroll.useEffect.clamp": (val, min, max)=>Math.max(min, Math.min(max, val))
            }["useHorizontalScroll.useEffect.clamp"];
            const onWheel = {
                "useHorizontalScroll.useEffect.onWheel": (e)=>{
                    // Many mice / touchpads provide both deltaX and deltaY.
                    // Use deltaX first (explicit horizontal gesture), otherwise use deltaY as horizontal intent.
                    const horizDelta = e.deltaX || e.deltaY;
                    const vertDelta = e.deltaY;
                    // Current scroll metrics
                    const scrollLeft = el.scrollLeft;
                    const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
                    const atLeft = scrollLeft <= TOLERANCE;
                    const atRight = scrollLeft >= maxScrollLeft - TOLERANCE;
                    // If the input suggests horizontal movement (deltaX) or vertical but we want to convert to horizontal:
                    if (Math.abs(horizDelta) > 0) {
                        // If user is trying to scroll right (positive delta) and there's room to scroll right
                        if (horizDelta > 0 && !atRight) {
                            el.scrollLeft = clamp(scrollLeft + horizDelta, 0, maxScrollLeft);
                            e.preventDefault();
                            return;
                        }
                        // If user is trying to scroll left (negative delta) and there's room to scroll left
                        if (horizDelta < 0 && !atLeft) {
                            el.scrollLeft = clamp(scrollLeft + horizDelta, 0, maxScrollLeft);
                            e.preventDefault();
                            return;
                        }
                        // at an edge and attempting to scroll beyond it → fall through to allow vertical scroll
                        return;
                    }
                    // If horizDelta === 0 (rare), handle purely vertical wheel converting to horizontal scroll when possible
                    // i.e., user scrolls the mouse wheel vertically but we want to scroll the table horizontally
                    if (Math.abs(vertDelta) > 0) {
                        // scrolling down -> want to move right
                        if (vertDelta > 0 && !atRight) {
                            el.scrollLeft = clamp(scrollLeft + vertDelta, 0, maxScrollLeft);
                            e.preventDefault();
                            return;
                        }
                        // scrolling up -> want to move left
                        if (vertDelta < 0 && !atLeft) {
                            el.scrollLeft = clamp(scrollLeft + vertDelta, 0, maxScrollLeft);
                            e.preventDefault();
                            return;
                        }
                    // If at the respective edge, allow vertical scrolling (do NOTHING / don't preventDefault)
                    }
                }
            }["useHorizontalScroll.useEffect.onWheel"];
            el.addEventListener("wheel", onWheel, {
                passive: false
            });
            return ({
                "useHorizontalScroll.useEffect": ()=>el.removeEventListener("wheel", onWheel)
            })["useHorizontalScroll.useEffect"];
        }
    }["useHorizontalScroll.useEffect"], []);
    return ref;
}
_s(useHorizontalScroll, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useClickOutside.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickOutside",
    ()=>useClickOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useClickOutside({ ref, handler, enabled = true }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClickOutside.useEffect": ()=>{
            if (!enabled) return;
            const listener = {
                "useClickOutside.useEffect.listener": (event)=>{
                    const el = ref?.current;
                    if (!el || el.contains(event.target)) return;
                    handler();
                }
            }["useClickOutside.useEffect.listener"];
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return ({
                "useClickOutside.useEffect": ()=>{
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                }
            })["useClickOutside.useEffect"];
        }
    }["useClickOutside.useEffect"], [
        ref,
        handler,
        enabled
    ]);
}
_s(useClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAIAgents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAIAgents",
    ()=>useAIAgents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useAIAgents = ()=>{
    _s();
    const { admin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const fetchMyAgents = async ()=>{
        if (!admin) return [];
        try {
            // 1. Single optimized call for both Admins and Users
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMyActiveAgents"])();
            // 2. Safely unwrap Axios (.data.data) or Standard Fetch (.data)
            const payload = response?.data ? response.data : response?.data;
            if (!payload || !Array.isArray(payload)) {
                return [];
            }
            // 3. Normalize the ID format for the UI component and return
            return payload.map((e)=>({
                    ...e,
                    id: e.id || e._id
                }));
        } catch (error) {
            console.error("Failed to fetch assigned agents:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to get AI Agents, try again later");
            return [];
        }
    };
    return {
        fetchMyAgents
    };
};
_s(useAIAgents, "v8D1r+DGFXJO4OvwCawSQgKZH6A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_hooks_f7675d96._.js.map