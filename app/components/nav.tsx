"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { useWaitlist } from "./waitlist-modal";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWhy = pathname === "/why";

  const { open } = useWaitlist();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }

    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav className="flex items-center justify-between px-6 py-6 border-b border-border sm:px-12">
      <Link href="/" className="font-serif text-[28px] tracking-tight">
        alik
      </Link>
      <div className="flex items-center gap-9">
        {!isWhy && (
          <Link
            href="/why"
            className={`text-sm text-text-dim transition-all duration-300 hover:text-text ${
              isHome && pastHero ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            Why alik
          </Link>
        )}
        <div
          className={`transition-all duration-300 ${
            pastHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
          }`}
        >
          <Button onClick={open}>Join the Waitlist</Button>
        </div>
      </div>
    </nav>
  );
}
