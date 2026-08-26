# PaintingForBeginners.com

A static Astro editorial site for practical beginner painting guidance. It is deployed as Cloudflare Workers Static Assets and intentionally uses no client framework or CMS.

## Commands

```sh
npm run dev
npm run build
npm run preview
```

For background development, use `astro dev --background`, `astro dev status`, `astro dev logs`, and `astro dev stop`.

`npm run build` generates the deployable redirect file, builds Astro, and checks generated internal links and redirect targets.

## Architecture

- `src/content/guides/` contains editorial Markdown. Guides contain useful prose, not duplicated page structure.
- `src/content.config.ts` validates guide metadata used by summaries, supply lists, related content, dates, and SEO.
- `src/layouts/` owns the global shell and page-family layouts.
- `src/components/` owns reusable navigation, breadcrumb, card, and guide-list UI.
- `src/data/site.ts` owns site identity, navigation, and category definitions.
- `src/data/recommendations.ts` owns merchant-neutral recommendation IDs and selection criteria. Guide frontmatter references these with optional `recommendationSlots`; prose must not embed merchant offers.
- `src/data/redirects.json` is the **only authoritative redirect registry**. Every entry includes its rationale.
- `scripts/generate-redirects.mjs` validates that registry and generates `public/_redirects` during prebuild. Never edit the generated file.
- `scripts/check-built-site.mjs` validates internal links and redirect targets after every production build.

## Adding a guide

1. Add Markdown to `src/content/guides/`; its filename becomes the root-level public URL.
2. Supply every required schema field and write a self-contained, beginner-useful guide.
3. Add only strong `related` connections. Optional cross-cutting fields support `hero` image/alt/attribution, `draft`, `noindex`, and validated recommendation IDs.
4. If the category defines topic sections in `src/data/site.ts`, select one with the guide's `topic` field. The build fails when a guide in a grouped category has no valid topic.
5. Run `npm run build` and review the result at phone and desktop sizes.

Root-level guide URLs intentionally avoid deep taxonomy. Category hubs group guides without coupling durable article URLs to a category that may evolve.

## Historical URLs

Archived WordPress URLs were classified by relevance. Selected acrylic/canvas routes were restored at the same URL. Clear equivalents use explicit 301 entries in the redirect registry. Obsolete WordPress assets, pagination, parked-domain/search artifacts, thin lifestyle posts, and specialized topics without a close equivalent intentionally return a real 404 rather than redirecting to the homepage.

Cloudflare uses `not_found_handling: "404-page"` so generated `404.html` is returned with a 404 response.

## Production signoff blockers

Preview and owner review may proceed, but final public-production signoff requires:

- legal operator/business name, jurisdiction, and approved policy language;
- a tested public contact/privacy/accessibility channel;
- confirmation of analytics, advertising, newsletter, and tracking choices;
- confirmation of affiliate or sponsorship relationships;
- licensing confirmation for existing images in `public/images/`;
- confirmation of rights before archived WordPress prose or media is reused (current guides are newly authored).

Draft Privacy, Terms, Contact, and Accessibility pages are `noindex` until review is complete.

## Deployment

The build output is `dist/`. `wrangler.jsonc` serves that directory as static assets with preview URLs enabled. No runtime environment variables or bindings are currently required.
