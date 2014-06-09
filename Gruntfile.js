module.exports = function(grunt) {

  grunt.initConfig({
    qunit: {
      files: ['src/test/*.html']
    },
    jshint: {
      files: [
        'Gruntfile.js', 
        'src/main/js/*.js', 
        'src/main/js/**/*.js', 
        'src/test/*.js', 
        'src/test/**/*.js', 
        '!src/main/js/lib/require/require.js', 
        '!src/main/js/lib/require/text.js', 
        '!src/main/js/lib/backbone.js', 
        '!src/main/js/lib/jquery.js', 
        '!src/main/js/lib/underscore.js', 
        '!src/test/qunit.js'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          define: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'qunit']);
};