import { useReveal } from "@/hooks/useReveal";

type Deck = {
  name: string;
  tagline: string;
  sample: string[];
  price: string;
  badge?: string;
  style: "purple" | "gold" | "crimson";
};

const DECKS: Deck[] = [
  {
    name: "Classic",
    tagline: "Everything in one. The deck every party starts with.",
    sample: ["Eiffel Tower", "Pizza", "Dinosaur"],
    price: "Included free",
    style: "gold",
  },
  {
    name: "Cinema",
    tagline: "Blockbusters, cult classics and quotable one-liners.",
    sample: ["Inception", "Oscar", "Plot Twist"],
    price: "$0.99",
    style: "purple",
  },
  {
    name: "Travel",
    tagline: "All cities and countries describe the world.",
    sample: ["Grand Canyon", "Tokyo", "Passport"],
    price: "$0.99",
    style: "purple",
  },
  {
    name: "Sports",
    tagline: "Derby nights, GOAT debates and last-minute goals.",
    sample: ["Hat-trick", "Olympics", "Penalty"],
    price: "$0.99",
    style: "purple",
  },
  {
    name: "Midnight Fun",
    tagline: "After-midnight rules. Strictly for grown-ups.",
    sample: ["Truth or Dare", "Last Kiss", "Secret"],
    price: "$1.99",
    badge: "+18",
    style: "crimson",
  },
  {
    name: "Couples",
    tagline: "Date night, upgraded. Made to be played as two.",
    sample: ["First Date", "Anniversary", "Soulmate"],
    price: "$0.99",
    style: "crimson",
  },
  {
    name: "Marvel",
    tagline: "Heroes, villains and the whole multiverse.",
    sample: ["Infinity Stone", "Wakanda", "Snap"],
    price: "$1.99",
    style: "gold",
  },
];

const STYLES = {
  purple: {
    card: "bg-surface border border-border",
    name: "text-primary",
    chip: "bg-white/5 text-foreground/70 border border-white/10",
  },
  gold: {
    card: "bg-primary text-primary-foreground border border-primary",
    name: "text-primary-foreground",
    chip: "bg-black/10 text-primary-foreground/80 border border-black/10",
  },
  crimson: {
    card: "bg-accent text-accent-foreground border border-accent",
    name: "text-accent-foreground",
    chip: "bg-black/15 text-accent-foreground/90 border border-black/10",
  },
} as const;

export function Decks() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="decks" className="py-32">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Start free with Classic. <span className="text-primary">Collect the rest.</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            The Decks
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DECKS.map((deck) => {
            const s = STYLES[deck.style];
            return (
              <div
                key={deck.name}
                className={`group relative rounded-3xl p-7 min-h-[240px] flex flex-col hover:-translate-y-1.5 transition-transform duration-500 ${s.card}`}
              >
                <div className="flex items-start justify-between mb-auto">
                  <h3 className={`text-2xl font-extrabold tracking-tighter uppercase ${s.name}`}>
                    {deck.name}
                  </h3>
                  {deck.badge && (
                    <span className="font-mono text-[10px] font-bold px-2 py-1 rounded-full bg-black/25 text-white">
                      {deck.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm opacity-75 text-pretty mt-4 mb-5">{deck.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {deck.sample.map((w) => (
                    <span
                      key={w}
                      className={`font-mono text-[10px] px-2.5 py-1 rounded-full ${s.chip}`}
                    >
                      {w}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    {deck.price}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                    {deck.price === "Included free" ? "with the app" : "own it forever"}
                  </span>
                </div>
              </div>
            );
          })}

          {/* The eighth deck is whatever you can imagine */}
          <a
            href="#engine"
            className="relative rounded-3xl p-7 min-h-[240px] flex flex-col border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="flex items-start justify-between mb-auto">
              <h3 className="text-2xl font-extrabold tracking-tighter uppercase text-primary">
                Your Deck
              </h3>
              <span className="font-mono text-[10px] font-bold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                AI
              </span>
            </div>
            <p className="text-sm text-foreground/70 text-pretty mt-4 mb-5">
              Describe it in a sentence, tap quick picks, or use a single word the smarter AI builds a deck that's fully yours.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Create with AI →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
