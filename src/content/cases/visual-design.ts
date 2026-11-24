import burger from "@/assets/visual-design/burger-420-landing-page.png";
import course from "@/assets/visual-design/course-learning-app.png";
import borrowing from "@/assets/visual-design/crypto-borrowing-app.png";
import wallet from "@/assets/visual-design/crypto-wallet-dark-app.png";
import funds from "@/assets/visual-design/mutual-funds-dashboard.png";
import seo from "@/assets/visual-design/seo-platform-landing-page.png";
import tasks from "@/assets/visual-design/task-star-kanban-dashboard.png";
import winery from "@/assets/visual-design/winery-gallery-page.png";
import type { CaseStudy } from "../types";

export const visualDesign: CaseStudy = {
  lead: "Visual design work for mobile apps, web apps, and websites. Explore these examples to see how I blend functionality with aesthetics across different digital platforms.",
  meta: [
    { term: "Type", detail: "Collection of visual design work" },
    { term: "Platforms", detail: "Mobile apps, web apps, websites" },
  ],
  hero: {
    kind: "image",
    picture: { src: seo, alt: "SEO platform landing page in desktop and mobile layouts on a yellow background" },
  },
  sections: [
    {
      id: "gallery",
      title: "Selected pieces",
      blocks: [
        {
          type: "gallery",
          items: [
            {
              picture: { src: borrowing, alt: "Borrowing Account screen with a prompt to borrow cash instantly" },
              title: "Crypto borrowing",
              detail: "Mobile app",
            },
            {
              picture: { src: wallet, alt: "Dark wallet screen with a balance and a list of currencies" },
              title: "Crypto wallet",
              detail: "Mobile app",
            },
            {
              picture: { src: tasks, alt: "Dark kanban board with to do, in progress and completed columns" },
              title: "Task Star",
              detail: "Web app",
            },
            {
              picture: { src: burger, alt: "Burger 420 landing page on dark teal" },
              title: "Burger 420",
              detail: "Website",
            },
            {
              picture: { src: winery, alt: "Winery site gallery section and footer" },
              title: "Winery gallery",
              detail: "Website",
            },
            {
              picture: { src: course, alt: "Three course app screens: onboarding, home and schedule" },
              title: "Course learning",
              detail: "Mobile app",
            },
            {
              picture: { src: funds, alt: "Mutual funds table in an investment dashboard" },
              title: "Mutual funds",
              detail: "Web app",
            },
          ],
        },
      ],
    },
  ],
};
