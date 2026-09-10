import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Domande Frequenti",
  description:
    "Le domande più frequenti sull'assistenza infermieristica a domicilio a Roma: prescrizioni, zone servite, prenotazione, disponibilità.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Nav />
      <main>
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
