import type { APIRoute } from "astro";
import { buildMetadata } from "../data/build-metadata";

export const prerender = true;

const body = `${JSON.stringify({
  service: "paintingforbeginners",
  version: buildMetadata.shortCommit,
  status: "ok",
  statusCode: 200,
  environment: "production",
  location: "cloudflare-pages",
}, null, 2)}\n`;

export const GET: APIRoute = () => new Response(body, {
  status: 200,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow",
  },
});
