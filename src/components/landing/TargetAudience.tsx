import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="audience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 select-none">
          <h3 className="text-xl md:text-2xl font-medium text-foreground/80">
            Для экспертов, онлайн-школ, продуктовых брендов
          </h3>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors group focus:outline-none"
          >
            <span>и не только</span>
            <ChevronDown
              className={`size-4 transition-transform duration-300 ${
                isOpen ? "rotate-180 text-secondary" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="audience-list"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mt-8"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
