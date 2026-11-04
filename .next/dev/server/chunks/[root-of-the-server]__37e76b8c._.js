module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/constants/ApiRoute.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ROUTES",
    ()=>API_ROUTES,
    "API_URL",
    ()=>API_URL,
    "BASE_URL",
    ()=>BASE_URL
]);
const BASE_URL = "http://localhost:5000/api";
const API_ROUTES = {
    CONTACT: {
        GET_ALL: `${BASE_URL}/contact`,
        GET_BY_ID: (id)=>`${BASE_URL}/contact/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/contact?${params}`,
        ADD: `${BASE_URL}/contact`,
        UPDATE: (id)=>`${BASE_URL}/contact/${id}`,
        DELETE: (id)=>`${BASE_URL}/contact/${id}`,
        DELETEALL: `${BASE_URL}/contact/delete/all`,
        CONTACTIMPORT: `${BASE_URL}/contact/import`,
        CONTACTEXCELHEADERS: `${BASE_URL}/contact/import/headers`,
        ASSIGNCONTACT: `${BASE_URL}/contact/assign`
    },
    CUSTOMER: {
        DASHBOARD_STATS_COUNT: `${BASE_URL}/customer/dashboard/stats-count`,
        LEADSOURCE_STATS: `${BASE_URL}/customer/dashboard/lead-source-stats`,
        LEADTEMPERATURE_STATS: `${BASE_URL}/customer/dashboard/lead-temperature-stats`,
        VISITER_CHART_STATS: `${BASE_URL}/customer/dashboard/visiter-chart-stats`,
        FOLLOWUP_CHART_STATS: `${BASE_URL}/customer/dashboard/followup-chart-stats`,
        LOCATION_STATS: `${BASE_URL}/customer/dashboard/customer-location-stats`,
        RADAR_CHART_STATS: `${BASE_URL}/customer/dashboard/radar-chart-stats`,
        GET_ALL: `${BASE_URL}/customer`,
        GET_CUSTOMER_FIELDS_VALUES: `${BASE_URL}/customer/get-customer-fields-values`,
        GET_ALL_TOTAL: `${BASE_URL}/customer/all`,
        GET_CUSTOMER_COUNT: `${BASE_URL}/customer/count`,
        GET_FAVOURITES_CUSTOMER: `${BASE_URL}/customer/favouriteS/all`,
        GET_TODAY_ALL: `${BASE_URL}/customer/today`,
        GET_BY_ID: (id)=>`${BASE_URL}/customer/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/customer?${params}`,
        CHECKDUPLICATES: `${BASE_URL}/customer/check-duplicates`,
        ADD: `${BASE_URL}/customer`,
        UPDATE: (id)=>`${BASE_URL}/customer/${id}`,
        DELETE: (id)=>`${BASE_URL}/customer/${id}`,
        DELETEALL: `${BASE_URL}/customer`,
        CUSTOMERIMPORT: `${BASE_URL}/customer/import`,
        CUSTOMEREXCELHEADERS: `${BASE_URL}/customer/import/headers`,
        ASSIGNCUSTOMER: `${BASE_URL}/customer/assign`,
        QUALIFYCUSTOMER: `${BASE_URL}/customer/qualification-agent`,
        DATAMINING: `${BASE_URL}/customer/data-mining`,
        RECOMENDCUSTOMER: `${BASE_URL}/customer/recommended-customers`,
        AGENTCALLING: `${BASE_URL}/customer/agent-call`,
        GETCALLLOGS: `${BASE_URL}/customer/getcalllogs`,
        GETCALLREPORT: `${BASE_URL}/customer/get-call-report`,
        DELETECALLLOG: (id)=>`${BASE_URL}/customer/delete-calllog/${id}`,
        GETCLOSEDDEAL: `${BASE_URL}/customer/closed-deals`,
        GET_CLOSEDDEAL_BY_PARAMS: (params)=>`${BASE_URL}/customer/closed-deals?${params}`,
        CLOSEDEAL: (id)=>`${BASE_URL}/customer/close-deal/${id}`,
        REOPENDEAL: (id)=>`${BASE_URL}/customer/reopen-deal/${id}`,
        GETARCHIEVEDCUSTOMER: `${BASE_URL}/customer/archived`,
        GET_ARCHIEVEDCUSTOMER_BY_PARAMS: (params)=>`${BASE_URL}/customer/archived?${params}`,
        ARCHIEVECUSTOMER: `${BASE_URL}/customer/archive`,
        UNARCHIEVECUSTOMER: `${BASE_URL}/customer/unarchive`,
        ADDSHORTLIST: `${BASE_URL}/customer/shortlist`,
        GETSHORTLIST: (id)=>`${BASE_URL}/customer/shortlist/${id}`,
        REMOVESHORTLIST: `${BASE_URL}/customer/shortlist`,
        UPDATESHORTLIST: `${BASE_URL}/customer/shortlist`
    },
    COMPANYPROJECTS: {
        GET_ALL: `${BASE_URL}/com/pro`,
        GET_BY_ID: (id)=>`${BASE_URL}/com/pro/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/com/pro?${params}`,
        ADD: `${BASE_URL}/com/pro`,
        UPDATE: (id)=>`${BASE_URL}/com/pro/${id}`,
        DELETE: (id)=>`${BASE_URL}/com/pro/${id}`
    },
    FOLLOWUPS: {
        CUSTOMER: {
            GET_ALL: `${BASE_URL}/cus/followup`,
            GET_CUSTOMER_FOLLOWUP: (id)=>`${BASE_URL}/cus/followup/customer/${id}`,
            GET_FOLLOWUP_By_ID: (id)=>`${BASE_URL}/cus/followup/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/cus/followup?${params}`,
            ADD: (id)=>`${BASE_URL}/cus/followup/${id}`,
            UPDATE: (id)=>`${BASE_URL}/cus/followup/${id}`,
            CUSTOMER_FOLLOWUP_DELETE: (id)=>`${BASE_URL}/cus/followup/customer/${id}`,
            FOLLOWUP_DELETE: (id)=>`${BASE_URL}/cus/followup/${id}`,
            ADDAIFOLLOWUP: `${BASE_URL}/cus/followup/aifollowup`
        },
        CONTACT: {
            GET_ALL: `${BASE_URL}/con/follow/add`,
            GET_CONTACT_FOLLOWUP: (id)=>`${BASE_URL}/con/follow/add/contact/${id}`,
            GET_FOLLOWUP_By_ID: (id)=>`${BASE_URL}/con/follow/add/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/con/follow/add?${params}`,
            ADD: (id)=>`${BASE_URL}/con/follow/add/${id}`,
            UPDATE: (id)=>`${BASE_URL}/con/follow/add/${id}`,
            CONTACT_FOLLOWUP_DELETE: (id)=>`${BASE_URL}/con/follow/add/contact/${id}`,
            FOLLOWUP_DELETE: (id)=>`${BASE_URL}/con/follow/add/${id}`
        }
    },
    SHEDULES: {
        GET_ALL: `${BASE_URL}/sch`,
        GET_BY_ID: (id)=>`${BASE_URL}/sch/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/sch?${params}`,
        ADD: `${BASE_URL}/sch`,
        UPDATE: (id)=>`${BASE_URL}/sch/${id}`,
        DELETE: `${BASE_URL}/sch`
    },
    TASK: {
        GET_ALL: `${BASE_URL}/task`,
        GET_BY_ID: (id)=>`${BASE_URL}/task/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/task?${params}`,
        ADD: `${BASE_URL}/task`,
        UPDATE: (id)=>`${BASE_URL}/task/${id}`,
        DELETE: `${BASE_URL}/task`
    },
    NOTIFICATIONS: {
        GET_ALL: `${BASE_URL}/notifications`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/notifications?${params}`,
        MARK_READ: (id)=>`${BASE_URL}/notifications/mark-read/${id}`,
        MARK_ALL_READ: `${BASE_URL}/notifications/mark-all-read`
    },
    AIAGENT: {
        GET_ALL: `${BASE_URL}/aiagent`,
        GET_BY_ID: (id)=>`${BASE_URL}/aiagent/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/aiagent?${params}`,
        ADD: `${BASE_URL}/aiagent`,
        UPDATE: (id)=>`${BASE_URL}/aiagent/${id}`,
        DELETE: (id)=>`${BASE_URL}/aiagent/${id}`,
        ASSIGNAIAGENT: `${BASE_URL}/aiagent/assign`,
        RUNWEBHOOKAGENT: `${BASE_URL}/aiagent/run-webhook-agent`,
        COMPARE_PRODUCT_PRICE: `${BASE_URL}/aiagent/compare-product-price`
    },
    TABBLY: {
        GETCURRENTAGENT: `${BASE_URL}/tabbly/current-agent`,
        GETAGENTVOICES: `${BASE_URL}/tabbly/agent-voices`,
        UPDATEAGENT: `${BASE_URL}/tabbly/update-agent`
    },
    SARVAM: {
        TRIGGER_CALL: `${BASE_URL}/sarvam/triggerCall`,
        SYNC_CALL_LOGS: `${BASE_URL}/sarvam/sync-call-logs`,
        AUDIO: `${BASE_URL}/sarvam/audio`,
        // New Config Routes
        CONFIG: `${BASE_URL}/sarvam/config`,
        CONFIG_SET_ACTIVE: (id)=>`${BASE_URL}/sarvam/config/${id}/active`,
        CALL_REPORT: `${BASE_URL}/sarvam/call-report`
    },
    SALESSCRIPT: {
        GET_ALL: `${BASE_URL}/salesscript`,
        GET_BY_ID: (id)=>`${BASE_URL}/salesscript/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/salesscript?${params}`,
        ADD: `${BASE_URL}/salesscript`,
        UPDATE: (id)=>`${BASE_URL}/salesscript/${id}`,
        DELETE: (id)=>`${BASE_URL}/salesscript/${id}`
    },
    SOCIALCONTENT: {
        REDDIT: {
            GET_BY_QUERY: (query)=>`${BASE_URL}/social-content/reddit/${query}`
        },
        FACEBOOK: {
            GET_ALL_POST: `${BASE_URL}/social-content/facebook`,
            GET_BY_QUERY: (query)=>`${BASE_URL}/social-content/facebook/${query}`,
            SCRAPP_NEW_POSTS: `${BASE_URL}/social-content/facebook/scrap-new`
        },
        INSTAGRAM: {
            GET_ALL_POST: `${BASE_URL}/social-content/instagram`,
            GET_BY_QUERY: (query)=>`${BASE_URL}/social-content/instagram/${query}`,
            SCRAPP_NEW_POSTS: `${BASE_URL}/social-content/instagram/scrap-new`
        },
        MINEDLEAD: {
            SAVE: `${BASE_URL}/social-content/minedlead/save`,
            GET: `${BASE_URL}/social-content/minedlead/get`,
            GET_BY_QUERY: (params)=>`${BASE_URL}/social-content/minedlead/get?${params}`,
            CONVERT: `${BASE_URL}/social-content/minedlead/convert`
        }
    },
    SOCIALMEDIA: {
        INSTAGRAM: {
            GET_LIVE_POST: `${BASE_URL}/social-auth/get-instagram-posts`,
            GET_ANALYTICS: `${BASE_URL}/social-auth/get-instagram-analytics`,
            DISCONNECT_ACCOUNT: `${BASE_URL}/social-auth/disconnect-instagram`,
            SCHEDULE_POST: `${BASE_URL}/social-auth/schedule-instagram-post`,
            GET_SCHEDULED_POST: (params)=>`${BASE_URL}/social-auth/scheduled-posts-data?platform=${params}`
        },
        FACEBOOK: {
            GET_LIVE_POST: `${BASE_URL}/social-auth/get-facebook-posts`,
            GET_ANALYTICS: `${BASE_URL}/social-auth/get-facebook-analytics`,
            DISCONNECT_ACCOUNT: `${BASE_URL}/social-auth/disconnect-facebook`,
            SCHEDULE_POST: `${BASE_URL}/social-auth/schedule-facebook-post`,
            GET_SCHEDULED_POST: (params)=>`${BASE_URL}/social-auth/scheduled-posts-data?platform=${params}`
        },
        WHATSAPP: {
            // Meta WhatsApp Endpoints
            CONNECT_META_WHATSAPP: `${BASE_URL}/social-auth/connect-meta-whatsapp`,
            DISCONNECT_META_WHATSAPP: `${BASE_URL}/social-auth/disconnect-meta-whatsapp`,
            CHECK_META_WHATSAPP_STATUS: `${BASE_URL}/social-auth/check-meta-whatsapp`
        },
        AUTOSOCIALAGENT: {
            RUN: `${BASE_URL}/social-auth/auto-social-agent`
        }
    },
    MASTERS: {
        CAMPAIGN: {
            GET_ALL: `${BASE_URL}/mas/cam`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/cam/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/cam?${params}`,
            ADD: `${BASE_URL}/mas/cam`,
            UPDATE: (id)=>`${BASE_URL}/mas/cam/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/cam/${id}`
        },
        TYPES: {
            GET_ALL: `${BASE_URL}/mas/type`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/type/${id}`,
            GET_ALL_BY_CAMPAIGN: (id)=>`${BASE_URL}/mas/type/campaign/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/type?${params}`,
            ADD: `${BASE_URL}/mas/type`,
            UPDATE: (id)=>`${BASE_URL}/mas/type/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/type/${id}`,
            DELETEALL: `${BASE_URL}/mas/type`
        },
        SUBTYPE: {
            GET_ALL: `${BASE_URL}/mas/sub`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/sub/${id}`,
            GET_ALL_BY_CAMPAIGN_AND_TYPE: (campaignid, typeid)=>`${BASE_URL}/mas/sub/filter/${campaignid}/${typeid}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/sub?${params}`,
            ADD: `${BASE_URL}/mas/sub`,
            UPDATE: (id)=>`${BASE_URL}/mas/sub/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/sub/${id}`,
            DELETEALL: `${BASE_URL}/mas/sub`
        },
        CITY: {
            GET_ALL: `${BASE_URL}/mas/city`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/city/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/city?${params}`,
            ADD: `${BASE_URL}/mas/city`,
            UPDATE: (id)=>`${BASE_URL}/mas/city/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/city/${id}`
        },
        LOCATION: {
            GET_ALL: `${BASE_URL}/mas/loc`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/loc/${id}`,
            GET_ALL_BY_CITY: (id)=>`${BASE_URL}/mas/loc/city/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/loc?${params}`,
            ADD: `${BASE_URL}/mas/loc`,
            UPDATE: (id)=>`${BASE_URL}/mas/loc/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/loc/${id}`,
            DELETEALL: `${BASE_URL}/mas/loc`
        },
        SUBLOCATION: {
            GET_ALL: `${BASE_URL}/mas/subloc`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/subloc/${id}`,
            GET_ALL_BY_CITY_LOCATION: (cityId, locationId)=>`${BASE_URL}/mas/subloc/cityloc/${cityId}/${locationId}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/subloc?${params}`,
            ADD: `${BASE_URL}/mas/subloc`,
            UPDATE: (id)=>`${BASE_URL}/mas/subloc/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/subloc/${id}`,
            DELETEALL: `${BASE_URL}/mas/subloc`
        },
        FACILITIES: {
            GET_ALL: `${BASE_URL}/mas/fac`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/fac/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/fac?${params}`,
            ADD: `${BASE_URL}/mas/fac`,
            UPDATE: (id)=>`${BASE_URL}/mas/fac/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/fac/${id}`
        },
        AMENITIES: {
            GET_ALL: `${BASE_URL}/mas/amen`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/amen/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/amen?${params}`,
            ADD: `${BASE_URL}/mas/amen`,
            UPDATE: (id)=>`${BASE_URL}/mas/amen/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/amen/${id}`
        },
        BUILDERSLIDERS: {
            GET_ALL: `${BASE_URL}/mas/buil`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/buil/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/buil?${params}`,
            ADD: `${BASE_URL}/mas/buil`,
            UPDATE: (id)=>`${BASE_URL}/mas/buil/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/buil/${id}`
        },
        FUNCTIONALAREA: {
            GET_ALL: `${BASE_URL}/mas/func`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/func/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/func?${params}`,
            ADD: `${BASE_URL}/mas/func`,
            UPDATE: (id)=>`${BASE_URL}/mas/func/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/func/${id}`
        },
        INDUSTRIES: {
            GET_ALL: `${BASE_URL}/mas/ind`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/ind/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/ind?${params}`,
            ADD: `${BASE_URL}/mas/ind`,
            UPDATE: (id)=>`${BASE_URL}/mas/ind/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/ind/${id}`
        },
        ROLE: {
            GET_ALL: `${BASE_URL}/mas/role`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/role/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/role?${params}`,
            ADD: `${BASE_URL}/mas/role`,
            UPDATE: (id)=>`${BASE_URL}/mas/role/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/role/${id}`
        },
        CONTACTCAMPAIGN: {
            GET_ALL: `${BASE_URL}/mas/contactcampaign`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/contactcampaign/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/contactcampaign?${params}`,
            ADD: `${BASE_URL}/mas/contactcampaign`,
            UPDATE: (id)=>`${BASE_URL}/mas/contactcampaign/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/contactcampaign/${id}`
        },
        CONTACTTYPE: {
            GET_ALL: `${BASE_URL}/mas/contacttype`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/contacttype/${id}`,
            GET_ALL_BY_CAMPAIGN: (id)=>`${BASE_URL}/mas/contacttype/campaign/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/contacttype?${params}`,
            ADD: `${BASE_URL}/mas/contacttype`,
            UPDATE: (id)=>`${BASE_URL}/mas/contacttype/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/contacttype/${id}`
        },
        REFERENCES: {
            GET_ALL: `${BASE_URL}/mas/ref`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/ref/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/ref?${params}`,
            ADD: `${BASE_URL}/mas/ref`,
            UPDATE: (id)=>`${BASE_URL}/mas/ref/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/ref/${id}`
        },
        LEADTYPE: {
            GET_ALL: `${BASE_URL}/mas/leadtype`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/leadtype/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/leadtype?${params}`,
            ADD: `${BASE_URL}/mas/leadtype`,
            UPDATE: (id)=>`${BASE_URL}/leadtype/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/leadtype/${id}`
        },
        PRICE: {
            GET_ALL: `${BASE_URL}/mas/price`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/price/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/price?${params}`,
            ADD: `${BASE_URL}/mas/price`,
            UPDATE: (id)=>`${BASE_URL}/mas/price/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/price/${id}`
        },
        CUSTOMERFIELDS: {
            GET_ALL: `${BASE_URL}/mas/customerFields`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/customerFields/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/customerFields?${params}`,
            ADD: `${BASE_URL}/mas/customerFields`,
            UPDATE: (id)=>`${BASE_URL}/mas/customerFields/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/customerFields/${id}`
        },
        // 🔹 NEW MASTER MODULES ADDED BELOW 🔹
        EXPENSES: {
            GET_ALL: `${BASE_URL}/mas/exp`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/exp/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/exp?${params}`,
            ADD: `${BASE_URL}/mas/exp`,
            UPDATE: (id)=>`${BASE_URL}/mas/exp/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/exp/${id}`
        },
        INCOME: {
            GET_ALL: `${BASE_URL}/mas/inc`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/inc/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/inc?${params}`,
            ADD: `${BASE_URL}/mas/inc`,
            UPDATE: (id)=>`${BASE_URL}/mas/inc/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/inc/${id}`
        },
        STATUSTYPE: {
            GET_ALL: `${BASE_URL}/mas/statustype`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/statustype/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/statustype?${params}`,
            ADD: `${BASE_URL}/mas/statustype`,
            UPDATE: (id)=>`${BASE_URL}/mas/statustype/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/statustype/${id}`
        },
        CONTACTSTATUSTYPE: {
            GET_ALL: `${BASE_URL}/mas/con/statustype`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/con/statustype/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/con/statustype?${params}`,
            ADD: `${BASE_URL}/mas/con/statustype`,
            UPDATE: (id)=>`${BASE_URL}/mas/con/statustype/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/con/statustype/${id}`
        },
        PAYMENTS: {
            GET_ALL: `${BASE_URL}/mas/payments`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/payments/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/payments?${params}`,
            ADD: `${BASE_URL}/mas/payments`,
            UPDATE: (id)=>`${BASE_URL}/mas/payments/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/payments/${id}`
        },
        SMS: {
            GET_ALL: `${BASE_URL}/mas/sms`,
            GET_BY_ID: (id)=>`${BASE_URL}/mas/sms/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/mas/sms?${params}`,
            ADD: `${BASE_URL}/mas/sms`,
            UPDATE: (id)=>`${BASE_URL}/mas/sms/${id}`,
            DELETE: (id)=>`${BASE_URL}/mas/sms/${id}`
        },
        MAIL: {
            GET_ALL: `${BASE_URL}/v1/templates?type=email`,
            GET_BY_ID: (id)=>`${BASE_URL}/v1/templates/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/v1/templates?${params}`,
            ADD: `${BASE_URL}/v1/templates`,
            UPDATE: (id)=>`${BASE_URL}/v1/templates/${id}`,
            DELETE: (id)=>`${BASE_URL}/v1/templates/${id}`,
            MAILALL: `${BASE_URL}/v1/messages/email`,
            FILEUPLOAD: `${BASE_URL}/v1/messages/uploads/file`,
            SEND_EMAIL_VIA_AI: `${BASE_URL}/v1/messages/send-email-via-ai`,
            EMAIL_CONNECTION: `${BASE_URL}/v1/messages/email-connection`,
            EMAIL_CONNECTION_TEST: `${BASE_URL}/v1/messages/email-connection/test`,
            EMAIL_CONNECTION_VERIFY: `${BASE_URL}/v1/messages/email-connection/verify`,
            EMAIL_CONNECTION_SEND_TEST: `${BASE_URL}/v1/messages/email-connection/send-test`
        },
        WHATSAPP: {
            GET_ALL: `${BASE_URL}/v1/templates?type=whatsapp`,
            GET_BY_ID: (id)=>`${BASE_URL}/v1/templates/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/v1/templates?${params}`,
            ADD: `${BASE_URL}/v1/templates`,
            UPDATE: (id)=>`${BASE_URL}/v1/templates/${id}`,
            DELETE: (id)=>`${BASE_URL}/v1/templates/${id}`,
            WHATSAPPALL: `${BASE_URL}/v1/messages/whatsapp`,
            WHATSAPP_CONNECTION_STATUS: `${BASE_URL}/v1/messages/whatsapp-connection-status`,
            WHATSAPP_CONNECTION_LOGOUT: `${BASE_URL}/v1/messages/whatsapp-connection-logout`,
            WHATSAPP_STOP_IDLE: `${BASE_URL}/v1/messages/whatsapp-stop-idle`,
            WHATSAPP_CONNECTION_PAIRING_CODE: `${BASE_URL}/v1/messages/whatsapp-connection-pairing-code`,
            WHATSAPP_PROPERTIES: `${BASE_URL}/v1/messages/whatsapp/send-properties`,
            WHATSAPP_DIRECT_MESSAGE: `${BASE_URL}/v1/messages/whatsapp/direct-message`
        },
        CALL: {
            CALLCUSTOMER: `${BASE_URL}/v1/messages/call`
        }
    },
    SETTINGS: {
        CUSTOMERFIELDLABEL: {
            GET_ALL: `${BASE_URL}/customerfieldlabels`,
            UPDATE: `${BASE_URL}/customerfieldlabels`
        }
    },
    FINANCIAL: {
        INCOMEMARKETING: {
            GET_ALL: `${BASE_URL}/fin/inc`,
            GET_BY_ID: (id)=>`${BASE_URL}/fin/inc/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/fin/inc?${params}`,
            ADD: `${BASE_URL}/fin/inc`,
            UPDATE: (id)=>`${BASE_URL}/fin/inc/${id}`,
            DELETE: (id)=>`${BASE_URL}/fin/inc/${id}`
        },
        EXPENSEMARKETING: {
            GET_ALL: `${BASE_URL}/fin/exp`,
            GET_BY_ID: (id)=>`${BASE_URL}/fin/exp/${id}`,
            GET_BY_PARAMS: (params)=>`${BASE_URL}/fin/exp?${params}`,
            ADD: `${BASE_URL}/fin/exp`,
            UPDATE: (id)=>`${BASE_URL}/fin/exp/${id}`,
            DELETE: (id)=>`${BASE_URL}/fin/exp/${id}`
        }
    },
    FAVOURITES: {
        GET_ALL: `${BASE_URL}/favourites`,
        GET_BY_ID: (id)=>`${BASE_URL}/favourites/${id}`,
        GET_BY_PARAMS: (params)=>`${BASE_URL}/favourites?${params}`,
        ADD: `${BASE_URL}/favourites`,
        UPDATE: (id)=>`${BASE_URL}/favourites/${id}`,
        DELETE: (id)=>`${BASE_URL}/favourites/${id}`
    },
    VIDEOPROJECT: {
        ADDPHOTOS: `${BASE_URL}/video-project/photos`,
        GENERATESCRIPT: `${BASE_URL}/video-project/script`,
        RENDER: `${BASE_URL}/video-project/render`
    },
    BRAND: {
        GET: `${BASE_URL}/brand/get`,
        UPDATE: `${BASE_URL}/brand/update`
    },
    ACTIVITY: {
        GETFEED: `${BASE_URL}/activity/feed`,
        GETSUMMARY: `${BASE_URL}/activity/summary`,
        GETUSERS: `${BASE_URL}/activity/users`,
        GETTIMELINE: (adminId)=>`${BASE_URL}/activity/timeline/${adminId}`,
        GETCUSTOMERS: `${BASE_URL}/activity/customers`,
        GETFOLLOWUPS: `${BASE_URL}/activity/followups`,
        GETRECORD: (entity, id)=>`${BASE_URL}/activity/record/${entity}/${id}`
    },
    ADMIN: {
        // Public Routes
        SIGNUP: `${BASE_URL}/admin/signup`,
        LOGIN: `${BASE_URL}/admin/login`,
        LOGOUT: `${BASE_URL}/admin/logout`,
        AI: {
            SAVE_API_KEY: `${BASE_URL}/admin/ai/save-api-key`,
            GET_ALL: `${BASE_URL}/admin/ai/get-all`,
            UPDATE_API_KEY: (id)=>`${BASE_URL}/admin/ai/update-api-key/${id}`,
            DELETE_API_KEY: (id)=>`${BASE_URL}/admin/ai/delete-api-key/${id}`
        },
        // Protected Routes
        CHECK: `${BASE_URL}/admin/check`,
        // 👤 Admin Management
        CREATE: `${BASE_URL}/admin/create`,
        GET_ALL: `${BASE_URL}/admin/all`,
        GET_BY_ID: (id)=>`${BASE_URL}/admin/${id}`,
        UPDATE_DETAILS: (id)=>`${BASE_URL}/admin/${id}/details`,
        UPDATE_PASSWORD: (id)=>`${BASE_URL}/admin/${id}/password`,
        DEVLOGIN: `${BASE_URL}/admin/mode/dev/login`,
        DELETE: (id)=>`${BASE_URL}/admin/${id}`,
        MY_ACTIVE_AGENTS: `${BASE_URL}/admin/my-active-agents`,
        GENERATE_CRM_API_KEY: `${BASE_URL}/admin/generate-crm-api-key`,
        DELETE_CRM_API_KEY: (keyId)=>`${BASE_URL}/admin/crm-api-key/${keyId}`,
        GET_CRM_API_KEYS: `${BASE_URL}/admin/crm-api-keys`
    },
    REQUESTUSER: {
        SIGNUP: `${BASE_URL}/user/newusersignup`,
        GET_ALL: `${BASE_URL}/user/newusers`,
        ACCEPTREQUEST: (id)=>`${BASE_URL}/user/newusers/${id}`,
        DENYREQUEST: (id)=>`${BASE_URL}/user/newusers/${id}`
    }
};
const API_URL = "http://localhost:5000";
}),
"[project]/src/store/brand/brand.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBrandSettings",
    ()=>getBrandSettings,
    "updateBrandSettings",
    ()=>updateBrandSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/ApiRoute.ts [app-route] (ecmascript)");
