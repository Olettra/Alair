"use client";

import { FadeIn } from "../components/animated";
import { Button } from "../components/button";
import { useWaitlist } from "../components/waitlist-modal";

export function Hero() {
  const { open } = useWaitlist();

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-[720px]">
        <FadeIn>
          <p className="mb-5 text-sm text-text-muted">
            Now accepting early members in Minnesota
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-serif text-[clamp(36px,5.5vw,64px)] font-normal leading-[1.1] tracking-tight mb-6">
            What if someone was out there finding your people while
            you keep doing your thing?
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto max-w-[520px] font-serif text-[clamp(18px,2.5vw,24px)] leading-[1.4] tracking-tight text-text-dim mb-12">
            I learn who you are. Then I find your people.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Button onClick={open} size="lg">
            Join the Waitlist
          </Button>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-12 text-[13px] text-text-muted">
            First 500 spots in Minnesota
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
