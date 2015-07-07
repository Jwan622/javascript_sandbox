var net = require('net');
var port = process.argv[2];
var server = net.createServer(function(socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  // effing months in javascript start at 0? what the hell is this?
  var day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var data = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n"
  socket.write(data)
  socket.end();
});

server.listen(port);
