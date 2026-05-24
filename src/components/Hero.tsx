import { TadadoCard } from "./TadadoCard";

export function Hero() {
  return (
    <header className="relative pt-20 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-reveal">
            <span className="size-1.5 bg-primary rounded-full animate-pulse" />
            The future of social play
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter text-balance leading-[0.88] mb-8 animate-reveal [animation-delay:120ms]">
            Words are the <span className="text-primary">new</span> playground.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-foreground/60 text-pretty mb-10 animate-reveal [animation-delay:240ms]">
            Tadado is the AI-powered party game that generates infinite decks for your friend
            group. Explain without saying. Laugh until you can't. Never play the same round twice.
          </p>
          <div className="flex flex-wrap gap-3 animate-reveal [animation-delay:340ms]">
            <a
              href="#play"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
            >
              Start a Game
              <span className="font-mono text-xs opacity-80">→</span>
            </a>
            <a
              href="#engine"
              className="inline-flex items-center gap-2 bg-transparent text-foreground border border-border px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-surface transition-colors"
            >
              See how it works
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 animate-reveal [animation-delay:460ms]">
            <div className="flex -space-x-2">
              <div className="size-8 rounded-full bg-zinc-300 border-2 border-background" />
              <div className="size-8 rounded-full bg-zinc-400 border-2 border-background" />
              <div className="size-8 rounded-full bg-primary border-2 border-background" />
              <div className="size-8 rounded-full bg-foreground border-2 border-background" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
              50,000+ rounds played this week
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-reveal [animation-delay:380ms]">
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative -rotate-2">
              <TadadoCard
                index="082/AI"
                word="DOPAMINE"
                forbidden={["Brain", "Pleasure", "Reward"]}
                points={15}
              />
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rotate-6 rounded-[2rem] bg-foreground/5 border border-border" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
