type Props = {
  index?: string;
  word: string;
  forbidden: string[];
  points?: number;
  className?: string;
  initialDelay?: number;
};

export function TadadoCard({
  index = "082/AI",
  word,
  forbidden,
  points = 15,
  className = "",
  initialDelay = 1200,
}: Props) {
  return (
    <div
      className={`relative w-full max-w-md aspect-[3/4] bg-surface rounded-[2rem] shadow-2xl border border-border p-10 flex flex-col hover:rotate-1 transition-transform duration-500 ${className}`}
    >
      <div className="flex justify-between items-start mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Card {index}
        </span>
        <div className="size-4 rounded-full border-2 border-primary" />
      </div>
      <div className="mb-auto">
        <h2 className="text-5xl font-extrabold tracking-tighter mb-6">{word}</h2>
        <div className="space-y-3">
          {forbidden.map((w, i) => (
            <div key={w} className="block">
              <div className="relative inline-block">
                <span className="text-xl font-medium text-foreground/40 italic">{w}</span>
                <div
                  className="absolute left-[-2.5%] top-1/2 h-[3px] bg-primary/70 animate-strike"
                  style={{ animationDelay: `${initialDelay + i * 220}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-between items-end">
        <div className="flex -space-x-2">
          <div className="size-8 rounded-full bg-zinc-200 border-2 border-surface" />
          <div className="size-8 rounded-full bg-zinc-300 border-2 border-surface" />
          <div className="size-8 rounded-full bg-zinc-400 border-2 border-surface" />
        </div>
        <span className="font-mono text-sm font-bold text-primary">+{points} PTS</span>
      </div>
    </div>
  );
}
