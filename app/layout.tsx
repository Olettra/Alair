import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { WaitlistProvider } from "./components/waitlist-modal";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Alik An AI that finds your people",
  description:
    "No swiping. No browsing. Your AI learns who you are, then goes out and brings you the right friends and connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <WaitlistProvider>{children}</WaitlistProvider>
      </body>
    </html>
  );
}
