import Reveal from "../components/Reveal";

const marqueeItems = Array.from({ length: 6 }, () => "Resource Title Goes Here by Author Name");

export default function Resources() {
  return (
    <main className="overflow-x-clip">
      {/* Header */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      {/* Marquee */}
      <section className="marquee overflow-hidden bg-ink py-8">
        <div className="marquee-track">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center" aria-hidden={n === 1}>
              {marqueeItems.map((t, i) => (
                <span key={i} className="flex items-center whitespace-nowrap font-serif text-3xl text-white md:text-4xl">
                  {t}
                  <span className="mx-10 h-2 w-2 rounded-full bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Purchase banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 grid place-items-center text-base text-white/20">
          Background image
        </div>
        <div className="absolute inset-0 bg-ink/40" />
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 text-center md:flex-row">
          <h2 className="font-serif text-4xl text-white md:text-6xl">Purchase on Amazon</h2>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-white px-10 py-3.5 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Buy Now
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1.5"
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* Vision + book cover */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-14 md:grid-cols-[8fr_4fr]">
          <Reveal variant="left">
            <h2 className="font-serif text-4xl md:text-5xl">Our Vision</h2>
            <div className="mt-6 space-y-5 text-xl leading-relaxed text-slate-600">
              <p>Paragraph describing the resource and who it is for.</p>
              <p>Second paragraph about availability, languages, or how to get a copy.</p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={150} className="flex justify-center md:justify-end">
            <div className="group w-full max-w-[16rem] [perspective:1000px]">
              <div className="grid aspect-[2/3] w-full place-items-center rounded-md bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500 shadow-2xl transition-transform duration-500 group-hover:[transform:rotateY(-8deg)_translateY(-6px)]">
                Book cover (2:3)
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form embed */}
      <section className="bg-ink py-24">
        <Reveal variant="scale" className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Request a copy
            </p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">Get the Resource</h2>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Replace this placeholder with your form embed:
            <iframe
              src="YOUR_FORM_URL"
              title="Form"
              className="h-[640px] w-full border-0"
            />
            */}
            <div className="grid h-[480px] place-items-center text-base text-slate-500">
              Form embed goes here
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}