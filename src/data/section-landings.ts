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
  questions: {
    heading: string;
    lead: string;
    guideIds: readonly string[];
  };
  actionBands: readonly {
    kind: "kit" | "practice";
    eyebrow: string;
    heading: string;
    lead: string;
    links: readonly { href: string; label: string }[];
  }[];
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
        { id: "plan-prepare", title: "Plan & Prepare", description: "Check the existing surface and decide what it needs before opening the finish paint.", image: paintingBasicsImages.preparation, guideIds: ["surface-preparation-before-painting", "can-you-paint-over-old-paint", "do-you-need-primer", "do-you-need-to-sand-before-painting"], href: "/painting-basics/plan-prepare/" },
        { id: "paint-coverage", title: "Choose Paint & Coverage", description: "Choose the right finish, estimate paint, and plan for enough coats.", image: paintingBasicsImages.selection, guideIds: ["paint-finish-guide", "how-much-paint-do-i-need", "how-many-coats-of-paint"], href: "/paint-finish-guide/" },
        { id: "fix-problems", title: "Fix Paint Problems", description: "Diagnose visible marks and correct the cause before recoating.", image: paintingBasicsImages.problems, guideIds: ["fix-roller-marks-and-patchy-paint", "how-to-fix-paint-drips-and-runs", "why-is-paint-peeling-or-bubbling", "how-to-fix-brush-marks"], href: "/fix-roller-marks-and-patchy-paint/" },
        { id: "drying-durability", title: "Drying & Durability", description: "Know when paint is ready for another coat, handling, and normal use.", image: paintingBasicsImages.drying, guideIds: ["paint-dry-recoat-cure-time"], href: "/paint-dry-recoat-cure-time/" },
      ],
    },
    questions: {
      heading: "Common painting-basics questions",
      lead: "Quick answers for the decisions and finish problems beginners notice most often.",
      guideIds: ["should-you-clean-walls-before-painting", "paint-and-primer-in-one-do-you-still-need-primer", "why-isnt-my-paint-covering-old-color", "why-does-touch-up-paint-show", "why-does-paint-look-shiny-or-dull-in-spots", "should-you-sand-between-coats-of-paint"],
    },
    actionBands: [{
      kind: "practice",
      eyebrow: "Put it into practice",
      heading: "Take the basics to a real surface",
      lead: "Follow a complete project guide when you are ready to put preparation, application, and drying time together.",
      links: [{ href: "/how-to-paint-a-room/", label: "Rooms" }, { href: "/how-to-paint-a-ceiling/", label: "Ceilings" }, { href: "/how-to-paint-trim-and-baseboards/", label: "Trim" }, { href: "/how-to-paint-an-interior-door/", label: "Doors" }, { href: "/furniture-projects/", label: "Furniture" }, { href: "/canvas-painting/", label: "Canvas painting" }],
    }],
  },
  apply: {
    hero: { src: "/images/section-landings/apply-paint-hero.jpg", alt: "A beginner cuts in a yellow wall while a roller and tray wait nearby.", heading: "Apply paint with control", lead: "Learn how much paint to load, how to join brush and roller work, and when to leave a wet finish alone so it can level.", caption: "Good application is controlled, connected, and patient." },
    start: { heading: "Begin with a wet edge, not a race.", lead: "Work in sections small enough to connect while the paint is still workable. That timing matters more than rolling fast or pressing hard.", guideId: "how-to-keep-a-wet-edge", cta: "Learn how to keep a wet edge", steps: [{ title: "Choose", description: "Match the applicator to the surface." }, { title: "Load", description: "Carry enough paint without flooding the tool." }, { title: "Connect", description: "Join each pass before its edge sets." }, { title: "Stop", description: "Leave leveling paint alone." }] },
    topics: { heading: "Four skills behind an even coat", lead: "Start with the tool or symptom closest to the work in front of you.", groups: [
      { id: "choose-tool", title: "Choose Your Tool", description: "Compare brushes, rollers, spray, and cover textures before you begin.", image: { src: "/images/section-landings/supplies-tools-hero.jpg", alt: "A brush, roller, tray, tape, sanding sponge, scraper, and cloth arranged on a drop cloth." }, guideIds: ["paint-brush-vs-roller", "how-to-choose-roller-nap"] },
      { id: "brush-detail", title: "Brush & Detail", description: "Load a brush cleanly and control paint along edges, trim, and corners.", image: { src: "/images/apply-paint/brush-loading-comparison.jpg", alt: "A correctly loaded brush compared with overloaded and underloaded examples." }, guideIds: ["how-to-load-a-paint-brush", "how-to-cut-in-paint"] },
      { id: "roll", title: "Roll", description: "Build an even film with sensible pressure, overlap, and timing.", image: { src: "/images/apply-paint/roller-pressure-comparison.jpg", alt: "Roller passes showing correct pressure and common pressure mistakes." }, guideIds: ["how-to-use-a-paint-roller", "how-to-keep-a-wet-edge"] },
      { id: "spray", title: "Spray", description: "Control distance, movement, and coat weight to prevent runs and patchiness.", image: { src: "/images/apply-paint/spray-distance-comparison.jpg", alt: "Spray patterns produced from correct, close, and distant positions." }, guideIds: ["how-to-use-spray-paint-without-drips-runs-or-uneven-coverage"] },
    ] },
    questions: { heading: "Common application questions", lead: "Use these focused answers when the wet coat is behaving differently than expected.", guideIds: ["cut-in-before-or-after-rolling", "why-is-my-paint-roller-splattering", "how-do-i-know-if-i-put-on-enough-paint", "should-you-go-back-over-wet-paint"] },
    actionBands: [{ kind: "practice", eyebrow: "Put it into practice", heading: "Use the technique on a complete room", lead: "Follow a full project sequence when you are ready to combine preparation, cutting in, rolling, and recoating.", links: [{ href: "/how-to-paint-a-room/", label: "Paint a room" }, { href: "/how-to-paint-a-ceiling/", label: "Paint a ceiling" }, { href: "/how-to-paint-trim-and-baseboards/", label: "Paint trim" }, { href: "/how-to-paint-an-interior-door/", label: "Paint a door" }] }],
  },
  home: {
    hero: { src: "/images/section-landings/home-painting-hero.jpg", alt: "A beginner rolls a deep blue wall in a protected room.", heading: "Home painting, one surface at a time", lead: "See the whole job before opening a can, then work through rooms, ceilings, trim, doors, and repairs in a dependable order.", caption: "A manageable sequence turns a room into a series of small jobs." },
    start: { heading: "Start with one complete room.", lead: "The room guide connects measuring, repair, protection, cutting in, rolling, second coats, and cleanup so no step arrives as a surprise.", guideId: "how-to-paint-a-room", cta: "Follow the room-painting guide", steps: wallSequence },
    topics: { heading: "Three parts of a complete interior job", lead: "Choose the surface or stage that matches your project today.", groups: [
      { id: "rooms-ceilings", title: "Rooms & Ceilings", description: "Plan broad surfaces, safe reach, work order, and full-room protection.", image: paintingBasicsImages.hero, guideIds: ["how-to-paint-a-room", "how-to-paint-a-ceiling"] },
      { id: "trim-doors", title: "Trim, Doors & Edges", description: "Handle detailed surfaces and keep brushed edges consistent with rolled walls.", image: paintingBasicsImages.application, guideIds: ["how-to-paint-trim-and-baseboards", "how-to-paint-an-interior-door", "why-do-cut-in-edges-look-different"] },
      { id: "prepare-repair", title: "Prepare & Repair", description: "Make trim and damaged drywall sound, smooth, and ready for coating.", image: paintingBasicsImages.preparation, guideIds: ["patch-nail-holes-and-small-drywall-damage", "how-to-fix-larger-drywall-hole-before-painting", "how-to-paint-new-drywall"] },
    ] },
    questions: { heading: "Common home-painting questions", lead: "Small repair and timing choices can decide whether the finished room looks consistent.", guideIds: ["caulk-or-wood-filler-before-painting-trim", "what-gaps-should-you-caulk-before-painting", "why-do-cut-in-edges-look-different", "how-long-before-furniture-against-painted-wall"] },
    actionBands: [{ kind: "practice", eyebrow: "Put it into practice", heading: "Choose the next surface in the room", lead: "Use a complete project path for the surface you are ready to prepare and paint.", links: [{ href: "/how-to-paint-a-room/", label: "Paint a room" }, { href: "/how-to-paint-a-ceiling/", label: "Paint a ceiling" }, { href: "/how-to-paint-trim-and-baseboards/", label: "Paint trim" }, { href: "/how-to-paint-an-interior-door/", label: "Paint a door" }] }],
  },
  furniture: {
    hero: { src: "/images/section-landings/furniture-hero.jpg", alt: "A beginner paints a small wooden chair in a home workshop.", heading: "Paint furniture from the surface up", lead: "Identify the material, make the old finish sound, and choose a coating that can handle how the piece will actually be used.", caption: "Material and condition decide the preparation—not color." },
    start: { heading: "Identify first, paint second.", lead: "Solid wood, veneer, and laminate can look similar but need different preparation. Begin with what the surface is and how firmly it is attached.", guideId: "how-to-paint-wood-furniture", cta: "Start with wood furniture", steps: [{ title: "Identify", description: "Know whether it is wood, veneer, or laminate." }, { title: "Repair", description: "Fix loose parts and failing surfaces first." }, { title: "Prepare", description: "Clean, dull, and prime as needed." }, { title: "Cure", description: "Wait before hard use or reassembly." }] },
    topics: { heading: "Choose the guide for the surface", lead: "The inventory is focused: use the material-specific path that matches the piece in front of you.", groups: [
      { id: "wood", title: "Solid Wood", description: "Clean, repair, dull, prime, and paint wood according to the condition of its existing finish.", image: { src: "/images/section-landings/furniture-hero.jpg", alt: "A beginner paints a small wooden chair in a home workshop." }, guideIds: ["how-to-paint-wood-furniture"] },
      { id: "laminate", title: "Laminate", description: "Prepare a slick, nonporous wood-look surface so the new coating can grip.", image: { src: "/images/article-guides/furniture-surface-comparison.jpg", alt: "Solid wood, veneer, and laminate furniture surfaces compared side by side." }, guideIds: ["how-to-paint-laminate-furniture"] },
      { id: "veneer", title: "Veneer", description: "Protect the thin real-wood face while cleaning, repairing, and preparing it for paint.", image: { src: "/images/painting-basics/old-painted-chair-inspection.jpg", alt: "A person inspects the condition of an older furniture finish before painting." }, guideIds: ["can-you-paint-veneer-furniture"] },
    ] },
    questions: { heading: "Common furniture-surface questions", lead: "If the material is uncertain, start with the guide that matches what you can see at the edges and damaged areas.", guideIds: ["how-to-paint-laminate-furniture", "can-you-paint-veneer-furniture"] },
    actionBands: [{ kind: "kit", eyebrow: "Build a project kit", heading: "Choose tools for detail and durability", lead: "A small, surface-appropriate kit is more useful than a crowded collection of specialty products.", links: [{ href: "/supplies-tools/", label: "Supplies & tools" }, { href: "/paint-brush-vs-roller/", label: "Brush vs. roller" }, { href: "/do-you-need-primer/", label: "Primer basics" }, { href: "/surface-preparation-before-painting/", label: "Surface preparation" }] }],
  },
  supplies: {
    hero: { src: "/images/section-landings/supplies-tools-hero.jpg", alt: "An organized beginner wall-painting kit arranged on a drop cloth.", heading: "A useful kit, without the clutter", lead: "Choose supplies by the surface and the job they need to do, then skip the extras until a real project gives you a reason to buy them.", caption: "A brush, roller, protection, and preparation tools cover most first rooms." },
    start: { heading: "Build the kit around the room.", lead: "A room checklist separates essentials from situational tools and gives each item a job before it reaches the cart.", guideId: "room-painting-supply-checklist", cta: "Open the room supply checklist", steps: [{ title: "Protect", description: "Cover floors, furniture, and yourself." }, { title: "Prepare", description: "Clean, patch, sand, and mask as needed." }, { title: "Apply", description: "Choose a brush, roller, and tray." }, { title: "Clean up", description: "Plan for storage and disposal." }] },
    topics: { heading: "Choose, use, and care for a practical kit", lead: "Start with the whole list, go directly to the applicator choice, or protect tools and leftover paint after the job.", groups: [
      { id: "build-kit", title: "Build a Practical Kit", description: "Collect the essentials for a first room without filling the cart with specialty extras.", image: paintingBasicsImages.preparation, guideIds: ["room-painting-supply-checklist"] },
      { id: "choose-applicator", title: "Choose an Applicator", description: "Match brush, roller, and roller-cover texture to the surface and finish.", image: paintingBasicsImages.selection, guideIds: ["paint-brush-vs-roller", "how-to-choose-roller-nap"] },
      { id: "care-store", title: "Care for Reusable Tools", description: "Clean brushes and rollers properly so a practical kit stays useful beyond one job.", image: { src: "/images/article-guides/application-tool-comparison.jpg", alt: "A paint brush, roller, spray can, and detail brush arranged for comparison." }, guideIds: ["how-to-clean-paint-brushes-and-rollers"] },
    ] },
    questions: { heading: "Common supply and storage questions", lead: "Keep the kit smaller by knowing when tape helps and how to preserve tools and paint you already own.", guideIds: ["painters-tape-basics", "how-to-store-paint-brushes-and-rollers-between-coats", "how-to-store-leftover-paint"] },
    actionBands: [{ kind: "kit", eyebrow: "Build a kit", heading: "Choose the essentials for your room", lead: "Start with the whole-room checklist, then choose the applicators that fit the surface and finish.", links: [{ href: "/room-painting-supply-checklist/", label: "Room supply checklist" }, { href: "/paint-brush-vs-roller/", label: "Brush vs. roller" }, { href: "/how-to-choose-roller-nap/", label: "Choose roller nap" }, { href: "/painters-tape-basics/", label: "Painter's tape basics" }] }],
  },
  canvas: {
    hero: { src: "/images/section-landings/canvas-painting-hero.jpg", alt: "A beginner paints a simple landscape on a small canvas by a window.", heading: "Your first canvas is practice", lead: "Start small, use a limited palette, paint broad shapes before details, and learn what acrylic can do by finishing imperfect work.", caption: "A simple subject leaves room to notice color, shape, and brushwork." },
    start: { heading: "Make a small first painting.", lead: "A modest surface and a few colors make it easier to finish, adjust layers, and discover what you enjoy without treating the canvas like a test.", guideId: "acrylic-painting-for-beginners", cta: "Start your first canvas", steps: [{ title: "Set up", description: "Protect the table and arrange a small kit." }, { title: "Simplify", description: "Reduce the subject to broad shapes." }, { title: "Layer", description: "Build large areas before small details." }, { title: "Finish", description: "Learn more by completing the attempt." }] },
    topics: { heading: "Five ways into canvas painting", lead: "Choose a first process, assemble a small kit, practice paint control, explore color, or make one manageable project.", groups: [
      { id: "begin", title: "Begin with Acrylic", description: "Use a forgiving first process that prioritizes broad shapes, layers, and finishing the attempt.", image: { src: "/images/section-landings/canvas-start.jpg", alt: "Two small blank canvases, a limited acrylic palette, brushes, and water arranged on a protected table." }, guideIds: ["acrylic-painting-for-beginners"] },
      { id: "kit", title: "Build Your First Kit", description: "Choose a useful surface size and a limited set of acrylic supplies.", image: { src: "/images/section-landings/canvas-start.jpg", alt: "A small acrylic painting kit arranged beside two blank canvases." }, guideIds: ["painting-supplies-for-beginners", "canvas-size-for-painting"] },
      { id: "paint-control", title: "Control Acrylic Paint", description: "Manage water, brush moisture, and working time before acrylic sets.", image: { src: "/images/article-guides/acrylic-water-consistency-comparison.jpg", alt: "Acrylic paint consistency compared at different amounts of added water." }, guideIds: ["can-you-add-water-to-acrylic-paint", "how-wet-should-acrylic-paint-brush-be"] },
      { id: "color", title: "Mix & Blend Color", description: "Build smoother transitions and keep mixtures clear instead of muddy.", image: { src: "/images/article-guides/acrylic-blending-sequence.jpg", alt: "A step-by-step acrylic blending sequence from separate colors to a smooth transition." }, guideIds: ["how-to-blend-acrylic-paint", "why-do-acrylic-colors-turn-muddy"] },
      { id: "make", title: "Make a Painting", description: "Turn a landscape into broad, paintable shapes and build it in simple layers.", image: { src: "/images/section-landings/canvas-project.jpg", alt: "A beginner adds broad sky shapes to a small acrylic landscape in progress." }, guideIds: ["how-to-paint-a-simple-landscape"] },
    ] },
    questions: { heading: "Common acrylic-paint questions", lead: "These focused guides solve the moisture, working-time, and mixing problems beginners meet at the palette.", guideIds: ["can-you-add-water-to-acrylic-paint", "how-wet-should-acrylic-paint-brush-be", "how-to-keep-acrylic-paint-wet-on-palette", "how-to-keep-acrylic-paint-from-drying-in-brushes", "why-do-acrylic-colors-turn-muddy"] },
    actionBands: [
      { kind: "kit", eyebrow: "Build your first kit", heading: "Gather only what the first canvas needs", lead: "A short supply list keeps the focus on mixing color and making marks.", links: [{ href: "/painting-supplies-for-beginners/", label: "Canvas supplies" }, { href: "/canvas-size-for-painting/", label: "Choose a canvas" }, { href: "/supplies-tools/", label: "House-painting tools" }] },
      { kind: "practice", eyebrow: "Put it into practice", heading: "Make one simple landscape", lead: "Use broad shapes and a limited palette to turn the setup and paint-control lessons into a finished first project.", links: [{ href: "/how-to-paint-a-simple-landscape/", label: "Paint a simple landscape" }, { href: "/how-to-blend-acrylic-paint/", label: "Practice a blend" }] },
    ],
  },
};
