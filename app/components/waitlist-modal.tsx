"use client";

import { AnimatePresence, motion } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { Button } from "./button";

type WaitlistContextType = {
  open: () => void;
};

const WaitlistContext = createContext<WaitlistContextType>({ open: () => {} });

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const open = useCallback(() => {
    setStatus("idle");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    if (status === "idle") setTimeout(() => inputRef.current?.focus(), 100);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mlgovgdp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              className="absolute inset-0 bg-text/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Join the waitlist"
              className="relative w-full max-w-[420px] rounded-2xl bg-bg border border-border p-8 sm:p-10 shadow-[0_16px_64px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors duration-200 hover:bg-text/5 hover:text-text cursor-pointer focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-bg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-text"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-bg">
                        <motion.path
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
                        />
                      </svg>
                    </motion.div>
                    <h2 className="font-serif text-[clamp(24px,4vw,32px)] font-normal leading-[1.15] tracking-tight mb-2">
                      You&apos;re in
                    </h2>
                    <p className="text-sm text-text-dim font-light mb-8">
                      We&apos;ll reach out when your spot opens.
                    </p>
                    <Button onClick={close} variant="outline">
                      Close
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <h2 className="font-serif text-[clamp(24px,4vw,32px)] font-normal leading-[1.15] tracking-tight mb-2">
                      Join the waitlist
                    </h2>
                    <p className="text-sm text-text-dim font-light mb-8">
                      We&apos;ll notify you when your spot opens.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <label htmlFor="waitlist-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        ref={inputRef}
                        id="waitlist-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        disabled={status === "submitting"}
                        className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm text-text placeholder:text-text-muted outline-none transition-colors duration-200 focus:border-text disabled:opacity-50"
                      />
                      <Button type="submit" className="w-full">
                        {status === "submitting" ? "Joining..." : "Join the Waitlist"}
                      </Button>
                    </form>

                    {status === "error" && (
                      <p className="mt-3 text-center text-xs text-red-600">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <p className="mt-4 text-center text-xs text-text-muted">
                      No spam, ever.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WaitlistContext.Provider>
  );
}
