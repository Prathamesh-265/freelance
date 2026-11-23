import Reveal from "../components/Reveal";

const goals = [
  "Goal point one",
  "Goal point two",
  "Goal point three",
  "Goal point four",
  "Goal point five",
  "Goal point six",
];

const partners = [
  {
    name: "Partner Name One",
    place: "Country",
    text: "Short description of this partner organization and what they do.",
    cta: "Visit Page",
  },
  {
    name: "Partner Name Two",
    place: "Country",
    text: "Short description of this partner organization and what they do.",
    cta: "Visit Page",
  },
  {
    name: "Partner Name Three",
    place: "Country",
    text: "Short description of this partner organization and what they do.",
    cta: "Visit Page",
  },
];

const SectionTitle = ({ children }) => (
  <Reveal>
    <h2 className="border-b border-slate-300 pb-6 font-serif text-4xl md:text-5xl">{children}</h2>
  </Reveal>
);

const Btn = ({ children, href = "#" }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-3.5 text-lg font-medium tracking-wide text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl"
  >
    {children}
    <svg
      className="transition-transform duration-300 group-hover:translate-x-1.5"
      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
);

export default function Mission() {
  return (
    <main className="overflow-x-clip">
      {/* Header + banner */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <div className="grid aspect-[16/7] w-full place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500 shadow-xl">
            Wide banner image
          </div>
        </Reveal>
      </section>

      {/* Reaching the lost */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <SectionTitle>Section Title One</SectionTitle>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[7fr_5fr]">
          <Reveal variant="left">
            <p className="text-xl leading-relaxed text-slate-600">
              Intro sentence describing the goal of the mission.
            </p>

            <ul className="mt-6 space-y-4">
              {goals.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-3 text-xl text-slate-600 transition-transform duration-300 hover:translate-x-1.5"
                >
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {g}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Paragraph about the people groups or regions you focus on.
            </p>

            <blockquote className="mt-8 border-l-4 border-accent bg-white py-4 pl-6 pr-4">
              <p className="text-lg font-semibold text-accent">Book 0:00</p>
              <p className="mt-1 text-xl italic text-slate-600">Key verse text goes here.</p>
            </blockquote>
          </Reveal>

          {/* Contact card */}
          <Reveal variant="right" delay={150} className="lg:sticky lg:top-32">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <h3 className="font-serif text-3xl">Contact Us</h3>
              <span className="mt-4 block h-0.5 w-12 bg-accent" />
              <p className="mt-6 text-xl leading-relaxed text-slate-600">
                Short line inviting visitors to get in touch.
              </p>
              <div className="mt-8">
                <Btn>Find Out More</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle>Our Mission Partners</SectionTitle>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="aspect-[2/1] overflow-hidden bg-slate-200">
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500 transition-transform duration-700 group-hover:scale-105">
                    Logo / photo
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 text-center">
                  <h3 className="font-serif text-2xl leading-snug">
                    {p.name}
                    <span className="block text-lg font-sans font-medium text-accent">{p.place}</span>
                  </h3>
                  <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-600">{p.text}</p>
                  <div className="mt-6">
                    <Btn>{p.cta}</Btn>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}