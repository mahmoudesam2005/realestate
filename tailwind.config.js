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
        secondaryColor: '#DAEFFF',
        itemsLightBlue: '#C3E5FF',
        mainBlack: '#0A0E1F'
      }
    },
  },
  plugins: [],
};
