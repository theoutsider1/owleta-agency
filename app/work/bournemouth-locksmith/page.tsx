import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import LocksmithCaseHero from "@/components/work/bournemouth-locksmith/LocksmithCaseHero";
import LocksmithChallenge from "@/components/work/bournemouth-locksmith/LocksmithChallenge";
import LocksmithSolution from "@/components/work/bournemouth-locksmith/LocksmithSolution";
import LocksmithSearchMeasurement from "@/components/work/bournemouth-locksmith/LocksmithSearchMeasurement";
import LocksmithOutcome from "@/components/work/bournemouth-locksmith/LocksmithOutcome";
import LocksmithCaseCTA from "@/components/work/bournemouth-locksmith/LocksmithCaseCTA";

export const metadata: Metadata = {
    title: "Bournemouth Locksmith Website Case Study | Owlixir",
    description:
        "See how Owlixir approached the website structure, local relevance and enquiry journey for an independent locksmith serving Bournemouth, Poole and Christchurch.",
    alternates: {
        canonical: "/work/bournemouth-locksmith",
    },
};

export default function BournemouthLocksmithCaseStudy() {
    return (
        <>
            <Navigation />

            <main>
                <LocksmithCaseHero />
                <LocksmithChallenge />
                <LocksmithSolution />
                <LocksmithSearchMeasurement />
                <LocksmithOutcome />
                <LocksmithCaseCTA />
            </main>

            <Footer />
        </>
    );
}