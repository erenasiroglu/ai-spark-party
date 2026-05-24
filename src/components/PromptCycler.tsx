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
    <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 space-y-4">
      <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Prompt Input</div>
      <div className="text-xl font-medium text-zinc-200 min-h-[1.75rem]">
        <span key={i} className="inline-block animate-reveal">
          {PROMPTS[i]}
        </span>
      </div>
      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div key={i} className="h-full bg-primary animate-loading-bar" />
      </div>
      <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pt-1">
        Generating 40 cards · forbidden words · scoring rules
      </div>
    </div>
  );
}
