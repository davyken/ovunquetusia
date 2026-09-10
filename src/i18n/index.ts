import type { Locale } from "./config";
import it from "./dictionaries/it";
import en from "./dictionaries/en";
import fr from "./dictionaries/fr";

export type { Locale } from "./config";
export { locales, defaultLocale, localeNames, localePrefix, stripLocale, localizePath } from "./config";
export type { Dictionary } from "./dictionaries/it";

const dictionaries = { it, en, fr };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
