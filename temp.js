var http = require('http');
var port = process.env.port || 3306;
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(port);