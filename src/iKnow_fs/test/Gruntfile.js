module.exports = function(grunt){
	

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.file.defaultEncoding = 'GB2312';
	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html','*.htm'],
				tasks: ['copyright']
			}
		},
		htmlmin:{
            options: {
                    removeComments: true, //移除注释
                    removeCommentsFromCDATA: true,//移除来自字符数据的注释
                    collapseWhitespace: true,//无用空格
                    collapseBooleanAttributes: true,//失败的布尔属性
                    removeAttributeQuotes: true,//移除属性引号      有些属性不可移走引号
                    removeRedundantAttributes: true,//移除多余的属性
                    useShortDoctype: true,//使用短的跟元素
                    removeEmptyAttributes: true,//移除空的属性
                    removeOptionalTags: true//移除可选附加标签
                  },
            yasuo:{
                expand: true,
                cwd: 'index', 
                src: ['*.htm'],
                dest: 'yshtml'
            }
        },
		pkg: grunt.file.read('index.htm')
	});

	grunt.registerTask('default',['htmlmin']);
	grunt.registerTask('copyright', function(){
		var cheerio = require('cheerio');
		var htmlWithimg = require('./html-withimg-loader');
		var pkg = grunt.config.get('pkg');
		var html = htmlWithimg(pkg);
		// grunt.log.writeln(html);
		grunt.file.write('copyright.html', html);
	});
}


