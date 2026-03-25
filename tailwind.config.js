/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        surface: '#FFFFFF',
        primary: '#EBE8E3',
        accent: '#FF6B00',
        dark: '#0A0A0A',
        light: '#F4F4F5'
      },
      fontFamily: {
        sans: ['Almarai', 'sans-serif'],
        serif: ['Shadows Into Light', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
