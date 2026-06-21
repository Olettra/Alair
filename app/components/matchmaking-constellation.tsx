"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { type Outcome, useOutcome } from "./outcome-context";

type Person = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** which outcome words light this room up */
  outcomes: Outcome[];
  /** center position as a percentage of the hero area */
  x: number;
  y: number;
  /** tailwind size classes (mobile → desktop) */
  size: string;
  /** how far this bubble wanders, in px */
  dx: number;
  dy: number;
  /** drift duration + entrance delay for organic, offset motion */
  drift: number;
  delay: number;
  /** hide the two mid-edge bubbles on small screens to protect the headline */
  mobileHidden?: boolean;
};

const PEOPLE: Person[] = [
  {
    id: "friends",
    src: "/people/friends.jpg",
    alt: "Four friends laughing and high-fiving over coffee",
    caption: "the friends room",
    outcomes: ["friendship"],
    x: 15,
    y: 19,
    size: "w-16 h-16 sm:w-24 sm:h-24",
    dx: 14,
    dy: -18,
    drift: 11,
    delay: 0.1,
  },
  {
    id: "coffee",
    src: "/people/coffee.jpg",
    alt: "Two friends laughing together over iced coffee",
    caption: "the slow-morning room",
    outcomes: ["romantic"],
    x: 85,
    y: 16,
    size: "w-[4.5rem] h-[4.5rem] sm:w-28 sm:h-28",
    dx: -16,
    dy: 16,
    drift: 13,
    delay: 0.35,
  },
  {
    id: "walk",
    src: "/people/walk.jpg",
    alt: "People walking together through a sunlit park",
    caption: "the long-walk room",
    outcomes: ["community", "family"],
    x: 7,
    y: 53,
    size: "w-16 h-16 sm:w-20 sm:h-20",
    dx: 18,
    dy: 12,
    drift: 12,
    delay: 0.55,
    mobileHidden: true,
  },
  {
    id: "community",
    src: "/people/community.jpg",
    alt: "A large, joyful community group gathered together",
    caption: "the community room",
    outcomes: ["community"],
    x: 93,
    y: 50,
    size: "w-16 h-16 sm:w-24 sm:h-24",
    dx: -18,
    dy: -12,
    drift: 14,
    delay: 0.45,
    mobileHidden: true,
  },
  {
    id: "dinner",
    src: "/people/dinner.jpg",
    alt: "Friends sharing a long table of food at dinner",
    caption: "the long-table room",
    outcomes: ["friendship", "family"],
    x: 19,
    y: 84,
    size: "w-[4.5rem] h-[4.5rem] sm:w-28 sm:h-28",
    dx: 16,
    dy: -14,
    drift: 12.5,
    delay: 0.25,
  },
  {
    id: "nightlife",
    src: "/people/nightlife.jpg",
    alt: "A rooftop full of people out together at night",
    caption: "the late-night room",
    outcomes: ["romantic"],
    x: 82,
    y: 85,
    size: "w-16 h-16 sm:w-24 sm:h-24",
    dx: -14,
    dy: -16,
    drift: 13.5,
    delay: 0.15,
  },
];

// A crisp hairline gray ring hugs every photo so the circles read on white;
// lit rooms gain a soft gray halo and a deeper drop shadow to float forward.
const RING_DIM =
  "0 0 0 1px rgba(20,20,20,0.12), 0 12px 30px -14px rgba(20,20,20,0.22)";
const RING_LIT =
  "0 0 0 1.5px rgba(20,20,20,0.18), 0 0 0 7px rgba(138,138,138,0.16), 0 20px 44px -12px rgba(20,20,20,0.4)";

export function MatchmakingConstellation() {
  const reduce = useReducedMotion();
  const { outcome } = useOutcome();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {PEOPLE.map((p) => {
        const lit = p.outcomes.includes(outcome);
        return (
          <div
            key={p.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${
              p.mobileHidden ? "hidden sm:block" : ""
            }`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            {/* entrance */}
            <motion.div
              className="pointer-events-auto group flex flex-col items-center gap-2"
              initial={reduce ? false : { opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: p.delay }}
            >
              {/* continuous wander */}
              <motion.div
                className="relative"
                animate={
                  reduce
                    ? undefined
                    : {
                        x: [0, p.dx, 0, -p.dx * 0.6, 0],
                        y: [0, p.dy, 0, -p.dy * 0.6, 0],
                      }
                }
                transition={
                  reduce
                    ? undefined
                    : {
                        x: { duration: p.drift, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: p.drift, repeat: Infinity, ease: "easeInOut" },
                      }
                }
              >
                {/* a slow radar-ping ripples out of the active room, so the lit
                    space feels alive without pulling focus from the headline */}
                {lit && !reduce && (
                  <motion.span
                    className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${p.size}`}
                    initial={{ opacity: 0.4, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.7 }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                    style={{ boxShadow: "0 0 0 1px rgba(20,20,20,0.3)" }}
                  />
                )}

                {/* the room reacts to the outcome word: lit rooms swell + glow */}
                <motion.span
                  className={`relative block ${p.size} overflow-hidden rounded-full`}
                  animate={{
                    scale: lit ? 1.16 : 0.9,
                    opacity: lit ? 1 : 0.5,
                    boxShadow: lit ? RING_LIT : RING_DIM,
                  }}
                  whileHover={{ scale: 1.22, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={280}
                    height={280}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-forest/15" />
                </motion.span>
              </motion.div>

              <span className="hidden md:block whitespace-nowrap rounded-full bg-oat/70 px-2.5 py-0.5 text-[11px] font-serif italic text-forest/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {p.caption}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
