"use client";

import { Nav } from "../components/nav";
import { useState, type FormEvent } from "react";
import { Button } from "../components/button";
import { Footer } from "../components/footer";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
    <>
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 sm:py-36">
        <div className="w-full max-w-[480px]">
          {status === "success" ? (
            <div className="text-center">
              <h1 className="font-serif text-[clamp(28px,4vw,40px)] font-normal leading-[1.15] tracking-tight mb-3">
                Message sent
              </h1>
              <p className="text-[15px] font-light text-text-dim mb-8">
                We&apos;ll get back to you soon.
              </p>
              <Button href="/">Back to home</Button>
            </div>
          ) : (
            <>
              <h1 className="font-serif text-[clamp(28px,4vw,40px)] font-normal leading-[1.15] tracking-tight mb-3">
                Contact us
              </h1>
              <p className="text-[15px] font-light text-text-dim mb-10">
                Questions, feedback, or just want to say hi.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={status === "submitting"}
                    className="w-full rounded-xl border border-border bg-surface px-5 py-3 text-sm text-text placeholder:text-text-muted outline-none transition-colors duration-200 focus:border-text disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message..."
                    required
                    rows={5}
                    disabled={status === "submitting"}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-5 py-3 text-sm text-text placeholder:text-text-muted outline-none transition-colors duration-200 focus:border-text disabled:opacity-50"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {status === "error" && (
                <p className="mt-3 text-center text-xs text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
