import { Zap, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pepeMiner from "@/assets/pepe-miner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 radial-gradient-bg grid-pattern">
      {/* Concentric circles decoration */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4">
        {[400, 550, 700].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/10"
            style={{
              width: size,
              height: size,
              top: `calc(50% - ${size / 2}px)`,
              left: `calc(50% - ${size / 2}px)`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center gap-12 py-20 lg:flex-row lg:gap-8">
        {/* Left content */}
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
            <Zap className="h-3.5 w-3.5" />
            24/7 Mining Active
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Mine <span className="neon-text text-primary">BNB</span>
            <br />
            In The Cloud
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            The most powerful cloud mining platform.{" "}
            <span className="text-primary">No hardware</span>, no hassle. Start earning{" "}
            <span className="font-semibold text-foreground">BNB</span> right now.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2 bg-primary px-8 font-display text-lg text-primary-foreground hover:bg-primary/90 neon-border" asChild>
              <Link to="/login"><Zap className="h-4 w-4" /> START MINING FREE</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border px-8 font-display text-lg text-foreground hover:bg-secondary" asChild>
              <Link to="/login">Sign In <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </motion.div>

        {/* Right content - Pepe image */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative mx-auto max-w-lg">
            <img
              src={pepeMiner}
              alt="Pepe Miner Robot"
              className="relative z-10 w-full rounded-2xl"
            />

            {/* Floating badge - Mining Active */}
            <motion.div
              className="absolute -right-4 top-8 z-20 rounded-xl border border-primary/30 bg-card/90 px-4 py-2 backdrop-blur-sm neon-border"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
                <span className="text-sm font-semibold text-primary">Mining Active</span>
              </div>
              <span className="text-xs text-muted-foreground">+0.25 BNB/day</span>
            </motion.div>

            {/* Floating badge - Hashrate */}
            <motion.div
              className="absolute -left-4 bottom-24 z-20 rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur-sm"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Current Hashrate</span>
              </div>
              <span className="text-lg font-bold text-primary">1.25 TH/s</span>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-3/5 rounded-full bg-primary" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
