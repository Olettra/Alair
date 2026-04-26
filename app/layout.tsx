import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { WaitlistProvider } from "./components/waitlist-modal";
import { JsonLd } from "./components/json-ld";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const SITE_URL = "https://discoveralik.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alik — An AI That Finds Your People",
    template: "%s — Alik",
  },
  description:
    "No swiping. No browsing. Alik is a personal AI that learns who you are through real conversations, then finds the friends and connections you've been missing.",
  keywords: [
    "AI friend finder",
    "AI matchmaking",
    "AI-to-AI matchmaking",
    "find friends with AI",
    "AI-powered connection app",
    "AI social connection platform",
    "personalized AI friend matching",
    "AI matchmaking without swiping",
    "alternative to Bumble BFF",
    "Alik AI",
  ],
  authors: [{ name: "Alik" }],
  creator: "Alik",
  publisher: "Alik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Alik",
    title: "Alik — An AI That Finds Your People",
    description:
      "Your personal AI learns who you are, then goes out and finds the right friends and connections for you. No swiping. No browsing. Just real people.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alik — An AI That Finds Your People",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alik — An AI That Finds Your People",
    description:
      "Your personal AI learns who you are, then goes out and finds the right friends and connections for you.",
    images: ["/og-image.png"],
    creator: "@discover_alik",
    site: "@discover_alik",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Social Networking",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alik",
  url: SITE_URL,
  logo: `${SITE_URL}/alik-icon.png`,
  description:
    "Alik is a personal AI that learns who you are and finds your people through AI-to-AI conversations.",
  sameAs: [
    "https://www.instagram.com/discover_alik/",
    "https://www.tiktok.com/@discover_alik",
  ],
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Alik",
  url: SITE_URL,
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Web",
  description:
    "A personal AI that learns who you are through conversations, then autonomously finds compatible friends and connections by talking to other users' AIs. No swiping. No browsing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
    description: "Join the waitlist — first 500 spots",
  },
  featureList: [
    "AI-powered friend matching",
    "Natural conversation learning via text and voice",
    "AI-to-AI matchmaking across users worldwide",
    "Privacy-first three-layer data model",
    "Contextual introductions with match reasoning",
    "Works in the background while you live your life",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webAppJsonLd} />
        <WaitlistProvider>{children}</WaitlistProvider>
      </body>
    </html>
  );
}
