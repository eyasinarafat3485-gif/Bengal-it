"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do you estimate pricing and payment structures for custom projects?",
            answer:
                "We offer flexible pricing models: Milestone-based Fixed Pricing for well-defined project scopes, and Dedicated Hourly/Monthly retainer models for evolving software. Payments are typically split into milestones (e.g., 30% upfront, 40% mid-project, 30% post-QA deployment)."
        },
        {
            question: "What is the typical timeline for developing and launching a full project?",
            answer:
                "Timelines depend on complexity. High-converting landing pages take 3-7 business days, standard web apps/WordPress sites take 2-4 weeks, while enterprise SaaS or complex custom engines require 6-12 weeks including discovery, development, and QA testing."
        },
        {
            question: "Who owns the code, intellectual property, and design assets after delivery?",
            answer:
                "You own 100% of the intellectual property, source code, repositories, and design assets upon project completion and final payment settlement. We provide clean, fully documented Git repositories and deployment credentials."
        },
        {
            question: "Do you provide post-launch maintenance, hosting support, and SLAs?",
            answer:
                "Yes, every project includes 30 days of complimentary post-launch technical support and bug fixes. After that, we offer monthly DevOps, security patching, and ongoing feature enhancement retainers with guaranteed uptime SLAs."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pb-24 bg-cyber-bg relative overflow-hidden border-t border-cyber-navy-light/10">
            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Service Intel & Clarity</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white">
                        Frequently Asked <span className="text-tech-cyan">Questions</span>
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                        Clear answers about pricing, timelines, IP ownership, and ongoing support.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className="rounded-xl border border-cyber-navy-light/40 bg-cyber-navy-dark/30 overflow-hidden transition-colors duration-300 hover:border-tech-cyan/40"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                >
                                    <span className="text-sm md:text-base font-semibold text-gray-200 hover:text-tech-cyan transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-tech-cyan shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-6 md:px-6 pt-0 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-cyber-navy-light/20 mt-2 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}