"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Code2,
  Layers,
  Cpu,
  Layout,
  Palette,
  Sparkles,
  TrendingUp,
  Video,
  Server,
  ImageIcon,
  Film,
  ArrowUpRight,
  Globe
} from "lucide-react";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      id: "01",
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WooCommerce stores, Elementor/Block themes, and high-performance, secure WordPress solutions.",
      color: "from-blue-600/25 to-tech-cyan/20",
      glowColor: "group-hover:border-blue-500/60",
      iconColor: "text-blue-400",
      capabilities: ["Custom Theme & Plugin Dev", "WooCommerce E-Commerce", "Elementor & Gutenberg", "Speed & Security Optimization"]
    },
    {
      id: "02",
      icon: Layers,
      title: "SaaS Application Development",
      description: "Multi-tenant, subscription-ready cloud platforms with automated billing, RBAC, and high scalability.",
      color: "from-tech-cyan/25 to-bengal-gold/20",
      glowColor: "group-hover:border-tech-cyan/60",
      iconColor: "text-tech-cyan",
      capabilities: ["Multi-Tenant Architecture", "Stripe / Payment Gateways", "User Auth & Roles (RBAC)", "Scalable Cloud Database"]
    },
    {
      id: "03",
      icon: Code2,
      title: "Full-Stack Web App Development",
      description: "End-to-end modern web applications built using Next.js, Node.js, and complex API integrations.",
      color: "from-tech-cyan/20 to-tech-teal/20",
      glowColor: "group-hover:border-tech-cyan/50",
      iconColor: "text-tech-cyan",
      capabilities: ["Frontend & Backend Engineering", "REST APIs", "Database Systems (SQL/NoSQL)", "Real-time WebSockets"]
    },
    {
      id: "04",
      icon: Cpu,
      title: "Custom Plugin Development",
      description: "Tailored plugins, extensions, and automated systems engineered for complex business logic.",
      color: "from-bengal-gold/20 to-amber-500/20",
      glowColor: "group-hover:border-bengal-gold/50",
      iconColor: "text-bengal-gold",
      capabilities: ["Custom API Integrations", "CMS Extension Build", "Workflow Automation", "Scalable Engine Design"]
    },
    {
      id: "05",
      icon: Layout,
      title: "Landing Page Design",
      description: "Conversion-optimized, ultra-fast landing pages crafted to turn visitors into paying clients.",
      color: "from-blue-500/20 to-tech-teal/20",
      glowColor: "group-hover:border-blue-500/50",
      iconColor: "text-blue-400",
      capabilities: ["High Converting UX", "A/B Testing Ready", "SEO & Speed Optimized", "Interactive Animations"]
    },
    {
      id: "06",
      icon: Palette,
      title: "Logo Design & Branding",
      description: "Distinctive brand identity and vector logo systems tailored for corporate & digital authority.",
      color: "from-purple-500/20 to-pink-500/20",
      glowColor: "group-hover:border-purple-500/50",
      iconColor: "text-purple-400",
      capabilities: ["Brand Identity Systems", "Vector Art Architecture", "Minimalist & Modern", "Full Brand Guidelines"]
    },
    {
      id: "07",
      icon: Sparkles,
      title: "Logo Animation",
      description: "Dynamic logo motion intros designed to elevate video assets and high-end digital presentations.",
      color: "from-bengal-gold/25 to-tech-cyan/15",
      glowColor: "group-hover:border-bengal-gold/50",
      iconColor: "text-bengal-gold",
      capabilities: ["2D/3D Logo Motion", "Video Intro Sound FX", "4K Render Quality", "Social Media Asset Ready"]
    },
    {
      id: "08",
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Targeted digital acquisition campaigns and growth strategies to increase market revenue.",
      color: "from-emerald-500/20 to-teal-500/20",
      glowColor: "group-hover:border-emerald-500/50",
      iconColor: "text-emerald-400",
      capabilities: ["Performance Ads", "Search Engine Optimization", "Social Growth Strategy", "Conversion Analytics"]
    },
    {
      id: "09",
      icon: Video,
      title: "Video Editing",
      description: "Professional video production, color grading, and precise narrative pacing for media campaigns.",
      color: "from-red-500/20 to-amber-500/20",
      glowColor: "group-hover:border-red-500/50",
      iconColor: "text-red-400",
      capabilities: ["Corporate Ad Edits", "Color Grading & FX", "Audio Post-Production", "Short & Long Format"]
    },
    {
      id: "10",
      icon: Server,
      title: "Domain & Hosting / DevOps",
      description: "High-availability cloud setup, domain routing, and zero-downtime deployment pipelines.",
      color: "from-tech-cyan/25 to-blue-600/20",
      glowColor: "group-hover:border-tech-cyan/50",
      iconColor: "text-tech-cyan",
      capabilities: ["Vercel / AWS / VPS Setup", "SSL & Domain Config", "Database Backup Automation", "99.8% Uptime SLA"]
    },
    {
      id: "11",
      icon: ImageIcon,
      title: "Graphic Design",
      description: "High-impact visual media for digital marketing campaigns, UI mockups, and corporate assets.",
      color: "from-indigo-500/20 to-tech-teal/20",
      glowColor: "group-hover:border-indigo-500/50",
      iconColor: "text-indigo-400",
      capabilities: ["Social Media Banners", "Marketing Collaterals", "UI/UX Mockups", "Vector Assets"]
    },
    {
      id: "12",
      icon: Film,
      title: "Motion Graphics",
      description: "Immersive 2D/3D animation graphics designed for explainer videos and showcase reels.",
      color: "from-bengal-gold/20 to-red-500/20",
      glowColor: "group-hover:border-bengal-gold/50",
      iconColor: "text-bengal-gold",
      capabilities: ["Explainer Animations", "Kinetic Typography", "Product Motion Demos", "Custom Sound Design"]
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Solutions Catalogue</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Services We <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Architect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 mt-4 text-base md:text-lg"
          >
            We combine high-performance full-stack engineering with deep digital strategy to build end-to-end modern ecosystems.
          </motion.p>
        </div>

        {/* Services Grid (12 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id + service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => router.push("/contact")}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-cyber-navy-light/40 bg-cyber-navy-dark/30 hover:bg-cyber-navy-dark/65 hover:shadow-[0_20px_40px_rgba(7,10,19,0.5)] transition-all duration-300 overflow-hidden cursor-pointer h-full"
              >
                {/* Glow Border Effect */}
                <div className={`absolute inset-0 border border-transparent rounded-2xl transition-colors duration-500 pointer-events-none ${service.glowColor}`} />

                <div>
                  {/* Top Bar: Icon Badge & Serial ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`relative inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-tr ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-gray-500 group-hover:text-tech-cyan transition-colors">
                      /{service.id}
                    </span>
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

                {/* Bottom Text */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-tech-cyan tracking-wider uppercase group-hover:text-white transition-colors duration-300 mt-auto">
                  <span>Architect Solution</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Card Right-Bottom Hover Pop-up Tooltip */}
                <span className="absolute bottom-7 right-7 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-tech-cyan text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 backdrop-blur-sm">
                  Contact Us
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}