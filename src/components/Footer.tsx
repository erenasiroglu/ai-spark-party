import { Link } from "@tanstack/react-router";
import tadoHeader from "@/assets/tado-header.png";

export function Footer() {
  return (
    <footer className="pt-24 pb-40 md:pb-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 w-fit">
            <img src={tadoHeader} alt="Tadado" className="size-6 object-contain" />
            <span className="font-extrabold text-lg tracking-tighter uppercase">Tadado</span>
          </Link>
          <p className="text-foreground/50 text-sm max-w-xs">
            The AI word game with infinite decks. Free to download for a limited time — no ads, no
            subscription, decks from $0.99.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-foreground/50">
            <li><a href="/#game" className="hover:text-primary transition-colors">How to Play</a></li>
            <li><a href="/#decks" className="hover:text-primary transition-colors">Decks</a></li>
            <li><a href="/#engine" className="hover:text-primary transition-colors">AI Engine</a></li>
            <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-foreground/50">
            <li><Link to="/marketing" className="hover:text-primary transition-colors">Marketing</Link></li>
            <li><Link to="/support" className="hover:text-primary transition-colors">Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-24 pt-8 border-t border-border flex flex-wrap gap-4 justify-between items-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/50">
          © 2026 Tadado AI Inc.
        </span>
        <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-foreground/50">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
