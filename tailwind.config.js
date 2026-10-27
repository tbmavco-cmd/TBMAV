/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#fff8f9',
          100: '#fbeef0',
          200: '#f1dce0',
          300: '#856f74',
          900: '#000000',
          800: '#1a1a1a',
          700: '#333333',
        },
        blush: {
          50: '#fff8f9',
          100: '#fbeef0',
          200: '#f1dce0',
        },
        gold: {
          200: '#e3cb94',
          300: '#e3cb94',
          400: '#d4b872',
          500: '#c6a15b',
          600: '#a8843f',
          700: '#7e6029',
        },
        muted: {
          500: '#856f74',
          600: '#746064',
        },
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

