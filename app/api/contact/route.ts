import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { verifyTurnstile } from "@/lib/security/turnstile";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "unknown";
    }

    return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {

    try {
        /*
         * 1. Parse request
         */
        const body: unknown = await request.json();

        /*
         * 2. Validate payload with Zod
         */
        const parsed = contactSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        parsed.error.issues[0]?.message ??
                        "Please check the form and try again.",
                },
                { status: 400 },
            );
        }

        const {
            name,
            email,
            business,
            projectType,
            website,
            message,
            turnstileToken,
        } = parsed.data;

        /*
         * 4. Determine request identifier
         */
        const ip = getClientIp(request);

        /*
         * 5. Rate limit
         *
         */
        const rateLimit = await checkRateLimit("contact", ip);

        if (!rateLimit.success) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Too many enquiries have been submitted. Please try again later.",
                },
                {
                    status: 429,
                    headers:
                        rateLimit.reset > 0
                            ? {
                                "Retry-After": String(
                                    Math.max(
                                        1,
                                        Math.ceil((rateLimit.reset - Date.now()) / 1000),
                                    ),
                                ),
                            }
                            : undefined,
                },
            );
        }

        /*
         * 6. Verify Cloudflare Turnstile
         */
        const turnstileValid = await verifyTurnstile(
            turnstileToken,
            ip === "unknown" ? undefined : ip,
        );

        if (!turnstileValid) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "We could not verify the security check. Please try again.",
                },
                { status: 400 },
            );
        }

        /*
         * 7. Valid submission
        */
        const contactEmail = process.env.CONTACT_EMAIL;

        if (!contactEmail) {
            console.error("CONTACT_EMAIL is not configured.");

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Something went wrong while sending your enquiry. Please try again.",
                },
                { status: 500 },
            );
        }

        const { error } = await resend.emails.send({
            from: "Owlixir <hello@owlixir.com>",
            to: [contactEmail],
            replyTo: email,
            subject: `New Owlixir enquiry: ${projectType}`,
            text: [
                "New enquiry from owlixir.com",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Business: ${business || "Not provided"}`,
                `Project type: ${projectType}`,
                `Website: ${website || "Not provided"}`,
                "",
                "Message:",
                message,
            ].join("\n"),
        });

        if (error) {
            console.error("Resend contact email failed:", {
                name: error.name,
                message: error.message,
            });

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Something went wrong while sending your enquiry. Please try again.",
                },
                { status: 500 },
            );
        }

        return NextResponse.json({
            success: true,
            message: "Thanks. Your enquiry has been received.",
        });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while sending your enquiry. Please try again.",
            },
            { status: 500 },
        );
    }
}