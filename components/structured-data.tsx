const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://www.owlixir.com/#website",
            url: "https://www.owlixir.com/",
            name: "Owlixir",
            description:
                "Independent web studio helping UK and international businesses build, improve and optimise websites.",
            inLanguage: "en-GB",
            publisher: {
                "@id": "https://www.owlixir.com/#organization",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://www.owlixir.com/#organization",
            name: "Owlixir",
            url: "https://www.owlixir.com/",
            description:
                "Independent web studio providing web design, website improvement, SEO and website support services.",
            founder: {
                "@type": "Person",
                name: "Hatim Tagmi",
            },
            areaServed: [
                {
                    "@type": "Country",
                    name: "United Kingdom",
                },
                {
                    "@type": "Country",
                    name: "Morocco",
                },
            ],
        },
    ],
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
        />
    );
}