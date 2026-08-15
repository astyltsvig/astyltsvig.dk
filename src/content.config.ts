import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    client: z.string(),
    clientUrl: z.string().url().optional(),
    headline: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    categoryKey: z.enum(['platform', 'web', 'ownProduct', 'operations']),
    statusKey: z.enum(['inDailyProduction', 'delivered', 'ongoing']),
    statusSuffix: z.string().optional(),
    screenshot: z.string().optional(),
    screenshotAlt: z.string().optional(),
    order: z.number(),
    description: z.string(),
  }),
});

export const collections = { cases };
