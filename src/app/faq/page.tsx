import type { Metadata } from "next";
import { FaqContent } from "@/components/pages/FaqContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("it", "faq", "/faq");

export default function Page() {
  return <FaqContent locale="it" />;
}
