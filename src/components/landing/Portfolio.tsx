import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  tag: string;
  result: string;
  gradient: string;
};

const projects: Project[] = [
  {
    name: "Aurum Finance",
    tag: "Fintech · Landing",
    result: "Конверсия +24%",
    gradient:
      "radial-gradient(ellipse at 20% 20%, #7a2cff 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, #00d4ff 0%, transparent 60%), linear-gradient(180deg,#0a0a14,#05050b)",
  },
  {
    name: "Nebula AI",
    tag: "SaaS · Автоворонка",
    result: "CAC ниже на 38%",
    gradient:
      "radial-gradient(ellipse at 80% 20%, #ff3ea5 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, #5b8cff 0%, transparent 60%), linear-gradient(180deg,#0a0a14,#05050b)",
  },
  {
    name: "Studio Voltage",
    tag: "Brand · Premium-сайт",
    result: "Заявок ×3.1",
    gradient:
      "radial-gradient(ellipse at 50% 0%, #00ffd1 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, #7a2cff 0%, transparent 60%), linear-gradient(180deg,#0a0a14,#05050b)",
  },
  {
    name: "Helix Health",
    tag: "Wellness · Funnel",
    result: "LTV +52%",
    gradient:
      "radial-gradient(ellipse at 0% 0%, #00d4ff 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, #b066ff 0%, transparent 60%), linear-gradient(180deg,#0a0a14,#05050b)",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p className="text-sm text-secondary mb-3">Портфолио</p>
            <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
              Проекты, где дизайн{" "}
              <span className="text-gradient-cv">приносит деньги</span>.
            </h2>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground"
          >
            Запросить полный кейс-бук <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href="#cta"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card block"
            >
              <div
                className="absolute inset-0 transition-transform duration-[800ms] ease-out group-hover:scale-110"
                style={{ background: p.gradient }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              <div className="absolute top-5 right-5">
                <span className="inline-flex items-center gap-1.5 rounded-full glass border border-border px-3 py-1.5 text-xs text-foreground/80 transition-transform group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-3.5" />
                  Кейс
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">{p.tag}</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-secondary/60 bg-secondary/10 text-secondary px-3 py-1.5 text-xs font-medium shadow-neon-cyan">
                  {p.result}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
