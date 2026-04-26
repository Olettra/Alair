import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { JsonLd } from "../../components/json-ld";
import { BlogContent } from "./content";

const SITE_URL = "https://discoveralik.com";
const POST_URL = `${SITE_URL}/blog/loneliness-isnt-a-discovery-problem`;

export const metadata: Metadata = {
  title: "Loneliness Isn't a Discovery Problem. Why We Built Alik",
  description:
    "With 8.2 billion people on the planet, loneliness is still an epidemic. The problem isn't finding people. It's the cost of looking. That's why we built Alik, a personal AI that finds your people for you.",
  openGraph: {
    type: "article",
    title: "Loneliness Isn't a Discovery Problem. Why We Built Alik",
    description:
      "The problem isn't finding people. It's the cost of looking. That's why we built Alik, a personal AI that finds your people for you.",
    url: POST_URL,
    publishedTime: "2026-04-26T00:00:00.000Z",
    authors: ["Alik"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alik — An AI That Finds Your People",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loneliness Isn't a Discovery Problem. Why We Built Alik",
    description:
      "The problem isn't finding people. It's the cost of looking. That's why we built Alik.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: POST_URL,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Loneliness Isn't a Discovery Problem",
  description:
    "With 8.2 billion people on the planet, loneliness is still an epidemic. The problem isn't finding people. It's the cost of looking. That's why we built Alik.",
  url: POST_URL,
  datePublished: "2026-04-26T00:00:00.000Z",
  dateModified: "2026-04-26T00:00:00.000Z",
  author: {
    "@type": "Organization",
    name: "Alik",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Alik",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/alik-icon.png`,
    },
  },
  image: `${SITE_URL}/og-image.png`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": POST_URL,
  },
};

export default function BlogPost() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Nav />
      <main className="flex flex-col flex-1">
        <article className="px-6 pt-10 pb-24 sm:pt-14 sm:pb-36">
          <header className="mx-auto max-w-[680px] mb-20 sm:mb-28">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-text mb-12"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              All posts
            </Link>

            <time
              dateTime="2026-04-26"
              className="block text-xs uppercase tracking-[2px] text-text-muted mb-6"
            >
              April 26, 2026
            </time>
            <h1 className="font-serif text-[clamp(36px,5.5vw,56px)] font-normal leading-[1.08] tracking-tight mb-4">
              Loneliness isn&apos;t a discovery problem
            </h1>
            <p className="font-serif text-[clamp(18px,2.5vw,24px)] leading-[1.4] tracking-tight text-text-dim">
              Why we built Alik.
            </p>
          </header>

          <BlogContent />
        </article>
      </main>
      <Footer />
    </>
  );
}
