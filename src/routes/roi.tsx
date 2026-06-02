import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import CyberBackground from "@/components/landing/CyberBackground";

export const Route = createFileRoute("/roi")({
  head: () => ({
    meta: [
      { title: "Калькулятор эффективности — VibePulse" },
      {
        name: "description",
        content:
          "Посчитайте экономию бюджета и времени при работе с VibePulse: AI-боты, вайб-кодинг, дизайн, видео, музыка и запуск под ключ.",
      },
      { property: "og:title", content: "Калькулятор эффективности — VibePulse" },
      {
        property: "og:description",
        content:
          "Сравните рыночные цены и стоимость у VibePulse — увидите чистую экономию бюджета и времени.",
      },
    ],
  }),
  component: RoiPage,
});

function RoiPage() {
  return (
    <>
      <CyberBackground />
      <main className="relative min-h-screen pt-10 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> На главную
          </Link>
        </div>
        <RoiCalculator />

      </main>
    </>
  );
}

