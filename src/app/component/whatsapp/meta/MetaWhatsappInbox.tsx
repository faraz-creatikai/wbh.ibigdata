"use client";

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { getSocket, initSocket } from "@/socket/socket";
import { getCustomer } from "@/store/customer"; // Adjust import to your CRM logic
import MetaWhatsAppTemplatePicker from "@/app/component/whatsapp/meta/MetaWhatsappTemplatePicker";

type Msg = { id: string; phoneKey: string; waId: string; fromMe: boolean; type: string; body: string; status: string; timestamp: string; mediaUrl?: string | null; };
type ChatSummary = { phoneKey: string; body: string; type: string; fromMe: boolean; timestamp: string; unread: number; };
type Cust = { id: string; name: string; phone: string; key: string; };

const fmt = (iso: string) => {
    const d = new Date(iso);
    const t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return d.toDateString() === new Date().toDateString() ? t : `${d.toLocaleDateString([], { day: '2-digit', month: 'short' })}, ${t}`;
};

export default function MetaWhatsAppInbox({ adminId }: { adminId: string }) {
    const [customers, setCustomers] = useState<Cust[]>([]);
    const [chats, setChats] = useState<Record<string, ChatSummary>>({});
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [search, setSearch] = useState("");
    const [text, setText] = useState("");
    const [sending, setSending] = useState(false);
    const [showTemplatePicker, setShowTemplatePicker] = useState(false);

    const activeRef = useRef<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const nearBottomRef = useRef(true);

    // 1. Initial Data Load
    useEffect(() => {
        const loadInitialData = async () => {
            try {
                // Fetch Customers from CRM
                const res: any = await getCustomer();
                const mappedCustomers = (res || []).map((c: any) => ({
                    id: c._id ?? c.id,
                    name: c.customerName || c.Name || "Unknown",
                    phone: c.ContactNumber || "",
                    key: String(c.ContactNumber || "").replace(/\D/g, "").slice(-10),
                })).filter((c: Cust) => c.key);
                setCustomers(mappedCustomers);

                // Fetch Meta Inbox Summary
                const sumRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/meta-inbox/summary`, { credentials: "include" });
                const sumData = await sumRes.json();

                const chatMap: Record<string, ChatSummary> = {};
                sumData.chats?.forEach((c: ChatSummary) => { chatMap[c.phoneKey] = c; });
                setChats(chatMap);
            } catch (err) {
                console.error("Failed to load inbox data", err);
            }
        };
        loadInitialData();
    }, []);

    // 2. Real-Time Socket Connection
    useEffect(() => {
        if (!adminId) return;
        const socket = getSocket() ?? initSocket(adminId);
        if (!socket) return;

        const onMsg = (m: Msg) => {
            const isActive = m.phoneKey === activeRef.current;

            // Update sidebar summary
            setChats((prev) => ({
                ...prev,
                [m.phoneKey]: {
                    phoneKey: m.phoneKey, body: m.body, type: m.type, fromMe: m.fromMe, timestamp: m.timestamp,
                    unread: isActive ? 0 : (prev[m.phoneKey]?.unread || 0) + (m.fromMe ? 0 : 1),
                },
            }));

            // Append to active chat
            if (isActive) {
                setMessages((prev) => (prev.some((x) => x.id === m.id) ? prev : [...prev, m]));
                if (!m.fromMe) {
                    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/meta-inbox/chat/${m.phoneKey}/read`, { method: "POST", credentials: "include" }).catch(() => { });
                }
            }
        };

        const onTick = ({ waId, status }: { waId: string; status: string }) => {
            setMessages((prev) => prev.map((x) => (x.waId === waId ? { ...x, status } : x)));
        };

        socket.on("whatsapp:message", onMsg);
        socket.on("whatsapp:message_status", onTick);

        return () => {
            socket.off("whatsapp:message", onMsg);
            socket.off("whatsapp:message_status", onTick);
        };
    }, [adminId]);

    // 3. Auto-Scroll Chat
    useLayoutEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        if (nearBottomRef.current) {
            el.scrollTop = el.scrollHeight;
        }
    }, [messages]);

    // 4. Interaction Handlers
    const openChat = async (key: string) => {
        activeRef.current = key;
        setActiveKey(key);
        nearBottomRef.current = true;
        setMessages([]);
        setChats((prev) => (prev[key] ? { ...prev, [key]: { ...prev[key], unread: 0 } } : prev));

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/meta-inbox/chat/${key}`, { credentials: "include" });
            const data = await res.json();
            if (activeRef.current === key) setMessages(data.messages || []);
        } catch (err) {
            console.error("Failed to load chat history", err);
        }
    };

    const handleSend = async () => {
        if (!text.trim() || !activeKey || sending) return;
        setSending(true);

        const activeCust = customers.find(c => c.key === activeKey);
        const toPhone = activeCust?.phone || activeKey; // Fallback to key if phone missing

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/send-meta-message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ toPhone, messageBody: text }),
            });

            if (res.ok) {
                setText("");
            }
        } catch (err) {
            console.error("Failed to send", err);
        } finally {
            setSending(false);
        }
    };

    // Derived State: Filter and Sort Sidebar
    const list = useMemo(() => {
        const q = search.trim().toLowerCase();

        return customers
            // 1. STRICT FILTER: Only show contacts that exist in the chats summary
            .filter((c) => chats[c.key])
            // 2. SEARCH FILTER: Apply the user's search query
            .filter((c) => !q || c.name.toLowerCase().includes(q) || c.phone.includes(q))
            // 3. SORT: Most recent messages at the top
            .sort((a, b) => {
                const timeA = chats[a.key]?.timestamp || "";
                const timeB = chats[b.key]?.timestamp || "";
                return timeB.localeCompare(timeA);
            });
    }, [customers, search, chats]);

    const activeCust = customers.find((c) => c.key === activeKey);

    return (
        <div className="flex h-[600px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            {/* LEFT: Sidebar */}
            <div className="w-[320px] shrink-0 border-r border-gray-200 flex flex-col bg-gray-50/30">
                <div className="p-4 border-b border-gray-100">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search conversations..."
                        className="w-full text-sm px-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all shadow-sm"
                    />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {list.length === 0 ? (
                        <p className="text-center text-sm text-gray-400 mt-10">No conversations found.</p>
                    ) : (
                        list.map((c) => {
                            const chat = chats[c.key];
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => openChat(c.key)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 transition-colors text-left ${activeKey === c.key ? 'bg-emerald-50' : 'hover:bg-gray-50'}`}
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 text-[#128C7E] flex items-center justify-center font-bold text-sm">
                                        {c.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <p className="text-[13px] font-semibold text-gray-900 truncate">{c.name}</p>
                                            <span className="text-[10px] text-gray-400">{chat ? fmt(chat.timestamp) : ""}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-[12px] text-gray-500 truncate pr-2">
                                                {chat?.fromMe && <span className="text-gray-400 mr-1">You:</span>}
                                                {chat?.body || (chat?.type !== 'text' ? `Sent a ${chat?.type}` : "")}
                                            </p>
                                            {chat?.unread > 0 && (
                                                <span className="shrink-0 min-w-[18px] h-[18px] px-1 rounded-full bg-[#25D366] text-white text-[10px] font-bold flex items-center justify-center">
                                                    {chat.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            );
                        })
                    )}
                </div>
            </div>

            {/* RIGHT: Chat Window */}
            <div className="flex-1 flex flex-col bg-[#efeae2] relative" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                {!activeKey ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                        <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-[#25D366]">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" /></svg>
                        </div>
                        <p className="font-medium">Select a conversation to start messaging</p>
                    </div>
                ) : (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 px-5 py-3 flex items-center gap-3 shrink-0 z-10 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#128C7E] flex items-center justify-center font-bold text-sm">
                                {activeCust?.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 leading-tight">{activeCust?.name}</h3>
                                <p className="text-xs text-gray-500">{activeCust?.phone}</p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            onScroll={(e) => {
                                const el = e.currentTarget;
                                nearBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
                            }}
                            className="flex-1 overflow-y-auto p-5 space-y-3"
                        >
                            {messages.length === 0 ? (
                                <p className="text-center text-xs text-gray-400 mt-10">No messages yet. Send a message to start the chat.</p>
                            ) : (
                                messages.map((m) => (
                                    <div key={m.id} className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[70%] px-4 py-2 shadow-sm text-[13px] ${m.fromMe ? 'bg-[#DCF8C6] rounded-2xl rounded-tr-sm' : 'bg-white rounded-2xl rounded-tl-sm border border-gray-100'}`}>
                                            <p className="text-gray-800 whitespace-pre-wrap break-words leading-relaxed">{m.body}</p>
                                            <p className="text-[10px] text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
                                                {fmt(m.timestamp)}
                                                {m.fromMe && (
                                                    <span className={m.status === 'read' ? 'text-sky-500' : 'text-gray-400'}>
                                                        {m.status === 'sent' ? '✓' : '✓✓'}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="bg-white px-4 py-3 border-t border-gray-200 shrink-0 flex items-end gap-2 relative">

                            {/* Attachment / Template Button */}
                            <button
                                onClick={() => setShowTemplatePicker(true)}
                                className="w-10 h-10 shrink-0 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 flex items-center justify-center transition-colors border border-gray-200 mb-1"
                                title="Send Template"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </button>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                                disabled={sending}
                                placeholder="Type a message..."
                                rows={1}
                                className="flex-1 resize-none bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all max-h-32 shadow-inner"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!text.trim() || sending}
                                className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-50 transition-all active:scale-95"
                            >
                                <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                            </button>
                        </div>
                    </>
                )}
            </div>

            <MetaWhatsAppTemplatePicker
                isOpen={showTemplatePicker}
                onClose={() => setShowTemplatePicker(false)}

                // 🛑 UPDATE: Accept templateId from your picker component
                onSend={async (templateId, templateName) => {
                    const activeCust = customers.find(c => c.key === activeKey);
                    if (!activeCust) return;

                    const formattedPhone = `91${activeCust.key}`;

                    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social-auth/send-meta-template`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({
                            toPhone: formattedPhone,
                            templateId,     // 👈 Now sending the exact CRM Template ID
                            templateName
                        })
                    });
                }}
            />
        </div>
    );
}