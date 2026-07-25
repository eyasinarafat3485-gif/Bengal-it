"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  LineChart, 
  ArrowUpRight 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Enterprise Software Engineering",
      description: "Custom architecture engineered to handle complex business flows and high transaction volume.",
      color: "from-tech-cyan/20 to-tech-teal/20",
      glowColor: "group-hover:border-tech-cyan/50",
      iconColor: "text-tech-cyan",
      capabilities: ["Microservices Architecture", "Next.js & React Applications", "Native Mobile Platforms", "High-Performance APIs"]
    },
    {
      icon: Cpu,
      title: "AI, Cognitive & Data Systems",
      description: "Build neural engines, automate decision pipelines, and extract insights from unstructured datasets.",
      color: "from-bengal-gold/20 to-amber-500/20",
      glowColor: "group-hover:border-bengal-gold/50",
      iconColor: "text-bengal-gold",
      capabilities: ["Machine Learning & NLP", "Cognitive Automation", "Big Data Orchestration", "Predictive Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Architecture",
      description: "Highly scalable, self-healing cloud setups with zero-downtime integration pipelines.",
      color: "from-blue-500/20 to-tech-teal/20",
      glowColor: "group-hover:border-blue-500/50",
      iconColor: "text-blue-400",
      capabilities: ["AWS / Azure / GCP Setup", "Kubernetes & Containers", "CI/CD Pipeline Automation", "Serverless Architectures"]
    },
    {
      icon: ShieldCheck,
      title: "Cyber Security & Auditing",
      description: "Protect intellectual assets and client transactions through rigorous zero-trust systems.",
      color: "from-[#1c2541] to-cyber-navy-light/40",
      glowColor: "group-hover:border-cyber-navy-light/80",
      iconColor: "text-[#00B4D8]",
      capabilities: ["Penetration Testing & Audits", "Zero-Trust Architecture", "Identity & Access Control", "Compliance (GDPR/ISO)"]
    },
    {
      icon: LineChart,
      title: "Digital Strategy & Consulting",
      description: "Modernize legacy systems, design technology roadmaps, and align IT budgets with corporate targets.",
      color: "from-tech-cyan/25 to-bengal-gold/15",
      glowColor: "group-hover:border-tech-teal/50",
      iconColor: "text-tech-teal",
      capabilities: ["IT Infrastructure Auditing", "Legacy System Migration", "Product Scaling Blueprints", "Digital Workflow Audits"]
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#070A13] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-tech-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-bengal-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Solutions Catalogue</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Services We <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Architect</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg"
          >
            We combine high-performance software engineering with deep local and global consulting experience to deliver digital ecosystems.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-cyber-navy-light/40 bg-cyber-navy-dark/30 hover:bg-cyber-navy-dark/65 hover:shadow-[0_20px_40px_rgba(7,10,19,0.5)] transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Glow Border Effect */}
                <div className={`absolute inset-0 border border-transparent rounded-2xl transition-colors duration-500 ${service.glowColor}`} />

                <div>
                  {/* Icon Badge */}
                  <div className={`relative inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-tr ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors duration-350 flex items-center gap-2">
                    <span>{service.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Bullet List */}
                  <ul className="space-y-2 mb-8 border-t border-[#1c2541]/30 pt-6">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-bengal-gold" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA trigger */}
                <div className="flex items-center gap-2 text-xs font-semibold text-tech-cyan tracking-wider uppercase group-hover:text-white transition-colors duration-300 mt-auto">
                  <span>Architect Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
