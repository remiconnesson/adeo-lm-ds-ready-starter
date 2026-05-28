#!/usr/bin/env node
import { cpSync, mkdirSync, readdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "node_modules", "@mozaic-ds", "icons", "build");
const dest = join(root, "public", "icons");

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(join(src, "svg"), join(dest, "svg"), { recursive: true });
cpSync(join(src, "logos"), join(dest, "logos"), { recursive: true });

// Monochrome manifest: { categories: { ui: [{ name, sizes: [20,24,32,48,64] }] } }
const iconsJson = JSON.parse(readFileSync(join(src, "icons.json"), "utf8"));
const mono = {};
for (const item of iconsJson.monochrom) {
  const cat = item.cat.toLowerCase();
  mono[cat] ??= new Map();
  const entry = mono[cat].get(item.name) ?? { name: item.name, sizes: new Set(), file: {} };
  entry.sizes.add(Number(item.size));
  entry.file[item.size] = item.fileName;
  mono[cat].set(item.name, entry);
}
const monoManifest = Object.fromEntries(
  Object.entries(mono).map(([cat, map]) => [
    cat,
    [...map.values()]
      .map((e) => ({ name: e.name, sizes: [...e.sizes].sort((a, b) => a - b), file: e.file }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ])
);

// Color manifest: walk the logos/ subfolders
const colorManifest = {};
for (const group of readdirSync(join(dest, "logos"))) {
  const files = readdirSync(join(dest, "logos", group)).filter((f) => f.endsWith(".svg"));
  colorManifest[group] = files.sort().map((f) => ({ name: f.replace(/\.svg$/, ""), file: f }));
}

writeFileSync(join(dest, "manifest.json"), JSON.stringify({ mono: monoManifest, color: colorManifest }));

const totals = {
  monoCategories: Object.keys(monoManifest).length,
  monoIcons: Object.values(monoManifest).reduce((n, arr) => n + arr.length, 0),
  colorGroups: Object.keys(colorManifest).length,
  colorIcons: Object.values(colorManifest).reduce((n, arr) => n + arr.length, 0),
};
console.log(`built icons manifest: ${JSON.stringify(totals)}`);
