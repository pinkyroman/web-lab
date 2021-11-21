module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    workboxOptions: {
      include: [/^index\.html$/, /\.js$/, /\.css$/, /\.html$/, /\.json$/, /\.png$/],
      exclude: [],
    },
  },
};