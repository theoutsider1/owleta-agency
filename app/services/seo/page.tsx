import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHero from "@/components/seo/SEOHero";
import SEOVisibilityProblem from "@/components/seo/SEOVisibilityProblem";
import SEOFoundations from "@/components/seo/SEOFoundations";
import SEOServices from "@/components/seo/SEOServices";
import SEORoutes from "@/components/seo/SEORoutes";
import SEOProcess from "@/components/seo/SEOProcess";
import SEONextStep from "@/components/seo/SEONextStep";
import SEOFAQ from "@/components/seo/SEOFAQ";
import SEOCTA from "@/components/seo/SEOCTA";

export const metadata: Metadata = {
    title: "SEO Services for UK Businesses | Owlixir",
    description:
        "SEO services for UK businesses focused on improving search visibility, strengthening website foundations and helping the right customers find the right pages.",
    alternates: {
        canonical: "/services/seo",
    },
};

export default function SEOPage() {
    return (
        <>
            <Navigation />

            <main>
                <SEOHero />
                <SEOVisibilityProblem />
                <SEOFoundations />
                <SEOServices />
                <SEORoutes />
                <SEOProcess />
                <SEONextStep />
                <SEOFAQ />
                <SEOCTA />
            </main>

            <Footer />
        </>
    );
}