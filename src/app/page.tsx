import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("it", "home", "/");

export default function Page() {
  return <HomeContent locale="it" />;
}
