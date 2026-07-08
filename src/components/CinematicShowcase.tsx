import { PhoneShot } from "./PhoneShot";
import { useHorizontalRail } from "@/hooks/useCinematic";
import homeShot from "@/assets/shot-1128.jpg";
import redShot from "@/assets/shot-1120.jpg";
import goldShot from "@/assets/shot-1124.jpg";
import aiShot from "@/assets/shot-1113.jpg";

const SCENES = [
  {
    n: "01",
    title: "Pick a deck.",
    body: "Start free with Classic, then collect Travel, Cinema, Marvel and more — each one bought once, yours forever.",
    src: homeShot,
    alt: "Tadado deck selection screen with Classic and Travel decks",
    tone: "text-primary",
  },
  {
    n: "02",
    title: "Dodge the forbidden words.",
    body: "AMONG US: without saying Impostor, Sus, Red, Vent or Crewmate. Good luck keeping a straight face.",
    src: redShot,
    alt: "Tadado round — AMONG US card with five forbidden words",
    tone: "text-accent",
  },
  {
    n: "03",
    title: "Race the clock.",
    body: "60 seconds, one phone, two screaming teams. Pass, buzz forbidden words, stack the score.",
    src: goldShot,
    alt: "Tadado round — GRAND CANYON card with timer running",
    tone: "text-primary",
  },
  {
    n: "04",
    title: "Then build your own.",
    body: "Describe the deck in a sentence, tap quick picks, or use a single word — the smarter AI engine turns it into a full playable deck.",
    src: aiShot,
    alt: "Tadado Create with AI — describe your deck in sentences, quick picks or single words",
    tone: "text-primary",
  },
];

export function CinematicShowcase() {
  const { sectionRef, trackRef } = useHorizontalRail();
  return (
    <section ref={sectionRef} id="showcase" className="relative h-[360vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 mb-10 flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
            One round, <span className="text-primary">frame by frame.</span>
          </h2>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
           Keep scrolling
          </span>
        </div>
        <div
          ref={trackRef}
          className="flex items-stretch gap-8 md:gap-16 pl-6 md:pl-[8vw] pr-[9vw] md:pr-[33vw] will-change-transform"
        >
          {SCENES.map((scene) => (
            <article
              key={scene.n}
              className="flex-none w-[82vw] sm:w-[28rem] md:w-[34rem] grid grid-cols-[1fr_auto] gap-6 md:gap-10 items-center rounded-[2.5rem] border border-border bg-surface/60 backdrop-blur-sm p-7 md:p-10"
            >
              <div className="min-w-0">
                <span className={`font-mono text-sm font-bold ${scene.tone}`}>{scene.n}</span>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tighter mt-3 mb-4 text-balance">
                  {scene.title}
                </h3>
                <p className="text-foreground/60 text-sm md:text-base text-pretty">{scene.body}</p>
              </div>
              <PhoneShot
                src={scene.src}
                alt={scene.alt}
                className="w-28 sm:w-36 md:w-44 animate-float-slow"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
