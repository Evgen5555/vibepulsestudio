import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, Crown, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  title: string;
  text: string;
  icon: LucideIcon;
  tone: "violet" | "cyan";
  wide?: boolean;
};

const items: Item[] = [
  {
    title: "Эксперты & Предприниматели",
    text: "Упаковка сильного личного бренда, стильный сайт и автоматизация прогрева аудитории через умных ботов.",
    icon: Briefcase,
    tone: "violet",
  },
  {
    title: "Онлайн-школы & Инфобизнес",
    text: "Внедрение AI-сотрудников, сквозная автоматизация процессов, CRM и быстрая квалификация входящих лидов.",
    icon: GraduationCap,
    tone: "cyan",
  },
  {
    title: "Бизнес",
    text: "Создание кинематографичного AI-визуала, цифровых аватаров и генерация продающих Reels без трат на студии, моделей и операторов",
    icon: Sparkles,
    tone: "violet",
  },
  {
    title: "Маркетологи ",
    text: "Замена \"ручных\" заявок на интерактивные воронки: автоматический прием, квалификация и прогрев лидов 24/7 без участия человека",
    icon: Crown,
    tone: "cyan",
  },
];

export function TargetAudience() {
  return (
    <section id="audience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-sm text-secondary mb-3">Для кого</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Кому подойдёт{" "}
            <span className="text-gradient-cv">сотрудничество</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            const violet = it.tone === "violet";
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className={`group relative h-full flex flex-col rounded-3xl bg-card/60 border border-border p-6 sm:p-8 overflow-hidden transition-shadow hover:border-transparent ${
                  violet ? "hover:shadow-neon-violet" : "hover:shadow-neon-cyan"
                } ${it.wide ? "md:col-span-2" : ""}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: violet
                      ? "radial-gradient(ellipse at top right, color-mix(in oklab, var(--neon-violet) 18%, transparent), transparent 60%)"
                      : "radial-gradient(ellipse at top right, color-mix(in oklab, var(--neon-cyan) 18%, transparent), transparent 60%)",
                  }}
                />
                <div
                  className={`relative inline-flex items-center justify-center size-12 rounded-2xl border mb-6 ${
                    violet
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "border-secondary/60 bg-secondary/10 text-secondary"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="relative text-xl sm:text-2xl font-semibold tracking-tight">
                  {it.title}
                </h3>
                <p className="relative mt-3 text-sm sm:text-base text-muted-foreground max-w-md flex-1">
                  {it.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
