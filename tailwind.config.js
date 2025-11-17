/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0C1120',
        gold: '#ECCE6E',
        silver: '#C7CCD8',
        pacific: '#1A2334',
        moonlight: '#F8F9FB',
        softSky: '#A8B1C4',
        emerald: '#4ADE80',
        skyBlue: '#38BDF8',
        crimson: '#EF4444',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(12, 17, 32, 0.12)',
        'medium': '0 4px 12px rgba(12, 17, 32, 0.15)',
        'panel': '0 8px 24px rgba(12, 17, 32, 0.20)',
        'gold': '0 8px 24px rgba(236, 206, 110, 0.4)',
      },
      animation: {
        'spin': 'spin 800ms linear infinite',
        'pulse': 'pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
