/**
 * node.js的服务
 */

var http = require("http")// 用require 引入一个http 包
	http.createServer(function(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<h1>欢迎大家学习Node.js</h1>');
		res.end('<p>这个是node.js的一个服务很好用方便吧</p>');
		
	}).listen(6565); // 用6565 作为端口来监听
