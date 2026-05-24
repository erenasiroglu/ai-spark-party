import party from "@/assets/party-moment.jpg";
import { useReveal } from "@/hooks/useReveal";
import { APP_STORE_URL } from "@/lib/site";

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="play" className="py-24">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[3rem] border border-border">
          <img
            src={party}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative px-8 py-24 md:py-32 md:px-16 text-background">
            <span className="font-mono text-[10px] uppercase tracking-widest text-background/60">
              §06 / Press start
            </span>
            <h2 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
              Ready to start <span className="text-primary">the chaos?</span>
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-xl text-pretty">
              One link. Five friends. Forty AI-generated cards. The next 12 minutes are going to be
              very loud.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:scale-[0.98] transition-transform"
              >
                Download on App Store
                <span className="font-mono text-xs opacity-80">→</span>
              </a>
              <a
                href="#engine"
                className="inline-flex items-center gap-2 bg-background/10 text-background border border-background/20 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-background/20 transition-colors backdrop-blur-sm"
              >
                See sample decks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
