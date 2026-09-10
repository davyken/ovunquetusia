"use client";

import { useEffect, useRef, useState } from "react";
import { getDictionary, type Locale } from "@/i18n";
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

export function Testimonials({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const items = dict.testimonials;
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function stopAutoplay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3200);
  }

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  function goTo(i: number) {
    setIndex((i + items.length) % items.length);
    startAutoplay();
  }

  return (
    <section id="testimonianze" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">{dict.testimonialsSection.eyebrow}</span>
        <h2 className={styles.heading}>{dict.testimonialsSection.heading}</h2>
        <span className={styles.flag}>{dict.testimonialsSection.flag}</span>
      </div>

      <div
        className={styles.carousel}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => goTo(index - 1)}
          aria-label={dict.testimonialsSection.prev}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item) => (
              <div className={styles.slide} key={item.author}>
                <div className={styles.card}>
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
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => goTo(index + 1)}
          aria-label={dict.testimonialsSection.next}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className={styles.dots}>
        {items.map((item, i) => (
          <button
            key={item.author}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`${dict.testimonialsSection.goTo} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
