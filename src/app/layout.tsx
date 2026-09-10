import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import { business } from "@/lib/business";
import { IntroSplash } from "@/components/IntroSplash";
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
};

// Sets <html lang> from the URL without opting the app out of static rendering
// (no request-time APIs) — runs synchronously before paint, so there's no flash.
const setLangScript = `document.documentElement.lang=location.pathname.startsWith('/fr')?'fr':location.pathname.startsWith('/en')?'en':'it';`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${jakarta.variable} ${publicSans.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setLangScript }} />
        <IntroSplash />
        {children}
      </body>
    </html>
  );
}
