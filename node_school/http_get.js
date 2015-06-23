var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(data) {
    var data_array = data.split('\n')
    data_array.forEach(function(datum) {
      console.log(datum);
    });
  });
})
