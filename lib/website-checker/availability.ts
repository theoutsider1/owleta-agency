// Safe to import in the UI: no credentials or server dependencies.
export const availabilityMessages = {
    complete: "Check completed.",
    rate_limited: "You've reached your free check limit. Please try again later.",
    temporary_capacity: "The checker is temporarily busy or unavailable. Please try again shortly.",
    daily_scan_limit: "Today's free scan allowance has been reached. Please try again tomorrow.",
    daily_browser_budget: "Today's enquiry-check allowance has been reached. PageSpeed results are still available when possible.",
    security_unavailable: "Enquiry checks are temporarily unavailable. They have not been performed.",
    inspection_failed: "The enquiry inspection could not be completed. No enquiry checks are marked as passed.",
    pagespeed_rate_limited: "The website checker has reached its request allowance. Please try again later.",
    pagespeed_failed: "The website analysis could not be completed. Please try again later.",
} as const;
export type AvailabilityCode = keyof typeof availabilityMessages;
export type CheckAvailability = { status: AvailabilityCode; performed: boolean; retryAfterSeconds?: number };
