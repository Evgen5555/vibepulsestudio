import React from "react";
import audience1 from "@/assets/audience-1.png";
import audience2 from "@/assets/audience-2.png";
import audience3 from "@/assets/audience-3.png";
import audience4 from "@/assets/audience-4.png";

interface TargetCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const targetCards: TargetCard[] = [
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

export const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <p className="text-secondary mb-3 uppercase tracking-widest text-lg">Для кого</p>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            Кому подойдёт{" "}
            <span className="text-gradient-cv">сотрудничество</span>
          </h2>
        </div>

        {/* Большая темная карточка-контейнер со свечением */}
        <div
          className="relative w-full rounded-[32px] bg-[#030914] border border-white/5 p-8 md:p-12 overflow-hidden"
          style={{
            boxShadow:
              "0 0 50px rgba(147, 51, 234, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Мягкие градиентные пятна на фоне */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full filter blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full filter blur-[80px] pointer-events-none" />

          {/* Сетка белых карточек */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-100 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-gray-900 font-extrabold text-base md:text-lg leading-snug mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-3 border-t border-gray-100 text-[10px] font-bold tracking-wider">
                    <span className="text-gray-400">VP LAB // 2026</span>
                    <span className="text-amber-500 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-500 inline-block animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
