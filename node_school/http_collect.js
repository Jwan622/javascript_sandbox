var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
  res.pipe(bl(function(err, data) {
    var dataString = data.toString();
    var dataCount = dataString.length
    console.log(dataCount);
    console.log(dataString);
  }));
})

//
// http.get(url, function(res) {
//   res.on('data', function(data) {
//     var dataString = data.toString();
//     var dataCount = dataString.length
//     console.log(dataCount);
//     console.log(dataString);
//   });
// })
