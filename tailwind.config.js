/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary sẽ dùng trong cả dark/light
        primary: {
          DEFAULT: '#3b82f6',     // blue-500
          foreground: '#ffffff',  // màu chữ trên nền primary
        },
    },
  },
},
  plugins: [],
};