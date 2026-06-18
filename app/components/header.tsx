"use client";

import { useEffect, useState } from "react";
import { Earn } from "./earn";
import { Contact } from "./contact";
import { NAV_PILL_CLASS } from "./info-dialog";

export function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("how-it-works");
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      // treat the section as "active" once it fills the middle of the viewport
      { rootMargin: "-40% 0px -40% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fade-up fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-end">
      <nav
        aria-label="Primary"
        className={`flex items-center gap-2 transition-opacity duration-500 ${
          hidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <a href="#how-it-works" className={NAV_PILL_CLASS}>
          how it works
        </a>
        <Earn />
        <Contact />
      </nav>
    </header>
  );
}
