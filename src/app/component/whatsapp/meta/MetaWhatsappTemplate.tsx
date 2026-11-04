"use client";

import React, { useEffect, useState } from "react";
import { getFilteredWhatsapp } from "@/store/masters/whatsapp/whatsapp";
import { getFilteredCustomer } from "@/store/customer"; 

type MetaTemplate = {
    name: string;
    status: "APPROVED" | "PENDING" | "REJECTED";
};

type CRMTemplate = {
    id: string;
    _id?: string;
    name: string;
    body: string;
    category: string;
    whatsappMediaType: string;
    whatsappImage: any;
    metaName: string;
};

export default function MetaWhatsAppTemplates({ adminId }: { adminId: string }) {
    const [templates, setTemplates] = useState<CRMTemplate[]>([]);
    const [metaStatuses, setMetaStatuses] = useState<Record<string, MetaTemplate>>({});
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<"APPROVED" | "PENDING" | "UNVERIFIED">("APPROVED");

    // Modal State
    const [sendModalOpen, setSendModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<CRMTemplate | null>(null);
    
    // Customer Selection State (Reused logic from Campaign)
    const [customers, setCustomers] = useState<any[]>([]);
    const [custSearch, setCustSearch] = useState("");
    const [custPage, setCustPage] = useState(0);
    const [isLoadingCust, setIsLoadingCust] = useState(false);
    const [hasMoreCust, setHasMoreCust] = useState(true);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<Set<string>>(new Set());
    const [isSending, setIsSending] = useState(false);
    const [isVerifyingId, setIsVerifyingId] = useState<string | null>(null);

    const loadData = async () => {
        setLoading(true);
        try {
            // 1. Fetch CRM Templates
            const crmData = await getFilteredWhatsapp("?type=whatsapp&limit=100");
            const mappedCrm = (crmData?.data || []).map((t: any) => ({
                ...t,
                id: t._id || t.id,
                metaName: t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')
            }));
            setTemplates(mappedCrm);

            // 2. Fetch Meta Statuses
            const metaRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/meta-templates`, { credentials: "include" });
            const metaData = await metaRes.json();
            
            const metaMap: Record<string, MetaTemplate> = {};
            (metaData.metaTemplates || []).forEach((t: MetaTemplate) => {
                metaMap[t.name] = t;
            });
            setMetaStatuses(metaMap);
        } catch (err) {
            console.error("Failed to load templates", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // --- Customer Loading Logic for Modal ---
    const loadCustomers = async (page: number, search: string, append: boolean = false) => {
        setIsLoadingCust(true);
        try {
            const limit = 50;
            const skip = page * limit;
            let query = `?Limit=${limit}&Skip=${skip}`;
            if (search) query += `&Keyword=${encodeURIComponent(search)}`;
            
            const data = await getFilteredCustomer(query);
            if (Array.isArray(data)) {
                setCustomers(prev => append ? [...prev, ...data] : data);
                setHasMoreCust(data.length === limit);
            }
        } catch (err) {
            console.error("Failed to load customers");
        } finally {
            setIsLoadingCust(false);
        }
    };

    useEffect(() => {
        if (!sendModalOpen) return;
        const timer = setTimeout(() => {
            setCustPage(0);
            loadCustomers(0, custSearch, false);
        }, 400);
        return () => clearTimeout(timer);
    }, [custSearch, sendModalOpen]);

    // --- Actions ---
    const handleOpenSend = (t: CRMTemplate) => {
        setSelectedTemplate(t);
        setSelectedCustomerIds(new Set());
        setCustSearch("");
        setSendModalOpen(true);
    };

    const handleSendTemplate = async () => {
        if (selectedCustomerIds.size === 0 || !selectedTemplate) return alert("Select at least one recipient.");
        setIsSending(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/send-meta-template`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
        } finally {
            setIsSending(false);
        }
    };

    const handleVerify = async (templateId: string) => {
        setIsVerifyingId(templateId);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/verify-meta-template`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ templateId })
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
        } finally {
            setIsVerifyingId(null);
        }
    };

    // Filter Logic
    const filteredTemplates = templates.filter(t => {
        const metaStatus = metaStatuses[t.metaName]?.status;
        if (activeFilter === "APPROVED") return metaStatus === "APPROVED";
        if (activeFilter === "PENDING") return metaStatus === "PENDING";
        return metaStatus !== "APPROVED" && metaStatus !== "PENDING"; // Unverified or Rejected
    });

    return (
        <div className="flex-1 flex flex-col p-8 bg-gray-50 text-gray-900">
            {/* Header & Tabs */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">WhatsApp Templates</h2>
                    <p className="text-gray-500 text-sm font-medium">Manage and send approved templates to your customers.</p>
                </div>
                <button onClick={loadData} className="p-2 text-gray-400 hover:text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm transition-all" title="Refresh Statuses">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                </button>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-3 mb-6">
                <button onClick={() => setActiveFilter("APPROVED")} className={`px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'APPROVED' ? 'bg-[#25D366] text-white border-[#25D366] shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-[#25D366]/50'}`}>
                    Verified
                </button>
                <button onClick={() => setActiveFilter("PENDING")} className={`px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'PENDING' ? 'bg-blue-500 text-white border-blue-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-500/50'}`}>
                    In Review
                </button>
                <button onClick={() => setActiveFilter("UNVERIFIED")} className={`px-5 py-2 text-sm font-bold rounded-full border transition-all ${activeFilter === 'UNVERIFIED' ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-amber-500/50'}`}>
                    Unverified
                </button>
            </div>

            {/* Template Grid */}
            <div className="flex-1 overflow-y-auto pb-6">
                {loading ? (
                    <p className="text-center text-gray-400 py-10 font-medium animate-pulse">Syncing templates with Meta...</p>
                ) : filteredTemplates.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
                        <p className="text-gray-500 font-medium">No templates found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map(t => (
                            <div key={t.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                {/* Card Header */}
                                <div className="p-4 border-b border-gray-100 flex justify-between items-start bg-gray-50/50 shrink-0">
                                    <div className="pr-3 min-w-0">
                                        <h3 className="font-bold text-gray-900 truncate">{t.name}</h3>
                                        <div className="flex gap-2 mt-1.5">
                                            <span className="px-2 py-0.5 text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md uppercase tracking-wider">
                                                {t.category || "GENERAL"}
                                            </span>
                                            {activeFilter === "UNVERIFIED" && metaStatuses[t.metaName]?.status === "REJECTED" && (
                                                <span className="px-2 py-0.5 text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 rounded-md uppercase tracking-wider">REJECTED</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0 pt-0.5">
                                        {activeFilter === "APPROVED" && <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] block shadow-sm" title="Approved"></span>}
                                        {activeFilter === "PENDING" && <span className="w-2.5 h-2.5 rounded-full bg-blue-500 block shadow-sm animate-pulse" title="Reviewing"></span>}
                                        {activeFilter === "UNVERIFIED" && <span className="w-2.5 h-2.5 rounded-full bg-gray-300 block" title="Unverified"></span>}
                                    </div>
                                </div>

                                {/* Card Body (Preview) */}
                                <div className="p-5 flex-1 bg-[#efeae2] relative" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                                    <div className="bg-white rounded-2xl rounded-tl-sm p-2 shadow-sm inline-block w-full">
                                        {t.whatsappMediaType === "image" && (
                                            <div className="w-full h-24 bg-gray-100 rounded-xl mb-2 flex items-center justify-center border border-gray-100">
                                                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                                            </div>
                                        )}
                                        {t.whatsappMediaType === "document" && (
                                            <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-2.5 flex items-center gap-2 mb-2">
                                                <span className="p-1.5 bg-indigo-100 text-indigo-500 rounded-lg"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></span>
                                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Document</span>
                                            </div>
                                        )}
                                        <div className="px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words line-clamp-4">
                                            {t.body.replace(/\{\{.+?\}\}/g, "[...] ")}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Actions */}
                                <div className="p-4 border-t border-gray-100 bg-white shrink-0">
                                    {activeFilter === "APPROVED" && (
                                        <button onClick={() => handleOpenSend(t)} className="w-full py-2.5 bg-white border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                            Use Template
                                        </button>
                                    )}
                                    {activeFilter === "PENDING" && (
                                        <button disabled className="w-full py-2.5 bg-gray-100 text-gray-400 text-sm font-bold rounded-xl cursor-not-allowed">
                                            In Review
                                        </button>
                                    )}
                                    {activeFilter === "UNVERIFIED" && (
                                        <button onClick={() => handleVerify(t.id)} disabled={isVerifyingId === t.id} className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-50">
                                            {isVerifyingId === t.id ? "Submitting..." : "Submit for Review"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* SEND MODAL */}
            {sendModalOpen && selectedTemplate && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[85vh]">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center shrink-0">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Send Template</h2>
                                <p className="text-xs text-gray-500 font-medium mt-0.5">{selectedTemplate.name}</p>
                            </div>
                            <button onClick={() => setSendModalOpen(false)} className="text-gray-400 hover:text-gray-800 text-2xl transition-colors">×</button>
                        </div>

                        <div className="p-5 overflow-y-auto flex-1 bg-gray-50/50">
                            <div className="flex flex-col h-[400px]">
                                <div className="flex justify-between items-end mb-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Select Recipients ({selectedCustomerIds.size})
                                    </label>
                                    {selectedCustomerIds.size > 0 && (
                                        <button onClick={() => setSelectedCustomerIds(new Set())} className="text-xs font-bold text-indigo-600 hover:text-indigo-800">Clear All</button>
                                    )}
                                </div>
                                
                                <input 
                                    value={custSearch} 
                                    onChange={e => setCustSearch(e.target.value)} 
                                    placeholder="Search by name or phone..." 
                                    className="w-full bg-white border border-gray-200 rounded-t-xl px-4 py-2.5 text-sm outline-none focus:border-[#25D366] transition-all shadow-sm border-b-0"
                                />
                                
                                <div className="bg-white border border-gray-200 rounded-b-xl flex-1 overflow-y-auto p-2 shadow-sm relative">
                                    {isLoadingCust && customers.length === 0 ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white/50"><span className="text-sm font-medium text-gray-400">Loading...</span></div>
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
                                                        className="w-4 h-4 rounded bg-gray-100 border-gray-300 text-[#25D366] focus:ring-[#25D366] focus:ring-offset-0 cursor-pointer"
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
                                                    {isLoadingCust ? "Loading..." : "Load More"}
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-2xl">
                            <button onClick={() => setSendModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">Cancel</button>
                            <button onClick={handleSendTemplate} disabled={isSending || selectedCustomerIds.size === 0} className="px-6 py-2.5 text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl disabled:opacity-50 shadow-md transition-all">
                                {isSending ? "Sending..." : `Send to ${selectedCustomerIds.size} users`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}