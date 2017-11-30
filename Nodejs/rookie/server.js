var http = require('http');
var url = require('url');

function start() {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;

    console.log(pathname);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('xxxx');
    res.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

module.exports.start = start;
