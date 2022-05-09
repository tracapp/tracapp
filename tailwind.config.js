module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      moonhouse: ["moonhouse", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-red": "#DF1B3F",
        "brand-dark": "#3A3A3A",
        "brand-dark-100": "#141414",
      },
      screens: {
        "3xl": "2600px",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
      },
      animation: {
        updown: "updown 2s linear infinite",
      },
    },
  },
  plugins: [],
};
