import { useReveal } from "@/hooks/useReveal";

const QUOTES = [
  {
    body: "We made a deck about our group chat. I have not recovered.",
    who: "Maya",
    meta: "Brooklyn / Friday night",
  },
  {
    body: "Cards Against Humanity wishes it had this much range.",
    who: "Jonas",
    meta: "Berlin / Birthday party",
  },
  {
    body: "Genuinely the funniest 12 minutes I've had this year.",
    who: "Priya",
    meta: "London / Dinner party",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-32 bg-background">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
         Field reports
        </span>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {QUOTES.map((q) => (
            <figure
              key={q.who}
              className="p-8 bg-surface border border-border rounded-3xl flex flex-col gap-8 min-h-[260px]"
            >
              <blockquote className="text-2xl font-semibold tracking-tight text-pretty leading-snug">
                "{q.body}"
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between">
                <span className="font-bold">{q.who}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {q.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
