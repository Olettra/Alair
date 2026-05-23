import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "alik",
    short_name: "alik",
    description:
      "alik is a personal AI that finds your people — real coffee, real runs, real connections.",
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
