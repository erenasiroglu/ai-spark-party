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
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative px-8 py-24 md:py-32 md:px-16 text-foreground">
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/60">
             Press start
            </span>
            <h2 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
              Tonight's game night, <span className="text-primary">sorted for $0.99.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl text-pretty">
              Seven decks, AI that builds infinite more, and one phone passed around the table. The
              next 12 minutes are going to be very loud.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-bold hover:scale-[0.98] transition-transform shadow-[0_8px_40px_-8px] shadow-primary/50"
              >
                Download on App Store $0.99
              </a>
              <a
                href="#decks"
                className="inline-flex items-center gap-2 bg-white/10 text-foreground border border-white/20 px-7 py-4 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                See the decks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
