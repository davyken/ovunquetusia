import styles from "./Logo.module.css";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      className={styles.mark}
      style={{ width: size, height: size }}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" className={styles.circle} />
      <path d="M14,40 a18,13 0 0,1 36,0 z" className={styles.cap} />
      <rect x="27" y="16" width="10" height="22" rx="2" className={styles.cross} />
      <rect x="21" y="22" width="22" height="10" rx="2" className={styles.cross} />
    </svg>
  );
}
