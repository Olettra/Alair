import { Reveal } from "./reveal";

const LABEL = "text-[11px] uppercase tracking-[0.22em] text-forest/45 font-sans";

// The vision manifesto — lifted out of the hero so it can breathe as its own
// editorial moment: a single, centered statement about where alik is headed.
export function VisionSection() {
  return (
    <section
      id="vision"
      aria-label="The alik vision"
      className="relative scroll-mt-20 overflow-hidden border-t border-forest/10"
    >
      <div className="mx-auto w-full max-w-[1000px] px-6 py-24 text-center md:px-12 lg:py-36">
        <Reveal>
          <p className={LABEL}>the vision</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-forest text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.18] tracking-tight">
            There is a world where alik becomes your{" "}
            <span className="italic text-ochre">personal concierge</span>,
            quietly meeting other alik for you, so you no longer have to search,
            swipe, or guess.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl font-serif italic text-forest/60 text-lg leading-relaxed sm:text-xl">
            It finds the people who could make your world more memorable, and
            whose world you could make memorable too.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
