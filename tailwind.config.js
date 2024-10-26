// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#385385',
        mainColorHover: "#5573aa",
        secondaryColor: '#DAEFFF',
        itemsLightBlue: '#C3E5FF',
        mainBlack: '#0A0E1F',
        grayColor: '#666'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        fade: 'fade .3s linear 1'
      },
      keyframes: {
        fade: {
          '0%': {opacity: '0'},
          '100%': {opacity: '0.45'},
        }
      }
    },
  },
  plugins: [],
};
