"use client";

import { useLayoutEffect, useState } from "react";
import { business } from "@/lib/business";
import { getDictionary, type Locale } from "@/i18n";
import { useTypewriterCycle } from "@/hooks/useTypewriterCycle";
import styles from "./IntroSplash.module.css";

const SESSION_KEY = "ots-intro-shown";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "it";
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  if (path.startsWith("/fr")) return "fr";
  return "it";
}

function SplashText({ onDone }: { onDone: () => void }) {
  const [locale] = useState<Locale>(() => detectLocale());
  const dict = getDictionary(locale);
  const phrases = [business.brand, `${dict.hero.headlinePre} ${dict.hero.headlineHighlight}`];
  const { text, done } = useTypewriterCycle(phrases, { loop: false });

  useLayoutEffect(() => {
    if (done) onDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  return (
    <span className={styles.typed}>
      {text}
      <span className={styles.cursor} />
    </span>
  );
}

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useLayoutEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = Boolean(sessionStorage.getItem(SESSION_KEY));
    } catch {
      // ignore — private mode etc.
    }
    if (alreadyShown) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ""}`} aria-hidden="true">
      <SplashText
        onDone={() => {
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            // ignore
          }
          setFading(true);
          setTimeout(() => setVisible(false), 500);
        }}
      />
    </div>
  );
}
