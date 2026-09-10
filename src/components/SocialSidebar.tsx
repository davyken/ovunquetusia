import { socials } from "@/lib/business";
import { SocialIcon } from "./SocialIcon";
import { getDictionary, type Locale } from "@/i18n";
import styles from "./SocialSidebar.module.css";

export function SocialSidebar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <aside className={styles.rail} aria-label="Social media">
      <ul className={styles.list}>
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={styles.link}
            >
              <SocialIcon name={social.icon} />
            </a>
          </li>
        ))}
      </ul>
      <span className={styles.line} aria-hidden="true" />
      <span className={styles.label}>{dict.socialSidebar.followLabel}</span>
    </aside>
  );
}
