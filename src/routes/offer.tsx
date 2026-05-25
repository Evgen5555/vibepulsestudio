import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/offer")({
  head: () => ({
    meta: [
      { title: "Публичная оферта — VibePulse studio" },
      { name: "description", content: "Условия оказания услуг вайб кодинга VibePulse studio." },
      { property: "og:title", content: "Публичная оферта — VibePulse studio" },
      { property: "og:description", content: "Публичная оферта на оказание услуг с использованием нейросетевых технологий." },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  const sections = [
    { title: "1. Предмет оферты", body: "Исполнитель оказывает заказчику услуги по проведению работ с использованием нейросетевых технологий." },
    { title: "2. Порядок оказания услуг", body: "Заказчик оформляет заявку через форму на сайте. После подтверждения заявки исполнитель связывается с заказчиком для согласования деталей и сроков проведения работ." },
    { title: "3. Стоимость услуг", body: "Стоимость услуг определяется выбранной услугой и дополнительными пожеланиями заказчика. Актуальные услуги представлены на сайте." },
    { title: "4. Оплата", body: "Оплата производится в порядке, согласованном между сторонами. Предоплата составляет 50% от стоимости выбранного тарифа." },
    { title: "5. Результат работ", body: "Результатом оказания услуг являются работы, предоставленные в электронном виде. Сроки предоставления результатов зависят от выбранных услуг и срочности." },
    { title: "6. Авторские права", body: "Авторские права на созданные работы принадлежат исполнителю. Заказчик получает право на личное использование после передачи заказа исполнителем." },
  ];

  return (
    <main className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link to="/" className="text-sm text-secondary hover:underline">← На главную</Link>

        <h1 className="mt-8 font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">
          Публичная <span className="text-gradient-cv">оферта</span>
        </h1>

        <p className="mt-6 text-muted-foreground">
          Настоящий документ является публичной офертой (далее — «Оферта») и определяет условия оказания услуг вайб кодинга.
        </p>

        <section className="mt-10 space-y-8 text-base leading-relaxed">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
