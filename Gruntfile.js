// Node modules
const path = require('path')

/**
 * - Configures our tasks and tells plugins where to find files to process
 * - Load plugins into the file (e.g grunt-contrib-concat)
 * - Register tasks wich need to be ran
 */

module.exports = grunt => {
  // materialize components package path
  const materialize = './node_modules/materialize-css/'

  // the components files to concatenate
  let components = [
    'js/cash.js',
    'js/component.js',
    'js/global.js',
    'js/anime.min.js',
    // 'js/collapsible.js',
    // 'js/dropdown.js',
    // 'js/modal.js',
    // 'js/materialbox.js',
    // 'js/parallax.js',
    // 'js/tabs.js',
    // 'js/tooltip.js',
    // 'js/waves.js',
    // 'js/toasts.js',
    'js/sidenav.js'
    // 'js/scrollspy.js',
    // 'js/autocomplete.js',
    // 'js/forms.js',
    // 'js/slider.js',
    // 'js/cards.js',
    // 'js/chips.js',
    // 'js/pushpin.js',
    // 'js/buttons.js',
    // 'js/datepicker.js',
    // 'js/timepicker.js',
    // 'js/characterCounter.js',
    // 'js/carousel.js',
    // 'js/tapTarget.js',
    // 'js/select.js',
    // 'js/range.js'
  ]
  // Create Array of materialize components paths
  components = components.map(component => path.join(process.cwd(), materialize, component))

  // Configuration
  grunt.initConfig({
    // pass in options to plugins, references to file...
    // @docs https://github.com/gruntjs/grunt-contrib-concat
    concat: {
      options: {
        separator: ';\n',
        process: (src, filepath) => {
          if (filepath.includes('cash.js')) {
            console.log(`=> ${filepath}`) // !DEBUG
            console.log(src) // !DEBUG
          }
          return src
        }
      },
      js: {
        src: components, // ['./src/js/a.js', './src/js/b.js'] or ['js/*.js'] all .js files inside a given folder
        dest: './src/vendor/vendor.js'
      }
    }
  })

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat')

  // Register tasks
  grunt.registerTask('dummyTask', () => console.log('Hi! I\'am a dummyTask grunt task!')) // npm run dummyTask
  grunt.registerTask('run', () => console.log('task run fired'))

  // Run all given tasks
  grunt.registerTask('all', ['dummyTask', 'run']) // npm run grunt all

  // Run with a plugin
  grunt.registerTask('concat-js', ['concat:js']) // npm run grunt concat-js
}
