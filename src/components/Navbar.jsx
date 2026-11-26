import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Meet the Pastors", href: "/pastors" },
  { label: "Our Mission", href: "/mission" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Devotions", href: "/devotions" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const bar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
       <NavLink to="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="LLB logo"
    className="h-14 w-14 rounded-full bg-white object-contain p-1"
  />
  <span className="font-serif text-2xl font-semibold text-white">LLB</span>
</NavLink>

        <ul className="hidden gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                end={l.href === "/"}
                className={({ isActive }) =>
                  `group relative py-1 text-base font-medium tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 overflow-hidden px-6">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                end={l.href === "/"}
                onClick={() => setOpen(false)}
                className="block border-t border-white/10 py-3 text-lg text-white/80"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={bar}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent"
      />
    </header>
  );
}