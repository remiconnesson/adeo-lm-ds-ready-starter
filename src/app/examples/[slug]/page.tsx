import { notFound } from "next/navigation";
import { EXAMPLES, getExampleBySlug } from "@/lib/examples-registry";
import { ExamplePage } from "@/components/showcase/ExamplePage";
import { EXAMPLE_COMPONENTS } from "@/components/showcase/examples";

export function generateStaticParams() {
  return EXAMPLES.map((e) => ({ slug: e.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getExampleBySlug(slug);
  if (!meta) notFound();

  const ExampleComponent = EXAMPLE_COMPONENTS[slug];
  if (!ExampleComponent) notFound();

  return (
    <ExamplePage slug={slug}>
      <ExampleComponent />
    </ExamplePage>
  );
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const meta = getExampleBySlug(slug);
    return {
      title: meta ? `${meta.name} · Mozaic Showcase` : "Example · Mozaic Showcase",
      description: meta?.description,
    };
  });
}
