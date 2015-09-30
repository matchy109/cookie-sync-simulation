var http = require('http');
var server = http.createServer();

server.on('request', doRequest);
server.listen(3000);
console.log('Server running!');

function doRequest(req, res) {

    var cookie = req.headers.cookie;
    res.writeHead(200, {
		'Content-Type': 'text/plain',
    		'Access-Control-Allow-Origin': 'http://www.sandbox-1.com',
                'Access-Control-Allow-Credentials': 'true',
		//'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
    res.write(cookie + '\n');
    res.end();
}
