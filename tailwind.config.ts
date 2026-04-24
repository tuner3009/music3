import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050509',
        surface: 'rgba(255,255,255,0.055)',
        elevated: 'rgba(255,255,255,0.08)',
        border: 'rgba(255,255,255,0.1)',
        primary: '#8B5CF6',
        secondary: '#06B6D4',
        glow: '#D946EF',
        gold: '#FACC15',
      },
      boxShadow: {
        glow: '0 0 30px rgba(139,92,246,.35)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
