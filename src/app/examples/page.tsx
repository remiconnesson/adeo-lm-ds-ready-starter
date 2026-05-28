import Link from "next/link";
import type { Metadata } from "next";
import { EXAMPLES } from "@/lib/examples-registry";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Examples · Mozaic Showcase",
  description: "Multi-component example pages built on the Mozaic design system.",
};

export default function ExamplesIndexPage() {
  return (
    <div>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>Design system</span>
        <h1 className={styles.title}>Examples</h1>
        <p className={styles.lede}>
          End-to-end pages built by composing Mozaic components. Use them as a
          reference for how the design system holds together at the surface
          level.
        </p>
      </header>

      <div className={styles.grid}>
        {EXAMPLES.map((ex) => (
          <Link
            key={ex.slug}
            href={`/examples/${ex.slug}`}
            className={styles.card}
          >
            <span className={styles.cardName}>{ex.name}</span>
            <span className={styles.cardDescription}>{ex.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
