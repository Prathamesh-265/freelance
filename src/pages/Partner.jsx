import Reveal from "../components/Reveal";

const sections = [
  {
    key: "Pray",
    verse: { ref: "Book 0:00", text: "Verse text goes here." },
    paragraphs: ["Paragraph about prayer partnership."],
  },
  {
    key: "Give",
    verse: { ref: "Book 0:00", text: "Verse text goes here." },
    paragraphs: ["Paragraph about giving.", "Second paragraph about giving."],
  },
  {
    key: "Go",
    verse: { ref: "Book 0:00-00", text: "Verse text goes here." },
    paragraphs: ["Paragraph about going.", "Closing paragraph inviting partnership."],
  },
];

const Btn = ({ children, href = "#" }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-lg font-medium tracking-wide text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:shadow-xl"
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

export default function Partner() {
  return (
    <main className="overflow-x-clip">
      {/* Header */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      {/* Donate block */}
      <section className="bg-ink py-24 text-center">
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Partner with us
          </p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">Give Monthly or One Time</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/70 md:text-2xl">
            Short invitation to partner through giving.
          </p>
          <div className="mt-10">
            <Btn>Donate Now</Btn>
          </div>

          <div className="mx-auto mt-16 max-w-md border-t border-white/15 pt-10">
            <p className="text-lg uppercase tracking-[0.15em] text-white/60">Or mail contributions to</p>
            <p className="mt-3 text-xl text-white">Street Address, City, State ZIP</p>
          </div>
        </Reveal>
      </section>

      {/* Pray / Give / Go */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-start gap-14 md:grid-cols-[5fr_7fr]">
          <Reveal variant="left" className="md:sticky md:top-32">
            <div className="grid aspect-[16/10] w-full place-items-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500 shadow-xl">
              Image / banner
            </div>
          </Reveal>

          <div>
            <Reveal variant="right">
              <h2 className="font-serif text-4xl md:text-5xl">Pray, Give, Go</h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600">
                Intro paragraph about the kind of partners you seek.
              </p>
            </Reveal>

            <div className="mt-12 space-y-14">
              {sections.map((s, i) => (
                <Reveal key={s.key} variant="right" delay={100}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-lg font-semibold text-white">
                      {i + 1}
                    </span>
                    <h3 className="font-serif text-3xl">{s.key}</h3>
                  </div>

                  <blockquote className="mt-6 border-l-4 border-accent bg-white py-4 pl-6 pr-4 shadow-sm transition-transform duration-300 hover:translate-x-1.5">
                    <p className="text-lg font-semibold text-accent">{s.verse.ref}</p>
                    <p className="mt-1 text-xl italic text-slate-600">{s.verse.text}</p>
                  </blockquote>

                  <div className="mt-6 space-y-5 text-xl leading-relaxed text-slate-600">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}