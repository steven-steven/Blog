/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.*",
    "./models/**/*.*",
    "./helpers/**/*.*",
    "./layouts/**/*.*",
    "./partials/**/*.*"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: "times, serif",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
