"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { InfoDialog, NAV_PILL_CLASS } from "./info-dialog";

export function Earn() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const openFromHash = () => {
      if (window.location.hash === "#earn") {
        setOpen(true);
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="earn-dialog"
        className={NAV_PILL_CLASS}
      >
        earn
      </button>
      <InfoDialog
        open={open}
        onClose={handleClose}
        title="earn"
        hashId="earn-dialog"
      >
        <p>
          most apps make money from your attention. alik thinks you should make
          some of it back.
        </p>

        <p>
          we&apos;ll also, sometimes, want to help you bring the world to your
          door. a question. a study. a small piece of your day someone wants to
          learn from. a brand that needs to hear from a person who lives the
          way you live, not a focus group pretending to.
        </p>

        <p>
          mostly we&apos;re looking for the ordinary. a walk through a park.
          you narrating what you&apos;re doing. a short conversation with a
          friend. the textures of a real day, recorded by the person actually
          living it.
        </p>

        <p>
          you choose. you earn. once your submission is approved, the money is
          in your account.
        </p>

        <p>two buckets, never mixed.</p>
      </InfoDialog>
    </>
  );
}
