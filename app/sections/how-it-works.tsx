"use client";

import { ScrollReveal } from "../components/animated";

const steps = [
  {
    title: "You talk. It learns.",
    body: "Real conversations, not quizzes. Alik learns how you think, what you value, how you connect.",
  },
  {
    title: "Your AI goes to work.",
    body: "While you live your life, your Alik talks to other AIs, finding people you\u2019d actually click with.",
  },
  {
    title: "A real introduction.",
    body: "When the fit is right, you both get an intro with context. Why you\u2019d click, what you share, something to say.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[960px]">
        <ScrollReveal>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-text-muted text-center">
            How it works
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mt-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="border-l-2 border-border pl-6">
                <span className="font-serif text-[48px] leading-none text-text/10">
                  {i + 1}
                </span>
                <h3 className="font-serif text-lg mt-2 mb-3">{step.title}</h3>
                <p className="text-[15px] font-light leading-[1.8] text-text-dim">
                  {step.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
