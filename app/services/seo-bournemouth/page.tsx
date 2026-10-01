import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOBournemouthHero from "@/components/seo-bournemouth/SEOBournemouthHero";
import BournemouthSearchProblem from "@/components/seo-bournemouth/BournemouthSearchProblem";
import BournemouthSEOServices from "@/components/seo-bournemouth/BournemouthSEOServices";
import BournemouthSEOMidCTA from "@/components/seo-bournemouth/BournemouthSEOMidCTA";
import BournemouthSEOProof from "@/components/seo-bournemouth/BournemouthSEOProof";
import BournemouthSEOFAQ from "@/components/seo-bournemouth/BournemouthSEOFAQ";
import BournemouthSEOCTA from "@/components/seo-bournemouth/BournemouthSEOCTA";

export const metadata: Metadata = {
  title: "SEO Bournemouth | SEO Services for Bournemouth Businesses | Owlixir",
  description:
    "SEO services for Bournemouth businesses that want to improve search visibility, reach more relevant local customers and strengthen their presence in organic search.",
};

export default function SEOBournemouthPage() {
  return (
    <>
      <Navigation />

      <main>
        <SEOBournemouthHero />
        <BournemouthSearchProblem />
        <BournemouthSEOServices />
        <BournemouthSEOMidCTA />
        <BournemouthSEOProof />
        <BournemouthSEOFAQ />
        <BournemouthSEOCTA />
      </main>

      <Footer />
    </>
  );
}