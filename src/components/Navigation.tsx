import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail, Award, Gamepad2, Star, Zap, Shield, Cpu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-red-500/30 shadow-lg shadow-red-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div className="font-exo font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                VKR.ELITE
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 font-rajdhani font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-red-400'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-red-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                );
              })}
            </div>

            {/* Gaming Status Indicator */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs font-rajdhani">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="text-xs font-rajdhani text-gray-400">
                ELITE MODE
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Gaming-style decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 text-2xl font-rajdhani font-medium text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  <Icon size={24} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Mobile menu decorations */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-red-500/50" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-red-500/50" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-red-500/50" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-red-500/50" />
        </div>
      )}
    </>
  );
};

export default Navigation;