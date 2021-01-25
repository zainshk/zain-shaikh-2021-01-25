// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
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