import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingCards } from "@/components/landing/PricingCards";

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
      </div>

      <PricingCards />
    </main>
  );
}
