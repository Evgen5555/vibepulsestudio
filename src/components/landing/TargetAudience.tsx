import React from "react";

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
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Онлайн-школы & Инфобизнес",
    description:
      "Внедрение AI-сотрудников, сквозная автоматизация процессов, CRM и быстрая квалификация входящих лидов.",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Бизнес",
    description:
      "Создание кинематографичного AI-визуала, цифровых аватаров и генерация продающих Reels без трат на студии, моделей и операторов.",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Маркетологи",
    description:
      "Замена «ручных» заявок на интерактивные воронки: автоматический прием, квалификация и прогрев лидов 24/7 без участия человека.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80",
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
          0% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
          100% { transform: rotate(-1deg); }
        }
        @keyframes polaroid-swing-alt {
          0% { transform: rotate(0.8deg); }
          50% { transform: rotate(-0.8deg); }
          100% { transform: rotate(0.8deg); }
        }
        .swing-card-even {
          animation: polaroid-swing 5s ease-in-out infinite;
          transform-origin: top center;
        }
        .swing-card-odd {
          animation: polaroid-swing-alt 5.5s ease-in-out infinite;
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
          {/* СТИЛЬНЫЙ МЕТАЛЛИЧЕСКИЙ РЕЙЛИНГ */}
          <div className="hidden md:block absolute top-4 left-2 right-2 h-[6px] rounded-full z-[15] bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-800 shadow-[0_4px_10px_rgba(0,0,0,0.55)] border-t border-white/30 border-b border-black/40">
            {/* Минималистичные стальные боковые крепления */}
            <div className="absolute -left-1 -top-2 w-3 h-[22px] rounded-[2px] bg-gradient-to-b from-neutral-400 to-neutral-700 border border-black/50 shadow-md" />
            <div className="absolute -right-1 -top-2 w-3 h-[22px] rounded-[2px] bg-gradient-to-b from-neutral-400 to-neutral-700 border border-black/50 shadow-md" />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-6 pt-12 md:pt-2">
            {targetCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={card.id}
                  className={`relative flex flex-col items-center group transition-all duration-500 ${isEven ? "swing-card-even" : "swing-card-odd"} ${delayClasses[index]}`}
                >
                  {/* ТЁМНЫЙ МЕТАЛЛИЧЕСКИЙ ЗАЖИМ (БИНДЕР) */}
                  <div className="absolute -top-3 md:-top-2 z-20 flex flex-col items-center">
                    {/* Верхнее ушко зажима, перекинутое через штангу */}
                    <div className="w-5 h-2 rounded-t-full border-2 border-neutral-400 border-b-0 bg-transparent shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                    {/* Тело зажима */}
                    <div className="relative w-9 h-5 -mt-[1px] rounded-[3px] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black border border-black shadow-[0_6px_10px_rgba(0,0,0,0.55)]">
                      {/* Блик */}
                      <div className="absolute top-[2px] left-1 right-1 h-[2px] rounded-full bg-white/30" />
                    </div>
                  </div>


                  {/* Полароидная карточка */}
                  <div className="w-full max-w-[280px] bg-[#fdfbf7] p-3.5 pb-6 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.65)] border border-neutral-200/60 flex flex-col text-left transition-all duration-300 mt-6 md:mt-8 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.85)]">
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
