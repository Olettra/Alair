"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PAIRS, useOutcome } from "./outcome-context";

// Widest feeling, used as an invisible sizer so "Feel" never shifts as letters type.
const FEELING_SIZER = PAIRS.reduce((a, p) => (p.feel.length > a.length ? p.feel : a), "");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const line = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroPhrase() {
  const { pair } = useOutcome();

  return (
    <motion.div
      className="w-full flex flex-col items-center gap-5 sm:gap-7"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={line}
        className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.22em] text-forest/45 whitespace-nowrap"
      >
        your AI · their AI · one real introduction
      </motion.p>

      <motion.h1
        variants={line}
        aria-label="Feel seen. Feel met. Feel found."
        className="font-serif text-forest text-[clamp(1.7rem,6.2vw,4.2rem)] leading-[1.08] tracking-tight text-center px-3"
      >
        <span
          aria-hidden="true"
          className="inline-flex items-baseline justify-center gap-[0.3em]"
        >
          <span>Feel</span>
          <TypedFeeling />
        </span>
      </motion.h1>

      <motion.div
        variants={line}
        className="flex items-center justify-center gap-x-2 sm:gap-x-3 font-serif text-forest text-[clamp(0.78rem,2.1vw,1.4rem)] px-3 whitespace-nowrap max-w-full"
      >
        <span>some connections become</span>
        <KeywordPill text={pair.become} />
      </motion.div>
    </motion.div>
  );
}

// Typewriter: types a feeling, holds a beat, deletes, then advances the shared
// index — which moves the "some connections become ___" line in lockstep.
// Calm, unhurried timing. Falls back to a gentle word-swap when motion is reduced.
function TypedFeeling() {
  const reduce = useReducedMotion();
  const { pair, advance } = useOutcome();
  const target = pair.feel;
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;

    // fully typed → hold a long, easy beat before erasing
    if (!deleting && text === target) {
      const t = setTimeout(() => setDeleting(true), 2800);
      return () => clearTimeout(t);
    }
    // fully erased → pause, then advance both lines together
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        advance();
      }, 600);
      return () => clearTimeout(t);
    }

    const next = deleting
      ? target.slice(0, text.length - 1)
      : target.slice(0, text.length + 1);
    const t = setTimeout(() => setText(next), deleting ? 60 : 115);
    return () => clearTimeout(t);
  }, [text, target, deleting, reduce, advance]);

  // Reduced motion: no per-letter typing — just swap the whole word slowly.
  useEffect(() => {
    if (!reduce) return;
    const t = setInterval(advance, 3600);
    return () => clearInterval(t);
  }, [reduce, advance]);

  const shown = reduce ? target : text;

  return (
    <span className="relative inline-block italic text-ochre" aria-hidden="true">
      {/* invisible sizer keeps the headline from shifting as letters appear */}
      <span className="invisible">{FEELING_SIZER}</span>
      <span className="absolute left-0 top-0 whitespace-nowrap">
        {shown}
        <span className="type-caret" />
      </span>
    </span>
  );
}

function KeywordPill({ text }: { text: string }) {
  return (
    <motion.span
      aria-live="polite"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="relative inline-flex items-center justify-center px-3 py-1 sm:px-5 sm:py-1.5 rounded-full bg-ochre/15 border border-ochre/25 shrink-0 leading-none overflow-hidden"
    >
      {/* keep layout stable while the swapping text is absolutely positioned */}
      <span className="invisible font-serif italic leading-[1.15] py-0.5">{text}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 inline-flex items-center justify-center font-serif italic text-ochre leading-[1.15] py-0.5 whitespace-nowrap"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
