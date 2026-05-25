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

        <div className="relative pt-6">
          {/* Горизонтальная штанга */}
          <div className="hidden md:block absolute top-4 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
            <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-white/30 border border-white/50 shadow-inner" />
            <div className="absolute -right-2 -top-1.5 size-4 rounded-full bg-white/30 border border-white/50 shadow-inner" />
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 pt-8">
            {targetCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={card.id}
                  className="relative flex flex-col items-center"
                >
                  {/* Прищепка */}
                  <div className="relative z-20 -mb-3">
                    <div className="w-6 h-8 rounded-sm bg-gradient-to-b from-amber-200 to-amber-500 shadow-md border border-amber-700/40">
                      <div className="mx-auto mt-1.5 w-3 h-0.5 rounded bg-zinc-400/80 shadow-inner" />
                      <div className="mx-auto mt-1 w-2.5 h-2.5 rounded-full bg-zinc-300 border border-zinc-500/60" />
                    </div>
                  </div>

                  {/* Полароидная карточка */}
                  <div
                    className={`relative w-full max-w-[260px] bg-[#f5f1e8] p-3 pb-5 rounded-sm shadow-[0_18px_40px_rgba(0,0,0,0.5)] ${
                      isEven ? "swing-card-even" : "swing-card-odd"
                    } ${delayClasses[index]}`}
                  >
                    {/* Снимок */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-900">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10" />
                      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.45)]" />
                    </div>

                    {/* Текст */}
                    <div className="mt-4 px-1">
                      <h3 className="text-zinc-900 font-semibold text-base leading-tight font-serif">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-zinc-700 text-xs leading-snug">
                        {card.description}
                      </p>

                      <div className="mt-4 pt-2 border-t border-zinc-400/40 flex items-center justify-between text-[10px] tracking-widest uppercase text-zinc-500 font-mono">
                        <span>VP LAB // 2026</span>
                        <span className="flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                          ACTIVE
                        </span>
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
