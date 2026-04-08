"use client";

import { ScrollReveal } from "../components/animated";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";

type Message = {
  type: "ai" | "user";
  label?: string;
  text: string;
};



function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[260px] shrink-0 sm:w-[280px]">
      <div className="rounded-[40px] border border-text/8 bg-text/[0.03] p-[6px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        <div className="rounded-[34px] bg-white overflow-hidden">
          <div className="flex justify-center pt-3 pb-1.5">
            <div className="h-[20px] w-[80px] rounded-full bg-text/[0.07]" />
          </div>
          {children}
          <div className="flex justify-center py-2">
            <div className="h-[4px] w-24 rounded-full bg-text/[0.07]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatScreen({
  subtitle,
  messages,
}: {
  subtitle: string;
  messages: Message[];
}) {
  return (
    <PhoneFrame>
      <div className="flex items-center gap-2 border-b border-text/[0.05] px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-text/[0.06]">
          <span className="font-serif text-[11px] text-text/60">a</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] font-medium text-text leading-tight">
            alik
          </span>
          <span className="text-[10px] text-text-muted leading-tight">
            {subtitle}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3.5 min-h-[260px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11.5px] leading-[1.55] ${
              msg.type === "ai"
                ? "self-start rounded-bl-sm bg-text/[0.04] text-text"
                : "self-end rounded-br-sm bg-text text-white"
            }`}
          >
            {msg.type === "ai" && msg.label && (
              <span className="mb-0.5 block text-[8px] font-semibold uppercase tracking-widest text-text-muted">
                {msg.label}
              </span>
            )}
            {msg.text}
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

const waveBarHeights = Array.from({ length: 24 }, (_, i) => ({
  peak: 8 + ((i * 7 + 3) % 14),
  duration: 0.8 + ((i * 3 + 5) % 6) / 10,
}));

function VoiceCallScreen() {
  return (
    <PhoneFrame>
      <div className="flex flex-col items-center justify-center min-h-[316px] px-6 py-8">
        <motion.div
          className="relative mb-6"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-text/[0.04] scale-[1.8]" />
          <div className="absolute inset-0 rounded-full bg-text/[0.06] scale-[1.4]" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-text/[0.08]">
            <span className="font-serif text-2xl text-text/70">a</span>
          </div>
        </motion.div>

        <span className="font-serif text-xl text-text mb-1">alik</span>
        <span className="text-[12px] text-text-muted mb-1">
          voice &middot; 04:32
        </span>

        <div className="flex items-center gap-[3px] my-4 h-6">
          {waveBarHeights.map((bar, i) => (
            <motion.div
              key={i}
              className="w-[2px] rounded-full bg-text/20"
              animate={{
                height: [4, bar.peak, 4],
              }}
              transition={{
                duration: bar.duration,
                repeat: Infinity,
                delay: i * 0.04,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <p className="text-[11px] text-text-dim text-center leading-relaxed max-w-[180px] mt-2 italic">
          &ldquo;Tell me about a time you felt really understood by
          someone&hellip;&rdquo;
        </p>

        <div className="flex items-center gap-5 mt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text/[0.06]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text/50"
            >
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2c0 .76-.13 1.49-.35 2.17" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/90">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text/[0.06]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text/50"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

const screen1: Message[] = [
  {
    type: "ai",
    text: "You mentioned you just moved to Minneapolis. How\u2019s the first week been \u2014 honestly?",
  },
  {
    type: "user",
    text: "Honestly kind of lonely. I don\u2019t know anyone yet.",
  },
  {
    type: "ai",
    text: "That\u2019s more common than you think. What kind of friendship fills your cup \u2014 big group energy, or a few close people?",
  },
  {
    type: "user",
    text: "A few close people. Always.",
  },
];

const screen2: Message[] = [
  {
    type: "ai",
    label: "match found",
    text: "I found someone interesting. She moved to St. Paul 3 months ago, works in design like you.",
  },
  { type: "user", text: "Tell me more." },
  {
    type: "ai",
    text: "Same kind of friendship you want \u2014 a few close people, not big groups. Want me to set something up?",
  },
  { type: "user", text: "Yes, do it." },
  {
    type: "ai",
    label: "intro sent",
    text: "Done. I gave her a conversation starter about that ramen spot you both bookmarked. Have fun.",
  },
];

function useAutoScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(min-width: 640px)");
    if (mq.matches) return;

    let idx = 0;
    const children = el.children;
    const count = children.length;
    let timer: ReturnType<typeof setInterval>;
    let touched = false;

    const start = () => {
      timer = setInterval(() => {
        if (touched) return;
        idx = (idx + 1) % count;
        children[idx].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }, 3000);
    };

    const onTouch = () => {
      touched = true;
      clearInterval(timer);
    };

    el.addEventListener("touchstart", onTouch, { passive: true, once: true });
    start();

    return () => {
      clearInterval(timer);
      el.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return ref;
}

export function ChatPreview() {
  const scrollRef = useAutoScroll();

  return (
    <section className="py-24 sm:py-32">
      <div className="px-6 sm:px-12 lg:px-20 mb-14">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[2px] text-text-muted mb-4">
            See me in action
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-normal leading-[1.15] tracking-tight max-w-[520px]">
            A conversation, not a questionnaire
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.05}>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 pb-6 sm:px-12 lg:px-20 sm:gap-10 sm:justify-center snap-x snap-mandatory scrollbar-hide">
          <div className="snap-center">
            <ChatScreen subtitle="getting to know you" messages={screen1} />
          </div>
          <div className="snap-center">
            <VoiceCallScreen />
          </div>
          <div className="snap-center">
            <ChatScreen subtitle="found a match" messages={screen2} />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mx-auto mt-14 max-w-lg px-6 text-center text-[15px] font-light leading-[1.8] text-text-dim">
          I&apos;m not an app you open once. I learn about you through real
          conversations over time your humor, your values, how you
          connect. The more we talk, the better I understand what you need
          and who you&apos;d actually click with.
        </p>
      </ScrollReveal>


    </section>
  );
}
