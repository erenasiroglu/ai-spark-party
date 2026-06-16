import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CinematicShowcase } from "@/components/CinematicShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Decks } from "@/components/Decks";
import { AiEngine } from "@/components/AiEngine";
import { Pricing } from "@/components/Pricing";
import { Compare } from "@/components/Compare";
import { FeatureBento } from "@/components/FeatureBento";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { MobileCta } from "@/components/MobileCta";
import { Footer } from "@/components/Footer";
import { APP_STORE_URL, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tadado — Taboo Game with AI Cards | Tabu Oyunu, Heads Up Alternative" },
      {
        name: "description",
        content:
          "Play the classic taboo game (tabu oyunu) with infinite cards: 7 decks unlocked for $0.99 (₺19.99 in Türkiye) plus AI that builds custom decks from your own topics. The Heads Up & Nebuu alternative with no ads and no subscription.",
      },
      { property: "og:title", content: "Tadado — Taboo Game with AI Cards" },
      {
        property: "og:description",
        content:
          "7 taboo decks for $0.99, infinite more with AI. Describe without the forbidden words, beat the clock, never play the same round twice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Tadado: AI Word Game",
          alternateName: ["Tadado Taboo Game", "Tadado Tabu Oyunu", "Tadado AI Word Game 2026"],
          applicationCategory: "GameApplication",
          operatingSystem: "iOS",
          description:
            "Tadado is an AI-powered taboo-style word guessing game (tabu oyunu) with 8 different decks (Classic, Cinema, Travel, Sports, Night Games, Couples, Marvel) and AI-generated custom decks built from your own topics. A Heads Up and Nebuu alternative with no ads and no subscription.",
          keywords:
            "taboo game, tabu oyunu, taboo app, heads up alternative, party word game, forbidden words game, AI word game",
          image: `${SITE_URL}/og-image.jpg`,
          url: `${SITE_URL}/`,
          downloadUrl: APP_STORE_URL,
          offers: [
            {
              "@type": "Offer",
              name: "Tadado app — all decks included",
              price: "0.99",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Tadado Lifetime — unlimited AI deck generation",
              price: "2.99",
              priceCurrency: "USD",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Nav />
      <main>
        <Hero />
        <CinematicShowcase />
        <HowItWorks />
        <Decks />
        <AiEngine />
        <Pricing />
        <Compare />
        <FeatureBento />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <MobileCta />
      <Footer />
    </div>
  );
}
