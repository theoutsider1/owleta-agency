const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://owlixir.com/#website",
            url: "https://owlixir.com/",
            name: "Owlixir",
            description:
                "Independent web studio helping UK and international businesses build, improve and optimise websites.",
            inLanguage: "en-GB",
            publisher: {
                "@id": "https://owlixir.com/#organization",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://owlixir.com/#organization",
            name: "Owlixir",
            url: "https://owlixir.com/",
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