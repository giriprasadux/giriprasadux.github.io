import flows from "@/assets/trust-center/day-1-user-flow-sketches.png";
import gap from "@/assets/trust-center/day-1-gap-analysis.png";
import sketches from "@/assets/trust-center/day-2-solution-sketches.png";
import hero from "@/assets/trust-center/hero.png";
import cycle from "@/assets/trust-center/lean-ux-cycle.webp";
import annotated from "@/assets/trust-center/nudge-email-wireframe-annotated.png";
import final from "@/assets/trust-center/nudge-final.png";
import wire from "@/assets/trust-center/nudge-wire.png";
import type { CaseStudy } from "../types";

export const trustCenter: CaseStudy = {
  lead: "Led a Lean UX project at Responsive boosting Profile Center shares by identifying user journey gaps and implementing targeted email nudges.",
  meta: [
    { term: "Role", detail: "Lead UX Designer" },
    { term: "Duration", detail: "Mar - May 2024" },
    { term: "Company", detail: "Responsive (RFPIO)" },
    { term: "Industry", detail: "SaaS, 500+ people" },
    { term: "Team", detail: "Product Manager, Senior Product Owner, Tech Lead, Senior Developer" },
  ],
  hero: {
    kind: "image",
    picture: { src: hero, alt: "The nudge email, half grey wireframe and half final design" },
  },
  sections: [
    {
      id: "results",
      title: "Results",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "53.85%", label: "User adoption" },
            { value: "2,000+", label: "Total shares" },
          ],
        },
      ],
    },
    {
      id: "context",
      title: "What a trust center is",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "A trust center is a platform that showcases a company’s commitment to security, privacy, compliance, and transparency. It displays compliance with data protection standards and boosts credibility through transparency in security measures and certifications. This not only strengthens client relationships and brand reputation but also reduces security risks.",
          ],
        },
      ],
    },
    {
      id: "challenge",
      title: "Challenge",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Prior to this project, profile sharing numbers were stagnant. We needed to understand why users weren’t utilizing the sharing feature and identify opportunities to improve the user experience.",
          ],
        },
      ],
    },
    {
      id: "approach",
      title: "The Lean UX approach",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "To tackle this challenge, I adopted a Lean UX methodology, fostering collaboration with a cross-functional team comprising a Product Manager, Senior Product Owner, Tech Lead, and Senior Developer.",
          ],
        },
        { type: "figure", picture: { src: cycle, alt: "Lean UX as a cycle of Think, Make and Check" } },
      ],
    },
    {
      id: "day-1",
      title: "Day 1: Identifying the gaps",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "**Understanding the Sharer persona.** We began by collaboratively sketching user flows for the “Sharer” persona, the individual responsible for sharing profiles. This exercise helped us identify potential roadblocks within the sharing process.",
          ],
        },
        {
          type: "figure",
          picture: { src: flows, alt: "Four overlapping sheets of handwritten user flows for the Sharer" },
          caption: "User flow sketches for the Sharer.",
        },
        {
          type: "text",
          paragraphs: ["Through brainstorming, we pinpointed three key scenarios hindering profile shares:"],
        },
        {
          type: "points",
          items: [
            { term: "Sharer not added", detail: "The profile is complete, but no sharer has been designated." },
            {
              term: "Sharer not onboarded",
              detail: "A sharer is assigned but hasn’t been properly informed about their role.",
            },
            { term: "Sharer inactive", detail: "A sharer is added but hasn’t initiated any profile shares." },
          ],
        },
        {
          type: "figure",
          picture: {
            src: gap,
            alt: "Gap diagram: from current state to desired state, with key steps to bridge the gap and an action plan",
          },
        },
      ],
    },
    {
      id: "day-2",
      title: "Day 2: Prioritization and solutions",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "We narrowed our focus to the two scenarios with the most significant impact: **Sharer not onboarded** and **Sharer inactive**. For these, we brainstormed potential solutions, ultimately selecting two key approaches:",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "Nudge inactive sharers",
              detail: "Send gentle email nudges to onboarded sharers who hadn’t yet shared a profile.",
            },
            {
              term: "Improve the shares list page",
              detail: "Enhance the existing shares list page for a more user-friendly experience.",
            },
          ],
        },
        {
          type: "figure",
          picture: { src: sketches, alt: "Handwritten notes and sketches of nudge ideas" },
          caption: "Working through nudge ideas.",
        },
      ],
    },
    {
      id: "day-3",
      title: "Day 3: Crafting the nudge email",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Leveraging the insights gained, I created wireframes for the nudge email, focusing on these key elements:",
          ],
        },
        {
          type: "points",
          items: [
            {
              term: "Casual tone",
              detail: "The email would maintain a conversational and friendly tone to encourage engagement.",
            },
            {
              term: "Trigger timing",
              detail: "Emails would be sent strategically on the 3rd and 8th day after profile creation.",
            },
            {
              term: "Engaging content",
              detail: "We aimed to incorporate catchy content like “Share Early, Win More” to pique interest.",
            },
            {
              term: "Success stories",
              detail: "Showcasing real-world success stories demonstrating the value of profile sharing.",
            },
            {
              term: "Feature tips",
              detail: "Including helpful tips to familiarize sharers with existing and new features.",
            },
            {
              term: "Getting started guide",
              detail: "Providing an easy access point for sharers who need guidance on initiating profile shares.",
            },
          ],
        },
        {
          type: "figure",
          picture: {
            src: annotated,
            alt: "Annotated wireframe: subject line, opening, benefits, call to action, tips for sharing and training",
          },
          caption: "Annotated wireframe.",
        },
      ],
    },
    {
      id: "final",
      title: "From wireframe to final design",
      blocks: [
        {
          type: "wipe",
          before: { src: wire, alt: "Wireframe of the nudge email" },
          after: {
            src: final,
            alt: "Final nudge email, headed Help Your Team Close Deals Quicker! Share Your Profile",
          },
        },
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration is key",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Throughout this process, collaboration was instrumental. The Technical Writing team’s expertise proved invaluable in refining the content and ensuring it resonated with the target audience.",
          ],
        },
      ],
    },
    {
      id: "next",
      title: "Next steps",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "With the core elements of the nudge email solidified, the next steps involved A/B testing different versions, monitoring user behavior, and iterating based on the results. By continuously optimizing the nudges and user experience, we aimed to achieve our ambitious goal of 2,000 profile shares within the two-month timeframe.",
          ],
        },
      ],
    },
    {
      id: "takeaway",
      title: "Key takeaway",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "This case study showcases the power of the Lean UX approach in tackling complex design challenges. Through effective collaboration and a focus on user needs, we developed a data-driven strategy to significantly increase profile shares within the Profile Center product.",
          ],
        },
      ],
    },
  ],
};
