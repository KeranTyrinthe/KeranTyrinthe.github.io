/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-in-out infinite',
        'orbit': 'orbit 4s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
        'orbit': {
          '0%': {
            transform: 'rotate(0deg) translateX(100px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(100px) rotate(-360deg)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(123, 93, 255, 0.6), 0 0 40px rgba(123, 93, 255, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(123, 93, 255, 0.8), 0 0 60px rgba(123, 93, 255, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};