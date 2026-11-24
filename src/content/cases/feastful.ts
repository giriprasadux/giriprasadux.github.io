import isometric from "@/assets/feastful/all-screens-isometric.png";
import hero from "@/assets/feastful/hero-banner.png";
import home from "@/assets/feastful/phone-home.png";
import recipe from "@/assets/feastful/phone-recipe.png";
import collage from "@/assets/feastful/results-screens-collage.png";
import onboarding from "@/assets/feastful/screen-01-onboarding.png";
import preferences from "@/assets/feastful/screen-02-setting-up-preferences.png";
import checklist from "@/assets/feastful/video-poster-checklist.jpg";
import reinforcement from "@/assets/feastful/video-poster-positive-reinforcement.jpg";
import type { CaseStudy } from "../types";

export const feastful: CaseStudy = {
  lead: "Feastful is a mobile app that empowers users to become food waste warriors. It tackles the issue head-on by providing a suite of features to plan, manage, and optimize groceries, leading to significant waste reduction and cost savings.",
  meta: [
    { term: "Role", detail: "Lead UX Designer" },
    {
      term: "What I did",
      detail:
        "Discovery and requirements gathering, stakeholder interviews, visual direction and UI design, prototyping and styleguide creation",
    },
  ],
  links: [
    {
      label: "Full write-up in Notion",
      href: "https://www.notion.so/Feastful-Case-Study-3cf193d181e14605a7830747dce23d04?source=copy_link",
    },
  ],
  hero: { kind: "image", picture: { src: hero, alt: "Feastful logo and tagline beside two phone screens" } },
  sections: [
    {
      id: "challenge",
      title: "Challenge",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Many of us face the problem of wasting food in our busy lives. Leftovers stay in the fridge, things we buy on a whim spoil, and good food gets thrown away. This hurts our pockets and harms the environment. While some planning methods exist, there’s a gap for a user-friendly and holistic solution to address food waste across demographics.",
          ],
        },
      ],
    },
    {
      id: "research",
      title: "What the research showed",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "Our research revealed a crucial fact: **100% of survey participants didn’t use an existing app to track food waste.** Many admitted to not actively tracking food consumption or waste due to a lack of motivation and clear benefits.",
          ],
        },
        {
          type: "list",
          items: [
            "Most users don’t use any app to manage food waste.",
            "Barriers include lack of motivation and unclear benefits.",
            "Feastful is designed to be engaging and easy to use.",
          ],
        },
        {
          type: "bars",
          question: "Would you be interested in using a mobile app that helps reduce food waste and save money?",
          items: [
            { label: "Maybe, I’d like to know more", value: 55.6 },
            { label: "Yes, definitely", value: 33.3 },
            { label: "No, I’m not interested", value: 11.1 },
          ],
        },
        {
          type: "quote",
          text: "If such an app is created, it should be accessible to all without any subscription requirement. Public should be educated that throwing food and making extra food than required is not normal and regular routine.",
          source: "Survey participant",
        },
      ],
    },
    {
      id: "features",
      title: "Key features",
      blocks: [
        {
          type: "points",
          items: [
            { term: "Smart meal planning", detail: "Recipes based on what you already have." },
            { term: "Expiry reminders and storage tips", detail: "Keeps track of expiring items and offers tips." },
            { term: "Inventory management", detail: "Helps you track what’s in your pantry and fridge." },
          ],
        },
        {
          type: "figure",
          picture: {
            src: collage,
            alt: "Feastful screens: onboarding, savings dashboard, inventory, recipes and an expiry alert",
          },
          plain: true,
        },
      ],
    },
    {
      id: "process",
      title: "Process",
      blocks: [
        {
          type: "points",
          items: [
            {
              term: "Research and analysis",
              detail:
                "I started with user research to understand the food waste problem. Surveys and interviews revealed that most people don’t use apps to manage their food, citing lack of motivation and unclear benefits.",
            },
            {
              term: "Ideation and planning",
              detail:
                "Based on our research, we brainstormed features that could effectively tackle food waste. This included smart meal planning, expiry reminders, and inventory management.",
            },
            {
              term: "Wireframing and prototyping",
              detail:
                "I designed the user interface to be intuitive and engaging. Prototypes were created and tested with users to gather feedback and refine the design.",
            },
            {
              term: "Usability testing",
              detail:
                "I conducted usability tests with a diverse group of users to validate the design and identify areas for improvement. Based on the feedback, I made necessary adjustments to the design.",
            },
          ],
        },
      ],
    },
    {
      id: "design",
      title: "Visual design",
      blocks: [
        { type: "heading", text: "Onboarding" },
        {
          type: "figure",
          picture: { src: onboarding, alt: "Three onboarding screens, starting with Welcome to Feastful" },
          plain: true,
        },
        { type: "heading", text: "Setting up preferences" },
        {
          type: "figure",
          picture: { src: preferences, alt: "Three setup screens: diet, allergies and intolerances, and goal" },
          plain: true,
        },
        {
          type: "annotated",
          title: "Home page",
          picture: { src: home, alt: "Feastful home screen with a tip, weekly savings, inventory and checklist" },
          notes: [
            "Food and environment saving tips",
            "Incentivizing minimal food wastage",
            "Expiring items given special attention",
            "Gist of the shopping checklist",
          ],
        },
        { type: "heading", text: "In motion" },
        {
          type: "videos",
          items: [
            {
              id: "942906884",
              title: "Checklist",
              poster: { src: checklist, alt: "Empty checklist screen: Looks like your checklist is empty" },
            },
            {
              id: "945540181",
              title: "Positive reinforcement",
              poster: { src: reinforcement, alt: "Inventory screen listing pantry items and expiry dates" },
            },
          ],
        },
        {
          type: "annotated",
          title: "Recipes",
          picture: { src: recipe, alt: "Feastful recipe screen with generated recipes, categories and suggestions" },
          notes: [
            "Ingredients that are expiring soon are autofilled, and recipes are generated by AI",
            "Smart filters",
            "Suggested recipes based on ingredients available at home",
          ],
        },
        {
          type: "figure",
          picture: { src: isometric, alt: "An angled grid of Feastful screens on green" },
          plain: true,
        },
      ],
    },
    {
      id: "next",
      title: "The story continues",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "By simplifying user input and incorporating elements of fun, I aim to maintain users’ interest in Feastful. The more engaged they are, the less food they squander! This is just the initiation, and I will continually seek methods to improve Feastful’s effectiveness in combating food wastage.",
          ],
        },
      ],
    },
  ],
};
