module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#242275',
        secondary: '#2E348A',
        tertiary: '#E69238',
        accent: '#D82F32',
        accentHover: '#b52023',
        textColor: "#FFFFFF",
        success: '#2DFFC0',
        // error: '#DC3545',
        // warning: '#FFC107',
        surface: '#463DB2',
        background: '#0E1039',
        shadow: "#0C0D31",
        // surface: '#FFFFFF',
        // hover: '#0056b3',
        disabled: '#8694EC',
      },
      width: {
        long: '61.8%',
        short: '38.2%',
      },
      fontFamily: {
        alphabet: ['Helvetica', 'Pretendard', 'sans-serif'], 
        alphabetStrong: ['Renegade', 'Pretendard', 'sans-serif'],
        korean: ['Pretendard', 'sans-serif'],
        koreanStrong: ['Rokf', 'Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};