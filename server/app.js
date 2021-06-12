const http = require('http');
const url = require('url');

const app = http.createServer();
app.on('request', (req, res) => {
    // console.log(req.method);
    // res.end('<h2>hello user</h2>');

    // res.writeHead(500);
    res.writeHead(200,{
        'content-type':'text/html;charset=utf8',
        'hello':'why!',
    });
    // console.log(req.url);
    // console.log(url.parse(req.url,true));
    let {query,pathname} = url.parse(req.url,true);
    if(pathname == '/index' || pathname == '/'){
        res.end('<h2>欢迎' + query.name + '来到首页！</h2>')
    }
    else if(pathname == '/list'){
        res.end('<h2>' + query.name + ', Welcome to list page!</h2>')
    }
    else{
        res.end('<h1>Not found!</h1>')
    }

    if (req.method == 'POST') {
        res.end('post');
    } else if (req.method == 'GET') {
        res.end('get');
    }
    console.log(req.headers['accept']);

});
app.listen(3000);
console.log('网站服务器启动成功！');