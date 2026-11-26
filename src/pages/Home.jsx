import { Fragment, useEffect, useRef, useState } from "react";

/* ---------- helpers ---------- */

function Reveal({ children, className = "", delay = 0, variant = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${variant ? `reveal-${variant}` : ""} ${className}`}
    >
      {children}
    </div>
  );
}

const Words = ({ text }) => (
  <span aria-label={text}>
    {text.split(" ").map((w, i) => (
      <Fragment key={i}>
        <span className="word" aria-hidden style={{ animationDelay: `${150 + i * 90}ms` }}>
          {w}
        </span>{" "}
      </Fragment>
    ))}
  </span>
);

const Ph = ({ label, className = "", dark = false }) => (
  <div
    className={`grid place-items-center bg-gradient-to-br text-base tracking-wide ${
      dark ? "from-slate-600 to-slate-700 text-slate-300" : "from-slate-200 to-slate-300 text-slate-500"
    } ${className}`}
  >
    {label}
  </div>
);

const Btn = ({ children, ...p }) => (
  <button
    {...p}
    className="rounded-full bg-accent px-10 py-3.5 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg"
  >
    {children}
  </button>
);

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-lg text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

const Eyebrow = ({ children }) => (
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
);

const H2 = ({ children, light = false }) => (
  <h2 className={`font-serif text-4xl leading-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}>
    {children}
  </h2>
);

const List = ({ items }) => (
  <ul className="space-y-4">
    {items.map((t) => (
      <li
        key={t}
        className="flex items-start gap-3 text-xl text-slate-600 transition-transform duration-300 hover:translate-x-1.5"
      >
        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
        {t}
      </li>
    ))}
  </ul>
);

function VideoCard({ title, src, poster }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="group">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-700">
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full bg-black"
          />
        ) : (
          <>
            {poster ? (
              <img
                src={poster}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Ph
                dark
                label="Video thumbnail"
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <button
              aria-label="Play video"
              onClick={() => src && setPlaying(true)}
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </>
        )}
      </div>
      <h3 className="mt-5 font-serif text-2xl text-white md:text-3xl">{title}</h3>
    </div>
  );
}
/* ---------- page ---------- */

export default function Home() {
  const submit = (e) => e.preventDefault();

  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 text-center">
        <h1 className="mx-auto max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
          <Words text="Main Headline Goes Here" />
        </h1>
        <p
          className="word mx-auto mt-6 max-w-xl text-xl text-slate-600 md:text-2xl"
          style={{ animationDelay: "700ms" }}
        >
          One-line supporting statement about the ministry.
        </p>
        <Reveal delay={200} variant="scale" className="mt-12">
          <img
  src="/images/pastor.jpg"
  alt="Pastor preaching at an LLB service"
  className="aspect-video w-full rounded-2xl object-cover shadow-xl"
/>
        </Reveal>
      </section>

      {/* Two videos */}
      <section className="bg-ink py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <Reveal variant="left">
  <VideoCard
    title="Video Title One"
    src="/video/ministry.mp4"
    poster="/images/video-poster.jpg"
  />
</Reveal>
          <Reveal variant="right" delay={150}><VideoCard title="Video Title Two" /></Reveal>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <Eyebrow>Partner with us</Eyebrow>
          <H2>Support the Work</H2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-slate-600 md:text-2xl">
            Short invitation to give monthly or one time.
          </p>
          <div className="mt-8"><Btn>Donate Now</Btn></div>
        </Reveal>
      </section>

      {/* Social + Mission */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal variant="left">
            <Ph label="Social media banner" className="aspect-[2/1] w-full rounded-xl" />
          </Reveal>
          <Reveal variant="right" delay={150}>
            <Eyebrow>Our purpose</Eyebrow>
            <H2>Mission Statement</H2>
            <p className="mt-4 text-xl text-slate-600 md:text-2xl">
              Two or three sentences describing the mission of the ministry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Text left, circular portrait right */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="left">
            <H2>Focus Area One</H2>
            <div className="mt-6">
              <List items={["Point one", "Point two", "Point three"]} />
            </div>
          </Reveal>
          <Reveal variant="right" delay={150} className="flex justify-center md:justify-end">
            <Ph
              label="Portrait"
              className="aspect-square w-full max-w-sm rounded-full shadow-xl ring-8 ring-white"
            />
          </Reveal>
        </div>
      </section>

      {/* Image left, text right */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="left">
           <img
  src="/images/community.jpg"
  alt="Community gathered with the ministry team"
  className="aspect-[3/2] w-full rounded-xl object-cover object-[50%_40%] shadow-lg"
/>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <H2>Focus Area Two</H2>
            <div className="mt-6">
              <List items={["Point one", "Point two", "Point three", "Point four", "Point five"]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-ink py-20 text-center">
        <Reveal className="mx-auto max-w-xl px-6">
          <H2 light>Subscribe</H2>
          <p className="mt-3 text-xl text-white/70">Sign up to receive our newsletter.</p>
          <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input type="email" required placeholder="Email address" className={`${inputCls} flex-1`} />
            <Btn type="submit">Sign Up</Btn>
          </form>
        </Reveal>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-2xl px-6 py-24">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Contact us</Eyebrow>
            <H2>Inquiries &amp; Prayer Requests</H2>
          </div>
          <form onSubmit={submit} className="mt-10 space-y-4">
            <input type="text" placeholder="Name" className={inputCls} />
            <input type="email" required placeholder="Email *" className={inputCls} />
            <textarea rows={6} placeholder="Message" className={`${inputCls} resize-y`} />
            <div className="pt-2 text-center"><Btn type="submit">Send</Btn></div>
            <p className="pt-2 text-center text-base text-slate-500">
              Protected by reCAPTCHA. Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </Reveal>
      </section>

     
    </main>
  );
}