import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { ServicesTeaser } from "@/components/landing/Services";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { FilmStripPortfolio } from "@/components/landing/FilmStripPortfolio";

import { Process } from "@/components/landing/Process";
import { Quiz } from "@/components/landing/Quiz";

import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { RoiCalculator } from "@/components/landing/RoiCalculator";

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
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Услуги и цены</p>
              <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
                Выберите <span className="text-gradient-cv">свой формат</span>
              </h2>
            </div>
          </div>
        </section>
        <Hero />
        <Marquee />
        <ServicesTeaser />
        <RoiCalculator />
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
