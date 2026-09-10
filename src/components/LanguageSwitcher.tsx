"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, localizePath, type Locale } from "@/i18n";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className={styles.switcher}>
      {locales.map((l) => (
        <Link
          key={l}
          href={localizePath(pathname, l)}
          className={`${styles.option} ${l === locale ? styles.active : ""}`}
          aria-current={l === locale ? "true" : undefined}
        >
          {localeNames[l].slice(0, 2).toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
