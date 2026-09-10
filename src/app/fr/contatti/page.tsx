import type { Metadata } from "next";
import { ContattiContent } from "@/components/pages/ContattiContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("fr", "contatti", "/contatti");

export default function Page() {
  return <ContattiContent locale="fr" />;
}
