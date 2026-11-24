"use client";

import { useRef, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function RevealRoot({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);
  return <div ref={ref}>{children}</div>;
}
