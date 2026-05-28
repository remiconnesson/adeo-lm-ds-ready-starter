import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { IconManifest } from "@/lib/icons";
import { ColorIconCatalog } from "@/components/showcase/ColorIconCatalog";
import styles from "@/components/showcase/ComponentPage.module.scss";

export const metadata = {
  title: "Coloured Icons · Mozaic Showcase",
  description: "Coloured logos, brand marks, and payment-method icons.",
};

async function loadManifest(): Promise<IconManifest> {
  const file = join(process.cwd(), "public", "icons", "manifest.json");
  return JSON.parse(await readFile(file, "utf8"));
}

export default async function ColorIconsPage() {
  const manifest = await loadManifest();

  return (
    <article>
      <header className={styles.header}>
        <span className={styles.category}>Foundations</span>
        <h1 className={styles.title}>Coloured icons</h1>
        <p className={styles.description}>
          Logos, brand marks, and payment-method icons. Each tile copies the asset
          name to the clipboard.
        </p>
      </header>

      <ColorIconCatalog catalog={manifest.color} />
    </article>
  );
}
