// app/services/local-seo/page.tsx

import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import LocalSEOHero from "@/components/local-seo/LocalSEOHero";
import LocalSearchProblem from "@/components/local-seo/LocalSearchProblem";
import LocalSEOFoundations from "@/components/local-seo/LocalSEOFoundations";
import LocalSEOServices from "@/components/local-seo/LocalSEOServices";
import LocalSEOFit from "@/components/local-seo/LocalSEOFit";
import LocalSEOMidCTA from "@/components/local-seo/LocalSEOMidCTA";
import LocalSEOFAQ from "@/components/local-seo/LocalSEOFAQ";
import LocalSEOCTA from "@/components/local-seo/LocalSEOCTA";

export const metadata: Metadata = {
    title: "Local SEO Services for UK Businesses | Owlixir",
    description:
        "Local SEO services for UK businesses that want to improve visibility for relevant searches in the towns, cities and service areas they serve.",
};

export default function LocalSEOPage() {
    return (
        <>
            <Navigation />

            <main>
                <LocalSEOHero />
                <LocalSearchProblem />
                <LocalSEOFoundations />
                <LocalSEOServices />
                <LocalSEOMidCTA />
                <LocalSEOFit />
                <LocalSEOServices />
                <LocalSEOFAQ />
                <LocalSEOCTA />
            </main>

            <Footer />
        </>
    );
}