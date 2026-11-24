import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { projects, type IndexedProject } from "@/content/projects";

function CardTop({ project }: { project: IndexedProject }) {
  return (
    <div>
      <span aria-hidden className="relative block h-px bg-line">
        <span className="card-rule absolute inset-x-0 top-0 block h-0.5 bg-accent" />
      </span>
      <p className="tag flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-4">
        <span className="text-accent-strong">
          {project.index} <span aria-hidden>{"//"}</span>
        </span>
        <span className="text-muted">
          {project.role}
          <span aria-hidden className="max-sm:hidden">
            {" · "}
          </span>
          <br className="sm:hidden" />
          <span className="sr-only">, </span>
          {project.context}
        </span>
      </p>
    </div>
  );
}

/** The link stretches over the whole card, so the card is one target. */
function CardLink({ project }: { project: IndexedProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="card-link">
      {project.title}
    </Link>
  );
}

function Outcome({ project }: { project: IndexedProject }) {
  if (!project.outcome) return null;
  return (
    <p className="flex flex-wrap items-baseline gap-x-3">
      <span className="font-mono text-[1.75rem] leading-tight tracking-tighter text-accent">
        {project.outcome.value}
      </span>
      <span>{project.outcome.label}</span>
    </p>
  );
}

function ViewCue() {
  return (
    <span aria-hidden className="tag inline-flex items-center gap-2.5 text-ink">
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
  );
}

/** Same order as the other cards, at full width: image, title, summary, link. */
function LeadCard({ project }: { project: IndexedProject }) {
  const { image } = project;

  return (
    <article className="card">
      <div className="card-body">
        <CardTop project={project} />
        <div className={`card-frame mt-5 overflow-hidden rounded-sm ${project.tint}`}>
          {image.bleed ? (
            <div className="aspect-4/3 overflow-hidden pl-[6%] pt-[6%] sm:aspect-16/9 md:aspect-2/1 md:px-[8%] md:pt-[4.5%]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 82rem) 64rem, (min-width: 48rem) 80vw, 130vw"
                loading="lazy"
                className="h-auto w-[140%] max-w-none rounded-tl-lg border border-b-0 border-line bg-white sm:w-[115%] md:w-full md:rounded-t-lg"
              />
            </div>
          ) : (
            <div className="p-[3%]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 82rem) 72rem, 92vw"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          )}
        </div>

        <div className="grid-editorial mt-8 gap-y-7 md:mt-10">
          <div>
            <h3 className="max-w-[16em] text-[clamp(2rem,3.7vw,3.125rem)] leading-[1.08]">
              <CardLink project={project} />
            </h3>
            <p className="mt-5 max-w-[36rem] text-lg leading-relaxed">{project.summary}</p>
            {project.outcome && (
              <div className="mt-5">
                <Outcome project={project} />
              </div>
            )}
          </div>
          {project.facts && (
            <dl className="border-t border-line min-[60rem]:row-span-2">
              {project.facts.map((fact) => (
                <div
                  key={fact.term}
                  className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 border-b border-line py-3.5"
                >
                  <dt className="label">{fact.term}</dt>
                  <dd>{fact.detail}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="self-end">
            <ViewCue />
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: IndexedProject }) {
  return (
    <article className="card h-full">
      <div className="card-body flex h-full flex-col">
        <CardTop project={project} />
        <div className={`card-frame mt-5 overflow-hidden rounded-sm p-[4%] ${project.tint}`}>
          <div className="relative aspect-16/9 overflow-hidden">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(min-width: 82rem) 35rem, (min-width: 48rem) 45vw, 92vw"
              loading="lazy"
              className="object-cover object-top"
            />
          </div>
        </div>
        <h3 className="mt-6 text-[1.75rem] leading-[1.15]">
          <CardLink project={project} />
        </h3>
        <p className="mt-3 max-w-[34rem]">{project.summary}</p>
        <div className="mt-4">
          <Outcome project={project} />
        </div>
        <p className="mt-auto pt-6">
          <ViewCue />
        </p>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const [lead, ...rest] = projects;

  return (
    <section id="work" className="shell pt-24 md:pt-32">
      <h2 className="section-title" data-reveal="">
        Selected work
      </h2>
      <div className="mt-8 md:mt-10" data-reveal="">
        <LeadCard project={lead} />
      </div>
      <ul className="mt-20 grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-16 md:mt-28 md:grid-cols-2 md:gap-y-20">
        {rest.map((p, i) => (
          <li key={p.slug} data-reveal="" style={{ "--i": i % 2 } as CSSProperties}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}
