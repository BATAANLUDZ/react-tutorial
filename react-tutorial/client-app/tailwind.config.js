/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbit: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
