(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/utils/handleFieldOptions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/utils/handleFieldOptions.ts
__turbopack_context__.s([
    "handleFieldOptions",
    ()=>handleFieldOptions
]);
const handleFieldOptions = async (configs, setFieldOptions)=>{
    try {
        // Fetch all data concurrently for better performance
        const results = await Promise.all(configs.map(async (config)=>{
            try {
                let data = [];
                // 1️⃣ Fetch dynamic data
                if (config.fetchFn) {
                    const res = await config.fetchFn();
                    if (res.admins) {
                        console.log(" naruto is : ", res.admins);
                        data = (res.admins || []).filter((item)=>item?.role === "user").filter((item)=>item?.status === "active").map(config.mapFn || ((item)=>item?.name)).filter(Boolean);
                    } else {
                        data = (res || []).filter((item)=>item?.Status === "Active").map(config.mapFn || ((item)=>item?.Name)).filter(Boolean);
                    }
                }
                // 2️⃣ Handle static data
                if (config.staticData) {
                    data = config.staticData;
                }
                return {
                    key: config.key,
                    data
                };
            } catch (err) {
                console.error(`Error fetching ${config.key}:`, err);
                return {
                    key: config.key,
                    data: []
                };
            }
        }));
        // 3️⃣ Build final object structure
        const merged = {};
        for (const { key, data } of results){
            merged[key] = data;
        }
        // 4️⃣ Update state (merging with existing options)
        setFieldOptions((prev)=>({
                ...prev,
                ...merged
            }));
    } catch (error) {
        console.error("Error in handleFieldOptions:", error);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/countryCodes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRY_CODES",
    ()=>COUNTRY_CODES,
    "DEFAULT_COUNTRY_CODE",
    ()=>DEFAULT_COUNTRY_CODE,
    "countryCodes",
    ()=>countryCodes,
    "getCountryLenRule",
    ()=>getCountryLenRule,
    "isoToFlagEmoji",
    ()=>isoToFlagEmoji
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const countryCodes = [
    "+91",
    "+1",
    "+7",
    "+20",
    "+27",
    "+30",
    "+31",
    "+32",
    "+33",
    "+34",
    "+36",
    "+39",
    "+40",
    "+41",
    "+43",
    "+44",
    "+45",
    "+46",
    "+47",
    "+48",
    "+49",
    "+51",
    "+52",
    "+53",
    "+54",
    "+55",
    "+56",
    "+57",
    "+58",
    "+60",
    "+61",
    "+62",
    "+63",
    "+64",
    "+65",
    "+66",
    "+81",
    "+82",
    "+84",
    "+86",
    "+90",
    "+92",
    "+93",
    "+94",
    "+95",
    "+98",
    "+211",
    "+212",
    "+213",
    "+216",
    "+218",
    "+220",
    "+221",
    "+222",
    "+223",
    "+224",
    "+225",
    "+226",
    "+227",
    "+228",
    "+229",
    "+230",
    "+231",
    "+232",
    "+233",
    "+234",
    "+235",
    "+236",
    "+237",
    "+238",
    "+239",
    "+240",
    "+241",
    "+242",
    "+243",
    "+244",
    "+245",
    "+246",
    "+247",
    "+248",
    "+249",
    "+250",
    "+251",
    "+252",
    "+253",
    "+254",
    "+255",
    "+256",
    "+257",
    "+258",
    "+260",
    "+261",
    "+262",
    "+263",
    "+264",
    "+265",
    "+266",
    "+267",
    "+268",
    "+269",
    "+290",
    "+291",
    "+297",
    "+298",
    "+299",
    "+350",
    "+351",
    "+352",
    "+353",
    "+354",
    "+355",
    "+356",
    "+357",
    "+358",
    "+359",
    "+370",
    "+371",
    "+372",
    "+373",
    "+374",
    "+375",
    "+376",
    "+377",
    "+378",
    "+379",
    "+380",
    "+381",
    "+382",
    "+383",
    "+385",
    "+386",
    "+387",
    "+389",
    "+420",
    "+421",
    "+423",
    "+500",
    "+501",
    "+502",
    "+503",
    "+504",
    "+505",
    "+506",
    "+507",
    "+508",
    "+509",
    "+590",
    "+591",
    "+592",
    "+593",
    "+594",
    "+595",
    "+596",
    "+597",
    "+598",
    "+599",
    "+670",
    "+672",
    "+673",
    "+674",
    "+675",
    "+676",
    "+677",
    "+678",
    "+679",
    "+680",
    "+681",
    "+682",
    "+683",
    "+685",
    "+686",
    "+687",
    "+688",
    "+689",
    "+690",
    "+691",
    "+692",
    "+850",
    "+852",
    "+853",
    "+855",
    "+856",
    "+880",
    "+886",
    "+960",
    "+961",
    "+962",
    "+963",
    "+964",
    "+965",
    "+966",
    "+967",
    "+968",
    "+970",
    "+971",
    "+972",
    "+973",
    "+974",
    "+975",
    "+976",
    "+977",
    "+992",
    "+993",
    "+994",
    "+995",
    "+996",
    "+998"
];
const COUNTRY_CODES = [
    {
        code: "91",
        iso2: "IN",
        name: "India",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "971",
        iso2: "AE",
        name: "UAE",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "966",
        iso2: "SA",
        name: "Saudi Arabia",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "974",
        iso2: "QA",
        name: "Qatar",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "973",
        iso2: "BH",
        name: "Bahrain",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "968",
        iso2: "OM",
        name: "Oman",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "965",
        iso2: "KW",
        name: "Kuwait",
        minLen: 7,
        maxLen: 8
    },
    {
        code: "977",
        iso2: "NP",
        name: "Nepal",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "880",
        iso2: "BD",
        name: "Bangladesh",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "92",
        iso2: "PK",
        name: "Pakistan",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "94",
        iso2: "LK",
        name: "Sri Lanka",
        minLen: 9,
        maxLen: 9
    },
    {
        code: "65",
        iso2: "SG",
        name: "Singapore",
        minLen: 8,
        maxLen: 8
    },
    {
        code: "60",
        iso2: "MY",
        name: "Malaysia",
        minLen: 9,
        maxLen: 10
    },
    {
        code: "44",
        iso2: "GB",
        name: "United Kingdom",
        minLen: 10,
        maxLen: 11
    },
    {
        code: "1",
        iso2: "US",
        name: "US / Canada",
        minLen: 10,
        maxLen: 10
    },
    {
        code: "61",
        iso2: "AU",
        name: "Australia",
        minLen: 9,
        maxLen: 9
    }
];
const DEFAULT_COUNTRY_CODE = "91";
const getCountryLenRule = (code)=>COUNTRY_CODES.find((c)=>c.code === code) ?? {
        code,
        iso2: "",
        name: code,
        minLen: 6,
        maxLen: 11
    };
const isoToFlagEmoji = ({ iso2, className })=>{
    if (!iso2 || iso2.length !== 2) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: "🏳️"
    }, void 0, false, {
        fileName: "[project]/src/app/utils/countryCodes.tsx",
        lineNumber: 249,
        columnNumber: 42
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `fi fi-${iso2.toLowerCase()} rounded-[2px] w-[20px] h-[15px] ${className || ""}`,
        style: {
            display: "inline-block"
        }
    }, void 0, false, {
        fileName: "[project]/src/app/utils/countryCodes.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/handleFieldOptionsObject.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/utils/handleFieldOptionsObject.ts
__turbopack_context__.s([
    "handleFieldOptionsObject",
    ()=>handleFieldOptionsObject
]);
const handleFieldOptionsObject = async (configs, setFieldOptions)=>{
    try {
        const results = await Promise.all(configs.map(async (config)=>{
            try {
                let data = [];
                // 1️⃣ Fetch dynamic data
                if (config.fetchFn) {
                    const res = await config.fetchFn();
                    if (res.admins) {
                        // Admins type
                        data = (res.admins || []).filter((item)=>item?.role === "user" || item?.role === "city_admin").filter((item)=>item?.status === "active").map(config.mapFn || ((item)=>item)) // ✅ keep object
                        .filter(Boolean);
                    } else {
                        // Normal campaigns or other data
                        data = (res || []).filter((item)=>item?.Status === "Active").map(config.mapFn || ((item)=>item)) // ✅ keep object
                        .filter(Boolean);
                    }
                }
                // 2️⃣ Handle static data (if provided)
                if (config.staticData) {
                    data = config.staticData;
                }
                return {
                    key: config.key,
                    data
                };
            } catch (err) {
                console.error(`Error fetching ${config.key}:`, err);
                return {
                    key: config.key,
                    data: []
                };
            }
        }));
        // 3️⃣ Merge results
        const merged = {};
        for (const { key, data } of results){
            merged[key] = data;
        }
        // 4️⃣ Update state
        setFieldOptions((prev)=>({
                ...prev,
                ...merged
            }));
    } catch (error) {
        console.error("Error in handleFieldOptionsObject:", error);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/exportToExcel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportToExcel",
    ()=>exportToExcel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
const exportToExcel = (data, fileName = "customers")=>{
    // Convert JSON → worksheet
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
    // Create workbook
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Customers");
    // Generate Excel file and trigger download
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `${fileName}.xlsx`);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/formatDateDMY.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDateDMY",
    ()=>formatDateDMY
]);
const formatDateDMY = (value)=>{
    if (!value) return "";
    let d = null;
    // 1. ISO-like yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        d = new Date(value);
    } else if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        const [day, month, year] = value.split("-").map(Number);
        d = new Date(year, month - 1, day);
    }
    if (!d || isNaN(d.getTime())) return "";
    // build dd-mm-yyyy
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utils/trimCountryCodeHelper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trimCountryCodeHelper",
    ()=>trimCountryCodeHelper,
    "trimCountryCodeHelper2",
    ()=>trimCountryCodeHelper2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/countryCodes.tsx [app-client] (ecmascript)");
;
const trimCountryCodeHelper2 = (num)=>{
    if (!num) return "";
    let trimmedNum = num;
    for (const code of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryCodes"]){
        if (trimmedNum.startsWith(code)) {
            trimmedNum = trimmedNum.slice(code.length);
            break; // stop after first match
        }
    }
    return trimmedNum;
};
const trimCountryCodeHelper = (num, countryCode)=>{
    if (!num) return "";
    let digits = num.trim().replace(/[^0-9]/g, "");
    // Remove international 00 prefix only when followed by the selected country code
    if (digits.startsWith(`00${countryCode}`)) {
        digits = digits.slice(2);
    }
    // Remove selected country code if present
    if (digits.startsWith(countryCode)) {
        const rest = digits.slice(countryCode.length);
        const { minLen, maxLen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCountryLenRule"])(countryCode);
        if (rest.length >= minLen && rest.length <= maxLen) {
            return rest;
        }
    }
    return digits;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/popups/PopupMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$slides$2f$CustomerImageSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/slides/CustomerImageSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
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
;
;
;
;
;
;
;
;
// Builds a dialable E.164-style number from stored CountryCode + ContactNumber
const FLAG_FONT_STACK = "'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif";
const buildTelHref = (lead)=>{
    const code = lead?.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"];
    const number = lead?.ContactNumber || lead?.ContactNo || "";
    if (!number) return "#";
    return `tel:+${code}${number}`;
};
// Small reusable bit: "🇮🇳 +91" prefix
const CountryPrefix = ({ lead })=>{
    const code = lead?.CountryCode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COUNTRY_CODE"];
    const country = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTRY_CODES"].find((c)=>c.code === code);
    if (!country) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1 mr-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: FLAG_FONT_STACK
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$countryCodes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoToFlagEmoji"])({
                    iso2: country.iso2
                })
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500",
                children: [
                    "+",
                    country.code
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CountryPrefix;
function CustomerTable({ leads, labelLeads, allLabelLeads, onAdd, onEdit, onCall, onWhatsappClick, onMailClick, onFavourite, onViewFollowup, loader, hasMoreCustomers, fetchMore, duplicateContacts, onViewDuplicate, onGoogleMapViewAddress, renderActions }) {
    _s();
    const [toggleSearchDropdown, setToggleSearchDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsperpage = 10;
    const [viewAll, setViewAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewLeadData, setViewLeadData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalPages = Math.ceil(leads.length / itemsperpage);
    const startIndex = (currentPage - 1) * itemsperpage;
    const paginatedLeads = leads.slice(startIndex, startIndex + itemsperpage);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextPage = async ()=>{
        if (currentPage < totalPages) {
            setCurrentPage((prev)=>prev + 1);
            return;
        }
        if (hasMoreCustomers && fetchMore) {
            await fetchMore();
            const newTotalPages = Math.ceil((leads.length + itemsperpage) / itemsperpage);
            if (currentPage < newTotalPages) {
                setCurrentPage((prev)=>prev + 1);
            }
        }
    };
    const prevPage = ()=>{
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const getDisplayedPages = ()=>{
        if (totalPages <= 3) return Array.from({
            length: totalPages
        }, (_, i)=>i + 1);
        if (currentPage === 1) return [
            1,
            2,
            3
        ];
        if (currentPage === totalPages) return [
            totalPages - 2,
            totalPages - 1,
            totalPages
        ];
        return [
            currentPage - 1,
            currentPage,
            currentPage + 1
        ];
    };
    const pages = getDisplayedPages();
    const followupRedirect = ()=>{
        router.push('/followups/customer');
    };
    if (loader) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col justify-center items-center gap-3 py-16 text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "Loading Customers..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 135,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
            lineNumber: 134,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            viewAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$popups$2f$PopupMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>{
                    setViewAll(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[var(--color-childbgdark)] relative w-full h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-3 left-3 cursor-pointer z-[2000] bg-gray-100/50 rounded-full p-1 self-end mb-1",
                            onClick: ()=>{
                                setViewAll(false);
                                setViewLeadData(null);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoArrowLeft"], {
                                size: 26
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 152,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 148,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$slides$2f$CustomerImageSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            images: viewLeadData?.CustomerImage?.length ? viewLeadData.CustomerImage : [
                                "/siteplan2.png"
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[calc(80vh-240px)] absolute top-[380px] w-full bg-white dark:bg-[var(--color-childbgdark)] overflow-y-auto px-4 py-6 rounded-t-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-center mb-8 text-[var(--color-primary)]",
                                    children: "Customer Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, this),
                                allLabelLeads?.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${viewLeadData?.[item.key]?.length > 30 && "flex-col gap-2"} my-1 justify-between p-3 bg-gray-50 dark:bg-[var(--color-secondary-darker)] rounded-lg`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 170,
                                                columnNumber: 37
                                            }, this),
                                            item.label === "Contact No" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: buildTelHref(viewLeadData || {}),
                                                className: "text-[var(--color-primary)] font-medium hover:underline text-sm inline-flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryPrefix, {
                                                        lead: viewLeadData || {}
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 45
                                                    }, this),
                                                    viewLeadData?.[item.key] ?? ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 174,
                                                columnNumber: 40
                                            }, this) : item.label === "Address" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-primary)] cursor-pointer underline text-sm text-right max-w-[60%]",
                                                onClick: ()=>onGoogleMapViewAddress?.(viewLeadData?.[item.key]),
                                                children: viewLeadData?.[item.key] ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 182,
                                                columnNumber: 41
                                            }, this) : item.label === "URL" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: viewLeadData?.[item.key] ?? "#",
                                                target: "_blank",
                                                className: "text-[var(--color-primary)] cursor-pointer underline text-sm text-right max-w-[60%]",
                                                children: viewLeadData?.[item.key] ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 189,
                                                columnNumber: 41
                                            }, this) : item.label === "AssignTo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm",
                                                children: Array.isArray(viewLeadData?.[item.key]) && viewLeadData[item.key].length > 0 ? viewLeadData[item.key].map((e)=>e.name).join(", ") : "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 198,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-gray-900 dark:text-[var(--color-txtlight)] font-medium text-right max-w-[60%] text-sm ${viewLeadData?.[item.key]?.length > 30 && "flex-col gap-2 max-w-full"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-left",
                                                    children: Array.isArray(viewLeadData?.[item.key]) ? viewLeadData[item.key].length > 0 ? viewLeadData[item.key].map((e)=>typeof e === "object" ? e.name || JSON.stringify(e) : e).join(", ") : "N/A" : typeof viewLeadData?.[item.key] === "object" && viewLeadData?.[item.key] !== null ? viewLeadData[item.key].name || JSON.stringify(viewLeadData[item.key]) : viewLeadData?.[item.key] ?? "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 204,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 166,
                                        columnNumber: 33
                                    }, this)),
                                viewLeadData?.CustomerFields && Object.keys(viewLeadData.CustomerFields).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 border-t border-gray-100 dark:border-white/10 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-left mb-6 px-2",
                                            children: "Additional Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 222,
                                            columnNumber: 37
                                        }, this),
                                        Object.entries(viewLeadData.CustomerFields).map(([key, value], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex ${String(value)?.length > 30 ? "flex-col gap-2" : ""} my-1 justify-between p-3 bg-gray-50 dark:bg-[var(--color-secondary-darker)] rounded-lg`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-gray-700 dark:text-[var(--color-txtlight)] text-sm capitalize",
                                                        children: key.replace(/([A-Z])/g, ' $1').trim()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-gray-900 dark:text-[var(--color-txtlight)] font-medium text-sm ${String(value)?.length > 30 ? "text-left max-w-full" : "text-right max-w-[60%]"}`,
                                                        children: typeof value === "object" && value !== null ? JSON.stringify(value) : String(value || "N/A")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, `custom-field-${i}`, true, {
                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                lineNumber: 226,
                                                columnNumber: 41
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 221,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 161,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                    lineNumber: 147,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 146,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-4 flex flex-col gap-3",
                children: [
                    paginatedLeads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col justify-center items-center gap-2 py-16 text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "🙅"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 255,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "No customers available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                lineNumber: 256,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 254,
                        columnNumber: 21
                    }, this),
                    paginatedLeads.map((lead, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-white dark:bg-[var(--color-childbgdark)] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-full bg-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 266,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: labelLeads.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[max-content_8px_1fr] items-start gap-x-2 gap-y-0.5 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-gray-500 dark:text-[var(--color-primary-light)] whitespace-nowrap leading-5",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-300 dark:text-white/20 leading-5",
                                                            children: "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-800 dark:text-[var(--color-primary-lighter)] font-medium leading-5 break-words line-clamp-2",
                                                            children: item.label === "Contact No" || item.key === "ContactNumber" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountryPrefix, {
                                                                        lead: lead
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    lead[item.key] ?? "N/A"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 49
                                                            }, this) : Array.isArray(lead[item.key]) ? lead[item.key].length > 0 ? lead[item.key].map((e)=>typeof e === "object" ? e.name || JSON.stringify(e) : e).join(", ") : "N/A" : typeof lead[item.key] === "object" && lead[item.key] !== null ? JSON.stringify(lead[item.key]) : lead[item.key] ?? "N/A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, j, true, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-2 shrink-0 w-[76px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[72px] h-[56px] rounded-xl overflow-hidden bg-gray-200 text-white dark:bg-[var(--color-secondary-darker)] border border-gray-200 dark:border-white/10 flex items-center justify-center cursor-pointer shrink-0",
                                                    onClick: ()=>{
                                                        setViewAll(true);
                                                        setViewLeadData(lead);
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        width: 72,
                                                        className: lead.SitePlan?.length > 0 ? "w-full h-full object-cover" : "w-8 h-8 opacity-100",
                                                        src: lead.SitePlan?.length > 0 ? lead.SitePlan : "/siteplan2.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-1.5 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-[var(--color-primary-lighter)] dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onViewFollowup?.(lead._id, lead.Name),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                size: 15,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onFavourite?.(lead),
                                                            children: lead.isFavourite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosHeart"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 47
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineHeart"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 47
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 37
                                                        }, this),
                                                        duplicateContacts?.[String(lead.ContactNumber)] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-amber-50 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onViewDuplicate?.(String(lead.ContactNumber)),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEye"], {
                                                                size: 14,
                                                                className: "text-amber-500 dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 41
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-8 h-8 rounded-full bg-gray-100 dark:bg-[var(--color-primary)] flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer",
                                                            onClick: ()=>onEdit?.(lead._id),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdEdit"], {
                                                                size: 16,
                                                                className: "text-[var(--color-primary)] dark:text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 37
                                                        }, this),
                                                        renderActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2 w-full",
                                                            children: renderActions(lead)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 298,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 269,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--color-primary)] px-4 py-2.5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onAdd?.(lead._id),
                                            className: "text-white border border-white/60 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-pointer",
                                            children: "FOLLOW UP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 366,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        onCall?.(lead);
                                                        onAdd?.(lead._id);
                                                    },
                                                    className: "text-white/90 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdPhone"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onMailClick?.(lead),
                                                    className: "text-white/90 hover:text-white transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdEmail"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onWhatsappClick?.(lead),
                                                    className: "text-white/90 hover:text-white transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 373,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 365,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 261,
                            columnNumber: 21
                        }, this)),
                    paginatedLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 bg-white dark:bg-[var(--color-childbgdark)] border border-gray-100 dark:border-white/10 rounded-2xl px-3 py-2 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(1),
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineBackward"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 419,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 415,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevPage,
                                    disabled: currentPage === 1,
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrFormPrevious"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 427,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 422,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "popLayout",
                                    children: pages.map((num, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: ()=>setCurrentPage(num),
                                            initial: {
                                                scale: 0.8,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            exit: {
                                                scale: 0.8,
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.15
                                            },
                                            className: `rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer
                                            ${num === currentPage ? "w-8 h-8 bg-[var(--color-primary)] text-white shadow-md" : "w-7 h-7 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100"}`,
                                            children: num
                                        }, i, false, {
                                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                            lineNumber: 432,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 430,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextPage,
                                    disabled: !hasMoreCustomers && currentPage === totalPages,
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrFormNext"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 455,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 450,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentPage(totalPages),
                                    className: "w-7 h-7 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[var(--color-primary)] hover:text-white transition-all cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineForward"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                        lineNumber: 462,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                                    lineNumber: 458,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                            lineNumber: 413,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                        lineNumber: 412,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/tables/CustomerTable.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(CustomerTable, "4iRCEy2pRl60KIi+uJ6sMMJcBT0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = CustomerTable;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountryPrefix");
__turbopack_context__.k.register(_c1, "CustomerTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$AddButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/buttons/AddButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-plus.js [app-client] (ecmascript) <export default as PlusSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DynamicAdvance = ({ children, addUrl = "/customer/add" })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setOpen(!open),
                        className: "bg-[var(--color-primary)] px-3 py-1.5 w-fit rounded-2xl my-4 mb-2 ml-0 flex items-center gap-2 cursor-pointer select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-white text-xs font-semibold",
                                children: "ADVANCED SEARCH"
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "p-2 text-white hover:bg-gray-200 rounded-md",
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowUp"], {}, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                    lineNumber: 34,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                                    fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                    lineNumber: 34,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$buttons$2f$AddButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        url: addUrl,
                        text: "Add",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusSquare$3e$__["PlusSquare"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                            lineNumber: 40,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center gap-4 p-4 mb-4 bg-white dark:bg-[var(--color-childbgdark)] border rounded-xl shadow-md",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/phonescreens/DashboardScreens/DynamicAdvance.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DynamicAdvance, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = DynamicAdvance;
const __TURBOPACK__default__export__ = DynamicAdvance;
var _c;
__turbopack_context__.k.register(_c, "DynamicAdvance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data/emailTemplate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Email template library.
 *
 * Each template is plain HTML with `{{Field}}` placeholders that get
 * swapped for real values at send time (see `mergeTemplateFields` in
 * WebhookAgentWorkspace.tsx). Keep placeholder names matching the fields
 * your customer objects actually have — Name, Email, City, ContactNumber,
 * Campaign are wired up already; add more by extending both this file and
 * the `mergeTemplateFields` map.
 *
 * To add a template: drop a new object in the array below. Nothing else
 * needs to change — the picker, thumbnail, and preview all read this list.
 */ __turbopack_context__.s([
    "emailTemplates",
    ()=>emailTemplates,
    "getEmailTemplateById",
    ()=>getEmailTemplateById
]);
const emailTemplates = [
    {
        id: 'creatikai-intro',
        name: 'CreatikAi Introduction',
        description: 'Gradient header intro with a profile-details box and CTA',
        category: 'Outreach',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CreatikAi - Let's Grow Together</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fb; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f7fb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.06);">
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); padding: 45px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">CreatikAi</h1>
              <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">Next-Generation Digital Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 35px;">
              <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 24px;">Hi {{Name}},</h2>
              <p style="margin: 0 0 25px 0; color: #475569; font-size: 16px; line-height: 1.6;">
  {{AI_CONTENT}}
</p>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; border-radius: 6px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Your Profile Details</p>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="30%" style="padding: 6px 0; color: #0f172a; font-weight: 600; font-size: 15px;">Email:</td>
                        <td width="70%" style="padding: 6px 0; color: #475569; font-size: 15px;">{{Email}}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 600; font-size: 15px;">Phone:</td>
                        <td style="padding: 6px 0; color: #475569; font-size: 15px;">{{ContactNumber}}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 600; font-size: 15px;">City:</td>
                        <td style="padding: 6px 0; color: #475569; font-size: 15px;">{{City}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 35px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                Ready to transform your business with AI-driven strategies and a flawless online presence? Let's take the next step together.
              </p>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://creatikai.com" target="_blank" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 50px; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(6, 182, 212, 0.3);">
                      Visit CreatikAi
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.5;">
                © 2026 CreatikAi. All rights reserved.<br>
                You are receiving this email as part of the {{Campaign}} campaign.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    // Add more templates below — same shape, different html.
    // The two below are placeholder starting points so the picker has
    // more than one option; swap the html for your real designs whenever
    // you're ready.
    {
        id: 'simple-follow-up',
        name: 'Simple Follow-up',
        description: 'Minimal plain-style follow-up note',
        category: 'Follow-up',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Following up</title>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;">
          <tr>
            <td style="padding-bottom:24px; border-bottom:2px solid #0f172a;">
              <p style="margin:0; font-size:14px; color:#64748b;">Hi {{Name}},</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0; color:#1e293b; font-size:15px; line-height:1.7;">
             <p style="margin:0 0 16px 0;">{{AI_CONTENT}}</p>
              <p style="margin:0;">Best,<br>The Team</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:20px; border-top:1px solid #e2e8f0;">
              <p style="margin:0; font-size:12px; color:#94a3b8;">{{Email}} · {{ContactNumber}} · {{City}}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'promo-offer',
        name: 'Promotional Offer',
        description: 'Bold banner-style promo with a discount callout',
        category: 'Promotional',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Special Offer</title>
</head>
<body style="margin:0; padding:0; background-color:#0f172a; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background:#111827; border-radius:14px; overflow:hidden;">
          <tr>
            <td align="center" style="padding:50px 20px 30px 20px;">
              <span style="display:inline-block; padding:6px 14px; background:#facc15; color:#111827; font-size:11px; font-weight:800; letter-spacing:1px; border-radius:999px; text-transform:uppercase;">Limited Time</span>
              <h1 style="color:#ffffff; margin:18px 0 0 0; font-size:30px; font-weight:800;">Hi {{Name}}, this one's for you</h1>
              <p style="color:#94a3b8; margin:12px 0 0 0; font-size:15px;">{{AI_CONTENT}}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#facc15; border-radius:10px;">
                    <a href="#" style="display:block; padding:16px 40px; color:#111827; font-size:16px; font-weight:800; text-decoration:none;">Claim Your Offer</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 30px; background:#1f2937; border-top:1px solid #374151;">
              <p style="margin:0; color:#6b7280; font-size:12px; text-align:center;">
                Sent to {{Email}} · {{ContactNumber}}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'creatikai-bold-header',
        name: 'CreatikAi Bold Header',
        description: 'Dark hero with logo badge and clean CTA — good for cold outreach',
        category: 'Outreach',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CreatikAi</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background:#0b1220; border-radius:16px; overflow:hidden;">
          <tr>
            <td align="center" style="padding:44px 30px 32px 30px;">
              <img src="https://creatikai.com/creatikai-logo.png" width="56" height="56" alt="CreatikAi" style="display:block; border-radius:50%; margin-bottom:14px;">
              <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:800; letter-spacing:0.3px;">Creatik <span style="color:#38bdf8;">AI</span></h1>
              <p style="color:#94a3b8; margin:8px 0 0 0; font-size:13px; letter-spacing:1px; text-transform:uppercase;">AI Automation &amp; Digital Growth</p>
            </td>
          </tr>
          <tr>
            <td style="background:#ffffff; padding:36px 32px;">
              <h2 style="margin:0 0 16px 0; color:#0f172a; font-size:21px;">Hi {{Name}},</h2>
              <p style="margin:0 0 24px 0; color:#475569; font-size:15.5px; line-height:1.7;">
                {{AI_CONTENT}}
              </p>
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0b1220; border-radius:10px;">
                    <a href="https://creatikai.com" target="_blank" style="display:block; padding:14px 32px; color:#ffffff; font-size:14.5px; font-weight:700; text-decoration:none; letter-spacing:0.3px;">Let's Talk →</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc; padding:20px 32px; border-top:1px solid #e2e8f0;">
              <p style="margin:0; color:#94a3b8; font-size:12px; line-height:1.6;">
                {{Email}} · {{ContactNumber}} · {{City}}<br>
                Part of the {{Campaign}} campaign · © 2026 CreatikAi
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'creatikai-minimal-card',
        name: 'CreatikAi Minimal Card',
        description: 'Small logo header, light and airy, one clean block of copy',
        category: 'Outreach',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CreatikAi</title>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;">
          <tr>
            <td style="padding-bottom:28px;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <img src="https://creatikai.com/creatikai-logo.png" width="34" height="34" alt="CreatikAi" style="display:block; border-radius:50%;">
                  </td>
                  <td style="font-size:16px; font-weight:800; color:#0f172a; vertical-align:middle;">Creatik AI</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:22px; border-bottom:1px solid #e2e8f0;">
              <p style="margin:0; font-size:13px; color:#94a3b8;">Hi {{Name}}, quick note about {{Campaign}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:26px 0; color:#1e293b; font-size:15.5px; line-height:1.75;">
              <p style="margin:0 0 18px 0;">{{AI_CONTENT}}</p>
              <p style="margin:0;">
                <a href="https://creatikai.com" style="color:#0284c7; font-weight:700; text-decoration:none;">creatikai.com →</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:20px; border-top:1px solid #e2e8f0;">
              <p style="margin:0; font-size:11.5px; color:#94a3b8;">{{Email}} · {{ContactNumber}} · {{City}}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'real-estate-spotlight',
        name: 'Property Spotlight',
        description: 'Emerald/gold real-estate style with a listing-card layout',
        category: 'Real Estate',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Property Spotlight</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f4; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background:#ffffff; border-radius:14px; overflow:hidden; border:1px solid #e5e9e4;">
          <tr>
            <td style="background:#0f3d2e; padding:34px 32px;">
              <span style="display:inline-block; padding:5px 12px; background:#d4af37; color:#0f3d2e; font-size:10.5px; font-weight:800; letter-spacing:1px; border-radius:999px; text-transform:uppercase;">Property Spotlight</span>
              <h1 style="color:#ffffff; margin:16px 0 0 0; font-size:24px; font-weight:700;">Hi {{Name}}</h1>
              <p style="color:#a7c4b5; margin:6px 0 0 0; font-size:13.5px;">Handpicked for your search in {{City}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px 0; color:#3f4b45; font-size:15.5px; line-height:1.75;">
                {{AI_CONTENT}}
              </p>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#f6f8f6; border-radius:10px; margin-bottom:26px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 4px 0; font-size:11px; color:#7d8a83; text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Campaign</p>
                    <p style="margin:0; font-size:14.5px; color:#14322a; font-weight:600;">{{Campaign}}</p>
                  </td>
                </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0f3d2e; border-radius:8px;">
                    <a href="#" style="display:block; padding:14px 30px; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">Schedule a Viewing</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f6f8f6; padding:20px 32px; border-top:1px solid #e5e9e4;">
              <p style="margin:0; color:#8a9490; font-size:11.5px;">{{Email}} · {{ContactNumber}} · {{City}}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'saas-launch',
        name: 'SaaS Product Update',
        description: 'Violet gradient, modern app-announcement feel',
        category: 'Product',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Update</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f3ff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 10px 30px rgba(124,58,237,0.08);">
          <tr>
            <td align="center" style="background:linear-gradient(135deg,#7c3aed 0%,#a855f7 100%); padding:40px 30px;">
              <span style="display:inline-block; padding:5px 14px; background:rgba(255,255,255,0.18); color:#ffffff; font-size:10.5px; font-weight:700; letter-spacing:1px; border-radius:999px; text-transform:uppercase;">What's New</span>
              <h1 style="color:#ffffff; margin:16px 0 0 0; font-size:26px; font-weight:800;">Hey {{Name}} 👋</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px;">
              <p style="margin:0 0 26px 0; color:#4b5563; font-size:15.5px; line-height:1.75;">
                {{AI_CONTENT}}
              </p>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:#7c3aed; border-radius:10px;">
                          <a href="#" style="display:block; padding:14px 34px; color:#ffffff; font-size:14.5px; font-weight:700; text-decoration:none; border-radius:10px;">See What's New</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#faf5ff; padding:20px 32px; border-top:1px solid #ede9fe;">
              <p style="margin:0; color:#a78bfa; font-size:11.5px;">
                {{Email}} · {{City}} · {{Campaign}}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'editorial-newsletter',
        name: 'Editorial Newsletter',
        description: 'Serif typography, single-column magazine-style read',
        category: 'Newsletter',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter</title>
</head>
<body style="margin:0; padding:0; background-color:#fbfaf8; font-family:Georgia, 'Times New Roman', serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:44px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px;">
          <tr>
            <td align="center" style="padding-bottom:26px; border-bottom:2px solid #1c1917;">
              <p style="margin:0; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:#78716c;">The Weekly Note</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px 4px 10px 4px;">
              <h1 style="margin:0 0 6px 0; font-size:26px; color:#1c1917; font-weight:400; line-height:1.3;">Dear {{Name}},</h1>
              <p style="margin:0; font-size:12.5px; color:#a8a29e; font-style:italic;">A note about {{Campaign}}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 4px 34px 4px; color:#292524; font-size:16px; line-height:1.85;">
              {{AI_CONTENT}}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 4px; border-top:1px solid #e7e5e4;">
              <p style="margin:0; font-size:12px; color:#a8a29e; font-family:'Segoe UI', sans-serif;">
                {{Email}} · {{ContactNumber}} · {{City}}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'dark-luxury-offer',
        name: 'Dark Luxury Offer',
        description: 'Black and gold premium feel for high-end promos',
        category: 'Promotional',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exclusive Offer</title>
</head>
<body style="margin:0; padding:0; background-color:#000000; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:44px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; background:#0a0a0a; border:1px solid #2a2418; border-radius:12px; overflow:hidden;">
          <tr>
            <td align="center" style="padding:50px 30px 20px 30px;">
              <p style="margin:0 0 14px 0; font-size:11px; letter-spacing:3px; color:#c9a24b; text-transform:uppercase; font-weight:600;">By Invitation Only</p>
              <h1 style="color:#ffffff; margin:0; font-size:28px; font-weight:300; font-family:Georgia, serif;">{{Name}}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 40px 34px 40px;">
              <p style="margin:0; color:#c7c7c7; font-size:15px; line-height:1.85; text-align:center;">
                {{AI_CONTENT}}
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:44px;">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border:1px solid #c9a24b; border-radius:2px;">
                    <a href="#" style="display:block; padding:14px 40px; color:#c9a24b; font-size:12.5px; font-weight:700; letter-spacing:1.5px; text-decoration:none; text-transform:uppercase;">Reveal Offer</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 30px; border-top:1px solid #201c14;">
              <p style="margin:0; color:#5c5648; font-size:11px; text-align:center; letter-spacing:0.5px;">
                {{Email}} · {{City}} · {{Campaign}}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    },
    {
        id: 'corporate-letter',
        name: 'Corporate Letter',
        description: 'Formal letterhead style — plain, professional, B2B-safe',
        category: 'Formal',
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Correspondence</title>
</head>
<body style="margin:0; padding:0; background-color:#ffffff; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; border:1px solid #d6dbe1;">
          <tr>
            <td style="padding:26px 34px; border-bottom:3px solid #1e3a5f;">
              <p style="margin:0; font-size:15px; font-weight:700; color:#1e3a5f; letter-spacing:0.4px;">{{Campaign}}</p>
              <p style="margin:2px 0 0 0; font-size:11px; color:#7a8794;">Official Correspondence</p>
            </td>
          </tr>
          <tr>
            <td style="padding:34px;">
              <p style="margin:0 0 4px 0; font-size:11px; color:#9aa5b1;">To: {{Name}} — {{City}}</p>
              <p style="margin:0 0 22px 0; font-size:11px; color:#9aa5b1;">Ref: {{ReferenceId}}</p>
              <p style="margin:0 0 18px 0; font-size:14.5px; color:#1f2937;">Dear {{Name}},</p>
              <p style="margin:0 0 22px 0; color:#374151; font-size:14.5px; line-height:1.8;">
                {{AI_CONTENT}}
              </p>
              <p style="margin:0; color:#374151; font-size:14.5px; line-height:1.8;">
                Regards,<br>
                <span style="font-weight:600;">The Team</span>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 34px; background:#f7f9fb; border-top:1px solid #e5e9ee;">
              <p style="margin:0; font-size:11px; color:#9aa5b1;">{{Email}} · {{ContactNumber}}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    }
];
const getEmailTemplateById = (id)=>emailTemplates.find((t)=>t.id === id);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_df86d54e._.js.map