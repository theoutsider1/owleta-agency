import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WorkHero from "@/components/work/WorkHero";
import FeaturedLocksmithProject from "@/components/work/FeaturedLocksmithProject";
import GermanLanguageCentreProject from "@/components/work/GermanLanguageCentreProject";
import WorkApproach from "@/components/work/WorkApproach";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = {
  title: "Selected Web Design & Development Work | Owlixir",
  description:
    "Explore selected Owlixir website projects and how we approached their structure, user experience, search foundations and business goals.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navigation />

      <main>
        <WorkHero />
        <FeaturedLocksmithProject />
        <GermanLanguageCentreProject />
        <WorkApproach />
        <WorkCTA />
      </main>

      <Footer />
    </>
  );
}