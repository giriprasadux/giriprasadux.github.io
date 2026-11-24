"use client";

import { useEffect, type RefObject } from "react";

/** Reveals each [data-reveal] element inside `root` once, using one shared observer. */
export function useReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    (window as Window & { __revealReady?: boolean }).__revealReady = true;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const target of el.querySelectorAll('[data-reveal=""]')) observer.observe(target);
    return () => observer.disconnect();
  }, [root]);
}
