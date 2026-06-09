import appUi from "@/assets/app-ui.jpg";
import { useReveal } from "@/hooks/useReveal";

export function FeatureBento() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-32">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-2xl">
            Built for the <span className="text-primary">group chat</span>, played at the table.
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            §08 / Features
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 bg-surface rounded-3xl border border-border flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition-transform duration-500">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Mobile-first
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
                Adrenaline in your pocket.
              </h3>
              <p className="text-foreground/60 max-w-md mt-4 text-pretty">
                Designed for the phone in your hand and the table you're sitting at. One tap to
                join. Zero accounts. Lightning rounds.
              </p>
            </div>
            <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden mt-8 border border-border bg-background">
              <img
                src={appUi}
                alt="Tadado mobile interface showing a guessing card with forbidden words"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="p-10 bg-primary text-primary-foreground rounded-3xl flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition-transform duration-500">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                Social
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 leading-[0.95]">
                Viral by design.
              </h3>
              <p className="opacity-80 mt-4 text-pretty">
                Every round produces a quote screenshot. The kind that ends up pinned in your group
                chat at 2am.
              </p>
            </div>
            <div className="space-y-3 mt-8">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 text-sm font-medium">
                "It's <span className="line-through opacity-60">crunchy</span>… you eat it… in
                Italy?"
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 text-sm font-medium ml-8">
                "BISCOTTI?!"
              </div>
            </div>
          </div>

          <div className="p-10 bg-accent text-accent-foreground rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
              60s rounds
            </span>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Faster than a meme.</h3>
              <p className="opacity-80 mt-3 text-sm text-pretty">
                Sub-minute turns keep the energy up and the awkward silences out.
              </p>
            </div>
          </div>

          <div className="p-10 bg-surface border border-border rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Infinite decks
            </span>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Never the same twice.</h3>
              <p className="text-foreground/60 mt-3 text-sm text-pretty">
                AI generates new cards on demand. Replay forever without recognising a single word.
              </p>
            </div>
          </div>

          <div className="p-10 bg-surface border border-border rounded-3xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1 transition-transform duration-500">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Privacy
            </span>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Zero data collected.</h3>
              <p className="text-foreground/60 mt-3 text-sm text-pretty">
                No accounts, no tracking, nothing harvested. Verified on the App Store: data not
                collected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
