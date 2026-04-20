"use client";

import { ScrollReveal } from "../../components/animated";

export function Problem() {
  return (
    <section className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-[580px] text-center">
        <ScrollReveal>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-8">
            You don&apos;t need another app to scroll through. You need
            someone working in the background, learning who you
            are, what makes you tick, what kind of people would actually make
            your life better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-8">
            While you&apos;re going about your day, your Alik is out there
            talking to other people&apos;s Aliks. Learning who they are.
            Representing who you are. What makes you laugh. What drives you.
            What kind of people make you feel alive.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-16">
            You keep building your life. Alik fills it with the right people.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-serif text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-tight">
            That&apos;s the whole idea.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
