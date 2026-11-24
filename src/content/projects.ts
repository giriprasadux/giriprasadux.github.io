import { businessRules, businessRulesProject } from "./cases/business-rules";
import { equo } from "./cases/equo";
import { feastful } from "./cases/feastful";
import { trustCenter } from "./cases/trust-center";
import { visualDesign } from "./cases/visual-design";
import type { CaseStudy, Project } from "./types";

const all: Project[] = [
  businessRulesProject,
  {
    slug: "equo",
    title: "Equo",
    summary:
      "A mobile app for splitting bills with friends. I designed it, set every product rule, and directed Claude Code as the engineer.",
    role: "Product designer and owner",
    context: "Self-initiated",
    outcome: { value: "2 days", label: "blank page to live app" },
    image: {
      src: "/images/work/equo.png",
      width: 1600,
      height: 900,
      alt: "Equo: the line Split bills with friends beside three dark-themed phone screens of group balances.",
    },
    tint: "bg-tint-blue",
  },
  {
    slug: "boosting-trust-center-shares",
    title: "Boosting Trust Center Shares",
    summary: "A Lean UX project that found the gaps in the sharer journey and closed them with targeted email nudges.",
    role: "Lead UX Designer",
    context: "Responsive (RFPIO)",
    outcome: { value: "2,000+", label: "total shares, 53.85% user adoption" },
    image: {
      src: "/images/work/trust-center.png",
      width: 1400,
      height: 788,
      alt: "A nudge email shown half as a grey wireframe and half as the final design.",
    },
    tint: "bg-tint-purple",
  },
  {
    slug: "feastful",
    title: "Feastful",
    summary: "A smart assistant to reduce food waste and save money, from survey research to a tested prototype.",
    role: "Lead UX Designer",
    context: "Mobile app",
    outcome: { value: "100%", label: "of people surveyed used no app to track food waste" },
    image: {
      src: "/images/work/feastful.png",
      width: 1920,
      height: 1080,
      alt: "Feastful app screens: onboarding, savings dashboard, inventory, recipes and an expiry alert.",
    },
    tint: "bg-tint-green",
  },
  {
    slug: "visual-design",
    title: "Visual Designs",
    summary: "A collection of visual design work for mobile apps, web apps and websites.",
    role: "Visual design",
    context: "Collection",
    outcome: { value: "8", label: "selected pieces" },
    image: {
      src: "/images/work/visual-designs.png",
      width: 3840,
      height: 2600,
      alt: "An SEO platform landing page in desktop and mobile layouts on a yellow background.",
    },
    tint: "bg-tint-peach",
  },
];

export const cases: Record<string, CaseStudy> = {
  "business-rules-documentation": businessRules,
  equo,
  "boosting-trust-center-shares": trustCenter,
  feastful,
  "visual-design": visualDesign,
};

export const projects = all.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, "0"),
}));

export type IndexedProject = (typeof projects)[number];
