import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { checkRateLimit } from "@/lib/security/rate-limit";
import { verifyTurnstile } from "@/lib/security/turnstile";
import { auditRequestSchema } from "@/lib/validation/audit";

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
        const body: unknown = await request.json();
        const parsed = auditRequestSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please check the form and try again.",
                    errors: z.treeifyError(parsed.error),
                },
                { status: 400 },
            );
        }

        const {
            service,
            name,
            email,
            website,
            business,
            message,
            turnstileToken,
        } = parsed.data;

        const ip = getClientIp(request);
        const rateLimit = await checkRateLimit("audit", ip);

        if (!rateLimit.success) {
            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Too many requests have been submitted. Please try again later.",
                },
                {
                    status: 429,
                    headers:
                        rateLimit.reset > 0
                            ? {
                                "Retry-After": String(
                                    Math.max(
                                        1,
                                        Math.ceil(
                                            (rateLimit.reset - Date.now()) / 1000,
                                        ),
                                    ),
                                ),
                            }
                            : undefined,
                },
            );
        }

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

        const contactEmail = process.env.CONTACT_EMAIL;

        if (!contactEmail) {
            console.error("CONTACT_EMAIL is not configured.");

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Something went wrong while sending your request. Please try again.",
                },
                { status: 500 },
            );
        }

        const requestType =
            service === "check" ? "Free Website Check" : "Website Audit";

        const { error } = await resend.emails.send({
            from: "Owlixir <hello@owlixir.com>",
            to: [contactEmail],
            replyTo: email,
            subject: `New Owlixir request: ${requestType}`,
            text: [
                "New website review request from owlixir.com",
                "",
                `Request type: ${requestType}`,
                `Name: ${name}`,
                `Email: ${email}`,
                `Business: ${business || "Not provided"}`,
                `Website: ${website}`,
                "",
                "What they would like us to look at:",
                message || "No additional details provided.",
            ].join("\n"),
        });

        if (error) {
            console.error("Resend audit request email failed:", {
                name: error.name,
                message: error.message,
            });

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Something went wrong while sending your request. Please try again.",
                },
                { status: 500 },
            );
        }

        return NextResponse.json({
            success: true,
            message: "Thanks. Your request has been received.",
        });
    } catch (error) {
        console.error("Audit request form error:", error);

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while sending your request. Please try again.",
            },
            { status: 500 },
        );
    }
}