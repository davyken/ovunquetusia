import { business } from "@/lib/business";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contacts}>
          <a href={business.phoneHref} className={styles.item}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.5c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
            {business.phone}
          </a>
          <a href={`mailto:${business.email}`} className={styles.item}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            {business.email}
          </a>
        </div>

        <span className={styles.tagline}>{business.serviceArea}</span>
      </div>
    </div>
  );
}
