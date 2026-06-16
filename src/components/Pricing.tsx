import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { APP_STORE_URL } from "@/lib/site";

const GAME_FEATURES = [
  "All 7 decks unlocked Classic, Cinema, Travel, Sports, Night Games (+18), Couples, Marvel",
  "2 free AI deck generations included",
  "Pass-and-play on one phone, works offline",
  "No ads. No subscription. No data collected.",
];

const AI_FEATURES = [
  "Unlimited AI deck generations forever",
  "Up to 12 topics per deck, fully personalized",
  "Decks saved in My AI Cards, replay anytime",
  "One-time payment. Lifetime means lifetime.",
];

function SecretCode() {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="mt-5 w-full text-center font-mono text-[10px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors cursor-pointer"
      >
        ✦ Psst… found us on Product Hunt? Tap here.
      </button>
    );
  }

  return (
    <div className="mt-5 animate-reveal rounded-2xl border border-dashed border-primary/50 bg-background/40 p-4 text-center">
      <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mb-2">
        You found the secret. This stays between us.
      </p>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText("PRODUCTHUNT50");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-2 font-mono text-sm font-bold text-primary tracking-widest hover:bg-primary/25 transition-colors cursor-pointer"
      >
        PRODUCTHUNT50
        <span className="text-[10px] font-medium opacity-70">{copied ? "Copied!" : "Copy"}</span>
      </button>
      <p className="mt-3 text-xs text-foreground/60 text-pretty">
        50% off AI Lifetime — <span className="line-through opacity-60">$0.99</span>{" "}
        <span className="line-through opacity-60">$1.99</span>{" "}

      </p>
    </div>
  );
}

function Check({ className = "text-primary" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`size-4 flex-none mt-0.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.5 8.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="py-32">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
             Pricing
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Less than a coffee. <span className="text-primary">Funnier than most people.</span>
          </h2>
          <p className="mt-6 text-foreground/60 text-pretty">
            Two one-time purchases. That's the entire business model — no subscriptions, no ads, no
            energy bars, no tricks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-[2rem] border border-border bg-surface p-10 flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              The Game
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tighter">$0.99</span>
              <span className="text-foreground/50 font-medium">one-time</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-foreground/75">
              {GAME_FEATURES.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  <span className="text-pretty">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex justify-center items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Download on App Store
            </a>
          </div>

          <div className="relative rounded-[2rem] border-2 border-primary bg-primary/10 p-10 flex flex-col">
            <span className="absolute -top-3.5 left-10 px-3 py-1 rounded-full bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest">
              Power-up
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              AI Lifetime
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tighter text-primary">$1.99</span>
              <span className="text-foreground/50 font-medium">once, forever</span>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-foreground/75">
              {AI_FEATURES.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  <span className="text-pretty">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-bold hover:scale-[0.98] transition-transform shadow-[0_8px_40px_-8px] shadow-primary/50"
            >
              Unlock unlimited AI
            </a>
            <SecretCode />
          </div>
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-foreground/40 mt-10">
          Try before you commit every player gets 2 free AI decks inside the app.
        </p>
      </div>
    </section>
  );
}
