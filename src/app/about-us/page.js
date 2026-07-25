import Process from "@/components/Process";

export default function AboutUsPage() {
  return (
    <div className="pt-24 bg-[#070A13] text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 text-tech-cyan text-xs font-semibold uppercase tracking-wider">
              <span>About Bengal-IT</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Pioneering <span className="bg-gradient-to-r from-tech-cyan to-bengal-gold bg-clip-text text-transparent">Digital Transformation</span> from Bangladesh
            </h1>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Bengal-IT is a premier software engineering and cybersecurity agency. We operate at the intersection of enterprise software architecture, machine learning systems, and secure cloud orchestration to build high-performance digital ecosystems.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              We collaborate with visionary businesses locally and internationally to transition ideas into resilient production-ready software. Guided by standards of absolute confidentiality, agile compliance, and 99.8% system uptime SLAs, we are Bangladesh's leading technology delivery partner.
            </p>
          </div>
          {/* Right: Abstract graphics box matching the theme */}
          <div className="lg:col-span-5 relative p-8 rounded-2xl border border-cyber-navy-light/40 bg-cyber-navy-dark/30 backdrop-blur-md overflow-hidden flex flex-col justify-center min-h-[300px]">
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-tech-cyan/5 blur-xl pointer-events-none" />
            <h3 className="text-lg font-bold text-white mb-4">Core Principles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-tech-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-200">High-Performance Engineering</h4>
                  <p className="text-xs text-gray-400 mt-0.5">We write clean, test-covered, and decoupled code optimized for load capabilities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-bengal-gold mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-200">Zero-Trust Operations</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Security is integrated from line one. We protect database assets and identity pathways.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-200">24/7 SLA Responsiveness</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Our monitoring engines keep track of error logs and system resources round the clock.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Process workflow timeline */}
      <Process />
    </div>
  );
}
