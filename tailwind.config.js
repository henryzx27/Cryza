/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        obsidian: '#050505',
        charcoal: '#0F1014',
        primary: '#2563EB', // Neon Blue
        secondary: '#00F0FF', // Cyber Cyan
        navy: '#1E3A8A', // Deep Navy
        muted: '#64748B', // Slate Gray
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #2563EB 0%, #00F0FF 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #050505, #0F1014)',
      },
    },
  },
  plugins: [],
};
