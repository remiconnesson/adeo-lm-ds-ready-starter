import { notFound } from "next/navigation";
import { COMPONENTS, getBySlug } from "@/lib/components-registry";
import { ComponentPage } from "@/components/showcase/ComponentPage";
import { ComingSoon } from "@/components/showcase/ComingSoon";
import { DEMOS } from "@/components/showcase/demos";

export function generateStaticParams() {
  return COMPONENTS.map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getBySlug(slug);
  if (!meta) notFound();

  const entry = DEMOS[slug];
  const importLine = entry?.importLine ?? `@use "@mozaic-ds/styles/components/${slug}";`;
  const DemoComponent = entry?.Demo;

  return (
    <ComponentPage slug={slug} importLine={importLine}>
      {DemoComponent ? <DemoComponent /> : <ComingSoon name={meta.name} slug={slug} />}
    </ComponentPage>
  );
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const meta = getBySlug(slug);
    return {
      title: meta ? `${meta.name} · Mozaic Showcase` : "Component · Mozaic Showcase",
      description: meta?.description,
    };
  });
}
