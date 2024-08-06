module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
      },
      fontFamily: {
        sans: ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};