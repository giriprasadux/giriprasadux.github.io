"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Picture } from "@/content/types";

/** A picture that opens at full size, scrollable, so dense screens stay readable on a phone. */
export function Zoom({ picture, sizes, frame = "" }: { picture: Picture; sizes: string; frame?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const { src, alt } = picture;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
        className="group relative block w-full cursor-zoom-in"
      >
        <span className={`block overflow-hidden rounded-sm ${frame}`}>
          <Image src={src} alt={alt} sizes={sizes} className="h-auto w-full" />
        </span>
        <span className="tag absolute right-0 top-full pt-3 text-accent-strong underline decoration-2 underline-offset-4">
          Enlarge
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label={alt}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-[94dvh] max-w-[96vw] overflow-auto rounded-sm bg-page p-0 backdrop:bg-ink/85"
      >
        <div className="sticky left-0 top-0 z-10 flex justify-end p-3">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="tag min-h-11 rounded-full bg-ink px-5 text-white"
          >
            Close
          </button>
        </div>
        {open && (
          <Image
            src={src}
            alt={alt}
            sizes="max(92vw, 60rem)"
            className="-mt-[4.25rem] h-auto max-w-none"
            style={{ width: `min(${src.width}px, max(92vw, 60rem))` }}
          />
        )}
      </dialog>
    </>
  );
}
