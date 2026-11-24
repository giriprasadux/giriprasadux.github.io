"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

/** Contents list that marks the section being read. */
export function Contents({ items }: { items: Item[] }) {
  const [current, setCurrent] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setCurrent(entry.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol>
      {items.map((item) => {
        const on = item.id === current;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={on ? "true" : undefined}
              className={`contents-link flex min-h-11 items-center py-1.5 text-[0.9375rem] leading-snug ${on ? "text-ink" : "text-muted"}`}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav aria-label="On this page">
      <details className="border-y border-line min-[60rem]:hidden">
        <summary className="label flex min-h-12 cursor-pointer items-center">On this page</summary>
        <div className="pb-4 pl-4">{list}</div>
      </details>
      <div className="sticky top-28 hidden max-h-[calc(100dvh-9rem)] overflow-y-auto min-[60rem]:block">
        <p className="label mb-3">On this page</p>
        <div className="border-l border-line pl-4">{list}</div>
      </div>
    </nav>
  );
}
