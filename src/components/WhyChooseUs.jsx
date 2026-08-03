
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="relative py-24 bg-cyber-bg overflow-hidden">
            {/* Background Subtle Glows */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Editorial Typography & Content */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
                        >
                            Why Outsource Software Development to Bangladesh with{" "}
                            <span className="text-tech-cyan">Bengal-IT</span>
                        </motion.h2>

                        {/* Quote Block with Left Accent Border */}
                        <motion.blockquote
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative border-l-4 border-tech-cyan pl-6 py-1 my-6 text-gray-300 italic text-sm md:text-base leading-relaxed bg-cyber-navy-dark/20 rounded-r-xl"
                        >
                            "Bengal-IT is a reliable software development agency based in Bangladesh, delivering excellence since <span className="text-tech-cyan font-semibold not-italic">2023</span>. Trusted by regional and global clients for modern web innovation, quality code, and seamless communication. We assemble top-tier engineering talent specializing in <span className="text-white font-semibold not-italic">MERN Stack, Full-Stack, Frontend engineering, and custom WordPress systems</span>, combining technical rigor with a client-first culture."
                        </motion.blockquote>

                        {/* Paragraph 1 */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xs md:text-sm text-gray-400 leading-relaxed"
                        >
                            Since our inception in 2023, we have delivered successful solutions across corporate platforms, e-commerce ecosystems, and custom web applications. Our experienced developers leverage technologies like <span className="text-tech-cyan">React, Next.js, Node.js, Tailwind CSS, and headless WordPress</span> to transform complex requirements into production-ready, high-performance web products.
                        </motion.p>

                        {/* Paragraph 2 */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-xs md:text-sm text-gray-400 leading-relaxed"
                        >
                            As your trusted offshore technology partner in Bangladesh, we focus on long-term value, clean system architecture, and measurable results. Whether you need a full-stack web application from scratch or dedicated frontend expertise, our team operates with agile workflows and flexible engagement models tailored to your timeline.
                        </motion.p>

                        {/* Paragraph 3 */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xs md:text-sm text-gray-400 leading-relaxed"
                        >
                            <span className="text-tech-cyan font-semibold">Agile methods</span>, direct developer communication, and strict quality assurance fuel client satisfaction and lasting partnerships.
                        </motion.p>

                    </div>

                    {/* Right Column: Frame Card (Polariod/Card Style like Reference Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 relative sticky top-28"
                    >
                        {/* White/Light Card Frame (Styled like the reference image) */}
                        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:border-tech-cyan/40">

                            {/* Image Container */}
                            <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-cyber-navy-dark border border-cyber-navy-light/40 flex flex-col items-center justify-center group">
                                <img
                                    src="/images/bengal-it-team.png"
                                    alt="Bengal IT Software Engineers"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover Overlay - Text Badge Positioned Bottom Right */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                    <span className="text-xs font-bold text-tech-cyan bg-cyber-navy-dark/90 px-3 py-1.5 rounded-lg border border-tech-cyan/30 shadow-md">
                                        Bengal-IT Team
                                    </span>
                                </div>
                            </div>

                            {/* Branding Footer inside the Photo Frame */}
                            <div className="pt-4 pb-2 px-2 flex items-center justify-between border-t border-slate-800/80 mt-3">
                                <div>
                                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                                        Bengal<span className="text-tech-cyan">-IT</span>
                                    </h3>
                                    <p className="text-[10px] text-gray-400">YOUR VISION, OUR CODE</p>
                                </div>
                                <span className="text-[10px] font-semibold text-tech-cyan bg-tech-cyan/10 px-2.5 py-1 rounded border border-tech-cyan/30">
                                    Est. 2023
                                </span>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}