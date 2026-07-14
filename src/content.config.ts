import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.union([z.string(), z.number()]),
    role: z.string().optional(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    // small ASCII face shown as the project's "mascot"
    face: z.string().default('(·_·)'),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
