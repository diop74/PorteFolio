import { motion } from "framer-motion";
import { GraduationCap, Building2, ShieldCheck, Code2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PORTRAIT = "/oumar-portrait.jpg";

const PATH = [
  { icon: GraduationCap, text: "Licence in Software Engineering — ESSTHS, Tunisia", tone: "dev" },
  { icon: GraduationCap, text: "Master's in Information Systems Security — ESP, Dakar", tone: "sec" },
  { icon: Building2, text: "Security engineering, telecom infrastructure — Huawei", tone: "dev" },
  { icon: ShieldCheck, text: "Government cybersecurity operations", tone: "sec" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36" data-testid="about-section">
      <SectionHeader num="01" title="ABOUT" accent="dev" subtitle="whoami" />
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="group relative" data-testid="about-portrait-frame">
            <div className="absolute -inset-2 border border-dev/30 transition-colors duration-500 group-hover:border-dev/70" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-sec/20" aria-hidden="true" />
            <div className="relative overflow-hidden">
              <img
                src={PORTRAIT}
                alt="Oumar Diop — engineer in a dark ops environment"
                className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                loading="lazy"
                data-testid="about-portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-sec">
                clearance: builder + breaker
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg" data-testid="about-bio">
            Software engineer by training, with a deep specialization in cybersecurity — a rare
            combination that means I understand vulnerabilities from the{" "}
            <span className="text-dev">developer's perspective</span>, not just the{" "}
            <span className="text-sec">attacker's</span>. I've written the code, deployed the
            infrastructure, and then turned around and audited it.
          </p>
          <div className="mt-10 space-y-0 border-l border-white/10" data-testid="about-timeline">
            {PATH.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative flex items-center gap-4 py-4 pl-8"
              >
                <span className={`absolute -left-[5px] h-2.5 w-2.5 rounded-full ${p.tone === "sec" ? "bg-sec" : "bg-dev"} transition-transform duration-300 group-hover:scale-150`} />
                <p.icon className={`h-4 w-4 shrink-0 ${p.tone === "sec" ? "text-sec" : "text-dev"}`} />
                <p className="font-mono text-sm text-slate-300">{p.text}</p>
              </motion.div>
            ))}
          </div>
          <blockquote className="mt-10 border border-white/10 bg-surface/60 p-6" data-testid="about-philosophy">
            <Code2 className="mb-3 h-5 w-5 text-sec" />
            <p className="font-mono text-sm leading-relaxed text-slate-300">
              "Technical controls alone aren't enough. Building secure software requires
              understanding both <span className="text-dev">how to code</span> and{" "}
              <span className="text-sec">how to exploit code</span>."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
