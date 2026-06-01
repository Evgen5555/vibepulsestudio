import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Globe, Target, Bot, Sparkles, Palette, Link2, Check } from "lucide-react";
import { c as cn } from "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const cards = [
  {
    id: "vizitka",
    title: "Вайб - кодинг",
    short: "От одностраничного сайта до интернет магазина. Приложения. Игры.",
    full: "Разработка любых веб-решений: от лендингов и интернет-магазинов до сложных веб-приложений и игр.",
    price: "от 20 000 ₽",
    duration: "от 5 дней",
    features: [
      "Разработка веб-интерфейсов",
      "Сборка архитектуры",
      "Адаптив под мобильные устройства",
      "Базовая SEO-оптимизация",
      "Форма заявки на ваш Telegram"
    ],
    icon: Globe,
    tone: "cyan"
  },
  {
    id: "quiz",
    title: "AI квиз - воронка",
    short: "Интерактивный опросник, который квалифицирует клиента и собирает…",
    full: "Интерактивный опросник, который квалифицирует клиента и собирает контакты прямо в Telegram.",
    price: "5 000 ₽",
    duration: "от 2 дней",
    features: [
      "Индивидуальный умный сценарий",
      "Система ветвления вопросов",
      "Автоматический фильтр клиентов",
      "Моментальные уведомления в Telegram",
      "Идеальная работа на любых устройствах"
    ],
    icon: Target,
    tone: "violet"
  },
  {
    id: "tg-bot",
    title: "Умный Telegram-бот",
    short: "Бот, который возьмет на себя общение с клиентами: примет заявку, ответит на частые вопросы и сам соберет контакты.",
    full: "Бот, который возьмет на себя общение с клиентами: примет заявку, ответит на частые вопросы и сам соберет контакты.",
    price: "от 8 000 ₽",
    duration: "3–5 дней",
    features: [
      "Автоматический прием и обработка заявок",
      "Ответы на частые вопросы (FAQ) без твоего участия",
      "Мгновенные уведомления о новых клиентах тебе в Telegram",
      "Сбор и выгрузка базы контактов клиентов",
      "Любые пожелания по ботам"
    ],
    icon: Bot,
    tone: "cyan"
  },
  {
    id: "ai-consult",
    title: "AI-консультант 24/7",
    short: "Обученный AI-помощник, автоматический прием, квалификация и прогрев лидов 24/7",
    full: "Обученный AI-помощник, автоматический прием, квалификация и прогрев лидов 24/7",
    price: "от 20 000 ₽",
    duration: "3–5 дней",
    features: [
      "Проектирование логики и промптов для AI-агентов",
      "Интеграция в сайт или Telegram",
      "Сценарии продаж и поддержки",
      "Перевод вопросов на менеджера",
      "Разработка любой сложности"
    ],
    icon: Sparkles,
    tone: "violet"
  },
  {
    id: "designers",
    title: "AI-Дизайн & Аватары",
    short: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.",
    full: "Цифровые аватары и кинематографичный визуал премиум-уровня. Реалистичные портреты.",
    price: "от 15 000 ₽",
    duration: "от 3 дней",
    features: [
      "Генерация продающих Reels / Shorts без трат на студии",
      "Разработка и настройка твоего цифрового двойника",
      "Пошаговые понятные инструкции для работы",
      "Полный адаптив под мобильные устройства"
    ],
    icon: Palette,
    tone: "violet"
  },
  {
    id: "domain",
    title: "Подключение  к домену",
    short: "Подключение домена и хостинга — сайт работает на вашем адресе.",
    full: "Помощь в покупке домена и хостинга .",
    price: "3 000 ₽",
    duration: "от 3 дней",
    features: [
      "Регистрация/привязка домена",
      "Настройка DNS и SSL",
      "Перенос сайта на хостинг",
      "Проверка работоспособности"
    ],
    icon: Link2,
    tone: "cyan"
  }
];
function PricingCards() {
  const [active, setActive] = useState(null);
  const openTg = (title) => {
    const message = `Привет, Евгения! Хочу заказать «${title}».`;
    window.open(`https://t.me/evgeniya5_5?text=${encodeURIComponent(message)}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("section", { id: "services-cards", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-secondary mb-3 uppercase tracking-widest text-lg", children: "Услуги и цены" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]", children: [
          "Выберите ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "свой формат" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-sm sm:text-base", children: "Нажмите на карточку, чтобы посмотреть, что входит в услугу." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: cards.map((c, i) => {
        const Icon = c.icon;
        const violet = c.tone === "violet";
        return /* @__PURE__ */ jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => setActive(c),
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { delay: i * 0.05, duration: 0.5 },
            className: `group relative text-left rounded-3xl bg-card/60 border border-border p-6 sm:p-7 overflow-hidden transition-all hover:border-transparent hover:-translate-y-1 ${violet ? "hover:shadow-neon-violet" : "hover:shadow-neon-cyan"}`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                  style: {
                    background: violet ? "radial-gradient(ellipse at top right, color-mix(in oklab, var(--neon-violet) 18%, transparent), transparent 60%)" : "radial-gradient(ellipse at top right, color-mix(in oklab, var(--neon-cyan) 18%, transparent), transparent 60%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-start justify-between mb-5", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `inline-flex items-center justify-center size-12 rounded-2xl border ${violet ? "border-primary/60 bg-primary/10 text-primary shadow-neon-violet" : "border-secondary/60 bg-secondary/10 text-secondary shadow-neon-cyan"}`,
                    children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1 bg-background/40", children: c.duration })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "relative text-lg sm:text-xl font-semibold tracking-tight", children: c.title }),
              /* @__PURE__ */ jsx("p", { className: "relative mt-2 text-sm text-muted-foreground line-clamp-2", children: c.short }),
              /* @__PURE__ */ jsxs("div", { className: "relative mt-6 flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg font-bold text-foreground", children: c.price }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-xs font-semibold ${violet ? "text-primary" : "text-secondary"} group-hover:translate-x-0.5 transition-transform`,
                    children: "Подробнее →"
                  }
                )
              ] })
            ]
          },
          c.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: !!active, onOpenChange: (o) => !o && setActive(null), children: /* @__PURE__ */ jsx(DialogContent, { className: "glass border-border rounded-3xl max-w-lg", children: active && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `inline-flex items-center justify-center size-12 rounded-2xl border ${active.tone === "violet" ? "border-primary/60 bg-primary/10 text-primary shadow-neon-violet" : "border-secondary/60 bg-secondary/10 text-secondary shadow-neon-cyan"}`,
              children: /* @__PURE__ */ jsx(active.icon, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(DialogTitle, { className: "text-xl tracking-tight", children: active.title }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "Срок: ",
              active.duration
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "pt-3 text-foreground/80 text-sm", children: active.full })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest text-muted-foreground mb-3", children: "что входит" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: active.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-foreground/90", children: [
          /* @__PURE__ */ jsx(
            Check,
            {
              className: `size-4 mt-0.5 flex-shrink-0 ${active.tone === "violet" ? "text-primary" : "text-secondary"}`
            }
          ),
          /* @__PURE__ */ jsx("span", { children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-border flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight", children: active.price }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => openTg(active.title),
            className: `px-6 py-3 rounded-full text-sm font-semibold transition-all ${active.tone === "violet" ? "bg-gradient-cv text-background shadow-neon-violet hover:scale-[1.03]" : "bg-secondary text-background hover:scale-[1.03] shadow-neon-cyan"}`,
            children: "Заказать"
          }
        )
      ] })
    ] }) }) })
  ] });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen pt-24 pb-24", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-secondary hover:underline", children: "← На главную" }) }),
    /* @__PURE__ */ jsx(PricingCards, {})
  ] });
}
export {
  ServicesPage as component
};
