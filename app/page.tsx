import type { Metadata } from "next";
import { Nav } from "./components/nav";
import { Hero } from "./sections/hero";
import { ChatPreview } from "./sections/chat-preview";
import { CTA } from "./sections/cta";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://discoveralik.com",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1">
        <Hero />
        <ChatPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
