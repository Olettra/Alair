"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { CyclingWord } from "./cycling-word";

// Shared scroll-reveal: fade + lift the first time an element enters the
// viewport, then stay put. Used across both views so the section unfolds as
// you scroll into it rather than all at once.
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -12% 0px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});
import { DyingText } from "./dying-text";

const LABEL = "text-[10px] uppercase tracking-[0.24em] text-forest/40 font-sans";

// Inline emphasis — keeps the manifesto's voice consistent and quiet.
const Em = ({ children }: { children: React.ReactNode }) => (
  <span className="italic text-ochre">{children}</span>
);
const Underline = ({ children }: { children: React.ReactNode }) => (
  <span className="underline decoration-ochre/50 decoration-2 underline-offset-4">
    {children}
  </span>
);

// Outlined line icons (stroke, never filled) drawn in-house to match the
// hand-drawn SVGs elsewhere in the brand. 24×24, currentColor stroke.
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 26,
  height: 26,
  "aria-hidden": true,
};

// a chat bubble — you mention something
const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
  </svg>
);

// two nodes exchanging — the two aliks talk it out between themselves
const ExchangeIcon = () => (
  <svg {...iconProps}>
    <circle cx="5" cy="12" r="2.5" />
    <circle cx="19" cy="12" r="2.5" />
    <path d="M8 9.5h7" />
    <path d="M15 9.5 13.2 8M15 9.5 13.2 11" />
    <path d="M16 14.5H9" />
    <path d="M9 14.5 10.8 13M9 14.5 10.8 16" />
  </svg>
);

// a map pin — you just show up
const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

// The journey, three beats across the page.
const STEPS = [
  {
    icon: <ChatIcon />,
    label: "You mention something offhand",
    body: "Chess. Hiking. That obscure show you can’t stop thinking about. Your alik pays attention. Learns what lights you up.",
  },
  {
    icon: <ExchangeIcon />,
    label: "Your alik goes looking",
    body: "Somewhere across the city, someone else said something similar to theirs. The two of them talk, quietly sorting it out between themselves.",
  },
  {
    icon: <PinIcon />,
    label: "You just show up",
    body: "One message. Here’s who they are, here’s what you have in common. Want to play chess this Sunday? One yes. One coffee shop. One friend.",
  },
];

type View = "how" | "idea";

