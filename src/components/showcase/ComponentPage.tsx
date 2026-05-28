import type { ReactNode } from "react";
import { getBySlug } from "@/lib/components-registry";
import styles from "./ComponentPage.module.scss";

type Props = {
  slug: string;
  importLine: string;
  children: ReactNode;
};

export function ComponentPage({ slug, importLine, children }: Props) {
  const meta = getBySlug(slug);
  if (!meta) {
    return <p>Unknown component: {slug}</p>;
  }

  return (
    <article>
      <header className={styles.header}>
        <span className={styles.category}>{meta.category}</span>
        <h1 className={styles.title}>{meta.name}</h1>
        <p className={styles.description}>{meta.description}</p>
        <pre className={styles.importLine}>
          <code>{importLine}</code>
        </pre>
      </header>
      <div>{children}</div>
    </article>
  );
}
