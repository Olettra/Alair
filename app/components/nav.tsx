"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { useWaitlist } from "./waitlist-modal";

export function Nav() {
  const pathname = usePathname();
  const isWhy = pathname === "/why";

  const { open } = useWaitlist();

  return (
    <nav className="flex items-center justify-between px-6 py-6 border-b border-border sm:px-12">
      <Link href="/" className="font-serif text-[28px] tracking-tight">
        alik
      </Link>
      <div className="flex items-center gap-9">
        {!isWhy && (
          <Link
            href="/why"
            className="text-sm text-text-dim transition-colors duration-300 hover:text-text"
          >
            Why alik
          </Link>
        )}
        {isWhy && (
          <Button onClick={open}>Join the Waitlist</Button>
        )}
      </div>
    </nav>
  );
}
