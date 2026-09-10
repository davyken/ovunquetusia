import type { Metadata } from "next";
import { FaqContent } from "@/components/pages/FaqContent";
import { buildMetadata } from "@/i18n/metadata";

export const metadata: Metadata = buildMetadata("en", "faq", "/faq");

export default function Page() {
  return <FaqContent locale="en" />;
}
