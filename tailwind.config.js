/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        primary: "#f74b38",
        secondary: "#151515",
        accent: "#FFC107",
        primaryHover: "#ff0000",
      },
      // fontFamily: {
      //   primary: ["Helveti"],
      // },
    },
  },
  plugins: [],
};
