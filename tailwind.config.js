module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'archivo': ['Archivo', 'sans-serif'],
        'workSans': ['Work Sans', 'sans-serif'],
      },
      boxShadow : {
        'imgShadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      }
    }
  },
  plugins: [],
}