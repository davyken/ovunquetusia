import { business } from "@/lib/business";
import styles from "./WhatsAppFloat.module.css";

export function WhatsAppFloat() {
  const href = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    `Ciao ${business.displayName}, vorrei informazioni su una visita a domicilio.`
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Aiuto rapido"
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3a.5.5 0 0 1-.8-.4V17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      </svg>
      <span className={styles.label}>Aiuto rapido</span>
    </a>
  );
}
