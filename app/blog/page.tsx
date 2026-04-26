import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on loneliness, AI, and what it means to actually find your people. The Alik blog.",
  openGraph: {
    title: "Blog — Alik",
    description:
      "Thoughts on loneliness, AI, and what it means to actually find your people.",
    url: "https://discoveralik.com/blog",
  },
  twitter: {
    title: "Blog — Alik",
    description:
      "Thoughts on loneliness, AI, and what it means to actually find your people.",
  },
  alternates: {
    canonical: "https://discoveralik.com/blog",
  },
};

const posts = [
  {
    slug: "loneliness-isnt-a-discovery-problem",
    title: "Loneliness isn't a discovery problem",
    subtitle: "Why we built Alik.",
    date: "April 26, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1 px-6 py-24 sm:py-36">
        <div className="mx-auto w-full max-w-[680px]">
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] tracking-tight mb-16">
            Blog
          </h1>

          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-t border-border py-10 transition-colors duration-200"
            >
              <p className="text-xs text-text-muted mb-3">{post.date}</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.15] tracking-tight mb-2 group-hover:text-text-dim transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-[15px] font-light text-text-dim">
                {post.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
