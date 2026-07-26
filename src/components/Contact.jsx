// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

// export default function Contact() {
//   // Service-এর ডিফল্ট ভ্যালু ফাঁকা ("") দেওয়া হয়েছে যেন ইউজারকে সিলেক্ট করতে বাধ্য করা হয়
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     budget: "$100 - $500",
//     service: "",
//     message: ""
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ১. Service সিলেক্ট করা না থাকলে ফর্ম সাবমিট আটকাবে
//     if (!form.service) {
//       alert("Please select a valid required service before submitting.");
//       return;
//     }

//     setSubmitted(true);

//     // ২. mailto: লিংক তৈরি ও অটোমেশন
//     const mailToEmail = "eyasinwebdev@gmail.com";
//     const subject = encodeURIComponent(`New Project Inquiry: ${form.service}`);
//     const body = encodeURIComponent(
//       `Name: ${form.name}\n` +
//       `Email: ${form.email}\n` +
//       `Budget Range: ${form.budget}\n` +
//       `Required Service: ${form.service}\n\n` +
//       `Project Details:\n${form.message}`
//     );

//     // ডিফল্ট ইমেইল অ্যাপ (Gmail/Outlook) ওপেন করার কমান্ড
//     window.location.href = `mailto:${mailToEmail}?subject=${subject}&body=${body}`;

//     setTimeout(() => {
//       setSubmitted(false);
//       // রিসেট করার সময় আবার সার্ভিস খালি হয়ে যাবে
//       setForm({
//         name: "",
//         email: "",
//         budget: "$100 - $500",
//         service: "",
//         message: ""
//       });
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
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4"
//           >
//             <span>Inquiry Engine</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-black text-white leading-tight"
//           >
//             Initiate Your <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Transformation</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-gray-400 mt-4 text-sm md:text-base"
//           >
//             Reach out to our software consultants. We typically analyze project scopes and return custom pricing details within 24 business hours.
//           </motion.p>
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

//               {/* Office Details with Links */}
//               <div className="space-y-4 pt-4">

//                 {/* 1. Interactive Google Map Location */}
//                 <a
//                   href="https://www.google.com/maps/search/?api=1&query=Mirpur+11+Dhaka+Bangladesh"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
//                 >
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-tech-cyan group-hover:border-tech-cyan group-hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] shrink-0 transition-colors">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200 group-hover:text-tech-cyan transition-colors">Headquarters</h4>
//                     <p className="text-xs text-gray-400 mt-1 max-w-xs group-hover:text-gray-300">
//                       Level 8, Tower B, Corporate Heights, Mirpur 11, Dhaka-1213, Bangladesh
//                     </p>
//                   </div>
//                 </a>

//                 {/* 2. Interactive Mailto Link */}
//                 <a
//                   href="mailto:eyasinwebdev@gmail.com"
//                   className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
//                 >
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-bengal-gold group-hover:border-bengal-gold group-hover:shadow-[0_0_15px_rgba(255,183,3,0.2)] shrink-0 transition-colors">
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200 group-hover:text-bengal-gold transition-colors">General Inquiries</h4>
//                     <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
//                       eyasinwebdev@gmail.com
//                     </p>
//                   </div>
//                 </a>

//                 {/* 3. Interactive Tel Hotline Link */}
//                 <a
//                   href="tel:+8801793679254"
//                   className="flex gap-4 items-start group transition-all duration-300 hover:translate-x-1"
//                 >
//                   <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.2)] shrink-0 transition-colors">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">Consultation Hotline</h4>
//                     <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
//                       +880 1793-679254
//                     </p>
//                   </div>
//                 </a>

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
//                       placeholder="John Doe"
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
//                       placeholder="john124@gmail.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Estimated Budget Range */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="budget" className="text-xs font-semibold text-gray-400">Estimated Budget Range</label>
//                     <select
//                       id="budget"
//                       value={form.budget}
//                       onChange={(e) => setForm({ ...form, budget: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
//                     >
//                       <option value="$100 - $500">$100 - $500</option>
//                       <option value="$500 - $1k">$500 - $1,000</option>
//                       <option value="$1k - $3k">$1,000 - $3,000</option>
//                       <option value="$3k+">$3,000+</option>
//                     </select>
//                   </div>

//                   {/* Desired Service Validation */}
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="service" className="text-xs font-semibold text-gray-400">Required Service *</label>
//                     <select
//                       id="service"
//                       required
//                       value={form.service}
//                       onChange={(e) => setForm({ ...form, service: e.target.value })}
//                       className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
//                     >
//                       {/* value="" রাখার কারণে এবং select-এ required থাকার কারণে এটি সিলেক্ট থাকলে ফর্ম জমা হবে না */}
//                       <option value="" disabled hidden>Select Your Project Type</option>
//                       <option value="E-commerce Website"> Website Development</option>
//                       <option value="Graphic Design">Graphic Design</option>

