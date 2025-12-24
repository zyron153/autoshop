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
          dark: '#0a0a0a',
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
        },
        secondary: {
          DEFAULT: '#dc2626',
          light: '#ef4444',
          dark: '#b91c1c',
        },
        gray: {
          dark: '#0f0f0f',
          DEFAULT: '#4b5563',
          light: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}

