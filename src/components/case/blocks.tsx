import Image from "next/image";
import type { Block } from "@/content/types";
import { Prototype, Video } from "./media";
import { RichText } from "./rich-text";
import { Wipe } from "./wipe";
import { Zoom } from "./zoom";

const wide = "(min-width: 82rem) 57rem, (min-width: 60rem) 68vw, 92vw";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

function Phone({ picture }: { picture: Of<"compare">["before"]["picture"] }) {
  return (
    <div className="mx-auto w-full max-w-[17rem] overflow-hidden rounded-[1.5rem] border-4 border-ink">
      <Image src={picture.src} alt={picture.alt} sizes="17rem" className="h-auto w-full" />
    </div>
  );
}

function Render({ block, tint }: { block: Block; tint: string }) {
  switch (block.type) {
    case "text":
      return (
        <div className="grid gap-4">
          {block.paragraphs.map((p) => (
            <p key={p}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </div>
      );

    case "heading":
      return <h3 className="-mb-3 mt-4 text-2xl leading-snug">{block.text}</h3>;

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className="grid gap-3">
          {block.items.map((item, i) => (
            <li key={item} className="grid grid-cols-[2rem_1fr] items-baseline">
              <span aria-hidden className="tag text-accent-strong">
                {block.ordered ? i + 1 : "//"}
              </span>
              <span>
                <RichText>{item}</RichText>
              </span>
            </li>
          ))}
        </List>
      );
    }

    case "points":
      return (
        <dl className="border-t border-line">
          {block.items.map((item) => (
            <div
              key={item.term}
              className="grid gap-x-8 gap-y-1 border-b border-line py-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
            >
              <dt className="font-bold text-ink">{item.term}</dt>
              <dd>
                <RichText>{item.detail}</RichText>
              </dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <table className="block w-full text-left md:table">
          <thead className="max-md:sr-only">
            <tr>
              {block.head.map((h, i) => (
                <th key={i} scope="col" className="label border-b border-line pb-3 pr-6 align-bottom">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {block.rows.map((row) => (
              <tr key={row[0]} className="block border-b border-line py-4 md:table-row md:py-0">
                {row.map((cell, i) => (
                  <td key={i} className="block align-top md:table-cell md:py-4 md:pr-6">
                    {block.head.length > 2 && i > 0 && <span className="label mr-2 md:hidden">{block.head[i]}:</span>}
                    <RichText>{i === 0 && !cell.startsWith("**") ? `**${cell}**` : cell}</RichText>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case "quote":
      return (
        <figure className="border-l-2 border-accent py-1 pl-6">
          <blockquote className="font-display text-[clamp(1.375rem,2.1vw,1.75rem)] leading-snug tracking-tight text-ink">
            {block.text}
          </blockquote>
          {block.source && <figcaption className="tag mt-4 text-muted">{block.source}</figcaption>}
        </figure>
      );

    case "figure":
      return (
        <figure>
          <Zoom picture={block.picture} sizes={wide} frame={block.plain ? "" : `p-[2.5%] ${tint}`} />
          <figcaption className="mt-3 min-h-6 pr-24 text-[0.9375rem] text-muted">{block.caption}</figcaption>
        </figure>
      );

    case "stats":
      return (
        <dl className="grid border-y border-line sm:grid-flow-col sm:auto-cols-fr">
          {block.items.map((s) => (
            <div
              key={s.label}
              className="flex flex-col py-6 not-first:border-t not-first:border-line sm:px-6 sm:first:pl-0 sm:not-first:border-l sm:not-first:border-t-0"
            >
              <dt className="order-2 mt-2">{s.label}</dt>
              <dd className="order-1 font-mono text-[clamp(2.5rem,4.6vw,3.5rem)] leading-none tracking-tighter text-accent">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      );

    case "bars":
      return (
        <figure>
          <figcaption className="font-bold text-ink">{block.question}</figcaption>
          <dl className="mt-5 grid gap-5">
            {block.items.map((b) => (
              <div key={b.label}>
                <div className="flex items-baseline justify-between gap-4">
                  <dt>{b.label}</dt>
                  <dd className="font-mono text-ink">{b.value}%</dd>
                </div>
                <div aria-hidden className="mt-2 h-3">
                  <div className="h-full rounded-r bg-accent" style={{ width: `${b.value}%` }} />
                </div>
              </div>
            ))}
          </dl>
          {block.note && <p className="mt-4 text-[0.9375rem] text-muted">{block.note}</p>}
        </figure>
      );

    case "steps":
      return (
        <figure>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((s, i) => (
              <li
                key={s.title}
                className={`rounded-sm p-5 ${
                  s.by === "Me"
                    ? "border-[1.5px] border-ink"
                    : s.by
                      ? "border-[1.5px] border-dashed border-ink"
                      : "bg-ink text-white"
                }`}
              >
                <p className={`tag flex justify-between gap-3 ${s.by ? "text-accent-strong" : "text-accent"}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.by ? "text-muted" : ""}>{s.by}</span>
                </p>
                <p className={`mt-4 font-display text-2xl tracking-tight ${s.by ? "text-ink" : ""}`}>{s.title}</p>
                <p className="mt-1">{s.detail}</p>
              </li>
            ))}
          </ol>
          {block.note && <figcaption className="mt-4 text-[0.9375rem] text-muted">{block.note}</figcaption>}
        </figure>
      );

    case "columns":
      return (
        <figure>
          <ol className="grid gap-3 lg:grid-cols-3">
            {block.items.map((c) => (
              <li key={c.title} className="rounded-sm border border-line bg-white p-6">
                <p className="font-display text-2xl tracking-tight text-ink">{c.title}</p>
                <p className="mt-1">{c.lead}</p>
                <dl className="mt-5 grid gap-4 border-t border-line pt-5">
                  {c.rows.map((r) => (
                    <div key={r.term}>
                      <dt className="label">{r.term}</dt>
                      <dd className={r.term === "Limit" ? "font-bold text-accent-strong" : ""}>{r.detail}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
          {block.note && <figcaption className="mt-3 text-[0.9375rem] text-muted">{block.note}</figcaption>}
        </figure>
      );

    case "compare":
      return (
        <div className={`grid gap-x-8 gap-y-10 rounded-sm px-6 py-8 sm:grid-cols-2 md:p-10 ${tint}`}>
          {(["before", "after"] as const).map((side) => (
            <figure key={side} className="flex flex-col">
              <figcaption className="mx-auto mb-5 w-full max-w-[17rem] flex-1">
                <span className="tag block text-ink">{side}</span>
                <span className="mt-1 block">{block[side].text}</span>
              </figcaption>
              <Phone picture={block[side].picture} />
            </figure>
          ))}
        </div>
      );

    case "annotated":
      return (
        <div
          className={`grid items-center gap-8 rounded-sm px-6 py-8 sm:grid-cols-[minmax(0,19rem)_1fr] md:gap-12 md:p-10 ${tint}`}
        >
          <div className="mx-auto w-full max-w-[17rem]">
            <Image src={block.picture.src} alt={block.picture.alt} sizes="19rem" className="h-auto w-full" />
          </div>
          <div>
            <h3 className="text-2xl leading-snug">{block.title}</h3>
            <ol className="mt-4 grid gap-3">
              {block.notes.map((n, i) => (
                <li key={n} className="grid grid-cols-[2rem_1fr] items-baseline">
                  <span aria-hidden className="tag text-ink">
                    {i + 1}
                  </span>
                  {n}
                </li>
              ))}
            </ol>
          </div>
        </div>
      );

    case "wipe":
      return (
        <div className={`rounded-sm px-5 py-8 md:p-10 ${tint}`}>
          <Wipe before={block.before} after={block.after} />
        </div>
      );

    case "videos":
      return (
        <div className={`flex flex-wrap justify-center gap-10 rounded-sm px-6 py-10 md:gap-20 ${tint}`}>
          {block.items.map((v) => (
            <Video key={v.id} {...v} />
          ))}
        </div>
      );

    case "prototype":
      return <Prototype {...block} tint={tint} />;

    case "gallery":
      return (
        <ul className="columns-1 gap-8 md:columns-2">
          {block.items.map((g) => (
            <li key={g.title} className="mb-12 break-inside-avoid">
              <Zoom picture={g.picture} sizes="(min-width: 60rem) 30rem, 92vw" frame={`p-[4%] ${tint}`} />
              <p className="mt-4 pr-24 font-display text-2xl tracking-tight text-ink">{g.title}</p>
              <p className="tag text-muted">{g.detail}</p>
            </li>
          ))}
        </ul>
      );

    case "links":
      return (
        <ul className="flex flex-wrap gap-4">
          {block.items.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener" className="tag nav-link">
                {l.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      );
  }
}

export function Blocks({ blocks, tint }: { blocks: Block[]; tint: string }) {
  return blocks.map((block, i) => (
    <div key={i} data-reveal="">
      <Render block={block} tint={tint} />
    </div>
  ));
}
