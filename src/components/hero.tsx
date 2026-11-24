import Image from "next/image";
import { metrics, site } from "@/content/site";

const meta = [
  { term: "Domains", detail: "B2B SaaS, enterprise modernization, gaming" },
  { term: "Previously", detail: "Deloitte, Responsive, Juego Studio" },
];

/** Drawn arrow: Kode Mono has none, and the fallback glyph is over two characters wide. */
function ZeroToOne() {
  return (
    <span className="whitespace-nowrap font-mono text-[0.9em] tracking-tighter text-accent">
      0
      <svg
        aria-hidden
        viewBox="0 0 24 20"
        className="mx-[0.08em] inline-block h-[0.5em] w-[0.6em] align-[0.1em]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.75"
      >
        <path d="M0 10h21M13 2l8 8-8 8" />
      </svg>
      <span className="sr-only"> to </span>1
    </span>
  );
}

export function Hero() {
  return (
    <section className="resume-glow">
      <div className="shell grid-editorial pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="self-center">
          <p className="tag tag-slash text-base text-accent-strong">
            <span aria-hidden>{"// "}</span>Senior Product Designer
          </p>
          <h1 className="mt-6 text-[clamp(2.375rem,4.8vw,4.25rem)] leading-[1.08]">
            Eight years turning complex legacy and B2B workflows into intuitive <ZeroToOne /> products and design
            systems.
          </h1>
          <p className="mt-7 max-w-[36rem] text-lg leading-relaxed">
            I ground design in research with users and domain experts, design{" "}
            <span className="whitespace-nowrap">AI-powered</span> experiences, and use AI tools to prototype and
            validate faster.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#work" className="btn rounded-full bg-accent px-7 py-3 text-[1.1875rem] font-bold text-white">
              View Selected Work
            </a>
            <a href="#contact" className="btn btn-outline rounded-full px-7 py-3 text-[1.1875rem] font-bold text-ink">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:items-end min-[60rem]:grid-cols-1">
          <div className="aspect-4/5 overflow-hidden rounded-sm bg-tint-peach min-[60rem]:aspect-square">
            <Image
              src="/images/general/headshot-giri-prasad.jpg"
              alt="Giri Prasad outdoors in a dark green shirt, in front of an orange wall and foliage"
              width={3024}
              height={4032}
              preload
              sizes="(min-width: 60rem) 26rem, (min-width: 40rem) 45vw, 92vw"
              className="size-full object-cover object-top"
            />
          </div>
          <dl className="border-t border-line">
            <div className="border-b border-line py-3">
              <dt className="label">Status</dt>
              <dd className="tag mt-0.5 flex items-center gap-2.5 text-accent-strong">
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-available" />
                {site.availability}
              </dd>
            </div>
            {meta.map((row) => (
              <div key={row.term} className="border-b border-line py-3">
                <dt className="label">{row.term}</dt>
                <dd className="tag mt-0.5 text-accent-strong">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="shell">
        <h2 className="sr-only">Impact</h2>
        <dl className="grid border-y border-line md:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.detail}
              className="flex flex-col border-line py-7 not-first:border-t md:px-8 md:first:pl-0 md:not-first:border-l md:not-first:border-t-0"
            >
              <dt className="order-2 mt-2 max-w-[18rem]">{m.detail}</dt>
              <dd className="order-1 flex items-baseline gap-3">
                <span className="font-mono text-5xl leading-none tracking-tighter text-accent lg:text-6xl">
                  {m.value}
                </span>
                <span className="tag text-base text-ink">{m.unit}</span>
              </dd>
              <dd className="tag order-3 mt-auto pt-3 text-muted">{m.source}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
