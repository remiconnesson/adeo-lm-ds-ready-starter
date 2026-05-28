"use client";

import { type Theme, useTheme } from "./ThemeProvider";
import styles from "./ThemePicker.module.scss";

const OPTIONS: { value: Theme; label: string; swatch: string }[] = [
  { value: "leroymerlin", label: "Leroy Merlin", swatch: "#78be20" },
  { value: "adeo", label: "Adeo", swatch: "#009eac" },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={styles.picker}>
      <p className={styles.label}>Theme</p>
      <div className={styles.options} role="group" aria-label="Theme">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={styles.option}
            aria-pressed={theme === opt.value}
            onClick={() => setTheme(opt.value)}
          >
            <span className={styles.swatch} style={{ background: opt.swatch }} aria-hidden />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
