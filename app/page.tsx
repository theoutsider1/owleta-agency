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

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SelectedWork />
      <ProblemSection />
      <SolutionsSection />
      <FeaturedCaseStudy />
      <WebsiteCheck />
      <WhyOwlixir />
      <ProcessSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}