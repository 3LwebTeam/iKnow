本项目的功能是将doc文件转化为html格式，并使用dom操作方式提取出里面的每个题目部分存入数据库，与之对应的图片转化为base64编码格式，插入dom中（转化的base64直接替换掉dom中的src里面的url即可）同时保存到数据库里面

构思：使用webpack包进行读写html文件并将文件里的图片转化为base64编码并插入文件的dom元素中。经过cheerio（后端的jquery框架）对文件中的dom元素进行提取整理打包按照题目为单位，一个个存入数据库中。

数据库的格式应该为：
	id    : { type: String, index: true },
    qType : String,   //选择题，填空题或大题
    qStamp  : String,  //题目的编号
    qContent : String,   //题目的内容
    AnsContent: String,   //答案的内容
    notes: String,        //添加笔记


https://blog.aspose.cloud/2014/10/13/use-aspose-for-cloud-node.js-sdk-to-work-with-sections-paragraphs-runs-page-setup-and-fonts-in-word-documents/

在nodejs中调用Aspose for Cloud SDK for NodeJS接口，来将doc文件转化为html格式


https://www.jianshu.com/p/503895d3ffc9
[译]Webpack前端构建集成方案