;
const getBrandSettings = async ()=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ROUTES"].BRAND.GET, {
            method: "GET",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
const updateBrandSettings = async (formData)=>{
    try {
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$ApiRoute$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ROUTES"].BRAND.UPDATE, {
            method: "PUT",
            credentials: "include",
            body: formData
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};
}),
"[project]/src/config/defaultBrand.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/config/defaultBrand.ts
__turbopack_context__.s([
    "DEFAULT_BRAND",
    ()=>DEFAULT_BRAND
]);
const DEFAULT_BRAND = {
    appName: "Prime Consultancy Leads",
    shortName: "ibigdata",
    themeColor: "#ffffff",
    backgroundColor: "#ffffff",
    // Default static asset paths in your /public folder
    faviconUrl: "/icons/favicon.ico",
    logoTextUrl: "/propertytextlogo.png",
    logoIconUrl: "/propertyiconlogo.png",
    splashScreenUrl: "/icons/icon-192x192.png",
    icon192Url: "/icons/icon-192x192.png",
    icon512Url: "/icons/icon-512x512.png"
};
}),
"[project]/src/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$brand$2f$brand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/brand/brand.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$defaultBrand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/defaultBrand.ts [app-route] (ecmascript)");
;
;
const dynamic = "force-dynamic";
// 1. Changed to c_pad so rectangular/wide logos are padded into a perfect square instead of cropped
function getCloudinaryPngUrl(url, size) {
    if (!url || !url.includes("res.cloudinary.com")) return url;
    return url.replace(/(\/upload\/)(v\d+\/)?/, `$1w_${size},h_${size},c_pad,f_png/$2`);
}
async function manifest() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$brand$2f$brand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBrandSettings"])();
    const settings = res?.data;
    const rawFavicon = settings?.faviconUrl || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$defaultBrand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_BRAND"].faviconUrl;
    // 2. Pick the raw URL first
    const raw192 = settings?.icon192Url || rawFavicon;
    const raw512 = settings?.splashScreenUrl || settings?.icon512Url || rawFavicon;
    // 3. ALWAYS pass both URLs through Cloudinary to guarantee exact 192x192 and 512x512 dimensions
    const icon192 = getCloudinaryPngUrl(raw192, 192);
    const icon512 = getCloudinaryPngUrl(raw512, 512);
    return {
        name: settings?.appName || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$defaultBrand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_BRAND"].appName,
        short_name: settings?.shortName || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$defaultBrand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_BRAND"].shortName,
        description: `${settings?.appName || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$defaultBrand$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_BRAND"].appName} Application`,
        start_url: "/",
        display: "standalone",
        background_color: settings?.backgroundColor || "#ffffff",
        theme_color: settings?.themeColor || "#ffffff",
        icons: [
            {
                src: icon192,
                sizes: "192x192",
                type: "image/png",
                purpose: "any"
            },
            {
                src: icon512,
                sizes: "512x512",
                type: "image/png",
                purpose: "any"
            }
        ]
    };
}
}),
"[project]/src/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/src/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "dynamic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamic"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37e76b8c._.js.map