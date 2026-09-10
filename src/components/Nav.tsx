"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { TopBar } from "./TopBar";
import { business } from "@/lib/business";
import styles from "./Nav.module.css";

const links = [
  { href: "/chi-sono", label: "Chi Sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/zone", label: "Zone" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo size={32} />
          <span className={styles.brandWord}>{business.brand}</span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCtas}>
            <a href={business.phoneHref} className="pillSecondary">
              Chiama ora
            </a>
            <Link href="/contatti" className="pillPrimary">
              Prenota una visita
            </Link>
          </div>
        </nav>

        <div className={styles.desktopCtas}>
          <a href={business.phoneHref} className={styles.iconBtn} aria-label={`Chiama ${business.phone}`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
          </a>
          <a href={`mailto:${business.email}`} className={styles.iconBtn} aria-label={`Scrivi a ${business.email}`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <Link href="/contatti" className={`pillPrimary ${styles.bookBtn}`}>
            Prenota una visita
          </Link>
        </div>

        <button
          className={styles.toggle}
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
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
