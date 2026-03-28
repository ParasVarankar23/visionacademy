"use client";

import {
    Bot,
    Loader2,
    MessageCircle,
    MessageSquareText,
    Phone,
    Send,
    X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "vision_academy_chat_history_v11";

const QUICK_ACTIONS = [
    "What courses are available?",
    "How can I book a free demo?",
    "Do you provide home tuition?",
    "What are the fees?",
    "What are class timings?",
];

const DEFAULT_MESSAGES = [
    {
        role: "assistant",
        content: "Hello 👋 Welcome to Vision Academy.\nHow can I help you today?",
    },
];

const CONTACTS = {
    phone: "8097253596",
    whatsapp: "8097253596",
};

export default function FloatingChatButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(DEFAULT_MESSAGES);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [modelInfo, setModelInfo] = useState(null);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const canSend = useMemo(
        () => input.trim().length > 0 && !loading,
        [input, loading]
    );

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            }
        } catch (error) {
            console.error("Failed to load chat history:", error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        } catch (error) {
            console.error("Failed to save chat history:", error);
        }
    }, [messages]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const t = setTimeout(() => inputRef.current?.focus(), 180);
        return () => clearTimeout(t);
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading, isOpen]);

    const sendMessage = async (customMessage) => {
        const messageToSend = (customMessage ?? input).trim();
        if (!messageToSend || loading) return;

        const updatedMessages = [
            ...messages,
            { role: "user", content: messageToSend },
        ];

        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            const data = await res.json();

            setModelInfo({
                source: data?.source || null,
                modelUsed: data?.modelUsed || data?.modelTried || null,
                error: data?.error || null,
            });

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        data?.reply ||
                        `Sorry, chat is temporarily unavailable. Please call ${CONTACTS.phone}.`,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `Sorry, chat is temporarily unavailable. Please call ${CONTACTS.phone}.`,
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessage();
    };

    const clearChat = () => {
        setMessages(DEFAULT_MESSAGES);
        setModelInfo(null);
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error("Failed to clear chat history:", error);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end">
            {/* Chat Popup */}
            {isOpen && (
                <div
                    className="
            mb-4
            flex flex-col
            w-[380px] sm:w-[430px]
            h-[min(620px,calc(100vh-110px))]
            sm:h-[min(680px,calc(100vh-120px))]
            max-w-[calc(100vw-24px)]
            overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,0.20)]
            animate-in fade-in slide-in-from-bottom-4 duration-200
            origin-bottom-right
          "
                >
                    {/* Header */}
                    <div className="shrink-0 border-b border-slate-100 bg-white px-5 py-4">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-[0_8px_20px_rgba(37,99,235,0.30)]">
                                    <Bot className="h-6 w-6" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                                        VISION ACADEMY ASSISTANT
                                    </p>
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        Live Help Chat
                                    </h3>
                                    <p className="text-sm font-medium text-emerald-500 mt-1">
                                        ● Online now
                                    </p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition"
                                aria-label="Close chat"
                                title="Close chat"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto bg-slate-50 px-4 py-4">
                        <div className="space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={`${message.role}-${index}`}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`
                      max-w-[88%] rounded-2xl px-5 py-4 text-[15px] leading-7 shadow-sm
                      ${message.role === "user"
                                                ? "rounded-br-sm bg-[#2563EB] text-white"
                                                : "rounded-bl-sm border border-slate-200 bg-white text-slate-800"
                                            }
                    `}
                                    >
                                        <p className="whitespace-pre-wrap break-words">
                                            {message.content}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start">
                                    <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-sm">
                                        <Loader2 className="h-4 w-4 animate-spin text-[#2563EB]" />
                                        Typing...
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="shrink-0 border-t border-slate-100 bg-white px-5 py-5">
                        {/* Quick Actions */}
                        <div className="mb-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {QUICK_ACTIONS.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => sendMessage(item)}
                                    className="shrink-0 whitespace-nowrap rounded-full border border-[#2563EB]/20 bg-[#EFF6FF] px-4 py-2.5 text-xs font-semibold text-[#2563EB] transition hover:bg-[#DBEAFE]"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mb-4 grid grid-cols-3 gap-4">
                            <Link
                                href={`https://wa.me/91${CONTACTS.whatsapp}`}
                                target="_blank"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                                <MessageSquareText className="h-4 w-4 text-green-600 shrink-0" />
                                WhatsApp
                            </Link>

                            <Link
                                href={`tel:+91${CONTACTS.phone}`}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                                <Phone className="h-4 w-4 text-[#2563EB] shrink-0" />
                                Call Now
                            </Link>

                            <button
                                type="button"
                                onClick={clearChat}
                                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                                Clear Chat
                            </button>
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="flex items-center gap-3">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about demo, fees, courses, timings..."
                                className="h-14 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-5 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2563EB]/50 focus:bg-white"
                            />
                            <button
                                type="submit"
                                disabled={!canSend}
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2563EB] text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label="Send message"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </form>

                        <p className="mt-4 text-center text-sm text-slate-500">
                            For urgent admission help, call {CONTACTS.phone}
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="
          flex h-20 w-20
          items-center justify-center
          rounded-full
          bg-[#2563EB]
          text-white
          border-[5px] border-white
          shadow-[0_16px_40px_rgba(37,99,235,0.45)]
          transition-all duration-300
          hover:scale-105 hover:bg-[#1D4ED8]
          active:scale-95
        "
                aria-label={isOpen ? "Close chat" : "Open chat"}
                title="Chat with Vision Academy"
            >
                {isOpen ? (
                    <X className="h-9 w-9" />
                ) : (
                    <MessageCircle className="h-9 w-9" />
                )}
            </button>
        </div>
    );
}