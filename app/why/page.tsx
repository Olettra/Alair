import { Nav } from "../components/nav";
import { WhyHero } from "./sections/hero";
import { Problem } from "./sections/problem";
import { What } from "./sections/what";
import { How } from "./sections/how";
import { Vision } from "./sections/vision";
import { Trust } from "./sections/trust";
import { WhyCTA } from "./sections/why-cta";
import Link from "next/link";

export default function WhyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1">
        <WhyHero />
        <Problem />
        <What />
        <How />
        <Vision />
        <Trust />
        <WhyCTA />
      </main>
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 sm:flex-row sm:px-12">
        <Link href="/" className="font-serif text-xl">
          alik
        </Link>
        <div className="flex gap-6">
          <a href="#" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
            Privacy
          </a>
          <a href="#" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
            Terms
          </a>
          <a href="#" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text">
            Contact
          </a>
        </div>
      </footer>
    </>
  );
}
