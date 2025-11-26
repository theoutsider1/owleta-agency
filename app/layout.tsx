import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owlixir – Web Development & Digital Solutions Agency",
  description:
    "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
  metadataBase: new URL("https://www.owlixir.com"), 

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Owlixir – Web Development & Digital Solutions Agency",
    description:
      "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
    url: "https://www.owlixir.com",
    siteName: "Owlixir",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Owlixir – Web Development & Digital Solutions Agency"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Owlixir – Web Development & Digital Solutions Agency",
    description:
      "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
    images: ["/web-app-manifest-512x512.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
