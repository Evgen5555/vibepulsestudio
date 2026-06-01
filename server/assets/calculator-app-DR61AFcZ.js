import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { c as cn } from "./utils-H80jjgLf.js";
import { ArrowLeft, Sparkles, TrendingUp, Zap, Check, Gift, Plus, Trash2 } from "lucide-react";
import "clsx";
import "tailwind-merge";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const fmt = (n) => Math.round(n).toLocaleString("ru-RU");
const INCOME_PRESETS = ["Сайт", "Telegram-канал", "Личный бренд", "Другое"];
const EXPENSE_PRESETS = ["Рекламный бюджет", "Зарплаты", "Потери на рутине", "Слив заявок"];
function AnimatedNumber({
  value
}) {
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => fmt(v));
  const [text, setText] = useState(fmt(value));
  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.5,
      ease: "easeOut"
    });
    const unsub = rounded.on("change", setText);
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, mv, rounded]);
  return /* @__PURE__ */ jsx("span", { children: text });
}
function CalculatorApp() {
  const navigate = useNavigate();
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ok = localStorage.getItem("access_granted") === "true";
      if (!ok) {
        navigate({
          to: "/"
        });
        return;
      }
      setGranted(true);
    }
  }, [navigate]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const totalIncome = useMemo(() => incomes.reduce((s, i) => s + (i.amount || 0), 0), [incomes]);
  const totalExpense = useMemo(() => expenses.reduce((s, i) => s + (i.amount || 0), 0), [expenses]);
  const profit = totalIncome - totalExpense;
  const potential = Math.max(0, Math.round(profit * 0.25));
  if (!granted) return null;
  const addItem = (setter, label) => {
    setter((prev) => [...prev, {
      id: crypto.randomUUID(),
      label,
      amount: 0
    }]);
  };
  const updateItem = (setter, id, patch) => {
    setter((prev) => prev.map((i) => i.id === id ? {
      ...i,
      ...patch
    } : i));
  };
  const removeItem = (setter, id) => {
    setter((prev) => prev.filter((i) => i.id !== id));
  };
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-hidden bg-[#05060a] text-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-20 h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[140px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -right-20 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[160px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05060a_75%)]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl px-5 py-10 sm:py-14", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => navigate({
        to: "/"
      }), className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
        " На главную"
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "mt-6 text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-amber-300 uppercase bg-amber-300/10 border border-amber-300/30 px-3 py-1 rounded-full", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3" }),
          " Internal Tool · PWA"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2rem,5.5vw,3.25rem)]", children: [
          "Калькулятор",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent", children: "упущенной выгоды" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm sm:text-base text-white/60 max-w-lg mx-auto", children: "Внесите статьи доходов и расходов — система покажет вашу чистую прибыль и точки автоматизации." })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        delay: 0.1
      }, className: "mt-10 relative rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-300/5 via-black/40 to-amber-500/5 p-7 sm:p-10 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-px rounded-3xl bg-[conic-gradient(from_120deg,rgba(251,191,36,0.18),transparent_30%,rgba(217,119,6,0.18)_60%,transparent_90%)] opacity-60 blur-2xl pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "relative text-center sm:text-left", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[11px] font-semibold tracking-[0.22em] text-amber-300/80 uppercase flex items-center gap-1.5 justify-center sm:justify-start", children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5" }),
            " Чистая прибыль"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 font-semibold tracking-[-0.04em] leading-none text-[clamp(2.5rem,9vw,5.5rem)] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent", children: [
            /* @__PURE__ */ jsx(AnimatedNumber, { value: profit }),
            " ₽"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs sm:text-sm text-amber-300/70 italic", children: [
            "Потенциал автоматизации:",
            " ",
            /* @__PURE__ */ jsxs("span", { className: "font-semibold text-amber-300", children: [
              "+25% к прибыли (+",
              fmt(potential),
              " ₽)"
            ] }),
            " ",
            "при внедрении AI-агентов VibePulse"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Section, { title: "Доходы", tone: "emerald", presets: INCOME_PRESETS, items: incomes, total: totalIncome, onAdd: (label) => addItem(setIncomes, label), onUpdate: (id, patch) => updateItem(setIncomes, id, patch), onRemove: (id) => removeItem(setIncomes, id), delay: 0.2 }),
      /* @__PURE__ */ jsx(Section, { title: "Расходы", tone: "rose", presets: EXPENSE_PRESETS, items: expenses, total: totalExpense, onAdd: (label) => addItem(setExpenses, label), onUpdate: (id, patch) => updateItem(setExpenses, id, patch), onRemove: (id) => removeItem(setExpenses, id), delay: 0.3 }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: totalExpense > 0 && /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: 8
      }, transition: {
        duration: 0.4
      }, className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] leading-relaxed text-white/65 italic text-center max-w-2xl mx-auto", children: "Этот интерактивный аудит — пример того, как VibePulse превращает сложные бизнес-процессы в работающие цифровые инструменты, а не просто контент. Если откликается такой формат — мы можем собрать кастомное решение под задачи вашего бизнеса." }),
        !isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(motion.button, { whileHover: {
            scale: 1.01
          }, whileTap: {
            scale: 0.99
          }, disabled: submitting, onClick: async () => {
            if (submitting) return;
            setSubmitting(true);
            setError(null);
            try {
              const incomesText = incomes.map((i) => `   • ${i.label}: ${fmt(i.amount)} ₽`).join("\n");
              const expensesText = expenses.map((i) => `   • ${i.label}: ${fmt(i.amount)} ₽`).join("\n");
              const message = `💰 Калькулятор упущенной выгоды

📈 Доходы (${fmt(totalIncome)} ₽):
${incomesText || "   —"}

📉 Расходы (${fmt(totalExpense)} ₽):
${expensesText || "   —"}

💎 Чистая прибыль: ${fmt(profit)} ₽
🚀 Потенциал AI: +${fmt(potential)} ₽/мес

Запрос: 15-минутный стратегический разбор воронки.`;
              const res = await fetch("/api/public/telegram-lead", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: "discuss",
                  name: "Лид из калькулятора",
                  messenger: "PWA Calculator",
                  username: "—",
                  message
                })
              });
              if (!res.ok) throw new Error("send_failed");
              setIsSubmitted(true);
            } catch {
              setError("Не удалось отправить. Попробуйте ещё раз.");
            } finally {
              setSubmitting(false);
            }
          }, className: "group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-semibold text-sm sm:text-base py-4 px-6 shadow-[0_0_40px_-8px_rgba(251,191,36,0.7)] hover:shadow-[0_0_60px_-4px_rgba(251,191,36,0.9)] transition-shadow disabled:opacity-60", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" }),
            submitting ? "Отправка…" : "Окупить слив прибыли"
          ] }),
          error && /* @__PURE__ */ jsx("p", { className: "text-rose-300 text-xs text-center", children: error })
        ] }) : /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.35
        }, className: "rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.04] p-6 text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 mx-auto rounded-full bg-emerald-400/10 border border-emerald-400/40 text-emerald-300 flex items-center justify-center", children: /* @__PURE__ */ jsx(Check, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: "Заявка отправлена" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white/60 mt-1", children: "Свяжемся в течение часа, чтобы согласовать время разбора." })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/calculator-app", search: {
            mode: "gift"
          }, className: "w-full mt-2 py-2.5 bg-transparent border border-amber-300/60 text-amber-300 text-sm font-semibold rounded-full hover:bg-amber-300/10 transition inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(Gift, { className: "w-4 h-4" }),
            "Забери калькулятор в подарок по ссылке"
          ] })
        ] })
      ] }, "results-block") }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-center text-[11px] text-white/30 tracking-wider uppercase", children: "VibePulse Internal · v1.0" })
    ] })
  ] });
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
  delay
}) {
  const toneClass = tone === "emerald" ? {
    dot: "bg-emerald-400",
    chip: "border-emerald-400/30 hover:border-emerald-400/70 hover:bg-emerald-400/5",
    total: "text-emerald-300"
  } : {
    dot: "bg-rose-400",
    chip: "border-rose-400/30 hover:border-rose-400/70 hover:bg-rose-400/5",
    total: "text-rose-300"
  };
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.5,
    delay
  }, className: "mt-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx("span", { className: `w-2 h-2 rounded-full ${toneClass.dot}` }),
        /* @__PURE__ */ jsx("h2", { className: "text-xs uppercase tracking-[0.22em] text-white/70 font-semibold", children: title })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: `text-sm font-semibold tabular-nums ${toneClass.total}`, children: [
        fmt(total),
        " ₽"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: presets.map((p) => /* @__PURE__ */ jsxs("button", { onClick: () => onAdd(p), className: `inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border bg-black/30 ${toneClass.chip} text-white/80 transition`, children: [
      /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3" }),
      p
    ] }, p)) }),
    /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: items.length > 0 && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      height: 0,
      marginTop: 0
    }, animate: {
      opacity: 1,
      height: "auto",
      marginTop: 20
    }, exit: {
      opacity: 0,
      height: 0,
      marginTop: 0
    }, className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsxs(motion.div, { layout: true, initial: {
      opacity: 0,
      y: -6
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      x: 12
    }, className: "flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2", children: [
      /* @__PURE__ */ jsx(Input, { value: item.label, onChange: (e) => onUpdate(item.id, {
        label: e.target.value
      }), className: "flex-1 h-10 bg-transparent border-0 text-sm text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0" }),
      /* @__PURE__ */ jsx(Input, { type: "number", inputMode: "numeric", placeholder: "0", value: item.amount || "", onChange: (e) => onUpdate(item.id, {
        amount: Number(e.target.value) || 0
      }), className: "w-32 h-10 bg-black/40 border-white/10 text-right tabular-nums text-sm text-white placeholder:text-white/30 focus-visible:ring-amber-300/60" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-white/40 pr-1", children: "₽" }),
      /* @__PURE__ */ jsx("button", { onClick: () => onRemove(item.id), className: "w-9 h-9 inline-flex items-center justify-center rounded-xl text-white/40 hover:text-rose-300 hover:bg-rose-400/10 transition", children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4" }) })
    ] }, item.id)) }) }) })
  ] });
}
export {
  CalculatorApp as component
};
