import type { Metadata } from "next";
import { ChiSonoContent } from "@/components/pages/ChiSonoContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("it", "chiSono", "/chi-sono");

export default function Page() {
  return <ChiSonoContent locale="it" />;
}
