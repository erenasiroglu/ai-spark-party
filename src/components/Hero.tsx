import { PhoneShot } from "./PhoneShot";
import { useParallax } from "@/hooks/useCinematic";
import { APP_STORE_URL } from "@/lib/site";
import homeShot from "@/assets/shot-1128.jpg";
import gameShot from "@/assets/shot-1120.jpg";

const STATS = [
  { value: "8+", label: "Different decks" },
  { value: "∞", label: "AI-built cards" },
  { value: "$0", label: "Free for a limited time" },
];

export function Hero() {
  const frontRef = useParallax<HTMLDivElement>(0.06);
  const backRef = useParallax<HTMLDivElement>(0.12);

  return (
    <header className="relative pt-20 pb-24 overflow-hidden">
      {/* Cinematic stage lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[120px] animate-glow" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-glow [animation-delay:2s]" />
        <div className="absolute bottom-0 -left-32 h-[24rem] w-[24rem] rounded-full bg-white/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-reveal">
            <span className="rounded-full bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
              Limited time
            </span>
            <span className="text-sm font-semibold text-foreground/90">
              Free on the App Store <span className="line-through opacity-50">$0.99</span>
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter text-balance leading-[0.88] mb-8 animate-reveal [animation-delay:100ms]">
            The taboo game that <span className="text-primary">never runs out</span> of cards.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-foreground/70 text-pretty mb-10 animate-reveal [animation-delay:240ms]">
            Describe the word without saying the obvious ones. Download free, start playing in
            seconds, and collect hand-crafted decks from $0.99 or describe any vibe and Tadado's smarter AI
            builds a deck that's yours alone. One phone, two teams, zero boring rounds.
          </p>
          <div className="flex flex-wrap gap-3 animate-reveal [animation-delay:340ms]">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-bold hover:scale-[0.98] transition-transform shadow-[0_8px_40px_-8px] shadow-primary/50"
            >
              Download Free
              <span className="font-mono text-xs opacity-80">→</span>
            </a>
            <a
              href="#decks"
              className="inline-flex items-center gap-2 bg-white/5 text-foreground border border-border px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Explore the decks
            </a>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-foreground/40 animate-reveal [animation-delay:400ms]">
            iOS out now. Android coming to Google Play this week
          </p>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-reveal [animation-delay:460ms]">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold tracking-tighter text-primary">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-reveal [animation-delay:380ms]">
          <div className="relative w-[17rem] md:w-[19rem]">
            <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full" />
            <div ref={backRef} className="absolute -left-24 top-16 w-[15rem] hidden md:block">
              <PhoneShot
                src={gameShot}
                alt="Tadado gameplay — describe AMONG US without saying Impostor, Sus, Red, Vent or Crewmate"
                className="-rotate-6 opacity-90"
              />
            </div>
            <div ref={frontRef} className="relative">
              <PhoneShot
                src={homeShot}
                alt="Tadado home screen — choose a deck: Classic, Travel, Midnight Fun and more"
                className="rotate-2"
                eager
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
