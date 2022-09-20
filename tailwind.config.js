/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themePrimary: "#fca311",
        dynamicBlue: "#3a86ff",
        dynamicPink: "#ef476f",
        darkTheme: "#03071e",
        lightTheme: "#f8edeb",
      },
    },
  },
  plugins: [],
};
