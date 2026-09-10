"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { business } from "@/lib/business";
import { getDictionary, localizePath, type Locale } from "@/i18n";
import styles from "./Nav.module.css";

export function Nav({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);
  const home = localizePath("/", locale);

  return (
    <>
      <TopBar locale={locale} />
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <Link href={home} className={styles.brand} onClick={() => setOpen(false)}>
            <Logo size={32} />
            <span className={styles.brandWord}>{business.brand}</span>
          </Link>

          <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
            {dict.nav.links.map((link) => (
              <Link
                key={link.href}
                href={localizePath(link.href, locale)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileCtas}>
              <a href={business.phoneHref} className="pillSecondary">
                {dict.nav.callNow}
              </a>
              <Link href={localizePath("/contatti", locale)} className="pillPrimary">
                {dict.nav.bookVisit}
              </Link>
            </div>
          </nav>

          <div className={styles.desktopCtas}>
            <a
              href={business.phoneHref}
              className={styles.iconBtn}
              aria-label={`${dict.nav.callAria} ${business.phone}`}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
              </svg>
            </a>
            <a
              href={`mailto:${business.email}`}
              className={styles.iconBtn}
              aria-label={`${dict.nav.emailAria} ${business.email}`}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
            <Link href={localizePath("/contatti", locale)} className={`pillPrimary ${styles.bookBtn}`}>
              {dict.nav.bookVisit}
            </Link>
          </div>

          <button
            className={styles.toggle}
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
