import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AiEngine } from "@/components/AiEngine";
import { FeatureBento } from "@/components/FeatureBento";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tadado — The AI Word Game for Real-Life Chaos" },
      {
        name: "description",
        content:
          "Tadado is the AI-powered social word game that generates infinite decks for your friend group. Fast rounds. No repeats. Pure chaos.",
      },
      { property: "og:title", content: "Tadado — The AI Word Game for Real-Life Chaos" },
      {
        property: "og:description",
        content:
          "AI-generated party decks for the group chat era. Explain without saying. Laugh until you can't.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <AiEngine />
        <FeatureBento />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
