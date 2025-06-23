import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
