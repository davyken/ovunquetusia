"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n";
import styles from "./LiveClock.module.css";

const localeTag: Record<Locale, string> = {
  it: "it-IT",
  en: "en-GB",
  fr: "fr-FR",
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function LiveClock({ locale }: { locale: Locale }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // Avoids a server/client mismatch on the current instant — fills in on mount.
    return <div className={styles.clock} aria-hidden="true" />;
  }

  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const date = new Intl.DateTimeFormat(localeTag[locale], {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(now);

  return (
    <div className={styles.clock}>
      <span className={styles.item}>
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        <span className={styles.date}>{date}</span>
      </span>
      <span className={styles.item}>
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
        <span className={styles.time}>{time}</span>
      </span>
    </div>
  );
}
