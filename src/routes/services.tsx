import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Code2, Film, Music, Palette, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — VibePulse studio" },
      { name: "description", content: "Каталог решений VibePulse studio: сайты, автоворонки, боты, AI-дизайн, видео, музыка." },
      { property: "og:title", content: "Услуги — VibePulse studio" },
      { property: "og:description", content: "Полный каталог услуг VibePulse studio." },
    ],
  }),
  component: ServicesPage,
});

type Card = {
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: "violet" | "cyan";
};

const cards: Card[] = [
  { title: "Телеграм - боты", desc: "Автоворонки и ИИ-сотрудники в Телеграм, которые продают и консультируют вместо вас. Без выходных и ошибок.", icon: Bot, tone: "violet" },
  { title: "Вайб - кодинг", desc: "Сайты и приложения: от дизайна до интеграции умных AI-сотрудников. Сборка за 3–7 дней. Мобильные приложения. Игры.", icon: Code2, tone: "cyan" },
  { title: "AI-Дизайн & Аватары", desc: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.", icon: Palette, tone: "violet" },
  { title: "AI Видео & Reels", desc: "Динамичные Shorts, Reels и промо-ролики нового поколения. Кинематографичный ИИ-продакшн и генерация клипов под ключ.", icon: Film, tone: "violet" },
  { title: "AI-Музыка & Песни", desc: "Создание эксклюзивной музыки на любой жизненный случай: для себя, личного блога или в подарок близким с помощью ИИ. Полный цикл.", icon: Music, tone: "cyan" },
  { title: "Запуск под ключ", desc: "Всё в одном месте — от идеи до готового проекта за 2–4 недели. Вам больше не нужно искать отдельно дизайнеров и программистов.", icon: Rocket, tone: "violet" },
];

function ServicesPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link to="/" className="text-sm text-secondary hover:underline">← На главную</Link>

        <h1 className="mt-8 font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(3rem,9vw,7rem)] text-center">
          <span className="text-gradient-cv">Услуги</span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-center text-base sm:text-lg text-muted-foreground">
          Полный каталог решений VibePulse studio — от AI-ботов и автоворонок до сайтов,
          видео, музыки и запуска под ключ.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c) => {
            const Icon = c.icon;
            const violet = c.tone === "violet";
            return (
              <div
                key={c.title}
                className={`group relative h-full flex flex-col rounded-3xl bg-card/60 border border-border p-6 sm:p-8 overflow-hidden transition-shadow hover:border-transparent ${
                  violet ? "hover:shadow-neon-violet" : "hover:shadow-neon-cyan"
                }`}
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
                <h3 className="relative text-xl sm:text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="relative mt-3 text-sm sm:text-base text-muted-foreground max-w-md flex-1">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
