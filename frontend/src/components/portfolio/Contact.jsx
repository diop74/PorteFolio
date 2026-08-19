import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Trophy, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import SectionHeader from "./SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LINKS = [
  { icon: Linkedin, label: "LinkedIn", handle: "/in/oumar-diop-61b606222", href: "https://www.linkedin.com/in/oumar-diop-61b606222", testid: "contact-linkedin-link" },
  { icon: Github, label: "GitHub", handle: "@diop74", href: "https://github.com/diop74", testid: "contact-github-link" },
  { icon: Trophy, label: "TryHackMe", handle: "@Djin3", href: "https://tryhackme.com/p/Djin3", testid: "contact-tryhackme-link" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Transmission received.", {
        description: "Thanks for reaching out — I'll get back to you within 24 hours.",
      });
    }, 900);
  };

  const field =
    "border-white/15 bg-[#0d1220] font-mono text-sm text-slate-200 placeholder:text-slate-600 focus-visible:ring-sec/50 focus-visible:border-sec/60 rounded-none";

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36" data-testid="contact-section">
      <SectionHeader num="06" title="CONTACT" accent="sec" subtitle="ssh oumar@diop" />
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div
            className="inline-flex items-center gap-3 border border-sec/40 bg-sec/5 px-4 py-2.5"
            data-testid="availability-badge"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-sec" />
            <span className="font-mono text-xs text-sec">
              Open for freelance security audits & secure development work
            </span>
          </div>
          <p className="mt-8 max-w-md text-base leading-relaxed text-slate-400">
            Need a system built right — or broken before someone else breaks it? Open a channel.
          </p>
          <div className="mt-10 space-y-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 bg-surface/50 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-dev/50"
                data-testid={l.testid}
              >
                <l.icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-dev" />
                <span className="font-mono text-sm text-slate-300">{l.label}</span>
                <span className="ml-auto font-mono text-xs text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
                  {l.handle}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/10 bg-surface/60 p-8 backdrop-blur-sm lg:col-span-7 lg:p-10"
          data-testid="contact-form"
        >
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            $ ./initiate_contact.sh --secure
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">name</label>
              <Input
                id="contact-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Hacker"
                className={field}
                data-testid="contact-name-input"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">email</label>
              <Input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@target.com"
                className={field}
                data-testid="contact-email-input"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">message</label>
            <Textarea
              id="contact-message"
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Describe the system you want built — or broken."
              className={`${field} resize-none`}
              data-testid="contact-message-input"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group mt-8 flex items-center gap-3 border border-sec/60 px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-sec transition-colors duration-300 hover:bg-sec/10 hover:shadow-[0_0_25px_rgba(0,255,157,0.25)] disabled:opacity-60"
            data-testid="contact-submit-button"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
            {sending ? "Transmitting..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
