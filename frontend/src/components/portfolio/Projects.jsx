import { motion } from "framer-motion";
import { Github, ArrowUpRight, Cpu, ShieldCheck, Wrench, LayoutDashboard } from "lucide-react";
import SectionHeader from "./SectionHeader";

const IMG_CODE = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjb2RpbmclMjB0ZXJtaW5hbCUyMGRhcmt8ZW58MHx8fHwxNzg3MTcxNzU0fDA&ixlib=rb-4.1.0&q=85";
const IMG_INFRA = "https://images.unsplash.com/photo-1680992044138-ce4864c2b962?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxzZXJ2ZXIlMjByb29tJTIwYmx1ZSUyMGdyZWVuJTIwZGFya3xlbnwwfHx8fDE3ODcxNzE3NTR8MA&ixlib=rb-4.1.0&q=85";

const PROJECTS = [
  {
    title: "DoitYourSelf OS",
    tag: "DEV+SEC",
    icon: Cpu,
    image: IMG_CODE,
    span: "lg:col-span-7",
    desc: "A bootable x86_64 kernel built from scratch: GDT, IDT, PIC remapping, keyboard driver, VGA shell, and a bump memory allocator. Deep systems knowledge that directly informs how I find low-level vulnerabilities.",
    stack: ["C", "Assembly", "x86_64", "QEMU", "NASM"],
  },
  {
    title: "Government Infrastructure Security Audit",
    tag: "SEC",
    icon: ShieldCheck,
    image: IMG_INFRA,
    span: "lg:col-span-5",
    desc: "Full vulnerability assessment of government infrastructure using ZAP, Nuclei, Subfinder and httpx — delivered with executive-level remediation reporting.",
    stack: ["OWASP ZAP", "Nuclei", "Subfinder", "httpx", "Reporting"],
  },
  {
    title: "sectools.py — Security CLI Toolkit",
    tag: "DEV+SEC",
    icon: Wrench,
    image: null,
    span: "lg:col-span-5",
    desc: "A Python toolkit I engineered for network scanning, scan-file parsing, report generation, and asset inventory — built to survive real SOC workflows.",
    stack: ["Python", "CLI", "Parsing", "Automation"],
  },
  {
    title: "Single Pane of Glass Architecture",
    tag: "DEV+SEC",
    icon: LayoutDashboard,
    image: null,
    span: "lg:col-span-7",
    desc: "Designed and deployed a Docker-based monitoring stack from the ground up: Zabbix, NetBox and Nginx Proxy Manager unified into one observable infrastructure view.",
    stack: ["Docker", "Zabbix", "NetBox", "Nginx Proxy Manager"],
  },
];

function TagBadge({ tag }) {
  if (tag === "DEV")
    return <span className="border border-dev/60 bg-dev/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-dev" data-testid="project-tag-dev">DEV</span>;
  if (tag === "SEC")
    return <span className="border border-sec/60 bg-sec/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-sec" data-testid="project-tag-sec">SEC</span>;
  return (
    <span className="flex font-mono text-[10px] font-bold tracking-[0.2em]" data-testid="project-tag-dev-sec">
      <span className="border border-dev/60 border-r-0 bg-dev/10 px-2.5 py-1 text-dev">DEV</span>
      <span className="border border-sec/60 bg-sec/10 px-2.5 py-1 text-sec">SEC</span>
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36" data-testid="projects-section">
      <SectionHeader num="03" title="PROJECTS" accent="dev" subtitle="cat ~/work" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex flex-col overflow-hidden border border-white/10 bg-surface/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${p.span}`}
            data-testid={`project-card-${i + 1}`}
          >
            {p.image ? (
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute left-6 top-6"><TagBadge tag={p.tag} /></div>
              </div>
            ) : (
              <div className="relative flex h-24 items-end border-b border-white/5 bg-[#0d1220] px-6 pb-0">
                <div className="scanlines absolute inset-0 opacity-30" aria-hidden="true" />
                <div className="absolute left-6 top-6"><TagBadge tag={p.tag} /></div>
                <p.icon className={`absolute bottom-4 right-6 h-8 w-8 ${p.tag === "SEC" ? "text-sec/40" : "text-dev/40"}`} />
              </div>
            )}
            <div className="flex flex-1 flex-col p-7 lg:p-8">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-mono text-lg font-bold tracking-tight text-slate-50 transition-colors duration-300 group-hover:text-sec sm:text-xl">
                  {p.title}
                </h3>
                <a
                  href="https://github.com/diop74"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} on GitHub`}
                  className="shrink-0 text-slate-500 transition-colors duration-300 hover:text-dev"
                  data-testid={`project-github-link-${i + 1}`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {s}
                  </span>
                ))}
                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sec" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
