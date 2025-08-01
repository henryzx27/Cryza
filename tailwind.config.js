/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // Neon blue
        dark: '#0a0a0f',
      },
    },
  },
  plugins: [],
};
