import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import WebsiteMaintenanceHero from "@/components/website-maintenance/WebsiteMaintenanceHero";
import MaintenanceReality from "@/components/website-maintenance/MaintenanceReality";
import MaintenanceCoverage from "@/components/website-maintenance/MaintenanceCoverage";
import MaintenanceOptions from "@/components/website-maintenance/MaintenanceOptions";
import MaintenancePlatforms from "@/components/website-maintenance/MaintenancePlatforms";
import ExistingWebsiteSupport from "@/components/website-maintenance/ExistingWebsiteSupport";
import WebsiteMaintenanceFAQ from "@/components/website-maintenance/WebsiteMaintenanceFAQ";
import MaintenanceCTA from "@/components/website-maintenance/MaintenanceCTA";

export const metadata: Metadata = {
    title: "Website Maintenance Services for UK Businesses | Owlixir",
    description:
        "Website maintenance services for UK businesses, including website updates, technical support, fixes, WordPress maintenance and ongoing improvements.",
    alternates: {
        canonical: "/services/website-maintenance",
    },
};

export default function WebsiteMaintenancePage() {
    return (
        <>
            <Navigation />

            <main>
                <WebsiteMaintenanceHero />
                <MaintenanceReality />
                <MaintenanceCoverage />
                <MaintenanceOptions />
                <MaintenancePlatforms />
                <ExistingWebsiteSupport />
                <WebsiteMaintenanceFAQ />
                <MaintenanceCTA />
            </main>

            <Footer />
        </>
    );
}