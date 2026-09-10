import type { Metadata } from "next";
import { business } from "@/lib/business";
import { getDictionary } from "./index";
import { locales, localizePath, type Locale } from "./config";

// path is the it-canonical (unprefixed) path, e.g. "/", "/chi-sono".
export function buildMetadata(
  locale: Locale,
  page: keyof ReturnType<typeof getDictionary>["pages"],
  path: string
): Metadata {
  const dict = getDictionary(locale);
  const meta = dict.pages[page];

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = localizePath(path, l);
  }
  languages["x-default"] = localizePath(path, "it");

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizePath(path, locale),
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localizePath(path, locale),
      siteName: business.brand,
      locale: locale === "it" ? "it_IT" : locale === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
  };
}
