import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function Home() {
  return (
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection/>
        <ProcessSection/>
        <WhyChooseUsSection/>
      </main>
  );
}
