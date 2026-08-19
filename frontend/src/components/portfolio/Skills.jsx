import { motion } from "framer-motion";
import { Hammer, ShieldHalf, Cloud, Crosshair } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PILLARS = [
  {
    title: "BUILD",
    tone: "dev",
    icon: Hammer,
    groups: [
      {
        icon: Hammer,
        label: "Software Engineering",
        skills: ["Python", "Bash", "C / Systems Programming", "Low-level OS Dev", "Git", "CI/CD", "PostgreSQL", "PL/SQL"],
      },
      {
        icon: Cloud,
        label: "Cloud & Infrastructure",
        skills: ["Huawei Cloud Stack", "FusionSphere", "Docker", "Zabbix", "NetBox", "Infra Monitoring"],
      },
    ],
  },
  {
    title: "SECURE",
    tone: "sec",
    icon: ShieldHalf,
    groups: [
      {
        icon: Crosshair,
        label: "Offensive Security",
        skills: ["Penetration Testing", "OWASP ZAP", "Nuclei", "Subfinder", "Web Exploitation", "Cryptanalysis"],
      },
      {
        icon: ShieldHalf,
        label: "Defensive Security",
        skills: ["SIEM (Wazuh)", "SOC Operations", "OpenVAS", "Qualys", "Vulnerability Management"],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36" data-testid="skills-section">
      <SectionHeader num="02" title="SKILLS" accent="sec" subtitle="ls /usr/bin" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        {PILLARS.map((pillar, pi) => {
          const isSec = pillar.tone === "sec";
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: pi * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative border bg-surface/50 p-8 backdrop-blur-sm transition-colors duration-500 lg:p-10 ${
                isSec ? "border-sec/20 hover:border-sec/50" : "border-dev/20 hover:border-dev/50"
              }`}
              data-testid={`skills-pillar-${pillar.title.toLowerCase()}`}
            >
              <span className={`pointer-events-none absolute right-6 top-4 font-mono text-7xl font-extrabold ${isSec ? "text-sec/[0.06]" : "text-dev/[0.06]"}`}>
                {isSec ? "SEC" : "DEV"}
              </span>
              <div className="mb-10 flex items-center gap-4">
                <pillar.icon className={`h-6 w-6 ${isSec ? "text-sec" : "text-dev"}`} />
                <h3 className={`font-mono text-2xl font-bold tracking-tight ${isSec ? "text-sec glow-sec" : "text-dev glow-dev"}`}>
                  {pillar.title}
                </h3>
              </div>
              <div className="space-y-9">
                {pillar.groups.map((g) => (
                  <div key={g.label}>
                    <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
                      <g.icon className="h-3.5 w-3.5" /> {g.label}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {g.skills.map((s) => (
                        <span
                          key={s}
                          className={`border px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors duration-300 ${
                            isSec
                              ? "border-white/10 hover:border-sec/60 hover:text-sec"
                              : "border-white/10 hover:border-dev/60 hover:text-dev"
                          }`}
                          data-testid={`skill-pill-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
