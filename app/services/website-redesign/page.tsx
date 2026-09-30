import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import WebsiteRedesignHero from "@/components/website-redesign/WebsiteRedesignHero";
import Footer from "@/components/footer";
import RedesignProblems from "@/components/website-redesign/RedesignProblems";
import RedesignApproach from "@/components/website-redesign/RedesignApproach";
import RedesignFocus from "@/components/website-redesign/RedesignFocus";
import RedesignFoundation from "@/components/website-redesign/RedesignFoundation";
import RedesignProcess from "@/components/website-redesign/RedesignProcess";
import WebsiteRedesignFAQ from "@/components/website-redesign/WebsiteRedesignFAQ";
import RedesignCTA from "@/components/website-redesign/RedesignCTA";

export const metadata: Metadata = {
  title: "Website Redesign Services for UK Businesses | Owlixir",
  description:
    "Website redesign services for UK businesses focused on improving customer journeys, performance, search foundations and conversion paths.",
};

export default function WebsiteRedesignPage() {
  return (
    <>
      <Navigation />

      <main>
        <WebsiteRedesignHero />
        <RedesignProblems />
        <RedesignApproach />
        <RedesignFocus />
        <RedesignFoundation />
        <RedesignProcess />
        <WebsiteRedesignFAQ />
        <RedesignCTA />
      </main>

      <Footer />
    </>
  );
}