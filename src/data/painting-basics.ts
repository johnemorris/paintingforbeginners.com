export const paintingBasicsImages = {
  hero: {
    src: "/images/painting-basics/repainting-wall-hero.jpg",
    alt: "A beginner carefully rolling pale teal paint over an existing interior wall.",
  },
  preparation: {
    src: "/images/painting-basics/preparation-tools.jpg",
    alt: "A sanding sponge, patching tools, cleaner, painter's tape, cloth, and safety glasses arranged on a drop cloth.",
  },
  selection: {
    src: "/images/painting-basics/choose-paint.jpg",
    alt: "Open paint cans, color swatches, and sample boards with different paint sheens.",
  },
  application: {
    src: "/images/painting-basics/roller-technique.jpg",
    alt: "A paint roller applying overlapping passes of pale teal paint to a wall.",
  },
  problems: {
    src: "/images/painting-basics/paint-failure.jpg",
    alt: "Peeling and bubbled paint exposing a failed older coating beneath it.",
  },
  drying: {
    src: "/images/painting-basics/finished-room.jpg",
    alt: "A freshly painted pale teal room with an open window and tools set aside while the finish dries.",
  },
} as const;

export const paintingBasicsTopics = {
  "plan-prepare": {
    image: paintingBasicsImages.preparation,
    href: "/painting-basics/plan-prepare/",
    featured: ["can-you-paint-over-old-paint", "do-you-need-primer", "do-you-need-to-sand-before-painting"],
  },
  "paint-coverage": {
    image: paintingBasicsImages.selection,
    href: "/paint-finish-guide/",
    featured: ["paint-finish-guide", "how-much-paint-do-i-need", "how-many-coats-of-paint"],
  },
  "apply-paint": {
    image: paintingBasicsImages.application,
    href: "/how-to-keep-a-wet-edge/",
    featured: ["how-to-keep-a-wet-edge"],
  },
  "fix-problems": {
    image: paintingBasicsImages.problems,
    href: "/fix-roller-marks-and-patchy-paint/",
    featured: ["fix-roller-marks-and-patchy-paint", "how-to-fix-paint-drips-and-runs", "why-is-paint-peeling-or-bubbling"],
  },
  "drying-durability": {
    image: paintingBasicsImages.drying,
    href: "/paint-dry-recoat-cure-time/",
    featured: ["paint-dry-recoat-cure-time", "should-you-sand-between-coats-of-paint"],
  },
} as const;

export const beginnerQuestions = [
  { guideId: "do-you-need-primer", image: { src: "/images/painting-basics/question-primer.jpg", alt: "Primer being rolled over repaired spots on an interior wall." } },
  { guideId: "do-you-need-to-sand-before-painting", image: { src: "/images/painting-basics/question-sanding.jpg", alt: "A hand scuff-sanding a small area of glossy painted wall." } },
  { guideId: "how-many-coats-of-paint", image: { src: "/images/painting-basics/question-coats.jpg", alt: "First-coat and second-coat paint samples compared side by side." } },
  { guideId: "how-much-paint-do-i-need", image: { src: "/images/painting-basics/question-paint-quantity.jpg", alt: "A tape measure, paint can, and calculator used to estimate paint for a wall." } },
  { guideId: "can-you-paint-over-old-paint", image: { src: "/images/painting-basics/question-old-paint.jpg", alt: "A painter inspecting a clean, firmly bonded old painted wall." } },
  { guideId: "why-isnt-my-paint-covering-old-color", image: { src: "/images/painting-basics/question-poor-coverage.jpg", alt: "A pale first coat with a darker old wall color showing through." } },
] as const;

export const commonProblems = [
  { label: "Roller marks & patchy paint", guideId: "fix-roller-marks-and-patchy-paint", image: { src: "/images/painting-basics/problem-roller-marks.jpg", alt: "Dried wall paint with obvious darker roller bands and uneven sheen." } },
  { label: "Brush marks", guideId: "how-to-fix-brush-marks", image: { src: "/images/painting-basics/problem-brush-marks.jpg", alt: "Semi-gloss painted trim with visible parallel brush ridges." } },
  { label: "Drips & runs", guideId: "how-to-fix-paint-drips-and-runs", image: { src: "/images/painting-basics/problem-drips.jpg", alt: "Several dried paint drips running down a vertical wall." } },
  { label: "Peeling & bubbling", guideId: "why-is-paint-peeling-or-bubbling", image: paintingBasicsImages.problems },
] as const;

export const planPrepareStages = [
  {
    eyebrow: "Read the surface",
    title: "Decide what can stay",
    description: "Learn whether the old coating is sound, what warning signs matter, and when a fresh coat needs more than a quick wipe-down.",
    guideIds: ["can-you-paint-over-old-paint", "do-you-need-primer", "do-you-need-to-sand-before-painting"],
  },
  {
    eyebrow: "Make it sound",
    title: "Clean, repair, and smooth",
    description: "Turn a dusty, dented, or newly installed surface into a stable base that will not advertise every defect through the finish.",
    guideIds: ["surface-preparation-before-painting"],
  },
] as const;

const guideImages: Record<string, { src: string; alt: string }> = {
  "can-you-paint-over-old-paint": paintingBasicsImages.hero,
  "do-you-need-primer": paintingBasicsImages.selection,
  "do-you-need-to-sand-before-painting": paintingBasicsImages.preparation,
  "surface-preparation-before-painting": paintingBasicsImages.preparation,
  "patch-nail-holes-and-small-drywall-damage": paintingBasicsImages.problems,
  "how-to-paint-new-drywall": paintingBasicsImages.application,
  "how-many-coats-of-paint": paintingBasicsImages.selection,
  "how-to-use-a-paint-roller": paintingBasicsImages.application,
};

export function imageForGuide(guideId: string, topic?: string) {
  if (guideImages[guideId]) return guideImages[guideId];
  if (!topic || !(topic in paintingBasicsTopics)) return paintingBasicsImages.hero;
  return paintingBasicsTopics[topic as keyof typeof paintingBasicsTopics].image;
}
