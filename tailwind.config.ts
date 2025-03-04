import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

const goldenRatio = 1.618;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        korean: ["Pretendard", "sans-serif"],
        alphabet: ["Helvetica", "Arial", "sans-serif"],
      },
      screens: {
        xs: "560px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        custom: "1470px",
      },
      //색상
      colors: {
        primary: "#181847",
        primaryLight: "#7f7fb8",
        secondary: "#23284b",
        secondaryLight: "#FFFFFF",
        tertiary: "#E69238",
        tertiaryLight: "#f77211",
        accent: "#D82F32",
        accentHover: "#b52023",
        textColor: "#FFFFFF",
        textColorLight: "#262c50",
        textGray: "#706e7c",
        textGrayLight: "#aaaaaa",
        strongGrayLight: "#5b5b5b",
        success: "#2DFFC0",
        successLight: "#181847",
        surface: "#463DB2",
        surfaceLight: "#8694EC",
        background: "#131727",
        backgroundLight: "#dce1e6",
        shadow: "#111321",
        shadowLight: "#282828",
        disabled: "#8694EC",
      },

      //황금비
      aspectRatio: {
        golden: `${goldenRatio.toFixed(3)}/1`, // 1.618:1 비율
        "golden-reverse": `1/${goldenRatio.toFixed(3)}`, // 역 황금비 (1:1.618)
      },
      width: {
        long: "61.8%",
        short: "38.2%",
      },

      //애니메이션
      keyframes: {
        "scale-bounce": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "line-extend": {
          "0%": { transform: "scaleX(0.2)", "transform-origin": "left" },
          "70%": { transform: "scaleX(0.9)", "transform-origin": "left" },
          "100%": { transform: "scaleX(1)", "transform-origin": "left" },
        },

        slotMove: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-500%)" },
        },
      },
      
      animation: {
        "scale-bounce": "scale-bounce 0.3s ease-in-out",
        "line-extend": "line-extend 0.3s ease-in-out",

        "slot-spin": "slotMove 0.1s linear infinite",


      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
