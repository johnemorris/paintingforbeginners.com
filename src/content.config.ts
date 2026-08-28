import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { recommendations } from "./data/recommendations";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(80).max(180),
    category: z.enum(["basics", "home", "furniture", "canvas", "supplies", "apply"]),
    topic: z.string().optional(),
    difficulty: z.enum(["Easy", "Moderate"]),
    activeTime: z.string(),
    totalTime: z.string(),
    updated: z.coerce.date(),
    summary: z.string(),
    supplies: z.array(z.string()).min(2),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    role: z.enum(["pillar", "standard", "supporting"]).default("standard"),
    ranking: z.number().int().positive().default(999),
    status: z.enum(["published", "draft"]).default("published"),
    isArchived: z.boolean().default(false),
    movement: z.enum(["rising", "stable", "falling"]).default("stable"),
    lastReviewed: z.coerce.date().optional(),
    resourceType: z.enum(["guide", "project", "printable"]).default("guide"),
    articleStyle: z.enum(["standard", "editorial"]).default("standard"),
    takeaways: z.array(z.string()).min(3).max(7).optional(),
    hero: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      attribution: z.string().optional(),
      attributionUrl: z.string().url().optional(),
    }).optional(),
    cardImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    noindex: z.boolean().default(false),
    recommendationSlots: z.array(z.string().refine((id) => recommendations.some((item) => item.id === id), "Unknown recommendation ID")).default([]),
  }),
});

export const collections = { guides };
