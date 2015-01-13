module.exports = {

  // development
  'default': [
    'clean:before',
    'styles',
    'scripts',
    'markup'
  ],

  'styles': [
    'compass:dev',
    'autoprefixer'
  ],

  'scripts': [
    'copy:scripts'
  ],

  'markup': [
    'assemble:dev'
  ],

  // production
  'deploy': [
    'clean:before',
    'styles',
    'scripts',
    'markup',
    'inline',
    'clean:production'
  ]
};
