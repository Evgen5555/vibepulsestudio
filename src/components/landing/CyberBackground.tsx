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
    const maxDots = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createDot = (initAll = false): Dot => ({
      x: Math.random() * canvas.width,
      y: initAll ? Math.random() * canvas.height : canvas.height + 10,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.3 + 0.15),
      size: Math.random() * 2 + 1.5,
    });

    for (let i = 0; i < maxDots; i++) dots.push(createDot(true));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d, idx) => {
        d.x += d.speedX;
        d.y += d.speedY;

        if (d.y < -10 || d.x < -10 || d.x > canvas.width + 10) {
          dots[idx] = createDot(false);
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = '#d97706';
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
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
