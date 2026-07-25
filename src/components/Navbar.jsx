"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#070A13]/85 backdrop-blur-md border-b border-cyber-navy-light/40 py-4 shadow-lg shadow-cyber-navy-dark/20"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-tech-cyan to-tech-teal shadow-lg shadow-tech-cyan/20 group-hover:rotate-6 transition-transform duration-300">
              <span className="font-extrabold text-xl tracking-tighter text-[#0B132B]">B</span>
              <div className="absolute inset-0 rounded-xl border border-white/20 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Bengal</span>
              <span className="text-xl font-black text-tech-cyan">.IT</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-colors duration-200 py-1.5 group ${isActive ? "text-tech-cyan" : "text-gray-300 hover:text-tech-cyan"
                    }`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-tech-cyan transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:flex px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-transparent border border-tech-cyan/30 text-gray-200 hover:text-white hover:border-tech-cyan hover:bg-tech-cyan/5 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] transition-all duration-300 items-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-cyber-navy-light/60 bg-cyber-navy-dark/45 hover:bg-cyber-navy-light/40 text-gray-300 hover:text-tech-cyan transition-colors md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[#070A13]/95 backdrop-blur-lg border-b border-cyber-navy-light/60 md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${isActive ? "text-tech-cyan font-bold" : "text-gray-300 hover:text-tech-cyan"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-tech-cyan to-tech-teal text-[#0B132B] hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
