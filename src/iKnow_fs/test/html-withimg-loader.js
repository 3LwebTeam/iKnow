var fs = require('fs');
var path = require('path');
var mime = require('mime');
module.exports = function replaceSrc(fileContent) {
    fileContent = JSON.stringify(fileContent);  
    var i = 0;
    fileContent = fileContent.replace(/((\<img[^\<\>]*? src)|(\<link[^\<\>]*? href))[\s]*=[\s]*\\?[\"\']?[^\'\"\<\>\+]+?\\?[\'\"][^\<\>]*?[/]?\>/ig, function(str){
    
    var reg = /\s+((src)|(href))[\s]*=[\s]*\\?[\'\"][^\"\']+\\?[\'\"]/i;
        var regResult = reg.exec(str);
        if(!regResult) return str;
        var attrName = /\w+\s*=\s*/.exec(regResult[0])[0].replace(/\s*=\s*$/, '');
        var imgUrl = regResult[0].replace(/\w+\s*=\s*/, '').replace(/[\\\'\"]/g, '');
        if(!imgUrl) return str; // 避免空src引起编译失败
        if(/^(http(s?):)?\/\//.test(imgUrl)) return str; // 绝对路径的图片不处理
        if(!/\.(jpg|jpeg|png|gif|svg|webp)/i.test(imgUrl)) return str; // 非静态图片不处理
    	imgUrl = imgUrl.replace(/^\s*/g, ''); // 去掉左边空格

        if(!(/^[\.\/]/).test(imgUrl)) {
            imgUrl = './' + imgUrl;
        }
        console.log(imgUrl);
        var base64Data = fs.readFileSync(imgUrl);
        i++;
        console.log(i);
        imgUrl = "data:"+ mime.getType(imgUrl)+";base64," + base64Data.toString('base64');
	   var res = str.replace(reg, " "+attrName+"="+JSON.stringify(imgUrl));
        return res;
    });

    return fileContent;
}
