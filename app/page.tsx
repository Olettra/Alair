import { Header } from "./components/header";
import { HeroPhrase } from "./components/hero-phrase";
import { SignUpCTA } from "./components/cta";
import { Footer } from "./components/footer";

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
        className="flex-1 flex flex-col items-center w-full pt-24 pb-10"
      >
        <div className="flex-1 flex items-center justify-center w-full fade-up">
          <HeroPhrase />
        </div>
        <div className="fade-up pb-4" style={{ animationDelay: "200ms" }}>
          <SignUpCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
