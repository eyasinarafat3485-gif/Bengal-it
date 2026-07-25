"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Shield, Terminal, Settings } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fintech", name: "Fintech & Web" },
    { id: "ai", name: "AI & Neural" },
    { id: "cloud", name: "Cloud & Devops" }
  ];

  const projects = [
    {
      id: 1,
      title: "Apex Ledger Platform",
      category: "fintech",
      description: "A real-time core ledger processing engine built for high-throughput transaction flows, capable of handling 50k transactions per second.",
      tag: "Financial Engine",
      icon: Globe,
      color: "from-tech-cyan/20 to-tech-teal/40 border-tech-cyan/30",
      accentColor: "text-tech-cyan"
    },
    {
      id: 2,
      title: "NeuroRoute Logistics Router",
      category: "ai",
      description: "An automated fleet dispatch engine using hybrid genetic pathfinding and neural nets to optimize cargo shipping routes across Bangladesh.",
      tag: "Artificial Intelligence",
      icon: Settings,
      color: "from-bengal-gold/20 to-amber-500/40 border-bengal-gold/30",
      accentColor: "text-bengal-gold"
    },
    {
      id: 3,
      title: "Sovereign Cloud Setup",
      category: "cloud",
      description: "A secure private cloud setup configured on dedicated hardware, designed for financial institutions requiring compliance and data localization.",
      tag: "Kubernetes & Infrastructure",
      icon: Shield,
      color: "from-blue-500/20 to-tech-teal/40 border-blue-500/30",
      accentColor: "text-blue-400"
    },
    {
      id: 4,
      title: "Dhaka Smart Transit Portal",
      category: "fintech",
      description: "A real-time municipal ticketing and transit portal, integrating digital wallets and contactless card validations for public transit systems.",
      tag: "Enterprise System",
      icon: Terminal,
      color: "from-tech-teal/20 to-cyber-navy-light/40 border-tech-teal/30",
      accentColor: "text-tech-teal"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-cyber-bg overflow-hidden border-t border-cyber-navy-light/20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-tech-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bengal-gold/20 bg-bengal-gold/5 text-bengal-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Case Studies of <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Digital Innovation</span>
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2.5 bg-cyber-navy-dark/40 border border-cyber-navy-light/40 p-1.5 rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-tech-cyan text-cyber-navy-dark shadow-[0_0_15px_rgba(0,245,212,0.35)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col justify-between p-8 rounded-2xl border border-cyber-navy-light/35 bg-cyber-navy-dark/20 hover:bg-cyber-navy-dark/60 hover:border-tech-cyan/30 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Backdrop Gradient graphic cover */}
                  <div className={`absolute top-0 right-0 w-44 h-44 rounded-bl-full bg-gradient-to-bl ${project.color} opacity-20 blur-md pointer-events-none group-hover:scale-110 transition-transform duration-500`} />

                  <div>
                    {/* Project Header Tag */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                        {project.tag}
                      </span>
                      <div className="p-2 rounded-lg bg-cyber-navy-light/30 border border-cyber-navy-light/50">
                        <IconComponent className={`w-4 h-4 ${project.accentColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-tech-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300 group-hover:text-tech-cyan transition-colors duration-300 mt-auto">
                    <span>View Technical Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
