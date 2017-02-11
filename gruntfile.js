module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/script.main.js'
      }
    },
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['src/**/*.css'],
        dest: 'dist/style.main.css'
      }
    },
    uglify: {
      dist: {
        src: ['dist/script.main.js'],
        dest: 'dist/script.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          src: ['dist/style.main.css'],
          dest: 'dist/style.min.css'
        }]
      }
    }
  })


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}
