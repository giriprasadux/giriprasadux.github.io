import { basePath } from "@/base-path";

export const site = {
  name: "Giri Prasad",
  email: "giriprasadux@gmail.com",
  phone: "+91 96009 59706",
  phoneHref: "tel:+919600959706",
  whatsapp: "https://wa.me/919600959706",
  linkedin: "https://www.linkedin.com/in/giriprasadux/",
  resume: `${basePath}/Giri-Prasad-Resume.pdf`,
  availability: "Open to senior product design roles",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
];

export const metrics = [
  { value: "30%", unit: "faster", detail: "Task completion on legacy modernization workflows", source: "Deloitte" },
  { value: "40%", unit: "higher", detail: "Profile completion in Profile Center", source: "Responsive" },
  { value: "30%", unit: "fewer", detail: "Support tickets about profile management", source: "Responsive" },
];

/** Highlights are text segments; odd segments are emphasized. */
export const experience = [
  {
    company: "Deloitte",
    role: "Senior Product Designer",
    dates: "Nov 2024 – Jun 2026",
    place: "Bengaluru, Karnataka",
    highlights: [
      [
        "Led modernization of legacy mainframe systems into app-based workflows, ",
        "reducing task completion time by 30%",
        ".",
      ],
      ["Planned and ran user interviews with architects, miners and subject-matter experts."],
      ["Synthesized findings into insights that shaped the design direction."],
    ],
  },
  {
    company: "Responsive (formerly RFPIO)",
    role: "Senior UX Designer",
    dates: "Mar 2023 – Nov 2024",
    place: "Coimbatore, Tamil Nadu",
    highlights: [
      ["Designed and launched the ", "Profile Center", ", a strong competitor to existing Trust Centers."],
      ["Improved ", "profile completion rates by 40%", " with better customization and user experience."],
      ["Cut support tickets about ", "profile management by 30%", "."],
    ],
  },
  {
    company: "Responsive (formerly RFPIO)",
    role: "UX Designer",
    dates: "May 2020 – Mar 2023",
    place: "Coimbatore, Tamil Nadu",
    highlights: [
      ["Created and maintained a ", "Design System", ", keeping visuals and interactions consistent across modules."],
      ["Worked with product managers and engineers in Agile sprints to ship on schedule."],
    ],
  },
  {
    company: "Juego Studio Pvt. Ltd",
    role: "UI/UX Designer",
    dates: "Jun 2019 – Apr 2020",
    place: "Bengaluru, Karnataka",
    highlights: [["Designed user interfaces and HUD elements for mobile and desktop games."]],
  },
];

export const awards = [
  { name: "Game Changer Award", detail: "Responsive, 2023" },
  { name: "Extra Mile Award", detail: "Responsive, 2022" },
];

export const capabilities = [
  {
    title: "Core Skills",
    items: [
      "User Research",
      "Design Thinking",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Usability Testing",
      "Storytelling",
      "Accessibility (WCAG 2.1)",
      "Wireframing",
      "Service Design",
      "Conversion Optimization",
    ],
  },
  { title: "Tools & Software", items: ["Figma", "Adobe CC", "Miro", "FigJam"] },
  {
    title: "AI & Prototyping",
    items: [
      "Cursor",
      "Replit",
      "Claude",
      "AI-Assisted Prototyping",
      "Prompt Design",
      "AI-Powered Workflow Design",
      "Vibe Coding",
    ],
  },
  { title: "Collaboration", items: ["Agile/Scrum", "Jira", "Confluence"] },
];
