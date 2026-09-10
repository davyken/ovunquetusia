import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Carole Estelle Kennang Tsague per un'assistenza infermieristica a domicilio a Roma: telefono, WhatsApp, email e indirizzo dello studio.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      <Nav />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
