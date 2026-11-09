const services = [
  {
    id: "curation",
    title: "Curation",
    description:
      "A selective reading of digital works — quality, context, and longevity before volume.",
  },
  {
    id: "tokenization",
    title: "Tokenisation",
    description:
      "Careful on-chain representation with clear provenance, rights, and durable metadata.",
  },
  {
    id: "awards",
    title: "Recognition",
    description:
      "Quiet recognition for artists and works that earn a lasting place in the programme.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-[var(--line)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
            Programme
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
            A stable framework for digital art — less spectacle, more stewardship.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {services.map((service) => (
            <li
              key={service.id}
              id={service.id}
              className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] md:gap-10"
            >
              <h3 className="font-display text-2xl text-[var(--ink)]">{service.title}</h3>
              <p className="max-w-prose text-base leading-relaxed text-[var(--ink-muted)]">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
