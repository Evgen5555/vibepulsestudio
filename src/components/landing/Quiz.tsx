import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, Send, Sparkles, Check } from "lucide-react";

type Question = {
  id: number;
  title: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    title: "Какая у вас главная задача прямо сейчас?",
    options: [
      "Упаковать личный бренд (стильный сайт + позиционирование)",
      "Автоматизировать рутину (делегировать задачи нейросетям и ботам)",
      "Запустить MVP / новый продукт на базе AI в краткие сроки",
      "Всё сразу: нужен комплексный перезапуск под ключ",
    ],
  },
  {
    id: 2,
    title: "Кто ваша целевая аудитория?",
    options: [
      "Эксперты, менторы и бьюти-сфера",
      "Онлайн-школы и инфобизнес",
      "Локальный премиум-бизнес / Услуги",
      "Работаю в B2B / Другое",
    ],
  },
  {
    id: 3,
    title: "Что из этого у вас уже готово?",
    options: [
      "Только идея в голове (ТЗ нет, нужна помощь с концептом)",
      "Есть текстовые наработки и референсы, которые нравятся",
      "Есть старый сайт/бот, но они не продают и выглядят устаревшими",
      "Всё готово, нужно просто быстро и технически круто собрать",
    ],
  },
  {
    id: 4,
    title: "Какая автоматизация вам облегчит жизнь сильнее всего?",
    options: [
      "Умный Telegram-бот (греет аудиторию и ведёт базу)",
      "Автоматическая квалификация лидов и CRM-система",
      "Нейросети для генерации контента",
      "Пока не знаю, хочу послушать предложения на созвоне",
    ],
  },
  {
    id: 5,
    title: "Когда планируете запуск проекта?",
    options: [
      "Готова стартовать вчера (нужен быстрый результат)",
      "В течение ближайших 1–2 недель",
      "Пока прицениваюсь и планирую на будущее",
    ],
  },
];

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = questions.length + 1;
  const progressPercentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: option }));
    setTimeout(() => setCurrentStep((s) => Math.min(s + 1, totalSteps)), 280);
  };

  const handleNext = () => currentStep < totalSteps && setCurrentStep((s) => s + 1);
  const handlePrev = () => currentStep > 1 && setCurrentStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quiz results:", { answers, formData });
    setIsSubmitted(true);
  };

  return (
    <section id="quiz" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">КВИЗ</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
            5 шагов — и вы получите{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              персональный расчёт
            </span>
          </h2>
        </div>

        <div className="relative glass border border-border rounded-3xl p-6 sm:p-10 shadow-neon-violet">
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-cvp opacity-20 blur-2xl -z-10" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center py-10"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-6 rounded-full bg-primary/30 blur-2xl" />
                <div className="relative size-20 rounded-full glass border border-primary/60 flex items-center justify-center shadow-neon-violet">
                  <Check className="size-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Анализирую ваши ответы…
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                Стратегия почти готова. Уже вижу, какую архитектуру и AI-инструменты можно внедрить
                в ваш проект.
              </p>
              <p className="mt-6 text-secondary text-sm">
                Свяжусь с вами в Telegram в течение пары часов.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>
                  {currentStep <= questions.length
                    ? `Вопрос ${currentStep} из ${questions.length}`
                    : "Финал — контакты"}
                </span>
                <span>{progressPercentage}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden mb-8">
                <motion.div
                  className="h-full bg-gradient-cvp rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <AnimatePresence mode="wait">
                {currentStep <= questions.length ? (
                  <motion.div
                    key={`q-${currentStep}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
                      {questions[currentStep - 1].title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {questions[currentStep - 1].options.map((option) => {
                        const selected = answers[currentStep] === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleOptionSelect(option)}
                            className={`text-left p-5 rounded-2xl border text-sm md:text-base font-medium transition-all duration-200 ${
                              selected
                                ? "bg-primary/15 border-primary text-foreground shadow-neon-violet"
                                : "bg-card/40 border-border text-muted-foreground hover:border-secondary/60 hover:text-foreground hover:bg-card/70"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-full glass border border-secondary/60 flex items-center justify-center shadow-neon-cyan">
                        <Bot className="size-5 text-secondary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                        Куда отправить расчёт и стратегию?
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                      Оставьте данные — подготовлю аудит под стек вашей задачи.
                    </p>

                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-xs text-muted-foreground mb-1.5 block">
                          Ваше имя *
                        </span>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Анна"
                          className="w-full bg-card/60 border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs text-muted-foreground mb-1.5 block">
                          Telegram / Телефон / E-mail *
                        </span>
                        <input
                          required
                          type="text"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="@username или +7…"
                          className="w-full bg-card/60 border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-cvp text-primary-foreground font-semibold px-6 py-4 shadow-neon-violet hover:opacity-95 transition"
                    >
                      <Send className="size-5" />
                      Получить расчёт
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Footer nav */}
              <div className="mt-8 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <ArrowLeft className="size-4" />
                    Назад
                  </button>
                ) : (
                  <span />
                )}

                {currentStep <= questions.length && answers[currentStep] && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-full glass border border-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground hover:shadow-neon-cyan transition"
                  >
                    Дальше
                    <ArrowRight className="size-4" />
                  </button>
                )}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-secondary" />
                Ответы помогут AI составить персональную стратегию
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
