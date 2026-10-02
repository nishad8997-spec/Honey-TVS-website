/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tvs: {
          blue: {
            DEFAULT: '#082A78',
            dark: '#051947',
            light: '#123C8C',
            accent: '#1E50B3'
          },
          red: {
            DEFAULT: '#E3181D',
            dark: '#C8102E',
            light: '#FF3338'
          },
          dark: {
            DEFAULT: '#080B12',
            surface: '#0F1420',
            card: '#151C2C',
            border: '#1F2A40'
          },
          gray: {
            50: '#F8F9FA',
            100: '#F4F5F7',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
          },
          accent: {
            yellow: '#F59E0B'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        racing: ['"Rajdhani"', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'radial-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
