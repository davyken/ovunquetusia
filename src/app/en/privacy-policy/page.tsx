import type { Metadata } from "next";
import { LegalContent } from "@/components/pages/LegalContent";
import { getDictionary, locales, localizePath } from "@/i18n";

export const metadata: Metadata = {
  title: getDictionary("en").legal.privacy.title,
  alternates: {
    canonical: localizePath("/privacy-policy", "en"),
    languages: Object.fromEntries(
      locales.map((l) => [l, localizePath("/privacy-policy", l)])
    ),
  },
};

export default function Page() {
  return <LegalContent locale="en" kind="privacy" />;
}
