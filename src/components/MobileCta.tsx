import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/site";

/** Sticky bottom download bar — mobile only, appears after the hero. */
export function MobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 bg-gradient-to-t from-background via-background/95 to-transparent transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-[0_8px_40px_-8px] shadow-primary/60 active:scale-[0.98] transition-transform"
      >
        <div>
          <div className="text-sm font-extrabold tracking-tight">Download Tadado $0.99</div>
          <div className="font-mono text-[9px] uppercase tracking-widest opacity-70">
            7 decks · AI cards · No subscription
          </div>
        </div>
        <span className="font-mono text-lg">→</span>
      </a>
    </div>
  );
}
