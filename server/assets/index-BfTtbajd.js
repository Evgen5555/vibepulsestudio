import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { X, Menu, Sparkles, Rocket, TrendingUp, Star, Headphones, Laptop, Clock, Users, ShieldCheck, Layers, Cpu, Check, Bot, Send, ArrowLeft, ArrowRight, Quote, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, MessageCircle, CheckCircle2, MessageSquareText, ChevronUp } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "@tanstack/react-router";
import { C as CyberBackground, R as RoiCalculator } from "./CyberBackground-CxJ0FlzO.js";
const logo = "/assets/logo-DBvOdk71.png";
function TelegramIcon$1({ className }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", className, children: /* @__PURE__ */ jsx("path", { d: "M21.944 3.244a1.2 1.2 0 0 0-1.262-.2L2.92 10.51c-.86.34-.85 1.56.014 1.887l4.36 1.65 1.69 5.27a1.2 1.2 0 0 0 1.97.49l2.43-2.27 4.45 3.27c.68.5 1.65.13 1.83-.7l3.05-14.6a1.2 1.2 0 0 0-.77-1.263Zm-4.32 4.05-7.86 6.95a.6.6 0 0 0-.19.34l-.46 2.62-1.31-4.09 9.45-5.74c.36-.22.71.24.37.54Z" }) });
}
const links = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" }
];
const TELEGRAM_URL = "https://t.me/evgeniya5_5";
function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter((el) => !!el);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "glass border-b border-border/60", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 font-semibold tracking-tight text-lg", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "VibePulse studio", className: "h-10 w-10 rounded-full drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" }),
        /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "Vibe" }),
          "Pulse",
          /* @__PURE__ */ jsx("span", { className: "text-foreground/60", children: " studio" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-8 text-sm", children: links.map((l) => {
        const id = l.href.slice(1);
        const isActive = activeSection === id;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: l.href,
            className: `relative pb-2 font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/90"}`,
            children: [
              l.label,
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-500 ${isActive ? "bg-gradient-to-r from-cyan-400 via-primary to-fuchsia-500 opacity-100 scale-x-100" : "bg-transparent opacity-0 scale-x-75"}`,
                  children: isActive && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-primary blur-[4px] opacity-80 rounded-full" })
                }
              )
            ]
          }
        ) }, l.href);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(
          motion.a,
          {
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.97 },
            href: TELEGRAM_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 shadow-neon-violet transition-colors",
            children: [
              /* @__PURE__ */ jsx(TelegramIcon$1, { className: "size-4" }),
              "Написать в Telegram"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border",
            "aria-label": "Меню",
            children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border/60 px-5 pb-5 pt-2", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: l.href,
          onClick: () => setOpen(false),
          className: "block py-3 text-foreground/80",
          children: l.label
        }
      ) }, l.href)),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: TELEGRAM_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => setOpen(false),
          className: "mt-2 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-medium shadow-neon-violet",
          children: [
            /* @__PURE__ */ jsx(TelegramIcon$1, { className: "size-4" }),
            "Написать в Telegram"
          ]
        }
      ) })
    ] }) })
  ] }) });
}
const portrait = "/assets/portrait-DbcmxL9W.png";
function MatrixPortrait() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    const fontSize = 14;
    let columns = 0;
    let drops = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      columns = Math.floor(rect.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * rect.height / fontSize);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF{}[]<>=+*/".split("");
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "rgba(180, 255, 200, 0.95)";
        ctx.fillText(text, x, y);
        ctx.fillStyle = "rgba(0, 255, 90, 0.75)";
        ctx.fillText(text, x, y - fontSize);
        if (y > rect.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative mx-auto w-full max-w-[380px] aspect-square rounded-[28px] overflow-hidden border border-white/5 bg-black",
      style: {
        boxShadow: "0 0 35px rgba(34, 197, 94, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: portrait,
            alt: "Evgeniya - Vibecoder",
            className: "absolute inset-0 w-full h-full object-contain object-bottom filter contrast-[1.05] brightness-[0.95]"
          }
        ),
        /* @__PURE__ */ jsx(
          "canvas",
          {
            ref: canvasRef,
            className: "absolute inset-0 w-full h-full pointer-events-none",
            style: {
              opacity: 0.35,
              maskImage: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
              WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
              mixBlendMode: "screen"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" })
      ]
    }
  );
}
const vkIcon = "/assets/vk-icon-CxBeCLYx.png";
function VkIcon({ className }) {
  return /* @__PURE__ */ jsx("img", { src: vkIcon, alt: "ВК", className });
}
function Hero() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("section", { id: "top", className: "relative pt-32 pb-16 sm:pt-40 sm:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "lg:col-span-5 order-2 lg:order-1",
          children: /* @__PURE__ */ jsx(MatrixPortrait, {})
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground/70 mb-6",
            children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-secondary" }),
              "AI-маркетинг · Premium-сайты · Автоворонки"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15, duration: 0.8 },
            children: /* @__PURE__ */ jsxs("h1", { className: "font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,6.5vw,5rem)] text-center", children: [
              "Где идеи оживают",
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--neon-blue),var(--neon-violet))] block sm:inline", children: "через маркетинг и AI" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground", children: "Запуск под ключ за 5–14 дней. AI-маркетинг, аналитика и эстетика для экспертов, онлайн-школ и продуктовых брендов." })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            className: "mt-6 flex-wrap gap-x-5 gap-y-4 text-xs text-foreground/70 flex-row flex items-start justify-start",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 whitespace-pre-line text-left", children: [
                /* @__PURE__ */ jsx(Rocket, { className: "size-3.5 text-primary shrink-0" }),
                /* @__PURE__ */ jsx("b", { className: "text-foreground", children: "AI-интеграция" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 whitespace-pre-line text-left", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "size-3.5 text-secondary shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Экономия до 70%" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 whitespace-pre-line text-left", children: [
                /* @__PURE__ */ jsx(Star, { className: "size-3.5 text-primary shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "AI-аналитика" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 whitespace-pre-line text-left", children: [
                /* @__PURE__ */ jsx(Headphones, { className: "size-3.5 text-secondary shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Поддержка после запуска" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.45 },
        className: "mt-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 w-full",
        children: [
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.97 },
              onClick: () => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" }),
              className: "relative group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] text-white font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] w-full",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-cyan-500" })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "Пройти квиз" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.02, borderColor: "rgba(99,102,241,0.8)" },
              whileTap: { scale: 0.97 },
              onClick: () => navigate({ to: "/roi" }),
              className: "inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-foreground/30 bg-transparent text-foreground/90 hover:text-foreground hover:border-primary/60 font-bold text-base transition-colors w-full",
              children: [
                /* @__PURE__ */ jsx(Laptop, { className: "size-4 text-primary" }),
                "Калькулятор прибыли"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              whileHover: { scale: 1.02, borderColor: "rgba(99,102,241,0.8)" },
              whileTap: { scale: 0.97 },
              href: "https://vk.ru/neuro_evgeniya_k",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-foreground/30 bg-transparent text-foreground/90 hover:text-secondary hover:border-secondary/60 font-bold text-base transition-colors w-full",
              children: [
                /* @__PURE__ */ jsx(VkIcon, { className: "size-4" }),
                "Написать в ВК"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "⚡ В этом месяце беру только 3 новых проекта — закрепите место за собой" })
  ] }) });
}
const metrics = [
  { label: "Проекты под ключ", icon: Rocket, tone: "violet" },
  { label: "AI-маркетинг", icon: TrendingUp, tone: "cyan" },
  { label: "AI-аналитика", icon: TrendingUp, tone: "violet" },
  { label: "5.0 рейтинг от клиентов", icon: Star, tone: "cyan" },
  { label: "Запуск от 5 дней", icon: Clock, tone: "violet" },
  { label: "95% клиентов возвращаются", icon: Users, tone: "cyan" },
  { label: "30 дней техподдержки в подарок", icon: ShieldCheck, tone: "violet" }
];
function Badge({ label, tone, Icon }) {
  const isViolet = tone === "violet";
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: `inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm font-medium whitespace-nowrap ${isViolet ? "border-primary/60 text-primary shadow-neon-violet bg-primary/5" : "border-secondary/60 text-secondary shadow-neon-cyan bg-secondary/5"}`,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
        label
      ]
    }
  );
}
function Marquee() {
  const items = [...metrics, ...metrics, ...metrics];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-10 border-y border-border/60 overflow-hidden marquee-pause", "aria-label": "Ключевые цифры", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "flex w-max marquee-track gap-5", children: items.concat(items).map((b, i) => /* @__PURE__ */ jsx(Badge, { label: b.label, tone: b.tone, Icon: b.icon }, i)) })
  ] });
}
const MotionLink = motion(Link);
function ServicesTeaser() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7 },
      className: "relative glass border border-border rounded-3xl p-8 sm:p-14 px-[40px] py-[40px] shadow-neon-violet overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px rounded-3xl bg-gradient-cvp opacity-20 blur-2xl -z-10" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center text-center gap-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "max-w-3xl text-foreground text-lg sm:text-2xl font-medium leading-snug", children: [
            "Высокоскоростной вайб - кодинг: запускаю сложные системы от",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "5 дней" }),
            " вместо",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "2 месяцев" }),
            " нудных согласований."
          ] }),
          /* @__PURE__ */ jsx(
            MotionLink,
            {
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.97 },
              to: "/services",
              className: "inline-flex items-center justify-center gap-2 rounded-full bg-card/60 border border-border text-foreground px-8 py-4 text-sm sm:text-base font-bold hover:border-primary transition-colors",
              children: "Каталог решений VibePulse studio →"
            }
          )
        ] })
      ]
    }
  ) }) });
}
const audience1 = "/assets/audience-1-AoyVdrym.png";
const audience2 = "/assets/audience-2-CCfqcWpD.png";
const audience3 = "/assets/audience-3-S3hTIhF_.png";
const audience4 = "/assets/audience-4-CCXu_d8L.png";
const targetCards = [
  {
    id: 1,
    title: "Эксперты & Предприниматели",
    description: "Упаковка сильного личного бренда, стильный сайт и автоматизация прогрева аудитории через умных ботов.",
    image: audience1
  },
  {
    id: 2,
    title: "Онлайн-школы & Инфобизнес",
    description: "Внедрение AI-сотрудников, сквозная автоматизация процессов, CRM и быстрая квалификация входящих лидов.",
    image: audience2
  },
  {
    id: 3,
    title: "Бизнес",
    description: "Создание кинематографичного AI-визуала, цифровых аватаров и генерация продающих Reels без трат на студии, моделей и операторов.",
    image: audience3
  },
  {
    id: 4,
    title: "Маркетологи",
    description: "Замена «ручных» заявок на интерактивные воронки: автоматический прием, квалификация и прогрев лидов 24/7 без участия человека.",
    image: audience4
  }
];
const TargetAudience = () => {
  return /* @__PURE__ */ jsx("section", { id: "audience", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-14 mx-auto text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Для кого" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
        "Кому подойдёт",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "сотрудничество" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative w-full rounded-[32px] border border-white/10 p-8 md:p-12 overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8)]",
        style: {
          background: "linear-gradient(135deg, #012226 0%, #030812 50%, #1e091e 100%)",
          boxShadow: "0 0 45px rgba(168, 85, 247, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-[400px] h-[300px] bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-600/15 rounded-full filter blur-[100px] pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: targetCards.map((card) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col rounded-2xl overflow-hidden p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-100 transition-all duration-300 hover:translate-y-[-4px] bg-inherit",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: card.image,
                    alt: card.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-grow justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-extrabold text-base md:text-lg leading-snug mb-2 tracking-tight text-slate-100", children: card.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs leading-relaxed font-normal text-gray-300", children: card.description })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6 pt-3 border-t border-gray-100 text-[10px] font-bold tracking-wider", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "VP LAB // 2026" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-amber-500 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-amber-500 inline-block animate-pulse" }),
                      "ACTIVE"
                    ] })
                  ] })
                ] })
              ]
            },
            card.id
          )) })
        ]
      }
    )
  ] }) });
};
const fleurImage = "/assets/portfolio-fleur-Bq5VzqDX.png";
const friendlyReminderImage = "/assets/portfolio-friendly-reminder-CAqeN41m.png";
const tochkaVesaImage = "/assets/portfolio-tochka-vesa-KZWsoXy7.png";
const neonBloomImage = "/assets/portfolio-neon-bloom-x5l4XGP5.png";
const quizDetectiveImage = "/assets/portfolio-quiz-detective-Bz_0mpOx.png";
const finTrackerImage = "/assets/portfolio-fin-tracker-DGwfIVoo.png";
const projects = [
  {
    id: "p1",
    number: "01",
    title: "Fleur",
    description: "Сайт с каталогом, корзиной и кастомной админ-панелью для управления заказами.",
    githubUrl: "https://evgen5555.github.io/petal-posh-moscow/",
    image: fleurImage
  },
  {
    id: "p2",
    number: "02",
    title: "Продуктивный перерыв",
    description: "Система для отдыха от работы, предотвращения выгорания и повышения фокуса.",
    githubUrl: "https://evgen5555.github.io/Friendly-reminder/",
    image: friendlyReminderImage
  },
  {
    id: "p3",
    number: "03",
    title: "Точка Веса",
    description: "Интерактивное приложение для расчета суточной калорийности, трекинг нормы воды и советы.",
    githubUrl: "https://evgen5555.github.io/Calculator-callorii/",
    image: tochkaVesaImage
  },
  {
    id: "p4",
    number: "04",
    title: "Neon Bloom Game",
    description: "Динамичная веб-игра с неоновым дизайном и продвинутой игровой логикой. Слияния шаров.",
    githubUrl: "https://evgen5555.github.io/Ball-/",
    image: neonBloomImage
  },
  {
    id: "p5",
    number: "05",
    title: "Квиз-детектив",
    description: "Интерактивный лид-магнит для бизнес-аудитории. Реализован в форме игрового сценария.",
    githubUrl: "https://evgen5555.github.io/quiz/",
    image: quizDetectiveImage
  },
  {
    id: "p6",
    number: "06",
    title: "Фин-трекер",
    description: "Микро-приложение для мониторинга личных или проектных финансов без сложных таблиц.",
    githubUrl: "https://evgen5555.github.io/Calculator/",
    image: finTrackerImage
  }
];
const FilmStripPortfolio = () => {
  const duplicated = [...projects, ...projects, ...projects, ...projects];
  return /* @__PURE__ */ jsxs("section", { id: "portfolio", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 mb-12 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Портфолио" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
        "Кинолента",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "моих проектов" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full bg-[#0a0a0a] py-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] border-y border-white/5", children: [
      /* @__PURE__ */ jsx("div", { className: "h-6 bg-[#0a0a0a] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-3 px-3 h-full items-center animate-[marquee_40s_linear_infinite]", children: Array.from({ length: 120 }).map((_, i) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "shrink-0 w-6 h-3 rounded-sm bg-[#1a1a1a] border border-white/5"
        },
        i
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-[#0d0d0d] py-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 w-max animate-[marquee_40s_linear_infinite]", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-40 h-56 flex items-center justify-center text-[#D4AF37] font-mono text-sm tracking-[0.3em] border border-[#D4AF37]/30 bg-[#0a0a0a]", children: "● START" }),
          duplicated.map((project, index) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: project.githubUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group shrink-0 w-80 h-56 relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden",
              children: [
                project.image && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: project.image,
                      alt: project.title,
                      className: "absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "absolute top-2 left-2 w-3 h-3 border-l border-t border-white/30 group-hover:border-[#D4AF37] z-10" }),
                /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2 w-3 h-3 border-r border-t border-white/30 group-hover:border-[#D4AF37] z-10" }),
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/30 group-hover:border-[#D4AF37] z-10" }),
                /* @__PURE__ */ jsx("span", { className: "absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/30 group-hover:border-[#D4AF37] z-10" }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full w-full p-6 flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[#D4AF37] font-mono text-5xl font-bold tracking-tight opacity-90 group-hover:opacity-100 transition drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]", children: project.number }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-semibold tracking-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", children: project.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm leading-relaxed line-clamp-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]", children: project.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition" })
              ]
            },
            `${project.id}-${index}`
          )),
          /* @__PURE__ */ jsx("div", { className: "shrink-0 w-40 h-56 flex items-center justify-center text-[#D4AF37] font-mono text-sm tracking-[0.3em] border border-[#D4AF37]/30 bg-[#0a0a0a]", children: "● END" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-6 bg-[#0a0a0a] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex gap-3 px-3 h-full items-center animate-[marquee_40s_linear_infinite]", children: Array.from({ length: 120 }).map((_, i) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "shrink-0 w-6 h-3 rounded-sm bg-[#1a1a1a] border border-white/5"
        },
        i
      )) }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
      ` })
  ] });
};
const steps = [
  {
    n: "1",
    title: "Разбор",
    desc: "Обсуждаю вашу идею, задачи, интеграции.",
    icon: Sparkles,
    badgeClass: "border-secondary/70 bg-secondary/15 text-secondary",
    ringClass: "border-secondary/50",
    iconClass: "text-secondary",
    glow: "shadow-neon-cyan",
    glowBgClass: "bg-secondary/30",
    particleColor: "var(--neon-cyan)"
  },
  {
    n: "2",
    title: "Архитектура",
    desc: "Продумываю, как все будет устроено. Составляю т/з.",
    icon: Layers,
    badgeClass: "border-[var(--neon-blue)]/70 bg-[var(--neon-blue)]/15 text-[var(--neon-blue)]",
    ringClass: "border-[var(--neon-blue)]/50",
    iconClass: "text-[var(--neon-blue)]",
    glow: "shadow-neon-cyan",
    glowBgClass: "bg-[var(--neon-blue)]/30",
    particleColor: "var(--neon-blue)"
  },
  {
    n: "3",
    title: "Сборка",
    desc: "Собираю с помощью AI логику, тексты, интеграции.",
    icon: Cpu,
    badgeClass: "border-primary/70 bg-primary/15 text-primary",
    ringClass: "border-primary/70",
    iconClass: "text-primary",
    glow: "shadow-neon-violet",
    glowBgClass: "bg-primary/30",
    particleColor: "var(--neon-violet)"
  },
  {
    n: "4",
    title: "Результат",
    desc: "Запускаю проект и передаю его вам. Остаюсь на связи.",
    icon: Check,
    badgeClass: "border-[var(--neon-pink)]/70 bg-[var(--neon-pink)]/15 text-[var(--neon-pink)]",
    ringClass: "border-[var(--neon-pink)]/50",
    iconClass: "text-[var(--neon-pink)]",
    glow: "shadow-neon-pink",
    glowBgClass: "bg-[var(--neon-pink)]/30",
    particleColor: "var(--neon-pink)"
  }
];
const CENTERS_PCT = [12.5, 37.5, 62.5, 87.5];
const STEP_DURATION = 900;
const TRAVEL_DURATION = 1100;
const CYCLE_PAUSE = 2e3;
function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [activeStep, setActiveStep] = useState(0);
  const [particleFrom, setParticleFrom] = useState(null);
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
  return /* @__PURE__ */ jsx("section", { id: "process", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Процесс" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
        "Как я ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "работаю" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-base sm:text-lg", children: "Процесс без подводных камней — вы точно знаете, что получите и когда." })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref, className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden md:block absolute top-12 left-[10%] right-[10%] h-px", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-border/60" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            animate: inView ? { scaleX: 1 } : { scaleX: 0 },
            transition: { duration: 1.4, ease: "easeOut", delay: 0.2 },
            style: { transformOrigin: "left" },
            className: "absolute inset-0 rounded-full bg-gradient-cvp"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            animate: inView ? { scaleX: 1 } : { scaleX: 0 },
            transition: { duration: 1.4, ease: "easeOut", delay: 0.2 },
            style: { transformOrigin: "left", filter: "blur(8px)" },
            className: "absolute inset-0 rounded-full bg-gradient-cvp opacity-70"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute top-0 bottom-0 left-12 w-px", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-border/60" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scaleY: 0 },
            animate: inView ? { scaleY: 1 } : { scaleY: 0 },
            transition: { duration: 1.4, ease: "easeOut", delay: 0.2 },
            style: { transformOrigin: "top" },
            className: "absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-pink)]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { children: particleFrom !== null && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "hidden md:block pointer-events-none absolute top-12 z-20 size-3 rounded-full -translate-x-1/2 -translate-y-1/2",
            style: {
              background: steps[particleFrom].particleColor,
              boxShadow: `0 0 12px 2px ${steps[particleFrom].particleColor}, 0 0 28px 6px ${steps[particleFrom].particleColor}`,
              left: `${CENTERS_PCT[particleFrom]}%`
            },
            initial: {
              left: `${CENTERS_PCT[particleFrom]}%`,
              opacity: 0,
              scale: 0.4
            },
            animate: {
              left: `${CENTERS_PCT[particleFrom + 1]}%`,
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1, 1, 0.6]
            },
            exit: { opacity: 0 },
            transition: {
              duration: TRAVEL_DURATION / 1e3,
              ease: "easeInOut",
              times: [0, 0.15, 0.85, 1]
            }
          },
          `h-particle-${particleFrom}`
        ) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: particleFrom !== null && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "md:hidden pointer-events-none absolute left-12 z-20 size-3 rounded-full -translate-x-1/2 -translate-y-1/2",
            style: {
              background: steps[particleFrom].particleColor,
              boxShadow: `0 0 12px 2px ${steps[particleFrom].particleColor}, 0 0 28px 6px ${steps[particleFrom].particleColor}`,
              top: `${CENTERS_PCT[particleFrom]}%`
            },
            initial: {
              top: `${CENTERS_PCT[particleFrom]}%`,
              opacity: 0,
              scale: 0.4
            },
            animate: {
              top: `${CENTERS_PCT[particleFrom + 1]}%`,
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1, 1, 0.6]
            },
            exit: { opacity: 0 },
            transition: {
              duration: TRAVEL_DURATION / 1e3,
              ease: "easeInOut",
              times: [0, 0.15, 0.85, 1]
            }
          },
          `v-particle-${particleFrom}`
        ) }),
        steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = inView && activeStep === i;
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24, scale: 0.9 },
              animate: inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.9 },
              transition: {
                delay: 0.3 + i * 0.18,
                duration: 0.6,
                ease: "easeOut"
              },
              whileHover: { scale: 1.05 },
              className: "group relative flex md:flex-col items-start md:items-center gap-5 md:gap-6 md:text-center",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
                  s.glow && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `absolute -inset-6 rounded-full ${s.glowBgClass ?? "bg-primary/30"} blur-2xl opacity-90`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      "aria-hidden": true,
                      className: "absolute -inset-8 rounded-full blur-2xl pointer-events-none",
                      style: { background: s.particleColor },
                      animate: isActive ? { opacity: [0.55, 0.95, 0.55], scale: [1, 1.18, 1] } : { opacity: 0, scale: 1 },
                      transition: isActive ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5, ease: "easeOut" }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: `relative size-24 rounded-full glass border ${s.ringClass} flex items-center justify-center ${s.glow ?? ""}`,
                      animate: isActive ? {
                        boxShadow: [
                          `0 0 18px 2px ${s.particleColor}, 0 0 40px 8px ${s.particleColor}`,
                          `0 0 32px 6px ${s.particleColor}, 0 0 80px 18px ${s.particleColor}`,
                          `0 0 18px 2px ${s.particleColor}, 0 0 40px 8px ${s.particleColor}`
                        ]
                      } : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
                      transition: isActive ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" } : { duration: 0.5, ease: "easeOut" },
                      children: [
                        /* @__PURE__ */ jsx(Icon, { className: `size-9 ${s.iconClass}` }),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: `absolute -top-1 -right-1 size-7 rounded-full border ${s.badgeClass} flex items-center justify-center text-xs font-semibold`,
                            children: s.n
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "md:mt-2", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: s.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-xs text-center", children: s.desc })
                ] })
              ]
            },
            s.title
          );
        })
      ] })
    ] })
  ] }) });
}
const questions = [
  {
    id: 1,
    title: "Какая у вас главная задача прямо сейчас?",
    options: [
      "Упаковать личный бренд (стильный сайт + позиционирование)",
      "Автоматизировать рутину (делегировать задачи нейросетям и ботам)",
      "Запустить MVP / новый продукт на базе AI в краткие сроки",
      "Всё сразу: нужен комплексный перезапуск под ключ"
    ]
  },
  {
    id: 2,
    title: "Кто ваша целевая аудитория?",
    options: [
      "Эксперты, менторы и бьюти-сфера",
      "Онлайн-школы и инфобизнес",
      "Локальный премиум-бизнес / Услуги",
      "Работаю в B2B / Другое"
    ]
  },
  {
    id: 3,
    title: "Что из этого у вас уже готово?",
    options: [
      "Только идея в голове (ТЗ нет, нужна помощь с концептом)",
      "Есть текстовые наработки и референсы, которые нравятся",
      "Есть старый сайт/бот, но они не продают и выглядят устаревшими",
      "Всё готово, нужно просто быстро и технически круто собрать"
    ]
  },
  {
    id: 4,
    title: "Какая автоматизация вам облегчит жизнь сильнее всего?",
    options: [
      "Умный Telegram-бот (греет аудиторию и ведёт базу)",
      "Автоматическая квалификация лидов и CRM-система",
      "Нейросети для генерации контента",
      "Пока не знаю, хочу послушать предложения на созвоне"
    ]
  },
  {
    id: 5,
    title: "Когда планируете запуск проекта?",
    options: [
      "Готова стартовать вчера (нужен быстрый результат)",
      "В течение ближайших 1–2 недель",
      "Пока прицениваюсь и планирую на будущее"
    ]
  }
];
function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = questions.length + 1;
  const progressPercentage = Math.round((currentStep - 1) / (totalSteps - 1) * 100);
  const handleOptionSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: option }));
    setTimeout(() => setCurrentStep((s) => Math.min(s + 1, totalSteps)), 280);
  };
  const handleNext = () => currentStep < totalSteps && setCurrentStep((s) => s + 1);
  const handlePrev = () => currentStep > 1 && setCurrentStep((s) => s - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz results:", { answers, formData });
    setIsSubmitted(true);
  };
  return /* @__PURE__ */ jsx("section", { id: "quiz", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Квиз" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
        "5 шагов — и вы получите",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "персональный расчёт" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative glass border border-border rounded-3xl p-6 sm:p-10 shadow-neon-violet", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px rounded-3xl bg-gradient-cvp opacity-20 blur-2xl -z-10" }),
      isSubmitted ? /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          className: "flex flex-col items-center text-center py-10",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-full bg-primary/30 blur-2xl" }),
              /* @__PURE__ */ jsx("div", { className: "relative size-20 rounded-full glass border border-primary/60 flex items-center justify-center shadow-neon-violet", children: /* @__PURE__ */ jsx(Check, { className: "size-10 text-primary" }) })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-semibold tracking-tight", children: "Анализирую ваши ответы…" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Стратегия почти готова. Уже вижу, какую архитектуру и AI-инструменты можно внедрить в ваш проект." }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-secondary text-sm", children: "Свяжусь с вами в Telegram в течение пары часов." })
          ]
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground mb-3", children: [
          /* @__PURE__ */ jsx("span", { children: currentStep <= questions.length ? `Вопрос ${currentStep} из ${questions.length}` : "Финал — контакты" }),
          /* @__PURE__ */ jsxs("span", { children: [
            progressPercentage,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full rounded-full bg-muted overflow-hidden mb-8", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "h-full bg-gradient-cvp rounded-full",
            initial: false,
            animate: { width: `${progressPercentage}%` },
            transition: { duration: 0.5, ease: "easeOut" }
          }
        ) }),
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: currentStep <= questions.length ? /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 16 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -16 },
            transition: { duration: 0.25 },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-semibold tracking-tight mb-6", children: questions[currentStep - 1].title }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: questions[currentStep - 1].options.map((option) => {
                const selected = answers[currentStep] === option;
                return /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleOptionSelect(option),
                    className: `text-left p-5 rounded-2xl border text-sm md:text-base font-medium transition-all duration-200 ${selected ? "bg-primary/15 border-primary text-foreground shadow-neon-violet" : "bg-card/40 border-border text-muted-foreground hover:border-secondary/60 hover:text-foreground hover:bg-card/70"}`,
                    children: option
                  },
                  option
                );
              }) })
            ]
          },
          `q-${currentStep}`
        ) : /* @__PURE__ */ jsxs(
          motion.form,
          {
            initial: { opacity: 0, x: 16 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -16 },
            transition: { duration: 0.25 },
            onSubmit: handleSubmit,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsx("div", { className: "size-10 rounded-full glass border border-secondary/60 flex items-center justify-center shadow-neon-cyan", children: /* @__PURE__ */ jsx(Bot, { className: "size-5 text-secondary" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-semibold tracking-tight", children: "Куда отправить расчёт и стратегию?" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Оставьте данные — подготовлю аудит под стек вашей задачи." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("label", { className: "block", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground mb-1.5 block", children: "Ваше имя *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "text",
                      value: formData.name,
                      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                      placeholder: "Анна",
                      className: "w-full bg-card/60 border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "block", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground mb-1.5 block", children: "Telegram / Телефон / E-mail *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      required: true,
                      type: "text",
                      value: formData.contact,
                      onChange: (e) => setFormData({ ...formData, contact: e.target.value }),
                      placeholder: "@username или +7…",
                      className: "w-full bg-card/60 border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-cvp text-primary-foreground font-semibold px-6 py-4 shadow-neon-violet hover:opacity-95 transition",
                  children: [
                    /* @__PURE__ */ jsx(Send, { className: "size-5" }),
                    "Получить расчёт"
                  ]
                }
              )
            ]
          },
          "form"
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
          currentStep > 1 ? /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: handlePrev,
              className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
                "Назад"
              ]
            }
          ) : /* @__PURE__ */ jsx("span", {}),
          currentStep <= questions.length && answers[currentStep] && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: handleNext,
              className: "inline-flex items-center gap-2 rounded-full glass border border-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground hover:shadow-neon-cyan transition",
              children: [
                "Дальше",
                /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "size-3.5 text-secondary" }),
          "Ответы помогут AI составить персональную стратегию"
        ] })
      ] })
    ] })
  ] }) });
}
const reviews = [
  {
    id: 1,
    name: "Мария П.",
    role: "Основатель бьюти-бренда",
    text: "Евгения удивила! Создала потрясающий цифровой аватар и упаковала концепт бренда так, что мы выросли в охватах в 1,5 раза за первую неделю. Быстро и стильно!",
    tag: "AI-Дизайн & Аватары",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-cyan)] to-[color:var(--neon-blue)]"
  },
  {
    id: 2,
    name: "Денис К.",
    role: "Владелец онлайн-школы",
    text: "Заказал автоворонку и умного Telegram-бота под ключ. Все понравилось, особено скорость разработки на вайбкодинге. За неделю все было сделано!",
    tag: "Телеграм-боты & Сайты",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-violet)] to-[color:var(--neon-blue)]"
  },
  {
    id: 3,
    name: "Елена",
    role: "VibePulse Studio",
    text: " Когда создавались ИИ-агенты, я и подумать не могла, что они полностью будут делать контент и изображения в моем стиле. Экономят часов 15 в неделю.",
    tag: "ИИ агенты",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-pink)] to-[color:var(--neon-violet)]"
  },
  {
    id: 4,
    name: "Алена В.",
    role: "Эксперт",
    text: "Нужно было протестировать новый продукт за считанные дни. Я в диком восторге от лендоса.",
    tag: "Вайб-кодинг & Сайты",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-pink)] to-[color:var(--neon-cyan)]"
  },
  {
    id: 5,
    name: "Константин",
    role: "Сеть магазинов",
    text: "Сотрудничаю не первый раз. Скорость сборки проектов поражает, мне в классической студия пилили 1,5 месяца, здесь собрали за неделю. Качество стиля на высоте.",
    tag: "Интеграция & IT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-cyan)] to-[color:var(--neon-violet)]"
  }
];
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);
  const handlePrev = () => setActiveIndex((p) => p === 0 ? reviews.length - 1 : p - 1);
  const handleNext = () => setActiveIndex((p) => p === reviews.length - 1 ? 0 : p + 1);
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-cv opacity-10 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Репутация" }),
        /* @__PURE__ */ jsx("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "Отзывы" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-5xl mx-auto h-[450px] flex items-center justify-center [perspective:1200px]", children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]", children: reviews.map((review, index) => {
        let offset = index - activeIndex;
        if (offset < -2) offset += reviews.length;
        if (offset > 2) offset -= reviews.length;
        const isActive = offset === 0;
        const isVisible = Math.abs(offset) <= 2;
        if (!isVisible) return null;
        const rotateY = offset * -28;
        const translateZ = isActive ? 120 : 0 - Math.abs(offset) * 120;
        const translateX = offset * 260;
        const opacity = isActive ? 1 : 0.4 - Math.abs(offset) * 0.1;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => !isActive && setActiveIndex(index),
            style: {
              transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
              opacity,
              zIndex: 10 - Math.abs(offset)
            },
            className: `absolute w-[300px] md:w-[340px] rounded-3xl p-6 md:p-8 glass transition-all duration-500 ease-out cursor-pointer select-none overflow-hidden border ${isActive ? "border-primary/60 shadow-neon-violet" : "border-border bg-card/40"}`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `absolute -top-16 -left-16 w-36 h-36 bg-gradient-to-br ${review.color} opacity-20 rounded-full blur-2xl`
                }
              ),
              /* @__PURE__ */ jsx(Quote, { className: "absolute right-6 top-6 w-12 h-12 text-foreground/5 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-card border border-border ${isActive ? "text-secondary" : "text-muted-foreground"}`,
                  children: review.tag
                }
              ),
              /* @__PURE__ */ jsxs("p", { className: "text-xs md:text-sm text-foreground/85 leading-relaxed mt-6 mb-6 italic min-h-[110px]", children: [
                "«",
                review.text,
                "»"
              ] }),
              /* @__PURE__ */ jsx("hr", { className: "border-border mb-4" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3.5", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `p-0.5 rounded-full bg-gradient-to-tr ${review.color} shadow-lg`,
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: review.avatar,
                        alt: review.name,
                        loading: "lazy",
                        className: "w-12 h-12 rounded-full object-cover border-2 border-background"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-tight", children: review.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: review.role }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5 mt-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                    Star,
                    {
                      className: `w-3 h-3 fill-current ${isActive ? "text-secondary" : "text-primary"}`
                    },
                    i
                  )) })
                ] })
              ] })
            ]
          },
          review.id
        );
      }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-6 mt-4 relative z-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 glass border border-border px-6 py-3 rounded-full shadow-xl", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handlePrev,
              "aria-label": "Предыдущий отзыв",
              className: "text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-36 h-1 bg-muted rounded-full overflow-hidden relative", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full bg-gradient-cv rounded-full transition-all duration-500 ease-out",
              style: {
                width: `${(activeIndex + 1) / reviews.length * 100}%`
              }
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleNext,
              "aria-label": "Следующий отзыв",
              className: "text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" }),
            className: "flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-foreground font-medium text-xs tracking-wide hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]",
            children: /* @__PURE__ */ jsx("span", { children: "Пройти квиз → расчёт за 2 минуты" })
          }
        )
      ] })
    ] })
  ] });
}
const faqData = [
  {
    question: "А что если проект не окупится?",
    answer: "Я не обещаю золотые горы — я обещаю системный подход. Перед стартом мы вместе считаем юнит-экономику и закладываем точку безубыточности. Если вы выполняете договорённости по трафику и обратной связи, а проект не выходит на окупаемость за оговорённый срок — я бесплатно докручиваю воронку до результата. Это прописано в соглашении."
  },
  {
    question: "Кому НЕ подойдут мои услуги?",
    answer: "Честно: если у вас нет понимания своей аудитории и продукта, бюджета на трафик хотя бы 30–50 тыс ₽/мес или готовности обрабатывать заявки — даже идеальный сайт не спасёт. Не работаю с серыми нишами (казино, крипто-скам, инфоцыганство). Если сомневаетесь — напишите, честно скажу, есть ли смысл."
  },
  {
    question: "Я не разбираюсь в маркетинге — справимся?",
    answer: "Да, и это нормально. Моя задача — взять стратегию, аналитику и техническую часть на себя, а от вас нужны только знания о продукте и клиентах. На каждом этапе объясняю простым языком, без терминов ради терминов. После запуска даю инструкцию, как читать метрики и что с ними делать."
  },
  {
    question: "Что делать, если мне не понравится промежуточный результат?",
    answer: "Я не работаю вслепую. Весь процесс разбит на микро-этапы: сначала утверждаем концепт и мудборд, затем логику (архитектуру) и только потом перехожу к сборке. Вы видите проект в реальном времени на каждом шаге. Если на первом этапе поймём, что мы совсем на разных волнах — я просто верну предоплату и мы разойдёмся без обид."
  },
  {
    question: "Сколько правок входит в стоимость?",
    answer: "В рамках утверждённого ТЗ/концепта мелкие правки не ограничены — доводим продукт до идеала вместе. Если же в процессе вы решите кардинально изменить бизнес-логику (например, вместо простого сайта сделать полноценную онлайн-школу с личными кабинетами), мы просто посчитаем это как дополнительную задачу."
  },
  {
    question: "Какие технические гарантии?",
    answer: "После запуска даю 30 дней полной бесплатной техподдержки (на пакете «Под ключ» — 60). Если вылезет любой баг, слетит интеграция или что-то пойдёт не так по моей вине — исправляю моментально и в приоритете. Всё фиксируется в простом соглашении перед стартом."
  },
  {
    question: "За счёт чего такие короткие сроки (5–14 дней)?",
    answer: "Это магия вайбкодинга (Vibecoding). Вместо рутинного написания тысяч строк кода с нуля, я использую топовые AI-инструменты для мгновенной генерации базы и интерфейсов. Затем вручную кастомизирую код, докручиваю логику до идеала и связываю системы. Скорость возрастает в 4–5 раз без потери качества."
  },
  {
    question: "Кто владеет кодом и правами на проект?",
    answer: "Вы и только вы. После финального расчёта я передаю чистый репозиторий на GitHub и полные доступы ко всем подключённым сервисам (база данных, Telegram-боты, хостинг). Проект полностью независим — сможете развивать его дальше с любым другим разработчиком или оставить на моём сопровождении."
  }
];
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "FAQ" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
        "Ответы на ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "важные вопросы" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base", children: "Разбираем ключевые моменты, страхи и организационные детали без лишней бюрократии." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: faqData.map((item, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? "glass border-primary/50 shadow-neon-violet" : "bg-card/40 border-border hover:border-secondary/50 hover:bg-card/60"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenIndex(isOpen ? null : index),
                className: "w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pr-4", children: [
                    /* @__PURE__ */ jsx(
                      HelpCircle,
                      {
                        className: `size-5 flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug", children: item.question })
                  ] }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `size-5 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground group-hover:text-foreground"}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsx("div", { className: "px-5 sm:px-6 pb-6 pl-14 sm:pl-15 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4", children: item.answer })
              },
              "content"
            ) })
          ]
        },
        index
      );
    }) })
  ] }) });
}
const tgIcon = "/assets/telegram-icon-UNJeQGuF.png";
function TelegramIcon({ className }) {
  return /* @__PURE__ */ jsx("img", { src: tgIcon, alt: "Telegram", className });
}
const maxIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIR0lEQVR42q3X+VNTWRYH8PzUVTN/RusgQtjyWGSRLQkJISHsrkAxstgC2qNCiyi4giICjbuWMz3TPdXtMr1YPQ6ERTZFJYrKIjSbkAiIEggBAoTkOyeLGjBUWzPeqltFFfXu/eSce859j8VaNpiE1iCH8OZbdkH1o6u8qxZWucvwJ04V7FxkWONcCQd2JdgOFXCxrwDHrgKeqyrg+3kVuKtrIba7g1j7BiQ6NGOHkxxZLm045NY9XcwMdJQzA2Xn3XvZrJUGkyr/o1Pi3VtrwqsNdgLaMJjmepreMth50uaMDGtdK+FICCd2BVwJwVlTCY/VMvh8Xo3g1TUQESDavhFbHe4hjS3HbuenyHPrwknmBb5mBnCR6dXTPHfdof2zJZuvOz30B5f0e0/YCXfgEFeLtdJqrA2thj1XBnt/mj60uRdtTtFgu1XC2ZkAbBmYtZXwXFMF71XVCCSAkACRFIHNBEhmt2CX8xPkunahkNOPUgKcZ/pxiekjSF/NEgSTL7/uuqsRzqn1cIqvBZsQjtIaOBLCkVsFx4AqsH1lcCKEEyFcCOFBaQkNqkeM4C6CnWsRQACBXR0iKAIbCfBn9kNkEGCfayeOEeA0ReGsBWCevWfNv/5Ct6f7kRYD81UzODub4JpSD5f4O3COo0kIJ0I486rgTIiUXY/ww40hKBSzWD40ah3q/zOG4j1d2OL6AEkUgXSnVjoHHTjM6cUpApSb0mAGXOT0LprOhM/l7r96FT+F52E53LMfgNlJkJRGuMXXwy2uDq6ESM15jLbnanzsGFPO4UJ2H3ZQBPa4tNM56KFzMIgyqzRYZinL79v+Hp9zXVhX1Aav/MfwzHoAj4xmuCc3wSOhEX/7eQgGA/6nIa+YQLZnJw4QoJAAJcvScJHT187yvzk8vf6bF/A7+xt8TrbDO68V67Ja4J35EA2tKvy/o+/RDPK8enGcGUIxAc5QFKwioGEF3VYj8PorBFwdwvryXvgVdMLn4DPcaBrDpxqt/57CUQIUURSM5XjhPQAsXoMO3F+nEPzDGAKuKOFfNoDcm8rfXVSnM0Ch1GLwxazp798b/8oZxwkClFIUzlmlgcW/Z0BIrR68X2bA/W4cIVdGoFAtrLjQ6/EFFJT1gR/egoDg+wj0u49Q/xYU5vZhWDG34nMqhQ4nvBSmcjxjDeDdB/j1hKjUI+RHLQoaZlZcpF+hRURaGwKjHiNQLEdQiBzBQY/A830EvmcrpD7P8KhpasXnf8p9Q+U4aOmKbwEPCdBIgCo9BL8uolGht/nw3LwBm3N6EZzQgeANbeBGPgVX9AQ83hPw/Z9C4P0MQqYN0V6dUA7M21yjQzZrKkfrrsjiyQlwlwA1BLitx6zOtv5GnRr8zH7wk3vAj+8CP46m9DlChJ0QcDsQ6tcJEZWc2LUbRXtGbP8IjR6F7kNLuqIZ0GwAv86A2Fr9iuFLP6eCcM8wBDuGINw2AMGWfghjeiGU9EAk6EFY4G8Q+/RAQovGegxAO2P7YJZylaZyLLeUownAe0CIBgO2N9sGzFNUJMc1CNuvQuhfXiN0+yhESS8h2qRAWOQgxGEvIOHR9B+ElA5apJsS/Z22D/KlDSOmciwzlWO/BWCMQpMBGS22AePTBohPaCE+RHPfNMS7JiFJewNJwiuEbxhFuJRm6AgigkYQ6TuKaPdR9HbYzuXFTaOmciyxlON7AJVj8kPbYVOoDAgrmoP4qBaS3FmE752BNGMaEclTkG5VIyJmApESFaL4KsQEqLDZT7ViCop4L1Fg1RXfAYxpiL5n+6FxWiysmADHCXCQANkzCN9JiDRCJGoQuXEKURFqRIdOIjpoEqV5tkt5jtbJc1fimFVXfA9oMZejxkbkjJeR9GsCFJrTINlHiC8J8AUBkgiwmQBRakSFqREfrsbYiO1UPq3SIpdR4gijeNcV3wMsaZCP247C7msLCDtJiCME2E+APQRIN6ZBg4ithIidQiJBOtt0K1bSd7kTyGFe4hABjGk4vRxg7Ip/H7ANuCZfRCxF4e7zRfzYqEPaiVlIM6chTZ1GIp2Hy1e1GB9f+U54NbiIvV4j+IoAeRQF4+146gMAdcWsZ7YX0VFUp7RL/zdF1aHWGD7qfeFS1iR2MaPIYoZxgABHKQrGrrgUQFNMTUmnxycdNde1SGXGkEmAvQTYT1E4TIBCE6AFmiXngACd6k+3eevdBSR5vUEyAdIJsJsZwT4C5BvTwBlSGwEdS6JA5Sgb/TSbV/08j41eKmxl3mAb8xpfMK/wJQGyKQoHjdXAGWxjcVtQtgRA5fi94sPFmgb06H71cS+H/X2LOJw9jRi/CboXqDEx40giQBoBdlrSkGusBo7iNIv/EGyuHIvWiJxOA/SWvXomDCh5oIfomwWIL8+jRKZDh1Jvuh/e3RXU9l+O6nG7egH5R2YQLaWmFDKJGH8CUAQ2EiCRopBCaciwpCGHo1w84DHoaPo2oF99bnk5xtFZ2FRHV/StRQiv6xD67QJCryxAdHbe1BUl1BU3FWixOX/W3BVTLV1xg6UrCs1dMcZ7AnGMCvGmNIxhx9s0cIbL330ZxbbjM0pFjXU5Wr+kCG/qIPwnIa4S4DwBSsxdUUKbr9gVRYTgEsCXouCuwhZLGrYTIJMZqc5f/n1oQZx9mw7TSwq9H4TQS4rgJ0J8TwBKg+giAcrmzF3xsKUr7rZ0xW2WrhhDCAkB+JY0eKqwyZgGzthiCmes/IPNrYfpTLSglHdP386v02tCKgjwCwGuEeAfBKBzIDpDiFMEOEaAAwTImjF3xRRCJBAgjgDGcyCgNAROaGK8JtriOKqSBI9xx+Ub/hcCKeyjT7PAOAAAAABJRU5ErkJggg==";
function MaxIcon({ className }) {
  return /* @__PURE__ */ jsx("img", { src: maxIcon, alt: "MAX", className });
}
const modalConfig = {
  apply: {
    title: "Оставить",
    titleAccent: "заявку",
    subtitle: "Коротко опишите задачу — мы свяжемся и подберём подходящее решение",
    label: "Что хотите заказать? *",
    placeholder: "Опишите услугу, формат, пожелания...",
    buttonText: "Оставить заявку",
    tgTitle: "🔥 ЗАЯВКА",
    Icon: Rocket
  },
  discuss: {
    title: "Написать",
    titleAccent: "в МАХ",
    subtitle: "Опишите идею — мы подберём подход, формат и стоимость под ваши задачи",
    label: "Расскажите о проекте *",
    placeholder: "Что хотите создать? Идея, цели, формат, сроки...",
    buttonText: "Отправить",
    tgTitle: "✨ ОБСУЖДЕНИЕ ПРОЕКТА",
    Icon: Sparkles
  },
  ask: {
    title: "Задать",
    titleAccent: "вопрос",
    subtitle: "Расскажите, что вас интересует — мы ответим в выбранном мессенджере",
    label: "Ваш вопрос *",
    placeholder: "Опишите, что вы хотите узнать...",
    buttonText: "Отправить вопрос",
    tgTitle: "❓ ВОПРОС",
    Icon: MessageCircle
  }
};
function CtaFooter() {
  const [activeModal, setActiveModal] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    messenger: "Telegram",
    username: "",
    agreed: false
  });
  const [errors, setErrors] = useState({});
  const closeModal = () => {
    setActiveModal(null);
    setIsSuccess(false);
    setIsSending(false);
    setFormData({ message: "", name: "", messenger: "Telegram", username: "", agreed: false });
    setErrors({});
  };
  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeModal]);
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: void 0 }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activeModal) return;
    const newErrors = {};
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
          message: formData.message
        })
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
  return /* @__PURE__ */ jsxs("section", { id: "cta", className: "relative py-28 sm:py-40", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 sm:px-8 text-center", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-secondary mb-5 uppercase tracking-widest text-lg",
          children: "Готовы начать?"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "font-semibold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]",
          children: [
            "Превращу вашу идею ",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
            "в ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "премиальный продукт" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.15 },
          className: "mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto",
          children: "Расскажите о вашей задаче — разработаю индивидуальное решение, определю формат и рассчитаю точную стоимость."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.25 },
          className: "mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
                href: "https://t.me/evgeniya5_5",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-cv px-7 py-4 text-base font-semibold text-background shadow-neon-violet w-full",
                children: [
                  /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute -inset-1.5 rounded-full bg-gradient-cv opacity-40 blur-xl -z-10" }),
                  /* @__PURE__ */ jsx(TelegramIcon, { className: "size-5" }),
                  "Написать в ТГ"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
                href: "https://vk.ru/neuro_evgeniya_k",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2.5 rounded-full border border-primary/50 bg-primary/5 px-7 py-4 text-base font-medium text-primary hover:bg-primary/10 shadow-neon-violet w-full",
                children: [
                  /* @__PURE__ */ jsx(VkIcon, { className: "size-4" }),
                  "Написать в ВК"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
                href: "https://max.ru/id503601616932_biz",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2.5 rounded-full border border-secondary/60 bg-secondary/5 px-7 py-4 text-base font-medium text-secondary hover:bg-secondary/10 shadow-neon-cyan w-full",
                children: [
                  /* @__PURE__ */ jsx(MaxIcon, { className: "size-5" }),
                  "Написать в МАХ"
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 mt-24", children: /* @__PURE__ */ jsxs("div", { className: "pt-12 border-t border-border/60 text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "VibePulse studio", className: "h-10 w-10 rounded-full drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" }),
            /* @__PURE__ */ jsxs("span", { className: "text-base font-semibold", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "VibePulse" }),
              " studio"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-muted-foreground max-w-md mx-auto whitespace-pre-line", children: [
            "Сайты, автоворонки, боты, дизайн и полная",
            "\n",
            "интеграция с помощью ИИ."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground mb-4", children: "Контакты" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://vk.ru/neuro_evgeniya_k", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: "ВКонтакте" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://t.me/evgeniya5_5", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: "Telegram" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://max.ru/id503601616932_biz", target: "_blank", rel: "noopener noreferrer", className: "hover:text-foreground", children: "MAX" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground mb-4", children: "Документы" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-foreground", children: "Политика конфиденциальности" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/offer", className: "hover:text-foreground", children: "Публичная оферта" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-border/40 text-sm text-muted-foreground text-center", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-cv font-semibold", children: "VibePulse" }),
        " studio · Все права защищены"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: activeModal && cfg && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md",
        onClick: closeModal,
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 12, scale: 0.98 },
            transition: { type: "spring", damping: 24, stiffness: 260 },
            onClick: (e) => e.stopPropagation(),
            className: "relative w-full max-w-lg rounded-3xl border border-border glass p-6 sm:p-8 shadow-neon-violet",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: closeModal,
                  "aria-label": "Закрыть",
                  className: "absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsx(X, { className: "size-4" })
                }
              ),
              isSuccess ? /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  className: "py-8 text-center",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "mx-auto inline-flex size-16 items-center justify-center rounded-full bg-gradient-cv text-background shadow-neon-violet", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "size-8" }) }),
                    /* @__PURE__ */ jsxs("h3", { className: "mt-6 text-2xl font-semibold tracking-[-0.02em]", children: [
                      "Заявка ",
                      /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "отправлена" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-sm mx-auto", children: "Спасибо! Данные уже улетели ко мне. Разберу вашу задачу и напишу в течение пары часов." }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: closeModal,
                        className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cv px-7 py-3 text-sm font-semibold text-background shadow-neon-violet",
                        children: "Закрыть окно"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-cv text-background shadow-neon-violet", children: /* @__PURE__ */ jsx(cfg.Icon, { className: "size-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold tracking-[-0.02em]", children: [
                      cfg.title,
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: cfg.titleAccent })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: cfg.subtitle })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "space-y-4 text-left", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-foreground/80 mb-2", children: cfg.label }),
                    /* @__PURE__ */ jsx(
                      "textarea",
                      {
                        rows: 4,
                        placeholder: cfg.placeholder,
                        value: formData.message,
                        onChange: (e) => handleInputChange("message", e.target.value),
                        className: `w-full rounded-2xl border bg-card/60 p-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 resize-none transition-colors ${errors.message ? "border-destructive focus:border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`
                      }
                    ),
                    errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1.5 pl-1 text-xs text-destructive", children: errors.message })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-foreground/80 mb-2", children: "Имя *" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Ваше имя",
                        value: formData.name,
                        onChange: (e) => handleInputChange("name", e.target.value),
                        className: `w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 transition-colors ${errors.name ? "border-destructive focus:border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsx("p", { className: "mt-1.5 pl-1 text-xs text-destructive", children: errors.name })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-foreground/80 mb-2", children: "Мессенджер *" }),
                      /* @__PURE__ */ jsxs(
                        "select",
                        {
                          value: formData.messenger,
                          onChange: (e) => handleInputChange("messenger", e.target.value),
                          className: "w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx("option", { value: "Telegram", children: "Telegram" }),
                            /* @__PURE__ */ jsx("option", { value: "WhatsApp", children: "WhatsApp" }),
                            /* @__PURE__ */ jsx("option", { value: "Viber", children: "Viber" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("label", { className: "block text-xs font-medium text-foreground/80 mb-2", children: "Ник / username *" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "@username",
                          value: formData.username,
                          onChange: (e) => handleInputChange("username", e.target.value),
                          className: `w-full rounded-xl border bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 transition-colors ${errors.username ? "border-destructive focus:border-destructive focus:ring-destructive" : "border-border focus:border-primary focus:ring-primary"}`
                        }
                      ),
                      errors.username && /* @__PURE__ */ jsx("p", { className: "mt-1.5 pl-1 text-xs text-destructive", children: errors.username })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 text-xs text-muted-foreground cursor-pointer", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: formData.agreed,
                          onChange: (e) => handleInputChange("agreed", e.target.checked),
                          className: `mt-0.5 size-4 rounded bg-card/60 cursor-pointer ${errors.agreed ? "border-destructive text-destructive focus:ring-destructive/40" : "border-border text-primary focus:ring-primary/40"}`
                        }
                      ),
                      /* @__PURE__ */ jsxs("span", { children: [
                        "Я ознакомлен(а) и согласен(на) с",
                        " ",
                        /* @__PURE__ */ jsx("a", { href: "#", className: "text-secondary hover:underline", children: "политикой конфиденциальности" }),
                        " ",
                        "и даю согласие на обработку персональных данных."
                      ] })
                    ] }),
                    errors.agreed && /* @__PURE__ */ jsx("p", { className: "mt-1.5 pl-7 text-xs text-destructive", children: errors.agreed })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      type: "submit",
                      disabled: isSending,
                      whileHover: { scale: isSending ? 1 : 1.02 },
                      whileTap: { scale: isSending ? 1 : 0.98 },
                      className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cv px-7 py-4 text-base font-semibold text-background shadow-neon-violet disabled:opacity-60",
                      children: [
                        /* @__PURE__ */ jsx(Send, { className: "size-4" }),
                        isSending ? "Отправка..." : cfg.buttonText
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}
const evaAvatar = "/assets/eva-avatar-D3J9CrDB.png";
const QUICK_REPLIES = [
  { emoji: "💼", text: "Узнать про продукты и услуги VibePulse" },
  { emoji: "⏱", text: "Каковы условия и сроки разработки?" },
  { emoji: "🚀", text: "Обсудить свой проект с Евгенией" }
];
const WELCOME = {
  id: "welcome",
  sender: "ai",
  text: "Привет! Я Ева — цифровой двойник Евгении в студии VibePulse. ✨Расскажи, какая задача перед тобой стоит, или выбери один из вариантов ниже.",
  timestamp: Date.now()
};
function mockAiReply(userText) {
  const t = userText.toLowerCase();
  if (t.includes("продукт") || t.includes("услуг"))
    return "В VibePulse мы делаем: премиум-лендинги, автоворонки с AI, чат-ботов и системы автоматизации. Под какую задачу подбираем решение?";
  if (t.includes("срок") || t.includes("услови") || t.includes("цена") || t.includes("стоим"))
    return "Стартуем от 5 дней на лендинг, 2–3 недели на автоворонку с AI. Предоплата 50%, остаток — после запуска. Расскажи подробнее — пришлю смету.";
  if (t.includes("евген") || t.includes("проект") || t.includes("обсуд") || t.includes("свой"))
    return "Отлично! Опиши задачу в двух словах — я передам Евгении, и она свяжется с тобой лично в Telegram в течение дня.";
  if (t.includes("ai") || t.includes("автоматиз"))
    return "AI закрывает рутину: квалификация лидов, ответы 24/7, генерация контента. В среднем экономит 30–60% операционного бюджета.";
  return "Поняла. Опиши задачу чуть подробнее — предложу решение и сориентирую по срокам.";
}
function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [welcomed, setWelcomed] = useState(true);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking, open]);
  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    const userMsg = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: Date.now()
    };
    const isFirst = !welcomed;
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => {
        const next = [...m];
        if (isFirst) {
          next.push({ ...WELCOME, id: `w-${Date.now()}`, timestamp: Date.now() });
        }
        next.push({
          id: `a-${Date.now()}`,
          sender: "ai",
          text: mockAiReply(trimmed),
          timestamp: Date.now()
        });
        return next;
      });
      if (isFirst) setWelcomed(true);
      setThinking(false);
    }, 1e3);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(input);
  };
  const userMsgCount = messages.filter((m) => m.sender === "user").length;
  const showQuickReplies = !thinking && userMsgCount === 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !open && /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        "aria-label": "Открыть AI-чат",
        className: "fixed bottom-5 right-5 z-50 group animate-[wobble_2.2s_ease-in-out_infinite] origin-bottom",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#8b5cf6] opacity-30 animate-ping" }),
          /* @__PURE__ */ jsx("span", { className: "absolute -inset-1 rounded-full bg-gradient-to-tr from-[#8b5cf6]/70 to-[#6d28d9]/70 opacity-70 blur-md group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsx("span", { className: "relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden border border-[#a78bfa]/50 shadow-[0_8px_32px_rgba(139,92,246,0.55)] bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] group-hover:scale-105 transition", children: /* @__PURE__ */ jsx(MessageSquareText, { className: "h-8 w-8 text-white", strokeWidth: 1.75 }) }),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-[#0a0a0f] shadow-[0_0_10px_rgba(74,222,128,0.9)]" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed z-50 bottom-0 right-0 sm:bottom-5 sm:right-5 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] sm:max-h-[85vh] origin-bottom-right animate-in fade-in zoom-in-95 duration-200",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#13131c] border border-[#d4af37]/20 shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5 border-b border-white/5 bg-black/40", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#6d28d9] to-[#d4af37] opacity-70 blur-[2px]" }),
              /* @__PURE__ */ jsx("div", { className: "relative h-12 w-12 rounded-full overflow-hidden border border-[#d4af37]/40 bg-[#0a0a0f]", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: evaAvatar,
                  alt: "Ева",
                  className: "h-full w-full object-cover"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white font-semibold text-lg leading-tight tracking-tight", children: "Ева" }),
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-white/60 leading-tight", children: "Цифровой двойник Евгении" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-green-400/90 mt-0.5", children: [
                /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" }),
                "В сети"
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(false),
                "aria-label": "Закрыть чат",
                className: "h-8 w-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition",
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: scrollRef,
              className: "flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth",
              children: [
                messages.map((m) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `flex ${m.sender === "user" ? "justify-end" : "justify-start gap-2"}`,
                    children: [
                      m.sender === "ai" && /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full overflow-hidden border border-[#d4af37]/30 shrink-0 mt-auto", children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: evaAvatar,
                          alt: "",
                          className: "h-full w-full object-cover"
                        }
                      ) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: m.sender === "user" ? "max-w-[78%] rounded-2xl rounded-br-sm px-3.5 py-2.5 text-[14px] leading-relaxed bg-white/10 text-white border border-white/10" : "max-w-[82%] rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[14px] leading-relaxed bg-gradient-to-br from-[#0f1424]/90 to-[#161028]/90 text-white/90 border border-[#3b82f6]/30 shadow-[0_0_18px_rgba(59,130,246,0.12)]",
                          children: m.text
                        }
                      )
                    ]
                  },
                  m.id
                )),
                showQuickReplies && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 pt-1 pl-9", children: QUICK_REPLIES.map((q) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => sendMessage(q.text),
                    className: "text-left text-[13px] px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#d4af37]/30 hover:border-[#d4af37]/60 text-white/90 transition",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "mr-1.5", children: q.emoji }),
                      q.text
                    ]
                  },
                  q.text
                )) }),
                thinking && /* @__PURE__ */ jsxs("div", { className: "flex justify-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-full overflow-hidden border border-[#d4af37]/30 shrink-0 mt-auto", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: evaAvatar,
                      alt: "",
                      className: "h-full w-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-2xl rounded-bl-sm px-4 py-3 bg-[#0f1424]/80 border border-[#3b82f6]/40", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#3b82f6] animate-bounce [animation-delay:-0.3s]" }),
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#6d28d9] animate-bounce [animation-delay:-0.15s]" }),
                    /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#d4af37] animate-bounce" })
                  ] }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: handleSendMessage,
              className: "p-3 border-t border-white/5 bg-black/40 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: inputRef,
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Напишите Еве...",
                    className: "flex-1 bg-white/5 border border-white/10 focus:border-[#3b82f6]/60 focus:bg-white/[0.07] outline-none rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: !input.trim() || thinking,
                    "aria-label": "Отправить",
                    className: "h-10 w-10 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[#3b82f6] to-[#d4af37] text-black shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition",
                    children: /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Наверх",
      className: "fixed bottom-5 left-5 z-50 group animate-[wobble_2.2s_ease-in-out_infinite] origin-bottom",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-[#8b5cf6] opacity-30 animate-ping" }),
        /* @__PURE__ */ jsx("span", { className: "absolute -inset-1 rounded-full bg-gradient-to-tr from-[#8b5cf6]/70 to-[#6d28d9]/70 opacity-70 blur-md group-hover:opacity-100 transition" }),
        /* @__PURE__ */ jsx("span", { className: "relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden border border-[#a78bfa]/50 shadow-[0_8px_32px_rgba(139,92,246,0.55)] bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] group-hover:scale-105 transition", children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-8 w-8 text-white", strokeWidth: 2.25 }) })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CyberBackground, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative overflow-x-clip", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Marquee, {}),
      /* @__PURE__ */ jsx(ServicesTeaser, {}),
      /* @__PURE__ */ jsx(RoiCalculator, {}),
      /* @__PURE__ */ jsx(TargetAudience, {}),
      /* @__PURE__ */ jsx(FilmStripPortfolio, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Quiz, {}),
      /* @__PURE__ */ jsx(Faq, {}),
      /* @__PURE__ */ jsx(CtaFooter, {})
    ] }),
    /* @__PURE__ */ jsx(AiChatWidget, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {})
  ] });
}
export {
  Index as component
};
