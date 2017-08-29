 var http = require('http');
var https = require('https');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello travis!');
}).listen(process.env.PORT);


