import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Zap, TrendingUp, Users, Percent, Wallet, ArrowLeft, Sparkles, Loader2 } from "lucide-react";

export const Route = createFileRoute("/calculator-app")({
  head: () => ({
    meta: [
      { title: "Калькулятор упущенной выгоды — VibePulse" },
      { name: "description", content: "PWA-калькулятор упущенной выгоды бизнеса. Узнайте, сколько вы теряете каждый месяц." },
    ],
  }),
  component: CalculatorApp,
});

const fmt = (n: number) => Math.round(n).toLocaleString("ru-RU");

function AnimatedNumber({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => fmt(v));
  const [text, setText] = useState("0");

  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.6, ease: "easeOut" });
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

  const [traffic, setTraffic] = useState(5000);
  const [conv, setConv] = useState(1.5);
  const [check, setCheck] = useState(10000);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const current = useMemo(() => traffic * (conv / 100) * check, [traffic, conv, check]);
  const potential = useMemo(() => traffic * ((conv + 2) / 100) * check, [traffic, conv, check]);
  const lost = potential - current;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !contact.trim()) {
      setError("Заполните оба поля");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/telegram-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "discuss",
          name: name.trim(),
          messenger: "Telegram/Контакт",
          username: contact.trim(),
          message: `Запрос на 15-мин стратегический разбор воронки.\nТрафик: ${fmt(traffic)}/мес\nКонверсия: ${conv}%\nСредний чек: ${fmt(check)} ₽\nУпускает: ${fmt(lost)} ₽/мес`,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!granted) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* Background glow */}
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
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3" /> Internal Tool · PWA
          </span>
          <h1 className="mt-5 font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2rem,5.5vw,3.25rem)]">
            Калькулятор{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
              упущенной выгоды
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-lg mx-auto">
            Двигайте ползунки — система мгновенно покажет, сколько денег ваш бизнес теряет каждый месяц.
          </p>
        </motion.div>

        {/* Sliders card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_60px_-20px_rgba(139,92,246,0.45)]"
        >
          <SliderRow
            icon={<Users className="w-4 h-4 text-violet-300" />}
            label="Трафик сайта в месяц"
            value={fmt(traffic)}
            unit="посетителей"
            accent="violet"
          >
            <Slider value={[traffic]} min={1000} max={50000} step={500} onValueChange={(v) => setTraffic(v[0])} />
            <RangeLabels min="1 000" max="50 000" />
          </SliderRow>

          <Divider />

          <SliderRow
            icon={<Percent className="w-4 h-4 text-fuchsia-300" />}
            label="Текущая конверсия сайта"
            value={conv.toFixed(1)}
            unit="%"
            accent="fuchsia"
          >
            <Slider value={[conv]} min={0.5} max={5} step={0.1} onValueChange={(v) => setConv(v[0])} />
            <RangeLabels min="0.5%" max="5%" />
          </SliderRow>

          <Divider />

          <SliderRow
            icon={<Wallet className="w-4 h-4 text-emerald-300" />}
            label="Средний чек продукта"
            value={fmt(check)}
            unit="₽"
            accent="emerald"
          >
            <Slider value={[check]} min={3000} max={150000} step={1000} onValueChange={(v) => setCheck(v[0])} />
            <RangeLabels min="3 000 ₽" max="150 000 ₽" />
          </SliderRow>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 relative rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-black/40 to-violet-600/10 p-7 sm:p-10 overflow-hidden"
        >
          <div className="absolute -inset-px rounded-3xl bg-[conic-gradient(from_120deg,rgba(16,185,129,0.25),transparent_30%,rgba(139,92,246,0.25)_60%,transparent_90%)] opacity-60 blur-2xl pointer-events-none" />
          <div className="relative">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-400 uppercase flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> Вы упускаете в месяц
            </p>
            <p className="mt-3 font-semibold tracking-[-0.04em] leading-none text-[clamp(2.5rem,9vw,5.5rem)] bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              <AnimatedNumber value={lost} /> ₽
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <MiniStat label="Текущий доход" value={current} tone="muted" />
              <MiniStat label="Потенциальный доход" value={potential} tone="bright" />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => setShowForm((s) => !s)}
          className="group mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-black font-semibold text-sm sm:text-base py-4 px-6 shadow-[0_0_40px_-8px_rgba(16,185,129,0.7)] hover:shadow-[0_0_60px_-4px_rgba(16,185,129,0.9)] transition-shadow"
        >
          <Zap className="w-4 h-4" />
          Исправить слив прибыли
        </motion.button>

        {/* Form */}
        <AnimatePresence initial={false}>
          {showForm && (
            <motion.div
              key="form"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
                {sent ? (
                  <div className="text-center py-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-emerald-400/15 border border-emerald-400/40 flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Заявка отправлена</h3>
                    <p className="text-sm text-white/60 mt-1">
                      Свяжемся в течение часа, чтобы согласовать время разбора.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">15-минутный стратегический разбор воронки</h3>
                      <p className="text-sm text-white/60 mt-1">
                        Покажем точки слива и план их закрытия с помощью AI-агентов. Бесплатно.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      <Input
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-12 bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-emerald-400/60"
                      />
                      <Input
                        placeholder="Telegram / Email / Телефон"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="h-12 bg-black/40 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-emerald-400/60"
                      />
                    </div>
                    {error && <p className="text-xs text-rose-400">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm py-3.5 hover:bg-white/90 transition disabled:opacity-60"
                    >
                      {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      {submitting ? "Отправляем…" : "Записаться на разбор"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-8 text-center text-[11px] text-white/30 tracking-wider uppercase">
          VibePulse Internal · v1.0
        </p>
      </div>
    </main>
  );
}

function SliderRow({
  icon,
  label,
  value,
  unit,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  accent: "violet" | "fuchsia" | "emerald";
  children: React.ReactNode;
}) {
  const accentClass = {
    violet: "text-violet-300",
    fuchsia: "text-fuchsia-300",
    emerald: "text-emerald-300",
  }[accent];
  return (
    <div className="py-3">
      <div className="flex items-end justify-between mb-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
          <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            {icon}
          </span>
          {label}
        </div>
        <div className={`font-semibold tabular-nums text-xl sm:text-2xl ${accentClass}`}>
          {value} <span className="text-xs text-white/40 font-normal ml-1">{unit}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function RangeLabels({ min, max }: { min: string; max: string }) {
  return (
    <div className="mt-2 flex justify-between text-[10px] tracking-wider uppercase text-white/30">
      <span>{min}</span>
      <span>{max}</span>
    </div>
  );
}

function Divider() {
  return <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />;
}

function MiniStat({ label, value, tone }: { label: string; value: number; tone: "muted" | "bright" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">{label}</p>
      <p className={`mt-1.5 font-semibold tabular-nums text-lg sm:text-xl ${tone === "bright" ? "text-white" : "text-white/60"}`}>
        <AnimatedNumber value={value} /> ₽
      </p>
    </div>
  );
}
