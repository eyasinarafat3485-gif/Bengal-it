"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Braces, ClipboardCheck, CloudLightning } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Strategy",
      description: "We analyze your existing workflows, audit current infrastructure, and design a strategic blueprint mapping technology to your goals.",
      accent: "border-tech-cyan/20 group-hover:border-tech-cyan/60",
      iconColor: "text-tech-cyan",
      glow: "bg-tech-cyan/5"
    },
    {
      num: "02",
      icon: PenTool,
      title: "Architecture & Schema",
      description: "We map database structures, define microservices endpoints, outline security protocols, and plan server capacities.",
      accent: "border-bengal-gold/20 group-hover:border-bengal-gold/60",
      iconColor: "text-bengal-gold",
      glow: "bg-bengal-gold/5"
    },
    {
      num: "03",
      icon: Braces,
      title: "Agile Engineering",
      description: "Our engineers write highly-optimized, modular code. We run continuous local test suits and maintain absolute Git cleanliness.",
      accent: "border-blue-500/20 group-hover:border-blue-500/60",
      iconColor: "text-blue-400",
      glow: "bg-blue-500/5"
    },
    {
      num: "04",
      icon: ClipboardCheck,
      title: "Rigorous Audits & QA",
      description: "We execute load tests, perform penetration tests, check mobile layout responsiveness, and verify system integration points.",
      accent: "border-tech-teal/20 group-hover:border-tech-teal/60",
      iconColor: "text-tech-teal",
      glow: "bg-tech-teal/5"
    },
    {
      num: "05",
      icon: CloudLightning,
      title: "Deployment & SLAs",
      description: "We launch using containerized pipelines to secure cloud structures, wire automated server monitoring, and initiate 24/7 SLAs.",
      accent: "border-[#1c2541] group-hover:border-white/30",
      iconColor: "text-white",
      glow: "bg-white/5"
    }
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#070A13] overflow-hidden border-t border-cyber-navy-light/10">
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Execution Model</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Our Development <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Workflow</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            We follow structured engineering pipelines to ensure that projects are deployed with maximum security, scalability, and code hygiene.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative flex flex-col gap-8 md:gap-12">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-tech-cyan via-bengal-gold to-cyber-navy-light/20 hidden md:block" />

          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex gap-6 md:gap-10 items-start text-left"
              >
                {/* Node circle */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl border bg-cyber-navy-dark/90 transition-all duration-500 shadow-xl group-hover:scale-105 shrink-0 flex-col gap-1 border-cyber-navy-light/60">
                  <div className={`p-1 rounded-lg ${step.glow}`}>
                    <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gray-400">
                    STEP {step.num}
                  </span>
                </div>

                {/* Content Box */}
                <div className={`flex-1 p-6 rounded-2xl border bg-cyber-navy-dark/20 backdrop-blur-sm transition-all duration-300 ${step.accent}`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-tech-cyan transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
