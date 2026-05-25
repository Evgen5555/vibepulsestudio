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
      drops = Array(columns).fill(0).map(() => Math.random() * rect.height / fontSize);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF{}[]<>=+*/".split("");

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // head bright, tail dimmer
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
    <div className="relative mx-auto w-full max-w-md aspect-square rounded-[1.75rem] overflow-hidden border border-border/80 bg-black shadow-[0_0_60px_rgba(0,255,90,0.25)]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      <img
        src={portrait}
        alt="Портрет"
        
        className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}
