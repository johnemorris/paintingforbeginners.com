export const site = {
  name: "Painting for Beginners",
  domain: "paintingforbeginners.com",
  url: "https://paintingforbeginners.com",
  description: "Practical, beginner-friendly guides for painting rooms, furniture, everyday projects, and your first canvas.",
} as const;

export const categories = {
  basics: {
    title: "Painting Basics",
    href: "/painting-basics/",
    eyebrow: "Learn the essentials",
    description: "Straight answers about preparation, primer, paint quantity, coats, drying, and the small decisions that determine how a project turns out.",
    introHeading: "Good results begin before the first coat",
    intro: "You do not need to memorize a painter's handbook. Learn how to read the surface, match the coating to it, and give each layer the conditions it needs.",
    startHere: "surface-preparation-before-painting",
    topics: [
      { id: "plan-prepare", title: "Plan & Prepare", description: "Check the existing surface and decide what it needs before opening the finish paint.", href: "/painting-basics/plan-prepare/" },
      { id: "paint-coverage", title: "Choose Paint & Coverage", description: "Choose the right finish, estimate paint, and plan for enough coats." },
      { id: "fix-problems", title: "Fix Paint Problems", description: "Diagnose visible marks and correct the cause before recoating." },
      { id: "drying-durability", title: "Drying & Durability", description: "Know when paint is ready for another coat, handling, and normal use." },
    ],
  },
  home: {
    title: "Home Painting",
    href: "/home-painting/",
    eyebrow: "Rooms and household surfaces",
    description: "Plan and paint walls and rooms in a sensible order, with preparation and cleanup built into the process instead of added as afterthoughts.",
    introHeading: "Start with one complete room",
    intro: "Our room guide connects measuring, repairing, priming, cutting in, rolling, recoating, and cleanup so you can see the whole job before opening a can.",
    startHere: "how-to-paint-a-room",
    topics: [],
  },
  furniture: {
    title: "Furniture & Projects",
    href: "/furniture-projects/",
    eyebrow: "Give useful things another life",
    description: "Beginner-friendly help for identifying the surface, preparing it properly, choosing a compatible coating, and letting the finish become durable.",
    introHeading: "Identify first, paint second",
    intro: "Solid wood, veneer, and laminate can look similar but tolerate different preparation. Start with the material, condition, and intended use—not the color.",
    startHere: "how-to-paint-wood-furniture",
    topics: [],
  },
  canvas: {
    title: "Canvas Painting",
    href: "/canvas-painting/",
    eyebrow: "Make something just for fun",
    description: "A welcoming route into acrylic painting: a short supply list, manageable canvas sizes, simple projects, and permission to learn by making imperfect work.",
    introHeading: "Your first canvas is practice, not a test",
    intro: "Begin with a small surface and a few colors. Learn broad shapes before detail, use acrylic's drying time to correct layers, and finish enough paintings to notice what you enjoy.",
    startHere: "acrylic-painting-for-beginners",
    topics: [],
  },
  supplies: {
    title: "Supplies & Tools",
    href: "/supplies-tools/",
    eyebrow: "Buy what helps, skip what doesn't",
    description: "Plain-language supply guidance for choosing tools by project and surface instead of buying oversized starter kits or specialty products too early.",
    introHeading: "Understand the job before the product",
    intro: "Every useful recommendation should explain the problem it solves, where it is optional, and what simpler alternative may already be in your kit.",
    startHere: "room-painting-supply-checklist",
    topics: [],
  },
  apply: {
    title: "Apply Paint",
    href: "/apply-paint/",
    eyebrow: "Build an even coat",
    description: "Beginner-friendly application methods for loading brushes and rollers, keeping paint workable, spraying controlled coats, and knowing when to stop touching the finish.",
    introHeading: "Good technique manages paint while it is workable",
    intro: "Choose an applicator that fits the surface, load it enough to flow, spread a controlled film, and connect each section before the edge begins to set. The goal is consistency—not pressure, speed, or one heavy coat.",
    startHere: "how-to-keep-a-wet-edge",
    topics: [],
  },
} as const;

export type CategoryKey = keyof typeof categories;
export type NavigationKey = CategoryKey | "articles";

export const navigation = [
  { key: "basics", href: "/painting-basics/", label: "Painting Basics" },
  { key: "home", href: "/home-painting/", label: "Home Painting" },
  { key: "furniture", href: "/furniture-projects/", label: "Furniture & Projects" },
  { key: "supplies", href: "/supplies-tools/", label: "Supplies & Tools" },
  { key: "apply", href: "/apply-paint/", label: "Apply Paint" },
  { key: "canvas", href: "/canvas-painting/", label: "Canvas Painting" },
  { key: "articles", href: "/articles/", label: "Article Library" },
] as const satisfies readonly { key: NavigationKey; href: string; label: string }[];
