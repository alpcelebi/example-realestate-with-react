/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e3a8a',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -22px rgba(15, 23, 42, 0.38)',
        card: '0 10px 30px -20px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(125deg, rgba(15,23,42,1) 0%, rgba(30,58,138,1) 55%, rgba(51,65,85,1) 100%)',
      },
    },
  },
  plugins: [],
}
