import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — VibePulse studio" },
      {
        name: "description",
        content:
          "Политика конфиденциальности сайта VibePulse studio: сбор, использование и защита персональных данных.",
      },
      { property: "og:title", content: "Политика конфиденциальности — VibePulse studio" },
      {
        property: "og:description",
        content:
          "Порядок обработки и защиты персональных данных пользователей сайта VibePulse studio.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link to="/" className="text-sm text-secondary hover:underline">
          ← На главную
        </Link>

        <h1 className="mt-8 font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]">
          Политика <span className="text-gradient-cv">конфиденциальности</span>
        </h1>

        <p className="mt-6 text-muted-foreground">
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
          данных пользователей сайта VibePulse studio.
        </p>

        <section className="mt-10 space-y-8 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground">1. Сбор информации</h2>
            <p className="mt-2 text-muted-foreground">
              Мы собираем следующую информацию: имя, номер телефона, контактные данные мессенджера,
              предпочтения по стилю и другие данные, которые вы добровольно предоставляете через
              форму записи.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">2. Использование информации</h2>
            <p className="mt-2 text-muted-foreground">
              Собранные данные используются исключительно для обработки заявок для рабочего
              процесса, связи с клиентами и улучшения качества сервиса.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">3. Защита данных</h2>
            <p className="mt-2 text-muted-foreground">
              Мы принимаем все необходимые меры для защиты ваших персональных данных от
              несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">4. Передача третьим лицам</h2>
            <p className="mt-2 text-muted-foreground">
              Мы не передаём ваши персональные данные третьим лицам, за исключением случаев,
              предусмотренных законодательством РФ.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">5. Согласие</h2>
            <p className="mt-2 text-muted-foreground">
              Отправляя заявку через форму на сайте, вы подтверждаете своё согласие с настоящей
              Политикой конфиденциальности.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">6. Контакты</h2>
            <p className="mt-2 text-muted-foreground">
              По вопросам, связанным с обработкой персональных данных, вы можете обратиться по
              электронной почте:{" "}
              <a href="mailto:jekki_65@mail.ru" className="text-secondary hover:underline">
                jekki_65@mail.ru
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
