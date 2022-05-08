const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['"Rubik"', "sans-serif"],
        Roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        "2xl": ["24px", "36px"],
        xl: ["20px", "30px"],
        base: ["18px", "40px"],
        sm: [
          "16px",
          {
            lineHeight: "19px",
            letterSpacing: "0.05em",
          },
        ],
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        desktop: "1140px",
      },
      screens: {
        sm: { max: "601px" },
        md: { min: "602px", max: "851px" },
        "max-md": { max: "851px" },
        "max-lg": { max: "1140px" },
        lg: { min: "851px", max: "1140px" },
      },
      colors: {
        red: "var(--red)",
        "red-light": "var(--red-light)",
        white: "var(--white)",
        black: "var(--black)",
        whitish: "var(--whitish)",
        pink: "var(--pink)",
      },
      borderRadius: {
        md: "10px",
        sm: "5px",
      },
      zIndex: {
        modal: "50",
        fixed: "40",
        notification: "30",
        container: "20",
        dropdown: "10",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        svg: {
          fill: "currentColor",
        },
        body: {
          fontFamily: "Rubik",
          fontWeight: 300,
          outline: "none",
          backgroundColor: "var(--whitish)",
          color: "var(--black)",
        },
        h1: {
          fontSize: "100px",
          lineHeight: "100px",
          fontWeight: 400,
        },
        h2: {
          fontSize: "48px",
          lineHeight: "67.2px",
          fontWeight: 400,
        },
        h3: {
          fontSize: "24px",
          lineHeight: "40px",
          letterSpacing: "0.1em",
          fontWeight: 700,
        },
      });
      addUtilities({
        ".flex": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".flex-start": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        },
        ".flex-left": {
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        },
        ".flex-right": {
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        },
        ".flex-end": {
          display: "flex",
          alignItems: "flex-end",
        },
        ".abs": {
          position: "absolute",
          margin: "auto",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        ".height-inherit": {
          height: "inherit",
        },
        ".h-max": {
          height: "max-content",
        },
        ".fill-transparent": {
          fill: "transparent",
        },
      });
    }),
  ],
};
