import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Sparkles, MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

type ModalType = "apply" | "discuss" | "ask" | null;

type FormErrors = {
  message?: string;
  name?: string;
  username?: string;
  agreed?: string;
};


const modalConfig = {
  apply: {
    title: "Оставить",
    titleAccent: "заявку",
    subtitle: "Коротко опишите задачу — мы свяжемся и подберём подходящее решение",
    label: "Что хотите заказать? *",
    placeholder: "Опишите услугу, формат, пожелания...",
    buttonText: "Оставить заявку",
    tgTitle: "🔥 ЗАЯВКА",
    Icon: Rocket,
  },
  discuss: {
    title: "Обсудить",
    titleAccent: "проект",
    subtitle: "Опишите идею — мы подберём подход, формат и стоимость под ваши задачи",
    label: "Расскажите о проекте *",
    placeholder: "Что хотите создать? Идея, цели, формат, сроки...",
    buttonText: "Отправить",
    tgTitle: "✨ ОБСУЖДЕНИЕ ПРОЕКТА",
    Icon: Sparkles,
  },
  ask: {
    title: "Задать",
    titleAccent: "вопрос",
    subtitle: "Расскажите, что вас интересует — мы ответим в выбранном мессенджере",
    label: "Ваш вопрос *",
    placeholder: "Опишите, что вы хотите узнать...",
    buttonText: "Отправить вопрос",
    tgTitle: "❓ ВОПРОС",
    Icon: MessageCircle,
  },
} as const;

export function CtaFooter() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    messenger: "Telegram",
    username: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const closeModal = () => {
    setActiveModal(null);
    setIsSuccess(false);
    setIsSending(false);
    setFormData({ message: "", name: "", messenger: "Telegram", username: "", agreed: false });
    setErrors({});
  };

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModal) return;
    const newErrors: FormErrors = {};
    if (!formData.message.trim()) newErrors.message = "Опишите подробнее";
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.username.trim()) newErrors.username = "Введите контакт";
    if (!formData.agreed) newErrors.agreed = "Необходимо согласие";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const cfg = modalConfig[activeModal];
    const telegramText = [
      cfg.tgTitle,
      `👤 Имя: ${formData.name}`,
      `📱 Мессенджер: ${formData.messenger}`,
      `🔗 Контакт: ${formData.username}`,
      `📋 Задача: ${formData.message}`,
    ].join("\n");

    setIsSending(true);
    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramText }),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error("Ошибка отправки в Telegram:", err);
      alert("Что-то пошло не так, попробуйте позже.");
    } finally {
      setIsSending(false);
    }
  };

  const cfg = activeModal ? modalConfig[activeModal] : null;

  return (
    <section id="cta" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-secondary mb-5"
        >
          Готовы начать?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]"
        >
          Превратим вашу идею <br className="hidden sm:block" />
          в <span className="text-gradient-cv">премиальный продукт</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
        >
          Расскажите о вашей задаче — мы разработаем индивидуальное решение, определим формат и рассчитаем точную стоимость.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveModal("apply")}
            className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-cv px-7 py-4 text-base font-semibold text-background shadow-neon-violet w-full sm:w-auto"
          >
            <span aria-hidden className="absolute -inset-1.5 rounded-full bg-gradient-cv opacity-40 blur-xl -z-10" />
            <Rocket className="size-4" />
            Запустить проект
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveModal("discuss")}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary/50 bg-primary/5 px-7 py-4 text-base font-medium text-primary hover:bg-primary/10 shadow-neon-violet w-full sm:w-auto"
          >
            <Sparkles className="size-4" />
            Обсудить проект
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveModal("ask")}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-secondary/60 bg-secondary/5 px-7 py-4 text-base font-medium text-secondary hover:bg-secondary/10 shadow-neon-cyan w-full sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Задать вопрос
          </motion.button>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} VibePulse studio · Все права защищены</div>
          <div className="flex items-center gap-6">
            <a href="#cta" className="hover:text-foreground">Telegram</a>
            <a href="mailto:hi@example.com" className="hover:text-foreground">Email</a>
            <a href="#top" className="hover:text-foreground">Наверх</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && cfg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-border glass p-6 sm:p-8 shadow-neon-violet"
            >
              <button
                onClick={closeModal}
                aria-label="Закрыть"
                className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-gradient-cv text-background shadow-neon-violet">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
                    Заявка <span className="text-gradient-cv">отправлена</span>
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                    Спасибо! Данные уже улетели ко мне. Разберу вашу задачу и напишу в течение пары часов.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cv px-7 py-3 text-sm font-semibold text-background shadow-neon-violet"
                  >
                    Закрыть окно
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-cv text-background shadow-neon-violet">
                      <cfg.Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                        {cfg.title} <span className="text-gradient-cv">{cfg.titleAccent}</span>
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{cfg.subtitle}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">{cfg.label}</label>
                      <textarea
                        rows={4}
                        placeholder={cfg.placeholder}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={`w-full rounded-2xl border bg-card/60 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 resize-none transition-colors ${
                          errors.message
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-border focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.message && <p className="mt-1.5 pl-1 text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground/80 mb-2">Имя *</label>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? "border-destructive focus:border-destructive focus:ring-destructive"
                            : "border-border focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.name && <p className="mt-1.5 pl-1 text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-foreground/80 mb-2">Мессенджер *</label>
                        <select
                          value={formData.messenger}
                          onChange={(e) => handleInputChange("messenger", e.target.value)}
                          className="w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none cursor-pointer"
                        >
                          <option value="Telegram">Telegram</option>
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Viber">Viber</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground/80 mb-2">Ник / username *</label>
                        <input
                          type="text"
                          placeholder="@username"
                          value={formData.username}
                          onChange={(e) => handleInputChange("username", e.target.value)}
                          className={`w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 transition-colors ${
                            errors.username
                              ? "border-destructive focus:border-destructive focus:ring-destructive"
                              : "border-border focus:border-primary focus:ring-primary"
                          }`}
                        />
                        {errors.username && <p className="mt-1.5 pl-1 text-xs text-destructive">{errors.username}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreed}
                          onChange={(e) => handleInputChange("agreed", e.target.checked)}
                          className={`mt-0.5 size-4 rounded bg-card/60 cursor-pointer ${
                            errors.agreed
                              ? "border-destructive text-destructive focus:ring-destructive/40"
                              : "border-border text-primary focus:ring-primary/40"
                          }`}
                        />
                        <span>
                          Я ознакомлен(а) и согласен(на) с{" "}
                          <a href="#" className="text-secondary hover:underline">политикой конфиденциальности</a>{" "}
                          и даю согласие на обработку персональных данных.
                        </span>
                      </label>
                      {errors.agreed && <p className="mt-1.5 pl-7 text-xs text-destructive">{errors.agreed}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={{ scale: isSending ? 1 : 1.02 }}
                      whileTap={{ scale: isSending ? 1 : 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cv px-7 py-4 text-base font-semibold text-background shadow-neon-violet disabled:opacity-60"
                    >
                      <Send className="size-4" />
                      {isSending ? "Отправка..." : cfg.buttonText}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
