import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles, TrendingDown, Send, Bot, Code, Palette, Video, Music, ShieldCheck } from "lucide-react";
const services = [
  {
    id: "bot",
    title: "Телеграм-боты и автоворонки",
    myPrice: 15e3,
    marketPrice: 8e4,
    timeSaving: "24/7 обработка лидов без менеджера",
    icon: /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-primary" })
  },
  {
    id: "code",
    title: "Вайб-кодинг (сайты и приложения)",
    myPrice: 5e4,
    marketPrice: 12e4,
    timeSaving: "Сборка за 3–7 дней вместо месяца",
    icon: /* @__PURE__ */ jsx(Code, { className: "w-5 h-5 text-secondary" })
  },
  {
    id: "design",
    title: "AI-дизайн и цифровые аватары",
    myPrice: 25e3,
    marketPrice: 9e4,
    timeSaving: "Премиум-визуал без фотостудий",
    icon: /* @__PURE__ */ jsx(Palette, { className: "w-5 h-5 text-primary" })
  },
  {
    id: "video",
    title: "AI-видео и промо Reels",
    myPrice: 2e4,
    marketPrice: 9e4,
    timeSaving: "Кинематографичный ИИ-продакшн в клик",
    icon: /* @__PURE__ */ jsx(Video, { className: "w-5 h-5 text-secondary" })
  },
  {
    id: "music",
    title: "AI-музыка и эксклюзивные треки",
    myPrice: 8e3,
    marketPrice: 45e3,
    timeSaving: "Уникальный саундтрек без авторских прав",
    icon: /* @__PURE__ */ jsx(Music, { className: "w-5 h-5 text-primary" })
  },
  {
    id: "turnkey",
    title: "Запуск под ключ (все системы)",
    myPrice: 15e4,
    marketPrice: 45e4,
    timeSaving: "Готовый бизнес-проект за 2–4 недели",
    icon: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-secondary" })
  }
];
const fmt = (n) => n.toLocaleString("ru-RU");
function RoiCalculator() {
  const [selected, setSelected] = useState([]);
  const toggle = (id) => setSelected(
    (prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
  );
  const totalMy = selected.reduce(
    (sum, id) => sum + (services.find((s) => s.id === id)?.myPrice ?? 0),
    0
  );
  const totalMarket = selected.reduce(
    (sum, id) => sum + (services.find((s) => s.id === id)?.marketPrice ?? 0),
    0
  );
  const economy = totalMarket - totalMy;
  return /* @__PURE__ */ jsx("section", { id: "calculator", className: "relative py-28 sm:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-[11px] font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-3 py-1 rounded-full", children: "Калькулятор эффективности" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.25rem,6vw,4.5rem)] mt-5", children: [
            "Посчитайте вашу",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "выгоду и скорость" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto", children: "Выберите AI-инструменты и увидите разницу между классической студией и высокоскоростным вайбкодингом." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase text-muted-foreground tracking-[0.2em]", children: "Выберите необходимые услуги:" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: services.map((service) => {
          const isSelected = selected.includes(service.id);
          return /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { y: -2 },
              whileTap: { scale: 0.98 },
              onClick: () => toggle(service.id),
              className: `text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-40 ${isSelected ? "glass border-primary/60 shadow-neon-violet text-foreground" : "bg-card/40 border-border hover:border-border/80 text-foreground/90"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between w-full", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2.5 rounded-xl bg-background/60 border border-border", children: service.icon }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${isSelected ? "border-primary bg-primary" : "border-border"}`,
                      children: isSelected && /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-background rounded-full" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold leading-snug line-clamp-1", children: service.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground mt-1 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-secondary flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "truncate", children: service.timeSaving })
                  ] })
                ] })
              ]
            },
            service.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "glass border border-border rounded-3xl p-6 md:p-8 shadow-neon-violet relative overflow-hidden sticky top-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
          "Аналитика вашего бюджета"
        ] }),
        selected.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-12 border border-dashed border-border rounded-2xl bg-background/20", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground px-4", children: "Вы ещё не выбрали ни одной услуги. Кликните на карточки слева, чтобы рассчитать окупаемость." }) }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: selected.map((id) => {
            const s = services.find((x) => x.id === id);
            if (!s) return null;
            const r = s.myPrice / s.marketPrice * 100;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                className: "space-y-2 pb-4 border-b border-border/40 last:border-0 last:pb-0",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    s.icon,
                    /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold leading-snug flex-1", children: s.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground mb-1", children: [
                      /* @__PURE__ */ jsx("span", { children: "Агентство" }),
                      /* @__PURE__ */ jsxs("span", { className: "line-through", children: [
                        "от ",
                        fmt(s.marketPrice),
                        " ₽"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-background/60 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-muted rounded-full w-full" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] font-semibold text-secondary mb-1", children: [
                      /* @__PURE__ */ jsx("span", { children: "Vibecoding" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-foreground font-bold", children: [
                        "от ",
                        fmt(s.myPrice),
                        " ₽"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-background/60 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: `${r}%` },
                        transition: { duration: 0.6, ease: "easeOut" },
                        className: "h-full bg-gradient-cv rounded-full"
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-muted-foreground flex items-start gap-1.5 pt-1", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-secondary flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: s.timeSaving })
                  ] })
                ]
              },
              id
            );
          }) }),
          /* @__PURE__ */ jsx("hr", { className: "border-border" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Итого агентство:" }),
              /* @__PURE__ */ jsxs("span", { className: "line-through text-muted-foreground", children: [
                "от ",
                fmt(totalMarket),
                " ₽"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-secondary", children: "Итого Vibecoding:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-bold text-foreground", children: [
                "от ",
                fmt(totalMy),
                " ₽"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("hr", { className: "border-border" }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-card/40 to-card/20 border border-primary/20 relative", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] font-medium text-primary uppercase tracking-[0.18em] flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(TrendingDown, { className: "w-4 h-4" }),
              "Чистая экономия бюджета:"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-3xl md:text-4xl font-bold mt-2 tracking-tight", children: [
              "от ",
              fmt(economy),
              " ₽"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground mt-3 leading-relaxed", children: "* Экономия за счёт нейросетей премиум-уровня и высокой скорости ручной кастомизации кода. Никаких переплат за раздутый штат менеджеров." })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.01 },
              whileTap: { scale: 0.99 },
              onClick: () => {
                const message = `Привет, Евгения! Посчитала проект в калькуляторе. Выбрала услуги от ${fmt(totalMy)} ₽. Хочу обсудить детальнее!`;
                window.open(
                  `https://t.me/evgeniya5_5?text=${encodeURIComponent(message)}`,
                  "_blank"
                );
              },
              className: "w-full py-4 px-6 rounded-full bg-gradient-cv text-background font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-neon-violet",
              children: [
                /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                "Зафиксировать стоимость в Telegram"
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }) });
}
function CyberBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    const dots = [];
    const LINK_DIST = 180;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    const area = canvas.width * canvas.height;
    const count = Math.min(90, Math.max(45, Math.round(area / 22e3)));
    const createDot = (initAll = false) => ({
      x: Math.random() * canvas.width,
      y: initAll ? Math.random() * canvas.height : canvas.height + 10,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -(Math.random() * 0.25 + 0.1),
      size: Math.random() * 0.8 + 0.6
    });
    for (let i = 0; i < count; i++) dots.push(createDot(true));
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d, idx) => {
        d.x += d.speedX;
        d.y += d.speedY;
        if (d.y < -10 || d.x < -10 || d.x > canvas.width + 10) {
          dots[idx] = createDot(false);
        }
      });
      ctx.lineWidth = 0.6;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.5;
            ctx.strokeStyle = `rgba(220, 220, 220, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(217, 119, 6, 0.55)";
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 w-full h-full bg-[#060a13] -z-10 pointer-events-none"
    }
  );
}
export {
  CyberBackground as C,
  RoiCalculator as R
};
