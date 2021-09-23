module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: " Lato, sans-serif",
    },
    extend: {
      screens: {
        mobile: { max: "767px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
