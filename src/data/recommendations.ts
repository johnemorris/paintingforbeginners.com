export interface Recommendation {
  id: string;
  name: string;
  purpose: string;
  lookFor: string[];
  optional?: boolean;
  productLink?: {
    href: string;
    label: string;
    compensated?: boolean;
  };
}

export const recommendations: Recommendation[] = [
  { id: "angled-cutting-brush", name: "2–2½ inch angled brush", purpose: "Cutting in walls and painting trim with more control than a wide flat brush.", lookFor: ["Firm, even bristle edge", "Comfortable handle", "Bristles approved for your paint type"] },
  { id: "nine-inch-roller-frame", name: "9-inch roller frame", purpose: "Covering ordinary walls efficiently with commonly available roller covers.", lookFor: ["Cage that turns freely", "Secure cover fit", "Threaded handle for an extension pole"] },
  { id: "roller-extension-pole", name: "Adjustable extension pole", purpose: "Reaching normal wall and ceiling areas while reducing repeated ladder movement.", lookFor: ["Compatible thread", "Positive locking mechanism", "Length you can control safely"], optional: true },
  { id: "canvas-brush-trio", name: "Three-brush acrylic starter set", purpose: "Covering broad areas, flexible shapes, and selected details without an oversized kit.", lookFor: ["Medium flat brush", "Medium round brush", "Small detail brush", "Bristles labeled for acrylic"] },
  { id: "canvas-panel", name: "Pre-primed canvas panel", purpose: "Providing an inexpensive, stable first surface that is easy to store.", lookFor: ["Labeled for acrylic", "Firm flat backing", "A manageable 8×10 to 12×16 inch size"] },
  { id: "sanding-sponge", name: "Fine sanding sponge", purpose: "Smoothing repairs and dulling sound finishes with control around edges and profiles.", lookFor: ["Clearly marked grit range", "Firm but conformable backing", "Size comfortable in your hand"] },
];

export function getRecommendations(ids: string[]) {
  return ids.map((id) => {
    const item = recommendations.find((recommendation) => recommendation.id === id);
    if (!item) throw new Error(`Unknown recommendation ID: ${id}`);
    return item;
  });
}
