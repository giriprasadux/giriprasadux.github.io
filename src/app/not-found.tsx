import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Page not found | Giri Prasad" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="resume-glow">
        <div className="shell min-h-[55vh] py-24">
          <p className="tag text-accent-strong">
            404 <span aria-hidden>{"//"}</span>
          </p>
          <h1 className="mt-5 text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.06]">This page doesn’t exist.</h1>
          <p className="mt-6 text-lg">The link may be old, or the address may have a typo.</p>
          <Link
            href="/"
            className="btn mt-9 inline-block rounded-full bg-accent px-7 py-3 text-[1.1875rem] font-bold text-white"
          >
            Go to the homepage
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
