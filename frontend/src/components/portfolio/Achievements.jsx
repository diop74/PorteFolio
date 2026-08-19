import { motion } from "framer-motion";
import { Trophy, BadgeCheck, GraduationCap, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CTF_TAGS = ["Prototype Pollution", "AWS Cognito Exploitation", "Cloud Misconfigurations", "LLM Prompt Injection", "Cryptanalysis"];

const CERTS = [
  { name: "CNSP", detail: "Certified Network Security Practitioner" },
  { name: "Huawei HCIA Cloud", detail: "Cloud infrastructure certification" },
  { name: "Oracle PL/SQL", detail: "Database programming certification" },
];

const EDUCATION = [
  { degree: "Licence — Software Engineering", school: "ESSTHS, Tunisia", tone: "dev" },
  { degree: "M2 — Information Systems Security", school: "ESP, Dakar", tone: "sec" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36" data-testid="achievements-section">
      <SectionHeader num="04" title="CTF & CREDENTIALS" accent="sec" subtitle="cat ~/trophies" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden border border-sec/25 bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-sec/60 lg:col-span-7 lg:p-10"
          data-testid="ctf-card"
        >
          <span className="pointer-events-none absolute -right-4 -top-6 font-mono text-[120px] font-extrabold leading-none text-sec/[0.05]">
            0xD3
          </span>
          <div className="mb-6 flex items-center gap-4">
            <Trophy className="h-6 w-6 text-sec" />
            <h3 className="font-mono text-xl font-bold text-slate-50">
              TryHackMe <span className="text-sec glow-sec">@Djin3</span>
            </h3>
            <a
              href="https://tryhackme.com/p/Djin3"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-sec"
              data-testid="tryhackme-profile-link"
            >
              profile <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            Active CTF player working through challenges that span modern web, cloud and
            cryptographic attack surfaces.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CTF_TAGS.map((t) => (
              <span key={t} className="border border-sec/25 bg-sec/5 px-3 py-1.5 font-mono text-xs text-sec/90 transition-colors duration-300 hover:bg-sec/15">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/10 bg-surface/60 p-8 backdrop-blur-sm lg:col-span-5 lg:p-10"
          data-testid="certifications-card"
        >
          <div className="mb-6 flex items-center gap-4">
            <BadgeCheck className="h-6 w-6 text-dev" />
            <h3 className="font-mono text-xl font-bold text-slate-50">Certifications</h3>
          </div>
          <ul className="space-y-5">
            {CERTS.map((c) => (
              <li key={c.name} className="group border-b border-white/5 pb-5 last:border-0 last:pb-0" data-testid={`cert-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <p className="font-mono text-sm font-bold text-slate-200 transition-colors duration-300 group-hover:text-dev">{c.name}</p>
                <p className="mt-1 text-xs text-slate-500">{c.detail}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/10 bg-surface/60 p-8 backdrop-blur-sm lg:col-span-12 lg:p-10"
          data-testid="education-timeline"
        >
          <div className="mb-8 flex items-center gap-4">
            <GraduationCap className="h-6 w-6 text-slate-300" />
            <h3 className="font-mono text-xl font-bold text-slate-50">Education</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {EDUCATION.map((e, i) => (
              <div key={e.degree} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <span className={`flex h-8 w-8 items-center justify-center border font-mono text-xs font-bold ${e.tone === "sec" ? "border-sec/50 text-sec" : "border-dev/50 text-dev"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i === 0 && <span className="mt-2 hidden w-px flex-1 bg-white/10 md:hidden" />}
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-slate-100">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{e.school}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
