import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import GermanLanguageCaseHero from "@/components/work/german-language-centre/GermanLanguageCaseHero";
import GermanLanguageChallenge from "@/components/work/german-language-centre/GermanLanguageChallenge";
import GermanLanguageSolution from "@/components/work/german-language-centre/GermanLanguageSolution";
import GermanLanguageExperience from "@/components/work/german-language-centre/GermanLanguageExperience";
import GermanLanguageOutcome from "@/components/work/german-language-centre/GermanLanguageOutcome";
import GermanLanguageCaseCTA from "@/components/work/german-language-centre/GermanLanguageCaseCTA";

export const metadata: Metadata = {
  title: "German Language Centre Website Case Study | Owlixir",
  description:
    "Explore a website project for a German language centre, focused on clearer content organisation and a better digital journey for Arabic-speaking learners.",
};

export default function GermanLanguageCentreCaseStudy() {
  return (
    <>
      <Navigation />

      <main>
        <GermanLanguageCaseHero />
        <GermanLanguageChallenge />
        <GermanLanguageSolution />
        <GermanLanguageExperience />
        <GermanLanguageOutcome />
        <GermanLanguageCaseCTA />
      </main>

      <Footer />
    </>
  );
}