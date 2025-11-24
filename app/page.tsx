import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProcessSection } from "@/components/process-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";

export default function Home() {
  return (
      <main className="min-h-screen">
        <ScrollReveal/>
        <Navigation/>
        <HeroSection />
        <ServicesSection/>
        <ProcessSection/>
        <WhyChooseUsSection/>
        <ContactSection/>
        <Footer/>
      </main>
  );
}
