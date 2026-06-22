"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// A soft luminous blob that trails the cursor inside the hero, spring-eased so
// it drifts after the pointer. Desktop only — skipped on touch and for users
// who prefer reduced motion, and clipped to the hero so it never bleeds out.
export function HeroGlow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 26, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 26, mass: 0.6 });
  const so = useSpring(opacity, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
        opacity.set(1);
      } else {
        opacity.set(0);
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y, opacity]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div style={{ x: sx, y: sy, opacity: so }} className="absolute left-0 top-0">
        <div
          className="h-[42vmax] w-[42vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(120,120,120,0.22), rgba(130,130,130,0.07) 45%, transparent 66%)",
            filter: "blur(38px)",
          }}
        />
      </motion.div>
    </div>
  );
}
