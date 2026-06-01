import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function OfferPage() {
  const sections = [{
    title: "1. Предмет оферты",
    body: "Исполнитель оказывает заказчику услуги по проведению работ с использованием нейросетевых технологий."
  }, {
    title: "2. Порядок оказания услуг",
    body: "Заказчик оформляет заявку через форму на сайте. После подтверждения заявки исполнитель связывается с заказчиком для согласования деталей и сроков проведения работ."
  }, {
    title: "3. Стоимость услуг",
    body: "Стоимость услуг определяется выбранной услугой и дополнительными пожеланиями заказчика. Актуальные услуги представлены на сайте."
  }, {
    title: "4. Оплата",
    body: "Оплата производится в порядке, согласованном между сторонами. Предоплата составляет 50% от стоимости выбранного тарифа."
  }, {
    title: "5. Результат работ",
    body: "Результатом оказания услуг являются работы, предоставленные в электронном виде. Сроки предоставления результатов зависят от выбранных услуг и срочности."
  }, {
    title: "6. Авторские права",
    body: "Авторские права на созданные работы принадлежат исполнителю. Заказчик получает право на личное использование после передачи заказа исполнителем."
  }];
  return /* @__PURE__ */ jsx("main", { className: "relative min-h-screen py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-secondary hover:underline", children: "← На главную" }),
    /* @__PURE__ */ jsxs("h1", { className: "mt-8 font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2rem,5vw,3.5rem)]", children: [
      "Публичная ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient-cv", children: "оферта" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground", children: "Настоящий документ является публичной офертой (далее — «Оферта») и определяет условия оказания услуг вайб кодинга." }),
    /* @__PURE__ */ jsx("section", { className: "mt-10 space-y-8 text-base leading-relaxed", children: sections.map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: s.body })
    ] }, s.title)) })
  ] }) });
}
export {
  OfferPage as component
};
