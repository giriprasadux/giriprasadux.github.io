"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { basePath } from "@/base-path";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header ref={header} className="sticky top-0 z-20 border-b border-line bg-page">
      <div className="shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex min-h-11 min-w-11 items-center">
          <Image
            src={`${basePath}/images/general/logo-gp.png`}
            alt={`${site.name}, home`}
            width={200}
            height={146}
            loading="eager"
            unoptimized
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 md:flex lg:gap-7">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="tag nav-link">
              {item.label}
            </Link>
          ))}
          <a href={site.resume} target="_blank" rel="noopener" className="tag nav-link">
            Resume PDF<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link
            href="/#contact"
            className="btn tag ml-1 flex min-h-11 items-center rounded-full bg-ink px-5 text-white"
          >
            Contact
          </Link>
        </nav>

        <button
          ref={toggle}
          type="button"
          className="tag -mr-3 min-h-11 px-3 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-page md:hidden"
      >
        <ul className="shell pb-6 pt-2">
          {[...nav, { label: "Contact", href: "/#contact" }].map((item) => (
            <li key={item.href} className="border-b border-line">
              <Link href={item.href} onClick={() => setOpen(false)} className="tag block py-4">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.resume} target="_blank" rel="noopener" className="tag block py-4 text-accent-strong">
              Resume PDF<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
