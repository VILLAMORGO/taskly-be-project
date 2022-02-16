module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  content: ["./app/**/*.{html,js,erb}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
