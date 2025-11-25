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
  description: "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
  icons: {
    icon: "/owlixir-logo",
    apple: "/owlixir-logo",
  },
  openGraph: {
    title: "Owlixir – Web Development & Digital Solutions Agency",
    description: "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
    url: "https://www.owlixir.com",
    siteName: "Owlixir",
    images: [
      {
        url: "/owlixir-logo",
        width: 1200,
        height: 630,
        alt: "Owlixir – Web Development & Digital Solutions Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owlixir – Web Development & Digital Solutions Agency",
    description: "Owlixir is a professional digital agency creating modern websites, web apps, and branding solutions to help businesses grow online.",
    images: ["/owlixir-logo"],
  },
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
