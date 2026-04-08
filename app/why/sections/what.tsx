"use client";

import { ScrollReveal } from "../../components/animated";

export function What() {
  return (
    <section className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-[580px] text-center">
        <ScrollReveal>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-text-muted">
            That&apos;s where alik comes in
          </p>
          <h2 className="font-serif text-[clamp(28px,4.5vw,48px)] font-normal leading-[1.12] tracking-tight mb-10">
            What if someone was out there finding your people while
            you keep doing your thing?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-8">
            You don&apos;t need another app to scroll through. You need
            someone working in the background, learning who you
            are, what makes you tick, what kind of people would actually make
            your life better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-8">
            More travel buddies. More late-night conversations. More people who
            get it. More memories you didn&apos;t know were possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-16">
            You keep building your life. alik fills it with the right people.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-serif text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-tight">
            That&apos;s the whole idea.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
