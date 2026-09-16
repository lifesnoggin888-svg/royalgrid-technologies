import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClickSound from "@/components/ClickSound";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-rg-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-rg-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-rg-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


const siteUrl = "https://royalgrid-technologies.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RoyalGrid Technologies — African Opportunity-Access Infrastructure",
    template: "%s | RoyalGrid Technologies",
  },
  description:
    "RoyalGrid Technologies is building the opportunity-access infrastructure for African businesses. Its flagship platform, OpportunityGrid, discovers, verifies, and matches funding, procurement, accelerator, and development-finance opportunities into an evidence-backed path to application readiness.",
  keywords: [
    "RoyalGrid Technologies",
    "OpportunityGrid",
    "African funding opportunities",
    "Nigeria grants",
    "procurement opportunities Africa",
    "opportunity access infrastructure",
  ],
  authors: [{ name: "RoyalGrid Technologies" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "RoyalGrid Technologies",
    title: "RoyalGrid Technologies — African Opportunity-Access Infrastructure",
    description:
      "Opportunity should not depend on knowing where to look. RoyalGrid Technologies discovers, verifies, and matches African businesses to the funding, procurement, and growth opportunities they qualify for.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoyalGrid Technologies — African Opportunity-Access Infrastructure",
    description:
      "Opportunity should not depend on knowing where to look. Discover, verify, and act on opportunities built for African businesses.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  themeColor: "#05090e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <ClickSound />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
