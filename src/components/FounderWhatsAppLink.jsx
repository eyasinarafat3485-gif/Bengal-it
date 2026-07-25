// src/components/FounderWhatsAppLink.jsx
"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function FounderWhatsAppLink() {
    const phoneNumber = "8801793679254";
    const defaultMessage = encodeURIComponent(
        "Hello Bengal-IT, I would like to schedule a direct strategy call with leadership."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="relative inline-block group">
            {/* মূল বাটন বা টেক্সট */}
            <button
                onClick={handleWhatsAppClick}
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-tech-cyan hover:underline group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 p-0 outline-none"
            >
                <span>Direct chat with founder on whatsapp</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-10">
                Chat with founder
            </span>
        </div>
    );
}