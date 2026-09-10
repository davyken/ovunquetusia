import { testimonials } from "@/lib/business";
import { RevealLi } from "./RevealLi";
import styles from "./Testimonials.module.css";

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" width="13" height="13" fill="var(--honey)">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonianze" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">Le loro parole</span>
        <h2 className={styles.heading}>Cosa dicono di me</h2>
        <span className={styles.flag}>
          Esempi segnaposto — da sostituire con recensioni reali dei pazienti
        </span>
      </div>

      <ul className={styles.grid}>
        {testimonials.map((item, i) => (
          <RevealLi key={item.author} index={i} className={styles.card}>
            <span className={styles.quoteMark} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M7 6c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.1 4.9-.3 1.5-1.3 2.6-2.6 3.1v2c3-.5 5.5-2.9 5.5-6.6V11c0-2.8-.9-5-2-5zm11 0c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.1 4.9-.3 1.5-1.3 2.6-2.6 3.1v2c3-.5 5.5-2.9 5.5-6.6V11c0-2.8-.9-5-2-5z" />
              </svg>
            </span>
            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.footer}>
              <span className={styles.avatar}>{item.author.charAt(0)}</span>
              <div>
                <p className={styles.author}>{item.author}</p>
                <Stars />
              </div>
            </div>
          </RevealLi>
        ))}
      </ul>
    </section>
  );
}
