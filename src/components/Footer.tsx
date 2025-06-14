import React from 'react';
import { Heart, Code, Coffee, Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-3xl font-exo font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500 mb-2">
              VKR.ELITE
            </div>
            <div className="text-sm font-rajdhani tracking-[0.3em] text-gray-400">
              REPUBLIC OF GAMERS • WEB DIVISION
            </div>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span className="font-rajdhani">Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <Code className="text-cyan-400" size={16} />
            <Coffee className="text-orange-400" size={16} />
            <span className="font-rajdhani">and</span>
            <Gamepad2 className="text-green-400" size={16} />
          </div>

          {/* Copyright */}
          <div className="text-sm font-rajdhani text-gray-500 mb-4">
            © 2024 Vishal Kumar Rajak. All rights reserved.
          </div>

          {/* Gaming signature */}
          <div className="text-xs font-mono text-gray-600">
            <div>SYSTEM: PORTFOLIO v2.0 • BUILD: {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}</div>
            <div>STATUS: OPERATIONAL • MODE: ELITE • UPTIME: 99.9%</div>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;