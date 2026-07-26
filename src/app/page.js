import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";

export default function Home() {
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