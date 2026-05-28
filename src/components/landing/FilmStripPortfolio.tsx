import React from "react";
import fleurImage from "@/assets/portfolio-fleur.png";
import friendlyReminderImage from "@/assets/portfolio-friendly-reminder.png";
import tochkaVesaImage from "@/assets/portfolio-tochka-vesa.png";
import neonBloomImage from "@/assets/portfolio-neon-bloom.png";
import quizDetectiveImage from "@/assets/portfolio-quiz-detective.png";
import finTrackerImage from "@/assets/portfolio-fin-tracker.png";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  githubUrl: string;
  image?: string;
}


const projects: Project[] = [
  {
    id: "p1",
    number: "01",
    title: "Fleur",
    description:
      "Сайт с каталогом, корзиной и кастомной админ-панелью для управления заказами.",
    githubUrl: "https://evgen5555.github.io/petal-posh-moscow/",
    image: fleurImage,
  },
  {
    id: "p2",
    number: "02",
    title: "Продуктивный перерыв",
    description:
      "Система для отдыха от работы, предотвращения выгорания и повышения фокуса.",
    githubUrl: "https://evgen5555.github.io/Friendly-reminder/",
    image: friendlyReminderImage,
  },
  {
    id: "p3",
    number: "03",
    title: "Точка Веса",
    description:
      "Интерактивное приложение для расчета суточной калорийности, трекинг нормы воды и советы.",
    githubUrl: "https://evgen5555.github.io/Calculator-callorii/",
    image: tochkaVesaImage,
  },
  {
    id: "p4",
    number: "04",
    title: "Neon Bloom Game",
    description:
      "Динамичная веб-игра с неоновым дизайном и продвинутой игровой логикой. Слияния шаров.",
    githubUrl: "https://evgen5555.github.io/Ball-/",
    image: neonBloomImage,
  },
  {
    id: "p5",
    number: "05",
    title: "Квиз-детектив",
    description:
      "Интерактивный лид-магнит для бизнес-аудитории. Реализован в форме игрового сценария.",
    githubUrl: "https://evgen5555.github.io/quiz/",
    image: quizDetectiveImage,
  },
  {
    id: "p6",
    number: "06",
    title: "Фин-трекер",
    description:
      "Микро-приложение для мониторинга личных или проектных финансов без сложных таблиц.",
    githubUrl: "https://evgen5555.github.io/Calculator/",
    image: finTrackerImage,
  },
];

export const FilmStripPortfolio: React.FC = () => {
  const duplicated = [...projects, ...projects, ...projects, ...projects];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-12 text-center">
        <p className="text-secondary mb-3 uppercase tracking-widest text-lg">
          Портфолио
        </p>
        <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
          Кинолента{" "}
          <span className="text-gradient-cv">моих проектов</span>

        </h2>
      </div>

      {/* Film strip */}
      <div className="relative w-full bg-[#0a0a0a] py-4 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] border-y border-white/5">
        {/* Top perforation */}
        <div className="h-6 bg-[#0a0a0a] overflow-hidden">
          <div className="flex gap-3 px-3 h-full items-center animate-[marquee_40s_linear_infinite]">
            {Array.from({ length: 120 }).map((_, i) => (
              <span
                key={i}
                className="shrink-0 w-6 h-3 rounded-sm bg-[#1a1a1a] border border-white/5"
              />
            ))}
          </div>
        </div>

        {/* Frame strip */}
        <div className="relative overflow-hidden bg-[#0d0d0d] py-6">
          <div className="flex gap-3 w-max animate-[marquee_40s_linear_infinite]">
            {/* START */}
            <div className="shrink-0 w-40 h-56 flex items-center justify-center text-[#D4AF37] font-mono text-sm tracking-[0.3em] border border-[#D4AF37]/30 bg-[#0a0a0a]">
              ● START
            </div>

            {duplicated.map((project, index) => (
              <a
                key={`${project.id}-${index}`}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 w-80 h-56 relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden"
              >
                {/* Background image */}
                {project.image && (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
                  </>
                )}

                {/* Corner ticks */}
                <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/30 group-hover:border-[#D4AF37] z-10" />
                <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/30 group-hover:border-[#D4AF37] z-10" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/30 group-hover:border-[#D4AF37] z-10" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/30 group-hover:border-[#D4AF37] z-10" />

                <div className="relative z-10 h-full w-full p-6 flex flex-col justify-between">
                  <div className="text-[#D4AF37] font-mono text-5xl font-bold tracking-tight opacity-90 group-hover:opacity-100 transition drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {project.number}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold tracking-tight mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Scanline hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}

            {/* END */}
            <div className="shrink-0 w-40 h-56 flex items-center justify-center text-[#D4AF37] font-mono text-sm tracking-[0.3em] border border-[#D4AF37]/30 bg-[#0a0a0a]">
              ● END
            </div>
          </div>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent" />
        </div>

        {/* Bottom perforation */}
        <div className="h-6 bg-[#0a0a0a] overflow-hidden">
          <div className="flex gap-3 px-3 h-full items-center animate-[marquee_40s_linear_infinite]">
            {Array.from({ length: 120 }).map((_, i) => (
              <span
                key={i}
                className="shrink-0 w-6 h-3 rounded-sm bg-[#1a1a1a] border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
};

export default FilmStripPortfolio;
