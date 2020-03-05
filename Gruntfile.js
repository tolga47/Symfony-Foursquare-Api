
module.exports = function (grunt) {


    var alias = require("grunt-browserify-alias");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                srcPrefix: 'assets/vendor',
                destPrefix: 'public/assets'
            },
            scripts: {
                files: {
                    'js/jquery.js': 'jquery/dist/jquery.js',
                    'js/bootstrap.js': 'bootstrap/dist/js/bootstrap.js'
                }
            },
            stylesheets: {
                files: {
                    'css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css'
                }
            }
        },
        browserify: {
            main: {
                src: ['public/assets/js/jquery.js', 'public/assets/js/bootstrap.js', 'public/assets/js/app.js'],
                dest: 'public/assets/js/bundle.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['bowercopy', 'browserify']);

};
