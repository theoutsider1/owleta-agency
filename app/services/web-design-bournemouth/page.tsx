import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import BournemouthHero from "@/components/web-design-bournemouth/BournemouthHero";
import Footer from "@/components/footer";
import BournemouthLocalBusiness from "@/components/web-design-bournemouth/BournemouthLocalBusiness";
import BournemouthLocalWork from "@/components/web-design-bournemouth/BournemouthLocalWork";
import BournemouthServices from "@/components/web-design-bournemouth/BournemouthServices";
import BournemouthWebsiteTypes from "@/components/web-design-bournemouth/BournemouthWebsiteTypes";

export const metadata: Metadata = {
  title: "Web Design Bournemouth | Websites for Local Businesses | Owlixir",
  description:
    "Web design for Bournemouth businesses focused on clear customer journeys, local search visibility and turning more website visitors into enquiries.",
};

export default function WebDesignBournemouthPage() {
  return (
    <>
      <Navigation />
      <main>
        <BournemouthHero />
        <BournemouthLocalBusiness />
        <BournemouthLocalWork />
        <BournemouthServices />
        <BournemouthWebsiteTypes />
      </main>
      <Footer />
    </>
  );
}