import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Assistenza infermieristica a domicilio a Roma: medicazioni, iniezioni, parametri vitali, assistenza post-operatoria, anziani e non autosufficienti.",
  alternates: { canonical: "/servizi" },
};

export default function ServiziPage() {
  return (
    <>
      <Nav />
      <main>
        <Services />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
