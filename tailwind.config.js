/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#FF8D52',
        sub1: '#FECEA8',
        sub2: '#F66E00',
        sub3: '#FFE5D0',
        black: '#000000',
        gray7: '#4E505B',
        gray50: '#8C8F98',
        gray30: '#D3D4DA',
        gray2: '#F4F5F8',
        gray1: '#FAFAFA',
        white: '#FFFFFF',
        green: '#00FAAC',
        green2: '#F2FFF8',
        red: '#FC5555',
        red2: '#FFF6F6',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      fontSize: {
        fontLarge: '24px',
        fontMedium: '20px',
        fontRegular: '16px',
        fontSmall: '14px',
        fontSemiMicro: '12px',
        fontMicro: '10px',
      },
      fontWeight: {
        weightExtraBold: 800,
        weightBold: 700,
        weightSemiBold: 600,
        weightMedium: 500,
        weightRegular: 400,
        weightLight: 300,
      },
    },
  },
  plugins: [],
};
