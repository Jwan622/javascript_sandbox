var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
var bufferFile = fs.createReadStream(file);

var server = http.createServer(function(req, res) {
  bufferFile.pipe(res)
});

server.listen(port);
