"use client";

import { ScrollReveal } from "../../components/animated";

const stories = [
  "Your Alik comes back one day and says. I found someone in Barcelona. He collects the same vintage records you do. Here\u2019s why I think you two make sense. You read the breakdown. You agree. He agrees. You start talking. Three months later you\u2019re flying out to hit a flea market together. His mom makes you dinner. You\u2019ve never been to their home before, but somehow it feels like you\u2019ve always belonged there.",
  "You just moved to Minneapolis. You don\u2019t know anyone. Two weeks in, Alik comes to you. I found someone. He hikes in the mornings and argues about philosophy at night. I think he\u2019s your exact energy. You read why. You agree. He agrees. By month two you have a standing Saturday plan. By month six he\u2019s the person you call when things go sideways.",
  "You became a new parent and your world shifted. Your old friends are still out at 11\u202FPM. You\u2019re on 6\u202FAM wake-ups. Alik noticed. It found her. Lives 12 minutes away, kids the same age, feels the same identity shift you do. You didn\u2019t even know you needed this person until Alik explained why you two made sense.",
  "You always wanted to go to Japan but never had anyone to go with. Alik found someone in Osaka. Showed you exactly why. You agreed. He agreed. Now you\u2019re not a tourist. You\u2019re visiting someone who\u2019s been waiting to show you their city.",
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
