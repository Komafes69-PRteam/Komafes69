import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articlesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      exhibitionSlug: z.string().optional(),
      exhibitionId: z.number().optional(),
      heroImage: image().optional(), // z.string() から image() に変更
      description: z.string().optional(),
      category: z.string().optional(),
      date: z.string().or(z.date()).optional(),
    }),
});
const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/news" }), // ← これを追加
  schema: z.object({
    title: z.string(),
    date: z.string(), 
  }),
});

export const collections = {
  articles: articlesCollection,
  news: newsCollection,
};