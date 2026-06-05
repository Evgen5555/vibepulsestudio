import { useEffect, useRef } from "react";
import portrait from "@/assets/portrait.png";

export default function MatrixPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      columns = Math.floor(rect.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => (Math.random() * rect.height) / fontSize);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF{}[]<>=+*/".split("");

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = "rgba(180, 255, 200, 0.95)";
        ctx.fillText(text, x, y);
        ctx.fillStyle = "rgba(0, 255, 90, 0.75)";
        ctx.fillText(text, x, y - fontSize);

        if (y > rect.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative mx-auto w-full max-w-[380px] aspect-square rounded-[28px] overflow-hidden border border-white/5 bg-black"
      style={{
        boxShadow: "0 0 35px rgba(34, 197, 94, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Реальное фото с мягкой пост-обработкой */}
      <img
        src={portrait}
        alt="Evgeniya - Vibecoder"
        className="absolute inset-0 w-full h-full object-contain object-bottom filter contrast-[1.05] brightness-[0.95]"
      />

      {/* Матричный код — деликатный, исчезает к центру (лицу) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: 0.35,
          maskImage: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Верхнее и нижнее затемнение для интеграции в тёмный UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
