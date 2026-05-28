"use client";

import { useState, type ReactNode } from "react";
import styles from "./Demo.module.scss";

type Props = {
  title?: string;
  description?: string;
  code: string;
  language?: "tsx" | "jsx" | "html";
  children: ReactNode;
};

export function Demo({ title, description, code, language = "tsx", children }: Props) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <section className={styles.demo}>
      {(title || description) && (
        <header className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </header>
      )}
      <div className={styles.preview}>{children}</div>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setShowCode((v) => !v)}
          aria-expanded={showCode}
        >
          {showCode ? "Hide code" : "Show code"}
        </button>
        {showCode && (
          <button type="button" className={styles.copy} onClick={copy}>
            {copied ? "Copied" : "Copy"}
          </button>
        )}
        <span className={styles.lang}>{language}</span>
      </div>
      {showCode && (
        <pre className={styles.code}>
          <code>{code}</code>
        </pre>
      )}
    </section>
  );
}
