import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dots: Dot[] = [];
    const LINK_DIST = 180;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // density-based count covering full viewport
    const area = canvas.width * canvas.height;
    const count = Math.min(240, Math.max(130, Math.round(area / 9000)));

    const createDot = (initAll = false): Dot => ({
      x: Math.random() * canvas.width,
      y: initAll ? Math.random() * canvas.height : canvas.height + 10,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -(Math.random() * 0.25 + 0.1),
      size: Math.random() * 1.2 + 0.8,
    });

    for (let i = 0; i < count; i++) dots.push(createDot(true));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d, idx) => {
        d.x += d.speedX;
        d.y += d.speedY;
        if (d.y < -10 || d.x < -10 || d.x > canvas.width + 10) {
          dots[idx] = createDot(false);
        }
      });

      ctx.lineWidth = 0.8;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.95;
            ctx.strokeStyle = `rgba(245, 245, 245, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(217, 119, 6, 0.8)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-[#060a13] -z-10 pointer-events-none"
    />
  );
}
