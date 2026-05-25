import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import MatrixPortrait from "./MatrixPortrait";
import { MaxIcon } from "./MaxIcon";


export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
            <h1 className="font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)]">
              Где идеи оживают <br className="hidden sm:block" />
              через маркетинг и{" "}
              <span className="text-gradient-cv">AI</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              Сайты, автоворонки, боты с окупаемостью в первый месяц. Сильная аналитика,
              эстетичный дизайн и полная интеграция ИИ: от нейрофотосессий и AI-видео
              до музыки и вейб-кодинга.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative group flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] text-white font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
              </span>
              <span>Пройти квиз → расчёт за 2 минуты</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://max.ru/id503601616932_biz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/70 bg-secondary/5 px-7 py-4 text-base font-medium text-secondary hover:bg-secondary/10 shadow-neon-cyan"
            >
              <MaxIcon className="size-4" />
              Написать в МАХ
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
