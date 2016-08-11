"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: ["*.js", "*.json", "api/**/*.js"],
      options: {
        strict: true,
        globalstrict: true,
        node: true
      }
    },
    sass: {
      dist: {
        files: {
          'public/styles/main.css': 'app/sass/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['sass']);
  grunt.registerTask("lint", ["jshint"]);
};
