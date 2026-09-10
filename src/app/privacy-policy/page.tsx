import type { Metadata } from "next";
import { LegalContent } from "@/components/pages/LegalContent";
import { getDictionary, locales, localizePath } from "@/i18n";

export const metadata: Metadata = {
  title: getDictionary("it").legal.privacy.title,
  alternates: {
    canonical: localizePath("/privacy-policy", "it"),
    languages: Object.fromEntries(
      locales.map((l) => [l, localizePath("/privacy-policy", l)])
    ),
  },
};

export default function Page() {
  return <LegalContent locale="it" kind="privacy" />;
}
