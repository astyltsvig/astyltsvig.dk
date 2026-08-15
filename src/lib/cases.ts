import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '~/i18n/routes';

export type Case = CollectionEntry<'cases'> & { slug: string };

export const categoryOrder = ['platform', 'web', 'ownProduct', 'operations'] as const;
export type CategoryKey = (typeof categoryOrder)[number];

/** All cases for a locale, sorted by `order`. Slugs are derived from the entry id (`da/mallard` → `mallard`). */
export async function getCases(lang: Lang): Promise<Case[]> {
  const entries = await getCollection('cases', (entry) => entry.id.startsWith(`${lang}/`));
  return entries
    .map((entry) => ({ ...entry, slug: entry.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getCaseBySlug(lang: Lang, slug: string): Promise<Case | undefined> {
  const cases = await getCases(lang);
  return cases.find((c) => c.slug === slug);
}

export function groupByCategory(cases: Case[]): Map<CategoryKey, Case[]> {
  const groups = new Map<CategoryKey, Case[]>();
  for (const key of categoryOrder) {
    const members = cases.filter((c) => c.data.categoryKey === key);
    if (members.length > 0) groups.set(key, members);
  }
  return groups;
}
