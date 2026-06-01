import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { C as CyberBackground, R as RoiCalculator } from "./CyberBackground-CxJ0FlzO.js";
import "react";
import "framer-motion";
function RoiPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CyberBackground, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen pt-10 pb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
        " На главную"
      ] }) }),
      /* @__PURE__ */ jsx(RoiCalculator, {})
    ] })
  ] });
}
export {
  RoiPage as component
};
