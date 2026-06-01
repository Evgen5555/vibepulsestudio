import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function PrivacyPage() {
  return /* @__PURE__ */ jsx("main", { className: "relative min-h-screen py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-secondary hover:underline", children: "← На главную" }),
    /* @__PURE__ */ jsxs("h1", { className: "mt-8 font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]", children: [
      "Политика ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "конфиденциальности" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground", children: "Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта VibePulse studio." }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 space-y-8 text-base leading-relaxed", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "1. Сбор информации" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Мы собираем следующую информацию: имя, номер телефона, контактные данные мессенджера, предпочтения по стилю и другие данные, которые вы добровольно предоставляете через форму записи." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "2. Использование информации" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Собранные данные используются исключительно для обработки заявок для рабочего процесса, связи с клиентами и улучшения качества сервиса." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "3. Защита данных" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "4. Передача третьим лицам" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "5. Согласие" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Отправляя заявку через форму на сайте, вы подтверждаете своё согласие с настоящей Политикой конфиденциальности." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "6. Контакты" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-muted-foreground", children: [
          "По вопросам, связанным с обработкой персональных данных, вы можете обратиться по электронной почте:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:jekki_65@mail.ru", className: "text-secondary hover:underline", children: "jekki_65@mail.ru" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  PrivacyPage as component
};
