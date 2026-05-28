import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Rocket, Sparkles, MessageCircle, X, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { VkIcon } from "./VkIcon";
import { TelegramIcon } from "./TelegramIcon";
import { MaxIcon } from "./MaxIcon";
import logo from "@/assets/logo.png";

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
    title: "Написать",
    titleAccent: "в МАХ",
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

    setIsSending(true);
    try {
      const res = await fetch("/api/public/telegram-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: activeModal,
          name: formData.name,
          messenger: formData.messenger,
          username: formData.username,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setIsSuccess(true);
    } catch (err) {
      console.error("Ошибка отправки:", err);
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
          className="text-secondary mb-5 uppercase tracking-widest text-lg"
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
          Превращу вашу идею <br className="hidden sm:block" />
          в <span className="text-gradient-cv">премиальный продукт</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
        >
          Расскажите о вашей задаче — разработаю индивидуальное решение, определю формат и рассчитаю точную стоимость.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://t.me/evgeniya5_5"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-cv px-7 py-4 text-base font-semibold text-background shadow-neon-violet w-full"
          >
            <span aria-hidden className="absolute -inset-1.5 rounded-full bg-gradient-cv opacity-40 blur-xl -z-10" />
            <TelegramIcon className="size-5" />
            Написать в ТГ
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://vk.ru/neuro_evgeniya_k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary/50 bg-primary/5 px-7 py-4 text-base font-medium text-primary hover:bg-primary/10 shadow-neon-violet w-full"
          >
            <VkIcon className="size-4" />
            Написать в ВК
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://max.ru/id503601616932_biz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-secondary/60 bg-secondary/5 px-7 py-4 text-base font-medium text-secondary hover:bg-secondary/10 shadow-neon-cyan w-full"
          >
            <MaxIcon className="size-5" />
            Написать в МАХ
          </motion.a>
        </motion.div>

      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-24">
        <div className="pt-12 border-t border-border/60 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="text-center">

              <div className="flex items-center justify-center gap-3">
                <img src={logo} alt="VibePulse studio" className="h-10 w-10 rounded-full drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                <span className="text-base font-semibold">
                  <span className="text-gradient-cv">VibePulse</span> studio
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto whitespace-pre-line">
                Сайты, автоворонки, боты, дизайн и полная{"\n"}интеграция с помощью ИИ.
              </p>
            </div>

            <div className="text-center">

              <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="https://t.me/evgeniya5_5" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Telegram</a></li>
                <li><a href="https://max.ru/id503601616932_biz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">MAX</a></li>
                <li><a href="https://vk.ru/neuro_evgeniya_k" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">ВКонтакте</a></li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="text-sm font-semibold text-foreground mb-4">Документы</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">Политика конфиденциальности</Link></li>
                <li><Link to="/offer" className="hover:text-foreground">Публичная оферта</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border/40 text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} <span className="text-gradient-cv font-semibold">VibePulse</span> studio · Все права защищены
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
