"use client";

import React, { useEffect, useState } from "react";
// Import your API helper (adjust the path if needed)
import { getFilteredWhatsapp } from "@/store/masters/whatsapp/whatsapp"; 

type CRMTemplate = {
    id: string;
    _id?: string;
    name: string;
    body: string;
    status: string;
    metaName: string;
    whatsappImage?: string | string[]; 
    whatsappMediaType?: string;
};

type MetaTemplate = {
    name: string;
    status: "APPROVED" | "PENDING" | "REJECTED";
};

const extractImageUrl = (imageField: any): string | null => {
    try {
        const parsed = typeof imageField === "string" ? JSON.parse(imageField) : imageField;
        if (Array.isArray(parsed) && parsed.length > 0) return parsed[0];
        return null;
    } catch {
        return null;
    }
};

export default function MetaWhatsAppTemplatePicker({
    isOpen,
    onClose,
    onSend,
}: {
    isOpen: boolean;
    onClose: () => void;
    // 🛑 FIX: Updated type to accept both templateId and templateName
    onSend: (templateId: string, templateName: string) => void;
}) {
    const [crmTemplates, setCrmTemplates] = useState<CRMTemplate[]>([]);
    const [metaTemplates, setMetaTemplates] = useState<Record<string, MetaTemplate>>({});
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"verified" | "unverified">("verified");
    
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [isSubmitting, setIsSubmitting] = useState(false);

    const loadTemplates = async () => {
        setLoading(true);
        try {
            // 1. Fetch CRM Templates using your helper
            const crmData = await getFilteredWhatsapp("?type=whatsapp&limit=50");
            
            const mappedCrm = (crmData?.data || []).map((t: any) => ({
                ...t,
                id: t._id || t.id, 
                metaName: t.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')
            }));
            setCrmTemplates(mappedCrm);

            // 2. Fetch Meta Statuses
            const metaRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/meta-templates`, { credentials: "include" });
            const metaData = await metaRes.json();
            
            const metaMap: Record<string, MetaTemplate> = {};
            (metaData.metaTemplates || []).forEach((t: MetaTemplate) => {
                metaMap[t.name] = t;
            });
            setMetaTemplates(metaMap);
        } catch (err) {
            console.error("Failed to load templates", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            loadTemplates();
            setSelectedIds(new Set());
        }
    }, [isOpen]);

    const handleBulkVerify = async () => {
        if (selectedIds.size === 0) return;
        setIsSubmitting(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/verify-meta-template`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ templateIds: Array.from(selectedIds) }) 
            });
            const data = await res.json();
            
            if (data.success) {
                const failed = data.results.filter((r: any) => !r.success);
                if (failed.length > 0) {
                    alert(`Submitted with issues. ${failed.length} failed. Check console for details.`);
                    console.warn("Meta Rejections:", failed);
                } else {
                    alert("Successfully submitted to Meta! They will be pending review.");
                }
                setSelectedIds(new Set());
                loadTemplates();
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Verification submission failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleSelect = (id: string) => {
        if (!id) return;
        setSelectedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    if (!isOpen) return null;

    const verified = crmTemplates.filter(t => metaTemplates[t.metaName]?.status === "APPROVED");
    const unverified = crmTemplates.filter(t => metaTemplates[t.metaName]?.status !== "APPROVED");
    const displayList = activeTab === "verified" ? verified : unverified;

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col h-[85vh] overflow-hidden" onClick={e => e.stopPropagation()}>
                
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between shrink-0">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        WhatsApp Templates
                    </h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-800 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                {/* Tabs & Bulk Action Bar */}
                <div className="flex items-center justify-between border-b border-gray-200 shrink-0 px-4 bg-white">
                    <div className="flex">
                        <button 
                            onClick={() => { setActiveTab("verified"); setSelectedIds(new Set()); }}
                            className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'verified' ? 'border-[#25D366] text-[#128C7E]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        >
                            Verified ({verified.length})
                        </button>
                        <button 
                            onClick={() => setActiveTab("unverified")}
                            className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'unverified' ? 'border-amber-500 text-amber-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        >
                            Needs Verification ({unverified.length})
                        </button>
                    </div>

                    {/* Bulk Submit Button */}
                    {activeTab === "unverified" && selectedIds.size > 0 && (
                        <button 
                            onClick={handleBulkVerify}
                            disabled={isSubmitting}
                            className="mr-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm disabled:opacity-50 transition-colors flex items-center gap-2"
                        >
                            {isSubmitting ? "Submitting..." : `Verify ${selectedIds.size} Selected`}
                        </button>
                    )}
                </div>

                {/* Grid Body */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                    {loading ? (
                        <p className="text-center text-gray-400 py-20 text-sm font-medium animate-pulse">Syncing templates with Meta...</p>
                    ) : displayList.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-sm">No templates found in this section.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayList.map(t => {
                                const metaStatus = metaTemplates[t.metaName]?.status || "NOT_SUBMITTED";
                                const imageUrl = t.whatsappMediaType === "image" ? extractImageUrl(t.whatsappImage) : null;
                                const isSelected = selectedIds.has(t.id);
                                
                                return (
                                    <div 
                                        key={t.id} 
                                        onClick={() => activeTab === "unverified" && metaStatus !== 'PENDING' ? toggleSelect(t.id) : null}
                                        className={`bg-white border-2 rounded-2xl overflow-hidden flex flex-col transition-all ${
                                            isSelected ? "border-amber-500 shadow-md" : 
                                            activeTab === "unverified" && metaStatus !== 'PENDING' ? "border-gray-200 cursor-pointer hover:border-amber-300 hover:shadow-sm" : 
                                            "border-gray-200 shadow-sm"
                                        }`}
                                    >
                                        <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 shrink-0">
                                            <div className="min-w-0 pr-2">
                                                <h3 className="font-bold text-gray-900 text-sm truncate">{t.name}</h3>
                                                <p className="text-[10px] font-mono text-gray-400 truncate">{t.metaName}</p>
                                            </div>
                                            
                                            {activeTab === "verified" ? (
                                                <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-md bg-green-100 text-green-700 tracking-wide shrink-0">Approved</span>
                                            ) : metaStatus === 'PENDING' ? (
                                                <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-md bg-blue-100 text-blue-700 tracking-wide shrink-0">Reviewing</span>
                                            ) : (
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${isSelected ? 'bg-amber-500 border-amber-500' : 'bg-white border-gray-300'}`}>
                                                    {isSelected && <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex-1 p-4 bg-[#EFEAE2] relative" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                                            <div className="bg-white rounded-2xl rounded-tl-sm p-1.5 shadow-sm inline-block max-w-[95%]">
                                                {imageUrl && (
                                                    <img src={imageUrl} alt="Template media" className="w-full h-32 object-cover rounded-xl mb-2 bg-gray-100" />
                                                )}
                                                {t.whatsappMediaType === "document" && (
                                                    <div className="w-full bg-gray-100 rounded-xl p-3 flex items-center gap-2 mb-2">
                                                        <span className="p-2 bg-indigo-100 text-indigo-500 rounded-lg"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg></span>
                                                        <span className="text-xs font-semibold text-gray-700 truncate">Document</span>
                                                    </div>
                                                )}
                                                
                                                <div className="px-1.5 pb-1 text-[13px] text-gray-800 whitespace-pre-wrap leading-relaxed break-words line-clamp-6">
                                                    {t.body}
                                                </div>
                                            </div>
                                        </div>

                                        {activeTab === "verified" && (
                                            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                                                <button 
                                                    // 🛑 FIX: Pass BOTH the template ID and the template Name
                                                    onClick={() => { onSend(t.id, t.metaName); onClose(); }}
                                                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-bold rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                                    Send Template
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}