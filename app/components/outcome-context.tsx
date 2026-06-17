"use client";

import { createContext, useContext, useEffect, useState } from "react";

// alik never forces the outcome — so the outcome keeps changing.
export const OUTCOMES = ["romantic", "friendship", "community", "family"] as const;
export type Outcome = (typeof OUTCOMES)[number];

const ROTATE_MS = 3400;

type OutcomeState = { index: number; outcome: Outcome };

const OutcomeCtx = createContext<OutcomeState>({ index: 0, outcome: OUTCOMES[0] });

export function OutcomeProvider({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % OUTCOMES.length), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <OutcomeCtx.Provider value={{ index, outcome: OUTCOMES[index] }}>
      {children}
    </OutcomeCtx.Provider>
  );
}

export function useOutcome() {
  return useContext(OutcomeCtx);
}
