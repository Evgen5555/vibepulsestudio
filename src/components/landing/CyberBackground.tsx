import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rot: number;
  rotSpeed: number;
  sides: number;
  alpha: number;
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const maxParticles = 25;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (initY = false): Particle => ({
      x: Math.random() * canvas.width,
      y: initY ? Math.random() * canvas.height : canvas.height + 20,
      size: Math.random() * 15 + 8,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: -(Math.random() * 0.5 + 0.3),
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      sides: Math.random() > 0.5 ? 3 : 4,
      alpha: Math.random() * 0.4 + 0.1,
    });

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const drawPolygon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      sides: number,
      rotation: number,
    ) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = rotation + (i * Math.PI * 2) / sides;
        const sx = x + Math.cos(angle) * radius;
        const sy = y + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rot += p.rotSpeed;

        if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          particles[idx] = createParticle(false);
        }

        ctx.save();
        ctx.shadowBlur = 15;
        const isCyan = idx % 2 === 0;
        ctx.shadowColor = isCyan ? 'rgba(6, 182, 212, 0.6)' : 'rgba(168, 85, 247, 0.6)';
        ctx.strokeStyle = isCyan
          ? `rgba(6, 182, 212, ${p.alpha})`
          : `rgba(168, 85, 247, ${p.alpha})`;
        ctx.lineWidth = 1.5;
        drawPolygon(ctx, p.x, p.y, p.size, p.sides, p.rot);
        ctx.stroke();
        ctx.restore();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
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
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
