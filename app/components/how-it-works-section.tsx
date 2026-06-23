import { Reveal } from "./reveal";
import { CurveUnderline } from "./curve-underline";
import { TaglineStage } from "./tagline-stage";
import { CommunityScene } from "./community-scene";

const LABEL = "text-[11px] uppercase tracking-[0.22em] text-forest/45 font-sans";

const STEPS = [
  {
    n: "01",
    title: "It gets to know you",
    body: "You talk to alik like a friend, a little every day. It learns your values, your humor, and how you actually connect. No profile. No quiz. No swiping.",
  },
  {
    n: "02",
    title: "It talks to other alik",
    body: "Behind the scenes, your AI compares notes with other people's AI, doing the searching and the vetting. When it finds a real fit, the first hello is yours to make.",
  },
  {
    n: "03",
    title: "It finds your people",
    body: "A hiking crew. A Sunday five a side. A date. Someone to start a company with. A community that feels like home. Whatever genuinely fits.",
  },
];

const ARCS: string[][] = [
  ["friend", "love", "opportunity", "a co-founder"],
  ["stranger", "friendship", "trusted circle"],
  ["not my type", "one of my favorite people"],
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-label="How alik works"
      className="relative scroll-mt-20 overflow-hidden border-t border-forest/10"
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        {/* headline */}
        <div className="grid gap-x-16 gap-y-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className={LABEL}>how it works</p>
            <h2 className="mt-4 font-serif text-forest text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-tight">
              You just talk. alik finds{" "}
              <span className="relative inline-block italic text-ochre">
                your people
                <CurveUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl font-serif text-forest/75 text-lg leading-relaxed sm:text-xl lg:pb-2">
              You&rsquo;re early, and that&rsquo;s the point. While your alik
              searches and vets in the background, the network is still filling
              in, so we pay you for the real, human insight only you
              can give. You&rsquo;re not waiting around. You&rsquo;re helping
              build the thing you&rsquo;ll belong to.
            </p>
          </Reveal>
        </div>

        {/* steps connector: arrows + a dot travelling slowly 1 → 2 → 3 */}
        <div className="relative mt-20 mb-10 hidden h-3 sm:block">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-forest/15" />
          <span className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ochre/55">
            →
          </span>
          <span className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ochre/55">
            →
          </span>
          <span
            className="dot-travel absolute top-1/2 h-9 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(138,138,138,0.85), rgba(138,138,138,0))",
            }}
          />
        </div>

        {/* three steps */}
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-10 lg:gap-16">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="group">
              <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <span className="font-serif text-ochre/40 text-3xl transition-colors duration-300 group-hover:text-forest/55">
                  {s.n}
                </span>
                <h3 className="mt-3 font-serif text-forest text-2xl">{s.title}</h3>
                <p className="mt-3 text-forest/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* real life, not endless chatting: a few people → a plan → a morning out */}
        <Reveal className="mt-20 lg:mt-28">
          <div className="flex flex-col items-center gap-7 text-center">
            <p className="max-w-md font-serif text-forest/70 text-lg leading-relaxed">
              A volunteering morning. A long walk. A coffee. alik is built to get
              you off the screen and into the same room.
            </p>
            <CommunityScene />
          </div>
        </Reveal>

        {/* lower band: flashing polaroid quotes bottom-left, the promise bottom-right */}
        <div className="mt-20 grid items-end gap-12 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          <TaglineStage />

          <div className="max-w-xl">
            <Reveal>
              <p className={LABEL}>the alik promise</p>
              <p className="mt-3 font-serif text-forest text-[clamp(1.4rem,2.3vw,2.1rem)] leading-snug">
                Dating apps make you search for a person. alik helps you walk
                into the right room.
              </p>
              <div className="mt-5 space-y-2.5 font-serif text-forest text-lg sm:text-xl">
                {ARCS.map((arc) => (
                  <p
                    key={arc.join()}
                    className="flex flex-wrap items-center gap-x-2.5 gap-y-1"
                  >
                    {arc.map((step, j) => (
                      <span key={step} className="flex items-center gap-x-2.5">
                        <span className={j === arc.length - 1 ? "italic text-ochre" : ""}>
                          {step}
                        </span>
                        {j < arc.length - 1 && (
                          <span aria-hidden="true" className="text-ochre/55">
                            →
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
              <p className="mt-5 font-serif italic text-forest/70">
                Dating apps miss that. alik is built for it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
