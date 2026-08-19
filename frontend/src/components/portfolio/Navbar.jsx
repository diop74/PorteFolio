import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const LINKS = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "ctf", href: "#achievements" },
  { label: "contact", href: "#contact" },
];

export const scrollToSection = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -72, duration: 1.4 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      data-testid="navbar"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest text-slate-100"
          data-testid="nav-logo"
        >
          <Terminal className="h-4 w-4 text-sec" />
          <span>
            oumar<span className="text-sec">@</span>diop<span className="text-dev">:~$</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="group font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-sec"
              data-testid={`nav-link-${l.label}`}
            >
              <span className="text-dev/70">0{i + 1}.</span> {l.label}
              <span className="block h-px max-w-0 bg-sec transition-[max-width] duration-300 group-hover:max-w-full" />
            </a>
          ))}
        </div>
        <button
          className="text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="nav-menu-toggle"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="py-2 font-mono text-sm uppercase tracking-[0.2em] text-slate-300 hover:text-sec"
                  data-testid={`nav-mobile-link-${l.label}`}
                >
                  <span className="text-dev/70">0{i + 1}.</span> {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
