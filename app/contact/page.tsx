import type { Metadata } from "next";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions about Alik? Want to partner, give feedback, or just say hi? Reach out to our team.",
  openGraph: {
    title: "Contact — Alik",
    description:
      "Have questions about Alik? Want to partner, give feedback, or just say hi? Reach out to our team.",
    url: "https://discoveralik.com/contact",
  },
  twitter: {
    title: "Contact — Alik",
    description:
      "Have questions about Alik? Reach out to our team.",
  },
  alternates: {
    canonical: "https://discoveralik.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 sm:py-36">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
