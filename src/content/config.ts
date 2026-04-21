import { defineCollection, z } from 'astro:content';

const caseSchema = z.object({
  client: z.string(),
  clientUrl: z.string().url().optional(),
  headline: z.string(),
  role: z.string(),
  period: z.string(),
  stack: z.array(z.string()),
  statusKey: z.enum(['inDailyProduction', 'delivered', 'ongoing']),
  statusSuffix: z.string().optional(),
  screenshot: z.string().optional(),
  screenshotAlt: z.string().optional(),
  icon: z.enum(['bike', 'chart', 'shield', 'globe', 'database', 'code']).optional(),
  order: z.number(),
  description: z.string(),
});

export const collections = {
  casesEn: defineCollection({ type: 'content', schema: caseSchema }),
  casesDa: defineCollection({ type: 'content', schema: caseSchema }),
};
