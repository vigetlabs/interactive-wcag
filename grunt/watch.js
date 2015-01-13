module.exports = {
  configFiles: {
    files: ['Gruntfile.js'],
    options: {
      reload: true
    }
  },

  scripts: {
    files: [
      './src/javascripts/**/*.js',
      '!./src/app.js'
    ],
    tasks: ['scripts'],
    options: {
      spawn: false
    }
  },

  styles: {
    files: './src/scss/**/*.scss',
    tasks: ['styles'],
    options: {
      spawn: false
    }
  },

  markup: {
    files: [
      './_includes/**/*.hbs',
      './_layouts/**/*.hbs',
      './_pages/**/*.hbs'
    ],
    tasks: ['markup'],
    options: {
      spawn: false
    }
  },

  livereload: {
    options: {
      livereload: true
    },
    files: ['./dest/**/*']
  }
};
