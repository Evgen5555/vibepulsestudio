import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Services } from "@/components/landing/Services";
import { TargetAudience } from "@/components/landing/TargetAudience";
import { Portfolio } from "@/components/landing/Portfolio";
import { Process } from "@/components/landing/Process";
import { Quiz } from "@/components/landing/Quiz";

import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaFooter } from "@/components/landing/CtaFooter";
import CyberBackground from "@/components/landing/CyberBackground";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI-маркетинг и premium-сайты, которые окупаются" },
      {
        name: "description",
        content:
          "Высококонверсионные сайты и автоворонки на стыке AI-маркетинга и Apple-эстетики. Окупаемость в первый месяц.",
      },
      { property: "og:title", content: "AI-маркетинг и premium-сайты" },
      {
        property: "og:description",
        content:
          "Создаю сайты и автоворонки, которые окупаются. AI + аналитика + премиальный дизайн.",
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
        <Services />
        <TargetAudience />
        
        <Portfolio />
        <Testimonials />
        <Process />
        <Quiz />
        <Faq />
        <CtaFooter />

      </main>
    </>
  );
}
