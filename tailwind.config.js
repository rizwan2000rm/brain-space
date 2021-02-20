module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {}
  // },
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      display: "Lobster"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
