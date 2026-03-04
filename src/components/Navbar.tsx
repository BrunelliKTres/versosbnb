import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="font-display text-lg font-bold text-foreground">PEPEMINE</span>
            <span className="block text-[10px] leading-none text-muted-foreground">Cloud Mining</span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button size="sm" className="gap-1.5 bg-primary font-display text-primary-foreground hover:bg-primary/90 neon-border">
            <Zap className="h-3.5 w-3.5" />
            START FREE
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
