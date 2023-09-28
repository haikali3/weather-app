module.exports = {
  content: ['./index.html', './src/**/*. {vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#fff200"
        "weather-secondary": "#807900"
      }
    },
    fontFamily:{
      Roboto: ["Roboto,sans-serif"],
    },
    container:{
      padding: "2rem",
      center: true,
    },
    screens:{
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
