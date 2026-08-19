import { ArrowUp } from "lucide-react";
import { scrollToSection } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10" data-testid="footer">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <p className="font-mono text-xs text-slate-500">
          <span className="text-sec">©</span> 2026 Oumar Diop — designed, built & broken in Dakar.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
          no systems were harmed<span className="text-dev">*</span> {"  "}*that didn't deserve it
        </p>
        <button
          onClick={() => scrollToSection("#top")}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-sec"
          data-testid="back-to-top-btn"
        >
          back to top
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
