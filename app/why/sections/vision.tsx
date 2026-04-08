"use client";

import { ScrollReveal } from "../../components/animated";

const stories = [
  "You matched with someone in Barcelona who collects the same vintage records you do. Three months of voice notes later, you\u2019re flying out to hit a flea market together. You stay with his family. His mom makes you dinner. You\u2019ve never met these people, but it feels like you\u2019ve known them your whole life.",
  "You just moved to Minneapolis. You don\u2019t know anyone. Within two weeks, alik introduces you to someone who hikes in the mornings and argues about philosophy at night. Your exact energy. By month two, you have a standing Saturday plan. By month six, they\u2019re the person you call when things go sideways.",
  "You\u2019re a new parent. Your old friend group is in a different life stage. They still want to go out at 11\u202FPM. You want someone who gets it. The 6\u202FAM wake-ups, the identity shift, the joy and the overwhelm. alik finds her. She lives 12 minutes away. Your kids are the same age. You didn\u2019t even know you needed this.",
  "You\u2019ve always wanted to go to Japan but never had anyone to go with. Now you have a friend in Osaka who\u2019s already planning the itinerary. You\u2019re not a tourist. You\u2019re visiting someone who\u2019s been waiting to show you their city.",
];

export function Vision() {
  return (
    <section className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-[600px]">
        <ScrollReveal>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-text-muted text-center">
            Imagine
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-normal leading-[1.15] tracking-tight mb-16 text-center">
            This is what happens when the right people find each other.
          </h2>
        </ScrollReveal>

        {stories.map((story, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="mb-14 border-l-2 border-border pl-8">
              <p className="text-[17px] font-light leading-[1.8] text-text-dim">
                {story}
              </p>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.25}>
          <p className="mx-auto max-w-[520px] font-serif text-[clamp(20px,3vw,28px)] leading-[1.4] tracking-tight mt-8 text-center">
            These aren&apos;t hypotheticals. This is what connection looks like
            when the barriers disappear.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
