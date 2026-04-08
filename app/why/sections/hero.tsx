"use client";

import { FadeIn } from "../../components/animated";

export function WhyHero() {
  return (
    <section className="flex min-h-[90dvh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-[680px]">
        <FadeIn>
          <h1 className="font-serif text-[clamp(36px,5.5vw,64px)] font-normal leading-[1.08] tracking-tight mb-8">
            8.2 billion people on this planet.
            <br />
            <span className="text-text-dim">And we forgot how to just&hellip; connect.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto max-w-[540px] text-[17px] font-light leading-[1.8] text-text-dim">
            We&apos;re all busy making it. Grinding, building, surviving.
            Somewhere along the way we stopped saying hi, stopped making
            friends, stopped finding the people who&apos;d actually make life
            more fun. Not because we don&apos;t want to. Because
            there&apos;s no time, no place, and no way to find them.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
