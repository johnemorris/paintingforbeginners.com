import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = new URL("../dist/", import.meta.url);
const files = [];
async function walk(directory) {
  for (const name of await readdir(directory)) {
    const item = new URL(name, directory.href.endsWith("/") ? directory : new URL(`${directory.href}/`));
    const details = await stat(item);
    if (details.isDirectory()) await walk(new URL(`${item.href}/`));
    else files.push(item);
  }
}
await walk(root);

const htmlFiles = files.filter((file) => file.pathname.endsWith(".html"));
const failures = [];
const canonicalOwners = new Map();
const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical) {
    const existingOwner = canonicalOwners.get(canonical);
    if (existingOwner) failures.push(`${file.pathname.replace(root.pathname, "")}: duplicate canonical also used by ${existingOwner}`);
    else canonicalOwners.set(canonical, file.pathname.replace(root.pathname, ""));
  }
  if (html.includes('name="robots" content="noindex')) {
    if (canonical && sitemap.includes(`<loc>${canonical}</loc>`)) failures.push(`${file.pathname.replace(root.pathname, "")}: noindex URL appears in sitemap`);
  }
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split(/[?#]/)[0];
    if (!href || href.startsWith("//") || href.startsWith("/_astro/")) continue;
    const relative = href.replace(/^\//, "");
    const candidates = href.endsWith("/") ? [new URL(`${relative}index.html`, root)] : [new URL(relative, root), new URL(`${relative}/index.html`, root)];
    let exists = false;
    for (const candidate of candidates) { try { if ((await stat(candidate)).isFile()) exists = true; } catch {} }
    if (!exists) failures.push(`${file.pathname.replace(root.pathname, "")}: broken internal link ${href}`);
  }
  for (const match of html.matchAll(/(?:src|poster)="(\/[^"?#]+)[^\"]*"/g)) {
    const asset = match[1];
    const relative = asset.replace(/^\//, "");
    try { await stat(new URL(relative, root)); }
    catch { failures.push(`${file.pathname.replace(root.pathname, "")}: missing local asset ${asset}`); }
  }
}

const redirects = (await readFile(new URL("_redirects", root), "utf8")).split("\n").filter((line) => line && !line.startsWith("#"));
for (const line of redirects) {
  const [, target] = line.split(/\s+/);
  const relative = target.replace(/^\//, "");
  try { await stat(new URL(target.endsWith("/") ? `${relative}index.html` : relative, root)); }
  catch { failures.push(`redirect target does not exist: ${line}`); }
}

if (failures.length) throw new Error(`Built-site validation failed:\n${failures.join("\n")}`);
console.log(`Validated ${htmlFiles.length} HTML pages, internal links, and ${redirects.length} redirect targets.`);
