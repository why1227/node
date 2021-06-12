const http = require('http');
const url = require('url');
const querystring = require('querystring');

const app = http.createServer();
app.on('request', (req, res) => {
    res.writeHead(200,{
        'content-type':'text/html;charset=utf8',
    });
    let postData = '';
    // 监听参数传输事件
    req.on('data', (chunk) => postData += chunk);
    // 监听参数传输完毕事件
    req.on('end', () => {
        console.log(querystring.parse(postData));
    });
    res.end('<h1>OK!</h1>');


});
app.listen(3000);
console.log('网站服务器启动成功！');