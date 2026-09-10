import { business } from "@/lib/business";
import { getDictionary, type Locale } from "@/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.legalName,
    alternateName: business.brand,
    description: dict.pages.home.description,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Caserta 6",
      postalCode: "00012",
      addressLocality: "Guidonia Montecelio",
      addressRegion: "RM",
      addressCountry: "IT",
    },
    areaServed: dict.zones.map((z) => z.name),
    medicalSpecialty: "Nursing",
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
