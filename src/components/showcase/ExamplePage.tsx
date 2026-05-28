import type { ReactNode } from "react";
import { getExampleBySlug } from "@/lib/examples-registry";
import styles from "./ExamplePage.module.scss";

type Props = {
  slug: string;
  children: ReactNode;
};

export function ExamplePage({ slug, children }: Props) {
  const meta = getExampleBySlug(slug);
  if (!meta) return <p>Unknown example: {slug}</p>;

  return (
    <article>
      <header className={styles.header}>
        <span className={styles.category}>Example</span>
        <h1 className={styles.title}>{meta.name}</h1>
        <p className={styles.description}>{meta.description}</p>
      </header>

      <div className={styles.surface}>
        <div className={styles.surfaceInner}>{children}</div>
      </div>
    </article>
  );
}
