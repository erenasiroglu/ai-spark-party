import { useReveal } from "@/hooks/useReveal";

const FAQS = [
  {
    q: "What is Tadado?",
    a: "Tadado is a taboo-style word guessing party game for iPhone and iPad. One player describes the word on the card without saying the forbidden words below it, while their team races the 60-second clock to guess it. It ships with 7 curated decks Classic, Cinema, Travel, Sports, Night Games (+18), Couples and Marvel and an AI engine that builds unlimited custom decks from your own topics.",
  },
  {
    q: "How do you play a taboo game on one phone?",
    a: "Split into two teams and pass one phone around. The describer sees the target word and 5 forbidden words; teammates shout guesses while the other team watches for forbidden words and hits the buzzer. Correct guesses score points, forbidden words cost them. Tadado works completely offline, so you can play anywhere.",
  },
  {
    q: "Is Tadado a good alternative to Heads Up! or Nebuu?",
    a: "Yes and it plays differently. Heads Up! is a charades-style forehead game, and Nebuu sells extra category packs one by one. Tadado is true forbidden-words taboo gameplay with every deck unlocked for a single $0.99 purchase, plus AI-generated custom decks neither of them offers. No subscription, no ads.",
  },
  {
    q: "How much does Tadado cost?",
    a: "The app is a one-time $0.99 worldwide (₺29.99 in Türkiye) and includes all 7 decks plus 2 free AI deck generations. If you fall in love with AI decks, Tadado Lifetime unlocks unlimited AI generations forever for a one-time $2.99 (₺149.99). There is no subscription and no ads ever.",
  },
  {
    q: "Can AI really create my own taboo cards?",
    a: "Yes. Type up to 12 topics your friend group's inside jokes, your favorite series, your city or pick from suggestions like Travel, Food and Family. Tadado's AI generates a complete playable deck with target words and forbidden words, saved forever in My AI Cards. Every player gets 2 free generations to try it.",
  },
  {
    q: "Is Tadado popular in Türkiye? Tabu oyunu gibi mi?",
    a: "Tadado plays exactly like the tabu oyunu you know from game nights describe the word, dodge the forbidden ones, beat the clock. The app is priced at ₺29.99 in Türkiye, and with the AI engine you can create decks about anything: Turkish pop culture, your hometown, your group chat.",
  },
  {
    q: "Does Tadado collect my data?",
    a: "No. Tadado's App Store privacy label is 'Data Not Collected' no accounts, no tracking, no ads. You buy it once and play.",
  },
];

export function Faq() {
  const ref = useReveal<HTMLDivElement>();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" className="py-32">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-4xl px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Questions, <span className="text-primary">answered.</span>
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            §10 / FAQ
          </span>
        </div>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface/60 open:bg-surface transition-colors"
            >
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 font-bold tracking-tight text-lg">
                {f.q}
                <span className="flex-none text-primary font-mono text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-foreground/65 text-pretty leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
