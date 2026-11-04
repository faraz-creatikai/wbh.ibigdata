module.exports = [
"[project]/src/hooks/useHorizontalScroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useHorizontalScroll
]);
// hooks/useHorizontalScroll.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useHorizontalScroll() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const TOLERANCE = 1; // px tolerance for floating point rounding
        const clamp = (val, min, max)=>Math.max(min, Math.min(max, val));
        const onWheel = (e)=>{
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
        };
        el.addEventListener("wheel", onWheel, {
            passive: false
        });
        return ()=>el.removeEventListener("wheel", onWheel);
    }, []);
    return ref;
}
}),
"[project]/src/hooks/useClickOutside.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClickOutside",
    ()=>useClickOutside
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useClickOutside({ ref, handler, enabled = true }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) return;
        const listener = (event)=>{
            const el = ref?.current;
            if (!el || el.contains(event.target)) return;
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler,
        enabled
    ]);
}
}),
"[project]/src/hooks/useAIAgents.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAIAgents",
    ()=>useAIAgents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
const useAIAgents = ()=>{
    const { admin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const fetchMyAgents = async ()=>{
        if (!admin) return [];
        try {
            // 1. Single optimized call for both Admins and Users
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMyActiveAgents"])();
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Failed to get AI Agents, try again later");
            return [];
        }
    };
    return {
        fetchMyAgents
    };
};
}),
];

//# sourceMappingURL=src_hooks_6a0745d1._.js.map