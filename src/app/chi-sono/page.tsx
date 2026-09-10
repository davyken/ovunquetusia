import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Carole Estelle Kennang Tsague, infermiera libera professionista a Roma. Laurea in Infermieristica Tor Vergata, iscritta all'Albo OPI di Roma.",
  alternates: { canonical: "/chi-sono" },
};

export default function ChiSonoPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
