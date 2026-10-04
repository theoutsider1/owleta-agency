import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Please enter your name.")
        .max(100, "Name is too long."),

    email: z
        .string()
        .trim()
        .email("Please enter a valid email address.")
        .max(254, "Email address is too long."),

    business: z
        .string()
        .trim()
        .max(150, "Business name is too long.")
        .optional()
        .or(z.literal("")),

    projectType: z.enum([
        "New website",
        "Website redesign",
        "Website improvements",
        "SEO",
        "Website maintenance",
        "White-label development",
        "Other",
    ]),

    website: z
        .string()
        .trim()
        .max(500, "Website URL is too long.")
        .refine(
            (value) => {
                if (!value) return true;

                const normalized = /^https?:\/\//i.test(value)
                    ? value
                    : `https://${value}`;

                try {
                    const url = new URL(normalized);

                    return (
                        (url.protocol === "http:" || url.protocol === "https:") &&
                        url.hostname.includes(".")
                    );
                } catch {
                    return false;
                }
            },
            {
                message: "Please enter a valid website address.",
            },
        )
        .optional()
        .or(z.literal("")),

    message: z
        .string()
        .trim()
        .min(10, "Please tell us a little more about the project.")
        .max(5000, "Message is too long."),

    turnstileToken: z
        .string()
        .min(1, "Please complete the security check."),
});

export type ContactFormData = z.infer<typeof contactSchema>;