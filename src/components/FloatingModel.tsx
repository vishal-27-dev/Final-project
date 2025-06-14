import React, { useRef, useEffect } from 'react';

const FloatingModel: React.FC = () => {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const model = modelRef.current;
    if (!model) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      if (model) {
        const x = Math.sin(time) * 20;
        const y = Math.cos(time * 0.7) * 15;
        const rotateY = Math.sin(time * 0.5) * 10;
        
        model.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${rotateY}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-10 transform -translate-y-1/2 z-5 pointer-events-none hidden lg:block">
      <div
        ref={modelRef}
        className="w-32 h-32 relative"
        style={{ perspective: '1000px' }}
      >
        {/* 3D Cube Model */}
        <div className="relative w-full h-full transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 backdrop-blur-sm"
               style={{ transform: 'translateZ(64px)' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-red-400 font-exo font-bold text-xl">VKR</div>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 backdrop-blur-sm"
               style={{ transform: 'translateZ(-64px) rotateY(180deg)' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-cyan-400 font-exo font-bold text-xl">DEV</div>
            </div>
          </div>
          
          {/* Right Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 backdrop-blur-sm"
               style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-purple-400 font-exo font-bold text-xl">3D</div>
            </div>
          </div>
          
          {/* Left Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 backdrop-blur-sm"
               style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-green-400 font-exo font-bold text-xl">WEB</div>
            </div>
          </div>
          
          {/* Top Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 backdrop-blur-sm"
               style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
          </div>
          
          {/* Bottom Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/50 backdrop-blur-sm"
               style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-cyan-500/10 rounded-lg blur-xl animate-pulse" />
      </div>
    </div>
  );
};

export default FloatingModel;