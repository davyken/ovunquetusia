import { business } from "@/lib/business";
import styles from "./MapEmbed.module.css";

export function MapEmbed() {
  const query = encodeURIComponent(`${business.addressLine}, Italia`);

  return (
    <div className={styles.wrap}>
      <iframe
        title="Mappa dello studio"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.frame}
      />
    </div>
  );
}
