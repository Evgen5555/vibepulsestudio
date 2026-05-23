const badges = [
  { label: "AI-маркетинг", tone: "violet" as const },
  { label: "Вайб-кодинг", tone: "cyan" as const },
  { label: "Автоворонки", tone: "violet" as const },
  { label: "UX/UI дизайн", tone: "cyan" as const },
  { label: "Premium сайты", tone: "violet" as const },
];

function Badge({ label, tone }: { label: string; tone: "violet" | "cyan" }) {
  const isViolet = tone === "violet";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium whitespace-nowrap ${
        isViolet
          ? "border-primary/60 text-primary shadow-neon-violet bg-primary/5"
          : "border-secondary/60 text-secondary shadow-neon-cyan bg-secondary/5"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${
          isViolet ? "bg-primary shadow-neon-violet" : "bg-secondary shadow-neon-cyan"
        }`}
      />
      {label}
    </span>
  );
}

export function Marquee() {
  const items = [...badges, ...badges, ...badges];
  return (
    <section className="relative py-10 border-y border-border/60 overflow-hidden marquee-pause">
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max marquee-track gap-5">
        {items.concat(items).map((b, i) => (
          <Badge key={i} label={b.label} tone={b.tone} />
        ))}
      </div>
    </section>
  );
}