export function HowItWorksSection() {
  // The idea leads; "how it works" is the second beat behind the toggle.
  const [view, setView] = useState<View>("idea");
  const sectionRef = useRef<HTMLElement>(null);

  // The "idea" nav link points at #idea; there's no such element, so we catch
  // the hash here, flip to the idea view, scroll the section into place, then
  // clear the hash so #how-it-works keeps working as a plain anchor.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => {
      const hash = window.location.hash;
      if (hash === "#idea") {
        setView("idea");
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      } else if (hash === "#how-it-works") {
        setView("how");
      }
    };
    handle();
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-label="What alik is and how it works"
      className="relative flex min-h-[100svh] scroll-mt-20 flex-col justify-center overflow-hidden border-t border-forest/10"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <AnimatePresence mode="wait" initial={false}>
          {view === "how" ? (
            <HowView key="how" onShowIdea={() => setView("idea")} />
          ) : (
            <IdeaView key="idea" onBack={() => setView("how")} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────  how it works  ───────────────────────────── */

function HowView({ onShowIdea }: { onShowIdea: () => void }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center gap-16 text-center"
    >
      {/* the headline */}
      <motion.h2
        {...(reduce ? {} : reveal())}
        className="max-w-2xl font-serif font-semibold text-forest text-[clamp(1.9rem,5vw,3.1rem)] leading-[1.1] tracking-tight"
      >
        You talk. alik does the rest.
      </motion.h2>

      {/* three beats, joined by a dotted line that runs behind the icons */}
      <div className="relative mx-auto w-full max-w-4xl">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 z-0 hidden origin-left border-t border-dashed border-forest/25 sm:block"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
        />
        <div className="grid gap-14 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.label}
              {...(reduce ? {} : reveal(0.3 + i * 0.16))}
              className="group relative z-10 flex flex-col items-center gap-4"
            >
              {/* a solid background disc masks the dotted line as it passes through */}
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-oat text-forest transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110">
                {s.icon}
              </span>
              <h3 className="font-serif font-semibold text-forest text-base sm:text-lg">
                {s.label}
              </h3>
              <p className="max-w-[16rem] text-forest/55 text-sm leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* the alik promise — one quiet closing line */}
      <motion.p
        {...(reduce ? {} : reveal(0.2))}
        className="max-w-xl font-serif text-forest/75 text-[clamp(1rem,2.4vw,1.35rem)] leading-snug"
      >
        Dating apps make you search for the right person. alik introduces you to
        the people who make you feel{" "}
        <CyclingWord words={["seen", "heard", "understood", "loved"]} />.
      </motion.p>

      <ToggleButton onClick={onShowIdea}>← the idea behind alik</ToggleButton>
    </motion.div>
  );
}

/* ───────────────────────────────  the idea  ─────────────────────────────── */

function IdeaView({ onBack }: { onBack: () => void }) {
  const reduce = useReducedMotion();

  // Gentle 3D tilt that follows the cursor across the polaroid, spring-eased
  // so it feels like a real photo nudged on the wall rather than a flat card.
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 150, damping: 15, mass: 0.4 });
  const springY = useSpring(ry, { stiffness: 150, damping: 15, mass: 0.4 });

  function handleTilt(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 9);
    rx.set(-py * 9);
  }
  function resetTilt() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? undefined : { opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center gap-12 text-center"
    >
      <motion.div {...(reduce ? {} : reveal())} className="flex items-center gap-3">
        <span className="h-px w-8 bg-forest/25" aria-hidden="true" />
        <p className={LABEL}>the idea</p>
        <span className="h-px w-8 bg-forest/25" aria-hidden="true" />
      </motion.div>

      {/* the manifesto, pinned to the wall like a polaroid */}
      <motion.figure
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        initial={
          reduce ? false : { opacity: 0, y: 40, rotate: -6, scale: 0.94 }
        }
        whileInView={{ opacity: 1, y: 0, rotate: -1.6, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ type: "spring", stiffness: 120, damping: 14, mass: 0.9 }}
        style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
        className="relative mx-auto w-full max-w-md bg-white p-4 pb-8 shadow-[0_35px_70px_-25px_rgba(20,20,20,0.45)] ring-1 ring-forest/10"
      >
        {/* a quick camera flash as it lands */}
        {!reduce && (
          <span
            aria-hidden="true"
            className="polaroid-flash pointer-events-none absolute inset-0 z-20 bg-white"
          />
        )}

        {/* washi tape holding it to the wall */}
        <span
          aria-hidden="true"
          className="absolute -top-4 left-8 h-7 w-24 -rotate-[9deg] bg-ochre/20 shadow-sm ring-1 ring-forest/5 backdrop-blur-[1px]"
        />
        <span
          aria-hidden="true"
          className="absolute -top-4 right-8 h-7 w-24 rotate-[7deg] bg-ochre/20 shadow-sm ring-1 ring-forest/5 backdrop-blur-[1px]"
        />

        {/* the "photo" — the manifesto */}
        <div className="flex flex-col gap-5 bg-forest/[0.015] px-6 py-10">
          <p className="font-serif text-forest text-[clamp(1.15rem,2.4vw,1.5rem)] leading-tight">
            We think we&rsquo;re too <Em>unique</Em>. Too <Em>random</Em>. Too{" "}
            <Em>weird</Em>. Too <Em>different</Em> for someone else to
            understand.
          </p>
          <p className="font-serif text-forest/75 text-[clamp(0.95rem,2vw,1.15rem)] leading-relaxed">
            And sometimes, you can&rsquo;t fit all of that into a swiping card.{" "}
            <DyingText>dating apps</DyingText>
          </p>
          <p className="font-serif text-forest text-[clamp(1.05rem,2.2vw,1.35rem)] leading-snug">
            What if a service connected you with{" "}
            <span className="font-semibold">PEOPLE</span> who share the same{" "}
            <Underline>random, weird things you love</Underline>, so you could go{" "}
            <Em>do them together</Em>?
          </p>
        </div>

        {/* the handwritten caption under the photo */}
        <figcaption className="mt-5 text-center">
          <span className="font-serif italic text-forest text-xl sm:text-2xl">
            we just find the people.
          </span>
          <p className="mt-1 font-serif italic text-forest/45 text-sm">
            and if you choose to date one of them? that&rsquo;s on you.
          </p>
        </figcaption>
      </motion.figure>

      <ToggleButton onClick={onBack}>see how it works →</ToggleButton>
    </motion.div>
  );
}

/* ──────────────────────────────  shared bits  ───────────────────────────── */

function ToggleButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-forest/15 bg-oat/60 px-5 py-2.5 font-serif text-forest text-sm italic backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-oat hover:shadow-[0_10px_24px_-12px_rgba(20,20,20,0.5)] active:translate-y-0 active:scale-[0.97]"
    >
      {children}
    </button>
  );
}