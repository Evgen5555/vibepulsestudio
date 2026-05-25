import { createFileRoute, Link } from "@tanstack/react-router";
import { Services } from "@/components/landing/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Каталог решений — VibePulse studio" },
      { name: "description", content: "Услуги VibePulse studio: сайты, автоворонки, боты, AI-дизайн, видео, музыка." },
      { property: "og:title", content: "Каталог решений — VibePulse studio" },
      { property: "og:description", content: "Полный каталог услуг VibePulse studio." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link to="/" className="text-sm text-secondary hover:underline">← На главную</Link>
      </div>
      <Services />
    </main>
  );
}
