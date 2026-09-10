import Link from "next/link";
import { business } from "@/lib/business";
import styles from "./Hero.module.css";

const avatarStack = [
  { initials: "M", label: "Medicazioni" },
  { initials: "I", label: "Iniezioni" },
  { initials: "V", label: "Parametri vitali" },
  { initials: "A", label: "Anziani" },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M12 2l1.8 5.6L19.4 9l-5.6 1.8L12 16.4l-1.8-5.6L4.6 9l5.6-1.4z" />
            </svg>
            {business.role} &middot; OPI Roma n. {business.opiId}
          </span>

          <h1 className={styles.headline}>
            L&rsquo;assistenza infermieristica arriva da te,{" "}
            <span className="gradientText">ovunque tu sia.</span>
          </h1>

          <p className={styles.sub}>
            Cure infermieristiche professionali a domicilio a Roma e provincia:
            medicazioni, iniezioni, assistenza post-operatoria e supporto agli
            anziani, con visite pianificate attorno alle tue esigenze.
          </p>

          <div className={styles.ctas}>
            <Link href="/contatti" className="pillPrimary">
              Prenota una visita
            </Link>
            <a href={business.phoneHref} className="pillSecondary">
              Chiama {business.phone}
            </a>
          </div>

          <div className={styles.proof}>
            <div className={styles.avatars}>
              {avatarStack.map((item) => (
                <span key={item.initials} title={item.label} className={styles.avatar}>
                  {item.initials}
                </span>
              ))}
            </div>
            <span className={styles.proofText}>
              Assistenza qualificata a domicilio, con cura
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="var(--honey)"
                aria-hidden="true"
                style={{ display: "inline", marginLeft: 4, verticalAlign: "-1px" }}
              >
                <path d="M12 21s-7-4.4-9.5-8.6C.8 8.7 3 5 6.6 5 9 5 11 7 12 8.6 13 7 15 5 17.4 5 21 5 23.2 8.7 21.5 12.4 19 16.6 12 21 12 21z" />
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.cardWrap}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.card} aria-hidden="true">
            <div className={styles.cardHead}>
              <span>Scheda di visita</span>
              <span className={styles.cardDate}>Oggi, ore 15:30</span>
            </div>
            <dl className={styles.cardRows}>
              <div>
                <dt>Intervento</dt>
                <dd>Medicazione post-operatoria</dd>
              </div>
              <div>
                <dt>Parametri</dt>
                <dd>PA 120/80 &middot; SpO2 98% &middot; T 36,5&deg;</dd>
              </div>
              <div>
                <dt>Zona</dt>
                <dd>Guidonia Montecelio</dd>
              </div>
              <div>
                <dt>Prossima visita</dt>
                <dd>Gioved&igrave;, ore 10:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <a href="#servizi" className={styles.scrollCue} aria-label="Scorri per vedere i servizi">
        <span className={styles.scrollDot} />
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
