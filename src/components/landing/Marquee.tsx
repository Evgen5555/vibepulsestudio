import { TrendingUp, Rocket, Star, Clock, Users, ShieldCheck } from "lucide-react";

const metrics = [
  { label: "40+ проектов под ключ", icon: Rocket, tone: "violet" as const },
  { label: "Средняя окупаемость 2.3 мес", icon: TrendingUp, tone: "cyan" as const },
  { label: "Средний ROI x3.4", icon: TrendingUp, tone: "violet" as const },
  { label: "5.0 рейтинг от клиентов", icon: Star, tone: "cyan" as const },
  { label: "Запуск от 5 дней", icon: Clock, tone: "violet" as const },
  { label: "95% клиентов возвращаются", icon: Users, tone: "cyan" as const },
  { label: "30 дней техподдержки в подарок", icon: ShieldCheck, tone: "violet" as const },
];

function Badge({ label, tone, Icon }: { label: string; tone: "violet" | "cyan"; Icon: typeof Rocket }) {
  const isViolet = tone === "violet";
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm font-medium whitespace-nowrap ${
        isViolet
          ? "border-primary/60 text-primary shadow-neon-violet bg-primary/5"
          : "border-secondary/60 text-secondary shadow-neon-cyan bg-secondary/5"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </span>
  );
}

export function Marquee() {
  const items = [...metrics, ...metrics, ...metrics];
  return (
    <section className="relative py-10 border-y border-border/60 overflow-hidden marquee-pause" aria-label="Ключевые цифры">
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max marquee-track gap-5">
        {items.concat(items).map((b, i) => (
          <Badge key={i} label={b.label} tone={b.tone} Icon={b.icon} />
        ))}
      </div>
    </section>
  );
}
