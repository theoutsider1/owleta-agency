import { z } from "zod";

export const auditRequestSchema = z.object({
    service: z.enum(["check", "audit"]),

    name: z
        .string()
        .trim()
        .min(2, "Please enter your name.")
        .max(100, "Name is too long."),

        email: z
        .string()
        .trim()
        .max(254, "Email address is too long.")
        .pipe(z.email("Please enter a valid email address.")),

    website: z
        .string()
        .trim()
        .min(1, "Please enter your website address.")
        .max(500, "Website URL is too long.")
        .refine(
            (value) => {
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
        ),

    business: z
        .string()
        .trim()
        .max(150, "Business name is too long.")
        .optional()
        .or(z.literal("")),

    message: z
        .string()
        .trim()
        .max(5000, "Message is too long.")
        .optional()
        .or(z.literal("")),

    turnstileToken: z
        .string()
        .min(1, "Please complete the security check."),
});

export type AuditRequestInput = z.infer<typeof auditRequestSchema>;