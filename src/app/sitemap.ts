import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { ITEMS, GALLERY } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const homeImages = [
    `${base}/logo.png`,
    ...ITEMS.map((item) => `${base}${item.image}`),
    ...GALLERY.map((g) => `${base}${g.image}`),
  ];

  const itemUrls: MetadataRoute.Sitemap = ITEMS.map((item) => ({
    url: `${base}/items/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
    images: [`${base}${item.image}`],
  }));

  const galleryUrls: MetadataRoute.Sitemap = GALLERY.map((g) => ({
    url: `${base}/gallery/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
    images: [`${base}${g.image}`],
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: homeImages,
    },
    {
      url: `${base}/items`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...itemUrls,
    ...galleryUrls,
  ];
}