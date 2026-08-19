import { useEffect, useState } from "react";

const SCRIPT = [
  { cmd: "git commit -m 'fix: patch auth bypass'", out: "[main 3f9a1c2] 1 file changed, 14 insertions(+)", tone: "dev" },
  { cmd: "nmap -sV --top-ports 100 target.sys", out: "22/tcp open ssh · 443/tcp open https", tone: "sec" },
  { cmd: "nuclei -u https://target.com -severity critical", out: "[CVE-2024-21762] [critical] http://target.com", tone: "sec" },
  { cmd: "docker compose up -d zabbix netbox npm", out: "3 containers started · stack healthy", tone: "dev" },
  { cmd: "subfinder -d target.com -silent | httpx", out: "47 live hosts discovered", tone: "sec" },
  { cmd: "python3 sectools.py scan --parse report.xml", out: "assets inventoried · report generated", tone: "dev" },
];

export default function Terminal() {
  const [entries, setEntries] = useState([]);
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const current = SCRIPT[idx % SCRIPT.length];
    if (typed.length < current.cmd.length) {
      const t = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 42);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setEntries((e) => [
        ...e.slice(-4),
        { type: "cmd", text: current.cmd, tone: current.tone },
        { type: "out", text: current.out, tone: current.tone },
      ]);
      setTyped("");
      setIdx((i) => i + 1);
    }, 1500);
    return () => clearTimeout(t);
  }, [typed, idx]);

  const current = SCRIPT[idx % SCRIPT.length];

  return (
    <div
      className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0d1220]/90 shadow-[0_0_40px_rgba(0,255,157,0.07)] backdrop-blur-xl"
      data-testid="hero-terminal"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
          djin3@sec-ops — zsh
        </span>
      </div>
      <div className="h-56 space-y-2 overflow-hidden p-5 font-mono text-xs leading-relaxed sm:text-sm">
        {entries.map((e, i) =>
          e.type === "cmd" ? (
            <p key={i} className="text-slate-300">
              <span className={e.tone === "sec" ? "text-sec" : "text-dev"}>➜</span>{" "}
              <span className="text-slate-500">~</span> {e.text}
            </p>
          ) : (
            <p key={i} className={e.tone === "sec" ? "text-sec/80" : "text-dev/80"}>
              {e.text}
            </p>
          )
        )}
        <p className="text-slate-200">
          <span className={current.tone === "sec" ? "text-sec" : "text-dev"}>➜</span>{" "}
          <span className="text-slate-500">~</span> {typed}
          <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-sec" />
        </p>
      </div>
    </div>
  );
}
