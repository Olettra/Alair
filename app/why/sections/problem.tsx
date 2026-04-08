"use client";

import { ScrollReveal } from "../../components/animated";

const lines = [
  {
    text: "Wake up. Commute. Work. Commute. Crash. Repeat. Somewhere in that loop, you stopped meeting new people.",
  },
  {
    text: "Not on purpose. Life just got loud. The hustle took over. And being human, actually talking to people, greeting strangers, finding your crowd, it all fell off the schedule.",
  },
  {
    text: null,
    serif: "Right now, somewhere in the world, there\u2019s someone who shares your exact interests, your sense of humor, your energy. Someone whose life would be better with you in it.",
  },
  {
    text: "They\u2019re out there grinding too. Running the same loop. And you\u2019ll probably never cross paths. Not because of distance, but because nobody has the time to look.",
  },
  {
    text: "That\u2019s the problem. Not that people don\u2019t exist for you. They do. You just have no way to find each other while you\u2019re both busy trying to make it.",
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
