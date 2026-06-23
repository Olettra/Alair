"use client";

import { motion, useReducedMotion } from "motion/react";

// One glowing dot is you. alik scans softly outward, considers a whole field of
// people, lets most of them go, and keeps the three who actually fit — then
// draws them into a small group. A slow, gentle loop on a light background, in
// the same monochrome palette as the rest of the site.

const LOOP = 8.6; // seconds for one full cycle
const CX = 200;
const CY = 150;

// the three who remain: where they sit in the scan field, then where they
// settle into a loose group around you
const PEOPLE = [
  { x0: 86, y0: 70, x1: 120, y1: 98 },
  { x0: 330, y0: 84, x1: 292, y1: 110 },
  { x0: 224, y0: 256, x1: 204, y1: 230 },
];

// everyone else alik considers for a moment, then releases
const NOISE: [number, number][] = [
  [56, 118], [120, 52], [178, 70], [250, 46], [322, 128], [348, 196],
  [300, 232], [208, 278], [150, 256], [70, 214], [40, 158], [96, 150],
  [272, 168], [150, 94], [300, 64], [246, 206],
];

const spoke = (p: (typeof PEOPLE)[number]) => `M ${CX} ${CY} L ${p.x1} ${p.y1}`;
const TRIANGLE = [
  `M ${PEOPLE[0].x1} ${PEOPLE[0].y1} L ${PEOPLE[1].x1} ${PEOPLE[1].y1}`,
  `M ${PEOPLE[1].x1} ${PEOPLE[1].y1} L ${PEOPLE[2].x1} ${PEOPLE[2].y1}`,
  `M ${PEOPLE[2].x1} ${PEOPLE[2].y1} L ${PEOPLE[0].x1} ${PEOPLE[0].y1}`,
];

const FOREST = "var(--color-forest)";
const OCHRE = "var(--color-ochre)";

const loop = (times: number[]) => ({
  duration: LOOP,
  times,
  repeat: Infinity,
  ease: "easeInOut" as const,
});

export function FindsYourPeople({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`mx-auto w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 300"
        className="h-auto w-full overflow-visible text-forest"
        role="presentation"
      >
        {reduce ? (
          <StaticScene />
        ) : (
          <>
            {/* soft scan pings rippling out from you */}
            {[0, 0.13].map((offset, idx) => (
              <motion.circle
                key={idx}
                cx={CX}
                cy={CY}
                r={22}
                fill="none"
                stroke={FOREST}
                strokeWidth={1}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{
                  scale: [0.5, 0.5, 2.7, 2.7],
                  opacity: [0, 0.34, 0, 0],
                }}
                transition={loop([0, 0.05 + offset, 0.34 + offset, 1])}
              />
            ))}

            {/* everyone else — considered, then let go */}
            {NOISE.map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={3}
                fill={FOREST}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{
                  opacity: [0, 0, 0.5, 0.5, 0, 0],
                  scale: [0.5, 0.6, 1, 1, 0.5, 0.5],
                }}
                transition={loop([0, 0.1, 0.2, 0.34, 0.46, 1])}
              />
            ))}

            {/* the spokes from you to the three, then the group's own edges */}
            {PEOPLE.map((p, i) => (
              <motion.path
                key={`spoke-${i}`}
                d={spoke(p)}
                fill="none"
                stroke={FOREST}
                strokeWidth={1}
                animate={{
                  pathLength: [0, 0, 1, 1, 0],
                  opacity: [0, 0, 0.45, 0.45, 0],
                }}
                transition={loop([0, 0.5, 0.66, 0.92, 1])}
              />
            ))}
            {TRIANGLE.map((d, i) => (
              <motion.path
                key={`tri-${i}`}
                d={d}
                fill="none"
                stroke={FOREST}
                strokeWidth={1}
                animate={{
                  pathLength: [0, 0, 1, 1, 0],
                  opacity: [0, 0, 0.3, 0.3, 0],
                }}
                transition={loop([0, 0.58, 0.76, 0.92, 1])}
              />
            ))}

            {/* a quiet bloom as the small group / event forms */}
            <motion.circle
              cx={CX}
              cy={CY}
              r={70}
              fill={OCHRE}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{
                opacity: [0, 0, 0, 0.16, 0],
                scale: [0.5, 0.5, 0.5, 1.05, 1.25],
              }}
              transition={loop([0, 0.6, 0.66, 0.82, 1])}
            />

            {/* the three who stay — drifting in from the field, then glowing */}
            {PEOPLE.map((p, i) => (
              <g key={`person-${i}`}>
                <motion.circle
                  r={11}
                  fill={OCHRE}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  animate={{
                    cx: [p.x0, p.x0, p.x0, p.x1, p.x1, p.x1, p.x1],
                    cy: [p.y0, p.y0, p.y0, p.y1, p.y1, p.y1, p.y1],
                    opacity: [0, 0, 0.18, 0.3, 0.26, 0.26, 0],
                    scale: [0.6, 0.7, 0.9, 1.1, 1, 1, 0.85],
                  }}
                  transition={loop([0, 0.1, 0.34, 0.5, 0.72, 0.92, 1])}
                />
                <motion.circle
                  r={5.5}
                  fill={FOREST}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  animate={{
                    cx: [p.x0, p.x0, p.x0, p.x1, p.x1, p.x1, p.x1],
                    cy: [p.y0, p.y0, p.y0, p.y1, p.y1, p.y1, p.y1],
                    opacity: [0, 0, 0.5, 1, 1, 1, 0],
                    scale: [0.6, 0.8, 0.9, 1.15, 1.05, 1.05, 0.9],
                  }}
                  transition={loop([0, 0.1, 0.34, 0.5, 0.72, 0.92, 1])}
                />
              </g>
            ))}

            {/* you — the small glowing dot at the center */}
            <motion.circle
              cx={CX}
              cy={CY}
              r={16}
              fill={OCHRE}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ opacity: [0, 0.22, 0.22, 0.22, 0], scale: [0.6, 1, 1.08, 1, 0.9] }}
              transition={loop([0, 0.06, 0.5, 0.9, 1])}
            />
            <motion.circle
              cx={CX}
              cy={CY}
              r={6.5}
              fill={FOREST}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.5, 1, 1, 1, 0.85] }}
              transition={loop([0, 0.06, 0.5, 0.92, 1])}
            />
          </>
        )}
      </svg>
    </div>
  );
}

// Reduced motion / pre-hydration: the finished picture, held still.
function StaticScene() {
  return (
    <g>
      {PEOPLE.map((p, i) => (
        <path
          key={`s-${i}`}
          d={spoke(p)}
          fill="none"
          stroke={FOREST}
          strokeWidth={1}
          opacity={0.4}
        />
      ))}
      {TRIANGLE.map((d, i) => (
        <path key={`t-${i}`} d={d} fill="none" stroke={FOREST} strokeWidth={1} opacity={0.25} />
      ))}
      {PEOPLE.map((p, i) => (
        <circle key={`p-${i}`} cx={p.x1} cy={p.y1} r={5.5} fill={FOREST} />
      ))}
      <circle cx={CX} cy={CY} r={16} fill={OCHRE} opacity={0.22} />
      <circle cx={CX} cy={CY} r={6.5} fill={FOREST} />
    </g>
  );
}
