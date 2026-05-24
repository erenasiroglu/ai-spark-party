import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { APPLE_LINKS, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Tadado" },
      {
        name: "description",
        content: "Terms of Use for Tadado, the AI word guessing party game.",
      },
      { property: "og:title", content: "Terms of Use — Tadado" },
      { property: "og:url", content: `${SITE_URL}/terms-of-use` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms-of-use` }],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      description="Last updated: May 24, 2026"
    >
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Tadado mobile application and website
        operated by Tadado Game Team. By using Tadado, you agree to these Terms.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Eligibility</h2>
        <p>
          You must be at least 16 years old to use Tadado. By using the app, you represent that you meet this age
          requirement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">License</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to use Tadado for personal,
          non-commercial entertainment purposes, subject to these Terms.
        </p>
        <p>
          Your use of the Tadado app is also subject to Apple&apos;s{" "}
          <ExternalLink href={APPLE_LINKS.standardEula}>
            Licensed Application End User License Agreement (Standard EULA)
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href={APPLE_LINKS.mediaServicesTerms}>Apple Media Services Terms and Conditions</ExternalLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">User conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use Tadado for unlawful, harassing, or abusive purposes</li>
          <li>Generate or share content that is hateful, sexually explicit, or harmful to minors</li>
          <li>Attempt to reverse engineer, scrape, or disrupt the service</li>
          <li>Circumvent In-App Purchase or access controls</li>
        </ul>
        <p>
          AI-generated decks may produce unexpected results. You are responsible for content you create and share with
          others during gameplay.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">In-App Purchases</h2>
        <p>
          Tadado offers optional <strong>In-App Purchases</strong> through Apple&apos;s App Store. Available products
          may include <strong>Non-Consumable In-App Purchases</strong> such as theme deck packs and premium unlocks
          (e.g. Tadado Lifetime).
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Payment will be charged to your <strong>Apple ID</strong> account at confirmation of purchase.
          </li>
          <li>
            Non-Consumable In-App Purchases are tied to your Apple ID and can be restored using{" "}
            <strong>Restore Purchases</strong> on any device signed in with the same Apple ID.
          </li>
          <li>Prices are displayed in the App Store before purchase and may vary by region.</li>
          <li>
            All billing, refunds, and purchase disputes are handled by Apple in accordance with Apple&apos;s policies.
          </li>
        </ul>
        <p>
          To restore purchases, see{" "}
          <ExternalLink href={APPLE_LINKS.restorePurchases}>Apple&apos;s restore purchases guide</ExternalLink>. To
          request a refund, visit{" "}
          <ExternalLink href={APPLE_LINKS.requestRefund}>reportaproblem.apple.com</ExternalLink>.
        </p>
        <p className="text-sm text-foreground/60">
          Learn more about In-App Purchases on{" "}
          <ExternalLink href={APPLE_LINKS.inAppPurchase}>Apple Developer — In-App Purchase</ExternalLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Intellectual property</h2>
        <p>
          Tadado, including its name, logo, design, and software, is owned by Tadado Game Team and protected by
          applicable intellectual property laws. You may not copy or redistribute app assets without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Disclaimer</h2>
        <p>
          Tadado is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted service or
          error-free AI-generated content. To the fullest extent permitted by law, we are not liable for indirect or
          consequential damages arising from your use of the app.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Privacy</h2>
        <p>
          Your use of Tadado is also governed by our{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Changes</h2>
        <p>
          We may modify these Terms at any time. Continued use of Tadado after changes are posted constitutes acceptance
          of the updated Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Contact</h2>
        <p>
          Questions about these Terms or In-App Purchases? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
