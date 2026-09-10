import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("fr", "home", "/");

export default function Page() {
  return <HomeContent locale="fr" />;
}
