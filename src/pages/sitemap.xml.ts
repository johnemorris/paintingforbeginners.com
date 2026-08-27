import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";
const staticRoutes = ["/", "/painting-basics/", "/painting-basics/plan-prepare/", "/home-painting/", "/furniture-projects/", "/canvas-painting/", "/supplies-tools/", "/apply-paint/", "/about/", "/affiliate-disclosure/"];
const escape = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
export const GET: APIRoute = async () => {
  const guides = (await getCollection("guides")).filter((guide) => !guide.data.draft && !guide.data.noindex);
  const urls = [...staticRoutes.map((path) => ({ path, modified: undefined })), ...guides.map((guide) => ({ path: `/${guide.id}/`, modified: guide.data.updated.toISOString().slice(0, 10) }))];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({ path, modified }) => `  <url><loc>${escape(new URL(path, site.url).href)}</loc>${modified ? `<lastmod>${modified}</lastmod>` : ""}</url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
