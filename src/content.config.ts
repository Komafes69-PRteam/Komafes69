import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articlesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/articles" }),
  schema: z.object({
    title: z.string(),
    exhibitionSlug: z.string().optional(),
    exhibitionId: z.number().optional(),
    heroImage: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    date: z.string().or(z.date()).optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};