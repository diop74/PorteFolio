import { motion } from "framer-motion";

export default function SectionHeader({ num, title, accent = "sec", subtitle }) {
  const color = accent === "sec" ? "text-sec" : "text-dev";
  const border = accent === "sec" ? "border-sec/60" : "border-dev/60";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 border-l-2 ${border} pl-6`}
      data-testid={`section-header-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      <p className={`font-mono text-xs uppercase tracking-[0.35em] ${color}`}>
        {num} {"//"} {subtitle || "chapter"}
      </p>
      <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
