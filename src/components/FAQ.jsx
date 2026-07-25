"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
    {
        question: "What is your typical project completion timeline?",
        answer:
            "Timelines depend on the project scope. Standard landing pages or UI/UX redesigns usually take 1–2 weeks, while custom SaaS products or enterprise web applications take 4–8 weeks from architecture to deployment."
    },
    {
        question: "How do you handle project pricing and payments?",
        answer:
            "We offer milestone-based pricing. Usually, we break the payment into 3–4 phases: Kickoff Deposit, Mid-project Review, Final Testing, and Deployment. We accept local and international bank transfers."
    },
    {
        question: "Will I get ongoing support after project completion?",
        answer:
            "Yes! We provide 30 days of free technical support and bug fixing post-launch. After that, we offer monthly maintenance packages for updates, security audits, and server monitoring."
    },
    {
        question: "Do you sign a Non-Disclosure Agreement (NDA)?",
        answer:
            "Absolute privacy is guaranteed. We sign formal legal NDAs before receiving any project briefs, diagrams, or proprietary business logic."
    },
    {
        question: "Can you upgrade or redesign an existing application?",
        answer:
            "Definitely. We conduct a thorough code and UI/UX audit of your existing system, map out improvements, and refactor or migrate your stack without downtime."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 md:py-32 bg-cyber-bg overflow-hidden border-t border-cyber-navy-light/10">
            {/* Background glow effects */}
            <div className="absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-tech-cyan/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-bengal-gold/5 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        Frequently Asked <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                        Everything you need to know about our engineering process, security standards, and consultation terms.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "border-tech-cyan/50 bg-cyber-navy-dark/60 shadow-[0_0_20px_rgba(0,245,212,0.1)]"
                                        : "border-cyber-navy-light/40 bg-cyber-navy-dark/20 hover:border-cyber-navy-light/80"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                                >
                                    <span className="flex items-center gap-3 text-sm md:text-base font-semibold text-white">
                                        <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-tech-cyan" : "text-gray-500"}`} />
                                        {faq.question}
                                    </span>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`p-2 rounded-xl shrink-0 ${isOpen ? "bg-tech-cyan/10 text-tech-cyan" : "bg-cyber-navy-dark/60 text-gray-400"
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>

                                {/* Animated Answer Box */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-cyber-navy-light/20 ml-8">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer Prompt */}
                <div className="text-center mt-12 p-6 rounded-2xl border border-cyber-navy-light/30 bg-cyber-navy-dark/30 backdrop-blur-sm">
                    <p className="text-xs md:text-sm text-gray-400">
                        Have a question that isn't answered above?{" "}
                        <a href="#contact" className="text-tech-cyan font-semibold hover:underline">
                            Contact our solutions architect directly &rarr;
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
}