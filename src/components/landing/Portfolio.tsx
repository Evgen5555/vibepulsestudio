import { motion } from "framer-motion";
import { PolaroidCard } from "./PolaroidCard";
import fleurImage from "@/assets/portfolio-fleur.png";

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  rotate: string;
};

const projects: Project[] = [
  {
    title: "Fleur — Авторские букеты",
    description:
      "Премиум-лендинг для цветочной студии с доставкой по Москве. Эстетика, конверсия и плавные сценарии заказа.",
    image: fleurImage,
    href: "https://lovable.dev",
    rotate: "-3deg",
  },
  {
    title: "Aurum Finance",
    description:
      "Fintech-лендинг с упором на доверие и скорость. AI-квалификация лидов, рост конверсии +24%.",
    image: fleurImage,
    href: "https://lovable.dev",
    rotate: "2deg",
  },
  {
    title: "Nebula AI",
    description:
      "SaaS-автоворонка с интеграцией AI-ассистента. Снизили CAC на 38%, ускорили онбординг.",
    image: fleurImage,
    href: "https://lovable.dev",
    rotate: "-1.5deg",
  },
  {
    title: "Studio Voltage",
    description:
      "Premium-сайт для брендингового агентства. Заявок ×3.1 за первый месяц после запуска.",
    image: fleurImage,
    href: "https://lovable.dev",
    rotate: "2.5deg",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-center mb-16 gap-6 flex-wrap text-center">
          <div className="max-w-2xl text-center">
            <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Портфолио</p>
            <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
              Проекты, где дизайн <span className="text-gradient-cv">приносит деньги</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-10 sm:gap-14 py-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <PolaroidCard
                image={p.image}
                title={p.title}
                description={p.description}
                href={p.href}
                rotate={p.rotate}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
