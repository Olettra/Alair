import { Header } from "./components/header";
import { HeroPhrase } from "./components/hero-phrase";
import { SignUpCTA } from "./components/cta";
import { Footer } from "./components/footer";
import { HowItWorksSection } from "./components/how-it-works-section";
import { ABOUT, FAQ } from "./seo-content";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-forest focus:text-oat focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* ── homepage — first full screen ── */}
        <section className="flex min-h-[100svh] w-full flex-col items-center px-6 pt-24 pb-10">
          {/* the message, centered in the open space */}
          <div className="flex w-full flex-1 items-center justify-center">
            <HeroPhrase />
          </div>

          {/* invite + disclaimer, anchored at the bottom */}
          <div
            className="fade-up flex flex-col items-center gap-3"
            style={{ animationDelay: "2200ms" }}
          >
            <SignUpCTA />
            <p className="font-script text-forest/55 text-xl sm:text-2xl leading-none">
              this is not a dating service
            </p>
          </div>
        </section>

        {/* ── the idea, how it works, the promise — one quiet section ── */}
        <HowItWorksSection />

        {/* Crawlable answer-first content for search engines and AI models.
            Mirrors the FAQPage JSON-LD and the in-dialog copy; visually hidden
            but present in the static HTML and the accessibility tree. */}
        <section aria-label="About alik" className="sr-only">
          <h2>What is alik?</h2>
          <p>{ABOUT}</p>
          <h2>alik frequently asked questions</h2>
          <dl>
            {FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt>{q}</dt>
                <dd>{a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <Footer />
    </>
  );
}
