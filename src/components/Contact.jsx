// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     service: "software",
//     message: ""
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setForm({ name: "", email: "", company: "", service: "software", message: "" });
//     }, 3000);
//   };

//   return (
//     <section id="contact" className="relative py-24 md:py-32 bg-cyber-bg overflow-hidden border-t border-cyber-navy-light/10">
//       {/* Glow decorations */}
//       <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-tech-cyan/5 blur-[120px] pointer-events-none" />
//       <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-bengal-gold/5 blur-[120px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bengal-gold/20 bg-bengal-gold/5 text-bengal-gold text-xs font-semibold uppercase tracking-wider mb-4">
//             <span>Inquiry Engine</span>
//           </div>
//           <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
//             Initiate Your <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Transformation</span>
//           </h2>
//           <p className="text-gray-400 mt-4 text-sm md:text-base">
//             Reach out to our software consultants. We typically analyze project scopes and return custom pricing details within 24 business hours.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

//           {/* Left Column: Office info */}
//           <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Consultation Hubs
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Connect with our local solution architect team or visit our engineering facilities in Dhaka.
//               </p>

//               {/* Office Details */}
//               <div className="space-y-4 pt-4">
//                 <div className="flex gap-4 items-start">
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-tech-cyan shrink-0">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200">Headquarters</h4>
//                     <p className="text-xs text-gray-400 mt-1 max-w-xs">
//                       Level 8, Tower B, Corporate Heights, Mirpur11, Dhaka-1213, Bangladesh
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-start">
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-bengal-gold shrink-0">
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200">General Inquiries</h4>
//                     <p className="text-xs text-gray-400 mt-1">
//                       info@bengal-it.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-start">
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-blue-400 shrink-0">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200">Consultation Hotline</h4>
//                     <p className="text-xs text-gray-400 mt-1">
//                       +880 1793-679254
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick credibility card */}
//             <div className="p-6 rounded-2xl border border-cyber-navy-light/35 bg-cyber-navy-dark/40 backdrop-blur-md relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-tech-cyan/5 blur-md pointer-events-none" />
//               <div className="flex gap-4 items-center">
//                 <MessageSquare className="w-8 h-8 text-tech-cyan shrink-0" />
//                 <div>
//                   <h4 className="text-sm font-bold text-white">NDA Protection</h4>
//                   <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">
//                     We maintain absolute privacy. All preliminary proposals, diagrams, and audits are guarded under strict non-disclosure agreements.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="lg:col-span-7">
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="p-8 rounded-2xl border border-cyber-navy-light/35 bg-cyber-navy-dark/20 backdrop-blur-sm"
//             >
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Name */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="name" className="text-xs font-semibold text-gray-400">Full Name</label>
//                     <input
//                       id="name"
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={(e) => setForm({ ...form, name: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
//                       placeholder="e.g. Arafat Rahman"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="email" className="text-xs font-semibold text-gray-400">Business Email</label>
//                     <input
//                       id="email"
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(e) => setForm({ ...form, email: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
//                       placeholder="e.g. info@company.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Company Name */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="company" className="text-xs font-semibold text-gray-400">Company Name</label>
//                     <input
//                       id="company"
//                       type="text"
//                       value={form.company}
//                       onChange={(e) => setForm({ ...form, company: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
//                       placeholder="e.g. Enterprise Ltd"
//                     />
//                   </div>

//                   {/* Desired Service */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="service" className="text-xs font-semibold text-gray-400">Required Service</label>
//                     <select
//                       id="service"
//                       value={form.service}
//                       onChange={(e) => setForm({ ...form, service: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
//                     >
//                       <option value="software">Enterprise Software</option>
//                       <option value="ai">AI & Data Engineering</option>
//                       <option value="cloud">Cloud Migration / DevOps</option>
//                       <option value="security">Cybersecurity & Audit</option>
//                       <option value="consulting">IT Strategy Consultation</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="flex flex-col gap-1.5">
//                   <label htmlFor="message" className="text-xs font-semibold text-gray-400">Project Parameters</label>
//                   <textarea
//                     id="message"
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors resize-none"
//                     placeholder="Provide details about scope, timelines, or security targets..."
//                   />
//                 </div>

//                 {/* Submit button */}
//                 <button
//                   type="submit"
//                   className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-tech-cyan via-tech-teal to-bengal-gold text-[#0B132B] hover:shadow-[0_0_25px_rgba(0,245,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
//                 >
//                   {submitted ? (
//                     <span>Inquiry Transmitted...</span>
//                   ) : (
//                     <>
//                       <span>Transmit Project Scope</span>
//                       <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "$500 - $1k",
    service: "ecommerce",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        budget: "$500 - $1k",
        service: "ecommerce",
        message: ""
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cyber-bg overflow-hidden border-t border-cyber-navy-light/10">
      {/* Glow decorations */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-tech-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-bengal-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bengal-gold/20 bg-bengal-gold/5 text-bengal-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Inquiry Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Initiate Your <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Reach out to our software consultants. We typically analyze project scopes and return custom pricing details within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Office info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Consultation Hubs
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with our local solution architect team or visit our engineering facilities in Dhaka.
              </p>

              {/* Office Details with Links */}
              <div className="space-y-4 pt-4">

                {/* 1. Interactive Google Map Location */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mirpur+11+Dhaka+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-tech-cyan group-hover:border-tech-cyan group-hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] shrink-0 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-tech-cyan transition-colors">Headquarters</h4>
                    <p className="text-xs text-gray-400 mt-1 max-w-xs group-hover:text-gray-300">
                      Level 8, Tower B, Corporate Heights, Mirpur 11, Dhaka-1213, Bangladesh
                    </p>
                  </div>
                </a>

                {/* 2. Interactive Mailto Link */}
                <a
                  href="mailto:info@bengal-it.com"
                  className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-bengal-gold group-hover:border-bengal-gold group-hover:shadow-[0_0_15px_rgba(255,183,3,0.2)] shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-bengal-gold transition-colors">General Inquiries</h4>
                    <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
                      info@bengal-it.com
                    </p>
                  </div>
                </a>

                {/* 3. Interactive Tel Hotline Link */}
                <a
                  href="tel:+8801793679254"
                  className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)] shrink-0 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">Consultation Hotline</h4>
                    <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
                      +880 1793-679254
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* Quick credibility card */}
            <div className="p-6 rounded-2xl border border-cyber-navy-light/35 bg-cyber-navy-dark/40 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-tech-cyan/5 blur-md pointer-events-none" />
              <div className="flex gap-4 items-center">
                <MessageSquare className="w-8 h-8 text-tech-cyan shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">NDA Protection</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">
                    We maintain absolute privacy. All preliminary proposals, diagrams, and audits are guarded under strict non-disclosure agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-cyber-navy-light/35 bg-cyber-navy-dark/20 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                      placeholder="e.g. Arafat Rahman"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400">Business Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors"
                      placeholder="e.g. info@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Estimated Budget Range (Company Name এর বদলে আরও দরকারি ফিল্ড) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-xs font-semibold text-gray-400">Estimated Budget Range</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
                    >
                      <option value="$300 - $500">$100 - $500</option>
                      <option value="$500 - $1k">$500 - $1,000</option>
                      <option value="$1k - $3k">$1,000 - $3,000</option>
                      <option value="$3k+">$3,000+</option>
                    </select>
                  </div>

                  {/* Desired Service */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-gray-400">Required Service</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
                    >
                      <option value="text">Select Your Project Type</option>
                      <option value="ecommerce">E-commerce Website</option>
                      <option value="design">Graphic Design</option>
                      <option value="webdesgin">Web Design</option>
                      <option value="landing">High-Converting Landing Page</option>
                      <option value="saas">SaaS Application Development</option>
                      <option value="customization">Website Customization & Redesign</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400">Project Details & Requirements</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors resize-none"
                    placeholder="Tell us about your project goals, features, or design references..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-tech-cyan via-tech-teal to-bengal-gold text-[#0B132B] hover:shadow-[0_0_25px_rgba(0,245,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {submitted ? (
                    <span>Inquiry Transmitted...</span>
                  ) : (
                    <>
                      <span>Transmit Project Scope</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}