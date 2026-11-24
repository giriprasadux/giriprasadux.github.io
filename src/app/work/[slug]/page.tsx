import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/case/blocks";
import { Contents } from "@/components/case/contents";
import { Motion } from "@/components/case/media";
import { RevealRoot } from "@/components/reveal-root";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cases, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type Props = PageProps<"/work/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: `${project.title} | Giri Prasad`, description: project.summary } : {};
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const at = projects.findIndex((p) => p.slug === slug);
  const project = projects[at];
  const study = cases[slug];
  if (!project || !study) notFound();

  const next = projects[(at + 1) % projects.length];
  // Long details get their own full-width rows, so they don’t leave a gap beside the introduction.
  const longMeta = study.meta.length > 4;
  const contents = study.sections.map(({ id, title }) => ({ id, title }));

  return (
    <>
      <a
        href="#main"
        className="tag fixed left-4 top-4 z-30 -translate-y-24 rounded-full bg-ink px-5 py-3 text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <RevealRoot key={slug}>
          <article>
            <header className="resume-glow">
              <div className="shell pt-6 md:pt-10">
                <Link href="/#work" className="tag nav-link">
                  All work
                </Link>
                <p className="tag mt-8 text-accent-strong md:mt-12">
                  {project.index} <span aria-hidden>{"//"}</span> {project.context}
                </p>
                <h1 className="mt-5 max-w-[15em] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.06]">{project.title}</h1>

                <div className={`pb-12 pt-8 md:pb-16 md:pt-10 ${longMeta ? "grid gap-10" : "grid-editorial"}`}>
                  <div>
                    <p className="text-[clamp(1.1875rem,1.7vw,1.4375rem)] leading-relaxed">{study.lead}</p>
                    {study.links?.map((l) => (
                      <div key={l.href} className="mt-7">
                        <a
                          href={l.href}
                          {...(l.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener" })}
                          className="btn inline-block rounded-full bg-accent px-7 py-3 text-[1.1875rem] font-bold text-white"
                        >
                          {l.label}
                          {!l.href.startsWith("#") && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                        {l.note && <p className="mt-3 text-[0.9375rem] text-muted">{l.note}</p>}
                      </div>
                    ))}
                  </div>
                  <dl
                    className={
                      longMeta
                        ? "grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3"
                        : "border-t border-line"
                    }
                  >
                    {study.meta.map((m) => (
                      <div key={m.term} className="border-b border-line py-3">
                        <dt className="label">{m.term}</dt>
                        <dd className="mt-0.5">{m.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="shell">
                <figure>
                  <div className={`overflow-hidden rounded-sm p-[2.5%] ${project.tint}`}>
                    {study.hero.kind === "motion" ? (
                      <Motion still={study.hero.still} motion={study.hero.motion} />
                    ) : (
                      <Image
                        src={study.hero.picture.src}
                        alt={study.hero.picture.alt}
                        preload
                        sizes="(min-width: 82rem) 72rem, 94vw"
                        className="h-auto w-full"
                      />
                    )}
                  </div>
                  {study.hero.kind === "image" && study.hero.caption && (
                    <figcaption className="mt-3 text-[0.9375rem] text-muted">{study.hero.caption}</figcaption>
                  )}
                </figure>
              </div>
            </header>

            <div
              className={
                contents.length > 1
                  ? "shell grid grid-cols-[minmax(0,1fr)] gap-x-[clamp(2rem,5vw,5rem)] gap-y-10 pt-14 md:pt-24 min-[60rem]:grid-cols-[12.5rem_minmax(0,1fr)]"
                  : "shell pt-14 md:pt-24"
              }
            >
              {contents.length > 1 && <Contents items={contents} />}
              <div className="grid grid-cols-[minmax(0,1fr)] gap-20 md:gap-28">
                {study.sections.map((s) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                    <div data-reveal="">
                      <h2 id={`${s.id}-title`} className="section-title">
                        {s.title}
                      </h2>
                      {s.lede && <p className="mt-3 text-xl text-muted">{s.lede}</p>}
                    </div>
                    <div className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-8">
                      <Blocks blocks={s.blocks} tint={project.tint} />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </article>

          <nav aria-label="Next project" className="shell pt-28 md:pt-40">
            <div className="card">
              <div className="card-body">
                <span aria-hidden className="relative block h-px bg-line">
                  <span className="card-rule absolute inset-x-0 top-0 block h-0.5 bg-accent" />
                </span>
                <p className="tag pt-4 text-accent-strong">
                  Next <span aria-hidden>{"//"}</span>
                </p>
                <p className="mt-4 font-display text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.08] tracking-tight text-ink">
                  <Link href={`/work/${next.slug}`} className="card-link">
                    {next.title}
                  </Link>
                </p>
                <p className="mt-3">{next.summary}</p>
                <span aria-hidden className="tag mt-6 inline-flex items-center gap-2.5 text-ink">
                  View project
                  <svg
                    className="card-arrow"
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M0 5h16M12 1l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </div>
          </nav>
        </RevealRoot>
      </main>
      <SiteFooter />
    </>
  );
}
