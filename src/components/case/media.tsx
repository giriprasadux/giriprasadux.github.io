"use client";

import Image from "next/image";
import { useSyncExternalStore, useState } from "react";
import { basePath } from "@/base-path";
import type { Picture } from "@/content/types";

const query = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", cb);
  return () => media.removeEventListener("change", cb);
};

/** A looping picture that can be paused, and starts paused for people who prefer less motion. */
export function Motion({ still, motion }: { still: Picture; motion: string }) {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
  const [choice, setChoice] = useState<boolean | null>(null);
  const playing = choice ?? !reduced;

  return (
    <div className="relative">
      <Image src={still.src} alt={still.alt} preload sizes="(min-width: 82rem) 72rem, 94vw" className="h-auto w-full" />
      {playing && (
        <Image src={`${basePath}${motion}`} alt="" fill unoptimized loading="eager" className="object-cover" />
      )}
      <button
        type="button"
        onClick={() => setChoice(!playing)}
        className="tag absolute bottom-3 right-3 min-h-11 rounded-full bg-white px-5 text-ink"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}

/** Shows a poster and loads the Vimeo player only when asked. */
export function Video({ id, title, poster }: { id: string; title: string; poster: Picture }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="w-full max-w-[17rem]">
      <div
        className="relative overflow-hidden rounded-[1.5rem] border-4 border-ink bg-ink"
        style={{ aspectRatio: `${poster.src.width} / ${poster.src.height}` }}
      >
        {playing ? (
          <iframe
            src={`https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`}
            title={title}
            allow="autoplay; fullscreen"
            className="absolute inset-0 size-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0">
            <Image src={poster.src} alt={poster.alt} sizes="17rem" className="size-full object-cover" />
            <span className="tag absolute left-1/2 top-1/2 flex min-h-12 -translate-x-1/2 -translate-y-1/2 items-center whitespace-nowrap rounded-full bg-ink px-6 text-white">
              Play video
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-[0.9375rem] text-muted">{title}</figcaption>
    </figure>
  );
}

/** Loads the Figma player only when asked, so the page stays light and Figma sets nothing until then. */
export function Prototype({
  title,
  poster,
  embed,
  flows,
  tint,
}: {
  title: string;
  poster: Picture;
  embed: string;
  flows: { label: string; href: string }[];
  tint: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className={`rounded-sm p-[2.5%] ${tint}`}>
        <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-ink sm:aspect-16/10">
          {loaded ? (
            <iframe src={embed} title={title} allowFullScreen className="absolute inset-0 size-full" />
          ) : (
            <button type="button" onClick={() => setLoaded(true)} className="absolute inset-0 size-full">
              <Image
                src={poster.src}
                alt={poster.alt}
                sizes="(min-width: 82rem) 57rem, (min-width: 60rem) 68vw, 92vw"
                className="size-full object-cover object-left-top opacity-45"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-accent px-7 py-3 text-[1.1875rem] font-bold text-white">
                Load the prototype
              </span>
            </button>
          )}
        </div>
      </div>
      <p className="mt-4 text-[0.9375rem] text-muted">
        Runs in Figma. Best on a larger screen. Or open a flow full screen:
      </p>
      <ul className="flex flex-wrap gap-x-6">
        {flows.map((f) => (
          <li key={f.href}>
            <a
              href={f.href}
              target="_blank"
              rel="noopener"
              className="tag flex min-h-11 items-center text-accent-strong underline decoration-2 underline-offset-4"
            >
              {f.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
