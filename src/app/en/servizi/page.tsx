import type { Metadata } from "next";
import { ServiziContent } from "@/components/pages/ServiziContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("en", "servizi", "/servizi");

export default function Page() {
  return <ServiziContent locale="en" />;
}
