import React from "react";
import audience1 from "@/assets/audience-1.png";
import audience2 from "@/assets/audience-2.png";
import audience3 from "@/assets/audience-3.png";
import audience4 from "@/assets/audience-4.png";

interface AudienceCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const targetCards: AudienceCard[] = [
  {
    id: 1,
    title: "Эксперты & Предприниматели",
    description:
      "Упаковка сильного личного бренда, стильный сайт и автоматизация прогрева аудитории через умных ботов.",
    image: audience1,
  },
  {
    id: 2,
    title: "Онлайн-школы & Инфобизнес",
    description:
      "Внедрение AI-сотрудников, сквозная автоматизация процессов, CRM и быстрая квалификация входящих лидов.",
    image: audience2,
  },
  {
    id: 3,
    title: "Бизнес",
    description:
      "Создание кинематографичного AI-визуала, цифровых аватаров и генерация продающих Reels без трат на студии, моделей и операторов.",
    image: audience3,
  },
  {
    id: 4,
    title: "Маркетологи",
    description:
      "Замена «ручных» заявок на интерактивные воронки: автоматический прием, квалификация и прогрев лидов 24/7 без участия человека.",
    image: audience4,
  },
];


const delayClasses = [
  "animation-delay-0",
  "animation-delay-1500",
  "animation-delay-700",
  "animation-delay-2200",
];

export const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="relative py-24 sm:py-32">
      <style>{`
        @keyframes polaroid-swing {
          0% { transform: rotate(-1.5deg); }
          50% { transform: rotate(1.5deg); }
          100% { transform: rotate(-1.5deg); }
        }
        @keyframes polaroid-swing-alt {
          0% { transform: rotate(1.2deg); }
          50% { transform: rotate(-1.2deg); }
          100% { transform: rotate(1.2deg); }
        }
        .swing-card-even {
          animation: polaroid-swing 4.5s ease-in-out infinite;
          transform-origin: top center;
        }
        .swing-card-odd {
          animation: polaroid-swing-alt 5s ease-in-out infinite;
          transform-origin: top center;
        }
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-20 mx-auto text-center">
          <p className="text-sm text-secondary mb-3">Для кого</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Кому подойдёт{" "}
            <span className="text-gradient-cv">сотрудничество</span>
          </h2>
        </div>

        <div className="relative mt-24">
          {/* ДЕРЕВЯННАЯ ШТАНГА */}
          <div
            className="hidden md:block absolute top-4 left-8 right-8 h-6 rounded-full z-[15]"
            style={{
              background:
                "linear-gradient(to bottom, #8b4a26 0%, #6b3410 35%, #4a2208 70%, #2a1505 100%)",
              boxShadow:
                "0 12px 22px rgba(0,0,0,0.75), inset 0 2px 3px rgba(255,190,130,0.45), inset 0 -3px 6px rgba(0,0,0,0.65)",
            }}
          >
            {/* древесные волокна */}
            <div
              className="absolute inset-0 rounded-full opacity-35 mix-blend-overlay pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(90deg, transparent 0 22px, rgba(0,0,0,0.4) 22px 23px, transparent 23px 55px, rgba(255,210,160,0.2) 55px 56px)",
              }}
            />
            {/* Левое металлическое крепление к стене */}
            <div
              className="absolute -left-8 -top-2 w-9 h-10 rounded-sm"
              style={{
                background:
                  "linear-gradient(135deg, #e0e0e4 0%, #a4a4a8 50%, #5e5e62 100%)",
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.65), inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 1px rgba(0,0,0,0.4)",
              }}
            >
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
            {/* Правое металлическое крепление к стене */}
            <div
              className="absolute -right-8 -top-2 w-9 h-10 rounded-sm"
              style={{
                background:
                  "linear-gradient(225deg, #e0e0e4 0%, #a4a4a8 50%, #5e5e62 100%)",
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.65), inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 1px rgba(0,0,0,0.4)",
              }}
            >
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900/70 shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]" />
            </div>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-6 pt-12 md:pt-0 md:-mt-3">
            {targetCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={card.id}
                  className={`relative flex flex-col items-center group transition-all duration-500 ${isEven ? "swing-card-even" : "swing-card-odd"} ${delayClasses[index]}`}
                >
                  {/* ДЕРЕВЯННАЯ ПРИЩЕПКА */}
                  <div className="relative z-20 flex flex-col items-center">
                    <div
                      className="w-7 h-14 rounded-[4px] relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(to bottom, #c9924f 0%, #a06a32 40%, #7a4a22 80%, #5a3418 100%)",
                        boxShadow:
                          "0 6px 12px rgba(0,0,0,0.65), inset 1px 0 1px rgba(255,220,170,0.5), inset -1px 0 1px rgba(0,0,0,0.55)",
                      }}
                    >
                      {/* металлическая пружина */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-[38%] w-[20px] h-[5px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(to bottom, #ededf1, #8e8e92 60%, #4e4e52)",
                          boxShadow:
                            "0 1px 2px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.75)",
                        }}
                      />
                      {/* древесные волокна */}
                      <div
                        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                        style={{
                          background:
                            "repeating-linear-gradient(180deg, transparent 0 5px, rgba(0,0,0,0.35) 5px 6px, transparent 6px 13px)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Полароидная карточка — стыкуется с зажимом */}
                  <div className="w-full max-w-[280px] bg-[#fdfbf7] p-3.5 pb-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.65)] border border-neutral-200/60 flex flex-col text-left transition-all duration-300 -mt-1 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.85)]">

                    <div className="w-full aspect-square bg-neutral-950 overflow-hidden relative rounded-sm border border-neutral-300/50">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 select-none"
                      />
                      <div className="absolute inset-0 shadow-[inset_0_4px_12px_rgba(0,0,0,0.45)]"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="mt-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-tight font-sans">
                          {card.title}
                        </h3>
                        <p className="text-[11px] text-neutral-700 mt-2 leading-relaxed font-sans font-normal">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-5 flex justify-between items-center text-[9px] font-bold text-neutral-400 tracking-wider uppercase select-none">
                        <span>VP LAB // 2026</span>
                        <span className="text-[#d4af37]/70">● ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
