import { Nav } from "../components/nav";
import { WhyHero } from "./sections/hero";
import { Problem } from "./sections/problem";
import { How } from "./sections/how";
import { Vision } from "./sections/vision";
import { Trust } from "./sections/trust";
import { WhyCTA } from "./sections/why-cta";
import { Footer } from "../components/footer";

export default function WhyPage() {
  return (
    <>
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
