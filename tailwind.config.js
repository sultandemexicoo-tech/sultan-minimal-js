/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      colors: { sultan: { dark: '#0B0B0F', gold: '#D4AF37' } },
      boxShadow: { sultan: '0 10px 30px rgba(212,175,55,0.15)' }
    },
  },
  plugins: [],
};
