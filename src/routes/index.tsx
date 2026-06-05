import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { ServicesTeaser } from "@/components/landing/Services";
import { motion } from "framer-motion";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { FilmStripPortfolio } from "@/components/landing/FilmStripPortfolio";

import { Process } from "@/components/landing/Process";
import { Quiz } from "@/components/landing/Quiz";

import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaFooter } from "@/components/landing/CtaFooter";

import CyberBackground from "@/components/landing/CyberBackground";
import { AiChatWidget } from "@/components/landing/AiChatWidget";
import { ScrollToTop } from "@/components/landing/ScrollToTop";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI-маркетинг и сайты с окупаемостью за 30 дней | VibePulse" },
      {
        name: "description",
        content:
          "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней. AI-маркетинг для экспертов и онлайн-школ. AI-аналитика, AI-маркетинг.",
      },
      { property: "og:title", content: "AI-маркетинг и сайты с окупаемостью за 30 дней" },
      {
        property: "og:description",
        content:
          "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней. AI + аналитика + Apple-эстетика. Проекты под ключ, AI-аналитика.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CyberBackground />
      <Nav />
      <main className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <ServicesTeaser />
        <TargetAudience />
        
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 mb-6">
                <span className="text-xs tracking-[0.35em] uppercase text-purple-300">
                  КАЛЬКУЛЯТОР ЭФФЕКТИВНОСТИ
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05]">
                Посчитайте вашу{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  выгоду и скорость
                </span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto rounded-[40px] border border-violet-500/20 bg-[#070B1A]/80 shadow-[0_0_80px_rgba(139,92,246,0.35)] p-10 md:p-16"
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-2xl font-semibold text-white/60 mb-4">
                    Посчитайте окупаемость проекта
                  </h3>
                  <p className="text-white/60 text-lg max-w-2xl">
                    Узнайте, сколько вы экономите с VibePulse.
                  </p>
                </div>

                <div className="flex justify-center sm:justify-end">
                  <Link
                    to="/roi"
                    className="rounded-full px-10 py-5 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 hover:scale-105 transition-all"
                  >
                    Рассчитать ROI
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FilmStripPortfolio />

        <Testimonials />
        <Process />
        <Quiz />
        <Faq />
        <CtaFooter />

      </main>
      <AiChatWidget />
      <ScrollToTop />
    </>
  );
}
