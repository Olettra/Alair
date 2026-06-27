"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * A word that flickers and fades like it's dying out — used on "#dating apps"
 * in the vision manifesto. Pulses opacity + a touch of blur on an uneven beat
 * so it reads as something on its way out, not a tidy loop.
 */
export function DyingText({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <span className="whitespace-nowrap text-forest/45">
      <span aria-hidden="true">#</span>
      <motion.span
        className="line-through decoration-forest/30"
        animate={
          reduce
            ? { opacity: 0.4 }
            : {
                opacity: [0.85, 0.12, 0.6, 0.08, 0.7],
                filter: [
                  "blur(0px)",
                  "blur(1.4px)",
                  "blur(0.4px)",
                  "blur(1.8px)",
                  "blur(0.6px)",
                ],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {children}
      </motion.span>{" "}
      <span aria-hidden="true">😂</span>
    </span>
  );
}
