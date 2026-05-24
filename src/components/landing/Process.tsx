import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Check, Cpu, Layers, Sparkles } from "lucide-react";
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
  particleColor: string;
};

const steps: Step[] = [
  {
    n: "1",
    title: "Разбор",
    desc: "Обсуждаем вашу идею, решаем, что именно нужно автоматизировать или упаковать.",

    icon: Sparkles,
    badgeClass: "border-secondary/70 bg-secondary/15 text-secondary",
    ringClass: "border-secondary/50",
    iconClass: "text-secondary",
    glow: "shadow-neon-cyan",
    glowBgClass: "bg-secondary/30",
    particleColor: "var(--neon-cyan)",
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
    particleColor: "var(--neon-blue)",
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
    particleColor: "var(--neon-violet)",
  },
  {
    n: "4",
    title: "Результат",
    desc: "Сдаём готовый проект и поддерживаем после.",
    icon: Check,
    badgeClass:
      "border-[var(--neon-pink)]/70 bg-[var(--neon-pink)]/15 text-[var(--neon-pink)]",
    ringClass: "border-[var(--neon-pink)]/50",
    iconClass: "text-[var(--neon-pink)]",
    glow: "shadow-neon-pink",
    glowBgClass: "bg-[var(--neon-pink)]/30",
    particleColor: "var(--neon-pink)",
  },
];

// Approximate horizontal centers of each circle in the grid (4 equal columns).
const CENTERS_PCT = [12.5, 37.5, 62.5, 87.5];

const STEP_DURATION = 900; // ms — pulse glow duration before particle launches
const TRAVEL_DURATION = 1100; // ms — particle travel duration
const CYCLE_PAUSE = 2000; // ms — pause after the rocket receives the last particle

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const [activeStep, setActiveStep] = useState(0);
  const [particleFrom, setParticleFrom] = useState<number | null>(null);

  // Sequential infinite loop: pulse step → fly particle → activate next → … → pause → restart
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      while (!cancelled) {
        for (let i = 0; i < steps.length; i++) {
          if (cancelled) return;
          setActiveStep(i);
          await wait(STEP_DURATION);
          if (cancelled) return;
          if (i < steps.length - 1) {
            setParticleFrom(i);
            await wait(TRAVEL_DURATION);
            if (cancelled) return;
            setParticleFrom(null);
          }
        }
        await wait(CYCLE_PAUSE);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

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
            {/* Desktop traveling particle */}
            <AnimatePresence>
              {particleFrom !== null && (
                <motion.div
                  key={`h-particle-${particleFrom}`}
                  className="hidden md:block pointer-events-none absolute top-12 z-20 size-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: steps[particleFrom].particleColor,
                    boxShadow: `0 0 12px 2px ${steps[particleFrom].particleColor}, 0 0 28px 6px ${steps[particleFrom].particleColor}`,
                    left: `${CENTERS_PCT[particleFrom]}%`,
                  }}
                  initial={{
                    left: `${CENTERS_PCT[particleFrom]}%`,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    left: `${CENTERS_PCT[particleFrom + 1]}%`,
                    opacity: [0, 1, 1, 0],
                    scale: [0.4, 1, 1, 0.6],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: TRAVEL_DURATION / 1000,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              )}
            </AnimatePresence>

            {/* Mobile traveling particle (vertical) */}
            <AnimatePresence>
              {particleFrom !== null && (
                <motion.div
                  key={`v-particle-${particleFrom}`}
                  className="md:hidden pointer-events-none absolute left-12 z-20 size-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: steps[particleFrom].particleColor,
                    boxShadow: `0 0 12px 2px ${steps[particleFrom].particleColor}, 0 0 28px 6px ${steps[particleFrom].particleColor}`,
                    top: `${CENTERS_PCT[particleFrom]}%`,
                  }}
                  initial={{
                    top: `${CENTERS_PCT[particleFrom]}%`,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    top: `${CENTERS_PCT[particleFrom + 1]}%`,
                    opacity: [0, 1, 1, 0],
                    scale: [0.4, 1, 1, 0.6],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: TRAVEL_DURATION / 1000,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.85, 1],
                  }}
                />
              )}
            </AnimatePresence>

            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = inView && activeStep === i;
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
                    {/* Base ambient halo */}
                    {s.glow && (
                      <div
                        className={`absolute -inset-6 rounded-full ${s.glowBgClass ?? "bg-primary/30"} blur-2xl opacity-90`}
                      />
                    )}
                    {/* Active pulsing halo */}
                    <motion.div
                      aria-hidden
                      className="absolute -inset-8 rounded-full blur-2xl pointer-events-none"
                      style={{ background: s.particleColor }}
                      animate={
                        isActive
                          ? { opacity: [0.55, 0.95, 0.55], scale: [1, 1.18, 1] }
                          : { opacity: 0, scale: 1 }
                      }
                      transition={
                        isActive
                          ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.5, ease: "easeOut" }
                      }
                    />
                    <motion.div
                      className={`relative size-24 rounded-full glass border ${s.ringClass} flex items-center justify-center ${s.glow ?? ""}`}
                      animate={
                        isActive
                          ? {
                              boxShadow: [
                                `0 0 18px 2px ${s.particleColor}, 0 0 40px 8px ${s.particleColor}`,
                                `0 0 32px 6px ${s.particleColor}, 0 0 80px 18px ${s.particleColor}`,
                                `0 0 18px 2px ${s.particleColor}, 0 0 40px 8px ${s.particleColor}`,
                              ],
                            }
                          : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
                      }
                      transition={
                        isActive
                          ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.5, ease: "easeOut" }
                      }
                    >
                      <Icon className={`size-9 ${s.iconClass}`} />
                      <span
                        className={`absolute -top-1 -right-1 size-7 rounded-full border ${s.badgeClass} flex items-center justify-center text-xs font-semibold`}
                      >
                        {s.n}
                      </span>
                    </motion.div>
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
