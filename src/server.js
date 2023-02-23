var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, Welcome to DevOps CICD using jenkins and pm2-pm2-pm2");

});

var port = 3000;
server.listen(port);
module.exports = server
console.log("Server is available on Port:", port);
