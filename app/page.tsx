import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/home/HeroSection";
import SelectedWork from "@/components/home/SelectedWork";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import WebsiteCheck from "@/components/home/WebsiteCheck";
import WhyOwlixir from "@/components/home/WhyOwlixir";
import ProcessSection from "@/components/home/ProcessSection";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Web Design, SEO & Website Support | Owlixir",
  description:
    "Owlixir is an independent web studio helping UK businesses build, improve and optimise websites for better visibility, trust and enquiries.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <SelectedWork />
        <FeaturedCaseStudy />
        <WebsiteCheck />
        <WhyOwlixir />
        <ProcessSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}