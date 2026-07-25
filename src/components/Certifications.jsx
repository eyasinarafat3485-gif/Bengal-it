// src/components/Certifications.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Certifications() {
    // আপনার ব্যাজ ইমেজের পাথগুলো এখানে বসাবেন
    const badges = [
        { name: "ISO 27001 Certified", src: "/images/badges/iso-27001.png" },
        { name: "Best Workplaces 2026", src: "/images/badges/best-workplace.png" },
        { name: "Great Place to Work", src: "/images/badges/gptw.png" },
        { name: "Top Tech Company", src: "/images/badges/top-10.png" },
    ];

    return (
        <section className="py-10 bg-[#070A13] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Recognized for Security, Quality & Engineering Excellence
                </p>

                {/* Badges Grid / Marquee */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={badge.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="group flex items-center justify-center p-3 rounded-xl border border-transparent hover:border-tech-cyan/20 hover:bg-cyber-navy-light/20 transition-all duration-300"
                        >
                            <img
                                src={badge.src}
                                alt={badge.name}
                                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}