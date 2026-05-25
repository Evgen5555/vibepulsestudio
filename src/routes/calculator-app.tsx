import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Zap,
  TrendingUp,
  ArrowLeft,
  Sparkles,
  Plus,
  Trash2,
  Check,
  Download,
} from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export const Route = createFileRoute("/calculator-app")({
  head: () => ({
    meta: [
      { title: "Калькулятор упущенной выгоды — VibePulse" },
      {
        name: "description",
        content:
          "Интерактивный бизнес-аудит: посчитайте чистую прибыль и потенциал автоматизации с AI-агентами VibePulse.",
      },
    ],
  }),
  component: CalculatorApp,
});

type Item = { id: string; label: string; amount: number };

const fmt = (n: number) => Math.round(n).toLocaleString("ru-RU");

const INCOME_PRESETS = ["Сайт", "Telegram-канал", "Личный бренд", "Другое"];
const EXPENSE_PRESETS = [
  "Рекламный бюджет",
  "Зарплаты",
  "Потери на рутине",
  "Слив заявок",
];

const TELEGRAM_URL = "https://t.me/evgeniya5_5";

function AnimatedNumber({ value }: { value: number }) {
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => fmt(v));
  const [text, setText] = useState(fmt(value));

  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.5, ease: "easeOut" });
    const unsub = rounded.on("change", setText);
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, mv, rounded]);

  return <span>{text}</span>;
}

