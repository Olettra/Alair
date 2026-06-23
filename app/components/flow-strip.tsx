"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export type FlowStep = {
  icon: React.ReactNode;
  label: string;
};

// A small left-to-right story told in three beats: a node lights up, a thread
// fills toward the next, and so on — then it loops. Used for the community and
// earn scenes so they read as "this leads to that", not endless chatting.
export function FlowStrip({
  steps,
  dwell = 1700,
  className = "",
}: {
  steps: FlowStep[];
  dwell?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % steps.length), dwell);
    return () => clearInterval(t);
  }, [reduce, dwell, steps.length]);

  // before mount (and for reduced motion) show the finished, settled state
  const active = !mounted || reduce ? steps.length - 1 : i;

  return (
    <div
      className={`flex items-start justify-center ${className}`}
      aria-hidden="true"
    >
      {steps.map((s, k) => (
        <Fragment key={k}>
          {k > 0 && <Connector filled={active >= k} animate={mounted && !reduce} />}
          <Node
            step={s}
            state={k < active ? "done" : k === active ? "current" : "idle"}
          />
        </Fragment>
      ))}
    </div>
  );
}

function Node({
  step,
  state,
}: {
  step: FlowStep;
  state: "idle" | "current" | "done";
}) {
  const current = state === "current";
  return (
    <div className="flex w-20 shrink-0 flex-col items-center gap-2.5 sm:w-24">
      <motion.div
        animate={{
          scale: current ? 1.12 : 1,
          opacity: state === "idle" ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-oat ring-1 ${
          current
            ? "ring-forest/40 shadow-[0_10px_28px_-12px_rgba(20,20,20,0.45)]"
            : "ring-forest/15"
        }`}
      >
        {/* a soft radar halo breathes around the active beat */}
        {current && (
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full"
            initial={{ opacity: 0.45, scale: 1 }}
            animate={{ opacity: 0, scale: 1.85 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ boxShadow: "0 0 0 1px var(--color-ochre)" }}
          />
        )}
        <span className="text-forest">{step.icon}</span>
      </motion.div>
      <span
        className={`min-h-[2.2rem] text-center font-serif text-[12px] italic leading-tight ${
          state === "idle" ? "text-forest/45" : "text-forest/75"
        }`}
      >
        {step.label}
      </span>
    </div>
  );
}

function Connector({ filled, animate }: { filled: boolean; animate: boolean }) {
  return (
    <div className="relative mt-[27px] h-px w-8 overflow-visible rounded-full bg-forest/15 sm:w-12">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full bg-forest/45"
        animate={{ width: filled ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {/* a small light that runs along the thread the moment it fills */}
      {animate && filled && (
        <motion.span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-forest"
          initial={{ left: "0%", opacity: 0 }}
          animate={{ left: "100%", opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ boxShadow: "0 0 6px 1px var(--color-ochre)" }}
        />
      )}
    </div>
  );
}