import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { APP_STORE_URL } from "@/lib/site";

const APP_FEATURES = [
  "Classic deck included — play tonight",
  "Timer, buzzer and team scoring built in",
  "Pass-and-play on one phone, works offline",
  "No ads. No subscription. No data collected.",
];

const DECK_PRICES = [
  { name: "Cinema", price: "$0.99" },
  { name: "Travel", price: "$0.99" },
  { name: "Sports", price: "$0.99" },
  { name: "Couples", price: "$0.99" },
  { name: "Midnight Fun (+18)", price: "$1.99" },
  { name: "Marvel", price: "$1.99" },
];

const AI_FEATURES = [
  "10 AI deck generations — about 30¢ per deck",
  "Up to 12 topics per deck, fully personalized",
  "Decks saved in My AI Cards, replay forever",
  "One-time purchase. Credits never expire.",
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
        50% off AI Credits — <span className="line-through opacity-60">$2.99</span>{" "}
        <span className="font-bold text-primary">$1.49</span> for 10 decks
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
            Start free. <span className="text-primary">Own what you love.</span>
          </h2>
          <p className="mt-6 text-foreground/60 text-pretty">
            The game is free for a limited time. Pick up only the decks you'll actually play — buy
            once, keep forever. No subscriptions, no ads, no energy bars, no tricks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          <div className="relative rounded-[2rem] border-2 border-primary bg-primary/10 p-10 flex flex-col">
            <span className="absolute -top-3.5 left-10 px-3 py-1 rounded-full bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest">
              Limited time
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              The Game
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tighter text-primary">Free</span>
              <span className="text-foreground/50 font-medium line-through">$0.99</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-2">
              Launch offer — won't stay free forever
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/75">
              {APP_FEATURES.map((f) => (
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
              Claim it free
            </a>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-10 flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              Expansion Decks
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tighter">$0.99</span>
              <span className="text-foreground/50 font-medium">each, yours forever</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-2">
              Buy once — never expires, never renews
            </p>
            <ul className="mt-8 space-y-2.5 text-sm">
              {DECK_PRICES.map((d) => (
                <li
                  key={d.name}
                  className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2.5"
                >
                  <span className="font-semibold text-foreground/85">{d.name}</span>
                  <span className="font-mono text-xs font-bold text-primary">{d.price}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex justify-center items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Browse decks in the app
            </a>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-10 flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              AI Credits
            </span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tighter">$2.99</span>
              <span className="text-foreground/50 font-medium">10 credits</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 mt-2">
              1 credit = 1 full custom deck, built by AI
            </p>
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
              className="mt-10 inline-flex justify-center items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get AI Credits
            </a>
            <SecretCode />
          </div>
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-foreground/40 mt-10">
          Download now, decide later — the Classic deck is on us.
        </p>
      </div>
    </section>
  );
}
