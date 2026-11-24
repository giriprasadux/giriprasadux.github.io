import { awards, capabilities, experience } from "@/content/site";

export function Experience() {
  return (
    <section className="shell pt-24 md:pt-32">
      <div className="grid-editorial">
        <div id="experience">
          <h2 className="section-title" data-reveal="">
            Experience
          </h2>
          <ol className="mt-10">
            {experience.map((job) => {
              const [start, end] = job.dates.split(" – ");
              return (
                <li key={job.company + job.dates} className="timeline-item" data-reveal="">
                  <span aria-hidden className="timeline-rail" />
                  <div className="timeline-body">
                    <h3 className="text-2xl leading-snug text-accent-strong">
                      {job.company} <span aria-hidden>|</span> {job.role}
                    </h3>
                    <p className="tag mt-1.5 text-muted">{job.place}</p>
                    <ul className="mt-4 grid max-w-[42rem] gap-2.5">
                      {job.highlights.map((segments) => (
                        <li
                          key={segments[0]}
                          className="relative pl-5 before:absolute before:left-0 before:top-[0.75em] before:h-0.5 before:w-2.5 before:bg-accent"
                        >
                          {segments.map((s, i) =>
                            i % 2 ? (
                              <strong key={s} className="font-bold text-ink">
                                {s}
                              </strong>
                            ) : (
                              s
                            ),
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="timeline-date tag text-ink">
                    {start} – <br className="max-md:hidden" />
                    {end}
                  </p>
                </li>
              );
            })}
          </ol>
          <div className="mt-12 border-t border-line pt-8" data-reveal="">
            <h3 className="label font-sans">Awards &amp; Recognition</h3>
            <ul className="mt-5 grid gap-6 sm:grid-cols-2">
              {awards.map((a) => (
                <li key={a.name}>
                  <p className="tag text-base text-ink">{a.name}</p>
                  <p className="text-muted">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside id="capabilities" aria-labelledby="capabilities-title">
          <h2 id="capabilities-title" className="section-title" data-reveal="">
            Capabilities
          </h2>
          <div className="mt-8 grid gap-x-8 sm:grid-cols-2 min-[60rem]:grid-cols-1">
            {capabilities.map((group) => (
              <div key={group.title} className="border-t border-line py-8" data-reveal="">
                <h3 className="label font-sans">{group.title}</h3>
                <ul className="mt-4 grid gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="tag text-[0.9375rem] text-accent-strong">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
