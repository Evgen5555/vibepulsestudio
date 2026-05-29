import { motion } from "framer-motion";
import { Sparkles, Laptop, Star, TrendingUp, Rocket } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import MatrixPortrait from "./MatrixPortrait";
import { VkIcon } from "./VkIcon";


export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <MatrixPortrait />
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground/70 mb-6"
            >
              <Sparkles className="size-3.5 text-secondary" />
              AI-маркетинг · Premium-сайты · Автоворонки
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              <h1 className="font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,6.5vw,5rem)]">
                Сайты и автоворонки с{" "}
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--neon-blue),var(--neon-violet))]">
                  окупаемостью за 30 дней
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
                Запуск под ключ за 5–14 дней от 25 000 ₽. AI-маркетинг, сильная аналитика
                и Apple-эстетика для экспертов, онлайн-школ и продуктовых брендов.
              </p>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/70"
            >
              <span className="inline-flex items-center gap-1.5">
                <Rocket className="size-3.5 text-primary" />
                <b className="text-foreground">40+</b> проектов
              </span>
              <span className="inline-flex items-center gap-1.5">
                <TrendingUp className="size-3.5 text-secondary" />
                Средний ROI <b className="text-foreground">x3.4</b>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-3.5 text-primary" />
                <b className="text-foreground">5.0</b> от клиентов
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-secondary" />
                Окупаемость <b className="text-foreground">2.3 мес</b>
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
        >
          {/* PRIMARY CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] text-white font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] flex-1 sm:flex-initial sm:min-w-[320px]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
            </span>
            <span>Пройти квиз и получить расчёт</span>
          </motion.button>

          {/* SECONDARY ghost buttons */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate({ to: "/roi" })}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            <Laptop className="size-4 text-primary" />
            Калькулятор прибыли
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="https://vk.ru/neuro_evgeniya_k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
          >
            <VkIcon className="size-4" />
            Написать в ВК
          </motion.a>
        </motion.div>

        <p className="mt-4 text-xs text-muted-foreground">
          ⚡ В этом месяце беру только 3 новых проекта — закрепите место за собой
        </p>
      </div>
    </section>
  );
}
