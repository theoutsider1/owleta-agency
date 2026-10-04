import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import WebDesignHero from "@/components/web-design/WebDesignHero";
import Footer from "@/components/footer";
import WebDesignPrinciples from "@/components/web-design/WebDesignPrinciples";
import WebDesignAnatomy from "@/components/web-design/WebDesignAnatomy";
import WebDesignFit from "@/components/web-design/WebDesignFit";
import WebDesignWork from "@/components/web-design/WebDesignWork";
import WebDesignProcess from "@/components/web-design/WebDesignProcess";
import WebDesignFAQ from "@/components/web-design/WebDesignFAQ";
import WebDesignCTA from "@/components/web-design/WebDesignCTA";

export const metadata: Metadata = {
    title: "Web Design Services for UK Businesses | Owlixir",
    description:
        "Web design services for UK businesses focused on clear customer journeys, search visibility and turning more website visitors into enquiries.",
    alternates: {
        canonical: "/services/web-design",
    },
};

export default function WebDesignPage() {
    return (
        <>
            <Navigation />

            <main>
                <WebDesignHero />
                <WebDesignPrinciples />
                <WebDesignAnatomy />
                <WebDesignFit />
                <WebDesignWork />
                <WebDesignProcess />
                <WebDesignFAQ />
                <WebDesignCTA />
            </main>

            <Footer />
        </>
    );
}