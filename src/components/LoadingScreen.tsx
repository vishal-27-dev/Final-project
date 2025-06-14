import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  const [hashNumbers, setHashNumbers] = useState<string[]>([]);
  const [glitchText, setGlitchText] = useState('INITIALIZING');

  useEffect(() => {
    const generateHashNumbers = () => {
      const numbers = [];
      for (let i = 0; i < 80; i++) {
        numbers.push(Math.random().toString(16).substr(2, 8).toUpperCase());
      }
      setHashNumbers(numbers);
    };

    const glitchTexts = ['INITIALIZING', 'LOADING ASSETS', 'COMPILING SHADERS', 'RENDERING 3D', 'OPTIMIZING', 'READY TO LAUNCH'];
    let textIndex = 0;

    const textInterval = setInterval(() => {
      if (progress < 100) {
        setGlitchText(glitchTexts[Math.floor((progress / 100) * glitchTexts.length)]);
      }
    }, 500);

    generateHashNumbers();
    const interval = setInterval(generateHashNumbers, 100);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-cyan-900/20" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border-l border-red-500/30 animate-pulse"
            style={{
              left: `${i * 5}%`,
              height: '100%',
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Hash Stream Background */}
      <div className="absolute inset-0 opacity-30">
        {hashNumbers.map((hash, index) => (
          <div
            key={index}
            className="absolute text-red-400 text-xs font-mono animate-pulse font-exo"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            #{hash}
          </div>
        ))}
      </div>

      {/* Main Loading Content */}
      <div className="text-center z-10 relative">
        {/* ROG Style Logo */}
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-bold font-exo text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse">
            VKR
          </div>
          <div className="text-sm font-rajdhani tracking-[0.3em] text-red-400 mt-2">
            REPUBLIC OF GAMERS
          </div>
        </div>

        {/* Glitch Text */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold font-exo text-red-400 glitch-text">
            {glitchText}
          </h1>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-96 md:w-[500px] mx-auto mb-6">
          <div className="flex justify-between text-xs font-rajdhani text-red-400 mb-2">
            <span>LOADING</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          
          {/* Outer Progress Bar */}
          <div className="relative h-3 bg-gray-900 border border-red-500/50 rounded-sm overflow-hidden">
            {/* Inner Progress */}
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-red-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
            
            {/* Progress Bar Segments */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-px h-full bg-red-500/30"
                style={{ left: `${i * 10}%` }}
              />
            ))}
          </div>
        </div>
        
        {/* Binary Stream */}
        <div className="text-green-400 font-mono text-xs font-exo opacity-60">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mr-1 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>

        {/* System Info */}
        <div className="mt-8 text-xs font-rajdhani text-gray-400 space-y-1">
          <div>SYSTEM: VISHAL PORTFOLIO v2.0</div>
          <div>GPU: WebGL 2.0 ACCELERATED</div>
          <div>STATUS: ELITE MODE ACTIVATED</div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-red-500/50" />
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-red-500/50" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-red-500/50" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-red-500/50" />

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
      </div>
    </div>
  );
};

export default LoadingScreen;