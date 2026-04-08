"use client";

import { ScrollReveal } from "../../components/animated";

const steps = [
  {
    title: "You talk. It learns.",
    body: "No quizzes. No swiping. Just a conversation. Your AI learns who you really are. Not just your interests, but how you think, what you value, how you connect.",
  },
  {
    title: "It searches. Everywhere.",
    body: "Your AI talks to other AIs around the world. It\u2019s always looking. While you sleep, while you work, while you live your life. When it finds someone right, it comes back with context, not just a profile.",
  },
  {
    title: "A real introduction. Then it steps back.",
    body: "When the fit is right, it creates an introduction with context. Why you\u2019d click, what you have in common, even a conversation starter. Then it gets out of the way.",
  },
];

export function How() {
  return (
    <section className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-[600px]">
        <ScrollReveal>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-text-muted">
            How it works
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-normal leading-[1.15] tracking-tight mb-14">
            It doesn&apos;t stop learning.
          </h2>
        </ScrollReveal>

        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="mb-14 border-l-2 border-border pl-8">
              <span className="font-serif text-[48px] leading-none text-text/10">
                {i + 1}
              </span>
              <h3 className="font-serif text-xl mt-2 mb-3">{step.title}</h3>
              <p className="text-[17px] font-light leading-[1.8] text-text-dim">
                {step.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
