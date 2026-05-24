import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { APP_STORE_URL, APPLE_LINKS, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title: "Marketing — Tadado" },
      {
        name: "description",
        content:
          "Official marketing information for Tadado — the AI-powered word guessing party game for friends.",
      },
      { property: "og:title", content: "Marketing — Tadado" },
      { property: "og:url", content: `${SITE_URL}/marketing` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/marketing` }],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <LegalPageLayout
      title="Marketing"
      description="Official product information for press, partners, and app store listings."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Product overview</h2>
        <p>
          <strong>Tadado</strong> is an AI-powered social word guessing game designed for parties, game nights, and
          friend groups. Players describe a target word without using forbidden clues while teammates race to guess
          correctly.
        </p>
        <p>
          Unlike static card games, Tadado generates infinite custom decks from any theme — inside jokes, fandoms,
          office gossip, or niche topics — in seconds.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Key features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>AI-generated decks tailored to any prompt or vibe</li>
          <li>Fast 60-second rounds built for social play</li>
          <li>Mobile-first design — one tap to join, no account required for basic play</li>
          <li>Optional theme deck packs and premium unlocks via In-App Purchase (Non-Consumable)</li>
          <li>Designed for groups of friends, parties, and remote hangouts</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Target audience</h2>
        <p>
          Tadado is rated 16+ and built for young adults and social groups who enjoy party games, word games, and
          AI-assisted creative play. Ideal for friend groups, birthdays, dinners, and casual game nights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">In-App Purchases</h2>
        <p>
          Tadado is free to download with optional In-App Purchases on the App Store, including Non-Consumable deck
          packs and premium content. Payment is charged to the user&apos;s Apple ID at confirmation of purchase.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Download</h2>
        <p>
          Tadado is available on iOS.{" "}
          <a href={APP_STORE_URL} className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            Download on the App Store
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Contact</h2>
        <p>
          For press kits, partnership inquiries, or brand usage requests, contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . For In-App Purchase support, see our{" "}
          <a href="/support" className="text-primary hover:underline">
            Support page
          </a>{" "}
          or{" "}
          <a href={APPLE_LINKS.billingSupport} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Apple Billing Support
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
