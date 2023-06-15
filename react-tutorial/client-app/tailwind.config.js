/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      shareMono: ['Share Tech Mono', 'monospace'],
      share: ['Share', 'cursive'],
      fuzy: ['Fuzzy Bubbles', 'cursive'],
      maniac: ['Monomaniac One', 'sans-serif'],
      marker: ['Permanent Marker', 'cursive'],
      kalam: ['Kalam', 'cursive'],
    },
  },
  plugins: [],
}
