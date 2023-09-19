http = require('http');

server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('PoC by GoDiego (<a href=https://hackerone.com/diegobernal>https://hackerone.com/diegobernal</a>)');
    response.end();
});
server.listen(80);
