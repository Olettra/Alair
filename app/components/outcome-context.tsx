"use client";

import { createContext, useCallback, useContext, useState } from "react";

// Constellation categories — which "rooms" light up for a given outcome.
export const CATEGORIES = ["romantic", "friendship", "community", "family"] as const;
export type Outcome = (typeof CATEGORIES)[number];

// One source of truth: each feeling pairs with what that connection can quietly
// become. "Feel ___" and "some connections become ___" advance together, so the
// two lines always read as a couplet.
export type Pair = { feel: string; become: string; category: Outcome };

export const PAIRS: Pair[] = [
  { feel: "seen", become: "friendship", category: "friendship" },
  { feel: "met", become: "a romance", category: "romantic" },
  { feel: "found", become: "home", category: "family" },
  { feel: "known", become: "community", category: "community" },
  { feel: "chosen", become: "family", category: "family" },
];

type OutcomeState = {
  index: number;
  pair: Pair;
  outcome: Outcome;
  advance: () => void;
};

const OutcomeCtx = createContext<OutcomeState>({
  index: 0,
  pair: PAIRS[0],
  outcome: PAIRS[0].category,
  advance: () => {},
});

export function OutcomeProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  // Stable so the typewriter can call it from an effect without re-arming timers.
  const advance = useCallback(() => setIndex((i) => (i + 1) % PAIRS.length), []);
  const pair = PAIRS[index];

  return (
    <OutcomeCtx.Provider value={{ index, pair, outcome: pair.category, advance }}>
      {children}
    </OutcomeCtx.Provider>
  );
}

export function useOutcome() {
  return useContext(OutcomeCtx);
}
