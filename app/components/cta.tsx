"use client";

import { useState } from "react";
import { InfoDialog } from "./info-dialog";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgovgdp";

export function SignUpCTA() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setStatus("idle");
      setError(null);
    }, 200);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full bg-forest text-oat px-8 py-3.5 font-serif italic tracking-wide text-base shadow-[0_8px_24px_-12px_rgba(45,59,46,0.6)] hover:bg-ochre hover:text-forest transition-colors duration-200"
      >
        <span>REQUEST AN INVITE</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </button>

      <InfoDialog open={open} onClose={handleClose} title="request an invite" hashId="invite">
        {status === "success" ? (
          <div className="text-center py-2">
            <p className="text-base">request received. we&rsquo;ll reach out if you&rsquo;re a fit.</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-forest text-oat px-6 py-2.5 text-sm font-serif italic hover:bg-ochre hover:text-forest transition-colors"
            >
              close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <p className="text-[14px] md:text-[15px]">
              alik is invite-only. leave your email to be considered for the
              next round.
            </p>
            <label htmlFor="signup-email" className="sr-only">
              email address
            </label>
            <input
              id="signup-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="w-full rounded-full bg-oat ring-1 ring-forest/25 px-5 py-3 text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-forest font-sans not-italic disabled:opacity-60"
            />
            {error && (
              <p role="alert" className="text-sm text-red-700 font-sans not-italic">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting" || !email}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-oat px-6 py-3 font-serif italic tracking-wide hover:bg-ochre hover:text-forest transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "sending…" : "request invite"}
            </button>
          </form>
        )}
      </InfoDialog>
    </>
  );
}
