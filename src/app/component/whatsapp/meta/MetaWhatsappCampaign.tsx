// MetaWhatsAppCampaigns.tsx
"use client";

import React, { useEffect, useState } from "react";
import { getFilteredWhatsapp } from "@/store/masters/whatsapp/whatsapp";
import { getFilteredCustomer } from "@/store/customer";
import { API_ROUTES } from "@/constants/ApiRoute";

type CampaignSession = {
    id: string;
    status: string;
    totalRecipients: number;
    sent: number;
    delivered: number;
    read: number;
    replied: number;
    failed: number;
    startedAt: string;
};

type Campaign = {
    id: string;
    name: string;
    status: "DRAFT" | "COMPLETED" | "SCHEDULED";
    createdAt: string;
    templateId: string;
    sessions: CampaignSession[];
};

const metaParts = (t: any) => {
    const comps: any[] = t?.components || [];
    const header = comps.find((c) => c.type === "HEADER");
    return {
        headerFormat: (header?.format as string) ?? null,
        headerText: header?.format === "TEXT" ? (header.text as string) : null,
        headerImage: header?.format === "IMAGE" ? ((header.example?.header_handle?.[0] as string) ?? null) : null,
        body: (comps.find((c) => c.type === "BODY")?.text as string) ?? "",
        footer: (comps.find((c) => c.type === "FOOTER")?.text as string) ?? "",
    };
};

const firstImage = (field: any): string | null => {
    try {
        const parsed = typeof field === "string" ? JSON.parse(field) : field;
        return Array.isArray(parsed) && typeof parsed[0] === "string" && parsed[0] ? parsed[0] : null;
    } catch {
        return typeof field === "string" && field.startsWith("http") ? field : null;
    }
};

