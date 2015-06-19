var fs = require('fs');
var buffer_file = fs.readFileSync(process.argv[2])
var string = buffer_file.toString()
var file_array = string.split("\n")
var newline_count = file_array.length - 1
console.log(newline_count)
