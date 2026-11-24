import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/base-path";
import { nav, site } from "@/content/site";

const contact = [
  { term: "Phone", label: site.phone, href: site.phoneHref },
  { term: "WhatsApp", label: "Message me", href: site.whatsapp, external: true },
  { term: "LinkedIn", label: "giriprasadux", href: site.linkedin, external: true },
  { term: "Resume", label: "View PDF", href: site.resume, external: true },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="on-ink mt-28 bg-ink text-white md:mt-40">
      <div className="shell grid-editorial pb-16 pt-20 md:pb-24 md:pt-28">
        <div>
          <h2 className="tag tag-slash text-base text-accent">
            <span aria-hidden>{"// "}</span>Get in touch
          </h2>
          <p className="mt-6 max-w-[18em] text-balance font-display text-[clamp(2.125rem,4.1vw,3.5rem)] leading-[1.08] tracking-tight">
            Have a tangled workflow that needs a clear product?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-line mt-8 inline-flex min-h-11 items-center text-[clamp(1.125rem,2.2vw,1.625rem)]"
          >
            {site.email}
          </a>
        </div>

        <dl className="grid content-start border-t border-white/20 sm:grid-cols-2 sm:gap-x-8 min-[60rem]:grid-cols-1">
          {contact.map((c) => (
            <div key={c.term} className="flex items-center justify-between gap-6 border-b border-white/20 py-1">
              <dt className="text-sm font-semibold uppercase tracking-wide text-white/70">{c.term}</dt>
              <dd>
                <a
                  href={c.href}
                  {...(c.external && { target: "_blank", rel: "noopener" })}
                  className="tag nav-link text-base"
                >
                  {c.label}
                  {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="shell">
        <div className="tag flex flex-wrap items-center justify-between gap-x-6 border-t border-white/20 py-4 text-white/70">
          <p className="flex items-center gap-4 py-2">
            <Image
              src={`${basePath}/images/general/logo-gp-white.png`}
              alt=""
              width={200}
              height={146}
              unoptimized
              className="h-9 w-auto"
            />
            © 2026 {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
