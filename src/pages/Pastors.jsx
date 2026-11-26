import Reveal from "../components/Reveal";

const verses = [
  { ref: "Book 0:00", text: "Favorite verse text goes here." },
  { ref: "Book 0:00", text: "Favorite verse text goes here." },
  { ref: "Book 0:00-00", text: "Favorite verse text goes here." },
];

export default function Pastors() {
  return (
    <main className="overflow-x-clip">
      {/* Page header */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      {/* Content */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="border-b border-slate-300 pb-6 font-serif text-4xl md:text-5xl">
              Meet the Pastors
            </h2>
          </Reveal>

          <div className="mt-14 grid items-start gap-12 md:grid-cols-[5fr_7fr]">
            {/* Photo */}
            <Reveal variant="left" className="md:sticky md:top-32">
              <img
  src="/images/pastor.jpg"
  alt="Pastor"
  className="aspect-[4/5] w-full rounded-xl object-cover object-[37%_center] shadow-xl"
/>
            </Reveal>

            {/* Text */}
            <Reveal variant="right" delay={150}>
              <h3 className="font-serif text-3xl md:text-4xl">Pastor Names Here</h3>

              <div className="mt-6 space-y-6 text-xl leading-relaxed text-slate-600">
                <p>Paragraph one: ministry background and calling.</p>
                <p>Paragraph two: travels, missions, and experience.</p>
                <p>Paragraph three: family and personal details.</p>
              </div>

              <p className="mt-10 text-xl text-slate-600">Favorite life verses:</p>
              <div className="mt-5 space-y-5">
                {verses.map((v, i) => (
                  <blockquote
                    key={i}
                    className="border-l-4 border-accent bg-paper py-4 pl-6 pr-4 transition-transform duration-300 hover:translate-x-1.5"
                  >
                    <p className="text-lg font-semibold text-accent">{v.ref}</p>
                    <p className="mt-1 text-xl italic text-slate-600">{v.text}</p>
                  </blockquote>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}