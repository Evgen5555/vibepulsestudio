import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calculator-app")({
  head: () => ({
    meta: [
      { title: "Калькулятор упущенной выгоды бизнеса" },
      { name: "description", content: "Внутренний софт для предпринимателей: расчёт потенциала прибыли при внедрении AI-агентов." },
    ],
  }),
  component: CalculatorApp,
});

function CalculatorApp() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          Калькулятор упущенной выгоды
        </h1>
        <p className="text-muted-foreground">
          Доступ открыт. Здесь будет PWA-приложение калькулятора.
        </p>
      </div>
    </main>
  );
}
