"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, COMPONENTS } from "@/lib/components-registry";
import { EXAMPLES } from "@/lib/examples-registry";
import { ThemePicker } from "./ThemePicker";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <ThemePicker />

      <div className={styles.header}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandDot} aria-hidden />
          <span className={styles.brandText}>Mozaic Showcase</span>
        </Link>
        <p className={styles.tagline}>React playground for the Adeo design system</p>
      </div>

      <nav className={styles.nav} aria-label="Components">
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Examples</h2>
          <ul className={styles.list}>
            {EXAMPLES.map((ex) => {
              const href = `/examples/${ex.slug}`;
              const active = pathname === href;
              return (
                <li key={ex.slug}>
                  <Link
                    href={href}
                    className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  >
                    {ex.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Foundations</h2>
          <ul className={styles.list}>
            <li>
              <Link
                href="/icons"
                className={`${styles.link} ${pathname === "/icons" ? styles.linkActive : ""}`}
              >
                Icons
              </Link>
            </li>
            <li>
              <Link
                href="/icons-color"
                className={`${styles.link} ${pathname === "/icons-color" ? styles.linkActive : ""}`}
              >
                Coloured icons
              </Link>
            </li>
          </ul>
        </section>

        {CATEGORIES.map((category) => {
          const items = COMPONENTS.filter((c) => c.category === category);
          return (
            <section key={category} className={styles.section}>
              <h2 className={styles.sectionTitle}>{category}</h2>
              <ul className={styles.list}>
                {items.map((c) => {
                  const href = `/c/${c.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={c.slug}>
                      <Link
                        href={href}
                        className={`${styles.link} ${active ? styles.linkActive : ""}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
