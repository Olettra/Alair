import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "alair: AI-curated rooms for real-life connection",
    short_name: "alair",
    description:
      "alair is an AI for real-life connection. You talk to it, it learns who you are and finds your people, then introduces you in real life. No profiles, no swiping. 25+, invite-only.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2ebe0",
    theme_color: "#2e2723",
    icons: [
      {
        src: "/alair-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/alair-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
