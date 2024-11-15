/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f74b38",
        secondary: "#151515",
        accent: "#525252",
        primaryHover: "#ff0000",
      },
      // fontFamily: {
      //   primary: ["Helveti"],
      // },
    },
  },
  plugins: [],
};
