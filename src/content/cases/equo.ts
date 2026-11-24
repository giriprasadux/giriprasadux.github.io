import addAfter from "@/assets/equo/add-expense-after.png";
import addBefore from "@/assets/equo/add-expense-before.png";
import groupAfter from "@/assets/equo/group-page-after.png";
import groupBefore from "@/assets/equo/group-page-before.png";
import listAfter from "@/assets/equo/groups-list-after.png";
import listBefore from "@/assets/equo/groups-list-before.png";
import still from "@/assets/equo/hero-still.png";
import type { CaseStudy } from "../types";

export const equo: CaseStudy = {
  lead: "A mobile app for splitting bills with friends. I designed it, set every product rule, and directed Claude Code as the engineer, from a blank page to a live product in two days.",
  meta: [
    { term: "Role", detail: "Product designer and owner" },
    { term: "Duration", detail: "2 days, Oct 2026" },
    { term: "Platform", detail: "Mobile web, live" },
    { term: "Team", detail: "Me + Claude Code (AI engineer)" },
  ],
  links: [
    {
      label: "Try the live demo",
      href: "https://group-split-e4a7e.web.app/sign-in",
      note: "Tap Sign in as guest, no account needed. Best on a phone.",
    },
  ],
  hero: {
    kind: "motion",
    still: {
      src: still,
      alt: "Equo: the line Split bills with friends beside three dark-themed phone screens of group balances.",
    },
    motion: "/images/work/equo-hero.webp",
  },
  sections: [
    {
      id: "why",
      title: "Why I built it",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Splitwise already exists. The app was the test: how far can a designer take an idea, from blank page to live product, when AI writes the code?",
            "Making screens was the easy part. The real work was deciding how the product should behave when money moves between people.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "2 days", label: "Blank page to live app" },
            { value: "36", label: "Design checkpoints" },
            { value: "7 + 3", label: "Build phases and UX rounds" },
          ],
        },
      ],
    },
    {
      id: "rules",
      title: "The hard part: rules, not screens",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Nothing is faked. A payment only counts when the person who received it confirms it. A rejected claim changes nothing. In money apps, “did it go through?” is the question that breaks trust, so confirmations get top priority on the group page.",
          ],
        },
        {
          type: "quote",
          text: "When I shared the build on LinkedIn, a principal product designer, a backend engineer and a product lead each singled out this decision, unprompted, as the part no AI tool makes for you.",
          source: "Peer check",
        },
      ],
    },
    {
      id: "build",
      title: "How I ran the build",
      blocks: [
        {
          type: "points",
          items: [
            {
              term: "Brief first",
              detail: "Before any code, I wrote a brief with locked decisions, product rules and design rules.",
            },
            {
              term: "Plan before build",
              detail: "Every phase started with a plan and open questions. Nothing was built until I approved it.",
            },
            {
              term: "Review real screens",
              detail:
                "I reviewed each screen in a live preview and gave design feedback on spacing, wording, motion and behaviour. That added up to 36 checkpoints in 2 days.",
            },
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Brief", detail: "Rules and decisions locked", by: "Me" },
            { title: "Plan", detail: "Phase plan and open questions", by: "Claude Code" },
            { title: "Approve", detail: "My yes before any code", by: "Me" },
            { title: "Build", detail: "Code and automated tests", by: "Claude Code" },
            { title: "Review", detail: "Real screens, design feedback", by: "Me" },
            { title: "Ship", detail: "Commit, deploy, 36 checkpoints", by: "" },
          ],
          note: "Feedback loops back into the next plan. Repeated for 7 build phases and 3 UX rounds.",
        },
      ],
    },
    {
      id: "audit",
      title: "Auditing my own product",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Once the core flow worked, I audited every screen, ranked each issue by severity, and fixed them in three rounds: quick wins, structure, then delight.",
          ],
        },
        { type: "heading", text: "Group page" },
        {
          type: "compare",
          before: {
            picture: { src: groupBefore, alt: "Group page before: one long scroll of balances and expenses" },
            text: "One 4,139px scroll with 11 mixed sections, and Add expense was buried mid-page.",
          },
          after: {
            picture: { src: groupAfter, alt: "Group page after: four tabs, with Payments to confirm first" },
            text: "4 focused tabs, Payments to confirm first, a floating Add expense button, and admin tools moved behind a menu.",
          },
        },
        { type: "heading", text: "Add expense" },
        {
          type: "compare",
          before: {
            picture: { src: addBefore, alt: "Add expense before: the button reads Send Split Request" },
            text: "The button said “Send Split Request”, although it only records an expense, and the fourth split method was hidden off-screen.",
          },
          after: {
            picture: {
              src: addAfter,
              alt: "Add expense after: the button reads Add expense, with a rupee sign in the field",
            },
            text: "“Add expense”, a rupee sign inside the field, and all four split methods visible in a 2x2 grid.",
          },
        },
        { type: "heading", text: "Groups list" },
        {
          type: "compare",
          before: {
            picture: { src: listBefore, alt: "Groups list before: a plain card with no money information" },
            text: "Identical cards with no money information.",
          },
          after: {
            picture: { src: listAfter, alt: "Groups list after: totals owed and due on illustrated group cards" },
            text: "What you owe and are owed at a glance, with a flag when a payment needs your answer.",
          },
        },
      ],
    },
    {
      id: "edge-cases",
      title: "Edge cases I designed for",
      blocks: [
        {
          type: "points",
          items: [
            { term: "Rejected payment claim", detail: "Balances stay unchanged." },
            {
              term: "A save that hangs",
              detail: "A 15-second time-out with a clear error, not an endless “Sending...”.",
            },
            { term: "Two people owe each other", detail: "The person page splits into You owe and Owes you tabs." },
            { term: "Every completed action", detail: "A success toast, then back to where you came from." },
            {
              term: "Accessibility",
              detail: "Status is always shown as text as well as colour, and no functional text is smaller than 12px.",
            },
            { term: "Sample data", detail: "Culturally neutral, inclusive names in the guest tour." },
          ],
        },
      ],
    },
    {
      id: "open-problem",
      title: "Open problem: when two people disagree",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Today only the person who is owed can confirm a payment. Practitioner feedback exposed three cases the rule doesn’t cover yet.",
          ],
        },
      ],
    },
    {
      id: "next",
      title: "What’s next",
      lede: "Tested thoroughly, but not yet with real users.",
      blocks: [
        {
          type: "list",
          items: [
            "Usability test with 5 to 8 friend groups using real trip and flat expenses",
            "Real-device checks: iPhone Safari, UPI apps, screen reader",
            "Design and test the three disagreement cases",
          ],
        },
      ],
    },
    {
      id: "learned",
      title: "What I learned",
      blocks: [
        {
          type: "list",
          items: [
            "AI shortens the distance from idea to working app. It doesn’t replace product judgement or owning what you ship.",
            "The brief is the product. Clear rules kept a fast build consistent.",
            "Keeping the logic separate from the UI made three redesign rounds safe.",
          ],
        },
      ],
    },
  ],
};
