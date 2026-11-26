import { Link } from "react-router-dom";

const links = [
  { label: "Meet the Pastors", href: "/pastors" },
  { label: "Our Mission", href: "/mission" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Resources", href: "/resources" },
];

const Social = ({ label, href = "#", children }) => (
  <a
    href={href}
    aria-label={label}
    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-center">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="text-sm font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center gap-4">
          <Social label="Facebook">
            <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
          </Social>
          <Social label="YouTube">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
          </Social>
        </div>

       <img
  src="/logo.png"
  alt="LLB logo"
  className="mx-auto mt-8 h-20 w-20 rounded-full bg-white object-contain p-1"
/>
<p className="mt-4 font-serif text-2xl text-white">LLB</p>
        <p className="mt-2 text-base text-white/60">Street Address, City, State ZIP</p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Ministry Name. All rights reserved.</p>
          <p>Powered by Your Name</p>
        </div>
      </div>
    </footer>
  );
}