"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function FloatingChatButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">
            {/* Popup Options */}
            {open && (
                <div className="flex flex-col gap-3 mb-2">
                    {/* WhatsApp */}
                    <Link
                        href="https://wa.me/918097253596"
                        target="_blank"
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-green-100 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <MessageSquareText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                            <p className="text-xs text-gray-500">Chat with us</p>
                        </div>
                    </Link>

                    {/* Call */}
                    <Link
                        href="tel:+918097253596"
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-blue-100 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Call Now</p>
                            <p className="text-xs text-gray-500">Talk to Vision Academy</p>
                        </div>
                    </Link>

                    {/* Contact Page */}
                    <Link
                        href="/chatbot"
                        className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-blue-100 hover:scale-105 transition-all duration-300"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Book Demo</p>
                            <p className="text-xs text-gray-500">Free consultation</p>
                        </div>
                    </Link>
                </div>
            )}

            {/* Main Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-2xl hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                aria-label="Open chat options"
            >
                {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
            </button>
        </div>
    );
}