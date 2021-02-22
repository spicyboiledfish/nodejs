const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res) {
    console.log(url.parse(req.url));
    if (req.url === '/favicon.ico') {
        res.writeHead(200);
        res.end();
        return;
    }
    console.log(req.url);
    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html')
        .pipe(res);
}).listen(3000)