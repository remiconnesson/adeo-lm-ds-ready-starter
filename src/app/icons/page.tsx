import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { IconManifest } from "@/lib/icons";
import { MonoIconCatalog } from "@/components/showcase/MonoIconCatalog";
import styles from "@/components/showcase/ComponentPage.module.scss";

export const metadata = {
  title: "Icons · Mozaic Showcase",
  description: "Monochrome icon catalog from @mozaic-ds/icons.",
};

async function loadManifest(): Promise<IconManifest> {
  const file = join(process.cwd(), "public", "icons", "manifest.json");
  return JSON.parse(await readFile(file, "utf8"));
}

export default async function IconsPage() {
  const manifest = await loadManifest();

  return (
    <article>
      <header className={styles.header}>
        <span className={styles.category}>Foundations</span>
        <h1 className={styles.title}>Icons</h1>
        <p className={styles.description}>
          Monochrome icons shipped with <code>@mozaic-ds/icons</code>. Click any tile
          to copy the icon name. Use the size toggle to preview the optimised SVG at the
          requested pixel size.
        </p>
        <pre className={styles.importLine}>
          <code>{`import { Worldwide24 } from "@mozaic-ds/icons";`}</code>
        </pre>
      </header>

      <MonoIconCatalog catalog={manifest.mono} />
    </article>
  );
}
