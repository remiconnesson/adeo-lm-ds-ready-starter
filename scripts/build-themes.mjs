#!/usr/bin/env node
import * as sass from "sass";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "themes");
mkdirSync(outDir, { recursive: true });

const themes = ["leroymerlin", "adeo"];

for (const theme of themes) {
  const entry = join(root, "src", "themes", `${theme}.scss`);
  const result = sass.compile(entry, {
    loadPaths: [join(root, "node_modules")],
    style: "compressed",
  });
  const rootVars = readFileSync(
    join(root, "node_modules", "@mozaic-ds", "tokens", "build", theme, "css", "root.css"),
    "utf8"
  );
  const css = rootVars + "\n" + result.css;
  const outPath = join(outDir, `${theme}.css`);
  writeFileSync(outPath, css);
  console.log(`built ${outPath} (${(css.length / 1024).toFixed(1)} KB)`);
}
