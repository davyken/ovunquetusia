import Link from "next/link";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={`container ${styles.wrap}`}>
      <div className={styles.card}>
        <div className={styles.glowA} aria-hidden="true" />
        <div className={styles.glowB} aria-hidden="true" />
        <div className={styles.content}>
          <span className={styles.eyebrow}>La tua assistenza inizia qui</span>
          <h2 className={styles.heading}>Pronta ad aiutarti, ovunque tu sia</h2>
          <p className={styles.sub}>
            Scrivimi oggi stesso: organizziamo insieme la prima visita a
            domicilio a Roma o in provincia.
          </p>
          <Link href="/contatti" className={`pillPrimary ${styles.cta}`}>
            Prenota una visita
          </Link>
        </div>
      </div>
    </section>
  );
}
