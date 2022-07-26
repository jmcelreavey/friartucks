/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Oxygen', 'Tahoma', 'Verdana', 'sans-serif'],
    },
    extend: {
      colors: {
        "friar-blue": {
          DEFAULT: "#274C71",
        },
        "friar-green": {
          DEFAULT: "#339933",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
