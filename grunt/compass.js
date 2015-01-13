module.exports = {
  options: {
    sassDir: './src/scss/',
    cssDir: './dest/assets/stylesheets/',
    fontsDir: './dest/assets/fonts/',
    imagesDir: './dest/assets/images/',
    relativeAssets: true,
    assetCacheBuster: false
  },

  dev: {
    options: {
      outputStyle: 'expanded'
    }
  }
};
