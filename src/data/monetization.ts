export type AdPlacementId = "article-rail" | "article-inline" | "article-end";

interface AdPlacement {
  enabled: boolean;
  format: "rail" | "horizontal";
  label: string;
}

export const advertising = {
  enabled: false,
  placements: {
    "article-rail": { enabled: true, format: "rail", label: "Article side rail" },
    "article-inline": { enabled: true, format: "horizontal", label: "After article content" },
    "article-end": { enabled: true, format: "horizontal", label: "Before related guides" },
  } satisfies Record<AdPlacementId, AdPlacement>,
} as const;

export function getAdPlacement(id: AdPlacementId) {
  const placement = advertising.placements[id];
  return { ...placement, active: advertising.enabled && placement.enabled };
}
