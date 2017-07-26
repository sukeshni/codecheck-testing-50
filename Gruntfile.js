module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          "expand": true,
          "cwd": "es6/src/",
          "src": ["**/*.js"],
          "dest": "target/",
          "ext": ".js"
        }]
      },
      test: {
        files: [{
          "expand": true,
          "cwd": "es6/test/",
          "src": ["**/*.js"],
          "dest": "test/",
          "ext": ".js"
        }]
      }
    },
    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'tap',
          harmony: true,
          timeout: 600000,
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask("build", ["babel"]);
  grunt.registerTask("test", ["build", "mochaTest"]);
  
  grunt.registerTask('default', ['babel']);
};
