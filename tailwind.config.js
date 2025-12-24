/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1e3a5f',
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#f97316',
          light: '#fb923c',
        },
        gray: {
          dark: '#1f2937',
          DEFAULT: '#4b5563',
          light: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}

