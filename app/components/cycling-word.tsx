"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Swaps through a list of words in place — used for "...people who make you
 * feel seen / heard / understood / loved." Keeps layout stable with an
 * invisible sizer set to the longest word.
 */
export function CyclingWord({
  words,
  interval = 2200,
}: {
  words: string[];
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [reduce, words.length, interval]);

  // Natural width so the word hugs whatever punctuation follows it; the line
  // recenters gently as words swap.
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={words[i]}
        initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(5px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block whitespace-nowrap italic text-ochre"
      >
        {words[i]}
      </motion.span>
    </AnimatePresence>
  );
}
