"use client";

import { AnimatePresence, motion } from "motion/react";
import { useOutcome } from "./outcome-context";

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
  const { outcome } = useOutcome();

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
        no profiles · no swiping · no algorithms
      </motion.p>

      <motion.h1
        variants={line}
        className="font-serif text-forest text-[clamp(1.05rem,4.4vw,3.4rem)] leading-[1.18] tracking-tight text-center px-3 max-w-[22ch]"
      >
        AI-curated rooms for{" "}
        <span className="italic text-ochre">real-life connection</span>.
      </motion.h1>

      <motion.div
        variants={line}
        className="flex items-center justify-center gap-x-2 sm:gap-x-3 font-serif text-forest text-[clamp(0.78rem,2.1vw,1.4rem)] px-3 whitespace-nowrap max-w-full"
      >
        <span>some connections become</span>
        <KeywordPill text={outcome} />
      </motion.div>

      <motion.p
        variants={line}
        className="font-serif italic text-forest/70 text-[clamp(0.72rem,2.4vw,1.15rem)] text-center px-4"
      >
        alik doesn&rsquo;t force the outcome.
      </motion.p>
    </motion.div>
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
