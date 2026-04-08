"use client";

import { ScrollReveal } from "../../components/animated";

const layers = [
  {
    title: "Private memory",
    body: "Your raw thoughts and venting stay yours. The AI uses them to understand you, but never shares them.",
  },
  {
    title: "Matchable signals",
    body: "Abstracted patterns like \u201Cvalues directness\u201D or \u201Cbonds through humor.\u201D You can see and edit these anytime.",
  },
  {
    title: "Shareable intro",
    body: "The summary your AI creates before introducing you. You approve every word before anyone sees it.",
  },
];

export function Trust() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <ScrollReveal>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-text-muted">
            Your privacy
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-normal leading-[1.15] tracking-tight mb-4">
            Nothing leaves your AI without your permission.
          </h2>
          <p className="text-text-dim font-light mb-12">
            When your AI talks to other AIs, it follows three strict rules:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {layers.map((layer, i) => (
              <div key={i} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg mb-2">{layer.title}</h3>
                <p className="text-sm font-light leading-[1.7] text-text-dim">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
