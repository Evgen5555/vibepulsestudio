import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function CtaFooter() {
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
          в <span className="text-gradient-cv">премиальный продукт</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
        >
          Напишите в Telegram — отвечу в течение часа и предложу первые шаги.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-cv px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-xl font-semibold text-background shadow-neon-violet w-full sm:w-auto"
          >
            <span
              aria-hidden
              className="absolute -inset-2 rounded-full bg-gradient-cv opacity-50 blur-2xl -z-10"
            />
            <Send className="size-5 sm:size-6" />
            Запустить ваш проект в Telegram
          </motion.a>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} NEXUS.studio · Все права защищены</div>
          <div className="flex items-center gap-6">
            <a href="#cta" className="hover:text-foreground">Telegram</a>
            <a href="mailto:hi@example.com" className="hover:text-foreground">Email</a>
            <a href="#top" className="hover:text-foreground">Наверх</a>
          </div>
        </div>
      </div>
    </section>
  );
}
