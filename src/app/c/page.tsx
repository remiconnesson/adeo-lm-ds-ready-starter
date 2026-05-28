import Link from "next/link";
import type { Metadata } from "next";
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Components · Mozaic Showcase",
  description: "All Mozaic components available in this starter.",
};

export default function ComponentsIndexPage() {
  return (
    <div>
      <header className={styles.hero}>
        <span className={styles.eyebrow}>Design system</span>
        <h1 className={styles.title}>Components</h1>
        <p className={styles.lede}>
          Every component below is rendered with the canonical SCSS classes
          shipped from <code>@mozaic-ds/styles</code>. Open one to see a live
          demo and the markup behind it.
        </p>
        <div className={styles.stats}>
          <div>
            <span className={styles.statValue}>{COMPONENTS.length}</span>
            <span className={styles.statLabel}>Components</span>
          </div>
          <div>
            <span className={styles.statValue}>{CATEGORIES.length}</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
          <div>
            <span className={styles.statValue}>SCSS</span>
            <span className={styles.statLabel}>First-class</span>
          </div>
        </div>
      </header>

      {CATEGORIES.map((category) => {
        const items = COMPONENTS.filter((c) => c.category === category);
        return (
          <section key={category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.grid}>
              {items.map((c) => (
                <Link key={c.slug} href={`/c/${c.slug}`} className={styles.card}>
                  <span className={styles.cardName}>{c.name}</span>
                  <span className={styles.cardDescription}>{c.description}</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
