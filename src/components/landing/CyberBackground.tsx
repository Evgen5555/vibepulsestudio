import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
}

interface FloatingShape {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  type: 'square' | 'triangle';
  color: string;
  rotation: number;
  rotSpeed: number;
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
    const shapes: FloatingShape[] = [];

    const maxDots = 45;
    const maxShapes = 12;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createDot = (initAll = false): Dot => ({
      x: Math.random() * canvas.width,
      y: initAll ? Math.random() * canvas.height : canvas.height + 10,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -(Math.random() * 0.4 + 0.2),
      size: Math.random() * 2 + 1.5,
    });

    const createShape = (initAll = false): FloatingShape => ({
      x: Math.random() * canvas.width,
      y: initAll ? Math.random() * canvas.height : canvas.height + 30,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.3 + 0.1),
      size: Math.random() * 16 + 12,
      type: Math.random() > 0.5 ? 'square' : 'triangle',
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(168, 85, 247, 0.3)',
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
    });

    for (let i = 0; i < maxDots; i++) dots.push(createDot(true));
    for (let i = 0; i < maxShapes; i++) shapes.push(createShape(true));

    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((s, idx) => {
        s.x += s.speedX;
        s.y += s.speedY;
        s.rotation += s.rotSpeed;

        if (s.y < -30 || s.x < -30 || s.x > canvas.width + 30) {
          shapes[idx] = createShape(false);
        }

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.5;
        if (s.type === 'square') {
          ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else {
          drawTriangle(ctx, 0, 0, s.size);
          ctx.stroke();
        }
        ctx.restore();
      });

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
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
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
