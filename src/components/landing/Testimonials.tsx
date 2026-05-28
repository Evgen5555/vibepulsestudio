import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  tag: string;
  avatar: string;
  color: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Мария П.",
    role: "Основатель бьюти-бренда",
    text: "Евгения удивила! Создала потрясающий цифровой аватар и упаковала концепт бренда так, что мы выросли в охватах в 1,5 раза за первую неделю. Быстро и стильно!",
    tag: "AI-Дизайн & Аватары",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-cyan)] to-[color:var(--neon-blue)]",
  },
  {
    id: 2,
    name: "Денис К.",
    role: "Владелец онлайн-школы",
    text: "Заказал автоворонку и умного Telegram-бота под ключ. Бот сам квалифицирует лидов и греет базу 24/7. Отдельный шок — это скорость разработки на вайбкодинге, был готов за 4 дня!",
    tag: "Телеграм-боты & Сайты",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-violet)] to-[color:var(--neon-blue)]",
  },
  {
    id: 3,
    name: "Елена",
    role: "VibePulse Studio",
    text: " Когда создавались ИИ-агенты, я и подумать не могла, что они полностью будут делать контент и изображения в моем стиле. Экономят часов 15 в неделю.",
    tag: "ИИ агенты",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-pink)] to-[color:var(--neon-violet)]",
  },
  {
    id: 4,
    name: "Алена В.",
    role: "Эксперт",
    text: "Нужно было протестировать новый продукт за считанные дни. Я в диком восторге от лендоса.",
    tag: "Вайб-кодинг & Сайты",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-pink)] to-[color:var(--neon-cyan)]",
  },
  {
    id: 5,
    name: "Константин",
    role: "Сеть магазинов",
    text: "Сотрудничаю не первый раз. Скорость сборки проектов на AI-стеке поражает — то, что классическая студия пилит месяц, здесь собирается за неделю. Качество интерфейсов и Tailwind-стиль на высоте.",
    tag: "Интеграция & IT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    color: "from-[color:var(--neon-cyan)] to-[color:var(--neon-violet)]",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () =>
    setActiveIndex((p) => (p === 0 ? reviews.length - 1 : p - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p === reviews.length - 1 ? 0 : p + 1));

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-cv opacity-10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="text-secondary mb-3 uppercase tracking-widest text-lg">Репутация</div>
          <h2 className="font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2rem,5vw,3.75rem)]">
            <span className="text-gradient-cv">Отзывы</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[450px] flex items-center justify-center [perspective:1200px]">
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {reviews.map((review, index) => {
              let offset = index - activeIndex;
              if (offset < -2) offset += reviews.length;
              if (offset > 2) offset -= reviews.length;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const rotateY = offset * -28;
              const translateZ = isActive ? 120 : 0 - Math.abs(offset) * 120;
              const translateX = offset * 260;
              const opacity = isActive ? 1 : 0.4 - Math.abs(offset) * 0.1;

              return (
                <div
                  key={review.id}
                  onClick={() => !isActive && setActiveIndex(index)}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  className={`absolute w-[300px] md:w-[340px] rounded-3xl p-6 md:p-8 glass transition-all duration-500 ease-out cursor-pointer select-none overflow-hidden border ${
                    isActive
                      ? "border-primary/60 shadow-neon-violet"
                      : "border-border bg-card/40"
                  }`}
                >
                  <div
                    className={`absolute -top-16 -left-16 w-36 h-36 bg-gradient-to-br ${review.color} opacity-20 rounded-full blur-2xl`}
                  />
                  <Quote className="absolute right-6 top-6 w-12 h-12 text-foreground/5 pointer-events-none" />

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-card border border-border ${
                      isActive ? "text-secondary" : "text-muted-foreground"
                    }`}
                  >
                    {review.tag}
                  </span>

                  <p className="text-xs md:text-sm text-foreground/85 leading-relaxed mt-6 mb-6 italic min-h-[110px]">
                    «{review.text}»
                  </p>

                  <hr className="border-border mb-4" />

                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-0.5 rounded-full bg-gradient-to-tr ${review.color} shadow-lg`}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border-2 border-background"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {review.role}
                      </p>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 fill-current ${
                              isActive ? "text-secondary" : "text-primary"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-4 relative z-20">
          <div className="flex items-center gap-6 glass border border-border px-6 py-3 rounded-full shadow-xl">
            <button
              onClick={handlePrev}
              aria-label="Предыдущий отзыв"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="w-36 h-1 bg-muted rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-cv rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${((activeIndex + 1) / reviews.length) * 100}%`,
                }}
              />
            </div>

            <button
              onClick={handleNext}
              aria-label="Следующий отзыв"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() =>
              document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-foreground font-medium text-xs tracking-wide hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Пройти квиз → расчёт за 2 минуты</span>
          </button>
        </div>
      </div>
    </section>
  );
}
