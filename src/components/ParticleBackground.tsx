import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(300, Math.floor((canvas.width * canvas.height) / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        const maxLife = Math.random() * 300 + 200;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 3 + 1, // Faster falling speed
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          life: maxLife,
          maxLife,
          color: Math.random() > 0.7 ? '#ff4444' : '#ffffff'
        });
      }
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add wind effect
        particle.vx += (Math.random() - 0.5) * 0.1;
        
        // Harsh snow effect - faster and more chaotic
        particle.vy += Math.random() * 0.2;
        
        // Mouse interaction - stronger repulsion
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }

        // Reset particles that fall off screen
        if (particle.y > canvas.height + 20) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = Math.random() * 3 + 1;
        }
        
        if (particle.x > canvas.width + 20) {
          particle.x = -20;
        }
        if (particle.x < -20) {
          particle.x = canvas.width + 20;
        }

        // Update life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.opacity = Math.random() * 0.8 + 0.2;
        }

        // Damping with variation
        particle.vx *= 0.995;
        particle.vy *= 0.998;
        
        // Ensure minimum falling speed
        if (particle.vy < 0.5) {
          particle.vy = Math.random() * 2 + 0.5;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.save();
        
        // Dynamic opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        ctx.globalAlpha = particle.opacity * lifeRatio;
        
        // Draw particle with glow effect
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add inner glow
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = particle.color === '#ff4444' ? '#ff4444' : '#ffffff';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;