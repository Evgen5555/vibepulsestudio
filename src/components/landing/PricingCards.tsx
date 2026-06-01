import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Globe,
  Target,
  Bot,
  Sparkles,
  Palette,
  Link2,
  Wrench,
  Plus,
  BarChart3,
  Check,
  type LucideIcon,
} from "lucide-react";

type Card = {
  id: string;
  title: string;
  short: string;
  full: string;
  price: string;
  duration: string;
  features: string[];
  icon: LucideIcon;
  tone: "violet" | "cyan";
};

const cards: Card[] = [
  {
    id: "vizitka",
    title: "Вайб - кодинг",
    short: "От одностраничного сайта до интернет магазина. Приложения. Игры.",
    full: "Разработка любых веб-решений: от лендингов и интернет-магазинов до сложных веб-приложений и игр.",
    price: "от 20 000 ₽",
    duration: "от 5 дней",
    features: [
      "Разработка веб-интерфейсов",
      "Сборка архитектуры",
      "Адаптив под мобильные устройства",
      "Базовая SEO-оптимизация",
      "Форма заявки на ваш Telegram",
    ],
    icon: Globe,
    tone: "cyan",
  },
  {
    id: "quiz",
    title: "AI автоворонки",
    short: "Интерактивный опросник, который квалифицирует клиента и собирает…",
    full: "Интерактивный опросник, который квалифицирует клиента и собирает контакты прямо в Telegram.",
    price: "5 000 ₽",
    duration: "1–2 дня",
    features: [
      "Анализ ниши и аудитории",
      "Контент план",
      "Лид магнит",
      "Автоворонки",
      "Полный AI аудит",
    ],
    icon: Target,
    tone: "violet",
  },
  {
    id: "tg-bot",
    title: "Умный Telegram-бот",
    short: "Бот, который возьмет на себя общение с клиентами: примет заявку, ответит на частые вопросы и сам соберет контакты.",
    full: "Бот, который возьмет на себя общение с клиентами: примет заявку, ответит на частые вопросы и сам соберет контакты.",
    price: "от 8 000 ₽",
    duration: "3–5 дней",
    features: [
      "Автоматический прием и обработка заявок",
      "Ответы на частые вопросы (FAQ) без твоего участия",
      "Мгновенные уведомления о новых клиентах тебе в Telegram",
      "Сбор и выгрузка базы контактов клиентов",
      "Любые пожелания по ботам",
    ],
    icon: Bot,
    tone: "cyan",
  },
  {
    id: "ai-consult",
    title: "AI-консультант 24/7",
    short: "Обученный AI-помощник, автоматический прием, квалификация и прогрев лидов 24/7",
    full: "Обученный AI-помощник, автоматический прием, квалификация и прогрев лидов 24/7",
    price: "от 20 000 ₽",
    duration: "3–5 дней",
    features: [
      "Проектирование логики и промптов для AI-агентов",
      "Интеграция в сайт или Telegram",
      "Сценарии продаж и поддержки",
      "Перевод вопросов на менеджера",
      "Разработка любой сложности",
    ],
    icon: Sparkles,
    tone: "violet",
  },
  {
    id: "designers",
    title: "AI-Дизайн & Аватары",
    short: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.",
    full: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.",
    price: "от 3 000 ₽",
    duration: "от 1 дня",
    features: [
      "Генерация продающих Reels / Shorts без трат на студии",
      "Разработка и настройка твоего цифрового двойника",
      "Пошаговые понятные инструкции для работы",
      "Полный адаптив под мобильные устройства",
    ],
    icon: Palette,
    tone: "violet",
  },
  {
    id: "domain",
    title: "Подключение к вашему домену",
    short: "Подключение домена и хостинга — сайт работает на вашем адресе.",
    full: "Покупаете домен и хостинг и сайт работает на вашем адресе.",
    price: "3 000 ₽",
    duration: "от 1 дня",
    features: [
      "Регистрация/привязка домена",
      "Настройка DNS и SSL",
      "Перенос сайта на хостинг",
      "Проверка работоспособности",
    ],
    icon: Link2,
    tone: "cyan",
  },
  {
    id: "support",
    title: "Техподдержка (месяц)",
    short: "Мелкие правки, обновления контента, мониторинг работоспособности.",
    full: "Мелкие правки, обновления контента, мониторинг работоспособности сайта в течение месяца.",
    price: "3 000 ₽ / мес",
    duration: "по запросу",
    features: [
      "До 2 часов правок в месяц",
      "Обновление текстов и картинок",
      "Мониторинг доступности",
      "Резервные копии",
    ],
    icon: Wrench,
    tone: "violet",
  },
  {
    id: "block",
    title: "Добавление блока",
    short: "Дополнительный смысловой блок на сайт (отзывы, кейс, тариф и т.д.).",
    full: "Дополнительный смысловой блок на сайт: отзывы, кейс, новый тариф и т.д.",
    price: "2 000 ₽ + стоимость блока",
    duration: "1–2 дня",
    features: [
      "Дизайн в стиле сайта",
      "Полный адаптив под мобильные устройства",
      "Контент по вашему ТЗ",
      "Интеграция в существующий лендинг",
    ],
    icon: Plus,
    tone: "cyan",
  },
  {
    id: "strategy",
    title: "Стратегия + контент-план",
    short: "Карта смыслов для сайта и контент-план на месяц вперёд.",
    full: "Карта смыслов для сайта и контент-план на месяц вперёд: что писать, где и зачем.",
    price: "5 000 ₽",
    duration: "2–3 дня",
    features: [
      "Анализ ниши и аудитории",
      "Карта смыслов сайта",
      "Контент-план на 30 дней",
      "Рекомендации по площадкам",
    ],
    icon: BarChart3,
    tone: "violet",
  },
];

