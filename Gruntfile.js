module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.loadNpmTasks('grunt-ember-template-compiler');

  grunt.initConfig({
    concat: {
      dist: {
          src: [
            'js/vendor/jquery/jquery.min.js',
            'js/vendor/handlebars/handlebars.js',
            'js/vendor/ember/ember.js',
            'vendor/loader.js',
            'vendor/ember-resolver.js',
            'js/app/**/*.js',
            'js/dist/tmpl.min.js'],
          dest: 'js/dist/deps.min.js'
      }
    },
    emberhandlebars: {
        compile: {
            options: {
                templateName: function(sourceFile) {
                    var newSource = sourceFile.replace('js/templates/', '');
                    return newSource.replace('.handlebars', '');
                }
            },
            files: ['js/templates/*.handlebars'],
            dest: 'js/dist/tmpl.min.js'
        }
    }
  });

  grunt.task.registerTask('local', ['emberhandlebars', 'concat:dist']);
}
