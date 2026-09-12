// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://taniksehrawat.vercel.app"; // update after deploy

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}