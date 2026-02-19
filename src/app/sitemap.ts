import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alfaneroyacht.com";
  const pages = [
    "", "/history", "/technical", "/gallery", "/exterior-designer", "/interior-designer",
    "/oceanco", "/master-cabin", "/guest-accommodations", "/crew-spaces", "/entertainment",
    "/dining", "/wellness", "/outdoor-living", "/deck-space", "/water-toys", "/broker",
    "/full-tour",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date("2024-12-01"),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));
}
