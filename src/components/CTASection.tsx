import { Zap, Shield, Clock, Headphones, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const badges = [
  { icon: Shield, label: "SSL Secure" },
  { icon: Zap, label: "Fast Withdrawals" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: CheckCircle, label: "No Hidden Fees" },
];

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12 text-center neon-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary">Start Free Today</p>
          <h2 className="mt-2 text-4xl font-bold">Ready to Start Mining?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join thousands of miners earning BNB rewards every day. Create your free account and start your journey now.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-primary px-8 font-display text-lg text-primary-foreground hover:bg-primary/90">
              <Zap className="h-4 w-4" />
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" className="border-border px-8 font-display text-lg text-foreground hover:bg-secondary">
              I have an account
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
