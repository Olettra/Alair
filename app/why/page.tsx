import type { Metadata } from "next";
import { Nav } from "../components/nav";
import { WhyHero } from "./sections/hero";
import { Problem } from "./sections/problem";
import { How } from "./sections/how";
import { Vision } from "./sections/vision";
import { Trust } from "./sections/trust";
import { WhyCTA } from "./sections/why-cta";
import { Footer } from "../components/footer";
import { JsonLd } from "../components/json-ld";

export const metadata: Metadata = {
  title: "Why Alik — How AI-Powered Friend Matching Works",
  description:
    "You don't need another app to scroll. Alik learns who you are through real conversations, talks to other AIs, and brings you the right people. Here's exactly how it works.",
  openGraph: {
    title: "Why Alik — How AI-Powered Friend Matching Works",
    description:
      "You don't need another app to scroll. Alik learns who you are, talks to other AIs, and brings you the right people.",
    url: "https://discoveralik.com/why",
  },
  twitter: {
    title: "Why Alik — How AI-Powered Friend Matching Works",
    description:
      "You don't need another app to scroll. Alik learns who you are, talks to other AIs, and brings you the right people.",
  },
  alternates: {
    canonical: "https://discoveralik.com/why",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Alik work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alik learns about you through natural conversations — no quizzes or swiping. Your AI then talks to other users' AIs to find compatible people, and creates contextual introductions when there's a genuine match.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private with Alik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alik uses three privacy layers: private memory (never shared), matchable signals (abstracted patterns you can edit), and shareable intros (you approve every word before anyone sees it). Nothing leaves your AI without your permission.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Alik different from dating apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alik finds all types of connections — friends, not just dates. There's no swiping or browsing. Your AI works in the background while you live your life, bringing you people who genuinely match your values, humor, and energy.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI-to-AI matchmaking work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your personal AI communicates with other users' AIs to find compatible matches. It compares abstracted personality signals — like communication style, values, and interests — without ever sharing your private conversations. When there's a genuine fit, both AIs create a contextual introduction for their humans.",
      },
    },
    {
      "@type": "Question",
      name: "Is Alik free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alik is currently in pre-launch with a waitlist. Your first hangout introduction is free.",
      },
    },
  ],
};

export default function WhyPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Nav />
      <main className="flex flex-col flex-1">
        <WhyHero />
        <Problem />
        <How />
        <Vision />
        <Trust />
        <WhyCTA />
      </main>
      <Footer />
    </>
  );
}
