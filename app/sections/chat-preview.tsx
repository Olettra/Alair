"use client";

import { ScrollReveal } from "../components/animated";
import { motion } from "motion/react";


type Message = {
  type: "ai" | "user";
  text: string;
};



function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[320px] shrink-0">
      <div className="rounded-[40px] border border-text/8 bg-text/[0.02] p-[6px]">
        <div className="rounded-[34px] bg-white overflow-hidden">
          <div className="flex justify-center pt-3 pb-1.5">
            <div className="h-[20px] w-[80px] rounded-full bg-text/[0.06]" />
          </div>
          {children}
          <div className="flex justify-center py-2">
            <div className="h-[4px] w-24 rounded-full bg-text/[0.06]" />
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
      <div className="flex items-center justify-center border-b border-text/[0.05] px-4 py-3">
        <span className="text-[11px] text-text-muted tracking-wide">
          <span className="font-serif text-[12px] text-text/70">alik</span>
          {" · "}
          {subtitle}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3.5 min-h-[260px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[88%] rounded-2xl px-3 py-2 text-[11px] leading-[1.6] whitespace-pre-line ${
              msg.type === "ai"
                ? "self-start rounded-bl-sm bg-text/[0.04] text-text"
                : "self-end rounded-br-sm bg-text text-white"
            }`}
          >
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
      <div className="flex flex-col items-center justify-center min-h-[260px] px-5 py-8">
        <motion.div
          className="relative mb-5"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-text/[0.03] scale-[1.8]" />
          <div className="absolute inset-0 rounded-full bg-text/[0.05] scale-[1.4]" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-text/[0.07]">
            <span className="font-serif text-xl text-text/60">a</span>
          </div>
        </motion.div>

        <span className="font-serif text-lg text-text mb-0.5">alik</span>
        <span className="text-[11px] text-text-muted">06:14</span>

        <div className="flex items-center gap-[2.5px] my-5 h-5">
          {waveBarHeights.map((bar, i) => (
            <motion.div
              key={i}
              className="w-[1.5px] rounded-full bg-text/15"
              animate={{
                height: [3, bar.peak * 0.7, 3],
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

        <p className="text-[10.5px] text-text-dim text-center leading-[1.6] max-w-[210px] mt-1">
          &ldquo;You mentioned people come to you when things get hard.
          When things get hard for you, what do you actually need from
          someone? Not what you ask for. What you actually need.&rdquo;
        </p>
      </div>
    </PhoneFrame>
  );
}

const screen1: Message[] = [
  {
    type: "ai",
    text: "I know you\u2019ve been stressed lately. In a perfect world, what would someone do or say that would actually make it drop? Not fix it, just make you feel less alone in it.",
  },
  {
    type: "user",
    text: "Honestly just someone who notices without me having to explain.",
  },
  {
    type: "ai",
    text: "Someone who just gets it without you having to perform okay. What does your ideal Sunday look like? Like a Sunday where you actually feel like yourself again.",
  },
  {
    type: "user",
    text: "Slow morning. Good coffee. Maybe a long walk. No agenda.",
  },
  {
    type: "ai",
    text: "And who\u2019s in that Sunday with you? Or is it better alone?",
  },
  {
    type: "user",
    text: "Better with the right person. But that person has to earn the slow morning.",
  },
  {
    type: "ai",
    text: "I like that. I\u2019m going to remember that.",
  },
];

const screen2: Message[] = [
  {
    type: "ai",
    text: "There\u2019s someone I\u2019ve been talking to. Her Alik and I have been going back and forth for a few days and I think you two would actually click.\n\nShe just moved here for a new job. Still finding her footing but she\u2019s the kind of person who walks into a room and makes it feel warmer. After a long week she unwinds by cooking something from scratch, says it\u2019s the one thing that forces her to slow down. Proud of how far she\u2019s come on her own. Looking for someone real, not someone impressive.\n\nOh, and she plays Minecraft. Been building the same world for two years.",
  },
  {
    type: "user",
    text: "That\u2019s her world or she\u2019d share it?",
  },
  {
    type: "ai",
    text: "She said she\u2019d share it with the right person.",
  },
  {
    type: "user",
    text: "I\u2019d like to introduce myself.",
  },
  {
    type: "ai",
    text: "I\u2019ll set that up.",
  },
];

export function ChatPreview() {

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
        <div className="flex gap-8 overflow-x-auto px-6 pb-6 sm:px-12 lg:px-20 sm:gap-10 sm:justify-center snap-x snap-mandatory scrollbar-hide">
          <div className="snap-center">
            <ChatScreen subtitle="getting to know you" messages={screen1} />
          </div>
          <div className="snap-center">
            <VoiceCallScreen />
          </div>
          <div className="snap-center">
            <ChatScreen subtitle="found someone" messages={screen2} />
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
