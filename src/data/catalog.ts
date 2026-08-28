import type { CollectionEntry } from "astro:content";

export type GuideEntry = CollectionEntry<"guides">;

export function isPublishedGuide(guide: GuideEntry) {
  return guide.data.status === "published";
}

export function isDiscoverableGuide(guide: GuideEntry) {
  return isPublishedGuide(guide) && !guide.data.isArchived;
}

export function sortGuides(guides: GuideEntry[]) {
  return [...guides].sort((a, b) =>
    a.data.ranking - b.data.ranking || a.data.title.localeCompare(b.data.title),
  );
}
