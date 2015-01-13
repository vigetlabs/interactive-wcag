module.exports = {
  options: {
    layout: 'default',
    layoutext: '.hbs',
    layoutdir: './_layouts/',
    partials: './_includes/**/*.hbs',
    assets: './dest/assets'
  },

  dev: {
    options: {
      production: false
    },
    expand: true,
    cwd: './_pages/',
    src: ['**/*.hbs'],
    dest: './dest/'
  }
};
