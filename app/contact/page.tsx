import type { Metadata } from "next";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactProcess from "@/components/contact/ContactProcess";
import ContactAlternative from "@/components/contact/ContactAlternative";

export const metadata: Metadata = {
    title: "Contact Owlixir | Start a Website Project",
    description:
        "Contact Owlixir about a new website, website improvements, SEO or white-label web development.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navigation />

            <main>
                <ContactHero />
                <ContactForm />
                <ContactProcess />
                <ContactAlternative />
            </main>

            <Footer />
        </>
    );
}