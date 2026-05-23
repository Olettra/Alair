"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { InfoDialog, NAV_PILL_CLASS } from "./info-dialog";

export function HowItWorks() {
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
      if (window.location.hash === "#how-it-works") {
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
        aria-controls="how-it-works-dialog"
        className={NAV_PILL_CLASS}
      >
        how it works
      </button>
      <InfoDialog
        open={open}
        onClose={handleClose}
        title="what is alik?"
        hashId="how-it-works-dialog"
      >
        <p>something is happening to us.</p>

        <p>
          we are being taught, gently, that a voice in a machine is enough.
          that a chatbot who remembers your birthday is the same as a friend
          who shows up at your door. that being listened to and being loved
          are the same thing. they are not.
        </p>

        <p>alik is built to connect humans again.</p>

        <p>
          we use AI for one thing only, to do the hard, invisible work: the
          searching, the sorting, the long careful listening to who you
          actually are, so that you can do the human work. the dinner. the
          walk. the volunteering morning. the look across a table when someone
          says something true.
        </p>

        <p>
          alik doesn&apos;t show you people. it gets to know you, through a
          real conversation, the kind where you say things you wouldn&apos;t
          put in a profile. then it goes looking for the people who should be
          in your life. not your type on paper. your people in real life.
        </p>

        <p>that is the whole idea.</p>
      </InfoDialog>
    </>
  );
}
