import { ArrowUpRight } from "lucide-react";

interface PolaroidCardProps {
  image: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
  rotate?: string;
}

export function PolaroidCard({
  image,
  title,
  description,
  meta = "VP LAB // 2026",
  href,
  rotate = "-2deg",
}: PolaroidCardProps) {
  return (
    <div
      className="relative w-[340px] bg-[#FDFBF7] text-[#111111] p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 ease-out group"
      style={{ transform: `rotate(${rotate})` }}
    >
      {/* Декоративная скрепка */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#7A5C43] rounded-sm opacity-80 shadow-md z-10" />

      {/* Скриншот */}
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#111] border border-black/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Текст */}
      <div className="mt-5 space-y-2 font-sans">
        <h3 className="text-xl font-bold tracking-tight leading-tight">{title}</h3>
        <p className="text-sm text-gray-600 font-medium leading-relaxed">{description}</p>
      </div>

      {/* Низ */}
      <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-bold tracking-wider text-gray-400 uppercase">
        <span>{meta}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#D4AF37] hover:text-[#111] transition-colors duration-200 text-xs"
        >
          <span>Посмотреть</span>
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default PolaroidCard;
