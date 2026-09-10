export const locales = ["it", "en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
};

// it = unprefixed (default), en/fr = "/en", "/fr" prefixes.
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

// Strips a known locale prefix from a pathname, returning the it-equivalent path.
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  const prefix = localePrefix(locale);
  if (base === "/") return prefix || "/";
  return `${prefix}${base}`;
}
