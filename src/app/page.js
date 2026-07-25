import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Certifications />
      <WhyChooseUs />
      <Stats />
    </div>
  );
}


