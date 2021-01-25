// tailwind.config.js
module.exports = {
  future: {},
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [({ addComponents, theme }) => {
    addComponents({
      ".container": {
        "@apply mx-auto": {}
      },
    });
  },],
}