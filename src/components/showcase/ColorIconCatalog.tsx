"use client";

import { useMemo, useState } from "react";
import { COLOR_GROUP_LABELS, type ColorIcon } from "@/lib/icons";
import styles from "./IconCatalog.module.scss";

type Props = {
  catalog: Record<string, ColorIcon[]>;
};

export function ColorIconCatalog({ catalog }: Props) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out: { group: string; icons: ColorIcon[] }[] = [];
    for (const [group, icons] of Object.entries(catalog)) {
      const list = q ? icons.filter((i) => i.name.toLowerCase().includes(q)) : icons;
      if (list.length) out.push({ group, icons: list });
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
          placeholder="Search logos (e.g. visa, paypal, leroy)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className={styles.count}>{total} icons</span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No icons match “{query}”.</p>
      ) : (
        filtered.map(({ group, icons }) => (
          <section key={group} className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {COLOR_GROUP_LABELS[group] ?? group} · {icons.length}
            </h2>
            <div className={styles.grid}>
              {icons.map((icon) => (
                <button
                  key={icon.file}
                  type="button"
                  className={styles.tile}
                  title={`Click to copy "${icon.name}"`}
                  onClick={() => copy(icon.name)}
                >
                  <span className={styles.iconWrap}>
                    <img
                      src={`/icons/logos/${group}/${icon.file}`}
                      alt=""
                      loading="lazy"
                      className={styles.icon}
                      style={{ maxHeight: 48, width: "auto" }}
                    />
                  </span>
                  <span className={styles.name}>{icon.name}</span>
                </button>
              ))}
            </div>
          </section>
        ))
      )}

      {copied && <div className={styles.copied}>Copied “{copied}”</div>}
    </div>
  );
}
