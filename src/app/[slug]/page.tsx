import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/ServiceIcon";
import { business, services } from "@/lib/business";
import styles from "./service.module.css";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} a Roma`,
    description: service.longDescription,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ServicePage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.icon}>
              <ServiceIcon name={service.icon} />
            </span>
            <span className={styles.eyebrow}>
              Servizio a domicilio &middot; {business.serviceArea}
            </span>
            <h1 className={styles.title}>{service.title} a Roma</h1>
            <p className={styles.lead}>{service.longDescription}</p>
            <div className={styles.ctas}>
              <Link href="/contatti" className="pillPrimary">
                Richiedi informazioni
              </Link>
              <a href={business.phoneHref} className="pillSecondary">
                Chiama {business.phone}
              </a>
            </div>
          </div>
        </section>

        <section className={`container ${styles.details}`}>
          <div>
            <h2 className={styles.h2}>Come funziona</h2>
            <p className={styles.p}>
              Dopo una prima valutazione telefonica organizziamo la visita a
              domicilio nella tua zona, in area {business.serviceArea}.
              Ogni intervento viene documentato e, se necessario, pianifichiamo
              insieme le visite successive.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Chi eroga il servizio</h2>
            <p className={styles.p}>
              {business.displayName} Kennang Tsague, {business.role},{" "}
              {business.opiRegistration}.
            </p>
          </div>
        </section>

        <section className={`container ${styles.related}`}>
          <h2 className={styles.h2}>Altri servizi</h2>
          <ul className={styles.relatedList}>
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
