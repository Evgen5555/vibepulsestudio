import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Code,
  Palette,
  Video,
  Music,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Clock,
  Send,
} from "lucide-react";

type ServiceId = "bot" | "code" | "design" | "video" | "music" | "turnkey";

interface Service {
  id: ServiceId;
  title: string;
  myPrice: number;
  marketPrice: number;
  timeSaving: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "bot",
    title: "Телеграм-боты и автоворонки",
    myPrice: 15000,
    marketPrice: 80000,
    timeSaving: "24/7 обработка лидов без менеджера",
    icon: <Bot className="w-5 h-5 text-primary" />,
  },
  {
    id: "code",
    title: "Вайб-кодинг (сайты и приложения)",
    myPrice: 50000,
    marketPrice: 120000,
    timeSaving: "Сборка за 3–7 дней вместо месяца",
    icon: <Code className="w-5 h-5 text-secondary" />,
  },
  {
    id: "design",
    title: "AI-дизайн и цифровые аватары",
    myPrice: 25000,
    marketPrice: 90000,
    timeSaving: "Премиум-визуал без фотостудий",
    icon: <Palette className="w-5 h-5 text-primary" />,
  },
  {
    id: "video",
    title: "AI-видео и промо Reels",
    myPrice: 20000,
    marketPrice: 90000,
    timeSaving: "Кинематографичный ИИ-продакшн в клик",
    icon: <Video className="w-5 h-5 text-secondary" />,
  },
  {
    id: "music",
    title: "AI-музыка и эксклюзивные треки",
    myPrice: 8000,
    marketPrice: 45000,
    timeSaving: "Уникальный саундтрек без авторских прав",
    icon: <Music className="w-5 h-5 text-primary" />,
  },
  {
    id: "turnkey",
    title: "Запуск под ключ (все системы)",
    myPrice: 150000,
    marketPrice: 450000,
    timeSaving: "Готовый бизнес-проект за 2–4 недели",
    icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
  },
];

const fmt = (n: number) => n.toLocaleString("ru-RU");

export function RoiCalculator() {
  const [selected, setSelected] = useState<ServiceId[]>([]);

  const toggle = (id: ServiceId) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );

  const totalMy = selected.reduce(
    (sum, id) => sum + (services.find((s) => s.id === id)?.myPrice ?? 0),
    0,
  );
  const totalMarket = selected.reduce(
    (sum, id) => sum + (services.find((s) => s.id === id)?.marketPrice ?? 0),
    0,
  );
  const economy = totalMarket - totalMy;

  return (
    <section id="calculator" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            Калькулятор эффективности
          </span>
          <h2 className="font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] mt-5">
            Посчитайте вашу{" "}
            <span className="text-gradient-cv">выгоду и скорость</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Выберите AI-инструменты и увидите разницу между классической студией
            и высокоскоростным вайбкодингом.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] font-bold uppercase text-muted-foreground tracking-[0.2em]">
              Выберите необходимые услуги:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => {
                const isSelected = selected.includes(service.id);
                return (
                  <motion.button
                    key={service.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggle(service.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-40 ${
                      isSelected
                        ? "glass border-primary/60 shadow-neon-violet text-foreground"
                        : "bg-card/40 border-border hover:border-border/80 text-foreground/90"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <div className="p-2.5 rounded-xl bg-background/60 border border-border">
                        {service.icon}
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-1.5 h-1.5 bg-background rounded-full" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold leading-snug line-clamp-1">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-secondary flex-shrink-0" />
                        <span className="truncate">{service.timeSaving}</span>
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass border border-border rounded-3xl p-6 md:p-8 shadow-neon-violet relative overflow-hidden sticky top-24">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Аналитика вашего бюджета
              </h3>

              {selected.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-border rounded-2xl bg-background/20">
                  <p className="text-sm text-muted-foreground px-4">
                    Вы ещё не выбрали ни одной услуги. Кликните на карточки
                    слева, чтобы рассчитать окупаемость.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {selected.map((id) => {
                      const s = services.find((x) => x.id === id);
                      if (!s) return null;
                      const r = (s.myPrice / s.marketPrice) * 100;
                      return (
                        <motion.div
                          key={id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-2 pb-4 border-b border-border/40 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-2">
                            {s.icon}
                            <h4 className="text-xs font-semibold leading-snug flex-1">
                              {s.title}
                            </h4>
                          </div>
                          <div>
                            <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                              <span>Агентство</span>
                              <span className="line-through">от {fmt(s.marketPrice)} ₽</span>
                            </div>
                            <div className="w-full h-1.5 bg-background/60 rounded-full overflow-hidden">
                              <div className="h-full bg-muted rounded-full w-full" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[11px] font-semibold text-secondary mb-1">
                              <span>Vibecoding</span>
                              <span className="text-foreground font-bold">от {fmt(s.myPrice)} ₽</span>
                            </div>
                            <div className="w-full h-1.5 bg-background/60 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${r}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full bg-gradient-cv rounded-full"
                              />
                            </div>
                          </div>
                          <p className="text-[11px] text-muted-foreground flex items-start gap-1.5 pt-1">
                            <Clock className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                            <span>{s.timeSaving}</span>
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <hr className="border-border" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Итого агентство:</span>
                      <span className="line-through text-muted-foreground">от {fmt(totalMarket)} ₽</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-secondary">Итого Vibecoding:</span>
                      <span className="font-bold text-foreground">от {fmt(totalMy)} ₽</span>
                    </div>
                  </div>


                  <hr className="border-border" />

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-card/40 to-card/20 border border-primary/20 relative">
                    <p className="text-[11px] font-medium text-primary uppercase tracking-[0.18em] flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      Чистая экономия бюджета:
                    </p>
                    <p className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                      от {fmt(economy)} ₽
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                      * Экономия за счёт нейросетей премиум-уровня и высокой
                      скорости ручной кастомизации кода. Никаких переплат за
                      раздутый штат менеджеров.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      const message = `Привет, Евгения! Посчитала проект в калькуляторе. Выбрала услуги от ${fmt(totalMy)} ₽. Хочу обсудить детальнее!`;
                      window.open(
                        `https://t.me/evgeniya5_5?text=${encodeURIComponent(message)}`,
                        "_blank",
                      );
                    }}
                    className="w-full py-4 px-6 rounded-full bg-gradient-cv text-background font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-neon-violet"
                  >
                    <Send className="w-4 h-4" />
                    Зафиксировать стоимость в Telegram
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
