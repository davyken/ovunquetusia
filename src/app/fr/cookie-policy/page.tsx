import type { Metadata } from "next";
import { LegalContent } from "@/components/pages/LegalContent";
import { getDictionary, locales, localizePath } from "@/i18n";

export const metadata: Metadata = {
  title: getDictionary("fr").legal.cookie.title,
  alternates: {
    canonical: localizePath("/cookie-policy", "fr"),
    languages: Object.fromEntries(
      locales.map((l) => [l, localizePath("/cookie-policy", l)])
    ),
  },
};

export default function Page() {
  return <LegalContent locale="fr" kind="cookie" />;
}
