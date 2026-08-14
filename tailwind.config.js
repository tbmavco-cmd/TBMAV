/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FBF7F3',
          100: '#F5EDE4',
          200: '#EBDCCB',
          300: '#DDC5A8',
          400: '#C9A77F',
          500: '#B8895C',
          600: '#9E6F47',
          700: '#7E5738',
          800: '#5E4129',
          900: '#3D2A1B',
        },
        cream: {
          50: '#FEFCFA',
          100: '#FAF5EF',
          200: '#F4E9DD',
          300: '#EBD9C6',
        },
        beige: {
          50: '#F7F2EC',
          100: '#EFE7DB',
          200: '#E2D3BF',
          300: '#D2BC9A',
        },
        gold: {
          300: '#D4B872',
          400: '#C4A35A',
          500: '#A8863F',
          600: '#8A6A30',
        },
        ink: {
          900: '#1A1614',
          800: '#2A2421',
          700: '#3D352F',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
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
