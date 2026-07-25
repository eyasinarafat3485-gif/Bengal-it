"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle2, Users2, ShieldCheck, Award } from "lucide-react";

// Count animation sub-component
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (isDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.floor(latest).toString());
      }
    });
  }, [springValue, isDecimal]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: CheckCircle2,
      value: "370+",
      label: "Projects Delivered",
      description: "Production web applications, AI models, secure, optimized and cloud systems completed on schedule.",
      color: "text-tech-cyan"
    },
    {
      icon: Users2,
      value: "110+",
      label: "Enterprise Clients",
      description: "Trusted software partner for startups, regional brands, long tern collaboration business and global enterprises.",
      color: "text-bengal-gold"
    },
    {
      icon: ShieldCheck,
      value: "99.8%",
      label: "System Uptime SLA",
      description: "High-availability cloud infrastructure and zero-downtime microservices deployment.",
      color: "text-white"
    },
    {
      icon: Award,
      value: "4.9",
      label: "Clutch & Client Rating",
      description: "Voted as a highly reliable technology and integration partner by local and global enterprises.",
      color: "text-tech-teal"
    }
  ];

  return (
    <section className="relative py-20 bg-[#070A13] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,212,0.02),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl border border-cyber-navy-light/40 bg-cyber-navy-dark/20 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-tech-cyan/40 hover:bg-cyber-navy-dark/40 hover:shadow-[0_10px_30px_-10px_rgba(0,245,212,0.15)]"
              >
                <div>
                  {/* Top Row: Icon & Value */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-4xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 ${stat.color}`}>
                      <AnimatedNumber value={stat.value} />
                    </span>
                    <div className="p-2.5 rounded-lg bg-cyber-navy-light/30 border border-transparent transition-all duration-300 group-hover:border-tech-cyan/30 group-hover:bg-cyber-navy-light/60">
                      <IconComp className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${stat.color}`} />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-base font-bold text-white mb-2 transition-colors duration-300 group-hover:text-tech-cyan">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom decorative bar (Expands smoothly on Hover) */}
                <div className="relative w-full h-0.5 bg-cyber-navy-light/40 mt-6 rounded-full overflow-hidden">
                  <div className="w-8 h-full bg-gradient-to-r from-tech-cyan to-tech-teal transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
