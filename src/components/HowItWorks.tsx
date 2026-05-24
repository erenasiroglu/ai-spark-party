import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  {
    n: "01",
    title: "Pick a vibe",
    body: "Type any prompt. From 'office gossip' to 'obscure 80s synth-pop'. Tadado understands.",
  },
  {
    n: "02",
    title: "AI builds the deck",
    body: "Forty cards. Forbidden words. Scoring tuned to your group. Generated in seconds, never repeated.",
  },
  {
    n: "03",
    title: "Play in 60 seconds",
    body: "Pass the phone. Explain without saying. Laugh, scream, score. Fast rounds, infinite replays.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="game" className="py-32">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-2xl">
            From idea to chaos <span className="text-primary">in three taps.</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            §02 / The Loop
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-10 flex flex-col gap-6 min-h-[280px]">
              <span className="font-mono text-sm font-bold text-primary">{s.n}</span>
              <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="text-foreground/60 text-pretty">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
