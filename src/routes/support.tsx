import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { APP_STORE_URL, APPLE_LINKS, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Tadado" },
      {
        name: "description",
        content: "Get help with Tadado, the AI word guessing party game. Contact support, FAQs, and In-App Purchase help.",
      },
      { property: "og:title", content: "Support — Tadado" },
      { property: "og:url", content: `${SITE_URL}/support` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/support` }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <LegalPageLayout
      title="Support"
      description="Need help with Tadado? We're here for gameplay questions, In-App Purchases, and feedback."
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Contact us</h2>
        <p>
          Email our team at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-medium hover:underline">
            {SUPPORT_EMAIL}
          </a>
          . We typically respond within 2–3 business days.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground">How do I download Tadado?</h3>
            <p className="mt-2">
              Tadado is available on the{" "}
              <ExternalLink href={APP_STORE_URL}>App Store</ExternalLink>. Search for &quot;Tadado: AI Word
              Guessing Game&quot; or use the download link on our homepage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">How does AI deck generation work?</h3>
            <p className="mt-2">
              Enter a theme or prompt and Tadado generates a custom deck of words with forbidden clues. Each deck is
              unique to your prompt and group.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">How do I restore my In-App Purchases?</h3>
            <p className="mt-2">
              Open Tadado, go to Settings, and tap <strong>Restore Purchases</strong>. You must be signed in with the
              same Apple ID used for the original purchase. For step-by-step help, see Apple&apos;s guide on{" "}
              <ExternalLink href={APPLE_LINKS.restorePurchases}>restoring purchases</ExternalLink>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">How do I request a refund for an In-App Purchase?</h3>
            <p className="mt-2">
              All In-App Purchases are billed to your Apple ID through Apple. Tadado does not process payments
              directly. To request a refund, visit{" "}
              <ExternalLink href={APPLE_LINKS.requestRefund}>reportaproblem.apple.com</ExternalLink> or see{" "}
              <ExternalLink href={APPLE_LINKS.billingSupport}>Apple Billing Support</ExternalLink>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Does Family Sharing work with my purchases?</h3>
            <p className="mt-2">
              Some In-App Purchases and subscriptions may be shareable with your family group when Family Sharing is
              enabled. See Apple&apos;s{" "}
              <ExternalLink href={APPLE_LINKS.familySharing}>Family Sharing</ExternalLink> documentation for details.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">How do I report inappropriate user-generated content?</h3>
            <p className="mt-2">
              If you encounter content that violates our community guidelines, email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                {SUPPORT_EMAIL}
              </a>{" "}
              with a description and screenshot if possible. We review all reports promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">In-App Purchase help</h2>
        <p>Tadado offers optional In-App Purchases through Apple&apos;s App Store, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Non-Consumable In-App Purchases</strong> — deck packs and premium content that unlock permanently
            on your Apple ID (e.g. theme decks)
          </li>
          <li>
            <strong>Consumable In-App Purchases</strong> — AI Credits used to generate custom decks (e.g. 10 credits
            for $2.99). Credits never expire once purchased.
          </li>
        </ul>
        <p className="text-sm text-foreground/60">
          Payment is charged to your Apple ID account at confirmation of purchase. Prices may vary by region and are
          displayed in the App Store before you confirm.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <ExternalLink href={APPLE_LINKS.restorePurchases}>Restore Purchases — Apple Support</ExternalLink>
          </li>
          <li>
            <ExternalLink href={APPLE_LINKS.requestRefund}>Request a Refund — reportaproblem.apple.com</ExternalLink>
          </li>
          <li>
            <ExternalLink href={APPLE_LINKS.billingSupport}>Apple Billing Support</ExternalLink>
          </li>
          <li>
            <ExternalLink href={APPLE_LINKS.mediaServicesTerms}>Apple Media Services Terms and Conditions</ExternalLink>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">App information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Platform: iOS (iPhone & iPad)</li>
          <li>Minimum iOS version: 15.1</li>
          <li>Developer: Tadado Game Team</li>
          <li>Contains In-App Purchases</li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
