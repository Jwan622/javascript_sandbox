var fs = require('fs');
var path = process.argv[2];
var type = "." + process.argv[3];
var reg_exp = new RegExp(type)

var buffer_files = fs.readdir(path, function(err, files) {
  var filtered_files = files.filter(function(element, index, files){
    return reg_exp.test(element)
  })

  for (var i = 0; i < filtered_files.length; i++) {
    console.log(filtered_files[i])
  }
});
