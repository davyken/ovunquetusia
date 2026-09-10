import type { MetadataRoute } from "next";
import { business, services } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/chi-sono`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servizi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/zone`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contatti`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
