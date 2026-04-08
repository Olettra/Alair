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
          <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.08] tracking-tight mb-6">
            I learn who you are.
            <br />
            Then I find your <em>people</em>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto max-w-[520px] text-[17px] font-light leading-[1.7] text-text-dim mb-12">
            Through real conversations, I learn what kind of people you
            actually click with then I go find them in Minnesota.
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
