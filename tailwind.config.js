/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFA50E',
        'secondary': '#3B3E41',
        'dark-gray': '#524F4B',
        'gray': '#888888',
        'light-white': '#FFF4E0'
      },
      textColor: {
        'primary': '#FFA50E',
        'secondary': '#3B3E41',
        'dark-gray': '#524F4B',
        'gray': '#888888',
        'light-white': '#FFF4E0'
      }
    },
    fontFamily: {
      Limelight: ['Limelight', 'cursive'],
      Nunito: ['Nunito', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif'],
    }
  },
  plugins: [],
}
 