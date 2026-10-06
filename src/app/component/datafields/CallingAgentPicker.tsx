"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bot, Check, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
// Update this import to wherever you saved your API functions:
import { getCallingConfigs, setActiveCallingConfig } from "@/store/sarvam/sarvam"; 
import { CallingAgentConfigResponse } from "@/store/sarvam/sarvam.interface";

export default function CallingAgentPicker() {
    const [configs, setConfigs] = useState<CallingAgentConfigResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isSwitching, setIsSwitching] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Fetch configs on mount
    useEffect(() => {
        loadConfigs();
    }, []);

    const loadConfigs = async () => {
        setIsLoading(true);
        try {
            const data = await getCallingConfigs();
            setConfigs(data || []);
        } catch (error) {
            console.error("Failed to load agents", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const activeAgent = configs.find(c => c.isActive);

    const handleSelect = async (id: string) => {
        if (activeAgent?.id === id) {
            setIsOpen(false);
            return;
        }

        setIsSwitching(true);
        try {
            const success = await setActiveCallingConfig(id);
            if (success) {
                toast.success("Active AI Agent switched successfully!");
                await loadConfigs(); // Reload to get updated active status
            } else {
                toast.error("Failed to switch active agent.");
            }
        } catch (error) {
            toast.error("An error occurred while switching agents.");
        } finally {
            setIsSwitching(false);
            setIsOpen(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500">
                <Loader2 size={14} className="animate-spin" /> Loading agents...
            </div>
        );
    }

    if (configs.length === 0) {
        return (
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-xl text-xs font-bold text-red-600">
                {/* <Bot size={14} /> */} <img src="/taskbot.png" alt="Agent" className="w-6 h-6" /> No Agents Configured
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {/* TRIGGER BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isSwitching}
                className="flex items-center justify-between gap-3 min-w-[200px] w-full sm:w-auto px-3 py-2 bg-white border border-gray-200 hover:border-[var(--color-primary)] rounded-xl shadow-sm transition-all disabled:opacity-70 cursor-pointer"
            >
                <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[var(--color-primary-lighter)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                       {/*  <Bot size={14} /> */}<img src="/taskbot.png" alt="Agent" className="w-6 h-6"  />
                    </div>
                    <div className="flex flex-col items-start text-left min-w-0">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide leading-none mb-0.5">Active Agent</span>
                        <span className="text-sm font-extrabold text-gray-800 truncate max-w-[140px] leading-none">
                            {isSwitching ? "Switching..." : activeAgent ? activeAgent.name : "Select Agent"}
                        </span>
                    </div>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* DROPDOWN MENU */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-[280px] sm:w-[320px] bg-white border border-gray-100 shadow-xl rounded-2xl z-[100] overflow-hidden">
                    <div className="p-3 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Available Agents</h3>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-2 space-y-1">
                        {configs.map((config) => (
                            <button
                                key={config.id}
                                onClick={() => handleSelect(config.id)}
                                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left cursor-pointer ${
                                    config.isActive 
                                    ? "bg-[var(--color-primary-lighter)] border-[var(--color-primary-light)] border shadow-sm" 
                                    : "bg-white hover:bg-gray-50 border border-transparent"
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                    config.isActive ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-500"
                                }`}>
                                    {/* <Bot size={14} /> */}
                                    <img src="/taskbot.png" alt="Agent" className="w-7 h-7"  />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <span className={`text-sm font-bold truncate ${config.isActive ? "text-[var(--color-primary-dark)]" : "text-gray-800"}`}>
                                            {config.name}
                                        </span>
                                        {config.isActive && <Check size={14} className="text-[var(--color-primary)] shrink-0 ml-2" />}
                                    </div>
                                    {config.description && (
                                        <span className="block text-[11px] text-gray-500 leading-snug line-clamp-2">
                                            {config.description}
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}