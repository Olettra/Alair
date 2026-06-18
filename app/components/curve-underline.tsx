"use client";

import { motion } from "motion/react";

/** A hand-drawn curved underline that draws itself when scrolled into view. */
export function CurveUnderline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M4 10 C 60 17, 150 1, 236 8"
        stroke="var(--color-ochre)"
        strokeWidth={3.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </svg>
  );
}
