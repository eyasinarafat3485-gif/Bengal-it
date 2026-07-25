"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Cloud,
  Shield,
  Layers,
  Code2,
  MessageSquare
} from "lucide-react";

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Hydration issue সমাধান করার জন্য Mount চেক
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Nodes for the 3D Tech Grid/Network Mesh
  const nodes = [
    {
      id: "hub",
      name: "Bengal-IT Core",
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/50",
      x: 50,
      y: 50,
      z: 30,
      description: "Next-gen Engine"
    },
    {
      id: "ai",
      name: "AI & Cognitive",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/50",
      x: 18,
      y: 22,
      z: 10,
      description: "Neural Networks"
    },
    {
      id: "cloud",
      name: "Cloud Architectures",
      icon: Cloud,
      color: "from-cyan-400 to-teal-400",
      shadow: "shadow-cyan-400/50",
      x: 82,
      y: 28,
      z: 20,
      description: "AWS / Azure Scaling"
    },
    {
      id: "data",
      name: "Cyber Security",
      icon: Shield,
      color: "from-emerald-400 to-green-500",
      shadow: "shadow-emerald-500/50",
      x: 25,
      y: 78,
      z: 15,
      description: "Zero-Trust Systems"
    },
    {
      id: "fullstack",
      name: "Full-Stack Web/Mobile",
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-600/50",
      x: 78,
      y: 72,
      z: 25,
      description: "React / Node / Native"
    }
  ];

  // SVG Connection Lines
  const connections = [
    { from: "ai", to: "hub" },
    { from: "cloud", to: "hub" },
    { from: "data", to: "hub" },
    { from: "fullstack", to: "hub" },
    { from: "ai", to: "data" },
    { from: "cloud", to: "fullstack" }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen w-full bg-[#070A13] text-white flex flex-col justify-center overflow-hidden pt-24 md:pt-28">
      {/* Ambient background glow elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      {/* Tech Grid Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370d_1px,transparent_1px),linear-gradient(to_bottom,#1f29370d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex self-start"
            >
              <div
                className="relative flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-500 group cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-gray-300">
                  <strong className="text-tech-cyan font-semibold">150+</strong> Projects Delivered
                  <span className="mx-2 text-slate-700">|</span>
                  <strong className="text-purple-400 font-semibold">50+</strong> Tech Experts
                </span>
                <Sparkles className="w-3.5 h-3.5 text-tech-cyan group-hover:rotate-12 transition-transform" />
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] md:leading-[1.08] text-white"
              >
                Transforming Ideas into{" "}
                <span className="text-tech-cyan font-black">
                  Powerful Digital
                </span>{" "}
                Solutions
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed"
              >
                We collaborate with visionary businesses to engineer high-performance web, mobile, and cloud software. Empower your company with expert-driven artificial intelligence, custom engineering, and scalable infrastructure.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary: Explore Our Solutions */}
              <a
                href="#solutions"
                className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-center text-sm tracking-wide text-black bg-cyan-400 transition-all duration-300 hover:bg-tech-cyan hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]  flex items-center justify-center gap-2"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Book a Free Consultation */}
              <a
                href="#consultation"
                className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-center text-sm tracking-wide text-gray-200 bg-transparent border border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span>Book a Free Consultation</span>
              </a>
            </motion.div>

            {/* Micro stats banner for credibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6 border-t border-slate-900 flex gap-8 text-slate-500 text-xs md:text-sm"
            >
              <div>
                <p className="text-gray-400 font-bold text-sm md:text-base">99.8%</p>
                <p>SLA Uptime</p>
              </div>
              <div className="w-px bg-slate-900" />
              <div>
                <p className="text-gray-400 font-bold text-sm md:text-base">24/7</p>
                <p>Expert Support</p>
              </div>
              <div className="w-px bg-slate-900" />
              <div>
                <p className="text-gray-400 font-bold text-sm md:text-base">5★</p>
                <p>Clutch Rating</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Glowing 3D Tech Grid & Network Mesh */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[400px] md:h-[550px] overflow-visible">

            {/* Ambient Radial Mesh Base Light */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[60px] pointer-events-none" />

            {/* 3D Transform Wrapper Container */}
            <div
              className="relative w-[90%] md:w-[100%] h-[90%] md:h-[100%] flex items-center justify-center overflow-visible"
              style={{
                perspective: 1200,
              }}
            >
              <motion.div
                className="relative w-[85%] h-[85%] rounded-[2rem] border border-slate-900/50 bg-slate-950/20 backdrop-blur-[2px] transition-all duration-300 overflow-visible"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(48deg) rotateZ(-30deg) translateY(-20px)",
                }}
                animate={{
                  translateY: [-15, -25, -15],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Visual grid sheet */}
                <div
                  className="absolute inset-0 rounded-[2rem] border border-cyan-500/40"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(34, 211, 238, 0.04) 1.5px, transparent 1.5px),
                      linear-gradient(90deg, rgba(34, 211, 238, 0.04) 1.5px, transparent 1.5px)
                    `,
                    backgroundSize: "32px 32px",
                    backgroundPosition: "center",
                    boxShadow: "inset 0 0 40px rgba(6, 182, 212, 0.05), 0 10px 40px rgba(0,0,0,0.8)"
                  }}
                />

                {/* Cyberpunk corner highlights */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-500 rounded-tl-md" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-500 rounded-tr-md" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500 rounded-bl-md" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-500 rounded-br-md" />

                {/* SVG Connecting Mesh Paths */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible text-tech-cyan"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      {/* text-tech-cyan অ্যাপ্লাই করার জন্য currentColor ব্যবহার করা হয়েছে */}
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                      <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                      <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Static Network Mesh Lines */}
                  {connections.map((conn, idx) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;
                    return (
                      <line
                        key={`static-${idx}`}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="url(#glowGradient)"
                        strokeWidth="0.8"
                        strokeOpacity="0.6"
                      />
                    );
                  })}

                  {/* Laser Pulses moving along connection lines */}
                  {connections.map((conn, idx) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;
                    return (
                      <motion.line
                        key={`laser-${idx}`}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="url(#laserGradient)"
                        strokeWidth="1.8"
                        strokeDasharray="8 40"
                        animate={{
                          strokeDashoffset: [0, -100]
                        }}
                        transition={{
                          duration: 4 + (idx % 3),
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Floating Node Cards positioned in 3D */}
                {nodes.map((node) => {
                  const IconComp = node.icon;
                  const isHovered = hoveredNode === node.id;

                  return (
                    <div
                      key={node.id}
                      className="absolute group/node cursor-pointer font-sans"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: `translate(-50%, -50%) translateZ(${node.z}px)`,
                        transformStyle: "preserve-3d"
                      }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {/* Node Connection Anchor Halo */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 rounded-full border border-cyan-500/20 group-hover/node:border-cyan-400 transition-all duration-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      </div>

                      {/* Info Card Pop-up with height offset */}
                      <motion.div
                        className={`absolute bottom-6 left-1/2 -translate-x-1/2 p-3 w-[160px] md:w-[180px] rounded-xl border bg-slate-950/90 backdrop-blur-lg transition-all duration-500 pointer-events-none select-none flex flex-col gap-1 items-center text-center shadow-xl ${isHovered
                          ? "border-cyan-400 opacity-100 scale-105 shadow-cyan-500/10"
                          : "border-slate-800 opacity-0 scale-95 shadow-black/80 group-hover/node:opacity-80"
                          }`}
                        style={{
                          transform: "translate(-50%, -10px) translateZ(20px)"
                        }}
                      >
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${node.color} text-white mb-0.5`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-gray-100">{node.name}</h4>
                        <p className="text-[10px] text-gray-400 font-medium">{node.description}</p>
                      </motion.div>

                      {/* Small glowing tech label on grid */}
                      <div
                        className={`absolute top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900/80 border text-[9px] font-mono tracking-widest text-slate-300 whitespace-nowrap transition-all duration-300 pointer-events-none ${isHovered ? "border-cyan-400 text-tech-cyan" : "border-slate-800"
                          }`}
                      >
                        {node.id.toUpperCase()}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}