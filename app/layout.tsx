import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/structured-data";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/analytics/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://owlixir.com"),

  title: {
    default: "Owlixir | Web Design, SEO & Website Support",
    template: "%s",
  },

  description:
    "Owlixir is an independent web studio helping UK and international businesses build, improve and optimise websites for better visibility, trust and enquiries.",

  applicationName: "Owlixir",

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Owlixir",
    title: "Owlixir | Web Design, SEO & Website Support",
    description:
      "Independent web studio helping UK and international businesses build, improve and optimise websites for better visibility, trust and enquiries.",
    url: "https://owlixir.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Owlixir web design, SEO and website support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Owlixir | Web Design, SEO & Website Support",
    description:
      "Independent web studio helping UK and international businesses build, improve and optimise websites for better visibility, trust and enquiries.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />

        {children}

        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}