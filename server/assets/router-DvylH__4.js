import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
const appCss = "/assets/styles-Cz6_GV0v.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VibePulse Studio — Высокоскоростная AI-разработка" },
      { name: "description", content: "Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "VibePulse Studio — Высокоскоростная AI-разработка" },
      { property: "og:description", content: "Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "VibePulse Studio — Высокоскоростная AI-разработка" },
      { name: "twitter:description", content: "Создание премиальных сайтов на базе AI за 3–7 дней, умных Telegram-ботов и автоворонок под ключ. Автоматизация бизнес-процессов для экспертов и брендов." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9beac194-7724-4e05-8dc4-dc3da8ff7afe/id-preview-b0bfaffc--ede0ed0f-0e94-4847-96ad-1adcb108c474.lovable.app-1779637982686.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9beac194-7724-4e05-8dc4-dc3da8ff7afe/id-preview-b0bfaffc--ede0ed0f-0e94-4847-96ad-1adcb108c474.lovable.app-1779637982686.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./services-DnD2TOgw.js");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Услуги — VibePulse studio"
    }, {
      name: "description",
      content: "Каталог решений VibePulse studio: сайты, автоворонки, боты, AI-дизайн, видео, музыка."
    }, {
      property: "og:title",
      content: "Услуги — VibePulse studio"
    }, {
      property: "og:description",
      content: "Полный каталог услуг VibePulse studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./roi-CTosbK3P.js");
const Route$5 = createFileRoute("/roi")({
  head: () => ({
    meta: [{
      title: "Калькулятор эффективности — VibePulse"
    }, {
      name: "description",
      content: "Посчитайте экономию бюджета и времени при работе с VibePulse: AI-боты, вайб-кодинг, дизайн, видео, музыка и запуск под ключ."
    }, {
      property: "og:title",
      content: "Калькулятор эффективности — VibePulse"
    }, {
      property: "og:description",
      content: "Сравните рыночные цены и стоимость у VibePulse — увидите чистую экономию бюджета и времени."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./privacy-DlFbj1ne.js");
const Route$4 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Политика конфиденциальности — VibePulse studio"
    }, {
      name: "description",
      content: "Политика конфиденциальности сайта VibePulse studio: сбор, использование и защита персональных данных."
    }, {
      property: "og:title",
      content: "Политика конфиденциальности — VibePulse studio"
    }, {
      property: "og:description",
      content: "Порядок обработки и защиты персональных данных пользователей сайта VibePulse studio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./offer-DDc-gZhf.js");
const Route$3 = createFileRoute("/offer")({
  head: () => ({
    meta: [{
      title: "Публичная оферта — VibePulse studio"
    }, {
      name: "description",
      content: "Условия оказания услуг вайб кодинга VibePulse studio."
    }, {
      property: "og:title",
      content: "Публичная оферта — VibePulse studio"
    }, {
      property: "og:description",
      content: "Публичная оферта на оказание услуг с использованием нейросетевых технологий."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./calculator-app-DR61AFcZ.js");
const Route$2 = createFileRoute("/calculator-app")({
  head: () => ({
    meta: [{
      title: "Калькулятор упущенной выгоды — VibePulse"
    }, {
      name: "description",
      content: "Интерактивный бизнес-аудит: посчитайте чистую прибыль и потенциал автоматизации с AI-агентами VibePulse."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BfTtbajd.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AI-маркетинг и сайты с окупаемостью за 30 дней | VibePulse"
    }, {
      name: "description",
      content: "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней. AI-маркетинг для экспертов и онлайн-школ. AI-аналитика, AI-маркетинг."
    }, {
      property: "og:title",
      content: "AI-маркетинг и сайты с окупаемостью за 30 дней"
    }, {
      property: "og:description",
      content: "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней. AI + аналитика + Apple-эстетика. Проекты под ключ, AI-аналитика."
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LeadSchema = z.object({
  type: z.enum(["apply", "discuss", "ask"]),
  name: z.string().min(1).max(200),
  messenger: z.string().min(1).max(50),
  username: z.string().min(1).max(200),
  message: z.string().min(1).max(4e3)
});
const titleMap = {
  apply: "🔥 ЗАЯВКА",
  discuss: "✨ ОБСУЖДЕНИЕ ПРОЕКТА",
  ask: "❓ ВОПРОС"
};
const Route = createFileRoute("/api/public/telegram-lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (!token || !chatId) {
          return Response.json({ error: "Server not configured" }, { status: 500 });
        }
        let body;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = LeadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }
        const d = parsed.data;
        const text = [
          titleMap[d.type],
          `👤 Имя: ${d.name}`,
          `📱 Мессенджер: ${d.messenger}`,
          `🔗 Контакт: ${d.username}`,
          `📋 Задача: ${d.message}`
        ].join("\n");
        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text })
        });
        if (!tgRes.ok) {
          const errText = await tgRes.text();
          console.error("Telegram API error:", tgRes.status, errText);
          return Response.json({ error: "Failed to send" }, { status: 502 });
        }
        return Response.json({ ok: true });
      }
    }
  }
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const RoiRoute = Route$5.update({
  id: "/roi",
  path: "/roi",
  getParentRoute: () => Route$7
});
const PrivacyRoute = Route$4.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$7
});
const OfferRoute = Route$3.update({
  id: "/offer",
  path: "/offer",
  getParentRoute: () => Route$7
});
const CalculatorAppRoute = Route$2.update({
  id: "/calculator-app",
  path: "/calculator-app",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ApiPublicTelegramLeadRoute = Route.update({
  id: "/api/public/telegram-lead",
  path: "/api/public/telegram-lead",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  CalculatorAppRoute,
  OfferRoute,
  PrivacyRoute,
  RoiRoute,
  ServicesRoute,
  ApiPublicTelegramLeadRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
