type TurnstileResponse = {
    success: boolean;
    "error-codes"?: string[];
};

export async function verifyTurnstile(
    token: string,
    remoteIp?: string,
): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!secretKey) {
        console.error("TURNSTILE_SECRET_KEY is not configured.");
        return false;
    }

    try {
        const body = new URLSearchParams();

        body.append("secret", secretKey);
        body.append("response", token);

        if (remoteIp) {
            body.append("remoteip", remoteIp);
        }

        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                body,
                cache: "no-store",
            },
        );

        if (!response.ok) {
            console.error(
                `Turnstile verification request failed: ${response.status}`,
            );
            return false;
        }

        const result = (await response.json()) as TurnstileResponse;

        if (!result.success) {
            console.warn(
                "Turnstile verification rejected:",
                result["error-codes"] ?? [],
            );
        }

        return result.success;
    } catch (error) {
        console.error("Turnstile verification failed:", error);
        return false;
    }
}