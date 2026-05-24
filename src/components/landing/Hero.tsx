import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-cv opacity-40 blur-2xl" />
            <div className="relative aspect-[5/6] rounded-[1.75rem] overflow-hidden border border-border/80 bg-card">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, color-mix(in oklab, var(--neon-violet) 35%, transparent), transparent 55%), radial-gradient(ellipse at 80% 90%, color-mix(in oklab, var(--neon-cyan) 28%, transparent), transparent 60%), linear-gradient(180deg, #0a0a14, #05050b)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="flex items-center gap-2 rounded-full glass border border-border px-3 py-1.5 text-xs text-foreground/80">
                  <span className="size-2 rounded-full bg-secondary shadow-neon-cyan" />
                  Доступен для проектов · Q3
                </div>
              </div>
            </div>
          </div>
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
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-neon-violet"
            >
              Обсудить проект
              <ArrowRight className="size-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/70 bg-secondary/5 px-7 py-4 text-base font-medium text-secondary hover:bg-secondary/10 shadow-neon-cyan"
            >
              Оставить заявку
            </motion.a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "+120", v: "проектов" },
              { k: "×3.4", v: "средний ROI" },
              { k: "7 лет", v: "в digital" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-gradient-cv">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
