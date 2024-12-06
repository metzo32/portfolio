const goldenRatio = 1.618;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //색상
      colors: {
        primary: "#242275",
        secondary: "#2E348A",
        tertiary: "#E69238",
        accent: "#D82F32",
        accentHover: "#b52023",
        textColor: "#FFFFFF",
        success: "#2DFFC0",
        // error: '#DC3545',
        // warning: '#FFC107',
        surface: "#463DB2",
        background: "#0E1039",
        shadow: "#0C0D31",
        // surface: '#FFFFFF',
        // hover: '#0056b3',
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

      //폰트
      fontFamily: {
        alphabet: ["Helvetica", "Pretendard", "sans-serif"],
        alphabetStrong: ["Renegade", "Pretendard", "sans-serif"],
        korean: ["Pretendard", "sans-serif"],
        koreanStrong: ["Rokf", "Pretendard", "sans-serif"],
      },

      //애니메이션
      keyframes: {
        "scale-bounce": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "scale-bounce": "scale-bounce 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
