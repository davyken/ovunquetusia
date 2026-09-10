import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Zones } from "@/components/Zones";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zone Servite",
  description:
    "Assistenza infermieristica a domicilio a Roma e provincia: Guidonia Montecelio, Tivoli, Roma Est, Fonte Nuova, Mentana.",
  alternates: { canonical: "/zone" },
};

export default function ZonePage() {
  return (
    <>
      <Nav />
      <main>
        <Zones />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
