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
        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative glass border border-border rounded-3xl p-8 sm:p-14 px-[40px] py-[40px] shadow-neon-violet overflow-hidden text-center"
            >
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-cvp opacity-20 blur-2xl -z-10" />

              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <h3 className="font-semibold mb-4 text-lg">Посчитайте окупаемость проекта</h3>
                <p className="text-muted-foreground mb-6 max-w-xl">Узнайте, сколько вы экономите с VibePulse.</p>
                <Link
                  to="/roi"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cv text-background px-8 py-4 font-bold"
                >
                  Рассчитать ROI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <TargetAudience />
        

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
