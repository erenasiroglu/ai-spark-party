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
      { title: "Tadado — Free Taboo Game with AI Cards | Tabu Oyunu, Heads Up Alternative" },
      {
        name: "description",
        content:
          "Play the classic taboo game (tabu oyunu) free for a limited time. Classic deck included, expansion decks from $0.99, plus AI that builds custom decks from your own topics. The Heads Up & Nebuu alternative with no ads and no subscription.",
      },
      { property: "og:title", content: "Tadado — Free Taboo Game with AI Cards" },
      {
        property: "og:description",
        content:
          "Free for a limited time. Describe without the forbidden words, beat the clock, and let AI build infinite decks — never play the same round twice.",
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
            "Tadado is an AI-powered taboo-style word guessing game (tabu oyunu) with 8 different decks (Classic, Cinema, Travel, Sports, Midnight Fun, Couples, Marvel) and AI-generated custom decks built from your own topics. Free to download for a limited time. A Heads Up and Nebuu alternative with no ads and no subscription.",
          keywords:
            "free taboo game, taboo game, tabu oyunu, taboo app, heads up alternative, party word game, forbidden words game, AI word game",
          image: `${SITE_URL}/og-image.jpg`,
          url: `${SITE_URL}/`,
          downloadUrl: APP_STORE_URL,
          offers: [
            {
              "@type": "Offer",
              name: "Tadado app — free for a limited time, Classic deck included",
              price: "0",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Expansion decks — Cinema, Travel, Sports, Couples",
              price: "0.99",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Premium decks — Midnight Fun (+18), Marvel",
              price: "1.99",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "AI Credits — 10 AI-generated custom decks",
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
