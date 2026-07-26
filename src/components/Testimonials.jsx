"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tariqul Islam",
    role: "CTO, TechPulse Solutions",
    company: "TechPulse",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    review:
      "Eyasin and his team transformed our core architecture within weeks. Their understanding of modern web optimization, security protocols, and slick UI animation is unmatched in Bangladesh."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Owner, CloudShift Global",
    company: "CloudShift",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    review:
      "Working with Bengal-IT felt like having a high-end silicon valley team on speed dial. The level of detail in clean code, NDA integrity, and design aesthetic blew us away!"
  },
  {
    id: 3,
    name: "Rafiqul Hasan",
    role: "Founder, ShopNex E-Commerce",
    company: "ShopNex",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    review:
      "Our e-commerce conversion rates boosted by 40% after launching the new Next.js front-end they engineered. Smooth transitions, instant loading, and superb post-launch support."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative pt-24 bg-cyber-bg overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[30%] right-[-5%] w-[45vw] h-[45vw] rounded-full  blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full  blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bengal-gold/20 bg-bengal-gold/5 text-bengal-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Trusted By <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Visionary Leaders</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            See what founders, CTOs, and product leaders say about our engineering quality and digital execution.
          </p>
        </div>

        {/* Animated Carousel Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-8 md:p-12 rounded-3xl border border-tech-cyan/50 bg-cyber-navy-dark/30 backdrop-blur-md relative overflow-hidden"
            >
              {/* Top Cyber Accents */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tech-cyan to-transparent" />
              <Quote className="absolute top-6 right-8 w-16 h-16 text-cyber-navy-light/10 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                {/* Avatar / Profile */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-tech-cyan/40 p-1 bg-cyber-navy-dark shadow-[0_0_20px_rgba(0,245,212,0.15)]">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-cyber-navy-dark border border-bengal-gold/40 p-1.5 rounded-lg text-bengal-gold shadow-md">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-bengal-gold text-bengal-gold" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-200 text-sm md:text-lg leading-relaxed italic">
                    "{testimonials[currentIndex].review}"
                  </p>

                  {/* Author Details */}
                  <div className="pt-2 border-t border-cyber-navy-light/20">
                    <h4 className="text-base md:text-lg font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs md:text-sm text-tech-cyan font-medium mt-0.5">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-tech-cyan" : "w-2 bg-cyber-navy-light/60 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-gray-300 hover:text-tech-cyan hover:border-tech-cyan/50 hover:bg-tech-cyan/5 transition-all duration-300 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-gray-300 hover:text-tech-cyan hover:border-tech-cyan/50 hover:bg-tech-cyan/5 transition-all duration-300 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}