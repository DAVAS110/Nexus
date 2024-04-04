/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tiro: ["Tiro Bangla Italic", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
