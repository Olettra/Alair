"use client";

// the truth dating apps miss: a connection rarely stays what it started as.
const ARCS: string[][] = [
  ["friend", "community", "opportunity", "love"],
  ["stranger", "friendship", "trusted circle"],
  ["not my type", "one of my favorite people"],
  ["a coffee", "a standing weekly thing", "family"],
];

function Arc({ steps }: { steps: string[] }) {
  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-3 font-serif text-forest/80 text-sm sm:text-base whitespace-nowrap">
      {steps.map((step, i) => (
        <span key={step} className="inline-flex items-center gap-2.5 sm:gap-3">
          <span className={i === steps.length - 1 ? "italic text-ochre" : ""}>
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="text-ochre/70">
              →
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

function Track() {
  return (
    <div className="marquee-track flex w-max items-center">
      {ARCS.map((steps, i) => (
        <span key={i} className="flex items-center">
          <Arc steps={steps} />
          <span aria-hidden="true" className="mx-6 sm:mx-9 text-ochre/40 select-none">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export function ConnectionMarquee() {
  return (
    <section
      aria-label="How connections evolve on alik"
      className="w-full select-none"
    >
      <p className="mb-2 text-center text-[10px] uppercase tracking-[0.22em] text-forest/40 font-sans">
        the arcs dating apps miss — alik owns them
      </p>
      <div className="marquee-mask group relative w-full overflow-hidden py-1 cursor-grab active:cursor-grabbing">
        {/* duplicated track for a seamless, continuous loop */}
        <div className="marquee-row flex w-max group-hover:[animation-play-state:paused]">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
