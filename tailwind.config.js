/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'matrix': 'matrix 2s linear infinite',
        'holographic': 'holographic 4s ease infinite',
        'loading-sweep': 'loading-sweep 2s linear infinite',
      },
      backgroundImage: {
        'gaming-gradient': 'linear-gradient(45deg, #ef4444, #f97316, #06b6d4, #8b5cf6)',
        'cyber-grid': `
          linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'gaming': '400% 400%',
        'grid': '50px 50px',
      },
      boxShadow: {
        'gaming': '0 0 20px rgba(239, 68, 68, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)',
        'neon-red': '0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444',
        'neon-cyan': '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4',
      },
      textShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
      },
    },
  },
  plugins: [],
};