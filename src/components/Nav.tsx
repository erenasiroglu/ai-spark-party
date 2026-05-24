import { Link } from "@tanstack/react-router";
import tadoHeader from "@/assets/tado-header.png";
import { APP_STORE_URL } from "@/lib/site";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={tadoHeader} alt="Tadado" className="size-8 object-contain" />
          <span className="font-extrabold text-xl tracking-tighter">TADADO</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/50">
          <a href="#game" className="hover:text-foreground transition-colors">The Game</a>
          <a href="#engine" className="hover:text-foreground transition-colors">AI Engine</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
        >
          Download on App Store
        </a>
      </div>
    </nav>
  );
}
