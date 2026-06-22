import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ersaptaaristo.dev",
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