export default function MetaWhatsAppCampaigns({ adminId }: { adminId: string }) {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);

    // --- UI State ---
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [viewingInsights, setViewingInsights] = useState<Campaign | null>(null);

    // --- Form State ---
    const [name, setName] = useState("");
    const [selectedTemplateId, setSelectedTemplateId] = useState("");
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<Set<string>>(new Set());
    const [isSubmitting, setIsSubmitting] = useState(false);

    // --- Customer Pagination State ---
    const [customers, setCustomers] = useState<any[]>([]);
    const [custSearch, setCustSearch] = useState("");
    const [custPage, setCustPage] = useState(0);
    const [isLoadingCust, setIsLoadingCust] = useState(false);
    const [hasMoreCust, setHasMoreCust] = useState(true);

    // --- Template State ---
    const [verifiedTemplates, setVerifiedTemplates] = useState<any[]>([]);
    const [templatesLoading, setTemplatesLoading] = useState(false);
    const [headerMediaUrl, setHeaderMediaUrl] = useState(""); // public link for image/video/document headers of Meta-only templates
    const [metaOnlyTemplates, setMetaOnlyTemplates] = useState<any[]>([]); // approved in Meta, but no CRM template with that name
    
    // Compute selected template for preview
    const activeTemplate = verifiedTemplates.find(t => (t.id || t._id) === selectedTemplateId);
    const activeMeta = selectedTemplateId.startsWith("meta:") ? metaOnlyTemplates.find((t) => `meta:${t.name}` === selectedTemplateId) : null;
    const mp = activeMeta ? metaParts(activeMeta) : null;

    // 1. Fetch Main Dashboard
    const loadDashboard = async () => {
        setLoading(true);
        try {
            const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.META_CAMPAIGNS, { credentials: "include" });
            const data = await res.json();
            if (data.success) setCampaigns(data.campaigns);
        } catch (err) {
            console.error("Failed to load campaigns", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    // 2. Fetch Templates (Cross-referencing CRM with Meta APPROVED status)
    const loadTemplates = async () => {
        setTemplatesLoading(true);
        try {
            const crmData = await getFilteredWhatsapp("?type=whatsapp&limit=100");
            const crmTemplates = crmData?.data || [];

            const metaRes = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.GET_META_TEMPLATES, { credentials: "include" });
            const metaData = await metaRes.json();

            // Extract names of templates that Meta explicitly marks as APPROVED
            const approvedMetaNames = new Set(
                (metaData.metaTemplates || [])
                    .filter((t: any) => t.status === "APPROVED")
                    .map((t: any) => t.name)
            );

            // Filter CRM templates to only include those Meta approved
            const approvedTemplates = crmTemplates.filter((t: any) => {
                const metaName = t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_');
                return approvedMetaNames.has(metaName);
            });

            setVerifiedTemplates(approvedTemplates);

            const crmMetaNames = new Set(crmTemplates.map((t: any) => t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')));
            setMetaOnlyTemplates((metaData.metaTemplates || []).filter((t: any) => t.status === "APPROVED" && !crmMetaNames.has(t.name)));
        } catch (err) {
            console.error("Failed to load templates", err);
        } finally {
            setTemplatesLoading(false);
        }
    };

    // 3. Fetch Customers (Paginated & Searchable)
    const loadCustomers = async (page: number, search: string, append: boolean = false) => {
        setIsLoadingCust(true);
        try {
            const limit = 50;
            const skip = page * limit;
            let query = `?Limit=${limit}&Skip=${skip}`;
            if (search) query += `&Keyword=${encodeURIComponent(search)}`;
            
            const data = await getFilteredCustomer(query);
            // Assuming data is an array based on your backend controller return
            if (Array.isArray(data)) {
                setCustomers(prev => append ? [...prev, ...data] : data);
                setHasMoreCust(data.length === limit);
            }
        } catch (err) {
            console.error("Failed to load customers", err);
        } finally {
            setIsLoadingCust(false);
        }
    };

    // Debounce Customer Search
    useEffect(() => {
        if (!isCreateModalOpen) return;
        const timer = setTimeout(() => {
            setCustPage(0);
            loadCustomers(0, custSearch, false);
        }, 400);
        return () => clearTimeout(timer);
    }, [custSearch, isCreateModalOpen]);

    const handleOpenCreateModal = () => {
        setName("");
        setSelectedTemplateId("");
        setHeaderMediaUrl("");
        setSelectedCustomerIds(new Set());
        setCustSearch("");
        setCustPage(0);
        loadTemplates();
        setIsCreateModalOpen(true);
    };

    // 4. CRUD Actions
    const handleCreateDraft = async () => {
        if (!name || !selectedTemplateId) return alert("Please provide a name and select a verified template.");
        if (selectedCustomerIds.size === 0) return alert("Please select at least one recipient.");
        const needsMedia = !!activeMeta && !!mp?.headerFormat && mp.headerFormat !== "TEXT";
        if (needsMedia && !/^https?:\/\//i.test(headerMediaUrl.trim())) {
            return alert("Enter a public https link for the template's media header.");
        }

        setIsSubmitting(true);
        try {
            const res = await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.META_CAMPAIGNS, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    // CRM templates are sent by id; templates that only exist in Meta are sent by name
                    ...(activeMeta
                        ? { templateName: activeMeta.name, ...(needsMedia ? { headerMediaUrl: headerMediaUrl.trim(), headerFormat: mp!.headerFormat } : {}) }
                        : { templateId: selectedTemplateId }),
                    targetIds: Array.from(selectedCustomerIds),
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data.success === false) return alert(data.message || "Could not create the campaign draft.");
            setIsCreateModalOpen(false);
            loadDashboard();
        } catch {
            alert("Could not create the campaign draft. Check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleStartCampaign = async (campaignId: string) => {
        if (!confirm("Are you sure you want to execute this campaign now?")) return;
        try {
            await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.START_META_CAMPAIGN(campaignId), {
                method: "POST", credentials: "include"
            });
            loadDashboard();
        } catch (err) {
            alert("Failed to start campaign.");
        }
    };

    const handleDelete = async (campaignId: string) => {
        if (!confirm("Delete this draft permanently?")) return;
        try {
            await fetch(API_ROUTES.SOCIALMEDIA.WHATSAPP.DELETE_META_CAMPAIGN(campaignId), {
                method: "DELETE", credentials: "include"
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
        return (
            <div className="flex-1 flex flex-col p-8 bg-gray-50 text-gray-900 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => setViewingInsights(null)} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium shadow-sm">
                        ← Back
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{viewingInsights.name}</h2>
                        <p className="text-sm text-gray-500 font-medium mt-0.5">Executed on {session ? new Date(session.startedAt).toLocaleString() : 'N/A'}</p>
                    </div>
                </div>

                {session ? (
                    <div className="grid grid-cols-5 gap-5 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Total Recipients</p>
                            <p className="text-4xl font-black text-gray-900">{session.totalRecipients}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-2">Delivered</p>
                            <p className="text-4xl font-black text-blue-600">{session.delivered}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-purple-500 text-xs font-bold uppercase tracking-wider mb-2">Read</p>
                            <p className="text-4xl font-black text-purple-600">{session.read}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-emerald-500 text-xs font-bold uppercase tracking-wider mb-2">Replied</p>
                            <p className="text-4xl font-black text-emerald-600">{session.replied}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm bg-red-50/30">
                            <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">Failed</p>
                            <p className="text-4xl font-black text-red-600">{session.failed}</p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-10 rounded-2xl border border-gray-200 text-center">
                        <p className="text-gray-500 font-medium">No session execution data found yet.</p>
                    </div>
                )}
            </div>
        );
    }

    // ==========================================
    // VIEW: MAIN CAMPAIGN LIST (Light Mode)
    // ==========================================
    return (
        <div className="flex-1 flex flex-col p-8 bg-gray-50 text-gray-900">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Bulk Campaigns</h2>
                    <p className="text-gray-500 text-sm font-medium">Plan, schedule, and track WhatsApp broadcast messages.</p>
                </div>
                <button onClick={handleOpenCreateModal} className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-sm transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                    New Campaign
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {loading ? (
                    <p className="text-center text-gray-400 py-10 font-medium animate-pulse">Loading campaigns...</p>
                ) : campaigns.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
                        <p className="text-gray-500 font-medium">No campaigns created yet.</p>
                    </div>
                ) : campaigns.map(c => (
                    <div key={c.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <div className="flex items-center gap-3 mb-1.5">
                                <h3 className="font-bold text-lg text-gray-900">{c.name}</h3>
                                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                                    c.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 
                                    c.status === 'DRAFT' ? 'bg-amber-100 text-amber-700' : 
                                    'bg-blue-100 text-blue-700'
                                }`}>
                                    {c.status}
                                </span>
                            </div>
                            <p className="text-xs font-medium text-gray-500">Created {new Date(c.createdAt).toLocaleDateString()}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            {c.status === "DRAFT" ? (
                                <>
                                    <button onClick={() => handleDelete(c.id)} className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-100">Delete</button>
                                    <button onClick={() => handleStartCampaign(c.id)} className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-lg transition-colors shadow-sm">Start Now</button>
                                </>
                            ) : (
                                <button onClick={() => setViewingInsights(c)} className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-100">View Insights</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* ========================================== */}
            {/* MODAL: CREATE CAMPAIGN (Light Mode) */}
            {/* ========================================== */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
                        
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center shrink-0 bg-gray-50/50 rounded-t-2xl">
                            <h2 className="text-xl font-bold text-gray-900">Create Bulk Campaign</h2>
                            <button onClick={() => setIsCreateModalOpen(false)} className="text-gray-400 hover:text-gray-800 text-2xl transition-colors">×</button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1 flex flex-col md:flex-row gap-8 bg-gray-50/30">
                            
                            {/* Left Column: Form & Customers */}
                            <div className="flex-1 space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Campaign Name *</label>
                                    <input 
                                        value={name} 
                                        onChange={e => setName(e.target.value)} 
                                        placeholder="e.g. Diwali Sale 2026" 
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm" 
                                    />
                                </div>

                                {/* Template Selection */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Template (Meta Verified) *</label>
                                    <select 
                                        value={selectedTemplateId} 
                                        onChange={e => {
                                            const v = e.target.value;
                                            setSelectedTemplateId(v);
                                            const m = v.startsWith("meta:") ? metaOnlyTemplates.find((t) => `meta:${t.name}` === v) : null;
                                            setHeaderMediaUrl(m ? metaParts(m).headerImage ?? "" : "");
                                        }} 
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm appearance-none font-medium text-gray-700"
                                    >
                                        <option value="" disabled>{templatesLoading ? "Loading templates..." : verifiedTemplates.length + metaOnlyTemplates.length === 0 ? "No approved templates found" : "-- Select an Approved Template --"}</option>
                                        {verifiedTemplates.length > 0 && (
                                            <optgroup label="Your templates">
                                                {verifiedTemplates.map(t => (
                                                    <option key={t.id || t._id} value={t.id || t._id}>{t.name}</option>
                                                ))}
                                            </optgroup>
                                        )}
                                        {metaOnlyTemplates.length > 0 && (
                                            <optgroup label="Approved in Meta">
                                                {metaOnlyTemplates.map(t => (
                                                    <option key={t.name} value={`meta:${t.name}`}>{t.name}</option>
                                                ))}
                                            </optgroup>
                                        )}
                                    </select>
                                    {!templatesLoading && verifiedTemplates.length + metaOnlyTemplates.length === 0 && (
                                        <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
                                            <p className="font-semibold">Meta has no approved templates for this account yet.</p>
                                            <p className="mt-1">Submit a template from the Templates tab and wait for approval.</p>
                                        </div>
                                    )}
                                    {mp && mp.headerFormat && mp.headerFormat !== "TEXT" && (
                                        <div className="mt-3">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                                {mp.headerFormat.charAt(0) + mp.headerFormat.slice(1).toLowerCase()} header links *
                                            </label>
                                            <input
                                                value={headerMediaUrl}
                                                onChange={e => setHeaderMediaUrl(e.target.value)}
                                                placeholder="https://..."
                                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm"
                                            />
                                            <p className="mt-1.5 text-xs text-gray-500">
                                                This template needs a public link to its {mp.headerFormat.toLowerCase()}.
                                                {mp.headerImage ? " It is prefilled with Meta's sample image; replace it with your own." : ""}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Customer Selection with Search & Pagination */}
                                <div className="flex flex-col h-[350px]">
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            Recipients ({selectedCustomerIds.size} Selected)
                                        </label>
                                        {selectedCustomerIds.size > 0 && (
                                            <button onClick={() => setSelectedCustomerIds(new Set())} className="text-xs font-bold text-indigo-600 hover:text-indigo-800">Clear</button>
                                        )}
                                    </div>
                                    
                                    <input 
                                        value={custSearch} 
                                        onChange={e => setCustSearch(e.target.value)} 
                                        placeholder="Search customers by name, phone, or keyword..." 
                                        className="w-full bg-white border border-gray-200 rounded-t-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500 transition-all shadow-sm border-b-0"
                                    />
                                    
                                    <div className="bg-white border border-gray-200 rounded-b-xl flex-1 overflow-y-auto p-2 shadow-sm relative">
                                        {isLoadingCust && customers.length === 0 ? (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/50"><span className="text-sm font-medium text-gray-400">Searching...</span></div>
                                        ) : customers.length === 0 ? (
                                            <p className="text-sm text-gray-500 p-4 text-center font-medium">No customers found.</p>
                                        ) : (
                                            <>
                                                {customers.map(c => (
                                                    <label key={c.id || c._id} className="flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedCustomerIds.has(c.id || c._id)}
                                                            onChange={(e) => {
                                                                const next = new Set(selectedCustomerIds);
                                                                if (e.target.checked) next.add(c.id || c._id);
                                                                else next.delete(c.id || c._id);
                                                                setSelectedCustomerIds(next);
                                                            }}
                                                            className="w-4 h-4 rounded bg-gray-100 border-gray-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 cursor-pointer"
                                                        />
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-semibold text-gray-900 truncate">{c.customerName || c.Name || "Unknown"}</p>
                                                            <p className="text-xs text-gray-500 font-medium">{c.ContactNumber}</p>
                                                        </div>
                                                    </label>
                                                ))}
                                                {hasMoreCust && (
                                                    <button 
                                                        onClick={() => {
                                                            const nextPage = custPage + 1;
                                                            setCustPage(nextPage);
                                                            loadCustomers(nextPage, custSearch, true);
                                                        }}
                                                        disabled={isLoadingCust}
                                                        className="w-full mt-2 py-2 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                                                    >
                                                        {isLoadingCust ? "Loading..." : "Load More Customers"}
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Template Preview */}
                            <div className="w-full md:w-80 shrink-0 flex flex-col">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message Preview</label>
                                <div className="flex-1 bg-[#efeae2] border border-gray-200 rounded-2xl p-4 shadow-inner relative" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                                    {mp ? (
                                        <div className="bg-white rounded-2xl rounded-tl-sm p-1.5 shadow-sm inline-block w-full">
                                            {mp.headerFormat === "IMAGE" && (headerMediaUrl || mp.headerImage) && (
                                                <div className="w-full h-32 bg-gray-100 rounded-xl mb-2 overflow-hidden">
                                                    <img src={headerMediaUrl || (mp.headerImage as string)} alt="Template header" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                                                </div>
                                            )}
                                            {mp.headerText && <p className="px-1.5 pb-1 text-[14px] font-bold text-gray-900">{mp.headerText}</p>}
                                            <div className="px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words">
                                                {mp.body.replace(/\{\{.+?\}\}/g, "[Customer Name]")}
                                            </div>
                                            {mp.footer && <p className="px-1.5 pb-1 text-[11px] text-gray-400">{mp.footer}</p>}
                                        </div>
                                    ) : activeTemplate ? (
                                        <div className="bg-white rounded-2xl rounded-tl-sm p-1.5 shadow-sm inline-block w-full">
                                            {activeTemplate.whatsappMediaType === "image" && firstImage(activeTemplate.whatsappImage) && (
                                                <div className="w-full h-32 bg-gray-100 rounded-xl mb-2 flex items-center justify-center overflow-hidden">
                                                    <img src={firstImage(activeTemplate.whatsappImage) as string} alt="Template header" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                                                </div>
                                            )}
                                            {activeTemplate.whatsappMediaType === "document" && (
                                                <div className="w-full bg-gray-100 rounded-xl p-3 flex items-center gap-2 mb-2">
                                                    <span className="p-2 bg-indigo-100 text-indigo-500 rounded-lg"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></span>
                                                    <span className="text-xs font-semibold text-gray-700 truncate">Document Attached</span>
                                                </div>
                                            )}
                                            <div className="px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words">
                                                {/* Simulate Dynamic Variable Replacement for Preview */}
                                                {activeTemplate.body.replace(/\{\{.+?\}\}/g, "[Customer Name]")}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-center p-4">
                                            <p className="text-sm text-gray-400 font-medium">Select a verified template to see the preview here.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-2xl">
                            <button onClick={() => setIsCreateModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">Cancel</button>
                            <button onClick={handleCreateDraft} disabled={isSubmitting} className="px-6 py-2.5 text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl disabled:opacity-50 shadow-md transition-all">
                                {isSubmitting ? "Saving Draft..." : "Create Campaign Draft"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}