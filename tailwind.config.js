/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060c1a',
          900: '#0a1628',
          800: '#0f1f3d',
          700: '#162344',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(34,211,238,0.4), 0 0 80px rgba(139,92,246,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34,211,238,0.3)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
