module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
    	options: {
        	sourceMap: true
      },
      	dist: {
        	files: {
          		'css/main.css': 'sass/main.scss'
        }
      }
    },
	watch: {
    	scripts: {
			files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    	} 
	},
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  	
  // Default task(s).
  grunt.registerTask('default', ['sass']);
};