import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/pages/ServiceDetailContent";
import { getDictionary, locales, localizePath } from "@/i18n";

export function generateStaticParams() {
  return getDictionary("it").services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/en/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getDictionary("en").services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.longDescription,
    alternates: {
      canonical: localizePath(`/${slug}`, "en"),
      languages: Object.fromEntries(
        locales.map((l) => [l, localizePath(`/${slug}`, l)])
      ),
    },
  };
}

export default async function Page(props: PageProps<"/en/[slug]">) {
  const { slug } = await props.params;
  const service = getDictionary("en").services.find((s) => s.slug === slug);
  if (!service) notFound();

  return <ServiceDetailContent locale="en" service={service} />;
}
