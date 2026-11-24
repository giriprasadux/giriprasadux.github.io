import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  context: string;
  outcome?: { value: string; label: string };
  facts?: { term: string; detail: string }[];
  /** `bleed` runs a UI screenshot off the bottom of the frame so it can be shown larger. */
  image: { src: string | StaticImageData; width: number; height: number; alt: string; bleed?: boolean };
  tint: string;
};

export type Picture = { src: StaticImageData; alt: string };

/** Text fields accept **bold** and `code`. */
export type Block =
  | { type: "text"; paragraphs: string[] }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "points"; items: { term: string; detail: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "quote"; text: string; source?: string }
  | { type: "figure"; picture: Picture; caption?: string; plain?: boolean }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "bars"; question: string; items: { label: string; value: number }[]; note?: string }
  | { type: "steps"; items: { title: string; detail: string; by: string }[]; note?: string }
  | {
      type: "columns";
      items: { title: string; lead: string; rows: { term: string; detail: string }[] }[];
      note?: string;
    }
  | { type: "compare"; before: { picture: Picture; text: string }; after: { picture: Picture; text: string } }
  | { type: "annotated"; title: string; picture: Picture; notes: string[] }
  | { type: "wipe"; before: Picture; after: Picture }
  | { type: "videos"; items: { id: string; title: string; poster: Picture }[] }
  | { type: "gallery"; items: { picture: Picture; title: string; detail: string }[] }
  | { type: "links"; items: { label: string; href: string }[] }
  | {
      type: "prototype";
      title: string;
      poster: Picture;
      embed: string;
      flows: { label: string; href: string }[];
    };

export type Section = { id: string; title: string; lede?: string; blocks: Block[] };

export type CaseStudy = {
  lead: string;
  meta: { term: string; detail: string }[];
  /** Links that start with # jump down the page; others open in a new tab. */
  links?: { label: string; href: string; note?: string }[];
  hero:
    | { kind: "image"; picture: Picture; bleed?: boolean; caption?: string }
    | { kind: "motion"; still: Picture; motion: string };
  sections: Section[];
};
