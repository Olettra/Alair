"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const HEAD = "Don’t get judged by your best photo";
const TAIL = ", or your perfectly crafted bio.";

// Shared type scale — the promise reads at the same size as the setup line.
const TEXT = "text-[clamp(0.72rem,2.7vw,1.35rem)]";

export function HeroPhrase() {
  const reduce = useReducedMotion();
  // The lower lines wait until the opening line has finished typing itself.
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full flex flex-col items-center text-center gap-5 sm:gap-6">
      {/* the setup — small, one line, second clause typed live, comes first */}
      <motion.p
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif italic text-forest/55 leading-snug whitespace-nowrap ${TEXT}`}
      >
        {HEAD}
        <TypedTail onDone={() => setRevealed(true)} />
      </motion.p>

      {/* instead + promise — held back until the line above has typed out */}
      <motion.div
        className="flex flex-col items-center gap-4 sm:gap-5"
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={
          revealed || reduce
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 10, filter: "blur(6px)" }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-sans uppercase tracking-[0.32em] text-ochre text-[9px] sm:text-[10px]">
          instead
        </p>
        <p
          className={`font-serif text-forest leading-snug lg:whitespace-nowrap ${TEXT}`}
        >
          let alik find the people who share what you love, and bring you
          together to <span className="italic text-ochre">experience it.</span>
        </p>
      </motion.div>
    </div>
  );
}

// Types out the second clause once, on mount, after a short beat — so the line
// reads "Don't get judged by your best photo" and then keeps writing itself.
function TypedTail({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const typing = !reduce && count < TAIL.length;

  useEffect(() => {
    if (!typing) return;
    // hold a beat before the first character so the head registers first
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 650 : 52);
    return () => clearTimeout(t);
  }, [count, typing]);

  // Fire the reveal once the clause is fully typed (or immediately if reduced).
  useEffect(() => {
    if (reduce || count >= TAIL.length) onDone();
  }, [reduce, count, onDone]);

  const shown = reduce ? TAIL : TAIL.slice(0, count);

  return (
    <span>
      <span className="text-forest/70">{shown}</span>
      {typing && <span className="type-caret" />}
    </span>
  );
}
