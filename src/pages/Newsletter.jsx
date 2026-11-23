import { useState } from "react";
import Reveal from "../components/Reveal";

// Replace each `src` with your page image, e.g. "/newsletter/page-1.jpg" (files in /public/newsletter)
const pages = [
  { label: "Page 1", src: "" },
  { label: "Page 2", src: "" },
  { label: "Page 3", src: "" },
  { label: "Page 4", src: "" },
];

const PDF_URL = "#"; // e.g. "/newsletter/newsletter.pdf"

const Arrow = ({ dir }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={dir === "left" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
  </svg>
);

export default function Newsletter() {
  const [i, setI] = useState(0);
  const last = pages.length - 1;
  const page = pages[i];

  const navBtn =
    "grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent disabled:pointer-events-none disabled:opacity-30";

  return (
    <main className="overflow-x-clip">
      {/* Header */}
      <section className="px-6 pb-16 pt-16 text-center">
        <h1 className="word mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-6xl">
          Page Tagline Goes Here
        </h1>
      </section>

      {/* Viewer */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="border-b border-white/20 pb-6 font-serif text-4xl text-white md:text-5xl">
              Quarterly Newsletter
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12 text-center">
            <a
              href={PDF_URL}
              download
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-9 py-3.5 text-lg font-medium tracking-wide text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl"
            >
              <svg
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M12 4v12M6 12l6 6 6-6M5 21h14" />
              </svg>
              Download PDF
            </a>
          </Reveal>

          {/* Page */}
          <Reveal variant="scale" delay={150} className="mx-auto mt-12 max-w-2xl">
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl shadow-black/50">
              <div key={i} className="word aspect-[8.5/11] w-full">
                {page.src ? (
                  <img src={page.src} alt={page.label} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-200 to-slate-300 text-base text-slate-500">
                    Newsletter {page.label} image (8.5:11)
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Pager */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button onClick={() => setI(i - 1)} disabled={i === 0} aria-label="Previous page" className={navBtn}>
              <Arrow dir="left" />
            </button>

            <div className="text-center">
              <p className="text-xl font-medium text-white">
                {i + 1} <span className="text-white/50">/ {pages.length}</span>
              </p>
              <div className="mt-3 flex justify-center gap-2">
                {pages.map((p, n) => (
                  <button
                    key={p.label}
                    onClick={() => setI(n)}
                    aria-label={`Go to ${p.label}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      n === i ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button onClick={() => setI(i + 1)} disabled={i === last} aria-label="Next page" className={navBtn}>
              <Arrow dir="right" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}