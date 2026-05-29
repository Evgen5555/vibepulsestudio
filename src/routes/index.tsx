import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { ServicesTeaser } from "@/components/landing/Services";
import { Pricing } from "@/components/landing/Pricing";
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
          "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней от 25 000 ₽. AI-маркетинг для экспертов и онлайн-школ. Средний ROI x3.4, окупаемость 2.3 месяца.",
      },
      { property: "og:title", content: "AI-маркетинг и сайты с окупаемостью за 30 дней" },
      {
        property: "og:description",
        content:
          "Сайты, автоворонки и Telegram-боты под ключ за 5–14 дней. AI + аналитика + Apple-эстетика. 40+ проектов, средний ROI x3.4.",
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
        <Pricing />
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
