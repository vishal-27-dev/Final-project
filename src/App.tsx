import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import FloatingModel from './components/FloatingModel';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress with realistic timing
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <FloatingModel />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;