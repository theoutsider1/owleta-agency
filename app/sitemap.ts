import type { MetadataRoute } from "next";

const baseUrl = "https://www.owlixir.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services/web-design`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/web-design-bournemouth`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/website-redesign`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/website-maintenance`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/website-audit`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/seo`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/local-seo`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/seo-bournemouth`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/work`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/work/bournemouth-locksmith`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/work/german-language-centre`,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}