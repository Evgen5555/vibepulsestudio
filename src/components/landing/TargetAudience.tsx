const items = [
  {
    num: "01",
    title: "Эксперты & Менторы",
    accent: "text-primary",
    text: "Упаковка сильного личного бренда, стильный сайт и автоматизация прогрева аудитории через умных ботов.",
  },
  {
    num: "02",
    title: "Онлайн-школы & Инфобизнес",
    accent: "text-secondary",
    text: "Внедрение AI-сотрудников, сквозная автоматизация процессов, CRM и быстрая квалификация входящих лидов.",
  },
  {
    num: "03",
    title: "Продуктовые & Бьюти-бренды",
    accent: "text-[color:var(--neon-pink)]",
    text: "Кинематографичный нейро-визуал, AI-аватары для соцсетей и генерация продающих Reels нового поколения.",
  },
  {
    num: "04",
    title: "Премиум сфера услуг",
    accent: "text-[color:var(--neon-blue)]",
    text: "Перевод хаоса из блокнотов в чёткую цифровую экосистему и автоматический приём заявок 24/7.",
  },
  {
    num: "05",
    title: "Диджитал-агентства & Студии",
    accent: "text-primary",
    text: "Надёжный партнёр на вайбкодинге для быстрой сборки сложных IT-решений и MVP на нейросетях в 4 раза быстрее рынка.",
    wide: true,
  },
];

export function TargetAudience() {
  return (
    <section id="audience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-sm text-secondary mb-3">Для кого</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Кому подойдёт{" "}
            <span className="text-gradient-cv">сотрудничество</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
          {items.map((it) => (
            <div
              key={it.num}
              className={`p-5 rounded-2xl glass border border-border ${
                it.wide ? "md:col-span-2" : ""
              }`}
            >
              <h4
                className={`text-sm font-bold uppercase tracking-wider mb-2 ${it.accent}`}
              >
                {it.num}. {it.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
