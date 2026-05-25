import { motion } from "framer-motion";
import { Bot, Code2, Film, Music, Palette, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

const MotionLink = motion(Link);

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
    className: "",
  },
  {
    title: "Вайб - кодинг",
    desc: "Сайты и приложения: от дизайна до интеграции умных AI-сотрудников. Сборка за 3–7 дней. Мобильные приложения. Игры.",
    icon: Code2,
    tone: "cyan",
    className: "",
  },
  {
    title: "AI-Дизайн & Аватары",
    desc: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.",
    icon: Palette,
    tone: "violet",
    className: "",
  },
  {
    title: "AI Видео & Reels",
    desc: "Динамичные Shorts, Reels и промо-ролики нового поколения. Кинематографичный ИИ-продакшн и генерация клипов под ключ.",
    icon: Film,
    tone: "violet",
    className: "",
  },
  {
    title: "AI-Музыка & Песни",
    desc: "Создание эксклюзивной музыки на любой жизненный случай: для себя, личного блога или в подарок близким с помощью ИИ. Полный цикл.",
    icon: Music,
    tone: "cyan",
    className: "",
  },
  {
    title: "Запуск под ключ",
    desc: "Всё в одном месте — от идеи до готового проекта за 2–4 недели. Вам больше не нужно искать отдельно дизайнеров и программистов.",
    icon: Rocket,
    tone: "violet",
    className: "",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-secondary mb-3 text-center uppercase tracking-widest text-lg">Услуги</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            <span className="text-gradient-cv">Делаю результат</span>
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
                className={`group relative h-full flex flex-col rounded-3xl bg-card/60 border border-border p-6 sm:p-8 overflow-hidden transition-shadow hover:border-transparent ${
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
                <p className="relative mt-3 text-sm sm:text-base text-muted-foreground max-w-md flex-1">
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

export function ServicesTeaser() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Услуги</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            <span className="text-gradient-cv">Делаю результат</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] p-8 sm:p-14 border border-white/10"
          style={{
            background:
              "linear-gradient(90deg, #6b21a8 0%, #1e3a8a 25%, #0f766e 50%, #1e3a8a 75%, #be185d 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[28rem] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <p className="max-w-3xl text-white text-lg sm:text-2xl font-medium leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
              Высокоскоростной вайб - кодинг: запускаю сложные системы от{" "}
              <span className="font-bold">5 дней</span> вместо{" "}
              <span className="font-bold">2 месяцев</span> нудных согласований.
            </p>

            <MotionLink
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-8 py-4 text-sm sm:text-base font-bold shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_50px_rgba(0,0,0,0.45)] transition-shadow"
            >
              Каталог решений VibePulse studio →
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
