import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/AboutHero";
import BehindOwlixir from "@/components/about/BehindOwlixir";
import HowWeThink from "@/components/about/HowWeThink";
import ApproachInPractice from "@/components/about/ApproachInPractice";
import WorkingWithOwlixir from "@/components/about/WorkingWithOwlixir";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Owlixir | Independent Web Studio",
  description:
    "Learn about Owlixir, an independent web studio helping UK and international businesses build clearer websites, strengthen search visibility and turn more visitors into enquiries.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main>
        <AboutHero />
        <BehindOwlixir />
        <HowWeThink />
        <ApproachInPractice />
        <WorkingWithOwlixir />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}