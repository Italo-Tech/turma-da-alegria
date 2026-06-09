/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        festa: {
          orange: '#FF6B35',
          'orange-dark': '#E55A25',
          yellow: '#FFD60A',
          pink: '#FF4D9E',
          'pink-light': '#FFB3D9',
          purple: '#7C3AED',
          'purple-light': '#A78BFA',
          green: '#22C55E',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 77, 158, 0.6)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        festa: '0 20px 60px -10px rgba(255, 107, 53, 0.4)',
        'festa-lg': '0 30px 80px -10px rgba(255, 77, 158, 0.5)',
        card: '0 10px 40px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        glow: '0 0 30px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
}
