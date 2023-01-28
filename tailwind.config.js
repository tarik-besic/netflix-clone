module.exports = {
  content: [
    "./pages/**/*.{html,ts,tsx,js,jsx}",
    "./components/**/*.{html,ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "13px",
      },
      margin: {
        34: "132px",
      },
      colors: {
        gray: "#8c8c8c",
        "gray-lighter": "#b8b8b8",
        "gray-standard": "#8c8c8c",
        "gray-draker": "#737373",
        orange: "#E87C03",
      },
    },
  },
  // ...
};
