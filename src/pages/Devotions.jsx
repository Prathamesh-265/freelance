import Reveal from "../components/Reveal";

// Add, remove or reorder entries. Each section: a label + one or more paragraphs.
const devotions = [
  {
    title: "Devotion Title One",
    image: "", // e.g. "/devotions/one.jpg"
    sections: [
      { label: "Scripture", paragraphs: ["Book 0:00 (VERSION)", "Verse text goes here."] },
      { label: "Reflection", paragraphs: ["Reflection paragraph one.", "Reflection paragraph two."] },
      { label: "Application", paragraphs: ["Application paragraph."] },
      { label: "Prayer", paragraphs: ["Prayer text goes here."] },
    ],
  },
  {
    title: "Devotion Title Two",
    image: "",
    sections: [
      { label: "Read", paragraphs: ["Verse text goes here.", "Book 0:00 (VERSION)"] },
      { label: "Reflection", paragraphs: ["Reflection paragraph one.", "Reflection paragraph two."] },
      { label: "Application", paragraphs: ["Application paragraph."] },
    ],
  },
  {
    title: "Devotion Title Three",
    image: "",
    sections: [
      { label: "Scripture", paragraphs: ["Book 0:00-00", "Verse text goes here."] },
      { label: "Reflection", paragraphs: ["Reflection paragraph one."] },
      { label: "Response", paragraphs: ["Response paragraph."] },
      { label: "Prayer", paragraphs: ["Prayer text goes here."] },
    ],
  },
];

const Social = ({ label, href = "#", children }) => (
  <a
    href={href}
    aria-label={label}
    className="grid h-12 w-12 place-items-center rounded-full border border-white/50 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-accent-dark"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </a>
);

export default function Devotions() {
  return (
    <main className="overflow-x-clip">
      {/* Header */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      {/* Devotions */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-24 px-6">
          {devotions.map((d) => (
            <article key={d.title}>
              <Reveal>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Devotions from Pastor Name
                </p>
                <h2 className="border-b border-slate-300 pb-6 font-serif text-3xl md:text-4xl">
                  {d.title}
                </h2>
              </Reveal>

              <Reveal variant="scale" delay={100} className="mt-10">
                <div className="group overflow-hidden rounded-2xl shadow-xl">
                  {d.image ? (
                    <img
                      src={d.image}
                      alt={d.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid aspect-[3/2] w-full place-items-center bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500 transition-transform duration-700 group-hover:scale-105">
                      Devotion image (3:2)
                    </div>
                  )}
                </div>
              </Reveal>

              <div className="mt-12 space-y-10">
                {d.sections.map((s) => (
                  <Reveal key={s.label}>
                    <h3 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      <span className="h-px w-8 bg-accent" />
                      {s.label}
                    </h3>
                    <div className="space-y-5 text-xl leading-relaxed text-slate-600">
                      {s.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Archive CTA + connect */}
      <section className="bg-accent py-20 text-center">
        <Reveal className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
            For More Devotions, Click the Link Below
          </h2>
          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border-2 border-white px-10 py-3.5 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-accent-dark"
          >
            Devotion Archive
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1.5"
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-20 max-w-3xl px-6">
          <h3 className="border-b border-white/40 pb-5 text-left font-serif text-3xl text-white">
            Connect With Us
          </h3>
          <div className="mt-8 flex justify-center gap-4">
            <Social label="Facebook">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
            </Social>
            <Social label="YouTube">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </Social>
          </div>
        </Reveal>
      </section>
    </main>
  );
}