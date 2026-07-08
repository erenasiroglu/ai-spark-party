import { useReveal } from "@/hooks/useReveal";
import { APP_STORE_URL } from "@/lib/site";

const ROWS: { label: string; values: [string, string, string, string] }[] = [
  { label: "Download price", values: ["Free — limited time", "Free + subscription", "Free", "$20+ box"] },
  { label: "How you pay", values: ["Own decks from $0.99, forever", "Recurring subscription", "137 paid packs", "One box, fixed cards"] },
  { label: "AI builds custom decks", values: ["✓", "✗", "✗", "✗"] },
  { label: "Forbidden-words gameplay", values: ["✓", "✗ (charades)", "Partial", "✓"] },
  { label: "Ads", values: ["None", "Yes", "Yes", "—"] },
  { label: "Personal data collected", values: ["None", "Yes", "Yes", "—"] },
];

const COLUMNS = ["Tadado", "Heads Up!", "Nebuu", "Taboo Board Game"];

export function Compare() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="compare" className="py-32 bg-black/25 border-y border-border">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Every taboo game, <span className="text-primary">side by side.</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
             The Showdown
          </span>
        </div>
        <p className="max-w-3xl text-foreground/60 text-pretty mb-12">
          Looking for a taboo game app, a Heads Up! alternative, or the classic tabu oyunu you grew
          up with? Here's the honest comparison: Tadado is free to download for a limited time — no
          subscription, no ads. You only ever pay for the decks you actually want, own them
          forever, and the AI engine writes brand-new cards from your own topics so the game
          literally never runs out.
        </p>

        <div className="overflow-x-auto rounded-3xl border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="text-left p-5 font-mono text-[10px] uppercase tracking-widest text-foreground/50 font-medium">
                  Feature
                </th>
                {COLUMNS.map((c, i) => (
                  <th
                    key={c}
                    className={`text-left p-5 font-extrabold tracking-tight ${
                      i === 0 ? "text-primary text-base" : "text-foreground/70"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="p-5 text-foreground/60">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-5 font-medium ${
                        i === 0 ? "text-primary font-bold" : "text-foreground/70"
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-bold hover:scale-[0.98] transition-transform shadow-[0_8px_40px_-8px] shadow-primary/50"
          >
            Download Tadado — Free
          </a>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Limited time · No subscription, ever
          </span>
        </div>
      </div>
    </section>
  );
}
