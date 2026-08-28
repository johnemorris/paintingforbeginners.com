# Painting Basics visual prototype assets

The six images in `public/images/painting-basics/` were generated locally for this prototype with the built-in OpenAI image-generation tool, then exported as compressed JPEGs. They do not hotlink or copy imagery from another website. Before public launch, the owner should approve the generated imagery for brand fit or replace it with owned/licensed photography using the briefs below.

| Asset | Current placement | Subject and teaching purpose | Crop / delivered size | Alt-text intent |
| --- | --- | --- | --- | --- |
| `repainting-wall-hero.jpg` | Painting Basics hero; repainting article hero and card | Beginner rolling a new coat over a sound old wall; establishes the main question and process | 3:2 source, displayed at 4:3; 1400 × 933 | Describe the person repainting an existing wall and the roller action |
| `preparation-tools.jpg` | Plan & Prepare hero; preparation topic; article preparation section | Cleaner, repair, sanding, masking, dust-control, and safety tools arranged in a readable sequence | 3:2; 1200 × 800 | Name the recognizable preparation tools without listing decorative details |
| `choose-paint.jpg` | Choose Paint & Coverage topic; compatibility section; primer-related cards | Unbranded cans, swatches, and sample boards that make color and sheen choices visible | 3:2; 1200 × 800 | Describe paint containers, swatches, and contrasting sheen samples |
| `roller-technique.jpg` | Apply Paint topic; roller and new-drywall cards | Loaded roller making overlapping passes while maintaining a wet edge | 3:2; 1200 × 800 | Describe the roller, wall, and overlapping application area |
| `paint-failure.jpg` | Fix Paint Problems section; article failure section; repair card | Peeling, flaking, and bubbling that a reader should recognize as failed adhesion | 3:2; 1200 × 800 | Describe lifted paint, bubbles, exposed coating, and damaged substrate |
| `finished-room.jpg` | Drying & Durability topic; article closing figure | Even finished wall, ventilation, and tools set aside while paint dries | 3:2; 1200 × 800 | Describe the freshly painted room and the visual cues that work has paused for drying |

## Generation prompt set

All prompts used the `photorealistic-natural` use case, requested editorial home-improvement photography, and prohibited text, branding, logos, and watermarks.

1. **Repainting hero:** approachable beginner repainting an already-painted residential interior wall with a roller; soft window light; navy work clothes, restrained pale teal paint, warm canvas neutrals; wide responsive-safe composition.
2. **Preparation tools:** overhead flat lay of a sanding sponge, putty knife, patching compound, sponge, painter's tape, scraper, cloth, and safety glasses on a canvas drop cloth; tools distinct and realistically scaled.
3. **Paint selection:** three unbranded open paint cans, swatches, and sample boards revealing flat-versus-satin reflection on a tidy worktable in directional daylight.
4. **Roller technique:** close instructional view of a hand guiding a loaded roller through overlapping passes with a visible wet edge, protected floor, and realistic tool geometry.
5. **Paint failure:** coherent older wall surface with peeling, flaking, small bubbles, and a subtle moisture stain; neutral raking light to reveal diagnostic texture.
6. **Finished room:** modest freshly repainted room with an even pale teal wall, open window, partially removed tape, and cleaned tools set aside; calm late-afternoon light.

If commissioned photography replaces these files, preserve the filenames to avoid content changes, or update the centralized paths and alt text in `src/data/painting-basics.ts` and the article frontmatter/content together.

## Compact navigation refinement assets

The second landing-page pass added nine 3:2, 960 × 640 JPEG card assets. The built-in image-generation prompts used the same `photorealistic-natural` editorial direction and prohibited text, logos, labels, watermarks, surreal tools, and anatomical errors.

- `question-primer.jpg`: white primer rolled over visible wall repairs.
- `question-sanding.jpg`: a sanding sponge dulling a small glossy test area.
- `question-coats.jpg`: translucent first-coat and opaque second-coat test panels.
- `question-paint-quantity.jpg`: tape measure, unbranded paint can, and calculator beside a wall.
- `question-old-paint.jpg`: hand and inspection light checking a sound old painted finish.
- `question-poor-coverage.jpg`: a pale first coat showing a darker old color through irregular roller passes.
- `problem-roller-marks.jpg`: dried darker roller bands and uneven sheen.
- `problem-brush-marks.jpg`: semi-gloss trim with parallel bristle ridges in side light.
- `problem-drips.jpg`: dried teardrop-shaped runs below an overloaded painted area.

These assets are landing-page-only and are mapped beside their guide IDs in `src/data/painting-basics.ts`; they do not change the article prototype's image sequence.
