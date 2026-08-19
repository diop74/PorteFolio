import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

const LINES = [
  { text: "Most developers don't think like attackers.", tone: "dev", align: "self-start" },
  { text: "Most security professionals don't think like engineers.", tone: "sec", align: "self-end text-right" },
];

export default function WhyBoth() {
  return (
    <section id="why-both" className="relative border-y border-white/5 bg-surface/30 py-28 lg:py-40" data-testid="why-both-section">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-slate-500"
        >
          <GitBranch className="h-4 w-4 text-sec" /> 05 {"//"} the dual advantage
        </motion.p>
        {LINES.map((l, i) => (
          <motion.p
            key={l.text}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl font-mono text-2xl font-bold leading-snug tracking-tight text-slate-500 sm:text-3xl lg:text-4xl ${l.align}`}
            data-testid={`why-both-line-${i + 1}`}
          >
            {l.text}
          </motion.p>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6"
        >
          <p className="font-mono text-3xl font-extrabold leading-tight tracking-tighter text-slate-50 sm:text-5xl lg:text-6xl" data-testid="why-both-statement">
            I do <span className="text-dev glow-dev">both</span>
            <span className="text-sec glow-sec">.</span>
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Which means I write more secure code — and I find the vulnerabilities others miss.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
