"use client";

import { basePath } from "@/base-path";

/** Points at the files made by scripts/finish-export.mjs. Production only. */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const path = src.startsWith(`${basePath}/`) ? src.slice(basePath.length) : src;
  return `${basePath}/_img${path}-${width}.webp`;
}
