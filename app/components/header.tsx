"use client";

import { Contact } from "./contact";

export function Header() {
  return (
    <header className="fade-up fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
      <a href="#main" aria-label="alair, back to top" className="group inline-flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export has no Image Optimization API */}
        <img
          src="/logo-mark.png"
          alt="alair"
          width={303}
          height={145}
          className="h-7 w-auto md:h-8 transition-transform duration-200 group-hover:scale-105"
        />
      </a>
      <nav aria-label="Primary" className="flex items-center gap-2">
        <Contact />
      </nav>
    </header>
  );
}
