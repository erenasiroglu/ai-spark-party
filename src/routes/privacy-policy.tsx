import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { APPLE_LINKS, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tadado" },
      {
        name: "description",
        content: "Privacy Policy for Tadado, the AI word guessing party game.",
      },
      { property: "og:title", content: "Privacy Policy — Tadado" },
      { property: "og:url", content: `${SITE_URL}/privacy-policy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Last updated: May 24, 2026"
    >
      <p>
        Tadado Game Team (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the Tadado mobile application and website at{" "}
        <a href={SITE_URL} className="text-primary hover:underline">
          {SITE_URL}
        </a>
        . This Privacy Policy explains how we handle information when you use our services.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Information we collect</h2>
        <p>
          According to our current App Store privacy disclosure, <strong>Tadado does not collect personal data</strong>{" "}
          from users through the app. We do not require account registration for core gameplay.
        </p>
        <p>
          If you contact us by email for support, we receive the information you choose to provide (such as your email
          address and message content) solely to respond to your inquiry.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">In-App Purchases</h2>
        <p>
          Tadado offers optional <strong>In-App Purchases</strong> processed entirely by Apple through the App Store
          using StoreKit. We do not receive or store your payment card details, billing address, or full transaction
          records.
        </p>
        <p>
          Apple may collect purchase and device information in connection with In-App Purchases as described in{" "}
          <ExternalLink href={APPLE_LINKS.privacyPolicy}>Apple&apos;s Privacy Policy</ExternalLink> and{" "}
          <ExternalLink href={APPLE_LINKS.mediaServicesTerms}>Apple Media Services Terms and Conditions</ExternalLink>.
          Purchase history is tied to your Apple ID.
        </p>
        <p>
          To restore Non-Consumable In-App Purchases on a new device, use <strong>Restore Purchases</strong> in the
          app settings while signed in with the same Apple ID.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">AI-generated content</h2>
        <p>
          When you create custom decks using AI features, prompts you enter are used to generate game content. We design
          our systems to minimize retention of prompt data where possible. Do not enter sensitive personal information
          into prompts.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Third-party services</h2>
        <p>
          Our app uses Apple system frameworks and services required for app distribution, In-App Purchases (StoreKit),
          and device functionality. These services are governed by Apple&apos;s policies, including the{" "}
          <ExternalLink href={APPLE_LINKS.standardEula}>Licensed Application End User License Agreement (EULA)</ExternalLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Children&apos;s privacy</h2>
        <p>
          Tadado is rated 16+ and is not directed at children under 16. We do not knowingly collect information from
          children.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the revised policy on this page and update
          the &quot;Last updated&quot; date above.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Contact</h2>
        <p>
          Questions about this Privacy Policy? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
