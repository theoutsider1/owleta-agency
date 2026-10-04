import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WebsiteAuditHero from "@/components/website-audit/WebsiteAuditHero";
import AuditWhy from "@/components/website-audit/AuditWhy";
import AuditAreas from "@/components/website-audit/AuditAreas";
import AuditDeliverable from "@/components/website-audit/AuditDeliverable";
import AuditProcess from "@/components/website-audit/AuditProcess";
import AuditOptions from "@/components/website-audit/AuditOptions";
import AuditRequestForm from "@/components/website-audit/AuditRequestForm";
import WebsiteAuditFAQ from "@/components/website-audit/WebsiteAuditFAQ";
import AuditCTA from "@/components/website-audit/AuditCTA";

export const metadata: Metadata = {
    title: "Website Audit Services for UK Businesses | Owlixir",
    description:
        "Detailed website audits for UK businesses covering customer journeys, SEO, technical health and conversion paths, with clear priorities and recommendations.",
    alternates: {
        canonical: "/services/website-audit",
    },
};

type ServiceType = "check" | "audit";

export default async function WebsiteAuditPage({
    searchParams,
}: {
    searchParams: Promise<{ service?: string }>;
}) {
    const params = await searchParams;

    const initialService: ServiceType =
        params.service === "check" ? "check" : "audit";

    return (
        <>
            <Navigation />

            <main>
                <WebsiteAuditHero />
                <AuditWhy />
                <AuditAreas />
                <AuditDeliverable />
                <AuditProcess />
                <AuditOptions />
                <AuditRequestForm initialService={initialService} />
                <WebsiteAuditFAQ />
                <AuditCTA />
            </main>

            <Footer />
        </>
    );
}