
"use client";

import { useEffect, useState } from "react";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoadingSpinner from "./LoadingSpinner";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Certifications />
      <WhyChooseUs />
      <FounderSection />
      <Stats />
      <Testimonials />
      <FAQ />
    </div>
  );
}
