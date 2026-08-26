import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { recommendations } from "./data/recommendations";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(80).max(180),
    category: z.enum(["basics", "home", "furniture", "canvas", "supplies"]),
    topic: z.string().optional(),
    difficulty: z.enum(["Easy", "Moderate"]),
    activeTime: z.string(),
    totalTime: z.string(),
    updated: z.coerce.date(),
    summary: z.string(),
    supplies: z.array(z.string()).min(2),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    hero: z.object({
      src: z.string(),
      alt: z.string(),
      attribution: z.string().optional(),
      attributionUrl: z.string().url().optional(),
    }).optional(),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
    recommendationSlots: z.array(z.string().refine((id) => recommendations.some((item) => item.id === id), "Unknown recommendation ID")).default([]),
  }),
});

export const collections = { guides };
