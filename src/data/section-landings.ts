import type { CategoryKey } from "./site";
import { paintingBasicsImages } from "./painting-basics";

export interface SectionImage {
  src: string;
  alt: string;
}

export interface SectionTopic {
  id: string;
  title: string;
  description: string;
  image: SectionImage;
  guideIds: readonly string[];
  href?: string;
}

export interface SectionLandingConfig {
  hero: SectionImage & { heading: string; lead: string; caption: string };
  start: {
    heading: string;
    lead: string;
    guideId: string;
    cta: string;
    steps: readonly { title: string; description: string }[];
  };
  topics: { heading: string; lead: string; groups: readonly SectionTopic[] };
  transition: {
    eyebrow: string;
    heading: string;
    lead: string;
    links: readonly { href: string; label: string }[];
  };
}

const wallSequence = [
  { title: "Prepare", description: "Clean, repair, protect, and test." },
  { title: "Choose", description: "Match paint and primer to the surface." },
  { title: "Apply", description: "Cut in, roll, and keep a wet edge." },
  { title: "Let it set", description: "Respect recoat and cure time." },
] as const;

export const sectionLandings: Record<CategoryKey, SectionLandingConfig> = {
  basics: {
    hero: {
      ...paintingBasicsImages.hero,
      heading: "Painting basics, made visual",
      lead: "A good paint job is a chain of small, learnable decisions: read the surface, choose the right coating, apply it evenly, and give it time to become durable.",
      caption: "A sound old coating can often be repainted—after the right preparation.",
    },
    start: {
      heading: "Never painted before? Begin with the surface.",
      lead: "Before color, brushes, or technique, find out what you are painting and whether it is clean, dry, smooth, and firmly attached. That one check prevents most expensive do-overs.",
      guideId: "surface-preparation-before-painting",
      cta: "Learn the preparation basics",
      steps: wallSequence,
    },
    topics: {
      heading: "Four decisions behind a better finish",
      lead: "Choose the question closest to your project. You do not need to learn everything before you begin.",
      groups: [
        { id: "plan-prepare", title: "Plan & Prepare", description: "Check the existing surface and decide what it needs before opening the finish paint.", image: paintingBasicsImages.preparation, guideIds: ["can-you-paint-over-old-paint", "do-you-need-primer", "do-you-need-to-sand-before-painting", "surface-preparation-before-painting"], href: "/painting-basics/plan-prepare/" },
        { id: "paint-coverage", title: "Choose Paint & Coverage", description: "Choose the right finish, estimate paint, and plan for enough coats.", image: paintingBasicsImages.selection, guideIds: ["paint-finish-guide", "how-much-paint-do-i-need", "how-many-coats-of-paint", "paint-and-primer-in-one-do-you-still-need-primer", "why-isnt-my-paint-covering-old-color"], href: "/paint-finish-guide/" },
        { id: "fix-problems", title: "Fix Paint Problems", description: "Diagnose visible marks and correct the cause before recoating.", image: paintingBasicsImages.problems, guideIds: ["fix-roller-marks-and-patchy-paint", "how-to-fix-paint-drips-and-runs", "why-is-paint-peeling-or-bubbling", "how-to-fix-brush-marks"], href: "/fix-roller-marks-and-patchy-paint/" },
        { id: "drying-durability", title: "Drying & Durability", description: "Know when paint is ready for another coat, handling, and normal use.", image: paintingBasicsImages.drying, guideIds: ["paint-dry-recoat-cure-time", "should-you-sand-between-coats-of-paint"], href: "/paint-dry-recoat-cure-time/" },
      ],
    },
    transition: {
      eyebrow: "Ready for a project?",
      heading: "Take the basics to a real surface",
      lead: "Follow a complete project guide when you are ready to put preparation, application, and drying time together.",
      links: [{ href: "/how-to-paint-a-room/", label: "Rooms" }, { href: "/how-to-paint-a-ceiling/", label: "Ceilings" }, { href: "/how-to-paint-trim-and-baseboards/", label: "Trim" }, { href: "/how-to-paint-an-interior-door/", label: "Doors" }, { href: "/furniture-projects/", label: "Furniture" }, { href: "/canvas-painting/", label: "Canvas painting" }],
    },
  },
  apply: {
    hero: { src: "/images/section-landings/apply-paint-hero.jpg", alt: "A beginner cuts in a yellow wall while a roller and tray wait nearby.", heading: "Apply paint with control", lead: "Learn how much paint to load, how to join brush and roller work, and when to leave a wet finish alone so it can level.", caption: "Good application is controlled, connected, and patient." },
    start: { heading: "Begin with a wet edge, not a race.", lead: "Work in sections small enough to connect while the paint is still workable. That timing matters more than rolling fast or pressing hard.", guideId: "how-to-keep-a-wet-edge", cta: "Learn how to keep a wet edge", steps: [{ title: "Choose", description: "Match the applicator to the surface." }, { title: "Load", description: "Carry enough paint without flooding the tool." }, { title: "Connect", description: "Join each pass before its edge sets." }, { title: "Stop", description: "Leave leveling paint alone." }] },
    topics: { heading: "Five skills behind an even coat", lead: "Start with the tool or symptom closest to the work in front of you.", groups: [
      { id: "choose-tool", title: "Choose Your Tool", description: "Compare brushes, rollers, spray, and cover textures before you begin.", image: { src: "/images/section-landings/supplies-tools-hero.jpg", alt: "A brush, roller, tray, tape, sanding sponge, scraper, and cloth arranged on a drop cloth." }, guideIds: ["paint-brush-vs-roller", "how-to-choose-roller-nap"] },
      { id: "brush-detail", title: "Brush & Detail", description: "Load a brush cleanly and control paint along edges, trim, and corners.", image: { src: "/images/apply-paint/brush-loading-comparison.jpg", alt: "A correctly loaded brush compared with overloaded and underloaded examples." }, guideIds: ["how-to-load-a-paint-brush", "how-to-cut-in-paint"] },
      { id: "roll", title: "Roll", description: "Build an even film with sensible pressure, overlap, and timing.", image: { src: "/images/apply-paint/roller-pressure-comparison.jpg", alt: "Roller passes showing correct pressure and common pressure mistakes." }, guideIds: ["how-to-use-a-paint-roller", "cut-in-before-or-after-rolling", "how-to-keep-a-wet-edge"] },
      { id: "spray", title: "Spray", description: "Control distance, movement, and coat weight to prevent runs and patchiness.", image: { src: "/images/apply-paint/spray-distance-comparison.jpg", alt: "Spray patterns produced from correct, close, and distant positions." }, guideIds: ["how-to-use-spray-paint-without-drips-runs-or-uneven-coverage"] },
      { id: "coverage-coats", title: "Coverage & Coats", description: "Recognize a complete wet coat and know when more brushing will make it worse.", image: { src: "/images/apply-paint/paint-amount-comparison.jpg", alt: "Paint coverage compared at too little, correct, and excessive amounts." }, guideIds: ["how-do-i-know-if-i-put-on-enough-paint", "should-you-go-back-over-wet-paint"] },
    ] },
    transition: { eyebrow: "Put it into practice", heading: "Use the technique on a complete room", lead: "Follow a full project sequence when you are ready to combine preparation, cutting in, rolling, and recoating.", links: [{ href: "/how-to-paint-a-room/", label: "Paint a room" }, { href: "/how-to-paint-a-ceiling/", label: "Paint a ceiling" }, { href: "/how-to-paint-trim-and-baseboards/", label: "Paint trim" }, { href: "/how-to-paint-an-interior-door/", label: "Paint a door" }] },
  },
  home: {
    hero: { src: "/images/section-landings/home-painting-hero.jpg", alt: "A beginner rolls a deep blue wall in a protected room.", heading: "Home painting, one surface at a time", lead: "See the whole job before opening a can, then work through rooms, ceilings, trim, doors, and repairs in a dependable order.", caption: "A manageable sequence turns a room into a series of small jobs." },
    start: { heading: "Start with one complete room.", lead: "The room guide connects measuring, repair, protection, cutting in, rolling, second coats, and cleanup so no step arrives as a surprise.", guideId: "how-to-paint-a-room", cta: "Follow the room-painting guide", steps: wallSequence },
    topics: { heading: "Four parts of a complete interior job", lead: "Choose the surface or stage that matches your project today.", groups: [
      { id: "rooms-ceilings", title: "Rooms & Ceilings", description: "Plan broad surfaces, safe reach, work order, and full-room protection.", image: paintingBasicsImages.hero, guideIds: ["how-to-paint-a-room", "how-to-paint-a-ceiling"] },
      { id: "trim-doors", title: "Trim, Doors & Edges", description: "Handle detailed surfaces and keep brushed edges consistent with rolled walls.", image: paintingBasicsImages.application, guideIds: ["how-to-paint-trim-and-baseboards", "how-to-paint-an-interior-door", "why-do-cut-in-edges-look-different"] },
      { id: "prepare-repair", title: "Prepare & Repair", description: "Make new or damaged drywall sound, smooth, and ready for coating.", image: paintingBasicsImages.preparation, guideIds: ["how-to-paint-new-drywall", "patch-nail-holes-and-small-drywall-damage"] },
      { id: "finish-use", title: "Finish & Use", description: "Protect the new finish while dry paint develops real handling durability.", image: paintingBasicsImages.drying, guideIds: ["how-long-before-furniture-against-painted-wall"] },
    ] },
    transition: { eyebrow: "Need better technique?", heading: "Make the application step predictable", lead: "Brush and roller fundamentals help the room plan turn into an even finish.", links: [{ href: "/apply-paint/", label: "Apply paint" }, { href: "/how-to-use-a-paint-roller/", label: "Use a roller" }, { href: "/how-to-cut-in-paint/", label: "Cut in" }, { href: "/how-to-keep-a-wet-edge/", label: "Keep a wet edge" }] },
  },
  furniture: {
    hero: { src: "/images/section-landings/furniture-hero.jpg", alt: "A beginner paints a small wooden chair in a home workshop.", heading: "Paint furniture from the surface up", lead: "Identify the material, make the old finish sound, and choose a coating that can handle how the piece will actually be used.", caption: "Material and condition decide the preparation—not color." },
    start: { heading: "Identify first, paint second.", lead: "Solid wood, veneer, and laminate can look similar but need different preparation. Begin with what the surface is and how firmly it is attached.", guideId: "how-to-paint-wood-furniture", cta: "Start with wood furniture", steps: [{ title: "Identify", description: "Know whether it is wood, veneer, or laminate." }, { title: "Repair", description: "Fix loose parts and failing surfaces first." }, { title: "Prepare", description: "Clean, dull, and prime as needed." }, { title: "Cure", description: "Wait before hard use or reassembly." }] },
    topics: { heading: "Choose the guide for the surface", lead: "The inventory is focused: use the material-specific path that matches the piece in front of you.", groups: [
      { id: "surface", title: "Know the Surface", description: "Use different preparation for real wood and nonporous wood-look laminate.", image: { src: "/images/painting-basics/old-painted-chair-inspection.jpg", alt: "A person inspects chipped old paint on a wooden chair before refinishing." }, guideIds: ["how-to-paint-wood-furniture", "how-to-paint-laminate-furniture"] },
    ] },
    transition: { eyebrow: "Gather the right kit", heading: "Choose tools for detail and durability", lead: "A small, surface-appropriate kit is more useful than a crowded collection of specialty products.", links: [{ href: "/supplies-tools/", label: "Supplies & tools" }, { href: "/paint-brush-vs-roller/", label: "Brush vs. roller" }, { href: "/do-you-need-primer/", label: "Primer basics" }, { href: "/surface-preparation-before-painting/", label: "Surface preparation" }] },
  },
  supplies: {
    hero: { src: "/images/section-landings/supplies-tools-hero.jpg", alt: "An organized beginner wall-painting kit arranged on a drop cloth.", heading: "A useful kit, without the clutter", lead: "Choose supplies by the surface and the job they need to do, then skip the extras until a real project gives you a reason to buy them.", caption: "A brush, roller, protection, and preparation tools cover most first rooms." },
    start: { heading: "Build the kit around the room.", lead: "A room checklist separates essentials from situational tools and gives each item a job before it reaches the cart.", guideId: "room-painting-supply-checklist", cta: "Open the room supply checklist", steps: [{ title: "Protect", description: "Cover floors, furniture, and yourself." }, { title: "Prepare", description: "Clean, patch, sand, and mask as needed." }, { title: "Apply", description: "Choose a brush, roller, and tray." }, { title: "Clean up", description: "Plan for storage and disposal." }] },
    topics: { heading: "Two decisions cover the current kit", lead: "Start with the whole list, or go directly to the applicator choice.", groups: [
      { id: "build-kit", title: "Build a Practical Kit", description: "Collect the essentials for room painting and understand when tape helps.", image: paintingBasicsImages.preparation, guideIds: ["room-painting-supply-checklist", "painting-supplies-for-beginners", "painters-tape-basics"] },
      { id: "choose-applicator", title: "Choose an Applicator", description: "Match brush, roller, and roller-cover texture to the surface and finish.", image: paintingBasicsImages.selection, guideIds: ["paint-brush-vs-roller", "how-to-choose-roller-nap"] },
    ] },
    transition: { eyebrow: "Ready to use the tools?", heading: "Turn the kit into an even coat", lead: "Application guides show how loading, pressure, overlap, and timing affect the finish.", links: [{ href: "/apply-paint/", label: "Apply paint" }, { href: "/how-to-load-a-paint-brush/", label: "Load a brush" }, { href: "/how-to-use-a-paint-roller/", label: "Use a roller" }, { href: "/how-to-use-spray-paint-without-drips-runs-or-uneven-coverage/", label: "Spray paint" }] },
  },
  canvas: {
    hero: { src: "/images/section-landings/canvas-painting-hero.jpg", alt: "A beginner paints a simple landscape on a small canvas by a window.", heading: "Your first canvas is practice", lead: "Start small, use a limited palette, paint broad shapes before details, and learn what acrylic can do by finishing imperfect work.", caption: "A simple subject leaves room to notice color, shape, and brushwork." },
    start: { heading: "Make a small first painting.", lead: "A modest surface and a few colors make it easier to finish, adjust layers, and discover what you enjoy without treating the canvas like a test.", guideId: "acrylic-painting-for-beginners", cta: "Start your first canvas", steps: [{ title: "Set up", description: "Protect the table and arrange a small kit." }, { title: "Simplify", description: "Reduce the subject to broad shapes." }, { title: "Layer", description: "Build large areas before small details." }, { title: "Finish", description: "Learn more by completing the attempt." }] },
    topics: { heading: "Two ways into canvas painting", lead: "Choose the setup path or begin with one manageable landscape project.", groups: [
      { id: "begin", title: "Begin with Acrylic", description: "Choose a sensible canvas size, a limited kit, and a forgiving first process.", image: { src: "/images/section-landings/canvas-start.jpg", alt: "Two small blank canvases, a limited acrylic palette, brushes, and water arranged on a protected table." }, guideIds: ["acrylic-painting-for-beginners", "canvas-size-for-painting"] },
      { id: "make", title: "Make a Painting", description: "Turn a landscape into broad, paintable shapes and build it in simple layers.", image: { src: "/images/section-landings/canvas-project.jpg", alt: "A beginner adds broad sky shapes to a small acrylic landscape in progress." }, guideIds: ["how-to-paint-a-simple-landscape"] },
    ] },
    transition: { eyebrow: "Need a small starter kit?", heading: "Gather only what the first canvas needs", lead: "A short supply list keeps the focus on mixing color and making marks.", links: [{ href: "/painting-supplies-for-beginners/", label: "Canvas supplies" }, { href: "/canvas-size-for-painting/", label: "Choose a canvas" }, { href: "/how-to-paint-a-simple-landscape/", label: "Simple landscape" }, { href: "/supplies-tools/", label: "All supplies & tools" }] },
  },
};
