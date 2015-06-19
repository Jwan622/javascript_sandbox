var fs = require('fs');
var buffer_file = fs.readFile(process.argv[2], function(err, data) {
  if (err) {
    return console.log(err);
  }
  var string = data.toString()
  var file_array = string.split("\n")
  var newline_count = file_array.length - 1
  console.log(newline_count)
})
