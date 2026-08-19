const WORDS = ["BUILD", "BREAK", "SECURE", "OPTIMIZE"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-10" data-testid="marquee-section" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="text-outline px-6 font-mono text-6xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
                  {w}
                </span>
                <span className={`font-mono text-3xl ${i % 2 === 0 ? "text-sec/40" : "text-dev/40"}`}>{"//"}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
