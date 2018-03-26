module.exports = function(grunt){
	var cheerio = require('cheerio');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html','*.htm'],
				tasks: ['copyright']
			}
		},
		// copy: {
		// 	html: {
		// 		src: 'index.html',
		// 		dest: 'dist/index.html'
		// 	},
		// 	doc: {
		// 		src: '*.docx',
		// 		dest: 'dist/'
		// 	}
		// },
		pkg: grunt.file.read('index.htm')
	});


	grunt.registerTask('copyright', function(pkg){
		var pkg = grunt.config.get('pkg');

		grunt.log.writeln(pkg);
	});
}