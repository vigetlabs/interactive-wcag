module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: './src/javascripts/',
      src: ['**/*.js'],
      dest: './dest/assets/javascripts/'
    }]
  }
};
