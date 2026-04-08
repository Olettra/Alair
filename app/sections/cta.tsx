"use client";

import { ScrollReveal } from "../components/animated";
import { Button } from "../components/button";
import { useWaitlist } from "../components/waitlist-modal";

export function CTA() {
  const { open } = useWaitlist();

  return (
    <section className="mx-auto max-w-[520px] px-6 pt-[100px] pb-[120px] text-center">
      <ScrollReveal>
        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.12] tracking-tight mb-4">
          Let me find your <em>people</em>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-text-dim font-light mb-9">
          Now accepting early members in Minnesota. Your first hangout is on me.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Button onClick={open} size="lg">
          Join the Waitlist
        </Button>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="mt-4 text-xs text-text-muted">
          We&apos;ll notify you when your spot opens.
        </p>
      </ScrollReveal>
    </section>
  );
}
