import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

type FaqItem = { question: string; answer: string };

const faqData: FaqItem[] = [
  {
    question: "Что делать, если мне не понравится промежуточный результат?",
    answer:
      "Я не работаю вслепую. Весь процесс разбит на микро-этапы: сначала утверждаем концепт и мудборд, затем логику (архитектуру) и только потом перехожу к сборке. Вы видите проект в реальном времени на каждом шаге. Если на первом этапе поймём, что мы совсем на разных волнах — я просто верну предоплату и мы разойдёмся без обид.",
  },
  {
    question: "Какие технические гарантии вы даёте?",
    answer:
      "После запуска проекта даю 30 дней полной бесплатной техподдержки. Если за это время вылезет любой баг, слетит интеграция или что-то пойдёт не так по моей вине — исправляю моментально и в приоритетном порядке. Всё фиксируется в простом соглашении перед стартом.",
  },
  {
    question: "За счёт чего такие короткие сроки (3–7 дней на сайт)?",
    answer:
      "Это магия вайбкодинга (Vibecoding). Вместо рутинного написания тысяч строк кода с нуля, я использую топовые AI-инструменты для мгновенной генерации базы и интерфейсов. Затем вручную кастомизирую код, докручиваю логику до идеала и связываю системы. Скорость возрастает в 4–5 раз без потери качества.",
  },
  {
    question: "Что конкретно входит в финальную стоимость?",
    answer:
      "Всё под ключ: проектирование структуры, дизайн, сборка кода, базовая адаптация под мобильные устройства, настройка всех кнопок и форм. Если делаем автоматизацию — туда входит интеграция с вашим Telegram-ботом или CRM-системой. Никаких скрытых платежей в процессе не появится.",
  },
  {
    question: "Как устроен процесс внесения правок?",
    answer:
      "В рамках утверждённого ТЗ/концепта количество мелких правок не ограничено — доводим продукт до идеала вместе. Если же в процессе вы решите кардинально изменить бизнес-логику (например, вместо простого сайта сделать полноценную онлайн-школу с личными кабинетами), мы просто посчитаем это как дополнительную задачу.",
  },
  {
    question: "Кто в итоге владеет кодом и правами на проект?",
    answer:
      "Вы и только вы. После финального расчёта я передаю чистый репозиторий на GitHub и полные доступы ко всем подключённым сервисам (Supabase, Telegram-боты, хостинг). Проект полностью независим — сможете развивать его дальше с любым другим разработчиком или оставить на моём сопровождении.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm text-secondary mb-3 uppercase tracking-widest">FAQ</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Ответы на <span className="text-gradient-cv">важные вопросы</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Разбираем ключевые моменты, страхи и организационные детали без лишней бюрократии.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "glass border-primary/50 shadow-neon-violet"
                    : "bg-card/40 border-border hover:border-secondary/50 hover:bg-card/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle
                      className={`size-5 flex-shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    <span className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`size-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pl-14 sm:pl-15 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
