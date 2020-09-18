module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./src/**/*.njk'],
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        universe: "url('/static/universe.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
};
