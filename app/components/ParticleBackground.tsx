'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number; // Velocity X
  vy: number; // Velocity Y
  size: number;
  depth: number; // 0 (far) to 1 (near)
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;

    // Configuration
    const particleCount = 70;
    // Use theme to determine color, defaulting to slate/white
    // We can't easily react to theme changes inside the loop without refs or dependencies, 
    // effectively verifying theme in the loop or regenerating on theme change.
    // The dependency array [theme] handles regeneration.
    const baseColor = theme === 'dark' ? '255, 255, 255' : '100, 116, 139';

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const depth = Math.random(); // 0 to 1

        // "Closer" particles (higher depth) are bigger and move faster
        const size = (depth * 3) + 1;
        const speedMultiplier = (depth * 0.5) + 0.2;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speedMultiplier,
          vy: (Math.random() - 0.5) * speedMultiplier,
          size: size,
          depth: depth,
          color: `rgba(${baseColor}, ${depth * 0.3 + 0.1})` // Cleaner opacity based on depth? kept random-ish or driven by depth
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 1. Random Movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // 2. Mouse Parallax
        // Closer particles (higher depth) move more in response to mouse
        const parallaxStrength = p.depth * 30;

        // Calculate offset (moves opposite to mouse)
        // Center the mouse influence: (mouseX - width/2)
        // We check if mouseX is initialized (it might be 0,0 at start) which is fine.
        const dx = (mouseX - canvas.width / 2) / canvas.width;
        const dy = (mouseY - canvas.height / 2) / canvas.height;

        const offsetX = -dx * parallaxStrength;
        const offsetY = -dy * parallaxStrength;

        // Draw
        ctx.beginPath();
        ctx.fillStyle = p.color;
        // Draw at position + offset
        ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // fixed + -z-index ensures it stays behind everything and doesn't scroll
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
}