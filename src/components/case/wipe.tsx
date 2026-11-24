"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { Picture } from "@/content/types";

/** Drag across to compare. Two opposite moves: the window slides, the picture inside stays put. */
export function Wipe({ before, after }: { before: Picture; after: Picture }) {
  const [at, setAt] = useState(45);

  return (
    <div className="mx-auto w-full max-w-[34rem]">
      <div
        className="wipe relative touch-pan-y overflow-hidden rounded-sm bg-white"
        style={{ "--at": `${at}%`, aspectRatio: `${after.src.width} / ${after.src.height}` } as CSSProperties}
      >
        <Image src={after.src} alt={after.alt} sizes="34rem" className="absolute inset-0 size-full" />
        <div className="wipe-window absolute inset-0 overflow-hidden">
          <Image src={before.src} alt={before.alt} sizes="34rem" className="wipe-picture absolute inset-0 size-full" />
        </div>
        <div aria-hidden className="wipe-handle pointer-events-none absolute inset-y-0 left-0 w-full">
          <div className="absolute inset-y-0 left-0 w-1 -translate-x-1/2 bg-accent" />
          <div className="absolute left-0 top-1/2 flex size-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-ink">
            <svg width="26" height="14" viewBox="0 0 30 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 1 2 8l7 7M21 1l7 7-7 7" />
            </svg>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={at}
          onChange={(e) => setAt(Number(e.target.value))}
          aria-label="Compare the wireframe with the final design"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>
      <p aria-hidden className="tag mt-3 flex justify-between text-muted">
        <span>Wireframe</span>
        <span>Final design</span>
      </p>
    </div>
  );
}
