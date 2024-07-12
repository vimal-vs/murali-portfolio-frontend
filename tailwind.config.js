/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#8280F2",
        yellow: "#FDC435"
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
};
