"use client";

import { useMemo, useState } from "react";
import { MONO_CATEGORY_LABELS, type MonoIcon } from "@/lib/icons";
import styles from "./IconCatalog.module.scss";

const SIZE_OPTIONS = [20, 24, 32, 48, 64] as const;

type Props = {
  catalog: Record<string, MonoIcon[]>;
};

export function MonoIconCatalog({ catalog }: Props) {
  const [query, setQuery] = useState("");
  const [size, setSize] = useState<(typeof SIZE_OPTIONS)[number]>(32);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out: { category: string; icons: MonoIcon[] }[] = [];
    for (const [category, icons] of Object.entries(catalog)) {
      const list = q
        ? icons.filter((i) => i.name.toLowerCase().includes(q))
        : icons;
      if (list.length) out.push({ category, icons: list });
    }
    return out;
  }, [catalog, query]);

  const total = filtered.reduce((n, s) => n + s.icons.length, 0);

  function copy(name: string) {
    navigator.clipboard?.writeText(name).then(() => {
      setCopied(name);
      setTimeout(() => setCopied((c) => (c === name ? null : c)), 1200);
    });
  }

  return (
    <div>
      <div className={styles.toolbar}>
        <input
          type="search"
          className={styles.search}
          placeholder="Search icons (e.g. heart, basket, account)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.sizeToggle} role="radiogroup" aria-label="Preview size">
          {SIZE_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              className={styles.sizeButton}
              aria-pressed={size === s}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <span className={styles.count}>{total} icons</span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No icons match “{query}”.</p>
      ) : (
        filtered.map(({ category, icons }) => (
          <section key={category} className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {MONO_CATEGORY_LABELS[category] ?? category} · {icons.length}
            </h2>
            <div className={styles.grid}>
              {icons.map((icon) => {
                const effectiveSize = icon.sizes.includes(size) ? size : icon.sizes[icon.sizes.length - 1];
                const file = icon.file[String(effectiveSize)];
                return (
                  <button
                    key={icon.name}
                    type="button"
                    className={styles.tile}
                    title={`Click to copy "${icon.name}"`}
                    onClick={() => copy(icon.name)}
                  >
                    <span className={styles.iconWrap}>
                      <img
                        src={`/icons/svg/${file}`}
                        alt=""
                        width={effectiveSize}
                        height={effectiveSize}
                        loading="lazy"
                        className={styles.icon}
                      />
                    </span>
                    <span className={styles.name}>{icon.name}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))
      )}

      {copied && <div className={styles.copied}>Copied “{copied}”</div>}
    </div>
  );
}
