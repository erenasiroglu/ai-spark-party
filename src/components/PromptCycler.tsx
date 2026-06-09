import { useEffect, useState } from "react";

const PROMPTS = [
  '"90s sci-fi movies and cult classics"',
  '"Office inside jokes from last summer"',
  '"Y2K pop culture, trashy and beloved"',
  '"Italian dinner party, but chaotic"',
  '"Things only millennials still say"',
];

export function PromptCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PROMPTS.length), 2800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="p-6 bg-black/30 rounded-2xl border border-border space-y-4">
      <div className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
        Prompt Input
      </div>
      <div className="text-xl font-medium min-h-[1.75rem]">
        <span key={i} className="inline-block animate-reveal">
          {PROMPTS[i]}
        </span>
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div key={i} className="h-full bg-primary animate-loading-bar" />
      </div>
      <div className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest pt-1">
        Generating cards · forbidden words · scoring rules
      </div>
    </div>
  );
}