//                       <option value="Digital marketing">Digital Marketing</option>
//                       <option value="Web Hosting & Domain">Web Hosting & Domain</option>
//                       <option value="High-Converting Landing Page">High-Converting Landing Page</option>
//                       <option value="SaaS Application Development">SaaS Application Development</option>
//                       <option value="Website Customization & Redesign">Website Customization & Redesign</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="flex flex-col gap-1.5">
//                   <label htmlFor="message" className="text-xs font-semibold text-gray-400">Project Details & Requirements</label>
//                   <textarea
//                     id="message"
//                     required
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                     className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors resize-none"
//                     placeholder="Tell us about your project goals, features, or design references..."
//                   />
//                 </div>

//                 {/* Submit button */}
//                 <button
//                   type="submit"
//                   className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-tech-cyan via-tech-teal to-bengal-gold text-[#0B132B] hover:shadow-[0_0_25px_rgba(0,245,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
//                 >
//                   {submitted ? (
//                     <span>Opening Mail Client...</span>
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
import { toast } from "react-toastify";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "$100 - $500",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleMapClick = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Mirpur+11+Dhaka+Bangladesh", "_blank", "noopener,noreferrer");
  };

  const handleMailClick = () => {
    window.location.href = "mailto:eyasinwebdev@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+8801793679254";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.service) {
      toast.error("Please select a required service!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry Transmitted Successfully!");
        setForm({
          name: "",
          email: "",
          budget: "$100 - $500",
          service: "",
          message: ""
        });
      } else {
        toast.error(result.message || "Failed to send inquiry.");
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cyber-bg overflow-hidden border-t border-cyber-navy-light/10">
      {/* Glow decorations */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-tech-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-bengal-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>Inquiry Engine</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Initiate Your <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Transformation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 mt-4 text-sm md:text-base"
          >
            Reach out to our software consultants. We typically analyze project scopes and return custom pricing details within 24 business hours.
          </motion.p>
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

              {/* Office Details with Custom Popups */}
              <div className="space-y-4 pt-4">

                {/* 1. Interactive Location Block */}
                <div
                  onClick={handleMapClick}
                  className="group relative flex gap-4 items-start p-3 rounded-2xl border border-transparent hover:border-cyber-navy-light/40 hover:bg-cyber-navy-dark/30 cursor-pointer transition-all duration-300 hover:translate-x-1"
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

                  {/* Location Pop-up */}
                  <span className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-slate-900/90 border border-tech-cyan/50 text-tech-cyan text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 backdrop-blur-sm">
                    Our Location
                  </span>
                </div>

                {/* 2. Interactive Mail Block */}
                <div
                  onClick={handleMailClick}
                  className="group relative flex gap-4 items-start p-3 rounded-2xl border border-transparent hover:border-cyber-navy-light/40 hover:bg-cyber-navy-dark/30 cursor-pointer transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-3 rounded-xl bg-cyber-navy-dark border border-cyber-navy-light/60 text-bengal-gold group-hover:border-bengal-gold group-hover:shadow-[0_0_15px_rgba(255,183,3,0.2)] shrink-0 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 group-hover:text-bengal-gold transition-colors">General Inquiries</h4>
                    <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
                      eyasinwebdev@gmail.com
                    </p>
                  </div>

                  {/* Email Pop-up */}
                  <span className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-slate-900/90 border border-bengal-gold/50 text-bengal-gold text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 backdrop-blur-sm">
                    Send Email
                  </span>
                </div>

                {/* 3. Interactive Phone Hotline Block */}
                <div
                  onClick={handlePhoneClick}
                  className="group relative flex gap-4 items-start p-3 rounded-2xl border border-transparent hover:border-cyber-navy-light/40 hover:bg-cyber-navy-dark/30 cursor-pointer transition-all duration-300 hover:translate-x-1"
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

                  {/* Phone Pop-up */}
                  <span className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-slate-900/90 border border-blue-400/50 text-blue-400 text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg z-20 backdrop-blur-sm">
                    Call Hotline
                  </span>
                </div>

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
                      placeholder="John Doe"
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
                      placeholder="john124@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Estimated Budget Range */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-xs font-semibold text-gray-400">Estimated Budget Range</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
                    >
                      <option value="$100 - $500">$100 - $500</option>
                      <option value="$500 - $1k">$500 - $1,000</option>
                      <option value="$1k - $3k">$1,000 - $3,000</option>
                      <option value="$3k+">$3,000+</option>
                    </select>
                  </div>

                  {/* Desired Service Validation */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-semibold text-gray-400">Required Service *</label>
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-cyber-navy-light/60 bg-cyber-navy-dark/40 text-sm text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan transition-colors [&>option]:bg-[#070A13]"
                    >
                      <option value="" disabled hidden>Select Your Project Type</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Web Design">Web Design</option>
                      <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                      <option value="SaaS Application Development">SaaS Application Development</option>
                      <option value="Website Customization & Redesign">Website Customization & Redesign</option>
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
                  disabled={loading}
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-tech-cyan via-tech-teal to-bengal-gold text-[#0B132B] hover:shadow-[0_0_25px_rgba(0,245,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
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