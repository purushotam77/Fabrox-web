/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      },
      animation: {
      'scale-in': 'scaleIn 0.3s ease-out',
       'spin-slow': 'spin 5s linear infinite',
      'spin-reverse': 'spin 6s linear infinite reverse',
      '3dpop': 'pop3d 1.5s ease-in-out infinite alternate',
    },
       keyframes: {scaleIn: {
        '0%': { transform: 'scale(0.8)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         pop3d: {
        '0%': { transform: 'scale(1) rotateX(0deg)' },
        '100%': { transform: 'scale(1.05) rotateX(8deg)' },
      }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out',
      },
      
      colors: {
      blue: {
        800: '#1e3a8a',
        900: '#1e40af',
      }
    }},
  },
  plugins: [],
}
