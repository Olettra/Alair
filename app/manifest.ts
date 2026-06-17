import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "alik — AI-curated rooms for real-life connection",
    short_name: "alik",
    description:
      "alik creates AI-curated rooms for real-life connection — no profiles, no swiping, no algorithms. Some become friendship, some community, some romance.",
    start_url: "/",
    display: "standalone",
    background_color: "#efe8d7",
    theme_color: "#2d3b2e",
    icons: [
      {
        src: "/alik-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/alik-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
