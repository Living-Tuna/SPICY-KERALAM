import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteConfig.url}/logo.png`,
        `${siteConfig.url}/images/cardamom.jpg`,
        `${siteConfig.url}/images/clove.jpg`,
        `${siteConfig.url}/images/pepper.jpg`,
        `${siteConfig.url}/images/nutmeg-maze.jpg`,
      ],
    },
  ];
}
