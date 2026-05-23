import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  badgeClass: string;
  ringClass: string;
  iconClass: string;
  glow?: string;
  glowBgClass?: string;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Идея",
    desc: "Обсуждаем задачу, цели и видение результата.",
    icon: Sparkles,
    badgeClass: "border-secondary/70 bg-secondary/15 text-secondary",
    ringClass: "border-secondary/50",
    iconClass: "text-secondary",
    glow: "shadow-neon-cyan",
    glowBgClass: "bg-secondary/30",
  },
  {
    n: "2",
    title: "Концепция",
    desc: "Создаём мудборд, референсы и техническое задание.",
    icon: Layers,
    badgeClass: "border-[var(--neon-blue)]/70 bg-[var(--neon-blue)]/15 text-[var(--neon-blue)]",
    ringClass: "border-[var(--neon-blue)]/50",
    iconClass: "text-[var(--neon-blue)]",
    glow: "shadow-neon-cyan",
    glowBgClass: "bg-[var(--neon-blue)]/30",
  },
  {
    n: "3",
    title: "AI-создание",
    desc: "Генерируем, дорабатываем и шлифуем результат.",
    icon: Cpu,
    badgeClass: "border-primary/70 bg-primary/15 text-primary",
    ringClass: "border-primary/70",
    iconClass: "text-primary",
    glow: "shadow-neon-violet",
    glowBgClass: "bg-primary/30",
  },
  {
    n: "4",
    title: "Результат",
    desc: "Сдаём готовый проект и поддерживаем после.",
    icon: Rocket,
    badgeClass:
      "border-[var(--neon-pink)]/70 bg-[var(--neon-pink)]/15 text-[var(--neon-pink)]",
    ringClass: "border-[var(--neon-pink)]/50",
    iconClass: "text-[var(--neon-pink)]",
    glow: "shadow-neon-pink",
    glowBgClass: "bg-[var(--neon-pink)]/30",
  },
];


export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm text-secondary mb-3">Процесс</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Как мы <span className="text-gradient-cv">работаем</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Процесс без подводных камней — вы точно знаете, что получите и когда.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px">
            <div className="absolute inset-0 rounded-full bg-border/60" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="absolute inset-0 rounded-full bg-gradient-cvp"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "left", filter: "blur(8px)" }}
              className="absolute inset-0 rounded-full bg-gradient-cvp opacity-70"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute top-0 bottom-0 left-12 w-px">
            <div className="absolute inset-0 bg-border/60" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-pink)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24, scale: 0.9 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 24, scale: 0.9 }
                  }
                  transition={{
                    delay: 0.3 + i * 0.18,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative flex md:flex-col items-start md:items-center gap-5 md:gap-6 md:text-center"
                >
                  <div className="relative shrink-0">
                    {s.glow && (
                      <div className={`absolute -inset-6 rounded-full ${s.glowBgClass ?? "bg-primary/30"} blur-2xl opacity-90`} />
                    )}
                    <div
                      className={`relative size-24 rounded-full glass border ${s.ringClass} flex items-center justify-center transition-shadow ${s.glow ?? ""}`}
                    >
                      <Icon className={`size-9 ${s.iconClass}`} />
                      <span
                        className={`absolute -top-1 -right-1 size-7 rounded-full border ${s.badgeClass} flex items-center justify-center text-xs font-semibold`}
                      >
                        {s.n}
                      </span>
                    </div>
                  </div>

                  <div className="md:mt-2">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
