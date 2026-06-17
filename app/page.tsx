import { Header } from "./components/header";
import { HeroPhrase } from "./components/hero-phrase";
import { SignUpCTA } from "./components/cta";
import { Footer } from "./components/footer";
import { MatchmakingConstellation } from "./components/matchmaking-constellation";
import { ConnectionMarquee } from "./components/connection-marquee";
import { OutcomeProvider } from "./components/outcome-context";
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
      <main
        id="main"
        className="flex-1 flex flex-col items-center w-full pt-20 pb-6"
      >
        <OutcomeProvider>
          <div className="relative flex-1 flex items-center justify-center w-full">
            <MatchmakingConstellation />
            <div className="relative z-10">
              <HeroPhrase />
            </div>
          </div>
        </OutcomeProvider>

        <div
          className="fade-up flex flex-col items-center gap-3 pb-5"
          style={{ animationDelay: "650ms" }}
        >
          <SignUpCTA />
          <a
            href="#earn"
            className="group inline-flex items-center gap-1.5 text-[clamp(0.68rem,1.9vw,0.88rem)] font-serif italic text-forest/55 hover:text-ochre transition-colors"
          >
            <span aria-hidden="true">✦</span>
            <span>earn while you wait for your match</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>

        <div className="fade-up w-full" style={{ animationDelay: "800ms" }}>
          <ConnectionMarquee />
        </div>

        {/* Crawlable answer-first content for search engines and AI models.
            Mirrors the FAQPage JSON-LD and the in-dialog copy; visually hidden
            but present in the static HTML and the accessibility tree. */}
        <section aria-label="About alik" className="sr-only">
          <h2>What is alik?</h2>
          <p>{ABOUT}</p>
          <h2>alik — frequently asked questions</h2>
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
