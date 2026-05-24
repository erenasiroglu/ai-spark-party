import { Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

type LegalPageLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, description, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
        >
          ← Back to home
        </Link>
        <header className="mt-8 mb-12 border-b border-border pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">{title}</h1>
          {description ? (
            <p className="mt-4 text-lg text-foreground/60 text-pretty">{description}</p>
          ) : null}
        </header>
        <article className="prose-legal space-y-6 text-foreground/80 leading-relaxed">{children}</article>
      </main>
      <Footer />
    </div>
  );
}
