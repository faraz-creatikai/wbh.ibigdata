"use client";

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Plus, Edit2, Trash2, CheckCircle, Radio, X, Bot, FileText } from 'lucide-react';

// Assuming you exported these from your api service file:
import {
    getCallingConfigs,
    createCallingConfig,
    updateCallingConfig,
    deleteCallingConfig,
    setActiveCallingConfig,
} from '@/store/sarvam/sarvam'; // Adjust path as needed
import { CallingAgentConfigPayload, CallingAgentConfigResponse } from '@/store/sarvam/sarvam.interface';

export default function SarvamConfigManager() {
    const [configs, setConfigs] = useState<CallingAgentConfigResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Modal States
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // Selected Data
    const [selectedConfig, setSelectedConfig] = useState<CallingAgentConfigResponse | null>(null);
    const [formData, setFormData] = useState<CallingAgentConfigPayload | any>({
        name: '', description: '', // NEW FIELDS
        apiKey: '', orgId: '', workspaceId: '', appId: '',
        appVersion: 12, connectionId: '', callerNumber: '', transferNumber: '', isActive: false
    });

    // Load Data
    const fetchConfigs = async () => {
        setIsLoading(true);
        const data = await getCallingConfigs();
        setConfigs(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchConfigs();
    }, []);

    // Handlers
    const handleOpenAdd = () => {
        setSelectedConfig(null);
        setFormData({
            name: '', description: '',
            apiKey: '', orgId: '', workspaceId: '', appId: '',
            appVersion: 12, connectionId: '', callerNumber: '', transferNumber: '', isActive: configs.length === 0
        });
        setIsFormOpen(true);
    };

    const handleOpenEdit = (config: CallingAgentConfigResponse) => {
        setSelectedConfig(config);
        setFormData({ ...config });
        setIsFormOpen(true);
    };

    const handleOpenDelete = (config: CallingAgentConfigResponse) => {
        setSelectedConfig(config);
        setIsDeleteOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const toastId = toast.loading(selectedConfig ? "Updating config..." : "Saving config...");

        try {
            let success = false;
            // Ensure appVersion is sent as a number even if it was temporarily stringified
            const payloadToSubmit = { ...formData, appVersion: Number(formData.appVersion) };

            if (selectedConfig) {
                const res = await updateCallingConfig(selectedConfig.id, payloadToSubmit);
                if (res) success = true;
            } else {
                const res = await createCallingConfig(payloadToSubmit);
                if (res) success = true;
            }

            if (success) {
                toast.success(`Configuration ${selectedConfig ? 'updated' : 'added'} successfully!`, { id: toastId });
                setIsFormOpen(false);
                fetchConfigs();
            } else {
                toast.error("Action failed. Please check your inputs.", { id: toastId });
            }
        } catch (error) {
            toast.error("Something went wrong.", { id: toastId });
        }
    };

    const handleDelete = async () => {
        if (!selectedConfig) return;
        const toastId = toast.loading("Deleting configuration...");

        const success = await deleteCallingConfig(selectedConfig.id);
        if (success) {
            toast.success("Configuration deleted.", { id: toastId });
            setIsDeleteOpen(false);
            fetchConfigs();
        } else {
            toast.error("Failed to delete configuration.", { id: toastId });
        }
    };

    const handleSetActive = async (id: string) => {
        const toastId = toast.loading("Setting active agent...");
        const success = await setActiveCallingConfig(id);
        if (success) {
            toast.success("Active agent switched successfully!", { id: toastId });
            fetchConfigs();
        } else {
            toast.error("Failed to switch active agent.", { id: toastId });
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-3 md:p-6 text-[var(--color-primary-darker)]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-[var(--color-primary-dark)]">Sarvam AI Agents</h1>
                    <p className="text-xs md:text-sm text-[var(--color-primary)]">Manage your voice agent credentials and active versions.</p>
                </div>
                <button
                    onClick={handleOpenAdd}
                    className="flex items-center cursor-pointer gap-1.5 px-3 py-2 md:px-4 md:py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-sm font-medium rounded-lg shadow-sm transition-colors w-full sm:w-auto justify-center"
                >
                    <Plus size={18} /> Add Agent
                </button>
            </div>

            {/* List / Cards */}
            {isLoading ? (
                <div className="flex justify-center py-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary)]"></div></div>
            ) : configs.length === 0 ? (
                <div className="text-center py-12 bg-[var(--color-primary-lighter)] rounded-xl border border-[var(--color-primary-light)]">
                    <Radio className="mx-auto h-10 w-10 text-[var(--color-accent)] mb-2" />
                    <h3 className="text-sm font-semibold text-[var(--color-primary-darker)]">No agents configured</h3>
                    <p className="text-xs text-[var(--color-primary)] mt-1">Add your first Sarvam credential to start calling.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {configs.map((config) => (
                        <div
                            key={config.id}
                            className={`p-3 md:p-4 rounded-xl border relative transition-all ${config.isActive ? 'bg-[var(--color-primary-lighter)] border-[var(--color-primary)] shadow-sm' : 'bg-white border-[var(--color-primary-light)] opacity-80 hover:opacity-100'}`}
                        >
                            {/* Status Badge & Actions */}
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    {config.isActive ? (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-white">
                                            <CheckCircle size={10} /> Active
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() => handleSetActive(config.id)}
                                            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)] transition-colors cursor-pointer"
                                        >
                                            Set Active
                                        </button>
                                    )}
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => handleOpenEdit(config)} className="p-1.5 text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-md transition-colors cursor-pointer">
                                        <Edit2 size={14} />
                                    </button>
                                    <button onClick={() => handleOpenDelete(config)} className="p-1.5 text-[var(--color-destructive)] hover:bg-red-50 rounded-md transition-colors cursor-pointer">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Name and Description */}
                            <div className="mb-4 pb-3 border-b border-[var(--color-primary-light)]">
                                <h3 className="text-base font-bold text-[var(--color-primary-darker)] flex items-center gap-1.5 mb-1">
                                    <Bot size={16} className="text-[var(--color-primary)]" />
                                    {config.name || "Unnamed Agent"}
                                </h3>
                                {config.description ? (
                                    <p className="text-xs text-gray-500 leading-snug line-clamp-2">{config.description}</p>
                                ) : (
                                    <p className="text-xs italic text-gray-400">No description provided.</p>
                                )}
                            </div>

                            {/* Details */}
                            <div className="space-y-1.5 text-xs md:text-sm">
                                <div className="flex justify-between pb-1.5">
                                    <span className="text-[var(--color-primary)] font-medium">App ID</span>
                                    <span className="font-mono text-[var(--color-primary-darker)] truncate max-w-[140px]" title={config.appId}>{config.appId}</span>
                                </div>
                                <div className="flex justify-between pb-1.5">
                                    <span className="text-[var(--color-primary)] font-medium">App Version</span>
                                    <span className="font-mono text-[var(--color-primary-darker)]">v{config.appVersion}</span>
                                </div>
                                <div className="flex justify-between pb-1.5">
                                    <span className="text-[var(--color-primary)] font-medium">Caller Number</span>
                                    <span className="font-mono text-[var(--color-primary-darker)]">{config.callerNumber}</span>
                                </div>
                                <div className="flex justify-between pb-1.5">
                                    <span className="text-[var(--color-primary)] font-medium">Transfer Number</span>
                                    <span className="font-mono text-[var(--color-primary-darker)]">{config.transferNumber}</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-[var(--color-primary)] font-medium">API Key</span>
                                    <span className="font-mono text-[var(--color-primary-darker)]">...{config.apiKey.slice(-5)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

         {/* FORM MODAL (Add/Edit) */}
            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
                    {/* WIDTH: max-w-lg on phones/small screens, max-w-3xl from md (768px) up */}
                    <div className="bg-white w-full max-w-lg md:max-w-3xl rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[96dvh]">

                        {/* HEADER */}
                        <div className="shrink-0 flex justify-between items-center p-3 md:p-4 border-b border-[var(--color-primary-light)] bg-[var(--color-primary-lighter)]">
                            <h2 className="text-base md:text-lg font-bold text-[var(--color-primary-dark)]">
                                {selectedConfig ? 'Edit Agent Config' : 'New Agent Config'}
                            </h2>
                            <button onClick={() => setIsFormOpen(false)} className="p-1 text-[var(--color-primary-darker)] hover:bg-[var(--color-primary-light)] rounded-md cursor-pointer">
                                <X size={20} />
                            </button>
                        </div>

                        {/* The form is a flex column: scrolling fields on top, fixed footer at the bottom */}
                        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">

                            {/* SCROLLING FIELDS (padding and scroll live here) */}
                            <div className="flex-1 min-h-0 overflow-y-auto p-3 md:p-5 space-y-2.5 md:space-y-4 custom-scrollbar">
                                {/* GRID: 1 column on phones, 2 on sm, 3 on md and up */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">

                                    {/* UI Name & Description Fields (side by side on md+) */}
                                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Agent Name <span className="text-red-400">*</span></label>
                                        <div className="relative">
                                            <Bot size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-9 pr-3 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-shadow" placeholder="e.g. Rahul - Sales Team" />
                                        </div>
                                    </div>

                                    <div className="col-span-1 sm:col-span-2 md:col-span-2">
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Description (Optional)</label>
                                        <div className="relative">
                                            <FileText size={16} className="absolute left-3 top-3 text-gray-400" />
                                            <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full pl-9 pr-3 py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-shadow min-h-[60px] md:min-h-[38px] resize-none" placeholder="e.g. Hindi speaking, aggressive pitch..." />
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {/*   <div className="col-span-1 sm:col-span-2 my-2 border-b border-gray-100"></div> */}

                                    {/* Sarvam API Fields */}
                                    <div className="col-span-1 sm:col-span-2 md:col-span-3">
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">API Key <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.apiKey} onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="sk_samvaad_..." />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Org ID <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.orgId} onChange={(e) => setFormData({ ...formData, orgId: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Workspace ID <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.workspaceId} onChange={(e) => setFormData({ ...formData, workspaceId: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">App ID <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.appId} onChange={(e) => setFormData({ ...formData, appId: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="Agent-Name-..." />
                                    </div>

                                    {/* THE FIX IS HERE */}
                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">App Version <span className="text-red-400">*</span></label>
                                        <input
                                            required
                                            type="number"
                                            min="1"
                                            value={formData.appVersion || ''}
                                            onChange={(e) => {
                                                const val = parseInt(e.target.value, 10);
                                                setFormData({ ...formData, appVersion: isNaN(val) ? '' : val });
                                            }}
                                            className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Connection ID <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.connectionId} onChange={(e) => setFormData({ ...formData, connectionId: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Caller Number <span className="text-red-400">*</span></label>
                                        <input required type="text" value={formData.callerNumber} onChange={(e) => setFormData({ ...formData, callerNumber: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="+91..." />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] md:text-xs font-semibold text-[var(--color-primary-dark)] uppercase mb-1">Transfer Number</label>
                                        <input type="text" value={formData.transferNumber} onChange={(e) => setFormData({ ...formData, transferNumber: e.target.value })} className="w-full px-2.5 py-1.5 md:py-2 text-sm border border-[var(--color-primary-light)] rounded-md focus:outline-none focus:border-[var(--color-primary)]" placeholder="+91..." />
                                    </div>

                                    {/* Moved INTO the grid so it shares the last row with Transfer Number
                                        instead of adding another row below. Logic is unchanged. */}
                                    {!selectedConfig?.isActive && (
                                        <label className="col-span-1 sm:col-span-1 md:col-span-2 flex items-center gap-2 pt-1 sm:pt-0 sm:self-end sm:pb-2 cursor-pointer">
                                            <input type="checkbox" checked={formData.isActive} onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })} className="w-4 h-4 text-[var(--color-primary)] rounded border-[var(--color-primary-light)] focus:ring-[var(--color-primary)] cursor-pointer" />
                                            <span className="text-xs md:text-sm font-medium text-[var(--color-primary-darker)]">Set as Active Agent immediately</span>
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* FOOTER: outside the scroll area, so it always sits on the bottom edge.
                                pb-[calc(...)] keeps the buttons clear of the iPhone home bar. */}
                            <div className="shrink-0 flex gap-2 p-3 md:px-5 md:py-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] border-t border-[var(--color-primary-light)] bg-white">
                                <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 md:flex-none md:ml-auto px-4 md:px-6 py-2 text-sm font-medium bg-[var(--color-primary-lighter)] text-[var(--color-primary-darker)] rounded-md hover:bg-[var(--color-primary-light)] transition-colors cursor-pointer">
                                    Cancel
                                </button>
                                <button type="submit" className="flex-1 md:flex-none px-4 md:px-6 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm cursor-pointer">
                                    {selectedConfig ? 'Save Changes' : 'Add Agent'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* DELETE MODAL */}
            {isDeleteOpen && selectedConfig && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-sm rounded-xl shadow-xl overflow-hidden p-4 md:p-6 text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Trash2 className="text-[var(--color-destructive)]" size={24} />
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 mb-1">Delete Configuration?</h2>
                        <p className="text-sm text-gray-500 mb-5">
                            Are you sure you want to delete the configuration for <strong>{selectedConfig.name}</strong>? This action cannot be undone.
                        </p>
                        <div className="flex gap-2">
                            <button onClick={() => setIsDeleteOpen(false)} className="flex-1 px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="flex-1 px-4 py-2 text-sm font-medium bg-[var(--color-destructive)] text-white rounded-md hover:bg-red-500 transition-colors shadow-sm cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}