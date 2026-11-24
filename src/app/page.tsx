import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { RevealRoot } from "@/components/reveal-root";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="tag fixed left-4 top-4 z-30 -translate-y-24 rounded-full bg-ink px-5 py-3 text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <RevealRoot>
          <Hero />
          <SelectedWork />
          <Experience />
        </RevealRoot>
      </main>
      <SiteFooter />
    </>
  );
}
