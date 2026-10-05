"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
    ANALYTICS_CONSENT_EVENT,
    ANALYTICS_CONSENT_KEY,
    type AnalyticsConsentPreference,
} from "@/components/analytics/GoogleAnalytics";

export const OPEN_COOKIE_PREFERENCES_EVENT =
    "owlixir:open-cookie-preferences";

function deleteGoogleAnalyticsCookies() {
    const cookies = document.cookie.split(";");

    for (const cookie of cookies) {
        const cookieName = cookie.split("=")[0]?.trim();

        if (
            cookieName === "_ga" ||
            cookieName?.startsWith("_ga_")
        ) {
            document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;

            document.cookie = `${cookieName}=; Max-Age=0; Path=/; Domain=${window.location.hostname}; SameSite=Lax`;

            const hostnameParts = window.location.hostname.split(".");

            if (hostnameParts.length >= 2) {
                const rootDomain = hostnameParts.slice(-2).join(".");

                document.cookie = `${cookieName}=; Max-Age=0; Path=/; Domain=.${rootDomain}; SameSite=Lax`;
            }
        }
    }
}

export default function CookieConsent() {
    const [isReady, setIsReady] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedConsent = window.localStorage.getItem(
            ANALYTICS_CONSENT_KEY,
        ) as AnalyticsConsentPreference | null;

        setIsOpen(
            storedConsent !== "accepted" &&
            storedConsent !== "rejected",
        );

        setIsReady(true);

        function openPreferences() {
            setIsOpen(true);
        }

        window.addEventListener(
            OPEN_COOKIE_PREFERENCES_EVENT,
            openPreferences,
        );

        return () => {
            window.removeEventListener(
                OPEN_COOKIE_PREFERENCES_EVENT,
                openPreferences,
            );
        };
    }, []);

    function acceptAll() {
        window.localStorage.setItem(
            ANALYTICS_CONSENT_KEY,
            "accepted",
        );

        window.dispatchEvent(
            new Event(ANALYTICS_CONSENT_EVENT),
        );

        setIsOpen(false);
    }

    function rejectAll() {
        const previousPreference = window.localStorage.getItem(
            ANALYTICS_CONSENT_KEY,
        );

        /*
         * If Analytics is currently active, deny storage immediately
         * before removing the saved preference and reloading.
         */
        if (
            previousPreference === "accepted" &&
            typeof window.gtag === "function"
        ) {
            window.gtag("consent", "update", {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
            });
        }

        window.localStorage.setItem(
            ANALYTICS_CONSENT_KEY,
            "rejected",
        );

        deleteGoogleAnalyticsCookies();

        window.dispatchEvent(
            new Event(ANALYTICS_CONSENT_EVENT),
        );

        if (previousPreference === "accepted") {
            window.location.reload();
            return;
        }

        setIsOpen(false);
    }

    if (!isReady || !isOpen) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-[760px] rounded-[14px] border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:p-6"
        >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="max-w-[500px]">
                    <p
                        id="cookie-consent-title"
                        className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted"
                    >
                        Your privacy
                    </p>

                    <p
                        id="cookie-consent-description"
                        className="text-[15px] leading-6 text-text-secondary md:text-[16px]"
                    >
                        We use optional analytics to understand how people use Owlixir and
                        improve the website. You can accept or reject analytics, and change
                        your choice later.{" "}
                        <Link
                            href="/privacy"
                            className="cursor-pointer text-text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                        >
                            Privacy policy
                        </Link>
                    </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={rejectAll}
                        className="cursor-pointer rounded-[9px] border border-border px-4 py-2.5 text-[14px] font-semibold text-text-primary transition-colors hover:border-text-muted"
                    >
                        Reject all
                    </button>

                    <button
                        type="button"
                        onClick={acceptAll}
                        className="cursor-pointer rounded-[9px] bg-primary px-4 py-2.5 text-[14px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
                    >
                        Accept all
                    </button>
                </div>
            </div>
        </div>
    );
}