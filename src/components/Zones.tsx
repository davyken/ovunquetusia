import Link from "next/link";
import { business, zones } from "@/lib/business";
import { RevealLi } from "./RevealLi";
import styles from "./Zones.module.css";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Zones() {
  return (
    <section id="zone" className={`${styles.section} container`}>
      <div className={styles.head}>
        <span className="eyebrow">Dove opero</span>
        <h2 className={styles.heading}>Zone servite</h2>
        <p className={styles.sub}>
          Base operativa a {zones.find((z) => z.note === "base operativa")?.name}, con
          interventi in tutta {business.serviceArea.toLowerCase()}.
        </p>
      </div>

      <ul className={styles.grid}>
        {zones.map((zone, i) => {
          const highlighted = zone.note === "base operativa";
          return (
            <RevealLi
              key={zone.name}
              index={i}
              className={`${styles.card} ${highlighted ? styles.highlighted : ""}`}
            >
              {highlighted && <span className={styles.ribbon}>Base operativa</span>}
              <span className={styles.icon}>
                <PinIcon />
              </span>
              <h3 className={styles.cardTitle}>{zone.name}</h3>
              <p className={styles.cardNote}>
                {highlighted
                  ? business.addressLine
                  : zone.note || "Interventi su richiesta"}
              </p>
              <Link href="/contatti" className={styles.cta}>
                Richiedi disponibilit&agrave; &rarr;
              </Link>
            </RevealLi>
          );
        })}
      </ul>
    </section>
  );
}
