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
            <span className="text-text-dim">You still can&apos;t find your people.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto max-w-[540px] text-[17px] font-light leading-[1.8] text-text-dim mb-6">
            Not because they don&apos;t exist. Because nobody has time to look.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mx-auto max-w-[540px] font-serif text-[clamp(18px,2.5vw,22px)] leading-[1.5] tracking-tight text-text">
            That&apos;s what Alik fixes.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
