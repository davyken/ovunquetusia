import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { getDictionary, locales, localizePath, type Locale } from "@/i18n";

const staticPaths: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/chi-sono", changeFrequency: "monthly", priority: 0.7 },
  { path: "/servizi", changeFrequency: "monthly", priority: 0.9 },
  { path: "/zone", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contatti", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.2 },
];

function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${business.siteUrl}${localizePath(path, l)}`;
  languages["x-default"] = `${business.siteUrl}${localizePath(path, "it")}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changeFrequency, priority } of staticPaths) {
    for (const locale of locales) {
      entries.push({
        url: `${business.siteUrl}${localizePath(path, locale)}`,
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates(path) },
      });
    }
  }

  const serviceSlugs = getDictionary("it").services.map((s) => s.slug);
  for (const slug of serviceSlugs) {
    for (const locale of locales as readonly Locale[]) {
      entries.push({
        url: `${business.siteUrl}${localizePath(`/${slug}`, locale)}`,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languageAlternates(`/${slug}`) },
      });
    }
  }

  return entries;
}
