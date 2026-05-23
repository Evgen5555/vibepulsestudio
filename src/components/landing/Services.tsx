import { motion } from "framer-motion";
import { Bot, LineChart, Palette, Rocket, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: "violet" | "cyan";
  className: string;
};

const cards: Card[] = [
  {
    title: "Телеграм - боты",
    desc: "Автоворонки и ИИ-сотрудники в Телеграм, которые продают и консультируют вместо вас. Без выходных и ошибок.",
    icon: Bot,
    tone: "violet",
    className: "md:col-span-2",
  },
  {
    title: "Вайб - кодинг",
    desc: "Сайты и приложения: от дизайна до интеграции умных AI-сотрудников. Сборка за 3–7 дней.",
    icon: Workflow,
    tone: "cyan",
    className: "",
  },
  {
    title: "AI-Дизайн & Визуал & Аватары",
    desc: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты и концептуальные образы для экспертов",
    icon: Palette,
    tone: "cyan",
    className: "",
  },
  {
    title: "AI Видео & Клипы & Reels",
    desc: "Динамичные Shorts, Reels и промо-ролики нового поколения. Кинематографичный ИИ-продакшн и генерация клипов под ключ.",
    icon: LineChart,
    tone: "violet",
    className: "",
  },
  {
    title: "Запуск под ключ",
    desc: "Всё в одном месте — от идеи до готового проекта за 2–4 недели. Вам больше не нужно искать отдельно дизайнеров, копирайтеров и программистов.",
    icon: Rocket,
    tone: "violet",
    className: "md:col-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm text-secondary mb-3">Услуги · Философия</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Не «делать сайт». <br />
            <span className="text-gradient-cv">Делать результат</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const violet = c.tone === "violet";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-3xl bg-card/60 border border-border p-6 sm:p-8 overflow-hidden transition-shadow hover:border-transparent ${
                  violet ? "hover:shadow-neon-violet" : "hover:shadow-neon-cyan"
                } ${c.className}`}
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
                  {c.title}
                </h3>
                <p className="relative mt-3 text-sm sm:text-base text-muted-foreground max-w-md">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
