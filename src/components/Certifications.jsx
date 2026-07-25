// src/components/Certifications.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
    const badges = [
        {
            name: "ISO 27001 Security Certified",
            src: "https://i.ibb.co.com/7d4YMQS8/iso.png"
        },
        {
            name: "AWS Select Tier Partner",
            src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
        },
        {
            name: "Google Cloud Certified Agency",
            src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
        },
        {
            name: "Clutch Top Software Developer 2026",
            src: "https://i.ibb.co.com/vxrXxCfN/clutch.png"
        },
    ];

    return (
        <section className="py-12 bg-[#070A13] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Backed by Industry Standards & World-Class Tech Partnerships
                </p>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={badge.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-tech-cyan/30 hover:bg-slate-900/50 transition-all duration-300 w-full"
                        >
                            <img
                                src={badge.src}
                                alt={badge.name}
                                className="h-10 md:h-12 w-auto object-contain text-black grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                            />
                            <span className="mt-3 text-[11px] font-medium text-slate-500 group-hover:text-tech-cyan transition-colors text-center">
                                {badge.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}