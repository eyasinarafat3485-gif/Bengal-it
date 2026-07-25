
"use client";

import { useEffect, useState } from "react";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoadingSpinner from "./LoadingSpinner";
import FounderSection from "@/components/FounderSection";

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
    </div>
  );
}
