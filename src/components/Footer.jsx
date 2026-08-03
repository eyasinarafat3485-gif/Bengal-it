"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    corporate: [
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Our Process", href: "#process" },
      { name: "Consultation", href: "#contact" }
    ],
    capabilities: [
      { name: "Software Engineering", href: "#services" },
      { name: "AI & Neural Networks", href: "#services" },
      { name: "Cloud Scaling", href: "#services" },
      { name: "Cybersecurity", href: "#services" }
    ]
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-cyber-navy-light/45 pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-cyber-navy-light/30">

          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-tech-cyan to-tech-teal shadow-lg shadow-tech-cyan/20">
                <span className="font-extrabold text-xl tracking-tighter text-[#0b132b]">B</span>
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Bengal</span>
                <span className="text-xl font-black text-tech-cyan">.IT</span>
              </div>
            </a>
            <p className="text-xs leading-relaxed text-gray-500 max-w-sm">
              Bengal-IT is a premier software engineering and cybersecurity agency. We design, build, and scale high-performance enterprise ecosystems for global and local businesses.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-lg bg-cyber-navy-dark border border-cyber-navy-light/60 hover:border-tech-cyan hover:text-white transition-colors" aria-label="Github">
                <GithubIcon className="w-4 h-4 text-gray-400 hover:text-tech-cyan" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-cyber-navy-dark border border-cyber-navy-light/60 hover:border-tech-cyan hover:text-white transition-colors" aria-label="Linkedin">
                <LinkedinIcon className="w-4 h-4 text-gray-400 hover:text-tech-cyan" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-cyber-navy-dark border border-cyber-navy-light/60 hover:border-tech-cyan hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4 text-gray-400 hover:text-tech-cyan" />
              </a>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Corporate</h4>
            <ul className="space-y-2.5 text-xs">
              {links.corporate.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-tech-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Offerings */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Capabilities</h4>
            <ul className="space-y-2.5 text-xs">
              {links.capabilities.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-tech-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Insights */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Subscribe to get news on tech frameworks, serverless security practices, and cloud orchestration audits.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Business Email"
                className="w-full px-3 py-2 text-xs rounded-lg border border-cyber-navy-light/60 bg-cyber-navy-dark/45 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan text-white"
              />
              <button className="px-3 py-2 bg-tech-cyan text-cyber-navy-dark rounded-lg hover:bg-[#00ebd0] transition-colors flex items-center justify-center shrink-0" aria-label="Subscribe">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-tech-cyan" />
            <span>Bengal-IT Systems | Version 2.5.0</span>
          </div>
          <div className="flex gap-6">
            <span>&copy; {currentYear} Bengal-IT. All rights reserved.</span>
            <a href="#" className="hover:text-tech-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-cyan transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
