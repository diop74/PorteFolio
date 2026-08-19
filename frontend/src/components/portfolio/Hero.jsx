import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Mail, FileDown } from "lucide-react";
import Terminal from "./Terminal";
import { scrollToSection } from "./Navbar";

const ROLES = [
  "Full-Stack Developer",
  "Penetration Tester",
  "Cloud Security Engineer",
  "Systems Programmer",
  "CTF Player (Djin3)",
];

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    let delay = deleting ? 32 : 68;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 350;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setWi((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wi, words]);

  return text;
}

const reveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.13 },
  }),
};

export default function Hero() {
  const role = useTypewriter(ROLES);
  const { scrollY } = useScroll();
  const yTerm = useTransform(scrollY, [0, 700], [0, 90]);
  const yGlow = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16" data-testid="hero-section">
      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-sec/[0.05] blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-sec"
            data-testid="hero-intro-label"
          >
            {"// hello_world — access granted"}
          </motion.p>
          <h1 className="font-mono font-extrabold leading-[0.95] tracking-tighter text-slate-50">
            <span className="block overflow-hidden pb-1">
              <motion.span custom={0} variants={reveal} initial="hidden" animate="show" className="block text-5xl sm:text-7xl lg:text-8xl">
                OUMAR
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span custom={1} variants={reveal} initial="hidden" animate="show" className="block text-5xl sm:text-7xl lg:text-8xl">
                DIOP<span className="text-sec glow-sec">.</span>
              </motion.span>
            </span>
          </h1>
          <div className="mt-8 overflow-hidden">
            <motion.p custom={2} variants={reveal} initial="hidden" animate="show" className="font-mono text-sm uppercase tracking-[0.25em] text-slate-400 sm:text-base" data-testid="hero-title">
              Software Engineer <span className="text-dev">&</span> Cybersecurity Specialist
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 flex h-8 items-center font-mono text-base text-slate-200 sm:text-lg"
            data-testid="hero-typing-roles"
          >
            <span className="mr-3 text-sec">$</span>
            <span>{role}</span>
            <span className="cursor-blink ml-1 inline-block h-5 w-2.5 bg-dev" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            data-testid="hero-tagline"
          >
            I build systems, then I break them to make them stronger.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="group flex items-center gap-2 border border-sec/60 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-sec transition-colors duration-300 hover:bg-sec/10 hover:shadow-[0_0_25px_rgba(0,255,157,0.25)]"
              data-testid="hero-view-projects-btn"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a
              href="/Oumar_Diop_CV.pdf"
              download="Oumar_Diop_CV.pdf"
              className="group flex items-center gap-2 border border-dev/60 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-dev transition-colors duration-300 hover:bg-dev/10 hover:shadow-[0_0_25px_rgba(0,217,255,0.25)]"
              data-testid="hero-download-cv-btn"
            >
              <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="group flex items-center gap-2 px-2 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-dev transition-colors duration-300 hover:text-slate-50"
              data-testid="hero-contact-btn"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <span className="block h-px max-w-0 bg-dev transition-[max-width] duration-300 group-hover:max-w-full" />
            </button>
          </motion.div>
        </div>
        <motion.div
          style={{ y: yTerm }}
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <Terminal />
          <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
            build <span className="text-dev">//</span> break <span className="text-sec">//</span> repeat
          </p>
        </motion.div>
      </div>
    </section>
  );
}
