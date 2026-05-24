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
      { property: "og:url", content: "https://ai-spark-party.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://ai-spark-party.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Tadado",
          applicationCategory: "GameApplication",
          operatingSystem: "iOS, Android, Web",
          description:
            "Tadado is an AI-powered social word guessing game that generates infinite decks of forbidden-word cards for parties and friend groups.",
          url: "https://ai-spark-party.lovable.app/",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }),
      },
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
