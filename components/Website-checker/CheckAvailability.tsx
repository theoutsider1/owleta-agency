import type { WebsiteCheckResult } from "@/lib/website-checker/schema";
import { availabilityMessages } from "@/lib/website-checker/availability";

export function CheckAvailability({
    result,
}: {
    result: WebsiteCheckResult;
}) {
    if (!result.cached && result.technical.status === "complete") {
        return null;
    }

    return (
        <div
            className="mt-6 space-y-3 text-[14px] leading-7 text-text-secondary"
            role="status"
        >
            {result.cached && (
                <p>
                    Saved results from{" "}
                    {new Date(result.checkedAt).toLocaleString()}.
                    The homepage was not scanned again.
                </p>
            )}

            {result.technical.status !== "complete" && (
                <p>
                    {availabilityMessages[result.technical.status]}
                </p>
            )}
        </div>
    );
}