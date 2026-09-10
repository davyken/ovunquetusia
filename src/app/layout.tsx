import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import { business } from "@/lib/business";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.brand} — Infermiera a domicilio a Roma`,
    template: `%s — ${business.brand}`,
  },
  description:
    "Assistenza infermieristica a domicilio a Roma e provincia: medicazioni, iniezioni, assistenza post-operatoria e supporto agli anziani. Infermiera libera professionista, iscritta OPI Roma n. 48541.",
  keywords: [
    "assistenza infermieristica Roma",
    "infermiera a domicilio Roma",
    "infermiere a domicilio Roma",
    "assistenza infermiera domiciliare Roma",
    "medicazioni a domicilio Roma",
  ],
  openGraph: {
    title: `${business.brand} — Infermiera a domicilio a Roma`,
    description: business.tagline,
    url: business.siteUrl,
    siteName: business.brand,
    locale: "it_IT",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.legalName,
    alternateName: business.brand,
    description:
      "Assistenza infermieristica a domicilio a Roma e provincia: medicazioni, iniezioni, assistenza post-operatoria, supporto agli anziani.",
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
    areaServed: ["Roma", "Guidonia Montecelio", "Tivoli", "Fonte Nuova", "Mentana"],
    medicalSpecialty: "Nursing",
    priceRange: "€€",
  };

  return (
    <html lang="it" className={`${jakarta.variable} ${publicSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