function CalculatorApp() {
  const navigate = useNavigate();
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ok = localStorage.getItem("access_granted") === "true";
      if (!ok) {
        navigate({ to: "/" });
        return;
      }
      setGranted(true);
    }
  }, [navigate]);

  const [incomes, setIncomes] = useState<Item[]>([]);
  const [expenses, setExpenses] = useState<Item[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const isInstallable = deferredPrompt !== null;

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const totalIncome = useMemo(
    () => incomes.reduce((s, i) => s + (i.amount || 0), 0),
    [incomes],
  );
  const totalExpense = useMemo(
    () => expenses.reduce((s, i) => s + (i.amount || 0), 0),
    [expenses],
  );
  const profit = totalIncome - totalExpense;
  const potential = Math.max(0, Math.round(profit * 0.25));

  if (!granted) return null;

  const addItem = (
    setter: React.Dispatch<React.SetStateAction<Item[]>>,
    label: string,
  ) => {
    setter((prev) => [
      ...prev,
      { id: crypto.randomUUID(), label, amount: 0 },
    ]);
  };

  const updateItem = (
    setter: React.Dispatch<React.SetStateAction<Item[]>>,
    id: string,
    patch: Partial<Item>,
  ) => {
    setter((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  };

  const removeItem = (
    setter: React.Dispatch<React.SetStateAction<Item[]>>,
    id: string,
  ) => {
    setter((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* Background glow — preserved violet/emerald palette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-20 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05060a_75%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <button
          onClick={() => navigate({ to: "/" })}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> На главную
        </button>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center"
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-amber-300 uppercase bg-amber-300/10 border border-amber-300/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3" /> Internal Tool · PWA
          </span>
          <h1 className="mt-5 font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2rem,5.5vw,3.25rem)]">
            Калькулятор{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
              упущенной выгоды
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-lg mx-auto">
            Внесите статьи доходов и расходов — система покажет вашу чистую
            прибыль и точки автоматизации.
          </p>
        </motion.div>

        {/* Profit widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 relative rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-300/5 via-black/40 to-amber-500/5 p-7 sm:p-10 overflow-hidden"
        >
          <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_120deg,rgba(251,191,36,0.18),transparent_30%,rgba(217,119,6,0.18)_60%,transparent_90%)] opacity-60 blur-2xl pointer-events-none" />
          <div className="relative text-center sm:text-left">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-amber-300/80 uppercase flex items-center gap-1.5 justify-center sm:justify-start">
              <TrendingUp className="w-3.5 h-3.5" /> Чистая прибыль
            </p>
            <p className="mt-3 font-semibold tracking-[-0.04em] leading-none text-[clamp(2.5rem,9vw,5.5rem)] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              <AnimatedNumber value={profit} /> ₽
            </p>
            <p className="mt-4 text-xs sm:text-sm text-amber-300/70 italic">
              Потенциал автоматизации:{" "}
              <span className="font-semibold text-amber-300">
                +25% к прибыли (+{fmt(potential)} ₽)
              </span>{" "}
              при внедрении AI-агентов VibePulse
            </p>
          </div>
        </motion.div>

        {/* Income */}
        <Section
          title="Доходы"
          tone="emerald"
          presets={INCOME_PRESETS}
          items={incomes}
          total={totalIncome}
          onAdd={(label) => addItem(setIncomes, label)}
          onUpdate={(id, patch) => updateItem(setIncomes, id, patch)}
          onRemove={(id) => removeItem(setIncomes, id)}
          delay={0.2}
        />

        {/* Expenses */}
        <Section
          title="Расходы"
          tone="rose"
          presets={EXPENSE_PRESETS}
          items={expenses}
          total={totalExpense}
          onAdd={(label) => addItem(setExpenses, label)}
          onUpdate={(id, patch) => updateItem(setExpenses, id, patch)}
          onRemove={(id) => removeItem(setExpenses, id)}
          delay={0.3}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm sm:text-[15px] leading-relaxed text-white/65 text-center max-w-2xl mx-auto"
        >
          Этот интерактивный аудит — пример того, как VibePulse превращает
          сложные бизнес-процессы в работающие цифровые инструменты, а не просто
          контент. Если откликается такой формат — мы можем собрать кастомное
          решение под задачи вашего бизнеса.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setShowModal(true)}
          className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-semibold text-sm sm:text-base py-4 px-6 shadow-[0_0_40px_-8px_rgba(251,191,36,0.7)] hover:shadow-[0_0_60px_-4px_rgba(251,191,36,0.9)] transition-shadow"
        >
          <Zap className="w-4 h-4" />
          Окупить слив прибыли
        </motion.button>

        <p className="mt-8 text-center text-[11px] text-white/30 tracking-wider uppercase">
          VibePulse Internal · v1.0
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-amber-300/40 bg-[#0a0b10] p-8 shadow-[0_0_80px_-10px_rgba(251,191,36,0.45)]"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 w-8 h-8 inline-flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-full bg-amber-300/10 border border-amber-300/40 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                Мы сохранили ваш расчёт
              </h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                Чтобы убрать самый крупный слив в вашем бизнесе, заберите
                бесплатный 15-минутный разбор.
              </p>

              {profit !== 0 && (
                <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/70">
                    Ваш потенциал
                  </p>
                  <p className="mt-1 text-lg font-semibold text-amber-300">
                    +{fmt(potential)} ₽ / мес с AI-агентами
                  </p>
                </div>
              )}

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-semibold text-sm py-3.5 hover:shadow-[0_0_40px_-6px_rgba(251,191,36,0.8)] transition-shadow"
              >
                <Send className="w-4 h-4" />
                Забрать разбор в Telegram
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Section({
  title,
  tone,
  presets,
  items,
  total,
  onAdd,
  onUpdate,
  onRemove,
  delay,
}: {
  title: string;
  tone: "emerald" | "rose";
  presets: string[];
  items: Item[];
  total: number;
  onAdd: (label: string) => void;
  onUpdate: (id: string, patch: Partial<Item>) => void;
  onRemove: (id: string) => void;
  delay: number;
}) {
  const toneClass =
    tone === "emerald"
      ? {
          dot: "bg-emerald-400",
          text: "text-emerald-300",
          chip: "border-emerald-400/30 hover:border-emerald-400/70 hover:bg-emerald-400/5",
          total: "text-emerald-300",
        }
      : {
          dot: "bg-rose-400",
          text: "text-rose-300",
          chip: "border-rose-400/30 hover:border-rose-400/70 hover:bg-rose-400/5",
          total: "text-rose-300",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className={`w-2 h-2 rounded-full ${toneClass.dot}`} />
          <h2 className="text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">
            {title}
          </h2>
        </div>
        <p className={`text-sm font-semibold tabular-nums ${toneClass.total}`}>
          {fmt(total)} ₽
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => onAdd(p)}
            className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border bg-black/30 ${toneClass.chip} text-white/80 transition`}
          >
            <Plus className="w-3 h-3" />
            {p}
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 20 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-2">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2"
                >
                  <Input
                    value={item.label}
                    onChange={(e) =>
                      onUpdate(item.id, { label: e.target.value })
                    }
                    className="flex-1 h-10 bg-transparent border-0 text-sm text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="0"
                    value={item.amount || ""}
                    onChange={(e) =>
                      onUpdate(item.id, {
                        amount: Number(e.target.value) || 0,
                      })
                    }
                    className="w-32 h-10 bg-black/40 border-white/10 text-right tabular-nums text-sm text-white placeholder:text-white/30 focus-visible:ring-amber-300/60"
                  />
                  <span className="text-xs text-white/40 pr-1">₽</span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="w-9 h-9 inline-flex items-center justify-center rounded-xl text-white/40 hover:text-rose-300 hover:bg-rose-400/10 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
