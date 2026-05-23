"use client";

import { useEffect, useState } from "react";

type Scene = {
  outcome: string;
  activity: string;
  group: string;
};

const SCENES: Scene[] = [
  { outcome: "community", activity: "a volunteering morning", group: "your community" },
  { outcome: "friends",   activity: "dinner & karaoke",       group: "your friends" },
  { outcome: "dates",     activity: "coffee & a walk",        group: "your date" },
  { outcome: "people",    activity: "a run & brunch",         group: "your people" },
  { outcome: "dates",     activity: "drinks & live music",    group: "your soulmate" },
  { outcome: "community", activity: "a run & brunch",         group: "your community" },
  { outcome: "friends",   activity: "drinks & live music",    group: "your friends" },
  { outcome: "people",    activity: "coffee & a walk",        group: "your people" },
  { outcome: "dates",     activity: "dinner & karaoke",       group: "your soulmate" },
  { outcome: "community", activity: "coffee & a walk",        group: "your community" },
];

export function HeroPhrase() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SCENES.length), 9000);
    return () => clearInterval(t);
  }, []);

  const scene = SCENES[idx];

  return (
    <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
      <h1 className="font-serif text-forest text-[clamp(1.5rem,5.5vw,3rem)] leading-[1.25] tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 max-w-full text-center">
        <span>alik helps you find your</span>
        <KeywordPill text={scene.outcome} size="lg" />
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif text-forest text-[clamp(1rem,2.6vw,1.35rem)] px-4 text-center">
        <span>and plan</span>
        <KeywordPill text={scene.activity} size="md" />
        <span>with</span>
        <KeywordPill text={scene.group} size="md" />
        <span>.</span>
      </div>

      <div className="px-6 text-center text-forest/70 text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed space-y-1 max-w-[44ch] sm:max-w-none">
        <p>
          No profiles. No swiping. No algorithms. Our AI does the matching for you.
        </p>
        <p>Share your real-life experiences if you want and get paid for it.</p>
      </div>
    </div>
  );
}

function KeywordPill({
  text,
  size = "md",
}: {
  text: string;
  size?: "md" | "lg";
}) {
  const padding = size === "lg" ? "px-6 py-2" : "px-5 py-1.5";
  return (
    <span
      aria-live="polite"
      className={`inline-flex items-center ${padding} rounded-full bg-ochre/15 border border-ochre/25 shrink-0 leading-none`}
    >
      <span
        key={text}
        className="inline-block font-serif italic text-ochre leading-[1.15] py-0.5"
        style={{ animation: "chip-in 320ms ease-out both" }}
      >
        {text}
      </span>
    </span>
  );
}
