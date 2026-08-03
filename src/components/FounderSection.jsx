"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaQuoteRight, FaArrowRight, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import FounderWhatsAppLink from "./FounderWhatsAppLink";

export default function FounderSection() {
    return (
        <section className="py-20 bg-[#070A13] relative overflow-hidden ">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-tech-cyan/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Image Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            {/* Outer Glow Box */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-tech-cyan/40 to-purple-600/40 blur-md opacity-50 group-hover:opacity-100 transition duration-500" />

                            {/* Main Image Frame */}
                            <div className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                                <img
                                    src="/images/founder-ceo.png"
                                    alt="CEO of Bengal-IT"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Badge */}
                                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-bold text-white">Muhammad Mostofa</h4>
                                        <p className="text-xs text-tech-cyan font-medium">Founder & CEO, Bengal-IT</p>
                                    </div>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-tech-cyan hover:text-black text-gray-300 transition-colors"
                                    >
                                        <FaFacebook className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Founder's Vision & Quote */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/20 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4">
                                <FaQuoteRight className="w-3.5 h-3.5" />
                                Leadership Message
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                                Engineering Trust, Scalability & <span className="text-tech-cyan">Digital Dominance.</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-base sm:text-lg text-gray-400 leading-relaxed"
                        >
                            "At Bengal-IT, we don’t just write code; we partner with enterprise leaders to architect resilient digital ecosystems. Our mission is to bridge complex technology with seamless business growth through radical transparency, zero-trust security, and engineering precision."
                        </motion.p>

                        {/* Founder Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80"
                        >
                            <div>
                                <p className="text-xl sm:text-2xl font-bold text-white">100%</p>
                                <p className="text-xs text-gray-400">Client Retention Mindset</p>
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl font-bold text-tech-cyan">Agile-First</p>
                                <p className="text-xs text-gray-400">Enterprise Engineering</p>
                            </div>
                        </motion.div>

                        {/* CTA Link */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-2"
                        >
                            <FounderWhatsAppLink />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}