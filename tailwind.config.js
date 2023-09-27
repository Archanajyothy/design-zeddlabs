module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_90: "#ffffff90",
          A700_6c: "#ffffff6c",
          A700_00: "#ffffff00",
          A700: "#ffffff",
        },
        blue: {
          100: "#cbdeff",
          800: "#2557d6",
          A700: "#0156ff",
          "100_01": "#cbeeff",
          "100_02": "#d3ddf7",
        },
        light_blue: { 500: "#00a3ff", 600: "#009cde", "600_01": "#0099df" },
        gray: { 50: "#f5f6ff", 500: "#a2a2a2", 700: "#666666", 900: "#2a2a2a" },
        green: { 400: "#78a962" },
        red: { 100: "#fcdfce", A700: "#db0000", A700_01: "#eb001b" },
        black: {
          900: "#020202",
          "900_01": "#000000",
          "900_02": "#020203",
          "900_99": "#00000099",
        },
        yellow: { 800: "#e9a426", 900: "#f26e21" },
        blue_gray: { 100: "#c9ccd7", 300: "#a1a5b0" },
        amber: { 600: "#f9b50b" },
        teal: { 50: "#d7e2f3" },
        indigo: { 400: "#6c6bbd", 500: "#3362ab", 900: "#003087" },
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff00,#ffffff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
