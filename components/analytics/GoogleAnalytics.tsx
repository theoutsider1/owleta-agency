"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import {
    Suspense,
    useEffect,
    useRef,
    useState,
} from "react";

export const ANALYTICS_CONSENT_KEY = "owlixir-analytics-consent";
export const ANALYTICS_CONSENT_EVENT =
    "owlixir:analytics-consent-change";

export type AnalyticsConsentPreference = "accepted" | "rejected";

const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackAnalyticsEvent(eventName: string) {
    if (typeof window === "undefined") {
        return;
    }

    const preference = window.localStorage.getItem(
        ANALYTICS_CONSENT_KEY,
    );

    if (
        preference !== "accepted" ||
        typeof window.gtag !== "function"
    ) {
        return;
    }

    window.gtag("event", eventName);
}

function PageViewTracker({
    isReady,
}: {
    isReady: boolean;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lastTrackedUrl = useRef<string | null>(null);

    useEffect(() => {
        if (
            !isReady ||
            !GA_MEASUREMENT_ID ||
            typeof window.gtag !== "function"
        ) {
            return;
        }

        const query = searchParams.toString();
        const pagePath = query
            ? `${pathname}?${query}`
            : pathname;

        const pageLocation = `${window.location.origin}${pagePath}`;

        if (lastTrackedUrl.current === pageLocation) {
            return;
        }

        window.gtag("event", "page_view", {
            page_title: document.title,
            page_location: pageLocation,
        });

        lastTrackedUrl.current = pageLocation;
    }, [isReady, pathname, searchParams]);

    return null;
}

export default function GoogleAnalytics() {
    const [hasConsent, setHasConsent] = useState(false);
    const [isAnalyticsReady, setIsAnalyticsReady] =
        useState(false);

    useEffect(() => {
        function syncConsent() {
            const preference = window.localStorage.getItem(
                ANALYTICS_CONSENT_KEY,
            );

            const accepted = preference === "accepted";

            setHasConsent(accepted);

            if (!accepted) {
                setIsAnalyticsReady(false);
            }
        }

        syncConsent();

        window.addEventListener(
            ANALYTICS_CONSENT_EVENT,
            syncConsent,
        );

        return () => {
            window.removeEventListener(
                ANALYTICS_CONSENT_EVENT,
                syncConsent,
            );
        };
    }, []);

    if (!GA_MEASUREMENT_ID || !hasConsent) {
        return null;
    }

    return (
        <>
            <Script
                id="google-analytics-consent"
                strategy="afterInteractive"
            >
                {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          window.gtag = window.gtag || gtag;

          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
        `}
            </Script>

            <Script
                id="google-analytics-script"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
                onLoad={() => {
                    if (typeof window.gtag !== "function") {
                        return;
                    }

                    window.gtag("js", new Date());

                    window.gtag("config", GA_MEASUREMENT_ID, {
                        send_page_view: false,
                    });

                    setIsAnalyticsReady(true);
                }}
            />

            <Suspense fallback={null}>
                <PageViewTracker isReady={isAnalyticsReady} />
            </Suspense>
        </>
    );
}