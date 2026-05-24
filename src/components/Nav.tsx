import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="size-3 bg-white rounded-full animate-pulse" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter">TADADO</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/50">
          <a href="#game" className="hover:text-foreground transition-colors">The Game</a>
          <a href="#engine" className="hover:text-foreground transition-colors">AI Engine</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        </div>
        <a
          href="#play"
          className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
        >
          Play Now
        </a>
      </div>
    </nav>
  );
}
