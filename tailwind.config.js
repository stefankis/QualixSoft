module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust the path if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#282828',
        textWhite: '#FFFFFF',
        titles: '#5D5D5D',
        elements: '#EB7127',
        secondary: '#F2F3F2',
        background: '#FFFFFF',
      },
      elementsBackground: {
        'gradient-primary': 'linear-gradient(90deg, #EB7127 0%, #D3804E 100%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        play: ['Play', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
  