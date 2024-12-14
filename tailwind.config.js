/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],  // Add the font family
      },
      animation: {
        gradient: 'gradient 4s infinite',
        slideIn: 'slideIn 1s ease-out', // Add slide-in animation
        fadeIn: 'fadeIn 2s ease-in-out', // Add fade-in animation
      },
      keyframes: {
        gradient: {
          '70%': {
            transform: 'scale(1.2) translate(50px)',
          },
        },
        slideIn: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backdropFilter: {
        'blur-lg': 'blur(80px)', // Add backdrop blur effect
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'), // Add this line to enable backdrop-filter
  ],
};
