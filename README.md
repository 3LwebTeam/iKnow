项目简介：

	事务管理系统

项目文件目录简介：

config:放置配置文件

	在开发的时候，项目是部署在开发环境中的，所以项目中的一些配置文件，比如：数据库连接配置文件，都是用的开发环境的数据库连接配置，项目要部署上线的时候，我们需要把开发环境的数据库连接配置替换成生产环境的数据库连接配置，所以这个目录可以用来存生产环境的相关配置文件。

dbscripts：开发过程中的脚本文件

	在开发过程中，每次开发过程中涉及到要执行一些脚本，比如：开发过程中，要新建一个表，建表语句就要保存在这个目录里面，待开发完毕上线的时候，就需要在生产环境中执行这个建表语句。

docs: 项目相关文档

	这里存放项目的相关文档，比如：需求说明书，会议纪要，上线手册等
	
src: 项目源码
	

	
	更新日志：
	2018/02/12 09:03        增加swagger模块，用于显示接口文档和接口测试
	2018/03/15 16:05        修改后台使用nodejs实现服务端的功能