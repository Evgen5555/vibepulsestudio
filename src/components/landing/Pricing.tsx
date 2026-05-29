import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceHint: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: typeof Zap;
};

const plans: Plan[] = [
  {
    id: "start",
    name: "Старт",
    tagline: "Быстрый запуск идеи",
    price: "от 25 000 ₽",
    priceHint: "Срок: 3–7 дней",
    icon: Zap,
    features: [
      "Лендинг или Telegram-бот",
      "AI-копирайт и базовый дизайн",
      "Подключение формы / CRM",
      "Адаптация под мобильные",
      "14 дней техподдержки",
    ],
    cta: "Хочу Старт",
  },
  {
    id: "business",
    name: "Бизнес",
    tagline: "Хит — берут 7 из 10",
    price: "от 80 000 ₽",
    priceHint: "Срок: 10–14 дней",
    icon: Sparkles,
    highlighted: true,
    features: [
      "Сайт + автоворонка + бот",
      "AI-сегментация и прогрев лидов",
      "Интеграция с Telegram / VK / amoCRM",
      "AI-визуал и видео для соцсетей",
      "Аналитика и сквозные метрики",
      "30 дней техподдержки",
    ],
    cta: "Хочу Бизнес",
  },
  {
    id: "turnkey",
    name: "Под ключ",
    tagline: "Полная экосистема",
    price: "от 150 000 ₽",
    priceHint: "Срок: 2–4 недели",
    icon: Crown,
    features: [
      "Сайт + воронки + боты + личный кабинет",
      "Цифровой аватар и AI-видеопродакшн",
      "AI-сотрудник: продажи и поддержка 24/7",
      "Сквозная аналитика и A/B-тесты",
      "Стратегия трафика и масштабирование",
      "60 дней приоритетной поддержки",
    ],
    cta: "Хочу под ключ",
  },
];

export function Pricing() {
  const openTg = (planName: string) => {
    const message = `Привет, Евгения! Интересует пакет «${planName}». Расскажите подробнее.`;
    window.open(`https://t.me/evgeniya5_5?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Пакеты</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Выберите <span className="text-gradient-cv">свой формат</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Прозрачные цены без скрытых платежей. Можно начать со «Старта» и масштабироваться.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            В этом месяце беру только 3 новых проекта
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative rounded-3xl border p-7 sm:p-8 flex flex-col ${
                  plan.highlighted
                    ? "glass border-primary/60 shadow-neon-violet md:-translate-y-3"
                    : "bg-card/40 border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cv text-background text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                    Популярный
                  </div>
                )}

                <div className={`inline-flex items-center justify-center size-12 rounded-2xl border mb-5 ${
                  plan.highlighted
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : "border-secondary/60 bg-secondary/10 text-secondary"
                }`}>
                  <Icon className="size-5" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.tagline}</p>

                <div className="mt-5">
                  <div className="text-3xl font-bold tracking-tight">{plan.price}</div>
                  <p className="text-[11px] text-muted-foreground mt-1">{plan.priceHint}</p>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className={`size-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-secondary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openTg(plan.name)}
                  className={`mt-7 w-full py-3.5 rounded-full text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-cv text-background shadow-neon-violet hover:scale-[1.02]"
                      : "border border-border bg-card/60 text-foreground hover:border-primary"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Не уверены, какой пакет нужен? Пройдите квиз ниже — подберу за 2 минуты.
        </p>
      </div>
    </section>
  );
}
