import { useEffect, useState, type ReactNode } from "react";

type Mode = {
  label: string;
  hint: string;
  content: ReactNode;
};

const MODES: Mode[] = [
  {
    label: "Describe it",
    hint: "Full sentences — the AI reads the vibe",
    content: (
      <span className="text-xl font-medium text-pretty">
        "A deck about our friend group's inside jokes from last summer"
      </span>
    ),
  },
  {
    label: "Quick picks",
    hint: "Tap suggestions — done in one second",
    content: (
      <div className="flex flex-wrap gap-2">
        {["Travel", "Food", "Sports", "Family", "School", "Fun"].map((w) => (
          <span
            key={w}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary"
          >
            {w}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: "Single words",
    hint: "One word is enough — the engine fills in the rest",
    content: (
      <div className="flex flex-wrap gap-2">
        {["Marvel", "90s", "Istanbul", "Office"].map((w) => (
          <span
            key={w}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-foreground/80"
          >
            {w}
          </span>
        ))}
      </div>
    ),
  },
];

export function PromptCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % MODES.length), 3200);
    return () => clearInterval(id);
  }, []);
  const mode = MODES[i];
  return (
    <div className="p-6 bg-black/30 rounded-2xl border border-border space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
          Create with AI
        </div>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/25">
          {mode.label}
        </span>
      </div>
      <div key={i} className="min-h-[3.5rem] animate-reveal">
        {mode.content}
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div key={i} className="h-full bg-primary animate-loading-bar" />
      </div>
      <div className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest pt-1">
        {mode.hint} · smarter engine · cards · forbidden words · difficulty
      </div>
    </div>
  );
}
