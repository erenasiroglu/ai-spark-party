import { PromptCycler } from "./PromptCycler";
import { useReveal } from "@/hooks/useReveal";

const MINI_CARDS = [
  { word: "Matrix", forbidden: ["Neo", "Simulation", "Pills"] },
  { word: "Alien", forbidden: ["Space", "Ripley", "Acid"] },
  { word: "Blade", forbidden: ["Runner", "Replicant", "Rain"] },
  { word: "Tron", forbidden: ["Disc", "Grid", "Cycle"] },
];

export function AiEngine() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="engine" className="py-32 bg-foreground text-background overflow-hidden">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              §03 / The Engine
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Generate any theme <br />
              <span className="text-zinc-500">in seconds.</span>
            </h2>
            <PromptCycler />
            <p className="text-zinc-400 max-w-md text-pretty">
              Our engine crafts unique forbidden words for every prompt — calibrated to be just hard
              enough to make you scream. No two games ever feel the same.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {MINI_CARDS.map((c, i) => (
                <div
                  key={c.word}
                  className="aspect-[3/4] bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex flex-col"
                  style={{ marginTop: i % 2 === 1 ? "3rem" : 0 }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-auto">
                    Card {String(i + 12).padStart(3, "0")}
                  </span>
                  <div>
                    <div className="text-2xl font-extrabold tracking-tighter mb-3">{c.word}</div>
                    <div className="space-y-1.5">
                      {c.forbidden.map((f) => (
                        <div
                          key={f}
                          className="text-sm text-zinc-500 italic line-through decoration-primary decoration-2"
                        >
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