export function PricingCards() {
  const [active, setActive] = useState<Card | null>(null);

  const openTg = (title: string) => {
    const message = `Привет, Евгения! Хочу заказать «${title}».`;
    window.open(`https://t.me/evgeniya5_5?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services-cards" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Услуги и цены</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Выберите <span className="text-gradient-cv">свой формат</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Нажмите на карточку, чтобы посмотреть, что входит в услугу.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const violet = c.tone === "violet";
            return (
              <motion.button
                key={c.id}
                type="button"
                onClick={() => setActive(c)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`group relative text-left rounded-3xl bg-card/60 border border-border p-6 sm:p-7 overflow-hidden transition-all hover:border-transparent hover:-translate-y-1 ${
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

                <div className="relative flex items-start justify-between mb-5">
                  <div
                    className={`inline-flex items-center justify-center size-12 rounded-2xl border ${
                      violet
                        ? "border-primary/60 bg-primary/10 text-primary shadow-neon-violet"
                        : "border-secondary/60 bg-secondary/10 text-secondary shadow-neon-cyan"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1 bg-background/40">
                    {c.duration}
                  </span>
                </div>

                <h3 className="relative text-lg sm:text-xl font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground line-clamp-2">
                  {c.short}
                </p>

                <div className="relative mt-6 flex items-center justify-between">
                  <span className="text-base sm:text-lg font-bold text-foreground">{c.price}</span>
                  <span
                    className={`text-xs font-semibold ${
                      violet ? "text-primary" : "text-secondary"
                    } group-hover:translate-x-0.5 transition-transform`}
                  >
                    Подробнее →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass border-border rounded-3xl max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div
                    className={`inline-flex items-center justify-center size-12 rounded-2xl border ${
                      active.tone === "violet"
                        ? "border-primary/60 bg-primary/10 text-primary shadow-neon-violet"
                        : "border-secondary/60 bg-secondary/10 text-secondary shadow-neon-cyan"
                    }`}
                  >
                    <active.icon className="size-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl tracking-tight">{active.title}</DialogTitle>
                    <p className="text-xs text-muted-foreground mt-0.5">Срок: {active.duration}</p>
                  </div>
                </div>
                <DialogDescription className="pt-3 text-foreground/80 text-sm">
                  {active.full}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                  что входит
                </p>
                <ul className="space-y-2.5">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check
                        className={`size-4 mt-0.5 flex-shrink-0 ${
                          active.tone === "violet" ? "text-primary" : "text-secondary"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                <span className="text-2xl font-bold tracking-tight">{active.price}</span>
                <button
                  type="button"
                  onClick={() => openTg(active.title)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    active.tone === "violet"
                      ? "bg-gradient-cv text-background shadow-neon-violet hover:scale-[1.03]"
                      : "bg-secondary text-background hover:scale-[1.03] shadow-neon-cyan"
                  }`}
                >
                  Заказать
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default PricingCards;
