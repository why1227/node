"use strict";

var http = require('http');

var url = require('url');

var querystring = require('querystring');

var app = http.createServer();
app.on('request', function (req, res) {
  var postData = ''; // 监听参数传输事件

  req.on('data', function (chunk) {
    return postData += chunk;
  }); // 监听参数传输完毕事件

  req.on('end', function () {
    console.log(querystring.parse(postData));
  });
});
app.listen(3000);
console.log('网站服务器启动成功！');