import { PromptCycler } from "./PromptCycler";
import { PhoneShot } from "./PhoneShot";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useCinematic";
import aiShot from "@/assets/shot-1113.jpg";

const FLOW = [
  {
    n: "A",
    title: "Type your topics",
    body: "Up to 12 of them or tap suggestions like Travel, Food, Family. Anything your group obsesses over.",
  },
  {
    n: "B",
    title: "AI builds the deck",
    body: "Target words, forbidden words, difficulty a complete custom deck generated in seconds.",
  },
  {
    n: "C",
    title: "Saved in My AI Cards",
    body: "Your decks live in the app forever. Replay them, remix them, build new ones.",
  },
];

export function AiEngine() {
  const ref = useReveal<HTMLDivElement>();
  const phoneRef = useParallax<HTMLDivElement>(0.07);
  return (
    <section id="engine" className="py-32 bg-black/25 border-y border-border overflow-hidden">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              The Engine
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Run out of cards? <br />
              <span className="text-primary">Impossible.</span>
            </h2>
            <PromptCycler />
            <div className="space-y-6">
              {FLOW.map((f) => (
                <div key={f.n} className="flex gap-5">
                  <span className="flex-none size-8 rounded-full bg-primary/15 border border-primary/30 text-primary font-mono text-xs font-bold grid place-items-center">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-bold tracking-tight">{f.title}</h3>
                    <p className="text-sm text-foreground/60 text-pretty mt-1">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-medium">
                <span className="font-bold text-primary">2 AI decks free</span> for every player
                go unlimited for life for <span className="font-bold">$1.99</span>
              </p>
              <a
                href="#pricing"
                className="font-mono text-[10px] uppercase tracking-widest text-primary hover:underline"
              >
                See pricing →
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-12 bg-primary/10 blur-3xl rounded-full" />
            <div ref={phoneRef} className="relative w-[17rem] md:w-[20rem]">
              <PhoneShot
                src={aiShot}
                alt="Tadado Create with AI — add up to 12 topics and AI builds your custom deck"
                className="-rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
