import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/ServiceIcon";
import { business } from "@/lib/business";
import { getDictionary, localizePath, type Locale, type Dictionary } from "@/i18n";
import styles from "./ServiceDetail.module.css";

type ServiceEntry = Dictionary["services"][number];

export function ServiceDetailContent({
  locale,
  service,
}: {
  locale: Locale;
  service: ServiceEntry;
}) {
  const dict = getDictionary(locale);
  const sp = dict.servicePage;
  const others = dict.services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Nav locale={locale} />
      <main>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.icon}>
              <ServiceIcon name={service.icon} />
            </span>
            <span className={styles.eyebrow}>
              {sp.badge} &middot; {dict.common.serviceArea}
            </span>
            <h1 className={styles.title}>
              {service.title} {sp.titleSuffix}
            </h1>
            <p className={styles.lead}>{service.longDescription}</p>
            <div className={styles.ctas}>
              <Link href={localizePath("/contatti", locale)} className="pillPrimary">
                {sp.ctaInfo}
              </Link>
              <a href={business.phoneHref} className="pillSecondary">
                {sp.ctaCall} {business.phone}
              </a>
            </div>
          </div>
        </section>

        <section className={`container ${styles.details}`}>
          <div>
            <h2 className={styles.h2}>{sp.howTitle}</h2>
            <p className={styles.p}>
              {sp.howTextPre} {dict.common.serviceArea}. {sp.howTextPost}
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>{sp.whoTitle}</h2>
            <p className={styles.p}>
              {business.displayName} Kennang Tsague, {dict.common.role},{" "}
              {dict.common.opiRegistration}.
            </p>
          </div>
        </section>

        <section className={`container ${styles.related}`}>
          <h2 className={styles.h2}>{sp.relatedTitle}</h2>
          <ul className={styles.relatedList}>
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={localizePath(`/${item.slug}`, locale)}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
