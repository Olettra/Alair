"use client";

import { ScrollReveal } from "../../components/animated";

const lines = [
  {
    text: "You stopped meeting people. Not on purpose. Life just got loud.",
  },
  {
    text: null,
    serif: "Someone out there shares your exact energy, your humor, your vibe. They\u2019re grinding through the same loop. You\u2019ll probably never cross paths.",
  },
  {
    text: "Not because they don\u2019t exist. Because nobody has time to look.",
  },
];

export function Problem() {
  return (
    <section className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-[540px]">
        {lines.map((line, i) =>
          line.serif ? (
            <ScrollReveal key={i} delay={i * 0.04}>
              <p className="font-serif text-[clamp(20px,3vw,24px)] leading-[1.5] tracking-tight text-text my-20 text-center">
                {line.serif}
              </p>
            </ScrollReveal>
          ) : (
            <ScrollReveal key={i} delay={i * 0.04}>
              <p className="text-[17px] font-light leading-[1.8] text-text-dim mb-16 text-center">
                {line.text}
              </p>
            </ScrollReveal>
          )
        )}
      </div>
    </section>
  );
}
