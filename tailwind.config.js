/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.handlebars"],
  theme: {
    extend: {
      colors: {
        pb: {
          50: "#FFE48A",
          100: "#FEDF76",
          200: "#FED64D",
          300: "#FECC25",
          400: "#F9C001",
          500: "#C19501",
          600: "#896A01",
          700: "#513F00",
          800: "#191400",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
