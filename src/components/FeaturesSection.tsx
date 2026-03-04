import { Zap, Shield, Globe, Wallet, Cpu, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, badge: "Fast", title: "Instant Setup", desc: "Start mining in minutes. No hardware or technical knowledge required." },
  { icon: Shield, badge: "Secure", title: "Secure & Reliable", desc: "Bank-level security with advanced encryption and 99.9% uptime." },
  { icon: Globe, badge: "Global", title: "Global Access", desc: "Mine from anywhere in the world with globally distributed servers." },
  { icon: Wallet, badge: "Daily", title: "Daily Payouts", desc: "Receive your BNB rewards daily. Instant withdrawal available." },
  { icon: Cpu, badge: "Premium", title: "Premium Hardware", desc: "State-of-the-art equipment optimized for maximum energy efficiency." },
  { icon: Users, badge: "5% Bonus", title: "Affiliate Program", desc: "Earn 5% bonus on every referral. Grow your network and earn more." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary">Why choose BNBMine?</p>
          <h2 className="mt-2 text-4xl font-bold">Powerful Features</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our platform offers the most efficient and secure way to mine BNB without the hassle of managing physical hardware.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:neon-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {f.badge}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-primary">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-primary" />
                Active now
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
