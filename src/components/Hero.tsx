import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Star, Shield, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'ELITE WEB DEVELOPER';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Interstellar Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            filter: 'brightness(0.3) contrast(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-cyan-900/20" />
      </div>

      {/* Gaming HUD Elements */}
      <div className="absolute top-20 left-4 z-10 hidden lg:block">
        <div className="bg-black/50 border border-red-500/50 p-4 rounded backdrop-blur-sm">
          <div className="text-xs font-rajdhani text-red-400 mb-2">SYSTEM STATUS</div>
          <div className="space-y-1 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">CPU:</span>
              <span className="text-green-400">98%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">GPU:</span>
              <span className="text-green-400">95%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">RAM:</span>
              <span className="text-green-400">87%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-4 z-10 hidden lg:block">
        <div className="bg-black/50 border border-cyan-500/50 p-4 rounded backdrop-blur-sm">
          <div className="text-xs font-rajdhani text-cyan-400 mb-2">LOCATION</div>
          <div className="text-xs font-mono text-gray-300">
            <div>LAT: 23.6693° N</div>
            <div>LON: 85.9630° E</div>
            <div>ALT: 213m</div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <div className="text-xs font-rajdhani tracking-[0.3em] text-red-400 mb-4 animate-pulse">
            REPUBLIC OF GAMERS • ELITE DIVISION
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-exo mb-6 leading-none">
            <span className="block text-white drop-shadow-2xl">VISHAL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse">
              KUMAR
            </span>
            <span className="block text-white drop-shadow-2xl">RAJAK</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-rajdhani text-cyan-400 mb-8 h-12">
            {typedText}<span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Stats Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-black/30 border border-red-500/30 p-4 rounded backdrop-blur-sm">
            <div className="text-2xl font-exo font-bold text-red-400">21</div>
            <div className="text-xs font-rajdhani text-gray-400">YEARS</div>
          </div>
          <div className="bg-black/30 border border-orange-500/30 p-4 rounded backdrop-blur-sm">
            <div className="text-2xl font-exo font-bold text-orange-400">3+</div>
            <div className="text-xs font-rajdhani text-gray-400">PROJECTS</div>
          </div>
          <div className="bg-black/30 border border-cyan-500/30 p-4 rounded backdrop-blur-sm">
            <div className="text-2xl font-exo font-bold text-cyan-400">BIT</div>
            <div className="text-xs font-rajdhani text-gray-400">MESRA</div>
          </div>
          <div className="bg-black/30 border border-green-500/30 p-4 rounded backdrop-blur-sm">
            <div className="text-2xl font-exo font-bold text-green-400">∞</div>
            <div className="text-xs font-rajdhani text-gray-400">PASSION</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-rajdhani font-bold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-2">
              <Zap size={20} />
              <span>VIEW PROJECTS</span>
            </div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-rajdhani font-bold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-cyan-500 hover:text-black"
          >
            <div className="relative flex items-center space-x-2">
              <Shield size={20} />
              <span>CONTACT ME</span>
            </div>
          </button>
        </div>

        {/* Gaming Tags */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-rajdhani text-gray-400 mb-8">
          <div className="flex items-center space-x-2">
            <Star size={16} className="text-yellow-400" />
            <span>Bokaro, Jharkhand</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gamepad2 size={16} className="text-green-400" />
            <span>Cricket & BGMI</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield size={16} className="text-blue-400" />
            <span>3rd Year • 2022 Batch</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 group"
      >
        <div className="w-12 h-12 border-2 border-red-500/50 rounded-full flex items-center justify-center group-hover:border-red-400 transition-colors duration-200">
          <ChevronDown size={24} className="text-red-400 group-hover:text-red-300" />
        </div>
      </button>

      {/* Corner HUD Elements */}
      <div className="absolute bottom-4 left-4 z-10 hidden lg:block">
        <div className="text-xs font-mono text-gray-500">
          <div>COORDINATES: 23.6693°N, 85.9630°E</div>
          <div>TIMESTAMP: {new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 hidden lg:block">
        <div className="text-xs font-mono text-gray-500">
          <div>STATUS: ACTIVE</div>
          <div>MODE: ELITE</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;