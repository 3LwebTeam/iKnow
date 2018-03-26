module.exports = function(grunt){
	var cheerio = require('cheerio');
	var html = require('./html-withimg-loader.js');

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html','*.htm'],
				tasks: ['copyright']
			}
		},
		pkg: grunt.file.read('index.htm')
	});


	grunt.registerTask('copyright', function(pkg){
		var pkg = grunt.config.get('pkg');

		grunt.log.writeln(html(pkg));
	});
}


