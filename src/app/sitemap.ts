import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { ITEMS, GALLERY } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const itemImages = ITEMS.map((item) => `${siteConfig.url}${item.image}`);
  const galleryImages = GALLERY.map((item) => `${siteConfig.url}${item.image}`);

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteConfig.url}/logo.png`,
        ...itemImages,
        ...galleryImages,
      ],
    },
  ];
}
