import type { Metadata } from "next";
import { ZoneContent } from "@/components/pages/ZoneContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("it", "zone", "/zone");

export default function Page() {
  return <ZoneContent locale="it" />;
}
