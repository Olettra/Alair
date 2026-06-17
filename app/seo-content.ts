// Single source of truth for alik's answer-first copy.
// Used by both the JSON-LD FAQPage schema (layout) and the crawlable
// About/FAQ block (page) so structured data and on-page text always match.

export const ABOUT =
  "alik creates AI-curated rooms for real-life connection. Instead of profiles, swiping, or a feed to scroll, alik gets to know you and introduces you to people you should actually meet — for coffee and a walk, a run and brunch, dinner, live music, or volunteering. Some connections become romantic, some become friendship, and some become community or family. alik doesn't force the outcome. alik is invite-only and currently accepting early members.";

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is alik?",
    a: "alik creates AI-curated rooms for real-life connection. Instead of profiles, swiping, or a feed to scroll, alik gets to know you and introduces you to people you should actually meet — for coffee and a walk, a run and brunch, dinner, live music, or volunteering.",
  },
  {
    q: "Is alik a dating app?",
    a: "Not exactly. alik is for real-life connection of every kind. Some connections become romantic, some become friendship, and some become community or family. alik doesn't force the outcome.",
  },
  {
    q: "How is alik different from dating apps?",
    a: "Dating apps make you do the searching by swiping through profiles. alik does the searching for you and is built around real-life meetings rather than endless messaging. There are no profiles, no swiping, and no feed algorithms.",
  },
  {
    q: "How does alik work?",
    a: "alik learns who you really are, then curates small rooms and warm introductions with compatible people nearby for real activities — coffee, a walk, a run, dinner, live music, or a volunteering morning.",
  },
  {
    q: "Can you make money on alik?",
    a: "Yes. While you wait for a match, you can earn by sharing ordinary real-life experiences that brands and researchers want to learn from. You choose what to share, and you're paid once your submission is approved.",
  },
  {
    q: "How do I join alik?",
    a: "alik is invite-only. You can request an invite on the homepage to be considered for the next round.",
  },
];
