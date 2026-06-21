"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// A mix of alik's own lines and real quotes on friendship, community & belonging.
const CARDS: { text: string; by: string }[] = [
  { text: "Meet people without deciding what they’re supposed to become.", by: "alik" },
  { text: "“Friendship is born the moment one person says to another: what, you too?”", by: "C.S. Lewis" },
  { text: "AI-curated real-life connection. Not AI dating.", by: "alik" },
  { text: "“We’re all just walking each other home.”", by: "Ram Dass" },
  { text: "Find your people, not just a date.", by: "alik" },
  { text: "“Call it a clan, a tribe, a family. Whoever you are, you need one.”", by: "Jane Howard" },
  { text: "Your AI does the searching. You do the living.", by: "alik" },
  { text: "“If you want to go far, go together.”", by: "African proverb" },
  { text: "Some become friends. Some become your whole world.", by: "alik" },
  { text: "“Walking with a friend in the dark is better than walking alone in the light.”", by: "Helen Keller" },
  { text: "Walk into the right room. The rest is human.", by: "alik" },
  { text: "“Shared joy is a double joy; shared sorrow, half a sorrow.”", by: "Swedish proverb" },
];

const ROT = [-5, 4, -3, 5, -4, 3];

export function TaglineStage() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % CARDS.length), 7000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return <div className="min-h-[17rem]" aria-hidden="true" />;

  const card = CARDS[i];
  const rot = ROT[i % ROT.length];

  return (
    <div
      className="relative flex min-h-[17rem] justify-center sm:min-h-[19rem] lg:justify-start"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          className="absolute bottom-0"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.55, y: 36 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={
            reduce
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.9, y: -14, transition: { duration: 0.35, ease: "easeIn" } }
          }
          transition={
            reduce
              ? { duration: 0.3 }
              : { type: "spring", stiffness: 230, damping: 9, mass: 0.9 }
          }
        >
          {/* rotation on a static wrapper so motion only animates opacity/scale/y */}
          <div style={{ transform: `rotate(${rot}deg)` }}>
            <div className="relative w-64 bg-[#fafafa] p-3 pb-9 ring-1 ring-forest/15 shadow-[0_22px_48px_-18px_rgba(20,20,20,0.5)] sm:w-72">
              {/* a strip of tape, like it was just stuck down */}
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 bg-ochre/20 ring-1 ring-ochre/10" />
              {/* camera flash on each new shot */}
              {!reduce && (
                <span className="polaroid-flash pointer-events-none absolute inset-0 z-10 bg-white" />
              )}
              <div className="flex min-h-[9.5rem] items-center bg-oat/70 px-4 py-6 ring-1 ring-inset ring-forest/5">
                <p className="font-serif italic leading-snug text-forest text-lg">
                  {card.text}
                </p>
              </div>
              <p className="absolute inset-x-0 bottom-2.5 px-3 text-center font-serif italic text-forest/50 text-sm">
                {card.by}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
