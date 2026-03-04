import { motion } from "framer-motion";

const stats = [
  { value: "2.5M+", label: "PEPE Mined" },
  { value: "125K+", label: "Active Miners" },
  { value: "50 TH/s", label: "Total Hashrate" },
  { value: "99.9%", label: "Guaranteed Uptime" },
];

const StatsBar = () => {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container py-8">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary neon-text">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
